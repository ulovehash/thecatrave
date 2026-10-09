// Spanish house music guide. Structure and facts from the English page
// (house-music-draft.md, build-house-music-article.mjs), via the French module.
//
// Spanish keywords (keywords/es-house.json): no volume measured. Live es-ES
// SERP and People also ask read 10 October 2026 for "que es la musica house":
// "ESTO ES HOUSE", Wikipedia, "Deep house: que es, caracteristicas y DJs".
// PAA: "Cual es la musica house mas famosa?" (FAQ on the most famous song),
// "Que artistas tocan house?", "Cual es la diferencia entre la musica
// electronica y la house?", "Que genero musical es house?" (the answer
// section). Artist and electronic-vs-house questions are not added: the
// English page has no sourced answer for them.
//
// Images are the English guide's, in img/house-music/, with translated captions.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, ownSetListening
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/house-music/${name}-${width}.webp`,
  srcset: `img/house-music/${name}-320.webp 320w, img/house-music/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

const video = (lang, youtubeId, genre, artist, title, text) => articleVideoCollection({
  lang,
  label: `${artist}, ${title}`,
  description: text,
  items: [articleVideoCard({youtubeId, genre, artist, title})]
});

export default {
  lang: 'es',
  name: 'es-house',
  file: 'es/musica-house.html',
  draft: 'es/house-draft.md',
  canonical: 'https://thecatrave.com/es/musica-house',
  englishPath: '/house-music-guide',
  ogImage: 'https://thecatrave.com/img/og/house-music.jpg',
  bodyClass: 'article-page house-music-page',
  minReadingMinutes: 9,

  title: 'Qué es la música house: historia, sonido y orígenes',
  description: 'La música house, nacida en Chicago sobre un bombo four-on-the-floor: por qué se llama house, Frankie Knuckles, los primeros discos y los estilos que vinieron luego.',
  datePublished: '2026-10-10',
  dateModified: '2026-10-10',
  dateLabel: '10 de octubre de 2026',

  heroKicker: 'Guía de la música house',
  heroTitle: 'La música house: del Warehouse de Chicago al mundo entero',
  deck: 'Un DJ que reeditaba discos de disco en cinta, un club lleno de bailarines a los que nadie más atendía, y los discos que hicieron cuando nadie hacía los que querían.',
  answerLabel: 'Música house: definición',
  breadcrumbName: 'Guía de la música house',

  answerSection: 'Respuesta',
  introSection: 'Introducción',
  introTitle: 'Discos que nadie hacía.',
  faqSection: 'Preguntas frecuentes',
  faqLabel: 'Preguntas frecuentes',
  faqTitle: 'Preguntas frecuentes sobre la música house.',

  sections: [
    {id: 'what-is-house-music', heading: 'Qué es la música house', title: '¿Qué es la música house?'},
    {id: 'sound', heading: 'Cómo suena la música house'},
    {id: 'warehouse', heading: 'El Warehouse y Frankie Knuckles'},
    {id: 'name', heading: 'Por qué se llama house music', title: '¿Por qué se llama house music?'},
    {id: 'first-records', heading: 'Los primeros discos de house'},
    {id: 'deep-and-acid', heading: 'Deep house y acid house'},
    {id: 'garage', heading: 'Nueva York y Nueva Jersey: el garage house'},
    {id: 'global', heading: 'Cómo el house se hizo global'},
    {id: 'types', heading: 'Tipos de música house'},
    {id: 'house-techno-edm', heading: 'House, techno y EDM'}
  ],

  media: ({lang}) => ({
    'Image: TR-808 and TR-909': figure('roland-tr808-tr909', 1200, 896,
      'Una caja de ritmos Roland TR-808 apoyada contra una pared, junto a una Roland TR-909 en el suelo de un estudio',
      'Una Roland TR-808 y una TR-909, embaladas para una mudanza de estudio. Ambas se vendían como máquinas de prácticas para músicos; el house de Chicago se construyó sobre ellas. Foto: Brandon Daniel, CC BY-SA 2.0.'),
    'Image: Frankie Knuckles at ADE': figure('frankie-knuckles-ade-2012', 1200, 800,
      'Frankie Knuckles tras los platos de un club de Ámsterdam, con luz violeta y gente apretada alrededor de la cabina',
      'Frankie Knuckles en el Sugar Factory de Ámsterdam durante el Amsterdam Dance Event, octubre de 2012, año y medio antes de su muerte. Foto: deepstereo, CC BY 2.0.'),
    'Image: Frankie Knuckles Way': figure('frankie-knuckles-way-2022', 1200, 900,
      'Una placa de calle marrón en Chicago con la inscripción Honorary The Godfather of House Music Frankie Knuckles Way',
      'La placa honorífica de Jefferson Street, en Chicago, en la manzana donde estuvo el Warehouse, rebautizada en 2004. Foto: Sarah Stierch, CC BY 4.0.'),
    'Embed: Frankie Knuckles Boiler Room NYC': video(lang, '644UU55eyzk', 'House', 'Frankie Knuckles', 'DJ set, Boiler Room New York, 2013',
      'Frankie Knuckles pincha para Boiler Room en Nueva York en 2013, en el canal de Boiler Room.'),
    'Embed: On and On': video(lang, 'ef868Dctwkg', 'House, 1984', 'Jesse Saunders', 'On & On',
      'El disco que más se llama el primer disco de house, de 1984.'),
    'Embed: Your Love': video(lang, 'ottFhv0zD_8', 'House, 1987', 'Frankie Knuckles', 'Your Love',
      'La canción de Jamie Principle tal como la publicó Knuckles en 1987, tras un año pinchándola desde la cinta.'),
    'Embed: Move Your Body': video(lang, 'dZVxqo2xAd4', 'House, 1986', 'Marshall Jefferson', 'Move Your Body',
      '«The House Music Anthem», en el canal de Trax Records.'),
    'Embed: Can You Feel It': video(lang, 'DrxPFBEr5Bo', 'Deep house, 1986', 'Mr. Fingers', 'Can You Feel It',
      'Larry Heard como Mr. Fingers: el disco donde empieza el deep house.'),
    'Embed: Kerri Chandler Rain': video(lang, 'weyCHkdL-HI', 'Deep house', 'Kerri Chandler', 'Rain',
      '«Rain» de Kerri Chandler, en el canal de Nervous Records.'),
    "Embed: Love Can't Turn Around": video(lang, 'wch77HlcVl0', 'House, 1986', 'Farley «Jackmaster» Funk', "Love Can't Turn Around",
      'El disco de Chicago que llegó al número 10 en Gran Bretaña en septiembre de 1986, cantado por Darryl Pandy.'),
    'Embed: Promised Land': video(lang, 'BJyD_TPeJAI', 'House, 1987', 'Joe Smooth', 'Promised Land',
      'El himno de Chicago de Joe Smooth, de 1987. Carl Cox y Green Velvet lo pincharon para cerrar el festival ARC de Chicago en 2024.'),
    'Embed: One More Time': video(lang, 'FGBhQbmPwH8', 'French house, 2000', 'Daft Punk', 'One More Time',
      'El sencillo de french house de Daft Punk de noviembre de 2000, en el canal del dúo.'),
    'Embed: Black Coffee Cercle': video(lang, 'SGqg_ZzThDU', 'Afro house', 'Black Coffee', 'Salle Wagram, París, para Cercle',
      'Black Coffee pincha para Cercle en París.'),
    'thecatrave mix': ownSetListening(0, lang, 'Treinta temas entre garage, bass music, techno y rave. Mi propia mezcla.'),
    'Table: Subgéneros': articleTable({
      headers: ['Estilo', 'Dónde y cuándo', 'Cómo suena', 'Un disco para empezar'],
      rows: [
        ['House de Chicago', 'Chicago, desde 1984', 'Cajas de ritmos, bajo profundo, una línea vocal repetida', 'Marshall Jefferson, «Move Your Body»'],
        ['Deep house', 'Chicago, desde 1985', 'Más lento y más cálido, acordes de jazz y soul, pads largos', 'Mr. Fingers, «Can You Feel It»'],
        ['Acid house', 'Chicago, 1987', 'Una línea de TB-303 retorcida a mano en primer plano', 'Phuture, «Acid Tracks»'],
        ['Garage house', 'Nueva York y Nueva Jersey, años ochenta', 'Piano gospel, voces potentes, cercano al disco', 'Kerri Chandler, «Rain»'],
        ['Ghetto house', 'Chicago, principios de los noventa', 'Más rápido y más crudo, del sello Dance Mania', 'Paul Johnson'],
        ['French house', 'París, finales de los noventa', 'Samples de discos de funk y disco, a menudo filtrados', 'Daft Punk, «One More Time»'],
        ['Tech house', 'Gran Bretaña y España, años noventa', 'Batería de techno con groove de house', 'Sin un único disco fundacional'],
        ['Afro house y amapiano', 'Sudáfrica, de los noventa a los 2020', 'Ritmo house con kwaito, jazz y percusión local', 'Black Coffee']
      ].map(row => row.map(escapeHtml)),
      label: 'Estilos de música house'
    }),
    'Table: Comparación': articleTable({
      headers: ['', 'House', 'Techno', 'EDM'],
      rows: [
        ['Dónde', 'Chicago, principios de los ochenta', 'Detroit, mediados de los ochenta', 'Festivales estadounidenses, desde 2010 más o menos'],
        ['Tempo', 'Unos 118 a 128 BPM', 'Unos 120 a 150 BPM', 'Varía según el estilo'],
        ['Qué manda', 'Groove, bajo, a menudo una voz', 'Ritmo de máquina y textura, rara vez una voz', 'Drops y grandes hooks de sintetizador'],
        ['Qué designa la palabra', 'Un género', 'Un género', 'Un término de marketing para una escena']
      ].map(row => row.map(escapeHtml)),
      label: 'Comparación del house, el techno y el EDM'
    })
  }),

  // The English page's sources, URL for URL, with translated labels.
  sources: [
    {href: 'https://en.wikipedia.org/wiki/House_music', label: 'Wikipedia: House music (en inglés)'},
    {href: 'https://en.wikipedia.org/wiki/Frankie_Knuckles', label: 'Wikipedia: Frankie Knuckles (en inglés)'},
    {href: 'https://en.wikipedia.org/wiki/Chicago_house', label: 'Wikipedia: Chicago house (en inglés)'},
    {href: 'https://en.wikipedia.org/wiki/Move_Your_Body_(Marshall_Jefferson_song)', label: 'Wikipedia: Move Your Body (Marshall Jefferson song) (en inglés)'},
    {href: 'https://en.wikipedia.org/wiki/Jack_Your_Body', label: 'Wikipedia: Jack Your Body (en inglés)'},
    {href: 'https://en.wikipedia.org/wiki/Paradise_Garage', label: 'Wikipedia: Paradise Garage (en inglés)'},
    {href: 'https://djmag.com/features/all-night-long-40-essential-tracks-40-years-of-house-music', label: 'DJ Mag: 40 essential tracks from 40 years of house music, 2024 (en inglés)'},
    {href: 'https://splice.com/blog/what-is-house-music/', label: 'Splice: What is house music? History, artists and subgenres (en inglés)'}
  ],

  bandcamp: {
    description: 'Dos temas míos. Comprar uno apoya directamente mi trabajo.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks de thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 de thecatrave'}
    ]
  }
};
