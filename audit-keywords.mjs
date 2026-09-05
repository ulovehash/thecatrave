// Every term a page claims to target must actually appear on it.
//
// This exists because the research step failed silently once. The find-new-music
// article shipped aimed at "find new music" (900 a month worldwide) while
// "how to find new music" (1,400) had never been looked up, because the
// candidate list was written from memory rather than pulled from Ahrefs. A
// first pass of the same article was missing nine of its own fifteen terms,
// because rewriting a heading to read better had quietly dropped the phrase.
//
// See keywords/README.md for where the lists have to come from, and WRITING.md for the rule
// this enforces.
import fs from 'node:fs';
import path from 'node:path';

const DIR = 'keywords';
const failures = [];
let checked = 0, terms = 0;

const text = html => html
  .replace(/<script[\s\S]*?<\/script>/g, ' ')
  .replace(/<style[\s\S]*?<\/style>/g, ' ')
  .replace(/<[^>]+>/g, ' ')
  .replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'")
  .replace(/[\u2010-\u2015-]/g, ' ')   // "2-step" and "2 step" are the same query
  .replace(/\s+/g, ' ')
  .toLowerCase();

for (const file of fs.readdirSync(DIR).filter(f => f.endsWith('.json'))) {
  const map = JSON.parse(fs.readFileSync(path.join(DIR, file), 'utf8'));
  if (!fs.existsSync(map.page)) { failures.push(`${file}: page ${map.page} does not exist`); continue; }
  const body = text(fs.readFileSync(map.page, 'utf8'));
  checked += 1;
  for (const {term, volume} of map.terms) {
    terms += 1;
    const needle = term.toLowerCase().replace(/[\u2010-\u2015-]/g, ' ').replace(/\s+/g, ' ');
    if (!body.includes(needle)) failures.push(`${map.page}: "${term}" (${volume}/mo) is targeted but absent`);
  }
}

if (failures.length) {
  console.error(`Keyword audit failed (${failures.length}):`);
  failures.forEach(f => console.error(`- ${f}`));
  process.exit(1);
}
console.log(`Keyword audit passed: ${terms} terms across ${checked} page(s).`);
