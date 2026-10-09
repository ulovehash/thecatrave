// Spanish Monegros guide. Structure and facts from the English page
// (monegros-desert-festival-draft.md); localised, not translated word for word.
//
// Spanish keywords, measured 2026-10-09 with Keyword Planner (Spain,
// keywords/es-monegros.json). Buckets: monegros 10K-100K, monegros desert
// festival 10K-100K, monegros festival 1K-10K, festival de los monegros /
// monegros 2027 100-1K, fraga / historia / entradas 10-100. The planning block
// is the Spanish copy in content/festival-planning-data.mjs.
//
// Images are the English guide's, in img/monegros/, with translated captions.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection
} from '../../site-components.mjs';
import {localizedFestivalPlanning} from '../festival-planning-data.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, height, alt, caption) => articleFigure({
  src: `img/monegros/${name}-1200.webp`,
  srcset: `img/monegros/${name}-320.webp 320w, img/monegros/${name}-1200.webp 1200w`,
  width: 1200, height, alt, caption, className: 'wide-archive-image'
});

export default {
  lang: 'es',
  name: 'es-monegros',
  file: 'es/monegros-desert-festival.html',
  draft: 'es/monegros-desert-festival-draft.md',
  canonical: 'https://thecatrave.com/es/monegros-desert-festival',
  englishPath: '/monegros-desert-festival',
  ogImage: 'https://thecatrave.com/img/og/monegros.jpg',
  bodyClass: 'article-page monegros-desert-festival-page',

  title: 'Monegros Desert Festival 2027: fecha, historia y cómo llegar',
  description: 'El Monegros Desert Festival 2027 está previsto para el 31 de julio cerca de Fraga, en Aragón. Historia, música, formato nocturno, cómo llegar y límites prácticos.',
  datePublished: '2026-10-09',
  dateModified: '2026-10-09',
  dateLabel: '9 de octubre de 2026',

  heroKicker: 'Guía de festivales en España',
  heroTitle: 'Monegros Desert Festival 2027: la rave del desierto, explicada',
  deck: 'Un único evento electrónico larguísimo en terrenos expuestos entre Barcelona y Zaragoza, con raíces en la Florida 135 y pensado para escenarios que compiten toda la noche.',
  answerLabel: 'Qué es el Monegros Desert Festival',
  breadcrumbName: 'Monegros Desert Festival',

  answerSection: 'Respuesta',
  introSection: 'Introducción',
  introTitle: 'Una noche larga pide su propio plan.',
  faqSection: 'FAQ',
  faqLabel: 'Preguntas frecuentes',
  faqTitle: 'Preguntas frecuentes sobre el Monegros Desert Festival.',
  ownSetAfter: 'history',

  sections: [
    {id: 'monegros-2027', heading: 'Monegros Desert Festival 2027', tocLabel: 'Fecha y lugar 2027', title: 'Monegros Desert Festival 2027.'},
    {id: 'what-is-monegros', heading: 'Qué es Monegros', tocLabel: 'Qué es Monegros', title: 'Qué es Monegros.'},
    {id: 'history', heading: 'De Florida 135 al desierto', tocLabel: 'Historia', title: 'De Florida 135 al desierto.'},
    {id: 'operator', heading: 'Quién organiza Monegros', tocLabel: 'Quién organiza Monegros', title: 'Quién organiza Monegros.'},
    {id: 'music', heading: 'Qué música suena en Monegros', tocLabel: 'Música en Monegros', title: 'Qué música suena en Monegros.'},
    {id: 'site', heading: 'El recinto y el formato nocturno', tocLabel: 'Formato nocturno', title: 'El recinto y el formato nocturno.'},
    {id: 'planning', heading: 'Prepara el viaje a Monegros', tocLabel: 'Preparación', title: 'Prepara tu viaje a Monegros.', planning: localizedFestivalPlanning('monegros', 'es')}
  ],

  media: ({lang}) => ({
    'Table: Facts': articleTable({
      headers: ['Dato', 'Detalle'],
      rows: [['Fecha', 'Sábado 31 de julio de 2027'], ['Lugar', 'N-II, kilómetro 416, cerca de Fraga, Aragón'], ['Formato', 'Festival electrónico de un día que se alarga toda la noche'], ['Cartel 2027', 'Aún no anunciado'], ['Último formato medido', '22 horas y diez escenarios en 2026'], ['Camping', 'No hay camping general de festival de varios días']].map(row => row.map(escapeHtml)),
      label: 'Monegros Desert Festival 2027: los datos'
    }),
    'Image: Festival overview': figure('festival-overview-2009', 900, 'Vista general de los escenarios y el público del Monegros Desert Festival en 2009', 'El Monegros Desert Festival en 2009, cuando el evento ya había superado con creces sus primeras reuniones ligadas a la Florida 135. Foto: BigSus, CC BY-SA 3.0.'),
    'Image: Desert landscape': figure('desert-landscape', 675, 'Paisaje seco y expuesto de la comarca de Los Monegros, en Aragón', 'El paisaje expuesto de Los Monegros explica las exigencias prácticas del festival: el calor y la distancia forman parte del recinto, no son imagen de marca decorativa. Foto: Smoobs, CC BY 2.0.'),
    'Embed: Sama’ Abdulhadi and Indira Paganotto': articleVideoCollection({
      lang,
      label: 'Sama’ Abdulhadi e Indira Paganotto en Monegros',
      description: 'Sama’ Abdulhadi para Beatport en Monegros, la sesión de Monegros más vista que he encontrado (1,9 millones de visualizaciones), e Indira Paganotto cerrando la edición de 2025 en el canal del festival.',
      items: [
        articleVideoCard({youtubeId: 'V4lH-KzsQi0', genre: 'MONEGROS, BEATPORT LIVE', artist: 'Sama’ Abdulhadi', title: 'Sesión en el Monegros Desert Festival'}),
        articleVideoCard({youtubeId: 'sx6_l6skb5o', genre: 'MONEGROS, 2025', artist: 'Indira Paganotto', title: 'Cierre del Monegros Desert Festival 2025'})
      ]
    })
  }),

  sources: [
    {href: 'https://monegrosfestival.com/', label: 'Monegros: web oficial del festival y estado del cartel (en inglés)'},
    {href: 'https://monegrosfestival.com/en/history/', label: 'Monegros: historia oficial del festival (en inglés)'},
    {href: 'https://monegrosfestival.com/en/dj-sets/', label: 'Monegros: archivo oficial de sesiones de DJ (en inglés)'},
    {href: 'https://www.enterticket.es/', label: 'Enterticket: fecha del Monegros Desert Festival 2027'},
    {href: 'https://commons.wikimedia.org/wiki/File:Monegros_Desert_Festival_-_Vista_general.jpg', label: 'Wikimedia Commons: foto de la vista general y licencia (en inglés)'}
  ],

  bandcamp: {
    description: 'Monegros se define por una programación electrónica de larga duración. Estos temas de thecatrave se acercan a su lado más duro de club; comprar uno apoya directamente la música y los textos.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks de thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 de thecatrave'}
    ]
  }
};
