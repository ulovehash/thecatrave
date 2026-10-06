import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, ownSetListening
} from '../../site-components.mjs';
import {localizedFestivalPlanning} from '../festival-planning-data.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption, className = 'wide-archive-image') => articleFigure({
  src: `img/exit-festival/${name}-1200.webp`,
  srcset: `img/exit-festival/${name}-320.webp 320w, img/exit-festival/${name}-1200.webp ${width}w`,
  width, height, alt, caption, className
});

export default {
  lang: 'fr',
  name: 'fr-exit-festival',
  file: 'fr/exit-festival.html',
  draft: 'fr/exit-festival-draft.md',
  canonical: 'https://thecatrave.com/fr/exit-festival',
  englishPath: '/exit-festival',
  ogImage: 'https://thecatrave.com/img/og/exit-festival.jpg',
  bodyClass: 'article-page exit-festival-page',

  title: 'Festival EXIT : histoire, forteresse de Petrovaradin et suite',
  description: 'Le festival EXIT est né en 2000 à Novi Sad et s’est tenu jusqu’en 2025 à la forteresse de Petrovaradin. Histoire, Dance Arena, musique et ce qui suit en 2026.',
  datePublished: '2026-10-01',
  dateModified: '2026-10-06',
  dateLabel: '6 octobre 2026',

  heroKicker: 'Histoire du festival',
  heroTitle: 'EXIT Festival : de Novi Sad à la tournée mondiale',
  deck: 'D’un mouvement étudiant en 2000 à la forteresse de Petrovaradin, la fin de l’édition serbe après 25 ans, et ce qui s’appelle encore EXIT aujourd’hui.',
  answerLabel: 'Ce qui est arrivé au festival EXIT',
  breadcrumbName: 'EXIT Festival',

  answerSection: 'Réponse',
  introSection: 'Introduction',
  introTitle: 'L’ère de la forteresse s’est terminée après 25 ans.',
  faqSection: 'FAQ',
  faqLabel: 'Questions fréquentes',
  faqTitle: 'Questions fréquentes sur le festival EXIT.',

  sections: [
    {id: 'after-2025', heading: 'Ce qui s’est passé après EXIT 2025', title: 'Ce qui s’est passé après EXIT 2025.'},
    {id: 'history', heading: 'D’un mouvement étudiant à la forteresse', title: 'D’un mouvement étudiant à la forteresse.'},
    {id: 'petrovaradin', heading: 'La forteresse de Petrovaradin et la Dance Arena', title: 'La forteresse de Petrovaradin et la Dance Arena.'},
    {id: 'music', heading: 'La musique d’EXIT', title: 'La musique d’EXIT.'},
    {id: 'network', heading: 'EXIT comme réseau de festivals', title: 'EXIT comme réseau de festivals.'},
    {id: 'current-events', heading: 'Comment suivre EXIT aujourd’hui', title: 'Préparez maintenant un événement EXIT.', planning: localizedFestivalPlanning('exit', 'fr')}
  ],

  media: ({lang}) => ({
    'Fortress': figure('exit-fortress', 800, 509, 'La forteresse de Petrovaradin illuminée pendant le festival EXIT', 'La forteresse de Petrovaradin pendant EXIT. Les murs, les portes et le fossé ont façonné le fonctionnement du festival de Novi Sad de 2001 à 2025. Photo : EXIT photo team, CC BY-SA 3.0.'),
    'Crowd': figure('exit-crowd', 1200, 784, 'Foule dense dans la forteresse de Petrovaradin pendant le festival EXIT en 2015', 'Une foule dans la forteresse de Petrovaradin en 2015. Les scènes d’EXIT occupaient un site historique en activité plutôt qu’un champ de festival construit pour l’occasion. Photo : Jelena Ivanovic, EXIT photo team, CC BY-SA 3.0.'),
    'thecatrave mix 1': ownSetListening(0, lang, 'Mon propre mix multigenre, comme parcours personnel à travers la techno, les breaks et la bass music, et non une reconstitution de la Dance Arena.'),
    'thecatrave mix 2': ownSetListening(1, lang, 'Pour l’ère actuelle d’EXIT, de lieu en lieu : un parcours électronique, pendant que chaque événement officiel garde sa propre programmation.'),
    'Keinemusik and Nina Kraviz': articleVideoCollection({
      lang,
      label: 'Deux sets de la Dance Arena sur la chaîne d’EXIT',
      description: 'Keinemusik en 2023 et Nina Kraviz en 2016 à la Dance Arena, avec environ 5,4 et 3,7 millions de vues parmi les enregistrements de la Dance Arena les plus regardés sur la chaîne d’EXIT.',
      items: [
        articleVideoCard({youtubeId: '6L0GMr8FFyc', genre: 'Dance Arena, 2023', artist: 'Keinemusik', title: 'EXIT Dance Arena, 2023'}),
        articleVideoCard({youtubeId: 'WJnhTXQ6a9Y', genre: 'Dance Arena, 2016', artist: 'Nina Kraviz', title: 'EXIT Dance Arena, 2016'})
      ]
    }),
    'Table: Faits': articleTable({
      headers: ['Sujet', 'État'],
      rows: [
        ['Fondation', '2000 à University Park, Novi Sad'],
        ['Éditions de la forteresse', '2001 à 2025 à la forteresse de Petrovaradin'],
        ['Dernière édition serbe annoncée', '10 au 13 juillet 2025'],
        ['Format 2026', 'Tournée mondiale et nouveaux festivals distincts'],
        ['Retour à Novi Sad', 'non confirmé'],
        ['Musique principale', 'Multigenre, avec house et techno à la Dance Arena']
      ].map(row => row.map(escapeHtml))
    })
  }),

  sources: [
    {href: 'https://exitfest.org/en/about-us', label: 'EXIT : À propos'},
    {href: 'https://exitfest.org/en/exit-festival-announces-final-edition-in-serbia-amid-undemocratic-pressures', label: 'EXIT : annonce de la dernière édition en Serbie'},
    {href: 'https://exitfest.org/global-tour', label: 'EXIT : Global Tour'},
    {href: 'https://exitfest.org/en/were-not-moving-exit-to-skopje-or-egypt-were-creating-new-festivals-by-the-great-pyramids-of-giza-and-around-the-world', label: 'EXIT : nous ne déménageons pas à Skopje ni en Égypte, nous créons de nouveaux festivals'},
    {href: 'https://www.lemonde.fr/en/international/article/2025/07/03/the-exit-music-festival-in-serbia-faces-closure-as-government-cracks-down-on-dissent_6742968_4.html', label: 'Le Monde : reportages sur EXIT, les manifestations et le financement public'}
  ],

  bandcamp: {
    description: 'Ce guide vous a servi ? Ma propre musique est sur Bandcamp. La programmation de la forteresse mêlait rock, hip-hop et musique de club ; ces sorties de thecatrave se rattachent à son côté électronique.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 de thecatrave'},
      {title: '60 hours of mistakes', id: '3330948631', url: 'https://thecatrave.bandcamp.com/track/60-hours-of-mistakes', linkText: '60 hours of mistakes de thecatrave'}
    ]
  }
};
