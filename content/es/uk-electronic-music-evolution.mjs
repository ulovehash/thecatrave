// Spanish UK electronic music evolution guide. Structure, records, images and
// both SoundCloud mixes are the English page's (build-uk-article.mjs), shared
// through content/uk-evolution-shared.mjs; the Spanish draft is
// es/uk-electronic-music-evolution-draft.md.
//
// Keyword Planner (Spain, 2026-10-09) returned no row for any Spanish phrase on
// this history (keywords/es-uk-electronic-music-evolution.json). The live es-ES
// SERP and People-also-ask for "historia de la música electrónica" show general
// music-history pages and "¿Dónde se originó la música electrónica?"; the title
// follows that wording and one FAQ answers that question from facts already on
// the English page (house in Chicago, techno in Detroit). "Jungle" stays
// masculine and unaccented in Spanish, as in the Spanish music press.
//
// Like the English page it carries no answer banner, no intro heading and no
// subheadings inside an era: `headings` merges the draft's subsections into
// one section per era. The images are the English guide's, with translated
// captions.
import {ukEvolutionMedia} from '../uk-evolution-shared.mjs';
import {ukGenreMap} from '../../uk-genre-map.mjs';

const text = {
  mixKicker: 'Un mix de thecatrave',
  images: {
    crowd: {alt: 'Multitud densa bailando en un club oscuro'},
    tb303: {alt: 'Sintetizador de bajo Roland TB-303', caption: 'La TB-303 aportó el movimiento de bajo que define el acid house.'},
    flyers: {alt: 'Collage de flyers de las primeras raves británicas', caption: 'Antes de las redes sociales, los flyers ayudaban a que circularan las raves efímeras y los sonidos nuevos.'},
    atari: {alt: 'Ordenador Atari 1040ST usado para secuenciar música', caption: 'Los secuenciadores en ordenadores asequibles sacaron la producción electrónica de los estudios profesionales.'},
    skream: {alt: 'Skream detrás de su equipo de DJ', caption: 'Skream en directo. Las tiendas de discos, los productores y las noches de Croydon fueron centrales para los primeros años del dubstep.'}
  },
  videos: {
    acid: {genres: ['Acid house', 'Bleep'], description: 'Escucha la línea de bajo errante de la TB-303 en Baby Ford y después el sub-bajo y el vacío de LFO.'},
    jungle: {genres: ['Breakbeat hardcore', 'Jungle', 'Drum and bass', 'Los DJ que lo llevaron todo'], description: 'Estos discos dejan oír el cambio rítmico: los breaks rave se convierten en jungle y luego en drum and bass, con una sesión de los dos DJ que lo llevaron a la radio nacional.'},
    garage: {genres: ['UK garage', 'Speed garage', '2-step'], description: 'Compara la presión a cuatro tiempos del speed garage con los bombos ausentes y el swing del 2-step.'},
    other90s: {genres: ['Sonido de Bristol', 'Crossover big beat', 'Big beat', 'Música electrónica de escucha', 'Techno británico'], description: 'Cinco caminos paralelos a lo largo de la década: la música de estudio de Bristol nutrida de dub, el big beat underground y el que llegó al número uno, la abstracción de la era Warp y el techno de Birmingham.'},
    zeroes: {genres: ['Dubstep', 'Grime', 'Bassline', 'UK funky'], description: 'Escucha cómo el mismo origen garage se divide en el espacio del dubstep, el minimalismo del grime, los ganchos del bassline y la percusión del UK funky.'},
    early10s: {genres: ['Post-dubstep', 'Grime instrumental', 'Bristol club music', 'PC Music'], description: 'Estos discos muestran por qué ninguna etiqueta describe bien el comienzo de los años 2010.'},
    current: {genres: ['Nuevo UK garage', 'Jungle moderno', 'Crossover de jungle', 'Club music británica'], description: 'Estos ejemplos presentan el resurgir como una reutilización y no como una reconstrucción: swing de garage, ciencia del breakbeat y presión a 140 circulan juntos.'}
  },
  mixes: {
    weekends: {
      title: 'I lost so many weekends raving and I wanna lose some more',
      description: 'Rehice esta mezcla una decena de veces, cambié los temas y le di vueltas sin parar a las transiciones. Al final reúne unos cuarenta temas que me gustan, entre breaks, garage, dubstep, grime, techno y muchos otros géneros. Para volver a casa andando, ordenar la habitación o las afters, por supuesto.',
      iframeTitle: 'I lost so many weekends raving and I wanna lose some more de thecatrave en SoundCloud'
    },
    smoke: {
      title: 'I Like to Smoke in Silence After Raves',
      description: 'En el resurgir reciente, lo importante no es que un género se imponga, sino ver cómo ritmos más antiguos se cruzan en sets nuevos. Tardé unos cuatro meses en ordenar estos 30 temas en un arco largo.',
      iframeTitle: 'I Like to Smoke in Silence After Raves de thecatrave en SoundCloud'
    }
  },
  table: {
    headers: ['Género', 'Época aproximada en el Reino Unido', 'Ritmo y tempo', 'Rasgos típicos', 'Raíces directas'],
    rows: [
      ['Acid house', 'Finales de los ochenta', 'Normalmente a cuatro tiempos, más o menos al tempo de la house', 'Líneas de bajo TB-303, grooves repetitivos', 'House de Chicago, disco, música de baile electrónica'],
      ['Bleep', 'De 1988 a principios de los noventa', 'Ritmos techno despojados', 'Tonos electrónicos cortos, sub-bajo pesado, espacio vacío', 'Techno de Detroit, house, cultura de los sound systems'],
      ['Breakbeat hardcore', 'Principios de los noventa', 'Breaks sampleados rápidos, a menudo con elementos a cuatro tiempos', 'Stabs rave, pianos, voces aceleradas, cortes abruptos', 'Acid house, techno, breakbeats de hip-hop'],
      ['Jungle', 'Principios y mediados de los noventa', 'Breaks troceados, normalmente entre 150 y 170 BPM', 'Samples de reggae y dancehall, bajo profundo, MC', 'Breakbeat hardcore, dub, reggae, hip-hop'],
      ['Drum and bass', 'Desde mediados de los noventa', 'Breakbeats rápidos, normalmente entre 160 y 180 BPM', 'Gran variedad, de lo atmosférico a lo muy técnico y agresivo', 'Jungle, breakbeat, dub y producción electrónica'],
      ['UK garage', 'Desde mediados de los noventa', 'Cuatro tiempos o swing 2-step, normalmente entre 125 y 135 BPM', 'Voces troceadas, percusión con shuffle, líneas de bajo', 'Garage house estadounidense, R&B, cultura de club de la era jungle'],
      ['Grime', 'Desde principios de los 2000', 'A menudo en torno a 140 BPM, con baterías escasas y sincopadas', 'Voces lideradas por MC, sintetizadores fríos, sub-bajo', 'UK garage, cultura MC del jungle, dancehall, hip-hop'],
      ['Dubstep', 'Desde principios de los 2000', 'Normalmente en torno a 140 BPM, a menudo sentido en half-time', 'Sub-bajo, espacio, síncopas, técnicas del dub', 'Dark garage, 2-step, dub, jungle'],
      ['Bassline', 'Desde finales de los noventa', 'Swing de garage, normalmente entre 130 y 140 BPM', 'Ganchos de bajo marcados, drops directos, formas vocales e instrumentales', 'UK garage, speed garage, cultura de club de Sheffield'],
      ['UK funky', 'Desde finales de los 2000', 'Tempo de house con percusión sincopada', 'Swing rítmico, grooves guiados por la percusión, formas vocales e instrumentales', 'House, garage, soca, grime y club music de la diáspora africana']
    ]
  }
};

const genreMapText = {
  heading: 'Cómo se desarrollaron y se conectaron los géneros de música electrónica británica.',
  intro: 'Es un mapa de linajes compartidos, no la afirmación de que un disco inventara otro. Las escenas británicas se solapan, se prestan ideas y a menudo conviven durante años.',
  svgTitle: 'Mapa de los géneros de música electrónica británica con sus fechas',
  svgDesc: 'Un esquema que muestra cómo la house y el techno importados, los breaks de hip-hop y la cultura de los sound systems se conectan con el acid house, el bleep, el hardcore, el jungle, el drum and bass, el UK garage, el grime, el dubstep, el bassline, el UK funky y la bass music actual.',
  columns: ['RAÍCES', '1987–91', '1990–93', '1992–2001', '1994–2010', '2017→'],
  nodes: {
    soundSystems: ['Sound systems', '1950→'], chicago: ['House de Chicago', '1980'], detroit: ['Techno de Detroit', '1980'],
    hiphop: ['Breaks de hip-hop', '1970→'], acid: ['Acid house', '1987–89'], bleep: ['Bleep', '1988–91'],
    hardcore: ['Hardcore', '1990–93'], jungle: ['Jungle', '1992–95'], garage: ['UK garage', '1993–2001'],
    dnb: ['Drum & bass', '1994→'], grime: ['Grime', '2001→'], dubstep: ['Dubstep', '1998→'],
    bassline: ['Bassline / Funky', '2000'], converging: ['Escenas convergentes', 'UKG / Jungle / 140 · 2017→']
  },
  mobile: [
    ['1987–91', 'Acid house y bleep', 'La house y el techno importados se encuentran con las salas rave británicas y la presión del bajo.'],
    ['Años noventa', 'Hardcore, jungle y drum and bass', 'Los breakbeats se aceleran y se fragmentan, mientras las ideas de los sound systems pasan al centro.'],
    ['1993–2009', 'UK garage, grime, dubstep, bassline y UK funky', 'El swing del garage se convierte en varias escenas distintas pero conectadas.'],
    ['De los 2010 a hoy', 'Club music híbrida y escenas convergentes', 'Los lenguajes rítmicos antiguos circulan juntos en lugar de sustituirse.']
  ],
  caption: 'Un mapa deliberadamente simplificado: las fechas marcan una aparición, no un final.'
};

const era = (id, kicker, title, headings, tocLabel) => ({id, kicker, title, headings, heading: headings[0], tocLabel, className: 'era'});

const sections = [
  {id: 'why-the-uk', heading: '¿Por qué creó el Reino Unido tantos géneros de música electrónica?', title: '¿Por qué creó el Reino Unido tantas escenas de música electrónica?', tocLabel: 'Por qué tantas escenas en el Reino Unido'},
  {id: 'genre-map', heading: 'Mapa', tocLabel: 'Mapa de géneros y fechas', rawHtml: () => ukGenreMap(genreMapText)},
  era('acid-and-bleep', '1987–1991', 'El acid house se convierte en un movimiento y después el bleep da al grave un sonido británico.',
    ['El acid house y el Second Summer of Love, de 1987 a 1989', 'El techno bleep y el primer sonido de bajo británico, de 1988 a 1991'], '1987–91: acid house y bleep'),
  era('hardcore-jungle-dnb', '1990–1998', 'El breakbeat hardcore muta en jungle y en drum and bass.',
    ['El breakbeat hardcore y la explosión rave británica, de 1990 a 1993', 'El jungle surge de la escena rave británica, de 1992 a 1995', 'El jungle y la evolución del drum and bass, de 1994 a finales de los noventa'], '1990–98: hardcore, jungle y D&B'),
  era('uk-garage', '1993–2001', 'El UK garage aprende a swinguear, a rebotar y a dividirse.',
    ['El UK garage, el speed garage y el 2-step, de 1993 a 2001'], '1993–2001: UK garage'),
  era('other-1990s', 'Los años noventa', 'Bristol, el big beat, Warp y el techno de Birmingham cuentan otras historias.',
    ['La otra década de los noventa: trip-hop, big beat, IDM y techno británico'], 'La otra década de los noventa'),
  era('dubstep-grime-funky', '2000–2009', 'El garage oscuro se ramifica en dubstep y grime, mientras el bassline y el UK funky se van por otro lado.',
    ['El dubstep surge del UK garage oscuro, de finales de los noventa a los 2000', 'El grime y la radio pirata del este de Londres, de 2001 a 2005', 'El bassline y el UK funky, de finales de los noventa a 2010'], '2000–09: dubstep, grime y UK funky'),
  era('hybrid-club', '2010–2016', 'Tras el dubstep, las etiquetas útiles se ensanchan y se vuelven menos precisas.',
    ['Después del dubstep y los nuevos híbridos de club, de 2010 a 2012', 'Grime instrumental, Bristol club music y PC Music, de 2013 a 2016'], '2010–16: club music híbrida'),
  era('current-era', '2017–hoy', 'El UK garage, el jungle y el 140 vuelven sin convertirse en piezas de museo.',
    ['El nuevo UK garage y el resurgir del jungle underground, de 2017 a 2019', 'El jungle y el UK garage encuentran un nuevo público, de 2020 a 2022', 'El UK garage, el speed garage, el jungle y el 140 convergen, de 2023 a 2024', 'El UK garage, el jungle y la bass music se amplían otra vez, de 2025 a 2026'], '2017 a hoy: escenas renovadas'),
  {id: 'future', heading: '¿Qué le espera a la música electrónica británica?', title: '¿Y ahora qué?', kicker: 'Después de 2026', className: 'future-section', tocLabel: '¿Y ahora qué?'},
  {id: 'genre-guide', heading: 'Cómo reconocer los principales géneros de música electrónica británica', title: 'Vistazo rápido a los principales géneros de música electrónica británica.', tocLabel: 'Vistazo a los géneros y FAQ'}
];

export default {
  lang: 'es',
  name: 'es-uk-electronic-music-evolution',
  file: 'es/historia-musica-electronica-reino-unido.html',
  draft: 'es/uk-electronic-music-evolution-draft.md',
  canonical: 'https://thecatrave.com/es/historia-musica-electronica-reino-unido',
  englishPath: '/uk-electronic-music-evolution',
  ogImage: 'https://thecatrave.com/img/og/uk.jpg',
  image: 'https://thecatrave.com/img/people%20dancing-1200.webp',
  bodyClass: 'article-page',

  title: 'Historia de la música electrónica en el Reino Unido: escenas',
  description: 'Historia de la música electrónica británica: del acid house y el jungle al UK garage, el grime y el dubstep, hasta las escenas de club actuales.',
  datePublished: '2026-10-09',
  dateModified: '2026-10-09',
  dateLabel: '9 de octubre de 2026',

  heroKicker: 'Historia de la música electrónica británica',
  heroTitle: 'Historia de la música electrónica en el Reino Unido',
  deck: 'Del acid house y el bleep al jungle, el UK garage, el grime y el dubstep, hasta las escenas que dan forma hoy a la club music británica.',
  breadcrumbName: 'Historia de la música electrónica en el Reino Unido',

  introSection: 'Introducción',
  faqSection: 'Preguntas frecuentes sobre la música electrónica británica',
  faqLabel: 'Preguntas frecuentes',
  faqTitle: 'Preguntas frecuentes sobre la música electrónica británica.',

  sections,
  media: ({lang}) => ukEvolutionMedia({lang, text}),

  sources: [
    {href: 'https://www.theguardian.com/music/2023/may/03/bleep-dance-music-80s-yorkshire', label: 'The Guardian, «How Bleep Made Yorkshire the Electronic Music Capital of Britain» (en inglés)'},
    {href: 'https://www.theguardian.com/music/2021/jun/13/the-push-to-archive-the-history-of-jungle-and-drumnbass', label: 'The Guardian, «The Push to Archive the History of Jungle and Drum’n’Bass» (en inglés)'},
    {href: 'https://www.metalheadz.co.uk/artist/goldie', label: 'Metalheadz, Goldie: Artist History (en inglés)'},
    {href: 'https://www.theguardian.com/music/2011/jun/15/uk-garage-pop-craig-david', label: 'The Guardian, «How UK Garage Conquered 21st-Century Pop» (en inglés)'},
    {href: 'https://www.cambridge.org/core/journals/organised-sound/article/abs/just-dont-call-it-trip-hop-reconciling-the-bristol-sound-style-with-the-trip-hop-genre/B4944FEFB7C30977DA7CF0CB3AC07465', label: 'Cambridge University Press, «Just Don’t Call It Trip Hop» (en inglés)'},
    {href: 'https://djmag.com/features/how-big-apple-records-became-birthplace-dubstep', label: 'DJ Mag, «How Big Apple Records Became the Birthplace of Dubstep» (en inglés)'},
    {href: 'https://www.theguardian.com/music/2014/nov/27/jungle-garage-and-grime-20-years-of-rinse-fm', label: 'The Guardian, «Jungle, Garage and Grime: 20 Years of Rinse FM» (en inglés)'},
    {href: 'https://www.officialcharts.com/songs/eliza-roseinterplanetary-bota-baddest-of-them-all/', label: 'Official Charts, «B.O.T.A. (Baddest of Them All)» (en inglés)'},
    {href: 'https://storage.googleapis.com/ntia-hosted-pdfs/The-Fourth-UK-Electronic-Music-Industry-Report-8th-Feb-2026.pdf', label: 'NTIA, The Fourth UK Electronic Music Industry Report (en inglés)'}
  ],

  bandcamp: {
    description: 'Estos lanzamientos prolongan directamente los breaks, la presión del bajo y el continuo rave de los que habla este artículo. Comprar uno apoya directamente mi música y mis textos.',
    tracks: [
      {title: 'thecatrave, Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks de thecatrave'},
      {title: 'thecatrave, Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 de thecatrave'}
    ]
  }
};
