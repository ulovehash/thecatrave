// French Amsterdam clubs guide. Structure, facts and media from the English page
// (amsterdam-clubs-draft.md, amsterdam-clubs-research.md, build-amsterdam-clubs-article.mjs), translated
// 2026-09-24 on the owner's instruction. Search wording from live Google
// (google.fr, hl=fr/gl=fr, 2026-09-23); volumes in keywords/fr-amsterdam-clubs.json.
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
  lang: "fr",
  name: "fr-amsterdam-clubs",
  file: "fr/boite-de-nuit-amsterdam.html",
  draft: "fr/amsterdam-clubs-draft.md",
  canonical: "https://thecatrave.com/fr/boite-de-nuit-amsterdam",
  englishPath: "/best-clubs-in-amsterdam",
  ogImage: "https://thecatrave.com/img/og/amsterdam-clubs.jpg",
  bodyClass: "article-page amsterdam-clubs-page",
  minReadingMinutes: 6,
  image: "https://thecatrave.com/img/amsterdam-clubs/paradiso-1200.webp",

  title: "Boite de nuit Amsterdam : les meilleurs clubs",
  description: "Shelter, Radion, Lofi et le Gashouder : les meilleures boîtes de nuit à Amsterdam aujourd'hui, pourquoi elles ouvrent 24 heures, et l'histoire du RoXY à De School.",
  datePublished: '2026-09-24',
  dateModified: '2026-09-24',
  dateLabel: "24 septembre 2026",

  heroKicker: "Boite de nuit Amsterdam",
  heroTitle: "Les meilleures boites de nuit à Amsterdam, du RoXY au Radion",
  deck: "Le club où la dance music néerlandaise a commencé, les salles ouvertes 24 heures qui l'ont remplacé, et les boîtes de nuit d'Amsterdam qui valent une nuit aujourd'hui.",
  answerLabel: "Les meilleures boites de nuit à Amsterdam",
  breadcrumbName: "Les meilleures boites de nuit à Amsterdam",

  answerSection: "Réponse",
  introSection: "Introduction",
  introTitle: "Des clubs hors de la ceinture des canaux.",
  faqSection: 'FAQ',
  faqLabel: "Questions fréquentes",
  faqTitle: "Questions fréquentes sur les boites de nuit à Amsterdam.",

  sections: [
    {id: "where-it-started", heading: "Les débuts : RoXY, Mazzo et iT", title: "Les débuts : RoXY, Mazzo et iT."},
    {id: "club-11-to-de-school", heading: "Du Club 11 à De School", title: "Du Club 11 à De School."},
    {id: "best-clubs-now", heading: "Les meilleures boites de nuit à Amsterdam aujourd'hui", title: "Les meilleures boites de nuit à Amsterdam aujourd'hui."},
    {id: "techno-clubs", heading: "Les meilleurs clubs techno à Amsterdam", title: "Les meilleurs clubs techno à Amsterdam."},
    {id: "day-long-licences", heading: "Pourquoi les clubs d'Amsterdam restent ouverts toute la journée", title: "Pourquoi les clubs d'Amsterdam restent ouverts toute la journée."},
    {id: "where-to-go", heading: "Où sortir : Noord, Nieuw-West et le centre", title: "Où sortir : Noord, Nieuw-West et le centre."}
  ],

  media: ({lang}) => ({
    "Paradiso": figure("paradiso", 1200, 917, "La façade en brique du Paradiso, ancienne salle d'église à Amsterdam", "Le Paradiso, construit en 1879 et 1880 comme salle de réunion et salle de concerts depuis le 30 mars 1968. Photo : Andreas Praefcke, CC BY 3.0."),
    "Gashouder": figure("gashouder", 1200, 800, "Le gazomètre rond en fer de la Westergasfabriek à Amsterdam, vu depuis le parc", "Le Gashouder, sur le site de la Westergasfabriek, où Awakenings a lieu depuis 1997. Photo : Bert van As, Rijksdienst voor het Cultureel Erfgoed, CC BY-SA 4.0."),
    "Richie Hawtin Amsterdam": articleVideoCollection({lang, label: "Richie Hawtin, DJ set, Boiler Room Amsterdam, 2012", description: "Le set de Richie Hawtin pour Boiler Room à Amsterdam en 2012, sur la chaîne de Boiler Room.", items: [articleVideoCard({youtubeId: "sui24hHDZDI", genre: "Techno", artist: "Richie Hawtin", title: "DJ set, Boiler Room Amsterdam, 2012"})]}),
    "Maceo Plex Awakenings Gashouder": articleVideoCollection({lang, label: "Maceo Plex, Mosaic x Awakenings au Gashouder, ADE 2018", description: "Maceo Plex au Gashouder pendant l'Amsterdam Dance Event 2018, filmé par Mixmag.", items: [articleVideoCard({youtubeId: "gR_nkH5B35s", genre: "Techno", artist: "Maceo Plex", title: "Mosaic x Awakenings au Gashouder, ADE 2018"})]}),
    "Dave Clarke Amsterdam ADE": articleVideoCollection({lang, label: "Dave Clarke, DJ set, Boiler Room Amsterdam x ADE, 2014", description: "Le set de Dave Clarke pour Boiler Room pendant l'Amsterdam Dance Event 2014, sur la chaîne de Boiler Room.", items: [articleVideoCard({youtubeId: "IVohvU3WApo", genre: "Techno", artist: "Dave Clarke", title: "DJ set, Boiler Room Amsterdam x ADE, 2014"})]}),
    "Motor City Drum Ensemble Dekmantel": articleVideoCollection({lang, label: "Motor City Drum Ensemble, Boiler Room x Dekmantel Festival, Amsterdam, 2014", description: "Motor City Drum Ensemble à Dekmantel en 2014, sur la chaîne de Boiler Room.", items: [articleVideoCard({youtubeId: "p6ozF0Y-PzU", genre: "House", artist: "Motor City Drum Ensemble", title: "Boiler Room x Dekmantel Festival, Amsterdam, 2014"})]}),
    "thecatrave mix I Like to Smoke in Silence After Raves": ownSetListening(0, lang, 'Trente morceaux entre garage, bass music, techno et rave. Mon propre mix.'),
    "Table: now": articleTable({
      headers: ["Club", "Quartier", "Musique et caractère", "Idéal pour"],
      rows: [
            [
                    "Shelter",
                    "Noord, sous l'A'DAM Tower",
                    "Techno et house sur un système Funktion-One, autorisation de 24 heures depuis 2016",
                    "Une longue nuit de l'autre côté de l'IJ"
            ],
            [
                    "Radion",
                    "Nieuw-West",
                    "Techno dans l'ancien bâtiment de l'ACTA, autorisation de 24 heures depuis 2015",
                    "Des salles de béton brut et une techno industrielle"
            ],
            [
                    "Lofi",
                    "Sloterdijk",
                    "Un lieu créatif dans un ancien dépôt de bus",
                    "Le public local"
            ],
            [
                    "Garage Noord",
                    "Noord",
                    "Une programmation variée et pointue dans un ancien garage automobile",
                    "Une petite salle"
            ],
            [
                    "Warehouse Elementenstraat",
                    "Près du port",
                    "Quatre salles de techno, rouvert en 2014",
                    "Les plus grandes soirées régulières"
            ],
            [
                    "Melkweg",
                    "Leidseplein",
                    "Salle de concerts depuis 1970, avec des soirées club",
                    "Une nuit qui commence par un concert"
            ],
            [
                    "Paradiso",
                    "Leidseplein",
                    "Ancienne salle d'église, salle de concerts depuis 1968",
                    "La salle la plus célèbre de la ville"
            ]
    ].map(row => row.map(escapeHtml)),
      label: "Les meilleures boites de nuit à Amsterdam aujourd'hui"
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
    description: "Deux de mes morceaux. En acheter un soutient mon travail directement.",
    tracks: [
      {title: "Protect Ya Breaks", id: "3822639635", url: "https://thecatrave.bandcamp.com/track/protect-ya-breaks", linkText: "Protect Ya Breaks par thecatrave"},
      {title: "Berlin Race 1909", id: "3192532299", url: "https://thecatrave.bandcamp.com/track/berlin-race-1909", linkText: "Berlin Race 1909 par thecatrave"}
    ]
  }
};
