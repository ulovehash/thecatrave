// Spanish best techno festivals comparison. Structure, facts, dates and the
// "anunciado en agendas" and "no anunciado" labels from the English page
// (best-techno-festivals-draft.md, build-techno-festivals-article.mjs), dated
// 31 October 2026.
//
// Spanish wording: Keyword Planner, Spain and Mexico+Argentina+Colombia+Chile,
// Spanish, 14 November 2026 (buckets only), and the google.es SERP the same
// day; keywords/es-techno-festivals.json.
//
// Maintenance: the dates are the English page's. Change them here and in the
// draft whenever the English page changes them; the page is registered in
// festival-editions.mjs with the other roundups.
//
// The images are the English page's, in img/techno-festivals/, with
// translated captions.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, ownPlaylistListening, ownSetListening, ownTrackListening
} from '../../site-components.mjs';

const fig = (name, width, height, alt, caption) => articleFigure({
  src: `img/techno-festivals/${name}-1200.webp`,
  srcset: `img/techno-festivals/${name}-320.webp 320w, img/techno-festivals/${name}-1200.webp 1200w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

const link = ([href, label]) => `<a href="${href}" target="_blank" rel="noopener noreferrer">${label}</a>`;

const festivals = [
  ['Verknipt', 'Ámsterdam y Utrecht, Países Bajos', '5 de marzo, Ziggo Dome; en agendas el 5 y 6 de junio, Strijkviertel', 'Hard techno', 'Hasta 12.000 en el Ziggo Dome', 'Hard techno en un gran pabellón'],
  ['DGTL Amsterdam', 'Ámsterdam, Países Bajos', 'Del 26 al 28 de marzo', 'Techno, house', 'Tres días', 'Una escapada urbana en primavera'],
  ['Time Warp', 'Mannheim, Alemania', '3 de abril', 'Techno, house', '19 horas, cinco escenarios', 'Una noche larga bajo techo'],
  ['MAYDAY', 'Dortmund, Alemania', '30 de abril', 'Hard techno, raw, bounce, acid, techno clásico', 'Cuatro escenarios', 'Hard techno'],
  ['Horst', 'Vilvoorde, Bélgica', 'No anunciado (2026: del 14 al 16 de mayo)', 'Techno, house, arte', 'Tres días en 2026', 'Diseño y arquitectura'],
  ['Movement', 'Detroit, Estados Unidos', 'Del 29 al 31 de mayo', 'Techno, house', 'Seis escenarios', 'El techno donde nació'],
  ['Terminal V', 'Glasgow, Reino Unido', 'Del 4 al 6 de junio', 'Hard techno', 'Tres días', 'Hard techno en Escocia'],
  ['Kappa FuturFestival', 'Turín, Italia', 'Del 2 al 4 de julio', 'Techno, house', '125.000 asistencias en 2026, seis escenarios', 'De día y al aire libre'],
  ['Awakenings', 'Hilvarenbeek, Países Bajos', 'Del 9 al 11 de julio', 'Techno', '119.000 visitantes en 2026', 'Un gran fin de semana de techno'],
  ['Stone Techno', 'Essen, Alemania', 'Del 9 al 11 de julio', 'Techno', 'Tres días', 'Un recinto industrial'],
  ['Dekmantel', 'Ámsterdam, Países Bajos', 'Del 29 de julio al 2 de agosto', 'Techno, house y más', 'Cinco días', 'Un programa más amplio'],
  ['Nature One', 'Kastellaun, Alemania', 'Del 29 de julio al 1 de agosto', 'Techno y electrónica más amplia', 'Más de 60.000 personas, 20 escenarios', 'Un fin de semana de acampada muy grande'],
  ['Monument', 'Veggli, Noruega', 'Del 29 de julio al 1 de agosto, agotado, según se informa', 'Techno profundo e hipnótico', 'Cuatro días', 'Un bosque y un viaje largo'],
  ['ARC', 'Chicago, Estados Unidos', 'No anunciado (fin de semana del Labor Day)', 'House, techno', 'Cuatro días en 2026', 'Un parque urbano al final del verano'],
  ['CRSSD', 'San Diego, Estados Unidos', 'Primavera no anunciada', 'House, techno, electro', 'Dos veces al año', 'Un fin de semana junto al agua']
];

export default {
  lang: 'es',
  name: 'es-techno-festivals',
  file: 'es/festivales-techno.html',
  draft: 'es/techno-festivals-draft.md',
  canonical: 'https://thecatrave.com/es/festivales-techno',
  englishPath: '/best-techno-festivals',
  ogImage: 'https://thecatrave.com/img/og/techno-festivals.jpg',
  bodyClass: 'article-page techno-festivals-page',
  minReadingMinutes: 6,

  title: 'Festivales techno 2027: Awakenings, Time Warp, Movement',
  description: 'Los mejores festivales de techno 2027, con fechas, sonido y a quién va dirigido cada uno, de Awakenings y Time Warp a Movement en Detroit.',
  datePublished: '2026-11-14',
  dateModified: '2026-11-14',
  dateLabel: '14 de noviembre de 2026',

  heroKicker: 'Guía de festivales 2027',
  heroTitle: 'Los mejores festivales de techno del mundo 2027',
  deck: 'Los principales festivales de techno comparados por sonido, tamaño y lugar, de las noches enteras bajo techo en Alemania a Detroit, con las fechas de 2027 ya confirmadas y las que siguen pendientes.',
  answerLabel: 'Los mejores festivales de techno',
  breadcrumbName: 'Festivales de techno',

  answerSection: 'Respuesta',
  introSection: 'Introducción',
  introTitle: 'Una lista para elegir uno.',
  faqSection: 'FAQ',
  faqLabel: 'Preguntas frecuentes sobre los festivales de techno',
  faqTitle: 'Preguntas frecuentes sobre los festivales de techno.',

  sections: [
    {id: 'criteria', heading: 'Cómo se ha hecho esta lista', title: 'Cómo se ha hecho esta lista.'},
    {id: 'at-a-glance', heading: 'Fechas de los festivales techno 2027 de un vistazo', title: 'Fechas de los festivales techno 2027 de un vistazo.', tocLabel: 'Las fechas de 2027 de un vistazo'},
    {id: 'biggest', heading: '¿Cuál es el mayor festival de techno del mundo?', title: '¿Cuál es el mayor festival de techno del mundo?', tocLabel: 'El mayor festival de techno',
      subsections: ['nature-one', 'awakenings']},
    {id: 'europe', heading: '¿Cuáles son los mejores festivales de techno en Europa?', title: '¿Cuáles son los mejores festivales de techno en Europa?', tocLabel: 'Festivales de techno en Europa',
      subsections: ['time-warp', 'kappa-futurfestival', 'stone-techno', 'dekmantel', 'dgtl', 'horst', 'monument']},
    {id: 'usa', heading: '¿Dónde están los mejores festivales de techno de Estados Unidos?', title: '¿Dónde están los mejores festivales de techno de Estados Unidos?', tocLabel: 'Festivales de techno en Estados Unidos',
      subsections: ['movement', 'arc', 'crssd']},
    {id: 'hard', heading: '¿Qué festivales de techno son los más duros?', title: '¿Qué festivales de techno son los más duros?', tocLabel: 'Festivales de hard techno',
      subsections: ['mayday', 'verknipt']},
    {id: 'not-listed', heading: 'Lo que no está en esta lista, y por qué', title: 'Lo que no está en esta lista, y por qué.', tocLabel: 'Fuera de la lista, y por qué'},
    {id: 'choose', heading: 'Cómo elegir', title: 'Cómo elegir.'}
  ],

  media: ({lang}) => ({
    'Table: dates': articleTable({label: 'Festivales de techno comparados, 2027',
      headers: ['Festival', 'Dónde', 'Fechas de 2027', 'Sonido', 'Tamaño', 'Ideal para'], rows: festivals}),
    'nature-one': fig('nature-one-main-floor-2009', 1200, 900,
      'El público en el escenario principal de Nature One, en Alemania, en 2009',
      'El escenario principal de Nature One en 2009. Foto: Jochen Herrmann, CC BY-SA 3.0.'),
    kappa: fig('kappa-solar-2025', 1200, 900,
      'El escenario Solar de Kappa FuturFestival en Turín, en julio de 2025',
      'El escenario Solar de Kappa FuturFestival en el Parco Dora de Turín, en julio de 2025. Foto: MadBob, CC BY 4.0.'),
    zollverein: fig('zollverein-night', 1200, 800,
      'La mina de Zollverein en Essen, iluminada de noche',
      'Zollverein, en Essen, de noche: la casa de Stone Techno. Foto: Alex, CC BY 3.0.'),
    detroit: fig('detroit-festival-2002', 1200, 900,
      'El escenario principal del Detroit Electronic Music Festival después del anochecer, en 2002',
      'El escenario principal del Detroit Electronic Music Festival en mayo de 2002, el evento que se convirtió en Movement. Foto: Myself248, CC BY-SA 4.0.'),
    dekmantel: articleVideoCollection({
      lang, label: 'Dekmantel, para escuchar desde casa',
      description: 'Freddy K en el escenario Radar de Dekmantel Ten, agosto de 2024.',
      items: [articleVideoCard({youtubeId: 'CLDcCyRpoD4', genre: 'Dekmantel, 2024', artist: 'Freddy K', title: 'Radar'})]
    }),
    playlist: ownPlaylistListening('rare-electronic-music', lang),
    track: ownTrackListening('late-summer-cloud-dance', 'Un tema corto mío de liquid breakbeat.', lang),
    'first-mix': ownSetListening(0, lang),
    'second-mix': ownSetListening(1, lang)
  }),

  sources: [
    {html: `Fechas de 2027 de la web de cada festival: ${[
      ['https://www.awakenings.com/', 'Awakenings'], ['https://www.time-warp.de/', 'Time Warp'], ['https://movementfestival.com/faqs', 'Movement'],
      ['https://www.kappafuturfestival.it/', 'Kappa FuturFestival'], ['https://www.nature-one.de/', 'Nature One'], ['https://www.mayday.de/', 'MAYDAY'],
      ['https://dgtl-festival.com/en/dgtl-amsterdam/', 'DGTL'], ['https://www.stone-techno.com/', 'Stone Techno'], ['https://www.dekmantel.com/', 'Dekmantel'],
      ['https://festival.mnmt.no/', 'Monument']
    ].map(link).join(', ')}.`},
    {html: `Horst: ${link(['https://www.horstartsandmusic.com/', 'la web del festival'])}.`},
    {html: `Cifras de asistencia: ${link(['https://lespresso.it/c/cultura/2026/07/06/kappa-futur-festival-torino-2026-chiusura-messico-monterrey/63264', 'L’Espresso sobre Kappa FuturFestival'])} (en italiano), ${link(['https://nieuws.nl/entertainment/awakenings-beleeft-grootste-editie-ooit-met-119000-bezoekers', 'ANP a través de nieuws.nl sobre Awakenings'])} (en neerlandés) y la web de Nature One.`},
    {html: `Verknipt: ${link(['https://www.festivalinfo.nl/news/59214/Verknipt-keert-maart-2027-terug-naar-de-Ziggo-Dome-voor-nieuwe-editie/', 'FestivalInfo sobre el Ziggo Dome'])} y ${link(['https://www.technoairlines.com/festival/verknipt-festival-utrecht-netherlands-2027', 'Technoairlines sobre Utrecht'])}.`},
    {html: `Entradas agotadas y edad mínima de Monument: ${link(['https://www.technoairlines.com/festival/monument-festival-veggli-norway-2027', 'Technoairlines'])}.`},
    {html: `Terminal V: ${link(['https://www.timeout.com/uk/news/glasgow-clydeside-live-terminal-v-new-venue-092926', 'Time Out'])} (en inglés).`},
    {href: 'https://djmag.com/top100festivals', label: 'DJ Mag (en inglés): Top 100 Festivals 2026'},
    {html: 'Awakenings, Time Warp, Movement, Dekmantel y ARC: la guía de esta web sobre cada festival, enlazada arriba, con sus propias fuentes.'}
  ],

  bandcamp: {
    description: 'Si compras un lanzamiento, apoyas mi trabajo directamente.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 de thecatrave'}
    ]
  }
};
