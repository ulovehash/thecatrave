// What the German and French Boiler Room pages share with the English one
// (build-boiler-room-article.mjs): the same photographs, the same Len Faki
// audio, the same measured table, the same eighteen players and the same two
// mixes, in the same places. Only the words around them change, so each
// language passes its captions, headers, city names and number format in
// `text`; the ids, figures and artwork live here once.
//
// The table's figures are typed, as in the English page, so the table cannot
// drift away from the prose that quotes them when the catalogue refreshes.
import {
  articleFigure, articleListeningBand, articleTable, articleYoutubeEmbed, ownSetListening
} from '../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const sets = [
  ['fred-again', 'c0-hvjV2A5Y', 'Fred again.., Boiler Room London'],
  ['sama-abdulhadi', 'x9VYKrtziSg', "Sama' Abdulhadi, Boiler Room Palestine"],
  ['carl-cox', 'vy-k0FopsmY', 'Carl Cox, Boiler Room Ibiza Villa Takeovers'],
  ['kaytranada', '-5EQIiabJvk', 'Kaytranada, Boiler Room Montreal'],
  ['yousuke-yukimatsu', 'T1tcUfUhR5U', '¥ØU$UK€ ¥UK1MAT$U, Boiler Room Tokyo'],
  ['dj-ez', 'OraL6lKoyXE', 'DJ EZ, Boiler Room London'],
  ['skream-disclosure', 'e8WVP3ClDsM', 'Skream b2b Disclosure, Boiler Room London at the W Hotel'],
  ['charli-xcx', 'rKPBq_j4buQ', 'Charli xcx, Boiler Room PARTYGIRL'],
  ['chase-and-status', 'Zy_JR9_Y8dE', 'Chase & Status, Boiler Room London'],
  ['laurent-garnier', 'Bj8425Ma6F8', 'Laurent Garnier, Boiler Room x Dekmantel'],
  ['len-faki', 'jQRI3b2SX8c', 'Len Faki, Boiler Room Berlin'],
  ['nicolas-jaar', 'IUjWumGIqe8', 'Nicolas Jaar, Boiler Room New York'],
  ['pinkpantheress', 'j5y2GBks5j4', 'PinkPantheress, Boiler Room London with IFFY FM'],
  ['dj-ramon-sucesso', 'uhAp3o71U48', 'DJ Ramon Sucesso, Boiler Room x Primavera Sound'],
  ['uncle-waffles', 'VT1a7whqhC4', 'Uncle Waffles, Boiler Room Johannesburg'],
  ['underworld', 'rAOHJqJMYDA', 'Underworld, Boiler Room London'],
  ['folamour', 'wL-VMOGAhzE', 'Folamour, Boiler Room x FLY Open Air'],
  ['mall-grab', 'ddeAyYF_uwg', 'Mall Grab, Boiler Room Melbourne']
];
export const anchors = sets.map(([anchor]) => anchor);

// rank, set, city (English key), year, views in millions, likes, likes per 1,000 views
const watchedRows = [
  [1, 'Solomun', 'Tulum', 2015, 76.19, 452859, 5.9],
  [2, 'Carl Cox', 'Ibiza', 2013, 74.26, 424683, 5.7],
  [3, 'Fred again..', 'London', 2022, 55.25, 766903, 13.9],
  [4, 'Kaytranada', 'Montréal', 2013, 25.12, 359823, 14.3],
  [5, '¥ØU$UK€ ¥UK1MAT$U', 'Tokyo', 2025, 20.39, 532202, 26.1],
  [6, 'Maceo Plex', 'Berlin', 2014, 16.83, 113408, 6.7],
  [7, 'Richie Hawtin', 'Amsterdam', 2012, 15.58, 91350, 5.9],
  [8, "Sama' Abdulhadi", 'Ramallah', 2018, 15.24, 297397, 19.5],
  [9, 'David August', 'Berlin', 2014, 14.80, 129168, 8.7],
  [10, 'Chase & Status', 'London', 2023, 14.68, 219003, 14.9]
];

const locale = {de: 'de-DE', fr: 'fr-FR'};

export function boilerRoomMedia({lang, text}) {
  const nf = new Intl.NumberFormat(locale[lang]);
  const one = new Intl.NumberFormat(locale[lang], {minimumFractionDigits: 1, maximumFractionDigits: 1});
  const two = new Intl.NumberFormat(locale[lang], {minimumFractionDigits: 2, maximumFractionDigits: 2});

  const rows = watchedRows.map(([rank, dj, city, year, views, likes, rate]) => [
    String(rank), dj, text.cities[city] || city, String(year), text.millions(two.format(views)), nf.format(likes), one.format(rate)
  ].map(escapeHtml));

  const fig = (name, width, height, key) => articleFigure({
    src: `img/boiler-room/${name}-1200.webp`,
    srcset: `img/boiler-room/${name}-320.webp 320w, img/boiler-room/${name}-1200.webp 1200w`,
    width, height, alt: text.figures[key].alt, caption: text.figures[key].caption, className: 'wide-archive-image'
  });

  const youtube = (id, label) => articleYoutubeEmbed({
    src: `https://www.youtube-nocookie.com/embed/${id}`,
    title: text.youtubeTitle(label)
  });

  const media = {
    'photo-sama': fig('sama', 1200, 800, 'sama'),
    'photo-fred-again': fig('fred-again', 1200, 844, 'fred'),
    'photo-carl-cox': fig('carl-cox', 1200, 800, 'cox'),
    'photo-dj-ez': fig('dj-ez', 1200, 1440, 'ez'),
    'selector-shot': fig('selector', 1200, 690, 'selector'),
    'audio-len-faki': articleListeningBand({
      platform: 'soundcloud',
      id: 'len-faki-audio',
      kicker: text.band.kicker,
      title: text.band.title,
      description: text.band.description,
      src: 'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/platform/len-faki&color=%23ff5a36&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false',
      iframeTitle: 'Len Faki Boiler Room Berlin DJ Set on SoundCloud',
      fullBleed: true,
      tone: 'cyan'
    }),
    'table-watched': articleTable({headers: text.tableHeaders, rows}),
    'yt-solomun': youtube('bk6Xst6euQk', 'Solomun, Boiler Room Tulum'),
    'own-mix': ownSetListening(0, lang, text.ownMix),
    'own-mix-2': ownSetListening(1, lang)
  };
  for (const [anchor, id, label] of sets) media[`yt-${anchor}`] = youtube(id, label);
  return media;
}
