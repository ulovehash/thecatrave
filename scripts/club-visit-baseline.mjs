// Adds a translated club page to content/club-visit-preservation.json.
//
//   node scripts/club-visit-baseline.mjs <new page.html> <sibling page.html>
//   node scripts/club-visit-baseline.mjs de/beste-clubs-der-welt.html es/mejores-discotecas-del-mundo.html
//
// Run it after the page's first build. A translation keeps the sibling's media
// keys and section IDs, so those are copied from the sibling's entry; title,
// canonical, description, h1 and published date are read from the built HTML
// with the same patterns audit-club-visits.mjs checks. German batch 1 wrote
// these entries by hand from the HTML, at about ten calls per club page.
import fs from 'node:fs';

const [file, siblingFile] = process.argv.slice(2);
if (!file || !siblingFile) {
  console.error('usage: node scripts/club-visit-baseline.mjs <new page.html> <sibling page.html>');
  process.exit(2);
}
const store = 'content/club-visit-preservation.json';
const baseline = JSON.parse(fs.readFileSync(store, 'utf8'));
const sibling = baseline[siblingFile];
if (!sibling) { console.error(`${siblingFile} has no entry in ${store}`); process.exit(1); }
if (!fs.existsSync(file)) { console.error(`${file} is not built yet: build the page first`); process.exit(1); }

const html = fs.readFileSync(file, 'utf8');
const entry = {
  title: html.match(/<title>(.*?)<\/title>/)?.[1],
  canonical: html.match(/<link rel="canonical" href="([^"]+)"/)?.[1],
  description: html.match(/<meta name="description" content="([^"]+)"/)?.[1],
  h1: html.match(/<h1[^>]*>(.*?)<\/h1>/)?.[1],
  published: html.match(/<meta property="article:published_time" content="([^"]+)"/)?.[1],
  ids: sibling.ids,
  media: sibling.media,
};
// The read-next cards come from each language's catalogue, so their thumbnails
// are the sibling's, not the article's: leave them out of the new entry.
const siblingHtml = fs.existsSync(siblingFile) ? fs.readFileSync(siblingFile, 'utf8') : '';
const readNext = siblingHtml.match(/<section[^>]*class="[^"]*read-next[\s\S]*?<\/section>/)?.[0] || '';
entry.media = entry.media.filter(src => !readNext.includes(`="${src}"`) && !readNext.includes(` ${src} `) || html.includes(`="${src}"`));
const missing = Object.entries(entry).filter(([, v]) => v === undefined).map(([k]) => k);
const ids = new Set([...html.matchAll(/\sid="([^"]+)"/g)].map(m => m[1]));
const lostIds = entry.ids.filter(id => !ids.has(id));
const lostMedia = entry.media.filter(src => !html.includes(`="${src}"`));
if (missing.length || lostIds.length || lostMedia.length) {
  if (missing.length) console.error(`not found in ${file}: ${missing.join(', ')}`);
  if (lostIds.length) console.error(`sibling IDs missing from ${file}: ${lostIds.join(', ')}`);
  if (lostMedia.length) console.error(`sibling media missing from ${file}: ${lostMedia.join(', ')}`);
  console.error('Nothing written: the translation should keep the sibling\'s IDs and media.');
  process.exit(1);
}
const existed = file in baseline;
baseline[file] = entry;
fs.writeFileSync(store, JSON.stringify(baseline, null, 2) + '\n');
console.log(`${existed ? 'updated' : 'added'} ${file}: ${entry.ids.length} ids, ${entry.media.length} media from ${siblingFile}`);
