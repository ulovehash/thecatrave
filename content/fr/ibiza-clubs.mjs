// French Ibiza clubs guide. Structure, facts and media from the English page
// (ibiza-clubs-draft.md, ibiza-clubs-research.md, build-ibiza-clubs-article.mjs), translated
// 2026-09-24 on the owner's instruction. Search wording from live Google
// (google.fr, hl=fr/gl=fr, 2026-09-23); volumes in keywords/fr-ibiza-clubs.json.
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
  lang: "fr",
  name: "fr-ibiza-clubs",
  file: "fr/boite-de-nuit-ibiza.html",
  draft: "fr/ibiza-clubs-draft.md",
  canonical: "https://thecatrave.com/fr/boite-de-nuit-ibiza",
  englishPath: "/best-clubs-in-ibiza",
  ogImage: "https://thecatrave.com/img/og/ibiza-clubs.jpg",
  bodyClass: "article-page ibiza-clubs-page",
  minReadingMinutes: 6,
  image: "https://thecatrave.com/img/ibiza-clubs/pacha-entrance-1200.webp",

  title: "Boite de nuit Ibiza : Pacha, Amnesia, Hï et les autres",
  description: "Hï, Pacha, Amnesia, DC-10, Ushuaïa et [UNVRS] : les meilleures boîtes de nuit à Ibiza, celles qui ont fermé, où loger et quand dure la saison.",
  datePublished: '2026-09-24',
  dateModified: '2026-09-24',
  dateLabel: "24 septembre 2026",

  heroKicker: "Boite de nuit Ibiza",
  heroTitle: "Les meilleures boites de nuit à Ibiza : Pacha, Amnesia, Hï et les autres",
  deck: "Deux clubs des années 1970, deux qui ont fermé puis rouvert sous d'autres noms, et les meilleures boîtes de nuit à Ibiza pour la saison à venir.",
  answerLabel: "Les meilleures boites de nuit à Ibiza",
  breadcrumbName: "Les meilleures boites de nuit à Ibiza",

  answerSection: "Réponse",
  introSection: "Introduction",
  introTitle: "Une saison, pas une ville.",
  faqSection: 'FAQ',
  faqLabel: "Questions fréquentes",
  faqTitle: "Questions fréquentes sur les boites de nuit à Ibiza.",

  sections: [
    {id: "pacha-and-amnesia", heading: "Pacha et Amnesia : les deux premières", title: "Pacha et Amnesia : les deux premières."},
    {id: "clubs-that-closed", heading: "Les clubs qui ont fermé : Ku, Privilege et Space", title: "Les clubs qui ont fermé : Ku, Privilege et Space."},
    {id: "best-clubs-now", heading: "Les meilleures boites de nuit à Ibiza aujourd'hui", title: "Les meilleures boites de nuit à Ibiza aujourd'hui."},
    {id: "where-to-stay", heading: "Où loger à Ibiza pour faire la fête", title: "Où loger à Ibiza pour faire la fête."},
    {id: "season", heading: "La saison à Ibiza : ouverture et fermeture", title: "La saison à Ibiza : ouverture et fermeture."}
  ],

  media: ({lang}) => ({
    "Entrée du Pacha": figure("pacha-entrance", 1200, 675, "L'entrée blanche du Pacha à Ibiza-ville, avec ses lettres rouges", "Le Pacha, à Ibiza-ville depuis juin 1973, photographié en 2018. Photo : Dominic Milton Trott, CC BY 2.0."),
    "Piscine du Privilege": figure("privilege-pool", 1200, 896, "La cabine DJ du Privilege à Ibiza au-dessus de la piscine, au milieu du dancefloor, sous une lumière bleue", "Le Privilege en 2014, avec la cabine au-dessus de la piscine. Le Guinness l'a classé plus grande boîte de nuit du monde ; il a fermé après 2019 et rouvert en 2025 sous le nom de [UNVRS]. Photo : Rauletemunoz, CC BY-SA 3.0."),
    "Solomun Pacha": articleVideoCollection({lang, label: "Solomun et Andhim, Pacha, Ibiza, 2014", description: "Solomun et Andhim au Pacha en 2014, filmés par Mixmag.", items: [articleVideoCard({youtubeId: "vbWFtk0JnqE", genre: "House", artist: "Solomun et Andhim", title: "Pacha, Ibiza, 2014"})]}),
    "Sven Vath Cocoon Pacha": articleVideoCollection({lang, label: "Sven Väth, Cocoon, Pacha, 2018", description: "Sven Väth, dont la fête Cocoon se tient à l'Amnesia, lors d'une nuit Cocoon au Pacha en 2018, filmé par Mixmag.", items: [articleVideoCard({youtubeId: "y37cDo_CTu4", genre: "Techno", artist: "Sven Väth", title: "Cocoon, Pacha, 2018"})]}),
    "Nicole Moudaber Space": articleVideoCollection({lang, label: "Nicole Moudaber, Music Is Revolution, Space, Ibiza, 2014", description: "Nicole Moudaber au Space en 2014, deux ans avant sa fermeture, filmée par Mixmag.", items: [articleVideoCard({youtubeId: "bSto8j4ziCg", genre: "Techno", artist: "Nicole Moudaber", title: "Music Is Revolution, Space, Ibiza, 2014"})]}),
    "Fanciulli Voorn Ushuaia": articleVideoCollection({lang, label: "Nic Fanciulli et Joris Voorn, ANTS, Ushuaïa, Ibiza, 2014", description: "Nic Fanciulli et Joris Voorn à ANTS, à l'Ushuaïa, le club en plein air, en 2014, filmés par Mixmag.", items: [articleVideoCard({youtubeId: "yvG85jBbjaE", genre: "Tech house", artist: "Nic Fanciulli et Joris Voorn", title: "ANTS, Ushuaïa, Ibiza, 2014"})]}),
    "Jamie Jones Ibiza villa": articleVideoCollection({lang, label: "Jamie Jones, Boiler Room Ibiza Villa Takeovers, 2013", description: "Jamie Jones pour la série Ibiza Villa Takeovers de Boiler Room en 2013, sur la chaîne de Boiler Room.", items: [articleVideoCard({youtubeId: "AGdA7cmSkFk", genre: "House", artist: "Jamie Jones", title: "Boiler Room Ibiza Villa Takeovers, 2013"})]}),
    "thecatrave mix I Lost So Many Weekends Raving and I Wanna Lose Some More": ownSetListening(1, lang),
    "Table: now": articleTable({
      headers: ["Boîte", "Zone", "Ouverte depuis", "Connue pour"],
      rows: [
            [
                    "Hï Ibiza",
                    "Playa d'en Bossa",
                    "2017, sur le site du Space",
                    "Meilleur club du monde pour les lecteurs de DJ Mag, de 2022 à 2025"
            ],
            [
                    "Pacha",
                    "Ibiza-ville",
                    "1973",
                    "La plus ancienne marque de club de l'île, née à Sitges en 1967"
            ],
            [
                    "Amnesia",
                    "San Rafael",
                    "1976",
                    "Grande salle et terrasse pour environ 5 000 personnes ; sa cinquantième saison en 2026"
            ],
            [
                    "DC-10",
                    "Route de Salinas",
                    "1999",
                    "Circoloco le lundi"
            ],
            [
                    "Ushuaïa",
                    "Playa d'en Bossa",
                    "2011",
                    "Club en plein air dans un hôtel, fin à 23 heures"
            ],
            [
                    "[UNVRS]",
                    "San Rafael",
                    "2025, sur le site du Privilege",
                    "Présenté comme le premier hyperclub, 10 000 places"
            ],
            [
                    "Es Paradis",
                    "San Antonio",
                    "L'une des plus anciennes de l'île",
                    "Le club de San Antonio"
            ]
    ].map(row => row.map(escapeHtml)),
      label: "Les meilleures boites de nuit à Ibiza aujourd'hui"
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
    description: "Deux de mes morceaux. En acheter un soutient mon travail directement.",
    tracks: [
      {title: "Protect Ya Breaks", id: "3822639635", url: "https://thecatrave.bandcamp.com/track/protect-ya-breaks", linkText: "Protect Ya Breaks par thecatrave"},
      {title: "Berlin Race 1909", id: "3192532299", url: "https://thecatrave.bandcamp.com/track/berlin-race-1909", linkText: "Berlin Race 1909 par thecatrave"}
    ]
  }
};
