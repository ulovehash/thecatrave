// fr Monegros guide. Structure and facts from the English page
// (monegros-desert-festival-draft.md, build-monegros-desert-festival-article.mjs).
//
// Keywords (keywords/fr-monegros.json): Keyword Planner bucket for the head
// term, wording from Google fr-FR on 2026-10-01; no exact volumes (account
// without ad spend).
//
// Images are the English guide's, in img/monegros/, with translated captions.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection
} from '../../site-components.mjs';
import {localizedFestivalPlanning} from '../festival-planning-data.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, height, alt, caption) => articleFigure({
  src: `img/monegros/${name}-1200.webp`,
  srcset: `img/monegros/${name}-320.webp 320w, img/monegros/${name}-1200.webp 1200w`,
  width: 1200, height, alt, caption, className: 'wide-archive-image'
});

export default {
  lang: 'fr',
  name: 'fr-monegros',
  file: 'fr/monegros-desert-festival.html',
  draft: 'fr/monegros-desert-festival-draft.md',
  canonical: 'https://thecatrave.com/fr/monegros-desert-festival',
  englishPath: '/monegros-desert-festival',
  ogImage: 'https://thecatrave.com/img/og/monegros.jpg',
  bodyClass: 'article-page monegros-desert-festival-page',

  title: 'Monegros Desert Festival 2027 : date, histoire et guide',
  description: 'Le Monegros Desert Festival 2027 est prévu le 31 juillet près de Fraga, en Espagne. Histoire, musique, format désert, accès et limites pratiques.',
  datePublished: '2026-10-01',
  dateModified: '2026-10-06',
  dateLabel: '6 octobre 2026',

  heroKicker: 'Guide des festivals en Espagne',
  heroTitle: 'Monegros Desert Festival 2027 : la rave du désert expliquée',
  deck: 'Un seul long événement électronique sur des terres exposées entre Barcelone et Saragosse, enraciné dans le Florida 135 et conçu pour des scènes en concurrence toute la nuit.',
  answerLabel: 'Qu’est-ce que le Monegros Desert Festival',
  breadcrumbName: 'Monegros Desert Festival',

  answerSection: 'Réponse',
  introSection: 'Introduction',
  introTitle: 'Une longue nuit demande son propre plan.',
  faqSection: 'FAQ',
  faqLabel: 'Questions fréquentes',
  faqTitle: 'Questions fréquentes sur le Monegros Desert Festival.',
  ownSetAfter: 'history',

  sections: [
    {id: 'monegros-2027', heading: 'Monegros Desert Festival 2027', tocLabel: 'Date et lieu 2027', title: 'Monegros Desert Festival 2027.'},
    {id: 'what-is-monegros', heading: 'Ce qu’est Monegros', tocLabel: 'Ce qu’est Monegros', title: 'Ce qu’est Monegros.'},
    {id: 'history', heading: 'De Florida 135 au désert', tocLabel: 'Histoire', title: 'De Florida 135 au désert.'},
    {id: 'operator', heading: 'Qui organise Monegros', tocLabel: 'Qui organise Monegros', title: 'Qui organise Monegros.'},
    {id: 'music', heading: 'Quelle musique joue à Monegros', tocLabel: 'Musique à Monegros', title: 'Quelle musique joue à Monegros.'},
    {id: 'site', heading: 'Le site et le format de nuit', tocLabel: 'Format de nuit', title: 'Le site et le format de nuit.'},
    {id: 'planning', heading: 'Se préparer pour Monegros', tocLabel: 'Préparation', title: 'Préparez votre voyage à Monegros.', planning: localizedFestivalPlanning('monegros', 'fr')}
  ],

  media: ({lang}) => ({
    'Table: Faits': articleTable({
      headers: ["Information", "Détail"],
      rows: [["Date", "Samedi 31 juillet 2027"], ["Lieu", "N-II, kilomètre 416, près de Fraga, Aragon"], ["Format", "Festival électronique d’un jour, qui se prolonge la nuit"], ["Programmation 2027", "Pas encore annoncée"], ["Dernier format mesuré", "22 heures et dix scènes en 2026"], ["Camping", "Pas de camping général de festival sur plusieurs jours"]].map(row => row.map(escapeHtml)),
      label: 'Monegros Desert Festival 2027 : les faits'
    }),
    'Image: Festival overview': figure('festival-overview-2009', 900, 'Vue d’ensemble des scènes et du public du Monegros Desert Festival en 2009', 'Le Monegros Desert Festival en 2009, quand l’événement avait déjà largement dépassé ses premiers rassemblements liés au Florida 135. Photo : BigSus, CC BY-SA 3.0.'),
    'Image: Desert landscape': figure('desert-landscape', 675, 'Paysage sec et exposé de la région des Monegros, en Aragon', 'Le paysage exposé des Monegros explique les exigences pratiques du festival : la chaleur et la distance font partie du site, ce n’est pas de l’image de marque décorative. Photo : Smoobs, CC BY 2.0.'),
    'Embed: Sama’ Abdulhadi and Indira Paganotto': articleVideoCollection({
      lang,
      label: 'Sama’ Abdulhadi et Indira Paganotto à Monegros',
      description: 'Sama’ Abdulhadi pour Beatport à Monegros, le set de Monegros le plus vu que j’aie pu trouver (1,9 million de vues), et Indira Paganotto qui clôt l’édition 2025 sur la chaîne du festival.',
      items: [
        articleVideoCard({youtubeId: 'V4lH-KzsQi0', genre: 'MONEGROS, BEATPORT LIVE', artist: 'Sama’ Abdulhadi', title: 'Set DJ au Monegros Desert Festival'}),
        articleVideoCard({youtubeId: 'sx6_l6skb5o', genre: 'MONEGROS, 2025', artist: 'Indira Paganotto', title: 'Clôture du Monegros Desert Festival 2025'})
      ]
    })
  }),

  sources: [
    {href: 'https://monegrosfestival.com/', label: 'Monegros : site officiel du festival et état de la programmation (anglais)'},
    {href: 'https://monegrosfestival.com/en/history/', label: 'Monegros : histoire officielle du festival (anglais)'},
    {href: 'https://monegrosfestival.com/en/dj-sets/', label: 'Monegros : archives officielles des sets de DJ (anglais)'},
    {href: 'https://www.enterticket.es/', label: 'Enterticket : date du Monegros Desert Festival 2027 (espagnol)'},
    {href: 'https://commons.wikimedia.org/wiki/File:Monegros_Desert_Festival_-_Vista_general.jpg', label: 'Wikimedia Commons : photo de vue d’ensemble et licence (anglais)'}
  ],

  bandcamp: {
    description: 'Monegros se définit par une programmation électronique de longue durée. Ces sorties de thecatrave se rapprochent de son côté club plus dur ; en acheter une soutient directement la musique et l’écriture.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks par thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 par thecatrave'}
    ]
  }
};
