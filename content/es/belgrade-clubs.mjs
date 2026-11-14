// Guía de discotecas de Belgrado en español. Estructura, datos y medios de la
// página inglesa (belgrade-clubs-draft.md, build-belgrade-clubs-article.mjs,
// media/belgrade-clubs.json), fechada el 8 de octubre de 2026; no se añade nada
// que la página inglesa no diga.
//
// Palabras clave: Keyword Planner (España y Latinoamérica, español, 14 de
// noviembre de 2026) devolvió "discotecas belgrado" en el tramo 10-100 y
// "vida nocturna belgrado" en 0-10 (keywords/es-belgrade-clubs.json).
//
// Las imágenes son las de la página inglesa, en img/belgrade-clubs/, con los
// pies traducidos.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/belgrade-clubs/${name}-${width}.webp`,
  srcset: `img/belgrade-clubs/${name}-320.webp 320w, img/belgrade-clubs/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

const video = (lang, youtubeId, artist, videoTitle, text) => articleVideoCollection({
  lang, label: `${artist}, ${videoTitle}`, description: text,
  items: [articleVideoCard({youtubeId, genre: 'Techno', artist, title: videoTitle})]
});

export default {
  lang: 'es',
  name: 'es-belgrade-clubs',
  file: 'es/discotecas-belgrado.html',
  draft: 'es/belgrade-clubs-draft.md',
  canonical: 'https://thecatrave.com/es/discotecas-belgrado',
  englishPath: '/best-clubs-in-belgrade',
  ogImage: 'https://thecatrave.com/img/og/belgrade-clubs.jpg',
  bodyClass: 'article-page belgrade-clubs-page',
  minReadingMinutes: 6,

  title: 'Discotecas Belgrado: Drugstore, Klub 20/44 y los splavovi',
  description: 'Drugstore, Klub 20/44 y Barutana: las discotecas de Belgrado que merecen una noche, el desalojo de los splavovi del Sava y sets de Boiler Room.',
  datePublished: '2026-11-14',
  dateModified: '2026-11-14',
  dateLabel: '14 de noviembre de 2026',

  heroKicker: 'Discotecas en Belgrado',
  heroTitle: 'Discotecas y vida nocturna de Belgrado, de Drugstore a las balsas',
  deck: 'Un club en un antiguo matadero, otro que dejó su barco por tierra firme y unas balsas que la ciudad desalojó en dos años: dónde suena hoy la música electrónica en Belgrado.',
  answerLabel: 'Discotecas en Belgrado',
  breadcrumbName: 'Discotecas en Belgrado',

  answerSection: 'Respuesta',
  introSection: 'Introducción',
  introTitle: 'Discotecas de Belgrado más allá de los bares.',
  faqSection: 'FAQ',
  faqLabel: 'Preguntas frecuentes',
  faqTitle: 'Preguntas frecuentes sobre las discotecas de Belgrado.',

  sections: [
    {id: 'belgrade-nightlife-history', heading: 'La vida nocturna de Belgrado, de un vistazo', title: 'La vida nocturna de Belgrado, de un vistazo.'},
    {id: 'best-clubs-now', heading: 'Las mejores discotecas de Belgrado hoy', title: 'Las mejores discotecas de Belgrado hoy.'},
    {id: 'drugstore', heading: 'Drugstore Belgrado: el antiguo matadero', title: 'Drugstore Belgrado: el antiguo matadero.'},
    {id: 'klub-20-44', heading: 'Klub 20/44, del barco a Karađorđeva', title: 'Klub 20/44, del barco a Karađorđeva.'},
    {id: 'barutana', heading: 'Barutana Belgrado, el club de la fortaleza', title: 'Barutana Belgrado, el club de la fortaleza.'},
    {id: 'techno', heading: 'Techno en Belgrado: los clubs de techno de la ciudad', title: 'Techno en Belgrado: los clubs de techno de la ciudad.'},
    {id: 'splavovi', heading: 'Los splavovi de Belgrado y los clubs del río', title: 'Los splavovi de Belgrado y los clubs del río.'},
    {id: 'where-to-go', heading: 'Dónde salir en Belgrado', title: 'Dónde salir en Belgrado.'}
  ],

  media: ({lang}) => ({
    'Sava desde Kalemegdan': figure('sava-from-kalemegdan', 1200, 900,
      'El Sava en Belgrado visto desde la fortaleza de Kalemegdan, con puentes y barcos amarrados',
      'El Sava desde la fortaleza de Kalemegdan, fotografiado en 2007. En ríos como este estaban amarrados los splavs de Belgrado. Foto: Petar Milošević, CC BY 3.0.'),
    'Balsa en el Savski kej': figure('savski-kej-raft', 1200, 900,
      'Un edificio flotante amarrado a la orilla del Savski kej, en el Sava, en Belgrado',
      'Un edificio flotante amarrado en el Savski kej, fotografiado en abril de 2011, antes de los desalojos de 2023 y 2024. Foto: darkobajic, CC BY 3.0.'),
    'Marko Nastic': video(lang, 'Yr1MNU8V-2w', 'Marko Nastić', 'MAD in Belgrade x Boiler Room, 2014',
      'Marko Nastić en el escenario de Boiler Room del festival MAD in Belgrade, en mayo de 2014.'),
    'Ancient Methods': video(lang, '14ksGZfcgHM', 'Ancient Methods', 'Boiler Room x Belgrade: Drugstore, 2019',
      'Ancient Methods en Drugstore en 2019, con el título que Boiler Room dio a la sesión.'),
    'Tijana T': video(lang, 'xjO25HRDe-w', 'Tijana T', 'Boiler Room Belgrade at Klub 20/44, 2017',
      'Tijana T en la cubierta del barco de Klub 20/44 para Boiler Room, en septiembre de 2017.'),
    '33.10.3402': video(lang, 'rJqr7_Q2uxE', '33.10.3402', 'Boiler Room Belgrade: Drugstore, 2019',
      '33.10.3402 en la primera sesión de Boiler Room en Drugstore, en marzo de 2019.'),
    'Table: now': articleTable({
      label: 'Las mejores discotecas de Belgrado hoy',
      headers: ['Club', 'Dónde', 'Carácter', 'Abierto (según guías locales, 2026)'],
      rows: [
        ['Drugstore', 'Bulevar Despota Stefana 115, Palilula', 'Antiguo matadero; autogestionado desde 2012, en este espacio desde 2014', 'Viernes y sábado'],
        ['Klub 20/44', 'Karađorđeva 44', 'Se trasladó desde un barco en el Sava el 31 de diciembre de 2024', 'De jueves a sábado'],
        ['Barutana', 'Fortaleza de Kalemegdan', 'Club al aire libre junto a un polvorín del siglo XVIII', 'Reabrió el 5 de junio de 2026'],
        ['Kult', 'Čumićevo sokače 3', 'Del house al techno, aforo de unas 350 personas; desde diciembre de 2022', 'Programación sin confirmar'],
        ['Lift', 'Cetinjska 15, Dorćol', 'Más un bar con DJ que un club', 'Mira su propia agenda']
      ].map(row => row.map(escapeHtml))
    })
  }),

  // Las fuentes de la página inglesa, URL por URL, con etiquetas traducidas. Todas en inglés o serbio.
  sources: [
    {href: 'https://drugstorebeograd.com/', label: 'Drugstore: web oficial (en inglés)'},
    {href: 'https://boilerroom.tv/city/belgrade', label: 'Boiler Room: sesiones en Belgrado (en inglés)'},
    {href: 'https://ra.co/news/81854', label: 'Resident Advisor: Klub 20/44 abre en Karađorđeva 44 (25 de diciembre de 2024, en inglés)'},
    {href: 'https://nosleepfestival.com/', label: 'No Sleep Festival: web oficial (en inglés)'},
    {html: 'Balkan Insight, historia de los splavs de Belgrado (13 de junio de 2016); Vreme (24 de mayo de 2023), Danas (9 de mayo de 2024) y RTS / Direktno (13 de agosto de 2024) sobre el desalojo de las balsas del Savski kej (en inglés y serbio).'},
    {html: 'StillInBelgrade, 10 clubs y bares con DJ de Belgrado (17 de febrero de 2026), para los días de apertura y el aforo; clubber.rs, para la historia de Barutana y su reapertura en junio de 2026; Belgrade My Way, para el traslado de las balsas desde 2025 (en inglés y serbio).'}
  ],

  bandcamp: {
    description: 'Lejos de la pista, la música que hago yo. Comprarla apoya mi trabajo directamente.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 de thecatrave'},
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks de thecatrave'}
    ]
  }
};
