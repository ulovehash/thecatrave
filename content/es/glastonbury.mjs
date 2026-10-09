// Spanish Glastonbury guide. Structure and facts from the English page
// (glastonbury-draft.md); localised, not translated word for word.
//
// Spanish keywords, measured 2026-10-09 with Keyword Planner, Spain
// (keywords/es-glastonbury.json): glastonbury, glastonbury festival, festival
// de glastonbury, glastonbury inglaterra 1K-10K; glastonbury 2027 100-1K;
// headliners, historia, entradas, cartel 10-100. Imperial units are converted:
// six miles is about 10 km, three miles about 5 km, 1,500 acres about 600
// hectares.
//
// Images are the English guide's, in img/glastonbury/, with translated captions.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, articleYoutubeEmbed, ownTrackListening
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption, className = 'wide-archive-image') => articleFigure({
  src: `img/glastonbury/${name}-${width}.webp`,
  srcset: `img/glastonbury/${name}-320.webp 320w, img/glastonbury/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className
});

// Headliners by year, as in the English generator (Wikipedia's line-ups
// table); only the notes are translated.
const headlinerRows = [
  ['1970', 'Tyrannosaurus Rex (en lugar de los Kinks)'],
  ['1971', 'David Bowie'],
  ['1979', 'Tim Blake, Peter Gabriel'],
  ['1981', 'Hawkwind, Ginger Baker'],
  ['1982', 'Van Morrison, Jackson Browne'],
  ['1983', 'Curtis Mayfield, UB40'],
  ['1984', 'The Smiths, Weather Report, Black Uhuru'],
  ['1985', 'Echo & the Bunnymen, Joe Cocker, The Boomtown Rats'],
  ['1986', 'The Cure, The Psychedelic Furs, Level 42'],
  ['1987', 'Elvis Costello, Van Morrison, The Communards'],
  ['1988', 'Año de descanso'],
  ['1989', 'Elvis Costello, Van Morrison, Suzanne Vega'],
  ['1990', 'The Cure, Happy Mondays, Sinéad O’Connor'],
  ['1991', 'Año de descanso'],
  ['1992', 'Carter USM, Shakespears Sister, Youssou N’Dour'],
  ['1993', 'The Black Crowes, Christy Moore, Lenny Kravitz'],
  ['1994', 'Levellers, Elvis Costello, Peter Gabriel'],
  ['1995', 'Oasis, Pulp, The Cure'],
  ['1996', 'Año de descanso'],
  ['1997', 'Radiohead, The Prodigy, Ash'],
  ['1998', 'Primal Scream, Blur, Pulp'],
  ['1999', 'R.E.M., Manic Street Preachers, Skunk Anansie'],
  ['2000', 'David Bowie, Travis, The Chemical Brothers'],
  ['2001', 'Año de descanso'],
  ['2002', 'Coldplay, Rod Stewart, Stereophonics'],
  ['2003', 'R.E.M., Radiohead, Moby'],
  ['2004', 'Paul McCartney, Oasis, Muse'],
  ['2005', 'The White Stripes, Coldplay, Basement Jaxx'],
  ['2006', 'Año de descanso'],
  ['2007', 'Arctic Monkeys, The Killers, The Who'],
  ['2008', 'Kings of Leon, Jay-Z, The Verve'],
  ['2009', 'Neil Young, Bruce Springsteen, Blur'],
  ['2010', 'Gorillaz, Muse, Stevie Wonder'],
  ['2011', 'Beyoncé, U2, Coldplay'],
  ['2012', 'Año de descanso (Juegos Olímpicos de Londres)'],
  ['2013', 'Arctic Monkeys, The Rolling Stones, Mumford & Sons'],
  ['2014', 'Arcade Fire, Metallica, Kasabian'],
  ['2015', 'Florence and the Machine, Kanye West, The Who'],
  ['2016', 'Muse, Adele, Coldplay'],
  ['2017', 'Radiohead, Foo Fighters, Ed Sheeran'],
  ['2018', 'Año de descanso'],
  ['2019', 'Stormzy, The Killers, The Cure'],
  ['2020 y 2021', 'Cancelado por la pandemia'],
  ['2022', 'Billie Eilish, Paul McCartney, Kendrick Lamar'],
  ['2023', 'Arctic Monkeys, Guns N’ Roses, Elton John'],
  ['2024', 'Dua Lipa, Coldplay, SZA'],
  ['2025', 'The 1975, Neil Young, Olivia Rodrigo'],
  ['2026', 'Año de descanso'],
  ['2027', 'Del 23 al 27 de junio; cabezas de cartel aún sin anunciar']
];

export default {
  lang: 'es',
  name: 'es-glastonbury',
  file: 'es/festival-glastonbury.html',
  draft: 'es/glastonbury-draft.md',
  canonical: 'https://thecatrave.com/es/festival-glastonbury',
  englishPath: '/glastonbury-festival',
  ogImage: 'https://thecatrave.com/img/og/glastonbury.jpg',
  bodyClass: 'article-page glastonbury-page',

  title: 'Festival de Glastonbury: qué es, dónde es y fechas de 2027',
  description: 'El Festival de Glastonbury en Worthy Farm, Inglaterra: cuándo es Glastonbury 2027, por qué no hubo festival en 2026, dónde es, qué tamaño tiene y sus headliners.',
  datePublished: '2026-10-09',
  dateModified: '2026-10-09',
  dateLabel: '9 de octubre de 2026',

  heroKicker: 'Glastonbury',
  heroTitle: 'Festival de Glastonbury',
  deck: 'Cinco días casi todos los junios en una granja lechera de Somerset, en Inglaterra. Cuándo es el próximo, por qué no hubo este año, dónde se celebra, qué tamaño tiene y quién ha sido cabeza de cartel.',
  answerLabel: 'Qué es Glastonbury',
  breadcrumbName: 'Festival de Glastonbury',

  answerSection: 'Respuesta',
  introSection: 'Introducción',
  introTitle: 'Un festival en una granja.',
  faqSection: 'FAQ',
  faqLabel: 'Preguntas frecuentes',
  faqTitle: 'Preguntas frecuentes sobre Glastonbury.',
  ownSetAfter: 'history',

  sections: [
    {id: 'glastonbury-2027', heading: 'Glastonbury 2027: fechas', title: 'Glastonbury 2027: fechas.'},
    {id: 'fallow-year', heading: 'Por qué no hay Glastonbury este año', title: 'Por qué no hay Glastonbury este año.'},
    {id: 'where', heading: 'Dónde es el Festival de Glastonbury', title: 'Dónde es el Festival de Glastonbury.'},
    {id: 'when', heading: 'Cuándo es Glastonbury y cuánto dura', title: 'Cuándo es Glastonbury y cuánto dura.'},
    {id: 'how-big', heading: 'Qué tamaño tiene Glastonbury', title: 'Qué tamaño tiene Glastonbury.'},
    {id: 'history', heading: 'Breve historia, y quién dirige Glastonbury', title: 'Breve historia, y quién dirige Glastonbury.'},
    {id: 'stages', heading: 'El Pyramid Stage y el resto del recinto', title: 'El Pyramid Stage y el resto del recinto.'},
    {id: 'headliners', heading: 'Los headliners de Glastonbury año por año', title: 'Los headliners de Glastonbury año por año.'},
    {id: 'music', heading: 'Qué música suena de verdad', title: 'Qué música suena de verdad.', kicker: 'La música'},
    {id: 'from-home', heading: 'Escuchar Glastonbury desde casa', title: 'Escuchar Glastonbury desde casa.'}
  ],

  media: ({lang}) => ({
    'thecatrave berlin-race-1909': ownTrackListening('berlin-race-1909', 'Lejos de los grandes escenarios: percusión rota con eco de dub techno y espacio. Un tema mío.', lang),
    'Pilton, Glastonbury Festival Site': figure('aerial-2022', 1200, 800,
      'Worthy Farm vista desde el aire en junio de 2022, campos verdes separados por setos y llenos de tiendas, carpas y toldos de colores',
      'Worthy Farm desde el aire en junio de 2022, unos días antes del festival, con los campos ya llenos de tiendas, carpas y escenarios. Foto: Lewis Clarke, CC BY-SA 2.0.'),
    'The Pyramid Stage - Glastonbury 2008': figure('pyramid-2008', 640, 480,
      'El Pyramid Stage blanco a lo lejos en una tarde despejada de 2008, con grandes banderas en primer plano y público sentado en sillas plegables',
      'El Pyramid Stage en una tarde despejada de junio de 2008, con banderas y público sentado en el campo delante. Foto: Sharon Loxton, CC BY-SA 2.0.', 'archive-image'),
    'Glastonbury Festival 2025 - Night': figure('night-2025', 1200, 800,
      'Siluetas en una colina de noche en 2025, frente a un valle de escenarios iluminados, torres rayadas y guirnaldas de luces',
      'El festival de noche, el 26 de junio de 2025, visto desde la colina sobre el recinto, con los escenarios y los campos iluminados en el valle. Foto: Raph_PH, CC BY 4.0.'),
    'Table: headliners': articleTable({
      headers: ['Año', 'Cabezas de cartel'],
      rows: headlinerRows.map(row => row.map(escapeHtml)),
      label: 'Cabezas de cartel de Glastonbury año por año'
    }),
    '1n6GvSfjE8M': articleYoutubeEmbed({
      src: 'https://www.youtube-nocookie.com/embed/1n6GvSfjE8M',
      title: 'The Prodigy, Breathe, en Glastonbury 2025, en el canal de YouTube de BBC Music'
    }),
    'kM-94LhhQTs': articleVideoCollection({
      lang: 'es',
      label: 'Glastonbury, lo más visto',
      description: 'Coldplay tocando «Fix You» en el festival de 2024, en el canal de BBC Music, y la actuación de R.E.M. como cabezas de cartel en 1999, tal como la emitió la BBC, en el canal del grupo.',
      items: [
        articleVideoCard({youtubeId: 'kM-94LhhQTs', genre: 'Glastonbury, 2024', artist: 'Coldplay', title: 'Fix You, Glastonbury 2024'}),
        articleVideoCard({youtubeId: 'DurDZkK58VE', genre: 'Glastonbury, 1999', artist: 'R.E.M.', title: 'En directo en el Glastonbury Festival, 1999'})
      ]
    })
  }),

  sources: [
    {href: 'https://en.wikipedia.org/wiki/Glastonbury_Festival', label: 'Wikipedia: Glastonbury Festival (en inglés)'},
    {href: 'https://www.glastonburyfestivals.co.uk/info/', label: 'Glastonbury Festival: Info (en inglés)'},
    {href: 'https://www.glastonburyfestivals.co.uk/news/glastonbury-2027-ticket-information-confirmed/', label: 'Glastonbury Festival: información de entradas 2027 confirmada (en inglés)'},
    {href: 'https://www.somerset.gov.uk/community-leisure-and-tourism/glastonbury-festival/', label: 'Somerset Council: licencia y gestión del Glastonbury Festival (en inglés)'},
    {href: 'https://somerset.moderngov.co.uk/documents/s60202/Glastonbury%20Scruitiny%20Report%202025%20FINAL%20for%20Committee.pdf', label: 'Somerset Council: informe de revisión del Glastonbury Festival 2025 (en inglés)'},
    {href: 'https://apnews.com/article/e70d38801ed7ab25d836048de6deda78', label: 'Associated Press: Glastonbury 2025 en cifras (en inglés)'},
    {href: 'https://glastonburyfestivals.co.uk/anti-slavery-statement/', label: 'Glastonbury Festival: Anti-Slavery Statement (en inglés)'},
    {href: 'https://www.theguardian.com/uk/2001/oct/22/glastonbury2002.glastonbury', label: 'The Guardian: Glastonbury organisers bid for expansion (en inglés)'},
    {href: 'https://www.theguardian.com/music/2020/jun/26/from-bowie-to-beyonce-glastonburys-50-greatest-moments', label: 'The Guardian: From Bowie to Beyoncé, Glastonbury’s 50 greatest moments (en inglés)'},
    {href: 'https://en.wikipedia.org/wiki/Arcadia_Spectacular', label: 'Wikipedia: Arcadia Spectacular (en inglés)'},
    {href: 'https://www.ingenia.org.uk/articles/the-arcadia-spider-from-junk-to-spectacle/', label: 'Ingenia: The Arcadia spider, from junk to spectacle (en inglés)'},
    {href: 'https://www.wallpaper.com/art/glastonbury-arcadia-dragonfly-interview', label: 'Wallpaper: The story behind Arcadia’s new Dragonfly stage (en inglés)'}
  ],

  bandcamp: {
    description: 'Comprar un tema apoya directamente mi trabajo.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks de thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 de thecatrave'}
    ]
  }
};
