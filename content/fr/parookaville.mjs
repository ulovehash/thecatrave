// French Parookaville guide. Structure and facts from the English page
// (parookaville-draft.md, parookaville-research.md, build-parookaville-article.mjs).
//
// French keywords, measured 2026-09-18 with keywords-explorer-matching-terms,
// country fr (keywords/fr-parookaville.json): parookaville 1,100 a month,
// parookaville festival 60, and parookaville 2027 as the next edition. The
// 2026 and 2025 editions are rejected in the map: dated.
//
// The images are the English guide's, in img/parookaville/, with translated
// captions; see home-articles.mjs for why a translation may reuse them.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, articleYoutubeEmbed, ownTrackListening
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption, className = 'wide-archive-image') => articleFigure({
  src: `img/parookaville/${name}-${width}.webp`,
  srcset: `img/parookaville/${name}-320.webp 320w, img/parookaville/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className
});

export default {
  lang: 'fr',
  name: 'fr-parookaville',
  file: 'fr/festival-parookaville.html',
  draft: 'fr/parookaville-draft.md',
  canonical: 'https://thecatrave.com/fr/festival-parookaville',
  englishPath: '/parookaville-festival',
  ogImage: 'https://thecatrave.com/img/og/parookaville.jpg',
  bodyClass: 'article-page parookaville-page',

  title: 'Parookaville 2027 : site, fréquentation, histoire et musique',
  description: 'Parookaville est le plus grand festival de musique électronique d’Allemagne, chaque juillet à l’aéroport de Weeze. Site, dates, fréquentation et musique.',
  datePublished: '2026-09-18',
  dateModified: '2026-09-18',
  dateLabel: '18 septembre 2026',

  heroKicker: 'Parookaville',
  heroTitle: 'Parookaville Festival',
  deck: 'Un festival mis en scène comme une ville, trois jours chaque juillet sur un ancien aérodrome de la RAF à Weeze, près de la frontière néerlandaise. Où il a lieu, sa taille, qui le dirige et ce qui se joue loin de la Mainstage.',
  answerLabel: 'Qu’est-ce que Parookaville',
  breadcrumbName: 'Parookaville Festival',

  answerSection: 'Réponse',
  introSection: 'Introduction',
  introTitle: 'Un festival mis en scène comme une ville.',
  faqSection: 'FAQ',
  faqLabel: 'Questions fréquentes',
  faqTitle: 'Questions fréquentes sur Parookaville.',
  ownSetAfter: 'history',

  sections: [
    {id: 'where', heading: 'Où a lieu Parookaville', title: 'Où a lieu Parookaville.', subsections: ['parookaville-2027']},
    {id: 'how-big', heading: 'La taille de Parookaville : la fréquentation', title: 'La taille de Parookaville : la fréquentation.'},
    {id: 'history', heading: 'Une courte histoire, et à qui appartient Parookaville', title: 'Une courte histoire, et à qui appartient Parookaville.'},
    {id: 'famous', heading: 'Pourquoi Parookaville est célèbre', title: 'Pourquoi Parookaville est célèbre.'},
    {id: 'music', heading: 'Quelle musique on y joue vraiment', title: 'Quelle musique on y joue vraiment.', kicker: 'La musique'},
    {id: 'from-home', heading: 'Écouter Parookaville depuis chez soi', title: 'Écouter Parookaville depuis chez soi.'}
  ],

  media: ({lang}) => ({
    // The owner's own music inside the text (owner, 2026-09-21: Berlin Race
    // 1909 on the German pages, Dégénération on the French, and art deco with
    // late summer cloud dance in the drum and bass guides).
    'thecatrave degeneration': ownTrackListening('degeneration', 'Loin des grandes scènes : la voix de Mylène Farmer sur des breaks, entre dubstep et UK garage. Mon propre remix.', lang),
    'Parookaville stage construction': figure('stage-build-2016', 1200, 752,
      'Une façade de scène faite de fausses maisons de ville avec des échafaudages et une cheminée rouge et blanche, devant des grues et des chariots élévateurs, sur le site de Parookaville en 2016',
      'Une scène de Parookaville en construction sur l’aérodrome en juillet 2016, deuxième année du festival : fausses maisons de ville, cheminée et échafaudages. Photo : Tama66, CC0.'),
    'ParookavilleMainLuftbild22': figure('mainstage-aerial-2022', 1200, 900,
      'La Mainstage de Parookaville vue du ciel en 2022, une scène rouge et or avec le public devant, derrière des tentes, des champs et des éoliennes à l’horizon',
      'La Mainstage de Parookaville vue du ciel en juillet 2022, première édition après la pandémie. La scène est reconstruite chaque année selon un nouveau dessin. Photo : Timo, CC BY-SA 4.0.'),
    'Parookaville 2017 Regen': figure('rain-2017', 640, 1230,
      'Un site de festival inondé au crépuscule, derrière l’eau les lettres PAROOKAVILLE et des guirlandes lumineuses sur des mâts',
      'De l’eau stagnante devant l’enseigne Parookaville en 2017, l’année où la pluie a bloqué des voitures sur le camping. Photo : Ss279, CC BY-SA 4.0.',
      'archive-image'),
    'Townhall Parookaville Festival': figure('town-hall-2024', 1200, 675,
      'La mairie de Parookaville, un bâtiment à coupole avec des cornes sur le toit et l’enseigne lumineuse TOWNHALL au-dessus du point info et du bureau d’enregistrement',
      'La mairie de Parookaville en 2024, où les citoyens font tamponner leur passeport de festival. Photo : Timolius, CC BY-SA 4.0.'),
    'Cloud Factory 2022': figure('cloud-factory-2022', 1200, 900,
      'Une foule dense sous une structure en treillis éclairée de faisceaux bleus et blancs dans le hangar de la Cloud Factory en 2022',
      'La Cloud Factory en 2022, une scène couverte dans l’un des anciens hangars de l’aérodrome. Photo : Timo, CC BY-SA 4.0.'),
    'DJ Hardwell performing at Parookaville 2024': figure('hardwell-2024', 1200, 800,
      'Hardwell derrière les platines à Parookaville en 2024, sous une lumière verte, une main levée vers le public',
      'Hardwell à Parookaville en 2024. Tête d’affiche en 2018 et 2023, il était de nouveau à l’affiche en 2025 et 2026. Photo : Rudgrcom, CC BY 4.0.'),
    'QeifZyGcZmY': articleYoutubeEmbed({
      src: 'https://www.youtube-nocookie.com/embed/QeifZyGcZmY',
      title: 'Paul Elstak à Parookaville 2022, sur la chaîne YouTube de PAROOKAVILLE'
    }),
    'lnOjzIlm1_g': articleVideoCollection({
      lang: 'fr',
      label: 'Parookaville, les sets les plus vus',
      description: 'W&W en 2022, le set le plus vu de la chaîne du festival, et Steve Aoki en 2025 sur sa propre chaîne, lui qui était déjà à l’affiche du premier Parookaville en 2015.',
      items: [
        articleVideoCard({youtubeId: 'lnOjzIlm1_g', genre: 'Parookaville, 2022', artist: 'W&W', title: 'DJ set, Parookaville 2022'}),
        articleVideoCard({youtubeId: 'rWcNs6LcNpM', genre: 'Parookaville, 2025', artist: 'Steve Aoki', title: 'DJ set, Parookaville 2025'})
      ]
    }),
    'Table: attendance': articleTable({
      headers: ['Année', 'Billets vendus', 'Entrées au total'],
      rows: [
        ['2015', '25 000', '40 000'],
        ['2016', '50 000', '80 000'],
        ['2017', '80 000', '180 000'],
        ['2018', '80 000', '180 000'],
        ['2019', '85 000', '210 000'],
        ['2020', 'aucun', 'Annulé ; LIVE from the City, 100 invités par nuit'],
        ['2021', 'aucun', 'Annulé'],
        ['2022', '75 000', '225 000'],
        ['2023', '75 000', '225 000'],
        ['2024', '75 000', '225 000']
      ].map(row => row.map(escapeHtml))
    })
  }),

  // The same sources as the English page, URL for URL. Only the labels are
  // translated: a translated guide stands on the evidence the original was
  // checked against, and a new URL here would be a claim nobody verified.
  sources: [
    {href: 'https://en.wikipedia.org/wiki/Parookaville', label: 'Wikipedia  : Parookaville (anglais)'},
    {href: 'https://de.wikipedia.org/wiki/Parookaville', label: 'Wikipedia  : Parookaville (allemand)'},
    {href: 'https://en.wikipedia.org/wiki/Weeze_Airport', label: 'Wikipedia  : aéroport de Weeze (anglais)'},
    {href: 'https://www.parookaville.com/en/experience/the-city-of-dreams', label: 'Parookaville : The City of Dreams'},
    {href: 'https://www.parookaville.com/de/experience/stages', label: 'Parookaville  : les scènes'},
    {href: 'https://www.parookaville.com/en/tickets', label: 'Parookaville  : billets 2027'},
    {href: 'https://www.parookaville.com/en/future-city', label: 'Parookaville  : Future City et billets numériques'},
    {href: 'https://www.parookaville.com/en/data-privacy/', label: 'Parookaville  : contrôle d’âge et d’identité'},
    {href: 'https://www.parookaville.com/de/impressum', label: 'Parookaville  : mentions légales'},
    {href: 'https://www.parookaville.com/en/artist/pendulum', label: 'Parookaville : Pendulum'},
    {href: 'https://news.pollstar.com/2019/08/07/superstruct-entertainment-invests-in-german-parookaville-promoter-next-events/', label: 'Pollstar : Superstruct Entertainment invests in German Parookaville promoter Next Events'},
    {href: 'https://media.kkr.com/news-details?news_id=d3c327f2-83d8-449a-b732-49885585be2f&amp;type=1', label: 'KKR : CVC joins KKR in the acquisition of Superstruct Entertainment'},
    {href: 'https://meyersound.com/news/parookaville-2024/', label: 'Meyer Sound : Parookaville 2024'},
    {href: 'https://www1.wdr.de/nrw/niederrhein/kreis-kleve/bilanz-parookaville-festival-2026-weeze-100.html', label: 'WDR  : bilan de Parookaville 2026'},
    {href: 'https://news.pollstar.com/2026/07/21/german-fests-lollapalooza-berlin-parookaville-hail-successful-editions-highfield-preps-for-its-last/', label: 'Pollstar  : Parookaville 2026 complet, plus de 300 artistes'},
    {href: 'https://www.fazemag.de/das-war-parookaville-2017/', label: 'FAZE Magazin : Das war Parookaville 2017'},
    {href: 'https://djmag.com/top100festivals/2026/10/parookaville', label: 'DJ Mag : Top 100 Festivals 2026, Parookaville'},
    {href: 'https://en.wikipedia.org/wiki/Paul_Elstak', label: 'Wikipedia : Paul Elstak'},
    {href: 'https://en.wikipedia.org/wiki/W%26W', label: 'Wikipedia : W&W'}
  ],

  bandcamp: {
    description: 'Parookaville est loin du breakbeat que je fais moi-même. Acheter un morceau soutient directement mon travail.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks par thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 par thecatrave'}
    ]
  }
};
