// Stamp genres onto selector-data.json. Source of truth is the per-artist
// registry (selector-artists.json); a set inherits the union of its artists'
// genres. Two fallbacks fill sets whose act has no registry genres: the
// genre-in-title signal, and the Keep Hush uploader-keyword cache.
//
//   node scripts/build-artist-registry.mjs
//   node scripts/genres-title-rollup.mjs
//   node scripts/genres-wikidata.mjs
//   node scripts/apply-genres.mjs
//   node build-selector.mjs

import fs from 'node:fs';
import { matchTag, VOCAB } from './genre-vocab.mjs';
import { MANUAL, CHANNEL_GENRES } from './genre-manual.mjs';
import { artistKeys, artistKey } from './artist-key.mjs';
import { genresFromDesc } from './genre-text.mjs';

const sets = JSON.parse(fs.readFileSync('selector-data.json', 'utf8'));
const readJson = f => (fs.existsSync(f) ? JSON.parse(fs.readFileSync(f, 'utf8')) : {});
const registry = readJson('selector-artists.json');
const tagsCache = readJson('selector-tags-cache.json');   // { videoId: [rawKeyword] }
const descCache = readJson('selector-desc-cache.json');   // { videoId: descriptionText }

// seed the registry with the hand map (keyed the same way), and persist it so
// selector-artists.json is the full picture (manual + title + wikidata).
for (const [name, genres] of Object.entries(MANUAL)) {
  const k = artistKey(name);
  const row = registry[k] || (registry[k] = { display: name, sets: 0, broadcasters: [], genres: [], sources: [] });
  if (!row.genres || !row.genres.length) { row.genres = genres.slice(); row.sources = ['manual']; }
}
// Seed artists from the single-genre channels they played. An artist with no
// genre from a stronger source inherits the channel's, which then travels with
// them to every other channel in the catalogue.
let seeded = 0;
for (const s of sets) {
  const chan = CHANNEL_GENRES[s.broadcaster];
  if (!chan || !s.artist) continue;
  for (const k of artistKeys(s.artist)) {
    const row = registry[k];
    if (!row || (row.genres && row.genres.length)) continue;
    row.genres = chan.slice();
    row.sources = [...new Set([...(row.sources || []), 'channel'])];
    seeded += 1;
  }
}
fs.writeFileSync('selector-artists.json', JSON.stringify(registry, null, 0) + '\n');
console.log(`seeded ${seeded} artists from single-genre channels`);

const order = arr => [...new Set(arr)].sort((a, b) => VOCAB.indexOf(a) - VOCAB.indexOf(b)).slice(0, 4);
const kwGenres = kws => {
  const out = [];
  for (const k of kws || []) { const g = matchTag(k); if (g && !out.includes(g)) out.push(g); }
  return out;
};

let tagged = 0;
const hist = new Map();
const bySource = { artist: 0, title: 0, channel: 0, keywords: 0, description: 0 };

for (const s of sets) {
  const acc = [];
  let fromArtist = false;
  for (const k of artistKeys(s.artist)) {
    const row = registry[k];
    if (row && row.genres && row.genres.length) { acc.push(...row.genres); fromArtist = true; }
  }
  if (fromArtist) bySource.artist += 1;

  if (!acc.length && s.genres && s.genres.length) { acc.push(...s.genres); bySource.title += 1; }

  if (!acc.length) {
    const kw = kwGenres(tagsCache[s.id]);
    if (kw.length) { acc.push(...kw); bySource.keywords += 1; }
  }

  if (!acc.length && CHANNEL_GENRES[s.broadcaster]) {
    acc.push(...CHANNEL_GENRES[s.broadcaster]); bySource.channel += 1;
  }

  if (!acc.length && descCache[s.id]) {
    const dg = genresFromDesc(descCache[s.id]);
    if (dg.length) { acc.push(...dg); bySource.description += 1; }
  }

  if (acc.length) {
    s.genres = order(acc);
    tagged += 1;
    for (const g of s.genres) hist.set(g, (hist.get(g) || 0) + 1);
  } else if (s.genres) {
    delete s.genres;
  }
}

fs.writeFileSync('selector-data.json', JSON.stringify(sets, null, 0) + '\n');

const slots = { total: 0, tagged: 0 };
for (const s of sets) {
  const ks = artistKeys(s.artist);
  slots.total += ks.length || 1;
  for (const k of ks) if (registry[k] && registry[k].genres && registry[k].genres.length) slots.tagged += 1;
}

console.log(`sets tagged: ${tagged}/${sets.length} (${(100 * tagged / sets.length).toFixed(1)}%)`);
console.log(`artist-slots tagged: ${slots.tagged}/${slots.total} (${(100 * slots.tagged / slots.total).toFixed(1)}%)`);
console.log('by source:', bySource);
console.log('top genres:', [...hist.entries()].sort((a, b) => b[1] - a[1]).slice(0, 14).map(([g, n]) => `${g} ${n}`).join(', '));
