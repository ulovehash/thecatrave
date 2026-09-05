// Tag sets with genres from the uploader's own YouTube keywords. No API key:
// the keyword list is in the watch-page HTML.
//
// Measured across a 30-video sample of every channel (SAMPLE=30), and the
// answer is that this signal is spent:
//
//   Keep Hush     462 videos, 461 distinct keyword sets   real, and already done
//   Boiler Room    30 videos,  10 distinct sets, 4 genre combos   near-boilerplate
//   HÖR            30 videos,   2 distinct sets            template
//   Kiosk Radio    12 videos,   2 distinct sets            template
//   every other channel                                    no keywords at all
//
// Beware the obvious metric. Counting "does a genre word appear" scores Boiler
// Room at 97%, because every one of its videos carries the same list:
// "Boiler Room | House | techno | Bass | dance music | rave | party | mix | dj".
// Tagging from that would stamp house+techno+bass on 8,208 sets regardless of
// what was played. What matters is whether the keywords vary per video, not
// whether they contain a genre. Keep Hush is the only channel where they do.
//
//   BROADCASTER="Keep Hush" node scripts/genres-from-tags.mjs
//   node build-selector.mjs
//
// Raw keyword lists are cached per video id in selector-tags-cache.json, so a
// re-run only fetches new videos. Comma-separate BROADCASTER for several.

import fs from 'node:fs';
import https from 'node:https';
import { matchTag, VOCAB } from './genre-vocab.mjs';

const ONLY = (process.env.BROADCASTER || '').split(',').map(s => s.trim()).filter(Boolean);
const inScope = s => !ONLY.length || ONLY.includes(s.broadcaster);
const DELAY = 130;
const CACHE_FILE = 'selector-tags-cache.json';

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

function keywordsFrom(html) {
  const m = /"keywords":\[((?:"(?:[^"\\]|\\.)*",?)*)\]/.exec(html);
  if (!m) return [];
  try { return JSON.parse('[' + m[1] + ']'); } catch { return []; }
}

const genresFromKeywords = kws => {
  const out = [];
  for (const k of kws) {
    const g = matchTag(k);
    if (g && !out.includes(g)) out.push(g);
  }
  return out.sort((a, b) => VOCAB.indexOf(a) - VOCAB.indexOf(b));
};

// SAMPLE=40 fetches an even spread per channel instead of everything, so a
// channel's keyword quality can be measured before committing to a full pass.
// Worth it: the three largest channels here carry no usable keywords at all,
// and a blind run over 63,000 videos is two hours of requests to find that out.
const SAMPLE = Number(process.env.SAMPLE) || 0;
let targets = sets.filter(s => inScope(s) && s.id && !(s.id in cache));
if (SAMPLE) {
  const perChannel = new Map();
  targets = targets.filter(s => {
    const n = perChannel.get(s.broadcaster) || 0;
    if (n >= SAMPLE) return false;
    perChannel.set(s.broadcaster, n + 1);
    return true;
  });
}
console.log(`${ONLY.join(', ') || 'all channels'}: ${targets.length} videos to fetch (~${Math.ceil(targets.length * DELAY / 60000)} min)…\n`);

let done = 0;
for (const s of targets) {
  try {
    const html = await get(`https://www.youtube.com/watch?v=${s.id}&hl=en`);
    cache[s.id] = keywordsFrom(html);
  } catch {
    cache[s.id] = [];
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
  const g = genresFromKeywords(cache[s.id] || []);
  if (g.length) { s.genres = g; tagged += 1; for (const x of g) hist.set(x, (hist.get(x) || 0) + 1); }
}
fs.writeFileSync('selector-data.json', JSON.stringify(sets, null, 0) + '\n');

console.log(`\n${ONLY.join(', ') || 'all'}: tagged ${tagged}/${scope} sets (${(100 * tagged / scope).toFixed(1)}%).`);
console.log('Top genres: ' + [...hist.entries()].sort((a, b) => b[1] - a[1]).slice(0, 12).map(([g, n]) => `${g} ${n}`).join(', '));
console.log('Samples:');
for (const s of sets.filter(s => inScope(s) && s.genres && s.genres.length).slice(0, 12)) console.log(`  ${s.artist}  ->  ${s.genres.join(', ')}`);
