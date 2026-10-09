// Spanish jungle guide. Structure and facts from the English page
// (jungle-music-guide.html, built by build-jungle-article.mjs from the body it
// preserves between its jungle-content markers), via the French module.
//
// Spanish keywords (keywords/es-jungle.json): Keyword Planner for Spain
// returned no row for the jungle phrases tried on 2026-10-09, so the head term
// "musica jungle" is marked "no data". Live es-ES SERP and People-also-ask read
// the same day (google.es, hl=es, gl=es): for "historia del jungle musica" and
// "que es el jungle musica" the band Jungle dominates (Wikipedia, CrazyMinds,
// "Welcome to the Jungle"), with the genre in Rockdelux's "Hitos del jungle",
// the es.wikipedia drum and bass entry and Blue Funky Music's "Que es el
// jungle?". People also ask "Que es el estilo jungle?", "Que genero musical es
// jungle?" and "Cual es la diferencia entre jungle y drum and bass?". The first
// and the last became FAQ questions and the H2 on drum and bass; the band's
// questions are rejected. Spanish writes the genre masculine and unaccented,
// "el jungle", never "la jungla" (the rainforest).
//
// Every block the English generator places by paragraph marker is placed here
// by an [Embed: ...], [Image: ...] or [Table: ...] line at the same position;
// the blocks are built in content/jungle-media.mjs. The English page carries no
// credit on its seven photographs and flyers; logged in defects.json
// (jungle-images-uncredited), not guessed here.
import {articleFigure, articleTable} from '../../site-components.mjs';
import {jungleImages, jungleMedia} from '../jungle-media.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const copy = {
  trackTitle: (artist, title) => `${artist}, ${title} en Spotify`,
  tracks: {
    'we-are-ie': 'Grabado en 1989 y publicado en 1991. El disco al que más se atribuye haber puesto las bases del jungle, y sobre el que descansa desde siempre esta parte.',
    '28-gun-bad-boy': '1993, hecho en Mánchester. El puente entre la línea del acid house que describe esta parte y lo que Londres haría con ella.',
    'valley-of-the-shadows': '1993. Una referencia desnuda y amenazante: sub-bajo, breaks cortados y un sample que pasó a ser parte del lenguaje común del jungle.',
    'incredible': '1994. Un encuentro decisivo entre la producción jungle y la energía de un MC de dancehall, que llevó el sonido mucho más allá de los clubes especializados.',
    'inner-city-life': '1994. La voz de Diane Charlemagne y un arreglo amplio llevaron el jungle a la escala de un álbum sin aplanar su complejidad rítmica.',
    'renegade-snares': '1993. Acordes que giran y una batería finamente editada muestran lo emotivo y preciso que podía ser el jungle de los inicios.',
    'babylon': '1995. Un tema oscuro y dub, todo presión, cuyo bajo, fragmentos de voz y ediciones de break se convirtieron en una referencia duradera del jungle.'
  },
  images: {
    flyers: ['Una selección de flyers de raves de jungle británicas de principios de los noventa', 'Collage de flyers de jungle, 1991-94.'],
    'pirate-radio': ['Equipo de emisión de una radio pirata de la época del jungle', 'Una instalación de radio pirata.'],
    'tape-pack': ['Un tape pack de World Dance de 1994', 'Un tape pack.'],
    awol: ['Flyer de una rave de jungle en AWOL', 'Flyer de una rave en AWOL.'],
    fabio: ['Fabio tras los platos en los inicios del jungle', 'Fabio a los mandos, un pionero que ayudó a moldear el sonido jungle.'],
    'kool-fm': ['Flyer del tercer aniversario de Kool FM, jungle, 1994', 'Flyer de Kool FM (1994): la fiesta de aniversario de una radio pirata.'],
    dancing: ['Gente bailando en una rave de jungle', 'Las raves de jungle: sudor, gunfingers, bajo, unidad.']
  },
  videos: {
    'dj-hype': {kicker: 'Archivo', heading: 'DJ Hype, Jungle Massive.', description: 'Un recopilatorio de la época que convierte los nombres y los discos de esta parte en un recorrido de escucha continuo.'},
    'original-nuttah': {kicker: 'El tema clave', heading: 'Shy FX & UK Apachi, Original Nuttah.', description: 'El himno de crossover de 1994 del que se habla aquí, colocado en el momento exacto en que entra en la historia.'},
    'nia-archives': {kicker: 'El revival en la práctica', heading: 'Nia Archives, Boiler Room: Londres.', description: 'Un set actual que enlaza discos fundacionales de jungle, ediciones contemporáneas y la energía nueva que describe esta parte.'},
    'tim-reaper': {kicker: 'Para escuchar', heading: 'Tim Reaper, mix de jungle inspirado en el rare groove.', description: 'Grabado para NTS. Un DJ en lugar de un disco, así que la prueba es un set: una hora de cómo suena de verdad el revival.'}
  },
  playlists: {
    'early-jungle-playlist': {title: 'Jungle de los inicios y hardcore: la playlist larga.', description: 'Un recorrido más largo por los discos que unen el breakbeat hardcore, el darkcore y el primer sonido jungle reconocible.', iframeTitle: 'Playlist de jungle de los inicios y hardcore en Spotify'},
    'jungle-mania-playlist': {title: 'Los años del salto: la playlist larga.', description: 'Una selección más amplia de pioneros, himnos y facetas del jungle, de la época en que esta música superó a la radio pirata sin perder su lengua underground.', iframeTitle: 'Playlist de pioneros del jungle en Spotify'}
  },
  quotes: {
    'quote-pirate-radio': '«La radio pirata era el corazón de la música de baile underground.»',
    'quote-dj-storm': '«Los dubplates que llevabas en la bolsa mostraban de dónde venías.» DJ Storm'
  },
  lateSummer: 'Breakbeat del lado liquid de la separación. Mi propio tema.',
  hearNow: 'Breaks picados y presión en los graves: un tema breakbeat mío, para escuchar antes de seguir.',
  artDeco: {
    kicker: 'Un remix de jungle actual de thecatrave',
    title: 'Lana Del Rey: Art Deco (Jungle Remix).',
    description: 'Un ejemplo actual de la presión de breaks y graves del jungle usada para reinventar una voz pop, en lugar de reproducir un modelo de los noventa.',
    iframeTitle: 'Lana Del Rey, Art Deco (Jungle Remix) por thecatrave en SoundCloud'
  },
  tables: {
    'foundation-builders': {
      headers: ['Artista / DJ / MC', 'Por qué importa'], label: 'Constructores del jungle, tabla',
      rows: [
        ['Shy FX', 'Autor de «Original Nuttah», un himno jungle que llegó al gran público'],
        ['LTJ Bukem', 'Padre del «intelligent jungle», conocido por sus temas jazzísticos y atmosféricos'],
        ['Congo Natty (Rebel MC)', 'Pionero del ragga jungle y figura espiritual del género'],
        ['Goldie', 'Sacó «Inner City Life» y dio a conocer el jungle en todo el mundo'],
        ['Fabio y Grooverider', 'Dúo legendario que moldeó la primera escena jungle, en club y en la radio'],
        ['Roni Size', 'Ganó el Mercury Prize con New Forms, entre música en vivo y jungle'],
        ['Dillinja', 'Conocido por sus bajos que hacen temblar la tierra y sus clásicos jungle oscuros'],
        ['Aphrodite', 'El «padrino del jump-up»: breaks funky y diversión'],
        ['Doc Scott', 'Innovador del jungle oscuro y del primer drum and bass; habitual de Metalheadz'],
        ['DJ Hype', 'Maestro del turntablism y autor de «Peace, Love & Unity»'],
        ['4hero', 'Innovadores de la primera hora y fundadores de Reinforced Records. Mezclaron breakbeats, jazz, soul y techno.'],
        ['Photek', 'Productor obsesionado con la precisión, conocido por un jungle minimalista y cinematográfico y por los primeros híbridos con el drum and bass.'],
        ['Source Direct', 'Dúo oscuro y experimental de temas atmosféricos y batería afilada.'],
        ['Remarc', 'Maestro de las ediciones del break Amen; leyenda del «Sound Murderer»'],
        ['DJ Rap', 'DJ y productora pionera, con éxito de crossover'],
        ['DJ Storm', 'Pilar de Metalheadz, una de las grandes DJ del jungle'],
        ['DJ Randall', 'Conocido por sus mezclas precisas y sus sets de jungle oscuro en Kool FM'],
        ['DJ Zinc', 'Pionero del jump-up, autor del icónico «Super Sharp Shooter»'],
        ['Krust', 'Productor experimental, miembro de Reprazent'],
        ['Andy C', 'Jefe de RAM Records, produjo «Valley of the Shadows» con 16 años'],
        ['M-Beat', 'Produjo «Incredible» con General Levy, un enorme éxito jungle'],
        ['Leviticus (Jumpin Jack Frost)', 'Autor de «Burial», cofundador de V Recordings'],
        ['Adam F', 'Conocido por «Circles», un clásico jungle melódico y soul'],
        ['Deep Blue', 'Autor del clásico rave con sample de helicóptero, «Helicopter Tune»'],
        ['Marcus Intalex', 'Llevó el jungle hacia un drum and bass profundo y liquid'],
        ['Stevie Hyper D', 'El MC de jungle más icónico, conocido por su flow ultrarrápido'],
        ['MC UK Apachi', 'La voz de «Original Nuttah», flows ragga legendarios'],
        ['General Levy', 'La voz de «Incredible»; su «Junglist massive!» es icónico']
      ]
    },
    'modern-artists': {
      headers: ['Artista / DJ / Productor', 'Por qué importa'], label: 'Artistas de jungle actuales, tabla',
      rows: [
        ['Tim Reaper', 'Lidera el revival del jungle de los 2020 con temas de estilo retro'],
        ['Sully', 'Productor de jungle actual, atmosférico y melódico'],
        ['Coco Bryce', 'Mezcla la cultura skate con la estética y el sonido del jungle'],
        ['FFF', 'Maestro neerlandés del híbrido breakcore y jungle, activo desde los 2000'],
        ['Sherelle', 'DJ de jungle y footwork a BPM altos, con sets de festival ardientes'],
        ['Nia Archives', 'Cantante y productora que acerca el jungle a la generación Z; nominada a los MOBO y al Mercury']
      ]
    }
  }
};

export default {
  lang: 'es',
  name: 'es-jungle',
  file: 'es/jungle.html',
  draft: 'es/jungle-draft.md',
  canonical: 'https://thecatrave.com/es/jungle',
  englishPath: '/jungle-music-guide',
  ogImage: 'https://thecatrave.com/img/og/jungle.jpg',
  bodyClass: 'article-page jungle-page',
  minReadingMinutes: 18,
  image: 'https://thecatrave.com/img/UK%20Rave%20flyers%20from%201991-1994.webp',

  title: 'Qué es el jungle: historia, sonido y temas clave',
  description: '¿Qué es el jungle? Sus orígenes en el Reino Unido a principios de los noventa, sus raíces en los sound systems, los breakbeats, los artistas y el revival actual.',
  datePublished: '2026-10-09',
  dateModified: '2026-10-09',
  dateLabel: '9 de octubre de 2026',

  heroKicker: 'Guía del jungle',
  heroTitle: '¿Qué es la música jungle? Historia, sonido y cultura.',
  deck: 'Radio pirata, dubplates, MC, sellos y la cultura rave negra británica detrás de uno de los sonidos electrónicos más influyentes del Reino Unido.',
  answerLabel: 'El jungle, definición',
  breadcrumbName: 'Música jungle',

  answerSection: 'Respuesta',
  introSection: 'Introducción',
  introTitle: '¿Qué es la música jungle? Definición, sonido y BPM.',
  faqSection: 'FAQ',
  faqLabel: 'Preguntas frecuentes sobre el jungle',
  faqTitle: 'Preguntas frecuentes sobre el jungle.',

  sections: [
    {id: 'origins', heading: 'De dónde viene el jungle', tocLabel: 'Dónde y cuándo nació el jungle', title: 'De dónde viene el jungle: dónde y cuándo nació.'},
    {id: 'name', heading: 'Por qué esta música se llama jungle', title: 'Por qué esta música se llama jungle.'},
    {id: 'underground-emergence', heading: '1991-1993: el nacimiento underground', title: '1991-1993: el nacimiento underground.'},
    {id: 'jungle-mania', heading: '1994-1995: el jungle llega al gran público', tocLabel: '1994-1995: el gran público', title: '1994-1995: el jungle llega al gran público.', subsections: ['subgenres']},
    {id: 'pioneers', heading: 'Artistas, productores y pioneros del jungle', title: 'Artistas, productores y pioneros del jungle.'},
    {id: 'labels', heading: 'Sellos de jungle y la infraestructura de la escena', tocLabel: 'Sellos e infraestructura de la escena', title: 'Sellos de jungle y la infraestructura de la escena.'},
    {id: 'pirate-radio', heading: 'Radio pirata y cultura del dubplate', title: 'Radio pirata y cultura del dubplate.'},
    {id: 'culture', heading: 'Jerga, estilo y rituales: la subcultura jungle', tocLabel: 'Cultura jungle y subgéneros', title: 'Jerga, estilo y rituales: la subcultura jungle.'},
    {id: 'essential-tracks', heading: 'Los temas esenciales del jungle', title: 'Los temas esenciales del jungle.'},
    {id: 'breakbeats', heading: 'Los breakbeats del jungle: Amen, Think, Apache y Hot Pants', tocLabel: 'Amen, Think, Apache y Hot Pants', title: 'Los breakbeats del jungle: Amen, Think, Apache y Hot Pants.'},
    {id: 'myths', heading: 'Jungle y drum and bass: ¿cuál es la diferencia?', tocLabel: 'Jungle y drum and bass', title: 'Jungle y drum and bass: ¿cuál es la diferencia?', subsections: ['cultural-rift', 'general-levy', 'urban-legends']},
    {id: 'revival', heading: '¿Sigue existiendo el jungle? El revival actual', tocLabel: 'El revival actual del jungle', title: '¿Sigue existiendo el jungle? El revival actual.', subsections: ['new-generation', 'uk-2020s', 'raves-labels', 'global', 'roots']},
    {id: 'conclusion', heading: 'Conclusión', title: 'Conclusión.'},
    {id: 'foundation-builders', heading: 'Artistas, DJ y MC de jungle: los constructores', tocLabel: 'Constructores y revivalistas', title: 'Artistas, DJ y MC de jungle: los constructores.'},
    {id: 'modern-artists', heading: 'Artistas de jungle actuales y revivalistas', title: 'Artistas de jungle actuales y revivalistas.'},
    {id: 'acknowledgments', heading: 'Agradecimientos', title: 'Agradecimientos.'}
  ],

  media: ({lang}) => ({
    ...jungleMedia(lang, copy),
    ...Object.fromEntries(Object.entries(jungleImages).map(([key, image]) => {
      const [alt, caption] = copy.images[key];
      return [`Image: ${key}`, articleFigure({...image, alt, caption: escapeHtml(caption)})];
    })),
    ...Object.fromEntries(Object.entries(copy.tables).map(([key, {headers, rows, label}]) => [`Table: ${key}`, articleTable({
      headers: headers.map(escapeHtml), label,
      rows: rows.map(([name, note]) => [`<strong>${escapeHtml(name)}</strong>`, escapeHtml(note)])
    })]))
  }),

  // The English page's recommended resources, URL for URL, with translated labels.
  sources: [
    {href: 'https://en.wikipedia.org/wiki/Jungle_music', label: 'Wikipedia (en inglés): Jungle music'},
    {href: 'https://www.vice.com/en/article/jungles-still-massive-why-is-general-levys-incredible-so-popular-20-years-on', label: 'Vice (en inglés): por qué «Incredible», de General Levy, sigue siendo tan popular 20 años después'},
    {href: 'https://blamuk.org/2022/01/07/jungle-music-gentrification/', label: 'BLAM UK CIC (en inglés): el jungle y la gentrificación'},
    {href: 'https://djmag.com/longreads/how-dubplates-fuelled-rise-drum-bass-90s', label: 'DJ Mag (en inglés): cómo los dubplates impulsaron el auge del drum & bass en los noventa'},
    {href: 'https://reggaeroast.co.uk/blogs/news/jungle-documentary-stevie-hyper-d', label: 'Reggae Roast (en inglés): Stevie Hyper D y las raíces del jungle en los sound systems'},
    {href: 'https://mixmag.net/feature/the-gentrification-of-jungle', label: 'Mixmag (en inglés): la gentrificación del jungle'},
    {href: 'https://www.theguardian.com/music/2021/jun/16/subwoofers-at-the-ready-the-jungle-and-drumnbass-revival-is-upon-us', label: 'The Guardian (en inglés): ya está aquí el revival del jungle y el drum’n’bass'},
    {href: 'https://www.loudandquiet.com/interview/nia-archives-jungle-is-a-real-culture-and-a-real-community', label: 'Loud And Quiet (en inglés): entrevista con Nia Archives'},
    {href: 'https://www.clashmusic.com/features/seven-jungle-artists-carrying-the-torch-for-the-new-gen', label: 'Clash Magazine (en inglés): siete artistas de jungle que pasan la antorcha a la nueva generación'},
    {href: 'https://www.talkhouse.com/playing-telephone-with-history', label: 'Talkhouse (en inglés): el teléfono escacharrado de la historia'},
    {href: 'https://drumandbassuk.com/news/article/from-pirate-radio-to-podcasts-how-we-consume-drum-and-bass-2025', label: 'Drum & Bass UK (en inglés): de la radio pirata a los pódcast'},
    {href: 'https://djmag.com/features/10-essential-dubplates-uk-dance-music-culture-picked-djs-play-them', label: 'DJ Mag (en inglés): 10 dubplates esenciales de la cultura dance británica'}
  ],

  bandcamp: {
    description: 'Mi remix de jungle de Lana Del Rey pertenece directamente al sonido que explora esta guía. Comprarlo apoya directamente la música y la escritura.',
    tracks: [
      {title: 'thecatrave, You So Ghetto (Lana Del Rey Jungle Remix)', id: '3379956979', url: 'https://thecatrave.bandcamp.com/track/you-so-ghetto-lana-del-rey-jungle-remix', linkText: 'You So Ghetto (Lana Del Rey Jungle Remix) de thecatrave'}
    ]
  }
};
