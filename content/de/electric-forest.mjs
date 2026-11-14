// German Electric Forest guide. Structure and facts from the English page
// (electric-forest-draft.md, build-electric-forest-article.mjs), dated
// 4 October 2026; nothing added that the English page does not say.
//
// German wording: Keyword Planner (Germany, German, 14 November 2026) returned
// "electric forest festival" in the 100-1K bucket and no 2027 variant
// (keywords/de-electric-forest.json). Bing de-DE showed no German-language
// guide; the name stays as it is.
//
// Maintenance: the 2027 dates are not announced. When the English page sets
// them, rewrite the dates section and the status table here, and the
// planner entry in content/festival-planning-data.mjs.
//
// The images are the English page's, in img/electric-forest/, with translated
// captions; the planner is the de entry "electricforest".
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection
} from '../../site-components.mjs';
import {localizedFestivalPlanning} from '../festival-planning-data.mjs';

const fig = (name, alt, caption) => articleFigure({
  src: `img/electric-forest/${name}-1200.webp`,
  srcset: `img/electric-forest/${name}-320.webp 320w, img/electric-forest/${name}-1200.webp 1200w`,
  width: 1200, height: 801, alt, caption, className: 'wide-archive-image'
});

export default {
  lang: 'de',
  name: 'de-electric-forest',
  file: 'de/electric-forest-festival.html',
  draft: 'de/electric-forest-draft.md',
  canonical: 'https://thecatrave.com/de/electric-forest-festival',
  englishPath: '/electric-forest-festival',
  ogImage: 'https://thecatrave.com/img/og/electric-forest.jpg',
  bodyClass: 'article-page electric-forest-page',
  minReadingMinutes: 6,

  title: 'Electric Forest Festival 2027: Tickets, Termine, Camping, Line-up',
  description: 'Electric Forest Festival 2027 in Rothbury, Michigan: was über Termine bekannt ist, wie Tickets und Camping funktionieren, die Anreise und was du einpackst.',
  datePublished: '2026-11-14',
  dateModified: '2026-11-14',
  dateLabel: '14. November 2026',

  heroKicker: 'Festival-Guide 2027',
  heroTitle: 'Electric Forest 2027: Tickets, Termine, Camping und Line-up',
  deck: 'Das Festival in Rothbury, Michigan: was über die Termine 2027 bekannt ist, wie Pässe und Camping funktionieren, wie du hinkommst und was du einpackst.',
  answerLabel: 'Termine für Electric Forest',
  breadcrumbName: 'Electric Forest',

  answerSection: 'Antwort',
  introSection: 'Einleitung',
  introTitle: 'Ein Festival mit praktischen Fragen.',
  faqSection: 'FAQ',
  faqLabel: 'Häufige Fragen zu Electric Forest',
  faqTitle: 'Häufige Fragen zu Electric Forest.',

  sections: [
    {id: 'what-is', heading: 'Was ist das Electric Forest Festival?', title: 'Was ist das Electric Forest Festival?', tocLabel: 'Was ist Electric Forest?'},
    {id: 'tickets', heading: 'Electric Forest Tickets', title: 'Electric Forest Tickets.', tocLabel: 'Tickets',
      subsections: ['ticket-prices']},
    {id: 'electric-forest-2026', heading: 'Electric Forest 2026', title: 'Electric Forest 2026.'},
    {id: 'dates', heading: 'Termine für Electric Forest 2027', title: 'Termine für Electric Forest 2027.', tocLabel: 'Termine 2027'},
    {id: 'lineup', heading: 'Electric Forest Line-up', title: 'Electric Forest Line-up.', tocLabel: 'Line-up'},
    {id: 'where', heading: 'Wo findet Electric Forest statt? Rothbury, Michigan', title: 'Wo findet Electric Forest statt? Rothbury, Michigan.', tocLabel: 'Wo es stattfindet',
      subsections: ['sherwood-forest', 'camping', 'shuttle', 'hotel', 'packing-list']},
    {id: 'planning', heading: 'Reise zu Electric Forest 2027 planen', title: 'Plane deine Reise zu Electric Forest.', tocLabel: 'Reise und Planung', planning: localizedFestivalPlanning('electricforest', 'de')}
  ],

  media: ({lang}) => ({
    'Tabelle: add-ons': articleTable({label: 'Zusatzprodukte für Electric Forest 2026',
      headers: ['Zusatzprodukt', 'Angabe 2026'],
      rows: [
        ['Uplift Lounge', '150 US-Dollar'],
        ['Anreise am Mittwoch, General Admission', '50 US-Dollar pro Stellplatz, Einlass ab 0:01 Uhr Ostküstenzeit am Mittwoch, 24. Juni 2026'],
        ['Camp Kits', 'Ab 279 US-Dollar für eine oder zwei Personen'],
        ['Schließfächer und Shuttles', 'Als Zusatzprodukte verkauft']
      ]}),
    'Tabelle: arrival': articleTable({label: 'Anreise bei Electric Forest 2026 nach Campingart',
      headers: ['Campingart', 'Anreise 2026'],
      rows: [
        ['General Admission', 'Donnerstag, 0:01 Uhr'],
        ['Gruppencamping, Wohnmobil General Admission, Preferred Car Camping, Lake RV', 'Mittwoch, 0:01 Uhr'],
        ['Good Life Zeltcamping', 'Mittwoch, 8 Uhr'],
        ['Back 40', 'Mittwoch, 10 Uhr'],
        ['Hotel-Check-in', '15 Uhr']
      ]}),
    'Tabelle: status': articleTable({label: 'Electric Forest 2027: Stand der Ankündigungen',
      headers: ['Punkt für 2027', 'Stand'],
      rows: [
        ['Termine', 'Nicht angekündigt'],
        ['Tickets', 'Nicht im Verkauf, keine Ticketseite'],
        ['Line-up', 'Nicht angekündigt'],
        ['Preise', 'Nicht angekündigt']
      ]}),
    entrance: fig('entrance-2018',
      'Der hölzerne Eingangsbogen von Electric Forest mit einer Menge Festivalbesucher davor',
      'Der Eingang zu Electric Forest, 1. Juli 2018. Foto: FifthLegend, CC BY 2.0.'),
    hammocks: fig('hammocks-2018',
      'Menschen ruhen in Hängematten zwischen den Bäumen bei Electric Forest',
      'Hängematten zwischen den Bäumen bei Electric Forest, 1. Juli 2018. Foto: FifthLegend, CC BY 2.0.'),
    sets: articleVideoCollection({
      lang, label: 'Electric Forest, von zu Hause gehört',
      description: 'Drei Sets von den eigenen YouTube-Kanälen der Acts, jeweils laut Titel bei Electric Forest aufgenommen.',
      items: [
        articleVideoCard({youtubeId: '_A3n8oIbwtc', genre: 'Electric Forest', artist: 'Levity', title: 'Live bei Electric Forest 2024'}),
        articleVideoCard({youtubeId: 'OdDOnJ-aP4k', genre: 'Electric Forest', artist: 'Whethan', title: 'Live bei Electric Forest 2025'}),
        articleVideoCard({youtubeId: '-eVk7dh8dO4', genre: 'Electric Forest', artist: 'Of The Trees', title: 'Live bei Electric Forest 2025'})
      ]
    })
  }),

  // The English page's sources, URL for URL, with translated labels. All in English.
  sources: [
    {html: 'Termine, Pässe, Zusatzprodukte, Anreisezeiten und Shuttles: <a href="https://electricforestfestival.com/" target="_blank" rel="noopener noreferrer">electricforestfestival.com</a>, <a href="https://electricforestfestival.com/pass-types" target="_blank" rel="noopener noreferrer">Passarten</a> und <a href="https://electricforestfestival.com/tickets" target="_blank" rel="noopener noreferrer">Tickets</a> (auf Englisch).'},
    {html: 'Regeln, Anfahrt, verbotene Gegenstände und Vorbereitungsguide: <a href="https://electricforestfestival.com/festival-info" target="_blank" rel="noopener noreferrer">Festival-Infos</a> und <a href="https://electricforestfestival.com/forest-prep-guide" target="_blank" rel="noopener noreferrer">Forest Prep Guide</a> (auf Englisch).'},
    {html: 'Bühnen, Sherwood Forest, The Brainery und frühere Plakate: <a href="https://electricforestfestival.com/experiences" target="_blank" rel="noopener noreferrer">Experiences</a> und <a href="https://electricforestfestival.com/a-look-back" target="_blank" rel="noopener noreferrer">A Look Back</a> (auf Englisch).'},
    {html: 'Das Gelände: <a href="https://electricforestfestival.com/double-jj-resort" target="_blank" rel="noopener noreferrer">die Seite zum Double JJ Resort</a> (auf Englisch).'},
    {html: 'Die Line-up-Ankündigung 2026 vom Dezember 2025: <a href="https://whitelakemirror.com/article/2025/12/electric-forest-sets-dates-lineup-for-june-2026-event" target="_blank" rel="noopener noreferrer">White Lake Mirror</a> und <a href="https://oceanacountypress.com/2025/12/08/electric-forest-drops-2026-lineup-tickets-go-on-sale-friday/" target="_blank" rel="noopener noreferrer">Oceana County Press</a>, die Quelle des gemeldeten Preises (auf Englisch).'},
    {html: 'Geschichte: <a href="https://tvovermind.com/the-history-and-evolution-of-the-electric-forest-festival/" target="_blank" rel="noopener noreferrer">TV Overmind, 2019</a>, und die Verlängerung der Genehmigung, <a href="https://theticket953.com/ixp/689/p/electric-forest-festival-rothbury-michigan-extended/" target="_blank" rel="noopener noreferrer">The Ticket 95.3, 2024</a> (auf Englisch).'}
  ],

  bandcamp: {
    description: 'Die Musik, die ich selbst mache. Ein Kauf unterstützt meine Arbeit direkt.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 von thecatrave'},
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks von thecatrave'}
    ]
  }
};
