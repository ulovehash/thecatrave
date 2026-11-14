// Spanish "best DJ sets of all time" guide. The thirty players are the English
// page's (build-best-dj-sets-of-all-time-article.mjs), with the same IDs and the
// same set-* anchors, so links into the English page's entries also work here.
// The Spanish draft is es/best-dj-sets-of-all-time-draft.md; each entry places
// its player with an [Embed: player-*] line where the English page renders it,
// after the note. The summary banner is the draft's "Respuesta" section.
import {articleTrackEmbed, articleYoutubeEmbed} from '../../site-components.mjs';

const yt = id => ['youtube', id];
const sc = path => ['soundcloud', `https%3A//soundcloud.com/${path}`];
const mc = path => ['mixcloud', `https://www.mixcloud.com/${path}`];

// key, English heading label (gives the anchor), Spanish label (player title), player
const players = [
  ['marshall-jefferson', 'Marshall Jefferson, The Lab NYC, Mixmag, 2015', 'Marshall Jefferson, The Lab NYC, Mixmag, 2015', yt('7cuTVGoi9ec')],
  ['todd-terry', 'Todd Terry, The Lab London, Mixmag, 2013', 'Todd Terry, The Lab London, Mixmag, 2013', yt('3NrREoqmHNA')],
  ['louie-vega', 'Louie Vega, DJ Mag HQ, 2018', 'Louie Vega, DJ Mag HQ, 2018', yt('Drk4mfQa4f0')],
  ['kerri-chandler', 'Kerri Chandler, Mixmag Live, 2017', 'Kerri Chandler, Mixmag Live, 2017', yt('8x7n6KDfseI')],
  ['theo-parrish', 'Theo Parrish, Boiler Room #29, 2010', 'Theo Parrish, Boiler Room #29, 2010', sc('platform/br-29-theo-parrish')],
  ['dj-jazzy-jeff', 'DJ Jazzy Jeff, Boiler Room Philadelphia, 2017', 'DJ Jazzy Jeff, Boiler Room Philadelphia, 2017', yt('IvPdwoppGw4')],
  ['black-coffee', 'Black Coffee, Mixmag Live London, 2015', 'Black Coffee, Mixmag Live London, 2015', yt('wamL0A9Qzxg')],
  ['solomun', 'Solomun and Kollektiv Turmstrasse, Diynamic ADE showcase, Mixmag, 2014', 'Solomun y Kollektiv Turmstrasse, showcase de Diynamic en el ADE, Mixmag, 2014', yt('i7Zstp8jlgo')],
  ['honey-dijon', 'Honey Dijon, The Lab Miami, Mixmag, 2016', 'Honey Dijon, The Lab Miami, Mixmag, 2016', yt('SP_hVmD3yI4')],
  ['black-madonna', 'The Black Madonna, DJ Mag Pool Party Miami, 2018', 'The Black Madonna, DJ Mag Pool Party Miami, 2018', yt('SS58vs5WtGE')],
  ['dixon', 'Dixon, Cercle Festival, Ariane stage, 2024', 'Dixon, Cercle Festival, escenario Ariane, 2024', yt('8ClF-beNXII')],
  ['carl-craig', 'Carl Craig, Detroit Classics set, Mixmag Live, 2012', 'Carl Craig, set de clásicos de Detroit, Mixmag Live, 2012', yt('W7Lnhe2-Ea0')],
  ['joey-beltram', 'Joey Beltram, The Lab NYC, Mixmag, 2018', 'Joey Beltram, The Lab NYC, Mixmag, 2018', yt('H4OqblkR-vA')],
  ['sven-vath', 'Sven Väth, Time Warp 2D2S, 2023', 'Sven Väth, Time Warp 2D2S, 2023', yt('jAb-PeSB-kk')],
  ['nina-kraviz', 'Nina Kraviz, Time Warp, 2017', 'Nina Kraviz, Time Warp, 2017', yt('o5emoqTlYOk')],
  ['adam-beyer', 'Adam Beyer, Awakenings Day One, 2016', 'Adam Beyer, Awakenings Day One, 2016', yt('oyTzPIv2ZgE')],
  ['tale-of-us', 'Tale of Us, Time Warp, 2016', 'Tale of Us, Time Warp, 2016', yt('akdDY6PCBBM')],
  ['charlotte-de-witte', 'Charlotte de Witte, The Lab NYC, Mixmag, 2020', 'Charlotte de Witte, The Lab NYC, Mixmag, 2020', yt('Q9dzq_SWd3k')],
  ['cox-space', 'Carl Cox, Space Ibiza residency farewell, Global 700, 2016', 'Carl Cox, despedida de su residencia en Space Ibiza, Global 700, 2016', mc('CarlCox/carl-cox-global-live-from-space-ibiza-the-final-chapter-global-700-part-1/')],
  ['four-tet-floating-points', 'Four Tet and Floating Points, the last night at Plastic People, 2015', 'Four Tet y Floating Points, la última noche en Plastic People, 2015', sc('floatingpoints/floating-points-four-tet-final-plastic-people-2-1-2015')],
  ['cox-fatboy', 'Carl Cox b2b Fatboy Slim, Saatchi Gallery, Mixmag, 2019', 'Carl Cox b2b Fatboy Slim, Saatchi Gallery, Mixmag, 2019', yt('JL3b_fewO08')],
  ['john-digweed', 'John Digweed, Time Warp, floor 1, 2014', 'John Digweed, Time Warp, floor 1, 2014', yt('ly-W-JvWc3Y')],
  ['seth-troxler', 'Seth Troxler, Time Warp, floor 4, 2014', 'Seth Troxler, Time Warp, floor 4, 2014', yt('e_TluqmgXuM')],
  ['fatboy-i360', 'Fatboy Slim, Cercle, Brighton i360, 2018', 'Fatboy Slim, Cercle, Brighton i360, 2018', yt('8AvC05kXS9I')],
  ['fabio-grooverider', 'Fabio and Grooverider, DJ Mag HQ, 2015', 'Fabio y Grooverider, DJ Mag HQ, 2015', yt('Ehi2-SFYhzg')],
  ['dj-randall', 'DJ Randall, history of jungle set, The Lab London, Mixmag, 2016', 'DJ Randall, set de historia del jungle, The Lab London, Mixmag, 2016', yt('UgK8h9xRFls')],
  ['goldie-ulterior-motive', 'Goldie and Ulterior Motive, The Lab London, Mixmag, 2017', 'Goldie y Ulterior Motive, The Lab London, Mixmag, 2017', yt('dXxDphoxf4g')],
  ['ben-ufo', 'Ben UFO, The Lot Radio, 2020', 'Ben UFO, The Lot Radio, 2020', yt('ECQwhbX4-H0')],
  ['rashad-spinn', 'DJ Rashad and DJ Spinn, XLR8R Podcast 158, 2010', 'DJ Rashad y DJ Spinn, XLR8R Podcast 158, 2010', mc('xlr8r/podcast-158-dj-rashad-dj-spinn/')],
  ['skream', 'Skream, Alter Ego, UK garage, Mixmag, 2015', 'Skream, Alter Ego, UK garage, Mixmag, 2015', yt('ZjRTmeJVo9o')]
];

// The English generator's anchor rule, so each entry keeps its English id.
const setAnchor = label => `set-${label.normalize('NFKD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`;
const anchorOf = Object.fromEntries(players.map(([key, english]) => [key, setAnchor(english)]));
const group = keys => keys.map(key => anchorOf[key]);

function media() {
  const out = {};
  for (const [key, , label, [platform, ref]] of players) {
    const player = platform === 'youtube'
      ? articleYoutubeEmbed({src: `https://www.youtube-nocookie.com/embed/${ref}`, title: label})
      : articleTrackEmbed({platform, url: ref, title: label});
    // The English page keeps an older anchor for the Space entry.
    const legacy = key === 'cox-space' ? '<a id="set-carl-cox-space-ibiza-closing-global-700-2016" aria-hidden="true"></a>' : '';
    out[`player-${key}`] = `${legacy}${player}`;
  }
  return out;
}

export default {
  lang: 'es',
  name: 'es-best-dj-sets-of-all-time',
  file: 'es/mejores-dj-sets.html',
  draft: 'es/best-dj-sets-of-all-time-draft.md',
  canonical: 'https://thecatrave.com/es/mejores-dj-sets',
  englishPath: '/best-dj-sets-of-all-time',
  ogImage: 'https://thecatrave.com/img/og/best-dj-sets-of-all-time.jpg',
  image: 'https://thecatrave.com/img/og/best-dj-sets-of-all-time.jpg',
  bodyClass: 'article-page best-dj-sets-page',

  title: 'Los mejores DJ sets de la historia: 30 para escuchar',
  description: 'Los mejores DJ sets de la historia, de Carl Cox en Space y Black Coffee a Tale of Us, Skream y Fabio y Grooverider, cada uno en su grabación oficial.',
  datePublished: '2026-11-14',
  dateModified: '2026-11-14',
  dateLabel: '14 de noviembre de 2026',

  heroKicker: 'DJ sets',
  heroTitle: 'Los mejores DJ sets de la historia',
  deck: 'Four Tet y Floating Points en Plastic People, Black Coffee en Londres, el footwork de Rashad y Spinn y más grabaciones para descubrir.',
  answerLabel: 'MEJORES DJ SETS DE LA HISTORIA',
  breadcrumbName: 'Los mejores DJ sets de la historia',

  answerSection: 'Respuesta',
  introSection: 'Introducción',
  introTitle: 'Un set para empezar.',
  faqSection: 'FAQ',
  faqLabel: 'FAQ',
  faqTitle: 'Los mejores DJ sets: preguntas frecuentes.',
  minReadingMinutes: 8,

  sections: [
    {id: 'house-origins', heading: 'House: Chicago, Nueva York y Detroit', tocLabel: 'House: Chicago, Nueva York, Detroit', subsections: group(['marshall-jefferson', 'todd-terry', 'louie-vega', 'kerri-chandler', 'theo-parrish', 'dj-jazzy-jeff'])},
    {id: 'house-now', heading: 'El house de hoy', subsections: group(['black-coffee', 'solomun', 'honey-dijon', 'black-madonna', 'dixon'])},
    {id: 'techno', heading: 'Techno', subsections: group(['carl-craig', 'joey-beltram', 'sven-vath', 'nina-kraviz', 'adam-beyer', 'tale-of-us', 'charlotte-de-witte'])},
    {id: 'marathons', heading: 'Maratones y noches de cierre', subsections: group(['cox-space', 'four-tet-floating-points', 'cox-fatboy'])},
    {id: 'festival-floors', heading: 'Pistas de festival', subsections: group(['john-digweed', 'seth-troxler', 'fatboy-i360'])},
    {id: 'jungle-dnb', heading: 'Jungle y drum and bass', subsections: group(['fabio-grooverider', 'dj-randall', 'goldie-ulterior-motive'])},
    {id: 'garage-footwork-radio', heading: 'Garage, footwork y radio', subsections: group(['ben-ufo', 'rashad-spinn', 'skream'])},
    {id: 'where-to-start', heading: 'Por dónde empezar'}
  ],
  media,

  sources: [
    {href: 'https://soundcloud.com/floatingpoints/floating-points-four-tet-final-plastic-people-2-1-2015', label: 'Floating Points y Four Tet: su relato de la última fiesta pública de Plastic People (en inglés)'},
    {href: 'https://www.mixcloud.com/CarlCox/carl-cox-global-live-from-space-ibiza-the-final-chapter-global-700-part-1/', label: 'Carl Cox: Global 700 y la despedida de su residencia en Space (en inglés)'},
    {href: 'https://xlr8r.com/podcasts/dj-rashad-dj-spinn/', label: 'XLR8R: DJ Rashad y DJ Spinn, Podcast 158 (en inglés)'},
    {href: 'https://mixmag.net/amp/skream-uk-garage-alter-ego-set', label: 'Mixmag: Skream sobre los discos de garage detrás de su set Alter Ego (en inglés)'},
    {href: 'https://mixmag.net/feature/20-best-dj-mixes-of-the-decade-2010-2019', label: 'Mixmag: Black Coffee y los mejores DJ mixes de la década (en inglés)'},
    {href: 'https://mixmag.net/read/dj-randall-in-the-lab-ldn-dj-lab', label: 'Mixmag: la sesión de historia del jungle de Randall, de 1992 a 1995 (en inglés)'}
  ],

  bandcamp: {
    description: 'Comprar uno apoya directamente la música y la escritura.',
    tracks: [
      {title: 'thecatrave, Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks de thecatrave'},
      {title: 'thecatrave, 60 hours of mistakes', id: '3330948631', url: 'https://thecatrave.bandcamp.com/track/60-hours-of-mistakes', linkText: '60 hours of mistakes de thecatrave'}
    ]
  }
};
