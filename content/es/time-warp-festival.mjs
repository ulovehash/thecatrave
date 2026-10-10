// Spanish Time Warp guide. Structure and facts from the English page
// (time-warp-draft.md, build-time-warp-article.mjs), read from time-warp.de on
// 2026-10-04 and 2026-10-10: keep them aligned. There is no French or German
// version.
//
// es-ES SERP read in Chrome on 2026-10-10 ("time warp festival", "time warp
// madrid 2026 cancelado"): the official site, es.wikipedia, RA and Time Warp
// Spain lead; People also ask "¿Qué es el Time Warp Festival?", "¿Se ha
// cancelado Time Warp Madrid 2026?", "¿Qué es Time Warp?", "¿Cuándo es Time
// Warp?"; related "Time Warp Madrid 2026 cartel/entradas", "Time Warp Mannheim",
// "Time Warp alemania 2026". The Madrid 2026 cancellation is read from the
// official statement (time-warp.de/page/tw-madrid-2026---official-statement) and
// is not on the English page (open defect time-warp-madrid-2026-cancellation-missing).
// No volumes were measured.
//
// Images are the English guide's, in img/time-warp/, with translated captions.
import {localizedFestivalPlanning} from '../festival-planning-data.mjs';
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, ownSetListening
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/time-warp/${name}-1200.webp`,
  srcset: `img/time-warp/${name}-320.webp 320w, img/time-warp/${name}-1200.webp 1200w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

const ext = (href, text) => `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`;

export default {
  lang: 'es',
  name: 'es-time-warp-festival',
  file: 'es/time-warp-festival.html',
  draft: 'es/time-warp-festival-draft.md',
  canonical: 'https://thecatrave.com/es/time-warp-festival',
  englishPath: '/time-warp-festival',
  ogImage: 'https://thecatrave.com/img/og/time-warp.jpg',
  bodyClass: 'article-page time-warp-page',
  minReadingMinutes: 6,

  title: 'Time Warp Festival 2027: Mannheim, entradas y cartel',
  description: 'Time Warp 2027 es el 3 de abril en Mannheim: precios de las entradas, ediciones fuera de Alemania y qué pasó con Time Warp Madrid 2026, que se canceló.',
  datePublished: '2026-10-10',
  dateModified: '2026-10-10',
  dateLabel: '10 de octubre de 2026',

  heroKicker: 'Guía de festival, 2027',
  heroTitle: 'Time Warp Festival 2027: Mannheim, entradas y cartel',
  deck: 'El festival de techno y house nacido en 1994: cuándo es el original de Mannheim en 2027, qué ciudades acogen una edición, cómo funcionan las entradas, quién toca y qué pasó con Madrid.',
  answerLabel: 'Time Warp 2027',
  breadcrumbName: 'Time Warp',

  answerSection: 'Respuesta',
  introSection: 'Introducción',
  introTitle: 'Un nombre, varios festivales.',
  faqSection: 'Preguntas frecuentes',
  faqLabel: 'Preguntas frecuentes',
  faqTitle: 'Preguntas frecuentes sobre Time Warp.',

  sections: [
    {id: 'what-is', heading: '¿Qué es el festival Time Warp?', title: '¿Qué es el festival Time Warp?', tocLabel: '¿Qué es Time Warp?'},
    {id: 'dates', heading: '¿Cuándo es Time Warp 2027?', title: '¿Cuándo es Time Warp 2027?', tocLabel: 'Fechas de 2027'},
    {id: 'where', heading: '¿Dónde se celebra Time Warp en Mannheim?', title: '¿Dónde se celebra Time Warp en Mannheim?', tocLabel: 'Dónde se celebra'},
    {id: 'editions', heading: '¿Qué ediciones de Time Warp hay fuera de Mannheim?', title: '¿Qué ediciones de Time Warp hay fuera de Mannheim?', tocLabel: 'Ediciones fuera de Mannheim'},
    {id: 'madrid-2026', heading: '¿Se ha cancelado Time Warp Madrid 2026?', title: '¿Se ha cancelado Time Warp Madrid 2026?', tocLabel: 'Madrid 2026'},
    {id: 'tickets', heading: '¿Cómo funcionan las entradas de Time Warp?', title: '¿Cómo funcionan las entradas de Time Warp?', tocLabel: 'Entradas'},
    {id: 'planning', heading: 'Cómo llegar y planificar el viaje a Mannheim', tocLabel: 'Viaje y planificación', title: 'Prepara tu viaje a Time Warp Mannheim.', planning: localizedFestivalPlanning('timewarp', 'es')},
    {id: 'lineup', heading: '¿Quién toca en Time Warp?', title: '¿Quién toca en Time Warp?', tocLabel: 'Quién toca'},
    {id: 'listen', heading: '¿Qué sets de Time Warp deberías escuchar primero?', title: '¿Qué sets de Time Warp deberías escuchar primero?', tocLabel: 'Sets para escuchar'}
  ],

  media: ({lang}) => ({
    'thecatrave mix 1': ownSetListening(0, lang),
    'thecatrave mix 2': ownSetListening(1, lang),
    'Image: crowd-2006': figure('tdk-2006', 1200, 900,
      'Una pista de baile llena frente a un escenario con pantallas de vídeo en Time Warp en 2006',
      'El público de Time Warp, 2006. Foto: ftf, CC BY-SA 2.5.'),
    'Image: neo-quimica': figure('neo-quimica-arena', 1200, 675,
      'El estadio Neo Química Arena de São Paulo de noche, con una pantalla gigante en su muro exterior',
      'El Neo Química Arena de São Paulo, sede de Time Warp Brasil en 2026, fotografiado en 2018 como Arena Corinthians. Foto: Jorge Morales Piderit, CC0.'),
    'Image: kruse-2016': figure('monika-kruse-2016', 1200, 800,
      'Monika Kruse tras los platos en Time Warp en Mannheim, chocando la mano a una persona delante de la cabina',
      'Monika Kruse en Time Warp en Mannheim, 2 de abril de 2016. Foto: Klaus Dieter Kieslich, CC BY-SA 4.0.'),
    'Embed: festival set': articleVideoCollection({
      lang,
      label: 'Time Warp, para escuchar en casa',
      description: 'Loco Dice para Mixmag, titulado Time Warp 2018.',
      items: [
        articleVideoCard({youtubeId: '9EkbEJuLzFo', genre: 'Time Warp', artist: 'Loco Dice', title: 'LOCO DICE. Time Warp 2018'})
      ]
    }),
    'Embed: new york sets': articleVideoCollection({
      lang,
      label: 'Time Warp US, en un estudio de Nueva York',
      description: 'Tres sets de Mixmag grabados en The Lab NYC con el nombre Time Warp US.',
      items: [
        articleVideoCard({youtubeId: 'IliynzY39jE', genre: 'Time Warp US', artist: 'Seth Troxler', title: 'Time Warp US | Seth Troxler soulful deep tech set in The Lab NYC'}),
        articleVideoCard({youtubeId: 'eAmsviQcvhg', genre: 'Time Warp US', artist: 'Monkey Safari', title: 'Time Warp US | Monkey Safari house set in The Lab NYC'}),
        articleVideoCard({youtubeId: 'T62-tdTu3BI', genre: 'Time Warp US', artist: 'Thugfucker', title: 'Time Warp US | Thugfucker tech-house set in The Lab NYC'})
      ]
    }),
    'Table: editions': articleTable({
      label: 'Ediciones de Time Warp',
      headers: ['Edición', 'Dónde', 'Fechas', 'Estado'],
      rows: [
        ['Time Warp Miami', 'Factory Town, Miami', '25 de abril de 2026', 'Celebrada'],
        ['Time Warp Brasil', 'Neo Química Arena, São Paulo', '1 y 2 de mayo de 2026', 'Celebrada'],
        ['Time Warp Spain', 'IFEMA Madrid, Pabellón 12', '18 y 19 de septiembre de 2026', 'Cancelada, con reembolso de las entradas'],
        ['TW x EDC Colombia', 'Atanasio Girardot Sports Complex, Medellín', '10 de octubre de 2026', 'Próxima, un escenario Neon Garden'],
        ['Time Warp Mexico', 'Expo Santa Fe, Ciudad de México', '20 y 21 de noviembre de 2026', 'Próxima, entradas a la venta'],
        ['Time Warp New York', 'Duggal Greenhouse y Agger Building, Nueva York', '20 y 21 de noviembre de 2026', 'Próxima, marcada Save the Date'],
        ['Time Warp Los Angeles', 'ACE Mission, Los Ángeles', '27 y 28 de noviembre de 2026', 'Próxima, entradas a la venta']
      ].map(row => row.map(escapeHtml))
    })
  }),

  sources: [
    {html: `Fechas, ediciones, entradas y normas: ${ext('https://www.time-warp.de', 'time-warp.de')} y su ${ext('https://tickets.time-warp.de', 'tienda de entradas')} (en inglés), leídas el 4 y el 10 de octubre de 2026.`},
    {html: `Cancelación de Time Warp Spain 2026: ${ext('https://www.time-warp.de/page/tw-madrid-2026---official-statement/', 'comunicado oficial del festival')}, en inglés y en español.`},
    {html: `Origen y primera edición, 26 de noviembre de 1994: ${ext('https://es.wikipedia.org/wiki/Time_Warp_Festival', 'Wikipedia')}.`}
  ],

  bandcamp: {
    description: 'Entre festivales, la música que hago yo mismo. Comprar una apoya mi trabajo directamente.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 de thecatrave'},
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks de thecatrave'}
    ]
  }
};
