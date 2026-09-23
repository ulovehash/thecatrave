// The media of the jungle guide, for its translations.
//
// The English page (jungle-music-guide.html) keeps its body as hand-kept HTML
// and places each block by paragraph marker in build-jungle-article.mjs. The
// translations place the same blocks with [Embed: key], [Bild: key] /
// [Image: key] and [Tabelle: key] / [Table: key] lines at the same positions,
// and each language passes its own labels here. Each language's module builds
// the figures (from jungleImages) and the tables itself.
// The ids, sources and tones are the English page's; nothing is added.
//
// This file sits at the root of content/, not in a language folder, so
// build-localized-articles.mjs does not take it for a page.
import {articleListeningBand, articleYoutubeEmbed, ownTrackListening} from '../site-components.mjs';
import {t} from '../i18n.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const tracks = {
  'we-are-ie': ['Lennie De Ice', 'We Are I.E.', '7Li4jlU5MVqS5f3J2ooviA'],
  '28-gun-bad-boy': ['A Guy Called Gerald', '28 Gun Bad Boy', '2RGpGw2lWRs51knftCnos0'],
  'valley-of-the-shadows': ['Origin Unknown', 'Valley of the Shadows', '3BDFLAvxTaWHpWgHkFpMsJ'],
  'incredible': ['M-Beat & General Levy', 'Incredible', '2fq7lLTvRHZjUPqh5a20n5'],
  'inner-city-life': ['Goldie', 'Inner City Life', '4qw7xhiy8rWGDeffgSj7Ez'],
  'renegade-snares': ['Omni Trio', 'Renegade Snares', '72G1pFJW0poqDNUlGbzJOh'],
  'babylon': ['Splash', 'Babylon', '05KgAsHP0YmiJ0KWP6Axf0']
};

export const jungleImages = {
  flyers: {src: 'img/flyers-1200.webp', srcset: 'img/flyers-320.webp 320w, img/flyers-1200.webp 1024w', sizes: '100vw', width: 1200, height: 675, className: 'wide-archive-image'},
  'pirate-radio': {src: 'img/pirate-radio-1200.webp', srcset: 'img/pirate-radio-320.webp 320w, img/pirate-radio-1200.webp 1024w', sizes: '100vw', width: 1200, height: 655, className: 'wide-archive-image'},
  'tape-pack': {src: 'img/tapepack.png', srcset: 'img/tapepack-320.png 320w, img/tapepack.png 1024w', sizes: '100vw', width: 1200, height: 764, className: 'wide-archive-image'},
  awol: {src: 'img/AWOL2.png', width: 400, height: 400, className: 'awol-flyer'},
  fabio: {src: 'img/fabio-1200.webp', srcset: 'img/fabio-320.webp 320w, img/fabio-1200.webp 1024w', sizes: '100vw', width: 1200, height: 794, className: 'wide-archive-image'},
  'kool-fm': {src: 'img/koolfmbirthday.webp', srcset: 'img/koolfmbirthday-320.webp 320w, img/koolfmbirthday.webp 1024w', sizes: '(max-width: 768px) 90vw, 512px', width: 600, height: 423, className: ''},
  dancing: {src: 'img/people%20dancing-1200.webp', srcset: 'img/people%20dancing-320.webp 320w, img/people%20dancing-1200.webp 1024w', sizes: '100vw', width: 1200, height: 777, className: 'wide-archive-image'}
};

const videos = {
  'dj-hype': 'gdQ4V245hG8',
  'original-nuttah': '3QMiCBJ7yRM',
  'nia-archives': 'jO5JhZNSjUA',
  'tim-reaper': 'FJGYUwdGEeg'
};

const playlists = {
  'early-jungle-playlist': ['early-jungle', '63AoNfdevveMbVyzF9CL62'],
  'jungle-mania-playlist': ['jungle-mania', '4hvbZXAhxnqcybT7zNhHLn']
};

// The same aside the English generator writes for its four videos.
function youtubeFeature(key, videoId, {kicker, heading, description}) {
  const id = `jungle-video-${key}`;
  const player = articleYoutubeEmbed({src: `https://www.youtube-nocookie.com/embed/${videoId}`, title: heading});
  return `<aside class="video-feature article-listening-feature article-media-band article-media-band-full article-media-band-cyan" aria-labelledby="${id}"><div class="article-media-copy"><p class="article-kicker">${escapeHtml(kicker)}</p><h3 id="${id}">${escapeHtml(heading)}</h3><p>${escapeHtml(description)}</p></div>${player}</aside>`;
}

// copy: {tracks: {key: note}, trackTitle(artist, title),
//   videos: {key: {kicker, heading, description}}, playlists: {key: {title, description, iframeTitle}},
//   quotes: {key: html}, lateSummer, artDeco: {kicker, title, description, iframeTitle}}
// The figures and tables are built in each language's module, from
// jungleImages and its own captions and rows.
export function jungleMedia(lang, copy) {
  const listening = t(lang).essentialListening;
  const media = {};
  for (const [key, [artist, title, spotifyId]] of Object.entries(tracks)) {
    media[key] = articleListeningBand({
      platform: 'spotify', id: `jungle-track-${key}`, kicker: listening, title: `${artist} : ${title}.`,
      description: copy.tracks[key], src: `https://open.spotify.com/embed/track/${spotifyId}?utm_source=generator`,
      iframeTitle: copy.trackTitle(artist, title), fullBleed: true, tone: 'cyan'
    });
  }
  for (const [key, videoId] of Object.entries(videos)) media[key] = youtubeFeature(key, videoId, copy.videos[key]);
  for (const [key, [id, playlistId]] of Object.entries(playlists)) {
    const {title, description, iframeTitle} = copy.playlists[key];
    media[key] = articleListeningBand({
      platform: 'spotify', id: `jungle-listening-${id}`, kicker: listening, title, description,
      src: `https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator`, iframeTitle, fullBleed: true, tone: 'cyan'
    });
  }
  for (const [key, html] of Object.entries(copy.quotes)) media[key] = `<blockquote class="pull-quote">${html}</blockquote>`;
  // The owner's own music, where the English page plays it.
  media['thecatrave late-summer-cloud-dance'] = ownTrackListening('late-summer-cloud-dance', copy.lateSummer, lang);
  media['art-deco-remix'] = articleListeningBand({
    platform: 'soundcloud', id: 'jungle-soundcloud-lana', ...copy.artDeco,
    src: 'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/thecatrave/art-deco-jungle-remix&color=%23ff5a36&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    fullBleed: true, tone: 'cyan'
  });
  return media;
}
