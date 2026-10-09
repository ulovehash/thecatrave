// Spanish Parookaville guide. Structure and facts from the English page via the French version.
// Live es-ES SERP read 2026-10-09 (google.es, hl=es, gl=es) for "parookaville 2027": official
// site, tickets, Songkick-type listings; no People also ask box. The official site lists 16-18
// July 2027 and day visas on sale, which the dates section and the ticket FAQ now state.
// No Keyword Planner row measured (keywords/es-parookaville.json).
//
// The images are the English guide's, in img/parookaville/, with translated
// captions; see home-articles.mjs for why a translation may reuse them.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, articleYoutubeEmbed, ownTrackListening
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption, className = 'wide-archive-image') => articleFigure({
  src: `img/parookaville/${name}-${width}.webp`,
  srcset: `img/parookaville/${name}-320.webp 320w, img/parookaville/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className
});

export default {
  lang: 'es',
  name: 'es-parookaville',
  file: 'es/parookaville-festival.html',
  draft: 'es/parookaville-draft.md',
  canonical: 'https://thecatrave.com/es/parookaville-festival',
  englishPath: '/parookaville-festival',
  ogImage: 'https://thecatrave.com/img/og/parookaville.jpg',
  bodyClass: 'article-page parookaville-page',

  title: 'Parookaville 2027: lugar, asistencia, historia y música',
  description: 'Parookaville es el mayor festival de música electrónica de Alemania, cada julio en el aeropuerto de Weeze. Lugar, fechas, asistencia y música.',
  datePublished: '2026-10-09',
  dateModified: '2026-10-09',
  dateLabel: '9 de octubre de 2026',

  heroKicker: 'Parookaville',
  heroTitle: 'Parookaville Festival',
  deck: 'Un festival montado como una ciudad, tres días cada julio en un antiguo aeródromo de la RAF en Weeze, cerca de la frontera neerlandesa. Dónde se celebra, su tamaño, quién lo dirige y qué suena lejos del Mainstage.',
  answerLabel: 'Qué es Parookaville',
  breadcrumbName: 'Parookaville Festival',

  answerSection: 'Respuesta',
  introSection: 'Introducción',
  introTitle: 'Un festival montado como una ciudad.',
  faqSection: 'FAQ',
  faqLabel: 'Preguntas frecuentes',
  faqTitle: 'Preguntas frecuentes sobre Parookaville.',
  ownSetAfter: 'history',

  sections: [
    {id: 'where', heading: 'Dónde se celebra Parookaville', title: 'Dónde se celebra Parookaville.', subsections: ['parookaville-2027']},
    {id: 'how-big', heading: 'El tamaño de Parookaville: la asistencia', title: 'El tamaño de Parookaville: la asistencia.'},
    {id: 'history', heading: 'Breve historia y de quién es Parookaville', title: 'Breve historia y de quién es Parookaville.'},
    {id: 'famous', heading: 'Por qué Parookaville es famoso', title: 'Por qué Parookaville es famoso.'},
    {id: 'music', heading: 'Qué música suena de verdad', title: 'Qué música suena de verdad.', kicker: 'La música'},
    {id: 'from-home', heading: 'Escuchar Parookaville desde casa', title: 'Escuchar Parookaville desde casa.'}
  ],

  media: ({lang}) => ({
    // The owner's own music inside the text: Look on the Spanish pages (no Mylène Farmer remix).
    'thecatrave look': ownTrackListening('look', 'Lejos de los grandes escenarios: future bass, glitch y breakbeat. Mi propio tema.', lang),
    'Parookaville stage construction': figure('stage-build-2016', 1200, 752,
      'Una fachada de escenario hecha de falsas casas de ciudad con andamios y una chimenea roja y blanca, delante de grúas y carretillas elevadoras, en el recinto de Parookaville en 2016',
      'Un escenario de Parookaville en construcción en el aeródromo en julio de 2016, segundo año del festival: falsas casas de ciudad, chimenea y andamios. Foto: Tama66, CC0.'),
    'ParookavilleMainLuftbild22': figure('mainstage-aerial-2022', 1200, 900,
      'El Mainstage de Parookaville visto desde el aire en 2022, un escenario rojo y dorado con el público delante, y detrás tiendas, campos y aerogeneradores en el horizonte',
      'El Mainstage de Parookaville visto desde el aire en julio de 2022, primera edición tras la pandemia. El escenario se reconstruye cada año con un diseño nuevo. Foto: Timo, CC BY-SA 4.0.'),
    'Parookaville 2017 Regen': figure('rain-2017', 640, 1230,
      'Un recinto de festival inundado al anochecer, con las letras PAROOKAVILLE y guirnaldas de luces en mástiles detrás del agua',
      'Agua estancada delante del letrero de Parookaville en 2017, el año en que la lluvia atascó coches en el camping. Foto: Ss279, CC BY-SA 4.0.',
      'archive-image'),
    'Townhall Parookaville Festival': figure('town-hall-2024', 1200, 675,
      'El ayuntamiento de Parookaville, un edificio con cúpula y cuernos en el tejado y el letrero luminoso TOWNHALL sobre el punto de información y la oficina de registro',
      'El ayuntamiento de Parookaville en 2024, donde los ciudadanos sellan su pasaporte del festival. Foto: Timolius, CC BY-SA 4.0.'),
    'Cloud Factory 2022': figure('cloud-factory-2022', 1200, 900,
      'Un público denso bajo una estructura de cerchas iluminada con haces azules y blancos en el hangar de la Cloud Factory en 2022',
      'La Cloud Factory en 2022, un escenario cubierto en uno de los antiguos hangares del aeródromo. Foto: Timo, CC BY-SA 4.0.'),
    'DJ Hardwell performing at Parookaville 2024': figure('hardwell-2024', 1200, 800,
      'Hardwell tras los platos en Parookaville en 2024, bajo luz verde, con una mano levantada hacia el público',
      'Hardwell en Parookaville en 2024. Cabeza de cartel en 2018 y 2023, volvió a estar en el cartel en 2025 y 2026. Foto: Rudgrcom, CC BY 4.0.'),
    'QeifZyGcZmY': articleYoutubeEmbed({
      src: 'https://www.youtube-nocookie.com/embed/QeifZyGcZmY',
      title: 'Paul Elstak en Parookaville 2022, en el canal de YouTube de PAROOKAVILLE'
    }),
    'lnOjzIlm1_g': articleVideoCollection({
      lang: 'es',
      label: 'Parookaville, los sets más vistos',
      description: 'W&W en 2022, el set más visto del canal del festival, y Steve Aoki en 2025 en su propio canal, él que ya estuvo en el cartel del primer Parookaville en 2015.',
      items: [
        articleVideoCard({youtubeId: 'lnOjzIlm1_g', genre: 'Parookaville, 2022', artist: 'W&W', title: 'DJ set, Parookaville 2022'}),
        articleVideoCard({youtubeId: 'rWcNs6LcNpM', genre: 'Parookaville, 2025', artist: 'Steve Aoki', title: 'DJ set, Parookaville 2025'})
      ]
    }),
    'Table: attendance': articleTable({
      headers: ['Año', 'Entradas vendidas', 'Accesos en total'],
      rows: [
        ['2015', '25 000', '40 000'],
        ['2016', '50 000', '80 000'],
        ['2017', '80 000', '180 000'],
        ['2018', '80 000', '180 000'],
        ['2019', '85 000', '210 000'],
        ['2020', 'ninguna', 'Cancelado; LIVE from the City, 100 invitados por noche'],
        ['2021', 'ninguna', 'Cancelado'],
        ['2022', '75 000', '225 000'],
        ['2023', '75 000', '225 000'],
        ['2024', '75 000', '225 000']
      ].map(row => row.map(escapeHtml))
    })
  }),

  // The same sources as the English page, URL for URL; only the labels are translated.
  sources: [
    {href: 'https://en.wikipedia.org/wiki/Parookaville', label: 'Wikipedia: Parookaville (inglés)'},
    {href: 'https://de.wikipedia.org/wiki/Parookaville', label: 'Wikipedia: Parookaville (alemán)'},
    {href: 'https://en.wikipedia.org/wiki/Weeze_Airport', label: 'Wikipedia: aeropuerto de Weeze (inglés)'},
    {href: 'https://www.parookaville.com/en/experience/the-city-of-dreams', label: 'Parookaville : The City of Dreams'},
    {href: 'https://www.parookaville.com/de/experience/stages', label: 'Parookaville: los escenarios'},
    {href: 'https://www.parookaville.com/en/tickets', label: 'Parookaville: entradas 2027'},
    {href: 'https://www.parookaville.com/en/future-city', label: 'Parookaville: Future City y entradas digitales'},
    {href: 'https://www.parookaville.com/en/data-privacy/', label: 'Parookaville: control de edad e identidad'},
    {href: 'https://www.parookaville.com/de/impressum', label: 'Parookaville: aviso legal'},
    {href: 'https://www.parookaville.com/en/artist/pendulum', label: 'Parookaville : Pendulum'},
    {href: 'https://news.pollstar.com/2019/08/07/superstruct-entertainment-invests-in-german-parookaville-promoter-next-events/', label: 'Pollstar : Superstruct Entertainment invests in German Parookaville promoter Next Events'},
    {href: 'https://media.kkr.com/news-details?news_id=d3c327f2-83d8-449a-b732-49885585be2f&amp;type=1', label: 'KKR : CVC joins KKR in the acquisition of Superstruct Entertainment'},
    {href: 'https://meyersound.com/news/parookaville-2024/', label: 'Meyer Sound : Parookaville 2024'},
    {href: 'https://www1.wdr.de/nrw/niederrhein/kreis-kleve/bilanz-parookaville-festival-2026-weeze-100.html', label: 'WDR: balance de Parookaville 2026'},
    {href: 'https://news.pollstar.com/2026/07/21/german-fests-lollapalooza-berlin-parookaville-hail-successful-editions-highfield-preps-for-its-last/', label: 'Pollstar: Parookaville 2026 con todo vendido, más de 300 artistas'},
    {href: 'https://www.fazemag.de/das-war-parookaville-2017/', label: 'FAZE Magazin : Das war Parookaville 2017'},
    {href: 'https://djmag.com/top100festivals/2026/10/parookaville', label: 'DJ Mag : Top 100 Festivals 2026, Parookaville'},
    {href: 'https://en.wikipedia.org/wiki/Paul_Elstak', label: 'Wikipedia : Paul Elstak'},
    {href: 'https://en.wikipedia.org/wiki/W%26W', label: 'Wikipedia : W&W'}
  ],

  bandcamp: {
    description: 'Parookaville queda lejos del breakbeat que hago yo. Comprar un tema apoya directamente mi trabajo.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks de thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 de thecatrave'}
    ]
  }
};
