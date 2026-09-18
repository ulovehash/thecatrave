// French Glastonbury guide. Structure and facts from the English page
// (glastonbury-draft.md, glastonbury-research.md, build-glastonbury-article.mjs).
//
// French keywords, measured 2026-09-18 with keywords-explorer-matching-terms,
// country fr (keywords/fr-glastonbury.json): glastonbury 5,400 a month,
// glastonbury festival 1,300, festival glastonbury 400, festival de
// glastonbury 100, glastonbury 2027 100. Dated editions and the town's other
// meanings (Tor 250, ville, Avalon) are rejected in the map.
//
// Imperial units are converted: six miles is about 10 km, 1,500 acres about
// 600 hectares.
//
// The images are the English guide's, in img/glastonbury/, with translated
// captions; see home-articles.mjs for why a translation may reuse them.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, articleYoutubeEmbed
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
  ['1970', 'Tyrannosaurus Rex (à la place des Kinks)'],
  ['1971', 'David Bowie'],
  ['1979', 'Tim Blake, Peter Gabriel'],
  ['1981', 'Hawkwind, Ginger Baker'],
  ['1982', 'Van Morrison, Jackson Browne'],
  ['1983', 'Curtis Mayfield, UB40'],
  ['1984', 'The Smiths, Weather Report, Black Uhuru'],
  ['1985', 'Echo & the Bunnymen, Joe Cocker, The Boomtown Rats'],
  ['1986', 'The Cure, The Psychedelic Furs, Level 42'],
  ['1987', 'Elvis Costello, Van Morrison, The Communards'],
  ['1988', 'Année de jachère'],
  ['1989', 'Elvis Costello, Van Morrison, Suzanne Vega'],
  ['1990', 'The Cure, Happy Mondays, Sinéad O’Connor'],
  ['1991', 'Année de jachère'],
  ['1992', 'Carter USM, Shakespears Sister, Youssou N’Dour'],
  ['1993', 'The Black Crowes, Christy Moore, Lenny Kravitz'],
  ['1994', 'Levellers, Elvis Costello, Peter Gabriel'],
  ['1995', 'Oasis, Pulp, The Cure'],
  ['1996', 'Année de jachère'],
  ['1997', 'Radiohead, The Prodigy, Ash'],
  ['1998', 'Primal Scream, Blur, Pulp'],
  ['1999', 'R.E.M., Manic Street Preachers, Skunk Anansie'],
  ['2000', 'David Bowie, Travis, The Chemical Brothers'],
  ['2001', 'Année de jachère'],
  ['2002', 'Coldplay, Rod Stewart, Stereophonics'],
  ['2003', 'R.E.M., Radiohead, Moby'],
  ['2004', 'Paul McCartney, Oasis, Muse'],
  ['2005', 'The White Stripes, Coldplay, Basement Jaxx'],
  ['2006', 'Année de jachère'],
  ['2007', 'Arctic Monkeys, The Killers, The Who'],
  ['2008', 'Kings of Leon, Jay-Z, The Verve'],
  ['2009', 'Neil Young, Bruce Springsteen, Blur'],
  ['2010', 'Gorillaz, Muse, Stevie Wonder'],
  ['2011', 'Beyoncé, U2, Coldplay'],
  ['2012', 'Année de jachère (Jeux olympiques de Londres)'],
  ['2013', 'Arctic Monkeys, The Rolling Stones, Mumford & Sons'],
  ['2014', 'Arcade Fire, Metallica, Kasabian'],
  ['2015', 'Florence and the Machine, Kanye West, The Who'],
  ['2016', 'Muse, Adele, Coldplay'],
  ['2017', 'Radiohead, Foo Fighters, Ed Sheeran'],
  ['2018', 'Année de jachère'],
  ['2019', 'Stormzy, The Killers, The Cure'],
  ['2020 et 2021', 'Annulé à cause de la pandémie'],
  ['2022', 'Billie Eilish, Paul McCartney, Kendrick Lamar'],
  ['2023', 'Arctic Monkeys, Guns N’ Roses, Elton John'],
  ['2024', 'Dua Lipa, Coldplay, SZA'],
  ['2025', 'The 1975, Neil Young, Olivia Rodrigo'],
  ['2026', 'Année de jachère'],
  ['2027', 'Du 23 au 27 juin ; têtes d’affiche pas encore annoncées']
];

export default {
  lang: 'fr',
  name: 'fr-glastonbury',
  file: 'fr/festival-glastonbury.html',
  draft: 'fr/glastonbury-draft.md',
  canonical: 'https://thecatrave.com/fr/festival-glastonbury',
  englishPath: '/glastonbury-festival',
  ogImage: 'https://thecatrave.com/img/og/glastonbury.jpg',
  bodyClass: 'article-page glastonbury-page',

  title: 'Glastonbury 2027 : dates, années de jachère et têtes d’affiche',
  description: 'Le festival de Glastonbury à Worthy Farm : quand a lieu Glastonbury 2027, pourquoi il n’y en a pas eu en 2026, où il se trouve, sa taille et les têtes d’affiche.',
  datePublished: '2026-09-18',
  dateModified: '2026-09-18',
  dateLabel: '18 septembre 2026',

  heroKicker: 'Glastonbury',
  heroTitle: 'Festival de Glastonbury',
  deck: 'Cinq jours la plupart des mois de juin dans une ferme laitière du Somerset. Quand a lieu le prochain, pourquoi il n’y en a pas eu cette année, où il se tient, sa taille et ses têtes d’affiche.',
  answerLabel: 'Qu’est-ce que Glastonbury',
  breadcrumbName: 'Festival de Glastonbury',

  answerSection: 'Réponse',
  introSection: 'Introduction',
  introTitle: 'Un festival dans une ferme.',
  faqSection: 'FAQ',
  faqLabel: 'Questions fréquentes',
  faqTitle: 'Questions fréquentes sur Glastonbury.',
  ownSetAfter: 'history',

  sections: [
    {id: 'glastonbury-2027', heading: 'Glastonbury Festival 2027 : les dates', title: 'Glastonbury Festival 2027 : les dates.'},
    {id: 'fallow-year', heading: 'Pourquoi il n’y a pas de Glastonbury cette année', title: 'Pourquoi il n’y a pas de Glastonbury cette année.'},
    {id: 'where', heading: 'Où se trouve le Glastonbury Festival', title: 'Où se trouve le Glastonbury Festival.'},
    {id: 'when', heading: 'Quand a lieu Glastonbury, et combien de temps il dure', title: 'Quand a lieu Glastonbury, et combien de temps il dure.'},
    {id: 'how-big', heading: 'La taille de Glastonbury', title: 'La taille de Glastonbury.'},
    {id: 'history', heading: 'Une courte histoire, et qui dirige Glastonbury', title: 'Une courte histoire, et qui dirige Glastonbury.'},
    {id: 'stages', heading: 'La Pyramid Stage et le reste du site', title: 'La Pyramid Stage et le reste du site.'},
    {id: 'headliners', heading: 'Les têtes d’affiche de Glastonbury année par année', title: 'Les têtes d’affiche de Glastonbury année par année.'},
    {id: 'music', heading: 'Quelle musique on y joue vraiment', title: 'Quelle musique on y joue vraiment.', kicker: 'La musique'},
    {id: 'from-home', heading: 'Écouter Glastonbury depuis chez soi', title: 'Écouter Glastonbury depuis chez soi.'}
  ],

  media: () => ({
    'Pilton, Glastonbury Festival Site': figure('aerial-2022', 1200, 800,
      'Worthy Farm vue du ciel en juin 2022, des champs verts séparés par des haies et remplis de tentes, de chapiteaux et d’auvents colorés',
      'Worthy Farm vue du ciel en juin 2022, quelques jours avant le festival, les champs déjà remplis de tentes, de chapiteaux et de scènes. Photo : Lewis Clarke, CC BY-SA 2.0.'),
    'The Pyramid Stage - Glastonbury 2008': figure('pyramid-2008', 640, 480,
      'La Pyramid Stage blanche au loin par une soirée claire de 2008, au premier plan de grands drapeaux et un public assis sur des chaises pliantes',
      'La Pyramid Stage par une soirée claire de juin 2008, avec des drapeaux et un public assis dans le champ devant. Photo : Sharon Loxton, CC BY-SA 2.0.', 'archive-image'),
    'Glastonbury Festival 2025 - Night': figure('night-2025', 1200, 800,
      'Des silhouettes sur une colline la nuit en 2025, face à une vallée de scènes illuminées, de tours rayées et de guirlandes lumineuses',
      'Le festival la nuit, le 26 juin 2025, vu de la colline qui domine le site, avec les scènes et les champs illuminés dans la vallée. Photo : Raph_PH, CC BY 4.0.'),
    'Table: headliners': articleTable({
      headers: ['Année', 'Têtes d’affiche'],
      rows: headlinerRows.map(row => row.map(escapeHtml)),
      label: 'Têtes d’affiche de Glastonbury année par année'
    }),
    '1n6GvSfjE8M': articleYoutubeEmbed({
      src: 'https://www.youtube-nocookie.com/embed/1n6GvSfjE8M',
      title: 'The Prodigy, Breathe, à Glastonbury 2025, sur la chaîne YouTube de BBC Music'
    }),
    'kM-94LhhQTs': articleVideoCollection({
      lang: 'fr',
      label: 'Glastonbury, les plus vus',
      description: 'Coldplay jouant « Fix You » au festival 2024, sur la chaîne de BBC Music, et le concert complet de R.E.M. en tête d’affiche en 1999, tel que la BBC l’a diffusé, sur la chaîne du groupe.',
      items: [
        articleVideoCard({youtubeId: 'kM-94LhhQTs', genre: 'Glastonbury, 2024', artist: 'Coldplay', title: 'Fix You, Glastonbury 2024'}),
        articleVideoCard({youtubeId: 'DurDZkK58VE', genre: 'Glastonbury, 1999', artist: 'R.E.M.', title: 'En direct du Glastonbury Festival, 1999'})
      ]
    })
  }),

  sources: [
    {href: 'https://en.wikipedia.org/wiki/Glastonbury_Festival', label: 'Wikipedia : Glastonbury Festival'},
    {href: 'https://www.glastonburyfestivals.co.uk/info/', label: 'Glastonbury Festival : Info'},
    {href: 'https://www.glastonburyfestivals.co.uk/news/glastonbury-2027-ticket-information-confirmed/', label: 'Glastonbury Festival : informations billetterie 2027 confirmées'},
    {href: 'https://www.somerset.gov.uk/community-leisure-and-tourism/glastonbury-festival/', label: 'Somerset Council : autorisation et gestion du Glastonbury Festival'},
    {href: 'https://somerset.moderngov.co.uk/documents/s60202/Glastonbury%20Scruitiny%20Report%202025%20FINAL%20for%20Committee.pdf', label: 'Somerset Council : rapport d’examen du Glastonbury Festival 2025'},
    {href: 'https://apnews.com/article/e70d38801ed7ab25d836048de6deda78', label: 'Associated Press : Glastonbury 2025 en chiffres'},
    {href: 'https://glastonburyfestivals.co.uk/anti-slavery-statement/', label: 'Glastonbury Festival : Anti-Slavery Statement'},
    {href: 'https://www.theguardian.com/uk/2001/oct/22/glastonbury2002.glastonbury', label: 'The Guardian : Glastonbury organisers bid for expansion'},
    {href: 'https://www.theguardian.com/music/2020/jun/26/from-bowie-to-beyonce-glastonburys-50-greatest-moments', label: 'The Guardian : From Bowie to Beyoncé, Glastonbury’s 50 greatest moments'},
    {href: 'https://en.wikipedia.org/wiki/Arcadia_Spectacular', label: 'Wikipedia : Arcadia Spectacular'},
    {href: 'https://www.ingenia.org.uk/articles/the-arcadia-spider-from-junk-to-spectacle/', label: 'Ingenia : The Arcadia spider, from junk to spectacle'},
    {href: 'https://www.wallpaper.com/art/glastonbury-arcadia-dragonfly-interview', label: 'Wallpaper : The story behind Arcadia’s new Dragonfly stage'}
  ],

  bandcamp: {
    description: 'Acheter un morceau soutient directement mon travail.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks par thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 par thecatrave'}
    ]
  }
};
