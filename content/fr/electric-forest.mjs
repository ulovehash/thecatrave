// French Electric Forest guide. Structure and facts from the English page
// (electric-forest-draft.md, build-electric-forest-article.mjs), dated
// 4 October 2026, by way of the German sibling; nothing added that the
// English page does not say.
//
// French wording: Keyword Planner (France, French, 14 November 2026) returned
// "electric forest festival" in the 100-1K bucket and no 2027, billet, dates
// or line up variant (keywords/fr-electric-forest.json). Google hl=fr showed
// "billets" and "pass"; the name stays as it is.
//
// Maintenance: the 2027 dates are not announced. When the English page sets
// them, rewrite the dates section and the status table here, and the
// planner entry fr.electricforest in content/festival-planning-data.mjs.
//
// The images are the English page's, in img/electric-forest/, with translated
// captions; the planner is the fr entry "electricforest".
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection
} from '../../site-components.mjs';
import {localizedFestivalPlanning} from '../festival-planning-data.mjs';

const fig = (name, alt, caption) => articleFigure({
  src: `img/electric-forest/${name}-1200.webp`,
  srcset: `img/electric-forest/${name}-320.webp 320w, img/electric-forest/${name}-1200.webp 1200w`,
  width: 1200, height: 801, alt, caption, className: 'wide-archive-image'
});

export default {
  lang: 'fr',
  name: 'fr-electric-forest',
  file: 'fr/electric-forest-festival.html',
  draft: 'fr/electric-forest-draft.md',
  canonical: 'https://thecatrave.com/fr/electric-forest-festival',
  englishPath: '/electric-forest-festival',
  ogImage: 'https://thecatrave.com/img/og/electric-forest.jpg',
  bodyClass: 'article-page electric-forest-page',
  minReadingMinutes: 6,

  title: 'Electric Forest Festival 2027 : billets, dates, camping, line up',
  description: 'Electric Forest Festival 2027 à Rothbury, Michigan : ce que l’on sait des dates, comment marchent billets et camping, le trajet et quoi emporter.',
  datePublished: '2026-11-14',
  dateModified: '2026-11-14',
  dateLabel: '14 novembre 2026',

  heroKicker: 'Guide de festival 2027',
  heroTitle: 'Electric Forest 2027 : billets, dates, camping et line up',
  deck: 'Le festival de Rothbury, dans le Michigan : ce que l’on sait des dates 2027, comment marchent les pass et le camping, comment s’y rendre et quoi emporter.',
  answerLabel: 'Dates d’Electric Forest',
  breadcrumbName: 'Electric Forest',

  answerSection: 'Réponse',
  introSection: 'Introduction',
  introTitle: 'Un festival qui pose des questions pratiques.',
  faqSection: 'FAQ',
  faqLabel: 'Questions fréquentes sur Electric Forest',
  faqTitle: 'Questions fréquentes sur Electric Forest.',

  sections: [
    {id: 'what-is', heading: 'Qu’est-ce que l’Electric Forest Festival ?', title: 'Qu’est-ce que l’Electric Forest Festival ?', tocLabel: 'Qu’est-ce que c’est ?'},
    {id: 'tickets', heading: 'Billets pour Electric Forest', title: 'Billets pour Electric Forest.', tocLabel: 'Billets',
      subsections: ['ticket-prices']},
    {id: 'electric-forest-2026', heading: 'Electric Forest 2026', title: 'Electric Forest 2026.'},
    {id: 'dates', heading: 'Dates d’Electric Forest 2027', title: 'Dates d’Electric Forest 2027.', tocLabel: 'Dates 2027'},
    {id: 'lineup', heading: 'Line up d’Electric Forest', title: 'Line up d’Electric Forest.', tocLabel: 'Line up'},
    {id: 'where', heading: 'Où a lieu Electric Forest ? Rothbury, Michigan', title: 'Où a lieu Electric Forest ? Rothbury, Michigan.', tocLabel: 'Où il a lieu',
      subsections: ['sherwood-forest', 'camping', 'shuttle', 'hotel', 'packing-list']},
    {id: 'planning', heading: 'Préparer son voyage à Electric Forest 2027', title: 'Préparez votre voyage à Electric Forest.', tocLabel: 'Voyage et préparation', planning: localizedFestivalPlanning('electricforest', 'fr')}
  ],

  media: ({lang}) => ({
    'Table: add-ons': articleTable({label: 'Options pour Electric Forest 2026',
      headers: ['Option', 'Information 2026'],
      rows: [
        ['Uplift Lounge', '150 dollars'],
        ['Arrivée le mercredi, General Admission', '50 dollars par emplacement, entrée dès 0 h 01, heure de l’Est, le mercredi 24 juin 2026'],
        ['Camp Kits', 'À partir de 279 dollars pour une ou deux personnes'],
        ['Casiers et navettes', 'Vendus en option']
      ]}),
    'Table: arrival': articleTable({label: 'Arrivée à Electric Forest 2026 selon le type de camping',
      headers: ['Type de camping', 'Arrivée 2026'],
      rows: [
        ['General Admission', 'Jeudi, 0 h 01'],
        ['Camping de groupe, camping-car General Admission, Preferred Car Camping, Lake RV', 'Mercredi, 0 h 01'],
        ['Camping sous tente Good Life', 'Mercredi, 8 h'],
        ['Back 40', 'Mercredi, 10 h'],
        ['Arrivée à l’hôtel', '15 h']
      ]}),
    'Table: status': articleTable({label: 'Electric Forest 2027 : état des annonces',
      headers: ['Élément pour 2027', 'Statut'],
      rows: [
        ['Dates', 'Non annoncées'],
        ['Billets', 'Pas en vente, pas de billetterie'],
        ['Line up', 'Non annoncé'],
        ['Prix', 'Non annoncés']
      ]}),
    entrance: fig('entrance-2018',
      'L’arche d’entrée en bois d’Electric Forest, avec une foule de festivaliers devant',
      'L’entrée d’Electric Forest, 1er juillet 2018. Photo : FifthLegend, CC BY 2.0.'),
    hammocks: fig('hammocks-2018',
      'Des gens se reposent dans des hamacs entre les arbres à Electric Forest',
      'Des hamacs entre les arbres à Electric Forest, 1er juillet 2018. Photo : FifthLegend, CC BY 2.0.'),
    sets: articleVideoCollection({
      lang, label: 'Electric Forest, écouté depuis chez soi',
      description: 'Trois sets publiés sur les chaînes YouTube des artistes, chacun enregistré à Electric Forest selon son titre.',
      items: [
        articleVideoCard({youtubeId: '_A3n8oIbwtc', genre: 'Electric Forest', artist: 'Levity', title: 'Live à Electric Forest 2024'}),
        articleVideoCard({youtubeId: 'OdDOnJ-aP4k', genre: 'Electric Forest', artist: 'Whethan', title: 'Live à Electric Forest 2025'}),
        articleVideoCard({youtubeId: '-eVk7dh8dO4', genre: 'Electric Forest', artist: 'Of The Trees', title: 'Live à Electric Forest 2025'})
      ]
    })
  }),

  // The English page's sources, URL for URL, with translated labels. All in English.
  sources: [
    {html: 'Dates, pass, options, horaires d’arrivée et navettes : <a href="https://electricforestfestival.com/" target="_blank" rel="noopener noreferrer">electricforestfestival.com</a>, <a href="https://electricforestfestival.com/pass-types" target="_blank" rel="noopener noreferrer">types de pass</a> et <a href="https://electricforestfestival.com/tickets" target="_blank" rel="noopener noreferrer">billets</a> (en anglais).'},
    {html: 'Règles, accès, objets interdits et guide de préparation : <a href="https://electricforestfestival.com/festival-info" target="_blank" rel="noopener noreferrer">infos festival</a> et <a href="https://electricforestfestival.com/forest-prep-guide" target="_blank" rel="noopener noreferrer">Forest Prep Guide</a> (en anglais).'},
    {html: 'Scènes, Sherwood Forest, The Brainery et anciennes affiches : <a href="https://electricforestfestival.com/experiences" target="_blank" rel="noopener noreferrer">Experiences</a> et <a href="https://electricforestfestival.com/a-look-back" target="_blank" rel="noopener noreferrer">A Look Back</a> (en anglais).'},
    {html: 'Le site : <a href="https://electricforestfestival.com/double-jj-resort" target="_blank" rel="noopener noreferrer">la page du Double JJ Resort</a> (en anglais).'},
    {html: 'L’annonce de la programmation 2026, en décembre 2025 : <a href="https://whitelakemirror.com/article/2025/12/electric-forest-sets-dates-lineup-for-june-2026-event" target="_blank" rel="noopener noreferrer">White Lake Mirror</a> et <a href="https://oceanacountypress.com/2025/12/08/electric-forest-drops-2026-lineup-tickets-go-on-sale-friday/" target="_blank" rel="noopener noreferrer">Oceana County Press</a>, la source du prix rapporté (en anglais).'},
    {html: 'Histoire : <a href="https://tvovermind.com/the-history-and-evolution-of-the-electric-forest-festival/" target="_blank" rel="noopener noreferrer">TV Overmind, 2019</a>, et la prolongation de l’autorisation, <a href="https://theticket953.com/ixp/689/p/electric-forest-festival-rothbury-michigan-extended/" target="_blank" rel="noopener noreferrer">The Ticket 95.3, 2024</a> (en anglais).'}
  ],

  bandcamp: {
    description: 'La musique que je fais moi-même. Acheter une sortie soutient directement mon travail.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 par thecatrave'},
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks par thecatrave'}
    ]
  }
};
