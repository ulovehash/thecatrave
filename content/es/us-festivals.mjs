// Spanish US EDM festivals comparison. Structure, facts, dates and the "not
// announced" labels from the English page (best-edm-festivals-usa-draft.md,
// build-us-festivals-article.mjs), checked there on 2 October 2026. The page
// has no French or German version; the Spanish Europe module
// (content/es/europe-festivals.mjs) is the structural template.
//
// Spanish keywords: Keyword Planner (Spain, 9 Oct 2026) returned no row for a
// Spanish US-festival phrase (keywords/es-us-festivals.json), so there is no
// measured head term. Wording follows the live es-ES SERP and People-also-ask
// read the same day (google.es, hl=es, gl=es): results write "festivales de
// música electrónica en Estados Unidos" and "festivales EDM"; People also ask
// "¿Cuáles son los mejores festivales de música electrónica?", "¿Cuáles son
// los festivales más famosos de Estados Unidos?" and "¿Cuáles son los 10
// mejores festivales?". The FAQ answers keep to facts already on the English
// page; the world-wide "festival de música electrónica más famoso" question is
// not answered because the English page gives no verdict beyond the US.
//
// Maintenance: the dates are the English page's. Change them here and in the
// draft whenever the English page changes them; the page is registered in
// festival-editions.mjs with the other roundups.
//
// The images are the English page's, in img/us-festivals/, with translated
// captions.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, ownSetListening, ownTrackListening
} from '../../site-components.mjs';

const fig = (name, width, height, alt, caption) => articleFigure({
  src: `img/us-festivals/${name}-1200.webp`,
  srcset: `img/us-festivals/${name}-320.webp 320w, img/us-festivals/${name}-1200.webp 1200w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

const link = ([href, label]) => `<a href="${href}" target="_blank" rel="noopener noreferrer">${label}</a>`;

const festivals = [
  ['EDC Las Vegas', 'Las Vegas, Nevada', 'EDC Dusk del 14 al 16 de mayo, EDC Dawn del 21 al 23 de mayo', 'EDM de gran escenario', 'Más de 500.000 en el fin de semana', 'Camping', 'La producción completa'],
  ['Ultra', 'Miami, Florida', '26 al 28 de marzo', 'EDM de gran escenario', 'Unas 165.000 entradas', 'Ciudad', 'Un festival y un viaje a Miami'],
  ['EDC Orlando', 'Orlando, Florida', 'Aún sin anunciar (6 al 8 de noviembre en 2026)', 'EDM de gran escenario', 'No se publica aquí', 'No se publica aquí', 'EDC fuera de Las Vegas'],
  ['Beyond Wonderland', 'San Bernardino, California; Joliet, Illinois; George, Washington', '26 y 27 de marzo; 10 al 13 de junio; 25 al 27 de junio', 'Música electrónica de baile', 'No se publica aquí', 'Camping (Medio Oeste y The Gorge)', 'Un fin de semana de camping cerca de ti'],
  ['HARD Summer', 'Los Ángeles, California', 'Aún sin anunciar (1 y 2 de agosto en 2026)', 'Electrónica y hip-hop', 'No se publica aquí', 'No se publica aquí', 'Electrónica y hip-hop juntos'],
  ['Movement', 'Detroit, Míchigan', '29 al 31 de mayo', 'Techno, house', 'Seis escenarios', 'Ciudad', 'Techno donde nació'],
  ['ARC', 'Chicago, Illinois', 'Aún sin anunciar (4 al 7 de septiembre en 2026)', 'House, techno', 'No se publica aquí', 'Ciudad', 'House en Chicago'],
  ['CRSSD', 'San Diego, California', 'Aún sin anunciar (primavera); 26 y 27 de septiembre en 2026', 'House, techno, electro, indie dance', 'Unas 15.000 al día (primavera de 2024)', 'Ciudad', 'Un fin de semana junto al agua'],
  ['III Points', 'Miami, Florida', 'Aún sin anunciar (16 y 17 de octubre en 2026)', 'Indie, electrónica, hip-hop, experimental', 'No se publica aquí', 'Ciudad', 'Electrónica entre las artes'],
  ['Lost Lands', 'Thornville, Ohio', 'Aún sin anunciar (18 al 20 de septiembre en 2026)', 'Bass music', 'Entradas agotadas en 2026', 'Camping', 'Bass music con camping'],
  ['Bass Canyon', 'George, Washington', 'Aún sin anunciar (14 al 16 de agosto en 2026)', 'Bass music', 'No se publica aquí', 'Camping', 'Bass music en un cañón'],
  ['Electric Forest', 'Rothbury, Míchigan', 'Aún sin anunciar (25 al 28 de junio en 2026)', 'Jam bands y electrónica', '40.000 a 50.000 (estimación de 2025)', 'Camping', 'Una semana en el bosque']
];

export default {
  lang: 'es',
  name: 'es-us-festivals',
  file: 'es/festivales-edm-estados-unidos.html',
  draft: 'es/us-festivals-draft.md',
  canonical: 'https://thecatrave.com/es/festivales-edm-estados-unidos',
  englishPath: '/best-edm-festivals-usa',
  ogImage: 'https://thecatrave.com/img/og/us-festivals.jpg',
  bodyClass: 'article-page us-festivals-page',
  minReadingMinutes: 9,

  title: 'Festivales EDM en Estados Unidos 2027: EDC, Ultra, Movement',
  description: 'EDC Dusk y Dawn del 14 al 16 y del 21 al 23 de mayo, Ultra del 26 al 28 de marzo, Movement del 29 al 31 de mayo: festivales EDM de EE. UU. en 2027, por sonido.',
  datePublished: '2026-10-09',
  dateModified: '2026-10-09',
  dateLabel: '9 de octubre de 2026',

  heroKicker: 'Guía de festivales 2027',
  heroTitle: 'Los mejores festivales EDM de Estados Unidos en 2027',
  deck: 'Doce festivales de Estados Unidos comparados por lo que programan, su tamaño, dónde se duerme y cuándo son, con las fechas de 2027 confirmadas y las que aún no lo están.',
  answerLabel: 'Los mejores festivales EDM de Estados Unidos',
  breadcrumbName: 'Festivales EDM en Estados Unidos',

  answerSection: 'Respuesta',
  introSection: 'Introducción',
  introTitle: 'Una lista para elegir.',
  faqSection: 'FAQ',
  faqLabel: 'Preguntas frecuentes sobre los festivales EDM en Estados Unidos',
  faqTitle: 'Preguntas frecuentes sobre los festivales EDM en Estados Unidos.',

  sections: [
    {id: 'criteria', heading: 'Cómo se ha hecho esta lista', title: 'Cómo se ha hecho esta lista.'},
    {id: 'at-a-glance', heading: 'Las fechas de 2027 de un vistazo', title: 'Las fechas de 2027 de un vistazo.'},
    {id: 'biggest', heading: '¿Cuál es el mayor festival EDM de Estados Unidos?', title: '¿Cuál es el mayor festival EDM de Estados Unidos?', kicker: 'EDM y escenario principal',
      subsections: ['edc-las-vegas', 'ultra-music-festival', 'edc-orlando', 'beyond-wonderland', 'hard-summer']},
    {id: 'house-techno', heading: '¿Qué festivales de Estados Unidos son los mejores para house y techno?', title: '¿Qué festivales de Estados Unidos son los mejores para house y techno?',
      subsections: ['movement', 'arc-music-festival', 'crssd-festival', 'iii-points']},
    {id: 'bass', heading: '¿Dónde vive la bass music en Estados Unidos?', title: '¿Dónde vive la bass music en Estados Unidos?',
      subsections: ['lost-lands', 'bass-canyon']},
    {id: 'forest', heading: '¿Qué festival de Estados Unidos es una semana en el bosque?', title: '¿Qué festival de Estados Unidos es una semana en el bosque?'},
    {id: 'smaller', heading: 'Festivales pequeños que valen el viaje', title: 'Festivales pequeños que valen el viaje.', kicker: 'Fuera de la votación',
      subsections: ['dreamstate', 'decadence-colorado', 'ubbi-dubbi']},
    {id: 'not-listed', heading: 'Lo que no está en esta lista, y por qué', title: 'Lo que no está en esta lista, y por qué.'},
    {id: 'choose', heading: 'Cómo elegir', title: 'Cómo elegir.'}
  ],

  media: ({lang}) => ({
    'Table: major': articleTable({label: 'Los grandes festivales EDM de Estados Unidos comparados, 2027',
      headers: ['Festival', 'Dónde', 'Fechas 2027', 'Sonido', 'Tamaño', 'Alojamiento', 'Ideal para'], rows: festivals}),
    'beyond-wonderland': fig('beyond-wonderland-2010', 1200, 900,
      'Un DJ en el escenario principal de Beyond Wonderland en 2010, con el público debajo',
      'El escenario principal de Beyond Wonderland en marzo de 2010. Foto: Roxanna Salceda, CC BY-SA 2.0.'),
    'iii-points': fig('iii-points-2017', 1200, 900,
      'VIRGO actuando en el escenario Mind Melt de III Points, en Miami, en 2017',
      'VIRGO en el escenario Mind Melt de III Points, en Miami, en octubre de 2017. Foto: Alienasomnia, CC BY-SA 4.0.'),
    'electric-forest': fig('electric-forest-2018', 1200, 600,
      'Asistentes al festival Electric Forest, en Rothbury, Míchigan, en julio de 2018',
      'Electric Forest, en Rothbury, Míchigan, en julio de 2018. Foto: FifthLegend, CC BY 2.0.'),
    'crssd-set': articleVideoCollection({
      lang, label: 'CRSSD, desde casa',
      description: 'Dusky en directo en CRSSD Fest en el otoño de 2018, grabado por Mixmag. El house y el techno por los que el festival es conocido.',
      items: [articleVideoCard({youtubeId: '4gqM7WMrGEw', genre: 'CRSSD, 2018', artist: 'Dusky', title: 'En directo en CRSSD Fest'})]
    }),
    'own-track': ownTrackListening('late-summer-cloud-dance', 'Un tema mío, para escuchar entre festivales.', lang),
    'first-mix': ownSetListening(0, lang),
    'second-mix': ownSetListening(1, lang)
  }),

  sources: [
    {html: `Fechas de 2027, leídas el 2 de octubre de 2026: ${[
      ['https://www.insomniac.com/', 'Insomniac'], ['https://movementfestival.com/faqs', 'preguntas frecuentes de Movement'], ['https://www.basscanyon.com/', 'Bass Canyon'],
      ['https://www.electricforest.com/', 'Electric Forest'], ['https://www.lostlands.com/', 'Lost Lands']
    ].map(link).join(', ')} (EDC, EDC Orlando, Beyond Wonderland y Dreamstate, en Insomniac).`},
    {html: 'Fechas y tamaño de Ultra, Movement, ARC, Coachella, Lollapalooza y Burning Man: la guía de esta web sobre cada uno de esos festivales, enlazada más arriba, que cita sus propias fuentes.'},
    {href: 'https://djmag.com/top100festivals', label: 'DJ Mag (en inglés): Top 100 Festivals 2026'},
    {html: 'Traslado de Beyond Wonderland Medio Oeste al Chicagoland Speedway: Electronic Midwest, 15 de junio de 2026. Evacuación por tormenta en Lost Lands 2026: EDMTunes. Cancelación de Bonnaroo 2027: EDM Sauce. Concurso de acreedores del operador de Electric Zoo: prensa sobre el Capítulo 11 de Avant Gardner del 4 de agosto de 2025.'},
    {html: 'Géneros, fundación y primer evento de HARD Summer: Wikipedia (en inglés).'}
  ],

  bandcamp: {
    description: 'Entre festival y festival, la música que hago yo: breaks con techno y dub dentro. Comprar un lanzamiento apoya mi trabajo directamente.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 de thecatrave'},
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks de thecatrave'}
    ]
  }
};
