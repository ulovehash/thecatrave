// Spanish Ultra guide. Structure and facts from the English page
// (ultra-draft.md) and the French module.
//
// es-ES SERP and People also ask read in Chrome on 2026-10-10 ("ultra music
// festival", "ultra music festival 2027"): PAA asks where Ultra is held, what
// the ticket costs, where Ultra Europe is and when Ultra Split 2027 is; the
// SERP shows Ultra Europe 9-11 July 2027. The images are the English guide's,
// in img/ultra/, with translated captions.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, articleYoutubeEmbed, ownTrackListening
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption, className = 'wide-archive-image') => articleFigure({
  src: `img/ultra/${name}-${width}.webp`,
  srcset: `img/ultra/${name}-320.webp 320w, img/ultra/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className
});

export default {
  lang: 'es',
  name: 'es-ultra',
  file: 'es/ultra-music-festival.html',
  draft: 'es/ultra-draft.md',
  canonical: 'https://thecatrave.com/es/ultra-music-festival',
  englishPath: '/ultra-music-festival',
  ogImage: 'https://thecatrave.com/img/og/ultra.jpg',
  bodyClass: 'article-page ultra-page',

  title: 'Ultra Music Festival 2027: fechas, lugar, edad mínima y público',
  description: 'Ultra Music Festival 2027 es del 26 al 28 de marzo en Bayfront Park, en Miami. Desde los 18 años, unas 55 000 personas al día y 165 000 entradas en el fin de semana.',
  datePublished: '2026-10-10',
  dateModified: '2026-10-10',
  dateLabel: '10 de octubre de 2026',

  heroKicker: 'Ultra Music Festival',
  heroTitle: 'Ultra Music Festival Miami',
  deck: 'Ultra vuelve a Bayfront Park del 26 al 28 de marzo de 2027, al final de la Miami Music Week. Dónde es, quién puede entrar y qué suena lejos del Main Stage.',
  answerLabel: 'Qué es Ultra Music Festival',
  breadcrumbName: 'Ultra Music Festival',

  answerSection: 'Respuesta',
  introSection: 'Introducción',
  introTitle: 'El festival que cierra la Miami Music Week.',
  faqSection: 'Preguntas frecuentes',
  faqLabel: 'Preguntas frecuentes',
  faqTitle: 'Preguntas frecuentes sobre Ultra Music Festival.',
  ownSetAfter: 'age',

  sections: [
    {id: 'where', heading: 'Dónde es el Ultra Music Festival', title: 'Dónde es el Ultra Music Festival.', subsections: ['ultra-2027']},
    {id: 'age', heading: 'Qué edad hace falta para ir a Ultra', title: 'Qué edad hace falta para ir a Ultra.'},
    {id: 'how-big', heading: 'Cuánta gente va a Ultra', title: 'Cuánta gente va a Ultra.'},
    {id: 'history', heading: 'Breve historia y de quién es Ultra', title: 'Breve historia y de quién es Ultra.'},
    {id: 'worldwide', heading: 'Ultra por el mundo', title: 'Ultra por el mundo.'},
    {id: 'ultra-europe', heading: 'Ultra Europe, en Split (Croacia)', title: 'Ultra Europe, en Split (Croacia).'},
    {id: 'famous', heading: 'Por qué Ultra se hizo tan famoso', title: 'Por qué Ultra se hizo tan famoso.'},
    {id: 'music', heading: 'Qué suena de verdad en Ultra', title: 'Qué suena de verdad en Ultra.', kicker: 'La música'},
    {id: 'from-home', heading: 'Ver Ultra desde casa', title: 'Ver Ultra desde casa.'}
  ],

  media: ({lang}) => ({
    // The owner's own music inside the text, as on the other festival guides.
    'thecatrave degeneration': ownTrackListening('degeneration', 'Lejos de los grandes escenarios: la voz de Mylène Farmer sobre breaks, entre dubstep y UK garage. Mi propio remix.', lang),
    'Bayfront Park, 2014': figure('bayfront-2014', 1200, 900,
      'Bayfront Park, en el centro de Miami, visto desde arriba durante Ultra 2014, con el Main Stage y las carpas junto a la marina y la bahía de Biscayne',
      'Bayfront Park visto desde arriba durante el festival de 2014, con el Main Stage junto a la marina en la bahía de Biscayne. Foto: Pietro, CC BY-SA 3.0.'),
    'Panoramic View of Bayfront Park': figure('bayfront-2013', 1200, 795,
      'Un panorama ojo de pez de Bayfront Park montado para Ultra 2013, con las estructuras de los escenarios y las carpas entre las torres de Miami y la bahía',
      'Bayfront Park el jueves anterior al segundo fin de semana de 2013, el único año en que Ultra duró dos fines de semana. Foto: Robert Giordano, CC BY-SA 3.0.'),
    'Ultra Music Festival 20110326': figure('bicentennial-2011', 1200, 666,
      'Vista aérea de Ultra en Bicentennial Park en 2011, con una multitud densa ante el Main Stage y las torres del centro de Miami detrás',
      'Ultra en Bicentennial Park en 2011, su primer año de tres días y el último antes de volver a Bayfront Park. Foto: Averette, CC BY 3.0.'),
    'Split, Ultra Europe 2015': figure('poljud-2015', 1200, 900,
      'Una multitud a plena luz del día en el césped del estadio de Poljud, en Split, durante Ultra Europe 2015, bajo el techo en arco del estadio',
      'El público del Main Stage en el césped del estadio de Poljud, en Split, durante Ultra Europe 2015. Foto: Shadster, CC BY-SA 4.0.'),
    'Swedish House Mafia on Platform': figure('swedish-house-mafia-2018', 1200, 1008,
      'Las siluetas de Swedish House Mafia sobre una plataforma elevada, entre luz azul y humo por encima de la multitud, en Ultra Miami 2018',
      'Swedish House Mafia sobre su plataforma en Ultra 2018, cerrando el festival en su primera aparición en directo como grupo desde 2013. Foto: HollywoodAdam78, CC BY-SA 4.0.'),
    'EYMJizj3Qq8': articleYoutubeEmbed({
      src: 'https://www.youtube-nocookie.com/embed/EYMJizj3Qq8',
      title: 'Pendulum / Knife Party, set de cierre en Ultra 2016, en el canal de YouTube de Pendulum'
    }),
    'V2VmcuOEqEg': articleVideoCollection({
      lang,
      label: 'Los sets más vistos de Ultra',
      description: 'Dos sets del Main Stage: Skrillex en 2015, con más de 94 millones de visualizaciones en su propio canal, y Hardwell en 2013, con más de 35 millones en el suyo.',
      items: [
        articleVideoCard({youtubeId: 'V2VmcuOEqEg', genre: 'Main Stage, 2015', artist: 'Skrillex', title: 'En directo en Ultra Music Festival 2015'}),
        articleVideoCard({youtubeId: 'jXOgYxUf6Ts', genre: 'Main Stage, 2013', artist: 'Hardwell', title: 'En directo en Ultra Music Festival 2013'})
      ]
    }),
    // Summed admissions across each multi-day edition, not unique visitors or
    // ticket counts, as on the English page. Typed, not computed.
    'Table: asistencia': articleTable({
      headers: ['Año', 'Asistencia', 'Dónde y qué pasó'],
      rows: [
        ['1999', 'unas 10 000', 'Collins Park, Miami Beach: un día en la playa'],
        ['2001', '21 000', 'Primer año en Bayfront Park'],
        ['2006', '48 000', 'Primer año en Bicentennial Park'],
        ['2010', 'más de 100 000 (cifra de Ultra)', 'Primera vez con entradas agotadas, dos días; la tabla de Wikipedia da 93 000'],
        ['2011', '100 000', 'Primera edición de tres días'],
        ['2013', '330 000', 'Dos fines de semana, por los quince años'],
        ['2014 a 2018', '165 000 entradas', 'Bayfront Park, acumuladas a lo largo de tres días'],
        ['2019', '170 000', 'Virginia Key, su único año allí'],
        ['2020 y 2021', 'ninguna', 'Cancelado por la pandemia'],
        ['2022 a 2026', '165 000 entradas', 'Acumuladas a lo largo de tres días; público de 100 países en 2026']
      ].map(row => row.map(escapeHtml))
    })
  }),

  // The English page's sources, URL for URL, with translated labels.
  sources: [
    {href: 'https://ultramusicfestival.com/ticketing-terms-and-conditions-2027', label: 'Ultra Music Festival: condiciones de venta de entradas 2027 (en inglés)'},
    {href: 'https://ultramusicfestival.com/', label: 'Ultra Music Festival: fechas oficiales de 2027 y estado actual de la venta de entradas'},
    {href: 'https://search.sunbiz.org/Inquiry/CorporationSearch/SearchResults?InquiryDirectionType=PreviousRecord&InquiryType=EntityName&SearchNameOrder=EVENTENTS+L120000583930', label: 'Registro mercantil de Florida (Division of Corporations): Event Entertainment Group, Inc.'},
    {href: 'https://law.justia.com/cases/florida/third-district-court-of-appeal/2017/3d16-0338.html', label: 'Tribunal de apelación de Florida (Third District Court of Appeal): Omes v. Ultra Enterprises, Inc.'},
    {href: 'https://www.miamiherald.com/news/local/community/miami-dade/article315519662.html', label: 'Miami Herald: Miami prolonga Ultra en Bayfront Park'},
    {href: 'https://djmag.com/news/watch-swedish-house-mafias-set-ultra-miami-2026', label: 'DJ Mag: el set de Swedish House Mafia en Ultra Miami 2026'},
    {href: 'https://www.miaminewtimes.com/music/best-ultra-music-festival-performances-of-all-time-22695840/', label: 'Miami New Times: las mejores actuaciones de la historia de Ultra Music Festival'},
    {href: 'https://www.miaminewtimes.com/music/ultra-music-festival-facing-10-million-lawsuit-from-injured-security-guard-erica-mack-6442197', label: 'Miami New Times: la demanda de 10 millones de dólares de la agente de seguridad herida Erica Mack'},
    {href: 'https://www.electricfeels.com/2026/04/01/ultra-music-festival-closes-out-triumphant-2026-edition-as-miami-dade-county-proclaims-march-28-as-ultra-music-festival-day/', label: 'Electric Feels: Ultra Music Festival cierra su edición de 2026'},
    {href: 'https://ultraeurope.com/worldwide/ultra-europe-concludes-ninth-edition-in-split-croatia-with-attendees-from-140-countries/', label: 'Ultra Europe: novena edición en Split con público de más de 140 países'},
    {href: 'https://ultraeurope.com/tickets/festival', label: 'Ultra Europe: fechas oficiales y entradas de 2027'},
    {href: 'https://www.croatiaweek.com/ultra-europe-2026-split-calvin-harris/', label: 'Croatia Week: Calvin Harris, cabeza de cartel de Ultra Europe 2026 en Split'}
  ],

  bandcamp: {
    description: 'Lo que hago yo mismo es breakbeat, lejos de Bayfront Park. Comprar un tema apoya directamente mi trabajo.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks de thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 de thecatrave'}
    ]
  }
};
