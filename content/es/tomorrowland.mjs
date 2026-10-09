// Spanish Tomorrowland guide. Structure and facts from the English page
// (tomorrowland-draft.md); localised, not translated word for word.
//
// Spanish keywords, measured 2026-10-09 with Keyword Planner (Spain pass, then
// Mexico, Argentina, Colombia and Chile summed; keywords/es-tomorrowland.json).
// Ranges are Keyword Planner's buckets: tomorrowland 10K-100K, tomorrowland
// 2027 1K-10K, tomorrowland winter 1K-10K, qué es tomorrowland 100-1K,
// tomorrowland festival / brasil / tailandia / bélgica / españa / mainstage
// 100-1K, dónde es / cuándo es 10-100. Ticket, price, line-up, camping, live
// and fire queries are rejected in the map. One neutral Spanish with Spain
// spellings (owner, 2026-10-09), to be re-checked in Search Console on /es.
//
// The images are the English guide's, in img/tomorrowland/, with translated
// captions; see home-articles.mjs for why a translation may reuse them.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, articleYoutubeEmbed, ownTrackListening
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption, className = 'wide-archive-image') => articleFigure({
  src: `img/tomorrowland/${name}-${width}.webp`,
  srcset: `img/tomorrowland/${name}-320.webp 320w, img/tomorrowland/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className
});

export default {
  lang: 'es',
  name: 'es-tomorrowland',
  file: 'es/tomorrowland-festival.html',
  draft: 'es/tomorrowland-draft.md',
  canonical: 'https://thecatrave.com/es/tomorrowland-festival',
  englishPath: '/tomorrowland-festival',
  ogImage: 'https://thecatrave.com/img/og/tomorrowland.jpg',
  bodyClass: 'article-page tomorrowland-page',

  title: 'Tomorrowland: qué es, dónde es y cuándo es en 2027',
  description: 'Tomorrowland es un festival de música electrónica en Boom, Bélgica. Dónde es, cuándo es en 2027, cuánta gente va, de quién es y qué música suena.',
  datePublished: '2026-10-09',
  dateModified: '2026-10-09',
  dateLabel: '9 de octubre de 2026',

  heroKicker: 'Tomorrowland',
  heroTitle: 'Tomorrowland Festival',
  deck: 'Un festival en un parque belga que el mundo conoce sobre todo por una pantalla. Dónde es, qué tamaño tiene de verdad, de quién es y qué suena lejos de la Mainstage.',
  answerLabel: 'Qué es Tomorrowland',
  breadcrumbName: 'Tomorrowland Festival',

  answerSection: 'Respuesta',
  introSection: 'Introducción',
  introTitle: 'El festival que casi todo el mundo solo ve.',
  faqSection: 'FAQ',
  faqLabel: 'Preguntas frecuentes',
  faqTitle: 'Preguntas frecuentes sobre Tomorrowland.',
  ownSetAfter: 'history',

  sections: [
    {id: 'where', heading: 'Dónde es Tomorrowland', title: 'Dónde es Tomorrowland.', subsections: ['winter', 'tailandia', 'brasil', 'espana', 'usa', 'tomorrowland-2027']},
    {id: 'how-big', heading: 'Cuánta gente va a Tomorrowland: asistentes y entradas', title: 'Cuánta gente va a Tomorrowland: asistentes y entradas.'},
    {id: 'history', heading: 'Breve historia, y quién es el dueño de Tomorrowland', title: 'Breve historia, y quién es el dueño de Tomorrowland.'},
    {id: 'famous', heading: 'Por qué Tomorrowland se hizo tan famoso', title: 'Por qué Tomorrowland se hizo tan famoso.'},
    {id: 'music', heading: 'Qué música suena de verdad en Tomorrowland', title: 'Qué música suena de verdad en Tomorrowland.', kicker: 'La música'},
    {id: 'from-home', heading: 'Escuchar Tomorrowland desde casa', title: 'Escuchar Tomorrowland desde casa.'}
  ],

  media: ({lang}) => ({
    // The owner's own music inside the text: Berlin Race 1909, as on the
    // German pages.
    'thecatrave berlin-race-1909': ownTrackListening('berlin-race-1909', 'Lejos de los grandes escenarios: percusión rota con eco de dub techno y espacio. Un tema mío.', lang),
    'Retreat to Dreamville': figure('dreamville-2014', 1200, 795,
      'Tiendas de campaña y asistentes en DreamVille, el camping de Tomorrowland, en 2014',
      'DreamVille, el camping de Tomorrowland, en 2014. Sus paquetes se venden junto con la entrada del festival. Foto: sergejf, CC BY 2.0.'),
    'Main Stage 2008': figure('mainstage-2008', 1024, 768,
      'La Mainstage de Tomorrowland en 2008, un escenario modesto a plena luz del día con el público delante',
      'La Mainstage en 2008, tres años después del inicio del festival y mucho antes de ser el escenario que se conoce por la retransmisión. Foto: TheWorldIsMine, CC BY-SA 2.0.'),
    '2014 Main Stage': figure('mainstage-2014', 1200, 708,
      'La Mainstage de Tomorrowland en 2014, un enorme escenario temático sobre el público',
      'La Mainstage en 2014, en la décima edición. Foto: sergejf, CC BY 2.0.'),
    'Brussels Airport': figure('brussels-airport-2013', 1200, 795,
      'La terminal de llegadas del aeropuerto de Bruselas decorada para los asistentes de Tomorrowland en 2013',
      'El aeropuerto de Bruselas decorado para la llegada de los asistentes a Tomorrowland en 2013. Los paquetes Global Journey traen a los visitantes con Brussels Airlines. Foto: Brussels Airport, CC BY-SA 2.0.'),
    'Carl Cox': figure('carl-cox-2008', 1024, 768,
      'Carl Cox pinchando en Tomorrowland en 2008',
      'Carl Cox en Tomorrowland en 2008. El techno tiene escenario propio en el festival desde los primeros años. Foto: TheWorldIsMine, CC BY-SA 2.0.'),
    'WdWnCTkqIRs': articleYoutubeEmbed({
      src: 'https://www.youtube-nocookie.com/embed/WdWnCTkqIRs',
      title: 'Dimitri Vegas & Like Mike, Live At Tomorrowland 2025 Mainstage, en el canal de YouTube de Dimitri Vegas & Like Mike'
    }),
    'ZG1AT6tylA4': articleVideoCollection({
      lang: 'es',
      label: 'Las sesiones más vistas de Tomorrowland',
      description: 'Dos sesiones de la Mainstage: Hardwell en 2013, con más de 28 millones de reproducciones en su propio canal, y Swedish House Mafia en 2025, en el canal del festival.',
      items: [
        articleVideoCard({youtubeId: 'ZG1AT6tylA4', genre: 'Mainstage, 2013', artist: 'Hardwell', title: 'En directo en Tomorrowland 2013'}),
        articleVideoCard({youtubeId: 'H1b8hXkGyTo', genre: 'Mainstage, 2025', artist: 'Swedish House Mafia', title: 'Tomorrowland 2025, Mainstage'})
      ]
    }),
    'Table: attendance': articleTable({
      headers: ['Año', 'Asistentes', 'Qué pasó'],
      rows: [
        ['2005', 'Unos 10.000', 'Primera edición, el 14 de agosto'],
        ['2010', '180.000', ''],
        ['2017 a 2019', '400.000', 'Dos fines de semana'],
        ['2020 y 2021', 'ninguno', 'Cancelado por la pandemia'],
        ['2022', '600.000', 'Tres fines de semana, el récord'],
        ['2023 y 2024', '400.000', ''],
        ['2026', '400.000', 'Asistentes de más de 200 países']
      ].map(row => row.map(escapeHtml))
    })
  }),

  sources: [
    {href: 'https://belgium.tomorrowland.com/en/welcome/down-memory-lane/', label: 'Tomorrowland Belgium: Down Memory Lane (en inglés)'},
    {href: 'https://winter.tomorrowland.com/en/welcome/down-memory-lane/', label: 'Tomorrowland Winter: Down Memory Lane (en inglés)'},
    {href: 'https://faq.tomorrowland.com/hc/en-us/articles/4402621418132-Where-and-when-will-Tomorrowland-Belgium-2027-take-place', label: 'Tomorrowland Belgium: dónde y cuándo será la edición de 2027 (en inglés)'},
    {href: 'https://press.tomorrowland.com/', label: 'Tomorrowland, información de prensa: propiedad y organización (en inglés)'},
    {href: 'https://en.wikipedia.org/wiki/Tomorrowland_(festival)', label: 'Wikipedia: Tomorrowland (festival) (en inglés)'},
    {href: 'https://news.pollstar.com/2026/07/29/tomorrowland-breaks-own-livestream-record/', label: 'Pollstar: Tomorrowland Breaks Own Livestream Record (en inglés)'},
    {href: 'https://www.bandwagon.asia/articles/tomorrowland-belgium-2026-wraps-with-400-000-fans-calvin-harris-debut-record-livestreams-festival-report', label: 'Bandwagon: Tomorrowland Belgium 2026 wraps with 400,000 fans (en inglés)'},
    {href: 'https://djmag.com/news/tomorrowland-2025-mainstage-fire-reportedly-caused-ethanol-spill-during-testing', label: 'DJ Mag: Tomorrowland 2025 Mainstage fire reportedly caused by ethanol spill during testing (en inglés)'},
    {href: 'https://www.euronews.com/culture/2025/07/18/belgiums-tomorrowland-festival-opens-after-massive-fire-destroyed-main-stage', label: 'Euronews: Belgium’s Tomorrowland festival opens after massive fire destroyed main stage (en inglés)'},
    {href: 'https://www.revolution935.com/2026/01/24/tomorrowland26/', label: 'Revolution 935: Tomorrowland Belgium 2026 Tickets (en inglés)'},
    {href: 'https://consciouselectronic.com/2026/07/25/tomorrowland-las-vegas-2027-rumor-mill/', label: 'Conscious Electronic: Is Tomorrowland heading to Las Vegas in 2027? (en inglés)'},
    {href: 'https://lasvegasweekly.com/ae/music/2025/aug/28/insomniac-and-tomorrowland-go-b2b-for-unity-sphere/', label: 'Las Vegas Weekly: Insomniac and Tomorrowland go b2b for Unity at Sphere (en inglés)'},
    {href: 'https://www.1001tracklists.com/tracklist/p3duwuk/chase-status-mainstage-tomorrowland-weekend-2-belgium-2026-07-26.html', label: '1001Tracklists: Chase & Status, Mainstage, Tomorrowland, segundo fin de semana, 2026 (en inglés)'},
    {href: 'https://www.1001tracklists.com/tracklist/2rpp1hzt/camo-and-krooked-netsky-and-friends-stage-tomorrowland-weekend-2-belgium-2017-07-28.html', label: '1001Tracklists: Camo & Krooked, escenario Netsky & Friends, Tomorrowland 2017 (en inglés)'},
    {href: 'https://weraveyou.com/2019/07/tomorrowland-iconic-sets-ever/', label: 'We Rave You: Tomorrowland, the most iconic sets of all time (en inglés)'}
  ],

  bandcamp: {
    description: 'Mi propia música es breakbeat, lejos de la Mainstage. Comprar un tema apoya directamente mi trabajo.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks de thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 de thecatrave'}
    ]
  }
};
