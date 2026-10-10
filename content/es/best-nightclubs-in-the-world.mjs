// Spanish best nightclubs in the world guide. Structure, facts and media from
// the English page (best-nightclubs-in-the-world-draft.md); localised, not
// translated word for word.
//
// Keywords (keywords/es-best-nightclubs-in-the-world.json): wording from Google
// es-ES on 2026-10-10; no exact volumes (account without ad spend).
//
// The images are the English guide's, in img/best-nightclubs-in-the-world/,
// with translated captions.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, ownSetListening
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/best-nightclubs-in-the-world/${name}-1200.webp`,
  srcset: `img/best-nightclubs-in-the-world/${name}-320.webp 320w, img/best-nightclubs-in-the-world/${name}-1200.webp 1200w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

export default {
  lang: 'es',
  name: 'es-best-nightclubs-in-the-world',
  file: 'es/mejores-discotecas-del-mundo.html',
  draft: 'es/best-nightclubs-in-the-world-draft.md',
  canonical: 'https://thecatrave.com/es/mejores-discotecas-del-mundo',
  englishPath: '/best-nightclubs-in-the-world',
  ogImage: 'https://thecatrave.com/img/og/best-nightclubs-in-the-world.jpg',
  bodyClass: 'article-page best-nightclubs-in-the-world-page',
  minReadingMinutes: 6,

  title: 'Las mejores discotecas del mundo: 20 clubes de DJ Mag 2026',
  description: '20 clubes del Top 100 de DJ Mag 2026, de [UNVRS] y Berghain a GREENVALLEY, Club Space y WOMB: puestos, aforos, las más grandes y las sesiones que escuchar.',
  datePublished: '2026-10-10',
  dateModified: '2026-10-10',
  dateLabel: '10 de octubre de 2026',

  heroKicker: 'Guía de discotecas, mundo',
  heroTitle: 'Las mejores discotecas del mundo: 20 clubes del Top 100 de DJ Mag 2026',
  deck: 'Veinte clubes de cuatro continentes, de [UNVRS] y Berghain a GREENVALLEY, Club Space, Zouk y WOMB, con puestos, tamaños y las sesiones que escuchar.',
  answerLabel: 'Las mejores discotecas del mundo',
  breadcrumbName: 'Las mejores discotecas del mundo',

  answerSection: 'Respuesta',
  introSection: 'Introducción',
  introTitle: 'Qué significa «mejor» para un club.',
  faqSection: 'Preguntas frecuentes',
  faqLabel: 'Preguntas frecuentes',
  faqTitle: 'Preguntas frecuentes sobre las mejores discotecas del mundo.',

  sections: [
    {id: 'nightclubs', heading: 'Las mejores discotecas del mundo', tocLabel: 'Mejores discotecas', title: 'Las mejores discotecas del mundo'},
    {id: 'dance-clubs', heading: 'Las mejores discotecas del mundo por regiones', tocLabel: 'Por regiones', title: 'Las mejores discotecas del mundo por regiones', subsections: ['europe', 'north-america', 'south-america', 'asia']},
    {id: 'biggest', heading: 'Las discotecas más grandes del mundo', tocLabel: 'Las más grandes', title: 'Las discotecas más grandes del mundo'},
    {id: 'famous', heading: 'Discotecas famosas del mundo: las salas más longevas', tocLabel: 'Las más longevas', title: 'Discotecas famosas del mundo: las salas más longevas'},
    {id: 'best-techno-clubs', heading: 'Mejores clubes de techno del mundo', tocLabel: 'Clubes de techno', title: 'Mejores clubes de techno del mundo'},
    {id: 'exclusive', heading: 'Las discotecas más exclusivas del mundo', tocLabel: 'Exclusivas', title: 'Las discotecas más exclusivas del mundo'}
  ],

  media: ({lang}) => ({
    'Image: Studio 338': figure('studio-338-2020', 1200, 801, 'El edificio de Studio 338 en la península de Greenwich, con la estructura de un gasómetro al fondo', 'Studio 338 en la península de Greenwich, 1 de febrero de 2020. Foto: Ewan-M, CC BY-SA 4.0.'),
    'Image: Echostage': figure('echostage-2024', 1200, 856, 'El público de Echostage, en Washington D. C., frente a un escenario iluminado y paredes LED', 'Echostage, Washington D. C., 7 de junio de 2024. Foto: APK, CC BY 4.0.'),
    'Image: Club Space': figure('club-space-2019', 1200, 801, 'Público y bolas de espejos bajo un dosel de plantas en la Terrace de Club Space, en Miami', 'La Terrace de Club Space, Miami, 2 de junio de 2019. Foto: Lauren Maurell, CC BY-SA 4.0.'),
    'Image: Hakkasan': figure('hakkasan-2016', 1200, 900, 'Hakkasan, en Las Vegas, una pista de baile llena bajo luces rosas con la cabina de DJ a la derecha', 'Hakkasan, Las Vegas, 7 de octubre de 2016. Foto: David Jones, CC BY 2.0.'),
    'Image: D-Edge': figure('d-edge-2015', 960, 640, 'Un DJ en los platos de D-Edge, en São Paulo, con una pancarta que dice Moving en la mesa de mezclas', 'Un DJ en D-Edge, São Paulo, 15 de octubre de 2015. Foto: LucasArr, CC BY-SA 4.0.'),
    'Embed: Hi Ibiza': articleVideoCollection({lang, label: 'Grabado en Hï Ibiza', description: 'Una sesión de 2022 desde el Hï Garden, publicada por DJ Mag.', items: [
      articleVideoCard({youtubeId: 'w8xQnshEIKg', genre: 'Hï Ibiza, 2022', artist: 'DJ Mag', title: 'Layla Benitez desde el Hï Ibiza Garden'})
    ]}),
    'Embed: Club Space': articleVideoCollection({lang, label: 'Grabado en Club Space', description: 'Tres sesiones de 2023 del canal del propio club: Mochakk, Carl Cox y Mau P.', items: [
      articleVideoCard({youtubeId: '4iKfR3UBDpQ', genre: 'Club Space, 2023', artist: 'Club Space', title: 'Mochakk, set al amanecer en Club Space Miami'}),
      articleVideoCard({youtubeId: 'CTvkbzE4Jus', genre: 'Club Space, 2023', artist: 'Club Space', title: 'Carl Cox, set al amanecer en Club Space Miami'}),
      articleVideoCard({youtubeId: '0mlnJ7Ic7TM', genre: 'Club Space, 2023', artist: 'Club Space', title: 'Mau P en Club Space Miami'})
    ]}),
    'Embed: D-Edge': articleVideoCollection({lang, label: 'Grabado en D-Edge', description: 'DJ Mag Live presenta D-Edge, una sesión de 2017 desde São Paulo.', items: [
      articleVideoCard({youtubeId: 'PQtqN-azfM8', genre: 'D-Edge, 2017', artist: 'DJ Mag', title: 'DJ Mag Live presenta D-Edge'})
    ]}),
    'Embed: thecatrave mix 1': ownSetListening(0, lang),
    'Table: Ranking': articleTable({
      headers: ["Puesto", "Club", "Ciudad", "Aforo"],
      rows: [["1", "[UNVRS]", "Ibiza, España", "4.000"], ["2", "GREENVALLEY", "Camboriú, Brasil", "10.000"], ["3", "Ushuaïa Ibiza", "Ibiza, España", "7.866"], ["4", "Hï Ibiza", "Ibiza, España", "5.633"], ["5", "Savaya", "Uluwatu, Bali", "2.500"], ["6", "Echostage", "Washington D. C., EE. UU.", "3.000"], ["7", "Laroc Club", "Valinhos, Brasil", "5.000"], ["8", "FABRIK", "Región de Madrid, España", "6.000"], ["9", "Illuzion Phuket", "Phuket, Tailandia", "5.000"], ["10", "Surreal Park", "Camboriú, Brasil", "20.000"], ["11", "Bootshaus", "Colonia, Alemania", "2.000"], ["13", "fabric", "Londres, Reino Unido", "No consta"], ["14", "Club Space", "Miami, EE. UU.", "1.100"], ["17", "Zouk Singapore", "Singapur", "2.900"], ["20", "Studio 338", "Londres, Reino Unido", "2.400"], ["21", "Berghain", "Berlín, Alemania", "1.500"], ["35", "D-Edge", "São Paulo, Brasil", "1.000"], ["44", "Academy LA", "Los Ángeles, EE. UU.", "1.000"], ["46", "Warung Beach Club", "Itajaí, Brasil", "2.500"], ["88", "WOMB", "Tokio, Japón", "1.000"]].map(row => row.map(escapeHtml)),
      label: "Los 20 clubes de esta guía"
    }),
    'Table: Mayores': articleTable({
      headers: ["Club", "Ciudad", "Aforo declarado"],
      rows: [["Surreal Park", "Camboriú, Brasil", "20.000"], ["Drumsheds", "Londres, Reino Unido", "15.000"], ["GREENVALLEY", "Camboriú, Brasil", "10.000"], ["The Warehouse Project", "Mánchester, Reino Unido", "10.000"], ["Ushuaïa Ibiza", "Ibiza, España", "7.866"], ["FABRIK", "Región de Madrid, España", "6.000"], ["Hï Ibiza", "Ibiza, España", "5.633"], ["Laroc Club", "Valinhos, Brasil", "5.000"], ["Illuzion Phuket", "Phuket, Tailandia", "5.000"]].map(row => row.map(escapeHtml)),
      label: "Las mayores discotecas por aforo declarado"
    }),
    'Table: Veteranas': articleTable({
      headers: ["Club", "Ciudad", "Abierto desde"],
      rows: [["Pacha Ibiza", "Ibiza, España", "1973"], ["Amnesia", "Ibiza, España", "1976, 50.ª temporada en 2026"], ["Zouk Singapore", "Singapur", "Principios de los noventa"], ["Tresor", "Berlín, Alemania", "1991"], ["Warung Beach Club", "Itajaí, Brasil", "2002"], ["D-Edge", "São Paulo, Brasil", "2003"], ["GREENVALLEY", "Camboriú, Brasil", "2007"], ["Club Space", "Miami, EE. UU.", "En su 25.º año"], ["Ministry of Sound", "Londres, Reino Unido", "En su 35.º año"]].map(row => row.map(escapeHtml)),
      label: "Los clubes más longevos"
    }),
    'Table: Techno': articleTable({
      headers: ["Club", "Qué lo señala como sala de techno"],
      rows: [["Berghain, Berlín", "Sala principal y Panorama Bar; la guía de Berghain tiene la política de puerta"], ["Illuzion Phuket", "Shelter, la sala de techno del piso de arriba"], ["WOMB, Tokio", "25.º aniversario en 2025 con Sven Väth, Richie Hawtin, Laurent Garnier y Sasha"]].map(row => row.map(escapeHtml)),
      label: "Salas de techno de esta página"
    }),
  }),

  sources: [
    {href: 'https://djmag.com/top100clubs', label: 'DJ Mag: Top 100 Clubs, lista de 2026 y perfil de cada club (en inglés)'},
    {href: 'https://djmag.com/features/dj-mag-top-100-clubs-2026-record-breaking-numbers-vote-our-annual-poll-of-worlds-best', label: 'DJ Mag: resultados de la votación de 2026 (en inglés)'},
    {href: 'https://www.nightlifeinternational.org/en/the-world-s-100-best-clubs-2026', label: 'International Nightlife Association: The World\'s 100 Best Clubs, fechas de votación y jurado, y número de nominados (en inglés)'}
  ],
  sourcesNote: 'Los datos de Drumsheds, The Warehouse Project, Bootshaus, Pacha, Amnesia, Tresor y Ministry of Sound salen de las fuentes de la guía de las mejores discotecas de Europa.',

  bandcamp: {
    description: 'Lejos de la pista de baile, la música que hago yo. Comprar un tema apoya directamente mi trabajo.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 de thecatrave'},
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks de thecatrave'}
    ]
  }
};
