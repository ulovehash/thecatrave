// Spanish techno guide. Structure and facts from the English page
// (techno-music-draft.md, build-techno-music-article.mjs), via the French module.
//
// Spanish keywords (keywords/es-techno.json): no Keyword Planner volume
// measured. Live es-ES SERP and People also ask read 10 October 2026 for
// "que es la musica techno": Wikipedia, "Techno: que es, caracteristicas y
// DJs representativos", "Historia del techno", "Los distintos tipos de techno".
// PAA: "Quien es el rey de la musica techno?", "Cual es la cancion mas famosa
// de techno?", "Que tipo de musica es el techno?", "Que diferencia hay entre
// musica techno y electronica?". The English page answers the first via the
// Belleville Three; the rest are not added (no sourced answer on the page).
// Spanish writes "el techno" (also "tecno", which the SERP uses; kept to the
// genre's usual spelling).
//
// Images are the English guide's, in img/techno/, with translated captions.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, ownSetListening
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/techno/${name}-${width}.webp`,
  srcset: `img/techno/${name}-320.webp 320w, img/techno/${name}-${width}.webp ${width}w`,
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
  name: 'es-techno',
  file: 'es/techno.html',
  draft: 'es/techno-draft.md',
  canonical: 'https://thecatrave.com/es/techno',
  englishPath: '/techno-music-guide',
  ogImage: 'https://thecatrave.com/img/og/techno-music.jpg',
  bodyClass: 'article-page techno-music-page',
  minReadingMinutes: 9,

  title: 'Qué es el techno: Detroit, Belleville Three y hoy',
  description: 'El techno, música de baile de máquinas nacida en Detroit: los Belleville Three, de dónde viene el nombre, Underground Resistance, Berlín, minimal y hard techno.',
  datePublished: '2026-10-10',
  dateModified: '2026-10-10',
  dateLabel: '10 de octubre de 2026',

  heroKicker: 'Guía del techno',
  heroTitle: 'El techno: de Detroit a Berlín, y vuelta',
  deck: 'Tres amigos de un pueblo cerca de Detroit, un DJ de radio que ponía a Kraftwerk junto a Funkadelic, y la música de máquinas que encontró su mayor público en Europa.',
  answerLabel: 'Techno: definición',
  breadcrumbName: 'Guía del techno',

  answerSection: 'Respuesta',
  introSection: 'Introducción',
  introTitle: 'Una música que suena a tecnología.',
  faqSection: 'Preguntas frecuentes',
  faqLabel: 'Preguntas frecuentes',
  faqTitle: 'Preguntas frecuentes sobre el techno.',

  sections: [
    {id: 'what-is-techno', heading: 'Qué es el techno', title: '¿Qué es el techno?'},
    {id: 'sound', heading: 'Cómo suena el techno'},
    {id: 'detroit', heading: 'Detroit y los Belleville Three'},
    {id: 'name', heading: 'Por qué se llama techno', title: '¿Por qué se llama techno?'},
    {id: 'strings-of-life', heading: 'Strings of Life y el Music Institute'},
    {id: 'underground-resistance', heading: 'Underground Resistance y la segunda ola'},
    {id: 'berlin', heading: 'Berlín y la alianza del techno'},
    {id: 'types', heading: 'Tipos de techno'},
    {id: 'today', heading: 'El techno hoy y Detroit ahora'},
    {id: 'techno-vs-house', heading: 'Techno o house'}
  ],

  media: ({lang}) => ({
    'Image: Derrick May': figure('derrick-may-2015', 820, 883,
      'Retrato de Derrick May con gafas y chaqueta oscura',
      'Derrick May, que dirigía el sello Transmat e hizo «Strings of Life», en 2015. Foto: Natalie Chickee, CC BY-SA 4.0.'),
    'Image: Juan Atkins': figure('juan-atkins-2010', 620, 808,
      'Juan Atkins con sudadera gris con capucha en un club oscuro',
      'Juan Atkins en Detroit en 2010. Hizo «Clear» con Cybotron y «No UFO\'s» como Model 500. Foto: Angie Linder, CC BY-SA 2.0.'),
    'Image: Jeff Mills': figure('jeff-mills-2010', 1200, 798,
      'Jeff Mills mezcla en una cabina de DJ de un club, con gente mirándolo detrás',
      'Jeff Mills pinchando en Detroit en junio de 2010. Cofundó Underground Resistance con Mike Banks. Foto: Angie Linder, CC BY-SA 2.0.'),
    'Embed: Clear': video(lang, 'Unc8kDUzbU8', 'Electro, 1983', 'Cybotron', 'Clear',
      'Juan Atkins y Richard Davis como Cybotron, dos años antes de que el techno tuviera su primer disco.'),
    'Embed: No UFO\'s': video(lang, 'xcdOBLH_AXs', 'Techno, 1985', 'Model 500', 'No UFO\'s',
      'Juan Atkins como Model 500 en su propio sello Metroplex: el disco que suele llamarse el primer disco de techno.'),
    'Embed: Strings of Life': video(lang, 'vGFw2qeUp0s', 'Techno, 1987', 'Rhythim Is Rhythim', 'Strings of Life',
      'El disco de Derrick May, reclamado a la vez por el house y por el techno.'),
    'Embed: Big Fun': video(lang, 'Gr-zG-IXDyo', 'House, 1988', 'Inner City', 'Big Fun',
      'Inner City, de Kevin Saunderson, en el canal del grupo: número 8 en Gran Bretaña en 1988.'),
    'Embed: The Bells': video(lang, 'S-BlgAQ7uRQ', 'Techno, 1996', 'Jeff Mills', 'The Bells',
      'El disco de Jeff Mills de 1996, en todas las listas de clásicos del techno.'),
    'Embed: Robert Hood Boiler Room': video(lang, 'TaFJGvwaczU', 'Techno minimal', 'Robert Hood', 'DJ set, Boiler Room x Red Bull Music Academy, 2013',
      'Robert Hood, el miembro de Underground Resistance que inició el minimal techno.'),
    'Embed: Energy Flash': video(lang, 'BDj73pGQ6pE', 'Techno, 1990', 'Joey Beltram', 'Energy Flash',
      'El disco del productor neoyorquino para el sello belga R&S, de 1990.'),
    'Embed: Sara Landry Boiler Room': video(lang, 'EIQlDpgAY5Y', 'Hard techno', 'Sara Landry', 'Boiler Room x Teletech Festival, 2023',
      'La sesión más vista con la etiqueta hard techno en el catálogo de sesiones de DJ grabadas de este sitio.'),
    'Embed: Kevin Saunderson Boiler Room': video(lang, 'gvvb-SNL9tM', 'Techno', 'Kevin Saunderson', 'DJ set, Boiler Room Chicago, 2014',
      'Kevin Saunderson pincha para Boiler Room en Chicago.'),
    'thecatrave mix': ownSetListening(1, lang, 'Mi propia mezcla, para después de la historia.'),
    'Table: Estilos': articleTable({
      headers: ['Estilo', 'Dónde y cuándo', 'Cómo suena', 'Un disco para empezar'],
      rows: [
        ['Techno de Detroit', 'Detroit, mediados de los ochenta', 'Funk de máquinas, cuerdas y líneas de sintetizador', 'Model 500, «No UFO\'s»'],
        ['Minimal techno', 'Detroit, principios de los noventa', 'Batería, línea de bajo y groove, nada más', 'Robert Hood, Minimal Nation'],
        ['Dub techno', 'Principios de los noventa', 'Techno cruzado con el dub jamaicano: bajo profundo, acordes lentos, mucho delay', 'Sin un único disco fundacional'],
        ['Acid techno', 'Años noventa', 'Una línea de TB-303 sobre baterías de techno más duras', 'Hardfloor, «Acperience 1»'],
        ['Techno melódico', 'Europa, de finales de los 2000 a los 2010', 'Ritmo techno con largas progresiones melódicas, 120 a 128 BPM', 'Tale of Us, ARTBAT, Stephan Bodzin'],
        ['Hard techno', 'Europa, de los 2010 a los 2020', 'Rápido y distorsionado, con el bombo al frente', 'Sara Landry']
      ].map(row => row.map(escapeHtml)),
      label: 'Estilos de techno'
    }),
    'Table: Comparación': articleTable({
      headers: ['', 'Techno', 'House'],
      rows: [
        ['Dónde', 'Detroit, mediados de los ochenta', 'Chicago, principios de los ochenta'],
        ['Tempo', 'Unos 120 a 150 BPM', 'Unos 118 a 128 BPM'],
        ['Qué manda', 'Ritmo de máquina y textura', 'Groove, línea de bajo, a menudo una voz'],
        ['Raíces', 'Kraftwerk, electro, funk, house de Chicago', 'Disco, soul, discos de Philadelphia y de Salsoul'],
        ['Un disco para empezar', 'Model 500, «No UFO\'s»', 'Marshall Jefferson, «Move Your Body»']
      ].map(row => row.map(escapeHtml)),
      label: 'Comparación del techno y el house'
    })
  }),

  sources: [
    {href: 'https://en.wikipedia.org/wiki/Techno', label: 'Wikipedia: Techno (en inglés)'},
    {href: 'https://en.wikipedia.org/wiki/Detroit_techno', label: 'Wikipedia: Detroit techno (en inglés)'},
    {href: 'https://en.wikipedia.org/wiki/Belleville_Three', label: 'Wikipedia: Belleville Three (en inglés)'},
    {href: 'https://en.wikipedia.org/wiki/No_UFO%27s', label: 'Wikipedia: No UFO\'s (en inglés)'},
    {href: 'https://en.wikipedia.org/wiki/Strings_of_Life', label: 'Wikipedia: Strings of Life (en inglés)'},
    {href: 'https://en.wikipedia.org/wiki/Underground_Resistance', label: 'Wikipedia: Underground Resistance (en inglés)'},
    {href: 'https://en.wikipedia.org/wiki/Robert_Hood', label: 'Wikipedia: Robert Hood (en inglés)'},
    {href: 'https://en.wikipedia.org/wiki/Movement_Electronic_Music_Festival', label: 'Wikipedia: Movement Electronic Music Festival (en inglés)'},
    {href: 'https://musicbrainz.org/release/d0a0ade7-14fb-4ff9-9ebb-44be77c5f579', label: 'MusicBrainz: Robert Hood, Minimal Nation (Axis, 1994) (en inglés)'}
  ],

  bandcamp: {
    description: 'Dos temas míos. Comprar uno apoya directamente mi trabajo.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks de thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 de thecatrave'}
    ]
  }
};
