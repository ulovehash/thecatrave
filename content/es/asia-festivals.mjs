// Spanish Asia festivals comparison. Structure, facts, dates and the "not
// announced" labels from the English page (best-electronic-music-festivals-asia-draft.md,
// build-asia-festivals-article.mjs), checked there on 4 and 5 October 2026. The page has no
// French or German version; content/es/us-festivals.mjs is the structural template.
//
// Spanish keywords: Keyword Planner (Spain, 9 Oct 2026) returned no row for a Spanish Asia
// phrase (keywords/es-asia-festivals.json). Wording follows the live es-ES SERP and
// People-also-ask read the same day (google.es, hl=es, gl=es): results write "festivales de
// música electrónica en Asia" and are led by Tomorrowland Thailand coverage (LOS40, Tomorrowland
// llegará por primera vez a Asia); People also ask "¿Cuáles son algunos festivales importantes
// en Asia?", "¿Cuál es el mejor / el más grande festival de electrónica del mundo?" and
// "¿Cuándo y dónde es el Tomorrowland 2026?". The first is the first FAQ; the world-wide
// questions are not answered because the English page gives no verdict beyond Asia, and
// Tomorrowland Thailand keeps the English page's two sentences plus a link to the Spanish
// Tomorrowland guide.
//
// Maintenance: the dates are the English page's. Change them here and in the draft whenever the
// English page changes them; registered in festival-editions.mjs with the other roundups.
//
// The images are the English page's, in img/asia-festivals/, with translated captions.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, ownSetListening
} from '../../site-components.mjs';

const fig = (name, width, height, alt, caption) => articleFigure({
  src: `img/asia-festivals/${name}-1200.webp`,
  srcset: `img/asia-festivals/${name}-320.webp 320w, img/asia-festivals/${name}-1200.webp 1200w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

const link = ([href, label]) => `<a href="${href}" target="_blank" rel="noopener noreferrer">${label}</a>`;

export default {
  lang: 'es',
  name: 'es-asia-festivals',
  file: 'es/festivales-musica-electronica-asia.html',
  draft: 'es/asia-festivals-draft.md',
  canonical: 'https://thecatrave.com/es/festivales-musica-electronica-asia',
  englishPath: '/best-electronic-music-festivals-asia',
  ogImage: 'https://thecatrave.com/img/og/asia-festivals.jpg',
  bodyClass: 'article-page asia-festivals-page',
  minReadingMinutes: 8,

  title: 'Festivales de música electrónica en Asia 2027: guía',
  description: 'Ultra Japan el 18 y 19 de septiembre, Wonderfruit, S2O, Sunburn, DWP y Zamna: los festivales de música electrónica de Asia en 2027, con fechas y precios.',
  datePublished: '2026-10-09',
  dateModified: '2026-10-09',
  dateLabel: '9 de octubre de 2026',

  heroKicker: 'Guía de festivales 2027',
  heroTitle: 'Los mejores festivales de música electrónica de Asia en 2027',
  deck: 'Siete festivales de Tokio a Yakarta comparados por dónde están, qué programan y qué precio tienen, con las fechas de 2027 confirmadas y las que aún no lo están.',
  answerLabel: 'Los mejores festivales de música electrónica de Asia',
  breadcrumbName: 'Festivales de música electrónica en Asia',

  answerSection: 'Respuesta',
  introSection: 'Introducción',
  introTitle: 'Una lista para elegir viaje.',
  faqSection: 'FAQ',
  faqLabel: 'Preguntas frecuentes sobre los festivales de música electrónica en Asia',
  faqTitle: 'Preguntas frecuentes sobre los festivales de música electrónica en Asia.',

  sections: [
    {id: 'criteria', heading: 'Cómo se ha hecho esta lista', title: 'Cómo se ha hecho esta lista.'},
    {id: 'at-a-glance', heading: 'Los festivales de un vistazo', title: 'Los festivales de un vistazo.'},
    {id: 'ultra-japan', heading: 'Ultra Japan, Tokio', title: 'Ultra Japan, Tokio.'},
    {id: 'wonderfruit', heading: 'Wonderfruit, Tailandia', title: 'Wonderfruit, Tailandia.'},
    {id: 's2o', heading: 'S2O Songkran, Bangkok', title: 'S2O Songkran, Bangkok.'},
    {id: 'sunburn', heading: 'Sunburn Festival, Bombay', title: 'Sunburn Festival, Bombay.'},
    {id: 'dwp', heading: 'Djakarta Warehouse Project, Yakarta', title: 'Djakarta Warehouse Project, Yakarta.'},
    {id: 'ultra-korea', heading: 'Ultra Korea, Seúl', title: 'Ultra Korea, Seúl.'},
    {id: 'zamna', heading: 'Zamna Tailandia', title: 'Zamna Tailandia.'},
    {id: 'by-country', heading: 'Festivales de música electrónica en Tailandia, Japón e India', title: 'Festivales de música electrónica en Tailandia, Japón e India.',
      subsections: ['thailand', 'japan', 'india']},
    {id: 'not-listed', heading: 'Lo que no está en esta lista, y por qué', title: 'Lo que no está en esta lista, y por qué.'}
  ],

  media: ({lang}) => ({
    'Table: glance': articleTable({label: 'Festivales de música electrónica en Asia comparados, 2027',
      headers: ['Festival', 'Dónde', 'Última o próxima edición', '2027', 'Sonido'],
      rows: [
        ['Ultra Japan', 'Tokio', '19 y 20 de septiembre de 2026 (celebrado)', '18 y 19 de septiembre de 2027', 'EDM, house, techno'],
        ['Wonderfruit', 'Chonburi, Tailandia', '3 al 7 de diciembre de 2026', 'Sin anunciar', 'House, techno, directos, arte'],
        ['S2O Songkran', 'Bangkok', '11 al 13 de abril de 2026 (celebrado)', 'Sin anunciar', 'EDM de gran escenario, agua'],
        ['Sunburn', 'Bombay', '18 y 19 de diciembre de 2026', 'Sin anunciar', 'EDM comercial'],
        ['Djakarta Warehouse Project', 'Yakarta', '11 al 13 de diciembre de 2026', 'Sin anunciar', 'EDM, house, techno'],
        ['Ultra Korea', 'Seúl', '20 de septiembre de 2025 (última lista)', 'Ninguna lista', 'EDM'],
        ['Zamna Tailandia', 'Phuket', '21 de febrero de 2026 (Koh Samui, celebrado)', 'Enero de 2027 (las fechas del organizador se contradicen)', 'House, techno']
      ]}),
    'wonderfruit': fig('wonderfruit-2015', 1200, 900,
      'Una puerta con el letrero A Taste of Wonder al atardecer en el festival Wonderfruit de 2015',
      'La puerta de Wonderfruit en diciembre de 2015, cuando el festival se celebraba en Pattaya. Foto: Sdegennaro, CC BY-SA 4.0.'),
    's2o': fig('s2o-2025', 1200, 800,
      'El escenario de S2O iluminado de naranja con efectos de fuego durante un set de Prophecy',
      'Prophecy en S2O Songkran, en Bangkok, en 2025. Foto: MikeAlca, CC BY-SA 4.0.'),
    'sunburn': fig('sunburn-goa-2010', 1200, 800,
      'Luces y un escenario de noche en el Sunburn Festival de Candolim, Goa',
      'Sunburn Festival en Candolim, Goa, el 29 de diciembre de 2010, cuando se celebraba en Goa. Foto: Vyacheslav Argenberg, CC BY 4.0.'),
    'dwp': fig('dwp-2017', 1200, 800,
      'Garuda Land, el escenario principal de Djakarta Warehouse Project, en 2017',
      'Garuda Land, el escenario principal de Djakarta Warehouse Project, en diciembre de 2017. Foto: Ismaya Live, CC BY-SA 4.0.'),
    'ultra-korea-photo': fig('ultra-korea-2015', 1200, 1174,
      'El público de Ultra Korea en 2015 ante el escenario principal',
      'Ultra Korea en 2015. Foto: Ultrafan123, CC BY-SA 4.0.'),
    'ultra-korea': articleVideoCollection({
      lang, label: 'Ultra Korea, desde casa',
      description: 'Tres sets de la afterparty de Ultra Korea 2018 en el Hyundai Motor Studio, filmados por MIXMIX TV.',
      items: [
        articleVideoCard({youtubeId: 'TX1ksXLgHKA', genre: 'ULTRA KOREA, 2018', artist: 'Deepshower', title: 'Afterparty en el Hyundai Motor Studio'}),
        articleVideoCard({youtubeId: '3VavBJPlKYc', genre: 'ULTRA KOREA, 2018', artist: 'Yamada', title: 'Afterparty en el Hyundai Motor Studio'}),
        articleVideoCard({youtubeId: 'h4GXgykSLVw', genre: 'ULTRA KOREA, 2018', artist: 'Minimonster', title: 'Afterparty en el Hyundai Motor Studio'})
      ]
    }),
    'owner-first': ownSetListening(0, lang),
    'owner-second': ownSetListening(1, lang)
  }),

  sources: [
    {html: `Webs oficiales, leídas el 4 de octubre de 2026: ${[
      ['https://ultrajapan.com', 'Ultra Japan'], ['https://www.wonderfruit.co', 'Wonderfruit'], ['https://s2ofestival.com', 'S2O'], ['https://www.sunburn.in', 'Sunburn'],
      ['https://dwpfest.com', 'DWP'], ['https://ultrakorea.com', 'Ultra Korea'], ['https://ultrasingapore.com', 'Ultra Singapore'], ['https://zamnafestival.com/events/zamna-on-the-beach-Thailand', 'Zamna On The Beach Thailand']
    ].map(link).join(', ')}.`},
    {html: `Entradas y fechas de 2027, consultadas el 5 de octubre de 2026: ${link(['https://ultrajapan.com/tickets-2027', 'entradas oficiales de Ultra Japan'])} y ${link(['https://zamnafestival.com/events/zamna-phuket', 'página oficial del evento Zamna Phuket'])}.`},
    {html: `Cartel y precios de Ultra Japan 2026: ${link(['https://popii-land.jp/en/ultra-japan-2026-first-lineup-peggy-gou-en/', 'Popii Land'])} (en inglés).`},
    {html: `Primera tanda de artistas de Wonderfruit: ${link(['https://likdo.asia/magazine/wonderfruit-2026-announces-first-wave-of-artist-lineup/', 'LIKDO'])} (en inglés).`},
    {html: `S2O 2026: ${link(['https://www.eventpop.me/e/87299', 'página de entradas de Eventpop'])}, ${link(['https://edm-addicts.com/news/s2o-songkran-music-festival-returns-april-11-13-2026', 'EDM Addicts'])} y ${link(['https://go2-thailand.com/blog/s2o-songkran-music-festival-2026-bangkok-edm-water-party/', 'resumen de Go2Thailand'])} (en inglés).`},
    {html: `Sunburn 2026: ${link(['https://sunburn.in/the-19th-edition-of-sunburn-festival-moves-to-mahalaxmi-racecourse-with-a-reimagined-two-day-format/', 'el anuncio oficial'])} y ${link(['https://www.esquireindia.co.in/culture/books-and-music/sunburn-festival-2026-mumbai-dates-venue-tickets-lineup-and-everything-you-need-to-know', 'Esquire India'])} (en inglés).`},
    {html: `Historia de DWP, asistencia de 2025 y nombres de 2026: ${link(['https://www.edmtunes.com/2026/09/djakarta-warehouse-project-reveals-first-names-for-2026/', 'EDMTunes'])} (en inglés).`},
    {html: `Zamna Phuket 2027: ${link(['https://iflyer.tv/en/article/2026/05/29/zamna-phuket/', 'iFLYER'])} y ${link(['https://edm-addicts.com/news/zamna-festival-is-coming-to-phuket-in-january-2027-and-here-is-everything-you-need-to-know', 'EDM Addicts'])} (en inglés).`},
    {html: `Tailandia: ${link(['https://edm-addicts.com/news/808-festival-2026-is-back', '808 Festival, EDM Addicts'])} y ${link(['https://go2-thailand.com/blog/thailand-tomorrowland-pattaya-first-asia-edition-2026/', 'Tomorrowland Thailand, Go2Thailand'])} (en inglés).`}
  ],

  bandcamp: {
    description: 'La música que hago yo mismo. Comprar un lanzamiento apoya directamente mi trabajo.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 de thecatrave'},
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks de thecatrave'}
    ]
  }
};
