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

const KEY = process.env.YOUTUBE_API_KEY;
if (!KEY) {
  console.error('Missing YOUTUBE_API_KEY. Run:  export YOUTUBE_API_KEY=your-key && node scripts/fetch-sets.mjs');
  process.exit(1);
}

const API = 'https://www.googleapis.com/youtube/v3';
const CACHE_FILE = 'selector-videos-cache.json';

const MIN_SECONDS = 20 * 60;
const MIN_VIEWS = Number(process.env.MIN_VIEWS) || 500;
const PER_CHANNEL = Number(process.env.PER_CHANNEL) || 500;
const SCAN_CAP = Number(process.env.SCAN_CAP) || 15000;
const STOP_AFTER_KNOWN = 80;                                  // consecutive cached IDs = we have reached known territory
const REFRESH_RECENT_DAYS = Number(process.env.REFRESH_RECENT_DAYS) || 0;   // 0 = never re-hydrate a cached video

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

function parseArtist(title, broadcaster) {
  let s = title.split(/\s+[@|·–—]\s+|\s+[-]\s+|:\s+/)[0].trim();
  s = s.replace(new RegExp(`^${broadcaster.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*[:\\-|]?\\s*`, 'i'), '').trim();
  s = s.replace(/\s*[([][^)\]]*[)\]]\s*$/, '').trim();
  s = s.replace(/\s+\d{1,2}[./]\d{1,2}([./]\d{2,4})?$/, '').trim();
  return s || title.trim();
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

console.log(`Cache has ${Object.keys(cache).length} videos. Scanning ${channels.length} channels…\n`);

for (const ch of channels) {
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

// Rebuild selector-data.json from the whole cache: each channel's best PER_CHANNEL by likes+comments.
const byBroadcaster = new Map();
for (const [id, e] of Object.entries(cache)) {
  if (e.s < MIN_SECONDS) continue;
  if (e.v != null && e.v < MIN_VIEWS) continue;
  if (!byBroadcaster.has(e.b)) byBroadcaster.set(e.b, []);
  byBroadcaster.get(e.b).push({ id, ...e });
}
const heat = e => (e.l || 0) + (e.c || 0) * 3;
const sets = [];
for (const [b, entries] of byBroadcaster) {
  entries.sort((a, z) => heat(z) - heat(a) || (z.v || 0) - (a.v || 0));
  for (const e of entries.slice(0, PER_CHANNEL)) {
    sets.push({ id: e.id, title: e.t, artist: parseArtist(e.t, b), broadcaster: b, published: e.p, seconds: e.s, views: e.v, likes: e.l, comments: e.c });
  }
}
sets.sort((a, z) => (a.published < z.published ? 1 : -1));
fs.writeFileSync('selector-data.json', JSON.stringify(sets, null, 0) + '\n');

console.log(`\nCache: ${Object.keys(cache).length} videos. selector-data.json: ${sets.length} sets from ${byBroadcaster.size} channels.`);
