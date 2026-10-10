// Spanish Defqon.1 guide. Structure and facts from the English page
// (defqon-1-draft.md, build-defqon-1-article.mjs), read on 2026-10-05 from the
// Q-dance pages, IQ Magazine and NL Times: keep them aligned. There is no
// French or German version.
//
// es-ES SERP read in Chrome on 2026-10-10 ("defqon 1", "defqon 1 2027
// entradas"): q-dance.com, Wololo Sound and Festival Season guides, Ekanite
// group trips from Spain; People also ask "¿Cuándo es Defqon.1 2026?",
// "¿Cuándo es Defcon 1?", "¿Cuánto cuestan las entradas para Defqon 1 2026?",
// "¿Cuándo es Defqon.1 2027?"; related "Defqon 1 precio", "Defqon 1 donde es",
// "Defqon 1 cancelado", "Defqon 1 2026 cartel". No volumes were measured. Prices
// quoted by Spanish third-party guides are not used: only the Q-dance pages.
//
// Images are the English guide's, in img/defqon-1/, with translated captions.
import {localizedFestivalPlanning} from '../festival-planning-data.mjs';
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, ownSetListening
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/defqon-1/${name}-1200.webp`,
  srcset: `img/defqon-1/${name}-320.webp 320w, img/defqon-1/${name}-1200.webp ${width}w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

const ext = (href, text) => `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`;
const table = (label, headers, rows) => articleTable({label, headers, rows: rows.map(row => row.map(escapeHtml))});

export default {
  lang: 'es',
  name: 'es-defqon-1',
  file: 'es/defqon-1.html',
  draft: 'es/defqon-1-draft.md',
  canonical: 'https://thecatrave.com/es/defqon-1',
  englishPath: '/defqon-1',
  ogImage: 'https://thecatrave.com/img/og/defqon-1.jpg',
  bodyClass: 'article-page defqon-1-page',
  minReadingMinutes: 8,

  title: 'Defqon.1 2027: fechas, entradas y calendario de venta',
  description: 'Defqon.1 2027 es del 24 al 27 de junio en Biddinghuizen: fases de venta, entradas, por qué se canceló 2026, qué pasó con los reembolsos y cómo llegar.',
  datePublished: '2026-10-10',
  dateModified: '2026-10-10',
  dateLabel: '10 de octubre de 2026',

  heroKicker: 'Guía de festival, 2027',
  heroTitle: 'Defqon.1 2027: fechas, entradas, calendario de venta y cartel',
  deck: 'El festival de hardstyle de Biddinghuizen: cuándo es 2027, cómo funcionan las fases de venta, por qué se canceló 2026 y cómo llegar.',
  answerLabel: 'Fechas de Defqon.1 2027',
  breadcrumbName: 'Defqon.1',

  answerSection: 'Respuesta',
  introSection: 'Introducción',
  introTitle: 'Un festival que cambió sus normas.',
  faqSection: 'Preguntas frecuentes',
  faqLabel: 'Preguntas frecuentes',
  faqTitle: 'Preguntas frecuentes sobre Defqon.1.',

  sections: [
    {id: 'what-is', heading: '¿Qué es el festival Defqon.1?', title: '¿Qué es el festival Defqon.1?', tocLabel: '¿Qué es Defqon.1?'},
    {id: 'dates', heading: 'Fechas de Defqon.1 2027', title: 'Fechas de Defqon.1 2027', tocLabel: 'Fechas de 2027'},
    {id: 'tickets', heading: 'Entradas de Defqon.1', title: 'Entradas de Defqon.1', tocLabel: 'Entradas y venta'},
    {id: 'cancelled', heading: 'Defqon.1 2026 cancelado', title: 'Defqon.1 2026 cancelado', tocLabel: 'Cancelación de 2026'},
    {id: 'lineup', heading: 'Cartel de Defqon.1', title: 'Cartel de Defqon.1', tocLabel: 'Cartel y sets'},
    {id: 'location', heading: 'Dónde es Defqon.1', title: 'Dónde es Defqon.1', tocLabel: 'Dónde es'},
    {id: 'planning', heading: 'Planifica tu viaje a Defqon.1 2027', title: 'Prepara tu viaje a Defqon.1.', tocLabel: 'Viaje y planificación', planning: localizedFestivalPlanning('defqon', 'es')}
  ],

  media: ({lang}) => ({
    'thecatrave mix 1': ownSetListening(0, lang, 'Mi propio mix, para ponerlo mientras planificas el fin de semana.'),
    'thecatrave mix 2': ownSetListening(1, lang, 'Un segundo mix mío, para el viaje.'),
    'Image: red': figure('red-stage-2023', 1280, 720,
      'El escenario principal Red de Defqon.1 2023 de día, con público delante',
      'El escenario principal Red en Defqon.1, 23 de junio de 2023. Foto: DELTAFXUniverse, CC BY-SA 4.0.'),
    'Image: endshow': figure('endshow-2018', 1200, 674,
      'Fuegos artificiales rojos sobre el escenario principal durante el endshow del domingo de Defqon.1',
      'El endshow del domingo en Defqon.1, 24 de junio de 2018. Imagen: Ss279, CC BY-SA 4.0.'),
    'Image: uv': figure('uv-stage-2018', 1090, 818,
      'El escenario UV de Defqon.1 al atardecer, con gente caminando sobre la hierba',
      'El escenario UV al atardecer, Defqon.1, 23 de junio de 2018. Foto: arjennn_, CC BY-SA 4.0.'),
    'Embed: hardstyle sets': articleVideoCollection({
      lang,
      label: 'Hardstyle del catálogo',
      description: 'Tres sets de hardstyle del catálogo del Selector. Ninguno se grabó en Defqon.1.',
      items: [
        articleVideoCard({youtubeId: 'hl_dtNxuSoI', genre: 'Hardstyle', artist: 'The Horrorist', title: 'Boiler Room Berlin live set'}),
        articleVideoCard({youtubeId: 'ITYiefRoRE0', genre: 'Hardstyle', artist: 'Sub Zero Project', title: 'Hardstyle set live from Wasteland 2026'}),
        articleVideoCard({youtubeId: 'GYEcEGThh-M', genre: 'Hardstyle', artist: 'Loud373', title: 'Boiler Room Uzbekistan: Sublimation'})
      ]
    }),
    'Table: status 2027': table('Estado de Defqon.1 2027', ['Elemento de 2027', 'Estado el 5 de octubre de 2026'], [
      ['Fechas', '24 al 27 de junio de 2027, Q-dance'],
      ['Lugar', 'Holy Grounds, Biddinghuizen'],
      ['Entradas', 'Lista de deseos abierta, ventas desde el 27 de octubre'],
      ['Precios', 'No indicados en las páginas leídas'],
      ['Cartel', 'No indicado en las páginas leídas']
    ]),
    'Table: sale schedule': table('Calendario de venta de Defqon.1 2027', ['Fecha', 'Fase'], [
      ['1 de octubre de 2026', 'Se abre la lista de deseos'],
      ['8 de octubre de 2026', 'Reserva prioritaria de Travel and Stay para titulares de 2026 que conservaron su entrada'],
      ['27 de octubre de 2026', 'Venta Dediqated'],
      ['29 de octubre de 2026', 'Venta de Travel and Stay'],
      ['31 de octubre de 2026', 'Venta general']
    ])
  }),

  sources: [
    {html: `Fechas de 2027, calendario de venta, tipos de entrada, métodos de pago, horarios, normas de edad y escenarios, leídos el 5 de octubre de 2026: ${ext('https://www.q-dance.com/l/defqon1-2027', 'Q-dance Defqon.1 2027')} y las páginas de eventos y preguntas frecuentes de Q-dance enlazadas desde allí (en inglés).`},
    {html: 'Cancelación y opciones de reembolso de 2026, preguntas frecuentes actualizadas el 30 de junio de 2026, leídas el 5 de octubre de 2026: la página de actualización de Q-dance sobre Defqon.1 2026.'},
    {html: `Precios de viaje, aparcamiento y lanzadera de 2026, leídos el 5 de octubre de 2026: ${ext('https://www.q-dance.com/l/defqon1-ayntk-2026-travel-to-defqon1', 'Q-dance, viaje a Defqon.1 2026')}.`},
    {html: `Informes de la cancelación: ${ext('https://www.iqmagazine.com/', 'IQ Magazine, 26 de junio de 2026')} y ${ext('https://nltimes.nl/', 'NL Times, 1 de julio de 2026')} (en inglés).`},
    {html: `Historia: Hardstyle Mag y ${ext('https://www.edm-lab.com/en/events/defqon-1-2022/', 'EDM Lab, 2022')}. Defqon.1 Australia: The Music Network, 30 de mayo de 2019.`},
    {html: 'Fuente secundaria para los colores de escenario adicionales, no confirmados oficialmente: hardcult.com.'}
  ],

  bandcamp: {
    description: 'Entre festivales, la música que hago yo mismo. Comprar una apoya mi trabajo directamente.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 de thecatrave'},
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks de thecatrave'}
    ]
  }
};
