// German Belgrade clubs guide. Structure, facts and media from the English page
// (belgrade-clubs-draft.md, build-belgrade-clubs-article.mjs, media/belgrade-clubs.json),
// dated 8 October 2026; nothing added that the English page does not say.
//
// German wording: Keyword Planner (Germany, German, 14 November 2026) returned
// "belgrad clubs", "belgrad nachtleben" and "nachtleben belgrad" in the 100-1K
// bucket and "clubs in belgrad" in 10-100 (keywords/de-belgrade-clubs.json).
//
// The images are the English guide's, in img/belgrade-clubs/, with translated captions.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/belgrade-clubs/${name}-${width}.webp`,
  srcset: `img/belgrade-clubs/${name}-320.webp 320w, img/belgrade-clubs/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

const video = (lang, youtubeId, artist, videoTitle, text) => articleVideoCollection({
  lang, label: `${artist}, ${videoTitle}`, description: text,
  items: [articleVideoCard({youtubeId, genre: 'Techno', artist, title: videoTitle})]
});

export default {
  lang: 'de',
  name: 'de-belgrade-clubs',
  file: 'de/clubs-belgrad.html',
  draft: 'de/belgrade-clubs-draft.md',
  canonical: 'https://thecatrave.com/de/clubs-belgrad',
  englishPath: '/best-clubs-in-belgrade',
  ogImage: 'https://thecatrave.com/img/og/belgrade-clubs.jpg',
  bodyClass: 'article-page belgrade-clubs-page',
  minReadingMinutes: 6,

  title: 'Clubs in Belgrad und Nachtleben: Drugstore, Klub 20/44, Splavovi',
  description: 'Drugstore, Klub 20/44 und Barutana: die Clubs in Belgrad, die eine Nacht wert sind, wie die Splavovi von der Save geräumt wurden, und Boiler Room Sets zum Vorhören.',
  datePublished: '2026-11-14',
  dateModified: '2026-11-14',
  dateLabel: '14. November 2026',

  heroKicker: 'Clubs Belgrad',
  heroTitle: 'Clubs und Nachtleben in Belgrad, vom Drugstore bis zu den Flößen',
  deck: 'Ein Club in einem ehemaligen Schlachthof, einer, der von seinem Schiff an Land zog, und Flöße, die die Stadt zwei Jahre lang räumte: wo die elektronische Musik in Belgrad heute läuft.',
  answerLabel: 'Clubs in Belgrad',
  breadcrumbName: 'Clubs in Belgrad',

  answerSection: 'Antwort',
  introSection: 'Einleitung',
  introTitle: 'Clubs in Belgrad jenseits der Bars.',
  faqSection: 'FAQ',
  faqLabel: 'Häufige Fragen',
  faqTitle: 'Häufige Fragen zu Clubs in Belgrad.',

  sections: [
    {id: 'belgrade-nightlife-history', heading: 'Das Nachtleben in Belgrad im Überblick', title: 'Das Nachtleben in Belgrad im Überblick.'},
    {id: 'best-clubs-now', heading: 'Die besten Clubs in Belgrad heute', title: 'Die besten Clubs in Belgrad heute.'},
    {id: 'drugstore', heading: 'Drugstore Belgrad: der ehemalige Schlachthof', title: 'Drugstore Belgrad: der ehemalige Schlachthof.'},
    {id: 'klub-20-44', heading: 'Klub 20/44, vom Schiff an die Karađorđeva', title: 'Klub 20/44, vom Schiff an die Karađorđeva.'},
    {id: 'barutana', heading: 'Barutana Belgrad, der Club in der Festung', title: 'Barutana Belgrad, der Club in der Festung.'},
    {id: 'techno', heading: 'Techno in Belgrad: die Techno-Clubs der Stadt', title: 'Techno in Belgrad: die Techno-Clubs der Stadt.'},
    {id: 'splavovi', heading: 'Splavovi in Belgrad und die Flussclubs', title: 'Splavovi in Belgrad und die Flussclubs.'},
    {id: 'where-to-go', heading: 'Wohin in Belgrad ausgehen', title: 'Wohin in Belgrad ausgehen.'}
  ],

  media: ({lang}) => ({
    'Sava vom Kalemegdan': figure('sava-from-kalemegdan', 1200, 900,
      'Die Save in Belgrad von der Festung Kalemegdan aus, mit Straßenbrücken und vertäuten Booten',
      'Die Save von der Festung Kalemegdan, fotografiert 2007. An Flüssen wie diesem lagen die Splavs von Belgrad. Foto: Petar Milošević, CC BY 3.0.'),
    'Floß am Savski kej': figure('savski-kej-raft', 1200, 900,
      'Ein schwimmendes Gebäude, vertäut am Ufer des Savski kej an der Save in Belgrad',
      'Ein vertäutes schwimmendes Gebäude am Savski kej, fotografiert im April 2011, vor den Räumungen von 2023 und 2024. Foto: darkobajic, CC BY 3.0.'),
    'Marko Nastic': video(lang, 'Yr1MNU8V-2w', 'Marko Nastić', 'MAD in Belgrade x Boiler Room, 2014',
      'Marko Nastić auf der Bühne von Boiler Room beim Festival MAD in Belgrade im Mai 2014.'),
    'Ancient Methods': video(lang, '14ksGZfcgHM', 'Ancient Methods', 'Boiler Room x Belgrade: Drugstore, 2019',
      'Ancient Methods 2019 im Drugstore, unter dem eigenen Titel von Boiler Room für die Session.'),
    'Tijana T': video(lang, 'xjO25HRDe-w', 'Tijana T', 'Boiler Room Belgrade at Klub 20/44, 2017',
      'Tijana T an Deck des Schiffs des Klub 20/44 für Boiler Room im September 2017.'),
    '33.10.3402': video(lang, 'rJqr7_Q2uxE', '33.10.3402', 'Boiler Room Belgrade: Drugstore, 2019',
      '33.10.3402 bei der ersten Session von Boiler Room im Drugstore im März 2019.'),
    'Tabelle: now': articleTable({
      label: 'Die besten Clubs in Belgrad heute',
      headers: ['Club', 'Wo', 'Charakter', 'Offen (laut lokalen Guides, 2026)'],
      rows: [
        ['Drugstore', 'Bulevar Despota Stefana 115, Palilula', 'Ehemaliger Schlachthof; Do-it-yourself ab 2012, seit 2014 in diesem Raum', 'Freitag und Samstag'],
        ['Klub 20/44', 'Karađorđeva 44', 'Am 31. Dezember 2024 von einem Schiff auf der Save umgezogen', 'Donnerstag bis Samstag'],
        ['Barutana', 'Festung Kalemegdan', 'Open-Air-Club vor einem Pulvermagazin aus dem 18. Jahrhundert', 'Am 5. Juni 2026 wiedereröffnet'],
        ['Kult', 'Čumićevo sokače 3', 'House bis Techno, Kapazität etwa 350; seit Dezember 2022', 'Programm nicht bestätigt'],
        ['Lift', 'Cetinjska 15, Dorćol', 'Eher eine DJ-Bar als ein Club', 'Eigenes Programm prüfen']
      ].map(row => row.map(escapeHtml))
    })
  }),

  // The English page's sources, URL for URL, with translated labels. All in English or Serbian.
  sources: [
    {href: 'https://drugstorebeograd.com/', label: 'Drugstore: offizielle Seite'},
    {href: 'https://boilerroom.tv/city/belgrade', label: 'Boiler Room: Sessions in Belgrad'},
    {href: 'https://ra.co/news/81854', label: 'Resident Advisor: Klub 20/44 öffnet an der Karađorđeva 44 (25. Dezember 2024)'},
    {href: 'https://nosleepfestival.com/', label: 'No Sleep Festival: offizielle Seite'},
    {html: 'Balkan Insight, Geschichte der Splavs in Belgrad (13. Juni 2016); Vreme (24. Mai 2023), Danas (9. Mai 2024) und RTS / Direktno (13. August 2024) zur Räumung der Flöße vom Savski kej.'},
    {html: 'StillInBelgrade, 10 Clubs und DJ-Bars in Belgrad (17. Februar 2026), für Öffnungstage und Kapazität; clubber.rs, für die Geschichte der Barutana und ihre Wiedereröffnung im Juni 2026; Belgrade My Way, für die Verlegung der Flöße seit 2025.'}
  ],

  bandcamp: {
    description: 'Abseits der Tanzfläche die Musik, die ich selbst mache. Ein Kauf unterstützt meine Arbeit direkt.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 von thecatrave'},
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks von thecatrave'}
    ]
  }
};
