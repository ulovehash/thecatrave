// German Tomorrowland guide. Structure and facts come from the English page
// (tomorrowland-draft.md, tomorrowland-research.md); only the language and the
// keyword targets are new.
//
// German keywords, measured 2026-09-17 with keywords-explorer-matching-terms,
// country de (keywords/de-tomorrowland.json): tomorrowland 35,000 a month,
// tomorrowland 2026 50,000, tomorrowland winter 1,800, tomorrowland 2027 1,600,
// wann ist tomorrowland 2026 1,200, tomorrowland thailand 1,000, tomorrowland
// tickets preise 800, wo ist tomorrowland 700, tomorrowland besucher 700,
// tomorrowland belgien 700, tomorrowland mainstage 700, tomorrowland
// besucherzahlen 400.
//
// Ticket and line-up queries are large and deliberately unanswered here, as in
// the English guide: this page is for readers deciding what the festival is,
// not a ticket shop.
//
// The images are the English guide's, in img/tomorrowland/, with translated
// captions. Same festival, same evidence; see home-articles.mjs for why a
// translation may reuse them.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, articleYoutubeEmbed
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption, className = 'wide-archive-image') => articleFigure({
  src: `img/tomorrowland/${name}-${width}.webp`,
  srcset: `img/tomorrowland/${name}-320.webp 320w, img/tomorrowland/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className
});

export default {
  lang: 'de',
  name: 'de-tomorrowland',
  file: 'de/tomorrowland-festival.html',
  draft: 'de/tomorrowland-draft.md',
  canonical: 'https://thecatrave.com/de/tomorrowland-festival',
  englishPath: '/tomorrowland-festival',
  ogImage: 'https://thecatrave.com/img/og/tomorrowland.jpg',
  bodyClass: 'article-page tomorrowland-page',

  title: 'Tomorrowland 2027: Ort, Besucherzahlen, Geschichte und Musik',
  description: 'Tomorrowland ist ein Festival für elektronische Musik in Boom, Belgien. Wo es stattfindet, wie viele Besucher kommen, wem es gehört und welche Musik läuft.',
  datePublished: '2026-09-17',
  dateModified: '2026-09-17',
  dateLabel: '17. September 2026',

  heroKicker: 'Tomorrowland',
  heroTitle: 'Tomorrowland Festival',
  deck: 'Ein Festival in einem belgischen Park, das die Welt vor allem durch einen Bildschirm kennt. Wo es stattfindet, wie groß es wirklich ist, wem es gehört und was abseits der Mainstage läuft.',
  answerLabel: 'Was ist Tomorrowland',
  breadcrumbName: 'Tomorrowland Festival',

  answerSection: 'Antwort',
  introSection: 'Einleitung',
  introTitle: 'Das Festival, das die meisten nur sehen.',
  faqSection: 'FAQ',
  faqLabel: 'Häufige Fragen',
  faqTitle: 'Häufige Fragen zu Tomorrowland.',
  ownSetAfter: 'history',

  sections: [
    {id: 'where', heading: 'Wo Tomorrowland stattfindet', title: 'Wo Tomorrowland stattfindet.', subsections: ['winter', 'thailand', 'brasil', 'usa', 'tomorrowland-2027']},
    {id: 'how-big', heading: 'Wie groß Tomorrowland ist: Besucherzahlen und Tickets', title: 'Wie groß Tomorrowland ist: Besucherzahlen und Tickets.'},
    {id: 'history', heading: 'Eine kurze Geschichte, und wem Tomorrowland gehört', title: 'Eine kurze Geschichte, und wem Tomorrowland gehört.'},
    {id: 'famous', heading: 'Warum Tomorrowland so berühmt wurde', title: 'Warum Tomorrowland so berühmt wurde.'},
    {id: 'music', heading: 'Welche Musik wirklich läuft', title: 'Welche Musik wirklich läuft.', kicker: 'Die Musik'},
    {id: 'from-home', heading: 'Tomorrowland von zu Hause hören', title: 'Tomorrowland von zu Hause hören.'}
  ],

  media: () => ({
    'Retreat to Dreamville': figure('dreamville-2014', 1200, 795,
      'Zelte und Festivalbesucher in DreamVille, dem Campingplatz von Tomorrowland, im Jahr 2014',
      'DreamVille, der Campingplatz von Tomorrowland, im Jahr 2014. Die Pakete werden zusammen mit dem Festivalticket verkauft. Foto: sergejf, CC BY 2.0.'),
    'Main Stage 2008': figure('mainstage-2008', 1024, 768,
      'Die Mainstage von Tomorrowland im Jahr 2008, eine bescheidene Bühne bei Tageslicht mit Publikum davor',
      'Die Mainstage im Jahr 2008, drei Jahre nach dem Start und lange bevor sie zu der Bühne wurde, die man aus dem Livestream kennt. Foto: TheWorldIsMine, CC BY-SA 2.0.'),
    '2014 Main Stage': figure('mainstage-2014', 1200, 708,
      'Die Tomorrowland-Mainstage 2014, eine riesige thematisch gestaltete Bühne über dem Publikum',
      'Die Mainstage im Jahr 2014, der zehnten Ausgabe. Foto: sergejf, CC BY 2.0.'),
    'Brussels Airport': figure('brussels-airport-2013', 1200, 795,
      'Die Ankunftshalle des Flughafens Brüssel, 2013 für die Besucher von Tomorrowland geschmückt',
      'Der Flughafen Brüssel, 2013 für die Ankunft der Tomorrowland-Gäste geschmückt. Die Global-Journey-Pakete bringen die Besucher mit Brussels Airlines ins Land. Foto: Brussels Airport, CC BY-SA 2.0.'),
    'Carl Cox': figure('carl-cox-2008', 1024, 768,
      'Carl Cox legt 2008 bei Tomorrowland auf',
      'Carl Cox bei Tomorrowland im Jahr 2008. Techno hat auf dem Festival seit den frühen Jahren eine eigene Bühne. Foto: TheWorldIsMine, CC BY-SA 2.0.'),
    'WdWnCTkqIRs': articleYoutubeEmbed({
      src: 'https://www.youtube-nocookie.com/embed/WdWnCTkqIRs',
      title: 'Dimitri Vegas & Like Mike, Live At Tomorrowland 2025 Mainstage, auf dem YouTube-Kanal von Dimitri Vegas & Like Mike'
    }),
    'ZG1AT6tylA4': articleVideoCollection({
      lang: 'de',
      label: 'Die meistgesehenen Sets von Tomorrowland',
      description: 'Zwei Mainstage-Sets: Hardwell 2013, mehr als 28 Millionen Aufrufe auf seinem eigenen Kanal, und Swedish House Mafia 2025, vom Kanal des Festivals.',
      items: [
        articleVideoCard({youtubeId: 'ZG1AT6tylA4', genre: 'Mainstage, 2013', artist: 'Hardwell', title: 'Live bei Tomorrowland 2013'}),
        articleVideoCard({youtubeId: 'H1b8hXkGyTo', genre: 'Mainstage, 2025', artist: 'Swedish House Mafia', title: 'Tomorrowland 2025, Mainstage'})
      ]
    }),
    'Tabelle: Besucherzahlen': articleTable({
      headers: ['Jahr', 'Besucher', 'Was geschah'],
      rows: [
        ['2005', 'Rund 10.000', 'Erste Ausgabe, 14. August'],
        ['2010', '180.000', ''],
        ['2017 bis 2019', '400.000', 'Zwei Wochenenden'],
        ['2020 und 2021', 'keine', 'Wegen der Pandemie abgesagt'],
        ['2022', '600.000', 'Drei Wochenenden, der Rekord'],
        ['2023 und 2024', '400.000', ''],
        ['2026', '400.000', 'Besucher aus mehr als 200 Ländern']
      ].map(row => row.map(escapeHtml))
    })
  }),

  sources: [
    {href: 'https://belgium.tomorrowland.com/en/welcome/down-memory-lane/', label: 'Tomorrowland Belgium: Down Memory Lane'},
    {href: 'https://winter.tomorrowland.com/en/welcome/down-memory-lane/', label: 'Tomorrowland Winter: Down Memory Lane'},
    {href: 'https://faq.tomorrowland.com/hc/en-us/articles/4402621418132-Where-and-when-will-Tomorrowland-Belgium-2027-take-place', label: 'Tomorrowland Belgium: Wann und wo findet die Ausgabe 2027 statt?'},
    {href: 'https://press.tomorrowland.com/', label: 'Tomorrowland Presseinformationen: Eigentümer und Organisation'},
    {href: 'https://en.wikipedia.org/wiki/Tomorrowland_(festival)', label: 'Wikipedia: Tomorrowland (festival)'},
    {href: 'https://news.pollstar.com/2026/07/29/tomorrowland-breaks-own-livestream-record/', label: 'Pollstar: Tomorrowland Breaks Own Livestream Record'},
    {href: 'https://www.bandwagon.asia/articles/tomorrowland-belgium-2026-wraps-with-400-000-fans-calvin-harris-debut-record-livestreams-festival-report', label: 'Bandwagon: Tomorrowland Belgium 2026 wraps with 400,000 fans'},
    {href: 'https://djmag.com/news/tomorrowland-2025-mainstage-fire-reportedly-caused-ethanol-spill-during-testing', label: 'DJ Mag: Tomorrowland 2025 Mainstage fire reportedly caused by ethanol spill during testing'},
    {href: 'https://www.euronews.com/culture/2025/07/18/belgiums-tomorrowland-festival-opens-after-massive-fire-destroyed-main-stage', label: 'Euronews: Belgium’s Tomorrowland festival opens after massive fire destroyed main stage'},
    {href: 'https://www.revolution935.com/2026/01/24/tomorrowland26/', label: 'Revolution 935: Tomorrowland Belgium 2026 Tickets'},
    {href: 'https://consciouselectronic.com/2026/07/25/tomorrowland-las-vegas-2027-rumor-mill/', label: 'Conscious Electronic: Is Tomorrowland heading to Las Vegas in 2027?'},
    {href: 'https://lasvegasweekly.com/ae/music/2025/aug/28/insomniac-and-tomorrowland-go-b2b-for-unity-sphere/', label: 'Las Vegas Weekly: Insomniac and Tomorrowland go b2b for Unity at Sphere'},
    {href: 'https://www.1001tracklists.com/tracklist/p3duwuk/chase-status-mainstage-tomorrowland-weekend-2-belgium-2026-07-26.html', label: '1001Tracklists: Chase & Status, Mainstage, Tomorrowland Wochenende 2, 2026'},
    {href: 'https://www.1001tracklists.com/tracklist/2rpp1hzt/camo-and-krooked-netsky-and-friends-stage-tomorrowland-weekend-2-belgium-2017-07-28.html', label: '1001Tracklists: Camo & Krooked, Netsky & Friends Stage, Tomorrowland 2017'},
    {href: 'https://weraveyou.com/2019/07/tomorrowland-iconic-sets-ever/', label: 'We Rave You: Tomorrowland, the most iconic sets of all time'}
  ],

  bandcamp: {
    description: 'Der Drum and Bass auf den gehosteten Bühnen von Tomorrowland kommt aus derselben Linie von Breaks und Bass wie meine eigene Musik. Wer einen Track kauft, unterstützt meine Arbeit direkt.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks von thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 von thecatrave'}
    ]
  }
};
