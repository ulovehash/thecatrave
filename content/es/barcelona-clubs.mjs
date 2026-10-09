// Spanish Barcelona clubs guide. Structure, facts and media from the English
// page (barcelona-clubs-draft.md, barcelona-clubs-research.md,
// build-barcelona-clubs-article.mjs); localised, not translated word for word.
//
// Spanish keywords, measured 2026-10-09 with Keyword Planner (Spain,
// keywords/es-barcelona-clubs.json): discotecas barcelona 10K-100K, mejores
// discotecas de barcelona 100-1K. Live es-ES SERP and People-also-ask read the
// same day (google.es, hl=es, gl=es): the top results are VIP-list and
// nightlife-agency pages (Fourvenues, youbarcelona, Downtown) about
// mainstream beach and Tuset clubs, and People also ask "¿Dónde ir a bailar
// en Barcelona?", "¿Cuál es la mejor zona para salir de fiesta en Barcelona?",
// "¿Dónde salir de noche en Barcelona?". The zones H2 and two FAQ questions
// follow those phrasings and are answered only with facts already on the
// English page; the mainstream clubs the SERP lists are not added because the
// English page does not source them.
//
// Like the English page, this guide keeps a genuine other-artist "Essential
// listening" block (Honey Dijon, filmed in Barcelona for Mixmag) and the
// "Look" track in the Macarena Club section. Images are the English guide's,
// in img/barcelona-clubs/, with translated captions.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, ownSetListening, ownTrackListening
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/barcelona-clubs/${name}-${width}.webp`,
  srcset: `img/barcelona-clubs/${name}-320.webp 320w, img/barcelona-clubs/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

export default {
  lang: 'es',
  name: 'es-barcelona-clubs',
  file: 'es/discotecas-barcelona.html',
  draft: 'es/barcelona-clubs-draft.md',
  canonical: 'https://thecatrave.com/es/discotecas-barcelona',
  englishPath: '/best-clubs-in-barcelona',
  ogImage: 'https://thecatrave.com/img/og/barcelona-clubs.jpg',
  bodyClass: 'article-page barcelona-clubs-page',

  title: 'Discotecas Barcelona: las mejores, de Zeleste a Razzmatazz',
  description: 'Compara Razzmatazz, Nitsa, Macarena Club y Moog por barrio y por música, y lee la historia de las salas de Barcelona.',
  datePublished: '2026-10-09',
  dateModified: '2026-10-09',
  dateLabel: '9 de octubre de 2026',

  heroKicker: 'Discotecas Barcelona',
  heroTitle: 'Las mejores discotecas de Barcelona: Razzmatazz, Nitsa, Macarena y Moog',
  deck: 'Cuatro salas para noches distintas, de las cinco salas de Razzmatazz a la pequeña pista de Macarena. Compara primero las discotecas abiertas y después su historia.',
  answerLabel: 'Las mejores discotecas de Barcelona',
  breadcrumbName: 'Las mejores discotecas de Barcelona',

  answerSection: 'Respuesta',
  introSection: 'Introducción',
  introTitle: 'Elige la sala para tu noche.',
  faqSection: 'FAQ',
  faqLabel: 'Preguntas frecuentes',
  faqTitle: 'Preguntas frecuentes sobre las discotecas de Barcelona.',

  sections: [
    {id: 'best-clubs-now', heading: 'Las mejores discotecas de Barcelona ahora', title: 'Las mejores discotecas de Barcelona ahora.'},
    {id: 'zeleste-razzmatazz', heading: 'Zeleste, Razzmatazz y la sala que nació de un local de conciertos', title: 'Zeleste, Razzmatazz y la sala que nació de un local de conciertos.'},
    {id: 'apolo-nitsa', heading: 'Sala Apolo y Nitsa', title: 'Sala Apolo y Nitsa.'},
    {id: 'macarena', heading: 'Macarena Club: del tablao flamenco a la sala de baile', title: 'Macarena Club: del tablao flamenco a la sala de baile.'},
    {id: 'where-to-go', heading: 'Dónde salir de fiesta en Barcelona: Gòtic, Eixample y los clubes de playa', title: 'Dónde salir de fiesta en Barcelona: Gòtic, Eixample y los clubes de playa.'}
  ],

  media: ({lang}) => ({
    'Razzmatazz exterior': figure('razzmatazz-exterior', 1280, 822,
      'La fachada de Sala Razzmatazz en el barrio de Poblenou, Barcelona',
      'Razzmatazz, en Poblenou, en el terreno que dejó libre el cierre de Zeleste. Foto: Zarateman, dominio público (CC0).'),
    'thecatrave mix I Like to Smoke in Silence After Raves': ownSetListening(0, lang, 'Treinta temas en los que los breaks pasan por garage, bass music, techno y rave. Mi propia mezcla.'),
    'thecatrave mix I Lost So Many Weekends Raving and I Wanna Lose Some More': ownSetListening(1, lang),
    'thecatrave Look': ownTrackListening('look', 'Future bass, glitch y breakbeat, cerca de la energía apretada de una sala del tamaño de Macarena Club. Mi propio tema.', lang),
    'Honey Dijon Barcelona': articleVideoCollection({
      label: 'Honey Dijon, DJ set grabado en Barcelona',
      description: 'La sesión de Honey Dijon para el Burn Energy Tour de Mixmag, grabada en Barcelona y no en una de las discotecas de esta página, en el canal de YouTube de Mixmag.',
      items: [articleVideoCard({youtubeId: 'l35ok-7n2IU', genre: 'House', artist: 'Honey Dijon', title: 'DJ set, Burn Energy Tour x Mixmag, Barcelona'})]
    }),
    'Table: now': articleTable({
      headers: ['Discoteca', 'Barrio', 'Música y carácter', 'Ideal para'],
      rows: [
        ['Razzmatazz', 'Poblenou', 'Cinco salas, cada una con su programación, del techno y el house al indie y el pop', 'La discoteca más grande de la ciudad, varias noches bajo el mismo techo'],
        ['Sala Apolo (Nitsa)', 'Poble Sec', 'Una noche electrónica que se celebra desde 1996 en un local de conciertos mucho más antiguo', 'Una programación electrónica larga y seria en un local histórico'],
        ['Macarena Club', 'Gòtic, junto a las Ramblas', 'Una sola pista, aforo de unas 300 personas, música electrónica', 'Una sala íntima, más cerca de una fiesta entre amigos'],
        ['Moog', 'Gòtic', 'Discoteca asentada en el casco antiguo', 'Una apuesta segura en el casco antiguo']
      ].map(row => row.map(escapeHtml)),
      label: 'Las mejores discotecas de Barcelona ahora'
    })
  }),

  sources: [
    {href: 'https://en.wikipedia.org/wiki/Razzmatazz_(club)', label: 'Wikipedia (en inglés): Razzmatazz (club)'},
    {href: 'https://www.webarcelona.net/nightlife-barcelona/razzmatazz', label: 'WeBarcelona (en inglés): Razzmatazz'},
    {href: 'https://www.catalunya.com/razzmatazz-17-18003-14', label: 'Turisme de Catalunya (en inglés): Razzmatazz Barcelona'},
    {href: 'https://www.thenewbarcelonapost.com/en/history-sala-apolo/', label: 'The New Barcelona Post (en inglés): Did you know that Sala Apolo was an amusement park?'},
    {href: 'https://djmag.com/nitsa', label: 'DJ Mag (en inglés): Nitsa, Top 100 Clubs'},
    {href: 'https://www.primaverasound.com/en/primavera-pro/nitsa-club-30-years', label: "Primavera Sound: Nitsa Club, 30 anys transformant l'escena electrònica"},
    {href: 'https://www.sala-apolo.com/en/clubs/nitsa', label: 'Sala Apolo (en inglés): Nitsa'},
    {href: 'https://ra.co/features/2226', label: 'Resident Advisor (en inglés): RA In Residence, Macarena Club'},
    {href: 'https://ra.co/guides/clubs-in-barcelona', label: 'Resident Advisor (en inglés): Best Clubs in Barcelona in 2026'},
    {href: 'https://www.barcelona-tourist-guide.com/en/club/macarena-club-barcelona.html', label: 'Barcelona Tourist Guide (en inglés): Macarena Club in Barcelona'}
  ],

  bandcamp: {
    description: 'Dos de mis temas. Comprar uno apoya mi trabajo directamente.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks de thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 de thecatrave'}
    ]
  }
};
