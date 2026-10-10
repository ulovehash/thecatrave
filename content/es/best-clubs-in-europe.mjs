// Spanish best clubs in Europe guide. Structure, facts and media from the
// English page (best-clubs-in-europe-draft.md); localised, not translated word
// for word.
//
// Keywords (keywords/es-best-clubs-in-europe.json): wording from Google es-ES
// on 2026-10-10; no exact volumes (account without ad spend).
//
// The images are the English guide's, in img/best-clubs-in-europe/, with
// translated captions.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, ownSetListening
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/best-clubs-in-europe/${name}-1200.webp`,
  srcset: `img/best-clubs-in-europe/${name}-320.webp 320w, img/best-clubs-in-europe/${name}-1200.webp 1200w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

export default {
  lang: 'es',
  name: 'es-best-clubs-in-europe',
  file: 'es/mejores-discotecas-de-europa.html',
  draft: 'es/best-clubs-in-europe-draft.md',
  canonical: 'https://thecatrave.com/es/mejores-discotecas-de-europa',
  englishPath: '/best-clubs-in-europe',
  ogImage: 'https://thecatrave.com/img/og/best-clubs-in-europe.jpg',
  bodyClass: 'article-page best-clubs-in-europe-page',
  minReadingMinutes: 6,

  title: 'Las mejores discotecas de Europa: 23 clubes por países',
  description: '23 discotecas europeas en diez países, de Berghain y Tresor a Pacha y Cavo Paradiso: qué es cada sala, los puestos de DJ Mag 2026 y las sesiones que escuchar.',
  datePublished: '2026-10-10',
  dateModified: '2026-10-10',
  dateLabel: '10 de octubre de 2026',

  heroKicker: 'Guía de discotecas, Europa',
  heroTitle: 'Las mejores discotecas de Europa: 23 clubes que merecen el viaje',
  deck: 'Veintitrés clubes europeos de diez países, de Berghain y Tresor a Pacha y Cavo Paradiso, con lo que es cada sala y las sesiones que escuchar.',
  answerLabel: 'Las mejores discotecas de Europa',
  breadcrumbName: 'Las mejores discotecas de Europa',

  answerSection: 'Respuesta',
  introSection: 'Introducción',
  introTitle: 'Elegir entre 23 salas.',
  faqSection: 'Preguntas frecuentes',
  faqLabel: 'Preguntas frecuentes',
  faqTitle: 'Preguntas frecuentes sobre las mejores discotecas de Europa.',

  sections: [
    {id: 'nightclubs', heading: 'Las mejores discotecas de Europa', tocLabel: 'Mejores discotecas', title: 'Las mejores discotecas de Europa'},
    {id: 'dance-clubs', heading: 'Las mejores discotecas de Europa por países', tocLabel: 'Por países', title: 'Las mejores discotecas de Europa por países', subsections: ['germany', 'spain', 'uk', 'italy', 'france', 'portugal', 'greece', 'croatia', 'netherlands', 'poland']},
    {id: 'top-clubs', heading: 'Las mayores discotecas de Europa por tamaño', tocLabel: 'Por tamaño', title: 'Las mayores discotecas de Europa por tamaño'},
    {id: 'europe-clubs', heading: 'Discotecas de Europa: entrada, móviles y edad', tocLabel: 'Entrada y móviles', title: 'Discotecas de Europa: entrada, móviles y edad'},
    {id: 'dj-mag', heading: 'DJ Mag Top 100 Clubs 2026: qué clubes europeos aparecen', tocLabel: 'DJ Mag Top 100', title: 'DJ Mag Top 100 Clubs 2026: qué clubes europeos aparecen'},
    {id: 'best-techno-clubs', heading: 'Mejores clubes de techno de Europa', tocLabel: 'Clubes de techno', title: 'Mejores clubes de techno de Europa'}
  ],

  media: ({lang}) => ({
    'Image: Tresor': figure('tresor-2008', 1200, 981, "La pared azul iluminada, de noche, del antiguo edificio de la central eléctrica de Berlín que alberga el club Tresor", "El edificio que alberga Tresor en Berlín, 4 de septiembre de 2008. Foto: Boca Dorada, CC BY-SA 2.0."),
    'Image: Hi Ibiza': figure('hi-ibiza-2022', 1200, 800, "Un DJ pinchando en el Club Room de Hï Ibiza con el público levantando las luces de los móviles", "El Club Room de Hï Ibiza, 12 de julio de 2022. Foto: Juliamgmt, CC BY-SA 4.0."),
    'Image: Amnesia': figure('amnesia-2013', 1200, 900, "Sven Väth en los platos de Amnesia, en Ibiza, con el público frente a la cabina", "Sven Väth en su fiesta Cocoon en Amnesia, Ibiza, septiembre de 2013. Foto: Nsf12, CC BY-SA 3.0."),
    'Image: Tenax': figure('tenax-2016', 1200, 800, "El público apretado dentro de Tenax, en Florencia, con Fatboy Slim pinchando", "Dentro de Tenax, en Florencia, con Fatboy Slim pinchando, 12 de marzo de 2016. Foto: Luca Bergami, CC BY-SA 4.0."),
    'Image: Rex Club': figure('rex-club-2011', 1200, 800, "Nicolas Jaar tocando en directo en el Rex Club de París, entre humo y luz de escenario", "Nicolas Jaar en directo en el Rex Club, París, abril de 2011. Foto: Pascal Montary, CC BY 2.0."),
    'Image: Cavo Paradiso': figure('cavo-paradiso-2016', 1200, 900, "Cavo Paradiso en su acantilado sobre el mar, en Mykonos, visto desde el agua", "Cavo Paradiso, Mykonos, 19 de junio de 2016. Foto: Zigomitros Athanasios, CC BY-SA 4.0."),
    'Image: Revelin': figure('revelin-2010', 1200, 797, "La fortaleza de Revelin y sus alrededores, en Dubrovnik, vista desde el puerto viejo", "La fortaleza de Revelin, Dubrovnik, 29 de marzo de 2010. Foto: LBM1948, CC BY-SA 4.0."),
    'Embed: Spain': articleVideoCollection({lang, label: 'Grabado en Hï y Pacha', description: 'Un restream de CamelPhat de 2019 presentado por Hï Ibiza y la noche Cocoon de Sven Väth en Pacha en 2018.', items: [
      articleVideoCard({youtubeId: '8IsNzsE_8v8', genre: 'Hï Ibiza, 2019', artist: 'DJ Mag', title: 'Hï Ibiza presenta a CamelPhat, restream de 2019'}),
      articleVideoCard({youtubeId: 'y37cDo_CTu4', genre: 'Cocoon, Pacha 2018', artist: 'Mixmag', title: 'Sven Väth. Cocoon. Pacha 2018.'})
    ]}),
    'Embed: UK': articleVideoCollection({lang, label: 'fabric y Ministry of Sound', description: 'Josh Caffe en fabric para Beatport y una noche de Ministry of Sound para DJ Mag.', items: [
      articleVideoCard({youtubeId: 'pxKVT8F0BGE', genre: 'fabric London Unlocked', artist: 'Beatport', title: 'Josh Caffe en fabric'}),
      articleVideoCard({youtubeId: '7r68Nx38hlY', genre: 'Ministry of Sound', artist: 'DJ Mag', title: 'Dance For Stevie en Ministry of Sound'})
    ]}),
    'Embed: Techno': articleVideoCollection({lang, label: 'Una guía de escucha de Tresor', description: 'Una guía de radio de NTS con los clásicos de Tresor, no grabada en el club.', items: [
      articleVideoCard({youtubeId: 'OcU74Xc6ko8', genre: 'Clásicos de Tresor', artist: 'NTS', title: 'Tresor Club Techno and Electro Classics'})
    ]}),
    'Embed: thecatrave mix 1': ownSetListening(0, lang),
    'Table: Clubes': articleTable({
      headers: ["Club", "Ciudad", "País", "Por qué está aquí"],
      rows: [["Berghain", "Berlín", "Alemania", "Antigua central eléctrica, abierta como club desde 2004"], ["Tresor", "Berlín", "Alemania", "Abrió en 1991 en la cámara acorazada de unos grandes almacenes"], ["Bootshaus", "Colonia", "Alemania", "N.º 11 de DJ Mag, tres salas junto al Rin"], ["Open Ground", "Wuppertal", "Alemania", "800 personas en un antiguo búnker, novedad en DJ Mag"], ["Hï Ibiza", "Ibiza", "España", "N.º 4 de DJ Mag, cuatro veces ganador"], ["[UNVRS]", "Ibiza", "España", "N.º 1 de DJ Mag, abrió en mayo de 2025"], ["Pacha Ibiza", "Ibiza", "España", "Abierta desde 1973"], ["Amnesia", "Ibiza", "España", "Abierta desde 1976, 50.º año en 2026"], ["DC-10", "Ibiza", "España", "Casa de Circoloco desde 1999"], ["FABRIK", "Región de Madrid", "España", "N.º 8 de DJ Mag, siete zonas"], ["fabric", "Londres", "Reino Unido", "Tres salas, reabrió en 2016"], ["The Warehouse Project", "Mánchester", "Reino Unido", "N.º 15 de DJ Mag, una temporada sin móviles"], ["Ministry of Sound", "Londres", "Reino Unido", "N.º 24 de DJ Mag, 35.º año"], ["Drumsheds", "Londres", "Reino Unido", "15.000 personas en una antigua tienda IKEA"], ["Space Riccione", "Riccione", "Italia", "Al aire libre, lleva el nombre del Space de Ibiza"], ["Tenax", "Florencia", "Italia", "Fundado en 1981, aforo de 999"], ["Rex Club", "París", "Francia", "Una sala bajo un cine desde los años treinta"], ["Amnesia Cap d'Agde", "Cap d'Agde", "Francia", "Al aire libre, ampliado a 4.000"], ["Lux Frágil", "Lisboa", "Portugal", "A orillas del Tajo desde 1998"], ["Cavo Paradiso", "Mykonos", "Grecia", "Club en un acantilado abierto desde 1993"], ["Culture Club Revelin", "Dubrovnik", "Croacia", "Dentro de una fortaleza"], ["Shelter", "Ámsterdam", "Países Bajos", "Dos salas Funktion-One, sin móviles"], ["Prozak 2.0", "Cracovia", "Polonia", "Salas subterráneas en dos niveles"]].map(row => row.map(escapeHtml)),
      label: "Los 23 clubes de esta guía"
    }),
    'Table: Tamaño': articleTable({
      headers: ["Club", "Aforo declarado"],
      rows: [["Drumsheds, Londres", "15.000"], ["The Warehouse Project, Mánchester", "10.000"], ["FABRIK, región de Madrid", "6.000"], ["Space Riccione", "6.000"], ["Hï Ibiza", "5.633"], ["Amnesia Cap d'Agde", "4.000"], ["Amnesia, Ibiza", "3.800"], ["Cavo Paradiso", "3.000"], ["Bootshaus", "2.000"], ["Rex Club", "800"]].map(row => row.map(escapeHtml)),
      label: "Discotecas europeas por aforo declarado"
    }),
    'Table: DJ Mag': articleTable({
      headers: ["Puesto", "Club", "País"],
      rows: [["1", "[UNVRS]", "España"], ["3", "Ushuaïa Ibiza", "España"], ["4", "Hï Ibiza", "España"], ["8", "FABRIK", "España"], ["11", "Bootshaus", "Alemania"], ["13", "fabric", "Reino Unido"], ["15", "The Warehouse Project", "Reino Unido"], ["16", "Amnesia Ibiza", "España"], ["18", "Pacha Ibiza", "España"], ["19", "DC-10", "España"], ["21", "Berghain", "Alemania"], ["22", "Cavo Paradiso", "Grecia"], ["24", "Ministry of Sound", "Reino Unido"], ["25", "Culture Club Revelin", "Croacia"], ["26", "Space Riccione", "Italia"], ["33", "Amnesia Cap d'Agde", "Francia"], ["45", "Drumsheds", "Reino Unido"], ["56", "Nitsa, Barcelona", "España"], ["76", "Papagayo Tenerife", "España"], ["81", "Pelícano, A Coruña", "España"], ["89", "Tenax", "Italia"], ["90", "Shelter", "Países Bajos"], ["94", "Amnesia Milano", "Italia"], ["100", "Open Ground", "Alemania"]].map(row => row.map(escapeHtml)),
      label: "Top 100 Clubs 2026 de DJ Mag, entradas europeas"
    }),
  }),

  sources: [
    {href: 'https://djmag.com/top100clubs', label: 'DJ Mag: Top 100 Clubs, lista de 2026 y perfiles de los clubes (en inglés)'},
    {href: 'https://djmag.com/features/dj-mag-top-100-clubs-2026-record-breaking-numbers-vote-our-annual-poll-of-worlds-best', label: 'DJ Mag: resultados de 2026, 15 de abril de 2026 (en inglés)'},
    {href: 'https://djmag.com/top100clubs/2021/85/Lux-Fragil', label: 'DJ Mag: perfil de Lux Frágil de 2021 (en inglés)'},
    {href: 'https://berghain.berlin/', label: 'Berghain'},
    {href: 'https://industriekultur.berlin/ort/berghain/', label: 'Berliner Zentrum Industriekultur: Berghain'},
    {href: 'https://mixmag.net/read/berghain-updates-soundsystem-funktion-one-news', label: 'Mixmag: el sistema de sonido de Berghain, 18 de octubre de 2023 (en inglés)'},
    {href: 'https://tresor.foundation/en/geschichte/', label: 'Tresor Foundation: historia (en inglés)'},
    {href: 'https://www.pacha.com/', label: 'Pacha'},
    {href: 'https://grayarea.co/magazine/dc10-ibiza-the-first-ever-residencies', label: 'Gray Area: DC-10 (en inglés)'},
    {href: 'https://djmag.com/news/amnesia-ibiza-announces-50th-anniversary-celebrations-2026', label: 'DJ Mag: el 50.º aniversario de Amnesia (en inglés)'},
    {href: 'https://www.hiibiza.com/', label: 'Hï Ibiza'},
    {href: 'https://www.fabriclondon.com/faq', label: 'fabric: preguntas frecuentes (en inglés)'},
    {href: 'https://ra.co/news/36182', label: 'Resident Advisor: fabric, septiembre de 2016 (en inglés)'},
    {href: 'https://www.inyourpocket.com/krakow/prozak-20_18565v', label: 'In Your Pocket Cracovia: Prozak 2.0 (en inglés)'}
  ],
  sourcesNote: 'Horario y primera noche electrónica de Rex Club: Visit Paris Region. Sobre fabric también: Time Out (noviembre de 2016) y Mixmag.',

  bandcamp: {
    description: 'Lejos de la pista de baile, la música que hago yo. Comprar un tema apoya directamente mi trabajo.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 de thecatrave'},
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks de thecatrave'}
    ]
  }
};
