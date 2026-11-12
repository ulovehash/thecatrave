// Spanish hardstyle guide. Structure and facts from the English page
// (hardstyle-guide-draft.md, build-hardstyle-article.mjs).
//
// Spanish keywords (keywords/es-hardstyle.json): Keyword Planner, Spain,
// 2026-11-12: hardstyle 100–1K; musica hardstyle, que es hardstyle and
// rawstyle 10–100. No exact volume (account without ad spend).
//
// The English generator places each listening block by paragraph index. Here
// the draft places them with [Embed: ...] lines at the same positions.
//
// The image is the English guide's, in img/hardstyle/, with a translated
// caption; see home-articles.mjs for why a translation may reuse it.
import {
  articleFigure, articleListeningCollection, articleTable, articleTrackEmbed, ownTrackListening
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const track = (platform, id, artist, title, year, note) => ({
  artist, title, year, note,
  playerHtml: articleTrackEmbed({platform, id, title: `${artist}, ${title}`})
});

export default {
  lang: 'es',
  name: 'es-hardstyle',
  file: 'es/hardstyle.html',
  draft: 'es/hardstyle-draft.md',
  canonical: 'https://thecatrave.com/es/hardstyle',
  englishPath: '/hardstyle-guide',
  ogImage: 'https://thecatrave.com/img/og/hardstyle.jpg',
  bodyClass: 'article-page hardstyle-page',
  minReadingMinutes: 8,

  title: '¿Qué es el hardstyle? Historia, sonido, artistas y subgéneros',
  description: 'La música hardstyle nació del hard dance europeo y pasó a sonar en festivales: bombos distorsionados, reverse bass, artistas clave y sus ramas eufórica y raw.',
  datePublished: '2026-11-12',
  dateModified: '2026-11-12',
  dateLabel: '12 de noviembre de 2026',

  heroKicker: 'Guía de hardstyle',
  heroTitle: 'Hardstyle: bombos distorsionados, reverse bass y escala de festival',
  deck: 'Un intercambio de finales de los noventa entre hard house, hard trance y hardcore que se convirtió en el sonido central de un circuito de festivales neerlandés.',
  answerLabel: 'Hardstyle: definición',
  breadcrumbName: 'Hardstyle',

  answerSection: 'Respuesta',
  introSection: 'Introducción',
  introTitle: 'El bombo lleva el disco.',
  faqSection: 'FAQ',
  faqLabel: 'Preguntas frecuentes',
  faqTitle: 'Preguntas frecuentes sobre el hardstyle.',

  sections: [
    {id: 'what-is', heading: 'Qué es el hardstyle', title: '¿Qué es el hardstyle?'},
    {id: 'before', heading: 'Antes del nombre', title: 'Antes del nombre.', kicker: 'De 1999 a 2002'},
    {id: 'scene', heading: 'Una escena se convierte en hardstyle', title: 'Una escena se convierte en hardstyle.', kicker: 'Principios de los 2000'},
    {id: 'melodic', heading: 'El giro melódico', title: 'El giro melódico.', kicker: 'De 2005 a 2010'},
    {id: 'branches', heading: 'Hardstyle eufórico y raw hardstyle', title: 'Hardstyle eufórico y raw hardstyle.', tocLabel: 'Eufórico y raw'},
    {id: 'comparison', heading: 'Hardstyle, hardcore y techno', title: 'Hardstyle, hardcore y techno.'},
    {id: 'trance', heading: 'Hardstyle vs trance', title: 'Hardstyle vs trance.'},
    {id: 'festivals', heading: 'Festivales de hardstyle y la escena actual', title: 'Festivales de hardstyle y la escena actual.', tocLabel: 'Festivales y escena actual'}
  ],

  media: ({lang}) => ({
    'thecatrave berlin-race-1909': ownTrackListening('berlin-race-1909', 'Desde un rincón distinto del hardstyle: ritmos rotos en la reverberación del dub techno. Un tema mío, con nombre de Berlín.', lang),
    'early-hardstyle-listening': articleListeningCollection({
      lang, id: 'early-hardstyle-listening',
      title: 'Del reverse bass al centro melódico',
      description: 'Dos discos de Scantraxx de la época en que el primer hardstyle empezó a abrirse a una forma más melódica.',
      items: [
        track('youtube', 'Q_N2Gv2_0IU', 'DJ Duro & The Prophet', 'Shizzle My Dizzle', '2005', 'Reverse bass, un riff de hard trance y el arreglo austero del primer sonido Scantraxx.'),
        track('spotify', '6mOofVIiHmXHlvEapIN8k9', 'Blademasterz', 'Masterblade', '2006', 'Brennan Heart bajo su alias Blademasterz, con más melodía en el arreglo.')
      ]
    }),
    'melodic-hardstyle-listening': articleListeningCollection({
      lang, id: 'melodic-hardstyle-listening',
      title: 'El giro melódico de finales de los 2000',
      description: 'La melodía del lead y el bombo afinado se vuelven partes iguales del disco.',
      items: [
        track('spotify', '5QTEBCV3eRst0uoLUHhJOr', 'Headhunterz', 'Rock Civilization', '2007', 'Un ejemplo compacto del sonido de lead más luminoso y de un bombo que sigue a la melodía.'),
        track('spotify', '1Ns5FtyALVwzFuRS4nH9xd', 'D-Block & S-te-Fan', 'Music Made Addict', '2009', 'Un disco que definió a Scantraxx en la expansión melódica del hardstyle.')
      ]
    }),
    'raw-hardstyle-listening': articleListeningCollection({
      lang, id: 'raw-hardstyle-listening',
      title: 'Melodía, presión y la etiqueta raw',
      description: 'Un disco en la frontera entre lo melódico y lo raw, y después el lanzamiento que dio nombre a la rama más oscura.',
      items: [
        track('spotify', '06BmUrVuMtTdOuaf9CTYAz', 'B-Front & Frontliner', 'Magic', '2010', 'Una gran melodía convive con la presión de bombo más oscura que marcaría la división.'),
        track('spotify', '6GcT1R34r7r2OcTUPjUbUw', 'Zatox & Nikkita', 'Raw Style', '2011', 'El tema al que Scantraxx atribuye el nombre del raw hardstyle.')
      ]
    }),
    'Table: Vergleich': articleTable({
      headers: ['Estilo', 'Tempo típico', 'Centro rítmico', 'Estructura melódica'],
      rows: [
        ['Hardstyle', '145 a 155 BPM', 'Bombo distorsionado y afinado con reverse bass', 'Breakdowns largos y grandes leads son habituales'],
        ['Hardcore', '160 BPM o más', 'Patrones de bombo más rápidos y ásperos', 'La melodía varía; la fuerza suele ir delante'],
        ['Techno', '125 a 150 BPM', 'Groove en bucle y ritmo de máquina', 'Depende menos de un largo breakdown melódico'],
        ['Hard techno', '140 a 160 BPM', 'Groove de techno empujado con un bombo más duro', 'Puede tomar sonidos del hardstyle sin su arreglo']
      ].map(row => row.map(escapeHtml)),
      label: 'Comparación de hardstyle, hardcore y techno'
    }),
    'Image: Defqon': articleFigure({
      src: 'img/hardstyle/defqon1-red-2024-1280.webp',
      srcset: 'img/hardstyle/defqon1-red-2024-320.webp 320w, img/hardstyle/defqon1-red-2024-1280.webp 1280w',
      width: 1280, height: 720,
      alt: 'El escenario principal rojo de Defqon.1 en 2024, con un gran público delante a la luz del día',
      caption: 'El Red Stage de Defqon.1 en 2024. El festival separa el hardstyle, el hardcore y los sonidos cercanos en escenarios con código de color. Foto: DELTAFXUniverse, CC BY-SA 4.0.',
      className: 'wide-archive-image'
    })
  }),

  // The English page's sources, URL for URL, with translated labels.
  sources: [
    {href: 'https://www.scantraxx.com/news/scantraxx-recordz-is-born-history-of-hardstyle-column', label: 'Scantraxx: el nacimiento de Scantraxx Recordz (en inglés)'},
    {href: 'https://edmidentity.com/2023/03/11/dj-the-prophet-basscon-wasteland-interview/', label: 'EDM Identity: DJ The Prophet sobre el paso del hardcore al hardstyle (en inglés)'},
    {href: 'https://www.q-dance.com/artists/31843145', label: 'Q-dance: DJ The Prophet (en inglés)'},
    {href: 'https://www.scantraxx.com/news/og-raw', label: 'Scantraxx: el auge del raw hardstyle (en inglés)'},
    {href: 'https://www.scantraxx.com/company', label: 'Scantraxx: la empresa y la historia del sello (en inglés)'},
    {href: 'https://en.wikipedia.org/wiki/Hardstyle', label: 'Wikipedia: Hardstyle, como resumen de fuentes (en inglés)'}
  ],

  bandcamp: {
    description: 'Mi propio trabajo está más cerca de los breaks, el techno y el rave que del hardstyle. Comprar uno de estos lanzamientos apoya directamente la música y la escritura.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks de thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 de thecatrave'}
    ]
  }
};
