// German ARC Music Festival guide. Structure, facts and media from the English page
// (arc-music-festival-draft.md, build-arc-music-festival-article.mjs). Search wording from live Google
// (google.de, hl=de/gl=de, 2026-10-01); volumes in keywords/de-arc-music-festival.json.
// The images are the English guide's, with translated captions.

import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, ownSetListening
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/arc-music-festival/${name}-${width}.webp`,
  srcset: `img/arc-music-festival/${name}-320.webp 320w, img/arc-music-festival/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

export default {
  lang: 'de',
  name: 'de-arc-music-festival',
  file: 'de/arc-music-festival.html',
  draft: 'de/arc-music-festival-draft.md',
  canonical: 'https://thecatrave.com/de/arc-music-festival',
  englishPath: '/arc-music-festival',
  ogImage: 'https://thecatrave.com/img/og/arc-music-festival.jpg',
  bodyClass: 'article-page arc-music-festival-page',
  minReadingMinutes: 6,

  title: 'ARC Music Festival 2027: Chicago-Guide, Bühnen und Anreise',
  description: 'Das ARC Music Festival bringt House und Techno in den Union Park in Chicago. Bühnen, Geschichte, Anreise mit der CTA, After Dark und die offene Ausgabe 2027.',
  datePublished: '2026-10-01',
  dateModified: '2026-10-01',
  dateLabel: '1. Oktober 2026',

  heroKicker: 'Chicagoer Festival-Guide',
  heroTitle: 'ARC Music Festival: Chicago House, Techno und Union Park',
  deck: 'Ein kompaktes Labor-Day-Festival, auf dem Chicagoer House-Geschichte, Detroiter Techno und der internationale Clubzirkus den Union Park teilen.',
  answerLabel: 'Was ist das ARC Music Festival',
  breadcrumbName: 'Was ist das ARC Music Festival',

  answerSection: 'Antwort',
  introSection: 'Einleitung',
  introTitle: 'Chicagoer Künstler teilen sich das Plakat.',
  faqSection: 'FAQ',
  faqLabel: 'Häufige Fragen',
  faqTitle: 'Häufige Fragen zum ARC Music Festival.',

  sections: [
    {id: 'arc-2027', heading: 'ARC Music Festival 2027', title: 'ARC Music Festival 2027.'},
    {id: 'music', heading: 'Welche Musik ARC spielt', title: 'Welche Musik ARC spielt.'},
    {id: 'chicago', heading: 'Warum Chicago das Festival verändert', title: 'Warum Chicago das Festival verändert.'},
    {id: 'history', heading: 'Wie ARC begann', title: 'Wie ARC begann.'},
    {id: 'union-park', heading: 'Union Park und die Bühnen', title: 'Union Park und die Bühnen.'},
    {id: 'planning', heading: 'Anreise und Planung der Nacht', title: 'Anreise und Planung der Nacht.'}
  ],

  media: ({lang}) => ({
    'Frankie Knuckles Way': figure('arc-frankie-knuckles-way', 1200, 900, 'Straßenschild Frankie Knuckles Way in Chicago',
      'Frankie Knuckles Way markiert den Block neben dem ehemaligen Warehouse. ARC greift diese Geschichte auf, indem Chicagoer Künstler neben aktuellen internationalen Headlinern gebucht werden. Foto: Sarah Stierch, CC BY 4.0.'),
    'Union Park': articleFigure({src: 'img/arc-music-festival/arc-union-park-1200.webp', srcset: 'img/arc-music-festival/arc-union-park-320.webp 320w, img/arc-music-festival/arc-union-park-1200.webp 1024w', width: 1024, height: 768, alt: 'Der Union Park in Chicago mit der Skyline der Innenstadt dahinter', caption: 'Der Union Park ist kompakt und nah an der CTA. Seine begrenzte Fläche rückt außerdem mehrere Festival-Soundsysteme nah zusammen. Foto: soundfromwayout, CC BY 2.0.', className: 'wide-archive-image'}),
    'ARC sets': articleVideoCollection({lang, label: 'ARC-Sets', description: 'Boys Noize b2b VTSS bei ARC für Mixmag Lab und Nicole Moudaber bei der Ausgabe 2025. Das sind die meistgesehenen Sets von ARC, die ich auf YouTube gefunden habe.', items: [articleVideoCard({youtubeId: '_jysvzxpb0Q', genre: 'MIXMAG LAB x ARC', artist: 'Boys Noize b2b VTSS', title: 'Mixmag Lab x ARC Music Festival'}), articleVideoCard({youtubeId: '6g7HHRV0HSE', genre: 'ARC, 2025', artist: 'Nicole Moudaber', title: 'ARC Music Festival Chicago 2025'})]}),
    'thecatrave mix 1': ownSetListening(0, lang, 'Mein eigener Mix aus vielen Genres folgt ARCs clubnaher Route durch House, Techno und härtere Wendungen, ohne das Line-up einer bestimmten Ausgabe nachzubilden.'),
    'thecatrave mix 2': ownSetListening(1, lang, 'Für den Weg vom Union Park in die Nacht: mein eigenes Set zwischen Techno, Breaks und Bass Music als persönliche After-Hours-Route.'),
    'Tabelle: Facts': articleTable({
      headers: ['Thema', 'Stand'],
      rows: [
        ['Termine 2027', 'noch nicht bekannt gegeben'],
        ['Ort', 'Union Park, Chicago'],
        ['Musik', 'House und Techno'],
        ['Alter', 'ab 18'],
        ['Line-up 2027', 'noch nicht bekannt gegeben'],
        ['Offizielle Neuigkeiten', 'Die Registrierung auf der ARC-Website ist offen']
      ].map(row => row.map(escapeHtml))
    })
  }),

  sources: [
    {href: 'https://arcmusicfestival.com/', label: 'ARC Music Festival: offizielle Website und Neuigkeiten zu 2027'},
    {href: 'https://arcmusicfestival.com/faqs/', label: 'ARC Music Festival: offizielle FAQ und Verkehrsinformationen'},
    {href: 'https://articles.roland.com/arc-music-festival-house-comes-home/', label: 'Roland: Interview mit den ARC-Gründern'},
    {href: 'https://ra.co/events/1434826', label: 'Resident Advisor: Eintrag zum ersten ARC Music Festival'},
    {href: 'https://commons.wikimedia.org/wiki/File:Chicago_Union_Park.jpg', label: 'Wikimedia Commons: Foto des Union Park und Lizenz'}
  ],

  bandcamp: {
    description: 'ARC ist in der Clubmusik verankert, nicht in einem festen Subgenre. Diese Veröffentlichungen von thecatrave gehören zu seiner House- und Techno-Seite; wer eine kauft, unterstützt die Musik und diese unabhängigen Texte.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 von thecatrave'},
      {title: '60 hours of mistakes', id: '3330948631', url: 'https://thecatrave.bandcamp.com/track/60-hours-of-mistakes', linkText: '60 hours of mistakes von thecatrave'}
    ]
  }
};
