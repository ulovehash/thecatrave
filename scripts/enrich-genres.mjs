// Add a genres[] field to every set in selector-data.json using MusicBrainz.
// No API key, no account: MusicBrainz only asks for a descriptive User-Agent and
// one request per second.
//
//   node scripts/enrich-genres.mjs
//   node build-selector.mjs
//
// artist -> genres is cached in selector-genres-cache.json, so a re-run only
// looks up artists it has not seen. The first full run is slow (rate limit);
// after that the weekly refresh only resolves new names. Set MAX_LOOKUPS to do
// a partial run and resume later from the cache.

import fs from 'node:fs';
import https from 'node:https';
import { tagsToGenres } from './genre-vocab.mjs';

const UA = 'thecatrave-selector/1.0 ( https://thecatrave.com/selector )';
const MB = 'https://musicbrainz.org/ws/2';
const MIN_SETS = 2;                                  // skip artists that appear once (b2b guests)
const MIN_SCORE = 88;                                // MusicBrainz search confidence
const DELAY = 1100;                                  // >= 1 req/sec
const MAX_LOOKUPS = Number(process.env.MAX_LOOKUPS) || Infinity;

const CACHE_FILE = 'selector-genres-cache.json';
const sets = JSON.parse(fs.readFileSync('selector-data.json', 'utf8'));
const cache = fs.existsSync(CACHE_FILE) ? JSON.parse(fs.readFileSync(CACHE_FILE, 'utf8')) : {};

const sleep = ms => new Promise(r => setTimeout(r, ms));

function get(url) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, { headers: { 'user-agent': UA, accept: 'application/json' } }, res => {
      let b = '';
      res.setEncoding('utf8');
      res.on('data', c => { b += c; });
      res.on('end', () => {
        if (res.statusCode === 503) { reject(new Error('503')); return; }
        if (res.statusCode < 200 || res.statusCode >= 300) { reject(new Error(`HTTP ${res.statusCode}`)); return; }
        try { resolve(JSON.parse(b)); } catch { reject(new Error('bad JSON')); }
      });
    });
    req.setTimeout(15000, () => req.destroy(new Error('timed out')));
    req.on('error', reject);
  });
}

function artistTokens(artist) {
  return String(artist)
    .split(/\s+(?:b2b|b3b|f\/|feat\.?|featuring|invites|presents|pres\.?|vs\.?|x|&|\+|,|\/|with)\s+/i)
    .map(s => s.trim())
    .filter(s => s.length > 1 && s.length < 60);
}

async function lookup(name) {
  const key = name.toLowerCase();
  if (key in cache) return cache[key];

  const norm = s => s.toLowerCase().replace(/[^a-z0-9]+/g, '');
  let genres = [];
  try {
    const q = encodeURIComponent(`artist:"${name.replace(/"/g, '')}"`);
    const search = await get(`${MB}/artist/?query=${q}&limit=5&fmt=json`);
    await sleep(DELAY);
    const arts = search.artists || [];
    // MusicBrainz search scores are occasionally missing under load; fall back to
    // an exact normalised name match.
    const hit = arts.find(a => (a.score || 0) >= MIN_SCORE) || arts.find(a => norm(a.name) === norm(name));
    if (hit) {
      const detail = await get(`${MB}/artist/${hit.id}?inc=genres+tags&fmt=json`);
      await sleep(DELAY);
      const fromGenres = (detail.genres || []).map(g => ({ name: g.name, count: (g.count || 0) + 20 }));
      const fromTags = (detail.tags || []).map(t => ({ name: t.name, count: t.count }));
      genres = tagsToGenres([...fromGenres, ...fromTags].sort((a, b) => b.count - a.count));
    }
  } catch (err) {
    if (err.message === '503') { await sleep(3000); return lookup(name); }   // back off and retry once
    await sleep(DELAY);
  }
  cache[key] = genres;
  return genres;
}

// BROADCASTER=... scopes the run to one channel (for a quick quality check).
const ONLY = process.env.BROADCASTER || '';
const inScope = s => !ONLY || s.broadcaster === ONLY;

// Count how many sets each artist token touches; only resolve the ones that matter.
const tokenSets = new Map();
for (const s of sets) if (inScope(s)) for (const t of artistTokens(s.artist)) tokenSets.set(t, (tokenSets.get(t) || 0) + 1);
const todo = [...tokenSets.entries()]
  .filter(([t, n]) => n >= MIN_SETS && !(t.toLowerCase() in cache))
  .sort((a, b) => b[1] - a[1])
  .map(([t]) => t)
  .slice(0, MAX_LOOKUPS);

console.log(`${tokenSets.size} artist tokens, ${todo.length} to resolve on MusicBrainz (~${Math.ceil(todo.length * DELAY * 2 / 60000)} min)…\n`);

let done = 0;
for (const t of todo) {
  await lookup(t);
  done += 1;
  if (done % 20 === 0) {
    process.stdout.write(`\r  ${done}/${todo.length}`);
    fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 0) + '\n');   // checkpoint
  }
}
process.stdout.write(`\r  ${done}/${todo.length}\n`);
fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 0) + '\n');

let tagged = 0, scope = 0;
const genreHist = new Map();
for (const s of sets) {
  if (!inScope(s)) continue;
  scope += 1;
  const g = new Set();
  for (const t of artistTokens(s.artist)) for (const x of cache[t.toLowerCase()] || []) g.add(x);
  s.genres = [...g];
  if (s.genres.length) { tagged += 1; for (const x of s.genres) genreHist.set(x, (genreHist.get(x) || 0) + 1); }
}
fs.writeFileSync('selector-data.json', JSON.stringify(sets, null, 0) + '\n');

const pct = ((tagged / scope) * 100).toFixed(1);
console.log(`\n${ONLY || 'All'}: tagged ${tagged}/${scope} sets (${pct}%). Cache: ${Object.keys(cache).length} artists.`);
console.log('Top genres: ' + [...genreHist.entries()].sort((a, b) => b[1] - a[1]).slice(0, 12).map(([g, n]) => `${g} ${n}`).join(', '));
console.log('Samples:');
for (const s of sets.filter(inScope).filter(s => s.genres && s.genres.length).slice(0, 12)) {
  console.log(`  ${s.artist}  ->  ${s.genres.join(', ')}`);
}
if (todo.length === MAX_LOOKUPS) console.log('\nHit MAX_LOOKUPS — run again to resolve the rest (cache resumes).');
