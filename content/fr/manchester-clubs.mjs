// French Manchester clubs guide. Structure, facts and media from the English page
// (manchester-clubs-draft.md, build-manchester-clubs-article.mjs). Search wording from live Google
// (google.fr, hl=fr/gl=fr, 2026-10-01); volumes in keywords/fr-manchester-clubs.json.
// The images are the English guide's, with translated captions.

import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/manchester-clubs/${name}-${width}.webp`,
  srcset: `img/manchester-clubs/${name}-320.webp 320w, img/manchester-clubs/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

export default {
  lang: 'fr',
  name: 'fr-manchester-clubs',
  file: 'fr/boite-de-nuit-manchester.html',
  draft: 'fr/manchester-clubs-draft.md',
  canonical: 'https://thecatrave.com/fr/boite-de-nuit-manchester',
  englishPath: '/best-clubs-in-manchester',
  ogImage: 'https://thecatrave.com/img/og/manchester-clubs.jpg',
  bodyClass: 'article-page manchester-clubs-page',
  minReadingMinutes: 6,

  title: 'Meilleures boîtes de nuit à Manchester : Haçienda, Warehouse',
  description: 'L’Haçienda a fermé en 1997, mais son esprit DIY façonne encore la ville : les meilleures boîtes de nuit à Manchester aujourd’hui et l’essor du Warehouse Project.',
  datePublished: '2026-10-01',
  dateModified: '2026-10-01',
  dateLabel: '1er octobre 2026',

  heroKicker: 'Boîtes de nuit Manchester',
  heroTitle: 'Les meilleures boîtes de nuit à Manchester, de l’héritage de l’Haçienda au Warehouse Project',
  deck: 'Le club qui a bâti la réputation de Manchester a fermé en 1997. Ce qui l’a remplacé, c’est une série saisonnière dans des entrepôts et une poignée de petites salles qui placent le sound system d’abord, dans le Northern Quarter et à Salford.',
  answerLabel: 'Les meilleures boîtes de nuit à Manchester',
  breadcrumbName: 'Les meilleures boîtes de nuit à Manchester',

  answerSection: 'Réponse',
  introSection: 'Introduction',
  introTitle: 'Une réputation bâtie sur un bâtiment qui n’existe plus.',
  faqSection: 'FAQ',
  faqLabel: 'Questions fréquentes',
  faqTitle: 'Questions fréquentes sur les boîtes de nuit à Manchester.',

  sections: [
    {id: 'hacienda-legacy', heading: 'L’héritage de l’Haçienda', title: 'L’héritage de l’Haçienda.'},
    {id: 'best-clubs-now', heading: 'Les meilleures boîtes de nuit à Manchester aujourd’hui', title: 'Les meilleures boîtes de nuit à Manchester aujourd’hui.'},
    {id: 'where-to-go', heading: 'Où sortir à Manchester', title: 'Où sortir à Manchester.'}
  ],

  media: ({lang}) => ({
    'Hacienda': figure('hacienda-bollards', 800, 600, 'Trois des bornes rayées de l’Haçienda qui ont survécu, exposées en 2007',
      'Les bornes de l’Haçienda, photographiées en 2007, cinq ans après la démolition du club lui-même. Photo : a_marga, CC BY-SA 2.0.'),
    'Northern Quarter': figure('northern-quarter', 1200, 720, 'Une rue du Northern Quarter de Manchester, le quartier d’entrepôts reconvertis autour d’Oldham Street',
      'Le Northern Quarter, qui abrite Soup et Eastern Bloc Records et la plupart des bars indépendants de la ville. Photo : Jorge Franganillo, CC BY 4.0.'),
    'Table: now': articleTable({
      headers: ['Club', 'Quartier', 'Musique et caractère', 'Idéal pour'],
      rows: [
        ['The White Hotel', 'Salford', 'Un garage reconverti à la programmation avant-gardiste et éclectique, avec un public queer fidèle', 'Le DIY, une programmation underground et des artistes internationaux rarement bookés'],
        ['Soup', 'Northern Quarter', 'Un bar et un club intime, anciennement Soup Kitchen, centré sur les talents locaux et cultes', 'Une soirée communautaire sans line-up de têtes d’affiche'],
        ['Eastern Bloc Records', 'Northern Quarter', 'Un disquaire depuis 1985 qui organise des soirées « Open to Close » au plafond bas, uniquement en vinyle', 'Les DJ de Manchester, joués en vinyle du début à la fin'],
        ['The Loft', 'périphérie du centre-ville', 'Une salle de 200 personnes sur un système Funktion-One sur mesure, ouverte en 2021, tournée vers la house', 'De la tech house cérébrale aux sons old-school plus profonds'],
        ['Hidden', 'centre-ville', 'Un lieu sur plusieurs étages avec un système Void Acoustics, ouvert depuis 2015', 'House et techno à côté de jungle et de drum & bass lourds'],
        ['Stage & Radio', 'centre-ville', 'Un ancien club de jazz de 1946 rouvert pour la dance music en 2016, avec sa propre radio communautaire', 'DJ underground britanniques et culture des sound systems']
      ].map(row => row.map(escapeHtml))
    }),
    'Swing Ting': articleVideoCollection({lang, label: 'Swing Ting, Bass, beats and grime, @ Soup, Manchester, 2021', description: 'Swing Ting, le collectif mancunien de bass, beats et grime, enregistré au Soup, l’un des clubs actuels ci-dessus.', items: [articleVideoCard({youtubeId: 'b1lOaex4kZw', genre: 'Grime', artist: 'Swing Ting', title: 'Bass, beats and grime, @ Soup, Manchester, 2021'})]}),
    'LEVELZ': articleVideoCollection({lang, label: 'LEVELZ, Boiler Room: Manchester, 2016', description: 'LEVELZ, le collectif mancunien issu des scènes grime et bassline de la ville, sur la diffusion Boiler Room de Manchester.', items: [articleVideoCard({youtubeId: 'GtJhGigH1mw', genre: 'Grime', artist: 'LEVELZ', title: 'Boiler Room: Manchester, 2016'})]})
  }),

  sources: [
    {href: 'https://en.wikipedia.org/wiki/The_Ha%C3%A7ienda', label: 'Wikipedia: The Haçienda'},
    {href: 'https://en.wikipedia.org/wiki/The_Warehouse_Project', label: 'Wikipedia: The Warehouse Project'},
    {href: 'https://ra.co/guides/clubs-in-manchester', label: 'Resident Advisor: The Best Clubs in Manchester in 2026'},
    {href: 'https://nightclub.org.uk/club/the-white-hotel', label: 'nightclub.org.uk: The White Hotel'},
    {href: 'https://www.manchestertourism.org', label: 'Manchester Tourism: Best Nightclubs in Manchester'}
  ],

  bandcamp: {
    description: 'Deux de mes propres morceaux. En acheter un soutient directement mon travail.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks par thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 par thecatrave'}
    ]
  }
};
