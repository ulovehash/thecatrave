// Spanish Berlin clubs guide. Structure, facts and media from the English page
// (berlin-clubs-draft.md); localised, not translated word for word.
//
// Spanish keywords, measured 2026-10-09 with Keyword Planner (Spain,
// keywords/es-berlin-clubs.json): berghain 10K-100K (navigational, the
// Berghain guide covers it), discotecas berlín 10-100. No row returned for
// "mejores discotecas de berlín" or "mejores clubes de berlín".
//
// Like the English page, this guide carries the owner's Berlin Race 1909 and
// the 'I Lost So Many Weekends' mix. The images are the English guide's, in
// img/berlin-clubs/, with translated captions.
import {
  articleFigure, articleListeningBand, articleTable, articleYoutubeEmbed, ownTrackListening, ownSetListening
} from '../../site-components.mjs';
import {t} from '../../i18n.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/berlin-clubs/${name}-${width}.webp`,
  srcset: `img/berlin-clubs/${name}-320.webp 320w, img/berlin-clubs/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

const youtube = (id, label) => articleYoutubeEmbed({
  src: `https://www.youtube-nocookie.com/embed/${id}`,
  title: label
});

export default {
  lang: 'es',
  name: 'es-berlin-clubs',
  file: 'es/discotecas-berlin.html',
  draft: 'es/berlin-clubs-draft.md',
  canonical: 'https://thecatrave.com/es/discotecas-berlin',
  englishPath: '/best-clubs-in-berlin',
  ogImage: 'https://thecatrave.com/img/og/berlin-clubs.jpg',
  bodyClass: 'article-page berlin-clubs-page',

  title: 'Discotecas Berlín: los mejores clubes y sus leyendas',
  description: 'Berghain, Tresor, KitKat y los clubes de antes: las mejores discotecas de Berlín, cómo se hizo famosa cada una y las sesiones para escuchar antes de ir.',
  datePublished: '2026-10-09',
  dateModified: '2026-10-09',
  dateLabel: '9 de octubre de 2026',

  heroKicker: 'Clubes de Berlín',
  heroTitle: 'Discotecas Berlín: los mejores clubes y sus leyendas',
  deck: 'De UFO y Tresor a Berghain y Sisyphos: las salas que hicieron de Berlín una ciudad techno, los clubes famosos que cerraron y los que siguen abiertos.',
  answerLabel: 'Los mejores clubes de Berlín',
  breadcrumbName: 'Discotecas Berlín',

  answerSection: 'Respuesta',
  introSection: 'Introducción',
  introTitle: 'Primero las leyendas, luego el fin de semana.',
  faqSection: 'FAQ',
  faqLabel: 'Preguntas frecuentes',
  faqTitle: 'Preguntas frecuentes sobre los clubes de Berlín.',

  sections: [
    {id: 'before-berghain', heading: 'Antes de Berghain: cómo Berlín se hizo ciudad techno', title: 'Antes de Berghain: cómo Berlín se hizo ciudad techno.'},
    {id: 'berghain', heading: 'Berghain y Panorama Bar', title: 'Berghain y Panorama Bar.', subsections: ['the-door']},
    {id: 'closed-legends', heading: 'Las leyendas que cerraron', title: 'Las leyendas que cerraron.'},
    {id: 'best-clubs-now', heading: 'Los mejores clubes de Berlín ahora', title: 'Los mejores clubes de Berlín ahora.', subsections: ['sisyphos']},
    {id: 'how-berlin-clubs-work', heading: 'Cómo funcionan los clubes de Berlín: código de vestimenta, móviles y fin de semana', title: 'Cómo funcionan los clubes de Berlín: código de vestimenta, móviles y fin de semana.'},
    {id: 'hear-berlin', heading: 'Escucha Berlín antes de ir', title: 'Escucha Berlín antes de ir.'}
  ],

  media: ({lang}) => ({
    'Embed: thecatrave Berlin Race 1909': ownTrackListening('berlin-race-1909', 'Breaks entre el eco y el espacio del dub techno. Un tema mío, que lleva el nombre de esta ciudad.', lang),
    'Embed: thecatrave mix I Lost So Many Weekends': ownSetListening(1, lang, 'Breaks y techno para las horas antes de la cola. Mi propia mezcla.'),
    'Image: Tresor 2003': figure('tresor-2003', 1200, 900,
      'La entrada del Tresor original en la Leipziger Strasse, en Berlín, en 2003',
      'La primera dirección de Tresor, en la Leipziger Strasse, en septiembre de 2003. El club cerró allí dos años después. Foto: MichaelBrossmann, dominio público.'),
    'Image: Tresor door': figure('tresor-door', 1200, 900,
      'Una puerta de Tresor expuesta en la exposición Berlin Global del Humboldt Forum',
      'Una puerta del Tresor original, hoy en la exposición Berlin Global del Humboldt Forum. Foto: Fridolin freudenfett, CC BY-SA 4.0.'),
    'Image: Berghain entrance': figure('berghain', 1200, 800,
      'La entrada de Berghain en la antigua central térmica de Friedrichshain, en Berlín',
      'La entrada de Berghain en 2017. Las fotos no llegan más lejos. Foto: Michael Mayer, CC BY 2.0.'),
    'Image: Bar 25': figure('bar25', 1200, 900,
      'Bar 25 a orillas del Spree, en Berlín, en agosto de 2009',
      'Bar 25 a orillas del Spree en agosto de 2009, un año antes de su cierre. Foto: Cornelius Bartke, CC BY-SA 2.0.'),
    'Image: Watergate': figure('watergate', 1200, 800,
      'El club Watergate visto desde el Spree, en Berlín',
      'Watergate visto desde el Spree en 2013. Cerró a finales de 2024. Foto: Alexander, CC BY-SA 2.0.'),
    'Image: Sisyphos': figure('sisyphos', 1200, 800,
      'El club Sisyphos en la Hauptstraße, en Berlin-Rummelsburg',
      'Sisyphos en la Hauptstraße, en Rummelsburg, en 2022, en el antiguo solar industrial donde creció la fiesta. Foto: Rio65trio, CC BY-SA 4.0.'),
    'Embed: Der Klang der Familie': articleListeningBand({
      platform: 'soundcloud',
      id: 'klang-der-familie',
      kicker: t(lang).essentialListening,
      title: '3 Phase featuring Dr. Motte, Der Klang der Familie: la referencia original.',
      description: 'La sexta referencia de Tresor Records y el título de la historia oral del techno berlinés. Las dos caras del maxi, Der Klang der Familie y Open Your Mind, remasterizadas, en el SoundCloud de Dr. Motte.',
      src: `https://w.soundcloud.com/player/?url=${encodeURIComponent('https://soundcloud.com/dr-motte/sets/3phase-feat-dr-motte-der-klang')}&color=%23ff5a36&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false`,
      iframeTitle: 'Der Klang der Familie y Open Your Mind de 3 Phase featuring Dr. Motte, en el SoundCloud de Dr. Motte',
      fullBleed: true,
      tone: 'cyan'
    }),
    'Embed: Teenage Mutants live from Sisyphos': youtube('zjfPd4jNZao',
      'Teenage Mutants en directo en Sisyphos, Berlín, Drumcode Radio Live DCR829, en el canal de YouTube de Drumcode'),
    'Embed: Ellen Allien HÖR': youtube('GG2IQguY-J0',
      'Ellen Allien, TTT x HÖR, en el canal de YouTube de HÖR Berlin'),
    // Status as in the English generator (RA's 2026 guide, Time Out and the
    // clubs' Wikipedia articles, checked 2026-09-10). Revisit with it.
    'Table: now': articleTable({
      headers: ['Club', 'Barrio', 'Música y carácter', 'Ideal para', 'Entrada'],
      rows: [
        ['Tresor', 'Mitte', 'Techno de Detroit y de Berlín en una antigua central eléctrica', 'La historia y el techno duro', 'Entrada anticipada o en puerta, según el evento'],
        ['Berghain / Panorama Bar', 'Friedrichshain', 'Techno abajo, house arriba; sin fotos', 'Un fin de semana largo y una línea musical clara', 'Selección en la puerta; venta anticipada solo en algunos eventos'],
        ['KitKatClub', 'Mitte', 'Techno con códigos de fetiche, látex, cuero y glamour', 'Fiestas temáticas sex-positive', 'Código de vestimenta estricto según el evento'],
        ['Kater', 'Friedrichshain', 'House y techno con el espíritu juguetón de la familia de Bar 25', 'Fiestas maratón a orillas del Spree', 'Venta en puerta; programación variable'],
        ['Sisyphos', 'Rummelsburg', 'Cinco pistas y una zona exterior en una antigua fábrica', 'Un fin de semana entero más que una sala', 'Selección en la puerta; horarios largos de fin de semana'],
        ['Club der Visionaere', 'Alt-Treptow', 'Minimal y sesiones íntimas junto al canal', 'El clubbing de verano a pequeña escala', 'Según el evento y el aforo'],
        ['OST', 'Friedrichshain', 'Programación electrónica en varias salas de un edificio industrial', 'Las grandes noches de estilo almacén', 'Normalmente entrada anticipada o en puerta'],
        ['Wilde Renate', 'Friedrichshain', 'House, techno y salas temáticas en un antiguo edificio de viviendas', 'Explorar varias salas', 'Selección en la puerta; comprobar el evento del día']
      ].map(row => row.map(escapeHtml)),
      label: 'Los mejores clubes de Berlín ahora'
    })
  }),

  sources: [
    {href: 'https://en.wikipedia.org/wiki/Tresor_(club)', label: 'Wikipedia: Tresor (club) (en inglés)'},
    {href: 'https://en.wikipedia.org/wiki/Tresor_Records', label: 'Wikipedia: Tresor Records (en inglés)'},
    {href: 'https://www.vice.com/en/article/der-klang-der-familie-the-sound-of-the-family-felix-denk-interview-berlin-techno-berlin-wall-tresor-ufo/', label: 'VICE: entrevista con Felix Denk sobre Der Klang der Familie, 2014 (en inglés)'},
    {href: 'https://en.wikipedia.org/wiki/Berghain', label: 'Wikipedia: Berghain (en inglés)'},
    {href: 'https://de.wikipedia.org/wiki/E-Werk_(Berlin)', label: 'Wikipedia: E-Werk (Berlin) (en alemán)'},
    {href: 'https://en.wikipedia.org/wiki/Bar_25', label: 'Wikipedia: Bar 25 (en inglés)'},
    {href: 'https://de.wikipedia.org/wiki/Kater_Blau', label: 'Wikipedia: Kater Blau (en alemán)'},
    {href: 'https://de.wikipedia.org/wiki/Watergate_(Club)', label: 'Wikipedia: Watergate (Club) (en alemán)'},
    {href: 'https://de.wikipedia.org/wiki/Salon_zur_Wilden_Renate', label: 'Wikipedia: Salon zur Wilden Renate (en alemán)'},
    {href: 'https://en.wikipedia.org/wiki/KitKatClub', label: 'Wikipedia: KitKatClub (en inglés)'},
    {href: 'https://de.wikipedia.org/wiki/Sisyphos_(Berlin)', label: 'Wikipedia: Sisyphos (Berlin) (en alemán)'},
    {href: 'https://www.tagesspiegel.de/berlin/streifzug-durch-die-clubs-von-berlin-jetzt-steigt-die-party-in-lichtenberg/10119176.html', label: 'Tagesspiegel: Jetzt steigt die Party in Lichtenberg, 2014 (en alemán)'},
    {href: 'https://www.fazemag.de/sisyphos-ist-vorerst-zu/', label: 'FAZE Mag: Sisyphos ist vorerst zu, 2014 (en alemán)'},
    {href: 'https://ra.co/guides/clubs-in-berlin', label: 'Resident Advisor: Best Clubs in Berlin, 2026 (en inglés)'},
    {href: 'https://www.bbc.com/travel/article/20240322-berlin-techno-scene-gains-unesco-status', label: 'BBC Travel: How Berlin’s techno scene transformed the city and gained UNESCO status, 2024 (en inglés)'},
    {href: 'https://hoer.live/imprint/', label: 'HÖR: aviso legal'}
  ],

  bandcamp: {
    description: 'Dos temas míos, uno con Berlín en el título. Comprar uno apoya directamente mi trabajo.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 de thecatrave'},
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks de thecatrave'}
    ]
  }
};
