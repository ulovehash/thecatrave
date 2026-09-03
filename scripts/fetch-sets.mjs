// Build selector-data.json from the public YouTube RSS feed of each channel in
// selector-channels.mjs. No API key, no npm dependencies, runs on any Node >= 14.
//
//   node scripts/fetch-sets.mjs
//   node build-selector.mjs
//
// RSS gives roughly the 15 most recent uploads per channel, so the pool stays
// fresh on its own. For deeper back-catalogue you would swap this for the
// YouTube Data API, but the MVP does not need it.

import fs from 'node:fs';
import https from 'node:https';
import { channels } from '../selector-channels.mjs';

const SKIP_TITLE = /\b(trailer|teaser|announcement|recap|aftermovie|interview|documentary|#shorts|coming soon|out now|tickets|full lineup|line-up|episode \d+ preview)\b/i;

function get(url) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, { headers: { 'user-agent': 'Mozilla/5.0 (selector catalogue build)' } }, res => {
      if (res.statusCode === 301 || res.statusCode === 302) { get(res.headers.location).then(resolve, reject); return; }
      let body = '';
      res.setEncoding('utf8');
      res.on('data', c => { body += c; });
      res.on('end', () => {
        if (res.statusCode < 200 || res.statusCode >= 300) { reject(new Error(`HTTP ${res.statusCode}`)); return; }
        resolve(body);
      });
    });
    req.setTimeout(20000, () => req.destroy(new Error('timed out')));
    req.on('error', reject);
  });
}

const decode = s => String(s)
  .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
  .replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'")
  .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(+n));

const pick = (block, tag) => {
  const m = new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`).exec(block);
  return m ? decode(m[1].trim()) : '';
};

// Best-effort artist from a set title: text before the first separator, minus a
// leading broadcaster mention and trailing dates / parentheticals.
function parseArtist(title, broadcaster) {
  let s = title.split(/\s+[@|·–—]\s+|\s+[-]\s+|:\s+/)[0].trim();
  s = s.replace(new RegExp(`^${broadcaster.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*[:\\-|]?\\s*`, 'i'), '').trim();
  s = s.replace(/\s*[([][^)\]]*[)\]]\s*$/, '').trim();
  s = s.replace(/\s+\d{1,2}[./]\d{1,2}([./]\d{2,4})?$/, '').trim();
  return s || title.trim();
}

const seen = new Set();
const sets = [];

console.log(`Fetching RSS for ${channels.length} channels…\n`);

for (const ch of channels) {
  process.stdout.write(`  … ${ch.broadcaster}`);
  try {
    const xml = await get(`https://www.youtube.com/feeds/videos.xml?channel_id=${ch.channelId}`);
    const entries = xml.split('<entry>').slice(1);
    let kept = 0;
    for (const e of entries) {
      const id = (/<yt:videoId>([\w-]{11})<\/yt:videoId>/.exec(e) || [])[1];
      const title = pick(e, 'title');
      const published = pick(e, 'published');
      if (!id || !title) continue;
      if (SKIP_TITLE.test(title)) continue;
      if (seen.has(id)) continue;
      seen.add(id);
      sets.push({ id, title, artist: parseArtist(title, ch.broadcaster), broadcaster: ch.broadcaster, published });
      kept += 1;
    }
    process.stdout.write(`\r  ✓ ${ch.broadcaster}: ${kept} sets\n`);
  } catch (err) {
    process.stdout.write(`\r  ✗ ${ch.broadcaster}: ${err.message}\n`);
  }
}

sets.sort((a, b) => (a.published < b.published ? 1 : -1));
fs.writeFileSync('selector-data.json', JSON.stringify(sets, null, 0) + '\n');
console.log(`\nWrote selector-data.json — ${sets.length} sets from ${channels.length} channels.`);
