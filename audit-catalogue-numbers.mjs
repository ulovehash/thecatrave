// A catalogue total quoted on a page has to be the catalogue's size today,
// unless the sentence dates it. 22 pages said 62,877 for a week after a refresh
// made it 62,824 (defects.json: catalogue-numbers-unchecked). Prose that states
// the size writes {{catalogue-sets}} and gets the number from catalogue.mjs; a
// measurement keeps its typed total only with its date ("as of September 2026").
//
// It reads the built pages, not the drafts, so a number typed into a builder, a
// draft or a translation is caught alike. Counts smaller than the whole (sets
// per broadcaster, festival or genre) are snapshots and are not checked here.
import fs from 'node:fs';
import {files} from './pages.mjs';
import {catalogueSize, CATALOGUE_TOKEN} from './catalogue.mjs';

// A total is a five-digit number within a fifth of the real size, so 20,000
// tickets or a 70,000 crowd in a festival guide is not mistaken for one.
const NUMBER = /\b\d{2}[,.   ]\d{3}\b/g;
const ABOUT_CATALOGUE = /selector|catalog|katalog/i;
const DATED = /\b20\d\d\b/;
// A part of the whole, not the whole: "60,609 of 62,824 sets tagged", or a
// count of something else that happens to be the same size, "65,308 likes".
const PART = /^\s*(?:(?:DJ[- ])?sets?\s+)?(?:of|von|sur)\s+\d|^\s*(?:likes|views|Likes|Aufrufe|vues|j[’']aime)\b/;

const visibleText = html => html
  .replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/gi, ' ')
  .replace(/<[^>]+>/g, ' ')
  .replace(/&nbsp;/g, ' ')
  .replace(/&#8239;/g, ' ')
  .replace(/\s+/g, ' ');

const failures = [];
for (const file of [...files, 'feed.xml']) {
  const html = fs.readFileSync(file, 'utf8');
  if (html.includes(CATALOGUE_TOKEN)) failures.push(`${file}: ${CATALOGUE_TOKEN} left unreplaced`);
  for (const sentence of visibleText(html).split(/(?<=[.!?])\s+/)) {
    if (!ABOUT_CATALOGUE.test(sentence) || DATED.test(sentence)) continue;
    for (const match of sentence.matchAll(NUMBER)) {
      const n = Number(match[0].replace(/\D/g, ''));
      if (Math.abs(n - catalogueSize) > catalogueSize / 5 || n === catalogueSize) continue;
      if (PART.test(sentence.slice(match.index + match[0].length))) continue;
      failures.push(`${file}: "${match[0]}" in "${sentence.trim().slice(0, 160)}"`);
    }
  }
}

if (failures.length) {
  console.error(`Catalogue numbers audit failed: the catalogue holds ${catalogueSize} sets.`);
  for (const failure of failures) console.error(`  ${failure}`);
  console.error(`  Write ${CATALOGUE_TOKEN} for the live size, or date a measured total ("as of September 2026").`);
  process.exit(1);
}
console.log(`Catalogue numbers audit passed: every quoted total is ${catalogueSize} or dated.`);
