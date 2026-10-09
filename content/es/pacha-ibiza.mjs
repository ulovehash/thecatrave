// Spanish Pacha Ibiza guide. Structure, facts and media from the English page
// (pacha-ibiza-draft.md, build-pacha-ibiza-article.mjs); facts are the English
// page's, read on 2026-10-04 from pacha.com, Ibiza Spotlight, Gray Area, Ibiza
// Rocks, FIVE Holdings and Resident Advisor: keep them aligned.
//
// Spanish keywords, measured 2026-10-09 with Keyword Planner (Spain,
// keywords/es-pacha-ibiza.json): pacha ibiza 10K-100K, pacha ibiza entradas
// 100-1K, pacha ibiza dress code 100-1K. Live es-ES SERP and People-also-ask
// read the same day (google.es, hl=es, gl=es): pacha.com, ticket and VIP pages
// lead, and People also ask "¿Cuánto cuesta entrar en Pacha, Ibiza?", "¿Cuándo
// abre Pacha Ibiza 2026?", "¿Cómo ir vestido a Pacha Ibiza?", "¿Cuánto cuesta
// una copa en Pacha?". The first three are H2/FAQ entries answered only with
// facts already on the English page; the drink-price question is not applied
// because the English page has no drink prices. Images are the English guide's,
// in img/pacha-ibiza/, with translated captions.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, ownSetListening
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/pacha-ibiza/${name}-1200.webp`,
  srcset: `img/pacha-ibiza/${name}-320.webp 320w, img/pacha-ibiza/${name}-1200.webp 1200w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

const ext = (href, text) => `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`;

export default {
  lang: 'es',
  name: 'es-pacha-ibiza',
  file: 'es/pacha-ibiza.html',
  draft: 'es/pacha-ibiza-draft.md',
  canonical: 'https://thecatrave.com/es/pacha-ibiza',
  englishPath: '/pacha-ibiza',
  ogImage: 'https://thecatrave.com/img/og/pacha-ibiza.jpg',
  bodyClass: 'article-page pacha-ibiza-page',
  minReadingMinutes: 6,

  title: 'Pacha Ibiza: entradas, dress code y calendario 2026',
  description: 'Pacha Ibiza: cuánto cuestan las entradas, cómo funciona la mesa VIP y el dress code, dónde está el club, quién es el dueño y cómo leer el calendario 2026.',
  datePublished: '2026-10-09',
  dateModified: '2026-10-09',
  dateLabel: '9 de octubre de 2026',

  heroKicker: 'Guía de club, Ibiza',
  heroTitle: 'Pacha Ibiza: entradas, dress code y calendario 2026',
  deck: 'El club de Ibiza ciudad con el logotipo de las cerezas: cuánto cuestan las entradas, qué permite la puerta, cómo fue el calendario 2026 y quién es hoy el dueño.',
  answerLabel: 'Pacha Ibiza',
  breadcrumbName: 'Pacha Ibiza',

  answerSection: 'Respuesta',
  introSection: 'Introducción',
  introTitle: 'Un club, varias preguntas.',
  faqSection: 'FAQ',
  faqLabel: 'Preguntas frecuentes',
  faqTitle: 'Preguntas frecuentes sobre Pacha Ibiza.',

  sections: [
    {id: 'what-is', heading: '¿Qué es Pacha Ibiza?', title: '¿Qué es Pacha Ibiza?', subsections: ['history', 'cherries', 'capacity', 'owner']},
    {id: 'tickets', heading: 'Pacha Ibiza entradas: cuánto cuesta entrar', title: 'Pacha Ibiza entradas: cuánto cuesta entrar', tocLabel: 'Entradas'},
    {id: 'dress-code', heading: 'Pacha Ibiza dress code: cómo ir vestido', title: 'Pacha Ibiza dress code: cómo ir vestido', tocLabel: 'Dress code'},
    {id: 'season-2026', heading: 'Pacha Ibiza 2026: temporada y apertura', title: 'Pacha Ibiza 2026: temporada y apertura', tocLabel: 'Temporada 2026', subsections: ['opening-party']},
    {id: 'events', heading: 'Pacha Ibiza eventos y calendario', title: 'Pacha Ibiza eventos y calendario', tocLabel: 'Eventos y calendario', subsections: ['closing-party', 'djs']},
    {id: 'vip', heading: 'Pacha Ibiza VIP y mesa', title: 'Pacha Ibiza VIP y mesa', tocLabel: 'VIP y mesa'},
    {id: 'where', heading: '¿Dónde está Pacha Ibiza?', title: '¿Dónde está Pacha Ibiza?', tocLabel: '¿Dónde está?'}
  ],

  media: ({lang}) => ({
    'thecatrave mix 0': ownSetListening(0, lang, 'Una mezcla de DJ para escuchar mientras lees sobre el club de las cerezas. Mi propia mezcla.'),
    'thecatrave mix 1': ownSetListening(1, lang),
    'cherries-2014': figure('cherries-2014', 1200, 800,
      'La fachada de Pacha Ibiza de noche, con los letreros rojos de las cerezas iluminados sobre el edificio, encima de una placa de la calle Carrer de Paris',
      'Los letreros de las cerezas en Pacha Ibiza, 14 de septiembre de 2014. Foto: Angel Abril Ruiz, CC BY 2.0.'),
    'main-room-2008': figure('main-room-2008', 1200, 900,
      'Una multitud bailando en la pista de la Main Room de Pacha Ibiza bajo una gran lámpara blanca con flecos',
      'La Main Room de Pacha Ibiza, 15 de mayo de 2008. Foto: pravin.premkumar, CC BY 2.0.'),
    'party-2013': figure('party-2013', 1200, 900,
      'Una artista en un escenario durante una fiesta en Pacha Ibiza, con decoración de símbolos de la paz detrás',
      'Una fiesta en Pacha Ibiza, 2013. Foto: BOMBMAN, CC BY 2.0.'),
    'Pacha sets': articleVideoCollection({
      lang,
      label: 'Grabados en Pacha Ibiza',
      description: 'La fiesta de apertura de Vagabundos en Pacha en 2016 para DJ Mag, y dos sets de Mixmag desde Pacha en 2018 y 2014.',
      items: [
        articleVideoCard({youtubeId: 'iT3Ebi3ZHiA', genre: 'Fiesta de apertura de Vagabundos, 2016', artist: 'DJ Mag', title: 'Vagabundos 2016 Opening Party at Pacha Ibiza'}),
        articleVideoCard({youtubeId: 'y37cDo_CTu4', genre: 'Cocoon, 2018', artist: 'Sven Väth', title: 'SVEN VÄTH. Cocoon. Pacha 2018.'}),
        articleVideoCard({youtubeId: 'vbWFtk0JnqE', genre: 'Pacha, 2014', artist: 'Solomun y Andhim', title: 'SOLOMUN + ANDHIM @ Pacha, Ibiza 2014'})
      ]
    }),
    'Table: tickets': articleTable({
      headers: ['Dato', 'Qué dice pacha.com'],
      rows: [
        ['Horario', 'Las preguntas frecuentes dicen que el club abre todos los días de 23:00 al cierre.'],
        ['Última entrada', '5:00, o una hora antes del cierre.'],
        ['Copas', 'La web principal anuncia hasta un 70 % de descuento en copas y agua si se compran online.'],
        ['Autobús', 'La entrada del club incluye un autobús gratuito de ida desde San Antonio.'],
        ['Restaurante', 'Los clientes que cenan en Pacha Restaurant pueden entrar al club, con un gasto mínimo.']
      ].map(row => row.map(escapeHtml)),
      label: 'Pacha Ibiza: entradas y datos de entrada'
    })
  }),

  sources: [
    {html: `Precios, entradas, horarios, edad, dress code, última entrada, VIP, eventos y residencias: ${ext('https://www.pacha.com/', 'pacha.com')}, ${ext('https://www.pacha.com/contact-us', 'preguntas frecuentes y contacto')}, ${ext('https://www.pacha.com/vip-events', 'página VIP')}, ${ext('https://www.pacha.com/events', 'eventos')}, ${ext('https://www.pacha.com/artists', 'artistas')} y ${ext('https://www.pacha.com/shuttle-information', 'información del autobús')}.`},
    {html: `Aforo, ubicación, notas sobre el dress code, historia y logotipo de las cerezas: Ibiza Spotlight, ${ext('https://www.ibiza-spotlight.com/magazine/2025/03/ibiza-virgins-guide-pacha', 'Insiders\' Guide')} (14 de marzo de 2025) y ${ext('https://www.ibiza-spotlight.com/magazine/2023/07/10-surprising-facts-about-pacha-ibiza', '10 surprising facts')} (20 de julio de 2023). Fin de semana de cierre: ${ext('https://www.ibiza-spotlight.com/night/promoters/pacha-closing-party', 'Ibiza Spotlight')}.`},
    {html: `Historia, salas, dirección y la fiesta Flower Power: ${ext('https://grayarea.co/magazine/from-farmhouse-to-dancefloor-the-first-djs-and-residencies-at-pacha-ibiza', 'artículo de Gray Area')} y ${ext('https://grayarea.co/venues/pacha-ibiza', 'ficha del local')}.`},
    {html: `Fin de semana de apertura 2026 y residencia Music On: ${ext('https://www.ibizarocks.com/stories/pacha-2026-opening-weekend/', 'Ibiza Rocks, apertura')} (21 de enero de 2026) y ${ext('https://www.ibizarocks.com/stories/marco-carola-music-on-pacha-2026/', 'Music On')} (26 de enero de 2026).`},
    {html: `Propiedad: ${ext('https://www.five-holdings.com/five-acquires-the-pacha-group/', 'comunicado de FIVE Holdings')} (octubre de 2023) y ${ext('https://ra.co/news/38057', 'Resident Advisor')} (3 de febrero de 2017).`}
  ],

  bandcamp: {
    description: 'Lejos de la pista, la música que hago yo mismo. Comprar una apoya mi trabajo directamente.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 de thecatrave'},
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks de thecatrave'}
    ]
  }
};
