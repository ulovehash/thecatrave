// Tag sets with genres pulled from the video *description*. Run it for every
// channel: BROADCASTER="" node scripts/genres-from-desc.mjs
//
// This used to default to four channels on the belief that "HÖR, The Lot Radio,
// Rinse and Cercle put no genre in the description". That is not true. Measured
// on 60 untagged sets drawn evenly across all 37 channels, 59 had a description
// and 14 of them named a genre - 23%, the best signal left after the artist
// registry. The Lot Radio's own Summer School Radio blurbs say "r&b"; Kiosk
// Radio's Gay Haze says "house, electro, and progressive trance".
//
// An earlier measurement put descriptions at 2%. It was taken over the existing
// cache, which held only the four channels above plus boilerplate, and it was
// wrong for the catalogue as a whole.
//
//   BROADCASTER="Elevator Music,NTS Radio,Kiosk Radio,Beatport" node scripts/genres-from-desc.mjs
//   node scripts/apply-genres.mjs && node build-selector.mjs
//
// Raw descriptions are cached per video id in selector-desc-cache.json, so a
// re-run only fetches new videos and parsing-rule changes cost nothing.

import fs from 'node:fs';
import https from 'node:https';
import { genresFromDesc } from './genre-text.mjs';

const DEFAULT = ['Elevator Music', 'NTS Radio', 'Kiosk Radio', 'Beatport'];
const ONLY = (process.env.BROADCASTER === undefined ? DEFAULT.join(',') : process.env.BROADCASTER).split(',').map(s => s.trim()).filter(Boolean);
// empty BROADCASTER means every channel, matching genres-from-tags.mjs
const inScope = s => !ONLY.length || ONLY.includes(s.broadcaster);
const DELAY = 130;
const CACHE_FILE = 'selector-desc-cache.json';

const sets = JSON.parse(fs.readFileSync('selector-data.json', 'utf8'));
const cache = fs.existsSync(CACHE_FILE) ? JSON.parse(fs.readFileSync(CACHE_FILE, 'utf8')) : {};
const sleep = ms => new Promise(r => setTimeout(r, ms));

function get(url) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, { headers: { 'user-agent': 'Mozilla/5.0', 'accept-language': 'en' } }, res => {
      let b = '';
      res.setEncoding('utf8');
      res.on('data', c => { b += c; });
      res.on('end', () => resolve(b));
    });
    req.setTimeout(15000, () => req.destroy(new Error('timeout')));
    req.on('error', reject);
  });
}

const descFrom = html => {
  const m = html.match(/"shortDescription":"((?:[^"\\]|\\.)*)"/);
  if (!m) return '';
  try { return JSON.parse('"' + m[1] + '"').replace(/\s+/g, ' ').slice(0, 800); } catch { return ''; }
};

const targets = sets.filter(s => inScope(s) && s.id && !(s.id in cache));
console.log(`${ONLY.join(', ')}: ${targets.length} descriptions to fetch (~${Math.ceil(targets.length * DELAY / 60000)} min)…\n`);

let done = 0;
for (const s of targets) {
  try {
    const html = await get(`https://www.youtube.com/watch?v=${s.id}&hl=en`);
    cache[s.id] = descFrom(html);
  } catch {
    cache[s.id] = '';
  }
  done += 1;
  if (done % 25 === 0) { process.stdout.write(`\r  ${done}/${targets.length}`); fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 0) + '\n'); }
  await sleep(DELAY);
}
process.stdout.write(`\r  ${done}/${targets.length}\n`);
fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 0) + '\n');

let tagged = 0, scope = 0;
const hist = new Map();
for (const s of sets) {
  if (!inScope(s)) continue;
  scope += 1;
  const g = genresFromDesc(cache[s.id] || '');
  if (g.length) { s.genres = g; tagged += 1; for (const x of g) hist.set(x, (hist.get(x) || 0) + 1); }
}
fs.writeFileSync('selector-data.json', JSON.stringify(sets, null, 0) + '\n');

console.log(`\ntagged ${tagged}/${scope} in-scope sets (${(100 * tagged / scope).toFixed(1)}%).`);
console.log('top genres: ' + [...hist.entries()].sort((a, b) => b[1] - a[1]).slice(0, 12).map(([g, n]) => `${g} ${n}`).join(', '));
console.log('samples:');
for (const s of sets.filter(s => inScope(s) && s.genres && s.genres.length).slice(0, 14)) console.log(`  ${s.broadcaster.padEnd(14)} ${(s.artist || '').slice(0, 26).padEnd(26)} ${s.genres.join(', ')}`);
