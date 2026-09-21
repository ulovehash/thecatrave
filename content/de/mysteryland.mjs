// German Mysteryland guide. Structure and facts from the English page
// (mysteryland-draft.md, mysteryland-research.md).
//
// German keywords, measured 2026-09-17 (keywords/de-mysteryland.json):
// mysteryland 2,000 a month, mysteryland 2025 300, mysteryland 2026 200,
// mysteryland festival 200, mysteryland 2027 100, mysteryland tickets 50.
//
// The demand is small next to the other German guides, and the 2026 pause is
// most of what a German reader is looking for: the page leads with it.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, articleYoutubeEmbed, ownTrackListening
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption, className = 'wide-archive-image') => articleFigure({
  src: `img/mysteryland/${name}-${width}.webp`,
  srcset: `img/mysteryland/${name}-320.webp 320w, img/mysteryland/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className
});

export default {
  lang: 'de',
  name: 'de-mysteryland',
  file: 'de/mysteryland-festival.html',
  draft: 'de/mysteryland-draft.md',
  canonical: 'https://thecatrave.com/de/mysteryland-festival',
  englishPath: '/mysteryland-festival',
  ogImage: 'https://thecatrave.com/img/og/mysteryland.jpg',
  bodyClass: 'article-page mysteryland-page',

  title: 'Mysteryland 2027: Termine, Gelände, Geschichte und Musik',
  description: 'Mysteryland ist ein Festival für elektronische Musik in Haarlemmermeer. Termine 2027, warum 2026 ausfällt, Gelände, Besucherzahlen und welche Musik läuft.',
  datePublished: '2026-09-17',
  dateModified: '2026-09-17',
  dateLabel: '17. September 2026',

  heroKicker: 'Mysteryland',
  heroTitle: 'Mysteryland Festival',
  deck: 'Ein Rave von 1993, der auf dem früheren Floriade-Gelände in Haarlemmermeer sesshaft wurde. Wann es 2027 zurückkommt, warum 2026 ausfällt, wie groß es ist und was auf seinen Bühnen läuft.',
  answerLabel: 'Was ist Mysteryland',
  breadcrumbName: 'Mysteryland Festival',

  answerSection: 'Antwort',
  introSection: 'Einleitung',
  introTitle: 'Älter als die Musik, die es bucht.',
  faqSection: 'FAQ',
  faqLabel: 'Häufige Fragen',
  faqTitle: 'Häufige Fragen zu Mysteryland.',
  ownSetAfter: 'history',

  sections: [
    {id: 'mysteryland-2027', heading: 'Mysteryland 2027, und warum 2026 ausfällt', title: 'Mysteryland 2027, und warum 2026 ausfällt.'},
    {id: 'where', heading: 'Wo Mysteryland stattfindet', title: 'Wo Mysteryland stattfindet.'},
    {id: 'how-big', heading: 'Wie groß Mysteryland ist', title: 'Wie groß Mysteryland ist.'},
    {id: 'history', heading: 'Eine kurze Geschichte, und wem Mysteryland gehört', title: 'Eine kurze Geschichte, und wem Mysteryland gehört.', subsections: ['usa-chile']},
    {id: 'famous', heading: 'Warum Mysteryland berühmt ist', title: 'Warum Mysteryland berühmt ist.'},
    {id: 'music', heading: 'Welche Musik wirklich läuft', title: 'Welche Musik wirklich läuft.', kicker: 'Die Musik'},
    {id: 'from-home', heading: 'Mysteryland von zu Hause hören', title: 'Mysteryland von zu Hause hören.'}
  ],

  media: ({lang}) => ({
    // The owner's own music inside the text (owner, 2026-09-21: Berlin Race
    // 1909 on the German pages, Dégénération on the French, and art deco with
    // late summer cloud dance in the drum and bass guides).
    'thecatrave berlin-race-1909': ownTrackListening('berlin-race-1909', 'Nicht das, was auf den großen Bühnen läuft: gebrochene Beats im Hall des Dub-Techno. Mein eigener Track, benannt nach Berlin.', lang),
    'Main stage by the lake': figure('site-aerial-2018', 1200, 675,
      'Mysteryland 2018 aus der Luft: eine riesige geschmückte Hauptbühne am Ufer eines Sees, davor dichtes Publikum, ringsum Wald, Zelte und Wege',
      'Die Hauptbühne am See auf dem früheren Floriade-Gelände, aus der Luft, bei Mysteryland 2018. Foto: Niels de Vries, CC BY-SA 4.0.'),
    'View from the pyramid': figure('floriade-pano-2007', 1200, 397,
      'Ein weites Panorama über grünes Festivalgelände mit einem großen roten Zirkuszelt, Menschen auf den Wegen, Teichen und einer Baumreihe dahinter',
      'Mysteryland im Jahr 2007, gesehen von der Spitze der Graspyramide auf dem Floriade-Gelände.'),
    'Cocoon area': figure('cocoon-2019', 1200, 900,
      'Eine Bühne unter hohen Bäumen, gerahmt von drei riesigen geflochtenen Ringen, davor Menschen, die in der Sonne auf einem Holzboden tanzen',
      'Das Cocoon-Areal von Sven Väth zwischen den Bäumen bei Mysteryland 2019, siebzehn Jahre nach dem ersten eigenen Areal auf dem Festival. Foto: Gerard Koymans, CC BY-SA 4.0.'),
    'Hardwell at Mysteryland 2014': figure('hardwell-2014', 1200, 500,
      'Hardwell an den Decks mit beiden Armen in der Luft, hinter ihm Flammen und dahinter das nächtliche Publikum',
      'Hardwell bei Mysteryland im August 2014. 2023 stand er wieder auf der Hauptbühne. Foto: Nicoalsemgeest.com, CC BY 2.0.'),
    'Q-dance stage': figure('q-dance-2019', 1200, 900,
      'Die Q-dance-Bühne bei Mysteryland 2019, ein geflügelter Aufbau mit einem Totenkopf in der Mitte, gesehen von einem dicht besetzten Grashang',
      'Die Hardstyle-Bühne von Q-dance bei Mysteryland 2019, mit dem Publikum auf dem Hang darüber. Foto: Gerard Koymans, CC BY-SA 4.0.'),
    'z4cO-cpjPoU': articleYoutubeEmbed({
      src: 'https://www.youtube-nocookie.com/embed/z4cO-cpjPoU',
      title: 'Mysteryland 2025, Sunday Drone Endshow, auf dem YouTube-Kanal von Mysteryland'
    }),
    '_8acHa-APa8': articleVideoCollection({
      lang: 'de',
      label: 'Dieselbe Hauptbühne, ein Jahr später',
      description: 'Hardwell 2023 auf der Hauptbühne von Mysteryland und Charlotte de Witte 2024 auf derselben Bühne, die beiden meistgesehenen Sets unter den jüngeren Uploads des Festivals.',
      items: [
        articleVideoCard({youtubeId: '_8acHa-APa8', genre: 'Main Stage, 2023', artist: 'Hardwell', title: 'Main Stage, Mysteryland 2023'}),
        articleVideoCard({youtubeId: 'mao2oVsWSxA', genre: 'Mainstage, 2024', artist: 'Charlotte de Witte', title: 'Mainstage, Mysteryland 2024'})
      ]
    }),
    'Tabelle: Geschichte': articleTable({
      headers: ['Jahr', 'Ort', 'Besucher'],
      rows: [
        ['1993', 'Midland Circuit, Lelystad', 'nicht veröffentlicht'],
        ['1994', 'Maasvlakte, Rotterdam', 'nicht veröffentlicht'],
        ['1995', 'kein Festival', ''],
        ['1996', 'Flugplatz Eindhoven', '25.000'],
        ['1997', 'Bussloo', '25.000'],
        ['1998', 'Lingebos', '25.000'],
        ['1999 und 2000', 'Bussloo', '35.000'],
        ['2001', 'Six Flags Holland', 'nicht veröffentlicht'],
        ['2002', 'Ruigoord, Amsterdam', '20.000'],
        ['2003', 'Floriade-Gelände, Haarlemmermeer', '40.000'],
        ['2004 und 2005', 'Floriade-Gelände', 'mehr als 100.000 in beiden Jahren zusammen'],
        ['2007 bis 2009', 'Floriade-Gelände', 'mehr als 60.000 pro Jahr'],
        ['2013', 'Floriade-Gelände', '60.000, ausverkauft'],
        ['2019', 'Floriade-Gelände', 'mehr als 100.000 über das Wochenende'],
        ['2020 und 2021', 'keines', 'wegen der Pandemie abgesagt'],
        ['2025', 'Floriade-Gelände', 'letzte Ausgabe in der bisherigen Form'],
        ['2026', 'keines', 'pausiert'],
        ['2027', 'Haarlemmermeer', 'datiert auf den 27. bis 29. August']
      ].map(row => row.map(escapeHtml))
    })
  }),

  // The English page's sources, URL for URL, with translated labels.
  sources: [
    {href: 'https://nl.wikipedia.org/wiki/Mysteryland', label: 'Wikipedia: Mysteryland (niederländisch)'},
    {href: 'https://en.wikipedia.org/wiki/Mysteryland', label: 'Wikipedia: Mysteryland (englisch)'},
    {href: 'https://en.wikipedia.org/wiki/ID%26T', label: 'Wikipedia: ID&T'},
    {href: 'https://www.mysteryland.nl/this-is-mysteryland', label: 'Mysteryland: 32 Jahre und weiter'},
    {href: 'https://www.mysteryland.nl/info', label: 'Mysteryland: FAQ (Termine 2027, Ort, Mindestalter)'},
    {href: 'https://the-media-nanny_5.prowly.com/415471-mysteryland-celebrates-final-edition-in-its-current-iconic-form-next-month-set-to-return-in-2027-with-a-new-concept', label: 'Mysteryland, Pressemitteilung: letzte Ausgabe in der bisherigen Form, Rückkehr 2027 mit neuem Konzept'},
    {href: 'https://www.digitalmusicnews.com/2025/07/24/mysteryland-announces-break-for-2026-will-return-in-2027/', label: 'Digital Music News: Mysteryland pausiert 2026 und kehrt 2027 zurück'},
    {href: 'https://www.festivalinsights.com/2025/08/mysteryland-announces-return-in-2027-after-creative-break/', label: 'Festival Insights: Rückkehr 2027 nach kreativer Pause'},
    {href: 'https://visithaarlemmermeer.nl/en/zien-doen/festival-events/mysteryland', label: 'Visit Haarlemmermeer: Mysteryland, größtes Dance-Festival der Niederlande'},
    {href: 'https://www.spin.com/2013/08/mysteryland-festival-woodstock-site-us-original/', label: 'Spin: Mysteryland auf dem Gelände von Woodstock'},
    {href: 'https://www.billboard.com/music/music-news/mysteryland-usa-2017-canceled-lcd-soundsystem-geazy-major-lazer-woodstock-7760507/', label: 'Billboard: Mysteryland USA 2017 abgesagt'},
    {href: 'https://www.youtube.com/@mysteryland', label: 'Mysteryland auf YouTube'}
  ],

  bandcamp: {
    description: 'Wenn dieser Guide nützlich war: Meine eigene Musik liegt auf Bandcamp. Wer einen Track kauft, unterstützt meine Arbeit direkt.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks von thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 von thecatrave'}
    ]
  }
};
