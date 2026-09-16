// Refine catalogue-wide electronic fallback labels without an LLM. A specific genre is accepted
// only when two independent sources agree: release-catalogue styles,
// MusicBrainz/ListenBrainz tags, YouTube metadata, or an exact official music
// profile linked by the uploader.

import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { artistKey, splitArtists } from './artist-key.mjs';
import { releaseFacts } from './genres-from-catalog-dump.mjs';
import {
  BROAD_GENRES,
  consensusGenres,
  discogsProfileGenres,
  exactOfficialLinks,
  officialPageGenres,
  youtubeGenreSignals
} from './genre-refinement-core.mjs';

const PROJECT_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
process.chdir(PROJECT_ROOT);
const ROOT = '.cache/genre-refinement';
const PID_FILE = path.join(ROOT, 'run.pid');
const RAW_PAGES = path.join(ROOT, 'official-pages.jsonl');
const REPORT = path.join(ROOT, 'report.json');
const OUTPUT = 'selector-refined-genre-cache.json';
const DUMP = process.env.CATALOG_DUMP || '.cache/catalog-data/releases-20260901.xml.gz';
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

function readJson(file, fallback = {}) {
  try { return JSON.parse(fs.readFileSync(file, 'utf8')); } catch { return fallback; }
}

function readJsonl(file, key) {
  const rows = new Map();
  if (!fs.existsSync(file)) return rows;
  for (const line of fs.readFileSync(file, 'utf8').split(/\r?\n/)) {
    if (!line) continue;
    try { const row = JSON.parse(line); if (row[key]) rows.set(row[key], row); } catch {}
  }
  return rows;
}

async function fetchPage(url, attempt = 0) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 20000);
  try {
    const response = await fetch(url, {
      redirect: 'follow', signal: controller.signal,
      headers: { 'user-agent': 'Mozilla/5.0 (compatible; genre-metadata-audit/1.0)' }
    });
    if (!response.ok) {
      if (attempt < 2 && (response.status === 429 || response.status >= 500)) {
        await sleep(1500 * 2 ** attempt);
        return fetchPage(url, attempt + 1);
      }
      throw new Error(`${response.status} ${response.statusText}`);
    }
    return { finalUrl: response.url, html: await response.text() };
  } finally { clearTimeout(timer); }
}

function openMetadataBySet() {
  const report = readJson('.cache/genre-popular/report.json', {});
  return new Map((report.candidates || []).map(row => [row.id, row.result?.evidence || []]));
}

async function main() {
  fs.mkdirSync(ROOT, { recursive: true });
  fs.writeFileSync(PID_FILE, `${process.pid}\n`);
  try {
    // Later runs target only rows that are still broad. Preserve accepted
    // rows from earlier runs so they cannot disappear from the cache.
    const previousOutput = readJson(OUTPUT, {});
    const sets = readJson('selector-data.json', []);
    const targets = sets.filter(set => set.genres?.length === 1 && set.genres[0] === 'electronic');
    const youtubeRaw = readJsonl('.cache/youtube-genre-signals.jsonl', 'id');
    const videoCache = readJson('selector-videos-cache.json', {});
    const descriptionCache = readJson('selector-desc-cache.json', {});
    const tagsCache = readJson('selector-tags-cache.json', {});
    const openBySet = openMetadataBySet();
    const artists = new Map();
    for (const set of targets) {
      for (const name of splitArtists(set.artist)) {
        const key = artistKey(name);
        if (!key) continue;
        const row = artists.get(key) || {
          key, name, setIds: [], youtube: new Set(), openMetadata: new Set(), links: new Map()
        };
        row.setIds.push(set.id);
        const cached = youtubeRaw.get(set.id) || {};
        const raw = {
          title: cached.title || videoCache[set.id]?.t || '',
          description: cached.description || descriptionCache[set.id] || '',
          tags: cached.tags?.length ? cached.tags : (tagsCache[set.id] || []),
          missing: cached.missing && !descriptionCache[set.id] && !videoCache[set.id]
        };
        for (const genre of youtubeGenreSignals(raw)) row.youtube.add(genre);
        for (const evidence of openBySet.get(set.id) || []) {
          if ((evidence.sources || []).includes('open-metadata') && evidence.genre) row.openMetadata.add(evidence.genre);
        }
        for (const link of exactOfficialLinks(raw?.description, name)) row.links.set(link.url, link);
        artists.set(key, row);
      }
    }
    console.log(`Refinement: ${targets.length} electronic-only sets; ${artists.size} artists.`);

    const targetsByKey = new Set(artists.keys());
    const candidates = new Map();
    if (fs.existsSync(DUMP)) {
      const input = fs.createReadStream(DUMP);
      const stream = /\.gz$/i.test(DUMP) ? input.pipe(zlib.createGunzip()) : input;
      const closeTag = '</release>';
      let buffer = '';
      let records = 0;
      let matched = 0;
      let lastReport = Date.now();
      console.log(`Streaming ${path.basename(DUMP)} for repeated release-style evidence...`);
      try {
        for await (const chunk of stream) {
          buffer += chunk.toString('utf8');
          let end;
          while ((end = buffer.indexOf(closeTag)) !== -1) {
            const piece = buffer.slice(0, end + closeTag.length);
            buffer = buffer.slice(end + closeTag.length);
            const start = piece.indexOf('<release ');
            if (start === -1) continue;
            records += 1;
            const facts = releaseFacts(piece.slice(start), targetsByKey);
            if (facts.length) matched += 1;
            for (const fact of facts) {
              const byId = candidates.get(fact.key) || new Map();
              const profile = byId.get(fact.id) || {
                id: fact.id, name: fact.name, releases: 0, styleCounts: new Map()
              };
              profile.releases += 1;
              for (const style of fact.styles) profile.styleCounts.set(style, (profile.styleCounts.get(style) || 0) + 1);
              byId.set(fact.id, profile);
              candidates.set(fact.key, byId);
            }
            if (Date.now() - lastReport > 5000) {
              const pct = input.bytesRead / fs.statSync(DUMP).size * 100;
              console.log(`catalog ${pct.toFixed(1)}%; ${records.toLocaleString()} releases; ${matched.toLocaleString()} matches`);
              lastReport = Date.now();
            }
          }
        }
      } catch (error) {
        console.log(`Partial catalogue ended after ${records.toLocaleString()} releases: ${error.message}`);
      }
      console.log(`Catalogue scan complete: ${records.toLocaleString()} releases; ${matched.toLocaleString()} matches.`);
    } else {
      console.log(`Catalogue dump not found at ${DUMP}; continuing with cached online evidence.`);
    }

    const pageCache = readJsonl(RAW_PAGES, 'url');
    const allLinks = [...artists.values()].flatMap(row => [...row.links.values()]);
    const pendingLinks = allLinks.filter(link => !pageCache.has(link.url));
    console.log(`Exact official music links: ${allLinks.length}; fetches remaining: ${pendingLinks.length}.`);
    for (let index = 0; index < pendingLinks.length; index += 1) {
      const link = pendingLinks[index];
      let result;
      try {
        const page = await fetchPage(link.url);
        result = { url: link.url, source: link.source, finalUrl: page.finalUrl, genres: officialPageGenres(page.html) };
      } catch (error) {
        result = { url: link.url, source: link.source, genres: [], error: error.message };
      }
      pageCache.set(link.url, result);
      fs.appendFileSync(RAW_PAGES, `${JSON.stringify(result)}\n`);
      console.log(`official ${index + 1}/${pendingLinks.length}: ${link.source}; ${result.genres.join(', ') || 'no genre'}`);
      await sleep(300);
    }

    const acceptedArtists = new Map();
    const artistReport = [];
    for (const row of artists.values()) {
      const external = new Set([...row.youtube, ...row.openMetadata]);
      const profiles = [...(candidates.get(row.key)?.values() || [])];
      const qualifying = profiles.map(profile => discogsProfileGenres([profile]))
        .filter(result => result.genres?.length);
      const corroborated = qualifying.filter(result => result.genres.some(genre => external.has(genre)));
      const discogs = (qualifying.length === 1 ? qualifying[0] : corroborated.length === 1 ? corroborated[0] : { genres: [] });
      const signals = {
        youtube: [...row.youtube],
        openMetadata: [...row.openMetadata],
        discogs: discogs.genres || []
      };
      for (const link of row.links.values()) {
        const page = pageCache.get(link.url);
        if (page?.genres?.length) signals[`official-${link.source}`] = page.genres;
      }
      const consensus = consensusGenres(signals);
      if (consensus.length) acceptedArtists.set(row.key, consensus);
      artistReport.push({
        key: row.key, name: row.name, sets: row.setIds.length,
        signals, accepted: consensus, discogsProfiles: profiles.length
      });
    }

    const output = { ...previousOutput };
    for (const set of targets) {
      const evidence = splitArtists(set.artist).flatMap(name => acceptedArtists.get(artistKey(name)) || []);
      const genres = [...new Set(evidence.map(row => row.genre))];
      if (!genres.length) continue;
      output[set.id] = {
        genres,
        confidence: 'two-source-consensus',
        evidence: evidence.map(row => ({ genre: row.genre, sources: row.sources }))
      };
    }
    fs.writeFileSync(OUTPUT, `${JSON.stringify(output, null, 2)}\n`);
    const newlyResolved = Object.keys(output).filter(id => !previousOutput[id]).length;
    fs.writeFileSync(REPORT, `${JSON.stringify({
      createdAt: new Date().toISOString(), targetSets: targets.length,
      targetArtists: artists.size, acceptedArtists: acceptedArtists.size,
      resolvedSets: Object.keys(output).length, newlyResolved, artists: artistReport
    }, null, 2)}\n`);
    console.log(`${OUTPUT}: ${Object.keys(output).length} total sets refined; ${newlyResolved} new from ${acceptedArtists.size} artists.`);

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
