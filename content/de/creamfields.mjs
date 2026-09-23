// German Creamfields guide. Structure and facts from the English page
// (creamfields-draft.md, creamfields-research.md, build-creamfields-article.mjs).
//
// German keywords (keywords/de-creamfields.json): creamfields 300 a month in
// Germany (TRANSLATION-RESEARCH.md, stage 1). The wording was checked in the
// Bing de-DE results on 2026-09-23 (Google answered with a bot check), no
// Ahrefs units spent: German searches use the bare name, "creamfields
// festival" and "creamfields daresbury"; line-ups, tickets and "shein
// creamfields" (outfits) stay rejected, as on the English page.
//
// The images are the English guide's, in img/creamfields/, with translated
// captions; see home-articles.mjs for why a translation may reuse them.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, articleYoutubeEmbed, ownTrackListening
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption, className = 'wide-archive-image') => articleFigure({
  src: `img/creamfields/${name}-${width}.webp`,
  srcset: `img/creamfields/${name}-320.webp 320w, img/creamfields/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className
});

export default {
  lang: 'de',
  name: 'de-creamfields',
  file: 'de/creamfields-festival.html',
  draft: 'de/creamfields-draft.md',
  canonical: 'https://thecatrave.com/de/creamfields-festival',
  englishPath: '/creamfields-festival',
  ogImage: 'https://thecatrave.com/img/og/creamfields.jpg',
  bodyClass: 'article-page creamfields-page',

  title: 'Creamfields 2027: Ort, Geschichte, Größe und Musik',
  description: 'Wo Creamfields in Cheshire stattfindet, wie aus einer Liverpooler House-Nacht ein Festival über vier Tage wurde, wem es gehört und was jenseits der Arc Stage läuft.',
  datePublished: '2026-09-23',
  dateModified: '2026-09-23',
  dateLabel: '23. September 2026',

  heroKicker: 'Creamfields',
  heroTitle: 'Creamfields Festival',
  deck: 'Der Ausflug einer Liverpooler Clubnacht, aus dem vier Tage auf einem Feld in Cheshire wurden, jedes Jahr am August Bank Holiday. Wo es stattfindet, wie groß es ist, wem es gehört und was jenseits der Arc Stage läuft.',
  answerLabel: 'Was ist Creamfields',
  breadcrumbName: 'Creamfields Festival',

  answerSection: 'Antwort',
  introSection: 'Einleitung',
  introTitle: 'Eine Clubnacht, aus der ein Festival wurde.',
  faqSection: 'FAQ',
  faqLabel: 'Häufige Fragen',
  faqTitle: 'Häufige Fragen zu Creamfields.',
  ownSetAfter: 'history',

  sections: [
    {id: 'where', heading: 'Wo Creamfields stattfindet', title: 'Wo Creamfields stattfindet.', subsections: ['south', 'international', 'creamfields-2027']},
    {id: 'how-big', heading: 'Wie groß Creamfields ist', title: 'Wie groß Creamfields ist.'},
    {id: 'history', heading: 'Eine kurze Geschichte, und wem Creamfields gehört', title: 'Eine kurze Geschichte, und wem Creamfields gehört.'},
    {id: 'famous', heading: 'Warum Creamfields berühmt ist', title: 'Warum Creamfields berühmt ist.'},
    {id: 'music', heading: 'Welche Musik wirklich läuft', title: 'Welche Musik wirklich läuft.', kicker: 'Die Musik'},
    {id: 'from-home', heading: 'Creamfields von zu Hause hören', title: 'Creamfields von zu Hause hören.'}
  ],

  media: ({lang}) => ({
    // The owner's own music inside the text, as on every German festival guide
    // (owner, 2026-09-21: Berlin Race 1909 on the German pages).
    'thecatrave berlin-race-1909': ownTrackListening('berlin-race-1909', 'Nicht das, was auf den großen Bühnen läuft: gebrochene Beats im Hall des Dub-Techno. Mein eigener Track, benannt nach Berlin.', lang),
    'Farm track skirts Creamfields site': figure('daresbury-site-2014', 1024, 768,
      'Ein Feldweg neben grünem Bauzaun am Rand des Creamfields-Geländes bei Daresbury, dahinter Felder und Bäume',
      'Der Rand des Creamfields-Geländes bei Outer Wood, Daresbury, drei Tage nach dem Festival 2014. Foto: Raymond Knapman, CC BY-SA 2.0.'),
    'Creamfields Brasil 2013': figure('creamfields-brasil-2013', 1063, 704,
      'Publikum bei Nacht unter einem beleuchteten Bühnendach bei Creamfields Brasil 2013',
      'Creamfields Brasil im Januar 2013, seine dritte Ausgabe, in Jurerê Internacional in Florianópolis. Der Name ist in mehr als zwanzig Länder gereist. Foto: Gerardo Lazzari, CC BY 2.0.'),
    'Cream buildings in Wolstenholme Square': figure('cream-wolstenholme-square-2011', 640, 480,
      'Die schwarz gestrichenen Gebäude des Clubs Cream am Wolstenholme Square in Liverpool, mit einem Cream-Schild über einem verschlossenen Tor',
      'Die Gebäude von Cream am Wolstenholme Square in Liverpool 2011, wo die wöchentliche House-Nacht lief, aus der Creamfields entstand. Der Block wurde 2016 abgerissen. Foto: John S Turner, CC BY-SA 2.0.',
      'archive-image'),
    'Creamfields Steel Yard structure': figure('steel-yard-2017', 1200, 801,
      'Das leere Innere des Steel Yard, eine lange, orange beleuchtete Stahlkonstruktion mit Bögen, vor einer Show',
      'Der Steel Yard, leer vor einer Show im November 2017. Die Konstruktion für 15.000 Menschen wurde zu einem Festival für sich. Foto: OfficialCreamPress, CC BY-SA 4.0.'),
    'LilRockit at Cream': figure('cream-liverpool-2015', 1200, 801,
      'Ein DJ von hinten am Pult im Cream in Liverpool, vor einer vollen Tanzfläche unter Luftballons',
      'LilRockit legt im Dezember 2015 im Cream in Liverpool auf, Monate bevor das Gebäude abgerissen wurde. Foto: Leighroy4, CC BY-SA 4.0.'),
    'fVKywXvEl9g': articleYoutubeEmbed({
      src: 'https://www.youtube-nocookie.com/embed/fVKywXvEl9g',
      title: 'Creamfields 2019 After Series, Bass, Drum and Bass, auf dem YouTube-Kanal Creamfields Official Page'
    }),
    'BvXj6mCK0X4': articleVideoCollection({
      lang,
      label: 'Creamfields, damals und heute',
      description: 'Ewan McVicar im Steel Yard 2023, das meistgesehene seiner Creamfields-Sets, auf seinem eigenen Kanal, und Pete Tong 2025, vom Kanal des Festivals, der 1998 auf dem ersten Creamfields-Programm stand.',
      items: [
        articleVideoCard({youtubeId: 'BvXj6mCK0X4', genre: 'Steel Yard, 2023', artist: 'Ewan McVicar', title: 'Steel Yard, Creamfields North 2023'}),
        articleVideoCard({youtubeId: 'UBqb6F7Jlho', genre: 'Creamfields, 2025', artist: 'Pete Tong', title: 'DJ-Set, Creamfields 2025'})
      ]
    }),
    // The published figures of each year, qualified in the text, as on the
    // English page. Typed, not computed.
    'Tabelle: Besucherzahlen': articleTable({
      headers: ['Jahr', 'Wo', 'Tage', 'Veröffentlichte Besucherzahl'],
      rows: [
        ['1998', 'Winchester', '1', '25.000'],
        ['1999 bis 2005', 'Alter Flughafen Liverpool, Speke', '1', '50.000'],
        ['2006 und 2007', 'Daresbury', '1', '50.000'],
        ['2008', 'Daresbury', '2', '50.000'],
        ['2009', 'Daresbury', '2', '60.000, erstmals ausverkauft'],
        ['2010', 'Daresbury', '2', '80.000'],
        ['2011', 'Daresbury', '2', '100.000'],
        ['2012', 'Daresbury', '3', '100.000, letzter Tag überflutet'],
        ['2013 bis 2015', 'Daresbury', '3', '150.000'],
        ['2016', 'Daresbury', '4', '200.000'],
        ['2017 bis 2019', 'Daresbury', '4', '280.000'],
        ['2020', 'keiner', '0', 'Wegen der Pandemie abgesagt'],
        ['2026', 'Daresbury', '4', '80.000 Menschen; rund 55.000 campten']
      ].map(row => row.map(escapeHtml))
    })
  }),

  // The English page's sources, URL for URL, with translated labels.
  sources: [
    {href: 'https://en.wikipedia.org/wiki/Creamfields', label: 'Wikipedia: Creamfields (englisch)'},
    {href: 'https://en.wikipedia.org/wiki/Cream_(nightclub)', label: 'Wikipedia: Cream (Nachtclub, englisch)'},
    {href: 'https://en.wikipedia.org/wiki/Daresbury', label: 'Wikipedia: Daresbury'},
    {href: 'https://creamfields.com/history/', label: 'Creamfields: die Geschichte von Creamfields UK'},
    {href: 'https://creamfields.com/history/2025-new-era/', label: 'Creamfields: Creamfields 2025, A New Era of the Fields'},
    {href: 'https://creamfields.com/info/where-is-the-festival/', label: 'Creamfields: Wo ist das Festival?'},
    {href: 'https://creamfields.com/info/car/', label: 'Creamfields: Anreise mit dem Auto'},
    {href: 'https://creamfields.com/info/what-age-do-you-need-to-be-to-attend/', label: 'Creamfields: Mindestalter'},
    {href: 'https://creamfields.com/welcome/', label: 'Creamfields: Welcome to Creamfields 2027'},
    {href: 'https://creamfields.com/tickets/', label: 'Creamfields: aktuelle Tickets und Preise'},
    {href: 'https://www.cheshire.police.uk/news/cheshire/news/articles/2026/9/constabulary-supports-successful-creamfields-operation/', label: 'Polizei Cheshire: Besucher und Camping bei Creamfields 2026'},
    {href: 'https://investors.livenationentertainment.com/sec-filings/annual-reports/content/0001193125-13-077102/d466140d10k.htm', label: 'Live Nation Entertainment: Form 10-K für 2012'},
    {href: 'https://find-and-update.company-information.service.gov.uk/company/03110532/persons-with-significant-control', label: 'Companies House: Kontrolle über die Cream Global Ltd'},
    {href: 'https://find-and-update.company-information.service.gov.uk/company/06704345/persons-with-significant-control', label: 'Companies House: Kontrolle über die Ticketmaster Europe Holdco'},
    {href: 'https://www.nme.com/news/music/various-artists-2616-1250661', label: 'NME: Creamfields endet nach schweren Überflutungen vorzeitig'},
    {href: 'https://www.aol.co.uk/articles/creamfields-2026-chaos-stages-shut-081530000.html', label: 'Mirror über AOL: Bühnen bei Creamfields 2026 wegen Unwettern geschlossen'},
    {href: 'https://electronicgroove.com/creamfields-marks-20-years-at-daresbury-with-2026-line-up/', label: 'Electronic Groove: Creamfields feiert 20 Jahre in Daresbury mit dem Programm 2026'},
    {href: 'https://www.skiddle.com/news/all/All-you-need-to-know-about-Creamfields-2026/60796/', label: 'Skiddle: alles Wissenswerte zu Creamfields 2026'},
    {href: 'https://discover.ticketmaster.co.uk/festivals/creamfields-2025-line-up-deep-dive-64595/', label: 'Ticketmaster Discover: das Programm von Creamfields 2025 im Detail'},
    {href: 'https://discover.ticketmaster.co.uk/festivals/creamfields-delivers-two-new-stages-and-an-all-star-line-up-for-2025-66551/', label: 'Ticketmaster Discover: zwei neue Bühnen bei Creamfields 2025'},
    {href: 'https://www.skiddle.com/news/all/The-Best-DJ-Sets-of-All-Time/57700/', label: 'Skiddle: die besten DJ-Sets aller Zeiten'}
  ],

  bandcamp: {
    description: 'Creamfields hat neben House und Techno Platz für Drum and Bass gemacht, und meine eigene Musik kommt aus derselben Linie aus Breaks und Bass. Wer einen Track kauft, unterstützt meine Arbeit direkt.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks von thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 von thecatrave'}
    ]
  }
};
