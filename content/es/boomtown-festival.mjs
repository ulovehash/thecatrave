// Spanish Boomtown Festival guide. Structure, facts and media from the English page
// (boomtown-festival-draft.md, build-boomtown-festival-article.mjs). Live es-ES SERP read
// 2026-10-09 (google.es, hl=es, gl=es): the official site, Wikipedia and "Festival Boomtown 2027"
// lead; People also ask "¿Cuándo es el próximo Boom Festival?", answered by the Boom Festival FAQ.
// Keyword Planner returned no row (keywords/es-boomtown-festival.json).
// The images are the English guide's, with translated captions.

import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, ownSetListening
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/boomtown/${name}-${width}.webp`,
  srcset: `img/boomtown/${name}-320.webp 320w, img/boomtown/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

export default {
  lang: 'es',
  name: 'es-boomtown-festival',
  file: 'es/boomtown-festival.html',
  draft: 'es/boomtown-festival-draft.md',
  canonical: 'https://thecatrave.com/es/boomtown-festival',
  englishPath: '/boomtown-festival',
  ogImage: 'https://thecatrave.com/img/og/boomtown.jpg',
  bodyClass: 'article-page boomtown-festival-page',
  minReadingMinutes: 6,

  title: 'Boomtown Festival 2027: fechas, lugar, historia y música',
  description: 'Boomtown Festival 2027 se celebra del 11 al 15 de agosto en Matterley Estate. Cómo funcionan su ciudad ficticia, su música, su historia y el camping.',
  datePublished: '2026-10-09',
  dateModified: '2026-10-09',
  dateLabel: '9 de octubre de 2026',

  heroKicker: 'Guía de festivales británicos',
  heroTitle: 'Boomtown Festival: la ciudad, su música y las fechas de 2027',
  deck: 'Un festival de camping de cinco días construido como una ciudad ficticia, donde el drum and bass, la cultura de sound system, el techno, el punk y la música en directo ocupan distritos distintos.',
  answerLabel: 'Qué es Boomtown Festival',
  breadcrumbName: 'Qué es Boomtown Festival',

  answerSection: 'Respuesta',
  introSection: 'Introducción',
  introTitle: 'Un festival pensado para explorarse.',
  faqSection: 'FAQ',
  faqLabel: 'Preguntas frecuentes',
  faqTitle: 'Preguntas frecuentes sobre Boomtown Festival.',

  sections: [
    {id: 'boomtown-2027', heading: 'Boomtown 2027', title: 'Boomtown 2027.'},
    {id: 'festival-city', heading: 'Un festival construido como una ciudad', title: 'Un festival construido como una ciudad.'},
    {id: 'music', heading: 'Qué música suena en Boomtown', title: 'Qué música suena en Boomtown.'},
    {id: 'history', heading: 'De 2009 a Matterley Estate', title: 'De 2009 a Matterley Estate.'},
    {id: 'ownership', heading: 'De quién es Boomtown', title: 'De quién es Boomtown.'},
    {id: 'planning', heading: 'Matterley Estate y una primera visita', title: 'Matterley Estate y una primera visita.'}
  ],

  media: ({lang}) => ({
    'Opening ceremony': figure('opening-ceremony-2019', 1200, 900, 'El escenario de la ceremonia de apertura de 2019 y el público en Boomtown',
      'La ceremonia de apertura de 2019 hizo visible el capítulo anual a escala de arena. El teatro de calle y las salas más pequeñas llevan la misma ciudad ficticia entre los grandes escenarios. Foto: Sam Warrenger / TheFestivals.UK, CC BY-SA 4.0.'),
    'Scrapyard': figure('scrapyard-2019', 1200, 900, 'Decorado industrial del escenario Scrapyard en Boomtown en 2019',
      'El distrito Scrapyard en 2019. Boomtown da a los géneros y a los locales una dirección física, aunque los nombres y la geografía cambian de un capítulo a otro. Foto: Sam Warrenger / TheFestivals.UK, CC BY 4.0.'),
    'Wailers and Altern 8': articleVideoCollection({lang, label: 'The Wailers y Altern 8 en Boomtown', description: 'The Wailers en Boomtown 2014 es el vídeo de actuación de Boomtown más visto que encontré (17 millones de visualizaciones). Altern 8 para Boiler Room en Boomtown 2023 es su contrapartida electrónica.', items: [articleVideoCard({youtubeId: 'nx8LYGtQdDs', genre: 'BOOMTOWN, 2014', artist: 'The Wailers', title: 'Three Little Birds / One Love'}), articleVideoCard({youtubeId: 'aKxwl7rFCAE', genre: 'BOOMTOWN, 2023', artist: 'Altern 8', title: 'Boiler Room x Sports Banger'})]}),
    'thecatrave mix 1': ownSetListening(0, lang, 'Mi propia mezcla multigénero sigue el mismo recorrido abierto entre bass music, techno y rave, sin pretender sustituir el programa de Boomtown.'),
    'thecatrave mix 2': ownSetListening(1, lang, 'Para las horas después de que cierre la ciudad: mi propio set por el techno, los breaks y la bass music.'),
    'Table: Facts': articleTable({
      headers: ['Tema', 'Estado'],
      rows: [
        ['Fechas', '11 al 15 de agosto de 2027'],
        ['Lugar', 'Matterley Estate, cerca de Winchester, Hampshire'],
        ['Edición', 'Chapter Six: Wild Style'],
        ['Formato', 'Festival de camping de cinco días, solo para mayores de 18 años'],
        ['Cartel de 2027', 'aún no anunciado'],
        ['Horizonte de planificación', 'El permiso actual del recinto llega hasta 2030']
      ].map(row => row.map(escapeHtml))
    })
  }),

  sources: [
    {href: 'https://www.boomtownfair.co.uk/', label: 'Boomtown: fechas de 2027 y capítulo oficiales'},
    {href: 'https://www.boomtownfair.co.uk/discover/history/', label: 'Boomtown: historia oficial del festival'},
    {href: 'https://www.southdowns.gov.uk/', label: 'South Downs National Park: información de planificación sobre Matterley Estate'},
    {href: 'https://find-and-update.company-information.service.gov.uk/', label: 'UK Companies House: Boomtown Festival UK Limited'},
    {href: 'https://commons.wikimedia.org/wiki/File:Boomtown_Fair_Opening_Ceremony_2019_Chapter_11.jpg', label: 'Wikimedia Commons: foto de la ceremonia de apertura de 2019 y licencia'}
  ],

  bandcamp: {
    description: 'La programación de Boomtown circula entre varias escenas y no se queda en un solo género. Estos lanzamientos de thecatrave se enlazan con su lado electrónico; comprar uno apoya directamente la música y los textos.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 de thecatrave'},
      {title: '60 hours of mistakes', id: '3330948631', url: 'https://thecatrave.bandcamp.com/track/60-hours-of-mistakes', linkText: '60 hours of mistakes de thecatrave'}
    ]
  }
};
