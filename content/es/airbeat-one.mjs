// Spanish Airbeat One guide. Structure and facts from the English page
// (airbeat-one-festival-draft.md) and the French module.
//
// es-ES SERP read in Chrome on 2026-10-10 ("airbeat one festival", "airbeat one
// 2027"): the results are the official site with its Line Up, Location, Stages
// and Info sub-pages; the only People also ask is "airbeat one 2027". No
// Spanish-language editorial result ranks, and no volumes were measured.
//
// Images are the English guide's, in img/airbeat-one/, with translated captions.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, ownSetListening
} from '../../site-components.mjs';
import {localizedFestivalPlanning} from '../festival-planning-data.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/airbeat-one/${name}-${width}.webp`,
  srcset: `img/airbeat-one/${name}-320.webp 320w, img/airbeat-one/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

export default {
  lang: 'es',
  name: 'es-airbeat-one',
  file: 'es/airbeat-one-festival.html',
  draft: 'es/airbeat-one-festival-draft.md',
  canonical: 'https://thecatrave.com/es/airbeat-one-festival',
  englishPath: '/airbeat-one-festival',
  ogImage: 'https://thecatrave.com/img/og/airbeat-one-festival.jpg',
  bodyClass: 'article-page airbeat-one-festival-page',

  title: 'Airbeat One Festival 2027: fechas, escenarios, camping y viaje',
  description: 'Airbeat One 2027 se celebra del 7 al 11 de julio en Neustadt-Glewe: guía de sus escenarios de EDM, techno, hardstyle y psytrance, del camping y del viaje.',
  datePublished: '2026-10-10',
  dateModified: '2026-10-10',
  dateLabel: '10 de octubre de 2026',

  heroKicker: 'Guía de festivales en Alemania',
  heroTitle: 'Airbeat One Festival: la guía del rave en un aeródromo alemán',
  deck: 'Cuatro grandes rutas electrónicas comparten un aeródromo del norte de Alemania, y el camping forma parte del evento en lugar de ser un rincón tranquilo al lado.',
  answerLabel: 'Qué es el festival Airbeat One',
  breadcrumbName: 'Airbeat One Festival',

  answerSection: 'Respuesta',
  introSection: 'Introducción',
  introTitle: 'Varios festivales electrónicos en un solo aeródromo.',
  faqSection: 'Preguntas frecuentes',
  faqLabel: 'Preguntas frecuentes',
  faqTitle: 'Preguntas frecuentes sobre el festival Airbeat One.',

  sections: [
    {id: 'airbeat-one-2027', heading: 'Airbeat One 2027', tocLabel: '2027: fechas y tema', title: 'Airbeat One 2027.'},
    {id: 'music', heading: 'Qué música suena en Airbeat One', tocLabel: 'Música en Airbeat One', title: 'Qué música suena en Airbeat One.'},
    {id: 'stages', heading: 'Un festival construido en torno a las identidades de sus escenarios', tocLabel: 'Escenarios', title: 'Un festival construido en torno a las identidades de sus escenarios.'},
    {id: 'history', heading: 'De Airbase One a Airbeat One', tocLabel: 'Historia', title: 'De Airbase One a Airbeat One.'},
    {id: 'camping', heading: 'El camping en Neustadt-Glewe', tocLabel: 'Camping', title: 'El camping en Neustadt-Glewe.'},
    {id: 'planning', heading: 'Cómo llegar y planificar el fin de semana', tocLabel: 'Viaje y planificación', title: 'Prepara tu fin de semana en Airbeat One.', planning: localizedFestivalPlanning('airbeat', 'es')}
  ],

  media: ({lang}) => ({
    'Image: Arena Stage': figure('airbeat-arena', 1200, 754,
      'Público y producción en el Arena Stage de Airbeat One en 2025',
      'El Arena Stage cubierto en 2025. Gracias a las identidades de sus escenarios, Airbeat One permite que el techno, los estilos más duros y el psytrance tengan programas propios junto al Mainstage.'),
    'Image: Neustadt-Glewe airfield': figure('airbeat-airfield', 1200, 768,
      'Vista aérea del aeródromo de Neustadt-Glewe, en el norte de Alemania',
      'El aeródromo de Neustadt-Glewe antes de la construcción del festival. El recinto abierto reúne escenarios, camping y vías para vehículos en una sola gran superficie. Foto: Carsten Steger, CC BY-SA 4.0.'),
    'Embed: Paul van Dyk': articleVideoCollection({
      lang,
      label: 'Neelix y Paul van Dyk en Airbeat One',
      description: 'Neelix en Airbeat One 2024, el set más visto que he encontrado en el canal del festival (556 000 visualizaciones), y Paul van Dyk en el Second Stage en 2025.',
      items: [
        articleVideoCard({youtubeId: 'AWxxg3l89-k', genre: 'AIRBEAT ONE, 2024', artist: 'Neelix', title: 'Live-Set at Airbeat One 2024'}),
        articleVideoCard({youtubeId: 'wETX6I_EDUo', genre: 'AIRBEAT ONE, 2025', artist: 'Paul van Dyk', title: 'Live from the Second Stage'})
      ]
    }),
    'thecatrave mix 1': ownSetListening(0, lang, 'Mi propio mix multigénero atraviesa el techno y el material rave más duro, como un recorrido personal por el abanico de escenarios de Airbeat One, sin sustituir a su programación.'),
    'thecatrave mix 2': ownSetListening(1, lang, 'Para un fin de semana largo en el aeródromo: mi propio set entre géneros, con el techno en el centro y varios giros más rápidos alrededor.'),
    'Table: Datos': articleTable({
      headers: ['Dato', 'Detalle'],
      rows: [
        ['Fechas', '7 al 11 de julio de 2027'],
        ['Lugar', 'Aeródromo de Neustadt-Glewe, Alemania'],
        ['Tema', 'Australia'],
        ['Edición', '24.ª edición y 25.º aniversario'],
        ['Música', 'EDM, techno, hardstyle y psytrance'],
        ['Cartel 2027', 'En curso; consulta la página oficial del cartel']
      ].map(row => row.map(escapeHtml)),
      label: 'Airbeat One Festival 2027: los datos'
    })
  }),

  sources: [
    {href: 'https://airbeat-one.de/en/info/', label: 'Airbeat One: fechas, aniversario y tema oficiales de 2027 (en inglés)'},
    {href: 'https://airbeat-one.de/en/stages/', label: 'Airbeat One: guía oficial de escenarios (en inglés)'},
    {href: 'https://customerservice.airbeat-one.de/hc/en-150/articles/115004835489-Description-Camping-grounds-opening-hours', label: 'Airbeat One: información oficial sobre el camping (en inglés)'},
    {href: 'https://airbeat-one.de/en/getting-there/', label: 'Airbeat One: información oficial sobre cómo llegar (en inglés)'},
    {href: 'https://commons.wikimedia.org/wiki/File:Airbeat_One_Arena_Stage.jpg', label: 'Wikimedia Commons: foto del Arena Stage y licencia (en inglés)'}
  ],

  bandcamp: {
    description: 'Airbeat One da a varias escenas electrónicas sus propios escenarios. Estos lanzamientos de thecatrave se acercan a su lado de club; comprar uno apoya la música y esta escritura independiente.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks de thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 de thecatrave'}
    ]
  }
};
