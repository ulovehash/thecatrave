// Redirect stubs for pages taken down or moved. GitHub Pages has no server
// redirects, so each stub is a noindex page with a canonical and an instant
// refresh to its new home. Stubs are not in pages.mjs, so no audit, sitemap or
// card treats them as pages; audit-site-components.mjs lists them by name.
import fs from 'node:fs';

const moved = [
  // Taken down 2026-11-12 while the owner pitches the Selector to DJ Mag. The
  // builder, draft, keywords/parked and media/parked are kept for when it comes
  // back; the nightclubs guide (en, de, es drafts) lost its link to it then, in
  // the intro sentence on the best clubs in Europe guide.
  {
    file: 'why-dj-mag-top-100-never-changes.html',
    title: 'Moved: Why the DJ Mag Top 100 Barely Changes',
    to: 'https://thecatrave.com/best-dj-sets-of-all-time',
  },
];

for (const {file, title, to} of moved) {
  fs.writeFileSync(file, `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>${title}</title><meta name="robots" content="noindex,follow"><link rel="canonical" href="${to}"><meta http-equiv="refresh" content="0; url=${to}"></head><body><p>This page has moved to <a href="${to}">${to}</a>.</p></body></html>\n`);
  console.log(`Wrote ${file} as a redirect stub`);
}
