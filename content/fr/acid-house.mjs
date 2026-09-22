// French acid house guide. Structure and facts from the English page
// (acid-house-guide-draft.md, build-acid-house-article.mjs).
//
// French wording checked on 2026-09-22 in DuckDuckGo's France region, because
// google.fr answered with a bot check; no Ahrefs units spent
// (keywords/fr-acid-house.json). French writes "l’acid house", feminine,
// fr.wikipedia ranks first, and "Qu’est-ce que l’acid house" is a result title.
//
// The English generator places each image and player by paragraph index. Here
// the draft places them with [Image: ...] and [Embed: ...] lines at the same
// positions. The images are the English guide's, in img/acid-house/, with
// translated captions; see home-articles.mjs for why a translation may reuse
// them.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, ownSetListening, ownTrackListening
} from '../../site-components.mjs';

const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/acid-house/${name}-${width}.webp`,
  srcset: `img/acid-house/${name}-320.webp 320w, img/acid-house/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

const videos = (lang, label, description, items) => articleVideoCollection({
  lang, label, description, items: items.map(item => articleVideoCard(item))
});

export default {
  lang: 'fr',
  name: 'fr-acid-house',
  file: 'fr/acid-house.html',
  draft: 'fr/acid-house-draft.md',
  canonical: 'https://thecatrave.com/fr/acid-house',
  englishPath: '/acid-house-guide',
  ogImage: 'https://thecatrave.com/img/og/acid-house.jpg',
  bodyClass: 'article-page acid-house-page',
  minReadingMinutes: 9,

  title: 'Qu’est-ce que l’acid house ? De la TB-303 aux raves britanniques',
  description: 'L’acid house, c’est la house de Chicago bâtie sur une ligne de TB-303 tordue à la main. Comment Phuture l’a faite, d’où vient le nom, comment elle a mené à la rave.',
  datePublished: '2026-09-22',
  dateModified: '2026-09-22',
  dateLabel: '22 septembre 2026',

  heroKicker: 'Guide de l’acid house',
  heroTitle: 'L’acid house : le son de la TB‑303 et son arrivée en Grande-Bretagne',
  deck: 'Une machine à basse dont personne ne voulait, trois amis à Chicago, un DJ qui a passé leur cassette quatre fois dans la même nuit, et un mouvement de jeunesse britannique qui a emprunté le nom.',
  answerLabel: 'Définition de l’acid house',
  breadcrumbName: 'Acid house',

  answerSection: 'Qu’est-ce que l’acid house ?',
  introSection: 'Introduction',
  introTitle: 'Une machine dont personne ne voulait.',
  faqSection: 'FAQ',
  faqLabel: 'Questions fréquentes sur l’acid house',
  faqTitle: 'Questions fréquentes sur l’acid house.',

  sections: [
    {id: 'what-is', heading: 'Qu’est-ce que l’acid house ?', title: 'Qu’est-ce que l’acid house ?'},
    {id: 'sound', heading: 'Le son de l’acid house', title: 'Le son de l’acid house.', kicker: 'La TB-303'},
    {id: 'chicago', heading: 'Chicago : Phuture et « Acid Tracks »', title: 'Chicago : Phuture et « Acid Tracks ».', kicker: '1985 à 1987'},
    {id: 'records', heading: 'Les disques autour', title: 'Les disques autour.', kicker: 'Chicago, 1986 à 1988'},
    {id: 'name', heading: 'D’où vient le nom acid house ?', title: 'D’où vient le nom acid house ?', kicker: 'Le nom'},
    {id: 'india', heading: 'L’acid house a-t-elle été inventée en Inde ?', title: 'L’acid house a-t-elle été inventée en Inde ?', kicker: 'Charanjit Singh, 1982', tocLabel: 'Inventée en Inde ?'},
    {id: 'britain', heading: 'Comment l’acid house est arrivée en Grande-Bretagne', title: 'Comment l’acid house est arrivée en Grande-Bretagne.', kicker: '1987 à 1989', tocLabel: 'Son arrivée en Grande-Bretagne'},
    {id: 'backlash', heading: 'Le Second Summer of Love et le retour de bâton', title: 'Le Second Summer of Love et le retour de bâton.', kicker: '1988 à 1990'},
    {id: 'after', heading: 'Après 1990 : l’acid partout', title: 'Après 1990 : l’acid partout.', tocLabel: 'Après 1990'},
    {id: 'family', heading: 'Acid house, house et techno', title: 'Acid house, house et techno.'}
  ],

  media: ({lang}) => ({
    'tb303': figure('roland-tb303-1982', 1200, 800,
      'Gros plan sur le panneau d’une Roland TB-303 Bass Line, avec le bouton d’accent et l’inscription Computer Controlled',
      'Une TB-303 fabriquée en 1982, toujours en état de marche. Roland a arrêté la machine en 1984, ce qui explique qu’un producteur de Chicago ait pu en acheter une d’occasion pour 40 dollars. Photo : Alexandre Dulaunoy, CC BY-SA 2.0.'),
    'dj-pierre': figure('dj-pierre-2013', 960, 639,
      'DJ Pierre, à gauche, et Felix Da Housecat devant une fresque murale en 2013',
      'DJ Pierre, à gauche, avec Felix Da Housecat, son partenaire au sein de Pierre’s Pfantasy Club, en 2013. C’est Pierre qui tournait les boutons sur « Acid Tracks ». Photo : TheArches, CC BY 2.0.'),
    'gerald-photo': figure('a-guy-called-gerald-2014', 1200, 800,
      'A Guy Called Gerald derrière ses machines sur scène, sous une lumière violette',
      'A Guy Called Gerald au Royal Festival Hall en 2014. Il a enregistré « Voodoo Ray » à Manchester en 1988 et a été membre fondateur de 808 State. Photo : Victor Frankowski pour le Southbank Centre, CC BY 2.0.'),
    'acid-tracks-video': videos(lang, 'Acid Tracks',
      'Le disque qui a donné son nom au genre, tel que Trax l’a sorti en 1987 : un motif de batterie et une ligne de 303, dont le timbre bouge pendant douze minutes.',
      [{youtubeId: 'yKHGv6Es610', genre: 'ACID HOUSE, 1987', artist: 'Phuture', title: 'Acid Tracks'}]),
    'phuture-live': videos(lang, 'Phuture en live',
      'Phuture en live pour Boiler Room à Chicago en 2014. Tiré du catalogue de DJ sets enregistrés de ce site.',
      [{youtubeId: '05oNuVLYFgw', genre: 'LIVE, 2014', artist: 'Phuture', title: 'Boiler Room Chicago'}]),
    'around-listening': videos(lang, 'Avant et autour d’Acid Tracks',
      'Le premier disque de 303 sur vinyle, et celui que DJ Pierre appelle le premier disque acid funky.',
      [{youtubeId: 'vq0OQ1wKLbY', genre: 'CHICAGO, 1986', artist: 'Sleezy D', title: "I've Lost Control"},
       {youtubeId: '_-MsJ-T1YhA', genre: 'ACID HOUSE, 1987', artist: 'Armando', title: 'Land of Confusion'}]),
    'india-listening': videos(lang, 'Bombay, 1982',
      'Le morceau d’ouverture de Synthesizing: Ten Ragas to a Disco Beat, mis en ligne par Bombay Connection, le label qui l’a réédité en 2010. Une TB-303 glisse sur un raga du matin, par-dessus une TR-808.',
      [{youtubeId: 'NUqnPYwoiF4', genre: 'RAGA ET DISCO, 1982', artist: 'Charanjit Singh', title: 'Raga Bhairav'}]),
    'britain-listening': videos(lang, 'L’acid britannique, 1988',
      'Les deux disques le plus souvent présentés comme le premier morceau d’acid house britannique, l’un de Londres, l’autre de Manchester.',
      [{youtubeId: 'yCNpciIixbk', genre: 'ACID HOUSE, 1988', artist: 'Baby Ford', title: 'Oochy Koochy'},
       {youtubeId: 'j7vxHOCeiQ4', genre: 'ACID HOUSE, 1988', artist: 'A Guy Called Gerald', title: 'Voodoo Ray'}]),
    'panic-listening': videos(lang, 'Les classements et l’interdiction',
      'Le disque classé 3e que la BBC a écarté en octobre 1988, et celui qui a ramené l’acid à Top of the Pops deux mois plus tard.',
      [{youtubeId: 'ZrscxwrVRQ8', genre: 'ACID HOUSE, 1988', artist: 'D Mob', title: 'We Call It Acieed'},
       {youtubeId: '30Xi9HMrovk', genre: 'ACID HOUSE, 1988', artist: 'Stakker', title: 'Humanoid'}]),
    'hardfloor-listening': videos(lang, 'L’acid après l’acid house',
      'Cologne, 1992 : le disque qui a ramené la 303 dans les clubs européens après la panique britannique.',
      [{youtubeId: 'Un4CeV_l3pI', genre: 'ACID TECHNO, 1992', artist: 'Hardfloor', title: 'Acperience 1'}]),
    'gerald-live': videos(lang, 'A Guy Called Gerald en live',
      'Gerald jouant ses machines en live pour Boiler Room en 2013. Tiré du catalogue de DJ sets enregistrés de ce site.',
      [{youtubeId: 'zhr0_fadXxY', genre: 'LIVE, 2013', artist: 'A Guy Called Gerald', title: 'Boiler Room'}]),
    // The owner's own music inside the text, as on the English page.
    'protect-ya-breaks': ownTrackListening('protect-ya-breaks', 'Là où la Grande-Bretagne a ensuite emmené le rythme : des breaks à 128 BPM, proches du tempo de l’acid house. Mon propre morceau.', lang),
    'own-mix': ownSetListening(0, lang, 'Pour après l’histoire : trente morceaux où les breaks circulent entre garage, bass music, techno et rave. Mon propre mix.'),
    'Table: family': articleTable({
      headers: ['Style', 'Tempo approximatif', 'Ce qui mène le morceau', 'Un disque pour commencer'],
      rows: [
        ['House de Chicago', '118 à 128 BPM', 'Boîtes à rythmes avec piano, cordes, voix ou ligne de basse classique', 'Marshall Jefferson, « Move Your Body »'],
        ['Acid house', '118 à 128 BPM', 'Une ligne de TB-303 au premier plan, au filtre toujours en mouvement', 'Phuture, « Acid Tracks »'],
        ['Techno de Detroit', '120 à 135 BPM', 'Rythme de machine et lignes de synthétiseur, peu ou pas de voix', 'Rhythim Is Rhythim, « Strings of Life »'],
        ['Acid techno et acid trance', '130 à 145 BPM', 'La 303 sur une batterie techno plus dure et plus rapide', 'Hardfloor, « Acperience 1 »']
      ]
    })
  }),

  sources: [
    {href: 'https://daily.redbullmusicacademy.com/2012/12/dj-pierre-interview/', label: 'Red Bull Music Academy Daily : The Story of Acid House, as told by DJ Pierre (2012)'},
    {href: 'https://djmag.com/content/game-changers-phuture-acid-tracks', label: 'DJ Mag : Game Changers, Phuture « Acid Tracks » (2014)'},
    {href: 'https://en.wikipedia.org/wiki/Acid_Tracks', label: 'Wikipedia : Acid Tracks'},
    {href: 'https://en.wikipedia.org/wiki/Synthesizing:_Ten_Ragas_to_a_Disco_Beat', label: 'Wikipedia : Synthesizing: Ten Ragas to a Disco Beat'},
    {href: 'https://en.wikipedia.org/wiki/Roland_TB-303', label: 'Wikipedia : Roland TB-303'},
    {href: 'https://en.wikipedia.org/wiki/Second_Summer_of_Love', label: 'Wikipedia : Second Summer of Love'},
    {href: 'https://en.wikipedia.org/wiki/We_Call_It_Acieed', label: 'Wikipedia : We Call It Acieed'},
    {href: 'https://www.vice.com/en/article/history-smiley-face-acid-house-rave-culture/', label: 'Vice : A brief history of the smiley face, rave culture’s most ubiquitous symbol'},
    {href: 'https://mixmag.net/feature/the-history-of-acid-house-in-100-tracks', label: 'Mixmag : The history of acid house in 100 tracks'}
  ],
  sourcesNote: 'Les nombres de sets et la fréquence des artistes sont mesurés dans le propre catalogue de ce site, 62 824 DJ sets enregistrés, en septembre 2026.',

  bandcamp: {
    description: 'L’acid house a donné la rave à la Grande-Bretagne, et la rave lui a donné le breakbeat. Ces sorties se situent de ce côté de la famille. En acheter une soutient directement mon travail.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks par thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 par thecatrave'}
    ]
  }
};
