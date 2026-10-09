// Spanish Sónar guide. Structure and facts from the English page
// (sonar-draft.md); localised, not translated word for word.
//
// Spanish keywords, measured 2026-10-09 with Keyword Planner, Spain
// (keywords/es-sonar.json). Ranges are Keyword Planner's buckets: sonar
// 10K-100K, sonar festival / sonar barcelona / sonar by night / off sonar
// 1K-10K, sonar by day / sonar d / sonar 2027 100-1K. Entradas and cartel
// queries are rejected in the map. Spanish writes "el Sónar" and, in a
// quoted query, "Sonar" without the accent.
//
// The images are the English guide's, in img/sonar/, with translated
// captions; see home-articles.mjs for why a translation may reuse them.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, articleYoutubeEmbed, ownTrackListening
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption, className = 'wide-archive-image') => articleFigure({
  src: `img/sonar/${name}-${width}.webp`,
  srcset: `img/sonar/${name}-320.webp 320w, img/sonar/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className
});

const youtube = (id, label) => articleYoutubeEmbed({
  src: `https://www.youtube-nocookie.com/embed/${id}`,
  title: label
});

export default {
  lang: 'es',
  name: 'es-sonar',
  file: 'es/sonar-barcelona.html',
  draft: 'es/sonar-draft.md',
  canonical: 'https://thecatrave.com/es/sonar-barcelona',
  englishPath: '/sonar-festival-barcelona',
  ogImage: 'https://thecatrave.com/img/og/sonar.jpg',
  bodyClass: 'article-page sonar-page',

  title: 'Sónar Barcelona: qué es, dónde es y fechas de 2027',
  description: 'Qué es el Sónar, dónde se celebra en Barcelona, cómo un festival de 6.000 personas en 1994 pasó a 150.000, de quién es, el OFFSónar y las fechas de 2027.',
  datePublished: '2026-10-09',
  dateModified: '2026-10-09',
  dateLabel: '9 de octubre de 2026',

  heroKicker: 'Sónar',
  heroTitle: 'Sónar Festival Barcelona',
  deck: 'Tres días cada junio en Barcelona desde 1994, de día y de noche. Dónde es, qué tamaño tiene hoy, de quién es ahora y a qué suena.',
  answerLabel: 'Qué es el Sónar',
  breadcrumbName: 'Sónar Festival Barcelona',

  answerSection: 'Respuesta',
  introSection: 'Introducción',
  introTitle: 'Un festival de música avanzada.',
  faqSection: 'FAQ',
  faqLabel: 'Preguntas frecuentes',
  faqTitle: 'Preguntas frecuentes sobre el Sónar.',
  ownSetAfter: 'history',

  sections: [
    {id: 'dates', heading: 'Sónar 2027: fechas', title: 'Sónar 2027: fechas.'},
    {id: 'where', heading: 'Dónde es el Sónar en Barcelona', title: 'Dónde es el Sónar en Barcelona.', subsections: ['by-day-by-night', 'sonar-d']},
    {id: 'how-big', heading: 'Cuánta gente va al Sónar', title: 'Cuánta gente va al Sónar.'},
    {id: 'history', heading: 'Breve historia del Sónar y de quién es', title: 'Breve historia del Sónar y de quién es.', subsections: ['around-the-world']},
    {id: 'music', heading: 'Qué música suena en el Sónar', title: 'Qué música suena en el Sónar.', kicker: 'La música'},
    {id: 'offsonar', heading: 'OFFSónar y la Sónar Week', title: 'OFFSónar y la Sónar Week.'},
    {id: 'from-home', heading: 'Sónar 2024 en ARTE Concert', title: 'Sónar 2024 en ARTE Concert.'}
  ],

  media: ({lang}) => ({
    // The owner's own music inside the text: Berlin Race 1909, as on the
    // German pages and the Spanish Tomorrowland guide.
    'thecatrave berlin-race-1909': ownTrackListening('berlin-race-1909', 'Lejos de los grandes escenarios: percusión rota con eco de dub techno y espacio. Un tema mío.', lang),
    'SonarVillage at Fira Montjuïc': figure('sonar-by-day-2016', 1200, 801,
      'Una multitud llena el escenario al aire libre SonarVillage en Fira Montjuïc bajo el sol de la tarde, con el Palau Nacional y su cúpula en la colina de detrás',
      'SonarVillage en Fira Montjuïc durante Sónar by Day en junio de 2016, bajo el Palau Nacional. El programa de día dejó este recinto en 2026. Foto: Nachetere, CC BY-SA 4.0.'),
    'Sónar+D at Llotja de Mar': figure('sonar-d-2026', 1200, 675,
      'Una sala de piedra oscura con una puerta en arco y un suelo de damero, con gente ante ordenadores y mesas de mezclas a un lado',
      'Sónar+D en la Llotja de Mar en junio de 2026, su primer año separado de la música. Foto: Zblace, CC BY-SA 4.0.',
      'archive-image'),
    'Beastie Boys at Sónar 2007': figure('beastie-boys-2007', 1200, 800,
      'Ad-Rock, de los Beastie Boys, con sombrero fedora gris y camisa de rayas, agachado con un micrófono en el escenario',
      'Ad-Rock, de los Beastie Boys, en el Sónar en junio de 2007, cuando el cartel iba mucho más allá de la música electrónica. Foto: bakameh, CC BY 2.0.'),
    'Justice at Sónar 2008': figure('justice-2008', 1200, 800,
      'Los dos miembros de Justice sentados en un banco de madera ante una pared de azulejos pintados',
      'Justice, el dúo francés, en Barcelona para el Sónar 2008. Foto: Gerard Romans Camps, CC BY 2.0.'),
    'Moodymann at Sónar 2010': figure('moodymann-2010', 1000, 669,
      'Moodymann con gafas de sol y un sombrero blanco en una mesa de DJ, con un banner del Sónar 2010 detrás',
      'Moodymann en el Sónar en junio de 2010, tras una mesa de Red Bull Music Academy. Foto: acidpolly, CC BY-SA 2.0.'),
    '_YPbpWeIx2Q': youtube('_YPbpWeIx2Q', 'Paul Kalkbrenner en Sónar Lisboa 2024, en el canal de YouTube de DJ Mag'),
    'ZnPUW6XJ--8': youtube('ZnPUW6XJ--8', 'Kerri Chandler en directo en el escenario de Resident Advisor en el Sónar, Barcelona, en el canal de YouTube de Resident Advisor'),
    'IeKlNAuzW8A': youtube('IeKlNAuzW8A', 'Adam Beyer b2b Enrico Sangiuliano en Drumcode, Off Sónar, Barcelona, en el canal de YouTube de DJ Mag'),
    'JaiCMTWjkJI': articleVideoCollection({
      lang: 'es',
      label: 'El Sónar en SonarClub',
      description: 'Ben Böhmer en directo y DEX EFX X0X de Richie Hawtin, la misma noche de viernes en SonarClub en el Sónar 2024, grabados por ARTE Concert.',
      items: [
        articleVideoCard({youtubeId: 'JaiCMTWjkJI', genre: 'SonarClub, 2024', artist: 'Ben Böhmer', title: 'En directo en el Sónar 2024'}),
        articleVideoCard({youtubeId: 'kECNP2JMqC0', genre: 'SonarClub, 2024', artist: 'Richie Hawtin', title: 'DEX EFX X0X, Sónar 2024'})
      ]
    }),
    // As in the English generator: Wikipedia for 1994 to 2018, Mixmag Italy
    // for 2025, We Rave You for 2026.
    'Table: attendance': articleTable({
      headers: ['Año', 'Recinto de noche', 'Asistentes'],
      rows: [
        ['1994', 'Apolo', 'Unos 6.000'],
        ['1995', 'Poble Espanyol', 'Unos 12.000'],
        ['1996', 'Poble Espanyol', '18.000'],
        ['1997', 'Pabellón de la Mar Bella', '28.000'],
        ['1998', 'Pabellón de la Mar Bella', '38.000'],
        ['1999', 'Pabellón de la Mar Bella', '43.000'],
        ['2000', 'Pabellón de la Mar Bella', 'Más de 53.000'],
        ['2013', 'Fira Gran Via', '121.000'],
        ['2017', 'Fira Gran Via', '123.000'],
        ['2018', 'Fira Gran Via', '126.000, de 119 países'],
        ['2025', 'Fira Gran Via', '161.000, incluidos 42.000 en eventos de la Sónar Week'],
        ['2026', 'Fira Gran Via, de día y de noche', 'Unos 150.000']
      ].map(row => row.map(escapeHtml))
    })
  }),

  sources: [
    {href: 'https://en.wikipedia.org/wiki/S%C3%B3nar', label: 'Wikipedia: Sónar (en inglés)'},
    {href: 'https://sonar.es/en', label: 'Sónar: web oficial, fechas de 2027 (en inglés)'},
    {href: 'https://sonar.es/about/what-is-sonar', label: 'Sónar: What is Sónar (en inglés)'},
    {href: 'https://sonar.es/en/news/lineup-completo-sonar-2026', label: 'Sónar: el cartel de Sónar 2026, escenario por escenario'},
    {href: 'https://sonar.es/en/tickets', label: 'Sónar: entradas (en inglés)'},
    {href: 'https://sonar.es/en/news/revive-cinco-grandes-conciertos-del-viernes-por-la-noche-en-sonarclub', label: 'Sónar: cinco grandes conciertos del viernes por la noche en Sónar by Night con ARTE'},
    {href: 'https://djmag.com/news/sonar-founders-step-away-festival-amid-superstructkkr-ownership-controversy', label: 'DJ Mag: Sónar founders step away from festival amid Superstruct/KKR ownership controversy (en inglés)'},
    {href: 'https://mixmagit.com/read/sonar-2025-draws-161-000-attendees-and-announces-major-format-change-for-2026-news', label: 'Mixmag Italy: Sónar 2025 draws 161,000 attendees and announces major format change for 2026 (en inglés)'},
    {href: 'https://weraveyou.com/2026/06/sonar-2026-recap/', label: 'We Rave You: Sónar 2026 recap (en inglés)'},
    {href: 'https://www.deephouseamsterdam.com/25-years-sonar-report/', label: 'Deep House Amsterdam: Report, 25 Years Of Sonar (en inglés)'},
    {href: 'https://ra.co/news/35265', label: 'Resident Advisor: Sónar heads to Istanbul, Hong Kong in 2017 (en inglés)'},
    {href: 'https://thequietus.com/news/sonar-inaugural-lisbon-edition-2022/', label: 'The Quietus: Sónar to stage inaugural Lisbon event in 2022 (en inglés)'},
    {href: 'https://offsonar.co/', label: 'OFFSónar: web oficial'}
  ],

  bandcamp: {
    description: 'El Sónar lleva más de treinta años presentando música electrónica nueva a gente que va a escuchar. La mía es breakbeat, hecho en casa. Comprar un tema apoya directamente mi trabajo.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks de thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 de thecatrave'}
    ]
  }
};
