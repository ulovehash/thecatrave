// The media of the bass music guide, for its translations.
//
// The English page (bass-music-guide.html, build-bass-music-article.mjs)
// places its blocks by paragraph index; the translations place the same blocks
// with placeholder lines at the same positions. This file holds what both
// languages share: the players, the owner's music and mixes, the figures (the
// English page's image URLs, hotlinked as they are there, at the owner's
// decision on 2026-09-23; logged open in defects.json as
// bass-music-guide-hotlinked-images) and the route cards. Each language's
// module passes its own words in `copy` and builds its own figures and tables
// from bassMusicImages, as the other translations do.
//
// The history graphic is redrawn per language (img/bass-music/
// bass-music-global-history-<lang>.svg and its mobile version): same geometry,
// colours and dates, translated labels.
//
// This file sits at the root of content/, not in a language folder, so
// build-localized-articles.mjs does not take it for a page.
import {
  articleListeningBand, articleVideoCard, articleVideoCollection, articleYoutubeEmbed, ownTrackListening
} from '../site-components.mjs';
import {t} from '../i18n.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const spotify = id => `https://open.spotify.com/embed/track/${id}?utm_source=generator`;
const soundcloud = slug => `https://w.soundcloud.com/player/?url=${encodeURIComponent(`https://soundcloud.com/thecatrave/${slug}`)}&color=%23ff5a36&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false`;

// The English page's figures: placeholder key, src, width, height, class.
export const bassMusicImages = {
  kingTubby: ['King Tubby console', 'https://mopop.emuseum.com/internal/media/dispatcher/290708/preview', 1200, 800, 'wide-archive-image'],
  miami: ['Miami mobile DJs', 'https://media.redbullmusicacademy.com/assets/Loc%20Ace%20and%20Vic%2093.33ead0e8.jpg?auto=format&w=1400', 1400, 933, 'wide-archive-image'],
  nightSlugs: ['Night Slugs', 'https://assets.boomkat.com/spree/products/258557/large/original.jpg', 1000, 1000, 'square-image'],
  footwork: ['footwork dancers', 'https://media.npr.org/assets/img/2011/05/11/footwork2_enl-56f0b08e6afd3659df3c0937dbfd7246d433b1c9.jpg?c=100&f=jpeg&s=2600', 2600, 1733, 'wide-archive-image'],
  gqom: ['gqom Distruction Boyz', 'https://www.afropop.org/client-uploads/img/_image600Square/gqom-square.jpg', 600, 600, 'square-image']
};

export function bassMusicMedia(lang, copy) {
  const listening = t(lang).essentialListening;
  const youtube = (id, label) => articleYoutubeEmbed({src: `https://www.youtube-nocookie.com/embed/${id}`, title: `${label} ${copy.onYoutube}`});
  const band = (id, spotifyId, name, title, description, fullBleed = true) => articleListeningBand({
    platform: 'spotify', id, kicker: listening, title, description, src: spotify(spotifyId),
    iframeTitle: `${name} ${copy.onSpotify}`, fullBleed, tone: 'cyan'
  });
  const mix = (slug, id, {title, description}) => articleListeningBand({
    platform: 'soundcloud', id, kicker: copy.listenWhileYouRead, title, description, src: soundcloud(slug),
    iframeTitle: `${title} ${copy.byThecatraveOnSoundcloud}`, fullBleed: true, tone: 'cyan'
  });
  const cards = (items, genres) => items.map(([youtubeId, artist, title], index) => articleVideoCard({youtubeId, genre: genres[index], artist, title}));

  return {
    'global history': `<figure class="floating-image article-image bass-history-visual"><picture><source media="(max-width: 600px)" srcset="img/bass-music/bass-music-global-history-mobile-${lang}.svg"><img src="img/bass-music/bass-music-global-history-${lang}.svg" width="1400" height="900" sizes="(max-width: 760px) calc(100vw - 32px), 1040px" alt="${escapeHtml(copy.globalVisual.alt)}" loading="eager" decoding="async"></picture><figcaption>${escapeHtml(copy.globalVisual.caption)}</figcaption></figure>`,


    'King Tubby Meets Rockers Uptown': youtube('oxAl3Jijs20', 'Augustus Pablo and King Tubby, King Tubby Meets Rockers Uptown'),
    'LFO Leeds Warehouse Mix': youtube('ML_FBvudqI0', 'LFO, LFO Leeds Warehouse Mix'),
    'Hyph Mngo': youtube('Aa_PDKKc2_A', 'Joy Orbison, Hyph Mngo'),
    'Anti War Dub': youtube('--jr22La8Nk', 'Digital Mystikz, Anti War Dub'),

    // As on the English page, the Miami band is the one called without
    // fullBleed (its label makes it full width all the same).
    'Throw the D': band('miami-bass-listening', '01eKbKNxs6EogcCYONAmYI', '2 Live Crew, Throw the D', '2 Live Crew, Throw the D.', copy.bands.throwTheD, false),
    'We Are I.E.': band('hardcore-essential-listening', '2aZ89R5oSEDTfjymiRjzpg', 'Lennie De Ice, We Are I.E.', 'Lennie De Ice, We Are I.E.', copy.bands.weAreIE),
    'Zodiac Shit': band('la-beat-essential-listening', '3v65IsDl6LDOHDu9bU4ZOn', 'Flying Lotus, Zodiac Shit', 'Flying Lotus, Zodiac Shit.', copy.bands.zodiacShit),
    'Baby Come On': band('footwork-essential-listening', '0rzohlbJIrpvIHFAgPztfG', 'RP Boo, Baby Come On', 'RP Boo, Baby Come On.', copy.bands.babyComeOn),
    'Ice Drop': band('gqom-essential-listening', '7FAW04U4KSWT2vsskjNYo0', 'DJ Lag, Ice Drop', 'DJ Lag, Ice Drop.', copy.bands.iceDrop),

    'Skrillex and TNGHT': articleVideoCollection({lang, description: copy.collections.northAmerica, items: cards([
      ['WSeNSzJ2-Jw', 'Skrillex', 'Scary Monsters and Nice Sprites'],
      ['6HzyUHxmkg0', 'TNGHT', 'Higher Ground']
    ], copy.genres.northAmerica)}),
    'British continuum': articleVideoCollection({lang, description: copy.collections.british, items: cards([
      ['_VFf6434lto', 'Shy FX & UK Apache', 'Original Nuttah'],
      ['i-P98B2skts', 'Goldie', 'Inner City Life'],
      ['DXCtYUtjDYU', 'MJ Cole', 'Sincere'],
      ['LkdEOY0bf4U', 'Wiley', 'Eskimo'],
      ['fUGZq02cYIY', 'DJ Q featuring MC Bonez', 'You Wot!'],
      ['iIbkC1NMM1k', 'Cooly G', 'Love Dub (Refix)']
    ], copy.genres.british)}),
    'North American labels': articleVideoCollection({lang, description: copy.collections.contemporary, items: cards([
      ['hkYq02183fc', 'Jauz', 'Feel the Volume'],
      ['-KPnyf8vwXI', 'Flume featuring Kai', 'Never Be Like You'],
      ['fP2O6JcnJJI', 'Bommer & Crowell', 'Yasuo'],
      ['ls-LYas5j8U', 'The Glitch Mob', 'We Can Make the World Stop'],
      ['ULqdjtDI-bs', 'Seven Lions featuring Kerli', 'Worlds Apart'],
      ['2oIAQSUt9mo', 'REZZ', 'Edge'],
      ['KVywF8KXdwI', 'EPROM', 'Drone Warfare'],
      ['eOILsff2GOk', 'Of The Trees', 'Spanish Moss']
    ], copy.genres.contemporary)}),

    // The owner's own track and two mixes, where the English page has them.
    'thecatrave look': ownTrackListening('look', copy.lookTrack, lang),
    'I Lost So Many Weekends': mix('i-lost-so-many-weekends-raving-and-i-wanna-lose-some-more', 'bass-mix-weekends', copy.mixes.weekends),
    'I Like to Smoke in Silence': mix('i-like-to-smoke-in-silence-after-raves', 'bass-mix-silence', copy.mixes.silence),


    'Routes': `<div class="bass-starting-routes">${copy.routes.map(([name, text], index) => `<div class="bass-route-card"><span>0${index + 1}</span><h3>${escapeHtml(name)}</h3><p>${escapeHtml(text)}</p></div>`).join('')}</div>`
  };
}
