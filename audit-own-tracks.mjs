// Every article needs playable thecatrave music: an exact track or one of the
// owner's disclosed playlists, not just an artist link or Bandcamp player.
import fs from 'node:fs';
import {allArticlesNewestFirst} from './home-articles.mjs';
import {ownPlaylists, ownTracks} from './site-components.mjs';

const spotifyIds = ['1iq7tX1EWPR7INIjkxhGSu', '6qxmmgfWlT4yrWu60elEFZ'];
const failures = [];
let checked = 0;

for (const lang of ['en', 'de', 'fr']) {
  for (const article of allArticlesNewestFirst(lang)) {
    checked++;
    const html = fs.readFileSync(article.page, 'utf8');
    const iframes = html.match(/<iframe\b[^>]*>/g) || [];
    const hasMusic = iframes.some(tag => {
      let source = tag.match(/\bsrc="([^"]+)"/)?.[1] || '';
      try { source = decodeURIComponent(source); } catch { /* inspect literal URL */ }
      return spotifyIds.some(id => source.includes(`open.spotify.com/embed/track/${id}`)) ||
        Object.values(ownPlaylists).some(playlist => source.includes(`open.spotify.com/embed/playlist/${playlist.id}`)) ||
        Object.values(ownTracks).some(track => source.includes(`soundcloud.com/thecatrave/${track.slug}`));
    });
    if (!hasMusic) failures.push(`${article.page}: no playable thecatrave track or owned playlist`);
    if (html.includes('class="article-artist-track"')) failures.push(`${article.page}: legacy context-free artist-track fallback`);
    if ((html.match(/class="floating-inset article-cta article-cta-full"/g) || []).length !== 1) failures.push(`${article.page}: expected one Bandcamp support block`);
    if ((html.match(/class="article-promo-layout"/g) || []).length !== 1) failures.push(`${article.page}: missing responsive promo layout`);
  }
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}
console.log(`${checked} articles have a contextual thecatrave track or owned playlist.`);
