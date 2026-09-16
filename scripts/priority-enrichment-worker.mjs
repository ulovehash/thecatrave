// Resolve the highest-impact electronic-only sets first. The worker is
// keyless, resumable, and never calls an LLM. It accepts a Wikipedia result
// only when one exact-name musical entity has a specific genre in its lead.

import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { splitArtists } from './artist-key.mjs';
import { isJunkArtist, parseArtist } from './parse-artist.mjs';
import { chooseWikipediaPage, priorityArtists } from './priority-enrichment-core.mjs';

const PROJECT_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
process.chdir(PROJECT_ROOT);
const ROOT = '.cache/priority-enrichment';
const RAW = path.join(ROOT, 'wikipedia.jsonl');
const PID_FILE = path.join(ROOT, 'run.pid');
const REPORT = path.join(ROOT, 'report.json');
const OUTPUT = 'selector-priority-genre-cache.json';
const LIMIT = Math.max(1, Number(process.env.PRIORITY_ARTIST_LIMIT || 3000));
const DELAY = Math.max(250, Number(process.env.WIKIPEDIA_DELAY_MS || 500));
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const readJson = (file, fallback = {}) => {
  try { return JSON.parse(fs.readFileSync(file, 'utf8')); } catch { return fallback; }
};
function readJsonl(file, key) {
  const rows = new Map();
  if (!fs.existsSync(file)) return rows;
  for (const line of fs.readFileSync(file, 'utf8').split(/\r?\n/)) {
    if (!line) continue;
    try { const row = JSON.parse(line); if (row[key]) rows.set(row[key], row); } catch {}
  }
  return rows;
}

async function requestWikipedia(name, attempt = 0) {
  const query = new URLSearchParams({
    action: 'query', format: 'json', formatversion: '2', generator: 'search',
    gsrsearch: `"${String(name).replace(/"/g, '')}" musician DJ`,
    gsrnamespace: '0', gsrlimit: '8',
    prop: 'extracts|info', exintro: '1', explaintext: '1', inprop: 'url', origin: '*'
  });
  const response = await fetch(`https://en.wikipedia.org/w/api.php?${query}`, {
    headers: { accept: 'application/json', 'user-agent': 'thecatrave-selector/2.0 (https://thecatrave.com/selector)' }
  });
  if (response.ok) return response.json();
  if (attempt < 4 && (response.status === 429 || response.status >= 500)) {
    await sleep(Math.min(30000, DELAY * 2 ** (attempt + 1)));
    return requestWikipedia(name, attempt + 1);
  }
  throw new Error(`${response.status} ${response.statusText}`);
}

async function main() {
  fs.mkdirSync(ROOT, { recursive: true });
  fs.writeFileSync(PID_FILE, `${process.pid}\n`);
  try {
    const sets = readJson('selector-data.json', []);
    const videoCache = readJson('selector-videos-cache.json', {});
    const targets = sets.filter(set => set.genres?.length === 1 && set.genres[0] === 'electronic');
    const queue = priorityArtists(targets, videoCache, parseArtist, splitArtists, isJunkArtist).slice(0, LIMIT);
    const rows = readJsonl(RAW, 'key');
    // Network failures are transient and must be retried on the next run;
    // definitive not-found/ambiguous responses remain cached.
    const pending = queue.filter(row => !rows.has(row.key) || rows.get(row.key)?.status === 'error');
    console.log(`Priority enrichment: ${targets.length} electronic-only sets.`);
    console.log(`Queue: ${queue.length} artists by cumulative views; ${pending.length} Wikipedia lookups remaining.`);

    for (let index = 0; index < pending.length; index += 1) {
      const artist = pending[index];
      let row;
      try {
        const data = await requestWikipedia(artist.name);
        row = { key: artist.key, name: artist.name, views: artist.views,
          ...chooseWikipediaPage(artist.name, data.query?.pages || []) };
      } catch (error) {
        row = { key: artist.key, name: artist.name, views: artist.views, status: 'error', error: error.message };
      }
      rows.set(row.key, row);
      fs.appendFileSync(RAW, `${JSON.stringify(row)}\n`);
      if ((index + 1) % 20 === 0 || index + 1 === pending.length) {
        const matched = queue.filter(item => rows.get(item.key)?.status === 'matched').length;
        console.log(`${index + 1}/${pending.length}; ${matched} exact artists matched.`);
      }
      await sleep(DELAY);
    }

    const previous = readJson(OUTPUT, {});
    const output = { ...previous };
    let matchedArtists = 0;
    let resolvedSets = 0;
    for (const artist of queue) {
      const match = rows.get(artist.key);
      if (match?.status !== 'matched' || !match.genres?.length) continue;
      matchedArtists += 1;
      for (const id of artist.setIds) {
        output[id] = {
          genres: match.genres,
          confidence: 'exact-wikipedia-lead',
          artist: artist.name,
          source: match.url
        };
        resolvedSets += 1;
      }
    }
    fs.writeFileSync(OUTPUT, `${JSON.stringify(output, null, 2)}\n`);
    fs.writeFileSync(REPORT, `${JSON.stringify({
      createdAt: new Date().toISOString(), targetSets: targets.length,
      queuedArtists: queue.length, pendingLookups: pending.length,
      matchedArtists, resolvedSets, totalCacheRows: Object.keys(output).length,
      cutoffViews: queue.at(-1)?.views || 0
    }, null, 2)}\n`);
    console.log(`${OUTPUT}: ${resolvedSets} current sets resolved from ${matchedArtists} exact artists.`);

    for (const [command, args] of [
      [process.execPath, ['scripts/apply-genres.mjs']],
      [process.execPath, ['scripts/build-genre-review-queue.mjs']],
      [process.execPath, ['build-selector.mjs']],
      [process.execPath, ['audit-selector.mjs']]
    ]) {
      const result = spawnSync(command, args, { stdio: 'inherit' });
      if (result.status !== 0) throw new Error(`${args[0]} exited with ${result.status}`);
    }
  } finally {
    if (fs.existsSync(PID_FILE)) fs.unlinkSync(PID_FILE);
  }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) await main();
