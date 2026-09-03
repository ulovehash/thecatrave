// Build selector-data.json from the YouTube Data API v3. Zero npm dependencies,
// runs on any Node >= 14. Needs a key in the environment:
//
//   export YOUTUBE_API_KEY='your-key'
//   node scripts/fetch-sets.mjs
//   node build-selector.mjs
//
// The key stays in your shell. Nothing about it is written to disk or committed.
// Unlike the RSS feed, the API returns each video's duration, so short clips and
// Shorts are filtered out and only real sets remain.

import fs from 'node:fs';
import https from 'node:https';
import { channels } from '../selector-channels.mjs';

const KEY = process.env.YOUTUBE_API_KEY;
if (!KEY) {
  console.error('Missing YOUTUBE_API_KEY. Run:  export YOUTUBE_API_KEY=your-key && node scripts/fetch-sets.mjs');
  process.exit(1);
}

const API = 'https://www.googleapis.com/youtube/v3';
const MIN_SECONDS = 20 * 60;   // a set, not a clip
const PER_CHANNEL = 1200;      // keep this many most-recent sets per channel
const SCAN_CAP = 4000;         // safety cap on videos scanned per channel
const SKIP_TITLE = /\b(trailer|teaser|announcement|recap|aftermovie|interview|documentary|#shorts|shorts|preview|tickets|out now|full lineup|line-?up)\b/i;

function api(path, params) {
  const url = new URL(`${API}/${path}`);
  url.search = new URLSearchParams({ ...params, key: KEY }).toString();
  return new Promise((resolve, reject) => {
    const req = https.get(url, res => {
      let body = '';
      res.setEncoding('utf8');
      res.on('data', c => { body += c; });
      res.on('end', () => {
        let json = null;
        try { json = JSON.parse(body); } catch {}
        if (res.statusCode < 200 || res.statusCode >= 300) {
          const msg = json?.error?.message || body.slice(0, 300);
          reject(new Error(`${path} ${res.statusCode}: ${msg}`));
          return;
        }
        resolve(json);
      });
    });
    req.setTimeout(25000, () => req.destroy(new Error(`${path}: timed out`)));
    req.on('error', reject);
  });
}

function isoToSeconds(iso) {
  const m = /^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/.exec(iso || '');
  return m ? (+m[1] || 0) * 3600 + (+m[2] || 0) * 60 + (+m[3] || 0) : 0;
}

// Best-effort artist from a set title: text before the first separator, minus a
// leading broadcaster mention and trailing dates / parentheticals.
function parseArtist(title, broadcaster) {
  let s = title.split(/\s+[@|·–—]\s+|\s+[-]\s+|:\s+/)[0].trim();
  s = s.replace(new RegExp(`^${broadcaster.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*[:\\-|]?\\s*`, 'i'), '').trim();
  s = s.replace(/\s*[([][^)\]]*[)\]]\s*$/, '').trim();
  s = s.replace(/\s+\d{1,2}[./]\d{1,2}([./]\d{2,4})?$/, '').trim();
  return s || title.trim();
}

async function uploadsPlaylist(channelId) {
  const data = await api('channels', { part: 'contentDetails', id: channelId });
  return data.items?.[0]?.contentDetails?.relatedPlaylists?.uploads || null;
}

async function allVideoIds(playlistId) {
  const ids = [];
  let pageToken;
  do {
    const data = await api('playlistItems', {
      part: 'contentDetails', playlistId, maxResults: '50',
      ...(pageToken ? { pageToken } : {})
    });
    for (const it of data.items || []) ids.push(it.contentDetails.videoId);
    pageToken = data.nextPageToken;
  } while (pageToken && ids.length < SCAN_CAP);
  return ids;
}

async function hydrate(ids) {
  const out = [];
  for (let i = 0; i < ids.length; i += 50) {
    const data = await api('videos', { part: 'snippet,contentDetails,statistics', id: ids.slice(i, i + 50).join(',') });
    for (const v of data.items || []) {
      const st = v.statistics || {};
      out.push({
        id: v.id,
        title: v.snippet.title,
        published: v.snippet.publishedAt,
        live: v.snippet.liveBroadcastContent,   // 'none' | 'live' | 'upcoming'
        seconds: isoToSeconds(v.contentDetails.duration),
        views: st.viewCount != null ? Number(st.viewCount) : null,
        likes: st.likeCount != null ? Number(st.likeCount) : null   // dislikeCount removed by YouTube in 2021
      });
    }
  }
  return out;
}

const seen = new Set();
const sets = [];

console.log(`Fetching from ${channels.length} channels via the YouTube Data API…\n`);

for (const ch of channels) {
  process.stdout.write(`  … ${ch.broadcaster}`);
  try {
    const playlist = await uploadsPlaylist(ch.channelId);
    if (!playlist) { process.stdout.write(`\r  ✗ ${ch.broadcaster}: channel ${ch.channelId} not found\n`); continue; }
    const ids = await allVideoIds(playlist);
    const videos = await hydrate(ids);
    let kept = 0;
    for (const v of videos) {
      if (kept >= PER_CHANNEL) break;
      if (v.live && v.live !== 'none') continue;      // skip live/upcoming, keep finished streams
      if (v.seconds < MIN_SECONDS) continue;
      if (SKIP_TITLE.test(v.title)) continue;
      if (seen.has(v.id)) continue;
      seen.add(v.id);
      sets.push({
        id: v.id,
        title: v.title,
        artist: parseArtist(v.title, ch.broadcaster),
        broadcaster: ch.broadcaster,
        published: v.published,
        seconds: v.seconds,
        views: v.views,
        likes: v.likes
      });
      kept += 1;
    }
    process.stdout.write(`\r  ✓ ${ch.broadcaster}: ${kept} sets (${videos.length} videos scanned)\n`);
  } catch (err) {
    process.stdout.write(`\r  ✗ ${ch.broadcaster}: ${err.message}\n`);
  }
}

sets.sort((a, b) => (a.published < b.published ? 1 : -1));
fs.writeFileSync('selector-data.json', JSON.stringify(sets, null, 0) + '\n');
console.log(`\nWrote selector-data.json — ${sets.length} sets from ${channels.length} channels.`);
if (!sets.length) {
  console.log('\nNo sets written. If every channel shows a 403, enable "YouTube Data API v3" for the');
  console.log('project the key belongs to, and check the key has no HTTP-referrer restriction.');
}
