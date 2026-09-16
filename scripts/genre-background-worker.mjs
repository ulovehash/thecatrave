// Autonomous genre experiment. It talks directly to public music metadata
// APIs, caches every response, resumes after interruption, and never invokes
// an LLM. Experiment output stays under .cache and does not modify the selector.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { artistKey, artistKeys, splitArtists } from './artist-key.mjs';
import {
  buildBroadcasterStats,
  chooseExactArtist,
  scoreSet,
  selectExperimentSets,
  validationMetrics,
  youtubeSignals
} from './genre-background-core.mjs';

const PROJECT_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
process.chdir(PROJECT_ROOT);
const POPULAR_ONLY = process.argv.includes('--popular');
const ROOT = process.env.GENRE_BACKGROUND_DIR || (POPULAR_ONLY ? '.cache/genre-popular' : '.cache/genre-background');
const SEARCH_CACHE = path.join(ROOT, 'musicbrainz-search.jsonl');
const METADATA_CACHE = path.join(ROOT, 'artist-metadata.jsonl');
const TARGETS_FILE = path.join(ROOT, 'targets.json');
const REPORT_FILE = path.join(ROOT, 'report.json');
const UNRESOLVED_LIMIT = process.env.GENRE_EXPERIMENT_LIMIT
  ? Math.max(1, Number(process.env.GENRE_EXPERIMENT_LIMIT))
  : (POPULAR_ONLY ? Infinity : 1000);
const VALIDATION_LIMIT = Math.max(0, Number(process.env.GENRE_VALIDATION_LIMIT || 200));
const MB_DELAY = Math.max(1000, Number(process.env.MUSICBRAINZ_DELAY_MS || 1100));
const UA = 'thecatrave-selector/2.0 (https://thecatrave.com/selector)';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const readJson = file => JSON.parse(fs.readFileSync(file, 'utf8'));
function readJsonl(file, key) {
  const rows = new Map();
  if (!fs.existsSync(file)) return rows;
  for (const line of fs.readFileSync(file, 'utf8').split(/\r?\n/)) {
    if (!line) continue;
    try { const row = JSON.parse(line); if (row[key]) rows.set(row[key], row); } catch {}
  }
  return rows;
}
function append(file, row) { fs.appendFileSync(file, JSON.stringify(row) + '\n'); }

async function requestJson(url, attempt = 0) {
  const response = await fetch(url, { headers: { accept: 'application/json', 'user-agent': UA } });
  if (response.ok) return response.json();
  if (attempt < 5 && (response.status === 429 || response.status === 503 || response.status >= 500)) {
    const retry = Number(response.headers.get('retry-after') || 0) * 1000;
    await sleep(retry || Math.min(30000, 1500 * 2 ** attempt));
    return requestJson(url, attempt + 1);
  }
  throw new Error(`${response.status} ${response.statusText}: ${(await response.text()).slice(0, 160)}`);
}

async function resolveArtist(name) {
  const query = encodeURIComponent(`artist:"${String(name).replace(/"/g, '')}"`);
  const data = await requestJson(`https://musicbrainz.org/ws/2/artist/?query=${query}&limit=10&fmt=json`);
  return { key: artistKey(name), name, ...chooseExactArtist(name, data.artists || []) };
}

async function fetchArtistMetadata(mbids) {
  const params = new URLSearchParams({ artist_mbids: mbids.join(','), inc: 'tag' });
  const data = await requestJson(`https://api.listenbrainz.org/1/metadata/artist/?${params}`);
  const rows = Array.isArray(data) ? data : Object.values(data || {});
  return rows.map(row => ({
    mbid: row.artist_mbid || row.mbid,
    name: row.name || '',
    tags: row.tag?.artist || row.tags?.artist || []
  })).filter(row => row.mbid);
}

fs.mkdirSync(ROOT, { recursive: true });
fs.writeFileSync(path.join(ROOT, 'run.pid'), `${process.pid}\n`);
const sets = readJson('selector-data.json');
const registry = readJson('selector-artists.json');
const rawYoutube = readJsonl('.cache/youtube-genre-signals.jsonl', 'id');
const broadcasterStats = buildBroadcasterStats(sets, rawYoutube);

let targets;
if (fs.existsSync(TARGETS_FILE)) {
  const ids = readJson(TARGETS_FILE);
  const byId = new Map(sets.map(set => [set.id, set]));
  targets = {
    unresolved: ids.unresolved.map(id => byId.get(id)).filter(Boolean),
    validation: ids.validation.map(id => byId.get(id)).filter(Boolean)
  };
} else {
  if (POPULAR_ONLY) {
    const popularIds = new Set([...sets]
      .sort((a, b) => (b.views || 0) - (a.views || 0))
      .slice(0, Math.ceil(sets.length * 0.1))
      .map(set => set.id));
    targets = {
      unresolved: sets.filter(set => popularIds.has(set.id) && !set.genres?.length).slice(0, UNRESOLVED_LIMIT),
      validation: selectExperimentSets(sets, registry, 1, VALIDATION_LIMIT).validation
    };
  } else {
    targets = selectExperimentSets(sets, registry, UNRESOLVED_LIMIT, VALIDATION_LIMIT);
  }
  fs.writeFileSync(TARGETS_FILE, JSON.stringify({
    unresolved: targets.unresolved.map(set => set.id),
    validation: targets.validation.map(set => set.id)
  }, null, 2) + '\n');
}

const allTargets = [...targets.unresolved, ...targets.validation];
const names = new Map();
for (const set of allTargets) {
  for (const display of splitArtists(set.artist)) {
    const key = artistKey(display);
    if (key && !names.has(key)) names.set(key, display);
  }
}

const identities = readJsonl(SEARCH_CACHE, 'key');
const pending = [...names].filter(([key]) => !identities.has(key));
console.log(`Experiment: ${targets.unresolved.length} unresolved + ${targets.validation.length} validation sets.`);
console.log(`Artists: ${names.size}; MusicBrainz lookups remaining: ${pending.length}.`);
for (let index = 0; index < pending.length; index += 1) {
  const [, name] = pending[index];
  let row;
  try { row = await resolveArtist(name); } catch (error) {
    row = { key: artistKey(name), name, status: 'error', error: error.message };
  }
  identities.set(row.key, row);
  append(SEARCH_CACHE, row);
  if ((index + 1) % 25 === 0 || index + 1 === pending.length) {
    console.log(`MusicBrainz ${index + 1}/${pending.length}; matched ${[...identities.values()].filter(item => item.status === 'matched').length}.`);
  }
  await sleep(MB_DELAY);
}

const metadata = readJsonl(METADATA_CACHE, 'mbid');
const mbids = [...new Set([...identities.values()].filter(row => row.status === 'matched').map(row => row.mbid))]
  .filter(mbid => !metadata.has(mbid));
for (let index = 0; index < mbids.length; index += 25) {
  const batch = mbids.slice(index, index + 25);
  try {
    const rows = await fetchArtistMetadata(batch);
    const found = new Map(rows.map(row => [row.mbid, row]));
    for (const mbid of batch) {
      const row = found.get(mbid) || { mbid, name: '', tags: [] };
      metadata.set(mbid, row);
      append(METADATA_CACHE, row);
    }
  } catch (error) {
    console.error(`ListenBrainz batch ${index / 25 + 1} failed: ${error.message}`);
    for (const mbid of batch) {
      const row = { mbid, name: '', tags: [], error: error.message };
      metadata.set(mbid, row);
      append(METADATA_CACHE, row);
    }
  }
  console.log(`ListenBrainz ${Math.min(index + 25, mbids.length)}/${mbids.length}.`);
  await sleep(250);
}

const evaluate = set => scoreSet(
  set,
  identities,
  metadata,
  youtubeSignals(rawYoutube.get(set.id), set.broadcaster, broadcasterStats)
);
const unresolved = targets.unresolved.map(set => ({
  id: set.id, artist: set.artist, broadcaster: set.broadcaster, views: set.views || 0, result: evaluate(set)
}));
const validation = targets.validation.map(set => ({
  id: set.id, artist: set.artist, expected: set.genres, result: evaluate(set)
}));
const counts = decision => unresolved.filter(row => row.result.decision === decision).length;
const report = {
  createdAt: new Date().toISOString(),
  configuration: { unresolvedLimit: targets.unresolved.length, validationLimit: targets.validation.length },
  artists: {
    total: names.size,
    matched: [...identities.values()].filter(row => row.status === 'matched').length,
    ambiguous: [...identities.values()].filter(row => row.status === 'ambiguous').length
  },
  unresolved: {
    total: unresolved.length,
    autoAccepted: counts('auto-accept'),
    review: counts('review'),
    unknown: counts('unknown'),
    projectedCoverage: Number((counts('auto-accept') / unresolved.length).toFixed(4))
  },
  validation: validationMetrics(validation),
  candidates: unresolved,
  validationCandidates: validation
};
fs.writeFileSync(REPORT_FILE, JSON.stringify(report, null, 2) + '\n');
console.log(`Report: ${REPORT_FILE}`);
console.log(JSON.stringify({ artists: report.artists, unresolved: report.unresolved, validation: report.validation }, null, 2));
const pidFile = path.join(ROOT, 'run.pid');
if (fs.existsSync(pidFile)) fs.unlinkSync(pidFile);
