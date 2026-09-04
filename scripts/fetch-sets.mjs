// Incrementally build the set catalogue from the YouTube Data API. Zero npm
// dependencies, runs on any Node >= 14. Needs a key in the environment:
//
//   export YOUTUBE_API_KEY='your-key'
//   node scripts/fetch-sets.mjs
//   node build-selector.mjs
//
// selector-videos-cache.json is the persistent index of every long-form set ever
// seen (with its stats). Each run pages a channel's uploads newest-first, stops
// once it hits a run of already-cached videos, and calls the expensive
// videos.list only for the new ones. A cached video is never re-fetched just
// because its like count moved — set REFRESH_RECENT_DAYS to re-pull stats for
// recent uploads only.
//
// The key stays in your shell. Nothing about it is written to disk or committed.

import fs from 'node:fs';
import https from 'node:https';
import { channels } from '../selector-channels.mjs';
import { parseArtist, genreFromTitle, NOT_A_SET } from './parse-artist.mjs';

// SKIP_FETCH rebuilds selector-data.json from the existing cache without
// touching the API. Use it after changing a filter, so a threshold can be
// tried out without spending quota or waiting on a full crawl.
const SKIP_FETCH = process.env.SKIP_FETCH === '1';
const KEY = process.env.YOUTUBE_API_KEY;
if (!KEY && !SKIP_FETCH) {
  console.error('Missing YOUTUBE_API_KEY. Run:  export YOUTUBE_API_KEY=your-key && node scripts/fetch-sets.mjs');
  console.error('Or rebuild from the cache alone:  SKIP_FETCH=1 node scripts/fetch-sets.mjs');
  process.exit(1);
}

const API = 'https://www.googleapis.com/youtube/v3';
const CACHE_FILE = 'selector-videos-cache.json';

const MIN_SECONDS = 20 * 60;
// No floor. The whole point of the tool is the sets nobody has found, and a
// 500-view minimum was cutting 17,385 of them out of the catalogue before
// "hidden gems" and "niche sets" ever saw them.
const MIN_VIEWS = Number(process.env.MIN_VIEWS) || 0;
const PER_CHANNEL = Number(process.env.PER_CHANNEL) || Infinity;   // optional per-channel limiter
const MAX_SETS = Number(process.env.MAX_SETS) || Infinity;        // optional overall limiter
const SCAN_CAP = Number(process.env.SCAN_CAP) || 15000;
const STOP_AFTER_KNOWN = 80;                                  // consecutive cached IDs = we have reached known territory
const REFRESH_RECENT_DAYS = Number(process.env.REFRESH_RECENT_DAYS) || 0;   // 0 = never re-hydrate a cached video

const SKIP_TITLE = /\b(trailer|teaser|announcement|recap|aftermovie|interview|documentary|#shorts|shorts|preview|tickets|out now|full lineup|line-?up|track premiere|premiere:|snippet|music video|\bMV\b|elevator pitch)\b/i;

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
          reject(new Error(`${path} ${res.statusCode}: ${json?.error?.message || body.slice(0, 300)}`));
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


async function uploadsPlaylist(entry) {
  const params = entry.handle
    ? { part: 'contentDetails', forHandle: entry.handle }
    : { part: 'contentDetails', id: entry.channelId };
  let data = await api('channels', params);
  let uploads = data.items?.[0]?.contentDetails?.relatedPlaylists?.uploads;
  if (!uploads && entry.handle && entry.channelId) {
    data = await api('channels', { part: 'contentDetails', id: entry.channelId });
    uploads = data.items?.[0]?.contentDetails?.relatedPlaylists?.uploads;
  }
  return uploads || null;
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
        live: v.snippet.liveBroadcastContent,
        seconds: isoToSeconds(v.contentDetails.duration),
        views: st.viewCount != null ? Number(st.viewCount) : null,
        likes: st.likeCount != null ? Number(st.likeCount) : null,
        comments: st.commentCount != null ? Number(st.commentCount) : null
      });
    }
  }
  return out;
}

const cache = fs.existsSync(CACHE_FILE) ? JSON.parse(fs.readFileSync(CACHE_FILE, 'utf8')) : {};
const today = new Date().toISOString().slice(0, 10);
const recentCutoff = REFRESH_RECENT_DAYS ? Date.now() - REFRESH_RECENT_DAYS * 864e5 : 0;

// ONLY="Beatport,STVOL TV" limits the API scan to those broadcasters (or
// handles). The rebuild at the end still covers the whole cache.
const ONLY = (process.env.ONLY || '').split(',').map(s => s.trim().toLowerCase()).filter(Boolean);
const scanList = ONLY.length
  ? channels.filter(c => ONLY.includes(c.broadcaster.toLowerCase()) || ONLY.includes((c.handle || '').toLowerCase()))
  : channels;

console.log(`Cache has ${Object.keys(cache).length} videos. ${SKIP_FETCH ? 'Rebuilding from cache only, no API calls' : `Scanning ${scanList.length} channel(s)`}${ONLY.length ? ` (ONLY: ${scanList.map(c => c.broadcaster).join(', ')})` : ''}…\n`);

for (const ch of SKIP_FETCH ? [] : scanList) {
  process.stdout.write(`  … ${ch.broadcaster}`);
  try {
    const playlist = await uploadsPlaylist(ch);
    if (!playlist) { process.stdout.write(`\r  ✗ ${ch.broadcaster}: could not resolve ${ch.handle || ch.channelId}\n`); continue; }

    const ids = [];
    let pageToken, scanned = 0, knownStreak = 0;
    do {
      const data = await api('playlistItems', { part: 'contentDetails', playlistId: playlist, maxResults: '50', ...(pageToken ? { pageToken } : {}) });
      for (const it of data.items || []) {
        const vid = it.contentDetails.videoId;
        ids.push(vid);
        scanned += 1;
        knownStreak = (cache[vid] && cache[vid].b === ch.broadcaster) ? knownStreak + 1 : 0;
      }
      pageToken = data.nextPageToken;
    } while (pageToken && scanned < SCAN_CAP && knownStreak < STOP_AFTER_KNOWN);

    const need = ids.filter(v => {
      const c = cache[v];
      if (!c) return true;
      return recentCutoff && c.p && Date.parse(c.p) >= recentCutoff;
    });
    const hydrated = need.length ? await hydrate(need) : [];

    let added = 0;
    for (const v of hydrated) {
      if (v.live && v.live !== 'none') continue;
      if (v.seconds < MIN_SECONDS) continue;
      if (SKIP_TITLE.test(v.title)) continue;
      if (!cache[v.id]) added += 1;
      cache[v.id] = { t: v.title, b: ch.broadcaster, p: v.published, s: v.seconds, v: v.views, l: v.likes, c: v.comments, f: today };
    }
    process.stdout.write(`\r  ✓ ${ch.broadcaster}: +${added} new (${scanned} scanned, ${need.length} hydrated)\n`);
  } catch (err) {
    process.stdout.write(`\r  ✗ ${ch.broadcaster}: ${err.message}\n`);
  }
}

fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 0) + '\n');

// Rebuild selector-data.json from the whole cache. Each channel contributes its
// best PER_CHANNEL by likes + comments*3; channels are filled in selector-
// channels.mjs order, so when MAX_SETS is reached the tail channels are the ones
// that get trimmed. `title` is dropped here (it lives in the cache) to keep the
// fetched file small.
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

// Every qualifying set ships. PER_CHANNEL / MAX_SETS are optional limiters
// (unset = no limit). Fields are trimmed to keep the file small: year only,
// no comment count.
const sets = [];
for (const b of ordered) {
  if (sets.length >= MAX_SETS) break;
  const entries = byBroadcaster.get(b);
  entries.sort((a, z) => heat(z) - heat(a) || (z.v || 0) - (a.v || 0));
  const room = Math.min(PER_CHANNEL, MAX_SETS - sets.length);
  for (const e of entries.slice(0, room)) {
    const rec = { id: e.id, artist: parseArtist(e.t, b), broadcaster: b, year: e.p ? +String(e.p).slice(0, 4) : null, seconds: e.s, views: e.v, likes: e.l };
    const g = genreFromTitle(e.t, b);
    if (g.length) rec.genres = g;
    sets.push(rec);
  }
}
sets.sort((a, z) => (z.year || 0) - (a.year || 0));
fs.writeFileSync('selector-data.json', JSON.stringify(sets, null, 0) + '\n');

const mb = (fs.statSync('selector-data.json').size / 1048576).toFixed(2);
console.log(`\nCache: ${Object.keys(cache).length} videos. selector-data.json: ${sets.length} sets, ${mb} MB.`);
