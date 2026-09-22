// French Paris clubs guide. Structure and facts from the English page
// (paris-clubs-draft.md, paris-clubs-research.md, build-paris-clubs-article.mjs).
//
// French keywords, measured 2026-09-22 with Google Ads Keyword Planner
// (owner's account, country France, tool switch per KEYWORD-METHOD.md):
// boite de nuit paris 10K-100K, a full order of magnitude above the
// English-phrased "clubs in paris". boite de nuit barcelone 1K-10K (control
// row, unrelated to this page). French searchers write "boite" without the
// circumflex (1990 spelling reform), matching fr/boite-de-nuit-berlin.html's
// convention; this page's title carries the accent-free spelling and the
// body uses it wherever a French reader actually would.
//
// Live Google search (google.fr, hl=fr/gl=fr) surfaces Time Out Paris
// ("La Station - Gare des Mines, Essaim, Le 211, Fvtvr, La Machine du Moulin
// Rouge, Virage"), Paris ZigZag ("Madame Arthur, Panic Room, Djoon, La Gare
// / Le Gore, La Station - Gare des Mines") and GQ France ("La Machine du
// Moulin Rouge, Le Boum Boum, Le Pamela, Le Silencio"). Only Badaboum, Essaim
// and La Station repeat across 2+ of the French-language lists actually
// read; the others are noted but not claimed as consensus.
//
// Like the English page, this guide carries the Dégénération original and
// remix, the page's actual French connection.
//
// The images are the English guide's, in img/paris-clubs/, with translated
// captions; see home-articles.mjs for why a translation may reuse them.
import {
  articleFigure, articleListeningBand, articleTable, ownSetListening, ownTrackListening
} from '../../site-components.mjs';
import {t} from '../../i18n.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/paris-clubs/${name}-${width}.webp`,
  srcset: `img/paris-clubs/${name}-320.webp 320w, img/paris-clubs/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

export default {
  lang: 'fr',
  name: 'fr-paris-clubs',
  file: 'fr/boite-de-nuit-paris.html',
  draft: 'fr/paris-clubs-draft.md',
  canonical: 'https://thecatrave.com/fr/boite-de-nuit-paris',
  englishPath: '/best-clubs-in-paris',
  ogImage: 'https://thecatrave.com/img/og/paris-clubs.jpg',
  bodyClass: 'article-page paris-clubs-page',

  title: 'Boite de nuit Paris : les meilleures boîtes',
  description: 'Le Palace, Les Bains Douches et le Rex Club : les boîtes qui ont façonné la nuit parisienne, et les meilleures boîtes de nuit à Paris aujourd\'hui.',
  datePublished: '2026-09-22',
  dateModified: '2026-09-22',
  dateLabel: '22 septembre 2026',

  heroKicker: 'Boite de nuit Paris',
  heroTitle: 'Les meilleures boites de nuit à Paris, du Palace au Rex Club',
  deck: 'Deux légendes fermées et une salle qui ne l\'a jamais été : les boîtes qui ont façonné la nuit parisienne, et les meilleures boîtes de nuit à Paris ouvertes aujourd\'hui.',
  answerLabel: 'Les meilleures boites de nuit à Paris',
  breadcrumbName: 'Les meilleures boites de nuit à Paris',

  answerSection: 'Réponse',
  introSection: 'Introduction',
  introTitle: 'Une mémoire plus longue qu\'un club.',
  faqSection: 'FAQ',
  faqLabel: 'Questions fréquentes',
  faqTitle: 'Questions fréquentes sur les boites de nuit à Paris.',

  sections: [
    {id: 'before-clubs-closed', heading: 'Avant les fermetures : le Palace et Les Bains Douches', title: 'Avant les fermetures : le Palace et Les Bains Douches.'},
    {id: 'rex-club', heading: 'Le Rex Club : la salle qui a donné une maison à la techno parisienne', title: 'Le Rex Club : la salle qui a donné une maison à la techno parisienne.'},
    {id: 'best-clubs-now', heading: 'Les meilleures boites de nuit à Paris aujourd\'hui', title: 'Les meilleures boites de nuit à Paris aujourd\'hui.'},
    {id: 'where-to-go', heading: 'Où aller : le 11e arrondissement et le canal Saint-Martin', title: 'Où aller : le 11e arrondissement et le canal Saint-Martin.'},
    {id: 'hear-paris', heading: 'Écouter Paris avant d\'y aller', title: 'Écouter Paris avant d\'y aller.'}
  ],

  media: ({lang}) => ({
    'Entrée des Bains Douches': figure('les-bains-douches-entrance', 1280, 1707,
      "L'entrée de l'ancienne boîte de nuit Les Bains Douches, 7 rue du Bourg-l'Abbé, Paris",
      "L'entrée au 7 rue du Bourg-l'Abbé, photographiée en 2016. Les Bains Douches a fermé comme club en 2010 et a rouvert en hôtel en 2015. Photo : Thomon, CC BY-SA 4.0."),
    'thecatrave Degeneration': ownTrackListening('degeneration', 'Le garage et le dubstep comme outils plutôt que comme frontières : mon remix avec des breaks sous un vocal de pop française, à côté du club qui a donné une salle à la musique électronique française.', lang),
    'Mylène Farmer Degeneration original': articleListeningBand({
      platform: 'spotify',
      id: 'degeneration-original',
      kicker: t(lang).essentialListening,
      title: 'Mylène Farmer, Dégénération : l\'enregistrement original.',
      description: 'Le single de 2008 dont mon remix ci-dessus est tiré, produit par Laurent Boutonnat. Sur Spotify, vérifié contre le catalogue de Mylène Farmer elle-même.',
      src: 'https://open.spotify.com/embed/track/4j5JxFQLHDw5JSgXfcCeZB?utm_source=generator&theme=0',
      iframeTitle: 'Mylène Farmer, Dégénération, sur Spotify',
      fullBleed: true,
      tone: 'cyan'
    }),
    'thecatrave Protect Ya Breaks': ownTrackListening('protect-ya-breaks', 'Des breaks progressifs à 128 BPM avec des vocals rap découpés et un basculement downtempo. Mon propre morceau.', lang),
    'thecatrave mix I Like to Smoke in Silence After Raves': ownSetListening(0, lang, 'Trente morceaux où les breaks circulent entre garage, bass music, techno et rave. Mon propre mix.'),
    'Table: now': articleTable({
      headers: ['Boîte', 'Quartier', 'Musique et caractère', 'Idéal pour'],
      rows: [
        ['Rex Club', 'Grands Boulevards (2e)', 'Techno et house depuis 1988, dans le sous-sol du cinéma Grand Rex', "L'histoire et un système de son entretenu depuis des décennies"],
        ['Badaboum', '11e arrondissement (Bastille)', 'Une programmation accessible à côté d\'une offre underground crédible', 'Une première étape sur la route des bars de Bastille'],
        ['Essaim', '10e arrondissement (canal Saint-Martin)', 'Un dancefloor unique et minimaliste, avec un vrai soin du son', 'Une salle intime dans l\'ensemble du canal Saint-Martin'],
        ['La Station - Gare des Mines', '18e arrondissement', 'Du club expérimental à la techno et à la baile funk, dans une ancienne gare à charbon', 'Un peu plus loin du centre, proche des collectifs grassroots et queer']
      ].map(row => row.map(escapeHtml)),
      label: 'Les meilleures boites de nuit à Paris aujourd\'hui'
    })
  }),

  sources: [
    {href: 'https://en.wikipedia.org/wiki/Les_Bains_Douches_(nightclub)', label: 'Wikipedia : Les Bains Douches (nightclub)'},
    {href: 'https://www.theculturecrush.com/feature/paris-de-nuit', label: "The Culture Crush : Paris' Famous Les Bains Nightclub Photographed"},
    {href: 'https://metropolismag.com/projects/pariss-les-bains-is-reborn-as-a-boutique-hotel/', label: "Metropolis Magazine : Paris's Les Bains Is Reborn as a Boutique Hotel, 2015"},
    {href: 'https://museeyslparis.com/en/stories/les-annees-palace', label: 'Musée Yves Saint Laurent Paris : A Look Back at the Palace Years'},
    {href: 'https://en.wikipedia.org/wiki/Le_Palace', label: 'Wikipedia : Le Palace'},
    {href: 'https://en.wikipedia.org/wiki/Fabrice_Emaer', label: 'Wikipedia : Fabrice Emaer'},
    {href: 'https://ra.co/guides/clubs-in-paris', label: 'Resident Advisor : The Best Clubs in Paris in 2026'},
    {href: 'https://djmag.com/news/paris-rex-club-celebrates-35th-anniversary-new-photobook', label: "DJ Mag : Paris' Rex Club celebrates 35th anniversary with new photobook, 2023"},
    {href: 'https://www.timeout.com/paris/en/music-nightlife', label: 'Time Out Paris : Paris Music & Nightlife'},
    {href: 'https://www.doitinparis.com/en/night-clubs-in-paris-26417', label: 'Do It In Paris : The New Hotspots of Parisian Nightlife'}
  ],

  bandcamp: {
    description: 'Deux de mes morceaux : le remix français de la partie Rex Club, et un autre construit sur des breaks. En acheter un soutient mon travail directement.',
    tracks: [
      {title: 'Mylène Farmer, Dégénération (Remix)', id: '467727105', url: 'https://thecatrave.bandcamp.com/track/myl-ne-farmer-d-g-n-ration-electronica-breaks-dubstep-remix', linkText: 'Mylène Farmer, Dégénération Remix par thecatrave'},
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks par thecatrave'}
    ]
  }
};
