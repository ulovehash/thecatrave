// Build a review queue for untagged artists. One researched decision can fill
// every matching set, so the queue ranks artists by audience impact first.
//
//   node scripts/build-genre-review-queue.mjs

import fs from 'node:fs';
import { artistKey, splitArtists } from './artist-key.mjs';
import { isJunkArtist } from './parse-artist.mjs';

const sets = JSON.parse(fs.readFileSync('selector-data.json', 'utf8'));
const registry = JSON.parse(fs.readFileSync('selector-artists.json', 'utf8'));
const decisions = fs.existsSync('selector-genre-decisions.json')
  ? JSON.parse(fs.readFileSync('selector-genre-decisions.json', 'utf8'))
  : {};
const popularIds = new Set([...sets]
  .sort((a, b) => (b.views || 0) - (a.views || 0))
  .slice(0, Math.ceil(sets.length * 0.1))
  .map(set => set.id));

const queue = new Map();
for (const set of sets) {
  if (set.genres && set.genres.length) continue;
  for (const display of splitArtists(set.artist)) {
    const key = artistKey(display);
    if (!key || decisions[key] || isJunkArtist(display) || isJunkArtist(key)) continue;
    const row = queue.get(key) || {
      key,
      artist: registry[key]?.display || display,
      sets: 0,
      popularSets: 0,
      views: 0,
      suggestedGenres: [],
      evidence: [],
      confidence: null
    };
    row.sets += 1;
    row.views += set.views || 0;
    if (popularIds.has(set.id)) row.popularSets += 1;
    queue.set(key, row);
  }
}

const rows = [...queue.values()].sort((a, b) =>
  b.views - a.views || b.popularSets - a.popularSets || b.sets - a.sets || a.artist.localeCompare(b.artist));

fs.writeFileSync('selector-genre-review-queue.json', JSON.stringify(rows, null, 2) + '\n');
console.log(`selector-genre-review-queue.json: ${rows.length} artists awaiting review.`);
console.log('top 12:', rows.slice(0, 12).map(row => `${row.artist} (${row.popularSets} popular, ${row.sets} total)`).join(', '));
