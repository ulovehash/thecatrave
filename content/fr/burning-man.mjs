// French Burning Man guide. Structure and facts from the English page
// (burning-man-draft.md, burning-man-research.md, build-burning-man-article.mjs).
//
// French keywords, measured 2026-09-18 with keywords-explorer-matching-terms,
// country fr (keywords/fr-burning-man.json): burning man 13,000 a month,
// burning man festival 1,700, festival burning man 800, burning man 2027 150.
// The collisions are rejected in the map: the adult searches, Cara Delevingne
// (400), the costume and outfit cluster and the dated editions.
//
// Like the English page, this guide carries no mixes of the owner's: Burning
// Man is not in the festival list that plays them (audit-site-components.mjs).
//
// Imperial units are converted: 100 miles is about 160 km, the 9.2-mile fence
// almost 15 km, 100°F is 38 °C.
//
// The images are the English guide's, in img/burning-man/, with translated
// captions; see home-articles.mjs for why a translation may reuse them.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, articleYoutubeEmbed
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption, className = 'wide-archive-image') => articleFigure({
  src: `img/burning-man/${name}-${width}.webp`,
  srcset: `img/burning-man/${name}-320.webp 320w, img/burning-man/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className
});

const youtube = (id, label) => articleYoutubeEmbed({
  src: `https://www.youtube-nocookie.com/embed/${id}`,
  title: label
});

export default {
  lang: 'fr',
  name: 'fr-burning-man',
  file: 'fr/burning-man.html',
  draft: 'fr/burning-man-draft.md',
  canonical: 'https://thecatrave.com/fr/burning-man',
  englishPath: '/what-is-burning-man',
  ogImage: 'https://thecatrave.com/img/og/burning-man.jpg',
  bodyClass: 'article-page burning-man-page',

  title: 'Qu’est-ce que Burning Man ? La ville du désert et sa musique',
  description: 'Burning Man n’est pas un festival avec une affiche mais une ville éphémère au Nevada. Ce qui s’y passe, où, combien ça coûte et ce que jouent les sound camps.',
  datePublished: '2026-09-18',
  dateModified: '2026-09-18',
  dateLabel: '18 septembre 2026',

  heroKicker: 'Burning Man',
  heroTitle: 'Qu’est-ce que Burning Man ?',
  deck: 'Une ville construite par ses participants dans le désert du Nevada, sans programmation centrale ni grande scène. Ce qui s’y passe, et ce que jouent vraiment ses sound camps.',
  answerLabel: 'Qu’est-ce que Burning Man',
  breadcrumbName: 'Qu’est-ce que Burning Man ?',

  answerSection: 'Réponse',
  introSection: 'Introduction',
  introTitle: 'Une ville, pas un festival.',
  faqSection: 'FAQ',
  faqLabel: 'Questions fréquentes',
  faqTitle: 'Questions fréquentes sur Burning Man.',

  sections: [
    {id: 'black-rock-city', heading: 'Black Rock City', title: 'Black Rock City.', subsections: ['burning-man-2027']},
    {id: 'what-happens', heading: 'Ce qui se passe à Burning Man', title: 'Ce qui se passe à Burning Man.'},
    {id: 'principles', heading: 'Les dix principes', title: 'Les dix principes.'},
    {id: 'music', heading: 'Burning Man est-il un festival de musique ?', title: 'Burning Man est-il un festival de musique ?', kicker: 'La musique', subsections: ['sound-camps', 'robot-heart', 'mayan-warrior']},
    {id: 'history', heading: 'Une courte histoire de Burning Man', title: 'Une courte histoire de Burning Man.'},
    {id: 'controversy', heading: 'Pourquoi Burning Man est-il si controversé ?', title: 'Pourquoi Burning Man est-il si controversé ?'},
    {id: 'from-home', heading: 'Écouter Burning Man depuis chez soi', title: 'Écouter Burning Man depuis chez soi.'}
  ],

  media: () => ({
    'Earth from Space': figure('esa', 1004, 753,
      'Image satellite de Black Rock City dans le désert du Nevada, un arc de rues autour d’un centre vide',
      'Black Rock City vue de l’orbite pendant Burning Man 2024. L’arc des rues et le centre vide, où se dresse le Man, sont visibles depuis l’espace. Contient des données Copernicus Sentinel modifiées (2024), traitées par l’ESA.'),
    '747 Art Car': figure('art-car-747', 1200, 699,
      'L’art car 747, un fuselage de Boeing 747 transformé en mutant vehicle, sur la playa de Burning Man',
      'Le 747 de Big Imagination, l’un des mutant vehicles autorisés qui traversent la playa au pas. Photo : Steve Jurvetson, CC BY 2.0.'),
    'Robot Heart, Peretz': figure('robot-heart', 1200, 799,
      'L’art car de Robot Heart sur la playa de Burning Man, un bus surmonté d’un grand cœur illuminé',
      'Le bus de Robot Heart sur la playa. Ses sets durent du milieu de la nuit jusque bien après le lever du soleil. Photo : Peretz Partensky, CC BY 2.0.'),
    '1987 poster': figure('poster-1987', 345, 450,
      'Affiche de Burning Man 1987 sur Baker Beach, à San Francisco',
      'L’affiche du deuxième feu, en 1987, encore sur Baker Beach à San Francisco, trois ans avant le départ pour le désert.',
      'archive-image'),
    'XwK7sA9PuCE': youtube('XwK7sA9PuCE', 'Lee Burridge, Robot Heart, Burning Man 2019, sur la chaîne YouTube de Robot Heart'),
    'MNkApftw_iM': youtube('MNkApftw_iM', 'YAMAGUCCI, Mayan Warrior, Burning Man 2025, sur la chaîne YouTube de Mayan Warrior'),
    'S7OBT3kQAHQ': articleVideoCollection({
      lang: 'fr',
      label: 'Burning Man 2025, deux camps',
      description: 'Deux sets de Burning Man 2025, un pour chaque camp ci-dessus : le lever de soleil du samedi de Lee Burridge à Robot Heart, et John Summit sur Mayan Warrior. De longs enregistrements, faits pour les heures que personne ne programme.',
      items: [
        articleVideoCard({youtubeId: 'S7OBT3kQAHQ', genre: 'Robot Heart, 2025', artist: 'Lee Burridge', title: 'Live depuis Robot Heart, Burning Man 2025'}),
        articleVideoCard({youtubeId: 'd8zUK6nAbr8', genre: 'Mayan Warrior, 2025', artist: 'John Summit', title: 'Mayan Warrior, Burning Man 2025'})
      ]
    }),
    'Table: attendance': articleTable({
      headers: ['Année', 'Participants', 'Ce qui s’est passé'],
      rows: [
        ['1986', '35', 'Premier feu, Baker Beach, San Francisco'],
        ['2019', '78 850', 'Le record'],
        ['2020', 'aucun', 'Annulé à cause de la pandémie, la première annulation'],
        ['2021', 'aucun', 'De nouveau annulé'],
        ['2023', '74 126', 'La pluie inonde la playa le week-end de Labor Day'],
        ['2024', '69 141', 'Pas complet pour la première fois depuis 2011'],
        ['2025', '72 181', '']
      ].map(row => row.map(escapeHtml))
    }),
    // The English page appends this table to its introduction in the
    // generator; here the draft places it, so it renders in the same spot.
    'Table: Comparaison': articleTable({
      headers: ['Ce qu’on attend d’un festival', 'Ce qui se passe à Burning Man'],
      rows: [
        ['Une programmation centrale', 'Pas d’affiche pour tout l’événement ; les camps et les art cars programment leur propre musique'],
        ['Une grande scène', 'Pas de grande scène ; le son est réparti dans toute la ville'],
        ['Des stands de nourriture et de boissons', 'Les participants apportent ce dont ils ont besoin ; seul l’essentiel est vendu'],
        ['Un public qui regarde un spectacle', 'Les participants construisent camps, œuvres, services et événements'],
        ['Un lieu permanent', 'Black Rock City est construite dans le désert du Nevada et démontée après l’événement'],
        ['On part après le dernier concert', 'La ville culmine avec les feux du Man et du Temple, puis disparaît']
      ].map(row => row.map(escapeHtml))
    })
  }),

  sources: [
    {href: 'https://burningman.org/black-rock-city/preparation/first-timers-guide/', label: 'Burning Man Project : First-Timers’ Guide'},
    {href: 'https://burningman.org/about/10-principles/', label: 'Burning Man Project  : les dix principes de Burning Man'},
    {href: 'https://burningman.org/black-rock-city/preparation/infrastructure/sound-policy/', label: 'Burning Man Project : Sound Policy in Black Rock City'},
    {href: 'https://journal.burningman.org/2023/08/black-rock-city/building-brc/sound-policy-update/', label: 'Burning Man Journal : Sound Policy Update'},
    {href: 'https://survival.burningman.org/city-infrastructure/on-playa-resources/', label: 'Burning Man Survival Guide 2026 : On-Playa Resources'},
    {href: 'https://burningman.org/podcast/return-to-black-rock-city/', label: 'Burning Man Project : Return to Black Rock City'},
    {href: 'https://survival.burningman.org/survival-health-and-safety/consent-and-sexual-misconduct/', label: 'Burning Man Survival Guide 2026 : Consent and Sexual Misconduct'},
    {href: 'https://burningman.org/black-rock-city/preparation/playa-living/weather/', label: 'Burning Man Project  : la météo'},
    {href: 'https://burningman.org/black-rock-city/black-rock-city-2026/2026-camps/', label: 'Burning Man Project  : les camps 2026'},
    {href: 'https://burningman.org/black-rock-city/ticketing-information/', label: 'Burning Man Project  : informations billetterie'},
    {href: 'https://burningman.org/black-rock-city/bring-your-art/art-grants-programs/temple/brc-temple-grant-history/', label: 'Burning Man Project  : histoire et sens du Temple'},
    {href: 'https://journal.burningman.org/2021/11/black-rock-city/tales-from-the-playa/burning-mans-first-sound-camp/', label: 'Burning Man Journal : Meet the DJs Who Started Burning Man’s First Sound Camp'},
    {href: 'https://journal.burningman.org/2015/07/philosophical-center/tenprinciples/whats-actually-going-on-with-dance-music-at-burning-man/', label: 'Burning Man Journal : What’s Actually Going On with Dance Music at Burning Man'},
    {href: 'https://journal.burningman.org/2024/01/black-rock-city/leaving-no-trace/2023-moop-map/', label: 'Burning Man Journal : Leaving No Trace 2023, the MOOP Map'},
    {href: 'https://journal.burningman.org/2026/09/news/official-announcements/participant-passes-away-at-2026-burning-man-event/', label: 'Burning Man Journal : Participants Pass Away at 2026 Burning Man Event'},
    {href: 'https://www.billboard.com/music/music-news/burning-man-robot-heart-george-mueller-geo-founder-died-9630680/', label: 'Billboard : How Burning Man’s Famed Robot Heart Camp Is Carrying on After the Death of Founder George Mueller'},
    {href: 'https://www.billboard.com/music/music-news/mayan-warrior-fire-interview-burning-man-art-car-1235398142/', label: 'Billboard : Burning Man’s Mayan Warrior Art Car Destroyed in Fire'},
    {href: 'https://edmallday.com/mayan-warrior-is-pausing-its-art-car-at-burning-man-2026/', label: 'EDM All Day : Mayan Warrior Is Pausing Its Art Car at Burning Man 2026'},
    {href: 'https://en.wikipedia.org/wiki/Burning_Man', label: 'Wikipedia : Burning Man'},
    {href: 'https://en.wikipedia.org/wiki/Burning_Man_2023', label: 'Wikipedia : Burning Man 2023'}
  ],

  bandcamp: {
    description: 'Burning Man n’a pas d’affiche centrale ; les camps et les équipes des art cars programment eux-mêmes la musique. Voici la mienne, côté breaks et basses. Acheter un morceau soutient directement mon travail.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks par thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 par thecatrave'}
    ]
  }
};
