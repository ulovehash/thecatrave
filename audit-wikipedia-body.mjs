// Fails the build when a guide's body names Wikipedia as its source, in any of
// the four languages (ARTICLE-EDITORIAL-REVIEW.md section 0: state the fact,
// list the article under Sources). 113 such sentences on 51 pages shipped
// before this audit existed, because the review grep only ran by hand
// (defects.json: wikipedia-named-in-live-guide-bodies).
//
// Checked: visible body text. Not checked: the sources section, image captions
// (credits), <head>, scripts and styles, where naming Wikipedia is correct.
import fs from 'node:fs';
import path from 'node:path';

const failures = [];
let pages = 0;
for (const dir of ['.', 'de', 'fr', 'es']) {
  for (const file of fs.readdirSync(dir).filter(f => f.endsWith('.html'))) {
    const page = path.join(dir, file);
    pages++;
    const body = fs.readFileSync(page, 'utf8')
      .replace(/<head[\s\S]*?<\/head>/i, ' ')
      .replace(/<script[\s\S]*?<\/script>/gi, ' ')
      .replace(/<style[\s\S]*?<\/style>/gi, ' ')
      .replace(/<section[^>]*sources-section[\s\S]*?<\/section>/gi, ' ')
      .replace(/<figcaption[\s\S]*?<\/figcaption>/gi, ' ')
      .replace(/<[^>]+>/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/\s+/g, ' ');
    for (const m of body.matchAll(/Wikip[eé]dia/g)) {
      failures.push(`${page}: …${body.slice(Math.max(0, m.index - 80), m.index + 60).trim()}…`);
    }
  }
}

if (failures.length) {
  console.error(`Wikipedia named in guide body (${failures.length}): state the fact, keep Wikipedia in Sources.`);
  for (const f of failures) console.error('  ' + f);
  process.exit(1);
}
console.log(`Wikipedia body audit passed: no guide body names Wikipedia as its source, ${pages} pages in English, German, French and Spanish.`);
