// German US EDM festivals comparison. Structure, facts, dates and the "noch nicht
// angekündigt" labels from the English page (best-edm-festivals-usa-draft.md,
// build-us-festivals-article.mjs), checked there on 2 October 2026, via the
// Spanish page (content/es/us-festivals.mjs).
//
// German wording: "EDM-Festivals in den USA" and "Festivals für elektronische
// Musik" carried from the Spanish SERP read ("festivales EDM", "festivales de
// música electrónica en Estados Unidos"). The google.de SERP could not be read
// on 30 October 2026 (Chrome not connected) and no Keyword Planner row exists
// for a German phrase (keywords/de-us-festivals.json), so the head term is
// unmeasured.
//
// Maintenance: the dates are the English page's. Change them here and in the
// draft whenever the English page changes them; the page is registered in
// festival-editions.mjs with the other roundups.
//
// The images are the English page's, in img/us-festivals/, with translated
// captions.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, ownSetListening, ownTrackListening
} from '../../site-components.mjs';

const fig = (name, width, height, alt, caption) => articleFigure({
  src: `img/us-festivals/${name}-1200.webp`,
  srcset: `img/us-festivals/${name}-320.webp 320w, img/us-festivals/${name}-1200.webp 1200w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

const link = ([href, label]) => `<a href="${href}" target="_blank" rel="noopener noreferrer">${label}</a>`;

const festivals = [
  ['EDC Las Vegas', 'Las Vegas, Nevada', 'EDC Dusk 14. bis 16. Mai, EDC Dawn 21. bis 23. Mai', 'EDM der großen Bühne', 'Mehr als 500.000 am Wochenende', 'Camping', 'Die volle Produktion'],
  ['Ultra', 'Miami, Florida', '26. bis 28. März', 'EDM der großen Bühne', 'Rund 165.000 Tickets', 'Stadt', 'Ein Festival und eine Reise nach Miami'],
  ['EDC Orlando', 'Orlando, Florida', 'Noch nicht angekündigt (2026: 6. bis 8. November)', 'EDM der großen Bühne', 'Hier nicht angegeben', 'Hier nicht angegeben', 'EDC außerhalb von Las Vegas'],
  ['Beyond Wonderland', 'San Bernardino, Kalifornien; Joliet, Illinois; George, Washington', '26. und 27. März; 10. bis 13. Juni; 25. bis 27. Juni', 'Elektronische Tanzmusik', 'Hier nicht angegeben', 'Camping (Mittlerer Westen und The Gorge)', 'Ein Camping-Wochenende in deiner Nähe'],
  ['HARD Summer', 'Los Angeles, Kalifornien', 'Noch nicht angekündigt (2026: 1. und 2. August)', 'Electronic und Hip-Hop', 'Hier nicht angegeben', 'Hier nicht angegeben', 'Electronic und Hip-Hop zusammen'],
  ['Movement', 'Detroit, Michigan', '29. bis 31. Mai', 'Techno, House', 'Sechs Bühnen', 'Stadt', 'Techno dort, wo er herkommt'],
  ['ARC', 'Chicago, Illinois', 'Noch nicht angekündigt (2026: 4. bis 7. September)', 'House, Techno', 'Hier nicht angegeben', 'Stadt', 'House in Chicago'],
  ['CRSSD', 'San Diego, Kalifornien', 'Noch nicht angekündigt (Frühjahr); 2026: 26. und 27. September', 'House, Techno, Electro, Indie Dance', 'Rund 15.000 pro Tag (Frühjahr 2024)', 'Stadt', 'Ein Wochenende am Wasser'],
  ['III Points', 'Miami, Florida', 'Noch nicht angekündigt (2026: 16. und 17. Oktober)', 'Indie, Electronic, Hip-Hop, Experimental', 'Hier nicht angegeben', 'Stadt', 'Electronic zwischen den Künsten'],
  ['Lost Lands', 'Thornville, Ohio', 'Noch nicht angekündigt (2026: 18. bis 20. September)', 'Bass Music', '2026 ausverkauft', 'Camping', 'Bass Music mit Camping'],
  ['Bass Canyon', 'George, Washington', 'Noch nicht angekündigt (2026: 14. bis 16. August)', 'Bass Music', 'Hier nicht angegeben', 'Camping', 'Bass Music in einem Canyon'],
  ['Electric Forest', 'Rothbury, Michigan', 'Noch nicht angekündigt (2026: 25. bis 28. Juni)', 'Jam Bands und Electronic', '40.000 bis 50.000 (Schätzung 2025)', 'Camping', 'Camping im Wald']
];

export default {
  lang: 'de',
  name: 'de-us-festivals',
  file: 'de/edm-festivals-usa.html',
  draft: 'de/us-festivals-draft.md',
  canonical: 'https://thecatrave.com/de/edm-festivals-usa',
  englishPath: '/best-edm-festivals-usa',
  ogImage: 'https://thecatrave.com/img/og/us-festivals.jpg',
  bodyClass: 'article-page us-festivals-page',
  minReadingMinutes: 9,

  title: 'EDM-Festivals in den USA 2027: EDC, Ultra, Movement',
  description: 'EDM-Festivals in den USA 2027: EDC Las Vegas im Mai, Ultra Miami vom 26. bis 28. März, Movement Detroit vom 29. bis 31. Mai. Termine, Sound und Camping im Vergleich.',
  datePublished: '2026-10-30',
  dateModified: '2026-10-30',
  dateLabel: '30. Oktober 2026',

  heroKicker: 'Festival-Guide 2027',
  heroTitle: 'Die besten EDM-Festivals in den USA 2027',
  deck: 'Zwölf US-Festivals im Vergleich: Programm, Größe, Übernachtung und Termine, mit den bestätigten Terminen für 2027 und den noch offenen.',
  answerLabel: 'Die besten EDM-Festivals in den USA',
  breadcrumbName: 'EDM-Festivals in den USA',

  answerSection: 'Antwort',
  introSection: 'Einleitung',
  introTitle: 'Eine Liste, aus der du auswählen kannst.',
  faqSection: 'FAQ',
  faqLabel: 'Häufige Fragen zu EDM-Festivals in den USA',
  faqTitle: 'Häufige Fragen zu EDM-Festivals in den USA.',

  sections: [
    {id: 'criteria', heading: 'Nach welchen Kriterien die Liste entstanden ist', title: 'Nach welchen Kriterien die Liste entstanden ist.'},
    {id: 'at-a-glance', heading: 'Die Termine 2027 im Überblick', title: 'Die Termine 2027 im Überblick.'},
    {id: 'biggest', heading: 'Welches ist das größte EDM-Festival der USA?', title: 'Welches ist das größte EDM-Festival der USA?', kicker: 'EDM und Hauptbühne',
      subsections: ['edc-las-vegas', 'ultra-music-festival', 'edc-orlando', 'beyond-wonderland', 'hard-summer']},
    {id: 'house-techno', heading: 'Welche US-Festivals sind die besten für House und Techno?', title: 'Welche US-Festivals sind die besten für House und Techno?',
      subsections: ['movement', 'arc-music-festival', 'crssd-festival', 'iii-points']},
    {id: 'bass', heading: 'Welche US-Festivals sind die besten für Bass Music?', title: 'Welche US-Festivals sind die besten für Bass Music?',
      subsections: ['lost-lands', 'bass-canyon']},
    {id: 'forest', heading: 'Welches US-Festival eignet sich zum Campen im Wald?', title: 'Welches US-Festival eignet sich zum Campen im Wald?'},
    {id: 'smaller', heading: 'Kleinere Festivals, die die Reise wert sind', title: 'Kleinere Festivals, die die Reise wert sind.', kicker: 'Außerhalb der Wahl',
      subsections: ['dreamstate', 'decadence-colorado', 'ubbi-dubbi']},
    {id: 'not-listed', heading: 'Was nicht auf dieser Liste steht, und warum', title: 'Was nicht auf dieser Liste steht, und warum.'},
    {id: 'choose', heading: 'So findest du das passende Festival', title: 'So findest du das passende Festival.'}
  ],

  media: ({lang}) => ({
    'Tabelle: major': articleTable({label: 'Die großen EDM-Festivals der USA im Vergleich, 2027',
      headers: ['Festival', 'Wo', 'Termine 2027', 'Sound', 'Größe', 'Übernachtung', 'Ideal für'], rows: festivals}),
    'beyond-wonderland': fig('beyond-wonderland-2010', 1200, 900,
      'Ein DJ auf der Hauptbühne von Beyond Wonderland 2010, mit dem Publikum davor',
      'Die Hauptbühne von Beyond Wonderland im März 2010. Foto: Roxanna Salceda, CC BY-SA 2.0.'),
    'iii-points': fig('iii-points-2017', 1200, 900,
      'VIRGO auf der Mind-Melt-Bühne von III Points in Miami, 2017',
      'VIRGO auf der Mind-Melt-Bühne von III Points in Miami, Oktober 2017. Foto: Alienasomnia, CC BY-SA 4.0.'),
    'electric-forest': fig('electric-forest-2018', 1200, 600,
      'Besucher des Electric Forest Festivals in Rothbury, Michigan, im Juli 2018',
      'Electric Forest in Rothbury, Michigan, im Juli 2018. Foto: FifthLegend, CC BY 2.0.'),
    'crssd-set': articleVideoCollection({
      lang, label: 'CRSSD, von zu Hause',
      description: 'Dusky live beim CRSSD Fest im Herbst 2018, aufgenommen von Mixmag. Der House und Techno, für den das Festival bekannt ist.',
      items: [articleVideoCard({youtubeId: '4gqM7WMrGEw', genre: 'CRSSD, 2018', artist: 'Dusky', title: 'Live beim CRSSD Fest'})]
    }),
    'own-track': ownTrackListening('late-summer-cloud-dance', 'Ein Stück von mir, zum Hören zwischen den Festivals.', lang),
    'first-mix': ownSetListening(0, lang),
    'second-mix': ownSetListening(1, lang)
  }),

  sources: [
    {html: `Termine für 2027: ${[
      ['https://www.insomniac.com/', 'Insomniac'], ['https://movementfestival.com/faqs', 'FAQ von Movement'], ['https://www.basscanyon.com/', 'Bass Canyon'],
      ['https://www.electricforest.com/', 'Electric Forest'], ['https://www.lostlands.com/', 'Lost Lands']
    ].map(link).join(', ')} (EDC, EDC Orlando, Beyond Wonderland und Dreamstate bei Insomniac).`},
    {html: 'Termine und Größe von Ultra, Movement, ARC, Coachella, Lollapalooza und Burning Man: der Guide dieser Website zu jedem dieser Festivals, oben verlinkt, der seine eigenen Quellen nennt.'},
    {href: 'https://djmag.com/top100festivals', label: 'DJ Mag (auf Englisch): Top 100 Festivals 2026'},
    {html: 'Umzug von Beyond Wonderland Midwest auf den Chicagoland Speedway: Electronic Midwest, 15. Juni 2026. Evakuierung wegen Unwetter bei Lost Lands 2026: EDMTunes. Absage von Bonnaroo 2027: EDM Sauce. Insolvenz des Electric-Zoo-Betreibers: Presse zum Kapitel 11 von Avant Gardner vom 4. August 2025.'},
    {html: 'Genres, Gründung und erste Veranstaltung von HARD Summer: Wikipedia (auf Englisch).'}
  ],

  bandcamp: {
    description: 'Zwischen den Festivals die Musik, die ich selbst mache: Breaks mit Techno und Dub darin. Wer eine Veröffentlichung kauft, unterstützt meine Arbeit direkt.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 von thecatrave'},
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks von thecatrave'}
    ]
  }
};
