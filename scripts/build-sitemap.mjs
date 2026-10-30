// Rebuild sitemap.xml with a lastmod that is actually true.
//
//   node scripts/build-sitemap.mjs            normal build
//   node scripts/build-sitemap.mjs --rebuild  recompute every date from git history
//
// History. The file used to be maintained by hand, and by September 2026 every
// one of its eight dates was stale. Taking the last commit that touched each
// page's HTML was wrong the other way: every page is generated, so adding one
// guide rewrote the read-next cards and nav on all the others, and by October
// 2026 all 188 URLs claimed 1-2 October. Google learns to ignore a lastmod that
// moves on every build, and it had stopped crawling new URLs: 92% of its
// requests were refreshes. A hash of <main> fixed the read-next case but not
// sitewide passes: on 8 October 2026 lastmod moved on 159 of 248 URLs in a day.
//
// Now lastmod moves only on a significant edit to the page's own editorial
// text, as defined in content-fingerprint.mjs: asides (Bandcamp block, own
// tracks and sets, listening and video panels) are not content, text units
// repeated on MIN_SHARED or more pages are boilerplate, and the change must
// reach a quarter of the words, compared with the version that set the
// current lastmod. Small edits accumulate against that baseline. Replaying the
// 8 October edits under this rule moves 26 dates instead of 159.
//
// changefreq and priority are deliberately absent. Google ignores both.
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import { pages } from '../pages.mjs';
import { fingerprint, compare } from './content-fingerprint.mjs';

const SITE = 'https://thecatrave.com';
const LEDGER = 'sitemap-lastmod.json';
const MIN_SHARED = 5;
const git = args => execFileSync('git', args, { encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 });

const rebuild = process.argv.includes('--rebuild');
const ledger = !rebuild && fs.existsSync(LEDGER) ? JSON.parse(fs.readFileSync(LEDGER, 'utf8')) : {};
const now = new Date().toISOString().replace(/\.\d+Z$/, '+00:00');

const live = pages.filter(p => p.file && fs.existsSync(p.file));
const htmlOf = new Map(live.map(p => [p.path, fs.readFileSync(p.file, 'utf8')]));
const raw = new Map(live.map(p => [p.path, fingerprint(htmlOf.get(p.path))]));

// boilerplate: a unit or H2 that appears on MIN_SHARED or more pages
const freq = new Map();
for (const fp of raw.values()) {
  const seen = new Set([...fp.units.split(' ').map(u => u.split('.')[0]), ...fp.h2.split(' ')]);
  for (const h of seen) if (h) freq.set(h, (freq.get(h) ?? 0) + 1);
}
const own = fp => ({
  units: fp.units.split(' ').filter(u => u && (freq.get(u.split('.')[0]) ?? 0) < MIN_SHARED).join(' '),
  h2: fp.h2.split(' ').filter(h => h && (freq.get(h) ?? 0) < MIN_SHARED).join(' '),
});

// Walk a file's history newest-first: the content date is the oldest commit
// whose text is not significantly different from the current one.
const dateFromHistory = (file, current) => {
  let commits;
  try { commits = git(['log', '--format=%H %cI', '--', file]).trim().split('\n').filter(Boolean); }
  catch { commits = []; }
  let date = null;
  for (const line of commits) {
    const [sha, iso] = line.split(' ');
    let html;
    try { html = git(['show', `${sha}:${file}`]); } catch { break; }
    if (compare(own(fingerprint(html)), current).significant) break;
    date = iso;
  }
  return date;
};

let moved = 0;
const entries = live.map(p => {
  const cur = own(raw.get(p.path));
  const known = ledger[p.path];
  let entry;
  if (known && known.units !== undefined) {
    // baseline stays until a significant edit
    entry = compare(known, cur).significant ? { lastmod: now, ...cur } : known;
    if (entry !== known) moved++;
  } else if (known) {
    // one-time migration from the old hash ledger: keep the date, set the baseline
    entry = { lastmod: known.lastmod, ...cur };
  } else {
    entry = { lastmod: dateFromHistory(p.file, cur) ?? now, ...cur };
  }
  ledger[p.path] = { lastmod: entry.lastmod, units: entry.units, h2: entry.h2 };
  return { loc: `${SITE}${p.path}`, lastmod: entry.lastmod, file: p.file };
});

// drop pages that no longer exist
const livePaths = new Set(live.map(p => p.path));
for (const k of Object.keys(ledger)) if (!livePaths.has(k)) delete ledger[k];

// a visible dateModified newer than lastmod means a page claims an update the
// sitemap does not: the generator's date was bumped for a small edit
const stale = entries.filter(e => {
  const d = htmlOf.get(e.loc.slice(SITE.length))?.match(/"dateModified":"(\d{4}-\d{2}-\d{2})/)?.[1];
  // a calendar date against a UTC timestamp: allow for the time zone
  return d && Date.parse(`${d}T00:00:00Z`) - Date.parse(e.lastmod) > 36 * 3600e3;
});

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

${entries.map(e => `<url>\n  <loc>${e.loc}</loc>\n  <lastmod>${e.lastmod}</lastmod>\n</url>`).join('\n\n')}

</urlset>
`;
fs.writeFileSync('sitemap.xml', xml);
fs.writeFileSync(LEDGER, JSON.stringify(Object.fromEntries(Object.entries(ledger).sort()), null, 1) + '\n');
console.log(`sitemap.xml: ${entries.length} urls, ${moved} lastmod moved by a significant edit`);
if (stale.length) console.warn(`dateModified newer than lastmod (small edit, date bumped by hand?): ${stale.map(e => e.file).join(', ')}`);
