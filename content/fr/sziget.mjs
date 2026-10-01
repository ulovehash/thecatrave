// French Sziget guide. Structure and facts from the English page
// (sziget-festival-draft.md, sziget-festival-research.md,
// build-sziget-festival-article.mjs).
//
// French keywords (keywords/fr-sziget.json): Keyword Planner, France,
// 2026-10-01: sziget festival in the 1K to 10K bucket (no exact volume, the
// account has no ad spend). Wording checked in Google fr-FR the same day:
// People also ask is "Où est le Sziget Festival", "Quelle est la date" and
// "Quel est le plus gros festival d'Europe"; the page answers the first two
// in its FAQ.
//
// The images are the English guide's, in img/sziget/, with translated
// captions; see home-articles.mjs for why a translation may reuse them.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, ownTrackListening
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption, className = 'wide-archive-image') => articleFigure({
  src: `img/sziget/${name}-${width}.webp`,
  srcset: `img/sziget/${name}-320.webp 320w, img/sziget/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className
});

export default {
  lang: 'fr',
  name: 'fr-sziget',
  file: 'fr/festival-sziget.html',
  draft: 'fr/sziget-draft.md',
  canonical: 'https://thecatrave.com/fr/festival-sziget',
  englishPath: '/sziget-festival',
  ogImage: 'https://thecatrave.com/img/og/sziget.jpg',
  bodyClass: 'article-page sziget-festival-page',

  title: 'Sziget Festival 2027 : dates, musique, camping et accès',
  description: 'Le Sziget Festival 2027 se tient du 10 au 14 août sur l’île d’Óbuda. Musique, histoire, camping, accès par la H5 et ce qui est confirmé.',
  datePublished: '2026-10-01',
  dateModified: '2026-10-01',
  dateLabel: '1er octobre 2026',

  heroKicker: 'Sziget',
  heroTitle: 'Sziget Festival',
  deck: 'Cinq jours sur l’île d’Óbuda : pop, rock et hip-hop à côté de scènes de club, de théâtre, de cirque et d’une liaison ferroviaire vers Budapest.',
  answerLabel: 'Qu’est-ce que le Sziget Festival',
  breadcrumbName: 'Sziget Festival',

  answerSection: 'Réponse',
  introSection: 'Introduction',
  introTitle: 'Un festival aussi grand qu’un quartier éphémère de Budapest.',
  faqSection: 'FAQ',
  faqLabel: 'Questions fréquentes',
  faqTitle: 'Questions fréquentes sur le Sziget Festival.',
  ownSetAfter: 'history',

  sections: [
    {id: 'sziget-2027', heading: 'Sziget Festival 2027', title: 'Sziget Festival 2027.', kicker: 'Dates et lieu'},
    {id: 'what-is-sziget', heading: 'Ce qu’est vraiment le Sziget', title: 'Ce qu’est vraiment le Sziget.'},
    {id: 'music', heading: 'Quelle musique on joue au Sziget', title: 'Quelle musique on joue au Sziget.', kicker: 'La musique'},
    {id: 'history', heading: 'Du Diáksziget au Sziget', title: 'Du Diáksziget au Sziget.'},
    {id: 'camping', heading: 'Camper ou loger à Budapest', title: 'Camper ou loger à Budapest.'},
    {id: 'planning', heading: 'Préparer l’île', title: 'Préparer l’île.'}
  ],

  media: ({lang}) => ({
    'thecatrave degeneration': ownTrackListening('degeneration', 'Loin des grandes scènes : la voix de Mylène Farmer sur des breaks, entre dubstep et UK garage. Mon propre remix.', lang),
    'Table: Faits': articleTable({
      headers: ['Fait', 'Information actuelle'],
      rows: [
        ['Dates', 'du 10 au 14 août 2027'],
        ['Lieu', 'Île d’Óbuda, Budapest'],
        ['Format', 'Festival de musique et d’arts pluridisciplinaire de cinq jours'],
        ['Affiche 2027', 'Pas encore annoncée'],
        ['Arrêt de train le plus proche', 'Filatorigát sur la H5 (HÉV)'],
        ['Camping', 'Avec un billet multi-jours éligible ; formules 2027 à venir']
      ].map(row => row.map(escapeHtml)),
      label: 'Sziget Festival 2027 : les faits'
    }),
    'Image: island': figure('island-2022', 1200, 900,
      'Vue aérienne du Sziget Festival sur l’île d’Óbuda à Budapest',
      'L’île d’Óbuda pendant le Sziget 2022. Les scènes, les rues éphémères et les petits lieux de spectacle occupent une longue île du Danube. Photo : Elekes Andor, CC BY-SA 4.0.'),
    'Image: stage': figure('stage-2014', 1200, 795,
      'Public face à la scène principale du Sziget Festival en 2014',
      'La scène principale du Sziget en 2014. Le festival a dépassé de loin le Diáksziget à deux scènes de 1993 tout en restant sur la même île. Photo : Steven Lek, CC BY-SA 4.0.'),
    'uOAywzuvfzg': articleVideoCollection({
      lang: 'fr',
      label: 'Sziget, sets de club au Colosseum',
      description: 'Eelke Kleijn au Colosseum en 2022, le set électronique le plus vu que j’aie trouvé sur la chaîne du Sziget (128 000 vues), et Shimza au Colosseum en 2025.',
      items: [
        articleVideoCard({youtubeId: 'uOAywzuvfzg', genre: 'Sziget, 2022', artist: 'Eelke Kleijn', title: 'Live au Colosseum'}),
        articleVideoCard({youtubeId: 'KZvARnaDTEo', genre: 'Sziget, 2025', artist: 'Shimza', title: 'Live au Sziget Festival 2025'})
      ]
    })
  }),

  // The English page's sources, URL for URL, with translated labels.
  sources: [
    {href: 'https://szigetfestival.com/en/festival-info', label: 'Sziget : informations officielles et dates 2027 (anglais)'},
    {href: 'https://szigetfestival.com/en/travel', label: 'Sziget : informations officielles de voyage (anglais)'},
    {href: 'https://szigetfestival.com/en/accommodation', label: 'Sziget : informations officielles sur l’hébergement (anglais)'},
    {href: 'https://szigetfestival.com/en/about-us', label: 'Sziget : histoire du festival (anglais)'},
    {href: 'https://commons.wikimedia.org/wiki/File:Sziget_2022_(1).jpg', label: 'Wikimedia Commons : photo du Sziget 2022 et licence'}
  ],

  bandcamp: {
    description: 'Le Sziget est plus large qu’un seul style électronique. Ces sorties de thecatrave se rapprochent de son côté club, et en acheter une soutient la musique et cette écriture indépendante.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks par thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 par thecatrave'}
    ]
  }
};
