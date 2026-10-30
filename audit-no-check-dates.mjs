// A live page states a fact; it does not say when somebody looked. "Last checked
// 8 October 2026" tells a reader seven months later that the page has gone stale
// (defects.json: dated-checked-stamps-on-live-pages). Re-check the fact and state
// it, or write it so it does not depend on the day it was read.
//
// It reads the built pages, not the drafts, so a stamp typed into a builder, a
// draft, a translation or a shared component is caught alike.
import fs from 'node:fs';
import {files} from './pages.mjs';

const MONTH = '(?:January|February|March|April|May|June|July|August|September|October|November|December'
  + '|Januar|Februar|März|Mai|Juni|Juli|Oktober|Dezember'
  + '|janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre'
  + '|enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)';
const DATE = `(?:\\d{1,2}\\.?(?:er)?\\s+(?:de\\s+)?${MONTH}(?:\\s+(?:de\\s+)?20\\d\\d)?|${MONTH}\\s+\\d{1,2},?(?:\\s+20\\d\\d)?|${MONTH}\\s+(?:de\\s+)?20\\d\\d)`;

const STAMPS = [
  // en
  new RegExp(`\\b(?:last )?(?:checked|read|verified|accessed|retrieved|reviewed|updated)(?: again)? (?:on|in) ${DATE}`, 'i'),
  new RegExp(`\\b(?:as of|as at) (?:${DATE}|20\\d\\d\\b)`, 'i'),
  /\bat the time of writing\b/i,
  /\bwhen (?:this|the) (?:page|guide|article) was (?:last )?(?:checked|reviewed|written)\b/i,
  /\b(?:this|the) (?:page|guide|section|article) (?:is|will be) updated\b/i,
  /\banything read for this guide\b/i,
  new RegExp(`\\b(?:snapshot|figures) (?:from|of) ${DATE}|\\b${MONTH} 20\\d\\d (?:snapshot|figures)\\b`, 'i'),
  // de
  new RegExp(`\\b(?:geprüft|gelesen|abgerufen|aufgerufen) am ${DATE}`, 'i'),
  new RegExp(`\\bStand(?: vom)? (?:${DATE}|20\\d\\d\\b(?! \\w+ (?:das|die|der)\\b))`),
  /\b(?:bei der (?:letzten )?Prüfung|als diese Seite geprüft|als dieser Guide)\b/i,
  /\b(?:zum Zeitpunkt (?:dieses Textes|des Schreibens)|beim Schreiben|wird aktualisiert, sobald)\b/i,
  /\bMomentaufnahme\b/i,
  // fr
  new RegExp(`\\b(?:consulté|lu|vérifié)e?s? le ${DATE}`, 'i'),
  new RegExp(`\\b(?:lors de la (?:dernière )?vérification|relevé de ${DATE})`, 'i'),
  /\b(?:quand|lorsque|au moment où) (?:cette page|ce guide) (?:a été|était) (?:vérifié|écrit)/i,
  /\b(?:au moment où ces lignes|au moment de l'écriture|au moment de l’écriture|lors de la consultation)\b/i,
  /\b(?:ce guide|cette page) est mise? à jour\b/i,
  // es
  new RegExp(`\\b(?:leíd|consultad|revisad)[oa]s? el ${DATE}`, 'i'),
  new RegExp(`\\ba fecha de ${DATE}`, 'i'),
  new RegExp(`(?<!\\p{L})a \\d{1,2} de ${MONTH}(?: de 20\\d\\d)?(?!\\p{L})`, 'iu'),
  new RegExp(`(?<!\\p{L})(?:cifras|chiffres|figures|Zahlen) (?:de|vom|from) ${MONTH}`, 'iu'),
  new RegExp(`(?<!\\p{L})(?:in|en|im) ${MONTH} (?:de )?20\\d\\d (?:no se hab|n'avai|had not|hatten|war noch)`, 'iu'),
  new RegExp(`(?<!\\p{L}|\\d{4} )a ${MONTH} de 20\\d\\d(?!\\p{L})`, 'iu'),
  /(?<!\p{L})(?:al consultarl[oa]s?|cuando se (?:revisó|escribió|verificó|comprobó|consultó|consultaron)|páginas leídas|página de Q-dance leída)(?!\p{L})/iu,
  /(?<!\p{L})(?:esta guía|esta página) se actualiza(?!\p{L})/iu,
];

const visibleText = html => html
  .replace(/<!--[\s\S]*?-->/g, ' ')
  .replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/gi, ' ')
  .replace(/<[^>]+>/g, ' ')
  .replace(/&nbsp;|&#8239;/g, ' ')
  .replace(/\s+/g, ' ');

const failures = [];
for (const file of files) {
  const text = visibleText(fs.readFileSync(file, 'utf8'));
  for (const stamp of STAMPS) {
    for (const match of text.matchAll(new RegExp(stamp.source, `${stamp.flags}g`))) {
      failures.push(`${file}: ...${text.slice(Math.max(0, match.index - 60), match.index + match[0].length + 40)}...`);
    }
  }
}

if (failures.length) {
  console.error(`Check dates printed on live pages (${failures.length}):`);
  failures.forEach(failure => console.error(`  ${failure}`));
  process.exit(1);
}
console.log(`Check-date audit passed: ${files.length} pages carry no check date.`);
