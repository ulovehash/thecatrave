// French London clubs guide. Structure and facts from the English page
// (london-clubs-draft.md, london-clubs-research.md, build-london-clubs-article.mjs)
// and its German translation (content/de/london-clubs.mjs).
//
// French wording: the stage 2 French pass of 2026-09-18 (TRANSLATION-RESEARCH.md)
// measured "club londres" at 600 a month and "boite de nuit londres" at 400,
// with the rest of the French SERP football. The page writes "boite" without
// the circumflex, like fr/boite-de-nuit-paris.html and fr/boite-de-nuit-berlin.html.
// No Ahrefs units were spent on this page; see keywords/fr-london-clubs.json.
//
// Like the English page, this guide carries no mixes of the owner's.
//
// The images are the English guide's, in img/london-clubs/, with translated
// captions; see home-articles.mjs for why a translation may reuse them.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, articleYoutubeEmbed, ownTrackListening
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption, className = 'wide-archive-image') => articleFigure({
  src: `img/london-clubs/${name}-${width}.webp`,
  srcset: `img/london-clubs/${name}-320.webp 320w, img/london-clubs/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className
});

const youtube = (id, label) => articleYoutubeEmbed({
  src: `https://www.youtube-nocookie.com/embed/${id}`,
  title: label
});

const sections = [
  {id: 'before-acid-house', heading: 'Avant l\'acid house : les sound systems, le Blitz et Heaven'},
  {id: 'acid-house', heading: '1988 : l\'acid house trouve ses salles à Londres'},
  {id: 'jungle-rooms', heading: 'Rage, Labrynth et le Blue Note : où la jungle a trouvé ses salles'},
  {id: 'big-rooms', heading: 'Ministry, The End et fabric : les grandes salles'},
  {id: 'garage-dubstep', heading: 'Les dimanches, le Scala et Plastic People : garage et dubstep'},
  {id: 'best-clubs-now', heading: 'Les meilleurs clubs de Londres aujourd\'hui'},
  {id: 'hear-london', heading: 'Écouter Londres avant d\'y aller'}
].map(section => ({...section, title: `${section.heading}.`}));

export default {
  lang: 'fr',
  name: 'fr-london-clubs',
  file: 'fr/boite-de-nuit-londres.html',
  draft: 'fr/london-clubs-draft.md',
  canonical: 'https://thecatrave.com/fr/boite-de-nuit-londres',
  englishPath: '/best-electronic-music-clubs-in-london',
  ogImage: 'https://thecatrave.com/img/og/london-clubs.jpg',
  bodyClass: 'article-page london-clubs-page',

  title: 'Boite de nuit Londres : les meilleurs clubs, de Heaven à FOLD',
  description: 'Les meilleurs clubs de Londres pour la musique électronique, de fabric à FOLD, et les salles derrière l\'acid house, la jungle, le garage et le dubstep.',
  datePublished: '2026-10-01',
  dateModified: '2026-10-01',
  dateLabel: '1er octobre 2026',

  heroKicker: 'Boite de nuit Londres',
  heroTitle: 'Les meilleures boites de nuit de Londres pour la musique électronique',
  deck: 'Du Four Aces et du Blitz à Rage, au Blue Note et à fabric : les clubs londoniens derrière l\'acid house, la jungle, le garage et le dubstep, et ceux qui valent un week-end aujourd\'hui.',
  answerLabel: 'Les meilleures boites de nuit de Londres',
  breadcrumbName: 'Boite de nuit Londres',

  answerSection: 'Réponse',
  introSection: 'Introduction',
  introTitle: 'La musique d\'abord, le week-end ensuite.',
  faqSection: 'FAQ',
  faqLabel: 'Questions fréquentes',
  faqTitle: 'Questions fréquentes sur les boites de nuit de Londres.',

  sections,

  media: ({lang}) => ({
    // The owner's own music inside the text (owner, 2026-09-21: Berlin Race
    // 1909 on the German pages, Dégénération on the French, and art deco with
    // late summer cloud dance in the drum and bass guides).
    'thecatrave Art Deco': ownTrackListening('art-deco', 'Le son pour lequel ces salles ont été construites, refait : mon remix jungle d\'une chanson de Lana Del Rey.', lang),
    'thecatrave Degeneration': ownTrackListening('degeneration', 'Le garage et le dubstep comme outils plutôt que comme frontières : mon remix avec des breaks sous une voix de pop française.', lang),
    'thecatrave Protect Ya Breaks': ownTrackListening('protect-ya-breaks', 'Des breaks progressifs à 128 BPM, avec des vocals rap découpés et un basculement downtempo. Mon propre morceau.', lang),
    'Blitz site': figure('blitz-site', 900, 1200,
      'L\'ancien bâtiment du Blitz Club au 4 Great Queen Street, à Covent Garden, avec une plaque Spandau Ballet près de la porte',
      'Le 4 Great Queen Street en 2019. La soirée du mardi du Blitz a eu lieu ici en 1979 et 1980 ; la plaque près de la porte marque la première apparition de Spandau Ballet. Photo : Spudgun67, CC BY-SA 4.0.',
      'portrait-image'),
    'Astoria': figure('astoria-2008', 1200, 803,
      'La London Astoria sur Charing Cross Road sous les échafaudages en octobre 2008',
      'L\'Astoria en octobre 2008, pendant que les ouvriers la préparent à la démolition. Trip s\'y tenait à partir de 1988. Photo : Fallschirmjäger, CC BY-SA 3.0.'),
    'fabric front': figure('fabric', 1200, 810,
      'La façade bleue et les portes d\'acier de fabric, Charterhouse Street, Londres',
      'fabric sur Charterhouse Street en 2020, dans les anciennes Metropolitan Cold Stores en face du marché de Smithfield. Photo : Lolita Montana, CC BY-SA 2.0.'),
    'Scala': figure('scala', 900, 1200,
      'Le Scala la nuit sur Pentonville Road, King\'s Cross, avec son enseigne lumineuse rouge',
      'Le Scala à King\'s Cross en août 2024. Cinéma jusqu\'en 1993, club depuis 1999 et l\'une des salles les plus liées à l\'UK garage. Photo : No Swan So Fine, CC BY-SA 4.0.',
      'portrait-image'),
    'Metalheadz in The Lab': youtube('-Cd8DJnLdOQ',
      'Metalheadz au Lab LDN : Lenzman et Jubei b2b Ulterior Motive, sur la chaîne YouTube de Mixmag'),
    'fabric special': youtube('WNEOE5uXiK8',
      'Terry Francis, Howie B et Keith Reilly, un fabric special à la Brighton Music Conference 2024, sur la chaîne YouTube de Beatport'),
    'London sets': articleVideoCollection({
      lang,
      description: 'Deux salles londoniennes du tableau, filmées par Rinse FM : Oneman en direct du Phonox, à Brixton, en janvier 2025, et Slimzee avec D Double E et Riko Dan aux Drumsheds, en novembre 2024.',
      items: [
        {youtubeId: 'SbznUhiLGhg', genre: 'Rinse Live From Phonox', artist: 'Oneman', title: 'En direct du Phonox, Brixton'},
        {youtubeId: 'oh2-Q58QnBE', genre: 'Rinse Live From Drumsheds 2024', artist: 'Slimzee feat. D Double E & Riko Dan', title: 'En direct des Drumsheds, Edmonton'}
      ].map(articleVideoCard)
    }),
    // As in the English generator: which of the three lists read in September
    // 2026 names each club. Revisit with it.
    'Table: now': articleTable({
      headers: ['Club', 'Quartier', 'Musique et caractère', 'Idéal pour', 'À savoir pour l\'entrée'],
      rows: [
        ['fabric', 'Farringdon', 'House, techno, bass et drum and bass dans trois salles', 'Un monument londonien à la programmation large', 'Réserver la soirée précise'],
        ['The Cause', 'Silvertown', 'Événements électroniques indépendants dans plusieurs salles', 'Des fêtes longues, pensées collectivement', 'Lieu et horaires selon l\'événement'],
        ['FOLD', 'Canning Town', 'Techno et musique de club expérimentale ; cabine DJ au niveau du sol', 'Des événements de 24 heures et un public concentré', 'Prévente conseillée'],
        ['The Carpet Shop', 'Peckham', 'Programmation intimiste en sous-sol', 'Des soirées plus petites dans le sud de Londres', 'Vérifier l\'organisateur et l\'annonce'],
        ['Dalston Superstore', 'Dalston', 'Bar et club queer, programmation électronique mêlée', 'Une soirée conviviale avec des DJ', 'Tard, il peut y avoir du monde'],
        ['Phonox', 'Brixton', 'House, techno et bass dans un club à salle unique', 'Une programmation claire dans une seule salle', 'Réserver selon le résident ou l\'organisateur'],
        ['MOT', 'South Bermondsey', 'Événements indépendants dans un entrepôt', 'Des line-ups underground', 'Vérifier l\'accès et les détails'],
        ['Drumsheds', 'Edmonton', 'Grands shows électroniques dans l\'ancien IKEA', 'Une production au format arena', 'Uniquement avec un billet ; prévoir le trajet'],
        ['Ministry of Sound', 'Elephant and Castle', 'Programmation centrée sur la house et un système de son construit sur mesure', 'Un grand club londonien historique', 'Choisir selon le line-up, pas seulement le nom'],
        ['Heaven', 'Charing Cross', 'Soirées de club queer et concerts', 'Un lieu central et historique', 'La programmation change selon la soirée'],
        ['Colour Factory', 'Hackney Wick', 'Lieu indépendant de musique et d\'art, avec plusieurs salles', 'Une programmation mêlée dans l\'est de Londres', 'Vérifier l\'événement précis'],
        ['Ormside Projects', 'South Bermondsey', 'Petit lieu indépendant, avec des bookings électroniques underground', 'Des soirées serrées, à faible capacité', 'Les détails viennent de l\'organisateur'],
        ['Night Tales', 'Hackney Central', 'Club et terrasse centrés sur la house', 'Un lieu convivial pour la fin de nuit', 'La programmation change selon la soirée'],
        ['KOKO', 'Camden', 'Théâtre restauré pour concerts et soirées de club', 'De grandes productions dans un lieu historique', 'Programmation sur billet'],
        ['XOYO', 'Shoreditch', 'Résidences house, techno et bass', 'Des résidences de DJ connus', 'Réserver selon le line-up'],
        ['Brixton Jamm', 'Brixton', 'Concerts, DJ et espace extérieur', 'Des soirées mêlées dans le sud de Londres', 'Vérifier la salle et le format de l\'événement']
      ].map(row => row.map(escapeHtml)),
      label: 'Les meilleurs clubs de Londres aujourd\'hui'
    })
  }),

  sources: [
    {href: 'https://en.wikipedia.org/wiki/The_Four_Aces_Club', label: 'Wikipedia : The Four Aces Club'},
    {href: 'https://en.wikipedia.org/wiki/Blitz_Kids_(New_Romantics)', label: 'Wikipedia : Blitz Kids (New Romantics)'},
    {href: 'https://en.wikipedia.org/wiki/Heaven_(nightclub)', label: 'Wikipedia : Heaven (nightclub)'},
    {href: 'https://en.wikipedia.org/wiki/Shoom', label: 'Wikipedia : Shoom'},
    {href: 'https://en.wikipedia.org/wiki/Nicky_Holloway', label: 'Wikipedia : Nicky Holloway'},
    {href: 'https://en.wikipedia.org/wiki/London_Astoria', label: 'Wikipedia : London Astoria'},
    {href: 'https://en.wikipedia.org/wiki/Acid_house', label: 'Wikipedia : Acid house'},
    {href: 'https://en.wikipedia.org/wiki/Second_Summer_of_Love', label: 'Wikipedia : Second Summer of Love'},
    {href: 'https://en.wikipedia.org/wiki/Jungle_music', label: 'Wikipedia : Jungle music'},
    {href: 'https://en.wikipedia.org/wiki/Metalheadz', label: 'Wikipedia : Metalheadz'},
    {href: 'https://en.wikipedia.org/wiki/Ministry_of_Sound', label: 'Wikipedia : Ministry of Sound'},
    {href: 'https://en.wikipedia.org/wiki/The_End_(club)', label: 'Wikipedia : The End (club)'},
    {href: 'https://en.wikipedia.org/wiki/Trash_(nightclub)', label: 'Wikipedia : Trash (nightclub)'},
    {href: 'https://en.wikipedia.org/wiki/Fabric_(club)', label: 'Wikipedia : Fabric (club)'},
    {href: 'https://en.wikipedia.org/wiki/UK_garage', label: 'Wikipedia : UK garage'},
    {href: 'https://en.wikipedia.org/wiki/Scala_(club)', label: 'Wikipedia : Scala (club)'},
    {href: 'https://en.wikipedia.org/wiki/Dubstep', label: 'Wikipedia : Dubstep'},
    {href: 'https://en.wikipedia.org/wiki/Corsica_Studios', label: 'Wikipedia : Corsica Studios'},
    {href: 'https://en.wikipedia.org/wiki/Printworks_(London)', label: 'Wikipedia : Printworks (London)'},
    {href: 'https://en.wikipedia.org/wiki/Fold_(nightclub)', label: 'Wikipedia : Fold (nightclub)'},
    {href: 'https://en.wikipedia.org/wiki/The_Cause_(London)', label: 'Wikipedia : The Cause (London)'},
    {href: 'https://en.wikipedia.org/wiki/Drumsheds', label: 'Wikipedia : Drumsheds'},
    {href: 'https://www.icmp.ac.uk/blog/a-history-london-nightclubs', label: 'ICMP : A History of London Nightclubs'},
    {href: 'https://ra.co/guides/clubs-in-london', label: 'Resident Advisor : Best Clubs in London, 2026'},
    {href: 'https://www.timeout.com/london/clubs/the-best-clubs-in-london', label: 'Time Out : The best clubs in London, mis à jour en juillet 2026'},
    {href: 'https://www.cntraveller.com/article/best-clubs-in-london', label: 'Condé Nast Traveller : The best clubs in London'}
  ],

  bandcamp: {
    description: 'Deux de mes morceaux : un remix jungle et un morceau breakbeat. En acheter un soutient mon travail directement.',
    tracks: [
      {title: 'You So Ghetto (Lana del Rey Jungle Remix)', id: '3379956979', url: 'https://thecatrave.bandcamp.com/track/you-so-ghetto-lana-del-rey-jungle-remix', linkText: 'You So Ghetto (Lana del Rey Jungle Remix) par thecatrave'},
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks par thecatrave'}
    ]
  }
};
