// Spanish Mysteryland guide. Structure and facts from the English page
// (mysteryland-draft.md, mysteryland-research.md, build-mysteryland-article.mjs).
//
// Spanish keywords, Keyword Planner Spain, 2026-10-09
// (keywords/es-mysteryland.json): mysteryland 100-1K; mysteryland 2027 has no
// row. Live es-ES SERP and People-also-ask read the same day (google.es,
// hl=es, gl=es): Spanish results are the official site, Tripadvisor, news of
// the pause until 2027 and a group trip from Spain; People also ask "¿Dónde se
// celebra el mysteryland?". The where-H2 and a FAQ follow that phrasing and
// are answered with facts already on the English page. The Dutch-festivals
// PAA is not added: the English page does not cover it. The 2026 and 2025
// editions are rejected: dated.
//
// The images are the English guide's, in img/mysteryland/, with translated
// captions; see home-articles.mjs for why a translation may reuse them.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, articleYoutubeEmbed, ownTrackListening
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption, className = 'wide-archive-image') => articleFigure({
  src: `img/mysteryland/${name}-${width}.webp`,
  srcset: `img/mysteryland/${name}-320.webp 320w, img/mysteryland/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className
});

export default {
  lang: 'es',
  name: 'es-mysteryland',
  file: 'es/mysteryland-festival.html',
  draft: 'es/mysteryland-draft.md',
  canonical: 'https://thecatrave.com/es/mysteryland-festival',
  englishPath: '/mysteryland-festival',
  ogImage: 'https://thecatrave.com/img/og/mysteryland.jpg',
  bodyClass: 'article-page mysteryland-page',

  title: 'Mysteryland 2027: fechas, recinto, historia y música',
  description: 'Mysteryland es un festival de música electrónica en Haarlemmermeer. Fechas de 2027, por qué no hay edición en 2026, el recinto, la asistencia y la música.',
  datePublished: '2026-10-09',
  dateModified: '2026-10-09',
  dateLabel: '9 de octubre de 2026',

  heroKicker: 'Mysteryland',
  heroTitle: 'Mysteryland Festival',
  deck: 'Una rave de 1993 que se instaló en el antiguo recinto de la Floriade, en Haarlemmermeer. Cuándo vuelve en 2027, por qué no hay edición en 2026, su tamaño y qué suena en sus escenarios.',
  answerLabel: 'Qué es Mysteryland',
  breadcrumbName: 'Mysteryland Festival',

  answerSection: 'Respuesta',
  introSection: 'Introducción',
  introTitle: 'Más antiguo que la música que programa.',
  faqSection: 'FAQ',
  faqLabel: 'Preguntas frecuentes',
  faqTitle: 'Preguntas frecuentes sobre Mysteryland.',
  ownSetAfter: 'history',

  sections: [
    {id: 'mysteryland-2027', heading: 'Mysteryland 2027, y por qué no hay edición de 2026', title: 'Mysteryland 2027, y por qué no hay edición de 2026.'},
    {id: 'where', heading: 'Dónde se celebra Mysteryland', title: 'Dónde se celebra Mysteryland.'},
    {id: 'how-big', heading: 'El tamaño de Mysteryland', title: 'El tamaño de Mysteryland.'},
    {id: 'history', heading: 'Una breve historia, y de quién es Mysteryland', title: 'Una breve historia, y de quién es Mysteryland.', subsections: ['usa-chile']},
    {id: 'famous', heading: 'Por qué Mysteryland es famoso', title: 'Por qué Mysteryland es famoso.'},
    {id: 'music', heading: 'Qué música suena de verdad', title: 'Qué música suena de verdad.', kicker: 'La música'},
    {id: 'from-home', heading: 'Escuchar Mysteryland desde casa', title: 'Escuchar Mysteryland desde casa.'}
  ],

  media: ({lang}) => ({
    // The owner's own music inside the text (the Spanish pages use Look).
    'thecatrave Look': ownTrackListening('look', 'Lejos de los grandes escenarios: future bass, glitch y breakbeat. Mi propio tema.', lang),
    'Main stage by the lake': figure('site-aerial-2018', 1200, 675,
      'Mysteryland 2018 visto desde el aire: un enorme escenario principal decorado junto a un lago, una multitud densa delante, y bosques, tiendas y caminos alrededor',
      'El escenario principal junto al lago, en el antiguo recinto de la Floriade, visto desde el aire en Mysteryland 2018. Foto: Niels de Vries, CC BY-SA 4.0.'),
    'View from the pyramid': figure('floriade-pano-2007', 1200, 397,
      'Un amplio panorama de un recinto de festival verde con una gran carpa roja, gente en los caminos, estanques y una hilera de árboles detrás',
      'Mysteryland en 2007, visto desde lo alto de la pirámide de hierba del recinto de la Floriade.'),
    'Cocoon area': figure('cocoon-2019', 1200, 900,
      'Un escenario bajo grandes árboles, enmarcado por tres enormes anillos trenzados, ante gente que baila al sol sobre una pista de madera',
      'El espacio Cocoon de Sven Väth entre los árboles en Mysteryland 2019, diecisiete años después de su primer espacio en el festival. Foto: Gerard Koymans, CC BY-SA 4.0.'),
    'Hardwell at Mysteryland 2014': figure('hardwell-2014', 1200, 500,
      'Hardwell tras los platos con los dos brazos en alto, llamas detrás de él y el público de noche al fondo',
      'Hardwell en Mysteryland en agosto de 2014. Volvió al escenario principal en 2023. Foto: Nicoalsemgeest.com, CC BY 2.0.'),
    'Q-dance stage': figure('q-dance-2019', 1200, 900,
      'El escenario de Q-dance en Mysteryland 2019, una estructura alada con una calavera en el centro, vista desde una pendiente de hierba abarrotada',
      'El escenario de hardstyle de Q-dance en Mysteryland 2019, con el público en la pendiente de arriba. Foto: Gerard Koymans, CC BY-SA 4.0.'),
    'z4cO-cpjPoU': articleYoutubeEmbed({
      src: 'https://www.youtube-nocookie.com/embed/z4cO-cpjPoU',
      title: 'Mysteryland 2025, Sunday Drone Endshow, en el canal de YouTube de Mysteryland'
    }),
    '_8acHa-APa8': articleVideoCollection({
      lang: 'es',
      label: 'El mismo escenario principal, un año después',
      description: 'Hardwell en 2023 en el escenario principal de Mysteryland y Charlotte de Witte en 2024 en el mismo escenario, los dos sets más vistos de las subidas recientes del festival.',
      items: [
        articleVideoCard({youtubeId: '_8acHa-APa8', genre: 'Main Stage, 2023', artist: 'Hardwell', title: 'Main Stage, Mysteryland 2023'}),
        articleVideoCard({youtubeId: 'mao2oVsWSxA', genre: 'Mainstage, 2024', artist: 'Charlotte de Witte', title: 'Mainstage, Mysteryland 2024'})
      ]
    }),
    'Table: history': articleTable({
      headers: ['Año', 'Lugar', 'Asistencia'],
      rows: [
        ['1993', 'Midland Circuit, Lelystad', 'no publicada'],
        ['1994', 'Maasvlakte, Róterdam', 'no publicada'],
        ['1995', 'sin festival', ''],
        ['1996', 'Aeródromo de Eindhoven', '25.000'],
        ['1997', 'Bussloo', '25.000'],
        ['1998', 'Lingebos', '25.000'],
        ['1999 y 2000', 'Bussloo', '35.000'],
        ['2001', 'Six Flags Holland', 'no publicada'],
        ['2002', 'Ruigoord, Ámsterdam', '20.000'],
        ['2003', 'Recinto de la Floriade, Haarlemmermeer', '40.000'],
        ['2004 y 2005', 'Recinto de la Floriade', 'más de 100.000 entre los dos años'],
        ['2007 a 2009', 'Recinto de la Floriade', 'más de 60.000 al año'],
        ['2013', 'Recinto de la Floriade', '60.000, completo'],
        ['2019', 'Recinto de la Floriade', 'más de 100.000 en el fin de semana'],
        ['2020 y 2021', 'ninguno', 'cancelado por la pandemia'],
        ['2025', 'Recinto de la Floriade', 'última edición en su forma actual'],
        ['2026', 'ninguno', 'en pausa'],
        ['2027', 'Haarlemmermeer', 'fechado del 27 al 29 de agosto']
      ].map(row => row.map(escapeHtml))
    })
  }),

  // The English page's sources, URL for URL, with translated labels.
  sources: [
    {href: 'https://nl.wikipedia.org/wiki/Mysteryland', label: 'Wikipedia (en neerlandés): Mysteryland'},
    {href: 'https://en.wikipedia.org/wiki/Mysteryland', label: 'Wikipedia (en inglés): Mysteryland'},
    {href: 'https://en.wikipedia.org/wiki/ID%26T', label: 'Wikipedia (en inglés): ID&T'},
    {href: 'https://www.mysteryland.nl/this-is-mysteryland', label: 'Mysteryland (en inglés): 32 años y lo que viene'},
    {href: 'https://www.mysteryland.nl/info', label: 'Mysteryland (en inglés): FAQ (fechas de 2027, lugar, edad mínima)'},
    {href: 'https://the-media-nanny_5.prowly.com/415471-mysteryland-celebrates-final-edition-in-its-current-iconic-form-next-month-set-to-return-in-2027-with-a-new-concept', label: 'Mysteryland (en inglés), comunicado: última edición en su forma actual, vuelta en 2027 con un concepto nuevo'},
    {href: 'https://www.digitalmusicnews.com/2025/07/24/mysteryland-announces-break-for-2026-will-return-in-2027/', label: 'Digital Music News (en inglés): Mysteryland en pausa en 2026, vuelta en 2027'},
    {href: 'https://www.festivalinsights.com/2025/08/mysteryland-announces-return-in-2027-after-creative-break/', label: 'Festival Insights (en inglés): vuelta en 2027 tras una pausa creativa'},
    {href: 'https://visithaarlemmermeer.nl/en/zien-doen/festival-events/mysteryland', label: 'Visit Haarlemmermeer (en inglés): Mysteryland, el mayor festival dance de los Países Bajos'},
    {href: 'https://www.spin.com/2013/08/mysteryland-festival-woodstock-site-us-original/', label: 'Spin (en inglés): Mysteryland en el recinto de Woodstock'},
    {href: 'https://www.billboard.com/music/music-news/mysteryland-usa-2017-canceled-lcd-soundsystem-geazy-major-lazer-woodstock-7760507/', label: 'Billboard (en inglés): Mysteryland USA 2017 cancelado'},
    {href: 'https://www.youtube.com/@mysteryland', label: 'Mysteryland en YouTube'}
  ],

  bandcamp: {
    description: 'Si esta guía te ha sido útil: mi propia música está en Bandcamp. Comprar un tema apoya directamente mi trabajo.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks de thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 de thecatrave'}
    ]
  }
};
