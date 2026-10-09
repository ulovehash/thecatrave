// Spanish Awakenings guide. Structure and facts from the English page
// (awakenings-draft.md) and the French module.
//
// Spanish keywords (keywords/es-awakenings.json): es-ES SERP and People also ask
// read in Chrome on 2026-10-10 ("festival awakenings", "awakenings festival
// 2027"). PAA asks "¿Dónde se celebrará el festival Awakenings?", "¿Dónde son los
// Awakenings?", "¿Cuándo es el awakening?", "¿Qué es Awakenings?". The official
// site lists Upclose 2027 on 15 and 16 May at Houtrak (Spaarnwoude-park).
//
// The image is the English guide's, in img/awakenings/, with a translated caption.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, ownTrackListening
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption, className = 'wide-archive-image') => articleFigure({
  src: `img/awakenings/${name}-${width}.webp`,
  srcset: `img/awakenings/${name}-320.webp 320w, img/awakenings/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className
});

export default {
  lang: 'es',
  name: 'es-awakenings',
  file: 'es/festival-awakenings.html',
  draft: 'es/awakenings-draft.md',
  canonical: 'https://thecatrave.com/es/festival-awakenings',
  englishPath: '/awakenings-festival',
  ogImage: 'https://thecatrave.com/img/og/awakenings.jpg',
  bodyClass: 'article-page awakenings-page',

  title: 'Festival Awakenings 2027: qué es y dónde se celebra',
  description: 'Fundado en Ámsterdam en 1997 y solo techno desde entonces: dónde se celebran el festival de verano y la cita del Amsterdam Dance Event, y de dónde viene el nombre.',
  datePublished: '2026-10-10',
  dateModified: '2026-10-10',
  dateLabel: '10 de octubre de 2026',

  heroKicker: 'Awakenings',
  heroTitle: 'Festival Awakenings',
  deck: 'Un festival de techno neerlandés fundado en Ámsterdam en 1997 y solo techno desde entonces. Dónde se celebran el festival de verano y la cita del Amsterdam Dance Event, el origen accidental del nombre y quién pincha.',
  answerLabel: 'Qué es el festival Awakenings',
  breadcrumbName: 'Festival Awakenings',

  answerSection: 'Respuesta',
  introSection: 'Introducción',
  introTitle: 'Un solo género, casi treinta años.',
  faqSection: 'Preguntas frecuentes',
  faqLabel: 'Preguntas frecuentes',
  faqTitle: 'Preguntas frecuentes sobre el festival Awakenings.',
  ownSetAfter: 'history',

  sections: [
    {id: 'where', heading: 'Dónde y cuándo se celebra Awakenings', title: 'Dónde y cuándo se celebra Awakenings.'},
    {id: 'history', heading: 'Breve historia y de quién es Awakenings', title: 'Breve historia y de quién es Awakenings.'},
    {id: 'music', heading: 'Qué suena en Awakenings', title: 'Qué suena en Awakenings.', kicker: 'La música'}
  ],

  media: ({lang}) => ({
    'thecatrave degeneration': ownTrackListening('degeneration', 'Lejos de Awakenings: la voz de Mylène Farmer sobre breaks, entre dubstep y UK garage. Mi propio remix.', lang),
    'Table: Datos': articleTable({
      headers: ['Dato', 'Detalle'],
      rows: [
        ['Fundación', '30 de marzo de 1997, Gashouder, Ámsterdam'],
        ['Organizador', 'Monumental Productions, propiedad de LiveStyle desde 2015'],
        ['Género', 'Solo techno'],
        ['Festival de verano 2026', '10 al 12 de julio, Beekse Bergen, Hilvarenbeek, entradas agotadas'],
        ['Festival de verano 2027', '9 al 11 de julio, Beekse Bergen, Hilvarenbeek'],
        ['Awakenings Upclose 2027', '15 y 16 de mayo, Houtrak, parque de Spaarnwoude'],
        ['Cita del Amsterdam Dance Event 2026', '21 al 25 de octubre, Gashouder, Ámsterdam'],
        ['DJ Mag Top 100 Festivals 2026', 'Puesto 34, 14 puestos menos']
      ].map(row => row.map(escapeHtml)),
      label: 'Festival Awakenings: datos'
    }),
    'Image: Blimp': figure('blimp-2007', 1200, 803,
      'El dirigible de Awakenings sobre el público, con rayos láser cruzando el cielo nocturno',
      'Awakenings, 2007. Fotografía: Boris van Hoytema, CC BY 2.0.'),
    'Maceo Plex': articleVideoCollection({
      lang: 'es',
      label: 'Maceo Plex, Mosaic x Awakenings en el Gashouder ADE, 2018',
      description: 'Maceo Plex en el Gashouder durante la cita de Awakenings en el Amsterdam Dance Event de 2018.',
      items: [articleVideoCard({youtubeId: 'gR_nkH5B35s', genre: 'Techno', artist: 'Maceo Plex', title: 'Mosaic x Awakenings en el Gashouder ADE, 2018'})]
    })
  }),

  sources: [
    {href: 'https://en.wikipedia.org/wiki/Awakenings_(festival)', label: 'Wikipedia: Awakenings (festival) (en inglés)'},
    {href: 'https://www.awakenings.com', label: 'Awakenings: web oficial'},
    {href: 'https://www.awakenings.com/how-to-travel-festival26', label: 'Awakenings: cómo llegar al festival Awakenings 2026 (en inglés)'},
    {href: 'https://djmag.com/top100festivals', label: 'DJ Mag: Top 100 Festivals 2026 (en inglés)'}
  ],

  bandcamp: {
    description: 'Awakenings está lejos de los breaks que hago yo. Comprar un tema apoya directamente mi trabajo.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks de thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 de thecatrave'}
    ]
  }
};
