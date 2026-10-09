// Spanish EXIT guide. Structure and facts from the English page
// (exit-festival-draft.md) and the French module.
//
// es-ES SERP and People also ask read in Chrome on 2026-10-10 ("exit festival",
// "exit festival 2027"): PAA asks "¿Dónde es el festival Exit?"; the SERP is the
// official site, ticket resale and 2027 date-prediction pages, none confirming a
// Novi Sad 2027 edition. The images are the English guide's, in img/exit-festival/.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, ownSetListening
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption, className = 'wide-archive-image') => articleFigure({
  src: `img/exit-festival/${name}-1200.webp`,
  srcset: `img/exit-festival/${name}-320.webp 320w, img/exit-festival/${name}-1200.webp ${width}w`,
  width, height, alt, caption, className
});

export default {
  lang: 'es',
  name: 'es-exit-festival',
  file: 'es/festival-exit.html',
  draft: 'es/exit-festival-draft.md',
  canonical: 'https://thecatrave.com/es/festival-exit',
  englishPath: '/exit-festival',
  ogImage: 'https://thecatrave.com/img/og/exit-festival.jpg',
  bodyClass: 'article-page exit-festival-page',

  title: 'Festival EXIT: historia, fortaleza de Petrovaradin y qué viene',
  description: 'El festival EXIT nació en 2000 en Novi Sad y se celebró hasta 2025 en la fortaleza de Petrovaradin. Historia, Dance Arena, música y qué pasa en 2026 y 2027.',
  datePublished: '2026-10-10',
  dateModified: '2026-10-10',
  dateLabel: '10 de octubre de 2026',

  heroKicker: 'Historia del festival',
  heroTitle: 'EXIT Festival: de Novi Sad a la gira mundial',
  deck: 'De un movimiento estudiantil en 2000 a la fortaleza de Petrovaradin, el final de la edición serbia tras 25 años y lo que todavía se llama EXIT hoy.',
  answerLabel: 'Qué le pasó al festival EXIT',
  breadcrumbName: 'EXIT Festival',

  answerSection: 'Respuesta',
  introSection: 'Introducción',
  introTitle: 'La era de la fortaleza terminó tras 25 años.',
  faqSection: 'Preguntas frecuentes',
  faqLabel: 'Preguntas frecuentes',
  faqTitle: 'Preguntas frecuentes sobre el festival EXIT.',

  sections: [
    {id: 'after-2025', heading: 'Qué pasó después de EXIT 2025', title: 'Qué pasó después de EXIT 2025.'},
    {id: 'history', heading: 'De un movimiento estudiantil a la fortaleza', title: 'De un movimiento estudiantil a la fortaleza.'},
    {id: 'petrovaradin', heading: 'La fortaleza de Petrovaradin y la Dance Arena', title: 'La fortaleza de Petrovaradin y la Dance Arena.'},
    {id: 'music', heading: 'La música de EXIT', title: 'La música de EXIT.'},
    {id: 'network', heading: 'EXIT como red de festivales', title: 'EXIT como red de festivales.'},
    {id: 'current-events', heading: 'Cómo seguir EXIT hoy', title: 'Prepara ahora un evento EXIT.', planning: {
      festivalName: 'EXIT Global Tour',
      intro: 'No hay confirmado ningún EXIT Festival 2027 en la fortaleza de Petrovaradin. EXIT publica ahora eventos separados por destino. Elige primero el evento concreto y usa sus entradas, su lugar y sus consejos de viaje.',
      ticketIntro: 'Estado oficial actual. Precios y trayecto dependen de cada evento; ningún abono EXIT único cubre la red.',
      ticketColumns: ['Evento o producto', 'Estado actual'],
      ticketRows: [
        {label: 'EXIT Festival Novi Sad 2027', note: 'No hay regreso a la fortaleza anunciado', price: 'No está a la venta'},
        {label: 'EXIT Global Tour', note: 'Eventos distintos por destino', price: 'Por evento'},
        {label: 'Starlight Festival, Egipto', note: '8–11 de octubre de 2026 en Guiza', price: 'Mira el enlace'},
        {label: 'EXIT2Montenegro', note: 'Fechas de 2026 anunciadas en Ulcinj y Budva', price: 'Mira el enlace'}
      ],
      ticketNote: 'Desde la página de la gira mundial, abre el evento con nombre y comprueba el año, el país y el lugar antes de cualquier reserva no reembolsable.',
      routes: [
        {title: 'Elegir primero el evento y el país', description: 'Abre la página de la gira mundial y comprueba que la fecha y el lugar coinciden con la venta de entradas.', link: {label: 'EXIT Global Tour oficial', url: 'https://www.exitfest.org/global-tour'}},
        {title: 'Ignorar los antiguos trayectos a Novi Sad', description: 'Los itinerarios a la fortaleza, los hoteles de Novi Sad y los antiguos campings son de 2001–2025, no valen automáticamente para los eventos nuevos.'},
        {title: 'Construir el trayecto desde el lugar', description: 'Usa la dirección que da el evento y comprueba después el autobús lanzadera o el transporte público con el operador local.'}
      ],
      routeNote: 'Como la gira recorre varios países, no existe una lanzadera, un aeropuerto ni un enlace de mapa único que valga para todos.',
      accommodation: {
        body: 'El alojamiento depende del destino. No reserves Novi Sad para un evento en Montenegro o en Egipto y no supongas que hay camping.',
        link: {label: 'Elegir el evento actual', url: 'https://www.exitfest.org/global-tour'}
      },
      spending: {
        body: 'EXIT no publica ninguna tarifa común a la red. La moneda, el pago, el agua y la comida dependen del evento y del país elegidos.',
        items: [
          {label: 'Precios Novi Sad 2027', value: 'No disponibles'},
          {label: 'Entrada de gira', value: 'Según el evento'},
          {label: 'Comida y barra', value: 'Mira el evento'},
          {label: 'Transporte local', value: 'Mira el operador local'}
        ],
        link: {label: 'Gira y entradas oficiales', url: 'https://www.exitfest.org/global-tour'}
      },
      packing: [
        'Pasaporte o documento de identidad aceptado en el país elegido',
        'La entrada correcta guardada sin conexión',
        'Seguro de viaje y documentos de entrada necesarios',
        'Ropa adecuada, tapones para los oídos y batería externa',
        'Medio de pago local confirmado por el evento'
      ],
      avoid: [
        'Comprar una entrada no oficial «Novi Sad 2027»',
        'Usar un plano de 2025 de la fortaleza en otro país',
        'Suponer que una entrada cubre varios destinos',
        'Reservar un viaje no reembolsable antes de confirmar el lugar',
        'Trasladar antiguas normas de camping, bolsas o alcohol'
      ],
      rulesNote: 'Consulta las normas del evento elegido. Edad, bolsas, reentrada, agua y objetos prohibidos no se pueden trasladar de la antigua edición de la fortaleza.',
      links: [
        {label: 'Web oficial de EXIT', url: 'https://www.exitfest.org/'},
        {label: 'Gira mundial y entradas', url: 'https://www.exitfest.org/global-tour'},
        {label: 'Historia de EXIT', url: 'https://www.exitfest.org/en/about-us'},
        {label: 'Fortaleza de Petrovaradin en Google Maps, lugar histórico', url: 'https://www.google.com/maps/search/?api=1&query=Petrovaradin+Fortress+Novi+Sad'}
      ],
      checked: '2026-10-06',
      checkedLabel: '6 de octubre de 2026'
    }}
  ],

  media: ({lang}) => ({
    'Fortress': figure('exit-fortress', 800, 509, 'La fortaleza de Petrovaradin iluminada durante el festival EXIT', 'La fortaleza de Petrovaradin durante EXIT. Los muros, las puertas y el foso marcaron cómo funcionó el festival de Novi Sad de 2001 a 2025. Foto: EXIT photo team, CC BY-SA 3.0.'),
    'Crowd': figure('exit-crowd', 1200, 784, 'Multitud densa en la fortaleza de Petrovaradin durante el festival EXIT en 2015', 'Una multitud en la fortaleza de Petrovaradin en 2015. Los escenarios de EXIT ocupaban un recinto histórico en uso y no un campo de festival levantado para la ocasión. Foto: Jelena Ivanovic, EXIT photo team, CC BY-SA 3.0.'),
    'thecatrave mix 1': ownSetListening(0, lang, 'Mi propia mezcla multigénero, como recorrido personal por el techno, los breaks y la bass music, y no una reconstrucción de la Dance Arena.'),
    'thecatrave mix 2': ownSetListening(1, lang, 'Para la era actual de EXIT, de lugar en lugar: un recorrido electrónico, mientras cada evento oficial mantiene su propia programación.'),
    'Keinemusik and Nina Kraviz': articleVideoCollection({
      lang,
      label: 'Dos sets de la Dance Arena en el canal de EXIT',
      description: 'Keinemusik en 2023 y Nina Kraviz en 2016 en la Dance Arena, con unos 5,4 y 3,7 millones de visualizaciones entre las grabaciones de la Dance Arena más vistas del canal de EXIT.',
      items: [
        articleVideoCard({youtubeId: '6L0GMr8FFyc', genre: 'Dance Arena, 2023', artist: 'Keinemusik', title: 'EXIT Dance Arena, 2023'}),
        articleVideoCard({youtubeId: 'WJnhTXQ6a9Y', genre: 'Dance Arena, 2016', artist: 'Nina Kraviz', title: 'EXIT Dance Arena, 2016'})
      ]
    }),
    'Table: Datos': articleTable({
      headers: ['Tema', 'Estado'],
      rows: [
        ['Fundación', '2000 en University Park, Novi Sad'],
        ['Ediciones de la fortaleza', '2001 a 2025 en la fortaleza de Petrovaradin'],
        ['Última edición serbia anunciada', '10 al 13 de julio de 2025'],
        ['Formato 2026', 'Gira mundial y festivales nuevos y distintos'],
        ['Regreso a Novi Sad', 'no confirmado'],
        ['Música principal', 'Multigénero, con house y techno en la Dance Arena']
      ].map(row => row.map(escapeHtml))
    })
  }),

  sources: [
    {href: 'https://exitfest.org/en/about-us', label: 'EXIT: Sobre nosotros'},
    {href: 'https://exitfest.org/en/exit-festival-announces-final-edition-in-serbia-amid-undemocratic-pressures', label: 'EXIT: anuncio de la última edición en Serbia'},
    {href: 'https://exitfest.org/global-tour', label: 'EXIT: Global Tour'},
    {href: 'https://exitfest.org/en/were-not-moving-exit-to-skopje-or-egypt-were-creating-new-festivals-by-the-great-pyramids-of-giza-and-around-the-world', label: 'EXIT: no nos mudamos a Skopie ni a Egipto, creamos festivales nuevos'},
    {href: 'https://www.lemonde.fr/en/international/article/2025/07/03/the-exit-music-festival-in-serbia-faces-closure-as-government-cracks-down-on-dissent_6742968_4.html', label: 'Le Monde: reportajes sobre EXIT, las protestas y la financiación pública'}
  ],

  bandcamp: {
    description: '¿Te ha servido esta guía? Mi propia música está en Bandcamp. La programación de la fortaleza mezclaba rock, hip-hop y música de club; estos lanzamientos de thecatrave se relacionan con su lado electrónico.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 de thecatrave'},
      {title: '60 hours of mistakes', id: '3330948631', url: 'https://thecatrave.bandcamp.com/track/60-hours-of-mistakes', linkText: '60 hours of mistakes de thecatrave'}
    ]
  }
};
