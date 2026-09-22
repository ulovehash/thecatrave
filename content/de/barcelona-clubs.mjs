// German Barcelona clubs guide. Structure and facts from the English page
// (barcelona-clubs-draft.md, barcelona-clubs-research.md,
// build-barcelona-clubs-article.mjs).
//
// German keywords, measured 2026-09-22 with Google Ads Keyword Planner
// (owner's account, country Germany, tool switch per KEYWORD-METHOD.md):
// best clubs in barcelona 100-1K, clubs in barcelona 1K-10K, barcelona
// nightlife 100-1K. Live Google search (google.de, hl=de/gl=de) surfaces
// Razzmatazz, Opium, Pacha Barcelona (Urlaubspiraten), Club Apolo, Marula,
// Sidecar, Jamboree, MOOG, City Hall, Bikini (Barcelona.de) and INPUT, La
// Terrrazza, Laut, Macarena, Moog Club (Hostelworld.de). Razzmatazz, Moog and
// Macarena repeat across 3+ of the German-language lists actually read;
// Opium and Pacha repeat too but are a different angle (beach/mainstream
// club), not this page's required list.
//
// Like the English page, this guide keeps a genuine other-artist "Essential
// listening" block (Honey Dijon, filmed in Barcelona for Mixmag) rather than
// forcing an unverified claim about which room recorded it. German pages
// otherwise default to Berlin Race 1909 for the owner's own track (owner,
// 2026-09-21); this page keeps the English page's choice of "Look" for the
// Macarena Club section, since neither is Spain-specific and Berlin Race
// 1909 would misleadingly suggest a German connection this city page does
// not have.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, ownSetListening, ownTrackListening
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/barcelona-clubs/${name}-${width}.webp`,
  srcset: `img/barcelona-clubs/${name}-320.webp 320w, img/barcelona-clubs/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

export default {
  lang: 'de',
  name: 'de-barcelona-clubs',
  file: 'de/clubs-barcelona.html',
  draft: 'de/barcelona-clubs-draft.md',
  canonical: 'https://thecatrave.com/de/clubs-barcelona',
  englishPath: '/best-clubs-in-barcelona',
  ogImage: 'https://thecatrave.com/img/og/barcelona-clubs.jpg',
  bodyClass: 'article-page barcelona-clubs-page',

  title: 'Die besten Clubs in Barcelona: Von Zeleste bis Razzmatazz',
  description: "Razzmatazz, Nitsa und Macarena Club: wie Barcelonas größter Club aus einem Live-Venue der 1970er wuchs, und die besten Clubs in Barcelona heute.",
  datePublished: '2026-09-22',
  dateModified: '2026-09-22',
  dateLabel: '22. September 2026',

  heroKicker: 'Clubs in Barcelona',
  heroTitle: 'Die besten Clubs in Barcelona, von Zeleste bis Razzmatazz',
  deck: 'Ein Live-Venue, das zum größten Club der Stadt wurde, eine elektronische Nacht, die seit drei Jahrzehnten in einem alten Konzertsaal läuft, und ein Flamenco-Raum, der zur Tanzfläche wurde: die besten Clubs in Barcelona heute.',
  answerLabel: 'Die besten Clubs in Barcelona',
  breadcrumbName: 'Die besten Clubs in Barcelona',

  answerSection: 'Antwort',
  introSection: 'Einleitung',
  introTitle: 'Gebäude, die ihre Nutzung ändern, keine Clubs aus dem Nichts.',
  faqSection: 'FAQ',
  faqLabel: 'Häufige Fragen',
  faqTitle: 'Häufige Fragen zu Clubs in Barcelona.',

  sections: [
    {id: 'zeleste-razzmatazz', heading: 'Zeleste, Razzmatazz und der Raum, der aus einem Live-Venue wuchs', title: 'Zeleste, Razzmatazz und der Raum, der aus einem Live-Venue wuchs.'},
    {id: 'apolo-nitsa', heading: 'Sala Apolo und Nitsa', title: 'Sala Apolo und Nitsa.'},
    {id: 'macarena', heading: 'Macarena Club: ein Flamenco-Tablao, das zum Dance-Club wurde', title: 'Macarena Club: ein Flamenco-Tablao, das zum Dance-Club wurde.'},
    {id: 'best-clubs-now', heading: 'Die besten Clubs in Barcelona heute', title: 'Die besten Clubs in Barcelona heute.'},
    {id: 'where-to-go', heading: 'Wohin gehen: Barri Gòtic, Eixample und die Strandclubs', title: 'Wohin gehen: Barri Gòtic, Eixample und die Strandclubs.'}
  ],

  media: ({lang}) => ({
    'Razzmatazz Außenansicht': figure('razzmatazz-exterior', 1280, 822,
      'Die Außenansicht von Sala Razzmatazz im Stadtteil Poblenou, Barcelona',
      'Razzmatazz in Poblenou, auf dem Gelände, das nach der Schließung von Zeleste frei wurde. Foto: Zarateman, gemeinfrei (CC0).'),
    'thecatrave mix I Like to Smoke in Silence After Raves': ownSetListening(0, lang, 'Dreißig Tracks, in denen sich die Breaks zwischen Garage, Bass Music, Techno und Rave bewegen. Mein eigener Mix.'),
    'thecatrave mix I Lost So Many Weekends': ownSetListening(1, lang, 'Ein lauter, rastloser Mix darüber, wieder loszuziehen, obwohl man es besser weiß.'),
    'thecatrave Look': ownTrackListening('look', 'Future Bass, Glitch und Breakbeat, nah an der kleinen, dichten Energie, von der ein Raum in der Größe von Macarena Club lebt. Mein eigener Track.', lang),
    'Honey Dijon Barcelona': articleVideoCollection({
      label: 'Honey Dijon, DJ-Set gefilmt in Barcelona',
      description: "Honey Dijons Set für Mixmags Burn Energy Tour, gefilmt in Barcelona statt in einem der Clubs auf dieser Seite, auf Mixmags eigenem YouTube-Kanal.",
      items: [articleVideoCard({youtubeId: 'l35ok-7n2IU', genre: 'House', artist: 'Honey Dijon', title: 'DJ-Set, Burn Energy Tour x Mixmag, Barcelona'})]
    }),
    'Tabelle: now': articleTable({
      headers: ['Club', 'Viertel', 'Musik und Charakter', 'Am besten für'],
      rows: [
        ['Razzmatazz', 'Poblenou', 'Fünf Räume, jeder mit eigener Politik, von Techno und House bis Indie und Pop', 'Der größte Club der Stadt, mehrere Nächte unter einem Dach'],
        ['Sala Apolo (Nitsa)', 'Poble Sec', 'Ein elektronischer Club-Abend, der seit 1996 in einem viel älteren Konzertsaal läuft', 'Eine lange, ernsthafte elektronische Booking-Politik in einem historischen Raum'],
        ['Macarena Club', 'Barri Gòtic, neben der Rambla', 'Ein einziger Dancefloor, Kapazität etwa 300, elektronische Tanzmusik', 'Ein intimer Raum, der sich eher wie eine Hausparty anfühlt'],
        ['Moog', 'Barri Gòtic', 'Langjährig etabliert und in jedem aktuellen Guide für diese Seite genannt', 'Ein verlässlicher Stopp in der Altstadt']
      ].map(row => row.map(escapeHtml)),
      label: 'Die besten Clubs in Barcelona heute'
    })
  }),

  sources: [
    {href: 'https://en.wikipedia.org/wiki/Razzmatazz_(club)', label: 'Wikipedia: Razzmatazz (club)'},
    {href: 'https://www.webarcelona.net/nightlife-barcelona/razzmatazz', label: 'WeBarcelona: Razzmatazz'},
    {href: 'https://www.catalunya.com/razzmatazz-17-18003-14', label: 'Turisme de Catalunya: Razzmatazz Barcelona'},
    {href: 'https://www.thenewbarcelonapost.com/en/history-sala-apolo/', label: 'The New Barcelona Post: Did you know that Sala Apolo was an amusement park?'},
    {href: 'https://djmag.com/nitsa', label: 'DJ Mag: Nitsa, Top 100 Clubs'},
    {href: 'https://www.primaverasound.com/en/primavera-pro/nitsa-club-30-years', label: "Primavera Sound: Nitsa Club, 30 anys transformant l'escena electrònica"},
    {href: 'https://www.sala-apolo.com/en/clubs/nitsa', label: 'Sala Apolo: Nitsa'},
    {href: 'https://ra.co/features/2226', label: 'Resident Advisor: RA In Residence, Macarena Club'},
    {href: 'https://ra.co/guides/clubs-in-barcelona', label: 'Resident Advisor: Best Clubs in Barcelona in 2026'},
    {href: 'https://www.barcelona-tourist-guide.com/en/club/macarena-club-barcelona.html', label: 'Barcelona Tourist Guide: Macarena Club in Barcelona'}
  ],

  bandcamp: {
    description: 'Zwei meiner eigenen Tracks. Wer einen kauft, unterstützt meine Arbeit direkt.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks von thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 von thecatrave'}
    ]
  }
};
