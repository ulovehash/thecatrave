// Build selector-data.json from the YouTube channels in selector-channels.mjs.
// Zero npm dependencies; needs Node >= 18 for global fetch and a YouTube Data
// API v3 key in the environment:
//
//   export YOUTUBE_API_KEY='your-key'
//   node scripts/fetch-sets.mjs
//   node build-selector.mjs
//
// The key stays in your shell. Nothing about it is written to disk or committed.

import fs from 'node:fs';
import { channels } from '../selector-channels.mjs';

const KEY = process.env.YOUTUBE_API_KEY;
if (!KEY) {
  console.error('Missing YOUTUBE_API_KEY. Run:  export YOUTUBE_API_KEY=... && node scripts/fetch-sets.mjs');
  process.exit(1);
}
if (typeof fetch !== 'function') {
  console.error('This script needs Node >= 18 (global fetch). Try:  nvm use 20');
  process.exit(1);
}

const API = 'https://www.googleapis.com/youtube/v3';
const MIN_SECONDS = 20 * 60;                 // a DJ set, not a trailer or announcement
const SKIP_TITLE = /\b(trailer|teaser|announcement|recap|aftermovie|interview|documentary|#shorts|coming soon|out now)\b/i;

async function api(path, params) {
  const url = new URL(`${API}/${path}`);
  url.search = new URLSearchParams({ ...params, key: KEY }).toString();
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${path} ${res.status}: ${(await res.text()).slice(0, 200)}`);
  return res.json();
}

// ISO 8601 duration (PT1H2M3S) -> seconds
function isoToSeconds(iso) {
  const m = /^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/.exec(iso || '');
  if (!m) return 0;
  return (+m[1] || 0) * 3600 + (+m[2] || 0) * 60 + (+m[3] || 0);
}

// Best-effort artist from a set title: take the text before the first separator,
// drop a leading broadcaster mention, trim dates and noise.
function parseArtist(title, broadcaster) {
  let s = title.split(/\s+[@|–—]\s+| - |: /)[0].trim();
  s = s.replace(new RegExp(`^${broadcaster}\\s*[:\\-|]?\\s*`, 'i'), '').trim();
  s = s.replace(/\s*[\(\[][^\)\]]*[\)\]]\s*$/, '').trim();          // trailing (…) / […]
  s = s.replace(/\s+\d{1,2}[./]\d{1,2}([./]\d{2,4})?$/, '').trim();  // trailing date
  return s || title.trim();
}

async function resolveUploads(entry) {
  const params = entry.id
    ? { part: 'contentDetails,snippet', id: entry.id }
    : { part: 'contentDetails,snippet', forHandle: entry.handle };
  const data = await api('channels', params);
  const ch = data.items?.[0];
  if (!ch) return null;
  return { uploads: ch.contentDetails.relatedPlaylists.uploads, channelTitle: ch.snippet.title };
}

async function playlistVideoIds(playlistId) {
  const ids = [];
  let pageToken;
  do {
    const data = await api('playlistItems', {
      part: 'contentDetails', playlistId, maxResults: '50',
      ...(pageToken ? { pageToken } : {})
    });
    for (const it of data.items || []) ids.push(it.contentDetails.videoId);
    pageToken = data.nextPageToken;
  } while (pageToken);
  return ids;
}

async function hydrate(ids) {
  const out = [];
  for (let i = 0; i < ids.length; i += 50) {
    const data = await api('videos', { part: 'snippet,contentDetails', id: ids.slice(i, i + 50).join(',') });
    for (const v of data.items || []) {
      out.push({
        id: v.id,
        title: v.snippet.title,
        published: v.snippet.publishedAt,
        seconds: isoToSeconds(v.contentDetails.duration)
      });
    }
  }
  return out;
}

const seen = new Set();
const sets = [];
const summary = [];

for (const entry of channels) {
  const label = entry.broadcaster;
  try {
    const resolved = await resolveUploads(entry);
    if (!resolved) { summary.push(`  ✗ ${label}: could not resolve ${entry.handle || entry.id}`); continue; }
    const ids = await playlistVideoIds(resolved.uploads);
    const videos = await hydrate(ids);
    let kept = 0;
    for (const v of videos) {
      if (v.seconds < MIN_SECONDS) continue;
      if (SKIP_TITLE.test(v.title)) continue;
      if (seen.has(v.id)) continue;
      seen.add(v.id);
      sets.push({
        id: v.id,
        title: v.title,
        artist: parseArtist(v.title, label),
        broadcaster: label,
        published: v.published,
        seconds: v.seconds
      });
      kept += 1;
    }
    summary.push(`  ✓ ${label}: ${kept} sets (${videos.length} videos scanned)`);
  } catch (err) {
    summary.push(`  ✗ ${label}: ${err.message}`);
  }
}

sets.sort((a, b) => (a.published < b.published ? 1 : -1));
fs.writeFileSync('selector-data.json', JSON.stringify(sets, null, 0) + '\n');

console.log(summary.join('\n'));
console.log(`\nWrote selector-data.json — ${sets.length} sets from ${channels.length} channels.`);
