// de Monegros guide. Structure and facts from the English page
// (monegros-desert-festival-draft.md, build-monegros-desert-festival-article.mjs).
//
// Keywords (keywords/de-monegros.json): Keyword Planner bucket for the head
// term, wording from Google de-DE on 2026-10-01; no exact volumes (account
// without ad spend).
//
// Images are the English guide's, in img/monegros/, with translated captions.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, height, alt, caption) => articleFigure({
  src: `img/monegros/${name}-1200.webp`,
  srcset: `img/monegros/${name}-320.webp 320w, img/monegros/${name}-1200.webp 1200w`,
  width: 1200, height, alt, caption, className: 'wide-archive-image'
});

export default {
  lang: 'de',
  name: 'de-monegros',
  file: 'de/monegros-desert-festival.html',
  draft: 'de/monegros-desert-festival-draft.md',
  canonical: 'https://thecatrave.com/de/monegros-desert-festival',
  englishPath: '/monegros-desert-festival',
  ogImage: 'https://thecatrave.com/img/og/monegros.jpg',
  bodyClass: 'article-page monegros-desert-festival-page',

  title: 'Monegros Desert Festival 2027: Termin, Geschichte und Guide',
  description: 'Das Monegros Desert Festival 2027 ist für den 31. Juli bei Fraga in Spanien angesetzt. Geschichte, Musik, Wüstenformat, Anreise und die praktischen Grenzen.',
  datePublished: '2026-10-01',
  dateModified: '2026-10-01',
  dateLabel: '1. Oktober 2026',

  heroKicker: 'Festival-Guide Spanien',
  heroTitle: 'Monegros Desert Festival 2027: Der Wüsten-Rave erklärt',
  deck: 'Ein langes elektronisches Event auf ungeschütztem Land zwischen Barcelona und Saragossa, verwurzelt im Florida 135 und gebaut für konkurrierende Stages durch die Nacht.',
  answerLabel: 'Was ist das Monegros Desert Festival',
  breadcrumbName: 'Monegros Desert Festival',

  answerSection: 'Antwort',
  introSection: 'Einleitung',
  introTitle: 'Eine lange Nacht braucht ihren eigenen Plan.',
  faqSection: 'FAQ',
  faqLabel: 'Häufige Fragen',
  faqTitle: 'Häufige Fragen zum Monegros Desert Festival.',
  ownSetAfter: 'history',

  sections: [
    {id: 'monegros-2027', heading: 'Monegros Desert Festival 2027', tocLabel: 'Termin und Ort 2027', title: 'Monegros Desert Festival 2027.'},
    {id: 'what-is-monegros', heading: 'Was Monegros ist', tocLabel: 'Was Monegros ist', title: 'Was Monegros ist.'},
    {id: 'history', heading: 'Von Florida 135 in die Wüste', tocLabel: 'Geschichte', title: 'Von Florida 135 in die Wüste.'},
    {id: 'operator', heading: 'Wer Monegros betreibt', tocLabel: 'Wer Monegros betreibt', title: 'Wer Monegros betreibt.'},
    {id: 'music', heading: 'Welche Musik bei Monegros läuft', tocLabel: 'Musik bei Monegros', title: 'Welche Musik bei Monegros läuft.'},
    {id: 'site', heading: 'Das Gelände und das Format über Nacht', tocLabel: 'Format über Nacht', title: 'Das Gelände und das Format über Nacht.'},
    {id: 'planning', heading: 'Vorbereitung auf Monegros', tocLabel: 'Vorbereitung', title: 'Vorbereitung auf Monegros.'}
  ],

  media: ({lang}) => ({
    'Table: Fakten': articleTable({
      headers: ["Angabe", "Information"],
      rows: [["Termin", "Samstag, 31. Juli 2027"], ["Ort", "N-II, Kilometer 416, bei Fraga, Aragón"], ["Format", "Eintägiges elektronisches Festival über Nacht"], ["Line-up 2027", "Noch nicht bekannt gegeben"], ["Zuletzt gemessenes Format", "22 Stunden und zehn Stages 2026"], ["Camping", "Kein allgemeiner mehrtägiger Festival-Zeltplatz"]].map(row => row.map(escapeHtml)),
      label: 'Monegros Desert Festival 2027: die Fakten'
    }),
    'Image: Festival overview': figure('festival-overview-2009', 900, 'Weitblick auf Stages und Publikum des Monegros Desert Festival 2009', 'Das Monegros Desert Festival 2009, als die Veranstaltung längst über ihre frühen Treffen rund um den Florida 135 hinausgewachsen war. Foto: BigSus, CC BY-SA 3.0.'),
    'Image: Desert landscape': figure('desert-landscape', 675, 'Trockene, ungeschützte Landschaft in der Region Monegros in Aragón', 'Die ungeschützte Landschaft der Monegros erklärt die praktischen Anforderungen des Festivals: Hitze und Entfernung gehören zum Gelände, sie sind keine dekorative Marke. Foto: Smoobs, CC BY 2.0.'),
    'Embed: Sama’ Abdulhadi and Indira Paganotto': articleVideoCollection({
      lang,
      label: 'Sama’ Abdulhadi und Indira Paganotto bei Monegros',
      description: 'Sama’ Abdulhadi für Beatport bei Monegros, das meistgesehene Monegros-Set, das ich finden konnte (1,9 Millionen Aufrufe), und Indira Paganotto beim Abschluss der Ausgabe 2025 auf dem eigenen Kanal des Festivals.',
      items: [
        articleVideoCard({youtubeId: 'V4lH-KzsQi0', genre: 'MONEGROS, BEATPORT LIVE', artist: 'Sama’ Abdulhadi', title: 'DJ-Set beim Monegros Desert Festival'}),
        articleVideoCard({youtubeId: 'sx6_l6skb5o', genre: 'MONEGROS, 2025', artist: 'Indira Paganotto', title: 'Abschluss des Monegros Desert Festival 2025'})
      ]
    })
  }),

  sources: [
    {href: 'https://monegrosfestival.com/', label: 'Monegros: offizielle Festivalseite und Line-up-Stand (englisch)'},
    {href: 'https://monegrosfestival.com/en/history/', label: 'Monegros: offizielle Festivalgeschichte (englisch)'},
    {href: 'https://monegrosfestival.com/en/dj-sets/', label: 'Monegros: offizielles Archiv der DJ-Sets (englisch)'},
    {href: 'https://www.enterticket.es/', label: 'Enterticket: Termin des Monegros Desert Festival 2027 (spanisch)'},
    {href: 'https://commons.wikimedia.org/wiki/File:Monegros_Desert_Festival_-_Vista_general.jpg', label: 'Wikimedia Commons: Foto der Festivalübersicht und Lizenz (englisch)'}
  ],

  bandcamp: {
    description: 'Monegros lebt von langen elektronischen Programmen. Diese thecatrave-Veröffentlichungen verbinden sich mit der härteren, clubnahen Seite; ein Kauf unterstützt die Musik und das Schreiben direkt.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks von thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 von thecatrave'}
    ]
  }
};
