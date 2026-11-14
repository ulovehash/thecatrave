// Spanish Australian EDM festivals comparison. Structure, facts, dates and the
// "listado", "según la prensa" and "aún sin anunciar" labels from the English
// page (best-edm-festivals-australia-draft.md, build-australia-festivals-article.mjs),
// dated 31 October 2026.
//
// Spanish wording: Keyword Planner (Spain, Spanish; and Mexico, Argentina,
// Colombia and Chile, Spanish; 14 November 2026) returned no data for
// "festivales edm australia" or "festivales de musica electronica australia",
// and no Australian festival name among the ideas, so every term is unmeasured
// (keywords/es-australia-festivals.json).
//
// Maintenance: the dates are the English page's. Change them here and in the
// draft whenever the English page changes them; the page is registered in
// festival-editions.mjs with the other roundups.
//
// The images are the English page's, in img/australia-festivals/, with
// translated captions.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, ownPlaylistListening, ownSetListening, ownTrackListening
} from '../../site-components.mjs';

const fig = (name, width, height, alt, caption) => articleFigure({
  src: `img/australia-festivals/${name}-1200.webp`,
  srcset: `img/australia-festivals/${name}-320.webp 320w, img/australia-festivals/${name}-1200.webp 1200w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

const link = ([href, label]) => `<a href="${href}" target="_blank" rel="noopener noreferrer">${label}</a>`;

const festivals = [
  ['Subsonic', 'Monkerai, NSW', 'Del 13 al 15 de noviembre de 2026', 'Electrónica, cuatro escenarios', 'Camping', 'Un fin de semana en el bush'],
  ['Strawberry Fields', 'Tocumwal, NSW', 'Del 20 al 22 de noviembre de 2026 (listado)', 'Electrónica', 'Camping', 'El Murray en primavera'],
  ['Beyond the Valley', 'Hesse, Victoria', 'Del 28 de diciembre de 2026 al 1 de enero de 2027 (agotado)', 'EDM y más', 'Camping', 'La Nochevieja más grande'],
  ['Lost Paradise', 'Glenworth Valley, NSW', 'Del 28 de diciembre de 2026 al 1 de enero de 2027 (agotado)', 'Electrónica y más', 'Camping', 'Nochevieja cerca de Sídney'],
  ['Dreamstate', 'Sídney; Melbourne', '6 y 7 de febrero de 2027 (según la prensa)', 'Trance', 'Ciudad', 'Una gran noche'],
  ['Pitch', 'Moyston, Victoria', 'Del 5 al 9 de marzo de 2027 (agotado)', 'House, techno', 'Camping', 'Un festival con mentalidad de club'],
  ['Ultra Australia', 'Melbourne; Gold Coast', '17 y 18 de abril de 2027', 'EDM de gran escenario', 'Ciudad', 'Ultra sin salir del país'],
  ['Electric Island', 'Adelaida, Melbourne, Perth', 'Aún sin anunciar (2026: abril)', 'Electrónica', 'Ciudad', 'Un día junto al agua'],
  ['Knockout Outdoor', 'Sídney', 'Aún sin anunciar (2026: 3 de octubre)', 'Hardstyle, hardcore', 'Ciudad', 'Hard dance']
];

export default {
  lang: 'es',
  name: 'es-australia-festivals',
  file: 'es/festivales-edm-australia.html',
  draft: 'es/australia-festivals-draft.md',
  canonical: 'https://thecatrave.com/es/festivales-edm-australia',
  englishPath: '/best-edm-festivals-australia',
  ogImage: 'https://thecatrave.com/img/og/australia-festivals.jpg',
  bodyClass: 'article-page australia-festivals-page',
  minReadingMinutes: 6,

  title: 'Festivales EDM en Australia 2027: Beyond the Valley, Pitch',
  description: 'Festivales EDM en Australia 2027: Beyond the Valley en Nochevieja, Pitch del 5 al 9 de marzo, Ultra Australia en abril. Fechas, estados y sonido comparados.',
  datePublished: '2026-11-14',
  dateModified: '2026-11-14',
  dateLabel: '14 de noviembre de 2026',

  heroKicker: 'Guía de festivales 2027',
  heroTitle: 'Los mejores festivales EDM de Australia 2027',
  deck: 'Festivales EDM en Australia comparados por estado, sonido y época del año, de la Nochevieja en Victoria a los Grampians en marzo, con las fechas confirmadas y las que aún faltan.',
  answerLabel: 'Los mejores festivales EDM de Australia',
  breadcrumbName: 'Festivales EDM en Australia',

  answerSection: 'Respuesta',
  introSection: 'Introducción',
  introTitle: 'Una lista para elegir viaje.',
  faqSection: 'FAQ',
  faqLabel: 'Preguntas frecuentes sobre los festivales EDM en Australia',
  faqTitle: 'Preguntas frecuentes sobre los festivales EDM en Australia.',

  sections: [
    {id: 'criteria', heading: 'Cómo se ha hecho esta lista', title: 'Cómo se ha hecho esta lista.', tocLabel: 'Cómo se ha hecho la lista'},
    {id: 'at-a-glance', heading: 'Fechas de los festivales EDM en Australia 2027 de un vistazo', title: 'Fechas de los festivales EDM en Australia 2027 de un vistazo.', tocLabel: 'Fechas de un vistazo'},
    {id: 'biggest', heading: '¿Cuál es el festival EDM más grande de Australia?', title: '¿Cuál es el festival EDM más grande de Australia?', tocLabel: 'El festival EDM más grande'},
    {id: 'raves', heading: '¿Cuáles son las raves más grandes de Australia?', title: '¿Cuáles son las raves más grandes de Australia?', tocLabel: 'Las raves más grandes',
      subsections: ['dreamstate', 'knockout-outdoor', 'electric-island']},
    {id: 'victoria', heading: 'Melbourne y Victoria', title: 'Melbourne y Victoria.', tocLabel: 'Melbourne y Victoria'},
    {id: 'house-techno', heading: '¿Qué festivales son para house y techno?', title: '¿Qué festivales son para house y techno?', tocLabel: 'House y techno',
      subsections: ['pitch', 'strawberry-fields', 'subsonic']},
    {id: 'ultra', heading: '¿Ha vuelto Ultra a Australia?', title: '¿Ha vuelto Ultra a Australia?', tocLabel: 'Ultra Australia'},
    {id: 'not-listed', heading: 'Lo que no está en esta lista, y por qué', title: 'Lo que no está en esta lista, y por qué.', tocLabel: 'Fuera de la lista, y por qué'},
    {id: 'choose', heading: 'Cómo elegir', title: 'Cómo elegir.', tocLabel: 'Cómo elegir'}
  ],

  media: ({lang}) => ({
    'Table: dates': articleTable({label: 'Festivales EDM en Australia comparados, de 2026 a 2027',
      headers: ['Festival', 'Dónde', 'Próximas fechas', 'Sonido', 'Alojamiento', 'Ideal para'], rows: festivals}),
    grampians: fig('grampians-halls-gap', 1200, 800,
      'Los Grampians, en Victoria, vistos desde Halls Gap',
      'Los Grampians desde Halls Gap, la cordillera a cuyo pie se celebra Pitch. Foto: DXR, CC BY-SA 4.0.'),
    tocumwal: fig('tocumwal-beach', 1200, 803,
      'La playa del pueblo de Tocumwal, en el río Murray',
      'Tocumwal, en el río Murray, el pueblo más cercano a Strawberry Fields. Foto: Mattinbgn, CC BY 3.0.'),
    riverwood: fig('riverwood-downs', 1200, 398,
      'Una panorámica al atardecer sobre Riverwood Downs, en Monkerai',
      'Riverwood Downs, la casa de Subsonic. Foto: Marc Dalmulder, CC BY 2.0.'),
    intercell: articleVideoCollection({
      lang, label: 'Melbourne, desde casa',
      description: 'Clara Cuvé en Intercell, en Naarm/Melbourne, grabada por Intercell en 2025. Una DJ invitada en una noche de club de Melbourne.',
      items: [articleVideoCard({youtubeId: 'xBP4SB0Pbjw', genre: 'Melbourne, 2025', artist: 'Clara Cuvé', title: 'Intercell Naarm/Melbourne'})]
    }),
    playlist: ownPlaylistListening('rare-electronic-music', lang),
    track: ownTrackListening('late-summer-cloud-dance', 'Un tema corto mío de liquid breakbeat.', lang),
    'first-mix': ownSetListening(0, lang),
    'second-mix': ownSetListening(1, lang)
  }),

  sources: [
    {html: `Fechas de la web de cada festival: ${[
      ['https://beyondthevalley.com.au/', 'Beyond The Valley'], ['https://lostparadise.com.au/', 'Lost Paradise'], ['https://pitchfestival.com.au/', 'Pitch'],
      ['https://subsonicmusic.com.au/', 'Subsonic'], ['https://ultraaustralia.com/', 'Ultra Australia']
    ].map(link).join(', ')} y la ${link(['https://events.humanitix.com/emergentform', 'página de entradas de Rainbow Spirit'])} (en inglés).`},
    {html: `Fechas listadas o publicadas en prensa: Strawberry Fields (${link(['https://www.nsw.gov.au/visiting-and-exploring-nsw/nsw-events/strawberry-fields-festival', 'NSW Government events'])}), Dreamstate (${link(['https://www.sydneyshowground.com.au/whats-on/dreamstate/', 'Sydney Showground'])}, ${link(['https://www.noise11.com/news/tiesto-dreamstate-australia-2027-trance-set-20260615', 'Noise11'])}), Electric Island (${link(['https://www.thenote.com.au/news/edm-festival-electric-island-returns-in-2026', 'The Note'])}), Knockout Outdoor (${link(['https://www.thatfestivalsite.com/article/Knockout%20Outdoor%202026%20Ticket%20Prices%20Revealed', 'That Festival Site'])}). Todas en inglés.`},
    {html: `Cancelación de hypersonic: ${link(['https://hypersonicfestival.au/', 'hypersonicfestival.au'])} (en inglés).`},
    {html: `Asistencia de Beyond The Valley: ${link(['https://themusicnetwork.com/news/beyond-the-valley-sells-out-in-presale', 'The Music Network'])} y ${link(['https://au.rollingstone.com/music/music-news/beyond-the-valley-rings-in-2026-with-record-crowds-89376/', 'Rolling Stone Australia'])} (en inglés).`},
    {href: 'https://djmag.com/top100festivals', label: 'DJ Mag (en inglés): Top 100 Festivals 2026'}
  ],

  bandcamp: {
    description: 'Entre festival y festival, la música que hago yo mismo: breaks con techno y dub dentro. Comprar un lanzamiento apoya directamente mi trabajo.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 de thecatrave'},
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks de thecatrave'}
    ]
  }
};
