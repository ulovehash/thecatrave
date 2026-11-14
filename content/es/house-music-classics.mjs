// Guía de clásicos house en español. Estructura, datos, los diez discos y los
// nueve reproductores de la página inglesa (house-music-classics-draft.md,
// build-house-music-classics-article.mjs, media/house-music-classics.json),
// fechada el 8 de octubre de 2026; no se añade nada que la página inglesa no diga.
// Passion no tiene reproductor, como en la página inglesa: la única subida
// encontrada tiene derechos que no se pudieron confirmar.
//
// Palabras clave: Keyword Planner (España y Latinoamérica, español, 14 de
// noviembre de 2026) devolvió "clasicos house", "musica house clasica",
// "musica house 90" y "canciones house 90", todas en 10-100
// (keywords/es-house-music-classics.json).
//
// Las dos fotografías son las de la página inglesa, en img/house-music-classics/,
// con textos alternativos y pies traducidos.
import {
  articleFigure, articleListeningBand, articleTable, articleVideoCard, articleVideoCollection, ownPlaylists
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const player = (lang, youtubeId, genre, artist, videoTitle) => articleVideoCollection({
  lang, label: `${artist}, ${videoTitle}`,
  description: `${videoTitle}, de la subida oficial.`,
  items: [articleVideoCard({youtubeId, genre, artist, title: videoTitle})]
});

const playlist = ownPlaylists['rare-electronic-music'];

export default {
  lang: 'es',
  name: 'es-house-music-classics',
  file: 'es/clasicos-house.html',
  draft: 'es/house-music-classics-draft.md',
  canonical: 'https://thecatrave.com/es/clasicos-house',
  englishPath: '/house-music-classics',
  ogImage: 'https://thecatrave.com/img/og/house-music-classics.jpg',
  bodyClass: 'article-page house-music-classics-page',
  minReadingMinutes: 5,

  title: 'Clásicos house: diez canciones de house, de 1988 a 2001',
  description: 'Clásicos house en orden, de Inner City y Lil Louis a Stardust y Kings of Tomorrow: diez canciones de house, nueve con reproductor y los datos que hay detrás.',
  datePublished: '2026-11-14',
  dateModified: '2026-11-14',
  dateLabel: '14 de noviembre de 2026',

  heroKicker: 'House',
  heroTitle: 'Clásicos house',
  deck: 'Diez clásicos house en orden de publicación, de Inner City en 1988 a Kings of Tomorrow en 2001, nueve con reproductor.',
  answerLabel: 'Clásicos house',
  breadcrumbName: 'Clásicos house',

  answerSection: 'Respuesta',
  introSection: 'Introducción',
  introTitle: 'De "Good Life" a "Finally".',
  faqSection: 'FAQ',
  faqLabel: 'FAQ',
  faqTitle: 'Preguntas frecuentes sobre los clásicos house.',

  sections: [
    {id: 'method', heading: 'Los discos de un vistazo', title: 'Los discos de un vistazo.'},
    {id: 'classic-house-songs', heading: 'Clásicos house de 1988 a 2001', title: 'Clásicos house de 1988 a 2001.', tocLabel: 'Los diez discos',
      subsections: ['good-life', 'french-kiss', 'where-love-lives', 'gypsy-woman', 'passion', 'show-me-love', 'missing', 'music-sounds-better', 'you-dont-know-me', 'finally']},
    {id: 'before-1988', heading: 'Antes de 1988, y los otros clásicos', title: 'Antes de 1988, y los otros clásicos.', tocLabel: 'Antes de 1988'},
    {id: 'artist-music', heading: 'Más para escuchar', title: 'Más para escuchar.'},
    {id: 'where-to-start', heading: 'Por dónde empezar', title: 'Por dónde empezar.'}
  ],

  media: ({lang}) => ({
    glance: articleTable({label: 'Los diez clásicos house de un vistazo', headers: ['Año', 'Disco'], rows: [
      ['1988', 'Inner City, Good Life'],
      ['1989', 'Lil Louis, French Kiss'],
      ['1991', 'Alison Limerick, Where Love Lives'],
      ['1991', 'Crystal Waters, Gypsy Woman'],
      ['1992', 'Gat Decor, Passion'],
      ['1993', 'Robin S, Show Me Love'],
      ['1995', 'Everything But the Girl, Missing (Todd Terry Remix)'],
      ['1998', 'Stardust, Music Sounds Better With You'],
      ['1999', "Armand van Helden, You Don't Know Me"],
      ['2001', 'Kings of Tomorrow, Finally']
    ].map(row => row.map(escapeHtml))}),
    elsewhere: articleTable({label: 'Clásicos anteriores en otras guías', headers: ['Disco', 'Dónde está'], rows: [
      ['Jesse Saunders, Marshall Jefferson, Mr. Fingers, Frankie Knuckles, Farley "Jackmaster" Funk', '<a href="/es/musica-house">Guía de la música house</a>'],
      ['Phuture, Acid Tracks; A Guy Called Gerald, Voodoo Ray', '<a href="/acid-house-guide">Guía del acid house</a> (en inglés)'],
      ['Rhythim Is Rhythim, Strings of Life', '<a href="/es/techno">Guía del techno</a>']
    ]}),
    'good-life': player(lang, 'KJxJxr9RlKM', 'House, 1988', 'Inner City', 'Good Life'),
    'french-kiss': player(lang, 'rmOAVfEDyhA', 'House, 1989', "Lil' Louis", 'French Kiss (The Original Underground Mix)'),
    'where-love-lives': player(lang, 'Wep5nUkLcDk', 'House, 1991', 'Alison Limerick', 'Where Love Lives (Classic Club Mix)'),
    'gypsy-woman': player(lang, '_KztNIg4cvE', 'House, 1991', 'Crystal Waters', "Gypsy Woman (She's Homeless)"),
    'show-me-love': player(lang, 'onZbcgPaAJM', 'House, 1993', 'Robin S', 'Show Me Love (StoneBridge Club Mix, 2020 remaster)'),
    missing: player(lang, 'IAkY5m00rpY', 'House, 1995', 'Everything But the Girl', 'Missing (Todd Terry Remix)'),
    'music-sounds-better': player(lang, 'FQlAEiCb8m0', 'French House, 1998', 'Stardust', 'Music Sounds Better With You'),
    'you-dont-know-me': player(lang, 'rnlp_avexYQ', 'House, 1999', 'Armand van Helden', "You Don't Know Me (Radio Edit)"),
    finally: player(lang, '9X0WEvHptEE', 'House, 2001', 'Kings of Tomorrow', 'Finally (Radio Edit)'),
    'tr-909': articleFigure({
      src: 'img/house-music-classics/roland-tr-909-1200.webp',
      srcset: 'img/house-music-classics/roland-tr-909-320.webp 320w, img/house-music-classics/roland-tr-909-1200.webp 1200w',
      width: 1200, height: 709,
      alt: 'El panel frontal de una caja de ritmos Roland TR-909, con dieciséis botones de paso y pantalla de tempo',
      caption: 'La Roland TR-909, la caja de ritmos que Kevin Saunderson usó para el instrumental de "Good Life". Foto: Brandon Daniel, CC BY-SA 2.0.',
      className: 'wide-archive-image'
    }),
    'crystal-waters': articleFigure({
      src: 'img/house-music-classics/crystal-waters-2012-900.webp',
      srcset: 'img/house-music-classics/crystal-waters-2012-320.webp 320w, img/house-music-classics/crystal-waters-2012-900.webp 900w',
      width: 900, height: 1350,
      alt: 'Crystal Waters canta a un micrófono en un escenario al aire libre',
      caption: 'Crystal Waters en el escenario del Capital Pride Festival de Washington D. C., en 2012. Escribió "Gypsy Woman" después de observar a una mujer sin hogar en esa misma ciudad. Foto: Elvert Barnes, CC BY-SA 2.0.',
      className: 'portrait-image'
    }),
    'rare-electronic-music': {
      usePreviousParagraph: true,
      render: text => articleListeningBand({
        platform: 'spotify', id: 'own-playlist-rare-electronic-music',
        kicker: 'Una playlist de thecatrave', title: playlist.title,
        description: text,
        src: `https://open.spotify.com/embed/playlist/${playlist.id}?utm_source=generator`,
        iframeTitle: `${playlist.title}, seleccionada por thecatrave, en Spotify`,
        fullBleed: true, tone: 'cyan'
      })
    }
  }),

  // Las tres fuentes de la página inglesa, URL por URL. Todas en inglés.
  sources: [
    {href: 'https://www.nme.com/features/best-house-songs-ever-chicago-1970s-1980s-1990s-frankie-knuckles-2678413', label: 'NME: las mejores canciones de house (en inglés)'},
    {href: 'https://6amgroup.com/articles/guides-all/the-10-best-classic-house-music-songs', label: '6AM Group: las 10 mejores canciones clásicas de house (en inglés)'},
    {href: 'https://www.billboard.com/lists/best-house-music-songs-all-time/', label: 'Billboard: las 50 mejores canciones de house de todos los tiempos (en inglés)'}
  ],

  bandcamp: {
    description: 'Comprar uno de estos apoya directamente la música y lo que escribo.',
    tracks: [
      {title: 'thecatrave, Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks de thecatrave'},
      {title: 'thecatrave, 60 hours of mistakes', id: '3330948631', url: 'https://thecatrave.bandcamp.com/track/60-hours-of-mistakes', linkText: '60 hours of mistakes de thecatrave'}
    ]
  }
};
