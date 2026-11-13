// German Australian EDM festivals comparison. Structure, facts, dates and the
// "gelistet", "gemeldet" and "noch nicht angekündigt" labels from the English
// page (best-edm-festivals-australia-draft.md, build-australia-festivals-article.mjs),
// dated 31 October 2026.
//
// German wording: Keyword Planner (Germany, German, 13 November 2026) returned
// only 10-100 buckets ("festival in australien", "beyond the valley festival")
// and no data for "edm festival australien", so the head term is unmeasured
// (keywords/de-australia-festivals.json).
//
// Maintenance: the dates are the English page's. Change them here and in the
// draft whenever the English page changes them; the page is registered in
// festival-editions.mjs with the other roundups.
//
// The images are the English page's, in img/australia-festivals/, with
// translated captions.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, ownPlaylistListening, ownSetListening, ownTrackListening
} from '../../site-components.mjs';

const fig = (name, width, height, alt, caption) => articleFigure({
  src: `img/australia-festivals/${name}-1200.webp`,
  srcset: `img/australia-festivals/${name}-320.webp 320w, img/australia-festivals/${name}-1200.webp 1200w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

const link = ([href, label]) => `<a href="${href}" target="_blank" rel="noopener noreferrer">${label}</a>`;

const festivals = [
  ['Subsonic', 'Monkerai, NSW', '13. bis 15. November 2026', 'Electronic, vier Bühnen', 'Camping', 'Ein Wochenende im Busch'],
  ['Strawberry Fields', 'Tocumwal, NSW', '20. bis 22. November 2026 (gelistet)', 'Electronic', 'Camping', 'Der Murray im Frühling'],
  ['Beyond the Valley', 'Hesse, Victoria', '28. Dezember 2026 bis 1. Januar 2027 (ausverkauft)', 'EDM und mehr', 'Camping', 'Das größte Silvester'],
  ['Lost Paradise', 'Glenworth Valley, NSW', '28. Dezember 2026 bis 1. Januar 2027 (ausverkauft)', 'Electronic und mehr', 'Camping', 'Silvester bei Sydney'],
  ['Dreamstate', 'Sydney; Melbourne', '6. und 7. Februar 2027 (gemeldet)', 'Trance', 'Stadt', 'Eine große Nacht'],
  ['Pitch', 'Moyston, Victoria', '5. bis 9. März 2027 (ausverkauft)', 'House, Techno', 'Camping', 'Ein Festival aus Clubperspektive'],
  ['Ultra Australia', 'Melbourne; Gold Coast', '17. und 18. April 2027', 'EDM der großen Bühne', 'Stadt', 'Ultra vor der Haustür'],
  ['Electric Island', 'Adelaide, Melbourne, Perth', 'Noch nicht angekündigt (2026: April)', 'Electronic', 'Stadt', 'Ein Tag am Wasser'],
  ['Knockout Outdoor', 'Sydney', 'Noch nicht angekündigt (2026: 3. Oktober)', 'Hardstyle, Hardcore', 'Stadt', 'Hard Dance']
];

export default {
  lang: 'de',
  name: 'de-australia-festivals',
  file: 'de/edm-festivals-australien.html',
  draft: 'de/australia-festivals-draft.md',
  canonical: 'https://thecatrave.com/de/edm-festivals-australien',
  englishPath: '/best-edm-festivals-australia',
  ogImage: 'https://thecatrave.com/img/og/australia-festivals.jpg',
  bodyClass: 'article-page australia-festivals-page',
  minReadingMinutes: 6,

  title: 'EDM-Festivals in Australien 2027: Beyond the Valley, Pitch',
  description: 'EDM-Festivals in Australien 2027: Beyond the Valley zu Silvester, Pitch vom 5. bis 9. März, Ultra Australia im April. Termine, Bundesstaaten und Sound im Vergleich.',
  datePublished: '2026-11-13',
  dateModified: '2026-11-13',
  dateLabel: '13. November 2026',

  heroKicker: 'Festival-Guide 2027',
  heroTitle: 'Die besten EDM-Festivals in Australien 2027',
  deck: 'EDM-Festivals in Australien im Vergleich nach Bundesstaat, Sound und Jahreszeit, von Silvester in Victoria bis zu den Grampians im März, mit den bestätigten Terminen und den noch offenen.',
  answerLabel: 'Die besten EDM-Festivals in Australien',
  breadcrumbName: 'EDM-Festivals in Australien',

  answerSection: 'Antwort',
  introSection: 'Einleitung',
  introTitle: 'Eine Liste, aus der du auswählen kannst.',
  faqSection: 'FAQ',
  faqLabel: 'Häufige Fragen zu EDM-Festivals in Australien',
  faqTitle: 'Häufige Fragen zu EDM-Festivals in Australien.',

  sections: [
    {id: 'criteria', heading: 'Nach welchen Kriterien die Liste entstanden ist', title: 'Nach welchen Kriterien die Liste entstanden ist.', tocLabel: 'Wie die Liste entstand'},
    {id: 'at-a-glance', heading: 'Termine der EDM-Festivals in Australien 2027 im Überblick', title: 'Termine der EDM-Festivals in Australien 2027 im Überblick.', tocLabel: 'Termine im Überblick'},
    {id: 'biggest', heading: 'Welches ist das größte EDM-Festival in Australien?', title: 'Welches ist das größte EDM-Festival in Australien?', tocLabel: 'Das größte EDM-Festival'},
    {id: 'raves', heading: 'Welches sind die größten Raves in Australien?', title: 'Welches sind die größten Raves in Australien?', tocLabel: 'Die größten Raves',
      subsections: ['dreamstate', 'knockout-outdoor', 'electric-island']},
    {id: 'victoria', heading: 'Melbourne und Victoria', title: 'Melbourne und Victoria.', tocLabel: 'Melbourne und Victoria'},
    {id: 'house-techno', heading: 'Welche Festivals sind etwas für House und Techno?', title: 'Welche Festivals sind etwas für House und Techno?', tocLabel: 'House und Techno',
      subsections: ['pitch', 'strawberry-fields', 'subsonic']},
    {id: 'ultra', heading: 'Ist Ultra zurück in Australien?', title: 'Ist Ultra zurück in Australien?', tocLabel: 'Ultra Australia'},
    {id: 'not-listed', heading: 'Was nicht auf dieser Liste steht, und warum', title: 'Was nicht auf dieser Liste steht, und warum.', tocLabel: 'Nicht auf der Liste, und warum'},
    {id: 'choose', heading: 'So findest du das passende Festival', title: 'So findest du das passende Festival.', tocLabel: 'So wählst du aus'}
  ],

  media: ({lang}) => ({
    'Tabelle: dates': articleTable({label: 'EDM-Festivals in Australien im Vergleich, 2026 bis 2027',
      headers: ['Festival', 'Wo', 'Nächste Termine', 'Sound', 'Übernachtung', 'Ideal für'], rows: festivals}),
    grampians: fig('grampians-halls-gap', 1200, 800,
      'Die Grampians in Victoria, von Halls Gap aus gesehen',
      'Die Grampians von Halls Gap aus, die Bergkette, an deren Fuß Pitch liegt. Foto: DXR, CC BY-SA 4.0.'),
    tocumwal: fig('tocumwal-beach', 1200, 803,
      'Der Stadtstrand von Tocumwal am Murray River',
      'Tocumwal am Murray River, der Ort, der Strawberry Fields am nächsten liegt. Foto: Mattinbgn, CC BY 3.0.'),
    riverwood: fig('riverwood-downs', 1200, 398,
      'Ein Panorama bei Sonnenuntergang über Riverwood Downs in Monkerai',
      'Riverwood Downs, die Heimat von Subsonic. Foto: Marc Dalmulder, CC BY 2.0.'),
    intercell: articleVideoCollection({
      lang, label: 'Melbourne, von zu Hause',
      description: 'Clara Cuvé im Intercell in Naarm/Melbourne, aufgenommen vom Intercell 2025. Eine Gast-DJ bei einer Clubnacht in Melbourne.',
      items: [articleVideoCard({youtubeId: 'xBP4SB0Pbjw', genre: 'Melbourne, 2025', artist: 'Clara Cuvé', title: 'Intercell Naarm/Melbourne'})]
    }),
    playlist: ownPlaylistListening('rare-electronic-music', lang),
    track: ownTrackListening('late-summer-cloud-dance', 'Mein eigener kurzer Liquid-Breakbeat-Track.', lang),
    'first-mix': ownSetListening(0, lang),
    'second-mix': ownSetListening(1, lang)
  }),

  sources: [
    {html: `Termine von der Seite jedes Festivals: ${[
      ['https://beyondthevalley.com.au/', 'Beyond The Valley'], ['https://lostparadise.com.au/', 'Lost Paradise'], ['https://pitchfestival.com.au/', 'Pitch'],
      ['https://subsonicmusic.com.au/', 'Subsonic'], ['https://ultraaustralia.com/', 'Ultra Australia']
    ].map(link).join(', ')} und die ${link(['https://events.humanitix.com/emergentform', 'Ticketseite von Rainbow Spirit'])}.`},
    {html: `Gelistete oder gemeldete Termine: Strawberry Fields (${link(['https://www.nsw.gov.au/visiting-and-exploring-nsw/nsw-events/strawberry-fields-festival', 'NSW Government events'])}), Dreamstate (${link(['https://www.sydneyshowground.com.au/whats-on/dreamstate/', 'Sydney Showground'])}, ${link(['https://www.noise11.com/news/tiesto-dreamstate-australia-2027-trance-set-20260615', 'Noise11'])}), Electric Island (${link(['https://www.thenote.com.au/news/edm-festival-electric-island-returns-in-2026', 'The Note'])}), Knockout Outdoor (${link(['https://www.thatfestivalsite.com/article/Knockout%20Outdoor%202026%20Ticket%20Prices%20Revealed', 'That Festival Site'])}). Alle auf Englisch.`},
    {html: `Absage von hypersonic: ${link(['https://hypersonicfestival.au/', 'hypersonicfestival.au'])}.`},
    {html: `Besucherzahl von Beyond The Valley: ${link(['https://themusicnetwork.com/news/beyond-the-valley-sells-out-in-presale', 'The Music Network'])} und ${link(['https://au.rollingstone.com/music/music-news/beyond-the-valley-rings-in-2026-with-record-crowds-89376/', 'Rolling Stone Australia'])} (auf Englisch).`},
    {href: 'https://djmag.com/top100festivals', label: 'DJ Mag (auf Englisch): Top 100 Festivals 2026'}
  ],

  bandcamp: {
    description: 'Zwischen den Festivals die Musik, die ich selbst mache: Breaks mit Techno und Dub darin. Wer eine Veröffentlichung kauft, unterstützt meine Arbeit direkt.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 von thecatrave'},
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks von thecatrave'}
    ]
  }
};
