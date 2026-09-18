// Zero-dependency audit for The Selector tool page and its catalogue.
import fs from 'node:fs';

import { pages, langOf } from './pages.mjs';

const failures = [];
const check = (name, condition, detail = '') => {
  if (!condition) failures.push(`${name}${detail ? ` (${detail})` : ''}`);
};

// --- page structure, for the Selector in every language -------------------
// /selector, /de/selector and /fr/selector: the same tool, so the same checks.
for (const page of pages.filter(entry => entry.generator === 'build-selector.mjs')) {
  const html = fs.readFileSync(page.file, 'utf8');
  const {path} = page;
  const lang = langOf(page);
  const check = (name, condition, detail = '') => {
    if (!condition) failures.push(`${page.file}: ${name}${detail ? ` (${detail})` : ''}`);
  };
  check('one H1', (html.match(/<h1[ >]/g) || []).length === 1);
  check('canonical is its own path', html.includes(`<link rel="canonical" href="https://thecatrave.com${path}">`));
  check('title present and bounded', /<title>[^<]{15,65}<\/title>/.test(html));
  check('meta description present', /<meta name="description" content="[^"]{70,165}"/.test(html));
  check('button present with a label', /<button[^>]*id="sel-go"[^>]*>[^<]+<\/button>/.test(html));
  check('source filter group present', /<div class="sel-sources" id="sel-sources" role="group"/.test(html));
  check('genre filter group present', /<div class="sel-genres" id="sel-genres" role="group"/.test(html));
  check('length filter group present', /<div class="sel-lengths" id="sel-lengths" role="group"/.test(html));
  // Mode is one-of-four, so it must be a radiogroup, not a row of toggle buttons
  check('mode filter is a radiogroup', /<div class="sel-modes" id="sel-modes" role="radiogroup"/.test(html));
  check('h1 sits in the tool, above the fold', html.indexOf('<h1>') < html.indexOf('id="about"'));
  check('live result region present', /<div class="sel-stage" id="sel-stage" aria-live="polite">/.test(html));
  // a translated page sits one directory down, so its script path is root-relative
  check('runtime script linked', html.includes(`<script src="${lang === 'en' ? '' : '/'}selector-runtime.js" defer></script>`));
  if (lang !== 'en') {
    // the runtime's own words come from this block; without it the tool speaks English
    let ui = null;
    try { ui = JSON.parse(html.match(/<script type="application\/json" id="sel-i18n">([\s\S]*?)<\/script>/)[1]); } catch {}
    check('runtime strings translated', Boolean(ui && ui.modes && ui.pickMe && ui.numberLocale));
    check('html lang matches the page', html.includes(`<html lang="${lang}">`));
  }
  // The copy describes what each mode gives you, never the thresholds behind it,
  // so tuning the ranking never leaves the page telling a lie. Keep it that way.
  check('copy does not hard-code ranking internals', !/(most-watched|least-watched) third|likes per view/.test(html));
  // the fallback names where the sets are, in whatever language the page is in
  check('noscript fallback present', /<noscript>[\s\S]*YouTube[\s\S]*<\/noscript>/.test(html));
  check('WebApplication structured data', html.includes('"@type":"WebApplication"'));
  check('no em dash in visible source', !html.includes('—'));
  check('brand stays lowercase', !/(The CatRave|TheCatRave|the cat rave)/.test(html));
  check('two internal links in main', ((html.slice(html.indexOf('<main')).match(/href="\/[a-z]/g) || []).length) >= 2);
}

// every pick mode the runtime offers, including the long-tail one
const runtime = fs.readFileSync('selector-runtime.js', 'utf8');
for (const m of ['any', 'popular', 'gems', 'deep']) {
  check(`pick mode "${m}" wired`, runtime.includes(`'${m}'`));
}

// --- catalogue integrity (soft while the pool is still being built) -------
let sets = null;
try { sets = JSON.parse(fs.readFileSync('selector-data.json', 'utf8')); } catch {}
if (!Array.isArray(sets)) {
  failures.push('selector-data.json missing or not an array');
} else if (sets.length === 0) {
  console.log('note: selector-data.json is empty — run `node scripts/fetch-sets.mjs` to populate it.');
} else {
  const ids = sets.map(s => s && s.id);
  check('every set has an 11-char YouTube id', ids.every(id => /^[A-Za-z0-9_-]{11}$/.test(id || '')));
  check('no duplicate ids', new Set(ids).size === ids.length);
  check('every set has a broadcaster', sets.every(s => s && typeof s.broadcaster === 'string' && s.broadcaster));
  check('every set is long-form (>= 20 min)', sets.every(s => !s.seconds || s.seconds >= 1200));
  check('pool is not trivially small', sets.length >= 100, `${sets.length}`);
}

if (failures.length) {
  console.error('Selector audit failed:\n  ' + failures.join('\n  '));
  process.exitCode = 1;
} else {
  console.log('Selector audit passed.');
}
