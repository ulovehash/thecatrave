// Spanish Untold guide. Structure and facts from the English page
// (untold-draft.md) and the French module.
//
// Spanish keywords (keywords/es-untold.json): es-ES SERP and People also ask
// read in Chrome on 2026-10-10 ("untold festival", "untold festival 2027").
// PAA asks "¿Dónde se celebra el Untold?", "¿Cuánto cuesta un boleto para el
// festival UNTOLD?" and "¿Hay algún festival de electrónica en Rumanía?". The
// SERP confirms 5-8 August 2027, Star Edition, Cluj Arena.
//
// The images are the English guide's, in img/untold/, with translated captions.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, articleYoutubeEmbed, ownTrackListening
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption, className = 'wide-archive-image') => articleFigure({
  src: `img/untold/${name}-${width}.webp`,
  srcset: `img/untold/${name}-320.webp 320w, img/untold/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className
});

export default {
  lang: 'es',
  name: 'es-untold',
  file: 'es/festival-untold.html',
  draft: 'es/untold-draft.md',
  canonical: 'https://thecatrave.com/es/festival-untold',
  englishPath: '/untold-festival',
  ogImage: 'https://thecatrave.com/img/og/untold.jpg',
  bodyClass: 'article-page untold-page',

  title: 'Untold Festival 2027: el festival de Cluj, en Rumanía',
  description: 'Untold Festival se celebra cada agosto en Cluj-Napoca, en Transilvania. Fechas de 2027, dónde es, asistencia, organizadores y la música que suena.',
  datePublished: '2026-10-10',
  dateModified: '2026-10-10',
  dateLabel: '10 de octubre de 2026',

  heroKicker: 'Untold',
  heroTitle: 'Untold Festival',
  deck: 'Cuatro días cada agosto en un estadio y un parque de Transilvania. Cuándo es Untold 2027, dónde se celebra, qué tamaño tiene, quién lo dirige y qué suena al lado del escenario principal.',
  answerLabel: 'Qué es Untold Festival',
  breadcrumbName: 'Untold Festival',

  answerSection: 'Respuesta',
  introSection: 'Introducción',
  introTitle: 'Un festival construido para el año de una ciudad.',
  faqSection: 'Preguntas frecuentes',
  faqLabel: 'Preguntas frecuentes',
  faqTitle: 'Preguntas frecuentes sobre Untold Festival.',
  ownSetAfter: 'history',

  sections: [
    {id: 'untold-2027', heading: 'Untold 2027: fechas y la Star Edition', title: 'Untold 2027: fechas y la Star Edition.'},
    {id: 'where', heading: 'Dónde se celebra Untold', title: 'Dónde se celebra Untold.', subsections: ['beyond-cluj']},
    {id: 'how-big', heading: 'Qué tamaño tiene Untold', title: 'Qué tamaño tiene Untold.'},
    {id: 'history', heading: 'Breve historia y quién dirige Untold', title: 'Breve historia y quién dirige Untold.'},
    {id: 'famous', heading: 'Por qué es famoso Untold', title: 'Por qué es famoso Untold.'},
    {id: 'music', heading: 'Qué música suena de verdad', title: 'Qué música suena de verdad.', kicker: 'La música'},
    {id: 'from-home', heading: 'Escuchar Untold desde casa', title: 'Escuchar Untold desde casa.'}
  ],

  media: ({lang}) => ({
    'thecatrave degeneration': ownTrackListening('degeneration', 'Lejos de los grandes escenarios: la voz de Mylène Farmer sobre breaks, entre dubstep y UK garage. Mi propio remix.', lang),
    'Cluj-Napoca Cluj Arena 1': figure('cluj-arena', 1200, 799,
      'El interior del Cluj Arena, un estadio de fútbol ovalado con el techo curvo sobre asientos grises, césped verde y una pista, bajo un cielo azul',
      'El Cluj Arena, el estadio de fútbol de 30 355 plazas que acoge el escenario principal de Untold, un día corriente de septiembre de 2014. Foto: Валерий Дед, CC BY 3.0.'),
    'Untold Festival, main stage': figure('main-stage-2015', 960, 407,
      'Un amplio panorama nocturno del Cluj Arena en Untold 2015, con el césped y todas las gradas llenos y el escenario principal iluminado a la izquierda',
      'El escenario principal en el Cluj Arena durante el primer Untold, en 2015, con el césped y las gradas llenos. Foto: Travelcristi, CC BY-SA 4.0.'),
    'Untold Festival, RaveNationCZ': figure('wolf-stage-2018', 1200, 900,
      'La parte alta del escenario principal de Untold en 2018, dos enormes cabezas de lobo pintadas, una azul y otra rosa, sobre un arco dorado ornamentado, contra un cielo despejado',
      'El escenario principal en 2018, la edición que el festival tituló Wolf Spirit. Foto: RaveNationCZ, CC BY-SA 4.0.'),
    'Untold2019 main stage': figure('main-stage-2019', 1200, 900,
      'Una multitud densa, con los móviles en alto, ante el escenario principal morado y dorado de Untold de noche en 2019, con las gradas llenas del estadio detrás',
      'El escenario principal de noche en 2019, la edición titulada The Codex of Magic, con las gradas del estadio llenas detrás del césped. Foto: VladRusuRomania, CC BY-SA 4.0.'),
    'Untold2019 fans': figure('fans-flag-2019', 1200, 560,
      'Un grupo de asistentes con una bandera rumana ante el escenario principal de Untold 2019, a plena luz del día',
      'Asistentes con una bandera rumana ante el escenario principal de 2019. Foto: VladRusuRomania, CC BY-SA 4.0.'),
    'o1u2sT8ah58': articleYoutubeEmbed({
      src: 'https://www.youtube-nocookie.com/embed/o1u2sT8ah58',
      title: 'Aftermovie oficial de UNTOLD Festival 2018, en el canal de YouTube de UNTOLD'
    }),
    'rk3SYpd5HSc': articleYoutubeEmbed({
      src: 'https://www.youtube-nocookie.com/embed/rk3SYpd5HSc',
      title: 'Sesión de techno de Pan-Pot en Untold 2018, en el canal de YouTube de Mixmag'
    }),
    'DjQCkSSblIk': articleVideoCollection({
      lang: 'es',
      label: 'Untold, las sesiones más vistas',
      description: 'La sesión de cinco horas y media de Armin van Buuren en el escenario principal en 2017, la sesión de Untold más vista en todos los canales, y la sesión de cabeza de cartel de Steve Aoki en la edición de septiembre de 2021, tras la pandemia.',
      items: [
        articleVideoCard({youtubeId: 'DjQCkSSblIk', genre: 'Untold, 2017', artist: 'Armin van Buuren', title: 'En directo en Untold Festival 2017'}),
        articleVideoCard({youtubeId: '402OrPvfYlU', genre: 'Untold, 2021', artist: 'Steve Aoki', title: 'Sesión de cabeza de cartel en Untold 2021'})
      ]
    }),
    'Table: asistencia': articleTable({
      headers: ['Año', 'Fechas', 'Entradas'],
      rows: [
        ['2015', '30 de julio al 2 de agosto', '240 000'],
        ['2016', '4 al 7 de agosto', '300 000'],
        ['2017', '3 al 6 de agosto', '340 000'],
        ['2018', '2 al 5 de agosto', 'más de 355 000'],
        ['2019', '1 al 4 de agosto', '370 000'],
        ['2020', '', 'Cancelado por la pandemia'],
        ['2021', '9 al 12 de septiembre', '265 000'],
        ['2022', '4 al 7 de agosto', '360 000'],
        ['2023', '3 al 6 de agosto', '420 000'],
        ['2024', '8 al 11 de agosto', '427 000'],
        ['2025', '7 al 10 de agosto', '470 000'],
        ['2026', '6 al 9 de agosto', 'más de 500 000']
      ].map(row => row.map(escapeHtml))
    })
  }),

  sources: [
    {href: 'https://en.wikipedia.org/wiki/Untold_Festival', label: 'Wikipedia: Untold Festival (en inglés)'},
    {href: 'https://ro.wikipedia.org/wiki/Untold_Festival', label: 'Wikipedia: Untold Festival (en rumano)'},
    {href: 'https://en.wikipedia.org/wiki/Cluj_Arena', label: 'Wikipedia: Cluj Arena'},
    {href: 'https://en.wikipedia.org/wiki/BTarena', label: 'Wikipedia: BTarena'},
    {href: 'https://web.archive.org/web/20230205200231/https://republica.ro/cum-a-devenit-romania-cool-pentru-cei-mai-mari-dj-ai-lumii-fondatorul-untold-despre-povestea-nespusa-a', label: 'Republica: entrevista con Bogdan Buta, fundador de UNTOLD (en rumano, archivada)'},
    {href: 'https://news.pollstar.com/2026/08/10/untold-festival-romania-counts-more-than-500000-visitors-across-four-days/', label: 'Pollstar: Untold suma más de 500 000 visitantes en cuatro días'},
    {href: 'https://untold.com/', label: 'UNTOLD: web oficial'},
    {href: 'https://tickets.untold.com/?_lang=en', label: 'UNTOLD: taquilla oficial de 2027'},
    {href: 'https://www.untold.com/info/547d8741-5739-485b-a1a4-85fb0552f93c', label: 'UNTOLD: condiciones oficiales del festival 2027'},
    {href: 'https://untold.com/news/c313b7e0-60c6-4968-a63e-44126e59a43c', label: 'UNTOLD: historia oficial del festival y asistencia'},
    {href: 'https://invest.untold.com/', label: 'UNTOLD: página de inversores y dirección'},
    {href: 'https://djmag.com/top100festivals/2026/3/untold-festival', label: 'DJ Mag: Untold Festival, Top 100 Festivals 2026'},
    {href: 'https://djmag.com/news/armin-van-buuren-shares-full-seven-hour-untold-festival-set-watch', label: 'DJ Mag: Armin van Buuren publica su sesión de siete horas en Untold'},
    {href: 'https://www.arminvanbuuren.com/videos/armin-van-buuren-live-at-untold-festival-2017-55-hours-set/', label: 'Armin van Buuren: Live at Untold Festival 2017 (5,5 horas)'},
    {href: 'https://www.digi24.ro/stiri/actualitate/evenimente/curtea-de-conturi-untold-finantat-ilegal-de-autoritati-542323', label: 'Digi24: el Tribunal de Cuentas, UNTOLD financiado ilegalmente por las autoridades (en rumano)'},
    {href: 'https://www.researchgate.net/publication/335778193_The_UNTOLD_story_Event_tourism%27s_negative_impact_on_residents%27_community_life_and_well-being', label: 'Moisescu et al.: The UNTOLD story, Worldwide Hospitality and Tourism Themes, 2019'}
  ],

  bandcamp: {
    description: 'Comprar un tema apoya directamente mi trabajo.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks de thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 de thecatrave'}
    ]
  }
};
