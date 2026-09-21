// French Mysteryland guide. Structure and facts from the English page
// (mysteryland-draft.md, mysteryland-research.md, build-mysteryland-article.mjs).
//
// French keywords, measured 2026-09-18 with keywords-explorer-matching-terms,
// country fr (keywords/fr-mysteryland.json): mysteryland 1,100 a month,
// mysteryland festival 70, mysteryland 2027 60. The 2026 and 2025 editions are
// rejected in the map: dated.
//
// The images are the English guide's, in img/mysteryland/, with translated
// captions; see home-articles.mjs for why a translation may reuse them.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, articleYoutubeEmbed, ownTrackListening
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption, className = 'wide-archive-image') => articleFigure({
  src: `img/mysteryland/${name}-${width}.webp`,
  srcset: `img/mysteryland/${name}-320.webp 320w, img/mysteryland/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className
});

export default {
  lang: 'fr',
  name: 'fr-mysteryland',
  file: 'fr/festival-mysteryland.html',
  draft: 'fr/mysteryland-draft.md',
  canonical: 'https://thecatrave.com/fr/festival-mysteryland',
  englishPath: '/mysteryland-festival',
  ogImage: 'https://thecatrave.com/img/og/mysteryland.jpg',
  bodyClass: 'article-page mysteryland-page',

  title: 'Mysteryland 2027 : dates, site, histoire et musique',
  description: 'Mysteryland est un festival de musique électronique à Haarlemmermeer. Dates 2027, pourquoi il n’a pas lieu en 2026, le site, la fréquentation et la musique.',
  datePublished: '2026-09-18',
  dateModified: '2026-09-18',
  dateLabel: '18 septembre 2026',

  heroKicker: 'Mysteryland',
  heroTitle: 'Mysteryland Festival',
  deck: 'Une rave de 1993 qui s’est installée sur l’ancien site de la Floriade, à Haarlemmermeer. Quand il revient en 2027, pourquoi il n’a pas lieu en 2026, sa taille et ce qui passe sur ses scènes.',
  answerLabel: 'Qu’est-ce que Mysteryland',
  breadcrumbName: 'Mysteryland Festival',

  answerSection: 'Réponse',
  introSection: 'Introduction',
  introTitle: 'Plus ancien que la musique qu’il programme.',
  faqSection: 'FAQ',
  faqLabel: 'Questions fréquentes',
  faqTitle: 'Questions fréquentes sur Mysteryland.',
  ownSetAfter: 'history',

  sections: [
    {id: 'mysteryland-2027', heading: 'Mysteryland 2027, et pourquoi il n’y a pas d’édition 2026', title: 'Mysteryland 2027, et pourquoi il n’y a pas d’édition 2026.'},
    {id: 'where', heading: 'Où a lieu Mysteryland', title: 'Où a lieu Mysteryland.'},
    {id: 'how-big', heading: 'La taille de Mysteryland', title: 'La taille de Mysteryland.'},
    {id: 'history', heading: 'Une courte histoire, et à qui appartient Mysteryland', title: 'Une courte histoire, et à qui appartient Mysteryland.', subsections: ['usa-chile']},
    {id: 'famous', heading: 'Pourquoi Mysteryland est célèbre', title: 'Pourquoi Mysteryland est célèbre.'},
    {id: 'music', heading: 'Quelle musique on y joue vraiment', title: 'Quelle musique on y joue vraiment.', kicker: 'La musique'},
    {id: 'from-home', heading: 'Écouter Mysteryland depuis chez soi', title: 'Écouter Mysteryland depuis chez soi.'}
  ],

  media: ({lang}) => ({
    // The owner's own music inside the text (owner, 2026-09-21: Berlin Race
    // 1909 on the German pages, Dégénération on the French, and art deco with
    // late summer cloud dance in the drum and bass guides).
    'thecatrave degeneration': ownTrackListening('degeneration', 'Loin des grandes scènes : la voix de Mylène Farmer sur des breaks, entre dubstep et UK garage. Mon propre remix.', lang),
    'Main stage by the lake': figure('site-aerial-2018', 1200, 675,
      'Mysteryland 2018 vu du ciel : une immense grande scène décorée au bord d’un lac, une foule dense devant, des bois, des tentes et des chemins autour',
      'La grande scène au bord du lac, sur l’ancien site de la Floriade, vue du ciel à Mysteryland 2018. Photo : Niels de Vries, CC BY-SA 4.0.'),
    'View from the pyramid': figure('floriade-pano-2007', 1200, 397,
      'Un large panorama sur un site de festival verdoyant avec un grand chapiteau rouge, des gens sur les chemins, des étangs et une rangée d’arbres derrière',
      'Mysteryland en 2007, vu du sommet de la pyramide d’herbe du site de la Floriade.'),
    'Cocoon area': figure('cocoon-2019', 1200, 900,
      'Une scène sous de grands arbres, encadrée de trois immenses anneaux tressés, devant des gens qui dansent au soleil sur un plancher en bois',
      'L’espace Cocoon de Sven Väth dans les arbres à Mysteryland 2019, dix-sept ans après son premier espace au festival. Photo : Gerard Koymans, CC BY-SA 4.0.'),
    'Hardwell at Mysteryland 2014': figure('hardwell-2014', 1200, 500,
      'Hardwell aux platines, les deux bras levés, des flammes derrière lui et le public de nuit au loin',
      'Hardwell à Mysteryland en août 2014. Il était de retour sur la grande scène en 2023. Photo : Nicoalsemgeest.com, CC BY 2.0.'),
    'Q-dance stage': figure('q-dance-2019', 1200, 900,
      'La scène Q-dance à Mysteryland 2019, une structure ailée avec une tête de mort au centre, vue d’une pente herbeuse bondée',
      'La scène hardstyle de Q-dance à Mysteryland 2019, avec le public sur la pente au-dessus. Photo : Gerard Koymans, CC BY-SA 4.0.'),
    'z4cO-cpjPoU': articleYoutubeEmbed({
      src: 'https://www.youtube-nocookie.com/embed/z4cO-cpjPoU',
      title: 'Mysteryland 2025, Sunday Drone Endshow, sur la chaîne YouTube de Mysteryland'
    }),
    '_8acHa-APa8': articleVideoCollection({
      lang: 'fr',
      label: 'La même grande scène, un an plus tard',
      description: 'Hardwell en 2023 sur la grande scène de Mysteryland et Charlotte de Witte en 2024 sur la même scène, les deux sets les plus vus parmi les mises en ligne récentes du festival.',
      items: [
        articleVideoCard({youtubeId: '_8acHa-APa8', genre: 'Main Stage, 2023', artist: 'Hardwell', title: 'Main Stage, Mysteryland 2023'}),
        articleVideoCard({youtubeId: 'mao2oVsWSxA', genre: 'Mainstage, 2024', artist: 'Charlotte de Witte', title: 'Mainstage, Mysteryland 2024'})
      ]
    }),
    'Table: history': articleTable({
      headers: ['Année', 'Lieu', 'Fréquentation'],
      rows: [
        ['1993', 'Midland Circuit, Lelystad', 'non publiée'],
        ['1994', 'Maasvlakte, Rotterdam', 'non publiée'],
        ['1995', 'pas de festival', ''],
        ['1996', 'Aérodrome d’Eindhoven', '25 000'],
        ['1997', 'Bussloo', '25 000'],
        ['1998', 'Lingebos', '25 000'],
        ['1999 et 2000', 'Bussloo', '35 000'],
        ['2001', 'Six Flags Holland', 'non publiée'],
        ['2002', 'Ruigoord, Amsterdam', '20 000'],
        ['2003', 'Site de la Floriade, Haarlemmermeer', '40 000'],
        ['2004 et 2005', 'Site de la Floriade', 'plus de 100 000 sur les deux années'],
        ['2007 à 2009', 'Site de la Floriade', 'plus de 60 000 par an'],
        ['2013', 'Site de la Floriade', '60 000, complet'],
        ['2019', 'Site de la Floriade', 'plus de 100 000 sur le week-end'],
        ['2020 et 2021', 'aucun', 'annulé à cause de la pandémie'],
        ['2025', 'Site de la Floriade', 'dernière édition sous sa forme actuelle'],
        ['2026', 'aucun', 'en pause'],
        ['2027', 'Haarlemmermeer', 'daté du 27 au 29 août']
      ].map(row => row.map(escapeHtml))
    })
  }),

  // The English page's sources, URL for URL, with translated labels.
  sources: [
    {href: 'https://nl.wikipedia.org/wiki/Mysteryland', label: 'Wikipedia  : Mysteryland (néerlandais)'},
    {href: 'https://en.wikipedia.org/wiki/Mysteryland', label: 'Wikipedia  : Mysteryland (anglais)'},
    {href: 'https://en.wikipedia.org/wiki/ID%26T', label: 'Wikipedia : ID&T'},
    {href: 'https://www.mysteryland.nl/this-is-mysteryland', label: 'Mysteryland  : 32 ans et après'},
    {href: 'https://www.mysteryland.nl/info', label: 'Mysteryland  : FAQ (dates 2027, lieu, âge minimum)'},
    {href: 'https://the-media-nanny_5.prowly.com/415471-mysteryland-celebrates-final-edition-in-its-current-iconic-form-next-month-set-to-return-in-2027-with-a-new-concept', label: 'Mysteryland, communiqué  : dernière édition sous sa forme actuelle, retour en 2027 avec un nouveau concept'},
    {href: 'https://www.digitalmusicnews.com/2025/07/24/mysteryland-announces-break-for-2026-will-return-in-2027/', label: 'Digital Music News  : Mysteryland en pause en 2026, retour en 2027'},
    {href: 'https://www.festivalinsights.com/2025/08/mysteryland-announces-return-in-2027-after-creative-break/', label: 'Festival Insights  : retour en 2027 après une pause créative'},
    {href: 'https://visithaarlemmermeer.nl/en/zien-doen/festival-events/mysteryland', label: 'Visit Haarlemmermeer  : Mysteryland, le plus grand festival dance des Pays-Bas'},
    {href: 'https://www.spin.com/2013/08/mysteryland-festival-woodstock-site-us-original/', label: 'Spin  : Mysteryland sur le site de Woodstock'},
    {href: 'https://www.billboard.com/music/music-news/mysteryland-usa-2017-canceled-lcd-soundsystem-geazy-major-lazer-woodstock-7760507/', label: 'Billboard  : Mysteryland USA 2017 annulé'},
    {href: 'https://www.youtube.com/@mysteryland', label: 'Mysteryland sur YouTube'}
  ],

  bandcamp: {
    description: 'Si ce guide vous a été utile : ma propre musique est sur Bandcamp. Acheter un morceau soutient directement mon travail.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks par thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 par thecatrave'}
    ]
  }
};
