// Rebuild sitemap.xml with a lastmod that is actually true.
//
//   node scripts/build-sitemap.mjs            normal build
//   node scripts/build-sitemap.mjs --rebuild  recompute every date from git history
//
// The file used to be maintained by hand, and by September 2026 every one of
// its eight dates was stale: the home page still claimed April 2025 after
// months of edits. The fix then was to take the last commit that touched the
// page's HTML. That was wrong in the other direction: every page is generated,
// so adding one guide rewrites the read-next cards, language switcher and nav
// on all the others, and by October 2026 all 188 URLs claimed 1-2 October.
// Google learns to ignore a lastmod that moves on every build, and it had
// stopped crawling new URLs: 92% of its requests were refreshes.
//
// So lastmod is now the last time the page's own content changed. The content
// is the visible text of <main>, cut before the read-next block, with tags,
// scripts and whitespace removed. Its hash and date live in
// sitemap-lastmod.json; the date only moves when the hash does.
//
// changefreq and priority are deliberately absent. Google ignores both, and
// has said so; the only field it reads here is lastmod.
import { execFileSync } from 'node:child_process';
import crypto from 'node:crypto';
import fs from 'node:fs';
import { pages } from '../pages.mjs';

const SITE = 'https://thecatrave.com';
const LEDGER = 'sitemap-lastmod.json';
const git = args => execFileSync('git', args, { encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 });

// The page's own content: <main>, without the cross-site blocks that change
// whenever any other page is added.
export const contentHash = html => {
  let main = html.match(/<main[\s\S]*?<\/main>/i)?.[0] ?? html;
  main = main.split(/<section class="read-next"/i)[0];
  const text = main
    .replace(/<(script|style|noscript)[\s\S]*?<\/\1>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z#0-9]+;/gi, ' ')
    // The Selector's catalogue count (62,824 / 62 824 / 62.824) is quoted on
    // ~60 pages and moves on every catalogue refresh. That is not an edit to
    // the page, so numbers of five digits or more do not count. Years do.
    .replace(/\d{1,3}(?:[,.\s  ]\d{3})+|\d{5,}/g, '#')
    .replace(/\s+/g, ' ')
    .trim();
  return crypto.createHash('sha1').update(text).digest('hex').slice(0, 16);
};

// Walk a file's history newest-first; the content date is the oldest commit
// in the newest run of identical content.
const dateFromHistory = (file, currentHash) => {
  let commits;
  try { commits = git(['log', '--format=%H %cI', '--', file]).trim().split('\n').filter(Boolean); }
  catch { commits = []; }
  let date = null;
  for (const line of commits) {
    const [sha, iso] = line.split(' ');
    let html;
    try { html = git(['show', `${sha}:${file}`]); } catch { break; }
    if (contentHash(html) !== currentHash) break;
    date = iso;
  }
  return date;
};

const rebuild = process.argv.includes('--rebuild');
const ledger = !rebuild && fs.existsSync(LEDGER) ? JSON.parse(fs.readFileSync(LEDGER, 'utf8')) : {};
const now = new Date().toISOString().replace(/\.\d+Z$/, '+00:00');

const entries = pages
  .filter(p => p.file && fs.existsSync(p.file))
  .map(p => {
    const hash = contentHash(fs.readFileSync(p.file, 'utf8'));
    const known = ledger[p.path];
    let lastmod;
    if (known && known.hash === hash) lastmod = known.lastmod;
    else if (rebuild || !known) lastmod = dateFromHistory(p.file, hash) ?? now;
    else lastmod = now;
    ledger[p.path] = { hash, lastmod };
    return { loc: `${SITE}${p.path}`, lastmod };
  });

// drop pages that no longer exist
const live = new Set(pages.map(p => p.path));
for (const k of Object.keys(ledger)) if (!live.has(k)) delete ledger[k];

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
console.log(`sitemap.xml: ${entries.length} urls`);
