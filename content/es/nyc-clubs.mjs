// Spanish NYC clubs guide. Structure, facts and media from the English page
// (nyc-clubs-draft.md, build-nyc-clubs-article.mjs). Keywords from Keyword
// Planner (Spain; Mexico, Argentina, Colombia, Chile; 2026-11-12), in
// keywords/es-nyc-clubs.json. The images are the English guide's, with
// translated captions.

import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, ownSetListening
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/nyc-clubs/${name}-${width}.webp`,
  srcset: `img/nyc-clubs/${name}-320.webp 320w, img/nyc-clubs/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

export default {
  lang: 'es',
  name: 'es-nyc-clubs',
  file: 'es/discotecas-nueva-york.html',
  draft: 'es/nyc-clubs-draft.md',
  canonical: 'https://thecatrave.com/es/discotecas-nueva-york',
  englishPath: '/best-clubs-in-nyc',
  ogImage: 'https://thecatrave.com/img/og/nyc-clubs.jpg',
  bodyClass: 'article-page nyc-clubs-page',
  minReadingMinutes: 9,

  title: 'Discotecas Nueva York: house y techno, antes y ahora',
  description: 'Las mejores discotecas de Nueva York para house y techno hoy: Nowadays, Basement, Public Records, Good Room y Elsewhere, y la historia del Loft a Output.',
  datePublished: '2026-11-12',
  dateModified: '2026-11-12',
  dateLabel: '12 de noviembre de 2026',

  heroKicker: 'Discotecas Nueva York',
  heroTitle: 'Las mejores discotecas de Nueva York, del Paradise Garage a Nowadays',
  deck: 'La ciudad que inventó el club moderno, exigió licencia para bailar durante noventa años y llevó sus mejores salas a Brooklyn y Queens.',
  answerLabel: 'Las mejores discotecas de Nueva York',
  breadcrumbName: 'Las mejores discotecas de Nueva York',

  answerSection: 'Respuesta',
  introSection: 'Introducción',
  introTitle: 'Clubes construidos alrededor del sonido.',
  faqSection: 'FAQ',
  faqLabel: 'Preguntas frecuentes',
  faqTitle: 'Preguntas frecuentes sobre las discotecas de Nueva York.',

  sections: [
    {id: 'loft-and-garage', heading: 'El Loft, el Paradise Garage y Studio 54', title: 'El Loft, el Paradise Garage y Studio 54.'},
    {id: 'eighties-nineties', heading: 'De Danceteria a Twilo: los años ochenta y noventa', title: 'De Danceteria a Twilo: los años ochenta y noventa.'},
    {id: 'brooklyn', heading: 'Brooklyn toma el relevo', title: 'Brooklyn toma el relevo.'},
    {id: 'best-clubs-now', heading: 'Las mejores discotecas de Nueva York ahora', title: 'Las mejores discotecas de Nueva York ahora.'},
    {id: 'techno-clubs', heading: 'Las mejores discotecas de techno en Nueva York', title: 'Las mejores discotecas de techno en Nueva York.'},
    {id: 'house-clubs', heading: 'Discotecas de house en Nueva York', title: 'Discotecas de house en Nueva York.'},
    {id: 'where-to-go', heading: 'Dónde salir de fiesta en Nueva York', title: 'Dónde salir de fiesta en Nueva York.'}
  ],

  media: ({lang}) => ({
    'Studio 54': figure('studio-54-entrance', 800, 1203, 'La marquesina y las puertas del teatro Studio 54 en West 54th Street, de noche',
      'La entrada de Studio 54 en West 54th Street, teatro de Broadway desde 1998. El club funcionó aquí de 1977 a 1980. Foto: David Goehring, CC BY 2.0.'),
    'Limelight': figure('limelight-church', 1200, 900, 'La iglesia neogótica de ladrillo en la Sixth Avenue esquina con West 20th Street, vista desde la calle',
      'La antigua Church of the Holy Communion, en la Sixth Avenue esquina con West 20th Street, que en noviembre de 1983 se convirtió en el Limelight. Foto: Beyond My Ken, CC BY-SA 4.0.'),
    'Knockdown Center': figure('knockdown-center', 1080, 1080, 'Los edificios de ladrillo y la alta chimenea del Knockdown Center en Maspeth bajo un cielo gris',
      'El Knockdown Center en Maspeth, Queens, una antigua fábrica de vidrio y puertas. Basement está en los túneles de debajo. Foto: Kazuhisa Otsubo, CC BY 2.0.'),
    'Louie Vega Output': articleVideoCollection({lang, label: 'Louie Vega, Mixmag Live at Output, 2016', description: 'Louie Vega toca para Mixmag en Output, en Williamsburg, en 2016, tres años antes de que cerrara el club.', items: [articleVideoCard({youtubeId: 'ss0aadTtAhQ', genre: 'House', artist: 'Louie Vega', title: 'Mixmag Live at Output, 2016'})]}),
    'Mister Saturday Night Boiler Room': articleVideoCollection({lang, label: 'Mister Saturday Night, Boiler Room, episode 002, 2015', description: 'La fiesta de Eamon Harkin y Justin Carter con Boiler Room en 2015, el año en que abrió Nowadays.', items: [articleVideoCard({youtubeId: 'mG3kGYFyw-Q', genre: 'House', artist: 'Mister Saturday Night', title: 'Boiler Room, episode 002, 2015'})]}),
    'Louie Vega Lot Radio': articleVideoCollection({lang, label: 'Louie Vega, The Lot Radio, 2018', description: 'Louie Vega en The Lot Radio en diciembre de 2018.', items: [articleVideoCard({youtubeId: '5EC4BynJ1MA', genre: 'House', artist: 'Louie Vega', title: 'The Lot Radio, 2018'})]}),
    'thecatrave mix': ownSetListening(0, lang, 'Treinta temas entre garage, bass music, techno y rave, para el final largo de una noche en Nueva York. Mi propia mezcla.'),
    'Table: now': articleTable({
      headers: ['Club', 'Zona', 'Música y carácter', 'Ideal para'],
      rows: [
        ['Nowadays', 'Ridgewood, Queens', 'House y techno en un equipo SBS Slammer, sin móviles en la pista, con espacio exterior', 'Mister Sunday y los fines de semana Nonstop'],
        ['Basement', 'Maspeth, Queens', 'Techno en túneles de ladrillo bajo el Knockdown Center, abierto desde 2019', 'Techno duro y una puerta estricta'],
        ['Public Records', 'Gowanus, Brooklyn', 'Una sala de club de alta fidelidad en la antigua sede de la ASPCA, con restaurante y bar', 'Cenar y bailar en el mismo edificio'],
        ['Good Room', 'Greenpoint, Brooklyn', 'Una sala principal orientada a la cabina y el Bad Room, más pequeño', 'Fiestas de house y disco'],
        ['Elsewhere', 'East Williamsburg, Brooklyn', 'Una sala para 700 personas, una sala más pequeña y una azotea, abierto desde 2017', 'Carteles más grandes y fiestas hasta el amanecer'],
        ['Paragon', 'Bed-Stuy, Brooklyn', 'Techno con el primer techno estadounidense como modelo, reabierto en 2025 con Kevin Saunderson', 'Techno de Detroit y Nueva York'],
        ['Signal', 'Williamsburg, Brooklyn', 'Un almacén para 210 personas con un equipo de d&b audiotechnik, abierto desde 2025', 'Una sala pequeña con sonido serio'],
        ['House of Yes', 'Bushwick, Brooklyn', 'Un club centrado en la performance, abierto desde 2015', 'Noches de disfraces y teatro']
      ].map(row => row.map(escapeHtml))
    })
  }),

  sources: [
    {href: 'https://en.wikipedia.org/wiki/The_Loft_(New_York_City)', label: 'Wikipedia: The Loft (New York City)'},
    {href: 'https://en.wikipedia.org/wiki/Paradise_Garage', label: 'Wikipedia: Paradise Garage'},
    {href: 'https://en.wikipedia.org/wiki/Studio_54', label: 'Wikipedia: Studio 54'},
    {href: 'https://en.wikipedia.org/wiki/Limelight_(nightclub)', label: 'Wikipedia: The Limelight'},
    {href: 'https://en.wikipedia.org/wiki/New_York_City_Cabaret_Law', label: 'Wikipedia: New York City Cabaret Law'},
    {href: 'https://pitchfork.com/news/brooklyn-dance-club-output-closing/', label: 'Pitchfork: Brooklyn dance club Output closing'},
    {href: 'https://djmag.com/features/mister-saturday-night-15-years-new-york-party-nowadays-eamon-harkin-justin-carter', label: 'DJ Mag: Mister Saturday Night, 15 years of a New York party'},
    {href: 'https://gothamist.com/arts-entertainment/nycs-best-techno-club-vibe-checks-you-at-the-door-so-i-tried-to-get-in', label: 'Gothamist: NYC\'s best techno club vibe checks you at the door (2023)'},
    {href: 'https://www.timeout.com/newyork/nightlife/best-clubs-in-nyc', label: 'Time Out: 12 best clubs in NYC for techno, house and more'},
    {href: 'https://nowadays.nyc/about', label: 'Nowadays: hours and location'},
    {href: 'https://www.elsewhere.club/about', label: 'Elsewhere: about'},
    {href: 'https://publicrecords.nyc', label: 'Public Records'},
    {href: 'https://djmag.com/news/new-york-club-paragon-reopen-thanks-generous-lifeline-kevin-saunderson', label: 'DJ Mag: New York club Paragon to reopen thanks to a lifeline from Kevin Saunderson (2025)'},
    {href: 'https://djmag.com/new-brooklyn-club-signal-opens', label: 'DJ Mag: New Brooklyn club Signal opens (2025)'},
    {href: 'https://www.fortgreenepark.org/all-programs/soul-summit', label: 'Fort Greene Park Conservancy: Soul Summit'},
    {href: 'https://dannykrivit.net/718-sessions', label: 'Danny Krivit: 718 Sessions'}
  ],

  bandcamp: {
    description: 'Dos de mis temas. Comprar uno apoya mi trabajo directamente.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks de thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 de thecatrave'}
    ]
  }
};
