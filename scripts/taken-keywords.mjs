// Writes TAKEN-KEYWORDS.md: every term an existing guide is written for, from
// keywords/*.json, as one plain list. Topic research reads it first so a term
// a guide already targets is never researched again (owner, 2026-09-10).
import fs from 'node:fs';

const out = ['# Taken keywords', '', 'Every term an existing guide is already written for, pulled from `keywords/*.json`. Check this list before researching a new article. A term here is taken: do not research it again.', '', 'Regenerate: `node scripts/taken-keywords.mjs`', ''];
for (const file of fs.readdirSync('keywords').filter(f => f.endsWith('.json')).sort()) {
  const map = JSON.parse(fs.readFileSync(`keywords/${file}`, 'utf8'));
  out.push(`## ${map.page}`, '', ...map.terms.map(t => `- ${t.term}`), '');
}
fs.writeFileSync('TAKEN-KEYWORDS.md', out.join('\n'));
console.log('Wrote TAKEN-KEYWORDS.md');
