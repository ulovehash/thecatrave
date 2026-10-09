// Spanish Primavera Sound guide. Structure, facts and media from the English
// page (primavera-sound-draft.md, primavera-sound-research.md,
// build-primavera-sound-article.mjs); localised, not translated word for word.
//
// Spanish keywords, measured 2026-10-09 with Keyword Planner (Spain,
// keywords/es-primavera-sound.json): primavera sound 10K-100K, primavera sound
// barcelona 1K-10K, primavera sound 2027 1K-10K, primavera sound porto 1K-10K,
// primavera sound fechas 100-1K. Live es-ES SERP and People-also-ask read the
// same day (google.es, hl=es, gl=es): "¿Cuándo es el Primavera Sound 2027?",
// "¿Quién está detrás del Primavera Sound?". The FAQ opens with those and the
// dates and place; line-up (cartel), abono and entradas terms are rejected in
// the map because they change every year and the English page does not track
// them.
//
// Images are the English guide's, in img/primavera-sound/, with translated
// captions; see home-articles.mjs for why a translation may reuse them.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, articleYoutubeEmbed, ownTrackListening
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption, className = 'wide-archive-image') => articleFigure({
  src: `img/primavera-sound/${name}-${width}.webp`,
  srcset: `img/primavera-sound/${name}-320.webp 320w, img/primavera-sound/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className
});

const commonsLink = file =>
  `<a href="https://commons.wikimedia.org/wiki/${encodeURIComponent(`File:${file}`)}" target="_blank" rel="noopener noreferrer">Fuente ↗</a>`;

export default {
  lang: 'es',
  name: 'es-primavera-sound',
  file: 'es/primavera-sound-barcelona.html',
  draft: 'es/primavera-sound-draft.md',
  canonical: 'https://thecatrave.com/es/primavera-sound-barcelona',
  englishPath: '/primavera-sound-barcelona',
  ogImage: 'https://thecatrave.com/img/og/primavera-sound.jpg',
  bodyClass: 'article-page primavera-sound-page',

  title: 'Primavera Sound 2027: fechas, lugar y cabezas de cartel por año',
  description: 'Primavera Sound Barcelona 2027 es del 3 al 5 de junio en el Parc del Fòrum, tras 293.000 asistencias en 2025. Cabezas de cartel por año, lugar y edición de Oporto.',
  datePublished: '2026-10-09',
  dateModified: '2026-10-09',
  dateLabel: '9 de octubre de 2026',

  heroKicker: 'Primavera Sound',
  heroTitle: 'Primavera Sound Barcelona',
  deck: 'El programa principal de Barcelona vuelve al Parc del Fòrum los días 3, 4 y 5 de junio de 2027. Aquí tienes el recinto frente al mar, el tamaño, la música y la relación con Oporto.',
  answerLabel: 'Qué es Primavera Sound',
  breadcrumbName: 'Primavera Sound Barcelona',

  answerSection: 'Respuesta',
  introSection: 'Introducción',
  introTitle: 'Un festival construido sobre la variedad.',
  faqSection: 'FAQ',
  faqLabel: 'Preguntas frecuentes',
  faqTitle: 'Preguntas frecuentes sobre Primavera Sound.',
  ownSetAfter: 'music',

  sections: [
    {id: 'what-is', heading: '¿Qué es Primavera Sound?', title: '¿Qué es Primavera Sound?'},
    {id: 'dates-location', heading: 'Primavera Sound fechas y lugar: cuándo y dónde es', title: 'Primavera Sound fechas y lugar: cuándo y dónde es'},
    {id: 'headliners', heading: 'Primavera Sound: cabezas de cartel por año', title: 'Primavera Sound: cabezas de cartel por año'},
    {id: 'how-big', heading: '¿Qué tamaño tiene Primavera Sound?', title: '¿Qué tamaño tiene Primavera Sound?'},
    {id: 'music', heading: '¿Qué música suena en Primavera Sound?', title: '¿Qué música suena en Primavera Sound?', kicker: 'La música'},
    {id: 'a-la-ciutat', heading: 'Primavera a la Ciutat', title: 'Primavera a la Ciutat.'},
    {id: 'porto', heading: 'Primavera Sound Porto', title: 'Primavera Sound Porto.'}
  ],

  media: ({lang}) => ({
    'thecatrave degeneration': ownTrackListening('degeneration', 'Lejos de los grandes escenarios: la voz de Mylène Farmer sobre breaks, entre dubstep y UK garage. Mi propio remix.', lang),
    'Primavera stage crowd': figure('festival-crowd', 1200, 800,
      'Asistentes junto al agua en Primavera Sound Barcelona en 2019, bajo un cielo azul despejado',
      `El público de Primavera Sound Barcelona en 2019, con el recinto abierto al agua alrededor. Foto: John Lubbock, CC BY-SA 4.0. ${commonsLink('Primavera stage crowd.jpg')}`,
      'full-bleed'),
    'Created in Barcelona': figure('created-in-barcelona', 1200, 800,
      'Un público nocturno en Primavera Sound, bajo las estructuras del festival un letrero luminoso con el lema Created in Barcelona',
      `Primavera Sound de noche en 2019: el festival subraya su origen barcelonés aunque su público se haya vuelto internacional. Foto: John Lubbock, CC BY-SA 4.0. ${commonsLink('Primavera Sound main stages area at night.jpg')}`),
    'Parc del Fòrum beside': figure('parc-forum', 1200, 675,
      'La gran pérgola fotovoltaica y las estructuras de hormigón del Parc del Fòrum, con el Mediterráneo detrás',
      `El Parc del Fòrum sin las instalaciones del festival: terrazas de hormigón, pérgola fotovoltaica y Mediterráneo. Foto: Pere López Brosa, CC BY-SA 4.0. ${commonsLink('Parc del Fòrum - 20191213 143043.jpg')}`),
    'Peggy Gou at': figure('peggy-gou', 1200, 800,
      'Peggy Gou en la cabina del escenario Ray-Ban de Primavera Sound en 2019, bajo luces moradas y amarillas, ante un público denso',
      `Peggy Gou en el escenario Ray-Ban, Primavera Sound Barcelona 2019. Foto: John Lubbock, CC BY-SA 4.0. ${commonsLink('Peggy Gou, Ray-Ban stage.jpg')}`),
    'Samantha Hudson and John Waters': figure('primavera-pro', 1200, 900,
      'Samantha Hudson y John Waters sentados en conversación en el escenario de Primavera Pro en 2022',
      `La artista Samantha Hudson y el cineasta John Waters hablan de gustos musicales en Primavera Pro en 2022. Foto: Nacaru, CC BY-SA 4.0. ${commonsLink('Samantha Hudson and John Waters in Primavera Pro.jpg')}`),
    'Fontaines D.C. at': figure('porto-stage', 1200, 800,
      'Fontaines D.C. en el escenario principal de Primavera Sound Porto, de noche, en 2025',
      `Fontaines D.C. en Primavera Sound Porto en 2025. Foto: Boredintheevening, CC BY 4.0. ${commonsLink('Fontaines D.C performing at Primavera Sound Porto 2025.tif')}`),
    'uhAp3o71U48': articleVideoCollection({
      lang: 'es',
      label: 'Primavera Sound Barcelona en Boiler Room',
      description: 'Dos recorridos por la música de club brasileña, filmados por Boiler Room en Primavera Sound Barcelona: DJ Ramon Sucesso en 2024 y Badsista en 2022.',
      items: [
        articleVideoCard({youtubeId: 'uhAp3o71U48', genre: 'Boiler Room, 2024', artist: 'DJ Ramon Sucesso', title: 'Primavera Sound Barcelona'}),
        articleVideoCard({youtubeId: 'KkhwjIVDHGc', genre: 'Boiler Room, 2022', artist: 'Badsista', title: 'Primavera Sound Barcelona'})
      ]
    }),
    'srV4AgUc104': articleYoutubeEmbed({
      src: 'https://www.youtube-nocookie.com/embed/srV4AgUc104',
      title: 'Alan Sparhawk, set oficial en Primavera Sound Porto 2025'
    }),
    'Table: headliners': articleTable({
      headers: ['Año', 'Cabezas de cartel'],
      rows: [
        ['2010', 'Pixies, Pavement, Pet Shop Boys, Wilco, Orbital'],
        ['2011', 'The Flaming Lips, Grinderman, Pulp, Belle & Sebastian, PJ Harvey'],
        ['2012', 'Franz Ferdinand, Wilco, The Cure, Justice'],
        ['2013', 'Phoenix, Blur, Nick Cave and the Bad Seeds, My Bloody Valentine'],
        ['2014', 'Arcade Fire, Queens of the Stone Age, The National, Nine Inch Nails, Kendrick Lamar'],
        ['2015', 'The Black Keys, Alt-J, The Strokes, Interpol, Underworld'],
        ['2016', 'Radiohead, LCD Soundsystem, PJ Harvey, Sigur Rós'],
        ['2017', 'Bon Iver, Aphex Twin, Frank Ocean, The xx, Arcade Fire'],
        ['2018', 'Björk, Nick Cave and the Bad Seeds, The National, Arctic Monkeys, Lorde'],
        ['2019', 'Erykah Badu, Future, Tame Impala, Miley Cyrus, Solange, Rosalía'],
        ['2020, 2021', 'Cancelado'],
        ['2022', 'Dos fines de semana: Pavement, Tame Impala, Beck, Gorillaz, Tyler, the Creator, Dua Lipa'],
        ['2023', 'Blur, Kendrick Lamar, Depeche Mode, Rosalía, Calvin Harris, New Order'],
        ['2024', 'Pulp, Vampire Weekend, Lana Del Rey, SZA, Disclosure, Charli XCX'],
        ['2025', 'Chappell Roan, Charli XCX, Sabrina Carpenter'],
        ['2026', 'The Cure, Doja Cat, Gorillaz, The xx, Skrillex, My Bloody Valentine']
      ].map(row => row.map(escapeHtml)),
      label: 'Cabezas de cartel de Primavera Sound por año'
    }),
    'Table: milestones': articleTable({
      headers: ['Año', 'Qué cambió'],
      rows: [
        ['2001', 'Primer Primavera Sound, de un día, en el Poble Espanyol; unas 7.700 entradas'],
        ['2004', 'El festival de Barcelona pasa a tres días'],
        ['2005', 'Traslado al Parc del Fòrum'],
        ['2008', 'El programa en las salas de la ciudad se convierte en Primavera a la Ciutat'],
        ['2012', 'Primer Primavera Sound Porto'],
        ['2019', 'Cartel paritario presentado bajo el nombre The New Normal'],
        ['2022', 'Edición excepcional en dos fines de semana en Barcelona tras las cancelaciones de la pandemia'],
        ['2027', 'Programa principal de Barcelona previsto del 3 al 5 de junio en el Parc del Fòrum']
      ].map(row => row.map(escapeHtml)),
      label: 'Hitos de Primavera Sound'
    })
  }),

  sources: [
    {href: 'https://www.primaverasound.com/en/barcelona', label: 'Primavera Sound Barcelona (en inglés): sitio oficial'},
    {href: 'https://assets.primaverasound.com/psb/docs/condicionesEntradas_en.html', label: 'Primavera Sound Barcelona (en inglés): condiciones oficiales de entrada y edad'},
    {href: 'https://parcdelforum.barcelona/en/parc-forum/the-park', label: 'Parc del Fòrum (en inglés): guía oficial del recinto'},
    {href: 'https://www.catalannews.com/culture/item/in-photos-primavera-sound-draws-287000-festivalgoers-after-rain-hit-opening-day', label: 'Catalan News (en inglés): próximas fechas y acuerdo del Parc del Fòrum'},
    {href: 'https://www.rtve.es/noticias/20250607/primavera-sound-registra-293000-asistentes-300-millones-retorno-para-barcelona/16615374.shtml', label: 'RTVE: asistencia y público internacional de Primavera Sound'},
    {href: 'https://assets.primaverasound.com/ps-single/download/prensa/psb/2016/dossier/Press_dossier_Primavera_Sound_2016_.pdf', label: 'Primavera Sound (en inglés): dosier de prensa histórico'},
    {href: 'https://assets.primaverasound.com/ps-single/download/prensa/psb/2015/dossier/Press_dossier_Primavera_Sound_2015.pdf', label: 'Primavera Sound (en inglés): Primavera a la Ciutat e historia del festival'},
    {href: 'https://assets.primaverasound.com/ps-single/download/prensa/pso/2016/dossier/NPS16_Conf._Imprensa_Dossier_Imprensa_Digital_ES_PN_20160204132533.pdf', label: 'Primavera Sound Porto: dosier de prensa histórico oficial'},
    {href: 'https://boilerroom.tv/session/primavera-sound-barcelona-2024/', label: 'Boiler Room (en inglés): sesión en Primavera Sound Barcelona'},
    {href: 'https://www.rollingstone.com/music/music-news/primavera-sound-2025-charli-xcx-sabrina-carpenter-chappell-roan-1235141672/', label: 'Rolling Stone (en inglés): cabezas de cartel de 2025'},
    {href: 'https://www.billboard.com/music/concerts/primavera-sound-barcelona-2026-headliners-cure-doja-cat-1236074538/', label: 'Billboard (en inglés): cabezas de cartel de 2026'},
    {href: 'https://en.wikipedia.org/wiki/Primavera_Sound', label: 'Wikipedia (en inglés): Primavera Sound, cronología, fuentes y tabla de cabezas de cartel'}
  ],

  bandcamp: {
    description: 'Primavera hace sitio a la música de club junto a los grupos, el pop y los experimentos. Mi propia música es el breakbeat. Comprar un tema apoya directamente esta web.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks de thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 de thecatrave'}
    ]
  }
};
