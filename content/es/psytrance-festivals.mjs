// Spanish psytrance festivals roundup. Structure, facts, dates and the
// "en agendas" labels from the English page (best-psytrance-festivals-draft.md,
// build-psytrance-festivals-article.mjs), checked there on 31 October 2026.
//
// Spanish wording: Keyword Planner, Spain and Mexico+Argentina+Colombia+Chile,
// Spanish, 14 November 2026 (buckets only). The google.es SERP the same day
// showed no People also ask and no related searches. The map is
// keywords/es-psytrance-festivals.json. The organiser spells it Universo
// Paralello; the page follows the organiser.
//
// Maintenance: the dates are the English page's. Change them here and in the
// draft whenever the English page changes them; roll to 2028 in September 2027
// with the English page.
//
// The images are the English page's, in img/psytrance-festivals/, with
// translated alt text and captions.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, ownPlaylistListening, ownSetListening, ownTrackListening
} from '../../site-components.mjs';

const fig = (name, width, height, alt, caption) => articleFigure({
  src: `img/psytrance-festivals/${name}-1200.webp`,
  srcset: `img/psytrance-festivals/${name}-320.webp 320w, img/psytrance-festivals/${name}-1200.webp 1200w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

const link = ([href, label]) => `<a href="${href}" target="_blank" rel="noopener noreferrer">${label}</a>`;

const festivals = [
  ['Universo Paralello', 'Pratigi, Bahía, Brasil', 'En agendas desde el 27 de diciembre de 2026', 'Playa', 'Más de una semana', 'Año Nuevo al sol'],
  ['Rainbow Spirit', 'Glenaroua, Victoria, Australia', 'Del 5 al 8 de marzo', 'Monte', 'Cuatro días', 'El gran encuentro de Australia'],
  ['Burning Mountain', 'Zernez, Suiza', 'Del 24 al 27 de junio', 'Alpes, 1500 m', 'Cuatro días', 'Un entorno de montaña'],
  ['VooV', 'Putlitz, Alemania', 'En agendas del 16 al 19 de julio', 'Campo', 'Cuatro días', 'Un encuentro más pequeño en Alemania'],
  ['Boom', 'Idanha-a-Nova, Portugal', 'Del 18 al 25 de julio, agotado', 'Lago', 'Ocho días', 'El programa más amplio'],
  ['Ozora', 'Dádpuszta, Hungría', 'En agendas del 23 de julio al 3 de agosto', 'Colinas abiertas', 'Unos doce días', 'La estancia larga'],
  ['Mo:Dem', 'Primišlje, Croacia', 'Del 2 al 8 de agosto', 'Valle de río', 'Siete días', 'Sonidos más oscuros'],
  ['Indian Spirit', 'Eldena, Alemania', 'Del 25 al 30 de agosto', 'Campo', 'Seis días', 'Un gran encuentro en Alemania'],
  ['Hadra', 'Allier, Francia', 'Sin anunciar (2026: del 27 al 30 de agosto)', 'Lago', 'Cuatro días', 'Un fin de semana de verano en Francia'],
  ['Own Spirit', 'Huesca, España', 'Del 1 al 6 de septiembre', 'Embalse', 'Seis días', 'El final del verano']
];

export default {
  lang: 'es',
  name: 'es-psytrance-festivals',
  file: 'es/festivales-psytrance.html',
  draft: 'es/psytrance-festivals-draft.md',
  canonical: 'https://thecatrave.com/es/festivales-psytrance',
  englishPath: '/best-psytrance-festivals',
  ogImage: 'https://thecatrave.com/img/og/psytrance-festivals.jpg',
  bodyClass: 'article-page psytrance-festivals-page',
  minReadingMinutes: 7,

  title: 'Festivales de psytrance 2027: Ozora, Boom y Universo Paralello',
  description: 'Los mejores festivales de psytrance 2027, con fechas, entorno y qué esperar, de Boom en Portugal y Ozora en Hungría a Universo Paralello en Brasil.',
  datePublished: '2026-11-14',
  dateModified: '2026-11-14',
  dateLabel: '14 de noviembre de 2026',

  heroKicker: 'Guía de festivales 2027',
  heroTitle: 'Los mejores festivales de psytrance 2027',
  deck: 'Los principales festivales de psytrance comparados por lugar, duración y ambiente, de Boom y Ozora al monte del centro de Victoria, con las fechas de 2027 ya confirmadas y las que siguen pendientes.',
  answerLabel: 'Los mejores festivales de psytrance',
  breadcrumbName: 'Festivales de psytrance',

  answerSection: 'Respuesta',
  introSection: 'Introducción',
  introTitle: 'Una lista para elegir uno.',
  faqSection: 'FAQ',
  faqLabel: 'Preguntas frecuentes sobre los festivales de psytrance',
  faqTitle: 'Preguntas frecuentes sobre los festivales de psytrance.',

  sections: [
    {id: 'criteria', heading: 'Cómo se ha hecho esta lista', title: 'Cómo se ha hecho esta lista.'},
    {id: 'at-a-glance', heading: 'Las fechas de los festivales de psytrance 2027 de un vistazo', title: 'Las fechas de los festivales de psytrance 2027 de un vistazo.', tocLabel: 'Las fechas de 2027 de un vistazo'},
    {id: 'biggest', heading: '¿Cuál es el festival de psytrance más grande?', title: '¿Cuál es el festival de psytrance más grande?', tocLabel: 'El festival de psytrance más grande',
      subsections: ['boom', 'ozora', 'universo-paralello']},
    {id: 'europe', heading: '¿Cuáles son los mejores festivales de psytrance en Europa?', title: '¿Cuáles son los mejores festivales de psytrance en Europa?', tocLabel: 'Festivales de psytrance en Europa',
      subsections: ['voov', 'hadra', 'own-spirit', 'mo-dem', 'burning-mountain', 'indian-spirit']},
    {id: 'usa', heading: '¿Hay festivales de psytrance en Estados Unidos?', title: '¿Hay festivales de psytrance en Estados Unidos?', tocLabel: 'Festivales de psytrance en Estados Unidos'},
    {id: 'australia', heading: '¿Dónde están los mejores festivales de psytrance de Australia?', title: '¿Dónde están los mejores festivales de psytrance de Australia?', tocLabel: 'Festivales de psytrance en Australia',
      subsections: ['rainbow-spirit', 'wild-horses']},
    {id: 'not-listed', heading: 'Lo que no está en esta lista, y por qué', title: 'Lo que no está en esta lista, y por qué.'},
    {id: 'choose', heading: 'Cómo elegir', title: 'Cómo elegir.'}
  ],

  media: ({lang}) => ({
    'Table: dates': articleTable({label: 'Festivales de psytrance comparados, 2027',
      headers: ['Festival', 'Dónde', 'Fechas de 2027', 'Entorno', 'Duración', 'Ideal para'], rows: festivals}),
    blanka: articleVideoCollection({
      lang, label: 'Psytrance, desde casa',
      description: 'BLANKA para Boiler Room en Varsovia, grabada en 2026.',
      items: [articleVideoCard({youtubeId: 'VF1Dy_RGJS4', genre: 'Varsovia, 2026', artist: 'BLANKA', title: 'Boiler Room: Warsaw'})]
    }),
    boom: fig('boom-being-fields-2018', 1200, 800,
      'El Boom Festival visto desde los Being Fields, 2018',
      'Boom 2018, visto desde los Being Fields. Foto: Racheland Deckard, CC BY-SA 4.0.'),
    ozora: fig('ozora-horizon-2018', 1200, 400,
      'Una vista amplia del horizonte sobre el recinto de Ozora, 2018',
      'El horizonte de Ozora en 2018. Foto: Max Ambio, CC0.'),
    universo: fig('universo-paralello-2009', 1200, 900,
      'Universo Paralello en la costa de Bahía, Brasil, 2009',
      'Universo Paralello en el Año Nuevo de 2009. Foto: Marco Langebeeke, CC BY 2.0.'),
    voov: fig('voov-2005', 1024, 768,
      'El festival VooV Experience en Alemania, 2005',
      'VooV en julio de 2005. Foto: Andy Weisner, CC BY-SA 2.0.'),
    hadra: fig('hadra-main-stage-2019', 1200, 721,
      'El escenario principal del Hadra Trance Festival en Francia, 2019',
      'El escenario principal de Hadra en agosto de 2019. Foto: Louciie-13, CC BY-SA 4.0, recortada.'),
    rainbow: fig('rainbow-serpent-2019', 1200, 900,
      'Un arcoíris sobre el público de Rainbow Serpent, en Victoria, en enero de 2019',
      'Rainbow Serpent, como se llamaba entonces el festival, en enero de 2019. Foto: RaimbowTomcat, CC BY-SA 4.0.'),
    playlist: ownPlaylistListening('rare-electronic-music', lang),
    'own-track': ownTrackListening('late-summer-cloud-dance', 'Un tema corto mío de liquid breakbeat.', lang),
    'first-mix': ownSetListening(0, lang),
    'second-mix': ownSetListening(1, lang)
  }),

  sources: [
    {html: `Fechas de 2027 de la web de cada festival: ${[
      ['https://www.boomfestival.org/', 'Boom'], ['https://burning-mountain.ch/', 'Burning Mountain'], ['https://www.ownspiritfestival.org/', 'Own Spirit'],
      ['https://indian-spirit.de/', 'Indian Spirit'], ['https://modemfestival.com/home/', 'Mo:Dem']
    ].map(link).join(', ')}; Rainbow Spirit, de su ${link(['https://events.humanitix.com/emergentform', 'página de entradas'])} (en inglés).`},
    {href: 'https://www.boomfestival.org/news/boom-2027-tickets-sold-out', label: 'Entradas de Boom: Boom, 13 de octubre de 2026 (en inglés)'},
    {html: 'Fechas en agendas: Technoairlines (VooV, Ozora), Techno Univers y Shotgun (Universo Paralello).'},
    {html: `Asistencia de Boom: Lusa en ${link(['https://www.noticiasaominuto.com/cultura/2827192/boom-festival-teve-a-presenca-de-824-artistas-e-37286-pessoas', 'Notícias ao Minuto'])} (en portugués), 24 de julio de 2025, y ${link(['https://boomfestival.org/news/letter-to-the-boomers-2025', 'la carta de Boom tras la edición de 2025'])} (en inglés).`},
    {href: 'https://xpatloop.com/channels/2026/08/inside-ozora-how-safe-is-hungary%E2%80%99s-world-famous-psychedelic-festival.html', label: 'Asistencia de Ozora: XpatLoop (en inglés)'},
    {html: 'Asistencia de Indian Spirit: Grateful Web.'},
    {html: `Shankra: ${link(['https://www.suedostschweiz.ch/schweiz-und-welt/shankra-festival-2026-in-lostallo-gr-zum-dritten-mal-abgesagt-1911274', 'Südostschweiz'])} (en alemán) y ${link(['https://www.rsi.ch/info/ticino-grigioni-e-insubria/Lostallo-niente-Shankra-Festival-per-il-terzo-anno-consecutivo--3789770.html', 'RSI'])} (en italiano), junio de 2026.`},
    {html: `Wild Horses: ${link(['https://beat.com.au/one-of-victorias-wildest-festivals-turns-10-this-november/', 'Beat'])} (en inglés). Hadra: ${link(['https://hadratrancefestival.net/', 'la web del propio festival'])}.`},
    {html: 'Festival de A State of Trance en Estados Unidos: Insomniac y EDM.com. Equinox Teaser USA: Bandsintown.'}
  ],

  bandcamp: {
    description: 'Entre festival y festival, la música que hago yo: breaks con techno y dub dentro. Si compras un lanzamiento, apoyas mi trabajo directamente.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 de thecatrave'},
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks de thecatrave'}
    ]
  }
};
