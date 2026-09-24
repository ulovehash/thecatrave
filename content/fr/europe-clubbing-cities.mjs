// French clubbing cities guide. Structure, facts and media from the English page
// (europe-clubbing-cities-draft.md, europe-clubbing-cities-research.md, build-europe-clubbing-cities-article.mjs), translated
// 2026-09-24 on the owner's instruction. Search wording from live Google
// (google.fr, hl=fr/gl=fr, 2026-09-23); volumes in keywords/fr-europe-clubbing-cities.json.
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
  lang: "fr",
  name: "fr-europe-clubbing-cities",
  file: "fr/villes-faire-la-fete-europe.html",
  draft: "fr/europe-clubbing-cities-draft.md",
  canonical: "https://thecatrave.com/fr/villes-faire-la-fete-europe",
  englishPath: "/best-clubbing-cities-in-europe",
  ogImage: "https://thecatrave.com/img/og/europe-clubbing-cities.jpg",
  bodyClass: "article-page europe-clubbing-cities-page",
  minReadingMinutes: 6,
  image: "https://thecatrave.com/img/europe-clubbing-cities/cross-club-prague-1200.webp",

  title: "Villes pour faire la fête en Europe : les clubs",
  description: "Berlin, Amsterdam, Londres, Ibiza, Tbilissi et sept autres : les meilleures villes pour faire la fête en Europe, classées par leurs clubs plutôt que leurs bars.",
  datePublished: '2026-09-24',
  dateModified: '2026-09-24',
  dateLabel: "24 septembre 2026",

  heroKicker: "Faire la fête en Europe",
  heroTitle: "Les meilleures villes pour faire la fête en Europe, par leurs clubs",
  deck: "Douze villes jugées sur leurs clubs, du Berghain et de fabric au Bassiani et au Drugstore, avec un guide pour chacune quand il existe.",
  answerLabel: "Les meilleures villes pour faire la fête en Europe",
  breadcrumbName: "Les meilleures villes pour faire la fête en Europe",

  answerSection: "Réponse",
  introSection: "Introduction",
  introTitle: "Des clubs, pas des stations balnéaires.",
  faqSection: 'FAQ',
  faqLabel: "Questions fréquentes",
  faqTitle: "Questions fréquentes sur les villes de fête en Europe.",

  sections: [
    {id: "compare", heading: "La réponse rapide : les villes comparées", title: "La réponse rapide : les villes comparées."},
    {id: "three-capitals", heading: "Berlin, Amsterdam et Londres : les trois capitales du clubbing", title: "Berlin, Amsterdam et Londres : les trois capitales du clubbing."},
    {id: "south-and-west", heading: "Ibiza, Barcelone, Lisbonne et Paris : le sud et l'ouest", title: "Ibiza, Barcelone, Lisbonne et Paris : le sud et l'ouest."},
    {id: "east", heading: "Tbilissi, Prague, Budapest, Cracovie et Belgrade : l'est", title: "Tbilissi, Prague, Budapest, Cracovie et Belgrade : l'est."},
    {id: "choose", heading: "Comment choisir une ville", title: "Comment choisir une ville."}
  ],

  media: ({lang}) => ({
    "Cross Club": figure("cross-club-prague", 1200, 901, "La cour du Cross Club à Prague, construite en métal récupéré, en tuyaux et en pièces de machines", "Le Cross Club à Holešovice, Prague, ouvert depuis 2002, photographié en 2024. Photo : Fry72, CC BY-SA 4.0."),
    "Anetha Amsterdam": articleVideoCollection({lang, label: "Anetha, Boiler Room Amsterdam, 2018", description: "Le set de Anetha pour Boiler Room à Amsterdam en 2018, sur la chaîne de Boiler Room.", items: [articleVideoCard({youtubeId: "Lg0Mkj4D9xo", genre: "Techno", artist: "Anetha", title: "Boiler Room Amsterdam, 2018"})]}),
    "Buraka Som Sistema Lisbon": articleVideoCollection({lang, label: "Buraka Som Sistema, Boiler Room Lisboa x Red Bull Music Academy, 2013", description: "Le set de Buraka Som Sistema pour Boiler Room à Lisbonne en 2013, sur la chaîne de Boiler Room.", items: [articleVideoCard({youtubeId: "4_Jk34-b_Jw", genre: "Kuduro", artist: "Buraka Som Sistema", title: "Boiler Room Lisboa x Red Bull Music Academy, 2013"})]}),
    "Kancheli Zitto Bassiani": articleVideoCollection({lang, label: "Kancheli et Zitto, Boiler Room x Bassiani, Tbilisi, 2018", description: "Le set de Kancheli et Zitto pour Boiler Room à Tbilissi en 2018, sur la chaîne de Boiler Room.", items: [articleVideoCard({youtubeId: "blO-TbxAMhM", genre: "Techno", artist: "Kancheli et Zitto", title: "Boiler Room x Bassiani, Tbilisi, 2018"})]}),
    "Tommy Four Seven Prague": articleVideoCollection({lang, label: "Tommy Four Seven, Boiler Room Prague, 2018", description: "Le set de Tommy Four Seven pour Boiler Room à Prague en 2018, sur la chaîne de Boiler Room.", items: [articleVideoCard({youtubeId: "tfrZCnhooGo", genre: "Techno", artist: "Tommy Four Seven", title: "Boiler Room Prague, 2018"})]}),
    "DJ Seinfeld Budapest": articleVideoCollection({lang, label: "DJ Seinfeld, Boiler Room Budapest, 2020", description: "Le set de DJ Seinfeld pour Boiler Room à Budapest en 2020, sur la chaîne de Boiler Room.", items: [articleVideoCard({youtubeId: "BMtfZNMFMG4", genre: "House", artist: "DJ Seinfeld", title: "Boiler Room Budapest, 2020"})]}),
    "FJAAK Krakow": articleVideoCollection({lang, label: "FJAAK, Boiler Room x Ballantine's True Music, Krakow, 2019", description: "Le set de FJAAK pour Boiler Room à Cracovie en 2019, sur la chaîne de Boiler Room.", items: [articleVideoCard({youtubeId: "YJ6wGIWf2VA", genre: "Techno", artist: "FJAAK", title: "Boiler Room x Ballantine's True Music, Krakow, 2019"})]}),
    "Daria Kolosova Belgrade": articleVideoCollection({lang, label: "Daria Kolosova, Boiler Room Belgrade at Drugstore, 2021", description: "Le set de Daria Kolosova pour Boiler Room à Belgrade en 2021, sur la chaîne de Boiler Room.", items: [articleVideoCard({youtubeId: "h2UwuQxyBGc", genre: "Techno", artist: "Daria Kolosova", title: "Boiler Room Belgrade at Drugstore, 2021"})]}),
    "thecatrave mix I Like to Smoke in Silence After Raves": ownSetListening(0, lang, 'Trente morceaux entre garage, bass music, techno et rave. Mon propre mix.'),
    "Table: cities": articleTable({
      headers: ["Ville", "Clubs à connaître", "Idéale pour"],
      rows: [
            [
                    "Berlin",
                    "Tresor (1991), Berghain (2004)",
                    "La techno et les longs week-ends"
            ],
            [
                    "Amsterdam",
                    "Shelter, Radion, le Gashouder",
                    "Les nuits de 24 heures et l'Amsterdam Dance Event en octobre"
            ],
            [
                    "Londres",
                    "fabric (1999)",
                    "Trois salles et une longue histoire des clubs"
            ],
            [
                    "Ibiza",
                    "Hï, Pacha, Amnesia, DC-10, [UNVRS]",
                    "Les plus grandes salles, de fin avril à mi-octobre seulement"
            ],
            [
                    "Barcelone",
                    "Razzmatazz, Nitsa à la Sala Apolo",
                    "Un city trip, avec le Sónar en juin"
            ],
            [
                    "Tbilissi",
                    "Bassiani (2014), KHIDI",
                    "La techno avec une porte stricte"
            ],
            [
                    "Prague",
                    "Cross Club (2002)",
                    "Un club construit en machines récupérées"
            ],
            [
                    "Budapest",
                    "A38, Lärm",
                    "D'abord les ruin bars, ensuite les clubs"
            ],
            [
                    "Lisbonne",
                    "Lux Frágil (1998)",
                    "Un club au bord du fleuve"
            ],
            [
                    "Paris",
                    "Rex Club (1988)",
                    "Une histoire de la house et de la techno"
            ],
            [
                    "Cracovie",
                    "Prozak 2.0 (2012)",
                    "Une cave médiévale"
            ],
            [
                    "Belgrade",
                    "Drugstore (2012)",
                    "Un ancien abattoir"
            ]
    ].map(row => row.map(escapeHtml)),
      label: "Les villes comparées"
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
    description: "Deux de mes morceaux. En acheter un soutient mon travail directement.",
    tracks: [
      {title: "Protect Ya Breaks", id: "3822639635", url: "https://thecatrave.bandcamp.com/track/protect-ya-breaks", linkText: "Protect Ya Breaks par thecatrave"},
      {title: "Berlin Race 1909", id: "3192532299", url: "https://thecatrave.bandcamp.com/track/berlin-race-1909", linkText: "Berlin Race 1909 par thecatrave"}
    ]
  }
};
