// German clubbing cities guide. Structure, facts and media from the English page
// (europe-clubbing-cities-draft.md, europe-clubbing-cities-research.md, build-europe-clubbing-cities-article.mjs), translated
// 2026-09-24 on the owner's instruction. Search wording from live Google
// (google.de, hl=de/gl=de, 2026-09-23); volumes in keywords/de-europe-clubbing-cities.json.
// The images are the English guide's, with translated captions.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, ownSetListening
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/europe-clubbing-cities/${name}-${width}.webp`,
  srcset: `img/europe-clubbing-cities/${name}-320.webp 320w, img/europe-clubbing-cities/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

export default {
  lang: "de",
  name: "de-europe-clubbing-cities",
  file: "de/partystaedte-europa.html",
  draft: "de/europe-clubbing-cities-draft.md",
  canonical: "https://thecatrave.com/de/partystaedte-europa",
  englishPath: "/best-clubbing-cities-in-europe",
  ogImage: "https://thecatrave.com/img/og/europe-clubbing-cities.jpg",
  bodyClass: "article-page europe-clubbing-cities-page",
  minReadingMinutes: 6,
  image: "https://thecatrave.com/img/europe-clubbing-cities/cross-club-prague-1200.webp",

  title: "Die besten Partystädte Europas zum Clubben",
  description: "Berlin, Amsterdam, London, Ibiza, Tiflis und sieben weitere: die besten Partystädte Europas, geordnet nach ihren Clubs statt nach Bars und Stränden.",
  datePublished: '2026-09-24',
  dateModified: '2026-09-24',
  dateLabel: "24. September 2026",

  heroKicker: "Partystädte Europa",
  heroTitle: "Die besten Partystädte Europas zum Clubben",
  deck: "Zwölf Städte nach ihren Clubs beurteilt, vom Berghain und fabric bis zum Bassiani und Drugstore, mit einem Guide für jede, wo es einen gibt.",
  answerLabel: "Die besten Partystädte Europas",
  breadcrumbName: "Die besten Partystädte Europas",

  answerSection: "Antwort",
  introSection: "Einleitung",
  introTitle: "Clubs, keine Badeorte.",
  faqSection: 'FAQ',
  faqLabel: "Häufige Fragen",
  faqTitle: "Häufige Fragen zu Partystädten in Europa.",

  sections: [
    {id: "compare", heading: "Die schnelle Antwort: die Städte im Vergleich", title: "Die schnelle Antwort: die Städte im Vergleich."},
    {id: "three-capitals", heading: "Berlin, Amsterdam und London: die drei Clubhauptstädte", title: "Berlin, Amsterdam und London: die drei Clubhauptstädte."},
    {id: "south-and-west", heading: "Ibiza, Barcelona, Lissabon und Paris: Süden und Westen", title: "Ibiza, Barcelona, Lissabon und Paris: Süden und Westen."},
    {id: "east", heading: "Tiflis, Prag, Budapest, Krakau und Belgrad: der Osten", title: "Tiflis, Prag, Budapest, Krakau und Belgrad: der Osten."},
    {id: "choose", heading: "Wie man eine Stadt wählt", title: "Wie man eine Stadt wählt."}
  ],

  media: ({lang}) => ({
    "Cross Club": figure("cross-club-prague", 1200, 901, "Der Innenhof des Cross Club in Prag, gebaut aus geborgenem Metall, Rohren und Maschinenteilen", "Der Cross Club in Holešovice, Prag, offen seit 2002, fotografiert 2024. Foto: Fry72, CC BY-SA 4.0."),
    "Anetha Amsterdam": articleVideoCollection({lang, label: "Anetha, Boiler Room Amsterdam, 2018", description: "Das Set von Anetha für Boiler Room in Amsterdam 2018, auf dem Kanal von Boiler Room.", items: [articleVideoCard({youtubeId: "Lg0Mkj4D9xo", genre: "Techno", artist: "Anetha", title: "Boiler Room Amsterdam, 2018"})]}),
    "Buraka Som Sistema Lisbon": articleVideoCollection({lang, label: "Buraka Som Sistema, Boiler Room Lisboa x Red Bull Music Academy, 2013", description: "Das Set von Buraka Som Sistema für Boiler Room in Lissabon 2013, auf dem Kanal von Boiler Room.", items: [articleVideoCard({youtubeId: "4_Jk34-b_Jw", genre: "Kuduro", artist: "Buraka Som Sistema", title: "Boiler Room Lisboa x Red Bull Music Academy, 2013"})]}),
    "Kancheli Zitto Bassiani": articleVideoCollection({lang, label: "Kancheli und Zitto, Boiler Room x Bassiani, Tbilisi, 2018", description: "Das Set von Kancheli und Zitto für Boiler Room in Tiflis 2018, auf dem Kanal von Boiler Room.", items: [articleVideoCard({youtubeId: "blO-TbxAMhM", genre: "Techno", artist: "Kancheli und Zitto", title: "Boiler Room x Bassiani, Tbilisi, 2018"})]}),
    "Tommy Four Seven Prague": articleVideoCollection({lang, label: "Tommy Four Seven, Boiler Room Prague, 2018", description: "Das Set von Tommy Four Seven für Boiler Room in Prag 2018, auf dem Kanal von Boiler Room.", items: [articleVideoCard({youtubeId: "tfrZCnhooGo", genre: "Techno", artist: "Tommy Four Seven", title: "Boiler Room Prague, 2018"})]}),
    "DJ Seinfeld Budapest": articleVideoCollection({lang, label: "DJ Seinfeld, Boiler Room Budapest, 2020", description: "Das Set von DJ Seinfeld für Boiler Room in Budapest 2020, auf dem Kanal von Boiler Room.", items: [articleVideoCard({youtubeId: "BMtfZNMFMG4", genre: "House", artist: "DJ Seinfeld", title: "Boiler Room Budapest, 2020"})]}),
    "FJAAK Krakow": articleVideoCollection({lang, label: "FJAAK, Boiler Room x Ballantine's True Music, Krakow, 2019", description: "Das Set von FJAAK für Boiler Room in Krakau 2019, auf dem Kanal von Boiler Room.", items: [articleVideoCard({youtubeId: "YJ6wGIWf2VA", genre: "Techno", artist: "FJAAK", title: "Boiler Room x Ballantine's True Music, Krakow, 2019"})]}),
    "Daria Kolosova Belgrade": articleVideoCollection({lang, label: "Daria Kolosova, Boiler Room Belgrade at Drugstore, 2021", description: "Das Set von Daria Kolosova für Boiler Room in Belgrad 2021, auf dem Kanal von Boiler Room.", items: [articleVideoCard({youtubeId: "h2UwuQxyBGc", genre: "Techno", artist: "Daria Kolosova", title: "Boiler Room Belgrade at Drugstore, 2021"})]}),
    "thecatrave mix I Like to Smoke in Silence After Raves": ownSetListening(0, lang, 'Dreißig Tracks zwischen Garage, Bass Music, Techno und Rave. Mein eigener Mix.'),
    "Tabelle: cities": articleTable({
      headers: ["Stadt", "Clubs, die man kennen sollte", "Am besten für"],
      rows: [
            [
                    "Berlin",
                    "Tresor (1991), Berghain (2004)",
                    "Techno und lange Wochenenden"
            ],
            [
                    "Amsterdam",
                    "Shelter, Radion, der Gashouder",
                    "Nächte über 24 Stunden und das Amsterdam Dance Event im Oktober"
            ],
            [
                    "London",
                    "fabric (1999)",
                    "Drei Räume und eine lange Clubgeschichte"
            ],
            [
                    "Ibiza",
                    "Hï, Pacha, Amnesia, DC-10, [UNVRS]",
                    "Die größten Clubs, nur von Ende April bis Mitte Oktober"
            ],
            [
                    "Barcelona",
                    "Razzmatazz, Nitsa in der Sala Apolo",
                    "Eine Städtereise, mit dem Sónar im Juni"
            ],
            [
                    "Tiflis",
                    "Bassiani (2014), KHIDI",
                    "Techno mit strenger Tür"
            ],
            [
                    "Prag",
                    "Cross Club (2002)",
                    "Ein Club aus geborgenen Maschinenteilen"
            ],
            [
                    "Budapest",
                    "A38, Lärm",
                    "Erst Ruinenbars, dann Clubs"
            ],
            [
                    "Lissabon",
                    "Lux Frágil (1998)",
                    "Ein Club am Fluss"
            ],
            [
                    "Paris",
                    "Rex Club (1988)",
                    "Geschichte von House und Techno"
            ],
            [
                    "Krakau",
                    "Prozak 2.0 (2012)",
                    "Ein mittelalterlicher Keller"
            ],
            [
                    "Belgrad",
                    "Drugstore (2012)",
                    "Ein ehemaliger Schlachthof"
            ]
    ].map(row => row.map(escapeHtml)),
      label: "Die Städte im Vergleich"
    })
  }),

  sources: [
    {href: "https://en.wikipedia.org/wiki/Bassiani", label: "Wikipedia: Bassiani"},
    {href: "https://en.wikipedia.org/wiki/Cross_Club", label: "Wikipedia: Cross Club"},
    {href: "https://www.atlasobscura.com/places/cross-club", label: "Atlas Obscura: Cross Club"},
    {href: "https://en.wikipedia.org/wiki/A38_(venue)", label: "Wikipedia: A38 (venue)"},
    {href: "https://justbudapest.com/rave-techno-electronic-music-venues/", label: "Just Budapest: A Guide to Budapest Rave, Techno and Electronic Music Venues"},
    {href: "https://www.inyourpocket.com/krakow/prozak-20_18565v", label: "In Your Pocket Kraków: Prozak 2.0"},
    {href: "https://www.electronicbeats.net/how-belgrades-club-scene-grew-from-wartime-rave-roots", label: "Telekom Electronic Beats: How Belgrade's Club Scene Grew From Wartime Rave Roots"},
    {href: "https://drugstorebeograd.com/", label: "Drugstore Beograd"},
    {href: "https://www.thelisbonconnection.com/world-famous-club-lisbon-lux-fragil-unique-river-location-john-malkovitch/", label: "The Lisbon Connection: Lux Frágil"},
    {href: "https://djmag.com/top100clubs/2015/93/Lux-Fragil", label: "DJ Mag Top 100 Clubs 2015: Lux Frágil"},
    {href: "https://shesabroadagain.com/best-party-places-in-europe/", label: "She's Abroad Again: 25 Best Party Places in Europe"}
  ],

  bandcamp: {
    description: "Zwei meiner eigenen Tracks. Wer einen kauft, unterstützt meine Arbeit direkt.",
    tracks: [
      {title: "Protect Ya Breaks", id: "3822639635", url: "https://thecatrave.bandcamp.com/track/protect-ya-breaks", linkText: "Protect Ya Breaks von thecatrave"},
      {title: "Berlin Race 1909", id: "3192532299", url: "https://thecatrave.bandcamp.com/track/berlin-race-1909", linkText: "Berlin Race 1909 von thecatrave"}
    ]
  }
};
