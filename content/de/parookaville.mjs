// German Parookaville guide. Structure and facts from the English page
// (parookaville-draft.md, parookaville-research.md).
//
// German keywords, measured 2026-09-17 (keywords/de-parookaville.json):
// parookaville 31,000 a month, parookaville 2026 11,000, parookaville 2026
// lineup 1,700, parookaville tickets 1,200, parookaville 2027 1,100,
// parookaville line up 900, parookaville 2027 datum 800, parookaville 2026
// livestream 800, parookaville festival 600, weeze parookaville 400,
// parookaville besucherzahlen 350, parookaville gelände 300.
//
// This is the German festival with the largest German demand of the five, and
// the only one of them in Germany. Line-up and timetable queries are left
// unanswered, as in the English guide: a page that promises a 2027 running
// order it cannot keep is worse than one that does not.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, articleYoutubeEmbed, ownTrackListening
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption, className = 'wide-archive-image') => articleFigure({
  src: `img/parookaville/${name}-${width}.webp`,
  srcset: `img/parookaville/${name}-320.webp 320w, img/parookaville/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className
});

export default {
  lang: 'de',
  name: 'de-parookaville',
  file: 'de/parookaville-festival.html',
  draft: 'de/parookaville-draft.md',
  canonical: 'https://thecatrave.com/de/parookaville-festival',
  englishPath: '/parookaville-festival',
  ogImage: 'https://thecatrave.com/img/og/parookaville.jpg',
  bodyClass: 'article-page parookaville-page',

  title: 'Parookaville 2027: Gelände, Besucherzahlen, Geschichte und Musik',
  description: 'Parookaville ist Deutschlands größtes Festival für elektronische Musik, jeden Juli am Flughafen Weeze. Gelände, Termine, Besucherzahlen und Musik im Überblick.',
  datePublished: '2026-09-17',
  dateModified: '2026-09-17',
  dateLabel: '17. September 2026',

  heroKicker: 'Parookaville',
  heroTitle: 'Parookaville Festival',
  deck: 'Ein Festival als Stadt, drei Tage jeden Juli auf einem alten RAF-Flugplatz bei Weeze, nahe der niederländischen Grenze. Wo es stattfindet, wie groß es ist, wer es betreibt und was abseits der Mainstage läuft.',
  answerLabel: 'Was ist Parookaville',
  breadcrumbName: 'Parookaville Festival',

  answerSection: 'Antwort',
  introSection: 'Einleitung',
  introTitle: 'Ein Festival, inszeniert als Stadt.',
  faqSection: 'FAQ',
  faqLabel: 'Häufige Fragen',
  faqTitle: 'Häufige Fragen zu Parookaville.',
  ownSetAfter: 'history',

  sections: [
    {id: 'where', heading: 'Wo Parookaville stattfindet: Gelände und Anfahrt', title: 'Wo Parookaville stattfindet: Gelände und Anfahrt.', subsections: ['parookaville-2027']},
    {id: 'how-big', heading: 'Wie groß Parookaville ist: Besucherzahlen', title: 'Wie groß Parookaville ist: Besucherzahlen.'},
    {id: 'history', heading: 'Eine kurze Geschichte, und wem Parookaville gehört', title: 'Eine kurze Geschichte, und wem Parookaville gehört.'},
    {id: 'famous', heading: 'Warum Parookaville berühmt ist', title: 'Warum Parookaville berühmt ist.'},
    {id: 'music', heading: 'Welche Musik wirklich läuft', title: 'Welche Musik wirklich läuft.', kicker: 'Die Musik'},
    {id: 'from-home', heading: 'Parookaville von zu Hause hören', title: 'Parookaville von zu Hause hören.'}
  ],

  media: ({lang}) => ({
    // The owner's own music inside the text (owner, 2026-09-21: Berlin Race
    // 1909 on the German pages, Dégénération on the French, and art deco with
    // late summer cloud dance in the drum and bass guides).
    'thecatrave berlin-race-1909': ownTrackListening('berlin-race-1909', 'Nicht das, was auf den großen Bühnen läuft: gebrochene Beats im Hall des Dub-Techno. Mein eigener Track, benannt nach Berlin.', lang),
    'Parookaville stage construction': figure('stage-build-2016', 1200, 752,
      'Eine Bühnenfassade aus nachgebauten Stadthäusern mit Gerüsten und einem rot-weißen Schornstein, davor Kräne und Gabelstapler, auf dem Parookaville-Gelände 2016',
      'Eine Parookaville-Bühne im Aufbau auf dem Flugplatz, Juli 2016, im zweiten Jahr des Festivals: nachgebaute Stadthäuser, ein Schornstein und Gerüste. Foto: Tama66, CC0.'),
    'ParookavilleMainLuftbild22': figure('mainstage-aerial-2022', 1200, 900,
      'Die Parookaville-Mainstage aus der Luft im Jahr 2022, eine rot-goldene Bühne mit dem Publikum davor, dahinter Zelte, Felder und Windräder am Horizont',
      'Die Mainstage von Parookaville aus der Luft, Juli 2022, die erste Ausgabe nach der Pandemie. Die Bühne wird jedes Jahr nach einem neuen Entwurf gebaut. Foto: Timo, CC BY-SA 4.0.'),
    'Parookaville 2017 Regen': figure('rain-2017', 640, 1230,
      'Ein überflutetes Festivalgelände in der Dämmerung, hinter dem Wasser die Buchstaben PAROOKAVILLE und Lichterketten an Masten',
      'Stehendes Wasser vor dem Parookaville-Schriftzug im Jahr 2017, als der Regen Autos auf dem Campinggelände festsetzte. Foto: Ss279, CC BY-SA 4.0.',
      'archive-image'),
    'Townhall Parookaville Festival': figure('town-hall-2024', 1200, 675,
      'Das Rathaus von Parookaville, ein Kuppelbau mit Hörnern auf dem Dach und dem leuchtenden Schriftzug TOWNHALL über Infopoint und Meldeamt',
      'Das Rathaus von Parookaville im Jahr 2024, wo Bürgerinnen und Bürger ihre Festivalpässe stempeln lassen. Foto: Timolius, CC BY-SA 4.0.'),
    'Cloud Factory 2022': figure('cloud-factory-2022', 1200, 900,
      'Dichtes Publikum unter einem Gitterdach, das 2022 im Hangar der Cloud Factory von blauen und weißen Strahlen beleuchtet wird',
      'Die Cloud Factory im Jahr 2022, eine Indoor-Bühne in einem der alten Hangars des Flugplatzes. Foto: Timo, CC BY-SA 4.0.'),
    'DJ Hardwell performing at Parookaville 2024': figure('hardwell-2024', 1200, 800,
      'Hardwell 2024 hinter den Decks bei Parookaville, grün beleuchtet, eine Hand zum Publikum erhoben',
      'Hardwell bei Parookaville im Jahr 2024. Er war 2018 und 2023 Headliner und stand 2025 und 2026 wieder auf dem Line-up. Foto: Rudgrcom, CC BY 4.0.'),
    'QeifZyGcZmY': articleYoutubeEmbed({
      src: 'https://www.youtube-nocookie.com/embed/QeifZyGcZmY',
      title: 'Paul Elstak bei Parookaville 2022, auf dem YouTube-Kanal von PAROOKAVILLE'
    }),
    'lnOjzIlm1_g': articleVideoCollection({
      lang: 'de',
      label: 'Parookaville, die meistgesehenen Sets',
      description: 'W&W im Jahr 2022, das meistgesehene Set auf dem Kanal des Festivals, und Steve Aoki 2025 auf seinem eigenen Kanal, der schon beim ersten Parookaville 2015 auf dem Line-up stand.',
      items: [
        articleVideoCard({youtubeId: 'lnOjzIlm1_g', genre: 'Parookaville, 2022', artist: 'W&W', title: 'DJ-Set, Parookaville 2022'}),
        articleVideoCard({youtubeId: 'rWcNs6LcNpM', genre: 'Parookaville, 2025', artist: 'Steve Aoki', title: 'DJ-Set, Parookaville 2025'})
      ]
    }),
    'Tabelle: Besucherzahlen': articleTable({
      headers: ['Jahr', 'Verkaufte Tickets', 'Eintritte insgesamt'],
      rows: [
        ['2015', '25.000', '40.000'],
        ['2016', '50.000', '80.000'],
        ['2017', '80.000', '180.000'],
        ['2018', '80.000', '180.000'],
        ['2019', '85.000', '210.000'],
        ['2020', 'keine', 'Abgesagt; LIVE from the City, 100 Gäste pro Nacht'],
        ['2021', 'keine', 'Abgesagt'],
        ['2022', '75.000', '225.000'],
        ['2023', '75.000', '225.000'],
        ['2024', '75.000', '225.000']
      ].map(row => row.map(escapeHtml))
    })
  }),

  // The same sources as the English page, URL for URL. Only the labels are
  // translated: a translated guide stands on the evidence the original was
  // checked against, and a new URL here would be a claim nobody verified.
  sources: [
    {href: 'https://en.wikipedia.org/wiki/Parookaville', label: 'Wikipedia: Parookaville (englisch)'},
    {href: 'https://de.wikipedia.org/wiki/Parookaville', label: 'Wikipedia: Parookaville (deutsch)'},
    {href: 'https://en.wikipedia.org/wiki/Weeze_Airport', label: 'Wikipedia: Flughafen Weeze (englisch)'},
    {href: 'https://www.parookaville.com/en/experience/the-city-of-dreams', label: 'Parookaville: The City of Dreams'},
    {href: 'https://www.parookaville.com/de/experience/stages', label: 'Parookaville: Bühnen'},
    {href: 'https://www.parookaville.com/en/tickets', label: 'Parookaville: Tickets für 2027'},
    {href: 'https://www.parookaville.com/en/future-city', label: 'Parookaville: Future City und digitale Tickets'},
    {href: 'https://www.parookaville.com/en/data-privacy/', label: 'Parookaville: Alters- und Identitätskontrolle'},
    {href: 'https://www.parookaville.com/de/impressum', label: 'Parookaville: Impressum'},
    {href: 'https://www.parookaville.com/en/artist/pendulum', label: 'Parookaville: Pendulum'},
    {href: 'https://news.pollstar.com/2019/08/07/superstruct-entertainment-invests-in-german-parookaville-promoter-next-events/', label: 'Pollstar: Superstruct Entertainment invests in German Parookaville promoter Next Events'},
    {href: 'https://media.kkr.com/news-details?news_id=d3c327f2-83d8-449a-b732-49885585be2f&amp;type=1', label: 'KKR: CVC joins KKR in the acquisition of Superstruct Entertainment'},
    {href: 'https://meyersound.com/news/parookaville-2024/', label: 'Meyer Sound: Parookaville 2024'},
    {href: 'https://www1.wdr.de/nrw/niederrhein/kreis-kleve/bilanz-parookaville-festival-2026-weeze-100.html', label: 'WDR: Bilanz zu Parookaville 2026'},
    {href: 'https://news.pollstar.com/2026/07/21/german-fests-lollapalooza-berlin-parookaville-hail-successful-editions-highfield-preps-for-its-last/', label: 'Pollstar: Parookaville 2026 ausverkauft, mehr als 300 Acts'},
    {href: 'https://www.fazemag.de/das-war-parookaville-2017/', label: 'FAZE Magazin: Das war Parookaville 2017'},
    {href: 'https://djmag.com/top100festivals/2026/10/parookaville', label: 'DJ Mag: Top 100 Festivals 2026, Parookaville'},
    {href: 'https://en.wikipedia.org/wiki/Paul_Elstak', label: 'Wikipedia: Paul Elstak'},
    {href: 'https://en.wikipedia.org/wiki/W%26W', label: 'Wikipedia: W&W'}
  ],

  bandcamp: {
    description: 'Parookaville ist weit entfernt von den Breaks und dem Bass, aus denen meine eigene Musik kommt, aber die Buchung von Pendulum brachte 2026 Drum and Bass auf das Line-up. Wer einen Track kauft, unterstützt meine Arbeit direkt.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks von thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 von thecatrave'}
    ]
  }
};
