// Spanish Prague clubs guide. Structure, facts and media from the English page
// (prague-clubs-draft.md, build-prague-clubs-article.mjs). Keywords from Keyword
// Planner (Spain; Mexico, Argentina, Colombia, Chile; 2026-11-12), in
// keywords/es-prague-clubs.json. The images are the English guide's, with
// translated captions.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/prague-clubs/${name}-${width}.webp`,
  srcset: `img/prague-clubs/${name}-320.webp 320w, img/prague-clubs/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

export default {
  lang: 'es',
  name: 'es-prague-clubs',
  file: 'es/discotecas-praga.html',
  draft: 'es/prague-clubs-draft.md',
  canonical: 'https://thecatrave.com/es/discotecas-praga',
  englishPath: '/best-clubs-in-prague',
  ogImage: 'https://thecatrave.com/img/og/prague-clubs.jpg',
  bodyClass: 'article-page prague-clubs-page',
  minReadingMinutes: 5,

  title: 'Discotecas Praga: Cross Club, Karlovy Lázně y Ankali',
  description: 'La maquinaria soldada de Cross Club, las cinco plantas de Karlovy Lázně y las noches de techno de Ankali: las mejores discotecas de Praga, comerciales y underground.',
  datePublished: '2026-11-12',
  dateModified: '2026-11-12',
  dateLabel: '12 de noviembre de 2026',

  heroKicker: 'Discotecas Praga',
  heroTitle: 'Las mejores discotecas de Praga, de Cross Club a Karlovy Lázně',
  deck: 'Dos escenas nocturnas que apenas se tocan: complejos turísticos de cinco plantas junto al puente de Carlos y unas pocas salas de maquinaria rescatada y equipo de sonido a medida para house y techno.',
  answerLabel: 'Las mejores discotecas de Praga',
  breadcrumbName: 'Las mejores discotecas de Praga',

  answerSection: 'Respuesta',
  introSection: 'Introducción',
  introTitle: 'Dos escenas, una ciudad.',
  faqSection: 'FAQ',
  faqLabel: 'Preguntas frecuentes',
  faqTitle: 'Preguntas frecuentes sobre las discotecas de Praga.',

  sections: [
    {id: 'best-clubs-now', heading: 'Las mejores discotecas de Praga ahora', title: 'Las mejores discotecas de Praga ahora.'},
    {id: 'cross-club-depth', heading: 'Cross Club, más a fondo', title: 'Cross Club, más a fondo.'},
    {id: 'techno-clubs', heading: 'Las mejores discotecas de techno en Praga', title: 'Las mejores discotecas de techno en Praga.'},
    {id: 'where-to-go', heading: 'Dónde salir de fiesta en Praga', title: 'Dónde salir de fiesta en Praga.'}
  ],

  media: ({lang}) => ({
    'Cross Club': figure('cross-club-interior', 844, 563, 'El bar del sótano de Cross Club en Praga, hecho con chatarra y piezas de maquinaria',
      'El bar del sótano de Cross Club, fotografiado en 2012. El club abrió en 2002 y se construyó con material de desguace, no según un proyecto de diseño. Foto: -crosspraha-, CC BY-SA 4.0.'),
    'Wenceslas Square': figure('wenceslas-square', 1200, 750, 'El Museo Nacional en lo alto de la plaza de Wenceslao, en Praga',
      'La plaza de Wenceslao frente al Museo Nacional. Duplex y varios clubes turísticos de Praga están a pocos minutos a pie. Foto: Muselsom, CC BY-SA 4.0.'),
    'Fatty M': articleVideoCollection({lang, label: 'Fatty M, Boiler Room Praga, 2018', description: 'Fatty M en la primera emisión de Boiler Room en la República Checa, en diciembre de 2018.', items: [articleVideoCard({youtubeId: 'WY_Th5nrI90', genre: 'Electronic', artist: 'Fatty M', title: 'Boiler Room Praga, 2018'})]}),
    'Eva Porating': articleVideoCollection({lang, label: 'Eva Porating, Boiler Room Praga, 2018', description: 'Eva Porating en la misma emisión de Boiler Room desde Praga que Fatty M, en diciembre de 2018.', items: [articleVideoCard({youtubeId: '6od6a-eiLUs', genre: 'Electronic', artist: 'Eva Porating', title: 'Boiler Room Praga, 2018'})]}),
    'Table: now': articleTable({
      headers: ['Club', 'Zona', 'Música y carácter', 'Ideal para'],
      rows: [
        ['Karlovy Lázně', 'Ciudad Vieja, junto al puente de Carlos', 'Cinco plantas con un género cada una, en un antiguo balneario, abierto desde 1999', 'Pasar toda la noche sin salir del edificio'],
        ['Duplex', 'Plaza de Wenceslao', 'Un club acristalado en una azotea con dos pistas y vistas a la ciudad', 'Artistas internacionales y un puesto en el Top 100 de DJ Mag'],
        ['Cross Club', 'Holešovice', 'Tres plantas de maquinaria industrial rescatada, abierto desde 2002', 'Drum and bass, techno y dub con historia autogestionada'],
        ['Ankali', 'Fuera del centro', 'Una sala de techno alrededor de un equipo Funktion-One a medida, abierta desde 2017', 'Del deep house al hard techno con un sonido serio']
      ].map(row => row.map(escapeHtml))
    })
  }),

  sources: [
    {href: 'https://en.wikipedia.org/wiki/Cross_Club', label: 'Wikipedia: Cross Club'},
    {href: 'https://www.atlasobscura.com/places/cross-club', label: 'Atlas Obscura: Cross Club'},
    {href: 'https://english.radio.cz/cross-club-independent-culture-centre-a-twist-8556609', label: 'Radio Prague International: Cross Club, an independent culture centre with a twist'},
    {href: 'https://www.karlovylazne.cz/about', label: 'Karlovy Lázně: about'},
    {href: 'https://djmag.com/top100clubs/2022/62/DupleX', label: 'DJ Mag: Top 100 Clubs 2022, DupleX'},
    {href: 'https://djmag.com/top100clubs/2025/41/duplex', label: 'DJ Mag: Top 100 Clubs 2025, DupleX'},
    {href: 'https://mixmag.net/read/edge-closure-prague-club-ankali-urges-support-secure-future-news', label: 'Mixmag: Prague club Ankali urges support to secure its future (2025)'},
    {href: 'https://ra.co/news/82717', label: 'Resident Advisor: Prague club Ankali at risk of closure (2025)'},
    {href: 'https://boilerroom.tv/session/boiler-room-prague/', label: 'Boiler Room: Boiler Room Prague (2018)'}
  ],

  bandcamp: {
    description: 'Dos de mis temas. Comprar uno apoya mi trabajo directamente.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks de thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 de thecatrave'}
    ]
  }
};
