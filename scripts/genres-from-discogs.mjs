// Look artists up in Discogs and take their genre from the styles on their
// releases. No key needed; unauthenticated search allows about 25 requests a
// minute, which is what the delay below is set to.
//
//   MIN_SETS=3 node scripts/genres-from-discogs.mjs
//   node scripts/apply-genres.mjs && node build-selector.mjs
//
// Results cache to selector-discogs-cache.json after every artist, so a run
// that dies at hour three resumes where it stopped and costs nothing to repeat.
//
// Measured on the 200 untagged artists with the most sets:
//
//   no guards      39% found a genre, and eyeballing showed about half were a
//                  different person with the same name: "Lovie" came back
//                  Dixieland jazz, "Pozi" came back a post-punk band
//   with guards    14% found a genre, and the matches survive inspection
//
// Precision matters more than coverage here. A wrong genre is worse than a
// missing one, because someone filters to jungle and gets house. The three
// guards below are what buys that, and each one costs real coverage:
//
//   1. The artist must exist in Discogs under exactly this name.
//   2. Their releases must be club music. A profile that is mostly Rock, Jazz,
//      Folk or Classical is a namesake, not a DJ playing Kiosk Radio.
//   3. A style counts only if it is on a third of their releases, so one
//      stray tag on one record cannot label a career.
import fs from 'node:fs';
import https from 'node:https';
import { matchTag } from './genre-vocab.mjs';
import { artistKeys } from './artist-key.mjs';

const CACHE_FILE = 'selector-discogs-cache.json';
const MIN_SETS = Number(process.env.MIN_SETS) || 3;
const LIMIT = Number(process.env.LIMIT) || Infinity;
const DELAY = 2500;
const UA = 'thecatrave/1.0 +https://thecatrave.com';
const OFF = new Set(['Rock', 'Jazz', 'Classical', 'Blues', 'Folk, World, & Country',
                     'Stage & Screen', 'Non-Music', "Children's", 'Latin']);
const JOINED = /&|,|\/|\bw\/|\b(instore session|invites|presents|takeover|roundtable|with|b2b|vs|feat|ft|and|x)\b/i;

const norm = s => s.toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g, '');
const sleep = ms => new Promise(r => setTimeout(r, ms));
const get = url => new Promise(res => {
  const req = https.get(url, { headers: { 'user-agent': UA } }, r => {
    let b = ''; r.setEncoding('utf8');
    r.on('data', c => { b += c; });
    r.on('end', () => { try { res(JSON.parse(b)); } catch { res(null); } });
  });
  req.setTimeout(20000, () => { req.destroy(); res(null); });
  req.on('error', () => res(null));
});

const sets = JSON.parse(fs.readFileSync('selector-data.json', 'utf8'));
const registry = JSON.parse(fs.readFileSync('selector-artists.json', 'utf8'));
const cache = fs.existsSync(CACHE_FILE) ? JSON.parse(fs.readFileSync(CACHE_FILE, 'utf8')) : {};

// untagged artists only, skipping the strings that are two names stuck together
const counts = new Map();
for (const s of sets) {
  if (!s.artist) continue;
  let key = null, tagged = false;
  for (const k of artistKeys(s.artist)) {
    const row = registry[k];
    if (!row) continue;
    key = key || k;
    if (row.genres && row.genres.length) { tagged = true; break; }
  }
  if (!key || tagged || JOINED.test(s.artist) || s.artist.length < 3) continue;
  const e = counts.get(key) || { name: s.artist, n: 0 };
  e.n += 1;
  counts.set(key, e);
}
const queue = [...counts.entries()]
  .filter(([k, v]) => v.n >= MIN_SETS && !(k in cache))
  .sort((a, z) => z[1].n - a[1].n)
  .slice(0, LIMIT);

console.log(`${queue.length} artists to look up (${Object.keys(cache).length} already cached), about ${Math.round(queue.length * DELAY * 2 / 60000)} minutes.`);

let found = 0, done = 0;
for (const [key, { name, n }] of queue) {
  const rec = { name, sets: n, genres: [] };

  const search = await get(`https://api.discogs.com/database/search?q=${encodeURIComponent(name)}&type=artist&per_page=10`);
  await sleep(DELAY);
  if (!((search && search.results) || []).some(r => norm(r.title) === norm(name))) {
    rec.reject = 'no exact name';
  } else {
    const rel = await get(`https://api.discogs.com/database/search?artist=${encodeURIComponent(name)}&type=release&per_page=30`);
    await sleep(DELAY);
    const results = (rel && rel.results) || [];
    if (results.length < 3) {
      rec.reject = `only ${results.length} releases`;
    } else {
      const genres = {}, styles = {};
      for (const r of results) {
        for (const g of r.genre || []) genres[g] = (genres[g] || 0) + 1;
        for (const st of r.style || []) styles[st] = (styles[st] || 0) + 1;
      }
      const off = Object.entries(genres).filter(([g]) => OFF.has(g)).reduce((a, [, v]) => a + v, 0);
      if (off / results.length > 0.4) {
        rec.reject = `not club music: ${Object.keys(genres).slice(0, 3).join('/')}`;
      } else {
        const ranked = Object.entries(styles).sort((a, z) => z[1] - a[1]);
        for (const [st, c] of ranked) {
          if (c / results.length < 0.34) continue;
          const g = matchTag(st.toLowerCase().replace(/ n /i, ' and '));
          if (g && !rec.genres.includes(g)) rec.genres.push(g);
        }
        rec.genres = rec.genres.slice(0, 3);
        rec.top = ranked.slice(0, 4).map(([s, c]) => `${s}:${c}`);
        if (!rec.genres.length) rec.reject = 'styles outside our vocabulary';
      }
    }
  }

  cache[key] = rec;
  if (rec.genres.length) found += 1;
  done += 1;
  fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 0) + '\n');
  if (done % 10 === 0) process.stdout.write(`\r  ${done}/${queue.length}, found ${found}`);
}
process.stdout.write(`\r  ${done}/${queue.length}, found ${found}\n`);

const all = Object.values(cache).filter(r => r.genres && r.genres.length);
console.log(`cache now holds ${Object.keys(cache).length} artists, ${all.length} with a genre, covering ${all.reduce((a, r) => a + (r.sets || 0), 0)} sets.`);
