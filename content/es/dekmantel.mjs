// Guía de Dekmantel en español. Estructura y datos de la página inglesa
// (dekmantel-draft.md, build-dekmantel-article.mjs); no se añade nada que la
// página inglesa no diga, salvo la planificación, que es la entrada es
// "dekmantel" de content/festival-planning-data.mjs.
//
// Palabras clave: Keyword Planner (España, español, 14 de noviembre de 2026)
// devolvió "dekmantel" en el tramo 100-1K y "entradas dekmantel" en 10-100
// (keywords/es-dekmantel.json). Dekmantel no es un festival EDM y nunca se
// le llama así.
//
// Mantenimiento: las fechas de 2027 son las de la página inglesa. Cámbialas
// aquí y en el borrador cuando cambien allí.
//
// Las imágenes son las de la página inglesa, en img/dekmantel/, con los pies traducidos.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection
} from '../../site-components.mjs';
import {localizedFestivalPlanning} from '../festival-planning-data.mjs';

const fig = (name, width, height, alt, caption) => articleFigure({
  src: `img/dekmantel/${name}-1200.webp`,
  srcset: `img/dekmantel/${name}-320.webp 320w, img/dekmantel/${name}-1200.webp 1200w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

const ext = (href, label) => `<a href="${href}" target="_blank" rel="noopener noreferrer">${label}</a>`;

export default {
  lang: 'es',
  name: 'es-dekmantel',
  file: 'es/dekmantel-festival.html',
  draft: 'es/dekmantel-draft.md',
  canonical: 'https://thecatrave.com/es/dekmantel-festival',
  englishPath: '/dekmantel-festival',
  ogImage: 'https://thecatrave.com/img/og/dekmantel.jpg',
  bodyClass: 'article-page dekmantel-page',
  minReadingMinutes: 6,

  title: 'Dekmantel Festival 2027: fechas, entradas, Selectors, Ámsterdam',
  description: 'Dekmantel Festival 2027 en el Amsterdamse Bos, desde 18 años: del 29 de julio al 2 de agosto, normas de entradas, Selectors en Croacia del 19 al 23 de agosto y sets.',
  datePublished: '2026-11-14',
  dateModified: '2026-11-14',
  dateLabel: '14 de noviembre de 2026',

  heroKicker: 'Guía de festivales 2027',
  heroTitle: 'Dekmantel Festival: fechas 2027, entradas y Selectors',
  deck: 'El festival de Ámsterdam en el Amsterdamse Bos: cuándo es Dekmantel 2027, cómo se organiza la semana en la ciudad, qué cubren las entradas y qué es Dekmantel Selectors, en Croacia.',
  answerLabel: 'Dekmantel Festival',
  breadcrumbName: 'Dekmantel Festival',

  answerSection: 'Respuesta',
  introSection: 'Introducción',
  introTitle: 'Un festival que empezó como noche de club.',
  faqSection: 'FAQ',
  faqLabel: 'Preguntas frecuentes sobre Dekmantel',
  faqTitle: 'Preguntas frecuentes sobre Dekmantel.',
  ownSetAfter: 'what-is',

  sections: [
    {id: 'what-is', heading: '¿Qué es el festival Dekmantel?', title: '¿Qué es el festival Dekmantel?', tocLabel: '¿Qué es Dekmantel?'},
    {id: 'dates', heading: '¿Cuándo es Dekmantel 2027?', title: '¿Cuándo es Dekmantel 2027?', tocLabel: 'Fechas 2027'},
    {id: 'where', heading: 'El Amsterdamse Bos', title: 'El Amsterdamse Bos.', tocLabel: 'Dónde es'},
    {id: 'tickets', heading: 'Entradas para Dekmantel', title: 'Entradas para Dekmantel.', tocLabel: 'Entradas'},
    {id: 'planning', heading: 'Planifica tu viaje a Dekmantel 2027', title: 'Planifica tu viaje a Dekmantel.', tocLabel: 'Viaje y planificación', planning: localizedFestivalPlanning('dekmantel', 'es')},
    {id: 'selectors', heading: '¿Qué es Dekmantel Selectors?', title: '¿Qué es Dekmantel Selectors?', tocLabel: 'Dekmantel Selectors'},
    {id: 'booking', heading: 'Qué suena en Dekmantel', title: 'Qué suena en Dekmantel.', tocLabel: 'Qué suena'},
    {id: 'listen', heading: 'Sets de Dekmantel para empezar', title: 'Sets de Dekmantel para empezar.', tocLabel: 'Sets para empezar'}
  ],

  media: ({lang}) => ({
    'Table: week': articleTable({label: 'La semana de Dekmantel 2026, día a día',
      headers: ['Día', 'Programa 2026', 'Dónde'],
      rows: [
        ['Miércoles', 'Concierto de apertura (Space Afrika)', 'Oude Kerk'],
        ['Jueves', 'Into the City, un programa nuevo', 'Melkweg y Paradiso'],
        ['De viernes a domingo', 'El festival', 'Amsterdamse Bos, Amstelveen'],
        ['De viernes a domingo', 'Programa de noche', 'RADION, Garage Noord, ISO, RAUM']
      ]}),
    midland: fig('midland-2017', 1200, 799,
      'Midland pinchando en el festival Dekmantel en 2017',
      'Midland en el festival Dekmantel, septiembre de 2017. Foto: StealthManagementMusic, CC BY-SA 4.0.'),
    'oude-kerk': fig('oude-kerk-ceiling', 1200, 898,
      'El techo de madera pintada de la Oude Kerk de Ámsterdam',
      'El techo de la Oude Kerk de Ámsterdam, uno de los lugares de Dekmantel. Foto: C messier, CC BY-SA 4.0.'),
    paradiso: fig('paradiso-2018', 1200, 900,
      'La fachada de Paradiso, en Ámsterdam, en junio de 2018',
      'Paradiso, en Ámsterdam, junio de 2018, uno de los lugares de Dekmantel. Foto: Marek Koudelka, CC BY-SA 4.0.'),
    loop: articleVideoCollection({
      lang, label: 'Dekmantel, escuchado desde casa',
      description: 'Tres sets del escenario The Loop en el festival Dekmantel 2025, del canal del propio festival.',
      items: [
        articleVideoCard({youtubeId: 'E4NXVs4SlhE', genre: 'The Loop, 2025', artist: 'Four Tet', title: 'Four Tet en The Loop'}),
        articleVideoCard({youtubeId: 't5KwF_VsM50', genre: 'The Loop, 2025', artist: 'Honey Dijon', title: 'Honey Dijon en The Loop'}),
        articleVideoCard({youtubeId: 's14IS_wXrEQ', genre: 'The Loop, 2025', artist: 'Avalon Emerson', title: 'Avalon Emerson en The Loop'})
      ]
    }),
    radar: articleVideoCollection({
      lang, label: 'RADAR, Dekmantel 2025',
      description: 'Dos sets del escenario RADAR en el festival Dekmantel 2025, del canal del propio festival.',
      items: [
        articleVideoCard({youtubeId: 'MeLdwDfYkzg', genre: 'RADAR, 2025', artist: 'DJ Nobu', title: 'DJ Nobu en RADAR'}),
        articleVideoCard({youtubeId: 'seBCd51d3KM', genre: 'RADAR, 2025', artist: 'Fadi Mohem', title: 'Fadi Mohem en RADAR'})
      ]
    })
  }),

  // Las fuentes de la página inglesa, URL por URL, con etiquetas traducidas.
  sources: [
    {html: `Programa, lugares, edades, normas de entradas, camping, shuttle y logística: ${ext('https://www.dekmantelfestival.com/faq', 'FAQ del festival Dekmantel')} (en inglés). Las FAQ describen la edición de 2026.`},
    {html: `Fechas, zonas y formato de Dekmantel Selectors: ${ext('https://www.dekmantelselectors.com/', 'dekmantelselectors.com')} (en inglés).`},
    {html: `Fechas y entradas de 2027 en Ámsterdam: ${ext('https://dekmantel.com/events/dekmantel-festival-2027', 'la página del evento del festival')} (en inglés).`}
  ],

  bandcamp: {
    description: 'Entre festival y festival, la música que hago yo. Comprarla apoya mi trabajo directamente.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 de thecatrave'},
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks de thecatrave'}
    ]
  }
};
