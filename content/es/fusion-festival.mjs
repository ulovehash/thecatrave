// Spanish Fusion Festival guide. Structure and facts from the English page
// (fusion-festival-draft.md, build-fusion-festival-article.mjs), read on
// 2026-10-05 from the official Fusion pages, the taz and GMX: keep them aligned.
// There is no French or German version.
//
// es-ES SERP read in Chrome on 2026-10-10 ("fusion festival", "fusion festival
// 2027 entradas"): fusion-festival.de, Wikipedia, tickets.fusion-festival.de,
// Tripadvisor, Songkick, Tomaticket, RA, cuandopasa.com; no People-also-ask box;
// related "Fusion Festival 2026", "Fusion festival lineup", "Fusion Festival
// 2027 germany", "bus fusion festival", "Fusion Berlin 2026". No volumes were
// measured.
//
// Images are the English guide's, in img/fusion-festival/, with translated captions.
import {localizedFestivalPlanning} from '../festival-planning-data.mjs';
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, ownSetListening
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/fusion-festival/${name}-1200.webp`,
  srcset: `img/fusion-festival/${name}-320.webp 320w, img/fusion-festival/${name}-1200.webp 1200w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

const ext = (href, text) => `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`;
const table = (label, headers, rows) => articleTable({label, headers, rows: rows.map(row => row.map(escapeHtml))});

export default {
  lang: 'es',
  name: 'es-fusion-festival',
  file: 'es/fusion-festival.html',
  draft: 'es/fusion-festival-draft.md',
  canonical: 'https://thecatrave.com/es/fusion-festival',
  englishPath: '/fusion-festival',
  ogImage: 'https://thecatrave.com/img/og/fusion-festival.jpg',
  bodyClass: 'article-page fusion-festival-page',
  minReadingMinutes: 8,

  title: 'Fusion Festival, Alemania: 2027, fechas 2028 y entradas',
  description: 'Fusion Festival en Lärz: por qué no hay edición en 2027, las fechas de 2028, cómo funciona el sorteo de entradas, la disputa con la policía y cómo llegar.',
  datePublished: '2026-10-10',
  dateModified: '2026-10-10',
  dateLabel: '10 de octubre de 2026',

  heroKicker: 'Guía de festival, 2028',
  heroTitle: 'Fusion Festival en Lärz, Alemania: sin 2027, fechas de 2028 y entradas',
  deck: 'El festival de Kulturkosmos en un antiguo aeródromo soviético: por qué 2027 es un año sin Fusion, cuándo es 2028, cómo funciona el sorteo y cómo llegar.',
  answerLabel: 'Fechas de Fusion Festival',
  breadcrumbName: 'Fusion Festival',

  answerSection: 'Respuesta',
  introSection: 'Introducción',
  introTitle: 'Un festival que se salta un año.',
  faqSection: 'Preguntas frecuentes',
  faqLabel: 'Preguntas frecuentes',
  faqTitle: 'Preguntas frecuentes sobre Fusion Festival.',

  sections: [
    {id: 'what-is', heading: '¿Qué es Fusion Festival?', title: '¿Qué es Fusion Festival?', tocLabel: '¿Qué es Fusion?'},
    {id: 'fusion-2026', heading: 'Fusion Festival 2026', title: 'Fusion Festival 2026', tocLabel: 'Fusion 2026'},
    {id: 'dates', heading: 'Fusion Festival 2027 y 2028', title: 'Fusion Festival 2027 y 2028', tocLabel: 'Fusion 2027 y 2028'},
    {id: 'tickets', heading: 'Entradas de Fusion Festival', title: 'Entradas de Fusion Festival', tocLabel: 'Entradas y sorteo'},
    {id: 'larz', heading: 'Fusion Festival en Lärz y Kulturkosmos', title: 'Fusion Festival en Lärz y Kulturkosmos', tocLabel: 'Lärz y Kulturkosmos'},
    {id: 'police', heading: 'La disputa de Fusion Festival con la policía', title: 'La disputa de Fusion Festival con la policía', tocLabel: 'La disputa con la policía'},
    {id: 'lineup', heading: 'Cartel de Fusion Festival', title: 'Cartel de Fusion Festival', tocLabel: 'Cartel y sets'},
    {id: 'travel', heading: 'Cómo llegar a Fusion Festival', title: 'Cómo llegar a Fusion Festival', tocLabel: 'Cómo llegar'},
    {id: 'planning', heading: 'Planifica tu viaje a Fusion 2028', title: 'Prepara tu viaje a Fusion Festival.', tocLabel: 'Viaje y planificación', planning: localizedFestivalPlanning('fusion', 'es')}
  ],

  media: ({lang}) => ({
    'thecatrave mix 1': ownSetListening(0, lang, 'Mi propio mix, para ponerlo mientras planificas el fin de semana.'),
    'thecatrave mix 2': ownSetListening(1, lang, 'Un segundo mix mío, para el viaje.'),
    'Image: palapa': figure('palapa-2019', 1200, 675,
      'El escenario Palapa de noche en Fusion Festival 2019, con público bajo luz morada y una sombrilla naranja',
      'El escenario Palapa durante un concierto de Meute, Fusion Festival, 27 de junio de 2019. Foto: San Andreas, CC BY-SA 4.0.'),
    'Image: ravesticks': figure('ravesticks-2024', 1200, 380,
      'Público con barras de luz en la pista Sonnendeck de Fusion Festival 2024',
      'Barras de luz en la pista Sonnendeck, Fusion Festival, 29 de junio de 2024. Foto: Kerospam, CC BY-SA 4.0.'),
    'Image: railcar': figure('railcar-neustrelitz-2016', 1200, 801,
      'Asistentes subiendo a un tren regional en la estación de Neustrelitz de camino a Fusion Festival en 2016',
      'Asistentes en la estación de Neustrelitz, 29 de junio de 2016. Foto: JoachimKohler-HB, CC BY-SA 4.0.'),
    'Embed: fusion sets': articleVideoCollection({
      lang,
      label: 'Sets de artistas de Fusion del catálogo',
      description: 'Cuatro sets del catálogo del Selector, todos de Boiler Room, de artistas del programa de Fusion de 2026. Ninguno se grabó en Fusion.',
      items: [
        articleVideoCard({youtubeId: 'EfZu4BCi644', genre: 'Electrónica', artist: 'Acid Pauli', title: 'Boiler Room Tulum DJ set'}),
        articleVideoCard({youtubeId: 'H_WP3TRJfFk', genre: 'Electrónica', artist: 'Apparat', title: 'Boiler Room Berlin DJ set'}),
        articleVideoCard({youtubeId: 'oNYarqQNev0', genre: 'Techno', artist: 'Rødhåd', title: 'Boiler Room x Glitch Festival 2023'}),
        articleVideoCard({youtubeId: '02PstSNvln0', genre: 'House', artist: 'Gerd Janson', title: 'Boiler Room x Sugar Mountain 2018 DJ set'})
      ]
    }),
    'Table: schedule 2026': table('Horario de Fusion Festival 2026', ['Horario de 2026', 'Detalle'], [
      ['Apertura de puertas', 'Miércoles 24 de junio, 07:00'],
      ['Programa del miércoles', 'Desde las 16:00'],
      ['Grandes pistas al aire libre', 'Jueves 25 de junio, 18:00'],
      ['Pausa en los escenarios ruidosos', '11:00 a 14:00, de viernes a domingo'],
      ['Entrada de domingo', 'Domingo 28 de junio, 08:00 a 16:00'],
      ['Camping libre', 'Martes por la tarde después del festival']
    ]),
    'Table: status': table('Estado de Fusion Festival 2026, 2027 y 2028', ['Elemento', 'Estado el 5 de octubre de 2026'], [
      ['Edición de 2026', '24 al 28 de junio de 2026, entradas agotadas'],
      ['2027', 'Año sin Fusion, sin festival'],
      ['Próxima edición', '28 de junio al 2 de julio de 2028'],
      ['Fechas de entradas 2028', 'Boletín abierto, sin fechas ni precios publicados'],
      ['Programa 2028', 'No publicado']
    ]),
    'Table: lottery 2026': table('Pasos del sorteo de entradas de 2026', ['Paso del sorteo de 2026', 'Fecha'], [
      ['Solicitudes de colaboradores', '1 al 10 de diciembre de 2025'],
      ['Registro en la tienda de Fusion', '1 al 14 de diciembre de 2025'],
      ['Primer sorteo', '18 de diciembre de 2025'],
      ['Apertura del pago', '1 de enero de 2026'],
      ['Segundo sorteo, Ticket:Bourse y entradas de domingo', '5 de febrero de 2026'],
      ['Entradas de vehículo', 'Primavera de 2026']
    ])
  }),

  sources: [
    {html: `Fechas de 2028 y año sin Fusion en 2027, leídas el 5 de octubre de 2026: ${ext('https://tickets.fusion-festival.de/', 'tienda de entradas de Fusion')} (en alemán e inglés).`},
    {html: `Sorteo, precio de 2026, norma de 18 años, entradas de vehículo, respuesta de la Bundeswehr, boletines de 2026 y preguntas frecuentes oficiales (horarios, escenarios, normas, viaje), leídos el 5 de octubre de 2026: ${ext('https://fusion-festival.de/', 'fusion-festival.de')}, páginas en inglés y archivo de noticias.`},
    {html: `Datos de la organización (Kulturkosmos Müritz, equipos, elementos de programa): la página oficial del festival en inglés, leída el 5 de octubre de 2026.`},
    {html: `La disputa de seguridad de 2019: ${ext('https://taz.de/Die-Zukunft-des-Musikfestivals/!5595050/', 'taz, 25 de mayo de 2019')} y ${ext('https://www.gmx.ch/magazine/unterhaltung/musik/festivals/fusion-festival-oeffnet-langem-streit-polizei-tore-33805512', 'GMX, 25 de junio de 2019')} (en alemán).`},
    {html: 'Fotografías: Wikimedia Commons, con crédito en cada pie de foto.'}
  ],

  bandcamp: {
    description: 'Entre festivales, la música que hago yo mismo. Comprar una apoya mi trabajo directamente.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 de thecatrave'},
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks de thecatrave'}
    ]
  }
};
