// French NYC clubs guide. Structure, facts and media from the English page
// (nyc-clubs-draft.md, build-nyc-clubs-article.mjs). Search wording from live Google
// (google.fr, hl=fr/gl=fr, 2026-10-01); volumes in keywords/fr-nyc-clubs.json.
// The images are the English guide's, with translated captions.

import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, ownSetListening
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/nyc-clubs/${name}-${width}.webp`,
  srcset: `img/nyc-clubs/${name}-320.webp 320w, img/nyc-clubs/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

export default {
  lang: 'fr',
  name: 'fr-nyc-clubs',
  file: 'fr/boite-de-nuit-new-york.html',
  draft: 'fr/nyc-clubs-draft.md',
  canonical: 'https://thecatrave.com/fr/boite-de-nuit-new-york',
  englishPath: '/best-clubs-in-nyc',
  ogImage: 'https://thecatrave.com/img/og/nyc-clubs.jpg',
  bodyClass: 'article-page nyc-clubs-page',
  minReadingMinutes: 9,

  title: 'Meilleures boîtes de nuit à New York : Paradise Garage, Nowadays',
  description: 'Nowadays, Basement, Public Records, Good Room et Elsewhere : les meilleures boîtes de nuit à New York pour la house et la techno, et l’histoire du Loft à l’Output.',
  datePublished: '2026-10-01',
  dateModified: '2026-10-01',
  dateLabel: '1er octobre 2026',

  heroKicker: 'Boîtes de nuit New York',
  heroTitle: 'Les meilleures boîtes de nuit à New York, du Paradise Garage au Nowadays',
  deck: 'La ville qui a inventé le club moderne, a passé quatre-vingt-dix ans à réglementer la danse et a déplacé ses meilleures salles à Brooklyn et dans le Queens.',
  answerLabel: 'Les meilleures boîtes de nuit à New York',
  breadcrumbName: 'Les meilleures boîtes de nuit à New York',

  answerSection: 'Réponse',
  introSection: 'Introduction',
  introTitle: 'Des clubs bâtis autour du son.',
  faqSection: 'FAQ',
  faqLabel: 'Questions fréquentes',
  faqTitle: 'Questions fréquentes sur les boîtes de nuit à New York.',

  sections: [
    {id: 'loft-and-garage', heading: 'Le Loft, le Paradise Garage et le Studio 54', title: 'Le Loft, le Paradise Garage et le Studio 54.'},
    {id: 'eighties-nineties', heading: 'De la Danceteria au Twilo : les années 1980 et 1990', title: 'De la Danceteria au Twilo : les années 1980 et 1990.'},
    {id: 'brooklyn', heading: 'Brooklyn prend le relais', title: 'Brooklyn prend le relais.'},
    {id: 'best-clubs-now', heading: 'Les meilleures boîtes de nuit à New York aujourd’hui', title: 'Les meilleures boîtes de nuit à New York aujourd’hui.'},
    {id: 'techno-clubs', heading: 'Les meilleurs clubs de techno à New York', title: 'Les meilleurs clubs de techno à New York.'},
    {id: 'house-clubs', heading: 'Les clubs de house à New York', title: 'Les clubs de house à New York.'},
    {id: 'where-to-go', heading: 'Où sortir à New York', title: 'Où sortir à New York.'}
  ],

  media: ({lang}) => ({
    'Studio 54': figure('studio-54-entrance', 800, 1203, 'La marquise et les portes du théâtre Studio 54 sur la West 54th Street la nuit',
      'L’entrée du Studio 54 sur la West 54th Street, théâtre de Broadway depuis 1998. Le club a fonctionné ici de 1977 à 1980. Photo : David Goehring, CC BY 2.0.'),
    'Limelight': figure('limelight-church', 1200, 900, 'L’église néogothique en grès brun à l’angle de la Sixth Avenue et de la West 20th Street, vue depuis la rue',
      'L’ancienne Church of the Holy Communion à l’angle de la Sixth Avenue et de la West 20th Street, devenue le Limelight en novembre 1983. Photo : Beyond My Ken, CC BY-SA 4.0.'),
    'Knockdown Center': figure('knockdown-center', 1080, 1080, 'Les bâtiments de brique et la haute cheminée du Knockdown Center à Maspeth sous un ciel gris',
      'Le Knockdown Center à Maspeth, dans le Queens, une ancienne usine de verre et de portes. Le Basement est dans les tunnels en dessous. Photo : Kazuhisa Otsubo, CC BY 2.0.'),
    'Louie Vega Output': articleVideoCollection({lang, label: 'Louie Vega, Mixmag Live at Output, 2016', description: 'Louie Vega joue à l’Output de Williamsburg pour Mixmag en 2016, trois ans avant la fermeture du club.', items: [articleVideoCard({youtubeId: 'ss0aadTtAhQ', genre: 'House', artist: 'Louie Vega', title: 'Mixmag Live at Output, 2016'})]}),
    'Mister Saturday Night Boiler Room': articleVideoCollection({lang, label: 'Mister Saturday Night, Boiler Room, episode 002, 2015', description: 'La soirée d’Eamon Harkin et Justin Carter avec Boiler Room en 2015, l’année de l’ouverture du Nowadays. Tiré du catalogue de DJ sets enregistrés de ce site.', items: [articleVideoCard({youtubeId: 'mG3kGYFyw-Q', genre: 'House', artist: 'Mister Saturday Night', title: 'Boiler Room, episode 002, 2015'})]}),
    'Louie Vega Lot Radio': articleVideoCollection({lang, label: 'Louie Vega, The Lot Radio, 2018', description: 'Louie Vega sur The Lot Radio en décembre 2018. Tiré du catalogue de DJ sets enregistrés de ce site.', items: [articleVideoCard({youtubeId: '5EC4BynJ1MA', genre: 'House', artist: 'Louie Vega', title: 'The Lot Radio, 2018'})]}),
    'thecatrave mix': ownSetListening(0, lang, 'Trente morceaux entre garage, bass music, techno et rave, pour le long bout d’une nuit new-yorkaise. Mon propre mix.'),
    'Table: now': articleTable({
      headers: ['Club', 'Quartier', 'Musique et caractère', 'Idéal pour'],
      rows: [
        ['Nowadays', 'Ridgewood, Queens', 'House et techno sur un système SBS Slammer, pas de téléphones sur la piste, un espace extérieur', 'Mister Sunday et les week-ends Nonstop'],
        ['Basement', 'Maspeth, Queens', 'Techno dans des tunnels de brique sous le Knockdown Center, ouvert depuis 2019', 'Techno dure et une porte stricte'],
        ['Public Records', 'Gowanus, Brooklyn', 'Une salle de club hi-fi dans l’ancien siège de l’ASPCA, avec restaurant et bar', 'Un dîner et une piste de danse dans un même bâtiment'],
        ['Good Room', 'Greenpoint, Brooklyn', 'Une salle principale centrée sur le DJ et la plus petite Bad Room', 'Soirées house et disco'],
        ['Elsewhere', 'East Williamsburg, Brooklyn', 'Une grande salle de 700 places, une plus petite et un toit, ouvert depuis 2017', 'Programmation plus grande et soirées toute la nuit'],
        ['Paragon', 'Bed-Stuy, Brooklyn', 'Techno sur le modèle de la techno américaine des débuts, rouvert en 2025 avec Kevin Saunderson', 'Techno de Détroit et de New York'],
        ['Signal', 'Williamsburg, Brooklyn', 'Une salle d’entrepôt de 210 places avec un système d&b Audiotechnik, ouverte depuis 2025', 'Une petite salle au son sérieux'],
        ['House of Yes', 'Bushwick, Brooklyn', 'Un club tourné vers la performance, ouvert depuis 2015', 'Soirées costumées et théâtrales']
      ].map(row => row.map(escapeHtml))
    })
  }),

  sources: [
    {href: 'https://en.wikipedia.org/wiki/The_Loft_(New_York_City)', label: 'Wikipedia: The Loft (New York City)'},
    {href: 'https://en.wikipedia.org/wiki/Paradise_Garage', label: 'Wikipedia: Paradise Garage'},
    {href: 'https://en.wikipedia.org/wiki/Studio_54', label: 'Wikipedia: Studio 54'},
    {href: 'https://en.wikipedia.org/wiki/Limelight_(nightclub)', label: 'Wikipedia: The Limelight'},
    {href: 'https://en.wikipedia.org/wiki/New_York_City_Cabaret_Law', label: 'Wikipedia: New York City Cabaret Law'},
    {href: 'https://pitchfork.com/news/brooklyn-dance-club-output-closing/', label: 'Pitchfork: Brooklyn dance club Output closing'},
    {href: 'https://djmag.com/features/mister-saturday-night-15-years-new-york-party-nowadays-eamon-harkin-justin-carter', label: 'DJ Mag: Mister Saturday Night, 15 years of a New York party'},
    {href: 'https://gothamist.com/arts-entertainment/nycs-best-techno-club-vibe-checks-you-at-the-door-so-i-tried-to-get-in', label: 'Gothamist: NYC\'s best techno club vibe checks you at the door (2023)'},
    {href: 'https://www.timeout.com/newyork/nightlife/best-clubs-in-nyc', label: 'Time Out: 12 best clubs in NYC for techno, house and more'},
    {href: 'https://nowadays.nyc/about', label: 'Nowadays: hours and location'},
    {href: 'https://www.elsewhere.club/about', label: 'Elsewhere: about'},
    {href: 'https://publicrecords.nyc', label: 'Public Records'},
    {href: 'https://djmag.com/news/new-york-club-paragon-reopen-thanks-generous-lifeline-kevin-saunderson', label: 'DJ Mag: New York club Paragon to reopen thanks to a lifeline from Kevin Saunderson (2025)'},
    {href: 'https://djmag.com/new-brooklyn-club-signal-opens', label: 'DJ Mag: New Brooklyn club Signal opens (2025)'},
    {href: 'https://www.fortgreenepark.org/all-programs/soul-summit', label: 'Fort Greene Park Conservancy: Soul Summit'},
    {href: 'https://dannykrivit.net/718-sessions', label: 'Danny Krivit: 718 Sessions'}
  ],

  bandcamp: {
    description: 'Deux de mes propres morceaux. En acheter un soutient directement mon travail.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks par thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 par thecatrave'}
    ]
  }
};
