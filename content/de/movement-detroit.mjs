// German Movement Detroit guide. Structure, facts and media from the English page
// (movement-detroit-draft.md, build-movement-detroit-article.mjs). Search wording from live Google
// (google.de, hl=de/gl=de, 2026-10-01); volumes in keywords/de-movement-detroit.json.
// The images are the English guide's, with translated captions.

import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, ownSetListening
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/movement-detroit/${name}-${width}.webp`,
  srcset: `img/movement-detroit/${name}-320.webp 320w, img/movement-detroit/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

export default {
  lang: 'de',
  name: 'de-movement-detroit',
  file: 'de/movement-detroit.html',
  draft: 'de/movement-detroit-draft.md',
  canonical: 'https://thecatrave.com/de/movement-detroit',
  englishPath: '/movement-detroit',
  ogImage: 'https://thecatrave.com/img/og/movement-detroit.jpg',
  bodyClass: 'article-page movement-detroit-page',
  minReadingMinutes: 8,

  title: 'Movement Detroit: Geschichte, Ort, Bühnen und Termine 2027',
  description: 'Movement Detroit bringt Techno jedes Memorial-Day-Wochenende zurück ins Hart Plaza. Geschichte, Ort, Bühnen und Termine 2027 im Überblick.',
  datePublished: '2026-10-01',
  dateModified: '2026-10-01',
  dateLabel: '1. Oktober 2026',

  heroKicker: 'Movement-Detroit-Guide',
  heroTitle: 'Movement Detroit: Techno in der Stadt, die ihn erfunden hat',
  deck: 'Vom kostenlosen Detroit Electronic Music Festival im Jahr 2000 zu sechs Bühnen im Hart Plaza, mit den Künstlern der Stadt mitten im Programm.',
  answerLabel: 'Was ist Movement Detroit',
  breadcrumbName: 'Was ist Movement Detroit',

  answerSection: 'Antwort',
  introSection: 'Einleitung',
  introTitle: 'Techno kommt zurück ans Flussufer.',
  faqSection: 'FAQ',
  faqLabel: 'Häufige Fragen',
  faqTitle: 'Häufige Fragen zu Movement Detroit.',

  sections: [
    {id: 'what-is', heading: 'Was ist Movement Detroit', title: 'Was ist Movement Detroit.'},
    {id: 'location', heading: 'Hart Plaza und das Detroiter Flussufer', title: 'Hart Plaza und das Detroiter Flussufer.'},
    {id: 'history', heading: 'Von DEMF zu Movement', title: 'Von DEMF zu Movement.'},
    {id: 'detroit', heading: 'Detroiter Techno auf heimischem Boden', title: 'Detroiter Techno auf heimischem Boden.'},
    {id: 'stages', heading: 'Welche Musik und Bühnen dich erwarten', title: 'Welche Musik und Bühnen dich erwarten.'},
    {id: 'current', heading: 'Movement Detroit: Termine und Line-up', title: 'Movement Detroit: Termine und Line-up.'},
    {id: 'planning', heading: 'Das Wochenende planen', title: 'Das Wochenende planen.'}
  ],

  media: ({lang}) => ({
    'Hart Plaza': figure('hart-plaza', 1280, 853, 'Das Hart Plaza am Detroit River, dahinter die Gebäude der Innenstadt von Detroit',
      'Das Hart Plaza am Detroiter Flussufer. Amphitheater, Terrassen und die untere Ebene bestimmen, wie sich Movement anfühlt und bewegt. Foto: U.S. Army Corps of Engineers, gemeinfrei.'),
    'Movement 2026': figure('movement-hart-plaza-2026', 1280, 655, 'Das Movement Music Festival füllt das Hart Plaza in Detroit bei der Ausgabe 2026',
      'Movement im Hart Plaza am 25. Mai 2026, über den Detroit River hinweg fotografiert. Das Festival bleibt an dem Ort in der Innenstadt, an dem DEMF 2000 begann. Foto: Chris Woodrich, CC BY-SA 4.0.'),
    'DEMF in 2002': articleVideoCollection({lang, label: 'DEMF 2002', description: 'Material der Detroit Historical Society vom Festival, bevor sich der heutige Name durchsetzte: Juan Atkins auf der Hauptbühne, danach ein Zusammenschnitt mit Eddie Fowlkes und K-Hand.', items: [articleVideoCard({youtubeId: 'GTF4S78VTPw', genre: 'DEMF-ARCHIV, 2002', artist: 'Juan Atkins', title: 'Samstags-Set auf der Hauptbühne'}), articleVideoCard({youtubeId: '2mc8AkXYBdc', genre: 'DEMF-ARCHIV, 2002', artist: 'Eddie Fowlkes und K-Hand', title: 'Festival-Zusammenschnitt der Detroit Historical Society'})]}),
    'thecatrave mix 1': ownSetListening(0, lang, 'Dreißig Tracks zwischen Garage, Bass Music, Techno und Rave. Mein eigener Mix, hier als Route über das Archiv hinaus.'),
    'thecatrave mix 2': ownSetListening(1, lang, 'Breaks und Techno für die Stunden nach dem Festival. Mein eigener Mix.'),
    'Tabelle: Stages': articleTable({
      headers: ['Bühne', 'Umgebung', 'Rolle im Programm'],
      rows: [
        ['Movement Stage', 'Amphitheater im Hart Plaza', 'Größte Namen und Auftritte im Headliner-Maßstab'],
        ['Detroit Stage', 'Open-Air-Bühne', 'Reines Detroit-Programm über Generationen'],
        ['Underground Stage', 'Unter der Hauptebene der Plaza', 'Härtere Musik in einem geschlossenen Betonraum'],
        ['Waterfront Stage', 'Am Fluss und zwischen Bäumen', 'Funk, Hip-Hop, Breakbeats, Ghettotech und andere Wege'],
        ['Stargate Stage', 'Offene Plaza', 'Charakter einer Detroiter Blockparty'],
        ['Pyramid Stage', 'Flussseite des Geländes', 'Breites elektronisches Programm vor offener Kulisse']
      ].map(row => row.map(escapeHtml))
    })
  }),

  sources: [
    {href: 'https://www.detroithistorical.org/learn/online-research/encyclopedia-of-detroit/detroit-electronic-music-festival-movement', label: 'Detroit Historical Society: Detroit Electronic Music Festival (Movement)'},
    {href: 'https://www.detroithistorical.org/learn/online-research/blog/flashback-2002-detroit-electronic-music-festival', label: 'Detroit Historical Society: Rückblick auf das Festival 2002'},
    {href: 'https://movementfestival.com/experience-page/experience', label: 'Movement: Leitfaden zu Hart Plaza und Bühnen'},
    {href: 'https://movementfestival.com/faqs', label: 'Movement: aktuelle Festival-FAQ und Termine'},
    {href: 'https://movementfestival.com/travel', label: 'Movement: offizieller Reiseführer'},
    {href: 'https://detroitmi.gov/departments/detroit-parks-recreation/parks-and-greenways/hart-plaza', label: 'Stadt Detroit: Hart Plaza'}
  ],

  bandcamp: {
    description: 'Detroiter Techno zieht sich durch diese Geschichte. Meine eigenen Veröffentlichungen liegen näher an Breaks, Techno und Rave; wer eine kauft, unterstützt Musik und Texte direkt.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 von thecatrave'},
      {title: '60 hours of mistakes', id: '3330948631', url: 'https://thecatrave.bandcamp.com/track/60-hours-of-mistakes', linkText: '60 hours of mistakes von thecatrave'}
    ]
  }
};
