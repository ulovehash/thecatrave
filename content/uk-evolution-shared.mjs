// What the German and French UK electronic music evolution pages share with the
// English one: the same YouTube records, the same images, the same two
// SoundCloud mixes, in the same places. Only the words around them change, so
// each language passes its labels, captions and table in `text`; the ids, the
// artwork and the order live here once.
import {
  articleFigure, articleListeningBand, articleTable, articleVideoCard, articleVideoCollection
} from '../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// [youtube id, artist, title] per list; the genre label per row is the
// language's own, in the same order.
const records = {
  acid: [['yCNpciIixbk', 'Baby Ford', 'Oochy Koochy'], ['ML_FBvudqI0', 'LFO', 'LFO (Leeds Warehouse Mix)']],
  jungle: [['PaBLXLn8cOY', 'SL2', 'DJs Take Control'], ['_VFf6434lto', 'Shy FX & UK Apache', 'Original Nuttah'], ['i-P98B2skts', 'Goldie', 'Inner City Life'], ['0TlxCWYn-B8', 'Fabio & Grooverider', 'Journey Down The Thames']],
  garage: [['DXCtYUtjDYU', 'MJ Cole', 'Sincere'], ['uR3Vw8J8vUo', 'Double 99', 'RipGroove'], ['-15oU-lNSnc', 'Wookie', 'Battle']],
  other90s: [['ZWmrfgj0MZI', 'Massive Attack', 'Unfinished Sympathy'], ['wmin5WkOuPw', 'The Prodigy', 'Firestarter'], ['_GfcIprkuvw', 'The Chemical Brothers', 'Chemical Beats'], ['uXpKC8TIAxE', 'Aphex Twin', 'Xtal'], ['fZ1xP6WXPLY', 'Surgeon', 'Magneze']],
  zeroes: [['--jr22La8Nk', 'Digital Mystikz', 'Anti War Dub'], ['4bMQTU2iI1E', 'Musical Mob', 'Pulse X'], ['w_Chrqwt-Hk', 'T2 feat. Jodie Aysha', 'Heartbroken'], ['bqL8ls8CaEA', 'Roska', 'Squark']],
  early10s: [['Aa_PDKKc2_A', 'Joy Orbison', 'Hyph Mngo'], ['uxtc8JawP2g', 'Mr Mitch', 'Don’t Leave'], ['pdMjV4OVmbI', 'Peverelist', 'Roll With the Punches'], ['YG0ggHM1PLM', 'A. G. Cook', 'Beautiful']],
  current: [['1NXmpUrp5W8', 'Conducta', 'Whippet'], ['APPNBJqGJaA', 'Tim Reaper', 'Give Me More'], ['PjCVcVw8f1Y', 'Nia Archives', 'Forbidden Feelingz'], ['rsFDOGwkSv8', 'Joy Orbison', 'flight fm']]
};

const soundcloud = {
  weekends: 'i-lost-so-many-weekends-raving-and-i-wanna-lose-some-more',
  smoke: 'i-like-to-smoke-in-silence-after-raves'
};

export function ukEvolutionMedia({lang, text}) {
  const videos = key => articleVideoCollection({
    lang,
    description: text.videos[key].description,
    items: records[key].map(([youtubeId, artist, title], index) => articleVideoCard({youtubeId, genre: text.videos[key].genres[index], artist, title}))
  });
  const mix = key => articleListeningBand({
    platform: 'soundcloud', id: `uk-mix-${soundcloud[key]}`,
    kicker: text.mixKicker, title: text.mixes[key].title, description: text.mixes[key].description,
    src: `https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/thecatrave/${soundcloud[key]}&color=%23ff5a36&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`,
    iframeTitle: text.mixes[key].iframeTitle, fullBleed: true, tone: 'cyan'
  });
  const webp = (name, width, height, alt, caption, className) => articleFigure({
    src: `${name}-1200.webp`, srcset: `${name}-320.webp 320w, ${name}-1200.webp 1200w`,
    width, height, alt, caption, className
  });
  const jpg = (name, width, height, alt, caption) => articleFigure({
    src: `img/uk-electronic/${name}-1200.jpg`, srcset: `img/uk-electronic/${name}-480.jpg 480w, img/uk-electronic/${name}-1200.jpg 1200w`,
    width, height, alt, caption
  });
  const i = text.images;
  return {
    crowd: webp('img/people%20dancing', 1200, 777, i.crowd.alt, '', 'feature-image'),
    'TB-303': jpg('roland-tb303', 1200, 590, i.tb303.alt, i.tb303.caption),
    flyers: webp('img/flyers', 1200, 675, i.flyers.alt, i.flyers.caption),
    Atari: articleFigure({
      src: 'img/uk-electronic/atari-1040st-cutout-1200.png',
      srcset: 'img/uk-electronic/atari-1040st-cutout-480.png 480w, img/uk-electronic/atari-1040st-cutout-1200.png 1200w',
      sizes: '(max-width: 760px) calc(100vw - 32px), 560px', width: 1200, height: 816,
      alt: i.atari.alt, caption: i.atari.caption, className: 'cutout-image'
    }),
    Skream: webp('img/skream', 1200, 900, i.skream.alt, i.skream.caption),
    'acid videos': videos('acid'),
    'jungle videos': videos('jungle'),
    'garage videos': videos('garage'),
    'other videos': videos('other90s'),
    'zeroes videos': videos('zeroes'),
    'early 2010s videos': videos('early10s'),
    'current videos': videos('current'),
    'SoundCloud weekends': mix('weekends'),
    'SoundCloud smoke': mix('smoke'),
    genres: articleTable({headers: text.table.headers, rows: text.table.rows.map(row => row.map(escapeHtml))})
  };
}
