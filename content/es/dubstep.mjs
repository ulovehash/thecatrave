// Spanish dubstep guide. Structure and facts from the English page
// (dubstep-guide-draft.md, build-dubstep-article.mjs).
//
// Spanish keywords from Keyword Planner (Spain, 2026-11-12), in
// keywords/es-dubstep.json: dubstep 1K–10K, que es el dubstep, musica
// dubstep and electronica dubstep 10–100. Requests for files are left out
// (WRITING.md).
//
// The draft places each listening block with [Embed: ...] lines at the same
// positions as the English page. Quotations are translated; the sources quoted
// are English and are listed below.
//
// The images are the English guide's, in img/dubstep/, with translated
// captions; see home-articles.mjs for why a translation may reuse them.
import {
  articleFigure, articleListeningBand, articleListeningCollection, articleTable, articleTrackEmbed, articleYoutubeEmbed, ownTrackListening
} from '../../site-components.mjs';
import {t} from '../../i18n.mjs';

const listeningItems = rows => rows.map(row => ({
  year: row.year,
  artist: row.artist,
  title: row.title,
  note: row.note,
  playerHtml: articleTrackEmbed({
    platform: row.spotify ? 'spotify' : 'youtube',
    id: row.spotify || row.youtube,
    title: `${row.artist}, ${row.title}`
  })
}));

const collection = (lang, id, title, description, rows) => articleListeningCollection({
  lang, id, tone: 'cyan', title, description, items: listeningItems(rows)
});

const youtube = (id, label) => articleYoutubeEmbed({
  src: `https://www.youtube-nocookie.com/embed/${id}`,
  title: `${label}, en YouTube`
});

const figure = ({name, width, alt, caption, className = 'wide-archive-image', height}) => articleFigure({
  src: `img/dubstep/${name}.webp`,
  srcset: `img/dubstep/${name}-320.webp 320w, img/dubstep/${name}.webp ${width}w`,
  width, height, alt, caption, className
});

export default {
  lang: 'es',
  name: 'es-dubstep',
  file: 'es/dubstep.html',
  draft: 'es/dubstep-draft.md',
  canonical: 'https://thecatrave.com/es/dubstep',
  englishPath: '/dubstep-guide',
  ogImage: 'https://thecatrave.com/img/og/dubstep.jpg',
  image: 'https://thecatrave.com/img/dubstep/dubplate-lathe.webp',
  bodyClass: 'article-page dubstep-page',
  minReadingMinutes: 9,

  title: '¿Qué es el dubstep? Origen, sonido y una palabra para dos géneros',
  description: 'El dubstep nació en tiendas de discos y sótanos del sur de Londres y después se partió en dos géneros con un solo nombre. El sonido, las escenas y dónde está hoy.',
  datePublished: '2026-11-12',
  dateModified: '2026-11-12',
  dateLabel: '12 de noviembre de 2026',

  heroKicker: 'Dubstep',
  heroTitle: '¿Qué es el dubstep?',
  deck: 'Una palabra para dos músicas muy distintas. Cómo un sonido salido de una tienda de discos de Croydon se partió en dos, y qué fue de la versión que nunca desapareció.',
  answerLabel: 'Dubstep: definición',
  breadcrumbName: 'Dubstep',

  answerSection: 'Respuesta',
  introSection: 'Introducción',
  introTitle: 'Dos respuestas a la misma pregunta.',
  faqSection: 'FAQ',
  faqLabel: 'Preguntas frecuentes sobre el dubstep',
  faqTitle: 'Preguntas frecuentes sobre el dubstep.',

  sections: [
    {id: 'croydon', heading: 'Croydon, Big Apple y un sonido sin nombre', title: 'Croydon, Big Apple y un sonido sin nombre.', kicker: 'Origen', tocLabel: 'Croydon y Big Apple'},
    {id: 'sound', heading: 'Cómo está hecho el dubstep: 140 BPM, half-time y el bajo del dubstep', title: 'Cómo está hecho el dubstep: 140 BPM, half-time y el bajo del dubstep.', tocLabel: 'Cómo está hecho el dubstep'},
    {id: 'scene', heading: 'FWD>>, DMZ y la economía de un dubplate', title: 'FWD>>, DMZ y la economía de un dubplate.', tocLabel: 'FWD>>, DMZ y los dubplates'},
    {id: 'split', heading: 'Cómo una palabra llegó a significar dos cosas', title: 'Cómo una palabra llegó a significar dos cosas.', kicker: 'De 2010 a 2012'},
    {id: 'bristol', heading: 'Bristol: la línea que nunca se rompió', title: 'Bristol: la línea que nunca se rompió.', tocLabel: 'Bristol'},
    {id: 'berlin', heading: 'Berlín: el dubstep se encuentra con el techno', title: 'Berlín: el dubstep se encuentra con el techno.', tocLabel: 'Berlín'},
    {id: 'subgenres', heading: 'Los subgéneros y lo que significan de verdad', title: 'Los subgéneros y lo que significan de verdad.', tocLabel: 'Los subgéneros explicados'},
    {id: 'now', heading: 'Dónde está el dubstep ahora', title: 'Dónde está el dubstep ahora.'}
  ],

  media: ({lang}) => ({
    // The owner's own music inside the text, as on the German and French pages.
    'thecatrave berlin-race-1909': ownTrackListening('berlin-race-1909', 'La amplitud del techno y las baterías rotas: el mismo encuentro berlinés, escuchado desde hoy. Un tema mío.', lang),
    'Big Apple Records': figure({name: 'big-apple-records', width: 720, height: 482,
      alt: 'La fachada de Big Apple Records en Croydon hacia el año 2000',
      caption: 'Big Apple Records, Croydon, hacia 2000. La gente que atendía, la gente que pasaba el rato y la gente que hacía los discos eran en gran parte las mismas. Foto: Bigapplerecords, CC BY-SA 3.0.'}),
    'dubplate lathe': figure({name: 'dubplate-lathe', width: 961, height: 540,
      alt: 'Un torno de corte de vinilo con un disco de acetato en el plato',
      caption: 'Treinta libras, unas cincuenta reproducciones y los surcos se acababan. La escasez no era una estrategia de marketing, sino una propiedad física del formato.'}),
    'FWD Berlin': figure({name: 'fwd-berlin', width: 980, height: 650,
      alt: 'Sgt Pokes y Loefah en una noche de FWD en Berlín en 2006',
      caption: 'Sgt Pokes y Loefah en FWD en Berlín, 2006. El mismo MC y el mismo DJ que en Brixton, mil trescientos kilómetros más al este. Foto: Stephan Machac.'}),
    'sound system': figure({name: 'sound-system', width: 1200, height: 800,
      alt: 'Una torre de altavoces hecha a mano se alza sobre la calle en el Carnaval de Notting Hill',
      caption: 'Un sound system montado en la calle en el Carnaval de Notting Hill. La tradición caribeña del sound system, de la que salió el dubstep, nunca dejó de montar equipos, y el lado profundo nunca necesitó revivir para seguir en la sala. Foto: Jay Bergesen, CC BY 2.0.'}),
    'Burial': figure({name: 'burial-portrait', width: 703, height: 504, className: 'square-image',
      alt: 'Retrato de Burial, el productor del sur de Londres detrás de Untrue',
      caption: 'Burial siguió siendo anónimo pese a una nominación al Mercury Prize. La escena protegió ese anonimato, y eso dice lo que le importaba en 2007.'}),
    'Bassweight': youtube('YVcX0Oc5j5E', 'Bassweight, un documental sobre el dubstep'),
    'All My Homies Hate Skrillex': youtube('-hLlVVKRwk0', 'All My Homies Hate Skrillex, de Timbah.On.Toast'),
    'croydon-listening': collection(lang, 'croydon-listening',
      'Antes y después del nombre.',
      'El sonido antes de tener nombre, y poco después. Con tres años de diferencia, los dos hechos a pocos kilómetros de la misma tienda de discos.',
      [{year: 'Tempa, 2002', artist: 'Horsepower Productions', title: 'Gorgon Sound', spotify: '2eKcQqAYex36Eju94neF4l',
        note: 'El garage cercano al dub que alimentó el sonido: mucho delay y mucha línea de bajo, hecho antes de que nadie necesitara una palabra para él.'},
       {year: 'Tempa, 2005', artist: 'Skream', title: 'Midnight Request Line', youtube: 'vJGXRQ9vBoU',
        note: 'El sonido de Croydon ya con nombre. Escrito alrededor de Big Apple Records, llevó el dubstep a pistas que nunca habían oído hablar de la tienda.'}]),
    'built-listening': collection(lang, 'built-listening',
      'Espacio y wobble al mismo tempo.',
      'Los dos polos de la técnica. Un disco es casi solo espacio, el otro casi solo wobble, y los dos van al mismo tempo con el mismo patrón de batería.',
      [{year: 'DMZ, 2006', artist: 'Loefah', title: 'Mud', youtube: 'd_KtXqmKCFE',
        note: 'Casi solo espacio. El bombo y la caja muy separados, el subgrave hace el resto y pasa muy poco más: el half-time en su forma más austera.'},
       {year: 'Tempa, 2008', artist: 'Benga and Coki', title: 'Night', youtube: 'FHDvybumHAk',
        note: 'El wobble convertido en disco. Los mismos 140 y el mismo patrón de batería que Mud, con un oscilador de baja frecuencia que hace del bajo el gancho.'}]),
    'rinse-listening': collection(lang, 'rinse-listening',
      'La emisora, no el sótano.',
      'Dos de los DJs que nombra esta sección, en la emisora pirata que sacó el sonido del sur de Londres.',
      [{year: 'Rinse FM', artist: 'Plastician, Hatcha and Crazy D', title: 'I LOVE: DUBSTEP', youtube: 'S1s2XvfHfhU',
        note: 'Hatcha usó Rinse en 2003 para llevar el sonido más allá de los discos; Plastician llevaba Filthy Dub en la misma época. Por la emisora, cualquiera fuera de esas salas los oía a los dos.'}]),
    'dmz-listening': collection(lang, 'dmz-listening',
      'Los años de DMZ, y después.',
      'Cómo sonaron los años de DMZ y lo que salió de ellos. El primer disco se escribió para una sala con un equipo de sonido. El segundo, para unos auriculares a las cuatro de la mañana.',
      [{year: 'DMZ, 2006', artist: 'Digital Mystikz', title: 'Anti War Dub', youtube: '--jr22La8Nk',
        note: 'Escrito para una sala con un equipo de sonido: repetición meditativa, sirenas de dub y un peso que se debe sentir más que oír.'},
       {year: 'Hyperdub, 2007', artist: 'Burial', title: 'Archangel', spotify: '2agb1CPPGWXqXnrKn6cx7u',
        note: 'El mismo vocabulario, llevado a casa. Untrue logró una nominación al Mercury Prize mientras su autor seguía siendo anónimo.'}]),
    'split-listening': collection(lang, 'split-listening',
      'Un tempo, prioridades opuestas.',
      'La distancia en un solo lugar. Los dos discos van al mismo tempo con el mismo patrón de batería, y el segundo lleva el peso del subgrave a medios distorsionados. El primero lo hizo un fundador de DMZ.',
      [{year: 'DMZ, 2008', artist: 'Coki', title: 'Spongebob', youtube: 'cIpc817U_R4',
        note: 'La dirección más dura, hecha dentro de la propia escena. Dazed la puso en lo alto de su lista de temas que definen el brostep, y venía de un fundador de DMZ.'},
       {year: '2010', artist: 'Skrillex', title: 'Scary Monsters and Nice Sprites', spotify: '4rwpZEcnalkuhPyGkEdhu0',
        note: 'El peso llevado del subgrave a medios distorsionados, donde un campo de festival puede oírlo. En 2012 llegaron tres Grammy.'}]),
    'bristol-listening': collection(lang, 'bristol-listening',
      'La línea de Bristol.',
      'Bristol oyó dub antes que dubstep, y se nota: más lento, más pesado, menos interesado en el drop que en la presión que lo rodea.',
      [{year: 'Tectonic, 2006', artist: 'Pinch', title: 'Qawwali', spotify: '36tSNnMctCGaxQp0JVGBLC',
        note: 'Tectonic en su primer año: más lento y más raro que Londres, más deudor del dub y el techno que del garage, y todavía hoy el modelo del lado profundo.'}]),
    'berlin-listening': collection(lang, 'berlin-listening',
      'Donde se encuentran las dos ciudades.',
      'El disco en el que se encuentran el dubstep y el techno berlinés. Un tema de Skull Disco, reconstruido por uno de los productores más singulares del techno, de más de dieciocho minutos.',
      [{year: 'Skull Disco, 2007', artist: 'Shackleton', title: 'Blood On My Hands, Ricardo Villalobos Apocalypso Now Mix', youtube: 'KQr6m2l2J-Y',
        note: 'El dubstep como materia prima para un set de techno: el arreglo se estira durante dieciocho minutos y nunca se resuelve en un drop.'}]),
    'Table: subgenres': articleTable({
      headers: ['Término', 'Más o menos cuándo', 'Qué significa', 'Relación con el original'],
      rows: [
        ['Dubstep (original, después llamado deep)', 'Desde 2002', '140 BPM, baterías en half-time, subgrave, espacio', 'La fuente'],
        ['Brostep', 'Desde 2010', 'Medios distorsionados, dinámica de festival, drops agresivos', 'El mismo tempo y patrón de batería, prioridad de frecuencias opuesta'],
        ['Riddim', 'Desde mediados de los 2010', 'Mínimo, repetitivo, muy construido sobre tresillos', 'Desciende del brostep, no del sonido original'],
        ['Melodic dubstep', 'Desde principios de los 2010', 'Acordes emotivos, influencia del trance y el progressive', 'Toma el tempo y deja la oscuridad'],
        ['Chillstep', 'Desde principios de los 2010', 'Suave, ambiental, guiado por la voz', 'Más una categoría de streaming que una escena'],
        ['Future garage', 'Desde finales de los 2000', 'Swing de garage, el diseño sonoro del dubstep, contenido', 'Un hermano que se desarrolló en paralelo'],
        ['Post-dubstep', 'Desde 2010', 'Productores que usaron el vocabulario y siguieron adelante', 'Una etiqueta que pusieron después los críticos, no una escena a la que unirse']
      ]
    }),
    'subgenre-listening': collection(lang, 'subgenre-listening',
      'Dos de las ramas posteriores.',
      'Dos de las ramas posteriores: el riddim y el melodic dubstep.',
      [{year: 'Riddim', artist: 'Bommer and Crowell', title: 'Yasuo', youtube: 'fP2O6JcnJJI',
        note: 'Riddim: mínimo, repetitivo y construido sobre tresillos, derivado del brostep y no del sonido original.'},
       {year: '2014', artist: 'Seven Lions featuring Kerli', title: 'Worlds Apart', youtube: 'ULqdjtDI-bs',
        note: 'Melodic dubstep: se queda el tempo, se descarta la oscuridad y entran acordes del trance y el progressive.'}]),
    'deep-medi-listening': collection(lang, 'deep-medi-listening',
      'Cómo suena el sello.',
      'Deep Medi como catálogo y no como su fundador, con el álbum con el que todavía hoy se mide al sello.',
      [{year: '2009', artist: 'Silkie', title: 'Concrete Jungle', youtube: 'fIHrJa0bWbY',
        note: 'El tema que abre City Limits Vol. 1, el álbum de debut del productor del oeste de Londres y el disco que convirtió Deep Medi en un catálogo.'}]),
    'thecatrave remix': articleListeningBand({
      platform: 'soundcloud',
      id: 'dubstep-thecatrave-remix',
      kicker: 'thecatrave',
      title: 'Mylène Farmer, Dégénération. Un remix entre electrónica, breaks y dubstep.',
      description: 'Un ejemplo de cómo las mismas técnicas funcionan fuera del género del que salieron: el peso del half-time y los breaks bajo una voz pop francesa, que es justo lo que pasa cuando un género se convierte en una caja de herramientas. Mi propio remix.',
      src: `https://w.soundcloud.com/player/?url=${encodeURIComponent('https://soundcloud.com/thecatrave/mylene-farmer-degeneration')}&color=%23ff5a36&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false`,
      iframeTitle: 'Mylène Farmer, Dégénération, remix de thecatrave en SoundCloud',
      fullBleed: true,
      tone: 'cyan'
    }),
    'dubstep-classics-playlist': articleListeningBand({
      platform: 'spotify',
      id: 'dubstep-classics-playlist',
      kicker: t(lang).essentialListening,
      title: 'Dubstep Classics: la playlist ampliada.',
      description: 'Los discos en los que piensa la mayoría cuando dice dubstep, con más peso en el lado ruidoso.',
      src: 'https://open.spotify.com/embed/playlist/37i9dQZF1DX4arVIN5Cg4U?utm_source=generator',
      iframeTitle: 'Playlist Dubstep Classics en Spotify',
      fullBleed: true,
      tone: 'cyan'
    })
  }),

  sources: [
    {href: 'https://www.vice.com/en/article/an-oral-history-of-dubstep-vice-lauren-martin-610/', label: 'VICE: The oral history of dubstep'},
    {href: 'https://www.museumofyouthculture.com/a-brief-history-of-early-dubstep/', label: 'Museum of Youth Culture: A brief history of early dubstep'},
    {href: 'https://www.dazeddigital.com/music/article/64343/1/what-is-brostep-five-key-tracks-skrillex-fred-again-dubstep', label: 'Dazed: What is brostep, in five key tracks'},
    {href: 'https://www.clashmusic.com/features/nuff-wheel-ups-exploring-dubplate-culture/', label: 'Clash: Nuff wheel ups, exploring dubplate culture'},
    {href: 'https://legacy.boilerroom.tv/dubstep-from-croydon-to-kreuzberg-beyond/', label: 'Boiler Room: Dubstep from Croydon to Kreuzberg and beyond'},
    {href: 'https://www.factmag.com/2015/06/03/transatlantic-vibrations-10-years-of-dmz-and-dub-war/', label: 'FACT: Ten years of DMZ and Dub War'},
    {href: 'https://djmag.com/features/how-big-apple-records-became-birthplace-of-dubstep', label: 'DJ Mag: How Big Apple Records became the birthplace of dubstep'}
  ],

  bandcamp: {
    description: 'Estos lanzamientos son los más cercanos al lado de breaks y bajo de este artículo. Comprar uno apoya mi trabajo directamente.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks de thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 de thecatrave'}
    ]
  }
};
