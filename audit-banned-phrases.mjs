// Fails the build when a page says something the owner has ruled out, in any
// of the three languages. Every rule here was broken on a live page and fixed
// by hand; this file is what stops the fix from quietly coming undone the next
// time a guide is drafted or translated. The rules themselves are explained in
// WRITING.md and ARTICLE-EDITORIAL-REVIEW.md; each entry names its source.
//
// Only the visible text of built pages is checked (no scripts, no attributes),
// so a rule can be quoted in a Markdown review file without tripping it.
import fs from 'node:fs';
import path from 'node:path';

const RULES = [
  {
    rule: 'No genre is "what this site cares about most" (WRITING.md)',
    re: /cares about most|der (?:diese|dieser) Seite am meisten (?:interessiert|bedeutet)|compte le plus pour ce site/i,
  },
  {
    rule: 'No aside to listeners from breaks, jungle or drum and bass (WRITING.md, festivals-series.md)',
    re: /(?:listener|someone) who comes? from breaks|die von Breaks, Jungle oder|vient des breaks, de la jungle|quand on vient des breaks/i,
  },
  {
    rule: 'No "the music this site comes from" (WRITING.md)',
    re: /this site's music|the music this site comes from|die Musik dieser Seite|Musik, aus der diese Seite kommt|la musique de ce site|la musique d’où vient ce site/i,
  },
  {
    rule: 'No drum and bass line in a Bandcamp card tying a festival to the owner\'s music (WRITING.md)',
    re: /same breaks and bass lineage as my own music|derselben Linie (?:von|aus) Breaks und Bass|même lignée de breaks et de basses/i,
  },
  {
    rule: 'A DJ set is never "full" (WRITING.md)',
    re: /\bfull DJ sets?\b|\bone complete set\b|\bthe whole set\b|komplette[sn]? DJ-Sets?|vollständige[sn]? (?:DJ-)?Sets?|\bDJ sets? complets?\b|\bun set complet\b|\bconcerts entiers\b/i,
  },
  {
    rule: 'No "ultimate guide" opener (humanizer pass, 2026-09-23)',
    re: /Welcome to the ultimate guide|Bienvenue dans le grand guide|Willkommen beim großen Guide/i,
  },
];

const ROOTS = ['.', 'de', 'fr'];
const pages = ROOTS.flatMap(dir =>
  fs.readdirSync(dir)
    .filter(file => file.endsWith('.html'))
    .map(file => path.join(dir, file)));

const text = html => html
  .replace(/<script[\s\S]*?<\/script>/gi, ' ')
  .replace(/<style[\s\S]*?<\/style>/gi, ' ')
  .replace(/<[^>]+>/g, ' ')
  .replace(/&nbsp;|&#160;/g, ' ')
  .replace(/&amp;/g, '&')
  .replace(/&rsquo;|&#8217;/g, '’')
  .replace(/\s+/g, ' ');

const failures = [];
for (const page of pages) {
  const body = text(fs.readFileSync(page, 'utf8'));
  for (const {rule, re} of RULES) {
    const m = body.match(re);
    if (m) {
      const at = body.indexOf(m[0]);
      failures.push(`${page}: ${rule}\n      …${body.slice(Math.max(0, at - 60), at + m[0].length + 60).trim()}…`);
    }
  }
}

if (failures.length) {
  console.error(`Banned phrase audit failed (${failures.length}):`);
  for (const f of failures) console.error('  ' + f);
  process.exit(1);
}
console.log(`Banned phrase audit passed: ${RULES.length} rules, ${pages.length} pages in English, German and French.`);
