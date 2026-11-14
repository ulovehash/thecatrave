// Spanish trance tracks guide. Structure, facts and the twelve records from the English
// page (best-trance-tracks-draft.md, build-best-trance-tracks-article.mjs), with the German
// module as the structural sibling. Media are the English page's, unchanged
// (media/best-trance-tracks.json); only alt text, captions and notes are translated.
// Wording from Keyword Planner (Spain, and Mexico+Argentina+Colombia+Chile, Spanish,
// 14 November 2026); google.es showed no People also ask. Volumes in
// keywords/es-best-trance-tracks.json.

import {
  articleFigure, articleListeningCollection, articleTable, articleTrackEmbed, ownTrackListening
} from '../../site-components.mjs';

const figure = (name, height, alt, caption) => articleFigure({
  src: `img/best-trance-tracks/${name}-1200.webp`,
  srcset: `img/best-trance-tracks/${name}-320.webp 320w, img/best-trance-tracks/${name}-1200.webp 1200w`,
  width: 1200, height, alt, caption, className: 'wide-archive-image'
});

const records = (lang, id, title, description, items) => articleListeningCollection({
  lang, id, title, description, tone: 'cyan',
  items: items.map(([artist, name, year, ytId, note]) => ({
    artist, title: name, year, note,
    playerHtml: articleTrackEmbed({platform: 'youtube', id: ytId, title: `${artist}, ${name}`})
  }))
});

export default {
  lang: 'es',
  name: 'es-best-trance-tracks',
  file: 'es/mejores-canciones-trance.html',
  draft: 'es/best-trance-tracks-draft.md',
  canonical: 'https://thecatrave.com/es/mejores-canciones-trance',
  englishPath: '/best-trance-tracks',
  ogImage: 'https://thecatrave.com/img/og/best-trance-tracks.jpg',
  bodyClass: 'article-page best-trance-tracks-page',
  minReadingMinutes: 5,

  title: 'Mejores canciones de trance: 12 temas clásicos, de 1993 a 2012',
  description: 'Las mejores canciones de trance: 12 temas con reproductor, puestos en las listas británicas y votaciones de fans. Con Children, Silence y Adagio for Strings.',
  datePublished: '2026-11-14',
  dateModified: '2026-11-14',
  dateLabel: '14 de noviembre de 2026',

  heroKicker: 'Trance',
  heroTitle: 'Las mejores canciones de trance, de 1993 a 2012',
  deck: 'Doce discos de trance de 1993 a 2012, con su año de lanzamiento, su puesto en la lista británica y un reproductor para cada uno.',
  answerLabel: 'MEJORES CANCIONES DE TRANCE',
  breadcrumbName: 'Las mejores canciones de trance',

  answerSection: 'Respuesta',
  introSection: 'Introducción',
  introTitle: 'Una lista de discos, no la historia del género.',
  faqSection: 'Preguntas frecuentes',
  faqLabel: 'Preguntas frecuentes',
  faqTitle: 'Preguntas frecuentes sobre las mejores canciones de trance.',

  sections: [
    {id: 'how-chosen', heading: 'Éxitos de lista y favoritos de los fans', title: 'Éxitos de lista y favoritos de los fans.'},
    {id: 'before-the-charts', heading: 'Antes de las listas: de 1993 a 1995', title: 'Antes de las listas: de 1993 a 1995.'},
    {id: 'chart-years', heading: 'Los años de las listas: los mejores temas de trance de 1998 y 1999', title: 'Los años de las listas: los mejores temas de trance de 1998 y 1999.', tocLabel: 'Los años de las listas: 1998 y 1999'},
    {id: 'superstar-years', heading: 'Los años de los DJ superestrella: de 2004 a 2012', title: 'Los años de los DJ superestrella: de 2004 a 2012.', tocLabel: 'Los DJ superestrella: 2004 a 2012'},
    {id: 'best-ever', heading: '¿Cuál es la mejor canción de trance de la historia?', title: '¿Cuál es la mejor canción de trance de la historia?', tocLabel: '¿La mejor canción de trance?'},
    {id: 'a-break', heading: 'Dos temas propios', title: 'Dos temas propios.'}
  ],

  media: ({lang}) => ({
    'figur-armin': figure('armin-van-buuren-2008', 900,
      'Armin van Buuren con el puño en alto detrás de los platos, con láseres verdes delante',
      'Armin van Buuren en directo, 2008. Foto: Davide Pasca, CC BY 2.0.'),
    'figur-corsten': figure('ferry-corsten-2010', 800,
      'Ferry Corsten en directo en Edmonton, Canadá',
      'Ferry Corsten en directo en Edmonton, Canadá, 2010. Foto: Celwin Frenzen, CC BY 3.0.'),
    'figur-tiesto': figure('tiesto-2010', 800,
      'Tiësto en los platos en una discoteca de Bangkok',
      'Tiësto en el 808 Nightclub, Bangkok, 2010. Foto: Vyacheslav Argenberg, CC BY 4.0.'),
    'liste-vor-den-charts': records(lang, 'listen-before-charts', 'Tres discos de antes de los años de las listas',
      'Dos discos que entraron en la lista británica años después de salir, y uno que llegó al número 2.', [
        ['Energy 52', "Café del Mar (Three 'n One Radio Remix)", '1993', 'yyvp_nCM15Q', 'Publicado en 1993; este remix entró en la lista británica en marzo de 1997.'],
        ['Paul van Dyk', 'For an Angel (E-Werk Remix)', '1994', '5JqtsdrHJvg', 'Su primer tema en MFS, en 1994; este remix de 1998 lleva el nombre del club berlinés E-Werk.'],
        ['Robert Miles', 'Children', '1995', 'DvyCbevQbtI', 'Número 2 en el Reino Unido, octavo sencillo más vendido de 1996.']
      ]),
    'liste-chartjahre': records(lang, 'listen-chart-years', 'Cuatro discos de 1998 y 1999',
      'De un primer sencillo a la adaptación vocal de un tema de 1982.', [
        ['ATB', '9 PM (Till I Come)', '1998', '1DcABTJoWCc', 'Kontor Records, 26 de octubre de 1998; la edición británica llegó al número 1.'],
        ['Chicane feat. Máire Brennan', 'Saltwater', '1999', 'uTJtfytoYy4', 'Número 6 en el Reino Unido, número 1 en la lista dance.'],
        ['System F', 'Out of the Blue', '1999', 'Qgx_V0So0qk', 'El despegue de Ferry Corsten, número 14 en el Reino Unido.'],
        ['Delerium feat. Sarah McLachlan', "Silence (Tiësto's In Search of Sunrise Remix)", '1999', 'O3gz3nnYv68', 'Los remixes de octubre de 2000 llegaron al número 3 en el Reino Unido; este es cuarto en las dos votaciones de fans.']
      ]),
    'liste-superstar-jahre': records(lang, 'listen-superstar-years', 'Cinco discos de 2004 a 2012',
      'Puestos más bajos en la lista británica que los discos de los 90, puestos más altos en la votación de fans.', [
        ['OceanLab', 'Satellite (Original Above & Beyond Mix)', '2004', 'NqPAOsIEDcI', 'Número 19 en el Reino Unido en 2004, número 3 en la lista dance.'],
        ['Tiësto', 'Adagio for Strings', '2005', 'B0PV_S4m6Ig', 'Número 37 en el Reino Unido, segundo en las dos votaciones de fans.'],
        ['Armin van Buuren feat. Susana', 'Shivers', '2005', 'NHUn3AWOw8k', 'Publicado el 14 de febrero de 2005 en Armind.'],
        ['Armin van Buuren', 'Communication Part 3', '2007', 'BK0xoHYUezM', 'Entre los cinco primeros de las dos votaciones de fans; publicado en Armind en abril de 2007.'],
        ['Gareth Emery feat. Christina Novelli', 'Concrete Angel', '2012', 'f3GRM0Yz7wM', 'Publicado en Garuda en febrero de 2012.']
      ]),
    'tabelle-charts': articleTable({
      headers: ['Disco', 'Año', 'Mejor puesto, UK Official Singles Chart'],
      rows: [
        ['ATB, 9 PM (Till I Come)', '1998 (edición británica, 1999)', '1'],
        ['Robert Miles, Children', '1995', '2'],
        ['Delerium feat. Sarah McLachlan, Silence', '1999 (remixes, 2000)', '3'],
        ['Chicane, Saltwater', '1999', '6'],
        ['System F, Out of the Blue', '1999', '14'],
        ['OceanLab, Satellite', '2004', '19'],
        ['Paul van Dyk, For an Angel (E-Werk Remix)', '1994 (remix, 1998)', '28'],
        ['Tiësto, Adagio for Strings', '2005', '37'],
        ['Armin van Buuren, Shivers/Serenity', '2005', '72']
      ]
    }),
    // The owner's own music inside the text, as on the English page.
    'eigener-track-berlin': ownTrackListening('berlin-race-1909', 'Lleva el nombre de Berlín, la ciudad cuyo club E-Werk dio nombre al remix de For an Angel: el espacio del dub techno con batería por debajo. Un tema mío.', lang),
    'eigener-track-no-genre': ownTrackListening('no-genre-no-problem', 'Glitch, IDM y ambient, muy lejos del escenario principal. Un tema mío.', lang)
  }),

  sources: [
    {href: 'https://www.officialcharts.com/songs/', label: 'Official Charts: historial en listas de 9PM (Till I Come), Saltwater, Children, Silence, Café del Mar, For an Angel, Adagio for Strings, Satellite, Shivers/Serenity y Out of the Blue'},
    {href: 'https://www.astateoftrance.com/armin-van-buuren-reveals-all-time-a-state-of-trance-top-1000-list/', label: 'A State of Trance: resultados del All-Time Top 1000 de 2021'},
    {href: 'https://www.astateoftrance.com/all-time-a-state-of-trance-top-1000-list/', label: 'A State of Trance: resultados del All-Time Top 1000 de 2024'},
    {href: 'https://djmag.com/features/how-paul-van-dyks-angel-changed-trance-forever', label: 'DJ Mag: How Paul van Dyk’s For An Angel changed trance forever, sobre el lanzamiento en MFS en 1994 y el E-Werk Remix'}
  ],
  sourcesNote: 'Las fechas de lanzamiento de 9 PM (Till I Come), Saltwater, Out of the Blue, Shivers, Communication Part 3 y Concrete Angel proceden de páginas de discografía y de consulta, no de la web de un sello. Fotos de Wikimedia Commons: Davide Pasca (CC BY 2.0), Celwin Frenzen (CC BY 3.0), Vyacheslav Argenberg (CC BY 4.0).',

  bandcamp: {
    description: 'Comprar un tema apoya directamente la música y la escritura.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks de thecatrave'},
      {title: '60 hours of mistakes', id: '3330948631', url: 'https://thecatrave.bandcamp.com/track/60-hours-of-mistakes', linkText: '60 hours of mistakes de thecatrave'}
    ]
  }
};
