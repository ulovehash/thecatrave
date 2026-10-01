// German Budapest clubs guide. Structure, facts and media from the English page
// (budapest-clubs-draft.md, build-budapest-clubs-article.mjs). Search wording from live Google
// (google.de, hl=de/gl=de, 2026-10-01); volumes in keywords/de-budapest-clubs.json.
// The images are the English guide's, with translated captions.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/budapest-clubs/${name}-${width}.webp`,
  srcset: `img/budapest-clubs/${name}-320.webp 320w, img/budapest-clubs/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

export default {
  lang: 'de',
  name: 'de-budapest-clubs',
  file: 'de/clubs-budapest.html',
  draft: 'de/budapest-clubs-draft.md',
  canonical: 'https://thecatrave.com/de/clubs-budapest',
  englishPath: '/best-clubs-in-budapest',
  ogImage: 'https://thecatrave.com/img/og/budapest-clubs.jpg',
  bodyClass: 'article-page budapest-clubs-page',
  minReadingMinutes: 6,

  title: 'Die besten Clubs in Budapest: A38, Instant-Fogas, Turbina',
  description: 'Der Frachtschiff-Club A38, die sieben Räume des Instant-Fogas und Techno im Turbina: die besten Clubs in Budapest heute und die Ruinenbars, aus denen sie entstanden.',
  datePublished: '2026-10-01',
  dateModified: '2026-10-01',
  dateLabel: '1. Oktober 2026',

  heroKicker: 'Clubs Budapest',
  heroTitle: 'Die besten Clubs in Budapest, vom A38 bis zum Instant-Fogas',
  deck: 'Eine Stadt, die für ihre Ruinenbars bekannter ist als für ihre Clubs, und die kleinere Liste von Räumen, ein umgebautes Frachtschiff darunter, die zum Tanzen gebaut wurden statt zum Trinken in einem Hof.',
  answerLabel: 'Die besten Clubs in Budapest',
  breadcrumbName: 'Die besten Clubs in Budapest',

  answerSection: 'Antwort',
  introSection: 'Einleitung',
  introTitle: 'Clubs neben den Ruinenbars.',
  faqSection: 'FAQ',
  faqLabel: 'Häufige Fragen',
  faqTitle: 'Häufige Fragen zu Clubs in Budapest.',

  sections: [
    {id: 'ruin-bars-to-clubs', heading: 'Von den Ruinenbars zu den Clubs', title: 'Von den Ruinenbars zu den Clubs.'},
    {id: 'best-clubs-now', heading: 'Die besten Clubs in Budapest heute', title: 'Die besten Clubs in Budapest heute.'},
    {id: 'techno-clubs', heading: 'Die besten Techno-Clubs in Budapest', title: 'Die besten Techno-Clubs in Budapest.'},
    {id: 'where-to-go', heading: 'Wohin in Budapest ausgehen', title: 'Wohin in Budapest ausgehen.'}
  ],

  media: ({lang}) => ({
    'Szimpla Kert': figure('szimpla-kert', 1200, 800, 'Der vielfältige Hof des Szimpla Kert, der ersten Ruinenbar Budapests',
      'Der Szimpla Kert in der Kazinczy utca, fotografiert 2017. Er öffnete 2002 und zog 2004 hierher und setzte die Vorlage für die Ruinenbars des VII. Bezirks. Foto: Fred Romero, CC BY 2.0.'),
    'Fogas': figure('fogas-akacfa', 1200, 797, 'Das Straßengebäude des Fogasház in der Akácfa utca in Budapest',
      'Das Fogasház in der Akácfa utca, fotografiert 2017, in dem Jahr, in dem es mit dem benachbarten Instant zum Instant-Fogas-Komplex verschmolz. Foto: Christo, CC BY-SA 4.0.'),
    'A38 ship': figure('a38-ship', 1200, 900, 'Das Schiff A38 an der Donau in Budapest, ein umgebautes Frachtschiff von 1968',
      'Das A38 an der Petőfi-Brücke, fotografiert 2015. Es öffnete 2003 als Club und Konzertsaal, umgebaut aus einem ukrainischen Frachtschiff von 1968. Foto: Rakás, CC BY-SA 4.0.'),
    'Route 8': articleVideoCollection({lang, label: 'Route 8, Boiler Room Budapest, im Turbina, 2021', description: 'Route 8 bei Boiler Rooms dritter Budapest-Übertragung im Turbina im Dezember 2021. Aus dem Katalog aufgenommener DJ-Sets dieser Seite.', items: [articleVideoCard({youtubeId: 'dAB4K204nL0', genre: 'Techno', artist: 'Route 8', title: 'Boiler Room Budapest, im Turbina, 2021'})]}),
    'Imre Kiss': articleVideoCollection({lang, label: 'Imre Kiss, Boiler Room Budapest x Lobster Theremin, 2017', description: 'Imre Kiss bei Boiler Rooms erster Budapest-Übertragung im Akvárium Klub im Januar 2017, zusammen mit dem britischen Label Lobster Theremin. Aus dem Katalog aufgenommener DJ-Sets dieser Seite.', items: [articleVideoCard({youtubeId: 'Xnp6hnEs4Ns', genre: 'House', artist: 'Imre Kiss', title: 'Boiler Room Budapest x Lobster Theremin, 2017'})]}),
    'Tabelle: now': articleTable({
      headers: ['Club', 'Gegend', 'Musik und Charakter', 'Am besten für'],
      rows: [
        ['A38', 'Donau, an der Petőfi-Brücke', 'Ein umgebautes Frachtschiff von 1968, seit 2003 geöffnet', 'Livemusik und Clubnächte in einem Rumpf'],
        ['Instant-Fogas Complex', 'Akácfa utca, VII. Bezirk', 'Sieben Räume und achtzehn Bars, 2017 aus zwei zusammengelegten Ruinenbars entstanden', 'Eine ganze Nacht, ohne die Adresse zu wechseln'],
        ['Turbina', 'VIII. Bezirk', 'Budapests wichtigster Raum für Techno und House auf Tour', 'Die dritte Boiler-Room-Übertragung in Budapest, 2021'],
        ['Toldi Klub', 'Bajcsy-Zsilinszky út', 'Die Lobby eines 80 Jahre alten Kinos, elektronische und Livemusik nach der letzten Vorstellung', 'Ein Club ohne Dresscode und tagsüber ein Kino']
      ].map(row => row.map(escapeHtml))
    })
  }),

  sources: [
    {href: 'https://en.wikipedia.org/wiki/A38_(venue)', label: 'Wikipedia: A38 (venue)'},
    {href: 'https://en.wikipedia.org/wiki/Szimpla_Kert', label: 'Wikipedia: Szimpla Kert'},
    {href: 'https://www.a38.hu/en/history', label: 'A38: History'},
    {href: 'https://welovebudapest.com/en/article/2024/04/01/nightlife-instant-fogas-party-complex-party-district-budapest/', label: 'We Love Budapest: Instant-Fogas, the party complex expanding to eight days a week (2024)'},
    {href: 'https://welovebudapest.com/en/article/2018/07/17/authorities-close-budapest-s-corvin-club-and-aurora/', label: 'We Love Budapest: Authorities close Budapest\'s Corvin Club and Auróra (2018)'},
    {href: 'https://primate.hu/2025/01/17/kiderult-mi-fog-nyilni-a-corvinteto-helyen/', label: 'Primate.hu: What will open where Corvintető was (2025)'},
    {href: 'https://www.electronicbeats.net/larm-monologue', label: 'Electronic Beats: How Lärm became the underground techno club Budapest needed'},
    {href: 'https://welovebudapest.com/cikk/2021/11/19/ejszakai-elet-forrosodik-a-budapesti-buliszcena-a-turbinaba-erkezik-a-boiler-room', label: 'We Love Budapest: Boiler Room arrives at Turbina (2021)'},
    {href: 'https://ra.co/events/915127', label: 'Resident Advisor: Boiler Room Budapest x Lobster Theremin at Akvárium Klub (2017)'},
    {href: 'https://boilerroom.tv/session/br-budapest-x-lobster-theremin/', label: 'Boiler Room: BR Budapest x Lobster Theremin (2017)'}
  ],

  bandcamp: {
    description: 'Zwei meiner eigenen Tracks. Wer einen kauft, unterstützt meine Arbeit direkt.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks von thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 von thecatrave'}
    ]
  }
};
