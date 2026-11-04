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
    rule: 'No catalogue sourcing filler or internal keyword-tool notes (AGENTS.md section 4)',
    re: /From this site(?:'|’|&#39;)s catalogue of recorded DJ sets|Aus dem Katalog (?:aufgenommener|aufgezeichneter) DJ-Sets (?:auf )?dieser Seite|(?:Tiré|Issu) du catalogue de (?:DJ sets|sets de DJ|sets DJ) enregistrés de ce site|Video embeds? (?:is|are) drawn from this site|Set counts[^.]{0,100}are measured from this site|selector-data\.json|Search demand: Google Ads|few people search for|search demand to the clubs/i,
  },
  {
    rule: 'No internal research-process commentary in published articles (AGENTS.md section 4)',
    re: /\boEmbed\b|fact-check ledger|opened directly this session|found this session|Every date below (?:comes from|was checked)|Where (?:the )?sources disagree, the (?:page|section)|Planning links checked|Jedes Datum unten stammt aus einer Quelle|Chaque date ci-dessous vient d'une source|(?:pages|Seiten) (?:were checked|wurden.{0,45}geprüft)|pages.{0,35}ont été vérifiées|researched (?:in depth|to the same depth)|(?:tief|gründlich) recherchiert|étudié.{0,30}(?:profondeur|en profondeur)/i,
  },
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
    re: /\bfull DJ sets?\b|\bone complete set\b|\bthe whole set\b|komplette[sn]? DJ-Sets?|vollständige[sn]? (?:DJ-)?Sets?|\bDJ sets? complets?\b|\bun set complet\b|\bconcerts entiers\b|\bsesiones? (?:de DJ )?(?:completas?|enteras?|íntegras?)\b|\bsets? (?:completos?|enteros?|íntegros?)\b|\bcomplete recordings?\b|complete piece of programming|full-hour attention|can be played in full/i,
  },
  {
    rule: 'A listening card describes the music, never its own placement or what it is not (AGENTS.md section on own music, owner 2026-11-04)',
    re: /placed here|sits here because|(?:is|are|kept) here because|It belongs because|(?:est|sont|figure|figurent) ici parce|est là parce qu|fits here because|belongs? here (?:because|as)|is here as proof|discussed on this page|closest match to the|listening route from|as a personal route|personal after-hours route|without (?:claiming to reproduce|pretending to stand in|standing in for)|rather than a claim to represent|not a substitute for the|since you are here|to listen to between festivals|for a break from the festival|Not what the main stages play|not a 90s record|, made now\b|made now:|, neu gemacht:|, refait :|embedded at the exact point|so the evidence is a set|after the article(?:'|’)s main answer|(?:steht|stehen) hier, weil|steht hier als|stehen hier als|passt hierher|gehört hierher|nach der Hauptantwort|für eine Pause vom Festival|zwischen den Festivals\.|Nicht das, was auf den großen Bühnen|wo du schon da bist|placé ici|a sa place ici|trouve sa place ici|figurent ici comme|réponse principale de l|pause dans le festival|entre deux festivals\.|Loin des grandes scènes|puisque vous êtes déjà là|está aquí (?:porque|como)|aparecen aquí como|tiene su lugar aquí|respuesta principal del artículo|descansar del festival|para escuchar entre festivales|Lejos de los grandes escenarios|colocado en el momento exacto/i,
  },
  {
    rule: 'No "ultimate guide" opener (humanizer pass, 2026-09-23)',
    re: /Welcome to the ultimate guide|Bienvenue dans le grand guide|Willkommen beim großen Guide|Te damos la bienvenida a la guía definitiva|Bienvenido a la guía definitiva/i,
  },
];

const ROOTS = ['.', 'de', 'fr', 'es'];
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
console.log(`Banned phrase audit passed: ${RULES.length} rules, ${pages.length} pages in English, German, French and Spanish.`);
