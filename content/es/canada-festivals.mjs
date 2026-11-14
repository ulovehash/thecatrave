// Spanish Canada EDM festivals comparison. Structure, facts, dates and the
// "no anunciadas" / "anunciado en ticketeras" labels from the English page
// (best-edm-festivals-canada-draft.md, build-canada-festivals-article.mjs),
// checked there on 31 October 2026.
//
// Spanish wording: Keyword Planner (Spain, Spanish, and Mexico + Argentina +
// Colombia + Chile, Spanish, 2026-11-14) returned no data for "festivales edm
// canada" and "festivales de musica electronica canada"; "shambhala festival"
// and "veld festival" sit in the 10-100 bucket in both passes. "Ile Soniq" was
// not measured (keywords/es-canada-festivals.json). The google.es SERP showed
// no People also ask and no related searches.
//
// Maintenance: the dates are the English page's. Change them here and in the
// draft whenever the English page changes them; roll to 2028 with it in
// September 2027.
//
// The images are the English page's, in img/canada-festivals/, with translated
// captions.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, ownPlaylistListening, ownSetListening, ownTrackListening
} from '../../site-components.mjs';

const fig = (name, width, height, alt, caption) => articleFigure({
  src: `img/canada-festivals/${name}-1200.webp`,
  srcset: `img/canada-festivals/${name}-320.webp 320w, img/canada-festivals/${name}-1200.webp 1200w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

const link = ([href, label]) => `<a href="${href}" target="_blank" rel="noopener noreferrer">${label}</a>`;

const festivals = [
  ['Electric Island', 'Toronto, Ontario', 'No anunciadas (2026: de mayo a agosto)', 'Electrónica', 'Una temporada de eventos de día', 'Un día en la ciudad'],
  ['Escapade', 'Ottawa, Ontario', 'No anunciadas (2026: del 26 al 28 de junio)', 'EDM', 'Tres días en 2026', 'Un fin de semana en Ottawa'],
  ['Bass Coast', 'Merritt, BC', 'Del 9 al 12 de julio', 'Bass music y electrónica', 'Cinco escenarios, más de 150 artistas', 'Un fin de semana de acampada independiente'],
  ['FVDED in the Park', 'Surrey, BC', 'Julio, días no anunciados', 'EDM y hip-hop', 'Dos días', 'Un gran escenario cerca de Vancouver'],
  ['Shambhala', 'Salmo, BC', 'Del 23 al 26 de julio (agotado)', 'Bass music y electrónica', '23.500 en el recinto', 'Un fin de semana largo de acampada'],
  ['VELD', 'Toronto, Ontario', 'Del 30 de julio al 1 de agosto', 'EDM de gran escenario', 'Tres días, sin cifra oficial', 'Cabezas de cartel en Ontario'],
  ['Chasing Summer', 'Calgary, Alberta', 'Anunciado en webs de eventos: 31 de julio y 1 de agosto', 'EDM', 'Unas 30.000 al año (reportaje de 2023)', 'Un fin de semana de verano en Alberta'],
  ['Ile Soniq', 'Montreal, Quebec', 'Anunciado en ticketeras: 7 y 8 de agosto', 'EDM de gran escenario y hip-hop', '76.000 en dos días en 2025', 'Cabezas de cartel en un parque urbano'],
  ['MUTEK', 'Montreal, Quebec', 'Del 24 al 29 de agosto', 'Música electrónica experimental', 'Seis días', 'Escuchar con atención'],
  ['Piknic Électronik', 'Montreal, Quebec', 'No anunciadas (2026: de mayo a octubre)', 'House, techno', 'Una temporada de fiestas', 'Un domingo en el parque']
];

export default {
  lang: 'es',
  name: 'es-canada-festivals',
  file: 'es/festivales-edm-canada.html',
  draft: 'es/canada-festivals-draft.md',
  canonical: 'https://thecatrave.com/es/festivales-edm-canada',
  englishPath: '/best-edm-festivals-canada',
  ogImage: 'https://thecatrave.com/img/og/canada-festivals.jpg',
  bodyClass: 'article-page canada-festivals-page',
  minReadingMinutes: 6,

  title: 'Festivales EDM en Canadá 2027: VELD, Shambhala, Ile Soniq',
  description: 'Los mejores festivales EDM en Canadá en 2027, con fechas, ciudades y sonido: de VELD en Toronto y el Shambhala Festival en BC a Ile Soniq en Montreal.',
  datePublished: '2026-11-14',
  dateModified: '2026-11-14',
  dateLabel: '14 de noviembre de 2026',

  heroKicker: 'Guía de festivales 2027',
  heroTitle: 'Los mejores festivales EDM en Canadá 2027',
  deck: 'Los festivales EDM canadienses comparados por provincia, sonido y tamaño, de los parques urbanos de Toronto y Montreal a los fines de semana de acampada en Columbia Británica, con las fechas de 2027 confirmadas y las que aún faltan.',
  answerLabel: 'Los mejores festivales EDM en Canadá',
  breadcrumbName: 'Festivales EDM en Canadá',

  answerSection: 'Respuesta',
  introSection: 'Introducción',
  introTitle: 'Una lista para elegir.',
  faqSection: 'FAQ',
  faqLabel: 'Preguntas frecuentes sobre los festivales EDM en Canadá',
  faqTitle: 'Preguntas frecuentes sobre los festivales EDM en Canadá.',

  sections: [
    {id: 'criteria', heading: 'Cómo se ha hecho esta lista', title: 'Cómo se ha hecho esta lista.'},
    {id: 'at-a-glance', heading: 'Las fechas de los festivales EDM en Canadá en 2027 de un vistazo', title: 'Las fechas de los festivales EDM en Canadá en 2027 de un vistazo.', tocLabel: 'Las fechas de 2027 de un vistazo'},
    {id: 'biggest', heading: '¿Cuál es el festival EDM más grande de Canadá?', title: '¿Cuál es el festival EDM más grande de Canadá?', tocLabel: 'El festival EDM más grande'},
    {id: 'ontario', heading: 'Toronto y Ontario', title: 'Toronto y Ontario.',
      subsections: ['veld', 'electric-island']},
    {id: 'quebec', heading: 'Montreal y Quebec', title: 'Montreal y Quebec.',
      subsections: ['ile-soniq', 'mutek', 'piknic-electronik']},
    {id: 'british-columbia', heading: 'Columbia Británica', title: 'Columbia Británica.',
      subsections: ['shambhala', 'bass-coast', 'fvded-in-the-park']},
    {id: 'ottawa-calgary', heading: 'Ottawa y Calgary', title: 'Ottawa y Calgary.',
      subsections: ['escapade', 'chasing-summer']},
    {id: 'not-listed', heading: 'Lo que no está en esta lista, y por qué', title: 'Lo que no está en esta lista, y por qué.'},
    {id: 'choose', heading: 'Cómo elegir', title: 'Cómo elegir.'}
  ],

  media: ({lang}) => ({
    'Table: canada': articleTable({label: 'Los festivales EDM en Canadá comparados, 2027',
      headers: ['Festival', 'Dónde', 'Fechas de 2027', 'Sonido', 'Tamaño', 'Ideal para'], rows: festivals}),
    ilesoniq: fig('ilesoniq-bynon-2018', 1200, 802,
      'Bynon actuando en Ile Soniq, en Montreal, en agosto de 2018',
      'Bynon en Ile Soniq, Montreal, agosto de 2018. Foto: Kylefowlermtl, CC BY-SA 4.0.'),
    veld: fig('veld-deadmau5-2016', 1200, 749,
      'deadmau5 en el escenario del VELD Music Festival en Toronto en julio de 2016',
      'deadmau5 en VELD en julio de 2016. Foto: Visualbass Photography, CC BY-SA 2.0.'),
    mutek: fig('mutek-2015', 1200, 900,
      'Una asistente en el césped delante del escenario de MUTEK en Montreal en mayo de 2015',
      'MUTEK en Montreal, mayo de 2015. Foto: Jeangagnon, CC BY-SA 3.0.'),
    piknic: fig('piknic-electronik-2016', 1200, 900,
      'La escultura L’Homme de Calder en el Parc Jean-Drapeau durante Piknic Électronik en julio de 2016, con una torre de altavoces a la izquierda',
      'Piknic Électronik en el Parc Jean-Drapeau en julio de 2016. Foto: Jeangagnon, CC BY-SA 4.0.'),
    shambhala: fig('shambhala-2003', 1200, 900,
      'Un DJ a los platos entre los árboles en el Shambhala Music Festival de 2003',
      'Un DJ en Shambhala en agosto de 2003. Foto: Nelson Becker, Touchstones Nelson, dominio público.'),
    ternion: articleVideoCollection({
      lang, label: 'Bass Coast, desde casa',
      description: 'Ternion Sound en Bass Coast 2025, grabado por el festival.',
      items: [articleVideoCard({youtubeId: 'D68S0Mg6aBc', genre: 'Bass Coast, 2025', artist: 'Ternion Sound', title: 'En directo en Bass Coast'})]
    }),
    playlist: ownPlaylistListening('rare-electronic-music', lang),
    'own-track': ownTrackListening('late-summer-cloud-dance', 'Un tema mío corto de liquid breakbeat.', lang),
    'first-mix': ownSetListening(0, lang),
    'second-mix': ownSetListening(1, lang)
  }),

  sources: [
    {html: `Fechas de 2027 tomadas de la web de cada festival: ${[
      ['https://www.shambhalamusicfestival.com/', 'Shambhala'], ['https://www.basscoast.ca/', 'Bass Coast'], ['https://montreal.mutek.org/', 'MUTEK'],
      ['https://www.veldmusicfestival.com/', 'VELD']
    ].map(link).join(', ')} y ${link(['https://veld.frontgatetickets.com/', 'su página de entradas'])}, ${link(['https://www.fvdedinthepark.com/', 'FVDED in the Park'])} (solo el mes).`},
    {html: `Fechas de 2026, sin fechas de 2027 anunciadas: ${[
      ['https://www.piknicelectronik.com/', 'Piknic Électronik'], ['https://613today.ca/events/2026-06-26-escapade-music-festival', 'Escapade'],
      ['https://nowtoronto.com/event/electric-island-2026-season-opener/', 'Electric Island']
    ].map(link).join(', ')}.`},
    {html: 'Fechas anunciadas en ticketeras y webs de eventos: Live Nation, Ticketmaster y Discotech (Ile Soniq), Frontstage (Chasing Summer).'},
    {html: `Tamaño: ${link(['https://mtltimes.ca/montreal/werent-able-to-make-it-to-the-10th-anniversary-of-ilesoniq-heres-what-you-missed/', 'Montreal Times, con cifras del festival'])} (Ile Soniq 2025), ${link(['https://www.shambhalamusicfestival.com/about', 'Shambhala'])}, ${link(['https://dailyhive.com/calgary/chasing-summer-festival-calgary-2023', 'Daily Hive'])} (Chasing Summer).`},
    {href: 'https://djmag.com/top100festivals', label: 'DJ Mag (en inglés): Top 100 Festivals 2026'}
  ],

  bandcamp: {
    description: 'Entre festival y festival, la música que hago yo: breaks con techno y dub dentro. Comprar un lanzamiento apoya mi trabajo directamente.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 de thecatrave'},
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks de thecatrave'}
    ]
  }
};
