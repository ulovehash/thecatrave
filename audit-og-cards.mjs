// img/og/articles.jpg is a wall of the newest guides' covers, drawn by
// scripts/build-og-cards.py only when someone runs it. Adding a guide does not
// make anyone run it, so the card went stale unnoticed (defects.json:
// articles-card-stale-after-new-guide). The script records the covers it drew
// in scripts/og-articles-covers.json; this compares that record with the
// covers the card should show now, on every build.
import fs from 'node:fs';
import {allArticlesNewestFirst} from './home-articles.mjs';

const RECORD = 'scripts/og-articles-covers.json';
const COUNT = 9;
const REDRAW = 'python3 scripts/build-og-cards.py articles';

const expected = allArticlesNewestFirst('en')
  .map(article => article.image)
  .filter(image => fs.existsSync(image))
  .slice(0, COUNT);

if (!fs.existsSync(RECORD)) {
  console.error(`OG card audit failed: ${RECORD} is missing. Run: ${REDRAW}`);
  process.exit(1);
}

const drawn = JSON.parse(fs.readFileSync(RECORD, 'utf8'));
if (JSON.stringify(drawn) !== JSON.stringify(expected)) {
  const missing = expected.filter(image => !drawn.includes(image));
  const extra = drawn.filter(image => !expected.includes(image));
  console.error('OG card audit failed: img/og/articles.jpg no longer shows the newest guides.');
  if (missing.length) console.error(`  missing: ${missing.join(', ')}`);
  if (extra.length) console.error(`  should drop: ${extra.join(', ')}`);
  if (!missing.length && !extra.length) console.error('  same covers, different order');
  console.error(`  Run: ${REDRAW}`);
  process.exit(1);
}

console.log(`OG card audit passed: articles card shows the ${expected.length} newest guides.`);
