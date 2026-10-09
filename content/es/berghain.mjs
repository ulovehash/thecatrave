// Spanish Berghain guide. Structure, facts and media from the English page
// (berghain-draft.md, build-berghain-article.mjs); practical information is the
// English page's, read on 2026-10-04 from berghain.berlin: keep it aligned.
//
// Spanish keywords, measured 2026-10-09 with Keyword Planner (Spain,
// keywords/es-berghain.json): berghain 10K-100K, berghain berlin 1K-10K,
// berghain dress code 100-1K, que es berghain 100-1K. Live es-ES SERP and
// People-also-ask read the same day (google.es, hl=es, gl=es): Wikipedia,
// visitBerlin and "cómo entrar" articles lead, and People also ask "¿Qué es la
// fiesta Berghain?", "¿Qué tan difícil es entrar a Berghain?", "¿Qué tiene de
// especial Berghain?". The first three are FAQ entries answered only with facts
// already on the English page; the Rosalía song question is not applied.
// Images are the English guide's, in img/berghain/, with translated captions.
import {
  articleFigure, articleVideoCard, articleVideoCollection, ownSetListening
} from '../../site-components.mjs';

const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/berghain/${name}-${width}.webp`,
  srcset: `img/berghain/${name}-320.webp 320w, img/berghain/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

const ext = (href, text) => `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`;

export default {
  lang: 'es',
  name: 'es-berghain',
  file: 'es/berghain.html',
  draft: 'es/berghain-draft.md',
  canonical: 'https://thecatrave.com/es/berghain',
  englishPath: '/berghain',
  ogImage: 'https://thecatrave.com/img/og/berghain.jpg',
  bodyClass: 'article-page berghain-page',
  minReadingMinutes: 6,
  image: 'https://thecatrave.com/img/berghain/berghain-facade-1200.webp',

  title: 'Berghain Berlín: qué es, Panorama Bar, sonido y residentes',
  description: 'Berghain explicado: la antigua central, Panorama Bar arriba, la Halle, la Kantine, la entrada, el dress code y el sello Ostgut Ton.',
  datePublished: '2026-10-09',
  dateModified: '2026-10-09',
  dateLabel: '9 de octubre de 2026',

  heroKicker: 'Guía de club, Berlín',
  heroTitle: 'Berghain Berlín: qué es, Panorama Bar, sonido y residentes',
  deck: 'El club berlinés de una antigua central: sus pisos, la Halle y la Kantine, quién pincha, el sistema de sonido y los horarios y precios que lista la web oficial.',
  answerLabel: 'Berghain',
  breadcrumbName: 'Berghain',

  answerSection: 'Respuesta',
  introSection: 'Introducción',
  introTitle: 'Una central en Friedrichshain.',
  faqSection: 'FAQ',
  faqLabel: 'Preguntas frecuentes',
  faqTitle: 'Preguntas frecuentes sobre Berghain.',

  sections: [
    {id: 'panorama-bar', heading: '¿Qué es Panorama Bar?', title: '¿Qué es Panorama Bar?'},
    {id: 'halle', heading: '¿Qué es la Halle am Berghain?', title: '¿Qué es la Halle am Berghain?'},
    {id: 'kantine', heading: '¿Qué es la Kantine de Berghain?', title: '¿Qué es la Kantine de Berghain?', tocLabel: '¿Qué es la Kantine?'},
    {id: 'lineup', heading: '¿Quién pincha en Berghain?', title: '¿Quién pincha en Berghain?'},
    {id: 'sound', heading: '¿Cómo suena Berghain?', title: '¿Cómo suena Berghain?'},
    {id: 'hours-tickets', heading: 'Horarios y entradas', title: 'Horarios y entradas de Berghain', subsections: ['opening-hours', 'entry-and-prices', 'dress-code', 'queue', 'accessibility-and-support-inside', 'getting-there-and-getting-home']}
  ],

  media: ({lang}) => ({
    'thecatrave mix 0': ownSetListening(0, lang, 'Una mezcla de DJ para escuchar mientras lees sobre el piso berlinés de arriba. Mi propia mezcla.'),
    'thecatrave mix 1': ownSetListening(1, lang),
    facade: figure('berghain-facade', 1200, 900,
      'La fachada gris neoclásica del edificio de Berghain en Berlín, con algunas personas en la entrada y bicicletas aparcadas detrás de unas vallas',
      'El edificio de Berghain en Berlín, junio de 2007. Foto: Jane Mejdahl, CC BY-SA 2.0.'),
    street: figure('berghain-heizkraftwerk', 1200, 1200,
      'La esquina del edificio de Berghain vista desde Am Wriezener Bahnhof, con una escultura oxidada y grafitis a pie de calle',
      'Berghain visto desde Am Wriezener Bahnhof, 8 de agosto de 2024, recortada. Foto: Gunnar Klack, CC BY-SA 4.0.'),
    queue: figure('berghain-queue', 1200, 808,
      'Personas detrás de vallas metálicas delante de la entrada de Berghain, cubierta de grafitis',
      'Personas esperando en la entrada de Berghain, diciembre de 2019. Foto: Ben Kaden, CC BY 2.0.'),
    Residents: articleVideoCollection({
      lang,
      label: 'Sets de DJ residentes de Berghain',
      description: 'Sets de Boiler Room Berlín de cuatro DJ a los que la prensa llama residentes de Berghain o de Panorama Bar.',
      items: [
        articleVideoCard({youtubeId: 'DGWL7YI_2rI', genre: 'Boiler Room', artist: 'Ben Klock', title: 'Ben Klock Boiler Room Berlin DJ Set'}),
        articleVideoCard({youtubeId: 'jQRI3b2SX8c', genre: 'Boiler Room', artist: 'Len Faki', title: 'Len Faki Boiler Room Berlin DJ Set'}),
        articleVideoCard({youtubeId: 'fgYVNi1vK1E', genre: 'Boiler Room', artist: 'Prosumer', title: 'Prosumer Boiler Room Berlin DJ Set'}),
        articleVideoCard({youtubeId: '0EX18zMgGig', genre: 'Boiler Room', artist: 'Tama Sumo', title: 'Tama Sumo Boiler Room Berlin DJ Set'})
      ]
    })
  }),

  sources: [
    {html: `Programa, pisos, precios, horarios, dirección e información práctica: ${ext('https://www.berghain.berlin/en/', 'berghain.berlin')}, ${ext('https://www.berghain.berlin/en/program/', 'programa')}, ${ext('https://www.berghain.berlin/en/program/kantine-am-berghain/', 'programa de la Kantine')}, ${ext('https://www.berghain.berlin/en/program/halle/', 'programa de la Halle')}, ${ext('https://www.berghain.berlin/en/contact', 'página de contacto')}, ${ext('https://www.berghain.berlin/en/awareness/', 'página de awareness')} y ${ext('https://www.berghain.berlin/en/program/archive/2026/05/', 'archivo del programa 2026')}.`},
    {html: `Historia del edificio, antiguos usos de los espacios y capacidad: ${ext('https://industriekultur.berlin/ort/berghain/', 'Berliner Zentrum Industriekultur')}. Protección: ${ext('https://denkmaldatenbank.berlin.de/daobj.php?obj_dok_nr=09085197', 'Landesdenkmalamt Berlin, Denkmaldatenbank, objeto 09085197')}.`},
    {html: `Interior, instalación del vestíbulo y diseño de Panorama Bar: ${ext('https://www.karhard.de/projects/berghain', 'Karhard Architekten, página de proyecto de Berghain')}.`},
    {html: `Fechas de Ostgut y residentes: ${ext('https://crackmagazine.net/article/long-reads/now-time-marcel-dettmann-ben-klock-interviewed/', 'Crack, entrevista con Marcel Dettmann y Ben Klock, 2017')} y ${ext('https://groove.de/2022/10/10/ein-nachruf-auf-ostgut-booking-mehr-als-ein-weiterer-technoclub/', 'Groove, obituario de Ostgut Booking, 2022')}.`},
    {html: `Sistema de sonido: ${ext('https://mixmag.net/read/berghain-updates-soundsystem-funktion-one-news', 'Mixmag, 18 de octubre de 2023')} y ${ext('https://groove.de/2023/10/23/berghain-soundanlage-nach-18-jahren-ausgetauscht/', 'Groove, 23 de octubre de 2023')}. Serie de mezclas: ${ext('https://ra.co/news/12034', 'Resident Advisor, 26 de abril de 2010')}.`}
  ],

  bandcamp: {
    description: 'Entre dos noches de club, la música que hago yo mismo. Comprar una apoya mi trabajo directamente.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 de thecatrave'},
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks de thecatrave'}
    ]
  }
};
