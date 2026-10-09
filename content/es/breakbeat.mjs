// Spanish breakbeat guide. Structure, facts and media from the English page
// (breakbeat-guide-draft.md, build-breakbeat-article.mjs); localised, not
// translated word for word.
//
// Spanish keywords (keywords/es-breakbeat.json), Keyword Planner Spain,
// 2026-10-09: breakbeat 1K-10K. Live es-ES SERP and People-also-ask read the
// same day (google.es, hl=es, gl=es): Andalusian breakbeat ("breakbeat
// andaluz") is prominent, and the PAA asks what breakbeat means and who
// invented it. The Andalusia H3 and three FAQ answers follow those phrasings
// and use only facts already on the English page. The sample and pattern
// searches are rejected (WRITING.md), as on the English page.
//
// Images as on the English page and the French one, at the owner's decision on
// 2026-09-23 ("leave the images as is"), although their sources are
// rights-reserved; logged open in defects.json
// (breakbeat-guide-rights-reserved-images). The players, the history map and
// the owner's music are built in content/breakbeat-media.mjs.
import {articleFigure, articleTable} from '../../site-components.mjs';
import {t} from '../../i18n.mjs';
import {breakbeatMedia} from '../breakbeat-media.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (src, width, height, className, alt, caption) => articleFigure({src, width, height, alt, caption: escapeHtml(caption), className});

const copy = {
  listening: t('es').essentialListening,
  notes: [
    'Los seis segundos de Gregory Coleman que los productores estiraron después en innumerables identidades rítmicas.',
    'Los acentos y la colocación de Clyde Stubblefield muestran por qué un bucle famoso sigue siendo una interpretación humana.',
    'Un break de batería y fragmentos de voz que viajaron por el hip-hop, la rave y el jungle.',
    'Percusión y espacio abierto que se volvieron centrales en la práctica de los DJ y los b-boys.',
    'El disco que hizo del break Amen el tema de una canción y no la alfombra de debajo, diez años antes de que los productores de rave británicos lo aceleraran.',
    'Una producción de hip-hop británica rápida que se encuentra con la rave antes de que el breakbeat hardcore tuviera nombre fijo. El reproductor de abajo usa la versión £20, muy parecida, del mismo catálogo de los inicios.',
    'Breaks, bajos y samples de rave, hechos a la vez para mezclar y para reconocerse al instante.',
    'Una ruta más oscura y aireada por el breakbeat hardcore.',
    'Crossover rave de los inicios y breakbeat hardcore, no la prueba de que el grupo fuera siempre un grupo de big beat.',
    'Voces ragga y breakbeat hardcore pasan de la cultura rave a las listas británicas.',
    'Música de club sostenida por los breaks, llevada a la escala del big beat sin perder la repetición del acid.',
    'La presión del acid, baterías a la medida del hip-hop y un puente entre los clubes underground y el breakbeat crossover.',
    'El electro y el acid breakbeat de la ruta de la Costa Oeste estadounidense.',
    'El electro, el bajo y la identidad regional de los Florida breaks en una sola producción.',
    'El progressive breaks estirado hasta una amplitud orquestal y un largo arreglo de club.',
    'Las ediciones más apretadas y el extremo grave del naciente circuito nu-skool.',
    'El swing del UK garage y el bajo entran en un marco de breaks propiamente dicho.',
    'Un ritmo roto actual, moldeado por la memoria de la rave y no por un revival de género estricto.',
    'El movimiento del breakbeat dentro de un marco techno.',
    'Un punto de encuentro actual entre garage, techno, fragmentos de voz y breaks.',
    'Una larga ruta breakbeat de atmósfera berlinesa más fría, que deja al ritmo espacio para cambiar sin cesar.'
  ],
  groups: {
    'breaks-before-genre': ['Los breaks antes del género', 'Escucha primero los discos fuente como interpretaciones: cada break tiene una sensación humana distinta antes de que los productores lo troceen.'],
    'british-rave-group': ['La rave británica empieza a dividirse', 'Estos discos muestran el breakbeat hardcore pasando del hip-hop británico rápido a la rave de las listas, a una presión más oscura y al crossover ragga.'],
    'florida-group': ['Florida se vuelve una escena aparte', 'La producción de DJ Icey hace audible la mezcla local de electro, Miami bass y breaks rodantes.'],
    'acid-west-coast-group': ['Las rutas acid y Costa Oeste', 'Un tema amplía el acid breakbeat; el otro se inclina hacia el electro y la Costa Oeste estadounidense.'],
    'crossover-group': ['Los breaks a escala crossover', 'Chemical Beats muestra cómo la repetición acid y las baterías a la medida del hip-hop pasaron de los clubes a una producción a escala de festival.'],
    'nu-skool-group': ['El nu-skool se vuelve un circuito aparte', 'La amplitud progressive, las ediciones afiladas y el swing del UK garage muestran lo ancho que llegó a ser el ecosistema de breaks de principios de los 2000.'],
    'contemporary-group': ['Cinco rutas actuales', 'La memoria rave, la breakbeat techno, el UK bass moderno y el progressive breaks muestran por qué el ritmo ya no necesita un revival unificado.']
  },
  floridaPlaylist: {
    title: 'Florida breaks: una larga playlist regional.',
    description: 'Para escuchar después del ejemplo de DJ Icey y oír el continuo regional más amplio: electro bass, freestyle, breaks rodantes y los productores del circuito de clubes de Florida.',
    iframeTitle: 'Playlist de Florida breaks y funky breaks en Spotify'
  },
  nuSkoolPlaylist: {
    title: 'Nu-skool breaks: una larga playlist de la escena.',
    description: 'Una ruta más larga más allá de los ejemplos sueltos, con Freq Nasty, Plump DJs, Stanton Warriors y el circuito de breaks que los rodeaba.',
    iframeTitle: 'Playlist The Sound of Nu Skool Breaks en Spotify'
  },
  protectYaBreaks: 'Breaks progresivos a 128 BPM con voces de rap troceadas y un giro downtempo. Mi propio tema.',
  contemporaryMix: {
    kicker: 'Una ruta actual de thecatrave',
    title: 'I Like to Smoke in Silence After Raves',
    description: 'Esta sesión tiene su lugar aquí porque muestra cómo circulan hoy los breaks entre garage, bass music, techno y rave, en lugar de vivir en un revival cerrado.',
    iframeTitle: 'I Like to Smoke in Silence After Raves de thecatrave en SoundCloud'
  },
  popCulture: {
    label: 'EL BREAKBEAT FUERA DEL CLUB:',
    html: 'Los videojuegos y el cine llevaron la música electrónica basada en los breaks mucho más allá de las tiendas de discos especializadas. <em>Wipeout 2097</em> puso a los Chemical Brothers, The Prodigy y Future Sound of London en un mundo de carreras futurista; <em>SSX Tricky</em> hizo del big beat, el hip-hop y los breaks parte de la emoción física del juego; y la banda sonora de <em>Matrix</em> usó artistas como The Prodigy y Propellerheads para que las baterías rotas fueran inseparables de la velocidad y la tensión. Esas bandas sonoras dieron a conocer la energía del breakbeat a oyentes que nunca habían pisado una rave.'
  },
  map: {
    title: 'Mapa de la historia del breakbeat',
    desc: 'Un mapa que une los breaks funk y el hip-hop del Bronx con la rave británica, Florida, la Costa Oeste y Andalucía, y luego con el big beat, el nu-skool breaks y la música de club actual.',
    columns: ['RAÍCES', 'RUTAS LOCALES', 'RAMAS DE LOS AÑOS 90', 'DE LOS 2000 A HOY'],
    nodes: [
      ['Breaks funk y soul', 'años 60-70'], ['DJ del Bronx', 'desde los 70'],
      ['Rave británica', '1988-92'], ['Florida / Orlando', 'desde principios de los 90'], ['Acid EE. UU. / Costa Oeste', 'años 90'], ['Andalucía', '1992-2002'],
      ['Hardcore → jungle', 'años 90'], ['Big beat', 'mediados-finales de los 90'], ['Nu-skool breaks', 'finales de los 90-2000'], ['Acid / progressive', 'años 90-2000'],
      ['Jungle y D&B', 'escenas vivas y distintas'], ['Circuito de breaks aparte', 'años 2000; se reduce después'], ['Continuidades regionales', 'Florida / Andalucía'], ['Continuo actual', 'electro / UKG / techno / bass']
    ],
    mobile: [
      ['Años 60-70', 'Los breaks grabados se vuelven material de DJ', 'Los pasajes de batería funk y soul se encuentran con la práctica de los platos del Bronx.'],
      ['1988-2002', 'Se forman varias rutas locales', 'La rave británica, el centro de Florida, los clubes de la Costa Oeste y Andalucía organizan de forma distinta la misma idea rítmica.'],
      ['Años 90-2000', 'Las ramas se vuelven escenas con nombre', 'Hardcore, jungle, big beat, acid, progressive y nu-skool breaks se solapan sin formar una taxonomía.'],
      ['Hoy', 'La etiqueta de escena se estrecha, el lenguaje se extiende', 'Los breaks propiamente dichos continúan, mientras las baterías rotas circulan por el electro, el garage, el techno, el jungle y la bass music.']
    ],
    caption: 'Las fechas marcan la aparición y el pico de visibilidad, no la desaparición.'
  }
};

export default {
  lang: 'es',
  name: 'es-breakbeat',
  file: 'es/breakbeat.html',
  draft: 'es/breakbeat-draft.md',
  canonical: 'https://thecatrave.com/es/breakbeat',
  englishPath: '/breakbeat-guide',
  ogImage: 'https://thecatrave.com/img/og/breakbeat.jpg',
  bodyClass: 'article-page breakbeat-page',
  minReadingMinutes: 20,
  image: 'https://thecatrave.com/img/breakbeat/plump-djs-electric-disco.jpg',

  title: 'Qué es el breakbeat: historia, estilos y breakbeat andaluz',
  description: 'Qué es el breakbeat: de los breaks funk y el hip-hop a la rave británica, Florida y Andalucía, el big beat, el nu-skool y los breaks de hoy.',
  datePublished: '2026-10-09',
  dateModified: '2026-10-09',
  dateLabel: '9 de octubre de 2026',

  heroKicker: 'Guía del breakbeat',
  heroTitle: 'Qué es el breakbeat: historia, estilos y breakbeat andaluz',
  deck: 'De los breaks funk y el hip-hop del Bronx a la rave británica, Florida, Andalucía, el big beat, el nu-skool y la música de club rota de hoy.',
  answerLabel: 'El breakbeat, definición',
  breadcrumbName: 'Breakbeat',

  answerSection: 'Respuesta',
  introSection: 'Introducción',
  introTitle: 'Qué es el breakbeat: historia, estilos y breakbeat andaluz.',
  faqSection: 'FAQ',
  faqLabel: 'Preguntas frecuentes sobre el breakbeat',
  faqTitle: 'Preguntas frecuentes sobre el breakbeat.',

  sections: [
    {id: 'definition', heading: 'El breakbeat, ¿ritmo o género?', tocLabel: '¿Ritmo o género?', title: 'El breakbeat, ¿ritmo o género?'},
    {id: 'origins', heading: '¿De dónde viene el breakbeat?', tocLabel: 'Funk, hip-hop y samplers', title: '¿De dónde viene el breakbeat?', subsections: ['funk-records', 'hip-hop-method', 'samplers', 'broken-rhythms']},
    {id: 'history-map', heading: 'Cómo viajó y cambió el breakbeat', tocLabel: 'Mapa de la historia', title: 'Cómo viajó y cambió el breakbeat.', className: 'map-section'},
    {id: 'club-history', heading: 'Cómo el breakbeat se hizo música de club', tocLabel: 'Historias regionales de los clubes', title: 'Cómo el breakbeat se hizo música de club.', className: 'history-section', subsections: ['british-rave', 'branches', 'pirate-radio', 'florida', 'west-coast', 'andalusia', 'big-beat', 'nu-skool', 'less-visible']},
    {id: 'styles', heading: 'Los estilos de breakbeat: hardcore, Florida, big beat, nu-skool y otros', tocLabel: 'Estilos y géneros vecinos', title: 'Los estilos de breakbeat: hardcore, Florida, big beat, nu-skool y otros.', className: 'styles-section', subsections: ['hardcore', 'florida-breaks', 'big-beat-style', 'nu-skool-style', 'acid-progressive', 'contemporary', 'breakbeat-techno', 'related']},
    {id: 'comparison', heading: 'Breakbeat, jungle, drum and bass, big beat y broken beat: las diferencias', tocLabel: 'Comparación de géneros', title: 'Breakbeat, jungle, drum and bass, big beat y broken beat: las diferencias.', className: 'comparison-section'},
    {id: 'today', heading: 'El breakbeat hoy', title: 'El breakbeat hoy.', subsections: ['revival', 'travels']}
  ],

  media: ({lang}) => ({
    ...breakbeatMedia(lang, copy),
    'Image: akai': figure('img/breakbeat/akai-s950-cutout.png', 2172, 724, 'feature-image cutout-image sampler-hero', 'Un sampler en rack Akai S950 recortado sobre fondo transparente', 'El S950 hizo posible la edición detallada de los breaks con una memoria diminuta y una forma de trabajar muy física.'),
    'Image: wild-style': figure('img/breakbeat/rbma-wild-style-mural.jpg', 1400, 952, 'archive-image wide-archive-image people-image competitor-media', 'Charlie Ahearn y Fab Five Freddy junto al mural de Wild Style en 1983', 'Charlie Ahearn y Fab Five Freddy junto al mural de Wild Style, 1983.'),
    'Image: hip-hop-pioneers': figure('img/breakbeat/musicradar-hip-hop-pioneers.jpg', 1200, 835, 'archive-image wide-archive-image people-image competitor-media', 'Grandmaster Flash, DJ Kool Herc, Afrika Bambaataa y Chuck D juntos en la Universidad de Columbia', 'Grandmaster Flash, DJ Kool Herc, Afrika Bambaataa y Chuck D juntos en el Rap Summit de la Universidad de Columbia.'),
    'Image: ultimate-breaks': figure('img/breakbeat/ultimate-breaks-and-beats-cutout.svg', 1072, 1020, 'archive-image artifact-cutout-image record-artifact', 'Un disco original del recopilatorio Ultimate Breaks and Beats fotografiado en su funda', 'Ultimate Breaks & Beats convirtió pasajes de batería imposibles de encontrar en una biblioteca física para DJ y productores.'),
    'Image: sp1200': figure('img/breakbeat/musicradar-sp1200-floppies.jpg', 1200, 675, 'archive-image wide-archive-image competitor-media', 'Disquetes sobre un sampler E-mu SP-1200', 'La SP-1200 guardaba samples y secuencias en disquetes, y su memoria limitada formaba parte de la forma de trabajar.'),
    'Image: prodigy': figure('img/breakbeat/musicradar-prodigy-1992.jpg', 1200, 675, 'archive-image wide-archive-image people-image competitor-media', 'The Prodigy fotografiados como trío en Essex en 1992', 'The Prodigy en Essex en 1992, cuando el breakbeat hardcore pasaba de la rave a una cultura pública más amplia.'),
    'Image: pj-smiley': figure('img/breakbeat/shut-up-and-dance-pj-smiley.jpg', 1400, 933, 'archive-image pj-smiley-image people-image', 'Retrato en blanco y negro de PJ y Smiley, de Shut Up and Dance', 'PJ y Smiley unieron la cultura de los sound systems de Hackney, la producción de hip-hop y la naciente escena rave.'),
    'Image: dj-icey': figure('img/breakbeat/dj-icey-flyer-cutout.svg', 635, 560, 'archive-image artifact-cutout-image', 'Un flyer de archivo de DJ Icey en el Club 600 North', 'Un flyer de DJ Icey y Zone Records del circuito regional de clubes de Florida.'),
    'Image: cordoba': figure('img/breakbeat/cordoba-breakbeat-flyer.jpg', 1052, 1500, 'archive-image portrait-image', 'Flyer del evento Break Beat Nation en Córdoba en 2001', 'Break Beat Nation anunciando un programa de varias noches en Córdoba, en 2001.'),
    'Image: andalusia': figure('img/breakbeat/andalusia-rave-crowd.jpg', 1800, 1175, 'archive-image wide-archive-image people-image', 'Un público bailando en una rave de breakbeat andaluza de archivo', 'Un público de breakbeat andaluz, antes de que los móviles formaran parte de la pista.'),
    'Image: plump-djs': figure('img/breakbeat/plump-djs-electric-disco.jpg', 1200, 1200, 'archive-image square-image', 'Portada del disco de Plump DJs, Electric Disco y Plumpy Chunks, Finger Lickin’', 'Finger Lickin’ hizo del nu-skool breaks un lenguaje reconocible, en el club y en las portadas.'),
    'Table: comparison': articleTable({
      headers: ['Estilo', 'Carácter rítmico', 'Zona de tempo aproximada', 'Contexto histórico', 'Nombres representativos', 'Diferencia más clara'],
      label: 'Breakbeat y géneros vecinos comparados, tabla',
      rows: [
        ['Breakbeat / breaks', 'Baterías de club sincopadas, sampleadas o programadas', '120 a 140 BPM es habitual, sin ser regla', 'Escenas de club británicas, estadounidenses e internacionales', 'Stanton Warriors, Plump DJs, DJ Icey', 'La amplia categoría de club centrada en los ritmos rotos'],
        ['Breakbeat hardcore', 'Breaks rápidos, stabs de rave, pianos y sub-bajo', 'Entre 140 y más de 160 BPM', 'Rave británica de principios de los noventa', 'SL2, 2 Bad Mice, Acen', 'Sonido hardcore de transición, antes de que las ramas se estabilizaran'],
        ['Jungle', 'Breaks muy editados, influencia reggae y dub, sub-bajo profundo', 'Entre 150 y 170 BPM', 'Cultura rave negra británica de principios de los noventa', '4hero, Remarc, Shy FX', 'Una cultura propia de sound system, MC y dubplates'],
        ['Drum and bass', 'Baterías rápidas basadas en breaks, con muchos estilos de producción especializados', 'Entre 160 y 180 BPM', 'Desde mediados de los noventa', 'Goldie, Photek, LTJ Bukem', 'Una escena amplia y una identidad de género más allá de la categoría general de los breaks'],
        ['Big beat', 'Grandes bucles, acid, dinámica de rock y collage de samples', 'A menudo 100 a 140 BPM', 'Cultura de club y de festival crossover de los noventa', 'Chemical Brothers, Fatboy Slim', 'Más basado en bucles y orientado al crossover que los breaks propiamente dichos'],
        ['Acid / progressive breaks', 'Baterías rotas con líneas de 303 o largas subidas atmosféricas', 'A menudo 120 a 140 BPM', 'Circuitos de club de los noventa y los 2000 que se solapan', 'Chemical Brothers, Hybrid, primeros DJ de breaks', 'Estilos con apellido más que una escena regional unificada'],
        ['Broken beat', 'Ritmo suelto y sincopado con armonía de jazz, soul y funk', 'A menudo 90 a 130 BPM', 'Oeste de Londres, finales de los noventa y años 2000', 'IG Culture, Bugz in the Attic', 'Una escena distinta con otro lenguaje rítmico y armónico'],
        ['Breakcore', 'Breaks hipereditados, intensidad hardcore, distorsión y ruptura', 'Normalmente 160 BPM o más, pero muy variable', 'De los noventa a hoy, underground internacional', 'Alec Empire, Venetian Snares', 'Edición y estructura más extremas que los breaks o el jungle'],
        ['Breakbeat techno', 'Arreglo y diseño sonoro de techno construidos en torno a baterías rotas', 'A menudo 125 a 150 BPM', 'Varias escenas regionales actuales', 'Según la escena', 'Un marco techno con pulso roto en lugar de recto']
      ].map(row => row.map(escapeHtml))
    })
  }),

  // The English page's sources, URL for URL, with translated labels.
  sources: [
    {html: '<a href="https://blogs.loc.gov/music/2023/08/early-hip-hop-at-the-library-of-congress/" target="_blank" rel="noopener noreferrer">Library of Congress: Early Hip-Hop at the Library of Congress</a> y <a href="https://blogs.loc.gov/loc/2021/01/citizen-dj-noah-webster-and-the-value-of-copyright/" target="_blank" rel="noopener noreferrer">los recursos de Citizen DJ</a> sobre Kool Herc y la práctica de los DJ con los breaks (en inglés)'},
    {href: 'https://www.musicradar.com/news/the-history-of-breaks', label: 'MusicRadar (en inglés): The History of Breaks in Music Production'},
    {href: 'https://www.musicradar.com/news/the-beginners-guide-to-breaks', label: 'MusicRadar (en inglés): The Beginner’s Guide to Breakbeat'},
    {href: 'https://daily.redbullmusicacademy.com/2019/01/shut-up-and-dance-interview/', label: 'Red Bull Music Academy Daily (en inglés): entrevista con Shut Up and Dance'},
    {href: 'https://www.hachette.co.uk/titles/bill-brewster-2/last-night-a-dj-saved-my-life/9781474625609/', label: 'Bill Brewster y Frank Broughton: Last Night a DJ Saved My Life'},
    {href: 'https://www.penguinrandomhouse.com/books/674010/energy-flash-by-simon-reynolds/', label: 'Simon Reynolds: Energy Flash'},
    {href: 'https://www.orlandoweekly.com/news/dance-dance-revolution-2244233/', label: 'Orlando Weekly (en inglés): Dance Dance Revolution, sobre los clubes de Orlando, Underground Record Source y los Florida breaks'},
    {href: 'https://www.orlandoweekly.com/music/aahz-respects-the-breaks-that-made-orlando-global-overdue-propers-for-dj-stylus-the-beacham-2453343/', label: 'Orlando Weekly (en inglés): AAHZ Respects the Breaks That Made Orlando Global'},
    {href: 'https://www.djicey.com/bio', label: 'DJ Icey (en inglés): biografía oficial, sobre sus influencias, su residencia en The Edge y Zone Records'},
    {href: 'https://www.hardkiss.org/_files/ugd/502d5a_88604739932d41c5b2bd0087c98d4b90.pdf', label: 'Hardkiss (en inglés): The Magical Sound of the San Francisco Underground, sobre la primera red rave de la bahía de San Francisco'},
    {href: 'https://www.diariodesevilla.es/ocio/David-Pareja-breakbeat_0_1859814016.html', label: 'Diario de Sevilla: entrevista con David Pareja, director de Break Nation, sobre la escena andaluza de 1992 a 2002'},
    {href: 'https://www.filmotecadeandalucia.es/documents/282361/334099154/CO%2B-%2B2024-07-18-%2B%2820%2730%29%2B-%2BBreak%2BNation.pdf/33f0b15d-ce37-49fa-b1cd-129d026bfc97', label: 'Filmoteca de Andalucía: programa y sinopsis de Break Nation'},
    {href: 'https://www.officialcharts.com/songs/stanton-warriors-da-antidote/', label: 'Official Charts Company (en inglés): Stanton Warriors, Da Antidote'},
    {href: 'https://pitchfork.com/reviews/tracks/skee-mask-50-euro-to-break-boost/', label: 'Pitchfork (en inglés): Skee Mask, 50 Euro to Break Boost'},
    {html: 'thecatrave: <a href="/es/historia-musica-electronica-reino-unido">historia de la música electrónica británica</a> y <a href="/es/jungle">guía del jungle</a>'}
  ],

  bandcamp: {
    description: 'Estos lanzamientos son los más cercanos a la historia del breakbeat que cuenta este artículo. Comprar uno apoya mi trabajo directamente.',
    tracks: [
      {title: 'thecatrave, Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks de thecatrave'},
      {title: 'thecatrave, Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 de thecatrave'},
      {title: 'thecatrave, Mylène Farmer Dégénération remix', id: '467727105', url: 'https://thecatrave.bandcamp.com/track/myl-ne-farmer-d-g-n-ration-electronica-breaks-dubstep-remix', linkText: 'Mylène Farmer, Dégénération, remix de thecatrave'}
    ]
  }
};
