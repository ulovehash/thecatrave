// Spanish Coachella guide. Structure and facts from the English page
// (coachella-draft.md) and the French module.
//
// es-ES SERP and People also ask read in Chrome on 2026-10-10 ("coachella
// 2027", "que es coachella"): PAA asks when Coachella 2027 is, what it costs,
// who plays, where to buy, what people do there and what "Coachella style" is.
// The English page gives no prices, so the ticket FAQ says so and points at the
// official sale page rather than inventing a figure. Images are the English
// guide's, in img/coachella/, with translated captions.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, articleYoutubeEmbed, ownTrackListening
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption, className = 'wide-archive-image') => articleFigure({
  src: `img/coachella/${name}-${width}.webp`,
  srcset: `img/coachella/${name}-320.webp 320w, img/coachella/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className
});

export default {
  lang: 'es',
  name: 'es-coachella',
  file: 'es/festival-coachella.html',
  draft: 'es/coachella-draft.md',
  canonical: 'https://thecatrave.com/es/festival-coachella',
  englishPath: '/what-is-coachella',
  ogImage: 'https://thecatrave.com/img/og/coachella.jpg',
  bodyClass: 'article-page coachella-page',

  title: 'Qué es Coachella: fechas 2027, lugar, tamaño y música',
  description: 'Coachella es un festival en el Empire Polo Club de Indio, California: fechas de 2027, lugar, duración, asistencia, propietario y la música de la carpa Sahara.',
  datePublished: '2026-10-10',
  dateModified: '2026-10-10',
  dateLabel: '10 de octubre de 2026',

  heroKicker: 'Coachella',
  heroTitle: 'Qué es Coachella',
  deck: 'Dos fines de semana de abril en un campo de polo del desierto californiano. Cuándo es Coachella 2027, dónde está, qué tamaño tiene, de quién es y qué suena bajo la carpa Sahara.',
  answerLabel: 'Qué es Coachella',
  breadcrumbName: 'Qué es Coachella',

  answerSection: 'Respuesta',
  introSection: 'Introducción',
  introTitle: 'Una apuesta en un campo de polo.',
  faqSection: 'Preguntas frecuentes',
  faqLabel: 'Preguntas frecuentes',
  faqTitle: 'Preguntas frecuentes sobre Coachella.',
  ownSetAfter: 'history',

  sections: [
    {id: 'coachella-2027', heading: 'Coachella 2027: las fechas', title: 'Coachella 2027: las fechas.'},
    {id: 'where', heading: 'Dónde es Coachella', title: 'Dónde es Coachella.'},
    {id: 'when', heading: 'Cuándo es Coachella y cuánto dura', title: 'Cuándo es Coachella y cuánto dura.'},
    {id: 'how-big', heading: 'El tamaño de Coachella', title: 'El tamaño de Coachella.'},
    {id: 'history', heading: 'Breve historia y de quién es Coachella', title: 'Breve historia y de quién es Coachella.'},
    {id: 'stages', heading: 'Los escenarios de Coachella', title: 'Los escenarios de Coachella.'},
    {id: 'famous', heading: 'Por qué Coachella es tan famoso', title: 'Por qué Coachella es tan famoso.'},
    {id: 'music', heading: 'Qué suena de verdad en Coachella', title: 'Qué suena de verdad en Coachella.', kicker: 'La música'},
    {id: 'from-home', heading: 'Escuchar Coachella desde casa', title: 'Escuchar Coachella desde casa.'}
  ],

  media: ({lang}) => ({
    'thecatrave degeneration': ownTrackListening('degeneration', 'Lejos de los grandes escenarios: la voz de Mylène Farmer sobre breaks, entre dubstep y UK garage. Mi propio remix.', lang),
    'Coachella18W1-18': figure('grounds-2018', 1200, 677,
      'Asistentes en el césped de Coachella en 2018, con palmeras detrás y una alta torre de paneles de colores, y en el horizonte las montañas del desierto y la noria',
      'El recinto del festival en abril de 2018: palmeras, montañas del desierto, una torre de colores y la noria. Foto: Raph_PH, CC BY 2.0.'),
    'Coachella 2006, Barry Mulling': figure('tent-2006', 1200, 900,
      'El público bajo una carpa blanca en Coachella en 2006, un grupo en el escenario, altavoces bajo el techo y palmeras a la luz del atardecer',
      'Un concierto bajo una de las carpas de Coachella en abril de 2006, el año de la pirámide de Daft Punk y del set de Madonna en la carpa de baile. Foto: Barry Mulling, CC BY-SA 2.0.'),
    'Outdoor Theatre, Shawn Ahmed': figure('outdoor-theatre-2014', 1200, 801,
      'Una gran multitud ante el escenario del Outdoor Theatre al anochecer en 2014, con pantallas a cada lado y palmeras al borde del recinto',
      'El Outdoor Theatre al anochecer, en el segundo fin de semana de 2014. Foto: Shawn Ahmed, CC BY 2.0.'),
    'Sahara Tent, Shawn Ahmed': figure('sahara-2014', 1200, 801,
      'El interior de la carpa Sahara de noche en 2014, con la estructura de acero en arco iluminada de verde y blanco sobre una multitud densa',
      'La carpa Sahara de noche, en el segundo fin de semana de 2014, el escenario construido para los cabezas de cartel electrónicos de Coachella. Foto: Shawn Ahmed, CC BY 2.0.'),
    'o0QGw1LZpxM': articleYoutubeEmbed({
      src: 'https://www.youtube-nocookie.com/embed/o0QGw1LZpxM',
      title: 'Diljit Dosanjh, G.O.A.T., en directo en la carpa Sahara en Coachella 2023, en el canal de YouTube de Coachella'
    }),
    'oUbpmjOgmmU': articleVideoCollection({
      lang,
      label: 'Coachella: los vídeos más vistos',
      description: 'FISHER tocando «Losing It» en 2019, el vídeo más visto del canal del festival, y el set de Fatboy Slim de 2026, de casi dos horas, en su propio canal.',
      items: [
        articleVideoCard({youtubeId: 'oUbpmjOgmmU', genre: 'Coachella, 2019', artist: 'FISHER', title: 'Losing It, en directo en Coachella 2019'}),
        articleVideoCard({youtubeId: 'fQqusBEnwM4', genre: 'Coachella, 2026', artist: 'Fatboy Slim', title: 'Coachella 2026'})
      ]
    }),
    'Table: asistencia': articleTable({
      headers: ['Año', 'Formato', 'Asistencia', 'Ingresos'],
      rows: [
        ['1999', 'Dos días, octubre', 'unas 37 000 entradas', '850 000 dólares de pérdidas'],
        ['2001', 'Un día, abril', '32 000', 'pérdidas'],
        ['2002', 'Dos días', 'más de 55 000', 'casi en equilibrio'],
        ['2004', 'Dos días', '110 000', 'primera edición con entradas agotadas'],
        ['2006', 'Dos días', 'unas 120 000', '9 millones de dólares'],
        ['2007', 'Tres días', '186 000', '16,3 millones de dólares'],
        ['2010', 'Tres días', 'unas 225 000', '21,7 millones de dólares'],
        ['2012', 'Dos fines de semana', '158 387 de pago', '47,3 millones de dólares'],
        ['2014', 'Dos fines de semana', '96 500 al día', '78,3 millones de dólares'],
        ['2017', 'Dos fines de semana', '250 000', '114,6 millones de dólares'],
        ['2020 y 2021', '', 'Cancelado por la pandemia', '']
      ].map(row => row.map(escapeHtml))
    })
  }),

  sources: [
    {href: 'https://hospitality.coachella.com/', label: 'Coachella: fechas de 2027 y Enhanced Experiences'},
    {href: 'https://www.coachella.com/waitlist', label: 'Coachella: lista de espera de 2027'},
    {href: 'https://www.coachella.com/faq/', label: 'Coachella: página oficial de ayuda y preguntas frecuentes'},
    {href: 'https://www.indio.org/home/showpublisheddocument/1068/637874349323400000', label: 'Ciudad de Indio: asistencia a los eventos anuales'},
    {href: 'https://www.indio.org/home/showpublisheddocument/5517/638828367145700000', label: 'Ciudad de Indio: folleto de desarrollo económico'},
    {href: 'https://aegworldwide.com/press-center/press-releases/goldenvoice-assume-operations-empire-polo-club-long-term-agreement', label: 'AEG Worldwide: acuerdo entre Goldenvoice y el Empire Polo Club'},
    {href: 'https://www.goldenvoice.com/festivals/', label: 'Goldenvoice: festivales'},
    {href: 'https://www.elationlighting.com/blogs/news/1300-elation-lights-dazzle-coachella-2024', label: 'Elation Lighting: la carpa Sahara en Coachella 2024'},
    {href: 'https://ca.billboard.com/business/touring/justin-bieber-coachella-radius-claus', label: 'Billboard Canada: la cláusula de exclusividad de Coachella'},
    {href: 'https://www.youtube.com/@Coachella', label: 'Coachella en YouTube (conciertos y número de visualizaciones)'}
  ],

  bandcamp: {
    description: 'Comprar un tema apoya directamente mi trabajo.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks de thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 de thecatrave'}
    ]
  }
};
