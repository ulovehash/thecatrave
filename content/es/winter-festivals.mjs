// Spanish winter festivals guide. Structure, facts, dates and the Confirmada/Listada labels
// from the English page (best-winter-music-festivals-draft.md, build-winter-festivals-article.mjs),
// checked there on 4 October 2026. The page has no French or German version.
//
// Spanish wording follows the live es-ES SERP and People-also-ask read on 9 Oct 2026
// (google.es, hl=es, gl=es): results write "festivales de música electrónica en invierno" and
// "festivales en la nieve" / "festivales de invierno"; People also ask "¿Cuáles son los mejores
// festivales en la nieve?", which is the FAQ that carries the English "rave in the snow" answer.
// The other PAA questions are summer or Spain-wide and the English page has no facts for them.
// Keyword Planner returned no row (keywords/es-winter-festivals.json).
//
// Maintenance: registered in festival-editions.mjs with the other roundups; re-read every row
// when the English page's dates change.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, ownSetListening
} from '../../site-components.mjs';

const fig = (name, width, height, alt, caption) => articleFigure({
  src: `img/winter-festivals/${name}-1200.webp`,
  srcset: `img/winter-festivals/${name}-320.webp 320w, img/winter-festivals/${name}-1200.webp 1200w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

export default {
  lang: 'es',
  name: 'es-winter-festivals',
  file: 'es/festivales-invierno.html',
  draft: 'es/winter-festivals-draft.md',
  canonical: 'https://thecatrave.com/es/festivales-invierno',
  englishPath: '/best-winter-music-festivals',
  ogImage: 'https://thecatrave.com/img/og/winter-festivals.jpg',
  bodyClass: 'article-page winter-festivals-page',
  minReadingMinutes: 7,

  title: 'Festivales de invierno 2027: Snowbombing, Igloofest, CTM',
  description: 'Festivales de música electrónica de invierno en 2027, de Tomorrowland Winter y Snowbombing a CTM, Elevate y Shapes, con las fechas confirmadas o sin confirmar.',
  datePublished: '2026-10-09',
  dateModified: '2026-10-09',
  dateLabel: '9 de octubre de 2026',

  heroKicker: 'Guía de festivales 2027',
  heroTitle: 'Los mejores festivales de música de invierno en 2027',
  deck: 'Qué festivales de invierno son los más grandes, cuáles son los mejores para house y techno en la montaña y cuáles recomienda la prensa musical especializada, con cada fecha marcada como confirmada o sin confirmar.',
  answerLabel: 'Festivales de música de invierno 2027',
  breadcrumbName: 'Festivales de música de invierno',

  answerSection: 'Respuesta',
  introSection: 'Introducción',
  introTitle: 'Un viaje distinto de un festival de verano.',
  faqSection: 'FAQ',
  faqLabel: 'Preguntas frecuentes sobre los festivales de invierno',
  faqTitle: 'Preguntas frecuentes sobre los festivales de invierno.',

  sections: [
    {id: 'method', heading: 'Cómo se ha hecho esta lista', title: 'Cómo se ha hecho esta lista.'},
    {id: 'dates', heading: 'Las fechas de los festivales de invierno de 2027 de un vistazo', title: 'Las fechas de los festivales de invierno de 2027 de un vistazo.', tocLabel: 'Las fechas de un vistazo'},
    {id: 'biggest', heading: '¿Cuáles son los festivales de invierno más grandes?', title: '¿Cuáles son los festivales de invierno más grandes?', tocLabel: 'Los más grandes',
      subsections: ['tomorrowland-winter', 'snowbombing', 'igloofest', 'snow-machine', 'nameless-winter', 'contact-winter']},
    {id: 'mountain', heading: '¿Qué festivales de invierno son los mejores para house y techno en la montaña?', title: '¿Qué festivales de invierno son los mejores para house y techno en la montaña?', tocLabel: 'House y techno en la montaña',
      subsections: ['hibernation', 'caprices', 'shapes']},
    {id: 'quiet', heading: '¿Qué festivales de invierno recomienda la prensa musical especializada?', title: '¿Qué festivales de invierno recomienda la prensa musical especializada?', tocLabel: 'Los que recomienda la prensa',
      subsections: ['ctm', 'elevate', 'rise', 'astropolis-l-hiver']},
    {id: 'choose', heading: 'Cómo elegir', title: 'Cómo elegir.'}
  ],

  media: ({lang}) => ({
    'Table: dates': articleTable({label: 'Fechas de los festivales de invierno de 2027',
      headers: ['Festival', 'Dónde', 'Fechas', 'Fuente'],
      rows: [
        ['Rise', 'Les 2 Alpes, Francia', '5 al 12 de diciembre de 2026', 'Listada'],
        ['Contact Winter', 'Vancouver, Canadá', '26 y 27 de diciembre de 2026', 'Listada'],
        ['Igloofest', 'Montreal, Canadá', '14 de enero al 6 de febrero de 2027', 'Confirmada'],
        ['CTM', 'Berlín, Alemania', '22 al 31 de enero de 2027', 'Confirmada'],
        ['Astropolis l’Hiver', 'Brest, Francia', 'Febrero de 2027, fechas sin anunciar', 'Sin confirmar'],
        ['Nameless Winter', 'Barzio, Italia', '13 y 14 de febrero de 2027', 'Listada'],
        ['Snow Machine', 'Hakuba, Japón', '2 al 7 de marzo de 2027', 'Listada'],
        ['Elevate', 'Graz, Austria', '4 al 7 de marzo de 2027', 'Confirmada'],
        ['Caprices', 'Gstaad, Suiza', '12 al 14 y 19 al 21 de marzo de 2027', 'Listada'],
        ['Shapes', 'Leysin, Suiza', '15 al 21 de marzo de 2027', 'Confirmada'],
        ['Hibernation', 'Pas de la Casa, Andorra', '19 al 21 de marzo de 2027', 'Listada, poco fiable'],
        ['Tomorrowland Winter', 'Alpe d’Huez, Francia', '20 al 27 de marzo de 2027', 'Listada'],
        ['Snowbombing', 'Mayrhofen, Austria', '5 al 10 de abril de 2027', 'Confirmada']
      ]}),
    'alpe-dhuez': fig('alpe-dhuez-2026', 1200, 800,
      'La vista desde el Pic Blanc sobre Alpe d’Huez en abril de 2026',
      'La vista desde el Pic Blanc sobre Alpe d’Huez, abril de 2026. Foto: DimiTalen, CC0.'),
    'igloofest': fig('igloofest-2009', 1200, 800,
      'Igloofest en Montreal en enero de 2009',
      'Igloofest en Montreal, enero de 2009. Foto: Francis Bourgouin, CC BY 2.0.'),
    'gstaad': fig('gstaad-village', 1200, 900,
      'Un panorama del pueblo de Gstaad, en Suiza',
      'Gstaad, Suiza, noviembre de 2011. Foto: GstaadTourismus, CC BY-SA 3.0.'),
    'leysin': fig('leysin-twilight', 1200, 675,
      'Leysin, en Suiza, al anochecer',
      'Anochecer en Leysin, Suiza. Foto: Deali00, CC BY-SA 4.0.'),
    'elevate': fig('elevate-2019-truth', 1200, 800,
      'Letras blancas que forman la palabra Truth colgadas sobre una cortina negra en Elevate Festival 2019, en Graz',
      '«Truth», el tema de Elevate Festival 2019 en Graz. Foto: Jean-Frédéric, CC0.'),
    'caprices-set': articleVideoCollection({
      lang, label: 'Caprices, desde casa',
      description: 'Una emisión de Beatport desde Caprices, 2021.',
      items: [articleVideoCard({youtubeId: '9nJngddp7XA', genre: 'Caprices, 2021', artist: 'Beatport', title: 'Beatport X Caprices'})]
    }),
    'owner-first': ownSetListening(0, lang),
    'owner-second': ownSetListening(1, lang)
  }),

  sources: [
    {html: 'Fechas confirmadas, leídas el 4 de octubre de 2026: <a href="https://igloofest.ca" target="_blank" rel="noopener noreferrer">Igloofest</a>, <a href="https://ctm-festival.de" target="_blank" rel="noopener noreferrer">CTM Festival</a>, <a href="https://elevate.at" target="_blank" rel="noopener noreferrer">Elevate</a>, <a href="https://shapesfestival.ch" target="_blank" rel="noopener noreferrer">Shapes</a> y <a href="https://snowbombing.com/info" target="_blank" rel="noopener noreferrer">Snowbombing</a>.'},
    {html: 'Fechas listadas (webs de festivales, vendedores de entradas y páginas de promotores, con una segunda fuente para cada una): Tomorrowland Winter, Snow Machine, Nameless Winter, Caprices, Hibernation, Rise y Contact Winter.'},
    {html: 'Cobertura de prensa de las opciones más tranquilas: Resident Advisor (CTM, Elevate, Shapes, Rise, Caprices), Pitchfork (CTM) y The Quietus (Elevate).'}
  ],

  bandcamp: {
    description: 'Entre festivales, la música que hago yo mismo. Comprar un lanzamiento apoya directamente mi trabajo.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 de thecatrave'},
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks de thecatrave'}
    ]
  }
};
