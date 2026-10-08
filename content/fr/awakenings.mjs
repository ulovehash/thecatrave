// French Awakenings guide. Structure and facts from the English page
// (awakenings-draft.md, build-awakenings-article.mjs).
//
// French keywords (keywords/fr-awakenings.json): Keyword Planner, France,
// 2026-10-01: awakenings festival in the 1K to 10K bucket. No exact volume
// (account without ad spend). Wording checked in Google fr-FR the same day:
// "Où est le festival Awakenings", "Quel est le prix d'un billet" and "Quel est
// le plus grand festival techno en Hollande" appear as questions; "Awakenings
// Festival 2027" is the next edition.
//
// The image is the English guide's, in img/awakenings/, with a translated
// caption; see home-articles.mjs for why a translation may reuse it.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, ownTrackListening
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption, className = 'wide-archive-image') => articleFigure({
  src: `img/awakenings/${name}-${width}.webp`,
  srcset: `img/awakenings/${name}-320.webp 320w, img/awakenings/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className
});

export default {
  lang: 'fr',
  name: 'fr-awakenings',
  file: 'fr/festival-awakenings.html',
  draft: 'fr/awakenings-draft.md',
  canonical: 'https://thecatrave.com/fr/festival-awakenings',
  englishPath: '/awakenings-festival',
  ogImage: 'https://thecatrave.com/img/og/awakenings.jpg',
  bodyClass: 'article-page awakenings-page',

  title: 'Festival Awakenings 2027 : ce que c’est et où il a lieu',
  description: 'Fondé à Amsterdam en 1997, techno exclusivement depuis : où ont lieu le festival d’été et le rendez-vous de l’Amsterdam Dance Event, et d’où vient le nom.',
  datePublished: '2026-10-01',
  dateModified: '2026-10-01',
  dateLabel: '1er octobre 2026',

  heroKicker: 'Awakenings',
  heroTitle: 'Festival Awakenings',
  deck: 'Un festival techno néerlandais fondé à Amsterdam en 1997, uniquement techno depuis. Où ont lieu le festival d’été et le rendez-vous de l’Amsterdam Dance Event, l’origine accidentelle du nom, et qui joue.',
  answerLabel: 'Qu’est-ce que le festival Awakenings',
  breadcrumbName: 'Festival Awakenings',

  answerSection: 'Réponse',
  introSection: 'Introduction',
  introTitle: 'Un seul genre, presque trente ans.',
  faqSection: 'FAQ',
  faqLabel: 'Questions fréquentes',
  faqTitle: 'Questions fréquentes sur le festival Awakenings.',
  ownSetAfter: 'history',

  sections: [
    {id: 'where', heading: 'Où et quand a lieu Awakenings', title: 'Où et quand a lieu Awakenings.'},
    {id: 'history', heading: 'Brève histoire, et à qui appartient Awakenings', title: 'Brève histoire, et à qui appartient Awakenings.'},
    {id: 'music', heading: 'Ce qu’on joue à Awakenings', title: 'Ce qu’on joue à Awakenings.', kicker: 'La musique'}
  ],

  media: ({lang}) => ({
    'thecatrave degeneration': ownTrackListening('degeneration', 'Loin d’Awakenings : la voix de Mylène Farmer sur des breaks, entre dubstep et UK garage. Mon propre remix.', lang),
    'Table: Faits': articleTable({
      headers: ['Fait', 'Détail'],
      rows: [
        ['Fondation', '30 mars 1997, Gashouder, Amsterdam'],
        ['Organisateur', 'Monumental Productions, propriété de LiveStyle depuis 2015'],
        ['Genre', 'Techno uniquement'],
        ['Festival d’été 2026', '10 au 12 juillet, Beekse Bergen, Hilvarenbeek, complet'],
        ['Festival d’été 2027', '9 au 11 juillet, Beekse Bergen, Hilvarenbeek'],
        ['Rendez-vous Amsterdam Dance Event 2026', '21 au 25 octobre, Gashouder, Amsterdam'],
        ['DJ Mag Top 100 Festivals 2026', '34e, en baisse de 14 places']
      ].map(row => row.map(escapeHtml)),
      label: 'Festival Awakenings : les faits'
    }),
    'Image: Blimp': figure('blimp-2007', 1200, 803,
      'Le dirigeable d’Awakenings au-dessus du public, des faisceaux laser traversant le ciel nocturne',
      'Awakenings, 2007. Photographie : Boris van Hoytema, CC BY 2.0.'),
    'Maceo Plex': articleVideoCollection({
      lang: 'fr',
      label: 'Maceo Plex, Mosaic x Awakenings au Gashouder ADE, 2018',
      description: 'Maceo Plex au Gashouder lors du rendez-vous Amsterdam Dance Event d’Awakenings en 2018.',
      items: [articleVideoCard({youtubeId: 'gR_nkH5B35s', genre: 'Techno', artist: 'Maceo Plex', title: 'Mosaic x Awakenings au Gashouder ADE, 2018'})]
    })
  }),

  // The English page's sources, URL for URL, with translated labels.
  sources: [
    {href: 'https://en.wikipedia.org/wiki/Awakenings_(festival)', label: 'Wikipédia : Awakenings (festival) (en anglais)'},
    {href: 'https://www.awakenings.com', label: 'Awakenings : site officiel'},
    {href: 'https://www.awakenings.com/how-to-travel-festival26', label: 'Awakenings : accès au festival Awakenings 2026 (en anglais)'},
    {href: 'https://djmag.com/top100festivals', label: 'DJ Mag : Top 100 Festivals 2026 (en anglais)'}
  ],

  bandcamp: {
    description: 'Awakenings est loin des breaks que je fais moi-même. Acheter un morceau soutient directement mon travail.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks de thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 de thecatrave'}
    ]
  }
};
