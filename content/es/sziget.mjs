// Spanish Sziget guide. Structure and facts from the English page
// (sziget-festival-draft.md) and the French module.
//
// Spanish keywords (keywords/es-sziget.json): es-ES SERP read in Chrome on
// 2026-10-10 ("sziget festival", "sziget 2027"). The official Instagram bio
// reads "SEE YOU IN 2027: 10-14 Aug", which matches the page. PAA on the first
// query is about the 2026 line-up, Budapest parties and the wine festival
// (not answerable from the English page); "sziget 2027" shows no PAA.
//
// The images are the English guide's, in img/sziget/, with translated captions.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, ownTrackListening
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption, className = 'wide-archive-image') => articleFigure({
  src: `img/sziget/${name}-${width}.webp`,
  srcset: `img/sziget/${name}-320.webp 320w, img/sziget/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className
});

export default {
  lang: 'es',
  name: 'es-sziget',
  file: 'es/festival-sziget.html',
  draft: 'es/sziget-draft.md',
  canonical: 'https://thecatrave.com/es/festival-sziget',
  englishPath: '/sziget-festival',
  ogImage: 'https://thecatrave.com/img/og/sziget.jpg',
  bodyClass: 'article-page sziget-festival-page',

  title: 'Sziget Festival 2027: fechas, música, camping y cómo llegar',
  description: 'El Sziget Festival 2027 se celebra del 10 al 14 de agosto en la isla de Óbuda. Música, historia, camping, acceso por la H5 y qué está confirmado.',
  datePublished: '2026-10-10',
  dateModified: '2026-10-10',
  dateLabel: '10 de octubre de 2026',

  heroKicker: 'Sziget',
  heroTitle: 'Sziget Festival',
  deck: 'Cinco días en la isla de Óbuda: pop, rock y hip-hop junto a escenarios de club, teatro, circo y una conexión ferroviaria con Budapest.',
  answerLabel: 'Qué es el Sziget Festival',
  breadcrumbName: 'Sziget Festival',

  answerSection: 'Respuesta',
  introSection: 'Introducción',
  introTitle: 'Un festival tan grande como un barrio efímero de Budapest.',
  faqSection: 'Preguntas frecuentes',
  faqLabel: 'Preguntas frecuentes',
  faqTitle: 'Preguntas frecuentes sobre el Sziget Festival.',
  ownSetAfter: 'history',

  sections: [
    {id: 'sziget-2027', heading: 'Sziget Festival 2027', title: 'Sziget Festival 2027.', kicker: 'Fechas y lugar'},
    {id: 'what-is-sziget', heading: 'Qué es de verdad el Sziget', title: 'Qué es de verdad el Sziget.'},
    {id: 'music', heading: 'Qué música suena en el Sziget', title: 'Qué música suena en el Sziget.', kicker: 'La música'},
    {id: 'history', heading: 'Del Diáksziget al Sziget', title: 'Del Diáksziget al Sziget.'},
    {id: 'camping', heading: 'Acampar o alojarse en Budapest', title: 'Acampar o alojarse en Budapest.'},
    {id: 'planning', heading: 'Preparar la isla', title: 'Preparar el viaje al Sziget.', planning: {
      festivalName: 'Sziget 2027',
      intro: 'El Sziget puede ser un festival con camping o una estancia en Budapest. Calcula el abono, el traslado desde el aeropuerto o la estación, el alojamiento y el transporte diario antes de elegir entre la isla y la ciudad.',
      ticketIntro: 'Precios oficiales publicados ahora para 2027. Las tasas online van aparte; las fases siguientes y la taquilla pueden costar más.',
      ticketRows: [
        {label: 'Abono de cinco días', note: 'Camping básico incluido con una entrada de varios días válida', price: '349 € + 23 € de tasas'},
        {label: 'Abono de cinco días, 21 años o menos', note: 'Se exige justificante de edad', price: '279 € + 18 € de tasas'},
        {label: 'Abono VIP de cinco días', note: 'Zonas VIP; alojamiento aparte', price: 'desde 569 € + tasas'},
        {label: 'Depósito por tienda propia', note: 'Reembolsable si te llevas la tienda o la dejas bien recogida', price: '30 €'}
      ],
      ticketNote: 'Las entradas de un día, el camping premium, las tiendas montadas y los paquetes de hotel se venden aparte. Comprueba la tienda en directo porque las fases cambian.',
      routes: [
        {title: 'Del centro a Filatorigát por la H5 HÉV', description: 'Toma el M2 hasta Batthyány tér o el tranvía 4/6 hasta Margit híd y después la H5 hasta Filatorigát. Cuenta oficialmente de 35 a 45 minutos desde las grandes estaciones.', link: {label: 'Filatorigát en Google Maps', url: 'https://www.google.com/maps/search/?api=1&query=Filatorig%C3%A1t+H%C3%89V+Budapest'}},
        {title: 'Desde el aeropuerto en transporte público', description: 'Toma el 100E hasta Deák Ferenc tér y después el M2 y la H5, o el 200E, el M3, el tranvía 1 y la H5. El 100E cuesta ahora 2500 HUF; los transbordos exigen títulos válidos.'},
        {title: 'Tren internacional, coche o paquete del festival', description: 'Llega a una estación de tren o autobús de Budapest y termina con la H5. Los paquetes oficiales combinan algunos trayectos y hoteles con los abonos.', link: {label: 'Trayectos oficiales del Sziget', url: 'https://szigetfestival.com/en/travel/'}}
      ],
      routeNote: 'El barco y la lanzadera especial desde el aeropuerto pueden cambiar en 2027. Comprueba BudapestGO y la página de transporte del Sziget antes de salir.',
      accommodation: {body: 'El camping básico es gratuito con un abono completo, un abono de tres días o al menos dos entradas de día consecutivas. Los campings premium, las tiendas montadas, las plazas de caravana y los hoteles de Budapest cuestan aparte.', link: {label: 'Comparar el alojamiento oficial', url: 'https://szigetfestival.com/en/accommodation/'}},
      spending: {body: 'El Sziget no ha publicado una lista completa de precios de 2027 para comidas y barras. La isla funciona sin efectivo y un ALDI en el recinto vende comida y lo que se te haya olvidado.', items: [
        {label: 'Autobús 100E del aeropuerto', value: '2500 HUF (unos 7 €)'},{label: 'Trayecto típico desde una estación', value: 'unos 1000 HUF (2,50 €)'},{label: 'Sziget Citypass, 2 días', value: '41 € + 3 € de tasas'},{label: 'Sziget Citypass, 7 días', value: '83 € + 5 € de tasas'}
      ], link: {label: 'Información oficial, pago sin efectivo', url: 'https://szigetfestival.com/en/festival-info'}},
      packing: ['Entrada en la cartera del móvil y documento de identidad con foto','Botella reutilizable sin cristal, tapones para los oídos y batería externa','Tienda, esterilla y saco de dormir para el camping básico','Protector solar, ropa de lluvia y calzado para caminar mucho','Resguardo del depósito si llevas tu propia tienda'],
      avoid: ['Cristal, fuegos artificiales, armas y drogas ilegales','Hornillos de gas, bombonas, parrillas y material con llama','Paraguas, martillos y herramientas prohibidos por el reglamento','Cantidades comerciales de comida, tabaco o mercancías','Fiarte de un plano u horario de barco antiguos'],
      rulesNote: 'Las normas de entrada y de camping pueden cambiar antes de agosto. El cristal y el material de cocina con llama están prohibidos ahora; el depósito reembolsable es obligatorio para llevar tienda propia.',
      links: [
        {label: 'Web oficial', url: 'https://szigetfestival.com/en/'},{label: 'Entradas 2027', url: 'https://szigetfestival.com/en/tickets/'},{label: 'Transporte', url: 'https://szigetfestival.com/en/travel/'},{label: 'Alojamiento', url: 'https://szigetfestival.com/en/accommodation/'},{label: 'Información del festival', url: 'https://szigetfestival.com/en/festival-info'},{label: 'Isla de Óbuda en Google Maps', url: 'https://www.google.com/maps/search/?api=1&query=Sziget+Festival+Budapest'}
      ],
      checked: '2026-10-06', checkedLabel: '6 de octubre de 2026'
    }}
  ],

  media: ({lang}) => ({
    'thecatrave degeneration': ownTrackListening('degeneration', 'Lejos de los grandes escenarios: la voz de Mylène Farmer sobre breaks, entre dubstep y UK garage. Mi propio remix.', lang),
    'Table: Datos': articleTable({
      headers: ['Dato', 'Información actual'],
      rows: [
        ['Fechas', '10 al 14 de agosto de 2027'],
        ['Lugar', 'Isla de Óbuda, Budapest'],
        ['Formato', 'Festival multidisciplinar de música y artes de cinco días'],
        ['Cartel 2027', 'Aún no anunciado'],
        ['Parada de tren más cercana', 'Filatorigát, en la H5 (HÉV)'],
        ['Camping', 'Con una entrada de varios días válida; paquetes de 2027 por anunciar']
      ].map(row => row.map(escapeHtml)),
      label: 'Sziget Festival 2027: datos'
    }),
    'Image: island': figure('island-2022', 1200, 900,
      'Vista aérea del Sziget Festival en la isla de Óbuda, en Budapest',
      'La isla de Óbuda durante el Sziget 2022. Los escenarios, las calles efímeras y los pequeños espacios de espectáculo ocupan una larga isla del Danubio. Foto: Elekes Andor, CC BY-SA 4.0.'),
    'Image: stage': figure('stage-2014', 1200, 795,
      'Público ante el escenario principal del Sziget Festival en 2014',
      'El escenario principal del Sziget en 2014. El festival superó con creces el Diáksziget de dos escenarios de 1993 sin salir de la misma isla. Foto: Steven Lek, CC BY-SA 4.0.'),
    'uOAywzuvfzg': articleVideoCollection({
      lang: 'es',
      label: 'Sziget, sesiones de club en el Colosseum',
      description: 'Eelke Kleijn en el Colosseum en 2022, la sesión electrónica más vista que he encontrado en el canal del Sziget (128 000 reproducciones), y Shimza en el Colosseum en 2025.',
      items: [
        articleVideoCard({youtubeId: 'uOAywzuvfzg', genre: 'Sziget, 2022', artist: 'Eelke Kleijn', title: 'En directo en el Colosseum'}),
        articleVideoCard({youtubeId: 'KZvARnaDTEo', genre: 'Sziget, 2025', artist: 'Shimza', title: 'En directo en el Sziget Festival 2025'})
      ]
    })
  }),

  sources: [
    {href: 'https://szigetfestival.com/en/festival-info', label: 'Sziget: información oficial y fechas de 2027 (en inglés)'},
    {href: 'https://szigetfestival.com/en/travel', label: 'Sziget: información oficial de viaje (en inglés)'},
    {href: 'https://szigetfestival.com/en/accommodation', label: 'Sziget: información oficial de alojamiento (en inglés)'},
    {href: 'https://szigetfestival.com/en/about-us', label: 'Sziget: historia del festival (en inglés)'},
    {href: 'https://commons.wikimedia.org/wiki/File:Sziget_2022_(1).jpg', label: 'Wikimedia Commons: foto del Sziget 2022 y licencia'}
  ],

  bandcamp: {
    description: 'El Sziget es más amplio que un solo estilo electrónico. Estas ediciones de thecatrave se acercan a su lado de club, y comprar una apoya la música y esta escritura independiente.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks de thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 de thecatrave'}
    ]
  }
};
