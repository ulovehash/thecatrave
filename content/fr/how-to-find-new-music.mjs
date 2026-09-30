// French guide to finding new music. Structure, stations, sets, diagrams and
// photograph are the English page's (build-find-new-music-article.mjs), shared
// through content/find-new-music-shared.mjs; the French draft is
// fr/how-to-find-new-music-draft.md. The summary banner is the draft's
// "Résumé" section.
import {findNewMusicMedia} from '../find-new-music-shared.mjs';
import {catalogueSets} from '../../catalogue.mjs';

const text = {
  table: {
    headers: ['Méthode', 'Idéale pour', 'Effort', 'Par où commencer'],
    rows: [
      ['Radio communautaire', 'Scènes locales et sélecteurs spécialisés', 'Aucun', 'NTS, Rinse FM ou une station hors de votre ville'],
      ['Un DJ set', 'Découvrir de nombreux artistes en contexte', 'Aucun', 'Laissez un DJ choisir pendant une heure'],
      ['Le Selector', 'Un hasard sans profil', 'Un clic', `Lancez au hasard l’un des ${catalogueSets('fr')} sets`],
      ['Crédits de production', 'Suivre un son d’un artiste à l’autre', 'Une minute', 'Ouvrez les crédits d’un disque que vous aimez'],
      ['Every Noise at Once', 'Explorer des noms de genres inconnus', 'Une minute', 'Utilisez la carte figée des genres comme point de départ'],
      ['Labels', 'Entrer plus profond dans une scène cohérente', 'Un après-midi', 'Suivez le label derrière une sortie qui vous a marqué'],
      ['Bandcamp', 'Sorties underground et traces d’acheteurs', 'Un après-midi', 'Parcourez les tags, les labels et les collections publiques'],
      ['Critiques et AOTY', 'Des auteurs dont le regard est constant', 'En continu', 'Suivez un critique, pas une publication'],
      ['Forums et Discord', 'Recommandations humaines et détails de scène', 'En continu', 'Rejoignez une communauté ciblée et posez une question précise'],
      ['Discogs et RateYourMusic', 'Historique des sorties et disques voisins', 'En continu', 'Remontez les labels, les crédits et les listes d’utilisateurs']
    ]
  },
  videos: {
    stations: {
      label: 'Un set de chaque station',
      description: 'Les stations citées ci-dessus, chacune avec son set le plus regardé. Le dernier compte six mille vues, et c’est tout l’argument sur la géographie en un seul chiffre.'
    },
    small: {
      label: 'Trois heures de trois villes',
      description: 'Kiosk Radio émet depuis une cabane dans un parc de Bruxelles, et le dernier de ces sets compte six mille vues. Une heure chacun, et aucun choisi par quelque chose qui sait qui vous êtes.'
    }
  },
  radioBand: {
    title: 'Une heure d’une station que vous n’avez jamais écoutée.',
    description: 'NTS publie ses émissions sur Spotify en plus de ses propres archives. N’importe laquelle défend mieux le propos de cet article qu’un paragraphe de plus.',
    iframeTitle: 'NTS Radio sur Spotify'
  },
  selector: {
    alt: 'Le Selector : un bouton qui lance un DJ set au hasard',
    caption: `Le Selector contient ${catalogueSets('fr')} sets issus de 37 chaînes. Pas de compte, pas de publicité, et ce que vous enregistrez ne quitte jamais votre navigateur.`
  },
  producerFigure: {
    alt: 'Un schéma qui compare le fait de suivre l’artiste, ce qui mène à son propre catalogue, et celui de suivre un producteur, ce qui mène à tous les artistes avec lesquels il a travaillé, puis à leurs labels.',
    caption: 'Le catalogue d’un artiste ressemble surtout à cet artiste. Celui d’un producteur, ce sont vingt artistes filtrés par une seule paire d’oreilles, et chacun mène à un label.'
  },
  producerLabels: [
    ['FOLLOW THE ARTIST', 'SUIVRE L’ARTISTE'], ['one artist', 'un artiste'], ['their records', 'ses disques'],
    ['which mostly sound', 'qui ressemblent'], ['like that artist.', 'surtout à cet artiste.'],
    ['FOLLOW THE PRODUCER', 'SUIVRE LE PRODUCTEUR'], ['one producer', 'un producteur'],
    ['artist A', 'artiste A'], ['artist B', 'artiste B'], ['artist C', 'artiste C'], ['their labels', 'leurs labels'],
    ['and every label is another', 'et chaque label est un autre'], ['catalogue somebody else', 'catalogue que quelqu’un d’autre'], ['already filtered for you.', 'a déjà filtré pour vous.']
  ],
  own: 'Un producteur à suivre, puisque vous êtes déjà là : glitch, IDM et ambient. Mon propre morceau.',
  shop: {
    alt: 'L’intérieur d’un magasin de disques d’occasion, avec des bacs de vinyles sur les deux murs',
    caption: 'Un magasin est un filtre entretenu à la main, comme un bon label. Photo : Chicken4War, CC BY-SA 4.0, via Wikimedia Commons.'
  },
  loopFigure: {
    alt: 'Deux schémas. À gauche, une boucle fermée où ce que vous avez écouté alimente un moteur de recommandation qui propose encore la même chose. À droite, une ligne ouverte allant d’une source non personnalisée vers une prochaine écoute plus large.',
    caption: 'Un moteur de recommandation ne peut travailler qu’avec ce que vous avez déjà écouté, donc chaque tour se rapproche du précédent. Une source qui n’a jamais entendu parler de vous ne le peut pas.'
  },
  loopLabels: [
    ['THE LOOP', 'LA BOUCLE'], ['a recommender, repeated', 'un moteur de recommandation, répété'],
    ['what you played', 'ce que vous avez écouté'], ['the recommender', 'la recommandation'], ['more of the same', 'encore la même chose'],
    ['each turn is closer to', 'chaque tour se rapproche'], ['the last. the circle', 'du précédent. Le cercle'], ['tightens.', 'se resserre.'],
    ['THE WAY OUT', 'LA SORTIE'], ['a source that does not know you', 'une source qui ne vous connaît pas'],
    ['a station, a set, a shop', 'station, set, magasin'], ['something unheard', 'quelque chose d’inédit'], ['a wider next play', 'une écoute plus large'],
    ['nothing loops back. the', 'rien ne se referme. La'], ['source has no record of', 'source ne garde aucune trace'], ['what you liked before.', 'de ce que vous aimiez avant.']
  ]
};

const sections = [
  {id: 'radio', heading: 'Radio', title: '1. La radio communautaire.', kicker: 'Aucun effort', tocLabel: 'Radio communautaire'},
  {id: 'dj-sets', heading: 'DJ sets', title: '2. Des DJ sets, pas des singles.', kicker: 'Aucun effort', tocLabel: 'DJ sets'},
  {id: 'selector', heading: 'Le Selector', title: '3. Le Selector.', kicker: 'Un clic', tocLabel: 'Le Selector'},
  {id: 'producers', heading: 'Suivre le producteur, pas l’artiste', title: '4. Suivre le producteur, pas l’artiste.', kicker: 'Une minute', tocLabel: 'Suivre le producteur'},
  {id: 'every-noise', heading: 'Every Noise at Once', title: '5. Every Noise at Once.', kicker: 'Une minute', tocLabel: 'Every Noise at Once'},
  {id: 'labels', heading: 'Les labels qui restent fidèles à un son', title: '6. Les labels qui restent fidèles à un son.', kicker: 'Un après-midi', tocLabel: 'Labels'},
  {id: 'bandcamp', heading: 'Bandcamp', title: '7. Bandcamp.', kicker: 'Un après-midi', tocLabel: 'Bandcamp'},
  {id: 'critics', heading: 'Critiques et listes de fin d’année', title: '8. Critiques et listes de fin d’année.', kicker: 'En continu', tocLabel: 'Critiques et listes'},
  {id: 'forums', heading: 'Forums et communautés', title: '9. Forums et communautés.', kicker: 'En continu', tocLabel: 'Forums'},
  {id: 'databases', heading: 'Discogs et RateYourMusic', title: '10. Discogs et RateYourMusic.', kicker: 'En continu', tocLabel: 'Discogs et RateYourMusic'},
  {id: 'algorithm', heading: 'Un mot sur l’algorithme', title: 'Un mot sur l’algorithme.', tocLabel: 'Un mot sur l’algorithme'}
];

export default {
  lang: 'fr',
  name: 'fr-how-to-find-new-music',
  file: 'fr/trouver-de-la-nouvelle-musique.html',
  draft: 'fr/how-to-find-new-music-draft.md',
  canonical: 'https://thecatrave.com/fr/trouver-de-la-nouvelle-musique',
  englishPath: '/how-to-find-new-music',
  ogImage: 'https://thecatrave.com/img/og/how-to-find-new-music.jpg',
  bodyClass: 'article-page find-new-music-page',

  title: 'Trouver de la nouvelle musique : 10 méthodes sans algorithme',
  description: 'Dix façons de découvrir de la musique sans qu’une machine connaisse votre historique : de la radio communautaire aux crédits de production, classées par effort.',
  datePublished: '2026-10-01',
  dateModified: '2026-10-01',
  dateLabel: '1er octobre 2026',

  heroKicker: 'Guide',
  heroTitle: 'Trouver de la nouvelle musique',
  deck: 'Dix façons d’entendre quelque chose que vous ne connaissez pas, et aucune ne dépend d’une machine qui sait ce que vous avez écouté la semaine dernière. Classées selon l’effort demandé.',
  answerLabel: 'TROUVER DE LA NOUVELLE MUSIQUE',
  breadcrumbName: 'Trouver de la nouvelle musique',

  answerSection: 'Résumé',
  introSection: 'Introduction',
  introTitle: 'Trop de musique, et vous écoutez toujours la même.',
  faqSection: 'FAQ',
  faqLabel: 'FAQ',
  faqTitle: 'Trouver de la nouvelle musique : FAQ.',
  minReadingMinutes: 9,

  sections,
  media: ({lang}) => findNewMusicMedia({lang, text}),

  sources: [
    {href: 'https://www.nts.live', label: 'NTS Radio (en anglais)'},
    {href: 'https://rinse.fm', label: 'Rinse FM (en anglais)'},
    {href: 'https://www.thelotradio.com', label: 'The Lot Radio (en anglais)'},
    {href: 'https://everynoise.com', label: 'Every Noise at Once (en anglais)'},
    {href: 'https://daily.bandcamp.com', label: 'Bandcamp Daily (en anglais)'},
    {href: 'https://www.discogs.com', label: 'Discogs'},
    {href: 'https://rateyourmusic.com', label: 'RateYourMusic (en anglais)'},
    {href: 'https://www.albumoftheyear.org', label: 'Album of the Year (en anglais)'}
  ],
  sourcesNote: 'Les chiffres sur les sets et les vues viennent du catalogue de DJ sets enregistrés de ce site, sur 37 chaînes, à la date de septembre 2026.',

  bandcamp: {
    description: 'Si l’argument vous convainc d’acheter la musique auprès de ceux qui l’ont faite : la mienne est ici.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks par thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 par thecatrave'}
    ]
  }
};
