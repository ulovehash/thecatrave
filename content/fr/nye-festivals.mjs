// French New Year's Eve festivals guide. Structure, facts and media from the English page
// (nye-festivals-draft.md, nye-festivals-research.md, build-nye-festivals-article.mjs), translated
// 2026-09-24 on the owner's instruction. Search wording from live Google
// (google.fr, hl=fr/gl=fr, 2026-09-23); volumes in keywords/fr-nye-festivals.json.
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
  lang: "fr",
  name: "fr-nye-festivals",
  file: "fr/festival-nouvel-an.html",
  draft: "fr/nye-festivals-draft.md",
  canonical: "https://thecatrave.com/fr/festival-nouvel-an",
  englishPath: "/new-years-eve-festivals",
  ogImage: "https://thecatrave.com/img/og/nye-festivals.jpg",
  bodyClass: "article-page nye-festivals-page",
  minReadingMinutes: 6,
  image: "https://thecatrave.com/img/nye-festivals/awakenings-gashouder-nye-2017-1200.webp",

  title: "Festival du Nouvel An 2026-2027 : les meilleurs",
  description: "FCKNYE, Countdown NYE, Decadence, Rhythm and Vines et Awakenings : les meilleurs festivals du Nouvel An pour la musique électronique en 2026, avec dates et lieux.",
  datePublished: '2026-09-24',
  dateModified: '2026-09-24',
  dateLabel: "24 septembre 2026",

  heroKicker: "Festival du Nouvel An",
  heroTitle: "Les meilleurs festivals du Nouvel An, de 2026 à 2027",
  deck: "Le plus grand festival du Nouvel An d'Europe à Bruxelles, des raves sur deux nuits dans des centres de congrès américains, des festivals d'été avec camping en Nouvelle-Zélande et en Australie.",
  answerLabel: "Les festivals du Nouvel An",
  breadcrumbName: "Les festivals du Nouvel An",

  answerSection: "Réponse",
  introSection: "Introduction",
  introTitle: "L'été d'un côté du monde, l'hiver de l'autre.",
  faqSection: 'FAQ',
  faqLabel: "Questions fréquentes",
  faqTitle: "Questions fréquentes sur les festivals du Nouvel An.",

  sections: [
    {id: "dates", heading: "Nouvel An 2026 : les festivals et leurs dates", title: "Nouvel An 2026 : les festivals et leurs dates."},
    {id: "europe", heading: "Le Nouvel An en Europe : le FCKNYE et les clubs", title: "Le Nouvel An en Europe : le FCKNYE et les clubs."},
    {id: "united-states", heading: "Les festivals du Nouvel An aux États-Unis", title: "Les festivals du Nouvel An aux États-Unis."},
    {id: "australia-new-zealand", heading: "Australie et Nouvelle-Zélande : le Nouvel An en été", title: "Australie et Nouvelle-Zélande : le Nouvel An en été."},
    {id: "choose", heading: "Comment choisir un festival du Nouvel An", title: "Comment choisir un festival du Nouvel An."}
  ],

  media: ({lang}) => ({
    "Awakenings NYE": figure("awakenings-gashouder-nye-2017", 1200, 900, "Des faisceaux rouges et une structure lumineuse au-dessus de la foule dans le Gashouder, à Awakenings, Amsterdam", "Awakenings au Gashouder, Amsterdam, le 31 décembre 2017. Photo : Ank Kumar, CC BY-SA 4.0."),
    "Countdown NYE 2024": articleVideoCollection({lang, label: "Insomniac, Countdown NYE 2024", description: "Le film officiel d'Insomniac sur Countdown NYE 2024, sur la chaîne d'Insomniac.", items: [articleVideoCard({youtubeId: "hCP_UosWZlI", genre: "Film du festival", artist: "Insomniac", title: "Countdown NYE 2024"})]}),
    "Tinlicker Concourse NYE": articleVideoCollection({lang, label: "Tinlicker, The Concourse Project, Austin, Nouvel An 2024", description: "Le set de Tinlicker pour le Nouvel An 2024 à The Concourse Project, à Austin, sur la chaîne du club.", items: [articleVideoCard({youtubeId: "cd6buYLu5b0", genre: "Électronique", artist: "Tinlicker", title: "The Concourse Project, Austin, Nouvel An 2024"})]}),
    "Awakenings NYE 2013": articleVideoCollection({lang, label: "Adam Beyer et Joseph Capriati, Awakenings NYE Special, Gashouder, 31 décembre 2013", description: "Adam Beyer et Joseph Capriati au Gashouder le soir du Nouvel An 2013, sur la chaîne d'Awakenings.", items: [articleVideoCard({youtubeId: "OtLn2sm0bP0", genre: "Techno", artist: "Adam Beyer et Joseph Capriati", title: "Awakenings NYE Special, Gashouder, 31 décembre 2013"})]}),
    "Rhythm and Vines 2025": articleVideoCollection({lang, label: "Rhythm et Vines, Rhythm and Vines 2025, aftermovie", description: "Le film officiel de Rhythm and Vines 2025, près de Gisborne.", items: [articleVideoCard({youtubeId: "26R8sSY7tJ4", genre: "Film du festival", artist: "Rhythm et Vines", title: "Rhythm and Vines 2025, aftermovie"})]}),
    "Beyond the Valley 2022": articleVideoCollection({lang, label: "Beyond the Valley, Beyond the Valley 2022, aftermovie", description: "Le film officiel de Beyond the Valley 2022.", items: [articleVideoCard({youtubeId: "AkKskQ_VnwY", genre: "Film du festival", artist: "Beyond the Valley", title: "Beyond the Valley 2022, aftermovie"})]}),
    "thecatrave mix I Lost So Many Weekends Raving and I Wanna Lose Some More": ownSetListening(1, lang),
    "Table: festivals": articleTable({
      headers: ["Festival", "Lieu", "Nouvel An 2026", "Son"],
      rows: [
            [
                    "FCKNYE",
                    "Brussels Expo, Belgique",
                    "Du 30 décembre 2026 au 1er janvier 2027",
                    "Rap francophone et techno, cinq scènes"
            ],
            [
                    "Countdown NYE",
                    "NOS Events Center, San Bernardino, Californie",
                    "31 décembre 2026 et 1er janvier 2027",
                    "L'EDM d'Insomniac, cinq scènes couvertes"
            ],
            [
                    "Decadence NYE",
                    "Colorado Convention Center, Denver, et Arizona",
                    "30 et 31 décembre",
                    "EDM"
            ],
            [
                    "HiJinx",
                    "Pennsylvania Convention Center, Philadelphie",
                    "30 et 31 décembre 2026",
                    "Bass music"
            ],
            [
                    "CRSSD Proper NYE",
                    "Petco Park, San Diego",
                    "Du 31 décembre 2026, 15 h, au 1er janvier 2027, 22 h",
                    "House, avec This Never Happened et Daisy Chain"
            ],
            [
                    "Lights All Night",
                    "Fair Park, Dallas, Texas", "30 et 31 décembre 2026",
                    "EDM"
            ],
            [
                    "Eternal NYE",
                    "Orlando Amphitheater, Central Florida Fairgrounds, Orlando", "30 et 31 décembre 2026",
                    "Bass music"
            ],
            [
                    "Awakenings NYE",
                    "Gashouder, Amsterdam",
                    "À vérifier sur le site",
                    "Techno"
            ],
            [
                    "Rhythm and Vines",
                    "Waiohika Estate, Gisborne, Nouvelle-Zélande", "Du 28 au 31 décembre 2026",
                    "Festival avec camping"
            ],
            [
                    "Beyond the Valley",
                    "Barunah Plains, près de Melbourne, Australie", "Du 28 décembre 2026 au 1er janvier 2027, complet",
                    "Plusieurs jours, plusieurs scènes"
            ],
            [
                    "Field Day",
                    "The Domain, Sydney",
                    "1er janvier 2027",
                    "Hip-hop, house, indie et électronique"
            ]
    ].map(row => row.map(escapeHtml)),
      label: "Nouvel An 2026 : les festivals et leurs dates"
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
    {href: "https://lightsallnight.com/", label: "Lights All Night 2026, Fair Park, Dallas"},
    {href: "https://www.jambase.com/festival/eternal-nye-2026", label: "JamBase: Eternal NYE 2026"},
    {href: "https://www.rhythmandvines.co.nz/tickets", label: "Rhythm and Vines 2026 tickets"},
    {href: "https://www.beyondthevalley.com.au/", label: "Beyond The Valley 2026"},
    {href: "https://en.wikipedia.org/wiki/Awakenings_(festival)", label: "Wikipedia: Awakenings (festival)"},
    {href: "https://www.nzherald.co.nz/gisborne-herald/news/caught-on-camera-rhythm-and-vines-over-the-years/SWYASJNH55HPVM7PU6HKS3YUQA/", label: "NZ Herald: Rhythm and Vines over the years"},
    {href: "https://en.wikipedia.org/wiki/Rhythm_%26_Vines", label: "Wikipedia: Rhythm & Vines"},
    {href: "https://www.outlooktraveller.com/destinations/international/countdown-to-2026-the-best-new-years-eve-festivals-and-celebrations-across-new-zealand", label: "Outlook Traveller: New Year's Eve festivals across New Zealand"},
    {href: "https://en.wikipedia.org/wiki/Beyond_the_Valley", label: "Wikipedia: Beyond the Valley"},
    {href: "https://www.jonesaroundtheworld.com/new-years-eve/", label: "Jones Around the World: The 12 Best New Years Eve Music Festivals in Australia"},
    {href: "https://mixesdb.com/w/2024-12-31_-_Tinlicker_@_NYE,_The_Concourse_Project,_Austin,_USA", label: "Mixes DB: Tinlicker at The Concourse Project, Austin, 31 December 2024"}
  ],

  bandcamp: {
    description: "Deux de mes morceaux. En acheter un soutient mon travail directement.",
    tracks: [
      {title: "Protect Ya Breaks", id: "3822639635", url: "https://thecatrave.bandcamp.com/track/protect-ya-breaks", linkText: "Protect Ya Breaks par thecatrave"},
      {title: "Berlin Race 1909", id: "3192532299", url: "https://thecatrave.bandcamp.com/track/berlin-race-1909", linkText: "Berlin Race 1909 par thecatrave"}
    ]
  }
};
