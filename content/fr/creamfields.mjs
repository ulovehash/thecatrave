// French Creamfields guide. Structure and facts from the English page
// (creamfields-draft.md, creamfields-research.md, build-creamfields-article.mjs).
//
// French keywords (keywords/fr-creamfields.json): creamfields 200 a month in
// France (TRANSLATION-RESEARCH.md, French stage 2). The wording was checked in
// the Bing fr-FR results on 2026-09-23 (Google answered with a bot check), no
// Ahrefs units spent: French searches use the bare name and "creamfields
// festival"; fr.wikipedia has its own page. French readers do not know the
// August Bank Holiday, so the first mention explains it as the late-August
// public holiday.
//
// The images are the English guide's, in img/creamfields/, with translated
// captions; see home-articles.mjs for why a translation may reuse them.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, articleYoutubeEmbed, ownTrackListening
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption, className = 'wide-archive-image') => articleFigure({
  src: `img/creamfields/${name}-${width}.webp`,
  srcset: `img/creamfields/${name}-320.webp 320w, img/creamfields/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className
});

export default {
  lang: 'fr',
  name: 'fr-creamfields',
  file: 'fr/festival-creamfields.html',
  draft: 'fr/creamfields-draft.md',
  canonical: 'https://thecatrave.com/fr/festival-creamfields',
  englishPath: '/creamfields-festival',
  ogImage: 'https://thecatrave.com/img/og/creamfields.jpg',
  bodyClass: 'article-page creamfields-page',

  title: 'Creamfields 2027 : lieu, histoire, taille et musique',
  description: 'Où a lieu Creamfields dans le Cheshire, comment une soirée house de Liverpool est devenue un festival de quatre jours, et ce qui se joue loin de l’Arc Stage.',
  datePublished: '2026-09-23',
  dateModified: '2026-09-23',
  dateLabel: '23 septembre 2026',

  heroKicker: 'Creamfields',
  heroTitle: 'Creamfields Festival',
  deck: 'La sortie d’une soirée club de Liverpool devenue quatre jours dans un champ du Cheshire, chaque fin août. Où il a lieu, sa taille, à qui il appartient et ce qui se joue loin de l’Arc Stage.',
  answerLabel: 'Qu’est-ce que Creamfields',
  breadcrumbName: 'Creamfields Festival',

  answerSection: 'Réponse',
  introSection: 'Introduction',
  introTitle: 'Une soirée club devenue un festival.',
  faqSection: 'FAQ',
  faqLabel: 'Questions fréquentes',
  faqTitle: 'Questions fréquentes sur Creamfields.',
  ownSetAfter: 'history',

  sections: [
    {id: 'where', heading: 'Où a lieu Creamfields', title: 'Où a lieu Creamfields.', subsections: ['south', 'international', 'creamfields-2027']},
    {id: 'how-big', heading: 'Quelle est la taille de Creamfields', title: 'Quelle est la taille de Creamfields.'},
    {id: 'history', heading: 'Une brève histoire, et à qui appartient Creamfields', title: 'Une brève histoire, et à qui appartient Creamfields.'},
    {id: 'famous', heading: 'Pourquoi Creamfields est célèbre', title: 'Pourquoi Creamfields est célèbre.'},
    {id: 'music', heading: 'Ce que joue vraiment Creamfields', title: 'Ce que joue vraiment Creamfields.', kicker: 'La musique'},
    {id: 'from-home', heading: 'Écouter Creamfields depuis chez soi', title: 'Écouter Creamfields depuis chez soi.'}
  ],

  media: ({lang}) => ({
    // The owner's own music inside the text, as on every French festival guide
    // (owner, 2026-09-21: Dégénération on the French pages).
    'thecatrave degeneration': ownTrackListening('degeneration', 'Loin des grandes scènes : la voix de Mylène Farmer sur des breaks, entre dubstep et UK garage. Mon propre remix.', lang),
    'Farm track skirts Creamfields site': figure('daresbury-site-2014', 1024, 768,
      'Un chemin agricole le long d’une clôture verte en bordure du site de Creamfields près de Daresbury, avec des champs et des arbres au loin',
      'La bordure du site de Creamfields près d’Outer Wood, à Daresbury, trois jours après le festival 2014. Photo : Raymond Knapman, CC BY-SA 2.0.'),
    'Creamfields Brasil 2013': figure('creamfields-brasil-2013', 1063, 704,
      'Une foule de nuit sous le toit illuminé d’une scène de Creamfields Brasil en 2013',
      'Creamfields Brasil en janvier 2013, sa troisième édition, à Jurerê Internacional, à Florianópolis. Le nom a voyagé dans plus de vingt pays. Photo : Gerardo Lazzari, CC BY 2.0.'),
    'Cream buildings in Wolstenholme Square': figure('cream-wolstenholme-square-2011', 640, 480,
      'Les bâtiments peints en noir du club Cream, sur Wolstenholme Square à Liverpool, avec une enseigne Cream au-dessus d’une porte fermée',
      'Les bâtiments de Cream sur Wolstenholme Square, à Liverpool, en 2011, là où avait lieu la soirée house hebdomadaire à l’origine de Creamfields. Le bloc a été démoli en 2016. Photo : John S Turner, CC BY-SA 2.0.',
      'archive-image'),
    'Creamfields Steel Yard structure': figure('steel-yard-2017', 1200, 801,
      'L’intérieur vide du Steel Yard, une longue structure d’acier en arches éclairée en orange, avant un concert',
      'Le Steel Yard, vide avant un concert en novembre 2017. La structure de 15 000 places est devenue un festival à part entière. Photo : OfficialCreamPress, CC BY-SA 4.0.'),
    'LilRockit at Cream': figure('cream-liverpool-2015', 1200, 801,
      'Un DJ vu de dos aux platines au Cream de Liverpool, face à une piste bondée sous des ballons',
      'LilRockit aux platines au Cream de Liverpool en décembre 2015, quelques mois avant la démolition du bâtiment. Photo : Leighroy4, CC BY-SA 4.0.'),
    'fVKywXvEl9g': articleYoutubeEmbed({
      src: 'https://www.youtube-nocookie.com/embed/fVKywXvEl9g',
      title: 'Creamfields 2019 After Series, Bass, Drum and Bass, sur la chaîne YouTube Creamfields Official Page'
    }),
    'BvXj6mCK0X4': articleVideoCollection({
      lang,
      label: 'Creamfields, hier et aujourd’hui',
      description: 'Ewan McVicar au Steel Yard en 2023, le plus vu de ses sets à Creamfields, sur sa propre chaîne, et Pete Tong en 2025, sur la chaîne du festival, qui figurait sur la première affiche de Creamfields en 1998.',
      items: [
        articleVideoCard({youtubeId: 'BvXj6mCK0X4', genre: 'Steel Yard, 2023', artist: 'Ewan McVicar', title: 'Steel Yard, Creamfields North 2023'}),
        articleVideoCard({youtubeId: 'UBqb6F7Jlho', genre: 'Creamfields, 2025', artist: 'Pete Tong', title: 'DJ set, Creamfields 2025'})
      ]
    }),
    // The published figures of each year, qualified in the text, as on the
    // English page. Typed, not computed.
    'Table: fréquentation': articleTable({
      headers: ['Année', 'Lieu', 'Jours', 'Fréquentation publiée'],
      rows: [
        ['1998', 'Winchester', '1', '25 000'],
        ['1999 à 2005', 'Ancien aéroport de Liverpool, Speke', '1', '50 000'],
        ['2006 et 2007', 'Daresbury', '1', '50 000'],
        ['2008', 'Daresbury', '2', '50 000'],
        ['2009', 'Daresbury', '2', '60 000, premier complet'],
        ['2010', 'Daresbury', '2', '80 000'],
        ['2011', 'Daresbury', '2', '100 000'],
        ['2012', 'Daresbury', '3', '100 000, dernier jour inondé'],
        ['2013 à 2015', 'Daresbury', '3', '150 000'],
        ['2016', 'Daresbury', '4', '200 000'],
        ['2017 à 2019', 'Daresbury', '4', '280 000'],
        ['2020', 'aucun', '0', 'Annulé à cause de la pandémie'],
        ['2026', 'Daresbury', '4', '80 000 personnes ; environ 55 000 campeurs']
      ].map(row => row.map(escapeHtml))
    })
  }),

  // The English page's sources, URL for URL, with translated labels.
  sources: [
    {href: 'https://en.wikipedia.org/wiki/Creamfields', label: 'Wikipedia : Creamfields (en anglais)'},
    {href: 'https://en.wikipedia.org/wiki/Cream_(nightclub)', label: 'Wikipedia : Cream (boîte de nuit, en anglais)'},
    {href: 'https://en.wikipedia.org/wiki/Daresbury', label: 'Wikipedia : Daresbury'},
    {href: 'https://creamfields.com/history/', label: 'Creamfields : l’histoire de Creamfields UK'},
    {href: 'https://creamfields.com/history/2025-new-era/', label: 'Creamfields : Creamfields 2025, A New Era of the Fields'},
    {href: 'https://creamfields.com/info/where-is-the-festival/', label: 'Creamfields : où se trouve le festival ?'},
    {href: 'https://creamfields.com/info/car/', label: 'Creamfields : venir en voiture'},
    {href: 'https://creamfields.com/info/what-age-do-you-need-to-be-to-attend/', label: 'Creamfields : âge minimum'},
    {href: 'https://creamfields.com/welcome/', label: 'Creamfields : Welcome to Creamfields 2027'},
    {href: 'https://creamfields.com/tickets/', label: 'Creamfields : billets et prix actuels'},
    {href: 'https://www.cheshire.police.uk/news/cheshire/news/articles/2026/9/constabulary-supports-successful-creamfields-operation/', label: 'Police du Cheshire : fréquentation et camping à Creamfields 2026'},
    {href: 'https://investors.livenationentertainment.com/sec-filings/annual-reports/content/0001193125-13-077102/d466140d10k.htm', label: 'Live Nation Entertainment : Form 10-K 2012'},
    {href: 'https://find-and-update.company-information.service.gov.uk/company/03110532/persons-with-significant-control', label: 'Companies House : contrôle de Cream Global Ltd'},
    {href: 'https://find-and-update.company-information.service.gov.uk/company/06704345/persons-with-significant-control', label: 'Companies House : contrôle de Ticketmaster Europe Holdco'},
    {href: 'https://www.nme.com/news/music/various-artists-2616-1250661', label: 'NME : Creamfields s’arrête plus tôt après de fortes inondations'},
    {href: 'https://www.aol.co.uk/articles/creamfields-2026-chaos-stages-shut-081530000.html', label: 'Mirror via AOL : scènes de Creamfields 2026 fermées à cause des orages'},
    {href: 'https://electronicgroove.com/creamfields-marks-20-years-at-daresbury-with-2026-line-up/', label: 'Electronic Groove : Creamfields fête 20 ans à Daresbury avec sa programmation 2026'},
    {href: 'https://www.skiddle.com/news/all/All-you-need-to-know-about-Creamfields-2026/60796/', label: 'Skiddle : tout savoir sur Creamfields 2026'},
    {href: 'https://discover.ticketmaster.co.uk/festivals/creamfields-2025-line-up-deep-dive-64595/', label: 'Ticketmaster Discover : la programmation de Creamfields 2025 en détail'},
    {href: 'https://discover.ticketmaster.co.uk/festivals/creamfields-delivers-two-new-stages-and-an-all-star-line-up-for-2025-66551/', label: 'Ticketmaster Discover : deux nouvelles scènes à Creamfields 2025'},
    {href: 'https://www.skiddle.com/news/all/The-Best-DJ-Sets-of-All-Time/57700/', label: 'Skiddle : les meilleurs DJ sets de tous les temps'}
  ],

  bandcamp: {
    description: 'Creamfields a fait de la place à la drum and bass à côté de la house et de la techno, et ma propre musique vient de la même lignée de breaks et de basses. Acheter un morceau soutient directement mon travail.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks par thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 par thecatrave'}
    ]
  }
};
