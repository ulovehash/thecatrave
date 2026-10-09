// Spanish Printworks London guide. Structure, facts and media from the English
// page (printworks-london-draft.md, build-printworks-london-article.mjs); facts
// are the English page's, read on 2026-10-05 from British Land, Canada Water,
// Southwark, Broadwick, Mixmag, DJ Mag, Resident Advisor, The Guardian and the
// BBC: keep them aligned. There is no French or German version.
//
// Spanish keywords, measured 2026-10-09 with Keyword Planner (Spain,
// keywords/es-printworks-london.json): printworks london 100-1K. Live es-ES SERP
// read the same day (google.es, hl=es, gl=es): English-language results lead
// (Wikipedia, Tripadvisor, the venue site) and People also ask "Is Printworks
// London coming back?", "Why is Printworks London closed?", "Is Drumsheds the
// new Printworks?", which the English page's H2s already answer. Spanish
// searches for "printworks londres reapertura" return Spanish news about the
// 2026 reopening and no People-also-ask box. Image is the English guide's, in
// img/printworks-london/, with a translated caption.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, ownSetListening
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/printworks-london/${name}-1200.webp`,
  srcset: `img/printworks-london/${name}-320.webp 320w, img/printworks-london/${name}-1200.webp 1200w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

const ext = (href, text) => `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`;
const rows = list => list.map(row => row.map(escapeHtml));

export default {
  lang: 'es',
  name: 'es-printworks-london',
  file: 'es/printworks-london.html',
  draft: 'es/printworks-london-draft.md',
  canonical: 'https://thecatrave.com/es/printworks-london',
  englishPath: '/printworks-london',
  ogImage: 'https://thecatrave.com/img/og/printworks-london.jpg',
  bodyClass: 'article-page printworks-london-page',
  minReadingMinutes: 6,

  title: 'Printworks London: reapertura, cierre e historia',
  description: 'Printworks London cerró en mayo de 2023. Qué está previsto oficialmente, por qué cerró, sus salas y aforo, noches míticas, Drumsheds y adónde ir mientras tanto.',
  datePublished: '2026-10-09',
  dateModified: '2026-10-09',
  dateLabel: '9 de octubre de 2026',

  heroKicker: 'Guía de club, Londres',
  heroTitle: 'Printworks London: reapertura, cierre e historia',
  deck: 'El local de Rotherhithe que cerró en mayo de 2023: qué está previsto oficialmente, por qué cerró, cómo era y adónde ir mientras tanto.',
  answerLabel: 'Printworks London',
  breadcrumbName: 'Printworks London',

  answerSection: 'Respuesta',
  introSection: 'Introducción',
  introTitle: 'Cerrado, con vuelta prevista.',
  faqSection: 'FAQ',
  faqLabel: 'Preguntas frecuentes',
  faqTitle: 'Preguntas frecuentes sobre Printworks London.',

  sections: [
    {id: 'coming-back', heading: '¿Vuelve Printworks London?', title: '¿Vuelve Printworks London?', tocLabel: '¿Vuelve?'},
    {id: 'official', heading: 'Reapertura de Printworks London: qué es oficial', title: 'Reapertura de Printworks London: qué es oficial', tocLabel: 'Reapertura oficial'},
    {id: 'why-closed', heading: '¿Por qué cerró Printworks?', title: '¿Por qué cerró Printworks?', tocLabel: '¿Por qué cerró?'},
    {id: 'history', heading: 'Historia de Printworks London', title: 'Historia de Printworks London', tocLabel: 'Historia'},
    {id: 'rooms', heading: 'Salas y aforo de Printworks London', title: 'Salas y aforo de Printworks London', tocLabel: 'Salas y aforo'},
    {id: 'lineup', heading: 'Eventos y cartel de Printworks London', title: 'Eventos y cartel de Printworks London', tocLabel: 'Eventos y cartel'},
    {id: 'drumsheds', heading: '¿Es Drumsheds el nuevo Printworks?', title: '¿Es Drumsheds el nuevo Printworks?', tocLabel: 'Drumsheds'},
    {id: 'instead', heading: 'Printworks London cerrado: adónde ir mientras tanto', title: 'Printworks London cerrado: adónde ir mientras tanto', tocLabel: 'Adónde ir'}
  ],

  media: ({lang}) => ({
    'thecatrave mix 0': ownSetListening(0, lang),
    'thecatrave mix 1': ownSetListening(1, lang),
    'gate-2010': figure('gate-2010', 1200, 797,
      'Una verja con alambre de espino y un cartel de East Deliveries en la imprenta de Harmsworth Quays, en Rotherhithe',
      'La imprenta de Harmsworth Quays, en Rotherhithe, el 30 de mayo de 2010, siete años antes de abrir como Printworks. Foto: Ben Sutherland, CC BY 2.0.'),
    closing: articleVideoCollection({
      lang,
      label: 'El fin de semana de cierre, 2023',
      description: 'Dos sets grabados por DJ Mag en los últimos días de Printworks London.',
      items: [
        articleVideoCard({youtubeId: 'GPuZwMmd4YI', genre: 'Fin de semana de cierre', artist: 'Adriatique', title: 'Adriatique Live @ Printworks Closing Weekend'}),
        articleVideoCard({youtubeId: 'nrcgEPEuWQY', genre: 'Fin de semana de cierre', artist: 'CamelPhat', title: 'CamelPhat @ Printworks London Closing Weekend'})
      ]
    }),
    'room set': articleVideoCollection({
      lang,
      label: 'Printworks en 2017',
      description: 'Adam Beyer en directo desde Printworks en su primer año.',
      items: [
        articleVideoCard({youtubeId: '6ag9s7vfy_c', genre: 'Techno, 2017', artist: 'Adam Beyer', title: 'Adam Beyer live from PRINTWORKS, London 2017'})
      ]
    }),
    'club sets': articleVideoCollection({
      lang,
      label: 'Grabados en Printworks London',
      description: 'Sonny Fodera y The Martinez Brothers, que estaban en el cartel de apertura de 2017.',
      items: [
        articleVideoCard({youtubeId: 'XNwuQ24X39U', genre: 'House', artist: 'Sonny Fodera', title: 'Sonny Fodera DJ Set From Printworks London'}),
        articleVideoCard({youtubeId: 'l1g6nJXC9pI', genre: 'Tech house', artist: 'The Martinez Brothers', title: 'The Martinez Brothers Tech House DJ Set At Printworks London'})
      ]
    }),
    'Table: timeline': articleTable({
      label: 'Cronología de la reapertura de Printworks London',
      headers: ['Fecha', 'Qué ocurrió'],
      rows: rows([
        ['12 de febrero de 2024', 'British Land y AustralianSuper presentan una solicitud de asuntos reservados. El plan sitúa el local en la mitad del edificio y espacio de trabajo y comercio en la otra mitad, y dice que reabrirá en 2026.'],
        ['24 de septiembre de 2024', 'Southwark aprueba el plan, y Mixmag informa de que el local volverá en 2026.'],
        ['Mayo de 2026', 'Una nueva consulta propone un uso solo cultural y de ocio, mantiene las Press Halls y la Inkwell, añade una terraza en la azotea y demuele parcialmente el edificio, conservando la estructura de las Press Halls. Se preveía una solicitud revisada para el verano.']
      ])
    }),
    'Table: drumsheds': articleTable({
      label: 'Comparación entre Printworks London y Drumsheds',
      headers: ['Dato', 'Printworks London', 'Drumsheds'],
      rows: rows([
        ['Lugar', 'Rotherhithe, sureste de Londres', 'Antigua tienda de IKEA, norte de Londres'],
        ['Aforo', '6.000', '15.000'],
        ['Operador', 'Broadwick', 'Broadwick'],
        ['Licencia urbanística', 'Permiso temporal de seis años', 'Permiso urbanístico temporal'],
        ['Estado', 'Cerrado desde el 1 de mayo de 2023', 'Abierto en enero de 2025, con condiciones de licencia modificadas']
      ])
    })
  }),

  sources: [
    {html: `Planes de reapertura y solicitud de 2024: ${ext('https://www.britishland.com/news/british-land-and-australiansuper-submit-application-to-revive-printworks-as-a-permanent-cultural-venue/', 'British Land')}, ${ext('https://www.theguardian.com/music/2024/feb/12/printworks-london-may-reopen-by-2026-after-developers-submit-plans', 'The Guardian')} y ${ext('https://www.timeout.com/london/news/printworks-is-set-to-reopen-as-a-massive-cultural-venue-with-gigs-and-a-rooftop-space-021224', 'Time Out')}.`},
    {html: `Aprobación y vuelta en 2026: ${ext('https://mixmag.net/read/printworks-london-plans-reopen-confirmed-2026-news', 'Mixmag')}. Consulta de 2026: ${ext('https://canadawater.co.uk/latest/news/invitation-to-view-proposals-for-a-new-cultural-venue-at-printworks/', 'Canada Water')} y ${ext('https://salamandernews.org/2026-05-canada-water-printworks-consultation/', 'Salamander News')}. Página del operador: ${ext('https://broadwick.com/divisions/spaces/printworks-london/', 'Broadwick')}.`},
    {html: `Cierre: ${ext('https://www.bbc.com/news/entertainment-arts-65427101', 'BBC, 1 de mayo de 2023')}, ${ext('https://mixmag.net/read/printworks-officially-shuttered-renovated-into-offices-news', 'Mixmag, julio de 2022')}, ${ext('https://ra.co/news/77877', 'Resident Advisor, 2 de mayo de 2023')}, ${ext('https://www.djmag.com/news/printworks-hopes-return-three-years-says-broadwick-live-after-massive-closing-weekend', 'DJ Mag')} y ${ext('https://www.theguardian.com/music/2023/may/02/save-the-last-dance-london-superclub-printworks-aims-to-reopen-in-2026', 'The Guardian, 2 de mayo de 2023')}.`},
    {html: `Noche de apertura, 4 de febrero de 2017: ${ext('https://ra.co/events/908779', 'Resident Advisor')}. Aforo, salas y noches de sellos: ${ext('https://www.djmag.com/top100clubs/2023/2/Printworks-London', 'DJ Mag Top 100 Clubs 2023')}.`},
    {html: `Drumsheds: ${ext('https://www.bbc.com/news/entertainment-arts-67273621', 'BBC, 4 de noviembre de 2023')} y ${ext('https://www.theguardian.com/music/2025/jan/14/can-the-uks-biggest-nightclub-stay-open-drumsheds', 'The Guardian, 14 de enero de 2025')}. Web oficial: ${ext('https://printworkslondon.co.uk', 'printworkslondon.co.uk')}.`}
  ],

  bandcamp: {
    description: 'Lejos de la pista, la música que hago yo mismo. Comprar una apoya mi trabajo directamente.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 de thecatrave'},
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks de thecatrave'}
    ]
  }
};
