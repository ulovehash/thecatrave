// German Ultra guide. Structure and facts from the English page
// (ultra-draft.md, ultra-research.md, build-ultra-article.mjs).
//
// German keywords (keywords/de-ultra.json): ultra music festival 400 a month
// in Germany (TRANSLATION-RESEARCH.md, stage 1). The wording was checked in the
// live google.de results on 2026-09-23, no Ahrefs units spent: "Weitere
// Fragen" asks "Was ist Ultra Miami?", "Wann ist Ultra Miami?" and "Wo findet
// Ultra Europe statt?", and Bing's related searches add "ultra festival
// kroatien". Lineups, dated editions and tickets as a purchase stay rejected,
// as on the English page.
//
// The images are the English guide's, in img/ultra/, with translated captions;
// see home-articles.mjs for why a translation may reuse them.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, articleYoutubeEmbed, ownTrackListening
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption, className = 'wide-archive-image') => articleFigure({
  src: `img/ultra/${name}-${width}.webp`,
  srcset: `img/ultra/${name}-320.webp 320w, img/ultra/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className
});

export default {
  lang: 'de',
  name: 'de-ultra',
  file: 'de/ultra-music-festival.html',
  draft: 'de/ultra-draft.md',
  canonical: 'https://thecatrave.com/de/ultra-music-festival',
  englishPath: '/ultra-music-festival',
  ogImage: 'https://thecatrave.com/img/og/ultra.jpg',
  bodyClass: 'article-page ultra-page',

  title: 'Ultra Music Festival 2027: Miami, Termine, Ort und Musik',
  description: 'Das Ultra Music Festival 2027 läuft vom 26. bis 28. März im Bayfront Park in Miami: Ort, Altersgrenze, Ultra Europe und die Musik jenseits der Main Stage.',
  datePublished: '2026-09-23',
  dateModified: '2026-09-23',
  dateLabel: '23. September 2026',

  heroKicker: 'Ultra Music Festival',
  heroTitle: 'Ultra Music Festival Miami',
  deck: 'Ultra kehrt vom 26. bis 28. März 2027 in den Bayfront Park zurück, am Ende der Miami Music Week. Wo es stattfindet, wer hinein darf und was abseits der Main Stage läuft.',
  answerLabel: 'Was ist das Ultra Music Festival',
  breadcrumbName: 'Ultra Music Festival',

  answerSection: 'Antwort',
  introSection: 'Einleitung',
  introTitle: 'Das Festival, das die Miami Music Week abschließt.',
  faqSection: 'FAQ',
  faqLabel: 'Häufige Fragen',
  faqTitle: 'Häufige Fragen zum Ultra Music Festival.',
  ownSetAfter: 'history',

  sections: [
    {id: 'where', heading: 'Wo das Ultra Music Festival stattfindet', title: 'Wo das Ultra Music Festival stattfindet.', subsections: ['ultra-2027']},
    {id: 'how-big', heading: 'Wie groß Ultra ist', title: 'Wie groß Ultra ist.'},
    {id: 'history', heading: 'Eine kurze Geschichte, und wem Ultra gehört', title: 'Eine kurze Geschichte, und wem Ultra gehört.'},
    {id: 'worldwide', heading: 'Ultra in aller Welt', title: 'Ultra in aller Welt.'},
    {id: 'ultra-europe', heading: 'Ultra Europe in Split, Kroatien', title: 'Ultra Europe in Split, Kroatien.'},
    {id: 'famous', heading: 'Warum Ultra so berühmt wurde', title: 'Warum Ultra so berühmt wurde.'},
    {id: 'music', heading: 'Welche Musik wirklich läuft', title: 'Welche Musik wirklich läuft.', kicker: 'Die Musik'},
    {id: 'from-home', heading: 'Ultra von zu Hause hören', title: 'Ultra von zu Hause hören.'}
  ],

  media: ({lang}) => ({
    // The owner's own music inside the text, as on every German festival guide
    // (owner, 2026-09-21: Berlin Race 1909 on the German pages).
    'thecatrave berlin-race-1909': ownTrackListening('berlin-race-1909', 'Nicht das, was auf den großen Bühnen läuft: gebrochene Beats im Hall des Dub-Techno. Mein eigener Track, benannt nach Berlin.', lang),
    'Bayfront Park, 2014': figure('bayfront-2014', 1200, 900,
      'Der Bayfront Park in Downtown Miami von oben während Ultra 2014, die Main Stage und Zelte neben dem Jachthafen und der Biscayne Bay',
      'Der Bayfront Park von oben während des Festivals 2014, die Main Stage neben dem Jachthafen an der Biscayne Bay. Foto: Pietro, CC BY-SA 3.0.'),
    'Panoramic View of Bayfront Park': figure('bayfront-2013', 1200, 795,
      'Ein Fischaugen-Panorama des Bayfront Park, aufgebaut für Ultra 2013, mit Bühnen und Zelten zwischen der Skyline von Miami und der Bucht',
      'Der Bayfront Park am Donnerstag vor dem zweiten Wochenende 2013, dem einzigen Jahr, in dem Ultra an zwei Wochenenden lief. Foto: Robert Giordano, CC BY-SA 3.0.'),
    'Ultra Music Festival 20110326': figure('bicentennial-2011', 1200, 666,
      'Luftaufnahme von Ultra im Bicentennial Park 2011, dichtes Publikum vor der Main Stage, dahinter die Hochhäuser von Downtown Miami',
      'Ultra im Bicentennial Park 2011, sein erstes Jahr mit drei Tagen und sein letztes vor der Rückkehr in den Bayfront Park. Foto: Averette, CC BY 3.0.'),
    'Split, Ultra Europe 2015': figure('poljud-2015', 1200, 900,
      'Publikum bei Tag auf dem Rasen des Poljud-Stadions in Split während Ultra Europe 2015, unter dem geschwungenen Stadiondach',
      'Das Publikum der Main Stage auf dem Rasen des Poljud-Stadions in Split während Ultra Europe 2015. Foto: Shadster, CC BY-SA 4.0.'),
    'Swedish House Mafia on Platform': figure('swedish-house-mafia-2018', 1200, 1008,
      'Swedish House Mafia als Silhouetten auf einer erhöhten Plattform in blauem Licht und Nebel über dem Publikum bei Ultra Miami 2018',
      'Swedish House Mafia auf ihrer Plattform bei Ultra 2018, beim Abschluss des Festivals, ihrem ersten gemeinsamen Liveauftritt seit 2013. Foto: HollywoodAdam78, CC BY-SA 4.0.'),
    'EYMJizj3Qq8': articleYoutubeEmbed({
      src: 'https://www.youtube-nocookie.com/embed/EYMJizj3Qq8',
      title: 'Pendulum / Knife Party, Headline-Set bei Ultra 2016, auf Pendulums eigenem YouTube-Kanal'
    }),
    'V2VmcuOEqEg': articleVideoCollection({
      lang,
      label: 'Ultra, die meistgesehenen Sets',
      description: 'Zwei Sets von der Main Stage: Skrillex 2015, mehr als 94 Millionen Aufrufe auf seinem eigenen Kanal, und Hardwell 2013, mehr als 35 Millionen auf seinem.',
      items: [
        articleVideoCard({youtubeId: 'V2VmcuOEqEg', genre: 'Main Stage, 2015', artist: 'Skrillex', title: 'Live beim Ultra Music Festival 2015'}),
        articleVideoCard({youtubeId: 'jXOgYxUf6Ts', genre: 'Main Stage, 2013', artist: 'Hardwell', title: 'Live beim Ultra Music Festival 2013'})
      ]
    }),
    // Summed admissions across each multi-day edition, not unique visitors or
    // ticket counts, as on the English page. Typed, not computed.
    'Tabelle: Besucherzahlen': articleTable({
      headers: ['Jahr', 'Besucher', 'Wo, und was geschah'],
      rows: [
        ['1999', 'rund 10.000', 'Collins Park, Miami Beach: ein Tag am Strand'],
        ['2001', '21.000', 'Erstes Jahr im Bayfront Park'],
        ['2006', '48.000', 'Erstes Jahr im Bicentennial Park'],
        ['2010', 'mehr als 100.000 (Angabe von Ultra)', 'Erstmals ausverkauft, zwei Tage; die Tabelle der Wikipedia nennt 93.000'],
        ['2011', '100.000', 'Erste Ausgabe mit drei Tagen'],
        ['2013', '330.000', 'Zwei Wochenenden, das fünfzehnjährige Jubiläum'],
        ['2014 bis 2018', '165.000 Eintritte', 'Bayfront Park, über drei Tage zusammengezählt'],
        ['2019', '170.000', 'Virginia Key, das einzige Jahr dort'],
        ['2020 und 2021', 'keine', 'Wegen der Pandemie abgesagt'],
        ['2022 bis 2026', '165.000 Eintritte', 'Über drei Tage zusammengezählt; 2026 Besucher aus 100 Ländern']
      ].map(row => row.map(escapeHtml))
    })
  }),

  // The English page's sources, URL for URL, with translated labels.
  sources: [
    {href: 'https://ultramusicfestival.com/ticketing-terms-and-conditions-2027', label: 'Ultra Music Festival: Ticketbedingungen 2027 (englisch)'},
    {href: 'https://ultramusicfestival.com/', label: 'Ultra Music Festival: offizielle Termine 2027 und aktueller Ticketstand'},
    {href: 'https://search.sunbiz.org/Inquiry/CorporationSearch/SearchResults?InquiryDirectionType=PreviousRecord&InquiryType=EntityName&SearchNameOrder=EVENTENTS+L120000583930', label: 'Handelsregister Florida (Division of Corporations): Event Entertainment Group, Inc.'},
    {href: 'https://law.justia.com/cases/florida/third-district-court-of-appeal/2017/3d16-0338.html', label: 'Berufungsgericht Florida (Third District Court of Appeal): Omes v. Ultra Enterprises, Inc.'},
    {href: 'https://www.miamiherald.com/news/local/community/miami-dade/article315519662.html', label: 'Miami Herald: Miami verlängert Ultras Zeit im Bayfront Park'},
    {href: 'https://djmag.com/news/watch-swedish-house-mafias-set-ultra-miami-2026', label: 'DJ Mag: das Set von Swedish House Mafia bei Ultra Miami 2026'},
    {href: 'https://www.miaminewtimes.com/music/best-ultra-music-festival-performances-of-all-time-22695840/', label: 'Miami New Times: die besten Auftritte in der Geschichte des Ultra Music Festivals'},
    {href: 'https://www.miaminewtimes.com/music/ultra-music-festival-facing-10-million-lawsuit-from-injured-security-guard-erica-mack-6442197', label: 'Miami New Times: Klage über 10 Millionen Dollar der verletzten Sicherheitskraft Erica Mack'},
    {href: 'https://www.electricfeels.com/2026/04/01/ultra-music-festival-closes-out-triumphant-2026-edition-as-miami-dade-county-proclaims-march-28-as-ultra-music-festival-day/', label: 'Electric Feels: Ultra Music Festival beendet die Ausgabe 2026'},
    {href: 'https://ultraeurope.com/worldwide/ultra-europe-concludes-ninth-edition-in-split-croatia-with-attendees-from-140-countries/', label: 'Ultra Europe: neunte Ausgabe in Split mit Besuchern aus mehr als 140 Ländern'},
    {href: 'https://ultraeurope.com/tickets/festival', label: 'Ultra Europe: offizielle Termine und Tickets 2027'},
    {href: 'https://www.croatiaweek.com/ultra-europe-2026-split-calvin-harris/', label: 'Croatia Week: Calvin Harris als Headliner von Ultra Europe 2026 in Split'}
  ],

  bandcamp: {
    description: 'Was ich selbst mache, ist Breakbeat, weit weg vom Bayfront Park. Wer einen Track kauft, unterstützt meine Arbeit direkt.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks von thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 von thecatrave'}
    ]
  }
};
