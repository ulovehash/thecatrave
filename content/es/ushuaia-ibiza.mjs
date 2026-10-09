// Spanish Ushuaia Ibiza guide. Structure, facts and media from the English page
// (ushuaia-ibiza-draft.md, build-ushuaia-ibiza-article.mjs); facts are the
// English page's, from the club's official site, Clubtickets and Ibiza
// Spotlight: keep them aligned.
//
// Spanish keywords, measured 2026-10-09 with Keyword Planner (Spain,
// keywords/es-ushuaia-ibiza.json): ushuaia ibiza 10K-100K, ushuaia ibiza
// entradas 1K-10K, ushuaia ibiza hotel 1K-10K, ushuaia ibiza precio,
// ushuaia ibiza dress code and ushuaia ibiza como llegar 100-1K. Live es-ES
// SERP and People-also-ask read the same day (google.es, hl=es, gl=es): the
// official site, ticket sellers and Wikipedia lead, and People also ask
// "¿Cuánto cuesta una entrada para Ushuaïa Ibiza?", "¿Por qué se llama
// Ushuaia la discoteca?", "¿Cuál es el cartel de Ushuaïa Ibiza 2026?", "¿Quién
// es el dueño de la discoteca Ushuaia en Ibiza?". Price, lineup and owner are
// FAQ entries answered only with facts on the English page; the name-origin
// question is not applied because the English page does not cover it. Images
// are the English guide's, in img/ushuaia-ibiza/, with translated captions.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, ownSetListening
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/ushuaia-ibiza/${name}-1200.webp`,
  srcset: `img/ushuaia-ibiza/${name}-320.webp 320w, img/ushuaia-ibiza/${name}-1200.webp 1200w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

const ext = (href, text) => `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`;
const rows = list => list.map(row => row.map(escapeHtml));

export default {
  lang: 'es',
  name: 'es-ushuaia-ibiza',
  file: 'es/ushuaia-ibiza.html',
  draft: 'es/ushuaia-ibiza-draft.md',
  canonical: 'https://thecatrave.com/es/ushuaia-ibiza',
  englishPath: '/ushuaia-ibiza',
  ogImage: 'https://thecatrave.com/img/og/ushuaia-ibiza.jpg',
  bodyClass: 'article-page ushuaia-ibiza-page',
  minReadingMinutes: 6,

  title: 'Ushuaia Ibiza: entradas, dress code y eventos de la temporada',
  description: 'Ushuaia Ibiza: cuánto cuestan las entradas, el dress code, las residencias de 2026, el hotel, el VIP y cómo llegar a Platja d\'en Bossa.',
  datePublished: '2026-10-09',
  dateModified: '2026-10-09',
  dateLabel: '9 de octubre de 2026',

  heroKicker: 'Guía de club, Ibiza',
  heroTitle: 'Ushuaia Ibiza: entradas, dress code y eventos de la temporada',
  deck: 'El club al aire libre de Platja d\'en Bossa: cuánto cuestan las entradas, qué permite la puerta, cómo fue la temporada 2026 y cómo llegar.',
  answerLabel: 'Ushuaia Ibiza',
  breadcrumbName: 'Ushuaia Ibiza',

  answerSection: 'Respuesta',
  introSection: 'Introducción',
  introTitle: 'Un club, varias preguntas.',
  faqSection: 'FAQ',
  faqLabel: 'Preguntas frecuentes',
  faqTitle: 'Preguntas frecuentes sobre Ushuaia Ibiza.',

  sections: [
    {id: 'what-is', heading: '¿Qué es Ushuaia Ibiza?', title: '¿Qué es Ushuaia Ibiza?', subsections: ['history', 'capacity', 'owner']},
    {id: 'tickets', heading: 'Ushuaia Ibiza entradas: cuánto cuesta entrar', title: 'Ushuaia Ibiza entradas: cuánto cuesta entrar', tocLabel: 'Entradas', subsections: ['price']},
    {id: 'dress-code', heading: 'Ushuaia Ibiza dress code: qué no se puede llevar', title: 'Ushuaia Ibiza dress code: qué no se puede llevar', tocLabel: 'Dress code', subsections: ['age']},
    {id: 'season-2026', heading: 'Ushuaia Ibiza 2026: temporada y apertura', title: 'Ushuaia Ibiza 2026: temporada y apertura', tocLabel: 'Temporada 2026', subsections: ['opening-party']},
    {id: 'events', heading: 'Ushuaia Ibiza eventos y calendario', title: 'Ushuaia Ibiza eventos y calendario', tocLabel: 'Eventos y calendario', subsections: ['closing-party', 'lineup']},
    {id: 'season-2027', heading: 'Ushuaia Ibiza 2027', title: 'Ushuaia Ibiza 2027', tocLabel: '2027'},
    {id: 'vip', heading: 'Ushuaia Ibiza VIP y mesa', title: 'Ushuaia Ibiza VIP y mesa', tocLabel: 'VIP y mesa'},
    {id: 'hotel', heading: 'Ushuaia Ibiza hotel: Ushuaia Beach Hotel', title: 'Ushuaia Ibiza hotel: Ushuaia Beach Hotel', tocLabel: 'Hotel'},
    {id: 'where', heading: 'Ushuaia Ibiza cómo llegar: dirección y transporte', title: 'Ushuaia Ibiza cómo llegar: dirección y transporte', tocLabel: 'Cómo llegar'}
  ],

  media: ({lang}) => ({
    'thecatrave mix 0': ownSetListening(0, lang, 'Mi propia mezcla, para el viaje de vuelta después de una noche de fiesta.'),
    'thecatrave mix 1': ownSetListening(1, lang),
    'dance-floor-2023': figure('dance-floor-2023', 1200, 800,
      'La pista de Ushuaia Ibiza llena alrededor de la piscina al anochecer, vista desde una ventana alta, con las colinas y la bahía detrás',
      'La pista y la piscina de Ushuaia Ibiza desde arriba, 3 de septiembre de 2023. Foto: Saaremees, CC BY-SA 4.0.'),
    'tomorrowland-2022': figure('tomorrowland-2022', 1200, 800,
      'Dimitri Vegas y Like Mike tras las cabinas en Ushuaia Ibiza, uno con la mano en alto, delante de una pared de vídeo azul',
      'Dimitri Vegas y Like Mike en la apertura de Tomorrowland en Ushuaia Ibiza, 15 de junio de 2022. Foto: Roberto Castaño para Ushuaïa Ibiza, CC BY-SA 4.0.'),
    'ushuaia-tower-2015': figure('ushuaia-tower-2015', 1200, 800,
      'La torre blanca Ushuaia Tower del hotel de playa, con esculturas de flores en la pared, palmeras y una cabeza de piedra en primer plano',
      'La Ushuaia Tower del Ushuaia Beach Hotel, 11 de septiembre de 2015. Foto: Phil Guest, CC BY-SA 2.0.'),
    'Residents sets': articleVideoCollection({
      lang,
      label: 'Sets de residentes de Ushuaia en 2026',
      description: 'Ninguno se grabó en Ushuaia. Son sets de DJ que tuvieron una noche allí en 2026.',
      items: [
        articleVideoCard({youtubeId: '9uKyeG-A26o', genre: 'Residente de los lunes, 2023', artist: 'David Guetta', title: 'David Guetta Epic House Set From An Ibiza Villa'}),
        articleVideoCard({youtubeId: 'Jx3XjxUTmk0', genre: 'Fiesta de apertura 2026 y 20 de septiembre, 2025', artist: 'HUGEL', title: 'HUGEL Latin House DJ Set Live From UNTOLD Festival'}),
        articleVideoCard({youtubeId: '3zNx1Cj1010', genre: 'Residente de los jueves, 2022', artist: 'Martin Garrix', title: 'Martin Garrix Historic DJ Set Atop The Empire State Building'})
      ]
    }),
    'Table: tickets': articleTable({
      headers: ['Dato', 'Qué dicen las fuentes'],
      rows: rows([
        ['Entrada suelta', 'Clubtickets: de 30 a 130 euros. Guía de Ibiza Spotlight de 2024: de 50 a más de 100 euros.'],
        ['Fiesta de apertura 2026', 'Clubtickets la listó desde 70 euros.'],
        ['Entrada VIP', 'Desde 500 euros en Clubtickets, con cinco copas, acceso prioritario al jardín, las zonas VIP salvo las mesas, baño privado y aparcacoches.'],
        ['Entrada VIP de escenario', 'Desde 150 euros en Clubtickets, con tres o cuatro copas, acceso al backstage y a la zona del escenario.'],
        ['Pack de copas', 'Las preguntas frecuentes listan cinco copas por 99,99 euros. Cubre refrescos, cerveza y destilados no premium. Quedan fuera los destilados premium, las bebidas energéticas y los cócteles.'],
        ['Copas en la barra', 'Clubtickets: vodka con limón desde 23 euros, cerveza 18 euros, agua 15 euros. Spotlight: destilado con refresco, unos 26 euros.'],
        ['Cancelación', 'Hasta 24 horas antes, o 72 horas antes para las fiestas de apertura y de cierre.'],
        ['Entrada antes de una hora', 'Las entradas vendidas como entrada antes de una hora tienen un límite. Las entradas estándar no lo tienen.']
      ]),
      label: 'Ushuaia Ibiza: entradas y precios'
    }),
    'Table: rules': articleTable({
      headers: ['Norma', 'Qué dicen las preguntas frecuentes'],
      rows: rows([
        ['Bolsos', 'Nada más grande que un bolso de mano estándar. No hay guardarropa ni taquillas.'],
        ['Reentrada', 'No se permite. La entrada cubre todas las zonas salvo el VIP y el backstage.'],
        ['Fotos', 'Solo con smartphone. Sin cámaras profesionales, drones ni palos de selfie.'],
        ['Comida y bebida', 'Nada de fuera.'],
        ['Accesibilidad', 'El recinto es accesible para sillas de ruedas.']
      ]),
      label: 'Ushuaia Ibiza: normas de entrada'
    }),
    'Table: transport': articleTable({
      headers: ['Cómo llegar', 'Desde Ibiza ciudad', 'Desde San Antonio'],
      rows: rows([
        ['Autobús', 'Línea 14, unos 2 euros', 'Disco Bus línea 3B, unos 5 euros'],
        ['Taxi', 'Unos 15 euros, unos 10 minutos', 'Unos 35 euros, unos 25 minutos']
      ]),
      label: 'Ushuaia Ibiza: cómo llegar'
    })
  }),

  sources: [
    {html: `Calendario, fiestas de cierre, residencias, fiesta de apertura, preguntas frecuentes, condiciones VIP, dirección, horarios, edad, bolsos, fotografía y pack de copas: ${ext('https://theushuaiaexperience.com/club/en', 'la web oficial de Ushuaïa Ibiza')} (calendario, noticias y ${ext('https://theushuaiaexperience.com/club/en/faq', 'preguntas frecuentes')}). El artículo del cartel es del 12 de agosto de 2026, la guía de septiembre del 2 de septiembre de 2026 y el artículo de la fiesta de apertura del 26 de marzo de 2026.`},
    {html: `Rangos de entradas, contenido de las entradas VIP, precios de bar, transporte público y taxi: ${ext('https://www.clubtickets.com/clubbing/ushuaia-ibiza', 'Clubtickets')}, la plataforma de entradas que nombra el club.`},
    {html: `Propiedad, aforo, historia, formato de la fiesta de apertura de 2019, precios y notas del dress code: Ibiza Spotlight, ${ext('https://www.ibiza-spotlight.com/magazine/2024/08/ibiza-virgins-guide-ushuaia', 'Insiders\' Guide')} (15 de agosto de 2024).`}
  ],

  bandcamp: {
    description: 'Lejos de la pista, la música que hago yo mismo. Comprar una apoya mi trabajo directamente.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 de thecatrave'},
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks de thecatrave'}
    ]
  }
};
