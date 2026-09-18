// French Coachella guide. Structure and facts from the English page
// (coachella-draft.md, coachella-research.md, build-coachella-article.mjs).
//
// French keywords, measured 2026-09-18 with keywords-explorer-matching-terms,
// country fr (keywords/fr-coachella.json): coachella 28,000 a month, festival
// coachella 1,600, coachella 2027 800. The outfit cluster (coachella tenue
// 1,600, tenue coachella homme 1,000 and more), celebrity sets of 2026 and the
// prices (the English page gives none) are rejected in the map.
//
// Imperial units converted: 125 miles is about 200 km, 1,000 acres about 400
// hectares, 80 feet about 24 m.
//
// The images are the English guide's, in img/coachella/, with translated
// captions; see home-articles.mjs for why a translation may reuse them.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, articleYoutubeEmbed
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption, className = 'wide-archive-image') => articleFigure({
  src: `img/coachella/${name}-${width}.webp`,
  srcset: `img/coachella/${name}-320.webp 320w, img/coachella/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className
});

export default {
  lang: 'fr',
  name: 'fr-coachella',
  file: 'fr/festival-coachella.html',
  draft: 'fr/coachella-draft.md',
  canonical: 'https://thecatrave.com/fr/festival-coachella',
  englishPath: '/what-is-coachella',
  ogImage: 'https://thecatrave.com/img/og/coachella.jpg',
  bodyClass: 'article-page coachella-page',

  title: 'Qu’est-ce que Coachella ? Dates 2027, lieu, taille et musique',
  description: 'Coachella est un festival de musique à l’Empire Polo Club d’Indio, en Californie. Dates 2027, lieu, durée, fréquentation, propriétaire et la musique de la Sahara.',
  datePublished: '2026-09-18',
  dateModified: '2026-09-18',
  dateLabel: '18 septembre 2026',

  heroKicker: 'Coachella',
  heroTitle: 'Qu’est-ce que Coachella ?',
  deck: 'Deux week-ends d’avril sur un terrain de polo du désert californien. Quand a lieu Coachella 2027, où il se trouve, sa taille, à qui il appartient et ce qui se joue sous la tente Sahara.',
  answerLabel: 'Qu’est-ce que Coachella',
  breadcrumbName: 'Qu’est-ce que Coachella',

  answerSection: 'Réponse',
  introSection: 'Introduction',
  introTitle: 'Un pari sur un terrain de polo.',
  faqSection: 'FAQ',
  faqLabel: 'Questions fréquentes',
  faqTitle: 'Questions fréquentes sur Coachella.',
  ownSetAfter: 'history',

  sections: [
    {id: 'coachella-2027', heading: 'Coachella 2027 : les dates', title: 'Coachella 2027 : les dates.'},
    {id: 'where', heading: 'Où se trouve Coachella', title: 'Où se trouve Coachella.'},
    {id: 'when', heading: 'Quand a lieu Coachella, et combien de temps il dure', title: 'Quand a lieu Coachella, et combien de temps il dure.'},
    {id: 'how-big', heading: 'La taille de Coachella', title: 'La taille de Coachella.'},
    {id: 'history', heading: 'Une courte histoire, et à qui appartient Coachella', title: 'Une courte histoire, et à qui appartient Coachella.'},
    {id: 'stages', heading: 'Les scènes de Coachella', title: 'Les scènes de Coachella.'},
    {id: 'famous', heading: 'Pourquoi Coachella est si célèbre', title: 'Pourquoi Coachella est si célèbre.'},
    {id: 'music', heading: 'Quelle musique on y joue vraiment', title: 'Quelle musique on y joue vraiment.', kicker: 'La musique'},
    {id: 'from-home', heading: 'Écouter Coachella depuis chez soi', title: 'Écouter Coachella depuis chez soi.'}
  ],

  media: () => ({
    'Coachella18W1-18': figure('grounds-2018', 1200, 677,
      'Des festivaliers sur la pelouse de Coachella en 2018, derrière eux des palmiers et une haute tour de panneaux colorés, à l’horizon les montagnes du désert et la grande roue',
      'Le site du festival en avril 2018 : palmiers, montagnes du désert, une tour colorée et la grande roue. Photo : Raph_PH, CC BY 2.0.'),
    'Coachella 2006, Barry Mulling': figure('tent-2006', 1200, 900,
      'Le public sous une tente blanche à Coachella en 2006, un groupe sur scène, des enceintes sous le toit et des palmiers dans la lumière du soir',
      'Un concert sous l’une des tentes de Coachella en avril 2006, l’année de la pyramide de Daft Punk et du set de Madonna sous la tente dance. Photo : Barry Mulling, CC BY-SA 2.0.'),
    'Outdoor Theatre, Shawn Ahmed': figure('outdoor-theatre-2014', 1200, 801,
      'Une grande foule devant la scène de l’Outdoor Theatre au crépuscule en 2014, des écrans de chaque côté et des palmiers en bordure du terrain',
      'L’Outdoor Theatre au crépuscule, lors du second week-end de 2014. Photo : Shawn Ahmed, CC BY 2.0.'),
    'Sahara Tent, Shawn Ahmed': figure('sahara-2014', 1200, 801,
      'L’intérieur de la tente Sahara la nuit en 2014, la structure d’acier en arc éclairée de vert et de blanc au-dessus d’une foule dense',
      'La tente Sahara la nuit, lors du second week-end de 2014, la scène construite pour les têtes d’affiche électroniques de Coachella. Photo : Shawn Ahmed, CC BY 2.0.'),
    'o0QGw1LZpxM': articleYoutubeEmbed({
      src: 'https://www.youtube-nocookie.com/embed/o0QGw1LZpxM',
      title: 'Diljit Dosanjh, G.O.A.T., en live sous la tente Sahara à Coachella 2023, sur la chaîne YouTube de Coachella'
    }),
    'oUbpmjOgmmU': articleVideoCollection({
      lang: 'fr',
      label: 'Coachella, les vidéos les plus vues',
      description: 'FISHER jouant « Losing It » en 2019, la vidéo la plus vue de la chaîne du festival, et le set de Fatboy Slim en 2026, près de deux heures, sur sa propre chaîne.',
      items: [
        articleVideoCard({youtubeId: 'oUbpmjOgmmU', genre: 'Coachella, 2019', artist: 'FISHER', title: 'Losing It, en live à Coachella 2019'}),
        articleVideoCard({youtubeId: 'fQqusBEnwM4', genre: 'Coachella, 2026', artist: 'Fatboy Slim', title: 'Coachella 2026'})
      ]
    }),
    'Table: attendance': articleTable({
      headers: ['Année', 'Format', 'Fréquentation', 'Recettes'],
      rows: [
        ['1999', 'Deux jours, octobre', 'environ 37 000 billets', '850 000 dollars de pertes'],
        ['2001', 'Un jour, avril', '32 000', 'pertes'],
        ['2002', 'Deux jours', 'plus de 55 000', 'presque à l’équilibre'],
        ['2004', 'Deux jours', '110 000', 'premier complet'],
        ['2006', 'Deux jours', 'environ 120 000', '9 millions de dollars'],
        ['2007', 'Trois jours', '186 000', '16,3 millions de dollars'],
        ['2010', 'Trois jours', 'environ 225 000', '21,7 millions de dollars'],
        ['2012', 'Deux week-ends', '158 387 payants', '47,3 millions de dollars'],
        ['2014', 'Deux week-ends', '96 500 par jour', '78,3 millions de dollars'],
        ['2017', 'Deux week-ends', '250 000', '114,6 millions de dollars'],
        ['2020 et 2021', '', 'Annulé à cause de la pandémie', '']
      ].map(row => row.map(escapeHtml))
    })
  }),

  sources: [
    {href: 'https://hospitality.coachella.com/', label: 'Coachella : dates 2027 et Enhanced Experiences'},
    {href: 'https://www.coachella.com/waitlist', label: 'Coachella : liste d’attente 2027'},
    {href: 'https://www.coachella.com/faq/', label: 'Coachella : page officielle d’aide et FAQ'},
    {href: 'https://www.indio.org/home/showpublisheddocument/1068/637874349323400000', label: 'Ville d’Indio : fréquentation des événements annuels'},
    {href: 'https://www.indio.org/home/showpublisheddocument/5517/638828367145700000', label: 'Ville d’Indio : brochure de développement économique'},
    {href: 'https://aegworldwide.com/press-center/press-releases/goldenvoice-assume-operations-empire-polo-club-long-term-agreement', label: 'AEG Worldwide : accord entre Goldenvoice et l’Empire Polo Club'},
    {href: 'https://www.goldenvoice.com/festivals/', label: 'Goldenvoice : festivals'},
    {href: 'https://www.elationlighting.com/blogs/news/1300-elation-lights-dazzle-coachella-2024', label: 'Elation Lighting : la tente Sahara à Coachella 2024'},
    {href: 'https://ca.billboard.com/business/touring/justin-bieber-coachella-radius-claus', label: 'Billboard Canada : la clause d’exclusivité de Coachella'},
    {href: 'https://www.youtube.com/@Coachella', label: 'Coachella sur YouTube (concerts et nombres de vues)'}
  ],

  bandcamp: {
    description: 'Acheter un morceau soutient directement mon travail.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks par thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 par thecatrave'}
    ]
  }
};
