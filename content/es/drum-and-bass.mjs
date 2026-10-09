// Spanish drum and bass guide. Structure and facts from the English page
// (drum-and-bass-guide-draft.md, dnb-guide-research.md, build-dnb-article.mjs).
//
// Spanish keywords (keywords/es-drum-and-bass.json): Google es-ES SERP and
// People also ask, 2026-10-10; no volumes measured. Spanish searchers use the
// English name. "bass drum" in the PAA is the instrument, not this genre.
//
// Listening blocks are placed by [Embed: ...] lines in the draft, at the
// positions the English generator gives them by paragraph index.
//
// The images are the English guide's, in img/dnb/, with translated captions;
// see home-articles.mjs for why a translation may reuse them.
import {
  articleFigure, articleListeningBand, articleListeningCollection, articleTable, articleTrackEmbed, ownTrackListening
} from '../../site-components.mjs';
import {t} from '../../i18n.mjs';

// Spotify where the English page found a verified master, YouTube where it did
// not; the ids are the English generator's.
const listeningItems = rows => rows.map(row => ({
  year: row.year,
  artist: row.artist,
  title: row.title,
  note: row.note,
  playerHtml: articleTrackEmbed({
    platform: row.spotify ? 'spotify' : 'youtube',
    id: row.spotify || row.youtube,
    title: `${row.artist}, ${row.title}`
  })
}));

const collection = (lang, id, title, description, rows) => articleListeningCollection({
  lang, id, tone: 'cyan', title, description, items: listeningItems(rows)
});

export default {
  lang: 'es',
  name: 'es-drum-and-bass',
  file: 'es/drum-and-bass.html',
  draft: 'es/drum-and-bass-draft.md',
  canonical: 'https://thecatrave.com/es/drum-and-bass',
  englishPath: '/drum-and-bass-guide',
  ogImage: 'https://thecatrave.com/img/og/drum-and-bass.jpg',
  image: 'https://thecatrave.com/img/dnb/dnb-cover.webp',
  bodyClass: 'article-page dnb-page',
  minReadingMinutes: 9,

  title: 'Qué es el drum and bass: 174 BPM, historia y subgéneros',
  description: 'El drum and bass, género británico de breakbeats rápidos y sub-bajo profundo, de 170 a 180 BPM: historia, artistas y subgéneros, del jungle al neurofunk.',
  datePublished: '2026-10-10',
  dateModified: '2026-10-10',
  dateLabel: '10 de octubre de 2026',

  heroKicker: 'Drum and Bass',
  heroTitle: '¿Qué es el drum and bass?',
  deck: 'Breakbeats rápidos, sub-bajo profundo y el continuo rave británico detrás de un género mundial que se pincha casi siempre entre 170 y 180 BPM.',
  answerLabel: 'Drum and bass: definición',
  breadcrumbName: 'Drum and Bass',

  answerSection: 'Respuesta',
  introSection: 'Introducción',
  introTitle: 'De un continuo rave británico a un género mundial.',
  faqSection: 'Preguntas frecuentes',
  faqLabel: 'Preguntas sobre el drum and bass',
  faqTitle: 'Preguntas frecuentes sobre el drum and bass.',

  sections: [
    {id: 'where-jungle-ended', heading: 'Cuándo se separaron el jungle y el drum and bass', title: 'Cuándo se separaron el jungle y el drum and bass.', kicker: '1994 a 1995'},
    {id: 'sound', heading: 'Cómo está construido el drum and bass: 174 BPM, el break y los graves', title: 'Cómo está construido el drum and bass: 174 BPM, el break y los graves.', tocLabel: 'Cómo está construido'},
    {id: 'metalheadz', heading: 'Metalheadz y el giro oscuro', title: 'Metalheadz y el giro oscuro.'},
    {id: 'atmospheric', heading: 'La línea atmosférica: Speed, Bristol y Good Looking', title: 'La línea atmosférica: Speed, Bristol y Good Looking.', tocLabel: 'Speed, Bristol y Good Looking'},
    {id: 'subgenres', heading: 'Los subgéneros y lo que significan', title: 'Los subgéneros y lo que significan.', tocLabel: 'Los subgéneros explicados'},
    {id: 'global', heading: 'Cómo se hizo global el drum and bass', title: 'Cómo se hizo global el drum and bass.', kicker: 'Desde los años 2000'},
    {id: 'now', heading: 'Dónde está hoy el drum and bass', title: 'Dónde está hoy el drum and bass.'}
  ],

  media: ({lang}) => ({
    // The owner's own music inside the text (owner, 2026-09-21: Berlin Race
    // 1909 on the German pages, Dégénération on the French, and art deco with
    // late summer cloud dance in the drum and bass guides).
    'thecatrave art-deco': ownTrackListening('art-deco', 'El lado jungle de la ruptura, escuchado hoy: mi remix a 150 BPM.', lang),
    'thecatrave late-summer-cloud-dance': ownTrackListening('late-summer-cloud-dance', 'Un tema corto de liquid breakbeat, en el espíritu atmosférico de esta parte. Mi propio tema.', lang),
    'Roni Size': articleFigure({
      src: 'img/dnb/roni-size.webp',
      srcset: 'img/dnb/roni-size-320.webp 320w, img/dnb/roni-size.webp 1120w',
      width: 1120, height: 747,
      alt: 'Roni Size tras una mesa de mezclas en el festival Astropolis en 2009',
      caption: 'Roni Size en Astropolis, en 2009. New Forms se hizo en Bristol con Reprazent y ganó el Mercury Prize en 1997. Foto: neomusicstore, CC BY 2.0.',
      className: 'wide-archive-image'
    }),
    'Noisia': articleFigure({
      src: 'img/dnb/noisia.webp',
      srcset: 'img/dnb/noisia-320.webp 320w, img/dnb/noisia.webp 1280w',
      width: 1280, height: 720,
      alt: 'Los tres miembros de Noisia en el escenario de la Brixton Academy de Londres en 2015',
      caption: 'Noisia en la Brixton Academy, en 2015. Neurofunk construido en Groninga y tocado por todo el mundo: el sonido como ejercicio de ingeniería de precisión. Foto: Emma Louise, CC BY 3.0.',
      className: 'wide-archive-image'
    }),
    'DJ Marky': articleFigure({
      src: 'img/dnb/dj-marky.webp',
      srcset: 'img/dnb/dj-marky-320.webp 320w, img/dnb/dj-marky.webp 1120w',
      width: 1120, height: 840,
      alt: 'DJ Marky pinchando un disco en el club Lov.e de São Paulo',
      caption: 'DJ Marky en el Lov.e, en São Paulo, en 2008. LK pasó por un sello de Bristol y se convirtió en un clásico de los clubes británicos. Foto: Moretti, CC BY-SA 3.0.',
      className: 'wide-archive-image'
    }),
    'reinforced-listening': collection(lang, 'reinforced-listening',
      'El álbum que el sello ya tenía.',
      'Reinforced tenía cuatro años cuando llegó el cambio de nombre, y 4hero ya había hecho el disco al que el nuevo nombre quería señalar.',
      [{year: '1994', artist: '4hero', title: 'Parallel Universe', spotify: '0MMBVUug4IJy0pUL2mRmPf',
        note: 'Hecho en Dollis Hill y publicado en su propio sello. A menudo llamado el primer álbum de drum and bass, cuatro años antes de que Two Pages fuera seleccionado para el Mercury Prize.'}]),
    'split-listening': collection(lang, 'split-listening',
      'La distancia en un año.',
      'El disco que llevó el jungle a las listas, y el que, doce meses después, llevó el nuevo nombre a una multinacional.',
      [{year: '1994', artist: 'M-Beat featuring General Levy', title: 'Incredible', youtube: 'GDwNn8bJ2CQ',
        note: 'Ragga jungle en el puesto 39 de la lista británica de sencillos. Es el sonido, y la palabra, de los que algunos productores se apartaron después.'},
       {year: '1995', artist: 'Goldie', title: 'Inner City Life', youtube: 'i-P98B2skts',
        note: 'De Timeless. El mismo linaje en una multinacional, con cuerdas y crítica en la gran prensa, archivado como drum and bass y no como jungle.'}]),
    'sound-listening': collection(lang, 'sound-listening',
      'Two-step y rodante.',
      'Las dos sensaciones rítmicas sobre las que descansa el género, ambas de 1995, ambas en torno a 174, con un bajo que trabaja en sentido opuesto.',
      [{year: '1995', artist: 'Alex Reece', title: 'Pulp Fiction', spotify: '4bsF2ZJgmq2JiDfyIV3CaX',
        note: 'La plantilla del two-step: un bombo y una caja con aire alrededor, el tema se desliza en lugar de caer rodando.'},
       {year: '1995', artist: 'Dillinja', title: 'The Angels Fell', youtube: '0wWTqipgm2I',
        note: 'El break rodante, con más de la batería original, y el sub-bajo que carga el peso por debajo.'}]),
    'metalheadz-listening': collection(lang, 'metalheadz-listening',
      'El giro oscuro.',
      'El disco que se escoge para mostrar cómo sonaba el lado oscuro del drum and bass.',
      [{year: '1996', artist: 'Doc Scott', title: 'Shadow Boxing', youtube: '7Z-6e3zIE2k',
        note: 'Publicado con su alias Nasty Habits. Distorsión, compresión y un ritmo de taller mecánico, un año antes de que la recopilación Torque reuniera ese sonido.'}]),
    'atmospheric-listening': collection(lang, 'atmospheric-listening',
      'La otra respuesta a 1995.',
      'La rama orientada al jazz, del modelo Good Looking al Mercury Prize y de ahí al liquid.',
      [{year: '1993', artist: 'LTJ Bukem', title: 'Music', youtube: 'hp8DkZyE9h8',
        note: 'Cuerdas, un break suave y ningún drop en el sentido moderno. La referencia de lo que se vendió como intelligent drum and bass.'},
       {year: '1997', artist: 'Roni Size and Reprazent', title: 'Brown Paper Bag', spotify: '3ZQs8RHO3lPZoUwpavPENL',
        note: 'De New Forms, hecho en Bristol, Mercury Prize 1997. El disco de drum and bass de quien no tenía ningún otro.'},
       {year: '2004', artist: 'High Contrast', title: 'The Basement Track', youtube: 'C5XGKcvFOJc',
        note: 'El lado Hospital del mismo linaje: los samples de soul conservados, construido para una sala grande y todavía pinchado.'}]),
    'Table: subgenres': articleTable({
      headers: ['Término', 'Más o menos cuándo', 'Qué significa', 'Relación con el núcleo del género'],
      rows: [
        ['Drum and bass (el núcleo)', 'Desde 1994', 'En torno a 174 BPM, breakbeats, sub-bajo como voz principal', 'Un género más amplio salido del mismo continuo que el jungle'],
        ['Liquid, o liquid funk', 'Desde 2000', 'Melódico y soul, two-step rodante, voces y acordes', 'La línea suave, con el nombre del CD mezclado de Fabio en 2000'],
        ['Jump-up', 'Desde mediados de los noventa', 'Bajos pegadizos, drops directos y arreglos pensados para la pista', 'Una rama fiestera asociada a DJ Zinc y Aphrodite'],
        ['Techstep', 'Desde mediados de los noventa', 'Mecánico, industrial y de ciencia ficción; distorsión y compresión', 'Su periodo fundacional, de 1996 a 1999, giró en torno a No U-Turn y Torque'],
        ['Neurofunk', 'Desde finales de los noventa', 'Modulación de bajo heredada del techstep, batería precisa y medios marcados sobre un grave pesado', 'Desciende del techstep; Ed Rush y Optical, y después Noisia'],
        ['Darkstep', 'Desde finales de los noventa', 'Atmósferas oscuras, bajo agresivo y batería dura', 'Una rama más pesada que se cruza con el techstep y luego con el neurofunk'],
        ['Drumfunk', 'Desde finales de los noventa', 'Breakbeats densos, editados a mano, con una variación rítmica detallada', 'Un linaje centrado en el break, asociado a Photek y Paradox'],
        ['Halftime', 'Desde los años 2010', 'El diseño sonoro del drum and bass con una batería a medio tempo', 'El punto en que su lógica de tempo se encuentra con la del dubstep']
      ]
    }),
    'subgenre-listening': collection(lang, 'subgenre-listening',
      'Dos de las ramas.',
      'El lado melódico y el lado mecánico de la tabla de arriba, para que los términos tengan sonido.',
      [{year: '2000', artist: 'Calibre', title: 'Mystic', youtube: 'yenh56lBQoU',
        note: 'El liquid: rodante, cálido, soul, y la versión del drum and bass que más lejos ha viajado.'},
       {year: '2010', artist: 'Noisia', title: 'Machine Gun', spotify: '6s9XbbtulHcMwMDzsyoEO7',
        note: 'Neurofunk construido en Groninga y tocado por todo el mundo: el sonido como ejercicio de ingeniería de precisión.'}]),
    'chart-listening': collection(lang, 'chart-listening',
      'El primer número uno.',
      'El disco que llevó el drum and bass a lo más alto de la lista británica de sencillos, diecisiete años después de Timeless.',
      [{year: '2012', artist: 'DJ Fresh featuring Rita Ora', title: 'Hot Right Now', youtube: 'N7OPZOBJZyI',
        note: 'El primer número uno británico del género, y el comienzo de una década en la que no dejó de volver a las listas.'}]),
    'global-listening': collection(lang, 'global-listening',
      'No es un disco británico.',
      'Un disco de São Paulo que pasó por un sello de Bristol y, veinte años después, el jungle reintegrado en un álbum de drum and bass.',
      [{year: '2002', artist: 'DJ Marky and XRS featuring Stamina MC', title: 'LK', spotify: '1fIZzCIwKKGBRDkLA8VukW',
        note: 'Construido sobre un sample de Jorge Ben, publicado en V Recordings, de Bryan Gee, y convertido en un clásico de los clubes británicos en 2002.'},
       {year: '2024', artist: 'Nia Archives', title: 'Silence Is Loud', spotify: '1LqFMtMW44W8XQ1OtV43gg',
        note: 'El tema que da título al álbum de 2024, puesto 16 en el Reino Unido, que reintegra los breaks y el aire reggae del jungle.'}]),
    'dnb-massive-playlist': articleListeningBand({
      platform: 'spotify',
      id: 'dnb-massive-playlist',
      kicker: t(lang).essentialListening,
      title: 'Massive Drum & Bass: la lista para ir más lejos.',
      description: 'La lista de drum and bass de referencia de Spotify, para seguir cuando los discos citados ya han hecho su demostración.',
      src: 'https://open.spotify.com/embed/playlist/37i9dQZF1DX5wDmLW735Yd?utm_source=generator',
      iframeTitle: 'Lista Massive Drum & Bass en Spotify',
      fullBleed: true,
      tone: 'cyan'
    })
  }),

  sources: [
    {href: 'https://en.wikipedia.org/wiki/Drum_and_bass', label: 'Wikipedia: Drum and bass (en inglés)'},
    {href: 'https://www.beatportal.com/articles/4445-beatports-definitive-history-of-drum-bass', label: 'Beatportal: Beatport’s Definitive History of Drum & Bass (en inglés)'},
    {href: 'https://en.wikipedia.org/wiki/Metalheadz', label: 'Wikipedia: Metalheadz (en inglés)'},
    {href: 'https://en.wikipedia.org/wiki/Timeless_(Goldie_album)', label: 'Wikipedia: Timeless (en inglés)'},
    {href: 'https://djmag.com/news/drum-bass-streams-increased-94-past-three-years-spotify-reports', label: 'DJ Mag: Drum & bass streams increased 94% in three years, Spotify reports (en inglés)'},
    {href: 'https://en.wikipedia.org/wiki/Nia_Archives', label: 'Wikipedia: Nia Archives (en inglés)'}
  ],

  bandcamp: {
    description: 'Estos lanzamientos son los más cercanos a la presión de breaks y bajos de este artículo. Comprar uno apoya directamente mi trabajo.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks de thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 de thecatrave'}
    ]
  }
};
