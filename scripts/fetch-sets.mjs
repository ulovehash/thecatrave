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
const PER_CHANNEL = Number(process.env.PER_CHANNEL) || 500;   // keep this many best sets per channel
const MIN_VIEWS = Number(process.env.MIN_VIEWS) || 500;       // drop near-zero duds
const SCAN_CAP = Number(process.env.SCAN_CAP) || 15000;   // channels bury real sets under recent Shorts
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

async function uploadsPlaylist(entry) {
  // Prefer the handle: a hardcoded channelId can point at a small secondary
  // channel (a Shorts feed, a Topic channel). forHandle always resolves the
  // real one.
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
        likes: st.likeCount != null ? Number(st.likeCount) : null,     // dislikeCount removed by YouTube in 2021
        comments: st.commentCount != null ? Number(st.commentCount) : null
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
    const playlist = await uploadsPlaylist(ch);
    if (!playlist) { process.stdout.write(`\r  ✗ ${ch.broadcaster}: could not resolve ${ch.handle || ch.channelId}\n`); continue; }
    const ids = await allVideoIds(playlist);
    const videos = await hydrate(ids);

    // qualify, then keep this channel's best by likes (tiebreak views) so small
    // stations are not drowned out by the big ones.
    const qualified = videos.filter(v =>
      (!v.live || v.live === 'none') &&
      v.seconds >= MIN_SECONDS &&
      !SKIP_TITLE.test(v.title) &&
      (v.views == null || v.views >= MIN_VIEWS) &&
      !seen.has(v.id)
    );
    const score = v => (v.likes || 0) + (v.comments || 0) * 3;
    qualified.sort((a, b) => score(b) - score(a) || (b.views || 0) - (a.views || 0));
    const keep = qualified.slice(0, PER_CHANNEL);

    for (const v of keep) {
      seen.add(v.id);
      sets.push({
        id: v.id,
        title: v.title,
        artist: parseArtist(v.title, ch.broadcaster),
        broadcaster: ch.broadcaster,
        published: v.published,
        seconds: v.seconds,
        views: v.views,
        likes: v.likes,
        comments: v.comments
      });
    }
    process.stdout.write(`\r  ✓ ${ch.broadcaster}: ${keep.length} sets (${videos.length} scanned, ${qualified.length} qualified)\n`);
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
