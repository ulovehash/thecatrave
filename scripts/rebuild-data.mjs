// Rebuild selector-data.json from selector-videos-cache.json. No API key: use
// this after changing the artist-parsing or filter rules without re-fetching.
//
//   node scripts/rebuild-data.mjs
//   node build-selector.mjs

import fs from 'node:fs';
import { channels } from '../selector-channels.mjs';
import { parseArtist, NOT_A_SET } from './parse-artist.mjs';

const MIN_SECONDS = 20 * 60;
const MIN_VIEWS = Number(process.env.MIN_VIEWS) || 500;
const PER_CHANNEL = Number(process.env.PER_CHANNEL) || Infinity;
const MAX_SETS = Number(process.env.MAX_SETS) || Infinity;

const cache = JSON.parse(fs.readFileSync('selector-videos-cache.json', 'utf8'));

const byBroadcaster = new Map();
for (const [id, e] of Object.entries(cache)) {
  if (e.s < MIN_SECONDS) continue;
  if (e.v != null && e.v < MIN_VIEWS) continue;
  if (NOT_A_SET.test(e.t || '')) continue;
  if (!byBroadcaster.has(e.b)) byBroadcaster.set(e.b, []);
  byBroadcaster.get(e.b).push({ id, ...e });
}

const heat = e => (e.l || 0) + (e.c || 0) * 3;
const order = channels.map(c => c.broadcaster);
const ordered = [...byBroadcaster.keys()].sort((a, z) => {
  const ia = order.indexOf(a), iz = order.indexOf(z);
  return (ia < 0 ? 1e9 : ia) - (iz < 0 ? 1e9 : iz);
});

const sets = [];
for (const b of ordered) {
  if (sets.length >= MAX_SETS) break;
  const entries = byBroadcaster.get(b);
  entries.sort((a, z) => heat(z) - heat(a) || (z.v || 0) - (a.v || 0));
  const room = Math.min(PER_CHANNEL, MAX_SETS - sets.length);
  for (const e of entries.slice(0, room)) {
    sets.push({ id: e.id, artist: parseArtist(e.t, b), broadcaster: b, year: e.p ? +String(e.p).slice(0, 4) : null, seconds: e.s, views: e.v, likes: e.l });
  }
}
sets.sort((a, z) => (z.year || 0) - (a.year || 0));
fs.writeFileSync('selector-data.json', JSON.stringify(sets, null, 0) + '\n');

const mb = (fs.statSync('selector-data.json').size / 1048576).toFixed(2);
console.log(`selector-data.json: ${sets.length} sets from ${byBroadcaster.size} channels, ${mb} MB.`);
