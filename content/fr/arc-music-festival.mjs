// French ARC Music Festival guide. Structure, facts and media from the English page
// (arc-music-festival-draft.md, build-arc-music-festival-article.mjs). Search wording from live Google
// (google.fr, hl=fr/gl=fr, 2026-10-01); volumes in keywords/fr-arc-music-festival.json.
// The images are the English guide's, with translated captions.

import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, ownSetListening
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/arc-music-festival/${name}-${width}.webp`,
  srcset: `img/arc-music-festival/${name}-320.webp 320w, img/arc-music-festival/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

export default {
  lang: 'fr',
  name: 'fr-arc-music-festival',
  file: 'fr/arc-music-festival.html',
  draft: 'fr/arc-music-festival-draft.md',
  canonical: 'https://thecatrave.com/fr/arc-music-festival',
  englishPath: '/arc-music-festival',
  ogImage: 'https://thecatrave.com/img/og/arc-music-festival.jpg',
  bodyClass: 'article-page arc-music-festival-page',
  minReadingMinutes: 6,

  title: 'ARC Music Festival 2027 : guide de Chicago, scènes et accès',
  description: 'L’ARC Music Festival apporte house et techno à Union Park, à Chicago. Scènes, histoire, accès en CTA, After Dark et édition 2027 encore à confirmer.',
  datePublished: '2026-10-01',
  dateModified: '2026-10-01',
  dateLabel: '1er octobre 2026',

  heroKicker: 'Guide du festival de Chicago',
  heroTitle: 'ARC Music Festival : house de Chicago, techno et Union Park',
  deck: 'Un festival compact du Labor Day où l’histoire de la house de Chicago, la techno de Détroit et le circuit international des clubs se partagent Union Park.',
  answerLabel: 'Qu’est-ce que l’ARC Music Festival',
  breadcrumbName: 'Qu’est-ce que l’ARC Music Festival',

  answerSection: 'Réponse',
  introSection: 'Introduction',
  introTitle: 'Les artistes de Chicago partagent l’affiche.',
  faqSection: 'FAQ',
  faqLabel: 'Questions fréquentes',
  faqTitle: 'Questions fréquentes sur l’ARC Music Festival.',

  sections: [
    {id: 'arc-2027', heading: 'ARC Music Festival 2027', title: 'ARC Music Festival 2027.'},
    {id: 'music', heading: 'La musique d’ARC', title: 'La musique d’ARC.'},
    {id: 'chicago', heading: 'Pourquoi Chicago change le festival', title: 'Pourquoi Chicago change le festival.'},
    {id: 'history', heading: 'Comment ARC a commencé', title: 'Comment ARC a commencé.'},
    {id: 'union-park', heading: 'Union Park et les scènes', title: 'Union Park et les scènes.'},
    {id: 'planning', heading: 'Y aller et préparer la nuit', title: 'Y aller et préparer la nuit.'}
  ],

  media: ({lang}) => ({
    'Frankie Knuckles Way': figure('arc-frankie-knuckles-way', 1200, 900, 'Panneau de rue Frankie Knuckles Way à Chicago',
      'Frankie Knuckles Way marque le pâté de maisons à côté de l’ancien site du Warehouse. ARC s’appuie sur cette histoire en programmant des artistes de Chicago aux côtés des têtes d’affiche internationales actuelles. Photo : Sarah Stierch, CC BY 4.0.'),
    'Union Park': articleFigure({src: 'img/arc-music-festival/arc-union-park-1200.webp', srcset: 'img/arc-music-festival/arc-union-park-320.webp 320w, img/arc-music-festival/arc-union-park-1200.webp 1024w', width: 1024, height: 768, alt: 'Union Park à Chicago, avec la skyline du centre-ville derrière', caption: 'Union Park est compact et proche de la CTA. Sa surface limitée rapproche aussi plusieurs sound systems du festival. Photo : soundfromwayout, CC BY 2.0.', className: 'wide-archive-image'}),
    'ARC sets': articleVideoCollection({lang, label: 'Sets d’ARC', description: 'Boys Noize b2b VTSS à ARC pour Mixmag Lab, et Nicole Moudaber à l’édition 2025. Ce sont les sets d’ARC les plus regardés que j’aie trouvés sur YouTube.', items: [articleVideoCard({youtubeId: '_jysvzxpb0Q', genre: 'MIXMAG LAB x ARC', artist: 'Boys Noize b2b VTSS', title: 'Mixmag Lab x ARC Music Festival'}), articleVideoCard({youtubeId: '6g7HHRV0HSE', genre: 'ARC, 2025', artist: 'Nicole Moudaber', title: 'ARC Music Festival Chicago 2025'})]}),
    'thecatrave mix 1': ownSetListening(0, lang, 'Mon propre mix multigenre suit le parcours club d’ARC à travers la house, la techno et des virages plus durs, sans prétendre reproduire l’affiche d’une édition.'),
    'thecatrave mix 2': ownSetListening(1, lang, 'Pour le trajet d’Union Park vers la nuit : mon propre set entre techno, breaks et bass music, comme parcours personnel d’after.'),
    'Table: Facts': articleTable({
      headers: ['Sujet', 'État'],
      rows: [
        ['Dates 2027', 'pas encore annoncées'],
        ['Lieu', 'Union Park, Chicago'],
        ['Musique', 'House et techno'],
        ['Âge', '18 ans et plus'],
        ['Affiche 2027', 'pas encore annoncée'],
        ['Informations officielles', 'L’inscription est ouverte sur le site d’ARC']
      ].map(row => row.map(escapeHtml))
    })
  }),

  sources: [
    {href: 'https://arcmusicfestival.com/', label: 'ARC Music Festival : site officiel et informations 2027'},
    {href: 'https://arcmusicfestival.com/faqs/', label: 'ARC Music Festival : FAQ officielle et informations de transport'},
    {href: 'https://articles.roland.com/arc-music-festival-house-comes-home/', label: 'Roland : entretien avec les fondateurs d’ARC'},
    {href: 'https://ra.co/events/1434826', label: 'Resident Advisor : fiche du tout premier ARC Music Festival'},
    {href: 'https://commons.wikimedia.org/wiki/File:Chicago_Union_Park.jpg', label: 'Wikimedia Commons : photo d’Union Park et licence'}
  ],

  bandcamp: {
    description: 'ARC repose sur la musique de club plutôt que sur un sous-genre figé. Ces sorties de thecatrave se rattachent à son côté house et techno ; en acheter une soutient la musique et ces textes indépendants.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 par thecatrave'},
      {title: '60 hours of mistakes', id: '3330948631', url: 'https://thecatrave.bandcamp.com/track/60-hours-of-mistakes', linkText: '60 hours of mistakes de thecatrave'}
    ]
  }
};
