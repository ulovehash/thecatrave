// French Tomorrowland guide. Structure and facts from the English page
// (tomorrowland-draft.md, tomorrowland-research.md, build-tomorrowland-article.mjs).
//
// French keywords, measured 2026-09-18 with keywords-explorer-matching-terms,
// country fr (keywords/fr-tomorrowland.json): tomorrowland 32,000 a month,
// tomorrowland winter 9,300, prix tomorrowland 600, festival tomorrowland 500,
// tomorrowland thailand 500, and tomorrowland 2027 as the next edition. The
// dated editions, the programme and the 2027 prices (not announced) are
// rejected in the map; "tomorrowland film" (1,200) is the collision the
// introduction names.
//
// The images are the English guide's, in img/tomorrowland/, with translated
// captions; see home-articles.mjs for why a translation may reuse them.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, articleYoutubeEmbed
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption, className = 'wide-archive-image') => articleFigure({
  src: `img/tomorrowland/${name}-${width}.webp`,
  srcset: `img/tomorrowland/${name}-320.webp 320w, img/tomorrowland/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className
});

export default {
  lang: 'fr',
  name: 'fr-tomorrowland',
  file: 'fr/festival-tomorrowland.html',
  draft: 'fr/tomorrowland-draft.md',
  canonical: 'https://thecatrave.com/fr/festival-tomorrowland',
  englishPath: '/tomorrowland-festival',
  ogImage: 'https://thecatrave.com/img/og/tomorrowland.jpg',
  bodyClass: 'article-page tomorrowland-page',

  title: 'Tomorrowland 2027 : lieu, fréquentation, histoire et musique',
  description: 'Tomorrowland est un festival de musique électronique à Boom, en Belgique. Où il a lieu, combien de personnes y vont, à qui il appartient et quelle musique on y joue.',
  datePublished: '2026-09-18',
  dateModified: '2026-09-18',
  dateLabel: '18 septembre 2026',

  heroKicker: 'Tomorrowland',
  heroTitle: 'Festival Tomorrowland',
  deck: 'Un festival dans un parc belge que le monde connaît surtout à travers un écran. Où il a lieu, sa taille réelle, à qui il appartient et ce qui se joue loin de la Mainstage.',
  answerLabel: 'Qu’est-ce que Tomorrowland',
  breadcrumbName: 'Festival Tomorrowland',

  answerSection: 'Réponse',
  introSection: 'Introduction',
  introTitle: 'Le festival que la plupart des gens ne font que regarder.',
  faqSection: 'FAQ',
  faqLabel: 'Questions fréquentes',
  faqTitle: 'Questions fréquentes sur Tomorrowland.',
  ownSetAfter: 'history',

  sections: [
    {id: 'where', heading: 'Où se trouve Tomorrowland', title: 'Où se trouve Tomorrowland.', subsections: ['winter', 'thailand', 'brasil', 'usa', 'tomorrowland-2027']},
    {id: 'how-big', heading: 'La taille de Tomorrowland : fréquentation et billets', title: 'La taille de Tomorrowland : fréquentation et billets.'},
    {id: 'history', heading: 'Une courte histoire, et à qui appartient Tomorrowland', title: 'Une courte histoire, et à qui appartient Tomorrowland.'},
    {id: 'famous', heading: 'Pourquoi Tomorrowland est devenu si célèbre', title: 'Pourquoi Tomorrowland est devenu si célèbre.'},
    {id: 'music', heading: 'Quelle musique on y joue vraiment', title: 'Quelle musique on y joue vraiment.', kicker: 'La musique'},
    {id: 'from-home', heading: 'Écouter Tomorrowland depuis chez soi', title: 'Écouter Tomorrowland depuis chez soi.'}
  ],

  media: () => ({
    'Retreat to Dreamville': figure('dreamville-2014', 1200, 795,
      'Des tentes et des festivaliers à DreamVille, le camping de Tomorrowland, en 2014',
      'DreamVille, le camping de Tomorrowland, en 2014. Ses formules se vendent avec le billet du festival. Photo : sergejf, CC BY 2.0.'),
    'Main Stage 2008': figure('mainstage-2008', 1024, 768,
      'La Mainstage de Tomorrowland en 2008, une scène modeste en plein jour avec le public devant',
      'La Mainstage en 2008, trois ans après le début du festival et bien avant de devenir la scène que l’on connaît par le livestream. Photo : TheWorldIsMine, CC BY-SA 2.0.'),
    '2014 Main Stage': figure('mainstage-2014', 1200, 708,
      'La Mainstage de Tomorrowland en 2014, une immense scène à thème au-dessus du public',
      'La Mainstage en 2014, pour la dixième édition. Photo : sergejf, CC BY 2.0.'),
    'Brussels Airport': figure('brussels-airport-2013', 1200, 795,
      'Le hall des arrivées de l’aéroport de Bruxelles décoré pour les festivaliers de Tomorrowland en 2013',
      'L’aéroport de Bruxelles décoré pour l’arrivée des festivaliers de Tomorrowland en 2013. Les formules Global Journey font venir les visiteurs avec Brussels Airlines. Photo : Brussels Airport, CC BY-SA 2.0.'),
    'Carl Cox': figure('carl-cox-2008', 1024, 768,
      'Carl Cox aux platines à Tomorrowland en 2008',
      'Carl Cox à Tomorrowland en 2008. La techno a sa propre scène au festival depuis les premières années. Photo : TheWorldIsMine, CC BY-SA 2.0.'),
    'WdWnCTkqIRs': articleYoutubeEmbed({
      src: 'https://www.youtube-nocookie.com/embed/WdWnCTkqIRs',
      title: 'Dimitri Vegas & Like Mike, Live At Tomorrowland 2025 Mainstage, sur la chaîne YouTube de Dimitri Vegas & Like Mike'
    }),
    'ZG1AT6tylA4': articleVideoCollection({
      lang: 'fr',
      label: 'Les sets les plus vus de Tomorrowland',
      description: 'Deux sets de la Mainstage : Hardwell en 2013, plus de 28 millions de vues sur sa propre chaîne, et Swedish House Mafia en 2025, sur la chaîne du festival.',
      items: [
        articleVideoCard({youtubeId: 'ZG1AT6tylA4', genre: 'Mainstage, 2013', artist: 'Hardwell', title: 'Live à Tomorrowland 2013'}),
        articleVideoCard({youtubeId: 'H1b8hXkGyTo', genre: 'Mainstage, 2025', artist: 'Swedish House Mafia', title: 'Tomorrowland 2025, Mainstage'})
      ]
    }),
    'Table: attendance': articleTable({
      headers: ['Année', 'Festivaliers', 'Ce qui s’est passé'],
      rows: [
        ['2005', 'Environ 10 000', 'Première édition, le 14 août'],
        ['2010', '180 000', ''],
        ['2017 à 2019', '400 000', 'Deux week-ends'],
        ['2020 et 2021', 'aucun', 'Annulé à cause de la pandémie'],
        ['2022', '600 000', 'Trois week-ends, le record'],
        ['2023 et 2024', '400 000', ''],
        ['2026', '400 000', 'Des festivaliers de plus de 200 pays']
      ].map(row => row.map(escapeHtml))
    })
  }),

  sources: [
    {href: 'https://belgium.tomorrowland.com/en/welcome/down-memory-lane/', label: 'Tomorrowland Belgium : Down Memory Lane'},
    {href: 'https://winter.tomorrowland.com/en/welcome/down-memory-lane/', label: 'Tomorrowland Winter : Down Memory Lane'},
    {href: 'https://faq.tomorrowland.com/hc/en-us/articles/4402621418132-Where-and-when-will-Tomorrowland-Belgium-2027-take-place', label: 'Tomorrowland Belgium : où et quand aura lieu l’édition 2027'},
    {href: 'https://press.tomorrowland.com/', label: 'Tomorrowland, informations presse : propriété et organisation'},
    {href: 'https://en.wikipedia.org/wiki/Tomorrowland_(festival)', label: 'Wikipedia : Tomorrowland (festival)'},
    {href: 'https://news.pollstar.com/2026/07/29/tomorrowland-breaks-own-livestream-record/', label: 'Pollstar : Tomorrowland Breaks Own Livestream Record'},
    {href: 'https://www.bandwagon.asia/articles/tomorrowland-belgium-2026-wraps-with-400-000-fans-calvin-harris-debut-record-livestreams-festival-report', label: 'Bandwagon : Tomorrowland Belgium 2026 wraps with 400,000 fans'},
    {href: 'https://djmag.com/news/tomorrowland-2025-mainstage-fire-reportedly-caused-ethanol-spill-during-testing', label: 'DJ Mag : Tomorrowland 2025 Mainstage fire reportedly caused by ethanol spill during testing'},
    {href: 'https://www.euronews.com/culture/2025/07/18/belgiums-tomorrowland-festival-opens-after-massive-fire-destroyed-main-stage', label: 'Euronews : Belgium’s Tomorrowland festival opens after massive fire destroyed main stage'},
    {href: 'https://www.revolution935.com/2026/01/24/tomorrowland26/', label: 'Revolution 935 : Tomorrowland Belgium 2026 Tickets'},
    {href: 'https://consciouselectronic.com/2026/07/25/tomorrowland-las-vegas-2027-rumor-mill/', label: 'Conscious Electronic : Is Tomorrowland heading to Las Vegas in 2027?'},
    {href: 'https://lasvegasweekly.com/ae/music/2025/aug/28/insomniac-and-tomorrowland-go-b2b-for-unity-sphere/', label: 'Las Vegas Weekly : Insomniac and Tomorrowland go b2b for Unity at Sphere'},
    {href: 'https://www.1001tracklists.com/tracklist/p3duwuk/chase-status-mainstage-tomorrowland-weekend-2-belgium-2026-07-26.html', label: '1001Tracklists : Chase & Status, Mainstage, Tomorrowland week-end 2, 2026'},
    {href: 'https://www.1001tracklists.com/tracklist/2rpp1hzt/camo-and-krooked-netsky-and-friends-stage-tomorrowland-weekend-2-belgium-2017-07-28.html', label: '1001Tracklists : Camo & Krooked, scène Netsky & Friends, Tomorrowland 2017'},
    {href: 'https://weraveyou.com/2019/07/tomorrowland-iconic-sets-ever/', label: 'We Rave You : Tomorrowland, the most iconic sets of all time'}
  ],

  bandcamp: {
    description: 'La drum and bass des scènes invitées de Tomorrowland vient de la même lignée de breaks et de basses que ma propre musique. Acheter un morceau soutient directement mon travail.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks par thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 par thecatrave'}
    ]
  }
};
