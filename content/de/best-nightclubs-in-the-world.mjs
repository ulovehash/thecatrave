// German best nightclubs in the world guide. Structure, facts and media from
// the English page (best-nightclubs-in-the-world-draft.md); localised, not
// translated word for word.
//
// Keywords (keywords/de-best-nightclubs-in-the-world.json): Google Ads Keyword
// Planner, Germany, German, 2026-11-12 (volume buckets), plus Google de-DE SERP.
//
// The images are the English guide's, in img/best-nightclubs-in-the-world/,
// with translated captions.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, ownSetListening
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/best-nightclubs-in-the-world/${name}-1200.webp`,
  srcset: `img/best-nightclubs-in-the-world/${name}-320.webp 320w, img/best-nightclubs-in-the-world/${name}-1200.webp 1200w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

export default {
  lang: 'de',
  name: 'de-best-nightclubs-in-the-world',
  file: 'de/beste-clubs-der-welt.html',
  draft: 'de/best-nightclubs-in-the-world-draft.md',
  canonical: 'https://thecatrave.com/de/beste-clubs-der-welt',
  englishPath: '/best-nightclubs-in-the-world',
  ogImage: 'https://thecatrave.com/img/og/best-nightclubs-in-the-world.jpg',
  bodyClass: 'article-page best-nightclubs-in-the-world-page',
  minReadingMinutes: 6,

  title: 'Die besten Clubs der Welt: 20 Clubs aus den DJ Mag Top 100 2026',
  description: '20 Clubs aus den DJ Mag Top 100 2026, von [UNVRS] und Berghain bis GREENVALLEY, Club Space und WOMB: Plätze, Kapazitäten, die größten Clubs und Sets zum Anhören.',
  datePublished: '2026-11-12',
  dateModified: '2026-11-12',
  dateLabel: '12. November 2026',

  heroKicker: 'Club-Guide, Welt',
  heroTitle: 'Die besten Clubs der Welt: 20 Clubs aus den DJ Mag Top 100 2026',
  deck: 'Zwanzig Clubs auf vier Kontinenten, von [UNVRS] und Berghain bis GREENVALLEY, Club Space, Zouk und WOMB, mit Plätzen, Größen und Sets zum Anhören.',
  answerLabel: 'Die besten Clubs der Welt',
  breadcrumbName: 'Die besten Clubs der Welt',

  answerSection: 'Antwort',
  introSection: 'Einleitung',
  introTitle: 'Was „bester“ bei einem Club bedeutet.',
  faqSection: 'FAQ',
  faqLabel: 'Häufige Fragen',
  faqTitle: 'Häufige Fragen zu den besten Clubs der Welt.',

  sections: [
    {id: 'nightclubs', heading: 'Die besten Clubs der Welt', tocLabel: 'Beste Clubs', title: 'Die besten Clubs der Welt'},
    {id: 'dance-clubs', heading: 'Die besten Clubs der Welt nach Regionen', tocLabel: 'Nach Regionen', title: 'Die besten Clubs der Welt nach Regionen', subsections: ['europe', 'north-america', 'south-america', 'asia']},
    {id: 'biggest', heading: 'Die größten Clubs der Welt', tocLabel: 'Die größten', title: 'Die größten Clubs der Welt'},
    {id: 'famous', heading: 'Berühmte Clubs der Welt: die ältesten Räume', tocLabel: 'Die ältesten', title: 'Berühmte Clubs der Welt: die ältesten Räume'},
    {id: 'best-techno-clubs', heading: 'Die besten Techno-Clubs der Welt', tocLabel: 'Techno-Clubs', title: 'Die besten Techno-Clubs der Welt'},
    {id: 'exclusive', heading: 'Die exklusivsten Clubs der Welt', tocLabel: 'Exklusiv', title: 'Die exklusivsten Clubs der Welt'}
  ],

  media: ({lang}) => ({
    'Image: Studio 338': figure('studio-338-2020', 1200, 801, 'Das Gebäude von Studio 338 auf der Greenwich Peninsula, dahinter das Gerüst eines Gasometers', 'Studio 338 auf der Greenwich Peninsula, 1. Februar 2020. Foto: Ewan-M, CC BY-SA 4.0.'),
    'Image: Echostage': figure('echostage-2024', 1200, 856, 'Das Publikum im Echostage in Washington, D.C. vor einer beleuchteten Bühne und LED-Wänden', 'Echostage, Washington, D.C., 7. Juni 2024. Foto: APK, CC BY 4.0.'),
    'Image: Club Space': figure('club-space-2019', 1200, 801, 'Publikum und Discokugeln unter einem Dach aus Pflanzen auf der Terrace von Club Space in Miami', 'Die Terrace von Club Space, Miami, 2. Juni 2019. Foto: Lauren Maurell, CC BY-SA 4.0.'),
    'Image: Hakkasan': figure('hakkasan-2016', 1200, 900, 'Hakkasan in Las Vegas, eine volle Tanzfläche unter rosa Licht, rechts die DJ-Kanzel', 'Hakkasan, Las Vegas, 7. Oktober 2016. Foto: David Jones, CC BY 2.0.'),
    'Image: D-Edge': figure('d-edge-2015', 960, 640, 'Ein DJ an den Decks im D-Edge in São Paulo, auf dem Mixer ein Banner mit der Aufschrift Moving', 'Ein DJ im D-Edge, São Paulo, 15. Oktober 2015. Foto: LucasArr, CC BY-SA 4.0.'),
    'Embed: Hi Ibiza': articleVideoCollection({lang, label: 'Aufgenommen im Hï Ibiza', description: 'Eine Session von 2022 aus dem Hï Garden, veröffentlicht von DJ Mag.', items: [
      articleVideoCard({youtubeId: 'w8xQnshEIKg', genre: 'Hï Ibiza, 2022', artist: 'DJ Mag', title: 'Layla Benitez im Hï Ibiza Garden'})
    ]}),
    'Embed: Club Space': articleVideoCollection({lang, label: 'Aufgenommen im Club Space', description: 'Drei Sets von 2023 vom Kanal des Clubs: Mochakk, Carl Cox und Mau P.', items: [
      articleVideoCard({youtubeId: '4iKfR3UBDpQ', genre: 'Club Space, 2023', artist: 'Club Space', title: 'Mochakk, Sunrise-Set im Club Space Miami'}),
      articleVideoCard({youtubeId: 'CTvkbzE4Jus', genre: 'Club Space, 2023', artist: 'Club Space', title: 'Carl Cox, Sunrise-Set im Club Space Miami'}),
      articleVideoCard({youtubeId: '0mlnJ7Ic7TM', genre: 'Club Space, 2023', artist: 'Club Space', title: 'Mau P im Club Space Miami'})
    ]}),
    'Embed: D-Edge': articleVideoCollection({lang, label: 'Aufgenommen im D-Edge', description: 'DJ Mag Live presents D-Edge, eine Session von 2017 aus São Paulo.', items: [
      articleVideoCard({youtubeId: 'PQtqN-azfM8', genre: 'D-Edge, 2017', artist: 'DJ Mag', title: 'DJ Mag Live presents D-Edge'})
    ]}),
    'Embed: thecatrave mix 1': ownSetListening(0, lang, 'Dreißig Tracks, in denen die Breaks zwischen Garage, Bass Music, Techno und Rave wandern. Mein eigenes Set, für den Heimweg nach dem Club.'),
    'Table: Ranking': articleTable({
      headers: ["Platz", "Club", "Stadt", "Kapazität"],
      rows: [["1", "[UNVRS]", "Ibiza, Spanien", "4.000"], ["2", "GREENVALLEY", "Camboriú, Brasilien", "10.000"], ["3", "Ushuaïa Ibiza", "Ibiza, Spanien", "7.866"], ["4", "Hï Ibiza", "Ibiza, Spanien", "5.633"], ["5", "Savaya", "Uluwatu, Bali", "2.500"], ["6", "Echostage", "Washington, D.C., USA", "3.000"], ["7", "Laroc Club", "Valinhos, Brasilien", "5.000"], ["8", "FABRIK", "Region Madrid, Spanien", "6.000"], ["9", "Illuzion Phuket", "Phuket, Thailand", "5.000"], ["10", "Surreal Park", "Camboriú, Brasilien", "20.000"], ["11", "Bootshaus", "Köln, Deutschland", "2.000"], ["13", "fabric", "London, Großbritannien", "Nicht angegeben"], ["14", "Club Space", "Miami, USA", "1.100"], ["17", "Zouk Singapore", "Singapur", "2.900"], ["20", "Studio 338", "London, Großbritannien", "2.400"], ["21", "Berghain", "Berlin, Deutschland", "1.500"], ["35", "D-Edge", "São Paulo, Brasilien", "1.000"], ["44", "Academy LA", "Los Angeles, USA", "1.000"], ["46", "Warung Beach Club", "Itajaí, Brasilien", "2.500"], ["88", "WOMB", "Tokio, Japan", "1.000"]].map(row => row.map(escapeHtml)),
      label: "Beste Clubs der Welt 2026: die 20 Clubs dieses Guides"
    }),
    'Table: Mayores': articleTable({
      headers: ["Club", "Stadt", "Angegebene Kapazität"],
      rows: [["Surreal Park", "Camboriú, Brasilien", "20.000"], ["Drumsheds", "London, Großbritannien", "15.000"], ["GREENVALLEY", "Camboriú, Brasilien", "10.000"], ["The Warehouse Project", "Manchester, Großbritannien", "10.000"], ["Ushuaïa Ibiza", "Ibiza, Spanien", "7.866"], ["FABRIK", "Region Madrid, Spanien", "6.000"], ["Hï Ibiza", "Ibiza, Spanien", "5.633"], ["Laroc Club", "Valinhos, Brasilien", "5.000"], ["Illuzion Phuket", "Phuket, Thailand", "5.000"]].map(row => row.map(escapeHtml)),
      label: "Die größten Clubs nach angegebener Kapazität"
    }),
    'Table: Veteranas': articleTable({
      headers: ["Club", "Stadt", "Offen seit"],
      rows: [["Pacha Ibiza", "Ibiza, Spanien", "1973"], ["Amnesia", "Ibiza, Spanien", "1976, 50. Saison 2026"], ["Zouk Singapore", "Singapur", "Anfang der Neunziger"], ["Tresor", "Berlin, Deutschland", "1991"], ["Warung Beach Club", "Itajaí, Brasilien", "2002"], ["D-Edge", "São Paulo, Brasilien", "2003"], ["GREENVALLEY", "Camboriú, Brasilien", "2007"], ["Club Space", "Miami, USA", "Im 25. Jahr"], ["Ministry of Sound", "London, Großbritannien", "Im 35. Jahr"]].map(row => row.map(escapeHtml)),
      label: "Die ältesten Clubs"
    }),
    'Table: Techno': articleTable({
      headers: ["Club", "Was ihn als Techno-Raum ausweist"],
      rows: [["Berghain, Berlin", "Main Floor und Panorama Bar; der Berghain-Guide hat die Türpolitik"], ["Illuzion Phuket", "Shelter, der Techno-Raum im Obergeschoss"], ["WOMB, Tokio", "25-jähriges Bestehen 2025 mit Sven Väth, Richie Hawtin, Laurent Garnier und Sasha"]].map(row => row.map(escapeHtml)),
      label: "Techno-Räume dieser Seite"
    }),
  }),

  sources: [
    {href: 'https://djmag.com/top100clubs', label: 'DJ Mag: Top 100 Clubs, Liste 2026 und Profil jedes Clubs (auf Englisch)'},
    {href: 'https://djmag.com/features/dj-mag-top-100-clubs-2026-record-breaking-numbers-vote-our-annual-poll-of-worlds-best', label: 'DJ Mag: Ergebnisse der Abstimmung 2026 (auf Englisch)'},
    {href: 'https://www.nightlifeinternational.org/en/the-world-s-100-best-clubs-2026', label: 'International Nightlife Association: The World\'s 100 Best Clubs, Abstimmungstermine, Jury und Zahl der Nominierten (auf Englisch)'}
  ],
  sourcesNote: 'Die Angaben zu Drumsheds, The Warehouse Project, Bootshaus, Pacha, Amnesia, Tresor und Ministry of Sound stammen aus den Quellen des Guides zu den besten Clubs in Europa.',

  bandcamp: {
    description: 'Abseits der Tanzfläche: die Musik, die ich selbst mache. Ein Kauf unterstützt meine Arbeit direkt.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 von thecatrave'},
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks von thecatrave'}
    ]
  }
};
