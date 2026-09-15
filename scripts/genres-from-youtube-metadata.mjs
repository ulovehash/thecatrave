// Fetch title/description/uploader tags for unresolved sets in batches of 50.
// Raw metadata is local-only in .cache; the project cache stores genres and
// evidence names, never copied descriptions. A genre needs two independent
// metadata signals, which blocks channel-wide boilerplate tags.
//
//   YOUTUBE_API_KEY=... node scripts/genres-from-youtube-metadata.mjs
//   node scripts/apply-genres.mjs && node build-selector.mjs
import fs from 'node:fs';
import https from 'node:https';
import { declaredGenresInTitle, genresFromDesc } from './genre-text.mjs';
import { matchTag, VOCAB } from './genre-vocab.mjs';

const RAW_FILE = '.cache/youtube-genre-signals.jsonl';
const OUTPUT = 'selector-youtube-genre-cache.json';
const BATCH = 50;
const LIMIT = Math.max(0, Number(process.env.LIMIT || 0)) || Infinity;

function localKey() {
  if (process.env.YOUTUBE_API_KEY) return process.env.YOUTUBE_API_KEY;
  for (const file of ['.env.local', '.env']) {
    if (!fs.existsSync(file)) continue;
    for (const line of fs.readFileSync(file, 'utf8').split(/\r?\n/)) {
      const match = line.match(/^\s*YOUTUBE_API_KEY\s*=\s*(.*?)\s*$/);
      if (!match) continue;
      return match[1].replace(/^(['"])(.*)\1$/, '$2');
    }
  }
  return '';
}

const key = localKey();
if (!key) {
  console.error('Missing YOUTUBE_API_KEY. Add YOUTUBE_API_KEY=... to the gitignored .env file.');
  process.exit(1);
}

function api(ids, attempt = 0) {
  const url = new URL('https://www.googleapis.com/youtube/v3/videos');
  url.search = new URLSearchParams({ part: 'snippet', id: ids.join(','), key }).toString();
  return new Promise((resolve, reject) => {
    const req = https.get(url, response => {
      let body = '';
      response.setEncoding('utf8');
      response.on('data', chunk => { body += chunk; });
      response.on('end', async () => {
        let data;
        try { data = JSON.parse(body); } catch { data = null; }
        if (response.statusCode >= 200 && response.statusCode < 300 && data) return resolve(data);
        if (attempt < 3 && (response.statusCode === 429 || response.statusCode >= 500)) {
          await new Promise(done => setTimeout(done, 1000 * 2 ** attempt));
          return resolve(api(ids, attempt + 1));
        }
        reject(new Error(`YouTube ${response.statusCode}: ${data?.error?.message || body.slice(0, 200)}`));
      });
    });
    req.setTimeout(30000, () => req.destroy(new Error('YouTube request timed out')));
    req.on('error', reject);
  });
}

function readRaw() {
  const rows = new Map();
  if (!fs.existsSync(RAW_FILE)) return rows;
  for (const line of fs.readFileSync(RAW_FILE, 'utf8').split(/\r?\n/)) {
    if (!line) continue;
    try { const row = JSON.parse(line); if (row.id) rows.set(row.id, row); } catch {}
  }
  return rows;
}

const canonical = values => [...new Set(values.map(matchTag).filter(Boolean))]
  .sort((a, b) => VOCAB.indexOf(a) - VOCAB.indexOf(b));

function classify(row) {
  const signals = {
    title: canonical(declaredGenresInTitle(row.title || '')),
    description: canonical(genresFromDesc(row.description || '')),
    tags: canonical((row.tags || []).flatMap(tag => [matchTag(tag), ...genresFromDesc(tag)]))
  };
  const genres = VOCAB.filter(genre => Object.values(signals).filter(list => list.includes(genre)).length >= 2).slice(0, 4);
  if (!genres.length) return null;
  return {
    genres,
    confidence: 'high',
    evidence: Object.entries(signals).filter(([, list]) => genres.some(genre => list.includes(genre))).map(([name]) => name)
  };
}

fs.mkdirSync('.cache', { recursive: true });
const sets = JSON.parse(fs.readFileSync('selector-data.json', 'utf8'));
const raw = readRaw();
const targets = sets.filter(set => !set.genres?.length && set.id && !raw.has(set.id)).slice(0, LIMIT);
console.log(`${targets.length} unresolved videos to fetch in ${Math.ceil(targets.length / BATCH)} API calls.`);

for (let index = 0; index < targets.length; index += BATCH) {
  const group = targets.slice(index, index + BATCH);
  const data = await api(group.map(set => set.id));
  const found = new Map((data.items || []).map(item => [item.id, item.snippet || {}]));
  const lines = [];
  for (const set of group) {
    const snippet = found.get(set.id);
    const row = snippet ? {
      id: set.id,
      title: snippet.title || '',
      description: (snippet.description || '').slice(0, 5000),
      tags: snippet.tags || [],
      categoryId: snippet.categoryId || ''
    } : { id: set.id, missing: true };
    raw.set(set.id, row);
    lines.push(JSON.stringify(row));
  }
  fs.appendFileSync(RAW_FILE, lines.join('\n') + '\n');
  if ((index / BATCH) % 20 === 0) process.stdout.write(`\r  ${Math.min(index + BATCH, targets.length)}/${targets.length}`);
}
process.stdout.write('\n');

const output = {};
for (const [id, row] of raw) {
  const result = classify(row);
  if (result) output[id] = result;
}
fs.writeFileSync(OUTPUT, JSON.stringify(output) + '\n');
console.log(`${OUTPUT}: ${Object.keys(output).length} sets have two-signal genre evidence.`);
