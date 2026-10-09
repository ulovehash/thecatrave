// Spanish Creamfields guide. Structure and facts from the English page
// (creamfields-draft.md, creamfields-research.md, build-creamfields-article.mjs).
//
// Live es-ES SERP read 2026-10-09 (google.es, hl=es, gl=es) for "creamfields festival":
// Wikipedia, the official site and Creamfields Argentina lead; People also ask "¿Dónde se celebra
// Creamfields?", "¿Cuánto vale una entrada a Creamfields?" and the 2026 dates, all answered by
// existing H2s and the FAQ. Keyword Planner: creamfields is a 100–1K bucket for Spain
// (keywords/es-creamfields.json). The first mention explains the August Bank Holiday.
//
// The images are the English guide's, in img/creamfields/, with translated captions.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, articleYoutubeEmbed, ownTrackListening
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption, className = 'wide-archive-image') => articleFigure({
  src: `img/creamfields/${name}-${width}.webp`,
  srcset: `img/creamfields/${name}-320.webp 320w, img/creamfields/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className
});

export default {
  lang: 'es',
  name: 'es-creamfields',
  file: 'es/creamfields-festival.html',
  draft: 'es/creamfields-draft.md',
  canonical: 'https://thecatrave.com/es/creamfields-festival',
  englishPath: '/creamfields-festival',
  ogImage: 'https://thecatrave.com/img/og/creamfields.jpg',
  bodyClass: 'article-page creamfields-page',

  title: 'Creamfields 2027: lugar, aforo y edad mínima',
  description: 'Creamfields 2027 se celebra del 26 al 29 de agosto en Daresbury, Cheshire. Lugar, aforo de 80.000 personas, acceso desde los 18 años y dónde escucharlo en casa.',
  datePublished: '2026-10-09',
  dateModified: '2026-10-09',
  dateLabel: '9 de octubre de 2026',

  heroKicker: 'Creamfields',
  heroTitle: 'Creamfields Festival',
  deck: 'La salida de una noche de club de Liverpool convertida en cuatro días en un campo de Cheshire, cada final de agosto. Dónde se celebra, su tamaño, de quién es y qué suena lejos del Arc Stage.',
  answerLabel: 'Qué es Creamfields',
  breadcrumbName: 'Creamfields Festival',

  answerSection: 'Respuesta',
  introSection: 'Introducción',
  introTitle: 'Una noche de club convertida en festival.',
  faqSection: 'FAQ',
  faqLabel: 'Preguntas frecuentes',
  faqTitle: 'Preguntas frecuentes sobre Creamfields.',
  ownSetAfter: 'from-home',

  sections: [
    {id: 'where', heading: 'Dónde se celebra Creamfields', title: 'Dónde se celebra Creamfields.', subsections: ['south', 'international', 'creamfields-2027']},
    {id: 'how-big', heading: 'Cuánta gente va a Creamfields', title: 'Cuánta gente va a Creamfields.'},
    {id: 'from-home', heading: 'Escuchar Creamfields desde casa', title: 'Escuchar Creamfields desde casa.'},
    {id: 'history', heading: 'Breve historia y de quién es Creamfields', title: 'Breve historia y de quién es Creamfields.'},
    {id: 'famous', heading: 'Por qué es famoso Creamfields', title: 'Por qué es famoso Creamfields.'},
    {id: 'music', heading: 'Qué pincha de verdad Creamfields', title: 'Qué pincha de verdad Creamfields.', kicker: 'La música'},
    {id: 'essential', heading: 'Sets de Creamfields para escuchar primero', title: 'Sets de Creamfields para escuchar primero.'}
  ],

  media: ({lang}) => ({
    // The owner's own track inside the text, as on the other festival guides.
    'thecatrave Look': ownTrackListening('look', 'Lejos de los grandes escenarios: future bass, glitch y breakbeat. Mi propio tema.', lang),
    'Farm track skirts Creamfields site': figure('daresbury-site-2014', 1024, 768,
      'Un camino agrícola junto a una valla verde en el borde del recinto de Creamfields cerca de Daresbury, con campos y árboles al fondo',
      'El borde del recinto de Creamfields cerca de Outer Wood, en Daresbury, tres días después del festival de 2014. Foto: Raymond Knapman, CC BY-SA 2.0.'),
    'Creamfields Brasil 2013': figure('creamfields-brasil-2013', 1063, 704,
      'Un público de noche bajo el techo iluminado de un escenario de Creamfields Brasil en 2013',
      'Creamfields Brasil en enero de 2013, su tercera edición, en Jurerê Internacional, en Florianópolis. El nombre ha viajado a más de veinte países. Foto: Gerardo Lazzari, CC BY 2.0.'),
    'Cream buildings in Wolstenholme Square': figure('cream-wolstenholme-square-2011', 640, 480,
      'Los edificios pintados de negro del club Cream, en Wolstenholme Square, Liverpool, con un letrero de Cream sobre una puerta cerrada',
      'Los edificios de Cream en Wolstenholme Square, Liverpool, en 2011, donde se celebraba la noche semanal de house que dio origen a Creamfields. El bloque se demolió en 2016. Foto: John S Turner, CC BY-SA 2.0.',
      'archive-image'),
    'Creamfields Steel Yard structure': figure('steel-yard-2017', 1200, 801,
      'El interior vacío del Steel Yard, una larga estructura de acero en arcos iluminada en naranja, antes de un concierto',
      'El Steel Yard, vacío antes de un concierto en noviembre de 2017. La estructura de 15.000 plazas se convirtió en un festival por derecho propio. Foto: OfficialCreamPress, CC BY-SA 4.0.'),
    'LilRockit at Cream': figure('cream-liverpool-2015', 1200, 801,
      'Un DJ visto de espaldas en las pletinas de Cream en Liverpool, frente a una pista abarrotada bajo globos',
      'LilRockit en las pletinas de Cream en Liverpool en diciembre de 2015, pocos meses antes de la demolición del edificio. Foto: Leighroy4, CC BY-SA 4.0.'),
    'fVKywXvEl9g': articleYoutubeEmbed({
      src: 'https://www.youtube-nocookie.com/embed/fVKywXvEl9g',
      title: 'Creamfields 2019 After Series, Bass, Drum and Bass, en el canal de YouTube Creamfields Official Page'
    }),
    'BvXj6mCK0X4': articleVideoCollection({
      lang,
      label: 'Creamfields, ayer y hoy',
      description: 'Ewan McVicar en el Steel Yard en 2023, el más visto de sus sets en Creamfields, en su propio canal, y Pete Tong en 2025, en el canal del festival, que figuraba en el primer cartel de Creamfields en 1998.',
      items: [
        articleVideoCard({youtubeId: 'BvXj6mCK0X4', genre: 'Steel Yard, 2023', artist: 'Ewan McVicar', title: 'Steel Yard, Creamfields North 2023'}),
        articleVideoCard({youtubeId: 'UBqb6F7Jlho', genre: 'Creamfields, 2025', artist: 'Pete Tong', title: 'DJ set, Creamfields 2025'})
      ]
    }),
    // The published figures of each year, qualified in the text, as on the
    // English page. Typed, not computed.
    'Table: asistencia': articleTable({
      headers: ['Año', 'Lugar', 'Días', 'Asistencia publicada'],
      rows: [
        ['1998', 'Winchester', '1', '25.000'],
        ['1999 a 2005', 'Antiguo aeropuerto de Liverpool, Speke', '1', '50.000'],
        ['2006 y 2007', 'Daresbury', '1', '50.000'],
        ['2008', 'Daresbury', '2', '50.000'],
        ['2009', 'Daresbury', '2', '60.000, primer lleno'],
        ['2010', 'Daresbury', '2', '80.000'],
        ['2011', 'Daresbury', '2', '100.000'],
        ['2012', 'Daresbury', '3', '100.000, último día inundado'],
        ['2013 a 2015', 'Daresbury', '3', '150.000'],
        ['2016', 'Daresbury', '4', '200.000'],
        ['2017 a 2019', 'Daresbury', '4', '280.000'],
        ['2020', 'ninguno', '0', 'Cancelado por la pandemia'],
        ['2026', 'Daresbury', '4', '80.000 personas; unas 55.000 acampadas']
      ].map(row => row.map(escapeHtml))
    })
  }),

  // The English page's sources, URL for URL, with translated labels.
  sources: [
    {href: 'https://en.wikipedia.org/wiki/Creamfields', label: 'Wikipedia: Creamfields (en inglés)'},
    {href: 'https://en.wikipedia.org/wiki/Cream_(nightclub)', label: 'Wikipedia: Cream (club, en inglés)'},
    {href: 'https://en.wikipedia.org/wiki/Daresbury', label: 'Wikipedia: Daresbury'},
    {href: 'https://creamfields.com/history/', label: 'Creamfields: la historia de Creamfields UK'},
    {href: 'https://creamfields.com/history/2025-new-era/', label: 'Creamfields: Creamfields 2025, A New Era of the Fields'},
    {href: 'https://creamfields.com/info/where-is-the-festival/', label: 'Creamfields: dónde está el festival'},
    {href: 'https://creamfields.com/info/car/', label: 'Creamfields: llegar en coche'},
    {href: 'https://creamfields.com/info/what-age-do-you-need-to-be-to-attend/', label: 'Creamfields: edad mínima'},
    {href: 'https://creamfields.com/welcome/', label: 'Creamfields: Welcome to Creamfields 2027'},
    {href: 'https://creamfields.com/tickets/', label: 'Creamfields: entradas y precios actuales'},
    {href: 'https://www.cheshire.police.uk/news/cheshire/news/articles/2026/9/constabulary-supports-successful-creamfields-operation/', label: 'Policía de Cheshire: asistencia y camping en Creamfields 2026'},
    {href: 'https://investors.livenationentertainment.com/sec-filings/annual-reports/content/0001193125-13-077102/d466140d10k.htm', label: 'Live Nation Entertainment: Form 10-K 2012'},
    {href: 'https://find-and-update.company-information.service.gov.uk/company/03110532/persons-with-significant-control', label: 'Companies House: control de Cream Global Ltd'},
    {href: 'https://find-and-update.company-information.service.gov.uk/company/06704345/persons-with-significant-control', label: 'Companies House: control de Ticketmaster Europe Holdco'},
    {href: 'https://www.nme.com/news/music/various-artists-2616-1250661', label: 'NME: Creamfields termina antes tras fuertes inundaciones'},
    {href: 'https://www.aol.co.uk/articles/creamfields-2026-chaos-stages-shut-081530000.html', label: 'Mirror vía AOL: escenarios de Creamfields 2026 cerrados por las tormentas'},
    {href: 'https://electronicgroove.com/creamfields-marks-20-years-at-daresbury-with-2026-line-up/', label: 'Electronic Groove: Creamfields celebra 20 años en Daresbury con su cartel de 2026'},
    {href: 'https://www.skiddle.com/news/all/All-you-need-to-know-about-Creamfields-2026/60796/', label: 'Skiddle: todo sobre Creamfields 2026'},
    {href: 'https://discover.ticketmaster.co.uk/festivals/creamfields-2025-line-up-deep-dive-64595/', label: 'Ticketmaster Discover: el cartel de Creamfields 2025 en detalle'},
    {href: 'https://discover.ticketmaster.co.uk/festivals/creamfields-delivers-two-new-stages-and-an-all-star-line-up-for-2025-66551/', label: 'Ticketmaster Discover: dos escenarios nuevos en Creamfields 2025'},
    {href: 'https://www.skiddle.com/news/all/The-Best-DJ-Sets-of-All-Time/57700/', label: 'Skiddle: los mejores DJ sets de todos los tiempos'}
  ],

  bandcamp: {
    description: 'La música que hago yo mismo es breakbeat. Comprar un tema apoya directamente mi trabajo.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks de thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 de thecatrave'}
    ]
  }
};
