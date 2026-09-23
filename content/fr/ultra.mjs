// French Ultra guide. Structure and facts from the English page
// (ultra-draft.md, ultra-research.md, build-ultra-article.mjs).
//
// French keywords (keywords/fr-ultra.json): ultra music festival 200 a month
// in France and ultra miami 100 (TRANSLATION-RESEARCH.md, French stage 2).
// The wording was checked in the live Google results for France on
// 2026-09-23, no Ahrefs units spent: "Autres questions" asks "Quel est le prix
// d'un billet pour l'Ultra Music Festival ?" and "Quand aura lieu le festival
// Ultra Music à Miami en 2027 ?", and Bing's French results add "festival
// Ultra Miami" and "Ultra festival Croatie". French writes "l'Ultra",
// masculine, as fr.wikipedia does.
//
// The images are the English guide's, in img/ultra/, with translated captions;
// see home-articles.mjs for why a translation may reuse them.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, articleYoutubeEmbed, ownTrackListening
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption, className = 'wide-archive-image') => articleFigure({
  src: `img/ultra/${name}-${width}.webp`,
  srcset: `img/ultra/${name}-320.webp 320w, img/ultra/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className
});

export default {
  lang: 'fr',
  name: 'fr-ultra',
  file: 'fr/ultra-music-festival.html',
  draft: 'fr/ultra-draft.md',
  canonical: 'https://thecatrave.com/fr/ultra-music-festival',
  englishPath: '/ultra-music-festival',
  ogImage: 'https://thecatrave.com/img/og/ultra.jpg',
  bodyClass: 'article-page ultra-page',

  title: 'Ultra Music Festival 2027 : dates, lieu à Miami et musique',
  description: 'L’Ultra Music Festival 2027 a lieu du 26 au 28 mars au Bayfront Park de Miami : le lieu, l’âge minimum, Ultra Europe et la musique loin de la Main Stage.',
  datePublished: '2026-09-23',
  dateModified: '2026-09-23',
  dateLabel: '23 septembre 2026',

  heroKicker: 'Ultra Music Festival',
  heroTitle: 'Ultra Music Festival Miami',
  deck: 'L’Ultra revient au Bayfront Park du 26 au 28 mars 2027, à la fin de la Miami Music Week. Où il a lieu, qui peut y entrer et ce qui se joue loin de la Main Stage.',
  answerLabel: 'Qu’est-ce que l’Ultra Music Festival',
  breadcrumbName: 'Ultra Music Festival',

  answerSection: 'Réponse',
  introSection: 'Introduction',
  introTitle: 'Le festival qui clôt la Miami Music Week.',
  faqSection: 'FAQ',
  faqLabel: 'Questions fréquentes',
  faqTitle: 'Questions fréquentes sur l’Ultra Music Festival.',
  ownSetAfter: 'history',

  sections: [
    {id: 'where', heading: 'Où a lieu l’Ultra Music Festival', title: 'Où a lieu l’Ultra Music Festival.', subsections: ['ultra-2027']},
    {id: 'how-big', heading: 'Quelle est la taille de l’Ultra', title: 'Quelle est la taille de l’Ultra.'},
    {id: 'history', heading: 'Une brève histoire, et à qui appartient l’Ultra', title: 'Une brève histoire, et à qui appartient l’Ultra.'},
    {id: 'worldwide', heading: 'L’Ultra dans le monde', title: 'L’Ultra dans le monde.'},
    {id: 'ultra-europe', heading: 'Ultra Europe, à Split en Croatie', title: 'Ultra Europe, à Split en Croatie.'},
    {id: 'famous', heading: 'Pourquoi l’Ultra est devenu si célèbre', title: 'Pourquoi l’Ultra est devenu si célèbre.'},
    {id: 'music', heading: 'Ce que joue vraiment l’Ultra', title: 'Ce que joue vraiment l’Ultra.', kicker: 'La musique'},
    {id: 'from-home', heading: 'Écouter l’Ultra depuis chez soi', title: 'Écouter l’Ultra depuis chez soi.'}
  ],

  media: ({lang}) => ({
    // The owner's own music inside the text, as on every French festival guide
    // (owner, 2026-09-21: Dégénération on the French pages).
    'thecatrave degeneration': ownTrackListening('degeneration', 'Loin des grandes scènes : la voix de Mylène Farmer sur des breaks, entre dubstep et UK garage. Mon propre remix.', lang),
    'Bayfront Park, 2014': figure('bayfront-2014', 1200, 900,
      'Le Bayfront Park, dans le centre de Miami, vu d’en haut pendant l’Ultra 2014, la Main Stage et les tentes à côté de la marina et de la baie de Biscayne',
      'Le Bayfront Park vu d’en haut pendant le festival 2014, la Main Stage à côté de la marina sur la baie de Biscayne. Photo : Pietro, CC BY-SA 3.0.'),
    'Panoramic View of Bayfront Park': figure('bayfront-2013', 1200, 795,
      'Un panorama en fisheye du Bayfront Park aménagé pour l’Ultra 2013, avec les structures des scènes et les tentes entre les tours de Miami et la baie',
      'Le Bayfront Park le jeudi précédant le second week-end de 2013, la seule année où l’Ultra a duré deux week-ends. Photo : Robert Giordano, CC BY-SA 3.0.'),
    'Ultra Music Festival 20110326': figure('bicentennial-2011', 1200, 666,
      'Vue aérienne de l’Ultra au Bicentennial Park en 2011, une foule dense devant la Main Stage et les tours du centre de Miami derrière',
      'L’Ultra au Bicentennial Park en 2011, sa première année sur trois jours et sa dernière avant le retour au Bayfront Park. Photo : Averette, CC BY 3.0.'),
    'Split, Ultra Europe 2015': figure('poljud-2015', 1200, 900,
      'Une foule en plein jour sur la pelouse du stade de Poljud, à Split, pendant Ultra Europe 2015, sous le toit en arc du stade',
      'Le public de la Main Stage sur la pelouse du stade de Poljud, à Split, pendant Ultra Europe 2015. Photo : Shadster, CC BY-SA 4.0.'),
    'Swedish House Mafia on Platform': figure('swedish-house-mafia-2018', 1200, 1008,
      'Les silhouettes de Swedish House Mafia sur une plateforme surélevée, dans la lumière bleue et la fumée au-dessus de la foule, à l’Ultra Miami 2018',
      'Swedish House Mafia sur sa plateforme à l’Ultra 2018, en clôture du festival, pour sa première apparition live commune depuis 2013. Photo : HollywoodAdam78, CC BY-SA 4.0.'),
    'EYMJizj3Qq8': articleYoutubeEmbed({
      src: 'https://www.youtube-nocookie.com/embed/EYMJizj3Qq8',
      title: 'Pendulum / Knife Party, set de clôture à l’Ultra 2016, sur la chaîne YouTube de Pendulum'
    }),
    'V2VmcuOEqEg': articleVideoCollection({
      lang,
      label: 'Les sets les plus vus de l’Ultra',
      description: 'Deux sets de la Main Stage : Skrillex en 2015, plus de 94 millions de vues sur sa propre chaîne, et Hardwell en 2013, plus de 35 millions sur la sienne.',
      items: [
        articleVideoCard({youtubeId: 'V2VmcuOEqEg', genre: 'Main Stage, 2015', artist: 'Skrillex', title: 'Live à l’Ultra Music Festival 2015'}),
        articleVideoCard({youtubeId: 'jXOgYxUf6Ts', genre: 'Main Stage, 2013', artist: 'Hardwell', title: 'Live à l’Ultra Music Festival 2013'})
      ]
    }),
    // Summed admissions across each multi-day edition, not unique visitors or
    // ticket counts, as on the English page. Typed, not computed.
    'Table: fréquentation': articleTable({
      headers: ['Année', 'Fréquentation', 'Où, et ce qui s’est passé'],
      rows: [
        ['1999', 'environ 10 000', 'Collins Park, Miami Beach : un jour sur la plage'],
        ['2001', '21 000', 'Première année au Bayfront Park'],
        ['2006', '48 000', 'Première année au Bicentennial Park'],
        ['2010', 'plus de 100 000 (chiffre de l’Ultra)', 'Premier complet, deux jours ; le tableau de Wikipédia donne 93 000'],
        ['2011', '100 000', 'Première édition sur trois jours'],
        ['2013', '330 000', 'Deux week-ends, pour les quinze ans'],
        ['2014 à 2018', '165 000 entrées', 'Bayfront Park, cumulées sur trois jours'],
        ['2019', '170 000', 'Virginia Key, sa seule année là-bas'],
        ['2020 et 2021', 'aucune', 'Annulé à cause de la pandémie'],
        ['2022 à 2026', '165 000 entrées', 'Cumulées sur trois jours ; public venu de 100 pays en 2026']
      ].map(row => row.map(escapeHtml))
    })
  }),

  // The English page's sources, URL for URL, with translated labels.
  sources: [
    {href: 'https://ultramusicfestival.com/ticketing-terms-and-conditions-2027', label: 'Ultra Music Festival : conditions de billetterie 2027 (en anglais)'},
    {href: 'https://ultramusicfestival.com/', label: 'Ultra Music Festival : dates officielles 2027 et état actuel de la billetterie'},
    {href: 'https://search.sunbiz.org/Inquiry/CorporationSearch/SearchResults?InquiryDirectionType=PreviousRecord&InquiryType=EntityName&SearchNameOrder=EVENTENTS+L120000583930', label: 'Registre des sociétés de Floride (Division of Corporations) : Event Entertainment Group, Inc.'},
    {href: 'https://law.justia.com/cases/florida/third-district-court-of-appeal/2017/3d16-0338.html', label: 'Cour d’appel de Floride (Third District Court of Appeal) : Omes v. Ultra Enterprises, Inc.'},
    {href: 'https://www.miamiherald.com/news/local/community/miami-dade/article315519662.html', label: 'Miami Herald : Miami prolonge l’Ultra au Bayfront Park'},
    {href: 'https://djmag.com/news/watch-swedish-house-mafias-set-ultra-miami-2026', label: 'DJ Mag : le set de Swedish House Mafia à l’Ultra Miami 2026'},
    {href: 'https://www.miaminewtimes.com/music/best-ultra-music-festival-performances-of-all-time-22695840/', label: 'Miami New Times : les meilleures prestations de l’histoire de l’Ultra Music Festival'},
    {href: 'https://www.miaminewtimes.com/music/ultra-music-festival-facing-10-million-lawsuit-from-injured-security-guard-erica-mack-6442197', label: 'Miami New Times : la plainte à 10 millions de dollars de l’agente de sécurité blessée Erica Mack'},
    {href: 'https://www.electricfeels.com/2026/04/01/ultra-music-festival-closes-out-triumphant-2026-edition-as-miami-dade-county-proclaims-march-28-as-ultra-music-festival-day/', label: 'Electric Feels : l’Ultra Music Festival clôt son édition 2026'},
    {href: 'https://ultraeurope.com/worldwide/ultra-europe-concludes-ninth-edition-in-split-croatia-with-attendees-from-140-countries/', label: 'Ultra Europe : neuvième édition à Split avec un public de plus de 140 pays'},
    {href: 'https://ultraeurope.com/tickets/festival', label: 'Ultra Europe : dates officielles et billets 2027'},
    {href: 'https://www.croatiaweek.com/ultra-europe-2026-split-calvin-harris/', label: 'Croatia Week : Calvin Harris tête d’affiche d’Ultra Europe 2026 à Split'}
  ],

  bandcamp: {
    description: 'Ce que je fais moi-même, c’est du breakbeat, loin du Bayfront Park. Acheter un morceau soutient directement mon travail.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks par thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 par thecatrave'}
    ]
  }
};
