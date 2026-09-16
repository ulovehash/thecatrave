// Keyless fallback for popular artists using Apple's public iTunes Search API.
// Only an exact, unique artist identity is accepted. Broad store categories
// such as Dance or Electronic stay as evidence but are not forced into a more
// specific Selector genre.

import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { artistKey, splitArtists } from './artist-key.mjs';
import { isJunkArtist } from './parse-artist.mjs';
import { matchTag } from './genre-vocab.mjs';

const PROJECT_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
process.chdir(PROJECT_ROOT);
const ROOT = '.cache/store-popular';
const RAW = path.join(ROOT, 'artists.jsonl');
const OUTPUT = 'selector-store-genre-cache.json';
const DELAY = Math.max(3000, Number(process.env.STORE_DELAY_MS || 3200));
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const GENRES = new Map([
  ['house', ['house']],
  ['techno', ['techno']],
  ['hip-hop/rap', ['hip-hop']],
  ['hip hop/rap', ['hip-hop']],
  ['jazz', ['jazz']],
  ['r&b/soul', ['soul', 'r&b']],
  ['dancehall', ['dancehall']]
]);
const BROAD = new Set(['singer/songwriter', 'soundtrack']);
export const genresFromPrimary = primaryGenres => [...new Set(primaryGenres.flatMap(raw => {
  const key = String(raw).toLowerCase();
  if (BROAD.has(key)) return [];
  return GENRES.get(key) || [matchTag(raw)].filter(Boolean);
}))];

export function classifyStoreResults(name, results = []) {
  const key = artistKey(name);
  const exact = results.filter(row => artistKey(row.artistName) === key && row.artistId);
  const ids = [...new Set(exact.map(row => String(row.artistId)))];
  const primaryGenres = [...new Set(exact.map(row => row.primaryGenreName).filter(Boolean))];
  if (ids.length !== 1) return { status: ids.length ? 'ambiguous' : 'not-found', artistIds: ids, primaryGenres };
  const genres = genresFromPrimary(primaryGenres);
  return { status: genres.length ? 'matched' : 'broad-only', artistIds: ids, primaryGenres, genres };
}

function readRows() {
  const rows = new Map();
  if (!fs.existsSync(RAW)) return rows;
  for (const line of fs.readFileSync(RAW, 'utf8').split(/\r?\n/)) {
    if (!line) continue;
    try {
      const row = JSON.parse(line);
      if (!row.key) continue;
      if (row.artistIds?.length === 1 && row.primaryGenres?.length) {
        row.genres = genresFromPrimary(row.primaryGenres);
        if (row.genres.length) row.status = 'matched';
      }
      rows.set(row.key, row);
    } catch {}
  }
  return rows;
}

function writeOutput(popular, rows) {
  const output = {};
  for (const set of popular) {
    const genres = [...new Set(splitArtists(set.artist).flatMap(name => rows.get(artistKey(name))?.genres || []))];
    if (genres.length) output[set.id] = { genres, confidence: 'exact-store-artist' };
  }
  fs.writeFileSync(OUTPUT, `${JSON.stringify(output, null, 2)}\n`);
  return Object.keys(output).length;
}

async function request(name, attempt = 0) {
  const query = new URLSearchParams({
    term: name, media: 'music', entity: 'musicTrack', attribute: 'artistTerm', limit: '25', country: 'US'
  });
  const response = await fetch(`https://itunes.apple.com/search?${query}`);
  if (response.ok) return response.json();
  if (attempt < 4 && (response.status === 429 || response.status >= 500)) {
    await sleep(Math.min(60000, DELAY * 2 ** (attempt + 1)));
    return request(name, attempt + 1);
  }
  throw new Error(`${response.status} ${response.statusText}`);
}

async function main() {
  fs.mkdirSync(ROOT, { recursive: true });
  fs.writeFileSync(path.join(ROOT, 'run.pid'), `${process.pid}\n`);
  const sets = JSON.parse(fs.readFileSync('selector-data.json', 'utf8'));
  const targetFile = '.cache/genre-popular/targets.json';
  const targetIds = fs.existsSync(targetFile)
    ? new Set(JSON.parse(fs.readFileSync(targetFile, 'utf8')).unresolved || [])
    : null;
  const popular = targetIds
    ? sets.filter(set => targetIds.has(set.id))
    : [...sets].sort((a, b) => (b.views || 0) - (a.views || 0)).slice(0, Math.ceil(sets.length * 0.1));
  const names = new Map();
  for (const set of popular) for (const display of splitArtists(set.artist)) {
    const key = artistKey(display);
    if (key && !isJunkArtist(display) && !names.has(key)) names.set(key, display);
  }
  const rows = readRows();
  const pending = [...names].filter(([key]) => !rows.has(key));
  console.log(`Public store: ${names.size} popular artists; ${pending.length} lookups remaining.`);
  for (let index = 0; index < pending.length; index += 1) {
    const [key, name] = pending[index];
    let result;
    try {
      const data = await request(name);
      result = { key, name, ...classifyStoreResults(name, data.results || []) };
    } catch (error) {
      result = { key, name, status: 'error', error: error.message };
    }
    rows.set(key, result);
    fs.appendFileSync(RAW, `${JSON.stringify(result)}\n`);
    if ((index + 1) % 20 === 0 || index + 1 === pending.length) {
      writeOutput(popular, rows);
      console.log(`${index + 1}/${pending.length}; matched ${[...rows.values()].filter(row => row.status === 'matched').length}.`);
    }
    await sleep(DELAY);
  }
  const resolved = writeOutput(popular, rows);
  fs.unlinkSync(path.join(ROOT, 'run.pid'));
  console.log(`${OUTPUT}: ${resolved} popular sets resolved.`);
  for (const [command, args] of [
    [process.execPath, ['scripts/apply-genres.mjs']],
    [process.execPath, ['scripts/build-genre-review-queue.mjs']],
    [process.execPath, ['build-selector.mjs']],
    [process.execPath, ['audit-selector.mjs']]
  ]) {
    const result = spawnSync(command, args, { stdio: 'inherit' });
    if (result.status !== 0) throw new Error(`${args[0]} exited with ${result.status}`);
  }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) await main();
