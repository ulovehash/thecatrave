// Rebuild sitemap.xml with a lastmod that is actually true.
//
//   node scripts/build-sitemap.mjs
//
// The file used to be maintained by hand, and by September 2026 every one of
// its eight dates was stale: the home page still claimed April 2025 after
// months of edits. A lastmod Google cannot trust is worse than none, because
// it learns to ignore the field, so the date now comes from the last commit
// that touched the page's own HTML.
//
// changefreq and priority are deliberately absent. Google ignores both, and
// has said so; the only field it reads here is lastmod.
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import { pages } from '../pages.mjs';

const SITE = 'https://thecatrave.com';

const lastCommit = file => {
  try {
    const out = execFileSync('git', ['log', '-1', '--format=%cI', '--', file], { encoding: 'utf8' }).trim();
    if (out) return out;
  } catch {}
  // never committed yet: fall back to the file's own timestamp
  return new Date(fs.statSync(file).mtime).toISOString();
};

const entries = pages
  .filter(p => p.file && fs.existsSync(p.file))
  .map(p => ({
    loc: `${SITE}${p.path}`,
    lastmod: lastCommit(p.file).replace(/\+00:00$/, '+00:00'),
  }));

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
console.log(`sitemap.xml: ${entries.length} urls`);
