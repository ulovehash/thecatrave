// Resolve the remaining artist genres from a local, gzipped catalogue release
// dump. The file is streamed: even a 10+ GB archive uses only a small buffer.
//
//   CATALOG_DUMP=.cache/catalog-data/releases-20260901.xml.gz \
//     node scripts/genres-from-catalog-dump.mjs
//
// Results go to a compact project cache. The large source dump stays in
// .cache/, which is ignored by git.
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import { fileURLToPath } from 'node:url';
import { artistKey } from './artist-key.mjs';
import { matchTag, VOCAB } from './genre-vocab.mjs';

const OUTPUT = process.env.CATALOG_CACHE || 'selector-catalog-cache.json';
const DUMP = process.env.CATALOG_DUMP;
const MIN_RELEASES = Math.max(1, Number(process.env.MIN_RELEASES || 3));
const OFF = new Set(['Rock', 'Jazz', 'Classical', 'Blues', 'Folk, World, & Country',
  'Stage & Screen', 'Non-Music', "Children's", 'Latin']);

function xmlText(value = '') {
  return value
    .replace(/^<!\[CDATA\[|\]\]>$/g, '')
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"').replace(/&apos;/g, "'");
}

const values = (xml, tag) => [...xml.matchAll(new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`, 'g'))]
  .map(match => xmlText(match[1].trim()));
const first = (xml, tag) => values(xml, tag)[0] || '';
const baseName = name => name.replace(/\s+\(\d+\)\s*$/, '').trim();

export function releaseFacts(xml, targets) {
  const artistsXml = xml.match(/<artists>([\s\S]*?)<\/artists>/)?.[1];
  if (!artistsXml) return [];
  const genres = values(xml.match(/<genres>([\s\S]*?)<\/genres>/)?.[1] || '', 'genre');
  const styles = values(xml.match(/<styles>([\s\S]*?)<\/styles>/)?.[1] || '', 'style');
  if (!genres.length && !styles.length) return [];

  const facts = [];
  for (const match of artistsXml.matchAll(/<artist>([\s\S]*?)<\/artist>/g)) {
    const block = match[1];
    const id = first(block, 'id');
    const name = first(block, 'name');
    const key = artistKey(baseName(name));
    if (!id || !name || !targets.has(key)) continue;
    facts.push({ key, id, name, literal: artistKey(name) === key, genres, styles });
  }
  return facts;
}

function evaluate(candidate) {
  if (candidate.releases < MIN_RELEASES) return { reject: `only ${candidate.releases} releases` };
  const off = [...candidate.genreCounts].filter(([genre]) => OFF.has(genre))
    .reduce((sum, [, count]) => sum + count, 0);
  if (off / candidate.releases > 0.4) return { reject: 'not club music' };

  const ranked = [...candidate.styleCounts].sort((a, b) => b[1] - a[1]);
  const genres = [];
  for (const [style, count] of ranked) {
    if (count / candidate.releases < 0.34) continue;
    const genre = matchTag(style);
    if (genre && !genres.includes(genre)) genres.push(genre);
  }
  genres.sort((a, b) => VOCAB.indexOf(a) - VOCAB.indexOf(b));
  return {
    genres: genres.slice(0, 3),
    top: ranked.slice(0, 4).map(([style, count]) => `${style}:${count}`),
    ...(genres.length ? {} : { reject: 'styles outside our vocabulary' })
  };
}

export function chooseCandidate(candidates) {
  if (candidates.length > 1) {
    return { genres: [], reject: `ambiguous name: ${candidates.length} profiles` };
  }
  const evaluated = candidates.map(candidate => ({ candidate, result: evaluate(candidate) }));
  const passing = evaluated.filter(row => row.result.genres?.length);
  if (passing.length === 1) return { ...passing[0].result, artistId: passing[0].candidate.id };
  return { genres: [], reject: 'no qualifying artist profile' };
}

async function main() {
  if (!DUMP || !fs.existsSync(DUMP)) {
    console.error('Set CATALOG_DUMP to an existing .xml.gz release dump.');
    process.exit(1);
  }
  const queue = JSON.parse(fs.readFileSync('selector-genre-review-queue.json', 'utf8'));
  const previousCache = fs.existsSync(OUTPUT) ? JSON.parse(fs.readFileSync(OUTPUT, 'utf8')) : {};
  const registry = JSON.parse(fs.readFileSync('selector-artists.json', 'utf8'));
  const rows = process.env.RECHECK === '1'
    ? [...queue, ...Object.entries(previousCache).map(([key, row]) => ({ key, artist: row.name, sets: row.sets }))]
    : queue;
  const targetRows = new Map(rows
    .filter(row => process.env.RECHECK === '1' || !registry[row.key]?.genres?.length)
    .map(row => [row.key, row]));
  const targets = new Set(targetRows.keys());
  const candidates = new Map();
  const input = fs.createReadStream(DUMP);
  const stream = /\.gz$/i.test(DUMP) ? input.pipe(zlib.createGunzip()) : input;
  const recordTag = /masters/i.test(path.basename(DUMP)) ? 'master' : 'release';
  const closeTag = `</${recordTag}>`;
  let buffer = '';
  let records = 0;
  let matchedReleases = 0;
  let lastReport = Date.now();

  console.log(`Streaming ${path.basename(DUMP)} for ${targets.size} unresolved artists...`);
  try {
    for await (const chunk of stream) {
      buffer += chunk.toString('utf8');
      let end;
      while ((end = buffer.indexOf(closeTag)) !== -1) {
      const piece = buffer.slice(0, end + closeTag.length);
      buffer = buffer.slice(end + closeTag.length);
      const start = piece.indexOf(`<${recordTag} `);
      if (start === -1) continue;
      records += 1;
      const facts = releaseFacts(piece.slice(start), targets);
      if (facts.length) matchedReleases += 1;
      for (const fact of facts) {
        const byId = candidates.get(fact.key) || new Map();
        const candidate = byId.get(fact.id) || {
          id: fact.id, name: fact.name, literal: fact.literal, releases: 0,
          genreCounts: new Map(), styleCounts: new Map()
        };
        candidate.releases += 1;
        for (const genre of fact.genres) candidate.genreCounts.set(genre, (candidate.genreCounts.get(genre) || 0) + 1);
        for (const style of fact.styles) candidate.styleCounts.set(style, (candidate.styleCounts.get(style) || 0) + 1);
        byId.set(fact.id, candidate);
        candidates.set(fact.key, byId);
      }
        if (Date.now() - lastReport > 5000) {
          const pct = input.bytesRead / fs.statSync(DUMP).size * 100;
          process.stdout.write(`\r  ${pct.toFixed(1)}%, ${records.toLocaleString()} ${recordTag}s, ${matchedReleases.toLocaleString()} matches`);
          lastReport = Date.now();
        }
      }
    }
  } catch (error) {
    if (process.env.ALLOW_PARTIAL !== '1') throw error;
    process.stdout.write(`\nPartial archive ended after ${records.toLocaleString()} complete ${recordTag}s; keeping complete-record evidence only.\n`);
  }
  process.stdout.write('\n');

  const cache = previousCache;
  let found = 0;
  for (const [key, row] of targetRows) {
    const profiles = [...(candidates.get(key)?.values() || [])];
    const result = chooseCandidate(profiles);
    cache[key] = {
      name: row.artist,
      sets: row.sets,
      genres: result.genres || [],
      ...result,
      profiles: profiles.length
    };
    if (cache[key].genres.length) found += 1;
  }
  fs.writeFileSync(OUTPUT, JSON.stringify(cache) + '\n');
  console.log(`${OUTPUT}: ${found}/${targetRows.size} artists resolved.`);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) await main();
