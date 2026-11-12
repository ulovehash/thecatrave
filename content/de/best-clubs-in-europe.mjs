// German best clubs in Europe guide. Structure, facts and media from the
// English page (best-clubs-in-europe-draft.md); localised, not translated word
// for word.
//
// Keywords (keywords/de-best-clubs-in-europe.json): Keyword Planner, Germany
// and German, 12 November 2026, buckets only; wording from Google de-DE.
//
// The images are the English guide's, in img/best-clubs-in-europe/, with
// translated captions.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, ownSetListening
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/best-clubs-in-europe/${name}-1200.webp`,
  srcset: `img/best-clubs-in-europe/${name}-320.webp 320w, img/best-clubs-in-europe/${name}-1200.webp 1200w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

export default {
  lang: 'de',
  name: 'de-best-clubs-in-europe',
  file: 'de/beste-clubs-europa.html',
  draft: 'de/best-clubs-in-europe-draft.md',
  canonical: 'https://thecatrave.com/de/beste-clubs-europa',
  englishPath: '/best-clubs-in-europe',
  ogImage: 'https://thecatrave.com/img/og/best-clubs-in-europe.jpg',
  bodyClass: 'article-page best-clubs-in-europe-page',
  minReadingMinutes: 6,

  title: 'Die besten Clubs in Europa: 23 Clubs nach Ländern',
  description: '23 Clubs in zehn Ländern Europas, von Berghain und Tresor bis Pacha und Cavo Paradiso: was jeder Raum ist, die DJ-Mag-Plätze 2026 und Sets zum Anhören.',
  datePublished: '2026-11-12',
  dateModified: '2026-11-12',
  dateLabel: '12. November 2026',

  heroKicker: 'Club-Guide, Europa',
  heroTitle: 'Die besten Clubs in Europa: 23 Clubs, die die Reise wert sind',
  deck: 'Dreiundzwanzig europäische Clubs aus zehn Ländern, von Berghain und Tresor bis Pacha und Cavo Paradiso, mit dem, was jeder Raum ist, und Sets zum Anhören.',
  answerLabel: 'Die besten Clubs in Europa',
  breadcrumbName: 'Die besten Clubs in Europa',

  answerSection: 'Antwort',
  introSection: 'Einleitung',
  introTitle: 'Eine Wahl zwischen 23 Räumen.',
  faqSection: 'FAQ',
  faqLabel: 'Häufige Fragen',
  faqTitle: 'Häufige Fragen zu den besten Clubs in Europa.',

  sections: [
    {id: 'nightclubs', heading: 'Beste Clubs Europa: die 23 Clubs', tocLabel: 'Die 23 Clubs', title: 'Beste Clubs Europa: die 23 Clubs'},
    {id: 'dance-clubs', heading: 'Die besten Clubs in Europa nach Ländern', tocLabel: 'Nach Ländern', title: 'Die besten Clubs in Europa nach Ländern', subsections: ['germany', 'spain', 'uk', 'italy', 'france', 'portugal', 'greece', 'croatia', 'netherlands', 'poland']},
    {id: 'top-clubs', heading: 'Die größten Clubs in Europa', tocLabel: 'Nach Größe', title: 'Die größten Clubs in Europa'},
    {id: 'europe-clubs', heading: 'Clubs in Europa: Einlass, Handys und Alter', tocLabel: 'Einlass und Handys', title: 'Clubs in Europa: Einlass, Handys und Alter'},
    {id: 'dj-mag', heading: 'DJ Mag Top 100 Clubs 2026: welche europäischen Clubs dabei sind', tocLabel: 'DJ Mag Top 100', title: 'DJ Mag Top 100 Clubs 2026: welche europäischen Clubs dabei sind'},
    {id: 'best-techno-clubs', heading: 'Die besten Techno-Clubs in Europa', tocLabel: 'Techno-Clubs', title: 'Die besten Techno-Clubs in Europa'}
  ],

  media: ({lang}) => ({
    'Image: Tresor': figure('tresor-2008', 1200, 981, "Die nachts blau beleuchtete Wand des früheren Berliner Kraftwerks, in dem der Club Tresor sitzt", "Das Gebäude des Tresor in Berlin, 4. September 2008. Foto: Boca Dorada, CC BY-SA 2.0."),
    'Image: Hi Ibiza': figure('hi-ibiza-2022', 1200, 800, "Ein DJ im Club Room des Hï Ibiza, das Publikum hält die Handylichter hoch", "Der Club Room des Hï Ibiza, 12. Juli 2022. Foto: Juliamgmt, CC BY-SA 4.0."),
    'Image: Amnesia': figure('amnesia-2013', 1200, 900, "Sven Väth an den Decks im Amnesia auf Ibiza, das Publikum vor der Kanzel", "Sven Väth bei seiner Cocoon-Party im Amnesia, Ibiza, September 2013. Foto: Nsf12, CC BY-SA 3.0."),
    'Image: Tenax': figure('tenax-2016', 1200, 800, "Das dichte Publikum im Tenax in Florenz, Fatboy Slim an den Decks", "Im Tenax in Florenz, Fatboy Slim legt auf, 12. März 2016. Foto: Luca Bergami, CC BY-SA 4.0."),
    'Image: Rex Club': figure('rex-club-2011', 1200, 800, "Nicolas Jaar live im Rex Club in Paris, in Nebel und Bühnenlicht", "Nicolas Jaar live im Rex Club, Paris, April 2011. Foto: Pascal Montary, CC BY 2.0."),
    'Image: Cavo Paradiso': figure('cavo-paradiso-2016', 1200, 900, "Cavo Paradiso auf seiner Klippe über dem Meer auf Mykonos, vom Wasser aus gesehen", "Cavo Paradiso, Mykonos, 19. Juni 2016. Foto: Zigomitros Athanasios, CC BY-SA 4.0."),
    'Image: Revelin': figure('revelin-2010', 1200, 797, "Die Festung Revelin und ihre Umgebung in Dubrovnik, vom alten Hafen aus gesehen", "Die Festung Revelin, Dubrovnik, 29. März 2010. Foto: LBM1948, CC BY-SA 4.0."),
    'Embed: Spain': articleVideoCollection({lang, label: 'Aufgenommen im Hï und im Pacha', description: 'Ein CamelPhat-Restream von 2019, präsentiert vom Hï Ibiza, und Sven Väths Cocoon-Nacht im Pacha 2018.', items: [
      articleVideoCard({youtubeId: '8IsNzsE_8v8', genre: 'Hï Ibiza, 2019', artist: 'DJ Mag', title: 'Hï Ibiza präsentiert CamelPhat, Restream von 2019'}),
      articleVideoCard({youtubeId: 'y37cDo_CTu4', genre: 'Cocoon, Pacha 2018', artist: 'Mixmag', title: 'Sven Väth. Cocoon. Pacha 2018.'})
    ]}),
    'Embed: UK': articleVideoCollection({lang, label: 'fabric und Ministry of Sound', description: 'Josh Caffe im fabric für Beatport und eine Nacht im Ministry of Sound für DJ Mag.', items: [
      articleVideoCard({youtubeId: 'pxKVT8F0BGE', genre: 'fabric London Unlocked', artist: 'Beatport', title: 'Josh Caffe im fabric'}),
      articleVideoCard({youtubeId: '7r68Nx38hlY', genre: 'Ministry of Sound', artist: 'DJ Mag', title: 'Dance For Stevie im Ministry of Sound'})
    ]}),
    'Embed: Techno': articleVideoCollection({lang, label: 'Ein Hör-Guide zum Tresor', description: 'Ein Radio-Guide von NTS zu den Klassikern des Tresor, nicht im Club aufgenommen.', items: [
      articleVideoCard({youtubeId: 'OcU74Xc6ko8', genre: 'Tresor-Klassiker', artist: 'NTS', title: 'Tresor Club Techno and Electro Classics'})
    ]}),
    'Embed: thecatrave mix 1': ownSetListening(0, lang, 'Dreißig Tracks, in denen die Breaks zwischen Garage, Bass Music, Techno und Rave wandern. Mein eigenes Set, für den Heimweg nach dem Club.'),
    'Table: Clubes': articleTable({
      headers: ["Club", "Stadt", "Land", "Warum er hier steht"],
      rows: [["Berghain", "Berlin", "Deutschland", "Früheres Kraftwerk, seit 2004 ein Club"], ["Tresor", "Berlin", "Deutschland", "1991 im Tresorraum eines Kaufhauses eröffnet"], ["Bootshaus", "Köln", "Deutschland", "DJ Mag Nr. 11, drei Räume am Rhein"], ["Open Ground", "Wuppertal", "Deutschland", "800 Menschen in einem früheren Bunker, neu bei DJ Mag"], ["Hï Ibiza", "Ibiza", "Spanien", "DJ Mag Nr. 4, viermal Sieger"], ["[UNVRS]", "Ibiza", "Spanien", "DJ Mag Nr. 1, eröffnet im Mai 2025"], ["Pacha Ibiza", "Ibiza", "Spanien", "Geöffnet seit 1973"], ["Amnesia", "Ibiza", "Spanien", "Geöffnet seit 1976, 50. Jahr 2026"], ["DC-10", "Ibiza", "Spanien", "Heimat von Circoloco seit 1999"], ["FABRIK", "Region Madrid", "Spanien", "DJ Mag Nr. 8, sieben Bereiche"], ["fabric", "London", "Großbritannien", "Drei Räume, 2016 wiedereröffnet"], ["The Warehouse Project", "Manchester", "Großbritannien", "DJ Mag Nr. 15, eine handyfreie Saison"], ["Ministry of Sound", "London", "Großbritannien", "DJ Mag Nr. 24, 35. Jahr"], ["Drumsheds", "London", "Großbritannien", "15.000 Menschen in einem früheren IKEA-Haus"], ["Space Riccione", "Riccione", "Italien", "Open Air, trägt den Namen des Space auf Ibiza"], ["Tenax", "Florenz", "Italien", "Gegründet 1981, Kapazität 999"], ["Rex Club", "Paris", "Frankreich", "Ein Raum unter einem Kino seit den 1930er-Jahren"], ["Amnesia Cap d'Agde", "Cap d'Agde", "Frankreich", "Open Air, auf 4.000 erweitert"], ["Lux Frágil", "Lissabon", "Portugal", "Am Tejo seit 1998"], ["Cavo Paradiso", "Mykonos", "Griechenland", "Club auf einer Klippe, geöffnet seit 1993"], ["Culture Club Revelin", "Dubrovnik", "Kroatien", "In einer Festung"], ["Shelter", "Amsterdam", "Niederlande", "Zwei Funktion-One-Räume, keine Handys"], ["Prozak 2.0", "Krakau", "Polen", "Unterirdische Räume auf zwei Ebenen"]].map(row => row.map(escapeHtml)),
      label: "Die 23 Clubs dieses Guides"
    }),
    'Table: Tamaño': articleTable({
      headers: ["Club", "Genannte Kapazität"],
      rows: [["Drumsheds, London", "15.000"], ["The Warehouse Project, Manchester", "10.000"], ["FABRIK, Region Madrid", "6.000"], ["Space Riccione", "6.000"], ["Hï Ibiza", "5.633"], ["Amnesia Cap d'Agde", "4.000"], ["Amnesia, Ibiza", "3.800"], ["Cavo Paradiso", "3.000"], ["Bootshaus", "2.000"], ["Rex Club", "800"]].map(row => row.map(escapeHtml)),
      label: "Europäische Clubs nach genannter Kapazität"
    }),
    'Table: DJ Mag': articleTable({
      headers: ["Platz", "Club", "Land"],
      rows: [["1", "[UNVRS]", "Spanien"], ["3", "Ushuaïa Ibiza", "Spanien"], ["4", "Hï Ibiza", "Spanien"], ["8", "FABRIK", "Spanien"], ["11", "Bootshaus", "Deutschland"], ["13", "fabric", "Großbritannien"], ["15", "The Warehouse Project", "Großbritannien"], ["16", "Amnesia Ibiza", "Spanien"], ["18", "Pacha Ibiza", "Spanien"], ["19", "DC-10", "Spanien"], ["21", "Berghain", "Deutschland"], ["22", "Cavo Paradiso", "Griechenland"], ["24", "Ministry of Sound", "Großbritannien"], ["25", "Culture Club Revelin", "Kroatien"], ["26", "Space Riccione", "Italien"], ["33", "Amnesia Cap d'Agde", "Frankreich"], ["45", "Drumsheds", "Großbritannien"], ["56", "Nitsa, Barcelona", "Spanien"], ["76", "Papagayo Tenerife", "Spanien"], ["81", "Pelícano, A Coruña", "Spanien"], ["89", "Tenax", "Italien"], ["90", "Shelter", "Niederlande"], ["94", "Amnesia Milano", "Italien"], ["100", "Open Ground", "Deutschland"]].map(row => row.map(escapeHtml)),
      label: "DJ Mag Top 100 Clubs 2026, europäische Einträge"
    }),
  }),

  sources: [
    {href: 'https://djmag.com/top100clubs', label: 'DJ Mag: Top 100 Clubs, Liste 2026 und Clubprofile (auf Englisch)'},
    {href: 'https://djmag.com/features/dj-mag-top-100-clubs-2026-record-breaking-numbers-vote-our-annual-poll-of-worlds-best', label: 'DJ Mag: Ergebnisse 2026, 15. April 2026 (auf Englisch)'},
    {href: 'https://djmag.com/top100clubs/2021/85/Lux-Fragil', label: 'DJ Mag: Profil von Lux Frágil, 2021 (auf Englisch)'},
    {href: 'https://berghain.berlin/', label: 'Berghain'},
    {href: 'https://industriekultur.berlin/ort/berghain/', label: 'Berliner Zentrum Industriekultur: Berghain'},
    {href: 'https://mixmag.net/read/berghain-updates-soundsystem-funktion-one-news', label: 'Mixmag: die Anlage des Berghain, 18. Oktober 2023 (auf Englisch)'},
    {href: 'https://tresor.foundation/en/geschichte/', label: 'Tresor Foundation: Geschichte (auf Englisch)'},
    {href: 'https://www.pacha.com/', label: 'Pacha'},
    {href: 'https://grayarea.co/magazine/dc10-ibiza-the-first-ever-residencies', label: 'Gray Area: DC-10 (auf Englisch)'},
    {href: 'https://djmag.com/news/amnesia-ibiza-announces-50th-anniversary-celebrations-2026', label: 'DJ Mag: 50 Jahre Amnesia (auf Englisch)'},
    {href: 'https://www.hiibiza.com/', label: 'Hï Ibiza'},
    {href: 'https://www.fabriclondon.com/faq', label: 'fabric: FAQ (auf Englisch)'},
    {href: 'https://ra.co/news/36182', label: 'Resident Advisor: fabric, September 2016 (auf Englisch)'},
    {href: 'https://www.inyourpocket.com/krakow/prozak-20_18565v', label: 'In Your Pocket Krakau: Prozak 2.0 (auf Englisch)'}
  ],
  sourcesNote: 'Öffnungszeiten und erste elektronische Nacht des Rex Club: Visit Paris Region. Zu fabric außerdem: Time Out (November 2016) und Mixmag.',

  bandcamp: {
    description: 'Abseits der Tanzfläche: die Musik, die ich selbst mache. Ein Kauf unterstützt meine Arbeit direkt.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 von thecatrave'},
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks von thecatrave'}
    ]
  }
};
