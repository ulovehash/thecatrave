// Guía de Electric Forest en español. Estructura y datos de la página inglesa
// (electric-forest-draft.md, build-electric-forest-article.mjs), fechada el
// 4 de octubre de 2026; no se añade nada que la página inglesa no diga.
//
// Palabras clave: Keyword Planner (España, español, 14 de noviembre de 2026)
// devolvió "electric forest" y "festival electric forest" en el tramo 100-1K
// y ninguna variante 2027 (keywords/es-electric-forest.json). El nombre se
// queda en inglés.
//
// Mantenimiento: las fechas de 2027 no están anunciadas. Cuando la página
// inglesa las publique, reescribe aquí la sección de fechas y la tabla de
// estado, y la entrada es "electricforest" de content/festival-planning-data.mjs.
//
// Las imágenes son las de la página inglesa, en img/electric-forest/, con los
// pies traducidos.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection
} from '../../site-components.mjs';
import {localizedFestivalPlanning} from '../festival-planning-data.mjs';

const fig = (name, alt, caption) => articleFigure({
  src: `img/electric-forest/${name}-1200.webp`,
  srcset: `img/electric-forest/${name}-320.webp 320w, img/electric-forest/${name}-1200.webp 1200w`,
  width: 1200, height: 801, alt, caption, className: 'wide-archive-image'
});

export default {
  lang: 'es',
  name: 'es-electric-forest',
  file: 'es/electric-forest-festival.html',
  draft: 'es/electric-forest-draft.md',
  canonical: 'https://thecatrave.com/es/electric-forest-festival',
  englishPath: '/electric-forest-festival',
  ogImage: 'https://thecatrave.com/img/og/electric-forest.jpg',
  bodyClass: 'article-page electric-forest-page',
  minReadingMinutes: 6,

  title: 'Electric Forest Festival 2027: entradas, fechas, camping, line-up',
  description: 'Electric Forest Festival 2027 en Rothbury, Michigan: qué se sabe de las fechas, cómo funcionan las entradas y el camping, cómo llegar y qué llevar.',
  datePublished: '2026-11-14',
  dateModified: '2026-11-14',
  dateLabel: '14 de noviembre de 2026',

  heroKicker: 'Guía de festivales 2027',
  heroTitle: 'Electric Forest 2027: entradas, fechas, camping y line-up',
  deck: 'El festival de Rothbury, Michigan: qué se sabe de las fechas de 2027, cómo funcionan los pases y el camping, cómo llegar y qué llevar.',
  answerLabel: 'Fechas de Electric Forest',
  breadcrumbName: 'Electric Forest',

  answerSection: 'Respuesta',
  introSection: 'Introducción',
  introTitle: 'Un festival con preguntas prácticas.',
  faqSection: 'FAQ',
  faqLabel: 'Preguntas frecuentes sobre Electric Forest',
  faqTitle: 'Preguntas frecuentes sobre Electric Forest.',

  sections: [
    {id: 'what-is', heading: '¿Qué es el festival Electric Forest?', title: '¿Qué es el festival Electric Forest?', tocLabel: '¿Qué es Electric Forest?'},
    {id: 'tickets', heading: 'Entradas para Electric Forest', title: 'Entradas para Electric Forest.', tocLabel: 'Entradas',
      subsections: ['ticket-prices']},
    {id: 'electric-forest-2026', heading: 'Electric Forest 2026', title: 'Electric Forest 2026.'},
    {id: 'dates', heading: 'Fechas de Electric Forest 2027', title: 'Fechas de Electric Forest 2027.', tocLabel: 'Fechas 2027'},
    {id: 'lineup', heading: 'Line-up de Electric Forest', title: 'Line-up de Electric Forest.', tocLabel: 'Line-up'},
    {id: 'where', heading: '¿Dónde es Electric Forest? Rothbury, Michigan', title: '¿Dónde es Electric Forest? Rothbury, Michigan.', tocLabel: 'Dónde es',
      subsections: ['sherwood-forest', 'camping', 'shuttle', 'hotel', 'packing-list']},
    {id: 'planning', heading: 'Planifica tu viaje a Electric Forest 2027', title: 'Planifica tu viaje a Electric Forest.', tocLabel: 'Viaje y planificación', planning: localizedFestivalPlanning('electricforest', 'es')}
  ],

  media: ({lang}) => ({
    'Table: add-ons': articleTable({label: 'Extras de Electric Forest 2026',
      headers: ['Extra', 'Dato de 2026'],
      rows: [
        ['Uplift Lounge', '150 dólares'],
        ['Llegada el miércoles, entrada general', '50 dólares por parcela, entrada desde las 00:01, hora del este, del miércoles 24 de junio de 2026'],
        ['Camp Kits', 'Desde 279 dólares para una o dos personas'],
        ['Taquillas y shuttles', 'Vendidos como extras']
      ]}),
    'Table: arrival': articleTable({label: 'Llegada a Electric Forest 2026 según el tipo de camping',
      headers: ['Tipo de camping', 'Llegada en 2026'],
      rows: [
        ['Entrada general', 'Jueves, 00:01'],
        ['Camping en grupo, autocaravana de entrada general, Preferred Car Camping, Lake RV', 'Miércoles, 00:01'],
        ['Good Life en tienda', 'Miércoles, 08:00'],
        ['Back 40', 'Miércoles, 10:00'],
        ['Entrada al hotel', '15:00']
      ]}),
    'Table: status': articleTable({label: 'Electric Forest 2027: qué se ha anunciado',
      headers: ['Punto de 2027', 'Estado'],
      rows: [
        ['Fechas', 'Sin anunciar'],
        ['Entradas', 'No están a la venta, no hay página de venta'],
        ['Line-up', 'Sin anunciar'],
        ['Precios', 'Sin anunciar']
      ]}),
    entrance: fig('entrance-2018',
      'El arco de madera de la entrada de Electric Forest con una multitud de asistentes delante',
      'La entrada de Electric Forest, 1 de julio de 2018. Foto: FifthLegend, CC BY 2.0.'),
    hammocks: fig('hammocks-2018',
      'Gente descansando en hamacas entre los árboles de Electric Forest',
      'Hamacas entre los árboles de Electric Forest, 1 de julio de 2018. Foto: FifthLegend, CC BY 2.0.'),
    sets: articleVideoCollection({
      lang, label: 'Electric Forest, escuchado desde casa',
      description: 'Tres sets de los propios canales de YouTube de los artistas, cada uno grabado en Electric Forest según su título.',
      items: [
        articleVideoCard({youtubeId: '_A3n8oIbwtc', genre: 'Electric Forest', artist: 'Levity', title: 'En directo en Electric Forest 2024'}),
        articleVideoCard({youtubeId: 'OdDOnJ-aP4k', genre: 'Electric Forest', artist: 'Whethan', title: 'En directo en Electric Forest 2025'}),
        articleVideoCard({youtubeId: '-eVk7dh8dO4', genre: 'Electric Forest', artist: 'Of The Trees', title: 'En directo en Electric Forest 2025'})
      ]
    })
  }),

  // Las fuentes de la página inglesa, URL por URL, con etiquetas traducidas. Todas en inglés.
  sources: [
    {html: 'Fechas, pases, extras, horarios de llegada y shuttles: <a href="https://electricforestfestival.com/" target="_blank" rel="noopener noreferrer">electricforestfestival.com</a>, <a href="https://electricforestfestival.com/pass-types" target="_blank" rel="noopener noreferrer">tipos de pase</a> y <a href="https://electricforestfestival.com/tickets" target="_blank" rel="noopener noreferrer">entradas</a> (en inglés).'},
    {html: 'Normas, cómo llegar, objetos prohibidos y guía de preparación: <a href="https://electricforestfestival.com/festival-info" target="_blank" rel="noopener noreferrer">información del festival</a> y <a href="https://electricforestfestival.com/forest-prep-guide" target="_blank" rel="noopener noreferrer">Forest Prep Guide</a> (en inglés).'},
    {html: 'Escenarios, Sherwood Forest, The Brainery y carteles anteriores: <a href="https://electricforestfestival.com/experiences" target="_blank" rel="noopener noreferrer">Experiences</a> y <a href="https://electricforestfestival.com/a-look-back" target="_blank" rel="noopener noreferrer">A Look Back</a> (en inglés).'},
    {html: 'El recinto: <a href="https://electricforestfestival.com/double-jj-resort" target="_blank" rel="noopener noreferrer">la página del Double JJ Resort</a> (en inglés).'},
    {html: 'El anuncio del line-up de 2026, de diciembre de 2025: <a href="https://whitelakemirror.com/article/2025/12/electric-forest-sets-dates-lineup-for-june-2026-event" target="_blank" rel="noopener noreferrer">White Lake Mirror</a> y <a href="https://oceanacountypress.com/2025/12/08/electric-forest-drops-2026-lineup-tickets-go-on-sale-friday/" target="_blank" rel="noopener noreferrer">Oceana County Press</a>, la fuente del precio publicado (en inglés).'},
    {html: 'Historia: <a href="https://tvovermind.com/the-history-and-evolution-of-the-electric-forest-festival/" target="_blank" rel="noopener noreferrer">TV Overmind, 2019</a>, y la prórroga del permiso, <a href="https://theticket953.com/ixp/689/p/electric-forest-festival-rothbury-michigan-extended/" target="_blank" rel="noopener noreferrer">The Ticket 95.3, 2024</a> (en inglés).'}
  ],

  bandcamp: {
    description: 'La música que hago yo. Comprarla apoya mi trabajo directamente.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 de thecatrave'},
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks de thecatrave'}
    ]
  }
};
