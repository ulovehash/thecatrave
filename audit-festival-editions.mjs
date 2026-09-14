// Every festival guide carries its next edition under a heading with the year
// (festival-editions.mjs). This fails when a page has lost that heading, and
// reminds, without failing, when an edition has ended or its dates are still
// unannounced, so a stale year prints on every build until someone moves it on.
import fs from 'node:fs';
import {festivalEditions} from './festival-editions.mjs';

const failures = [];
const reminders = [];
const today = new Date(new Date().toISOString().slice(0, 10));

for (const {page, heading, ends} of festivalEditions) {
  const html = fs.readFileSync(page, 'utf8');
  const headings = [...html.matchAll(/<h[23][^>]*>([\s\S]*?)<\/h[23]>/g)].map(m => m[1].replace(/<[^>]+>/g, '').replace(/&amp;/g, '&'));
  if (!headings.some(text => text.includes(heading))) failures.push(`${page}: no heading contains "${heading}"`);
  if (ends === null) {
    reminders.push(`${page}: "${heading}" dates not announced yet; check the official site`);
  } else {
    const days = Math.round((today - new Date(ends)) / 86400000);
    if (days > 0) reminders.push(`${page}: "${heading}" ended ${days} day(s) ago; move the block and festival-editions.mjs to the next edition`);
  }
}

for (const line of reminders) console.log(`  refresh: ${line}`);
if (failures.length) {
  console.error(failures.map(f => `  ✗ ${f}`).join('\n'));
  process.exit(1);
}
console.log(`Festival editions audit passed: ${festivalEditions.length} guide(s), ${reminders.length} reminder(s).`);
