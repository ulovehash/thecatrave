// es trance guide. Structure and facts from the English page
// (trance-guide-draft.md, build-trance-article.mjs).
//
// Keywords (keywords/es-trance.json): Keyword Planner bucket for the head
// term, wording from Google es-ES on 2026-10-10; no exact volumes (account
// without ad spend).
//
// Images are the English guide's, in img/trance/, with translated captions.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, ownSetListening, ownTrackListening
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, height, alt, caption, className) => articleFigure({
  src: `img/trance/${name}-1024.webp`,
  srcset: `img/trance/${name}-320.webp 320w, img/trance/${name}-1024.webp 1024w`,
  width: 1024, height, alt, caption, className
});

const video = (label, description, item) => articleVideoCollection({lang: 'es', label, description, items: [articleVideoCard(item)]});

export default {
  lang: 'es',
  name: 'es-trance',
  file: 'es/musica-trance.html',
  draft: 'es/trance-draft.md',
  canonical: 'https://thecatrave.com/es/musica-trance',
  englishPath: '/trance-guide',
  ogImage: 'https://thecatrave.com/img/og/trance.jpg',
  bodyClass: 'article-page trance-page',
  minReadingMinutes: 9,

  title: 'Qué es la música trance: orígenes, artistas y sonido',
  description: 'Subida, breakdown y drop nacidos en los clubes de Fráncfort: cómo Armin van Buuren y Tiësto llevaron el trance a los festivales y cómo divergió el psytrance',
  datePublished: '2026-10-10',
  dateModified: '2026-10-10',
  dateLabel: '10 de octubre de 2026',

  heroKicker: 'Guía del trance',
  heroTitle: 'Trance: la subida, el breakdown y el drop',
  deck: 'Una escena de clubes de Fráncfort que se puso nombre sola, un DJ berlinés que construyó la mitad de la historia antes de que nadie la bautizara y dos DJ de la era comercial cuya rivalidad llenó los grandes escenarios durante diez años.',
  answerLabel: 'Música trance: definición',
  breadcrumbName: 'Guía del trance',

  answerSection: 'Respuesta',
  introSection: 'Introducción',
  introTitle: 'Las luces que vuelven a encenderse.',
  faqSection: 'Preguntas frecuentes',
  faqLabel: 'Preguntas frecuentes',
  faqTitle: 'Preguntas frecuentes sobre el trance.',

  sections: [
    {id: 'what-is', heading: 'Qué es la música trance', tocLabel: 'Qué es la música trance', title: '¿Qué es la música trance?'},
    {id: 'origins', heading: 'De dónde viene el trance', tocLabel: 'De dónde viene el trance', title: 'De dónde viene el trance.'},
    {id: 'decade', heading: 'La década comercial del trance', tocLabel: 'La década comercial del trance', title: 'La década comercial del trance.'},
    {id: 'styles', heading: 'Estilos y subgéneros del trance', tocLabel: 'Estilos y subgéneros del trance', title: 'Estilos y subgéneros del trance.'},
    {id: 'family', heading: 'Trance, house y techno', tocLabel: 'Trance, house y techno', title: 'Trance, house y techno.'},
    {id: 'today', heading: 'El trance hoy', tocLabel: 'El trance hoy', title: 'El trance hoy.'}
  ],

  media: ({lang}) => ({
    'Image: Sven Väth': figure('sven-vath-2014', 1024, 'Sven Väth pinchando en el Mayday en 2014', 'Sven Väth en el Mayday, 2014. A sus clubes y sellos de Fráncfort, Eye Q y Harthouse, se les atribuye haber moldeado el sonido que acabó siendo el trance. Foto: Krd, CC BY-SA 3.0.', 'square-image'),
    'Embed: Sven Väth': video('Sven Väth en directo', 'Sven Väth en «Into The Dark», de Boiler Room x Eristoff, en Marsella.', {youtubeId: 'nFS-qV6EuX0', genre: 'LIVE, 2018', artist: 'Sven Väth', title: 'Into The Dark, Marsella'}),
    'Image: Paul van Dyk': figure('paul-van-dyk-2007', 1365, 'Paul van Dyk mezclando en un club de Australia, 2007', 'Paul van Dyk en 2007. Su sello MFS Records y sus residencias en el Tresor y el E-Werk construyeron el lado berlinés de la escena casi tan rápido como Fráncfort. Foto: Ben Novakovic, CC BY-SA 2.0.', 'portrait-image'),
    'Embed: Paul van Dyk': video('Paul van Dyk en directo', 'Paul van Dyk en el Mixmag Lab de Ámsterdam.', {youtubeId: 'cx5QQFnY7ic', genre: 'MIXMAG, 2025', artist: 'Paul van Dyk', title: 'Mixmag Lab Ámsterdam'}),
    'Image: Armin van Buuren': figure('armin-van-buuren-2017', 681, 'Armin van Buuren ante una multitud enorme en Armin Only Embrace, en Kiev, 2017', 'Armin van Buuren en Armin Only Embrace, en Kiev, 2017. Los lectores de DJ Mag lo eligieron cinco veces DJ número uno del mundo, entre 2007 y 2012. Foto: Vitaliy from Kharkiv, Ukraine, CC BY 2.0.', 'wide-archive-image'),
    'Embed: Armin van Buuren': video('Armin van Buuren en directo', 'Armin van Buuren desde Ushuaïa Ibiza para DJ Mag.', {youtubeId: 'z9KgKX4K3MM', genre: 'DJ MAG, 2025', artist: 'Armin van Buuren', title: 'Live From Ushuaïa Ibiza'}),
    'Image: Tiësto': figure('tiesto-2017', 765, 'Tiësto en directo en el festival Airbeat One, 2017', 'Tiësto en el festival Airbeat One, 2017. Su sesión en la ceremonia de apertura de los Juegos Olímpicos de Atenas de 2004 puso el trance ante la mayor audiencia que el género había alcanzado. Foto: Julia Keiser, CC BY-SA 4.0.', 'wide-archive-image'),
    'Embed: Tiësto': video('Tiësto en directo', 'Tiësto en una sesión de Beatport Live para ReConnect.', {youtubeId: 'sBaY_AF6zA0', genre: 'BEATPORT LIVE, 2020', artist: 'Tiësto', title: 'ReConnect'}),
    'thecatrave degeneration': ownTrackListening('degeneration', 'Garage, dubstep y breaks en un solo remix, a 132 BPM: dentro del rango de tempo del trance, pero construido sobre un ritmo muy distinto. Mi propio remix.', lang),
    'thecatrave mix 1': ownSetListening(0, lang, 'Para después de la historia: treinta temas en los que los breaks pasan del garage a la bass music, al techno y al rave, si luego quieres otra paleta. Mi propio mix.'),
    'Table: Trance, house y techno': articleTable({
      headers: ["Estilo", "Tempo aproximado", "Qué lleva el tema", "Un disco para empezar"],
      rows: [["Trance", "130–145 BPM", "Una subida melódica, un breakdown y después el regreso de la batería", "Paul van Dyk, «For an Angel»"], ["Progressive house", "118–128 BPM", "Un groove hecho para repetirse, tensión que sube poco a poco, sin drop duro", "Sasha & Digweed, «Xpander»"], ["Techno", "120–135 BPM", "Ritmo de máquina, poca o ninguna melodía, voz mínima", "Jeff Mills, «The Bells»"], ["Psytrance", "140–150 BPM", "Una línea de bajo rodante en semicorcheas bajo un diseño sonoro psicodélico en capas", "Infected Mushroom, «The Legend of the Black Shawarma»"]].map(row => row.map(escapeHtml)),
      label: 'Trance, house, techno y psytrance comparados'
    }),
    'Table: Subgéneros del trance': articleTable({
      headers: ["Subgénero del trance", "También llamado", "Qué lo distingue"],
      rows: [["Uplifting trance", "Euphoric trance", "Melodías de himno en tono mayor sobre la subida, breakdown, drop clásico"], ["Trance progresivo", "", "Arreglos más largos y graduales, grave más profundo"], ["Vocal trance", "", "Un estribillo cantado en primer plano sobre las mismas bases estructurales"], ["Hard trance", "", "Tempo más rápido y bombo más duro, más cercano al techno"], ["Psytrance", "Trance psicodélico", "Linaje de Goa, línea de bajo rodante en semicorcheas, 140–150 BPM"]].map(row => row.map(escapeHtml)),
      label: 'Los subgéneros del trance de un vistazo'
    })
  }),

  sources: [
    {href: 'https://en.wikipedia.org/wiki/Trance_music', label: 'Wikipedia: Trance music (en inglés)'},
    {href: 'https://www.beatportal.com/articles/51518-beatports-definitive-history-of-trance', label: 'Beatportal: Beatport’s definitive history of trance (en inglés)'},
    {href: 'https://www.discogs.com/master/13879-Dance-2-Trance-We-Came-In-Peace', label: 'Discogs: Dance 2 Trance, We Came In Peace (1990)'},
    {href: 'https://edmidentity.com/2023/12/13/germanys-trance-legacy-from-berlin-to-frankfurt/', label: 'EDM Identity: Germany’s trance legacy, from Berlin to Frankfurt (en inglés)'},
    {href: 'https://djmag.com/top100djs/2010', label: 'DJ Mag: Top 100 DJs 2010 (en inglés)'},
    {href: 'https://djmag.com/top100djs/2012', label: 'DJ Mag: Top 100 DJs 2012 (en inglés)'},
    {href: 'https://en.wikipedia.org/wiki/Psychedelic_trance', label: 'Wikipedia: Psychedelic trance (en inglés)'}
  ],

  bandcamp: {
    description: 'El trance no es el sonido que hago, pero su instinto de subida y liberación es uno que todo género de baile toma prestado en algún punto. Estos lanzamientos son de mi lado de la familia. Comprar uno apoya directamente mi trabajo.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks de thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 de thecatrave'}
    ]
  }
};
