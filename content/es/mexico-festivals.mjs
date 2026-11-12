// Spanish Mexico festivals roundup. Structure, facts, dates and the "not
// announced" labels from the English page (best-edm-festivals-mexico-draft.md,
// build-mexico-festivals-article.mjs), checked there on 3 November 2026. The
// page has no French or German version; the Spanish US module
// (content/es/us-festivals.mjs) is the structural template.
//
// Spanish keywords (keywords/es-mexico-festivals.json): Keyword Planner,
// Mexico, Argentina, Colombia and Chile, 2026-11-12. "edc mexico" 10K–100K,
// "festivales de musica electronica en mexico" 100–1K, "festivales en mexico
// 2027" 10–100, "festivales edm mexico" 0–10. The list mixes MUTEK and
// Bahidorá with the big stages, so the title says "música electrónica", not
// EDM (WRITING.md). EDC México gets its own H3 and "EDC" in the title (the full
// "edc mexico" would push it past 65 characters); its guide is /es/edc-las-vegas.
//
// MUTEK MX 2026 ended on 8 November, four days before this translation, so its
// paragraph is in the past tense where the English page, written before it,
// is not.
//
// Maintenance: the dates are the English page's. Change them here and in the
// draft whenever the English page changes them; the page is registered in
// festival-editions.mjs with the other roundups. Roll to 2028 in September
// 2027, with the English page.
//
// The image is the English page's, in img/mexico-festivals/, with a translated
// caption.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, ownPlaylistListening, ownSetListening, ownTrackListening
} from '../../site-components.mjs';

const fig = (name, width, height, alt, caption) => articleFigure({
  src: `img/mexico-festivals/${name}-1200.webp`,
  srcset: `img/mexico-festivals/${name}-320.webp 320w, img/mexico-festivals/${name}-1200.webp 1200w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

const link = ([href, label]) => `<a href="${href}" target="_blank" rel="noopener noreferrer">${label}</a>`;

const festivals = [
  ['MUTEK MX', 'Ciudad de México', 'Aún sin anunciar (del 6 al 8 de noviembre en 2026)', 'Salas por toda la ciudad', 'Audiovisual y experimental'],
  ['Time Warp', 'Ciudad de México', 'Aún sin anunciar (20 y 21 de noviembre en 2026)', 'Expo Santa Fe, en interior', 'Techno bajo techo'],
  ['Zamna', 'Tulum', 'Del 31 de diciembre de 2026 al 10 de enero de 2027', 'Cenote en la selva', 'Seis noches en Año Nuevo'],
  ['Day Zero', 'Tulum', '9 de enero', 'Selva', 'Una noche, del atardecer al amanecer'],
  ['Bahidorá', 'Las Estacas, Morelos', 'Del 12 al 14 de febrero', 'Parque junto a un río, camping', 'Tres días junto a un río'],
  ['EDC México', 'Ciudad de México', 'Del 19 al 21 de febrero', 'Autódromo', 'Los escenarios más grandes']
];

export default {
  lang: 'es',
  name: 'es-mexico-festivals',
  file: 'es/festivales-musica-electronica-mexico.html',
  draft: 'es/mexico-festivals-draft.md',
  canonical: 'https://thecatrave.com/es/festivales-musica-electronica-mexico',
  englishPath: '/best-edm-festivals-mexico',
  ogImage: 'https://thecatrave.com/img/og/mexico-festivals.jpg',
  bodyClass: 'article-page mexico-festivals-page',
  minReadingMinutes: 6,

  title: 'Festivales de música electrónica en México 2027: Zamna y EDC',
  description: 'Zamna y Day Zero en Tulum, Bahidorá en Morelos y EDC México del 19 al 21 de febrero: los festivales de música electrónica de México en 2027, con fechas.',
  datePublished: '2026-11-12',
  dateModified: '2026-11-12',
  dateLabel: '12 de noviembre de 2026',

  heroKicker: 'Guía de festivales 2027',
  heroTitle: 'Los mejores festivales de música electrónica de México en 2027',
  deck: 'Los principales festivales de música electrónica de México comparados por lugar y entorno, de las noches en la selva de Tulum a un autódromo en Ciudad de México, con las fechas de 2027 confirmadas y las que aún no lo están.',
  answerLabel: 'Los mejores festivales de música electrónica de México',
  breadcrumbName: 'Festivales de música electrónica en México',

  answerSection: 'Respuesta',
  introSection: 'Introducción',
  introTitle: 'Una lista para elegir.',
  faqSection: 'FAQ',
  faqLabel: 'Preguntas frecuentes sobre los festivales de México',
  faqTitle: 'Preguntas frecuentes sobre los festivales de música electrónica de México.',

  sections: [
    {id: 'criteria', heading: 'Cómo se ha hecho esta lista', title: 'Cómo se ha hecho esta lista.'},
    {id: 'at-a-glance', heading: 'Las fechas de 2027 de un vistazo', title: 'Las fechas de 2027 de un vistazo.'},
    {id: 'tulum', heading: '¿Qué festival de Tulum vale el viaje?', title: '¿Qué festival de Tulum vale el viaje?', tocLabel: 'Festivales en Tulum'},
    {id: 'mexico-city', heading: '¿Cuáles son los mejores festivales de Ciudad de México?', title: '¿Cuáles son los mejores festivales de Ciudad de México?', tocLabel: 'Festivales en Ciudad de México'},
    {id: 'other', heading: '¿Qué otros festivales de México valen el viaje?', title: '¿Qué otros festivales de México valen el viaje?', tocLabel: 'Otros festivales en México'},
    {id: 'not-listed', heading: 'Lo que no está en esta lista, y por qué', title: 'Lo que no está en esta lista, y por qué.'},
    {id: 'choose', heading: 'Cómo elegir', title: 'Cómo elegir.'}
  ],

  media: ({lang}) => ({
    playlist: ownPlaylistListening('rare-electronic-music', lang),
    'Table: dates': articleTable({label: 'Los festivales de música electrónica de México comparados, 2027',
      headers: ['Festival', 'Dónde', 'Fechas 2027', 'Entorno', 'Ideal para'], rows: festivals}),
    zamna: articleVideoCollection({
      lang, label: 'Zamna, desde casa',
      description: 'Oliver Heldens grabando Heldeep Radio #500 en directo en Zamna Tulum, publicado por el propio artista.',
      items: [articleVideoCard({youtubeId: 'KuvaMUDaS-4', genre: 'Zamna Tulum', artist: 'Oliver Heldens', title: 'Heldeep Radio #500 live from Zamna Tulum'})]
    }),
    mutek: fig('mutek-mexico-city-2016', 1200, 800,
      'Un artista de pie dentro de una proyección de luz en el escenario de MUTEK en Ciudad de México en 2016',
      'Un artista actuando en el Teatro de la Ciudad durante MUTEK, Ciudad de México, 2016. Foto: Tania Victoria, Secretaría de Cultura Ciudad de México, CC BY-SA 2.0.'),
    'own-track': ownTrackListening('late-summer-cloud-dance', 'Un tema mío corto de liquid breakbeat.', lang),
    'first-mix': ownSetListening(0, lang),
    'second-mix': ownSetListening(1, lang)
  }),

  sources: [
    {html: `Fechas de 2027 en la web de cada festival: ${[
      ['https://zamnafestival.com/events/?country=mexico', 'Zamna'], ['https://zamnafestival.com/events/multipass-zamna-tulum-2027', 'su Multipass'],
      ['https://bahidora.com/', 'Bahidorá'], ['https://mexico.edc.com/', 'EDC México'], ['https://www.dayzerofestival.com/tulum', 'Day Zero']
    ].map(link).join(', ')}.`},
    {html: `Décima temporada de Zamna: ${link(['https://magneticmag.com/2026/09/zamna-tulum-2027-dates-multipass-tickets/', 'Magnetic Magazine'])} (en inglés).`},
    {html: `Historia de Day Zero y El Teatro: ${link(['https://www.edmtunes.com/2026/08/damian-lazarus-reveals-full-day-zero-tulum-2027-lineup/', 'EDMTunes'])} (en inglés).`},
    {html: `Escenarios y recinto de Bahidorá: ${[
      ['https://bahidora.com/explora/escenarios/', 'escenarios'], ['https://bahidora.com/explora/acerca-de/', 'acerca de'],
      ['https://bahidora.com/explora/las-estacas/', 'Las Estacas'], ['https://bahidora.com/planea/tips-faqs/', 'preguntas frecuentes']
    ].map(link).join(', ')}.`},
    {html: `Ediciones de 2026: ${link(['https://time-warp.de/', 'Time Warp'])}, ${link(['https://mexico.mutek.org/es/noticias/el-cierre-de-mutek-mx-22-se-acerca', 'MUTEK MX'])}. Último Afterlife Tulum: ${link(['https://after.life/tulum', 'Afterlife'])}.`},
    {html: `The BPM Festival: ${link(['https://thebpmfestival.com/', 'su web'])} y ${link(['https://exclaim.ca/music/article/at_least_four_dead_in_shooting_at_mexicos_bpm_festival', 'Exclaim!'])} (en inglés) sobre el tiroteo de 2017.`},
    {html: `Inauguración del Aeropuerto Internacional de Tulum: ${link(['https://www.aviacionline.com/tulum-airport-mexican-caribbeans-new-gateway-officially-inaugurated', 'Aviacionline'])}.`},
    {html: 'EDC y Time Warp: la guía de esta web sobre cada uno, enlazada más arriba, que cita sus propias fuentes.'}
  ],

  bandcamp: {
    description: 'Entre festival y festival, la música que hago yo: breaks con techno y dub dentro. Comprar un lanzamiento apoya mi trabajo directamente.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 de thecatrave'},
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks de thecatrave'}
    ]
  }
};
