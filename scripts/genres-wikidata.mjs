// Look up artist genres on Wikidata (property P136) in batches. Keyless. The
// public SPARQL endpoint is rate-limited, so we go ~1 request / 1.5s and cache
// every result (including "no genre found") in selector-wd-cache.json.
//
//   node scripts/build-artist-registry.mjs
//   node scripts/genres-wikidata.mjs                 # all uncached artists
//   MIN_SETS=2 node scripts/genres-wikidata.mjs      # only recurring acts
//   MAX_BATCHES=20 node scripts/genres-wikidata.mjs  # stop early (timing probe)

import fs from 'node:fs';
import https from 'node:https';
import { matchTag, VOCAB } from './genre-vocab.mjs';

const REG = 'selector-artists.json';
const CACHE = 'selector-wd-cache.json';
const BATCH = 40;
const DELAY = 1500;
const MIN_SETS = Number(process.env.MIN_SETS) || 1;
const MAX_BATCHES = Number(process.env.MAX_BATCHES) || Infinity;

const reg = JSON.parse(fs.readFileSync(REG, 'utf8'));
const cache = fs.existsSync(CACHE) ? JSON.parse(fs.readFileSync(CACHE, 'utf8')) : {};
const sleep = ms => new Promise(r => setTimeout(r, ms));

const MUSIC_OCC = ['Q130857', 'Q183945', 'Q639669', 'Q36834', 'Q177220', 'Q158852', 'Q855091', 'Q753110'];

function sparql(query) {
  const url = 'https://query.wikidata.org/sparql?format=json&query=' + encodeURIComponent(query);
  return new Promise((resolve, reject) => {
    const req = https.get(url, {
      headers: { 'user-agent': 'thecatrave-selector/1.0 (https://thecatrave.com; genre tagging)', accept: 'application/sparql-results+json' }
    }, res => {
      let b = '';
      res.setEncoding('utf8');
      res.on('data', c => { b += c; });
      res.on('end', () => {
        if (res.statusCode !== 200) return reject(new Error(`HTTP ${res.statusCode}: ${b.slice(0, 120)}`));
        try { resolve(JSON.parse(b)); } catch (e) { reject(e); }
      });
    });
    req.setTimeout(60000, () => req.destroy(new Error('timeout')));
    req.on('error', reject);
  });
}

const lit = s => '"' + String(s).replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"';

// candidates: has >= MIN_SETS sets, no genres yet, not already cached
const todo = Object.entries(reg)
  .filter(([k, r]) => r.sets >= MIN_SETS && !(r.genres && r.genres.length) && !(k in cache))
  .sort((a, b) => b[1].sets - a[1].sets)
  .map(([k, r]) => ({ key: k, name: r.display }));

console.log(`${todo.length} artists to look up, ${Math.ceil(todo.length / BATCH)} batches (~${Math.ceil(todo.length / BATCH * DELAY / 60000)} min).`);

let done = 0;
let hits = 0;
for (let i = 0; i < todo.length && i / BATCH < MAX_BATCHES; i += BATCH) {
  const chunk = todo.slice(i, i + BATCH);
  const values = chunk.map(c => `${lit(c.name)}@en`).join(' ');
  const query = `
SELECT ?name ?genreLabel WHERE {
  VALUES ?name { ${values} }
  ?s rdfs:label|skos:altLabel ?name .
  { ?s wdt:P106 ?occ . VALUES ?occ { ${MUSIC_OCC.map(q => 'wd:' + q).join(' ')} } }
  UNION { ?s wdt:P31 wd:Q215380 }
  ?s wdt:P136 ?g .
  ?g rdfs:label ?genreLabel . FILTER(LANG(?genreLabel) = "en")
}`;
  let rows = [];
  try {
    const json = await sparql(query);
    rows = json.results.bindings;
  } catch (e) {
    process.stdout.write(`\n  batch ${i / BATCH} failed: ${e.message}\n`);
    await sleep(DELAY * 3);
    continue;
  }

  const byName = new Map();
  for (const r of rows) {
    const nm = r.name.value.toLowerCase();
    const g = matchTag(r.genreLabel.value);
    if (!g) continue;
    const arr = byName.get(nm) || byName.set(nm, []).get(nm);
    if (!arr.includes(g)) arr.push(g);
  }
  for (const c of chunk) {
    const g = byName.get(c.name.toLowerCase());
    cache[c.key] = g ? g.sort((a, b) => VOCAB.indexOf(a) - VOCAB.indexOf(b)).slice(0, 4) : [];
    if (g) hits += 1;
  }
  done += chunk.length;
  process.stdout.write(`\r  ${done}/${todo.length}  (${hits} with a genre)`);
  fs.writeFileSync(CACHE, JSON.stringify(cache, null, 0) + '\n');
  await sleep(DELAY);
}
process.stdout.write('\n');

// fold cache hits into the registry
let applied = 0;
for (const [key, g] of Object.entries(cache)) {
  const row = reg[key];
  if (!row || !g || !g.length) continue;
  if (row.genres && row.genres.length) continue;
  row.genres = g;
  if (!row.sources.includes('wikidata')) row.sources.push('wikidata');
  applied += 1;
}
fs.writeFileSync(REG, JSON.stringify(reg, null, 0) + '\n');
const tagged = Object.values(reg).filter(r => r.genres && r.genres.length).length;
console.log(`wikidata: ${hits} new hits this run. registry now ${tagged}/${Object.keys(reg).length} artists tagged (${applied} from wikidata).`);
