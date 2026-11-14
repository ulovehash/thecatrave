// German best techno festivals comparison. Structure, facts, dates and the
// "gelistet" and "noch nicht angekündigt" labels from the English page
// (best-techno-festivals-draft.md, build-techno-festivals-article.mjs), dated
// 31 October 2026.
//
// German wording: Keyword Planner (Germany, German, 14 November 2026): techno festival
// 1K-10K, the "beste" variants 10-100; keywords/de-techno-festivals.json.
//
// Maintenance: the dates are the English page's. Change them here and in the
// draft whenever the English page changes them; the page is registered in
// festival-editions.mjs with the other roundups.
//
// The images are the English page's, in img/techno-festivals/, with
// translated captions.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, ownPlaylistListening, ownSetListening, ownTrackListening
} from '../../site-components.mjs';

const fig = (name, width, height, alt, caption) => articleFigure({
  src: `img/techno-festivals/${name}-1200.webp`,
  srcset: `img/techno-festivals/${name}-320.webp 320w, img/techno-festivals/${name}-1200.webp 1200w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

const link = ([href, label]) => `<a href="${href}" target="_blank" rel="noopener noreferrer">${label}</a>`;

const festivals = [
  ['Verknipt', 'Amsterdam und Utrecht, Niederlande', '5. März, Ziggo Dome; gelistet 5. und 6. Juni, Strijkviertel', 'Hard Techno', 'Bis zu 12.000 im Ziggo Dome', 'Hard Techno in einer Arena'],
  ['DGTL Amsterdam', 'Amsterdam, Niederlande', '26. bis 28. März', 'Techno, House', 'Drei Tage', 'Ein Stadtwochenende im Frühling'],
  ['Time Warp', 'Mannheim, Deutschland', '3. April', 'Techno, House', '19 Stunden, fünf Floors', 'Eine lange Nacht drinnen'],
  ['MAYDAY', 'Dortmund, Deutschland', '30. April', 'Hard Techno, Raw, Bounce, Acid, klassischer Techno', 'Vier Floors', 'Hard Techno'],
  ['Horst', 'Vilvoorde, Belgien', 'Noch nicht angekündigt (2026: 14. bis 16. Mai)', 'Techno, House, Kunst', 'Drei Tage 2026', 'Design und Architektur'],
  ['Movement', 'Detroit, USA', '29. bis 31. Mai', 'Techno, House', 'Sechs Bühnen', 'Techno, wo er entstand'],
  ['Terminal V', 'Glasgow, Großbritannien', '4. bis 6. Juni', 'Hard Techno', 'Drei Tage', 'Hard Techno in Schottland'],
  ['Kappa FuturFestival', 'Turin, Italien', '2. bis 4. Juli', 'Techno, House', '125.000 Besuche 2026, sechs Bühnen', 'Der Tag unter freiem Himmel'],
  ['Awakenings', 'Hilvarenbeek, Niederlande', '9. bis 11. Juli', 'Techno', '119.000 Besucher 2026', 'Ein großes Techno-Wochenende'],
  ['Stone Techno', 'Essen, Deutschland', '9. bis 11. Juli', 'Techno', 'Drei Tage', 'Ein Industrieort'],
  ['Dekmantel', 'Amsterdam, Niederlande', '29. Juli bis 2. August', 'Techno, House und mehr', 'Fünf Tage', 'Ein breiteres Programm'],
  ['Nature One', 'Kastellaun, Deutschland', '29. Juli bis 1. August', 'Techno und breitere Elektronik', 'Über 60.000 Menschen, 20 Floors', 'Ein sehr großes Camping-Wochenende'],
  ['Monument', 'Veggli, Norwegen', '29. Juli bis 1. August, laut Berichten ausverkauft', 'Tiefer, hypnotischer Techno', 'Vier Tage', 'Ein Wald und eine lange Reise'],
  ['ARC', 'Chicago, USA', 'Noch nicht angekündigt (Labor-Day-Wochenende)', 'House, Techno', 'Vier Tage 2026', 'Ein Stadtpark am Ende des Sommers'],
  ['CRSSD', 'San Diego, USA', 'Frühling noch nicht angekündigt', 'House, Techno, Electro', 'Zweimal im Jahr', 'Ein Wochenende am Wasser']
];

export default {
  lang: 'de',
  name: 'de-techno-festivals',
  file: 'de/techno-festivals.html',
  draft: 'de/techno-festivals-draft.md',
  canonical: 'https://thecatrave.com/de/techno-festivals',
  englishPath: '/best-techno-festivals',
  ogImage: 'https://thecatrave.com/img/og/techno-festivals.jpg',
  bodyClass: 'article-page techno-festivals-page',
  minReadingMinutes: 6,

  title: 'Die besten Techno Festivals 2027: Awakenings, Time Warp, Movement',
  description: 'Die besten Techno Festivals 2027: jedes Techno Festival mit Terminen, Sound und für wen sie passen, von Awakenings und Time Warp bis Movement in Detroit.',
  datePublished: '2026-11-14',
  dateModified: '2026-11-14',
  dateLabel: '14. November 2026',

  heroKicker: 'Festival-Guide 2027',
  heroTitle: 'Die besten Techno-Festivals der Welt 2027',
  deck: 'Die wichtigsten Techno-Festivals im Vergleich nach Sound, Größe und Ort, von Nächten in deutschen Hallen bis nach Detroit, mit den bestätigten Terminen 2027 und den noch offenen.',
  answerLabel: 'Die besten Techno Festivals',
  breadcrumbName: 'Die besten Techno Festivals',

  answerSection: 'Antwort',
  introSection: 'Einleitung',
  introTitle: 'Eine Liste, aus der du auswählen kannst.',
  faqSection: 'FAQ',
  faqLabel: 'Häufige Fragen zu Techno-Festivals',
  faqTitle: 'Häufige Fragen zu Techno-Festivals.',

  sections: [
    {id: 'criteria', heading: 'Nach welchen Kriterien die Liste entstanden ist', title: 'Nach welchen Kriterien die Liste entstanden ist.', tocLabel: 'Wie die Liste entstand'},
    {id: 'at-a-glance', heading: 'Termine der Techno Festivals 2027 im Überblick', title: 'Termine der Techno Festivals 2027 im Überblick.', tocLabel: 'Termine 2027 im Überblick'},
    {id: 'biggest', heading: 'Welches ist das größte Techno Festival der Welt?', title: 'Welches ist das größte Techno Festival der Welt?', tocLabel: 'Das größte Techno-Festival',
      subsections: ['nature-one', 'awakenings']},
    {id: 'europe', heading: 'Welches sind die besten Techno Festivals in Europa?', title: 'Welches sind die besten Techno Festivals in Europa?', tocLabel: 'Techno-Festivals in Europa',
      subsections: ['time-warp', 'kappa-futurfestival', 'stone-techno', 'dekmantel', 'dgtl', 'horst', 'monument']},
    {id: 'usa', heading: 'Wo sind die besten Techno Festivals in den USA?', title: 'Wo sind die besten Techno Festivals in den USA?', tocLabel: 'Techno-Festivals in den USA',
      subsections: ['movement', 'arc', 'crssd']},
    {id: 'hard', heading: 'Welche Techno-Festivals sind am härtesten?', title: 'Welche Techno-Festivals sind am härtesten?', tocLabel: 'Hard-Techno-Festivals',
      subsections: ['mayday', 'verknipt']},
    {id: 'not-listed', heading: 'Was nicht auf dieser Liste steht, und warum', title: 'Was nicht auf dieser Liste steht, und warum.', tocLabel: 'Nicht auf der Liste, und warum'},
    {id: 'choose', heading: 'So findest du das passende Festival', title: 'So findest du das passende Festival.', tocLabel: 'So wählst du aus'}
  ],

  media: ({lang}) => ({
    'Tabelle: dates': articleTable({label: 'Techno-Festivals im Vergleich, 2027',
      headers: ['Festival', 'Wo', 'Termine 2027', 'Sound', 'Größe', 'Ideal für'], rows: festivals}),
    'nature-one': fig('nature-one-main-floor-2009', 1200, 900,
      'Das Publikum auf dem Main Floor von Nature One in Deutschland im Jahr 2009',
      'Der Main Floor von Nature One im Jahr 2009. Foto: Jochen Herrmann, CC BY-SA 3.0.'),
    kappa: fig('kappa-solar-2025', 1200, 900,
      'Die Solar Stage beim Kappa FuturFestival in Turin im Juli 2025',
      'Die Solar Stage beim Kappa FuturFestival im Parco Dora in Turin, im Juli 2025. Foto: MadBob, CC BY 4.0.'),
    zollverein: fig('zollverein-night', 1200, 800,
      'Die Zeche Zollverein in Essen, nachts beleuchtet',
      'Zollverein in Essen bei Nacht, die Heimat von Stone Techno. Foto: Alex, CC BY 3.0.'),
    detroit: fig('detroit-festival-2002', 1200, 900,
      'Die Hauptbühne des Detroit Electronic Music Festival nach Einbruch der Dunkelheit im Jahr 2002',
      'Die Hauptbühne des Detroit Electronic Music Festival im Mai 2002, der Veranstaltung, aus der Movement wurde. Foto: Myself248, CC BY-SA 4.0.'),
    dekmantel: articleVideoCollection({
      lang, label: 'Dekmantel, von zu Hause aus gehört',
      description: 'Freddy K auf der Radar-Bühne bei Dekmantel Ten, August 2024.',
      items: [articleVideoCard({youtubeId: 'CLDcCyRpoD4', genre: 'Dekmantel, 2024', artist: 'Freddy K', title: 'Radar'})]
    }),
    playlist: ownPlaylistListening('rare-electronic-music', lang),
    track: ownTrackListening('late-summer-cloud-dance', 'Mein eigener kurzer Liquid-Breakbeat-Track.', lang),
    'first-mix': ownSetListening(0, lang),
    'second-mix': ownSetListening(1, lang)
  }),

  sources: [
    {html: `Termine 2027 von der Seite jedes Festivals: ${[
      ['https://www.awakenings.com/', 'Awakenings'], ['https://www.time-warp.de/', 'Time Warp'], ['https://movementfestival.com/faqs', 'Movement'],
      ['https://www.kappafuturfestival.it/', 'Kappa FuturFestival'], ['https://www.nature-one.de/', 'Nature One'], ['https://www.mayday.de/', 'MAYDAY'],
      ['https://dgtl-festival.com/en/dgtl-amsterdam/', 'DGTL'], ['https://www.stone-techno.com/', 'Stone Techno'], ['https://www.dekmantel.com/', 'Dekmantel'],
      ['https://festival.mnmt.no/', 'Monument']
    ].map(link).join(', ')}.`},
    {html: `Horst: ${link(['https://www.horstartsandmusic.com/', 'die Seite des Festivals'])}.`},
    {html: `Besucherzahlen: ${link(['https://lespresso.it/c/cultura/2026/07/06/kappa-futur-festival-torino-2026-chiusura-messico-monterrey/63264', 'L’Espresso zu Kappa FuturFestival'])} (auf Italienisch), ${link(['https://nieuws.nl/entertainment/awakenings-beleeft-grootste-editie-ooit-met-119000-bezoekers', 'ANP über nieuws.nl zu Awakenings'])} (auf Niederländisch) und die Seite von Nature One.`},
    {html: `Verknipt: ${link(['https://www.festivalinfo.nl/news/59214/Verknipt-keert-maart-2027-terug-naar-de-Ziggo-Dome-voor-nieuwe-editie/', 'FestivalInfo zum Ziggo Dome'])} und ${link(['https://www.technoairlines.com/festival/verknipt-festival-utrecht-netherlands-2027', 'Technoairlines zu Utrecht'])}.`},
    {html: `Ausverkauf und Altersgrenze von Monument: ${link(['https://www.technoairlines.com/festival/monument-festival-veggli-norway-2027', 'Technoairlines'])}.`},
    {html: `Terminal V: ${link(['https://www.timeout.com/uk/news/glasgow-clydeside-live-terminal-v-new-venue-092926', 'Time Out'])} (auf Englisch).`},
    {href: 'https://djmag.com/top100festivals', label: 'DJ Mag (auf Englisch): Top 100 Festivals 2026'},
    {html: 'Awakenings, Time Warp, Movement, Dekmantel und ARC: der Guide dieser Seite zu jedem Festival, oben verlinkt, mit seinen eigenen Quellen.'}
  ],

  bandcamp: {
    description: 'Wer eine Veröffentlichung kauft, unterstützt meine Arbeit direkt.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 von thecatrave'}
    ]
  }
};
