// German Amsterdam clubs guide. Structure, facts and media from the English page
// (amsterdam-clubs-draft.md, amsterdam-clubs-research.md, build-amsterdam-clubs-article.mjs), translated
// 2026-09-24 on the owner's instruction. Search wording from live Google
// (google.de, hl=de/gl=de, 2026-09-23); volumes in keywords/de-amsterdam-clubs.json.
// The images are the English guide's, with translated captions.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, ownSetListening
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/amsterdam-clubs/${name}-${width}.webp`,
  srcset: `img/amsterdam-clubs/${name}-320.webp 320w, img/amsterdam-clubs/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

export default {
  lang: "de",
  name: "de-amsterdam-clubs",
  file: "de/clubs-amsterdam.html",
  draft: "de/amsterdam-clubs-draft.md",
  canonical: "https://thecatrave.com/de/clubs-amsterdam",
  englishPath: "/best-clubs-in-amsterdam",
  ogImage: "https://thecatrave.com/img/og/amsterdam-clubs.jpg",
  bodyClass: "article-page amsterdam-clubs-page",
  minReadingMinutes: 6,
  image: "https://thecatrave.com/img/amsterdam-clubs/paradiso-1200.webp",

  title: "Clubs in Amsterdam: vom RoXY bis zum Radion",
  description: "Shelter, Radion, Lofi und der Gashouder: die besten Clubs in Amsterdam heute, warum sie 24 Stunden offen haben, und die Geschichte vom RoXY bis zur De School.",
  datePublished: '2026-09-24',
  dateModified: '2026-09-24',
  dateLabel: "24. September 2026",

  heroKicker: "Clubs Amsterdam",
  heroTitle: "Die besten Clubs in Amsterdam, vom RoXY bis zum Radion",
  deck: "Der Club, mit dem die niederländische Dance-Musik anfing, die 24-Stunden-Räume, die ihn ersetzt haben, und die Clubs in Amsterdam, die heute eine Nacht wert sind.",
  answerLabel: "Die besten Clubs in Amsterdam",
  breadcrumbName: "Die besten Clubs in Amsterdam",

  answerSection: "Antwort",
  introSection: "Einleitung",
  introTitle: "Clubs außerhalb des Grachtengürtels.",
  faqSection: 'FAQ',
  faqLabel: "Häufige Fragen",
  faqTitle: "Häufige Fragen zu Clubs in Amsterdam.",

  sections: [
    {id: "where-it-started", heading: "Wo es anfing: RoXY, Mazzo und iT", title: "Wo es anfing: RoXY, Mazzo und iT."},
    {id: "club-11-to-de-school", heading: "Vom Club 11 zur De School", title: "Vom Club 11 zur De School."},
    {id: "best-clubs-now", heading: "Die besten Clubs in Amsterdam heute", title: "Die besten Clubs in Amsterdam heute."},
    {id: "techno-clubs", heading: "Die besten Techno-Clubs in Amsterdam", title: "Die besten Techno-Clubs in Amsterdam."},
    {id: "day-long-licences", heading: "Warum Clubs in Amsterdam den ganzen Tag offen haben", title: "Warum Clubs in Amsterdam den ganzen Tag offen haben."},
    {id: "where-to-go", heading: "Wohin gehen: Noord, Nieuw-West und das Zentrum", title: "Wohin gehen: Noord, Nieuw-West und das Zentrum."}
  ],

  media: ({lang}) => ({
    "Paradiso": figure("paradiso", 1200, 917, "Die Backsteinfassade des Paradiso, eines ehemaligen Kirchensaals in Amsterdam", "Das Paradiso, 1879 und 1880 als Versammlungshaus gebaut und seit dem 30. März 1968 Veranstaltungsort. Foto: Andreas Praefcke, CC BY 3.0."),
    "Gashouder": figure("gashouder", 1200, 800, "Der runde eiserne Gasometer der Westergasfabriek in Amsterdam, vom Park aus gesehen", "Der Gashouder auf der Westergasfabriek, wo Awakenings seit 1997 stattfindet. Foto: Bert van As, Rijksdienst voor het Cultureel Erfgoed, CC BY-SA 4.0."),
    "Richie Hawtin Amsterdam": articleVideoCollection({lang, label: "Richie Hawtin, DJ-Set, Boiler Room Amsterdam, 2012", description: "Das Set von Richie Hawtin für Boiler Room in Amsterdam 2012, auf dem Kanal von Boiler Room.", items: [articleVideoCard({youtubeId: "sui24hHDZDI", genre: "Techno", artist: "Richie Hawtin", title: "DJ-Set, Boiler Room Amsterdam, 2012"})]}),
    "Maceo Plex Awakenings Gashouder": articleVideoCollection({lang, label: "Maceo Plex, Mosaic x Awakenings im Gashouder, ADE 2018", description: "Maceo Plex im Gashouder während des Amsterdam Dance Event 2018, gefilmt von Mixmag.", items: [articleVideoCard({youtubeId: "gR_nkH5B35s", genre: "Techno", artist: "Maceo Plex", title: "Mosaic x Awakenings im Gashouder, ADE 2018"})]}),
    "Dave Clarke Amsterdam ADE": articleVideoCollection({lang, label: "Dave Clarke, DJ-Set, Boiler Room Amsterdam x ADE, 2014", description: "Das Set von Dave Clarke für Boiler Room während des Amsterdam Dance Event 2014, auf dem Kanal von Boiler Room.", items: [articleVideoCard({youtubeId: "IVohvU3WApo", genre: "Techno", artist: "Dave Clarke", title: "DJ-Set, Boiler Room Amsterdam x ADE, 2014"})]}),
    "Motor City Drum Ensemble Dekmantel": articleVideoCollection({lang, label: "Motor City Drum Ensemble, Boiler Room x Dekmantel Festival, Amsterdam, 2014", description: "Motor City Drum Ensemble bei Dekmantel 2014, auf dem Kanal von Boiler Room.", items: [articleVideoCard({youtubeId: "p6ozF0Y-PzU", genre: "House", artist: "Motor City Drum Ensemble", title: "Boiler Room x Dekmantel Festival, Amsterdam, 2014"})]}),
    "thecatrave mix I Like to Smoke in Silence After Raves": ownSetListening(0, lang, 'Dreißig Tracks zwischen Garage, Bass Music, Techno und Rave. Mein eigener Mix.'),
    "Tabelle: now": articleTable({
      headers: ["Club", "Gegend", "Musik und Charakter", "Am besten für"],
      rows: [
            [
                    "Shelter",
                    "Noord, unter dem A'DAM Tower",
                    "Techno und House auf einer Funktion-One-Anlage, 24-Stunden-Genehmigung seit 2016",
                    "Eine lange Nacht jenseits des IJ"
            ],
            [
                    "Radion",
                    "Nieuw-West",
                    "Techno im ehemaligen ACTA-Gebäude, 24-Stunden-Genehmigung seit 2015",
                    "Nackte Betonräume und industrieller Techno"
            ],
            [
                    "Lofi",
                    "Sloterdijk",
                    "Ein kreativer Ort in einer alten Busgarage",
                    "Das lokale Publikum"
            ],
            [
                    "Garage Noord",
                    "Noord",
                    "Vielfältige, progressive Bookings in einer ehemaligen Autowerkstatt",
                    "Ein kleiner Raum"
            ],
            [
                    "Warehouse Elementenstraat",
                    "Nahe dem Hafen",
                    "Vier Räume für Techno, 2014 wiedereröffnet",
                    "Die größten regulären Clubnächte"
            ],
            [
                    "Melkweg",
                    "Leidseplein",
                    "Konzerthalle seit 1970, mit Clubnächten",
                    "Eine Nacht, die mit einer Band beginnt"
            ],
            [
                    "Paradiso",
                    "Leidseplein",
                    "Ehemaliger Kirchensaal, Veranstaltungsort seit 1968",
                    "Der berühmteste Veranstaltungsort der Stadt"
            ]
    ].map(row => row.map(escapeHtml)),
      label: "Die besten Clubs in Amsterdam heute"
    })
  }),

  sources: [
    {href: "https://www.vice.com/en/article/ade-amsterdams-most-legendary-clubs/", label: "Vice: Amsterdam's Most Legendary Clubs"},
    {href: "https://3voor12.vpro.nl/artikelen/heimwee-naar-club-11", label: "VPRO 3voor12: Heimwee naar Club 11"},
    {href: "https://rozenbergquarterly.com/high-amsterdam-van-roxy-tot-regelgeving/", label: "Rozenberg Quarterly: High Amsterdam, van RoXY tot regelgeving"},
    {href: "https://en.wikipedia.org/wiki/Paradiso_(Amsterdam)", label: "Wikipedia: Paradiso (Amsterdam)"},
    {href: "https://en.wikipedia.org/wiki/Melkweg", label: "Wikipedia: Melkweg"},
    {href: "https://en.wikipedia.org/wiki/De_School", label: "Wikipedia: De School"},
    {href: "https://en.wikipedia.org/wiki/Awakenings_(festival)", label: "Wikipedia: Awakenings (festival)"},
    {href: "https://www.timeout.com/amsterdam/nightlife/best-clubs-in-amsterdam", label: "Time Out: The 13 best clubs in Amsterdam, updated 7 February 2025"},
    {href: "https://www.dirtydiscoradio.com/best-clubs-amsterdam", label: "Dirty Disco: The Best Clubs in Amsterdam for House and Techno Fans"},
    {href: "https://adamtoren.nl/shelter/", label: "A'DAM Toren: Shelter"},
    {href: "https://mixmag.net/read/two-new-venues-awarded-24-hour-licenses-in-amsterdam-news", label: "Mixmag: Two Amsterdam venues have been awarded 24-hour licenses"},
    {href: "https://www.pbs.org/newshour/show/behind-amsterdams-infamous-club-scene-this-night-mayor-keeps-the-peace", label: "PBS NewsHour: Behind Amsterdam's thriving club scene, this 'night mayor' keeps the peace"}
  ],

  bandcamp: {
    description: "Zwei meiner eigenen Tracks. Wer einen kauft, unterstützt meine Arbeit direkt.",
    tracks: [
      {title: "Protect Ya Breaks", id: "3822639635", url: "https://thecatrave.bandcamp.com/track/protect-ya-breaks", linkText: "Protect Ya Breaks von thecatrave"},
      {title: "Berlin Race 1909", id: "3192532299", url: "https://thecatrave.bandcamp.com/track/berlin-race-1909", linkText: "Berlin Race 1909 von thecatrave"}
    ]
  }
};
