// Tag sets with genres pulled from the video *description*. Run it only for the
// channels in DEFAULT below:
//
//   node scripts/genres-from-desc.mjs
//
// Do not widen it. This header once said that HOR, The Lot Radio, Rinse and
// Cercle put no genre in their descriptions. That was overruled in September
// 2026 on the strength of a 60-set sample that scored 23%, the scope was opened
// to all 37 channels, and 23,102 descriptions were fetched.
//
// The result was zero. Of those, 9,082 were empty and 3,009 named a genre, but
// every one of the 3,009 belonged to a set that the artist registry, the title
// rules or Discogs had already tagged. Fifteen thousand untagged sets had a
// cached description by the end and not one of them yielded a genre.
//
// The sample was not wrong when it was taken. It was taken before the Discogs
// pass and before declaredGenresInTitle, and those two filled exactly the sets
// the descriptions would have filled. The original header was right.

import fs from 'node:fs';
import https from 'node:https';
import { genresFromDesc } from './genre-text.mjs';

const DEFAULT = ['Elevator Music', 'NTS Radio', 'Kiosk Radio', 'Beatport'];
const ONLY = (process.env.BROADCASTER || DEFAULT.join(',')).split(',').map(s => s.trim()).filter(Boolean);
const inScope = s => ONLY.includes(s.broadcaster);
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
