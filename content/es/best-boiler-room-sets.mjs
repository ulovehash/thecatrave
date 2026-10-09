// Spanish Boiler Room guide. Figures, players, table and the Len Faki audio are
// the English page's (build-boiler-room-article.mjs), shared through
// content/boiler-room-shared.mjs; the draft is es/best-boiler-room-sets-draft.md.
// The summary banner is the draft's "Respuesta" section.
//
// Spanish keywords: Keyword Planner (Spain, 9 Oct 2026) returned a 1K-10K bucket
// for "boiler room" alone and no row for "mejores sets boiler room" or "boiler
// room sets" (keywords/es-best-boiler-room-sets.json). Live es-ES SERP read the
// same day (google.es, hl=es, gl=es): "¿Cuál es el mejor Boiler Room de todos
// los tiempos?", "El TOP 10 de las Boiler Room más vistas de la década", "Los 8
// mejores sets de Boiler Room". The title and answer follow that wording; the
// FAQ already answers the best-ever and most-watched questions.
import {boilerRoomMedia, anchors} from '../boiler-room-shared.mjs';

const text = {
  cities: {Tulum: 'Tulum', Ibiza: 'Ibiza', London: 'Londres', 'Montréal': 'Montreal', Tokyo: 'Tokio', Berlin: 'Berlín', Amsterdam: 'Ámsterdam', Ramallah: 'Ramala'},
  millions: value => `${value} M`,
  tableHeaders: ['#', 'Set', 'Filmado en', 'Año', 'Reproducciones', 'Likes', 'Likes por 1.000 reproducciones'],
  youtubeTitle: label => `${label}, en el canal de YouTube de Boiler Room`,
  ownMix: 'Entre las dos listas, un set que nunca se filmó: breaks que pasan por el garage, la bass music, el techno y el grime. Mi propia mezcla.',
  band: {
    kicker: 'Para escuchar',
    title: 'Len Faki, Boiler Room Berlín, 2014.',
    description: 'La versión en audio publicada por Boiler Room del set clasificado en undécimo lugar más abajo. Noventa y tres minutos de techno, y la prueba más justa para saber si un set funciona sin imagen.'
  },
  figures: {
    fred: {
      alt: 'Fred again.. en el escenario del Crystal Palace Bowl, en Londres',
      caption: 'Fred again.. en el Crystal Palace Bowl, Londres, en agosto de 2025, en el escenario con Skepta, tres años después del set de Boiler Room que tiene más likes que ningún otro. Foto: Raph_PH, CC BY 4.0.'
    },
    cox: {
      alt: 'Carl Cox en los platos en el Amsterdam Dance Event en 2012',
      caption: 'Carl Cox en el Amsterdam Dance Event en octubre de 2012, diez meses antes del set de la villa que sigue siendo el segundo más visto de los archivos de Boiler Room. Foto: Sergey Kozak, CC BY 2.0.'
    },
    ez: {
      alt: 'DJ EZ en 2012',
      caption: 'DJ EZ en 2012, el año de su Boiler Room de 45 minutos con la Red Bull Music Academy, que por sí solo suma 2,8 millones de reproducciones. El set de tres horas llegó dos años después. Foto: Gareth Morton, CC BY 2.0.'
    },
    sama: {
      alt: "Sama' Abdulhadi en los platos en el Festival Internacional Cervantino de Guanajuato, México, en 2025",
      caption: "Sama' Abdulhadi en el Festival Internacional Cervantino de Guanajuato, México, en 2025. Antes de Ramala en 2018 era una DJ local respetada; el set de Boiler Room entre ambos es el caso más claro de los archivos del formato que hace una carrera. Foto: TSolange, CC BY-SA 4.0."
    },
    selector: {
      alt: 'El Selector de thecatrave, limitado a Boiler Room (interfaz en inglés)',
      caption: 'El Selector limitado a Boiler Room, la fuente de cada cifra de esta página (interfaz en inglés). <a href="/selector">Ábrelo</a> y pulsa el botón: un set de Boiler Room, o uno de todo el catálogo, elegido por ti.'
    }
  }
};

export default {
  lang: 'es',
  name: 'es-best-boiler-room-sets',
  file: 'es/mejores-sets-boiler-room.html',
  draft: 'es/best-boiler-room-sets-draft.md',
  canonical: 'https://thecatrave.com/es/mejores-sets-boiler-room',
  englishPath: '/best-boiler-room-sets',
  ogImage: 'https://thecatrave.com/img/og/best-boiler-room-sets.jpg',
  bodyClass: 'article-page boiler-room-page',

  title: 'Los mejores sets de Boiler Room de todos los tiempos',
  description: 'Los mejores sets de Boiler Room, de Carl Cox en Ibiza a Fred again.. en Londres, junto a los más vistos, contados sobre 8.206 grabaciones.',
  datePublished: '2026-10-09',
  dateModified: '2026-10-09',
  dateLabel: '9 de octubre de 2026',

  heroKicker: 'Boiler Room',
  heroTitle: 'Los mejores sets de Boiler Room de todos los tiempos',
  deck: 'Dos listas, separadas: los diez sets de Boiler Room más vistos, medidos sobre 8.206 grabaciones, y dieciocho elegidos por lo que ocurre de verdad en ellos.',
  answerLabel: 'LOS MEJORES SETS DE BOILER ROOM',
  breadcrumbName: 'Los mejores sets de Boiler Room',

  answerSection: 'Respuesta',
  introSection: 'Introducción',
  introTitle: 'Dos listas, separadas.',
  faqSection: 'FAQ',
  faqLabel: 'FAQ',
  faqTitle: 'Sets de Boiler Room: preguntas frecuentes.',
  minReadingMinutes: 8,

  sections: [
    {id: 'what-makes', heading: 'Qué hace grande a un set de Boiler Room', title: 'Qué hace grande a un set de Boiler Room.', tocLabel: 'Qué hace grande a un set'},
    {id: 'most-watched', heading: 'Los sets de Boiler Room más vistos', title: 'Los sets de Boiler Room más vistos.', kicker: 'Medido', tocLabel: 'Los sets más vistos'},
    {id: 'best', heading: 'Los mejores sets de Boiler Room', title: 'Los mejores sets de Boiler Room.', kicker: 'Clasificado', tocLabel: 'Los mejores sets, clasificados', subsections: anchors},
    {id: 'where-next', heading: 'Para seguir escuchando', title: 'Para seguir escuchando.', tocLabel: 'Para seguir escuchando'}
  ],
  media: ({lang}) => boilerRoomMedia({lang, text}),

  sources: [
    {href: 'https://boilerroom.tv/playlist/top-10-all-time/', label: 'Boiler Room (en inglés): Top 10 All Time'},
    {href: 'https://en.wikipedia.org/wiki/Boiler_Room_%28music_broadcaster%29', label: 'Wikipedia (en inglés): Boiler Room (music broadcaster)'},
    {href: 'https://en.wikipedia.org/wiki/Yousuke_Yukimatsu', label: 'Wikipedia (en inglés): Yousuke Yukimatsu'},
    {href: 'https://www.vice.com/en/article/boiler-room-disclosure-b2b-skream/', label: 'Vice (en inglés): Boiler Room, Disclosure b2b Skream'},
    {href: 'https://www.factmag.com/2014/01/31/dj-ez-to-play-three-hour-set-on-boiler-room-next-month/', label: 'Fact (en inglés): DJ EZ to play three hour set on Boiler Room'},
    {href: 'https://www.setlist.fm/setlist/charli-xcx/2024/99-scott-ave-brooklyn-ny-3ab89fb.html', label: 'setlist.fm (en inglés): Charli xcx at 99 Scott Ave, Brooklyn, 22 de febrero de 2024'},
    {href: 'https://www.setlist.fm/setlist/underworld/2025/burgess-park-london-england-6b5812da.html', label: 'setlist.fm (en inglés): Underworld at Burgess Park, 2 de agosto de 2025'},
    {href: 'https://sonicstate.com/news/2022/08/11/fred-again-hybrid-set-for-boiler-room/', label: 'Sonicstate (en inglés): Fred again.. hybrid set for Boiler Room'},
    {href: 'https://whynow.co.uk/read/best-boiler-room-sets', label: 'whynow (en inglés): We rank the 10 best Boiler Room sets of all time'}
  ],

  bandcamp: {
    description: 'Mucha gente ve a un DJ de cerca por primera vez en Boiler Room. Estos son los míos, del lado de los breaks y el bass. Comprar uno apoya mi trabajo directamente.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks de thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 de thecatrave'}
    ]
  }
};
