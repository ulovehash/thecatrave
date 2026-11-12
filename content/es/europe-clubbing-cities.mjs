// Spanish clubbing cities guide. Structure, facts and media from the English page
// (europe-clubbing-cities-draft.md, build-europe-clubbing-cities-article.mjs).
// Keywords from Keyword Planner (Mexico, Argentina, Colombia, Chile; 2026-11-12),
// in keywords/es-europe-clubbing-cities.json. The images are the English guide's,
// with translated captions.
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
  lang: "es",
  name: "es-europe-clubbing-cities",
  file: "es/ciudades-fiesta-europa.html",
  draft: "es/europe-clubbing-cities-draft.md",
  canonical: "https://thecatrave.com/es/ciudades-fiesta-europa",
  englishPath: "/best-clubbing-cities-in-europe",
  ogImage: "https://thecatrave.com/img/og/europe-clubbing-cities.jpg",
  bodyClass: "article-page europe-clubbing-cities-page",
  minReadingMinutes: 6,
  image: "https://thecatrave.com/img/europe-clubbing-cities/cross-club-prague-1200.webp",

  title: "Las mejores ciudades para salir de fiesta en Europa",
  description: "Berlín, Ámsterdam, Londres, Ibiza, Tiflis y siete más: las mejores ciudades de Europa para salir de fiesta, ordenadas por sus clubes y no por bares y playas.",
  datePublished: '2026-11-12',
  dateModified: '2026-11-12',
  dateLabel: "12 de noviembre de 2026",

  heroKicker: "Ciudades de fiesta en Europa",
  heroTitle: "Las mejores ciudades para salir de fiesta en Europa",
  deck: "Doce ciudades juzgadas por sus clubes, de Berghain y fabric a Bassiani y Drugstore, con una guía para cada una cuando existe.",
  answerLabel: "Las mejores ciudades de fiesta de Europa",
  breadcrumbName: "Las mejores ciudades de fiesta de Europa",

  answerSection: "Respuesta",
  introSection: "Introducción",
  introTitle: "Clubes, no destinos de playa.",
  faqSection: 'FAQ',
  faqLabel: "Preguntas frecuentes",
  faqTitle: "Preguntas frecuentes sobre las ciudades de fiesta en Europa.",

  sections: [
    {id: "compare", heading: "La respuesta rápida: las ciudades comparadas", title: "La respuesta rápida: las ciudades comparadas."},
    {id: "three-capitals", heading: "Berlín, Ámsterdam y Londres: las tres capitales del clubbing", title: "Berlín, Ámsterdam y Londres: las tres capitales del clubbing."},
    {id: "south-and-west", heading: "Ibiza, Barcelona, Lisboa y París: el sur y el oeste", title: "Ibiza, Barcelona, Lisboa y París: el sur y el oeste."},
    {id: "east", heading: "Tiflis, Praga, Budapest, Cracovia y Belgrado: el este", title: "Tiflis, Praga, Budapest, Cracovia y Belgrado: el este."},
    {id: "choose", heading: "Cómo elegir una ciudad", title: "Cómo elegir una ciudad."}
  ],

  media: ({lang}) => ({
    "Cross Club": figure("cross-club-prague", 1200, 901, "El patio de Cross Club en Praga, construido con metal rescatado, tuberías y piezas de maquinaria", "Cross Club en Holešovice, Praga, abierto desde 2002, fotografiado en 2024. Foto: Fry72, CC BY-SA 4.0."),
    "Anetha Amsterdam": articleVideoCollection({lang, label: "Anetha, Boiler Room Amsterdam, 2018", description: "El set de Anetha para Boiler Room en Ámsterdam en 2018, en el canal de Boiler Room.", items: [articleVideoCard({youtubeId: "Lg0Mkj4D9xo", genre: "Techno", artist: "Anetha", title: "Boiler Room Amsterdam, 2018"})]}),
    "Buraka Som Sistema Lisbon": articleVideoCollection({lang, label: "Buraka Som Sistema, Boiler Room Lisboa x Red Bull Music Academy, 2013", description: "El set de Buraka Som Sistema para Boiler Room en Lisboa en 2013, en el canal de Boiler Room.", items: [articleVideoCard({youtubeId: "4_Jk34-b_Jw", genre: "Kuduro", artist: "Buraka Som Sistema", title: "Boiler Room Lisboa x Red Bull Music Academy, 2013"})]}),
    "Kancheli Zitto Bassiani": articleVideoCollection({lang, label: "Kancheli y Zitto, Boiler Room x Bassiani, Tbilisi, 2018", description: "El set de Kancheli y Zitto para Boiler Room en Tiflis en 2018, en el canal de Boiler Room.", items: [articleVideoCard({youtubeId: "blO-TbxAMhM", genre: "Techno", artist: "Kancheli y Zitto", title: "Boiler Room x Bassiani, Tbilisi, 2018"})]}),
    "Tommy Four Seven Prague": articleVideoCollection({lang, label: "Tommy Four Seven, Boiler Room Prague, 2018", description: "El set de Tommy Four Seven para Boiler Room en Praga en 2018, en el canal de Boiler Room.", items: [articleVideoCard({youtubeId: "tfrZCnhooGo", genre: "Techno", artist: "Tommy Four Seven", title: "Boiler Room Prague, 2018"})]}),
    "DJ Seinfeld Budapest": articleVideoCollection({lang, label: "DJ Seinfeld, Boiler Room Budapest, 2020", description: "El set de DJ Seinfeld para Boiler Room en Budapest en 2020, en el canal de Boiler Room.", items: [articleVideoCard({youtubeId: "BMtfZNMFMG4", genre: "House", artist: "DJ Seinfeld", title: "Boiler Room Budapest, 2020"})]}),
    "FJAAK Krakow": articleVideoCollection({lang, label: "FJAAK, Boiler Room x Ballantine's True Music, Krakow, 2019", description: "El set de FJAAK para Boiler Room en Cracovia en 2019, en el canal de Boiler Room.", items: [articleVideoCard({youtubeId: "YJ6wGIWf2VA", genre: "Techno", artist: "FJAAK", title: "Boiler Room x Ballantine's True Music, Krakow, 2019"})]}),
    "Daria Kolosova Belgrade": articleVideoCollection({lang, label: "Daria Kolosova, Boiler Room Belgrade at Drugstore, 2021", description: "El set de Daria Kolosova para Boiler Room en Belgrado en 2021, en el canal de Boiler Room.", items: [articleVideoCard({youtubeId: "h2UwuQxyBGc", genre: "Techno", artist: "Daria Kolosova", title: "Boiler Room Belgrade at Drugstore, 2021"})]}),
    "thecatrave mix I Like to Smoke in Silence After Raves": ownSetListening(0, lang, 'Treinta temas entre garage, bass music, techno y rave. Mi propia mezcla.'),
    "Table: cities": articleTable({
      headers: ["Ciudad", "Clubes que conviene conocer", "Ideal para"],
      rows: [
            [
                    "Berlín",
                    "Tresor (1991), Berghain (2004)",
                    "Techno y fines de semana largos"
            ],
            [
                    "Ámsterdam",
                    "Shelter, Radion, el Gashouder",
                    "Noches de 24 horas y el Amsterdam Dance Event en octubre"
            ],
            [
                    "Londres",
                    "fabric (1999)",
                    "Tres salas y una larga historia de club"
            ],
            [
                    "Ibiza",
                    "Hï, Pacha, Amnesia, DC-10, [UNVRS]",
                    "Los clubes más grandes, solo de finales de abril a mediados de octubre"
            ],
            [
                    "Barcelona",
                    "Razzmatazz, Nitsa en la Sala Apolo",
                    "Una escapada urbana, con el Sónar en junio"
            ],
            [
                    "Tiflis",
                    "Bassiani (2014), KHIDI",
                    "Techno con puerta estricta"
            ],
            [
                    "Praga",
                    "Cross Club (2002)",
                    "Un club hecho con piezas de maquinaria rescatadas"
            ],
            [
                    "Budapest",
                    "A38, Lärm",
                    "Primero bares en ruinas, después clubes"
            ],
            [
                    "Lisboa",
                    "Lux Frágil (1998)",
                    "Un club junto al río"
            ],
            [
                    "París",
                    "Rex Club (1988)",
                    "Historia del house y el techno"
            ],
            [
                    "Cracovia",
                    "Prozak 2.0 (2012)",
                    "Un sótano medieval"
            ],
            [
                    "Belgrado",
                    "Drugstore (2012)",
                    "Un antiguo matadero"
            ]
    ].map(row => row.map(escapeHtml)),
      label: "Las ciudades comparadas"
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
    description: 'Dos de mis temas. Comprar uno apoya mi trabajo directamente.',
    tracks: [
      {title: "Protect Ya Breaks", id: "3822639635", url: "https://thecatrave.bandcamp.com/track/protect-ya-breaks", linkText: "Protect Ya Breaks de thecatrave"},
      {title: "Berlin Race 1909", id: "3192532299", url: "https://thecatrave.bandcamp.com/track/berlin-race-1909", linkText: "Berlin Race 1909 de thecatrave"}
    ]
  }
};
