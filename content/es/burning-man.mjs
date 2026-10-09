// Spanish Burning Man guide. Structure and facts from the English page
// (burning-man-draft.md) and the French module.
//
// es-ES SERP and People also ask read in Chrome on 2026-10-10 ("burning man
// 2027", "que es burning man"): PAA asks what a ticket costs, who goes, what
// people do there and what happens; the SERP shows the 2027 theme, Spellbound.
// As on the English page, no mixes of the owner's beyond the two it places.
//
// Imperial units are converted: 100 miles is about 160 km, the 9.2-mile fence
// almost 15 km, 100°F is 38 °C. Images are the English guide's, in
// img/burning-man/, with translated captions.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, articleYoutubeEmbed, ownSetListening
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption, className = 'wide-archive-image') => articleFigure({
  src: `img/burning-man/${name}-${width}.webp`,
  srcset: `img/burning-man/${name}-320.webp 320w, img/burning-man/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className
});

const youtube = (id, label) => articleYoutubeEmbed({
  src: `https://www.youtube-nocookie.com/embed/${id}`,
  title: label
});

export default {
  lang: 'es',
  name: 'es-burning-man',
  file: 'es/burning-man.html',
  draft: 'es/burning-man-draft.md',
  canonical: 'https://thecatrave.com/es/burning-man',
  englishPath: '/what-is-burning-man',
  ogImage: 'https://thecatrave.com/img/og/burning-man.jpg',
  bodyClass: 'article-page burning-man-page',

  title: 'Qué es Burning Man: la ciudad del desierto y su música',
  description: 'Burning Man no es un festival con cartel sino una ciudad efímera en Nevada: qué se hace, dónde es, cuánto cuesta y qué ponen los sound camps.',
  datePublished: '2026-10-10',
  dateModified: '2026-10-10',
  dateLabel: '10 de octubre de 2026',

  heroKicker: 'Burning Man',
  heroTitle: 'Qué es Burning Man',
  deck: 'Una ciudad construida por sus participantes en el desierto de Nevada, sin programación central ni gran escenario. Qué ocurre allí y qué ponen de verdad sus sound camps.',
  answerLabel: 'Qué es Burning Man',
  breadcrumbName: 'Qué es Burning Man',

  answerSection: 'Respuesta',
  introSection: 'Introducción',
  introTitle: 'Una ciudad, no un festival.',
  faqSection: 'Preguntas frecuentes',
  faqLabel: 'Preguntas frecuentes',
  faqTitle: 'Preguntas frecuentes sobre Burning Man.',

  sections: [
    {id: 'black-rock-city', heading: 'Black Rock City', title: 'Black Rock City.', subsections: ['burning-man-2027']},
    {id: 'what-happens', heading: 'Qué se hace en Burning Man', title: 'Qué se hace en Burning Man.'},
    {id: 'principles', heading: 'Los diez principios', title: 'Los diez principios.'},
    {id: 'music', heading: '¿Es Burning Man un festival de música?', title: '¿Es Burning Man un festival de música?', kicker: 'La música', subsections: ['sound-camps', 'robot-heart', 'mayan-warrior']},
    {id: 'history', heading: 'Breve historia de Burning Man', title: 'Breve historia de Burning Man.'},
    {id: 'controversy', heading: '¿Por qué Burning Man es tan polémico?', title: '¿Por qué Burning Man es tan polémico?'},
    {id: 'from-home', heading: 'Escuchar Burning Man desde casa', title: 'Escuchar Burning Man desde casa.'}
  ],

  media: ({lang}) => ({
    'thecatrave mix I Lost So Many Weekends': ownSetListening(1, lang, 'Breaks y techno para una noche en un art car. Mi propio mix.'),
    'thecatrave mix I Like to Smoke': ownSetListening(0, lang, 'Para la mañana siguiente: breaks que cruzan garage, bass music y techno. Mi propio mix.'),
    'Earth from Space': figure('esa', 1004, 753,
      'Imagen de satélite de Black Rock City en el desierto de Nevada, un arco de calles alrededor de un centro vacío',
      'Black Rock City vista desde la órbita durante Burning Man 2024. El arco de calles y el centro vacío, donde se alza el Man, se ven desde el espacio. Contiene datos Copernicus Sentinel modificados (2024), procesados por la ESA.'),
    '747 Art Car': figure('art-car-747', 1200, 699,
      'El art car 747, un fuselaje de Boeing 747 convertido en mutant vehicle, en la playa de Burning Man',
      'El 747 de Big Imagination, uno de los mutant vehicles autorizados que cruzan la playa a paso lento. Foto: Steve Jurvetson, CC BY 2.0.'),
    'Robot Heart, Peretz': figure('robot-heart', 1200, 799,
      'El art car de Robot Heart en la playa de Burning Man, un autobús coronado por un gran corazón iluminado',
      'El autobús de Robot Heart en la playa. Sus sets duran desde mitad de la noche hasta mucho después de salir el sol. Foto: Peretz Partensky, CC BY 2.0.'),
    '1987 poster': figure('poster-1987', 345, 450,
      'Cartel de Burning Man 1987 en Baker Beach, San Francisco',
      'El cartel del segundo fuego, en 1987, todavía en Baker Beach, en San Francisco, tres años antes de marcharse al desierto.',
      'archive-image'),
    'XwK7sA9PuCE': youtube('XwK7sA9PuCE', 'Lee Burridge, Robot Heart, Burning Man 2019, en el canal de YouTube de Robot Heart'),
    'MNkApftw_iM': youtube('MNkApftw_iM', 'YAMAGUCCI, Mayan Warrior, Burning Man 2025, en el canal de YouTube de Mayan Warrior'),
    'S7OBT3kQAHQ': articleVideoCollection({
      lang: 'es',
      label: 'Burning Man 2025, dos campamentos',
      description: 'Dos sets de Burning Man 2025, uno por cada campamento de arriba: el amanecer del sábado de Lee Burridge en Robot Heart y John Summit en Mayan Warrior. Grabaciones largas, hechas para las horas que nadie programa.',
      items: [
        articleVideoCard({youtubeId: 'S7OBT3kQAHQ', genre: 'Robot Heart, 2025', artist: 'Lee Burridge', title: 'En directo desde Robot Heart, Burning Man 2025'}),
        articleVideoCard({youtubeId: 'd8zUK6nAbr8', genre: 'Mayan Warrior, 2025', artist: 'John Summit', title: 'Mayan Warrior, Burning Man 2025'})
      ]
    }),
    'Table: asistencia': articleTable({
      headers: ['Año', 'Participantes', 'Qué pasó'],
      rows: [
        ['1986', '35', 'Primer fuego, Baker Beach, San Francisco'],
        ['2019', '78 850', 'El récord'],
        ['2020', 'ninguno', 'Cancelado por la pandemia, la primera cancelación'],
        ['2021', 'ninguno', 'Cancelado de nuevo'],
        ['2023', '74 126', 'La lluvia inunda la playa el fin de semana del Labor Day'],
        ['2024', '69 141', 'No agota las entradas por primera vez desde 2011'],
        ['2025', '72 181', '']
      ].map(row => row.map(escapeHtml))
    }),
    'Table: Comparación': articleTable({
      headers: ['Lo que se espera de un festival', 'Lo que pasa en Burning Man'],
      rows: [
        ['Una programación central', 'No hay cartel para todo el evento; los campamentos y los art cars programan su propia música'],
        ['Un gran escenario', 'No hay gran escenario; el sonido está repartido por toda la ciudad'],
        ['Puestos de comida y bebida', 'Los participantes traen lo que necesitan; solo se vende lo esencial'],
        ['Un público que mira un espectáculo', 'Los participantes construyen campamentos, obras, servicios y eventos'],
        ['Un lugar permanente', 'Black Rock City se construye en el desierto de Nevada y se desmonta después del evento'],
        ['Te vas tras el último concierto', 'La ciudad culmina con los fuegos del Man y del Temple, y después desaparece']
      ].map(row => row.map(escapeHtml))
    })
  }),

  sources: [
    {href: 'https://burningman.org/black-rock-city/preparation/first-timers-guide/', label: 'Burning Man Project: First-Timers’ Guide'},
    {href: 'https://burningman.org/about/10-principles/', label: 'Burning Man Project: los diez principios de Burning Man'},
    {href: 'https://burningman.org/black-rock-city/preparation/infrastructure/sound-policy/', label: 'Burning Man Project: Sound Policy in Black Rock City'},
    {href: 'https://journal.burningman.org/2023/08/black-rock-city/building-brc/sound-policy-update/', label: 'Burning Man Journal: Sound Policy Update'},
    {href: 'https://survival.burningman.org/city-infrastructure/on-playa-resources/', label: 'Burning Man Survival Guide 2026: On-Playa Resources'},
    {href: 'https://burningman.org/podcast/return-to-black-rock-city/', label: 'Burning Man Project: Return to Black Rock City'},
    {href: 'https://survival.burningman.org/survival-health-and-safety/consent-and-sexual-misconduct/', label: 'Burning Man Survival Guide 2026: Consent and Sexual Misconduct'},
    {href: 'https://burningman.org/black-rock-city/preparation/playa-living/weather/', label: 'Burning Man Project: el clima'},
    {href: 'https://burningman.org/black-rock-city/black-rock-city-2026/2026-camps/', label: 'Burning Man Project: los campamentos de 2026'},
    {href: 'https://burningman.org/black-rock-city/ticketing-information/', label: 'Burning Man Project: información sobre entradas'},
    {href: 'https://burningman.org/black-rock-city/bring-your-art/art-grants-programs/temple/brc-temple-grant-history/', label: 'Burning Man Project: historia y sentido del Temple'},
    {href: 'https://journal.burningman.org/2021/11/black-rock-city/tales-from-the-playa/burning-mans-first-sound-camp/', label: 'Burning Man Journal: Meet the DJs Who Started Burning Man’s First Sound Camp'},
    {href: 'https://journal.burningman.org/2015/07/philosophical-center/tenprinciples/whats-actually-going-on-with-dance-music-at-burning-man/', label: 'Burning Man Journal: What’s Actually Going On with Dance Music at Burning Man'},
    {href: 'https://journal.burningman.org/2024/01/black-rock-city/leaving-no-trace/2023-moop-map/', label: 'Burning Man Journal: Leaving No Trace 2023, the MOOP Map'},
    {href: 'https://journal.burningman.org/2026/09/news/official-announcements/participant-passes-away-at-2026-burning-man-event/', label: 'Burning Man Journal: Participants Pass Away at 2026 Burning Man Event'},
    {href: 'https://www.billboard.com/music/music-news/burning-man-robot-heart-george-mueller-geo-founder-died-9630680/', label: 'Billboard: How Burning Man’s Famed Robot Heart Camp Is Carrying on After the Death of Founder George Mueller'},
    {href: 'https://www.billboard.com/music/music-news/mayan-warrior-fire-interview-burning-man-art-car-1235398142/', label: 'Billboard: Burning Man’s Mayan Warrior Art Car Destroyed in Fire'},
    {href: 'https://edmallday.com/mayan-warrior-is-pausing-its-art-car-at-burning-man-2026/', label: 'EDM All Day: Mayan Warrior Is Pausing Its Art Car at Burning Man 2026'},
    {href: 'https://en.wikipedia.org/wiki/Burning_Man', label: 'Wikipedia: Burning Man'},
    {href: 'https://en.wikipedia.org/wiki/Burning_Man_2023', label: 'Wikipedia: Burning Man 2023'}
  ],


  bandcamp: {
    description: 'Burning Man no tiene cartel central; los campamentos y los equipos de los art cars programan ellos mismos la música. Esta es la mía, del lado de los breaks y los graves. Comprar un tema apoya directamente mi trabajo.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks de thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 de thecatrave'}
    ]
  }
};
