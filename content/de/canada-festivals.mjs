// German Canada EDM festivals comparison. Structure, facts, dates and the
// "noch nicht angekündigt" / "gelistet" labels from the English page
// (best-edm-festivals-canada-draft.md, build-canada-festivals-article.mjs),
// checked there on 31 October 2026.
//
// German wording: Keyword Planner (Germany, German, 2026-11-13) returned no data
// for "edm festival kanada" and "festivals kanada"; "kanada festivals" sits in
// the 10-100 bucket, "shambhala festival" in 100-1K and "veld festival" in
// 10-100. "Ile Soniq" was not measured (keywords/de-canada-festivals.json).
// The google.de SERP for "edm festival kanada" was mostly English results.
//
// Maintenance: the dates are the English page's. Change them here and in the
// draft whenever the English page changes them; roll to 2028 with it in
// September 2027.
//
// The images are the English page's, in img/canada-festivals/, with translated
// captions.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, ownPlaylistListening, ownSetListening, ownTrackListening
} from '../../site-components.mjs';

const fig = (name, width, height, alt, caption) => articleFigure({
  src: `img/canada-festivals/${name}-1200.webp`,
  srcset: `img/canada-festivals/${name}-320.webp 320w, img/canada-festivals/${name}-1200.webp 1200w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

const link = ([href, label]) => `<a href="${href}" target="_blank" rel="noopener noreferrer">${label}</a>`;

const festivals = [
  ['Electric Island', 'Toronto, Ontario', 'Noch nicht angekündigt (2026: Mai bis August)', 'Electronic', 'Eine Saison mit Tagesveranstaltungen', 'Ein Tag in der Stadt'],
  ['Escapade', 'Ottawa, Ontario', 'Noch nicht angekündigt (2026: 26. bis 28. Juni)', 'EDM', 'Drei Tage 2026', 'Ein Wochenende in Ottawa'],
  ['Bass Coast', 'Merritt, BC', '9. bis 12. Juli', 'Bass Music und Electronic', 'Fünf Bühnen, mehr als 150 Künstler', 'Ein unabhängiges Camping-Wochenende'],
  ['FVDED in the Park', 'Surrey, BC', 'Juli, Tage noch nicht angekündigt', 'EDM und Hip-Hop', 'Zwei Tage', 'Eine große Bühne bei Vancouver'],
  ['Shambhala', 'Salmo, BC', '23. bis 26. Juli (ausverkauft)', 'Bass Music und Electronic', '23.500 auf dem Gelände', 'Ein langes Camping-Wochenende'],
  ['VELD', 'Toronto, Ontario', '30. Juli bis 1. August', 'EDM der großen Bühne', 'Drei Tage, keine offizielle Zahl', 'Headliner in Ontario'],
  ['Chasing Summer', 'Calgary, Alberta', 'Gelistet: 31. Juli bis 1. August', 'EDM', 'Rund 30.000 im Jahr (Bericht 2023)', 'Ein Sommerwochenende in Alberta'],
  ['Ile Soniq', 'Montreal, Quebec', 'Gelistet: 7. und 8. August', 'EDM der großen Bühne und Hip-Hop', '76.000 an zwei Tagen 2025', 'Headliner in einem Stadtpark'],
  ['MUTEK', 'Montreal, Quebec', '24. bis 29. August', 'Experimentelle elektronische Musik', 'Sechs Tage', 'Genau zuhören'],
  ['Piknic Électronik', 'Montreal, Quebec', 'Noch nicht angekündigt (2026: Mai bis Oktober)', 'House, Techno', 'Eine Saison mit Partys', 'Ein Sonntag im Park']
];

export default {
  lang: 'de',
  name: 'de-canada-festivals',
  file: 'de/edm-festivals-kanada.html',
  draft: 'de/canada-festivals-draft.md',
  canonical: 'https://thecatrave.com/de/edm-festivals-kanada',
  englishPath: '/best-edm-festivals-canada',
  ogImage: 'https://thecatrave.com/img/og/canada-festivals.jpg',
  bodyClass: 'article-page canada-festivals-page',
  minReadingMinutes: 6,

  title: 'EDM-Festivals in Kanada 2027: VELD, Shambhala, Ile Soniq',
  description: 'Die besten EDM-Festivals in Kanada 2027 mit Terminen, Städten und Sound, von VELD in Toronto und dem Shambhala Festival in BC bis Ile Soniq in Montreal.',
  datePublished: '2026-11-13',
  dateModified: '2026-11-13',
  dateLabel: '13. November 2026',

  heroKicker: 'Festival-Guide 2027',
  heroTitle: 'Die besten EDM-Festivals in Kanada 2027',
  deck: 'Kanadische EDM-Festivals nach Provinz, Sound und Größe verglichen, von Stadtparks in Toronto und Montreal bis zu Camping-Wochenenden in British Columbia, mit den bestätigten Terminen für 2027 und den noch offenen.',
  answerLabel: 'Die besten EDM-Festivals in Kanada',
  breadcrumbName: 'EDM-Festivals in Kanada',

  answerSection: 'Antwort',
  introSection: 'Einleitung',
  introTitle: 'Eine Liste, aus der du auswählen kannst.',
  faqSection: 'FAQ',
  faqLabel: 'Häufige Fragen zu EDM-Festivals in Kanada',
  faqTitle: 'Häufige Fragen zu EDM-Festivals in Kanada.',

  sections: [
    {id: 'criteria', heading: 'Nach welchen Kriterien die Liste entstanden ist', title: 'Nach welchen Kriterien die Liste entstanden ist.'},
    {id: 'at-a-glance', heading: 'Die Termine der EDM-Festivals in Kanada 2027 im Überblick', title: 'Die Termine der EDM-Festivals in Kanada 2027 im Überblick.', tocLabel: 'Die Termine 2027 im Überblick'},
    {id: 'biggest', heading: 'Welches ist das größte EDM-Festival in Kanada?', title: 'Welches ist das größte EDM-Festival in Kanada?', tocLabel: 'Das größte EDM-Festival'},
    {id: 'ontario', heading: 'Toronto und Ontario', title: 'Toronto und Ontario.',
      subsections: ['veld', 'electric-island']},
    {id: 'quebec', heading: 'Montreal und Quebec', title: 'Montreal und Quebec.',
      subsections: ['ile-soniq', 'mutek', 'piknic-electronik']},
    {id: 'british-columbia', heading: 'British Columbia', title: 'British Columbia.',
      subsections: ['shambhala', 'bass-coast', 'fvded-in-the-park']},
    {id: 'ottawa-calgary', heading: 'Ottawa und Calgary', title: 'Ottawa und Calgary.',
      subsections: ['escapade', 'chasing-summer']},
    {id: 'not-listed', heading: 'Was nicht auf dieser Liste steht, und warum', title: 'Was nicht auf dieser Liste steht, und warum.'},
    {id: 'choose', heading: 'So findest du das passende Festival', title: 'So findest du das passende Festival.'}
  ],

  media: ({lang}) => ({
    'Tabelle: kanada': articleTable({label: 'Die EDM-Festivals in Kanada im Vergleich, 2027',
      headers: ['Festival', 'Wo', 'Termine 2027', 'Sound', 'Größe', 'Ideal für'], rows: festivals}),
    ilesoniq: fig('ilesoniq-bynon-2018', 1200, 802,
      'Bynon bei einem Auftritt auf Ile Soniq in Montreal im August 2018',
      'Bynon auf Ile Soniq in Montreal, August 2018. Foto: Kylefowlermtl, CC BY-SA 4.0.'),
    veld: fig('veld-deadmau5-2016', 1200, 749,
      'deadmau5 auf der Bühne des VELD Music Festival in Toronto im Juli 2016',
      'deadmau5 auf VELD im Juli 2016. Foto: Visualbass Photography, CC BY-SA 2.0.'),
    mutek: fig('mutek-2015', 1200, 900,
      'Eine Besucherin auf dem Rasen vor der Bühne von MUTEK in Montreal im Mai 2015',
      'MUTEK in Montreal, Mai 2015. Foto: Jeangagnon, CC BY-SA 3.0.'),
    piknic: fig('piknic-electronik-2016', 1200, 900,
      'Calders Skulptur L’Homme im Parc Jean-Drapeau während Piknic Électronik im Juli 2016, links ein Lautsprecherturm',
      'Piknic Électronik im Parc Jean-Drapeau im Juli 2016. Foto: Jeangagnon, CC BY-SA 4.0.'),
    shambhala: fig('shambhala-2003', 1200, 900,
      'Ein DJ an den Decks zwischen den Bäumen beim Shambhala Music Festival 2003',
      'Ein DJ auf Shambhala im August 2003. Foto: Nelson Becker, Touchstones Nelson, gemeinfrei.'),
    ternion: articleVideoCollection({
      lang, label: 'Bass Coast, von zu Hause',
      description: 'Ternion Sound bei Bass Coast 2025, gefilmt vom Festival.',
      items: [articleVideoCard({youtubeId: 'D68S0Mg6aBc', genre: 'Bass Coast, 2025', artist: 'Ternion Sound', title: 'Live bei Bass Coast'})]
    }),
    playlist: ownPlaylistListening('rare-electronic-music', lang),
    'own-track': ownTrackListening('late-summer-cloud-dance', 'Mein eigener kurzer Liquid-Breakbeat-Track.', lang),
    'first-mix': ownSetListening(0, lang),
    'second-mix': ownSetListening(1, lang)
  }),

  sources: [
    {html: `Termine für 2027 von den Seiten jedes Festivals: ${[
      ['https://www.shambhalamusicfestival.com/', 'Shambhala'], ['https://www.basscoast.ca/', 'Bass Coast'], ['https://montreal.mutek.org/', 'MUTEK'],
      ['https://www.veldmusicfestival.com/', 'VELD']
    ].map(link).join(', ')} und ${link(['https://veld.frontgatetickets.com/', 'seine Ticketseite'])}, ${link(['https://www.fvdedinthepark.com/', 'FVDED in the Park'])} (nur der Monat).`},
    {html: `Termine 2026, ohne angekündigte Termine für 2027: ${[
      ['https://www.piknicelectronik.com/', 'Piknic Électronik'], ['https://613today.ca/events/2026-06-26-escapade-music-festival', 'Escapade'],
      ['https://nowtoronto.com/event/electric-island-2026-season-opener/', 'Electric Island']
    ].map(link).join(', ')}.`},
    {html: 'Gelistete Termine: Live Nation, Ticketmaster und Discotech (Ile Soniq), Frontstage (Chasing Summer).'},
    {html: `Größe: ${link(['https://mtltimes.ca/montreal/werent-able-to-make-it-to-the-10th-anniversary-of-ilesoniq-heres-what-you-missed/', 'Montreal Times, mit Zahlen des Festivals'])} (Ile Soniq 2025), ${link(['https://www.shambhalamusicfestival.com/about', 'Shambhala'])}, ${link(['https://dailyhive.com/calgary/chasing-summer-festival-calgary-2023', 'Daily Hive'])} (Chasing Summer).`},
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
