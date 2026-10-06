// German Prague clubs guide. Structure, facts and media from the English page
// (prague-clubs-draft.md, build-prague-clubs-article.mjs). Search wording from live Google
// (google.de, hl=de/gl=de, 2026-10-01); volumes in keywords/de-prague-clubs.json.
// The images are the English guide's, with translated captions.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/prague-clubs/${name}-${width}.webp`,
  srcset: `img/prague-clubs/${name}-320.webp 320w, img/prague-clubs/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

export default {
  lang: 'de',
  name: 'de-prague-clubs',
  file: 'de/clubs-prag.html',
  draft: 'de/prague-clubs-draft.md',
  canonical: 'https://thecatrave.com/de/clubs-prag',
  englishPath: '/best-clubs-in-prague',
  ogImage: 'https://thecatrave.com/img/og/prague-clubs.jpg',
  bodyClass: 'article-page prague-clubs-page',
  minReadingMinutes: 5,

  title: 'Die besten Clubs in Prag: Cross Club, Karlovy Lázně, Ankali',
  description: 'Die geschweißte Maschinerie des Cross Club, die fünf Etagen von Karlovy Lázně und Technonächte im Ankali: die besten Clubs in Prag, Mainstream und Underground.',
  datePublished: '2026-10-01',
  dateModified: '2026-10-06',
  dateLabel: '6. Oktober 2026',

  heroKicker: 'Clubs Prag',
  heroTitle: 'Die besten Clubs in Prag, vom Cross Club bis Karlovy Lázně',
  deck: 'Zwei Nachtleben-Szenen, die sich kaum berühren: fünfstöckige Touristenkomplexe nahe der Karlsbrücke und eine kleinere Reihe von Räumen aus geretteter Maschinerie und maßgefertigtem Soundsystem für House und Techno.',
  answerLabel: 'Die besten Clubs in Prag',
  breadcrumbName: 'Die besten Clubs in Prag',

  answerSection: 'Antwort',
  introSection: 'Einleitung',
  introTitle: 'Zwei Szenen, eine Stadt.',
  faqSection: 'FAQ',
  faqLabel: 'Häufige Fragen',
  faqTitle: 'Häufige Fragen zu Clubs in Prag.',

  sections: [
    {id: 'best-clubs-now', heading: 'Die besten Clubs in Prag heute', title: 'Die besten Clubs in Prag heute.'},
    {id: 'cross-club-depth', heading: 'Der Cross Club im Detail', title: 'Der Cross Club im Detail.'},
    {id: 'techno-clubs', heading: 'Die besten Techno-Clubs in Prag', title: 'Die besten Techno-Clubs in Prag.'},
    {id: 'where-to-go', heading: 'Wohin in Prag ausgehen', title: 'Wohin in Prag ausgehen.'}
  ],

  media: ({lang}) => ({
    'Cross Club': figure('cross-club-interior', 844, 563, 'Die Kellerbar des Cross Club in Prag, gebaut aus Altmetall und Maschinenteilen',
      'Die Kellerbar des Cross Club, fotografiert 2012. Der Club öffnete 2002 und wurde aus Schrottplatzmaterial statt nach einem Designkonzept gebaut. Foto: -crosspraha-, CC BY-SA 4.0.'),
    'Wenceslas Square': figure('wenceslas-square', 1200, 750, 'Das Nationalmuseum am oberen Ende des Wenzelsplatzes in Prag',
      'Der Wenzelsplatz am Nationalmuseum. Das Duplex und mehrere Touristenclubs Prags liegen nur wenige Gehminuten von hier. Foto: Muselsom, CC BY-SA 4.0.'),
    'Fatty M': articleVideoCollection({lang, label: 'Fatty M, Boiler Room Prag, 2018', description: 'Fatty M bei Boiler Rooms erster Übertragung in Tschechien im Dezember 2018. Aus dem Katalog aufgenommener DJ-Sets dieser Seite.', items: [articleVideoCard({youtubeId: 'WY_Th5nrI90', genre: 'Electronic', artist: 'Fatty M', title: 'Boiler Room Prag, 2018'})]}),
    'Eva Porating': articleVideoCollection({lang, label: 'Eva Porating, Boiler Room Prag, 2018', description: 'Eva Porating in derselben Boiler-Room-Übertragung aus Prag im Dezember 2018 wie Fatty M. Aus dem Katalog aufgenommener DJ-Sets dieser Seite.', items: [articleVideoCard({youtubeId: '6od6a-eiLUs', genre: 'Electronic', artist: 'Eva Porating', title: 'Boiler Room Prag, 2018'})]}),
    'Tabelle: now': articleTable({
      headers: ['Club', 'Gegend', 'Musik und Charakter', 'Am besten für'],
      rows: [
        ['Karlovy Lázně', 'Altstadt, an der Karlsbrücke', 'Fünf Etagen mit je einem Genre, in einem ehemaligen Kurhaus, seit 1999 geöffnet', 'Eine ganze Nacht, ohne das Haus zu verlassen'],
        ['Duplex', 'Wenzelsplatz', 'Ein gläserner Rooftop-Club mit zwei Tanzplattformen und Stadtblick', 'Internationale Bookings und ein Platz in den DJ Mag Top 100'],
        ['Cross Club', 'Holešovice', 'Drei Etagen geretteter Industriemaschinerie, seit 2002 geöffnet', 'Drum and Bass, Techno und Dub mit Do-it-yourself-Geschichte'],
        ['Ankali', 'außerhalb des Zentrums', 'Ein Techno-Raum um ein maßgefertigtes Funktion-One-System, seit 2017 geöffnet', 'Deep House bis Hard Techno auf einem ernsthaften Soundsystem']
      ].map(row => row.map(escapeHtml))
    })
  }),

  sources: [
    {href: 'https://en.wikipedia.org/wiki/Cross_Club', label: 'Wikipedia: Cross Club'},
    {href: 'https://www.atlasobscura.com/places/cross-club', label: 'Atlas Obscura: Cross Club'},
    {href: 'https://english.radio.cz/cross-club-independent-culture-centre-a-twist-8556609', label: 'Radio Prague International: Cross Club, an independent culture centre with a twist'},
    {href: 'https://www.karlovylazne.cz/about', label: 'Karlovy Lázně: about'},
    {href: 'https://djmag.com/top100clubs/2022/62/DupleX', label: 'DJ Mag: Top 100 Clubs 2022, DupleX'},
    {href: 'https://djmag.com/top100clubs/2025/41/duplex', label: 'DJ Mag: Top 100 Clubs 2025, DupleX'},
    {href: 'https://mixmag.net/read/edge-closure-prague-club-ankali-urges-support-secure-future-news', label: 'Mixmag: Prague club Ankali urges support to secure its future (2025)'},
    {href: 'https://ra.co/news/82717', label: 'Resident Advisor: Prague club Ankali at risk of closure (2025)'},
    {href: 'https://boilerroom.tv/session/boiler-room-prague/', label: 'Boiler Room: Boiler Room Prague (2018)'}
  ],

  bandcamp: {
    description: 'Zwei meiner eigenen Tracks. Wer einen kauft, unterstützt meine Arbeit direkt.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks von thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 von thecatrave'}
    ]
  }
};
