// Every article needs a playable, exact thecatrave track, not just a mix,
// artist link, playlist or Bandcamp purchase player.
import fs from 'node:fs';
import {allArticlesNewestFirst} from './home-articles.mjs';
import {ownTracks} from './site-components.mjs';

const spotifyIds = ['1iq7tX1EWPR7INIjkxhGSu', '6qxmmgfWlT4yrWu60elEFZ'];
const failures = [];
let checked = 0;

for (const lang of ['en', 'de', 'fr']) {
  for (const article of allArticlesNewestFirst(lang)) {
    checked++;
    const html = fs.readFileSync(article.page, 'utf8');
    const iframes = html.match(/<iframe\b[^>]*>/g) || [];
    const hasTrack = iframes.some(tag => {
      let source = tag.match(/\bsrc="([^"]+)"/)?.[1] || '';
      try { source = decodeURIComponent(source); } catch { /* inspect literal URL */ }
      return spotifyIds.some(id => source.includes(`open.spotify.com/embed/track/${id}`)) ||
        Object.values(ownTracks).some(track => source.includes(`soundcloud.com/thecatrave/${track.slug}`));
    });
    if (!hasTrack) failures.push(`${article.page}: no exact own-track player`);
    if ((html.match(/id="article-artist-track-title"/g) || []).length > 1) failures.push(`${article.page}: duplicate artist-track promo`);
    if ((html.match(/class="floating-inset article-cta article-cta-full"/g) || []).length !== 1) failures.push(`${article.page}: expected one Bandcamp support block`);
    if ((html.match(/class="article-promo-layout"/g) || []).length !== 1) failures.push(`${article.page}: missing responsive promo layout`);
  }
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}
console.log(`${checked} articles have an exact thecatrave SoundCloud or Spotify track.`);
