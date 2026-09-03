// Add a genres[] field to every set in selector-data.json using Last.fm artist
// tags. Zero npm dependencies, runs on any Node >= 14. Needs a free Last.fm API
// key (https://www.last.fm/api/account/create) in the environment:
//
//   export LASTFM_API_KEY='your-key'
//   node scripts/enrich-genres.mjs
//   node build-selector.mjs
//
// Results are cached in selector-genres-cache.json (artist -> genres), so a
// re-run only looks up artists it has not seen. The key stays in your shell.

import fs from 'node:fs';
import https from 'node:https';
import { tagsToGenres } from './genre-vocab.mjs';

const KEY = process.env.LASTFM_API_KEY;
if (!KEY) {
  console.error('Missing LASTFM_API_KEY. Get a free key at https://www.last.fm/api/account/create');
  process.exit(1);
}

const CACHE_FILE = 'selector-genres-cache.json';
const sets = JSON.parse(fs.readFileSync('selector-data.json', 'utf8'));
const cache = fs.existsSync(CACHE_FILE) ? JSON.parse(fs.readFileSync(CACHE_FILE, 'utf8')) : {};

const sleep = ms => new Promise(r => setTimeout(r, ms));

function get(url) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, res => {
      let b = '';
      res.setEncoding('utf8');
      res.on('data', c => { b += c; });
      res.on('end', () => { try { resolve(JSON.parse(b)); } catch { reject(new Error('bad JSON')); } });
    });
    req.setTimeout(15000, () => req.destroy(new Error('timed out')));
    req.on('error', reject);
  });
}

// "Rrita Jashari invites Shelbatra", "Six Sex & MCR-T", "A b2b B" -> individual names
function artistTokens(artist) {
  return String(artist)
    .split(/\s+(?:b2b|b3b|f\/|feat\.?|featuring|invites|presents|vs\.?|x|&|\+|,|\/)\s+/i)
    .map(s => s.trim())
    .filter(s => s.length > 1 && s.length < 60);
}

async function lookup(name) {
  const key = name.toLowerCase();
  if (key in cache) return cache[key];
  const url = `https://ws.audioscrobbler.com/2.0/?method=artist.gettoptags&artist=${encodeURIComponent(name)}&api_key=${KEY}&autocorrect=1&format=json`;
  let genres = [];
  try {
    const data = await get(url);
    const tags = data?.toptags?.tag || [];
    genres = tagsToGenres(tags.map(t => ({ name: t.name, count: t.count })));
  } catch { /* leave empty, still cache so we do not retry every run */ }
  cache[key] = genres;
  await sleep(220);
  return genres;
}

const uniqueTokens = new Set();
for (const s of sets) for (const t of artistTokens(s.artist)) uniqueTokens.add(t);
const todo = [...uniqueTokens].filter(t => !(t.toLowerCase() in cache));
console.log(`${uniqueTokens.size} unique artist tokens, ${todo.length} to look up on Last.fm…\n`);

let done = 0;
for (const t of todo) {
  await lookup(t);
  done += 1;
  if (done % 25 === 0) process.stdout.write(`\r  ${done}/${todo.length}`);
}
process.stdout.write(`\r  ${done}/${todo.length}\n`);
fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 0) + '\n');

let tagged = 0;
for (const s of sets) {
  const g = new Set();
  for (const t of artistTokens(s.artist)) for (const x of cache[t.toLowerCase()] || []) g.add(x);
  s.genres = [...g];
  if (s.genres.length) tagged += 1;
}
fs.writeFileSync('selector-data.json', JSON.stringify(sets, null, 0) + '\n');

const pct = ((tagged / sets.length) * 100).toFixed(1);
console.log(`\nTagged ${tagged}/${sets.length} sets (${pct}%). Cache: ${Object.keys(cache).length} artists.`);
