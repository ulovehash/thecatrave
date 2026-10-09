// Spanish ARC Music Festival guide. Structure, facts and media from the English
// page (arc-music-festival-draft.md) and the French module.
//
// es-ES SERP and People also ask read in Chrome on 2026-10-10 ("arc music
// festival", "arc festival croacia"): the head term returns the official site,
// Hellotickets and Instagram; People also ask asks "¿Qué es el Festival Arc?".
// "arc festival croacia" returns the same Chicago festival, so the page names
// Chicago in its title. No volumes were measured.
//
// Images are the English guide's, in img/arc-music-festival/, with translated captions.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, ownSetListening
} from '../../site-components.mjs';
import {localizedFestivalPlanning} from '../festival-planning-data.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/arc-music-festival/${name}-${width}.webp`,
  srcset: `img/arc-music-festival/${name}-320.webp 320w, img/arc-music-festival/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

export default {
  lang: 'es',
  name: 'es-arc-music-festival',
  file: 'es/arc-music-festival.html',
  draft: 'es/arc-music-festival-draft.md',
  canonical: 'https://thecatrave.com/es/arc-music-festival',
  englishPath: '/arc-music-festival',
  ogImage: 'https://thecatrave.com/img/og/arc-music-festival.jpg',
  bodyClass: 'article-page arc-music-festival-page',
  minReadingMinutes: 6,

  title: 'ARC Music Festival 2027: guía de Chicago, escenarios y acceso',
  description: 'ARC Music Festival lleva el house y el techno a Union Park, en Chicago. Escenarios, historia, cómo llegar en la CTA, After Dark y la edición 2027 aún por confirmar.',
  datePublished: '2026-10-10',
  dateModified: '2026-10-10',
  dateLabel: '10 de octubre de 2026',

  heroKicker: 'Guía del festival de Chicago',
  heroTitle: 'ARC Music Festival: house de Chicago, techno y Union Park',
  deck: 'Un festival compacto del Labor Day donde la historia del house de Chicago, el techno de Detroit y el circuito internacional de clubes comparten Union Park.',
  answerLabel: 'Qué es el ARC Music Festival',
  breadcrumbName: 'Qué es el ARC Music Festival',

  answerSection: 'Respuesta',
  introSection: 'Introducción',
  introTitle: 'Los artistas de Chicago comparten cartel.',
  faqSection: 'Preguntas frecuentes',
  faqLabel: 'Preguntas frecuentes',
  faqTitle: 'Preguntas frecuentes sobre el ARC Music Festival.',

  sections: [
    {id: 'arc-2027', heading: 'ARC Music Festival 2027', title: 'ARC Music Festival 2027.'},
    {id: 'music', heading: 'Qué música suena en ARC', title: 'Qué música suena en ARC.'},
    {id: 'chicago', heading: 'Por qué Chicago cambia el festival', title: 'Por qué Chicago cambia el festival.'},
    {id: 'history', heading: 'Cómo empezó ARC', title: 'Cómo empezó ARC.'},
    {id: 'union-park', heading: 'Union Park y los escenarios', title: 'Union Park y los escenarios.'},
    {id: 'planning', heading: 'Cómo llegar y planificar la noche', title: 'Prepara tu viaje a ARC.', planning: localizedFestivalPlanning('arc', 'es')}
  ],

  media: ({lang}) => ({
    'Image: Frankie Knuckles Way': figure('arc-frankie-knuckles-way', 1200, 900, 'Placa de la calle Frankie Knuckles Way en Chicago',
      'Frankie Knuckles Way señala la manzana junto al antiguo emplazamiento del Warehouse. ARC se apoya en esa historia al programar artistas de Chicago junto a los cabezas de cartel internacionales de hoy. Foto: Sarah Stierch, CC BY 4.0.'),
    'Image: Union Park': articleFigure({src: 'img/arc-music-festival/arc-union-park-1200.webp', srcset: 'img/arc-music-festival/arc-union-park-320.webp 320w, img/arc-music-festival/arc-union-park-1200.webp 1024w', width: 1024, height: 768, alt: 'Union Park, en Chicago, con el perfil del centro de la ciudad al fondo', caption: 'Union Park es compacto y está cerca de la CTA. Su superficie limitada también acerca varios sistemas de sonido del festival. Foto: soundfromwayout, CC BY 2.0.', className: 'wide-archive-image'}),
    'Embed: ARC sets': articleVideoCollection({lang, label: 'Sets de ARC', description: 'Boys Noize b2b VTSS en ARC para Mixmag Lab, y Nicole Moudaber en la edición de 2025. Son los sets de ARC más vistos que he encontrado en YouTube.', items: [articleVideoCard({youtubeId: '_jysvzxpb0Q', genre: 'MIXMAG LAB x ARC', artist: 'Boys Noize b2b VTSS', title: 'Mixmag Lab x ARC Music Festival'}), articleVideoCard({youtubeId: '6g7HHRV0HSE', genre: 'ARC, 2025', artist: 'Nicole Moudaber', title: 'ARC Music Festival Chicago 2025'})]}),
    'thecatrave mix 1': ownSetListening(0, lang, 'Mi propio mix multigénero sigue el recorrido de club de ARC por el house, el techno y giros más duros, sin pretender reproducir el cartel de una edición.'),
    'thecatrave mix 2': ownSetListening(1, lang, 'Para el trayecto de Union Park a la noche: mi propio set entre techno, breaks y bass music, como recorrido personal de after.'),
    'Table: Datos': articleTable({
      headers: ['Tema', 'Estado'],
      rows: [
        ['Fechas 2027', 'aún sin anunciar'],
        ['Lugar', 'Union Park, Chicago'],
        ['Música', 'House y techno'],
        ['Edad', 'Mayores de 18 años'],
        ['Cartel 2027', 'aún sin anunciar'],
        ['Información oficial', 'La inscripción está abierta en la web de ARC']
      ].map(row => row.map(escapeHtml))
    })
  }),

  sources: [
    {href: 'https://arcmusicfestival.com/', label: 'ARC Music Festival: web oficial e información de 2027 (en inglés)'},
    {href: 'https://arcmusicfestival.com/faqs/', label: 'ARC Music Festival: FAQ oficial e información de transporte (en inglés)'},
    {href: 'https://articles.roland.com/arc-music-festival-house-comes-home/', label: 'Roland: entrevista con los fundadores de ARC (en inglés)'},
    {href: 'https://ra.co/events/1434826', label: 'Resident Advisor: ficha de la primera edición del ARC Music Festival (en inglés)'},
    {href: 'https://commons.wikimedia.org/wiki/File:Chicago_Union_Park.jpg', label: 'Wikimedia Commons: foto de Union Park y licencia (en inglés)'}
  ],

  bandcamp: {
    description: 'ARC se apoya en la música de club más que en un subgénero fijo. Estos lanzamientos de thecatrave se acercan a su lado de house y techno; comprar uno apoya la música y estos textos independientes.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 de thecatrave'},
      {title: '60 hours of mistakes', id: '3330948631', url: 'https://thecatrave.bandcamp.com/track/60-hours-of-mistakes', linkText: '60 hours of mistakes de thecatrave'}
    ]
  }
};
