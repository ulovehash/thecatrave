// Spanish Ibiza clubs guide. Structure, facts and media from the English page
// (ibiza-clubs-draft.md); localised, not translated word for word.
//
// Spanish keywords, measured 2026-10-09 with Keyword Planner (Spain,
// keywords/es-ibiza-clubs.json): pacha ibiza, ushuaia ibiza, amnesia ibiza
// 10K-100K each, discotecas ibiza 1K-10K, mejores discotecas ibiza 100-1K.
//
// The images are the English guide's, in img/ibiza-clubs/, with translated captions.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, ownSetListening
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/ibiza-clubs/${name}-${width}.webp`,
  srcset: `img/ibiza-clubs/${name}-320.webp 320w, img/ibiza-clubs/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

const video = (lang, label, description, youtubeId, genre, artist, title) => articleVideoCollection({
  lang, label, description, items: [articleVideoCard({youtubeId, genre, artist, title})]
});

export default {
  lang: 'es',
  name: 'es-ibiza-clubs',
  file: 'es/discotecas-ibiza.html',
  draft: 'es/ibiza-clubs-draft.md',
  canonical: 'https://thecatrave.com/es/discotecas-ibiza',
  englishPath: '/best-clubs-in-ibiza',
  ogImage: 'https://thecatrave.com/img/og/ibiza-clubs.jpg',
  bodyClass: 'article-page ibiza-clubs-page',
  minReadingMinutes: 6,
  image: 'https://thecatrave.com/img/ibiza-clubs/pacha-entrance-1200.webp',

  title: 'Discotecas Ibiza: Pacha, Amnesia, Hï y las demás',
  description: 'Hï, Pacha, Amnesia, DC-10, Ushuaïa y [UNVRS]: las mejores discotecas de Ibiza, las que cerraron, dónde alojarse y cuándo dura la temporada.',
  datePublished: '2026-10-09',
  dateModified: '2026-10-09',
  dateLabel: '9 de octubre de 2026',

  heroKicker: 'Discotecas Ibiza',
  heroTitle: 'Las mejores discotecas de Ibiza: Pacha, Amnesia, Hï y las demás',
  deck: 'Dos clubes de los años setenta, dos que cerraron y reabrieron con otro nombre, y las mejores discotecas de Ibiza para la próxima temporada.',
  answerLabel: 'Las mejores discotecas de Ibiza',
  breadcrumbName: 'Las mejores discotecas de Ibiza',

  answerSection: 'Respuesta',
  introSection: 'Introducción',
  introTitle: 'Una temporada, no una ciudad.',
  faqSection: 'FAQ',
  faqLabel: 'Preguntas frecuentes',
  faqTitle: 'Preguntas frecuentes sobre las discotecas de Ibiza.',

  sections: [
    {id: 'pacha-and-amnesia', heading: 'Pacha y Amnesia: las dos primeras', title: 'Pacha y Amnesia: las dos primeras.'},
    {id: 'clubs-that-closed', heading: 'Los clubes que cerraron: Ku, Privilege y Space', title: 'Los clubes que cerraron: Ku, Privilege y Space.'},
    {id: 'best-clubs-now', heading: 'Las mejores discotecas de Ibiza ahora', title: 'Las mejores discotecas de Ibiza ahora.'},
    {id: 'where-to-stay', heading: 'Dónde alojarse en Ibiza para salir de fiesta', title: 'Dónde alojarse en Ibiza para salir de fiesta.'},
    {id: 'season', heading: 'La temporada de Ibiza: aperturas y cierres', title: 'La temporada de Ibiza: aperturas y cierres.'}
  ],

  media: ({lang}) => ({
    'Image: Pacha entrance': figure('pacha-entrance', 1200, 675, 'La entrada blanca de Pacha en Ibiza ciudad, con sus letras rojas', 'Pacha, en Ibiza ciudad desde junio de 1973, fotografiada en 2018. Foto: Dominic Milton Trott, CC BY 2.0.'),
    'Image: Privilege pool': figure('privilege-pool', 1200, 896, 'La cabina de DJ de Privilege en Ibiza sobre la piscina, en mitad de la pista, bajo una luz azul', 'Privilege en 2014, con la cabina sobre la piscina. El Libro Guinness lo recogió como la discoteca más grande del mundo; cerró tras 2019 y reabrió en 2025 como [UNVRS]. Foto: Rauletemunoz, CC BY-SA 3.0.'),
    'Embed: Solomun Pacha': video(lang, 'Solomun y Andhim, Pacha, Ibiza, 2014', 'Solomun y Andhim en Pacha en 2014, grabados por Mixmag.', 'vbWFtk0JnqE', 'House', 'Solomun y Andhim', 'Pacha, Ibiza, 2014'),
    'Embed: Sven Vath Cocoon Pacha': video(lang, 'Sven Väth, Cocoon, Pacha, 2018', 'Sven Väth, cuya fiesta Cocoon se celebra en Amnesia, en una noche Cocoon en Pacha en 2018, grabado por Mixmag.', 'y37cDo_CTu4', 'Techno', 'Sven Väth', 'Cocoon, Pacha, 2018'),
    'Embed: Nicole Moudaber Space': video(lang, 'Nicole Moudaber, Music Is Revolution, Space, Ibiza, 2014', 'Nicole Moudaber en Space en 2014, dos años antes de su cierre, grabada por Mixmag.', 'bSto8j4ziCg', 'Techno', 'Nicole Moudaber', 'Music Is Revolution, Space, Ibiza, 2014'),
    'Embed: Fanciulli Voorn Ushuaia': video(lang, 'Nic Fanciulli y Joris Voorn, ANTS, Ushuaïa, Ibiza, 2014', 'Nic Fanciulli y Joris Voorn en ANTS, en Ushuaïa, el club al aire libre, en 2014, grabados por Mixmag.', 'yvG85jBbjaE', 'Tech house', 'Nic Fanciulli y Joris Voorn', 'ANTS, Ushuaïa, Ibiza, 2014'),
    'Embed: Jamie Jones Ibiza villa': video(lang, 'Jamie Jones, Boiler Room Ibiza Villa Takeovers, 2013', 'Jamie Jones para la serie Ibiza Villa Takeovers de Boiler Room en 2013, en el canal de Boiler Room.', 'AGdA7cmSkFk', 'House', 'Jamie Jones', 'Boiler Room Ibiza Villa Takeovers, 2013'),
    'Embed: thecatrave mix I Lost So Many Weekends Raving and I Wanna Lose Some More': ownSetListening(1, lang),
    'Table: now': articleTable({
      headers: ['Club', 'Zona', 'Abierto desde', 'Conocido por'],
      rows: [
        ['Hï Ibiza', 'Playa d\'en Bossa', '2017, en el solar de Space', 'Mejor club del mundo para los lectores de DJ Mag de 2022 a 2025'],
        ['Pacha', 'Ibiza ciudad', '1973', 'La marca de club más antigua de la isla, nacida en Sitges en 1967'],
        ['Amnesia', 'San Rafael', '1976', 'Sala principal y terraza para unas 5.000 personas; su quincuagésima temporada en 2026'],
        ['DC-10', 'Carretera de Salinas', '1999', 'Circoloco los lunes'],
        ['Ushuaïa', 'Playa d\'en Bossa', '2011', 'Club al aire libre dentro de un hotel, hasta las 23:00'],
        ['[UNVRS]', 'San Rafael', '2025, en el solar de Privilege', 'Presentado como el primer hiperclub, con capacidad para 10.000 personas'],
        ['Es Paradis', 'San Antonio', 'Uno de los más antiguos de la isla', 'El club de San Antonio']
      ].map(row => row.map(escapeHtml)),
      label: 'Las mejores discotecas de Ibiza ahora'
    })
  }),

  sources: [
    {href: 'https://www.ibiza-spotlight.com/magazine/2023/07/10-surprising-facts-about-pacha-ibiza', label: 'Ibiza Spotlight: 10 surprising facts about Pacha Ibiza (en inglés)'},
    {href: 'https://en.wikipedia.org/wiki/The_Pacha_Group', label: 'Wikipedia: The Pacha Group (en inglés)'},
    {href: 'https://ra.co/news/14731', label: 'Resident Advisor: Get to know Amnesia and Pacha (en inglés)'},
    {href: 'https://en.wikipedia.org/wiki/Amnesia_(nightclub)', label: 'Wikipedia: Amnesia (nightclub) (en inglés)'},
    {href: 'https://en.wikipedia.org/wiki/Privilege_Ibiza', label: 'Wikipedia: Privilege Ibiza (en inglés)'},
    {href: 'https://en.wikipedia.org/wiki/Space_(Ibiza_nightclub)', label: 'Wikipedia: Space (Ibiza nightclub) (en inglés)'},
    {href: 'https://en.wikipedia.org/wiki/H%C3%AF_Ibiza', label: 'Wikipedia: Hï Ibiza (en inglés)'},
    {href: 'https://en.wikipedia.org/wiki/DC10_(nightclub)', label: 'Wikipedia: DC10 (nightclub) (en inglés)'},
    {href: 'https://en.wikipedia.org/wiki/Ushua%C3%AFa_Ibiza', label: 'Wikipedia: Ushuaïa Ibiza (en inglés)'},
    {href: 'https://ra.co/news/81114', label: 'Resident Advisor: Ibiza club Privilege to reopen in 2025 as [UNVRS] (en inglés)'},
    {href: 'https://mixmag.net/read/privilege-unvrs-ibiza-white-isle-night-league-will-smith-ufo-news', label: 'Mixmag: New Ibiza club [UNVRS] will open on former Privilege site in 2025 (en inglés)'},
    {href: 'https://www.dirtydiscoradio.com/best-ibiza-clubs', label: 'Dirty Disco: The Best Ibiza Clubs in 2026 (en inglés)'}
  ],

  bandcamp: {
    description: 'Dos temas míos. Comprar uno apoya directamente mi trabajo.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks de thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 de thecatrave'}
    ]
  }
};
