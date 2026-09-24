// German Ibiza clubs guide. Structure, facts and media from the English page
// (ibiza-clubs-draft.md, ibiza-clubs-research.md, build-ibiza-clubs-article.mjs), translated
// 2026-09-24 on the owner's instruction. Search wording from live Google
// (google.de, hl=de/gl=de, 2026-09-23); volumes in keywords/de-ibiza-clubs.json.
// The images are the English guide's, with translated captions.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, ownSetListening
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/ibiza-clubs/${name}-${width}.webp`,
  srcset: `img/ibiza-clubs/${name}-320.webp 320w, img/ibiza-clubs/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

export default {
  lang: "de",
  name: "de-ibiza-clubs",
  file: "de/clubs-ibiza.html",
  draft: "de/ibiza-clubs-draft.md",
  canonical: "https://thecatrave.com/de/clubs-ibiza",
  englishPath: "/best-clubs-in-ibiza",
  ogImage: "https://thecatrave.com/img/og/ibiza-clubs.jpg",
  bodyClass: "article-page ibiza-clubs-page",
  minReadingMinutes: 6,
  image: "https://thecatrave.com/img/ibiza-clubs/pacha-entrance-1200.webp",

  title: "Clubs auf Ibiza: Pacha, Amnesia, Hï und der Rest",
  description: "Hï, Pacha, Amnesia, DC-10, Ushuaïa und [UNVRS]: die besten Clubs auf Ibiza heute, die geschlossenen, wo man wohnt und wann die Saison läuft.",
  datePublished: '2026-09-24',
  dateModified: '2026-09-24',
  dateLabel: "24. September 2026",

  heroKicker: "Clubs Ibiza",
  heroTitle: "Die besten Clubs auf Ibiza: Pacha, Amnesia, Hï und der Rest",
  deck: "Zwei Clubs aus den 1970ern, zwei, die geschlossen haben und unter neuen Namen zurückkamen, und die besten Clubs auf Ibiza für die nächste Saison.",
  answerLabel: "Die besten Clubs auf Ibiza",
  breadcrumbName: "Die besten Clubs auf Ibiza",

  answerSection: "Antwort",
  introSection: "Einleitung",
  introTitle: "Eine Saison, keine Stadt.",
  faqSection: 'FAQ',
  faqLabel: "Häufige Fragen",
  faqTitle: "Häufige Fragen zu den Clubs auf Ibiza.",

  sections: [
    {id: "pacha-and-amnesia", heading: "Pacha und Amnesia: die ersten beiden", title: "Pacha und Amnesia: die ersten beiden."},
    {id: "clubs-that-closed", heading: "Die Clubs, die geschlossen haben: Ku, Privilege und Space", title: "Die Clubs, die geschlossen haben: Ku, Privilege und Space."},
    {id: "best-clubs-now", heading: "Die besten Clubs auf Ibiza heute", title: "Die besten Clubs auf Ibiza heute."},
    {id: "where-to-stay", heading: "Wo auf Ibiza man zum Feiern wohnt", title: "Wo auf Ibiza man zum Feiern wohnt."},
    {id: "season", heading: "Die Saison auf Ibiza: Opening und Closing", title: "Die Saison auf Ibiza: Opening und Closing."}
  ],

  media: ({lang}) => ({
    "Pacha Eingang": figure("pacha-entrance", 1200, 675, "Der weiße Eingang des Pacha in Ibiza-Stadt mit roter Schrift", "Das Pacha, seit Juni 1973 in Ibiza-Stadt, fotografiert 2018. Foto: Dominic Milton Trott, CC BY 2.0."),
    "Privilege Pool": figure("privilege-pool", 1200, 896, "Das DJ-Pult des Privilege auf Ibiza über dem Pool mitten auf dem Dancefloor, in blauem Licht", "Das Privilege 2014, mit dem DJ-Pult über dem Pool. Guinness führte es als größten Nachtclub der Welt; es schloss nach 2019 und öffnete 2025 als [UNVRS] neu. Foto: Rauletemunoz, CC BY-SA 3.0."),
    "Solomun Pacha": articleVideoCollection({lang, label: "Solomun und Andhim, Pacha, Ibiza, 2014", description: "Solomun und Andhim im Pacha 2014, gefilmt von Mixmag.", items: [articleVideoCard({youtubeId: "vbWFtk0JnqE", genre: "House", artist: "Solomun und Andhim", title: "Pacha, Ibiza, 2014"})]}),
    "Sven Vath Cocoon Pacha": articleVideoCollection({lang, label: "Sven Väth, Cocoon, Pacha, 2018", description: "Sven Väth, dessen Party Cocoon im Amnesia läuft, bei einer Cocoon-Nacht im Pacha 2018, gefilmt von Mixmag.", items: [articleVideoCard({youtubeId: "y37cDo_CTu4", genre: "Techno", artist: "Sven Väth", title: "Cocoon, Pacha, 2018"})]}),
    "Nicole Moudaber Space": articleVideoCollection({lang, label: "Nicole Moudaber, Music Is Revolution, Space, Ibiza, 2014", description: "Nicole Moudaber im Space 2014, zwei Jahre vor der Schließung, gefilmt von Mixmag.", items: [articleVideoCard({youtubeId: "bSto8j4ziCg", genre: "Techno", artist: "Nicole Moudaber", title: "Music Is Revolution, Space, Ibiza, 2014"})]}),
    "Fanciulli Voorn Ushuaia": articleVideoCollection({lang, label: "Nic Fanciulli und Joris Voorn, ANTS, Ushuaïa, Ibiza, 2014", description: "Nic Fanciulli und Joris Voorn bei ANTS im Ushuaïa, dem Open-Air-Club, 2014, gefilmt von Mixmag.", items: [articleVideoCard({youtubeId: "yvG85jBbjaE", genre: "Tech house", artist: "Nic Fanciulli und Joris Voorn", title: "ANTS, Ushuaïa, Ibiza, 2014"})]}),
    "Jamie Jones Ibiza villa": articleVideoCollection({lang, label: "Jamie Jones, Boiler Room Ibiza Villa Takeovers, 2013", description: "Jamie Jones für die Reihe Ibiza Villa Takeovers von Boiler Room 2013, auf dem Kanal von Boiler Room.", items: [articleVideoCard({youtubeId: "AGdA7cmSkFk", genre: "House", artist: "Jamie Jones", title: "Boiler Room Ibiza Villa Takeovers, 2013"})]}),
    "thecatrave mix I Lost So Many Weekends Raving and I Wanna Lose Some More": ownSetListening(1, lang),
    "Tabelle: now": articleTable({
      headers: ["Club", "Gegend", "Offen seit", "Bekannt für"],
      rows: [
            [
                    "Hï Ibiza",
                    "Playa d'en Bossa",
                    "2017, auf dem Space-Gelände",
                    "Bester Club der Welt bei den DJ-Mag-Lesern, 2022 bis 2025"
            ],
            [
                    "Pacha",
                    "Ibiza-Stadt",
                    "1973",
                    "Die älteste Clubmarke der Insel, zuerst 1967 in Sitges eröffnet"
            ],
            [
                    "Amnesia",
                    "San Rafael",
                    "1976",
                    "Hauptraum und Terrasse für rund 5.000; seine fünfzigste Saison 2026"
            ],
            [
                    "DC-10",
                    "Straße nach Salinas",
                    "1999",
                    "Circoloco am Montag"
            ],
            [
                    "Ushuaïa",
                    "Playa d'en Bossa",
                    "2011",
                    "Open-Air-Club in einem Hotel, Schluss um 23 Uhr"
            ],
            [
                    "[UNVRS]",
                    "San Rafael",
                    "2025, auf dem Privilege-Gelände",
                    "Beworben als erster Hyperclub, 10.000 Plätze"
            ],
            [
                    "Es Paradis",
                    "San Antonio",
                    "Einer der ältesten der Insel",
                    "Der Club in San Antonio"
            ]
    ].map(row => row.map(escapeHtml)),
      label: "Die besten Clubs auf Ibiza heute"
    })
  }),

  sources: [
    {href: "https://www.ibiza-spotlight.com/magazine/2023/07/10-surprising-facts-about-pacha-ibiza", label: "Ibiza Spotlight: 10 surprising facts about Pacha Ibiza"},
    {href: "https://en.wikipedia.org/wiki/The_Pacha_Group", label: "Wikipedia: The Pacha Group"},
    {href: "https://ra.co/news/14731", label: "Resident Advisor: Get to know Amnesia and Pacha"},
    {href: "https://en.wikipedia.org/wiki/Amnesia_(nightclub)", label: "Wikipedia: Amnesia (nightclub)"},
    {href: "https://en.wikipedia.org/wiki/Privilege_Ibiza", label: "Wikipedia: Privilege Ibiza"},
    {href: "https://en.wikipedia.org/wiki/Space_(Ibiza_nightclub)", label: "Wikipedia: Space (Ibiza nightclub)"},
    {href: "https://en.wikipedia.org/wiki/H%C3%AF_Ibiza", label: "Wikipedia: Hï Ibiza"},
    {href: "https://en.wikipedia.org/wiki/DC10_(nightclub)", label: "Wikipedia: DC10 (nightclub)"},
    {href: "https://en.wikipedia.org/wiki/Ushua%C3%AFa_Ibiza", label: "Wikipedia: Ushuaïa Ibiza"},
    {href: "https://ra.co/news/81114", label: "Resident Advisor: Ibiza club Privilege to reopen in 2025 as [UNVRS]"},
    {href: "https://mixmag.net/read/privilege-unvrs-ibiza-white-isle-night-league-will-smith-ufo-news", label: "Mixmag: New Ibiza club [UNVRS] will open on former Privilege site in 2025"},
    {href: "https://www.dirtydiscoradio.com/best-ibiza-clubs", label: "Dirty Disco: The Best Ibiza Clubs in 2026"}
  ],

  bandcamp: {
    description: "Zwei meiner eigenen Tracks. Wer einen kauft, unterstützt meine Arbeit direkt.",
    tracks: [
      {title: "Protect Ya Breaks", id: "3822639635", url: "https://thecatrave.bandcamp.com/track/protect-ya-breaks", linkText: "Protect Ya Breaks von thecatrave"},
      {title: "Berlin Race 1909", id: "3192532299", url: "https://thecatrave.bandcamp.com/track/berlin-race-1909", linkText: "Berlin Race 1909 von thecatrave"}
    ]
  }
};
