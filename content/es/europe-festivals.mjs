// Spanish Europe festivals comparison. Structure, facts, dates and the "not
// announced" labels from the English page (best-electronic-music-festivals-
// europe-draft.md, build-europe-festivals-article.mjs), checked there on
// 6 October 2026; the French module (content/fr/europe-festivals.mjs) is the
// structural template.
//
// Spanish keywords: Keyword Planner (Spain, 9 Oct 2026) returned no row for any
// Spanish Europe-festival phrase (keywords/es-europe-festivals.json), so there
// is no measured head term. Wording follows the live es-ES SERP and
// People-also-ask read the same day (google.es, hl=es, gl=es): results write
// "mejores festivales de música electrónica (en) Europa" and "festivales
// techno"; People also ask "¿Cuál es el mejor festival de música electrónica
// del mundo?", "¿Cuáles son los 10 mejores festivales de música?" and "¿Cuál
// es el festival de música electrónica más importante del mundo?". The FAQ
// answers keep to facts already on the English page.
//
// Maintenance: the dates are the English page's. Change them here and in the
// draft whenever the English page changes them. Unlike French and German, the
// Spanish page is not yet registered in festival-editions.mjs (open defect
// translated-festival-guides-no-editions-entry).
//
// The draft places each image, player and table with [Image: ...], [Embed: ...]
// and [Table: ...] lines. The images are the English page's, in
// img/europe-festivals/, with translated captions.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, ownSetListening
} from '../../site-components.mjs';

const figure = (name, height, alt, caption) => articleFigure({
  src: `img/europe-festivals/${name}-1200.webp`,
  srcset: `img/europe-festivals/${name}-320.webp 320w, img/europe-festivals/${name}-1200.webp 1200w`,
  width: 1200, height, alt, caption, className: 'wide-archive-image'
});

const video = (lang, label, description, item) => articleVideoCollection({
  lang, label, description, items: [articleVideoCard(item)]
});

const link = ([href, label]) => `<a href="${href}" target="_blank" rel="noopener noreferrer">${label}</a>`;

const headers = ['Festival', 'Dónde', 'Fechas 2027', 'Sonido', 'Tamaño', 'Alojamiento', 'Ideal para'];

const festivals = [
  ['Tomorrowland', 'Boom, Bélgica', 'Aún sin anunciar (finales de julio en las últimas ediciones)', 'EDM big room, house, techno', 'Hasta 200.000 por fin de semana', 'Camping DreamVille', 'Un primer gran festival'],
  ['Untold', 'Cluj-Napoca, Rumanía', '5 al 8 de agosto', 'EDM big room, techno', 'Más de 500.000 entradas en cuatro días (2026)', 'Ciudad', 'Festival y escapada urbana'],
  ['Parookaville', 'Weeze, Alemania', '16 al 18 de julio', 'EDM comercial de festival', 'Unas 75.000 por día', 'Camping', 'Un fin de semana temático'],
  ['Creamfields', 'Daresbury, Inglaterra', '26 al 29 de agosto', 'House, trance, big room', '80.000 (2026)', 'Camping', 'Un público británico de house y trance'],
  ['Ultra Europe', 'Split, Croacia', '9 al 11 de julio', 'EDM big room', 'No se publica aquí', 'Ciudad', 'Vacaciones de playa con festival'],
  ['Mysteryland', 'Haarlemmermeer, Países Bajos', '27 al 29 de agosto', 'Del techno y el house al hardstyle', 'Más de 125.000 al año (cifra del festival)', 'Camping', 'Variedad cerca de Ámsterdam'],
  ['Defqon.1', 'Biddinghuizen, Países Bajos', '24 al 27 de junio', 'Hardstyle, hardcore', 'Unos 268.000 visitantes (2025)', 'Camping', 'Aficionados al hardstyle'],
  ['Awakenings', 'Hilvarenbeek, Países Bajos', '9 al 11 de julio', 'Techno', 'No se publica aquí', 'Camping', 'Un fin de semana de techno'],
  ['Dekmantel', 'Ámsterdam, Países Bajos', 'Aún sin anunciar (finales de julio y principios de agosto en las últimas ediciones)', 'Techno, house, electro, disco, experimental', 'No se publica aquí', 'Ciudad, festival de día', 'Descubrir DJs'],
  ['Time Warp', 'Mannheim, Alemania', '3 de abril', 'Techno, house', 'Más de 40.000', 'Una noche en interior', 'Techno en una sola noche'],
  ['Kappa FuturFestival', 'Turín, Italia', '2 al 4 de julio', 'Techno, house', 'No se publica aquí', 'Ciudad, de mediodía a medianoche', 'Techno a plena luz del día'],
  ['Sónar', 'Barcelona, España', '17 al 19 de junio', 'Electrónica, experimental, directos', 'Unas 150.000 (2026)', 'Ciudad', 'Una programación aventurera'],
  ['<a href="/es/monegros-desert-festival">Guía detallada de Monegros</a>', 'Fraga, España', '31 de julio', 'Muchos estilos electrónicos', 'No se publica aquí', 'Una noche, tiendas VIP', 'Una noche extrema'],
  ['<a href="/boomtown-festival">Guía detallada de Boomtown</a>', 'Cerca de Winchester, Inglaterra', '11 al 15 de agosto', 'Del reggae y el dub al techno, grupos en directo', 'Autorizado para más de 75.000', 'Camping', 'Un festival que es un mundo aparte']
];

const smallerFestivals = [
  ['Garbicz', 'Cerca de Torzym, Polonia', 'Aún sin anunciar (30 de julio al 3 de agosto en 2026)', 'House, techno, ambient, directos', 'Unas 11.000 (2026)', 'Camping', 'Sesiones largas en el bosque'],
  ['NACHTI', 'Olganitz, Alemania', '30 de julio al 1 de agosto', 'Música de club electrónica y directos', 'Unas 3.000 (años de Nachtdigital)', 'Bungalós y camping', 'Un fin de semana pequeño y bien programado'],
  ['Houghton', 'Houghton Hall, Norfolk, Inglaterra', 'Aún sin anunciar (agosto)', 'House, techno, leftfield', 'Unas 10.000', 'Camping', 'Música de día y de noche'],
  ['Draaimolen', 'Tilburg, Países Bajos', 'Aún sin anunciar (principios de septiembre)', 'Techno, ambient, experimental', 'No se publica aquí', 'Ciudad, festival de día', 'Techno sin multitudes'],
  ['Waking Life', 'Crato, Portugal', 'Mediados de junio (aún no en la web oficial)', 'Electrónica, experimental, música del mundo', 'No se publica aquí', 'Camping y tipis', 'Una semana de solsticio en el campo'],
  ['Kala', 'Dhërmi, Albania', '2 al 9 de junio', 'Dance music, DJs y directos', 'No se publica aquí', 'Hotel incluido', 'Una semana en la playa'],
  ['Freerotation', 'Clyro, Gales', 'Aún sin anunciar (julio)', 'Deep house, techno', 'No se publica aquí', 'Solo socios', 'Si alguien te invita']
];

export default {
  lang: 'es',
  name: 'es-europe-festivals',
  file: 'es/festivales-musica-electronica-europa.html',
  draft: 'es/europe-festivals-draft.md',
  canonical: 'https://thecatrave.com/es/festivales-musica-electronica-europa',
  englishPath: '/best-electronic-music-festivals-europe',
  ogImage: 'https://thecatrave.com/img/og/europe-festivals.jpg',
  bodyClass: 'article-page europe-festivals-page',
  minReadingMinutes: 9,

  title: 'Mejores festivales de música electrónica en Europa 2027',
  description: 'Catorce grandes y siete pequeños festivales de música electrónica en Europa en 2027, comparados por sonido, tamaño, entorno y fechas, confirmadas o no.',
  datePublished: '2026-10-09',
  dateModified: '2026-10-09',
  dateLabel: '9 de octubre de 2026',

  heroKicker: 'Guía de festivales 2027',
  heroTitle: 'Mejores festivales de música electrónica en Europa en 2027',
  deck: 'Catorce grandes festivales y siete más pequeños, comparados por lo que programan, su tamaño, dónde se duerme y sus fechas, con las de 2027 confirmadas y las que aún no lo están.',
  answerLabel: 'Los mejores festivales de música electrónica en Europa',
  breadcrumbName: 'Festivales de música electrónica en Europa',

  answerSection: 'Respuesta',
  introSection: 'Introducción',
  introTitle: 'Una lista para elegir.',
  faqSection: 'FAQ',
  faqLabel: 'Preguntas frecuentes sobre los festivales en Europa',
  faqTitle: 'Preguntas frecuentes sobre los festivales de música electrónica en Europa.',

  sections: [
    {id: 'criteria', heading: 'Cómo se ha hecho esta lista', title: 'Cómo se ha hecho esta lista.'},
    {id: 'at-a-glance', heading: 'Las fechas de 2027 de un vistazo', title: 'Las fechas de 2027 de un vistazo.'},
    {id: 'big-stages', heading: 'Grandes escenarios', title: 'Grandes escenarios.', kicker: 'EDM y escenario principal',
      subsections: ['tomorrowland', 'untold', 'parookaville', 'creamfields', 'ultra-europe', 'mysteryland']},
    {id: 'hard-dance', heading: 'Hard dance', title: 'Hard dance.', subsections: ['defqon-1']},
    {id: 'techno-house', heading: 'Techno y house', title: 'Techno y house.',
      subsections: ['awakenings', 'dekmantel', 'time-warp', 'kappa-futurfestival', 'sonar']},
    {id: 'desert-cities', heading: 'Desierto y ciudades temáticas', title: 'Desierto y ciudades temáticas.',
      subsections: ['monegros-desert-festival', 'boomtown']},
    {id: 'smaller', heading: 'Festivales pequeños que valen el viaje', title: 'Festivales pequeños que valen el viaje.', kicker: 'Underground y boutique',
      subsections: ['garbicz', 'nachti', 'houghton', 'draaimolen', 'waking-life', 'kala', 'freerotation']},
    {id: 'not-listed', heading: 'Lo que no está en esta lista, y por qué', title: 'Lo que no está en esta lista, y por qué.'},
    {id: 'choose', heading: 'Cómo elegir', title: 'Cómo elegir.'}
  ],

  media: ({lang}) => ({
    'Table: major': articleTable({label: 'Los grandes festivales europeos comparados, 2027', headers, rows: festivals}),
    'Table: smaller': articleTable({label: 'Los festivales europeos pequeños comparados, 2027', headers, rows: smallerFestivals}),
    'defqon': figure('defqon1-red-stage-2022', 900,
      'El escenario principal Red de Defqon.1 en 2022, un escenario con alas sobre una gran multitud a plena luz del día',
      'El Red stage de Defqon.1 en 2022, el gran escenario de hardstyle. Cada escenario del festival lleva el nombre de un color y está dedicado a un estilo. Foto: Blyra92, CC BY-SA 4.0.'),
    'kappa': figure('kappa-futurfestival-2025', 900,
      'Un público a plena luz del día bajo la estructura de acero del Futur Stage en el Kappa FuturFestival, en el Parco Dora de Turín',
      'El Futur Stage del Kappa FuturFestival en julio de 2025, bajo la estructura de acero de una antigua nave industrial del Parco Dora, en Turín. Foto: MadBob, CC BY 4.0.'),
    'monegros': figure('monegros-desert-2009', 900,
      'Una multitud densa bajo el sol en el Monegros Desert Festival, con una torre de altavoces y tiendas detrás',
      'El Monegros Desert Festival a la una de la tarde en 2009. El festival dura desde la tarde del sábado hasta el mediodía del domingo, en el desierto de Aragón, cerca de Fraga. Foto: BigSus, CC BY 2.5.'),
    'nachti': figure('nachtdigital-2014', 675,
      'Un DJ pincha bajo luz azul y neones en una sala oscura en Nachtdigital en 2014',
      'Nachtdigital en el Bungalowdorf Olganitz en 2014, cuando el festival aún se llamaba así. Foto: Robert Richter para Nachtdigital, CC BY 2.0.'),
    'garbicz-set': video(lang, 'Garbicz, desde casa',
      'La sesión al amanecer de Ezio Aguiar en Garbicz en 2025, subida por el propio artista. El festival suena toda la noche, y lo que se comenta son las sesiones de la mañana.',
      {youtubeId: 'IhBa3o5YYME', genre: 'GARBICZ, 2025', artist: 'Ezio Aguiar', title: 'Sunrise set'}),
    'dekmantel-set': video(lang, 'Dekmantel, desde casa',
      'Four Tet en el escenario The Loop de Dekmantel en 2025, subido por el festival. El tipo de sesión larga y abierta que ha dado fama al festival.',
      {youtubeId: 'E4NXVs4SlhE', genre: 'DEKMANTEL, 2025', artist: 'Four Tet', title: 'The Loop'}),
    'boomtown-set': video(lang, 'Boomtown, desde casa',
      'Pearson Sound en el escenario Anara de Boomtown en 2025, grabado por Keep Hush. Uno de los decenas de pequeños locales de la ciudad-festival.',
      {youtubeId: 'OFuZ3lsZKxc', genre: 'BOOMTOWN, 2025', artist: 'Pearson Sound', title: 'Anara stage'}),
    'first-mix': ownSetListening(0, lang),
    'second-mix': ownSetListening(1, lang)
  }),

  sources: [
    {html: `Fechas de 2027, leídas en la web oficial de cada festival el 22 de septiembre de 2026: ${[
      ['https://www.defqon1.com/', 'Defqon.1'], ['https://www.awakenings.com/en/', 'Awakenings'], ['https://www.time-warp.de/', 'Time Warp'],
      ['https://www.kappafuturfestival.it/', 'Kappa FuturFestival'], ['https://www.boomtownfair.co.uk/', 'Boomtown'], ['https://www.monegrosfestival.com/', 'Monegros'],
      ['https://www.dekmantelfestival.com/', 'Dekmantel'], ['https://belgium.tomorrowland.com/', 'Tomorrowland']
    ].map(link).join(', ')}.`},
    {html: 'Fechas y tamaño de Untold, Parookaville, Creamfields, Ultra Europe, Mysteryland y Sónar: la guía de esta web sobre cada uno de esos festivales, enlazada más arriba, que cita sus propias fuentes.'},
    {href: 'https://djmag.com/top100festivals', label: 'DJ Mag (en inglés): Top 100 Festivals 2026'},
    {html: `Wikipedia (en inglés): ${[
      ['https://en.wikipedia.org/wiki/Defqon.1_Festival', 'Defqon.1'], ['https://en.wikipedia.org/wiki/Time_Warp_(festival)', 'Time Warp'], ['https://en.wikipedia.org/wiki/Boomtown_(festival)', 'Boomtown']
    ].map(link).join(', ')}`},
    {href: 'https://ra.co/news/85120', label: 'Resident Advisor (en inglés): el festival EXIT se traslada a Montenegro en 2026'}
  ],

  bandcamp: {
    description: 'Entre festival y festival, la música que hago yo: breaks con techno y dub dentro. Comprar un lanzamiento apoya mi trabajo directamente.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 de thecatrave'},
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks de thecatrave'}
    ]
  }
};
