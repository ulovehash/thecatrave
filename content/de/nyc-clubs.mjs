// German NYC clubs guide. Structure, facts and media from the English page
// (nyc-clubs-draft.md, build-nyc-clubs-article.mjs). Search wording from live Google
// (google.de, hl=de/gl=de, 2026-10-01); volumes in keywords/de-nyc-clubs.json.
// The images are the English guide's, with translated captions.

import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, ownSetListening
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/nyc-clubs/${name}-${width}.webp`,
  srcset: `img/nyc-clubs/${name}-320.webp 320w, img/nyc-clubs/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

export default {
  lang: 'de',
  name: 'de-nyc-clubs',
  file: 'de/clubs-new-york.html',
  draft: 'de/nyc-clubs-draft.md',
  canonical: 'https://thecatrave.com/de/clubs-new-york',
  englishPath: '/best-clubs-in-nyc',
  ogImage: 'https://thecatrave.com/img/og/nyc-clubs.jpg',
  bodyClass: 'article-page nyc-clubs-page',
  minReadingMinutes: 9,

  title: 'Die besten Clubs in New York: House und Techno, früher und heute',
  description: 'Die besten Nachtclubs in New York für House und Techno heute: Nowadays, Basement, Public Records, Good Room und Elsewhere, dazu die Geschichte vom Loft bis Output.',
  datePublished: '2026-10-01',
  dateModified: '2026-10-01',
  dateLabel: '1. Oktober 2026',

  heroKicker: 'Clubs New York',
  heroTitle: 'Die besten Clubs in New York, vom Paradise Garage bis zum Nowadays',
  deck: 'Die Stadt, die den modernen Club erfand, neunzig Jahre lang das Tanzen lizenzierte und ihre besten Räume nach Brooklyn und Queens verlegte.',
  answerLabel: 'Die besten Clubs in New York',
  breadcrumbName: 'Die besten Clubs in New York',

  answerSection: 'Antwort',
  introSection: 'Einleitung',
  introTitle: 'Clubs, gebaut um den Sound.',
  faqSection: 'FAQ',
  faqLabel: 'Häufige Fragen',
  faqTitle: 'Häufige Fragen zu Clubs in New York.',

  sections: [
    {id: 'loft-and-garage', heading: 'Das Loft, das Paradise Garage und das Studio 54', title: 'Das Loft, das Paradise Garage und das Studio 54.'},
    {id: 'eighties-nineties', heading: 'Von der Danceteria zum Twilo: die 1980er und 1990er', title: 'Von der Danceteria zum Twilo: die 1980er und 1990er.'},
    {id: 'brooklyn', heading: 'Brooklyn übernimmt', title: 'Brooklyn übernimmt.'},
    {id: 'best-clubs-now', heading: 'Die besten Clubs in New York heute', title: 'Die besten Clubs in New York heute.'},
    {id: 'techno-clubs', heading: 'Die besten Techno-Nachtclubs in New York', title: 'Die besten Techno-Nachtclubs in New York.'},
    {id: 'house-clubs', heading: 'House-Clubs in New York', title: 'House-Clubs in New York.'},
    {id: 'where-to-go', heading: 'Wohin in New York ausgehen', title: 'Wohin in New York ausgehen.'}
  ],

  media: ({lang}) => ({
    'Studio 54': figure('studio-54-entrance', 800, 1203, 'Das Vordach und die Türen des Studio-54-Theaters in der West 54th Street bei Nacht',
      'Der Eingang des Studio 54 in der West 54th Street, seit 1998 ein Broadway-Theater. Der Club lief hier von 1977 bis 1980. Foto: David Goehring, CC BY 2.0.'),
    'Limelight': figure('limelight-church', 1200, 900, 'Die neugotische Backsteinkirche an der Sixth Avenue Ecke West 20th Street, von der Straße aus gesehen',
      'Die frühere Church of the Holy Communion an der Sixth Avenue Ecke West 20th Street, die im November 1983 zum Limelight wurde. Foto: Beyond My Ken, CC BY-SA 4.0.'),
    'Knockdown Center': figure('knockdown-center', 1080, 1080, 'Die Backsteingebäude und der hohe Schornstein des Knockdown Center in Maspeth unter grauem Himmel',
      'Das Knockdown Center in Maspeth, Queens, eine frühere Glas- und Türenfabrik. Das Basement liegt in den Tunneln darunter. Foto: Kazuhisa Otsubo, CC BY 2.0.'),
    'Louie Vega Output': articleVideoCollection({lang, label: 'Louie Vega, Mixmag Live at Output, 2016', description: 'Louie Vega spielt 2016 für Mixmag im Output in Williamsburg, drei Jahre bevor der Club schloss.', items: [articleVideoCard({youtubeId: 'ss0aadTtAhQ', genre: 'House', artist: 'Louie Vega', title: 'Mixmag Live at Output, 2016'})]}),
    'Mister Saturday Night Boiler Room': articleVideoCollection({lang, label: 'Mister Saturday Night, Boiler Room, episode 002, 2015', description: 'Die Party von Eamon Harkin und Justin Carter mit Boiler Room 2015, dem Jahr, in dem das Nowadays öffnete. Aus dem Katalog aufgenommener DJ-Sets dieser Seite.', items: [articleVideoCard({youtubeId: 'mG3kGYFyw-Q', genre: 'House', artist: 'Mister Saturday Night', title: 'Boiler Room, episode 002, 2015'})]}),
    'Louie Vega Lot Radio': articleVideoCollection({lang, label: 'Louie Vega, The Lot Radio, 2018', description: 'Louie Vega auf The Lot Radio im Dezember 2018. Aus dem Katalog aufgenommener DJ-Sets dieser Seite.', items: [articleVideoCard({youtubeId: '5EC4BynJ1MA', genre: 'House', artist: 'Louie Vega', title: 'The Lot Radio, 2018'})]}),
    'thecatrave mix': ownSetListening(0, lang, 'Dreißig Tracks zwischen Garage, Bass Music, Techno und Rave, für das lange Ende einer New Yorker Nacht. Mein eigener Mix.'),
    'Tabelle: now': articleTable({
      headers: ['Club', 'Gegend', 'Musik und Charakter', 'Am besten für'],
      rows: [
        ['Nowadays', 'Ridgewood, Queens', 'House und Techno auf einer SBS-Slammer-Anlage, keine Handys auf der Tanzfläche, ein Außenbereich', 'Mister Sunday und die Nonstop-Wochenenden'],
        ['Basement', 'Maspeth, Queens', 'Techno in Backsteintunneln unter dem Knockdown Center, geöffnet seit 2019', 'Harter Techno und eine strenge Tür'],
        ['Public Records', 'Gowanus, Brooklyn', 'Ein Hi-Fi-Clubraum im früheren ASPCA-Hauptquartier, mit Restaurant und Bar', 'Ein Abendessen und eine Tanzfläche in einem Gebäude'],
        ['Good Room', 'Greenpoint, Brooklyn', 'Ein auf das DJ-Pult ausgerichteter Hauptraum und der kleinere Bad Room', 'House- und Disco-Partys'],
        ['Elsewhere', 'East Williamsburg, Brooklyn', 'Eine Halle für 700 Menschen, ein kleinerer Raum und ein Dach, geöffnet seit 2017', 'Größere Bookings und Ganznacht-Partys'],
        ['Paragon', 'Bed-Stuy, Brooklyn', 'Techno nach dem Vorbild des frühen amerikanischen Techno, 2025 mit Kevin Saunderson wiedereröffnet', 'Techno aus Detroit und New York'],
        ['Signal', 'Williamsburg, Brooklyn', 'Ein Lagerhausraum für 210 Menschen mit einer d&b-Audiotechnik-Anlage, geöffnet seit 2025', 'Ein kleiner Raum mit ernsthaftem Sound'],
        ['House of Yes', 'Bushwick, Brooklyn', 'Ein auf Performance ausgerichteter Club, geöffnet seit 2015', 'Kostüm- und Theaternächte']
      ].map(row => row.map(escapeHtml))
    })
  }),

  sources: [
    {href: 'https://en.wikipedia.org/wiki/The_Loft_(New_York_City)', label: 'Wikipedia: The Loft (New York City)'},
    {href: 'https://en.wikipedia.org/wiki/Paradise_Garage', label: 'Wikipedia: Paradise Garage'},
    {href: 'https://en.wikipedia.org/wiki/Studio_54', label: 'Wikipedia: Studio 54'},
    {href: 'https://en.wikipedia.org/wiki/Limelight_(nightclub)', label: 'Wikipedia: The Limelight'},
    {href: 'https://en.wikipedia.org/wiki/New_York_City_Cabaret_Law', label: 'Wikipedia: New York City Cabaret Law'},
    {href: 'https://pitchfork.com/news/brooklyn-dance-club-output-closing/', label: 'Pitchfork: Brooklyn dance club Output closing'},
    {href: 'https://djmag.com/features/mister-saturday-night-15-years-new-york-party-nowadays-eamon-harkin-justin-carter', label: 'DJ Mag: Mister Saturday Night, 15 years of a New York party'},
    {href: 'https://gothamist.com/arts-entertainment/nycs-best-techno-club-vibe-checks-you-at-the-door-so-i-tried-to-get-in', label: 'Gothamist: NYC\'s best techno club vibe checks you at the door (2023)'},
    {href: 'https://www.timeout.com/newyork/nightlife/best-clubs-in-nyc', label: 'Time Out: 12 best clubs in NYC for techno, house and more'},
    {href: 'https://nowadays.nyc/about', label: 'Nowadays: hours and location'},
    {href: 'https://www.elsewhere.club/about', label: 'Elsewhere: about'},
    {href: 'https://publicrecords.nyc', label: 'Public Records'},
    {href: 'https://djmag.com/news/new-york-club-paragon-reopen-thanks-generous-lifeline-kevin-saunderson', label: 'DJ Mag: New York club Paragon to reopen thanks to a lifeline from Kevin Saunderson (2025)'},
    {href: 'https://djmag.com/new-brooklyn-club-signal-opens', label: 'DJ Mag: New Brooklyn club Signal opens (2025)'},
    {href: 'https://www.fortgreenepark.org/all-programs/soul-summit', label: 'Fort Greene Park Conservancy: Soul Summit'},
    {href: 'https://dannykrivit.net/718-sessions', label: 'Danny Krivit: 718 Sessions'}
  ],

  bandcamp: {
    description: 'Zwei meiner eigenen Tracks. Wer einen kauft, unterstützt meine Arbeit direkt.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks von thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 von thecatrave'}
    ]
  }
};
