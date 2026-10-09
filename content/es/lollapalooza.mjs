// Spanish Lollapalooza guide. Structure and facts from the English page (lollapalooza-draft.md)
// via the French version. Live es-ES SERP and People-also-ask read 2026-10-09 (google.es, hl=es,
// gl=es) for "lollapalooza 2027": the results are Lollapalooza Argentina and Chile (official sites
// and All Access), and People also ask "¿Cuándo va a ser el Lollapalooza 2027?", "¿Dónde...?",
// "¿Cuánto están las entradas...?" and the Chile line-up. The Chicago page cannot answer prices
// or line-ups, so the 2027 dates section and the first FAQ add one sentence beyond the English
// page: the 12-14 March 2027 dates of the Chile and Argentina editions, read in the titles of
// their official sites in that SERP (lollapaloozacl.com, lollapaloozaar.com; venue of Argentina
// from the All Access listing). Keyword Planner: no Spanish row (keywords/es-lollapalooza.json).
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, articleYoutubeEmbed
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption, className = 'wide-archive-image') => articleFigure({
  src: `img/lollapalooza/${name}-${width}.webp`,
  srcset: `img/lollapalooza/${name}-320.webp 320w, img/lollapalooza/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className
});

export default {
  lang: 'es',
  name: 'es-lollapalooza',
  file: 'es/lollapalooza-festival.html',
  draft: 'es/lollapalooza-draft.md',
  canonical: 'https://thecatrave.com/es/lollapalooza-festival',
  englishPath: '/lollapalooza-festival',
  ogImage: 'https://thecatrave.com/img/og/lollapalooza.jpg',
  bodyClass: 'article-page lollapalooza-page',
  minReadingMinutes: 8,

  title: 'Lollapalooza 2027: fechas, lugar, historia y música',
  description: 'Lollapalooza es un festival de cuatro días en Grant Park, Chicago. Lugar, historia, tamaño, ediciones internacionales y la música del escenario Perry\'s.',
  datePublished: '2026-10-09',
  dateModified: '2026-10-09',
  dateLabel: '9 de octubre de 2026',

  heroKicker: 'Lollapalooza',
  heroTitle: 'Lollapalooza Chicago',
  deck: 'Cuatro días cada verano en Grant Park, en el frente del lago de Chicago. Dónde se celebra, cómo una gira de despedida se convirtió en un festival permanente y qué suena en sus escenarios.',
  answerLabel: 'Qué es Lollapalooza',
  breadcrumbName: 'Qué es Lollapalooza',

  answerSection: 'Respuesta',
  introSection: 'Introducción',
  introTitle: 'Una gira de despedida que se quedó.',
  faqSection: 'FAQ',
  faqLabel: 'Preguntas frecuentes',
  faqTitle: 'Preguntas frecuentes sobre Lollapalooza.',
  ownSetAfter: 'history',

  sections: [
    {id: 'lollapalooza-2027', heading: 'Lollapalooza 2027: estado de las fechas', title: 'Lollapalooza 2027: estado de las fechas.'},
    {id: 'where', heading: 'Dónde se celebra Lollapalooza', title: 'Dónde se celebra Lollapalooza.', subsections: ['only-chicago']},
    {id: 'when', heading: 'Cuándo es Lollapalooza y cuánto dura', title: 'Cuándo es Lollapalooza y cuánto dura.'},
    {id: 'how-big', heading: 'Qué tamaño tiene Lollapalooza', title: 'Qué tamaño tiene Lollapalooza.'},
    {id: 'meaning', heading: 'Qué significa Lollapalooza', title: 'Qué significa Lollapalooza.'},
    {id: 'history', heading: 'Breve historia y de quién es Lollapalooza', title: 'Breve historia y de quién es Lollapalooza.'},
    {id: 'stages', heading: 'Los escenarios de Lollapalooza', title: 'Los escenarios de Lollapalooza.'},
    {id: 'music', heading: 'Qué música suena de verdad', title: 'Qué música suena de verdad.', kicker: 'La música'},
    {id: 'from-home', heading: 'Escuchar Lollapalooza desde casa', title: 'Escuchar Lollapalooza desde casa.'}
  ],

  media: () => ({
    'Image: skyline': figure('skyline-2017', 1200, 900, 'Una multitud sobre la hierba de Grant Park durante Lollapalooza 2017, una torre de altavoces a la izquierda y el perfil de Chicago detrás',
      'El recinto de Lollapalooza en Grant Park en agosto de 2017, con el perfil de Chicago detrás del público. Foto: Lacrossewi, CC BY-SA 4.0.'),
    'Image: sign': figure('sign-2017', 1200, 916, 'La palabra Lollapalooza en letras hinchables blancas gigantes delante de árboles y un rascacielos, con asistentes pasando en primer plano',
      'El nombre del festival en letras hinchables gigantes en la entrada de Grant Park en 2017. Foto: Lacrossewi, CC BY-SA 4.0.'),
    'Image: tour': figure('tour-1991', 1200, 868, 'Un gran público al aire libre frente a un escenario de andamios con el techo cubierto de rojo durante la primera gira de Lollapalooza en 1991',
      'El público en una parada al aire libre de la primera gira de Lollapalooza, en 1991. Foto: Ric Wallace, CC BY 2.0.'),
    'Image: stage': figure('stage-2014', 1200, 900, 'Un escenario principal vacío en Grant Park la mañana de Lollapalooza 2014, con tierra delante y las torres del frente del lago detrás',
      'Un escenario principal en Grant Park la mañana del 2 de agosto de 2014, antes de abrir las puertas, con las torres del frente del lago detrás. Foto: swimfinfan, CC BY-SA 2.0.'),
    'Table: Sedes': articleTable({
      headers: ['Ciudad', 'Lugar', 'Primera edición'],
      rows: [
        ['Chicago, Estados Unidos', 'Grant Park', '2005 (festival itinerante desde 1991)'],
        ['Santiago, Chile', 'Parque O’Higgins', '2011'],
        ['São Paulo, Brasil', 'Jockey Club, luego Interlagos desde 2014', '2012'],
        ['Buenos Aires, Argentina', 'Hipódromo de San Isidro', '2014'],
        ['Berlín, Alemania', 'Tempelhof, Treptower Park, luego Olympiastadion y Olympiapark desde 2018', '2015'],
        ['París, Francia', 'Hipódromo de Longchamp', '2017'],
        ['Estocolmo, Suecia', 'Gärdet', '2019 (ediciones en 2019, 2022 y 2023; pausa en 2024)'],
        ['Bombay, India', 'Hipódromo de Mahalaxmi', '2023']
      ].map(row => row.map(escapeHtml))
    }),
    '9TKqqBCmDHA': articleYoutubeEmbed({
      src: 'https://www.youtube-nocookie.com/embed/9TKqqBCmDHA',
      title: 'John Summit en directo en Lollapalooza Chicago 2026, en su canal de YouTube'
    }),
    'EGh9zlN6eLo': articleVideoCollection({
      lang: 'es',
      label: 'Lollapalooza, los vídeos más vistos',
      description: 'Lady Gaga con Semi Precious Weapons en 2010, el vídeo más visto del canal del festival, y el set oficial de The Chainsmokers de 2019, el set más visto en el canal de un artista.',
      items: [
        articleVideoCard({youtubeId: 'EGh9zlN6eLo', genre: 'Lollapalooza, 2010', artist: 'Lady Gaga con Semi Precious Weapons', title: 'Lollapalooza 2010'}),
        articleVideoCard({youtubeId: 'zns830Yl1b0', genre: 'Lollapalooza, 2019', artist: 'The Chainsmokers', title: 'Set oficial en directo, Lollapalooza Chicago 2019'})
      ]
    })
  }),

  sources: [
    {href: 'https://www.lollapaloozacl.com', label: 'Lollapalooza Chile: web oficial (fechas de 2027)'},
    {href: 'https://www.lollapaloozaar.com', label: 'Lollapalooza Argentina: web oficial (fechas de 2027)'},
    {href: 'https://www.youtube.com/@lollapalooza', label: 'Lollapalooza en YouTube (descripción del canal, número de visualizaciones)'},
    {href: 'https://www.lollapalooza.com/', label: 'Lollapalooza: web oficial'},
    {href: 'https://www.lollapalooza.com/schedule', label: 'Lollapalooza: programa oficial y estado del anuncio de 2027'},
    {href: 'https://support.lollapalooza.com/hc/en-us/articles/4402035626260-What-are-the-dates-and-hours-for-Lollapalooza-2026', label: 'Lollapalooza: fechas y horarios oficiales de 2026'},
    {href: 'https://itsbetterlive.livenationforbrands.com/at-lollapalooza-everyone-had-a-plan-nobody-stuck-to-it/', label: 'Live Nation: asistencia a Lollapalooza 2026'},
    {href: 'https://www.prnewswire.com/news-releases/live-nation-entertainment-expands-festival-portfolio-with-c3-presents-300012666.html', label: 'Live Nation: participación de control en C3 Presents'},
    {href: 'https://www.c3presents.com/festivals', label: 'C3 Presents: festivales y sedes actuales de Lollapalooza'},
    {href: 'https://www.chicagoparkdistrict.com/about-us/news/chicago-park-district-celebrates-strong-2024-accomplishments-and-touts-progress', label: 'Chicago Park District: asistencia diaria a Lollapalooza'},
    {href: 'https://www.wbez.org/culture-the-arts/2022/08/01/lightfoot-announces-deal-to-keep-lollapalooza-in-grant-park-for-another-decade', label: 'WBEZ: acuerdo actual para Grant Park y límite de asistencia'},
    {href: 'https://www.phoenixnewtimes.com/music/first-lollapalooza-concert-1991-phoenix-30th-anniversary-oral-history-perry-farrell-11591298/', label: 'Phoenix New Times: historia oral del primer concierto de Lollapalooza'},
    {href: 'https://www.svt.se/kultur/inget-lollapalooza-i-stockholm-nasta-ar--fkxone', label: 'SVT: Lollapalooza Estocolmo en pausa para 2024'},
    {href: 'https://www.choosechicago.com/articles/festivals-special-events/lollapalooza/', label: 'Choose Chicago: Lollapalooza Chicago'},
    {href: 'https://www.billboard.com/photos/lady-gaga-fires-up-lollapalooza-stage-dives-426763/', label: 'Billboard: Lady Gaga enciende Lollapalooza y se lanza al público'},
    {href: 'https://en.wikipedia.org/wiki/Lollapalooza', label: 'Wikipedia: Lollapalooza (cronología complementaria)'}
  ],

  bandcamp: {
    description: 'Comprar un tema apoya directamente mi trabajo.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks de thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 de thecatrave'}
    ]
  }
};
