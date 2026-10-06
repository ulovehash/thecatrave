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
  dateModified: '2026-10-06',
  dateLabel: '6 octobre 2026',

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
    {id: 'planning', heading: 'Préparer l’île', title: 'Préparer son voyage au Sziget.', planning: {
      festivalName: 'Sziget 2027',
      intro: 'Le Sziget peut être un festival avec camping ou un séjour à Budapest. Calculez le pass, le transfert depuis l’aéroport ou la gare, le couchage et les transports quotidiens avant de choisir entre l’île et la ville.',
      ticketIntro: 'Prix officiels actuellement affichés pour 2027. Les frais en ligne sont séparés; les paliers suivants et le guichet peuvent coûter plus cher.',
      ticketRows: [
        {label: 'Pass cinq jours', note: 'Camping basic inclus avec une admission multi-jours éligible', price: '349 € + 23 € de frais'},
        {label: 'Pass cinq jours 21 ans et moins', note: 'Justificatif d’âge requis', price: '279 € + 18 € de frais'},
        {label: 'Pass VIP cinq jours', note: 'Zones VIP; hébergement séparé', price: 'dès 569 € + frais'},
        {label: 'Consigne pour sa propre tente', note: 'Remboursable si la tente est emportée ou rendue correctement', price: '30 €'}
      ],
      ticketNote: 'Billets journée, camping premium, tentes montées et forfaits hôtel sont vendus séparément. Vérifiez la boutique en direct car les paliers évoluent.',
      routes: [
        {title: 'Du centre à Filatorigát par le H5 HÉV', description: 'Prenez le M2 jusqu’à Batthyány tér ou le tram 4/6 jusqu’à Margit híd, puis le H5 jusqu’à Filatorigát. Comptez officiellement 35 à 45 minutes depuis les grandes gares.', link: {label: 'Filatorigát sur Google Maps', url: 'https://www.google.com/maps/search/?api=1&query=Filatorig%C3%A1t+H%C3%89V+Budapest'}},
        {title: 'Depuis l’aéroport en transports publics', description: 'Prenez le 100E jusqu’à Deák Ferenc tér, puis le M2 et le H5, ou le 200E, le M3, le tram 1 et le H5. Le 100E coûte actuellement 2 500 HUF; les correspondances demandent des titres valides.'},
        {title: 'Train international, car ou forfait festival', description: 'Arrivez dans une gare ferroviaire ou routière de Budapest puis terminez par le H5. Les forfaits officiels associent certains trajets et hôtels aux pass.', link: {label: 'Trajets officiels du Sziget', url: 'https://szigetfestival.com/en/travel/'}}
      ],
      routeNote: 'Le bateau et la navette spéciale depuis l’aéroport peuvent changer en 2027. Vérifiez BudapestGO et la page de transport du Sziget avant de partir.',
      accommodation: {body: 'Le camping basic est gratuit avec un pass complet, un pass trois jours ou au moins deux billets journée consécutifs. Campings premium, tentes montées, emplacements caravanes et hôtels à Budapest coûtent en plus.', link: {label: 'Comparer les hébergements officiels', url: 'https://szigetfestival.com/en/accommodation/'}},
      spending: {body: 'Le Sziget n’a pas publié de grille complète des prix 2027 pour les repas et les bars. L’île fonctionne sans espèces et un ALDI sur place vend nourriture et produits oubliés.', items: [
        {label: 'Bus aéroport 100E', value: '2 500 HUF (environ 7 €)'},{label: 'Trajet type depuis une gare', value: 'environ 1 000 HUF (2,50 €)'},{label: 'Sziget Citypass, 2 jours', value: '41 € + 3 € de frais'},{label: 'Sziget Citypass, 7 jours', value: '83 € + 5 € de frais'}
      ], link: {label: 'Informations officielles, paiement sans espèces', url: 'https://szigetfestival.com/en/festival-info'}},
      packing: ['Billet dans le portefeuille du téléphone et pièce d’identité avec photo','Gourde rechargeable sans verre, bouchons d’oreilles et batterie externe','Tente, matelas et sac de couchage pour le camping basic','Protection solaire, vêtement de pluie et chaussures pour marcher longtemps','Bon de consigne si vous apportez votre propre tente'],
      avoid: ['Verre, feux d’artifice, armes et drogues illégales','Réchauds à gaz, bouteilles de gaz, grills et matériel à flamme','Parapluies, marteaux et outils interdits par le règlement','Quantités commerciales de nourriture, tabac ou marchandises','Se fier à un ancien plan ou horaire de bateau'],
      rulesNote: 'Les règles d’entrée et de camping peuvent changer avant août. Le verre et le matériel de cuisson à flamme sont actuellement interdits; la consigne remboursable est obligatoire pour sa propre tente.',
      links: [
        {label: 'Site officiel', url: 'https://szigetfestival.com/en/'},{label: 'Billets 2027', url: 'https://szigetfestival.com/en/tickets/'},{label: 'Transport', url: 'https://szigetfestival.com/en/travel/'},{label: 'Hébergement', url: 'https://szigetfestival.com/en/accommodation/'},{label: 'Informations festival', url: 'https://szigetfestival.com/en/festival-info'},{label: 'Île d’Óbuda sur Google Maps', url: 'https://www.google.com/maps/search/?api=1&query=Sziget+Festival+Budapest'}
      ],
      checked: '2026-10-06', checkedLabel: '6 octobre 2026'
    }}
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
