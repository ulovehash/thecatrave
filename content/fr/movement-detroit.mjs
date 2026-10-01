// French Movement Detroit guide. Structure, facts and media from the English page
// (movement-detroit-draft.md, build-movement-detroit-article.mjs). Search wording from live Google
// (google.fr, hl=fr/gl=fr, 2026-10-01); volumes in keywords/fr-movement-detroit.json.
// The images are the English guide's, with translated captions.

import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, ownSetListening
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/movement-detroit/${name}-${width}.webp`,
  srcset: `img/movement-detroit/${name}-320.webp 320w, img/movement-detroit/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

export default {
  lang: 'fr',
  name: 'fr-movement-detroit',
  file: 'fr/movement-detroit.html',
  draft: 'fr/movement-detroit-draft.md',
  canonical: 'https://thecatrave.com/fr/movement-detroit',
  englishPath: '/movement-detroit',
  ogImage: 'https://thecatrave.com/img/og/movement-detroit.jpg',
  bodyClass: 'article-page movement-detroit-page',
  minReadingMinutes: 8,

  title: 'Movement Detroit : histoire, lieu, scènes et dates 2027',
  description: 'Movement Detroit ramène la techno à Hart Plaza chaque week-end du Memorial Day. Histoire, lieu, scènes et dates 2027 du festival de Détroit.',
  datePublished: '2026-10-01',
  dateModified: '2026-10-01',
  dateLabel: '1er octobre 2026',

  heroKicker: 'Guide Movement Detroit',
  heroTitle: 'Movement Detroit : la techno dans la ville qui l’a créée',
  deck: 'D’un Detroit Electronic Music Festival gratuit en 2000 à six scènes à Hart Plaza, avec les artistes de la ville au cœur de la programmation.',
  answerLabel: 'Qu’est-ce que Movement Detroit',
  breadcrumbName: 'Qu’est-ce que Movement Detroit',

  answerSection: 'Réponse',
  introSection: 'Introduction',
  introTitle: 'La techno rentre au bord du fleuve.',
  faqSection: 'FAQ',
  faqLabel: 'Questions fréquentes',
  faqTitle: 'Questions fréquentes sur Movement Detroit.',

  sections: [
    {id: 'what-is', heading: 'Qu’est-ce que Movement Detroit', title: 'Qu’est-ce que Movement Detroit.'},
    {id: 'location', heading: 'Hart Plaza et le front de fleuve de Détroit', title: 'Hart Plaza et le front de fleuve de Détroit.'},
    {id: 'history', heading: 'De DEMF à Movement', title: 'De DEMF à Movement.'},
    {id: 'detroit', heading: 'La techno de Détroit sur son terrain', title: 'La techno de Détroit sur son terrain.'},
    {id: 'stages', heading: 'Quelle musique et quelles scènes attendre', title: 'Quelle musique et quelles scènes attendre.'},
    {id: 'current', heading: 'Movement Detroit : dates et line-up', title: 'Movement Detroit : dates et line-up.'},
    {id: 'planning', heading: 'Préparer le week-end', title: 'Préparer le week-end.'}
  ],

  media: ({lang}) => ({
    'Hart Plaza': figure('hart-plaza', 1280, 853, 'Hart Plaza au bord de la rivière Detroit, avec les immeubles du centre de Détroit derrière',
      'Hart Plaza sur le front de fleuve de Détroit. Son amphithéâtre, ses terrasses et son niveau inférieur déterminent l’ambiance et la circulation de Movement. Photo : U.S. Army Corps of Engineers, domaine public.'),
    'Movement 2026': figure('movement-hart-plaza-2026', 1280, 655, 'Le Movement Music Festival remplit Hart Plaza à Détroit pendant l’édition 2026',
      'Movement à Hart Plaza le 25 mai 2026, photographié de l’autre côté de la rivière Detroit. Le festival reste sur le site du centre-ville où le DEMF a commencé en 2000. Photo : Chris Woodrich, CC BY-SA 4.0.'),
    'DEMF in 2002': articleVideoCollection({lang, label: 'DEMF en 2002', description: 'Images de la Detroit Historical Society prises avant que le nom actuel ne se fixe : Juan Atkins sur la scène principale, puis un reportage avec Eddie Fowlkes et K-Hand.', items: [articleVideoCard({youtubeId: 'GTF4S78VTPw', genre: 'ARCHIVES DEMF, 2002', artist: 'Juan Atkins', title: 'Set du samedi sur la scène principale'}), articleVideoCard({youtubeId: '2mc8AkXYBdc', genre: 'ARCHIVES DEMF, 2002', artist: 'Eddie Fowlkes et K-Hand', title: 'Reportage de la Detroit Historical Society sur le festival'})]}),
    'thecatrave mix 1': ownSetListening(0, lang, 'Trente morceaux entre garage, bass music, techno et rave. Mon propre mix, placé ici comme un chemin au-delà des archives.'),
    'thecatrave mix 2': ownSetListening(1, lang, 'Breaks et techno pour les heures après le festival. Mon propre mix.'),
    'Table: Stages': articleTable({
      headers: ['Scène', 'Cadre', 'Rôle dans la programmation'],
      rows: [
        ['Movement Stage', 'Amphithéâtre de Hart Plaza', 'Plus grands noms et prestations d’envergure tête d’affiche'],
        ['Detroit Stage', 'Scène extérieure', 'Programme 100 % Détroit, toutes générations'],
        ['Underground Stage', 'Sous le niveau principal de la place', 'Musique plus dure dans une salle de béton fermée'],
        ['Waterfront Stage', 'Au bord du fleuve, parmi les arbres', 'Funk, hip-hop, breakbeats, ghettotech et autres chemins'],
        ['Stargate Stage', 'Place ouverte', 'Esprit de block party de Détroit'],
        ['Pyramid Stage', 'Côté fleuve du site', 'Large programme électronique avec un décor en plein air']
      ].map(row => row.map(escapeHtml))
    })
  }),

  sources: [
    {href: 'https://www.detroithistorical.org/learn/online-research/encyclopedia-of-detroit/detroit-electronic-music-festival-movement', label: 'Detroit Historical Society : Detroit Electronic Music Festival (Movement)'},
    {href: 'https://www.detroithistorical.org/learn/online-research/blog/flashback-2002-detroit-electronic-music-festival', label: 'Detroit Historical Society : retour sur le festival 2002'},
    {href: 'https://movementfestival.com/experience-page/experience', label: 'Movement : guide de Hart Plaza et des scènes'},
    {href: 'https://movementfestival.com/faqs', label: 'Movement : FAQ et dates actuelles du festival'},
    {href: 'https://movementfestival.com/travel', label: 'Movement : guide de voyage officiel'},
    {href: 'https://detroitmi.gov/departments/detroit-parks-recreation/parks-and-greenways/hart-plaza', label: 'Ville de Détroit : Hart Plaza'}
  ],

  bandcamp: {
    description: 'La techno de Détroit traverse cette histoire. Mes propres sorties sont plus proches des breaks, de la techno et de la rave ; en acheter une soutient directement la musique et les textes.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 par thecatrave'},
      {title: '60 hours of mistakes', id: '3330948631', url: 'https://thecatrave.bandcamp.com/track/60-hours-of-mistakes', linkText: '60 hours of mistakes de thecatrave'}
    ]
  }
};
