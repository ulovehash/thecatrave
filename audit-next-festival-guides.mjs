import fs from 'node:fs';
import {homeArticleCatalog, germanArticleCatalog, frenchArticleCatalog, spanishArticleCatalog} from './home-articles.mjs';

const pages = [
  ['sziget-festival.html', 'https://thecatrave.com/sziget-festival'],
  ['boomtown-festival.html', 'https://thecatrave.com/boomtown-festival'],
  ['monegros-desert-festival.html', 'https://thecatrave.com/monegros-desert-festival'],
  ['arc-music-festival.html', 'https://thecatrave.com/arc-music-festival'],
  ['airbeat-one-festival.html', 'https://thecatrave.com/airbeat-one-festival'],
  ['exit-festival.html', 'https://thecatrave.com/exit-festival']
];

const roundups = [
  'new-years-eve-festivals.html', 'best-electronic-music-festivals-europe.html',
  'best-edm-festivals-usa.html', 'best-winter-music-festivals.html',
  'best-electronic-music-festivals-asia.html', 'de/silvester-rave.html',
  'de/electro-festivals-europa.html', 'fr/festival-nouvel-an.html',
  'fr/festivals-electro-europe.html', 'es/festivales-musica-electronica-europa.html',
  'es/festivales-nochevieja.html', 'es/festivales-edm-estados-unidos.html'
];
const roundupSet = new Set(roundups);
const individualFestivalPages = [homeArticleCatalog, germanArticleCatalog, frenchArticleCatalog, spanishArticleCatalog]
  .flatMap(catalog => catalog.filter(item => item.category === 'festivals').map(item => item.page))
  .filter(file => !roundupSet.has(file));

const failures = [];
for (const [file, canonical] of pages) {
  if (!fs.existsSync(file)) { failures.push(`${file}: missing`); continue; }
  const html = fs.readFileSync(file, 'utf8');
  const count = pattern => (html.match(pattern) || []).length;
  if (count(/<h1\b/g) !== 1) failures.push(`${file}: expected exactly one H1`);
  if (!html.includes(`<link rel="canonical" href="${canonical}">`)) failures.push(`${file}: canonical mismatch`);
  if (count(/(?:A )?DJ mix by thecatrave/g) !== 2) failures.push(`${file}: expected two thecatrave mix labels`);
  if (count(/youtube-nocookie\.com\/embed\//g) < 1) failures.push(`${file}: missing exact event video`);
  if (count(/<figure class="floating-image/g) !== 2) failures.push(`${file}: expected two editorial figures`);
  if (!html.includes('FAQPage')) failures.push(`${file}: missing visible/schema FAQ package`);
  if (/<\/figure>\s*<aside class="(?:listening-block|soundcloud-feature)/.test(html) || /<\/aside>\s*<figure class="floating-image/.test(html)) failures.push(`${file}: figure and embed are adjacent`);
  if (/tone-(?:yellow|coral)/.test(html)) failures.push(`${file}: retired section tone present`);
  if (!html.includes('class="festival-planner"')) failures.push(`${file}: missing practical festival planner`);
  if (!html.includes('google.com/maps/')) failures.push(`${file}: missing direct Google Maps route`);
  if (!html.includes('rel="nofollow noopener noreferrer"')) failures.push(`${file}: planning links must be nofollow`);
  if (!html.includes('class="festival-last-checked"')) failures.push(`${file}: missing visible planning check date`);
}

for (const file of individualFestivalPages) {
  if (!fs.existsSync(file)) { failures.push(`${file}: missing`); continue; }
  const html = fs.readFileSync(file, 'utf8');
  const count = pattern => (html.match(pattern) || []).length;
  if (count(/class="festival-planner"/g) !== 1) failures.push(`${file}: expected exactly one practical festival planner`);
  if (count(/class="festival-price-table"/g) !== 1) failures.push(`${file}: missing one ticket-price table`);
  if (count(/class="festival-route-number"/g) < 2) failures.push(`${file}: planner needs at least two specific routes`);
  if (!html.includes('google.com/maps/')) failures.push(`${file}: missing direct Google Maps route`);
  if (!html.includes('rel="nofollow noopener noreferrer"')) failures.push(`${file}: planning links must be nofollow`);
  if (!html.includes('class="festival-last-checked"')) failures.push(`${file}: missing visible planning check date`);
}

if (individualFestivalPages.length !== 78) failures.push(`festival inventory: expected 78 individual guide variants, found ${individualFestivalPages.length}`);

for (const file of roundups) {
  if (!fs.existsSync(file)) continue;
  if (fs.readFileSync(file, 'utf8').includes('class="festival-planner"')) failures.push(`${file}: roundup must not repeat the full planner`);
}

if (failures.length) {
  console.error(failures.map(item => `✗ ${item}`).join('\n'));
  process.exit(1);
}
console.log('✔ Festival guides passed planner, translation and roundup-scope checks.');
