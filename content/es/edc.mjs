// Spanish EDC Las Vegas guide. Structure and facts from the English page
// (edc-draft.md) and the French module.
//
// es-ES SERP and People also ask read in Chrome on 2026-10-10 ("edc las vegas",
// "edc las vegas 2027"): PAA asks when EDC is, what a ticket costs, what EDC Las
// Vegas is and where it is held; the SERP shows 14-16 and 21-23 May 2027 (12
// Days of EDC). The images are the English guide's, in img/edc/, with
// translated captions.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, ownTrackListening
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption, className = 'wide-archive-image') => articleFigure({
  src: `img/edc/${name}-${width}.webp`,
  srcset: `img/edc/${name}-320.webp 320w, img/edc/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className
});

export default {
  lang: 'es',
  name: 'es-edc',
  file: 'es/edc-las-vegas.html',
  draft: 'es/edc-draft.md',
  canonical: 'https://thecatrave.com/es/edc-las-vegas',
  englishPath: '/edc-las-vegas',
  ogImage: 'https://thecatrave.com/img/og/edc.jpg',
  bodyClass: 'article-page edc-page',

  title: 'EDC Las Vegas 2027: fechas, entradas, tamaño y música',
  description: 'El Electric Daisy Carnival en el Las Vegas Motor Speedway: qué es el EDC, cuánta gente va, las fechas de 2027 y qué suena lejos de kineticFIELD.',
  datePublished: '2026-10-10',
  dateModified: '2026-10-10',
  dateLabel: '10 de octubre de 2026',

  heroKicker: 'Electric Daisy Carnival',
  heroTitle: 'EDC Las Vegas',
  deck: 'Tres noches en un circuito de carreras en pleno desierto, en el mayor festival de música de baile de Norteamérica. Dónde es, qué tamaño tiene de verdad, de quién es y qué suena lejos de kineticFIELD.',
  answerLabel: 'Qué es EDC Las Vegas',
  breadcrumbName: 'EDC Las Vegas',

  answerSection: 'Respuesta',
  introSection: 'Introducción',
  introTitle: 'La mayor noche del desierto.',
  faqSection: 'Preguntas frecuentes',
  faqLabel: 'Preguntas frecuentes',
  faqTitle: 'Preguntas frecuentes sobre EDC Las Vegas.',
  ownSetAfter: 'history',

  sections: [
    {id: 'where', heading: 'Dónde es EDC Las Vegas', title: 'Dónde es EDC Las Vegas.', subsections: ['orlando', 'mexico', 'abroad', 'edc-2027']},
    {id: 'how-big', heading: 'Qué tamaño tiene EDC Las Vegas', title: 'Qué tamaño tiene EDC Las Vegas.'},
    {id: 'history', heading: 'Breve historia y de quién es el EDC', title: 'Breve historia y de quién es el EDC.'},
    {id: 'famous', heading: 'Por qué el EDC se hizo tan famoso', title: 'Por qué el EDC se hizo tan famoso.'},
    {id: 'music', heading: 'Qué suena de verdad en el EDC', title: 'Qué suena de verdad en el EDC.', kicker: 'La música'},
    {id: 'from-home', heading: 'Ver el EDC desde casa', title: 'Ver el EDC desde casa.'}
  ],

  media: ({lang}) => ({
    'thecatrave degeneration': ownTrackListening('degeneration', 'Lejos de los grandes escenarios: la voz de Mylène Farmer sobre breaks, entre dubstep y UK garage. Mi propio remix.', lang),
    'EDC2024 Overview': figure('overview-2024', 1200, 521,
      'Una vista amplia del recinto de EDC Las Vegas de noche, con escenarios y atracciones iluminados dentro del speedway',
      'El recinto del festival en el Las Vegas Motor Speedway en 2024: escenarios, atracciones y obras repartidos por el césped central. Foto: Eric Polk, CC BY-SA 4.0.'),
    'EDC Mexico 2023': figure('mexico-2023', 1200, 800,
      'El escenario principal de EDC México en 2023, un gran escenario decorado sobre el público en el circuito de Ciudad de México',
      'El escenario principal de EDC México en 2023, en el Autódromo Hermanos Rodríguez. Foto: Ludovic Delot, CC BY-SA 4.0.'),
    'Electric Daisy Carnival 2011': figure('las-vegas-2011', 1200, 900,
      'El escenario cosmicMEADOW en primer plano y kineticFIELD detrás, en EDC Las Vegas en 2011',
      'La primera edición de Las Vegas, en 2011: cosmicMEADOW delante, kineticFIELD detrás. Foto: Roman Fuchs, CC BY-SA 3.0.'),
    'EDC2024 Kinetic Field Tiesto': figure('kinetic-field-2024', 1200, 900,
      'kineticFIELD de noche durante el set de Tiësto en EDC Las Vegas 2024, con el escenario iluminado sobre una multitud densa',
      'kineticFIELD durante el set de Tiësto en 2024. Foto: Eric Polk, CC BY-SA 4.0.'),
    'Camo&Krooked': figure('camo-krooked-2014', 1200, 471,
      'Camo & Krooked vistos desde detrás de los platos en EDC Las Vegas en 2014, con lanzallamas sobre una gran multitud',
      'Camo & Krooked en EDC Las Vegas en 2014, el año en que tocaron en bassPOD, el escenario que Bassrush programa para drum and bass y dubstep. Foto: Uafmusic VIE, CC BY-SA 4.0.'),
    'SaUN0QHOkHk': articleVideoCollection({
      lang,
      label: 'Los sets más vistos del EDC',
      description: 'Dos sets en kineticFIELD: Above & Beyond en 2015, casi cinco millones de visualizaciones en el canal del trío, y Alison Wonderland en 2016, más de dos millones en el suyo.',
      items: [
        articleVideoCard({youtubeId: 'SaUN0QHOkHk', genre: 'kineticFIELD, 2015', artist: 'Above & Beyond', title: 'En directo en EDC Las Vegas 2015'}),
        articleVideoCard({youtubeId: 'zqjLaOONheg', genre: 'kineticFIELD, 2016', artist: 'Alison Wonderland', title: 'EDC Las Vegas 2016'})
      ]
    }),
    'Table: asistencia': articleTable({
      headers: ['Año', 'Asistencia', 'Dónde y qué pasó'],
      rows: [
        ['1991', 'unas 3 000 a 3 500', 'Uno de los primeros EDC del sur de California, organizado por Stephen Hauptfuhr y Gary Richards'],
        ['2000', '24 000', 'Tulare, California; las quejas por el ruido pusieron fin al contrato'],
        ['2010', 'unas 185 000', 'Los Angeles Memorial Coliseum, dos días'],
        ['2011', '230 000 (anunciado)', 'Primer año en el Las Vegas Motor Speedway, tres días'],
        ['2012', '320 000', ''],
        ['2014', '345 000 entradas', 'Todas vendidas antes de abrir las puertas'],
        ['2018', 'unas 411 400', 'Primer año en mayo; se añade el camping'],
        ['2019', '465 000', ''],
        ['2020', 'ninguna', 'Cancelado por la pandemia'],
        ['2024', '525 000', 'El récord'],
        ['2026', 'más de 500 000', '30.º aniversario, entradas agotadas']
      ].map(row => row.map(escapeHtml))
    })
  }),

  sources: [
    {href: 'https://en.wikipedia.org/wiki/Electric_Daisy_Carnival', label: 'Wikipedia: Electric Daisy Carnival (en inglés)'},
    {href: 'https://en.wikipedia.org/wiki/Insomniac_(promoter)', label: 'Wikipedia: Insomniac (promotor, en inglés)'},
    {href: 'https://www.beatportal.com/articles/1422831-edc-las-vegas-to-split-into-two-consecutive-weekends-in-2027', label: 'Beatportal: EDC Las Vegas se divide en dos fines de semana en 2027'},
    {href: 'https://djmag.com/news/edc-las-vegas-expands-12-days-and-two-full-weekends-2027', label: 'DJ Mag: EDC Las Vegas pasa a 12 días y dos fines de semana en 2027'},
    {href: 'https://djmag.com/news/edc-las-vegas-2026-full-line-announced', label: 'DJ Mag: el cartel de EDC Las Vegas 2026'},
    {href: 'https://djmag.com/news/heres-how-stream-edc-las-vegas-2026-home', label: 'DJ Mag: cómo ver EDC Las Vegas 2026 desde casa'},
    {href: 'https://weraveyou.com/2026/05/the-prodigy-edc-las-vegas-2026-first-time-cosmicmeadow/', label: 'We Rave You: The Prodigy toca por primera vez en EDC Las Vegas'},
    {href: 'https://raverrafting.com/epic-stages-edc-las-vegas-2014/2014/07/16/', label: 'RaverRafting: los escenarios de EDC Las Vegas 2014'},
    {href: 'https://discotech.me/festivals/guide-to-edc-las-vegas-stages/', label: 'Discotech: guía de los escenarios de EDC Las Vegas'},
    {href: 'https://lasvegasweekly.com/ae/music/2025/aug/28/insomniac-and-tomorrowland-go-b2b-for-unity-sphere/', label: 'Las Vegas Weekly: Insomniac y Tomorrowland juntos para Unity en la Sphere'},
    {href: 'https://www.youtube.com/watch?v=QjaVBJJ7xhE', label: 'Mixmag en YouTube: Rusko (set de jungle) en The Lab en EDC Las Vegas'},
    {href: 'https://stagehoppers.com/edc-las-vegas-all-time-best-sets/', label: 'Stage Hoppers: los mejores sets de la historia de EDC Las Vegas'},
    {href: 'https://press.insomniac.com/festival-assets/electric-daisy-carnival', label: 'Insomniac: Electric Daisy Carnival'},
    {href: 'https://www.insomniac.com/who-we-are/how-it-all-began/', label: 'Insomniac: How It All Began (historia de la empresa)'},
    {href: 'https://press.insomniac.com/blog/edc-las-vegas-introduces-new-dusk-till-dawn-2027-12-day-festival-concept-spanning-two-consecutive-weekends', label: 'Insomniac Press: EDC Las Vegas presenta «Dusk Till Dawn» 2027'},
    {href: 'https://festivalinsider.com/articles/electric-daisy-legacy-meet-the-man-behind-the-first-edc', label: 'Festival Insider: Electric Daisy Legacy, el hombre detrás del primer EDC'},
    {href: 'https://lasvegasweekly.com/news/2016/jun/16/looking-back-edc-electric-daisy-carnival/', label: 'Las Vegas Weekly: dos décadas de EDC'},
    {href: 'https://lasvegassun.com/news/2023/may/23/edcs-scale-difficult-to-imagine-until-you-experien/', label: 'Las Vegas Sun: la escala del EDC, difícil de imaginar'},
    {href: 'https://www.digitalmusicnews.com/2024/05/23/edc-las-vegas-2024/', label: 'Digital Music News: EDC Las Vegas 2024'}
  ],

  bandcamp: {
    description: 'Tras tres noches en el circuito, algo más pequeño: mi propio breakbeat. Comprar un tema apoya directamente mi trabajo.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks de thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 de thecatrave'}
    ]
  }
};
