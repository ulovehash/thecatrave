// The size of the Selector's catalogue, read from selector-data.json on every
// build, for prose that says how many sets the Selector holds.
//
// Guides used to type the total by hand. The catalogue refresh of 2026-09-16
// took it from 62,877 to 62,824, and 22 pages went on quoting the old figure;
// two guides written after it copied 62,877 out of CLAUDE.md beside counts
// measured on the new data (defects.json: catalogue-numbers-unchecked).
//
// Only the bare total is live. A count measured from the catalogue (sets per
// broadcaster, per festival, per genre) stays typed, because it is a snapshot,
// and the sentence carrying it does not quote the total beside it: a live total
// next to a typed count would disagree with it after the next refresh.
// audit-catalogue-numbers.mjs fails the build on a typed total that is not
// dated and not current.
import fs from 'node:fs';

export const CATALOGUE_TOKEN = '{{catalogue-sets}}';

const LOCALES = {en: 'en-US', de: 'de-DE', fr: 'fr-FR'};

export const catalogueSize = JSON.parse(fs.readFileSync('selector-data.json', 'utf8')).length;

export function catalogueSets(lang = 'en') {
  const locale = LOCALES[lang];
  if (!locale) throw new Error(`No number format for language: ${lang}`);
  return catalogueSize.toLocaleString(locale);
}

// Drafts write {{catalogue-sets}} where the total goes.
export function withCatalogue(text, lang = 'en') {
  return text.replaceAll(CATALOGUE_TOKEN, catalogueSets(lang));
}
