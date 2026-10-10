// Spanish fabric London guide. Structure, facts and media from the English page
// (fabric-london-draft.md, build-fabric-london-article.mjs); facts are the
// English page's, read from fabriclondon.com, Time Out, Resident Advisor and
// Mixmag: keep them aligned. There is no French or German version.
//
// Spanish keywords (keywords/es-fabric-london.json): live es-ES SERP and
// People-also-ask read in Chrome on 2026-10-10 (google.es, hl=es, gl=es) for
// "fabric londres" and "fabric london entradas código de vestimenta": the
// club's own site, es.wikipedia, Tripadvisor, RA and DICE lead; related
// searches are "entradas fabric london", "fabric london dress code reddit",
// "fabric london age limit", "fabric london security", all already H2s or FAQ
// on the English page. No exact volumes (account without ad spend).
//
// Images are the English guide's, in img/fabric-london/, with translated
// captions.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, ownSetListening
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/fabric-london/${name}-1200.webp`,
  srcset: `img/fabric-london/${name}-320.webp 320w, img/fabric-london/${name}-1200.webp 1200w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

const ext = (href, text) => `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`;
const rows = list => list.map(row => row.map(escapeHtml));

export default {
  lang: 'es',
  name: 'es-fabric-london',
  file: 'es/fabric-london.html',
  draft: 'es/fabric-london-draft.md',
  canonical: 'https://thecatrave.com/es/fabric-london',
  englishPath: '/fabric-london',
  ogImage: 'https://thecatrave.com/img/og/fabric-london.jpg',
  bodyClass: 'article-page fabric-london-page',
  minReadingMinutes: 6,

  title: 'fabric London: historia, salas, entradas y dress code',
  description: 'fabric London en Farringdon: horarios, cómo comprar entradas, edad mínima y dress code, sus tres salas, aforo y qué pasó con la licencia en 2016.',
  datePublished: '2026-10-10',
  dateModified: '2026-10-10',
  dateLabel: '10 de octubre de 2026',

  heroKicker: 'Guía de club, Londres',
  heroTitle: 'fabric London: historia, salas, entradas y dress code',
  deck: 'El club de Farringdon abierto en 1999: cómo funcionan sus tres salas, cuándo abre, cómo van las entradas y el dress code, y qué pasó en 2016.',
  answerLabel: 'fabric London',
  breadcrumbName: 'fabric London',

  answerSection: 'Respuesta',
  introSection: 'Introducción',
  introTitle: 'Un club, varias preguntas.',
  faqSection: 'Preguntas frecuentes',
  faqLabel: 'Preguntas frecuentes',
  faqTitle: 'Preguntas frecuentes sobre fabric London.',

  sections: [
    {id: 'what-is', heading: '¿Qué es fabric London?', title: '¿Qué es fabric London?', tocLabel: '¿Qué es fabric London?'},
    {id: 'tickets', heading: 'Entradas de fabric London', title: 'Entradas de fabric London', tocLabel: 'Entradas'},
    {id: 'hours', heading: 'Horarios y dirección de fabric London', title: 'Horarios y dirección de fabric London', tocLabel: 'Horarios y dirección'},
    {id: 'dress-code', heading: '¿Cuál es el dress code de fabric London?', title: 'Dress code de fabric London', tocLabel: 'Dress code'},
    {id: 'accessibility', heading: 'Accesibilidad y espacios para descansar', title: 'Accesibilidad y espacios para descansar', tocLabel: 'Accesibilidad'},
    {id: 'capacity', heading: 'Aforo y salas de fabric London', title: 'Aforo y salas de fabric London', tocLabel: 'Aforo y salas'},
    {id: 'lineup', heading: 'Cartel y eventos de fabric London', title: 'Cartel y eventos de fabric London', tocLabel: 'Cartel y eventos'},
    {id: 'closure-2016', heading: '¿Qué pasó en 2016?', title: '¿Qué pasó en 2016?', tocLabel: '¿Qué pasó en 2016?'}
  ],

  media: ({lang}) => ({
    'thecatrave mix 0': ownSetListening(0, lang),
    'thecatrave mix 1': ownSetListening(1, lang),
    'exterior-2017': figure('exterior-2017', 1200, 900,
      'La fachada de fabric en Charterhouse Street, en Londres: un edificio estrecho de piedra y ladrillo entre otros dos más grandes, con su nombre sobre las puertas',
      'fabric London en Charterhouse Street, 19 de julio de 2017. Foto: Paul Williams, CC BY-SA 2.0.'),
    'entrance-2020': figure('entrance-2020', 1200, 810,
      'La entrada azul de fabric London, con dos puertas de acero y dos carteles',
      'La entrada de fabric London, 1 de febrero de 2020. Foto: Lolita Montana, CC BY-SA 2.0.'),
    'neon-night-2013': figure('neon-night-2013', 1200, 797,
      'Vista desde arriba, una multitud bailando bajo bolas de espejos y haces de luz amarilla y azul en fabric London durante una fiesta de neón',
      'Una fiesta de neón en fabric London, 31 de enero de 2013. Foto: uclu photosoc, CC BY-SA 2.0.'),
    'club sets': articleVideoCollection({
      lang,
      label: 'Grabado en fabric London',
      description: 'Josh Caffe en la Room One para Beatport y dos sesiones de Boiler Room de una noche con fabric en 2014.',
      items: [
        articleVideoCard({youtubeId: 'pxKVT8F0BGE', genre: 'Room One, 2021', artist: 'Josh Caffe', title: 'Josh Caffe at Fabric, London Unlocked'}),
        articleVideoCard({youtubeId: '_Rc8VLhRLzs', genre: 'Boiler Room, 2014', artist: 'Swindle', title: 'Swindle Fabriclive x Boiler Room London Live Show'}),
        articleVideoCard({youtubeId: 'ldIX1k06dVw', genre: 'Boiler Room, 2014', artist: 'Elijah and Skiliam, Royal-T, Flava D', title: 'Fabriclive x Boiler Room London DJ Set'})
      ]
    }),
    panel: articleVideoCollection({
      lang,
      label: 'El panel de 2016',
      description: 'Boiler Room UK, Can Nightlife be Saved? Live from Fabric: un panel, no un set de DJ.',
      items: [
        articleVideoCard({youtubeId: 'sqIg6hhJLrQ', genre: 'Panel, 2016', artist: 'Boiler Room UK', title: 'Can Nightlife be Saved? Live from Fabric'})
      ]
    }),
    'Table: tickets': articleTable({
      label: 'Formas de comprar entradas de fabric London',
      headers: ['Vía', 'Qué dice la FAQ del club'],
      rows: rows([
        ['Entrada anticipada', 'Los códigos de barras se envían por la app RA Guide o el área de socios 48 horas antes del evento, para evitar la reventa.'],
        ['Noches agotadas', 'Resident Advisor ofrece un servicio de reventa.'],
        ['En la puerta', 'Parte de las entradas se reserva. Si las anticipadas se agotan, salen más a la venta desde las 23:00. No se puede volver a entrar.'],
        ['Estudiantes', 'Las entradas de estudiante se venden por Resident Advisor y en la puerta con carnet de estudiante británico válido con foto. Algunas instituciones quedan excluidas.'],
        ['Membresía fabricfirst', 'Los socios tienen lista de invitados y acceso prioritario la mayoría de las noches. La página de inicio indica que la membresía cuesta desde 7 £ por trimestre.'],
        ['Lista de invitados de pago', 'Ninguna. El club dice que no la ofrece.']
      ])
    }),
    'Table: rooms': articleTable({
      label: 'Las tres salas de fabric London',
      headers: ['Sala', 'Máximo en alquiler', 'Barra', 'Acceso, según el club'],
      rows: rows([
        ['Room 1', '1.000', 'Mezz Bar', 'Accesible en silla de ruedas'],
        ['Room 2', '500', 'Sunken Bar', 'Se llega por una rampa empinada, puede hacer falta ayuda'],
        ['Room 3', '150', 'Ninguna indicada', 'No accesible en silla de ruedas']
      ])
    })
  }),

  sources: [
    {html: `Horarios, dress code, edad mínima, registros, guardarropa, política musical e indicaciones: ${ext('https://fabriclondon.com/faq', 'FAQ de fabric London')} (en inglés).`},
    {html: `Reglas de entrada, documento y horas de entrada: ${ext('https://fabriclondon.com/info/entry-policy', 'política de acceso')}. Salas y ascensor: ${ext('https://fabriclondon.com/info/accessibility', 'página de accesibilidad')}. Fotos: ${ext('https://fabriclondon.com/info/phone-safety', 'política de no fotos')}.`},
    {html: `Capacidades de alquiler por sala y tamaño del local: ${ext('https://fabriclondon.com/private-hire', 'alquiler privado')}. Residentes fundadores: ${ext('https://fabriclondon.com/residents', 'residentes')}. Programación y enlaces de entradas: ${ext('https://fabriclondon.com/whats-on', 'What’s On')}.`},
    {html: `Pista de la Room 1 y sistemas de sonido: ${ext('https://fabriclondon.com/posts/weve-upgraded-our-dancefloor', 'entrada sobre la pista')} y ${ext('https://fabriclondon.com/posts/a-major-sound-system-upgrade-to-rooms-2-3', 'entrada sobre las salas 2 y 3')}.`},
    {html: `Comunicado del ayuntamiento y el club, 21 de noviembre de 2016: ${ext('https://www.timeout.com/london/blog/fabric-is-saved-112116', 'Time Out')}. Revocación, 7 de septiembre de 2016: ${ext('https://ra.co/news/36182', 'Resident Advisor')}. Fin de semana de reapertura, 2 de diciembre de 2016: ${ext('https://www.timeout.com/london/blog/fabric-is-officially-reopening-heres-everything-you-need-to-know-120216', 'Time Out')}.`},
    {html: `Historia del edificio y año de apertura: ${ext('https://www.timeout.com/london/clubs/14-things-you-didnt-know-about-fabric', 'Time Out')} y ${ext('https://mixmag.net/feature/fabric-forever-remembering-one-of-the-best-clubs-the-uk-has-ever-seen', 'Mixmag')}, que también da el aforo de 2.500 en 2016.`}
  ],

  bandcamp: {
    description: 'Lejos de la pista, la música que hago yo mismo. Comprar una apoya mi trabajo directamente.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 de thecatrave'},
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks de thecatrave'}
    ]
  }
};
