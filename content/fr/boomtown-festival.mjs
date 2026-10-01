// French Boomtown Festival guide. Structure, facts and media from the English page
// (boomtown-festival-draft.md, build-boomtown-festival-article.mjs). Search wording from live Google
// (google.fr, hl=fr/gl=fr, 2026-10-01); volumes in keywords/fr-boomtown-festival.json.
// The images are the English guide's, with translated captions.

import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, ownSetListening
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/boomtown/${name}-${width}.webp`,
  srcset: `img/boomtown/${name}-320.webp 320w, img/boomtown/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

export default {
  lang: 'fr',
  name: 'fr-boomtown-festival',
  file: 'fr/boomtown-festival.html',
  draft: 'fr/boomtown-festival-draft.md',
  canonical: 'https://thecatrave.com/fr/boomtown-festival',
  englishPath: '/boomtown-festival',
  ogImage: 'https://thecatrave.com/img/og/boomtown.jpg',
  bodyClass: 'article-page boomtown-festival-page',
  minReadingMinutes: 6,

  title: 'Boomtown Festival 2027 : dates, lieu, histoire et musique',
  description: 'Boomtown Festival 2027 se tient du 11 au 15 août au Matterley Estate. Comment fonctionnent sa ville fictive, sa musique, son histoire et le camping.',
  datePublished: '2026-10-01',
  dateModified: '2026-10-01',
  dateLabel: '1er octobre 2026',

  heroKicker: 'Guide des festivals britanniques',
  heroTitle: 'Boomtown Festival : la ville, sa musique et les dates 2027',
  deck: 'Un festival de camping de cinq jours construit comme une ville fictive, où drum and bass, culture des sound systems, techno, punk et musique live occupent des quartiers différents.',
  answerLabel: 'Qu’est-ce que le Boomtown Festival',
  breadcrumbName: 'Qu’est-ce que le Boomtown Festival',

  answerSection: 'Réponse',
  introSection: 'Introduction',
  introTitle: 'Un festival conçu pour être exploré.',
  faqSection: 'FAQ',
  faqLabel: 'Questions fréquentes',
  faqTitle: 'Questions fréquentes sur le Boomtown Festival.',

  sections: [
    {id: 'boomtown-2027', heading: 'Boomtown 2027', title: 'Boomtown 2027.'},
    {id: 'festival-city', heading: 'Un festival construit comme une ville', title: 'Un festival construit comme une ville.'},
    {id: 'music', heading: 'La musique de Boomtown', title: 'La musique de Boomtown.'},
    {id: 'history', heading: 'De 2009 au Matterley Estate', title: 'De 2009 au Matterley Estate.'},
    {id: 'ownership', heading: 'À qui appartient Boomtown', title: 'À qui appartient Boomtown.'},
    {id: 'planning', heading: 'Matterley Estate et une première visite', title: 'Matterley Estate et une première visite.'}
  ],

  media: ({lang}) => ({
    'Opening ceremony': figure('opening-ceremony-2019', 1200, 900, 'La scène de la cérémonie d’ouverture 2019 et la foule à Boomtown',
      'La cérémonie d’ouverture de 2019 a rendu visible le chapitre annuel à l’échelle de l’arène. Le théâtre de rue et les salles plus petites portent la même ville fictive entre les grandes scènes. Photo : Sam Warrenger / TheFestivals.UK, CC BY-SA 4.0.'),
    'Scrapyard': figure('scrapyard-2019', 1200, 900, 'Décor industriel de la scène Scrapyard à Boomtown en 2019',
      'Le quartier Scrapyard en 2019. Boomtown donne aux genres et aux lieux une adresse physique, même si les noms et la géographie changent d’un chapitre à l’autre. Photo : Sam Warrenger / TheFestivals.UK, CC BY 4.0.'),
    'Wailers and Altern 8': articleVideoCollection({lang, label: 'Les Wailers et Altern 8 à Boomtown', description: 'Les Wailers à Boomtown 2014 sont la vidéo de performance de Boomtown la plus regardée que j’aie trouvée (17 millions de vues). Altern 8 pour Boiler Room à Boomtown 2023 en est le pendant électronique.', items: [articleVideoCard({youtubeId: 'nx8LYGtQdDs', genre: 'BOOMTOWN, 2014', artist: 'The Wailers', title: 'Three Little Birds / One Love'}), articleVideoCard({youtubeId: 'aKxwl7rFCAE', genre: 'BOOMTOWN, 2023', artist: 'Altern 8', title: 'Boiler Room x Sports Banger'})]}),
    'thecatrave mix 1': ownSetListening(0, lang, 'Mon propre mix multigenre suit le même parcours ouvert entre bass music, techno et rave, sans prétendre remplacer le programme de Boomtown.'),
    'thecatrave mix 2': ownSetListening(1, lang, 'Pour les heures après la fermeture de la ville : mon propre set à travers la techno, les breaks et la bass music.'),
    'Table: Facts': articleTable({
      headers: ['Sujet', 'État'],
      rows: [
        ['Dates', '11 au 15 août 2027'],
        ['Lieu', 'Matterley Estate près de Winchester, Hampshire'],
        ['Édition', 'Chapter Six: Wild Style'],
        ['Format', 'Festival de camping de cinq jours, réservé aux plus de 18 ans'],
        ['Affiche 2027', 'pas encore annoncée'],
        ['Horizon de planification', 'L’autorisation actuelle du site court jusqu’en 2030']
      ].map(row => row.map(escapeHtml))
    })
  }),

  sources: [
    {href: 'https://www.boomtownfair.co.uk/', label: 'Boomtown : dates 2027 et chapitre officiels'},
    {href: 'https://www.boomtownfair.co.uk/discover/history/', label: 'Boomtown : histoire officielle du festival'},
    {href: 'https://www.southdowns.gov.uk/', label: 'South Downs National Park : informations de planification sur le Matterley Estate'},
    {href: 'https://find-and-update.company-information.service.gov.uk/', label: 'UK Companies House : Boomtown Festival UK Limited'},
    {href: 'https://commons.wikimedia.org/wiki/File:Boomtown_Fair_Opening_Ceremony_2019_Chapter_11.jpg', label: 'Wikimedia Commons : photo de la cérémonie d’ouverture 2019 et licence'}
  ],

  bandcamp: {
    description: 'La programmation de Boomtown circule entre plusieurs scènes plutôt que dans un seul genre. Ces sorties de thecatrave se rattachent à son côté électronique ; en acheter une soutient directement la musique et les textes.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 par thecatrave'},
      {title: '60 hours of mistakes', id: '3330948631', url: 'https://thecatrave.bandcamp.com/track/60-hours-of-mistakes', linkText: '60 hours of mistakes de thecatrave'}
    ]
  }
};
