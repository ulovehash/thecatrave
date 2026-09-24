// German New Year's Eve festivals guide. Structure, facts and media from the English page
// (nye-festivals-draft.md, nye-festivals-research.md, build-nye-festivals-article.mjs), translated
// 2026-09-24 on the owner's instruction. Search wording from live Google
// (google.de, hl=de/gl=de, 2026-09-23); volumes in keywords/de-nye-festivals.json.
// The images are the English guide's, with translated captions.
// Sections run Europe first here (FCKNYE in Brussels, Awakenings in Amsterdam),
// the reverse of the English page, because they are the events nearest the reader.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, ownSetListening
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/nye-festivals/${name}-${width}.webp`,
  srcset: `img/nye-festivals/${name}-320.webp 320w, img/nye-festivals/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

export default {
  lang: "de",
  name: "de-nye-festivals",
  file: "de/silvester-rave.html",
  draft: "de/nye-festivals-draft.md",
  canonical: "https://thecatrave.com/de/silvester-rave",
  englishPath: "/new-years-eve-festivals",
  ogImage: "https://thecatrave.com/img/og/nye-festivals.jpg",
  bodyClass: "article-page nye-festivals-page",
  minReadingMinutes: 6,
  image: "https://thecatrave.com/img/nye-festivals/awakenings-gashouder-nye-2017-1200.webp",

  title: "Silvester-Rave und Festivals 2026/27: die besten",
  description: "FCKNYE, Countdown NYE, Decadence, Rhythm and Vines und Awakenings: die besten Silvester-Raves und Festivals für elektronische Musik 2026, mit Terminen.",
  datePublished: '2026-09-24',
  dateModified: '2026-09-24',
  dateLabel: "24. September 2026",

  heroKicker: "Silvester-Rave",
  heroTitle: "Die besten Silvester-Raves und -Festivals, 2026 ins Jahr 2027",
  deck: "Europas größtes Neujahrsfestival in Brüssel, Raves über zwei Nächte in amerikanischen Messehallen, Sommer-Camping-Festivals in Neuseeland und Australien.",
  answerLabel: "Silvester-Festivals",
  breadcrumbName: "Silvester-Festivals",

  answerSection: "Antwort",
  introSection: "Einleitung",
  introTitle: "Sommer auf der einen Halbkugel, Winter auf der anderen.",
  faqSection: 'FAQ',
  faqLabel: "Häufige Fragen",
  faqTitle: "Häufige Fragen zu Silvester-Festivals.",

  sections: [
    {id: "dates", heading: "Silvester 2026: die Festivals und ihre Termine", title: "Silvester 2026: die Festivals und ihre Termine."},
    {id: "europe", heading: "Silvester in Europa: FCKNYE und die Clubs", title: "Silvester in Europa: FCKNYE und die Clubs."},
    {id: "united-states", heading: "Silvester-Festivals in den USA", title: "Silvester-Festivals in den USA."},
    {id: "australia-new-zealand", heading: "Australien und Neuseeland: Neujahr im Sommer", title: "Australien und Neuseeland: Neujahr im Sommer."},
    {id: "choose", heading: "Wie man ein Silvester-Festival wählt", title: "Wie man ein Silvester-Festival wählt."}
  ],

  media: ({lang}) => ({
    "Awakenings NYE": figure("awakenings-gashouder-nye-2017", 1200, 900, "Rote Lichtstrahlen und ein beleuchtetes Rig über der Menge im Gashouder bei Awakenings in Amsterdam", "Awakenings im Gashouder, Amsterdam, am 31. Dezember 2017. Foto: Ank Kumar, CC BY-SA 4.0."),
    "Countdown NYE 2024": articleVideoCollection({lang, label: "Insomniac, Countdown NYE 2024", description: "Der eigene Film von Insomniac über Countdown NYE 2024, auf dem Kanal von Insomniac.", items: [articleVideoCard({youtubeId: "hCP_UosWZlI", genre: "Festivalfilm", artist: "Insomniac", title: "Countdown NYE 2024"})]}),
    "Tinlicker Concourse NYE": articleVideoCollection({lang, label: "Tinlicker, The Concourse Project, Austin, Silvester 2024", description: "Das Silvesterset 2024 von Tinlicker in The Concourse Project in Austin, auf dem Kanal des Clubs.", items: [articleVideoCard({youtubeId: "cd6buYLu5b0", genre: "Elektronisch", artist: "Tinlicker", title: "The Concourse Project, Austin, Silvester 2024"})]}),
    "Awakenings NYE 2013": articleVideoCollection({lang, label: "Adam Beyer und Joseph Capriati, Awakenings NYE Special, Gashouder, 31. Dezember 2013", description: "Adam Beyer und Joseph Capriati im Gashouder an Silvester 2013, auf dem Kanal von Awakenings.", items: [articleVideoCard({youtubeId: "OtLn2sm0bP0", genre: "Techno", artist: "Adam Beyer und Joseph Capriati", title: "Awakenings NYE Special, Gashouder, 31. Dezember 2013"})]}),
    "Rhythm and Vines 2025": articleVideoCollection({lang, label: "Rhythm und Vines, Rhythm and Vines 2025, Aftermovie", description: "Der eigene Film des Festivals über Rhythm and Vines 2025, bei Gisborne.", items: [articleVideoCard({youtubeId: "26R8sSY7tJ4", genre: "Festivalfilm", artist: "Rhythm und Vines", title: "Rhythm and Vines 2025, Aftermovie"})]}),
    "Beyond the Valley 2022": articleVideoCollection({lang, label: "Beyond the Valley, Beyond the Valley 2022, Aftermovie", description: "Der eigene Film des Festivals über Beyond the Valley 2022.", items: [articleVideoCard({youtubeId: "AkKskQ_VnwY", genre: "Festivalfilm", artist: "Beyond the Valley", title: "Beyond the Valley 2022, Aftermovie"})]}),
    "thecatrave mix I Lost So Many Weekends Raving and I Wanna Lose Some More": ownSetListening(1, lang),
    "Tabelle: festivals": articleTable({
      headers: ["Festival", "Ort", "Silvester 2026", "Sound"],
      rows: [
            [
                    "FCKNYE",
                    "Brussels Expo, Belgien",
                    "30. Dezember 2026 bis 1. Januar 2027",
                    "Französischsprachiger Rap und Techno, fünf Bühnen"
            ],
            [
                    "Countdown NYE",
                    "NOS Events Center, San Bernardino, Kalifornien",
                    "31. Dezember 2026 und 1. Januar 2027",
                    "EDM von Insomniac, fünf überdachte Bühnen"
            ],
            [
                    "Decadence NYE",
                    "Colorado Convention Center, Denver, und Arizona",
                    "30. und 31. Dezember",
                    "EDM"
            ],
            [
                    "HiJinx",
                    "Pennsylvania Convention Center, Philadelphia",
                    "30. und 31. Dezember 2026",
                    "Bass Music"
            ],
            [
                    "CRSSD Proper NYE",
                    "Petco Park, San Diego",
                    "31. Dezember 2026, 15 Uhr, bis 1. Januar 2027, 22 Uhr",
                    "House, mit This Never Happened und Daisy Chain"
            ],
            [
                    "Lights All Night",
                    "Dallas Market Hall, Texas",
                    "Auf der Website prüfen",
                    "EDM"
            ],
            [
                    "Eternal NYE",
                    "Orlando, Florida",
                    "Auf der Website prüfen",
                    "Bass Music"
            ],
            [
                    "Awakenings NYE",
                    "Gashouder, Amsterdam",
                    "Auf der Website prüfen",
                    "Techno"
            ],
            [
                    "Rhythm and Vines",
                    "Waiohika Estate, Gisborne, Neuseeland",
                    "Auf der Website prüfen",
                    "Camping-Festival"
            ],
            [
                    "Beyond the Valley",
                    "Bei Melbourne, Australien",
                    "Auf der Website prüfen",
                    "Mehrtägiges Festival, mehrere Bühnen"
            ],
            [
                    "Field Day",
                    "The Domain, Sydney",
                    "1. Januar 2027",
                    "Hip-Hop, House, Indie und Elektronik"
            ]
    ].map(row => row.map(escapeHtml)),
      label: "Silvester 2026: die Festivals und ihre Termine"
    })
  }),

  sources: [
    {href: "https://press.insomniac.com/blog/countdown-nye-will-expand-to-two-days-and-return-to-nos-event-center-for-2026-festival", label: "Insomniac: Countdown NYE will expand to two days and return to NOS Event Center for 2026"},
    {href: "https://countdownnye.com/", label: "Countdown NYE"},
    {href: "https://www.westword.com/music/decadence-colorado-2026-full-denver-lineup-40924879/", label: "Westword: Decadence NYE 2026 drops full Denver lineup"},
    {href: "https://decadencenye.com/", label: "Decadence NYE"},
    {href: "https://ra.co/events/310275", label: "Resident Advisor: Decadence New Years Eve, Colorado Convention Center, 2011"},
    {href: "https://hijinxfest.com/", label: "HiJinx Festival"},
    {href: "https://www.propernye.com/", label: "CRSSD Proper NYE"},
    {href: "https://www.petcoparkinsider.com/crssd-proper", label: "Petco Park Insider: CRSSD Proper NYE 2026 / NYD 2027"},
    {href: "https://www.dmagazine.com/arts-entertainment/2020/01/ten-years-in-lights-all-night-endures/", label: "D Magazine: Ten Years In, Lights All Night Endures"},
    {href: "https://www.eternalnye.com/", label: "Eternal NYE"},
    {href: "https://www.rtbf.be/article/70-000-festivaliers-attendus-au-festival-fcknye-a-brussels-expo-11654727", label: "RTBF: 70.000 festivaliers attendus au festival FCKNYE à Brussels Expo"},
    {href: "https://handsupelectro.fr/evenement/fcknye-festival-la-programmation-complete-devoilee-pour-2026/", label: "Hands UP Electro: FCKNYE Festival, la programmation complète"},
    {href: "https://www.raveparty.fr/festival/fcknye-festival", label: "RaveRadar: FCKNYE Festival 2026 dates"},
    {href: "https://en.wikipedia.org/wiki/Awakenings_(festival)", label: "Wikipedia: Awakenings (festival)"},
    {href: "https://www.nzherald.co.nz/gisborne-herald/news/caught-on-camera-rhythm-and-vines-over-the-years/SWYASJNH55HPVM7PU6HKS3YUQA/", label: "NZ Herald: Rhythm and Vines over the years"},
    {href: "https://en.wikipedia.org/wiki/Rhythm_%26_Vines", label: "Wikipedia: Rhythm & Vines"},
    {href: "https://www.outlooktraveller.com/destinations/international/countdown-to-2026-the-best-new-years-eve-festivals-and-celebrations-across-new-zealand", label: "Outlook Traveller: New Year's Eve festivals across New Zealand"},
    {href: "https://en.wikipedia.org/wiki/Beyond_the_Valley", label: "Wikipedia: Beyond the Valley"},
    {href: "https://www.jonesaroundtheworld.com/new-years-eve/", label: "Jones Around the World: The 12 Best New Years Eve Music Festivals in Australia"},
    {href: "https://mixesdb.com/w/2024-12-31_-_Tinlicker_@_NYE,_The_Concourse_Project,_Austin,_USA", label: "Mixes DB: Tinlicker at The Concourse Project, Austin, 31 December 2024"}
  ],

  bandcamp: {
    description: "Zwei meiner eigenen Tracks. Wer einen kauft, unterstützt meine Arbeit direkt.",
    tracks: [
      {title: "Protect Ya Breaks", id: "3822639635", url: "https://thecatrave.bandcamp.com/track/protect-ya-breaks", linkText: "Protect Ya Breaks von thecatrave"},
      {title: "Berlin Race 1909", id: "3192532299", url: "https://thecatrave.bandcamp.com/track/berlin-race-1909", linkText: "Berlin Race 1909 von thecatrave"}
    ]
  }
};
