// Spanish New Year's Eve (Nochevieja) festivals guide. Structure, facts and media from the English page
// (nye-festivals-draft.md, nye-festivals-research.md, build-nye-festivals-article.mjs), localised
// 2026-10-09. Spanish SERP (google.es, hl=es, gl=es, 2026-10-09) for "festivales
// nochevieja musica electronica" is local Spanish club parties and ticket sites
// (Fabrik, Space of Sound, Winter Festival, elrow); People also ask is generic
// ("Como se llama el mayor festival de musica electronica?"), which became the
// first FAQ question. Keyword Planner Spain returned no row for "festivales ano
// nuevo" or "nochevieja"; see keywords/es-nye-festivals.json.
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
  lang: "es",
  name: "es-nye-festivals",
  file: "es/festivales-nochevieja.html",
  draft: "es/nye-festivals-draft.md",
  canonical: "https://thecatrave.com/es/festivales-nochevieja",
  englishPath: "/new-years-eve-festivals",
  ogImage: "https://thecatrave.com/img/og/nye-festivals.jpg",
  bodyClass: "article-page nye-festivals-page",
  minReadingMinutes: 6,
  image: "https://thecatrave.com/img/nye-festivals/awakenings-gashouder-nye-2017-1200.webp",

  title: "Festivales de Nochevieja 2026-2027: los mejores",
  description: "FCKNYE, Countdown NYE, Decadence, Rhythm and Vines y Awakenings: los mejores festivales de Nochevieja de música electrónica en 2026, con fechas y lugares.",
  datePublished: '2026-10-09',
  dateModified: '2026-10-09',
  dateLabel: "9 de octubre de 2026",

  heroKicker: "Festivales de Nochevieja",
  heroTitle: "Los mejores festivales de Nochevieja, de 2026 a 2027",
  deck: "El mayor festival de Nochevieja de Europa en Bruselas, raves de dos noches en centros de convenciones de Estados Unidos y festivales de verano con camping en Nueva Zelanda y Australia.",
  answerLabel: "Los festivales de Nochevieja",
  breadcrumbName: "Los festivales de Nochevieja",

  answerSection: "Respuesta",
  introSection: "Introducción",
  introTitle: "Verano en un lado del mundo, invierno en el otro.",
  faqSection: 'FAQ',
  faqLabel: "Preguntas frecuentes",
  faqTitle: "Preguntas frecuentes sobre los festivales de Nochevieja.",

  sections: [
    {id: "dates", heading: "Nochevieja 2026: los festivales y sus fechas", title: "Nochevieja 2026: los festivales y sus fechas."},
    {id: "europe", heading: "Nochevieja en Europa: el FCKNYE y los clubes", title: "Nochevieja en Europa: el FCKNYE y los clubes."},
    {id: "united-states", heading: "Los festivales de Nochevieja en Estados Unidos", title: "Los festivales de Nochevieja en Estados Unidos."},
    {id: "australia-new-zealand", heading: "Australia y Nueva Zelanda: la Nochevieja en verano", title: "Australia y Nueva Zelanda: la Nochevieja en verano."},
    {id: "choose", heading: "Cómo elegir un festival de Nochevieja", title: "Cómo elegir un festival de Nochevieja."}
  ],

  media: ({lang}) => ({
    "Awakenings NYE": figure("awakenings-gashouder-nye-2017", 1200, 900, "Haces rojos y una estructura luminosa sobre el público en el Gashouder, en Awakenings, Ámsterdam", "Awakenings en el Gashouder, Ámsterdam, el 31 de diciembre de 2017. Foto: Ank Kumar, CC BY-SA 4.0."),
    "Countdown NYE 2024": articleVideoCollection({lang, label: "Insomniac, Countdown NYE 2024", description: "El vídeo oficial de Insomniac sobre Countdown NYE 2024, en el canal de Insomniac.", items: [articleVideoCard({youtubeId: "hCP_UosWZlI", genre: "Vídeo del festival", artist: "Insomniac", title: "Countdown NYE 2024"})]}),
    "Tinlicker Concourse NYE": articleVideoCollection({lang, label: "Tinlicker, The Concourse Project, Austin, Nochevieja de 2024", description: "El set de Tinlicker en la Nochevieja de 2024 en The Concourse Project, en Austin, en el canal del club.", items: [articleVideoCard({youtubeId: "cd6buYLu5b0", genre: "Electrónica", artist: "Tinlicker", title: "The Concourse Project, Austin, Nochevieja de 2024"})]}),
    "Awakenings NYE 2013": articleVideoCollection({lang, label: "Adam Beyer y Joseph Capriati, Awakenings NYE Special, Gashouder, 31 de diciembre de 2013", description: "Adam Beyer y Joseph Capriati en el Gashouder en la noche de Nochevieja de 2013, en el canal de Awakenings.", items: [articleVideoCard({youtubeId: "OtLn2sm0bP0", genre: "Techno", artist: "Adam Beyer y Joseph Capriati", title: "Awakenings NYE Special, Gashouder, 31 de diciembre de 2013"})]}),
    "Rhythm and Vines 2025": articleVideoCollection({lang, label: "Rhythm and Vines, Rhythm and Vines 2025, aftermovie", description: "El vídeo oficial de Rhythm and Vines 2025, cerca de Gisborne.", items: [articleVideoCard({youtubeId: "26R8sSY7tJ4", genre: "Vídeo del festival", artist: "Rhythm and Vines", title: "Rhythm and Vines 2025, aftermovie"})]}),
    "Beyond the Valley 2022": articleVideoCollection({lang, label: "Beyond the Valley, Beyond the Valley 2022, aftermovie", description: "El vídeo oficial de Beyond the Valley 2022.", items: [articleVideoCard({youtubeId: "AkKskQ_VnwY", genre: "Vídeo del festival", artist: "Beyond the Valley", title: "Beyond the Valley 2022, aftermovie"})]}),
    "thecatrave mix I Lost So Many Weekends Raving and I Wanna Lose Some More": ownSetListening(1, lang),
    "Table: festivals": articleTable({
      headers: ["Festival", "Lugar", "Nochevieja 2026", "Sonido"],
      rows: [
            [
                    "FCKNYE",
                    "Brussels Expo, Bélgica",
                    "Del 30 de diciembre de 2026 al 1 de enero de 2027",
                    "Rap en francés y techno, cinco escenarios"
            ],
            [
                    "Countdown NYE",
                    "NOS Events Center, San Bernardino, California",
                    "31 de diciembre de 2026 y 1 de enero de 2027",
                    "EDM de Insomniac, cinco escenarios cubiertos"
            ],
            [
                    "Decadence NYE",
                    "Colorado Convention Center, Denver, y Arizona",
                    "30 y 31 de diciembre",
                    "EDM"
            ],
            [
                    "HiJinx",
                    "Pennsylvania Convention Center, Filadelfia",
                    "30 y 31 de diciembre de 2026",
                    "Bass music"
            ],
            [
                    "CRSSD Proper NYE",
                    "Petco Park, San Diego",
                    "Del 31 de diciembre de 2026, 15:00, al 1 de enero de 2027, 22:00",
                    "House, con This Never Happened y Daisy Chain"
            ],
            [
                    "Lights All Night",
                    "Fair Park, Dallas, Texas", "30 y 31 de diciembre de 2026",
                    "EDM"
            ],
            [
                    "Eternal NYE",
                    "Orlando Amphitheater, Central Florida Fairgrounds, Orlando", "30 y 31 de diciembre de 2026",
                    "Bass music"
            ],
            [
                    "Awakenings NYE",
                    "Gashouder, Ámsterdam",
                    "Consultar en la web",
                    "Techno"
            ],
            [
                    "Rhythm and Vines",
                    "Waiohika Estate, Gisborne, Nueva Zelanda", "Del 28 al 31 de diciembre de 2026",
                    "Festival con camping"
            ],
            [
                    "Beyond the Valley",
                    "Barunah Plains, cerca de Melbourne, Australia", "Del 28 de diciembre de 2026 al 1 de enero de 2027, entradas agotadas",
                    "Varios días, varios escenarios"
            ],
            [
                    "Field Day",
                    "The Domain, Sídney",
                    "1 de enero de 2027",
                    "Hip-hop, house, indie y electrónica"
            ]
    ].map(row => row.map(escapeHtml)),
      label: "Nochevieja 2026: los festivales y sus fechas"
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
    {href: "https://www.rtbf.be/article/70-000-festivaliers-attendus-au-festival-fcknye-a-brussels-expo-11654727", label: "RTBF (en francés): 70.000 festivaliers attendus au festival FCKNYE à Brussels Expo"},
    {href: "https://handsupelectro.fr/evenement/fcknye-festival-la-programmation-complete-devoilee-pour-2026/", label: "Hands UP Electro (en francés): FCKNYE Festival, la programmation complète"},
    {href: "https://www.raveparty.fr/festival/fcknye-festival", label: "RaveRadar (en francés): FCKNYE Festival 2026 dates"},
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
    description: "Dos de mis temas. Comprar uno apoya mi trabajo directamente.",
    tracks: [
      {title: "Protect Ya Breaks", id: "3822639635", url: "https://thecatrave.bandcamp.com/track/protect-ya-breaks", linkText: "Protect Ya Breaks de thecatrave"},
      {title: "Berlin Race 1909", id: "3192532299", url: "https://thecatrave.bandcamp.com/track/berlin-race-1909", linkText: "Berlin Race 1909 de thecatrave"}
    ]
  }
};
