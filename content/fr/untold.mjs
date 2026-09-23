// French Untold guide. Structure and facts from the English page
// (untold-draft.md, untold-research.md, build-untold-article.mjs); the German
// translation (content/de/untold.mjs) came first.
//
// French keywords (keywords/fr-untold.json): untold festival 450 a month in
// France, traffic potential 250 (TRANSLATION-RESEARCH.md, stage 1 and French
// stage 2). The wording was checked in the Bing fr-FR results on 2026-09-23
// (Google answered with a bot check), no Ahrefs units spent: French titles
// write "festival Untold", "festival en Roumanie" and name Cluj; the related
// searches add "untold festival romania". Dracula Untold, the film, is in the
// same results and is rejected in the map.
//
// The images are the English guide's, in img/untold/, with translated
// captions; see home-articles.mjs for why a translation may reuse them.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, articleYoutubeEmbed, ownTrackListening
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption, className = 'wide-archive-image') => articleFigure({
  src: `img/untold/${name}-${width}.webp`,
  srcset: `img/untold/${name}-320.webp 320w, img/untold/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className
});

export default {
  lang: 'fr',
  name: 'fr-untold',
  file: 'fr/festival-untold.html',
  draft: 'fr/untold-draft.md',
  canonical: 'https://thecatrave.com/fr/festival-untold',
  englishPath: '/untold-festival',
  ogImage: 'https://thecatrave.com/img/og/untold.jpg',
  bodyClass: 'article-page untold-page',

  title: 'Untold Festival 2027 : le festival de Cluj, en Roumanie',
  description: 'Untold Festival a lieu chaque mois d’août à Cluj-Napoca, en Transylvanie. Dates 2027, lieu, fréquentation, organisateurs et la musique qu’on y entend.',
  datePublished: '2026-09-23',
  dateModified: '2026-09-23',
  dateLabel: '23 septembre 2026',

  heroKicker: 'Untold',
  heroTitle: 'Untold Festival',
  deck: 'Quatre jours chaque mois d’août dans un stade et un parc de Transylvanie. Quand a lieu Untold 2027, où il se tient, sa taille, qui le dirige et ce qui se joue à côté de la scène principale.',
  answerLabel: 'Qu’est-ce que Untold Festival',
  breadcrumbName: 'Untold Festival',

  answerSection: 'Réponse',
  introSection: 'Introduction',
  introTitle: 'Un festival construit pour l’année d’une ville.',
  faqSection: 'FAQ',
  faqLabel: 'Questions fréquentes',
  faqTitle: 'Questions fréquentes sur Untold Festival.',
  ownSetAfter: 'history',

  sections: [
    {id: 'untold-2027', heading: 'Untold 2027 : les dates et la Star Edition', title: 'Untold 2027 : les dates et la Star Edition.'},
    {id: 'where', heading: 'Où a lieu Untold', title: 'Où a lieu Untold.', subsections: ['beyond-cluj']},
    {id: 'how-big', heading: 'Quelle est la taille d’Untold', title: 'Quelle est la taille d’Untold.'},
    {id: 'history', heading: 'Une courte histoire, et qui dirige Untold', title: 'Une courte histoire, et qui dirige Untold.'},
    {id: 'famous', heading: 'Pourquoi Untold est célèbre', title: 'Pourquoi Untold est célèbre.'},
    {id: 'music', heading: 'Quelle musique on y entend vraiment', title: 'Quelle musique on y entend vraiment.', kicker: 'La musique'},
    {id: 'from-home', heading: 'Écouter Untold depuis chez soi', title: 'Écouter Untold depuis chez soi.'}
  ],

  media: ({lang}) => ({
    // The owner's own music inside the text (owner, 2026-09-21: Berlin Race
    // 1909 on the German pages, Dégénération on the French, and art deco with
    // late summer cloud dance in the drum and bass guides).
    'thecatrave degeneration': ownTrackListening('degeneration', 'Loin des grandes scènes : la voix de Mylène Farmer sur des breaks, entre dubstep et UK garage. Mon propre remix.', lang),
    'Cluj-Napoca Cluj Arena 1': figure('cluj-arena', 1200, 799,
      'L’intérieur de la Cluj Arena, un stade de football ovale au toit incurvé au-dessus de sièges gris, d’une pelouse verte et d’une piste, sous un ciel bleu',
      'La Cluj Arena, le stade de football de 30 355 places qui accueille la scène principale d’Untold, un jour ordinaire de septembre 2014. Photo : Валерий Дед, CC BY 3.0.'),
    'Untold Festival, main stage': figure('main-stage-2015', 960, 407,
      'Un large panorama de nuit de la Cluj Arena à Untold 2015, la pelouse et toutes les tribunes pleines, la scène principale éclairée tout à gauche',
      'La scène principale dans la Cluj Arena lors du premier Untold, en 2015, avec la pelouse et les tribunes pleines. Photo : Travelcristi, CC BY-SA 4.0.'),
    'Untold Festival, RaveNationCZ': figure('wolf-stage-2018', 1200, 900,
      'Le sommet de la scène principale d’Untold en 2018, deux immenses têtes de loup peintes, l’une bleue, l’autre rose, au-dessus d’une arche dorée ornée, sur un ciel clair',
      'La scène principale en 2018, l’édition que le festival a intitulée Wolf Spirit. Photo : RaveNationCZ, CC BY-SA 4.0.'),
    'Untold2019 main stage': figure('main-stage-2019', 1200, 900,
      'Une foule dense, téléphones levés, devant la scène principale violette et dorée d’Untold de nuit en 2019, avec les tribunes pleines du stade derrière',
      'La scène principale de nuit en 2019, l’édition intitulée The Codex of Magic, avec les tribunes du stade pleines derrière la pelouse. Photo : VladRusuRomania, CC BY-SA 4.0.'),
    'Untold2019 fans': figure('fans-flag-2019', 1200, 560,
      'Un groupe de festivaliers avec un drapeau roumain devant la scène principale d’Untold 2019, en plein jour',
      'Des festivaliers avec un drapeau roumain devant la scène principale de 2019. Photo : VladRusuRomania, CC BY-SA 4.0.'),
    'o1u2sT8ah58': articleYoutubeEmbed({
      src: 'https://www.youtube-nocookie.com/embed/o1u2sT8ah58',
      title: 'Aftermovie officiel d’UNTOLD Festival 2018, sur la chaîne YouTube d’UNTOLD'
    }),
    'rk3SYpd5HSc': articleYoutubeEmbed({
      src: 'https://www.youtube-nocookie.com/embed/rk3SYpd5HSc',
      title: 'Set techno de Pan-Pot à Untold 2018, sur la chaîne YouTube de Mixmag'
    }),
    'DjQCkSSblIk': articleVideoCollection({
      lang: 'fr',
      label: 'Untold, les sets les plus vus',
      description: 'Le set de cinq heures et demie d’Armin van Buuren sur la scène principale en 2017, le set d’Untold le plus vu sur toutes les chaînes, et le set de tête d’affiche de Steve Aoki lors de l’édition de septembre 2021, après la pandémie.',
      items: [
        articleVideoCard({youtubeId: 'DjQCkSSblIk', genre: 'Untold, 2017', artist: 'Armin van Buuren', title: 'Live à Untold Festival 2017'}),
        articleVideoCard({youtubeId: '402OrPvfYlU', genre: 'Untold, 2021', artist: 'Steve Aoki', title: 'Set de tête d’affiche à Untold 2021'})
      ]
    }),
    'Table: fréquentation': articleTable({
      headers: ['Année', 'Dates', 'Entrées'],
      rows: [
        ['2015', '30 juillet au 2 août', '240 000'],
        ['2016', '4 au 7 août', '300 000'],
        ['2017', '3 au 6 août', '340 000'],
        ['2018', '2 au 5 août', 'plus de 355 000'],
        ['2019', '1er au 4 août', '370 000'],
        ['2020', '', 'Annulé à cause de la pandémie'],
        ['2021', '9 au 12 septembre', '265 000'],
        ['2022', '4 au 7 août', '360 000'],
        ['2023', '3 au 6 août', '420 000'],
        ['2024', '8 au 11 août', '427 000'],
        ['2025', '7 au 10 août', '470 000'],
        ['2026', '6 au 9 août', 'plus de 500 000']
      ].map(row => row.map(escapeHtml))
    })
  }),

  // The English page's sources, URL for URL, with translated labels.
  sources: [
    {href: 'https://en.wikipedia.org/wiki/Untold_Festival', label: 'Wikipedia : Untold Festival (en anglais)'},
    {href: 'https://ro.wikipedia.org/wiki/Untold_Festival', label: 'Wikipedia : Untold Festival (en roumain)'},
    {href: 'https://en.wikipedia.org/wiki/Cluj_Arena', label: 'Wikipedia : Cluj Arena'},
    {href: 'https://en.wikipedia.org/wiki/BTarena', label: 'Wikipedia : BTarena'},
    {href: 'https://web.archive.org/web/20230205200231/https://republica.ro/cum-a-devenit-romania-cool-pentru-cei-mai-mari-dj-ai-lumii-fondatorul-untold-despre-povestea-nespusa-a', label: 'Republica : entretien avec Bogdan Buta, fondateur d’UNTOLD (en roumain, archivé)'},
    {href: 'https://news.pollstar.com/2026/08/10/untold-festival-romania-counts-more-than-500000-visitors-across-four-days/', label: 'Pollstar : Untold compte plus de 500 000 visiteurs sur quatre jours'},
    {href: 'https://untold.com/', label: 'UNTOLD : site officiel'},
    {href: 'https://tickets.untold.com/?_lang=en', label: 'UNTOLD : billetterie officielle pour 2027'},
    {href: 'https://www.untold.com/info/547d8741-5739-485b-a1a4-85fb0552f93c', label: 'UNTOLD : conditions officielles du festival 2027'},
    {href: 'https://untold.com/news/c313b7e0-60c6-4968-a63e-44126e59a43c', label: 'UNTOLD : histoire officielle du festival et fréquentation'},
    {href: 'https://invest.untold.com/', label: 'UNTOLD : page investisseurs et direction'},
    {href: 'https://djmag.com/top100festivals/2026/3/untold-festival', label: 'DJ Mag : Untold Festival, Top 100 Festivals 2026'},
    {href: 'https://djmag.com/news/armin-van-buuren-shares-full-seven-hour-untold-festival-set-watch', label: 'DJ Mag : Armin van Buuren publie son set de sept heures à Untold'},
    {href: 'https://www.arminvanbuuren.com/videos/armin-van-buuren-live-at-untold-festival-2017-55-hours-set/', label: 'Armin van Buuren : Live at Untold Festival 2017 (5,5 heures)'},
    {href: 'https://www.digi24.ro/stiri/actualitate/evenimente/curtea-de-conturi-untold-finantat-ilegal-de-autoritati-542323', label: 'Digi24 : la Cour des comptes, UNTOLD financé illégalement par les autorités (en roumain)'},
    {href: 'https://www.researchgate.net/publication/335778193_The_UNTOLD_story_Event_tourism%27s_negative_impact_on_residents%27_community_life_and_well-being', label: 'Moisescu et al. : The UNTOLD story, Worldwide Hospitality and Tourism Themes, 2019'}
  ],

  bandcamp: {
    description: 'Les scènes techno et trance d’Untold sont loin des breaks d’où vient ma propre musique, mais les deux viennent de la même rave. Acheter un morceau soutient directement mon travail.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks par thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 par thecatrave'}
    ]
  }
};
