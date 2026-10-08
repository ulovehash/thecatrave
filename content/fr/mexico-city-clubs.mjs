// French Mexico City clubs guide. Structure, facts and media from the English page
// (mexico-city-clubs-draft.md, build-mexico-city-clubs-article.mjs). Search wording from live Google
// (google.fr, hl=fr/gl=fr, 2026-10-01); volumes in keywords/fr-mexico-city-clubs.json.
// The images are the English guide's, with translated captions.

import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/mexico-city-clubs/${name}-${width}.webp`,
  srcset: `img/mexico-city-clubs/${name}-320.webp 320w, img/mexico-city-clubs/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

export default {
  lang: 'fr',
  name: 'fr-mexico-city-clubs',
  file: 'fr/boite-de-nuit-mexico.html',
  draft: 'fr/mexico-city-clubs-draft.md',
  canonical: 'https://thecatrave.com/fr/boite-de-nuit-mexico',
  englishPath: '/best-clubs-in-mexico-city',
  ogImage: 'https://thecatrave.com/img/og/mexico-city-clubs.jpg',
  bodyClass: 'article-page mexico-city-clubs-page',
  minReadingMinutes: 6,

  title: 'Meilleures boîtes de nuit à Mexico : Patrick Miller, M.N.Roy',
  description: 'Patrick Miller ouvre tous les vendredis depuis 1983, M.N.Roy occupe un manoir du Parti communiste, le Fünk date de 2019 : les meilleures boîtes de nuit à Mexico.',
  datePublished: '2026-10-01',
  dateModified: '2026-10-06',
  dateLabel: '6 octobre 2026',

  heroKicker: 'Boîtes de nuit Mexico',
  heroTitle: 'Les meilleures boîtes de nuit à Mexico, de Patrick Miller à M.N.Roy',
  deck: 'Une salle de danse de Roma Norte ouverte tous les vendredis depuis 1983, un manoir du Parti communiste devenu club privé, et les salles en sous-sol qui attirent des bookers internationaux depuis 2017 : les meilleures boîtes de nuit à Mexico aujourd’hui.',
  answerLabel: 'Les meilleures boîtes de nuit à Mexico',
  breadcrumbName: 'Les meilleures boîtes de nuit à Mexico',

  answerSection: 'Réponse',
  introSection: 'Introduction',
  introTitle: 'Quatre décennies sur quelques kilomètres carrés.',
  faqSection: 'FAQ',
  faqLabel: 'Questions fréquentes',
  faqTitle: 'Questions fréquentes sur les boîtes de nuit à Mexico.',

  sections: [
    {id: 'best-clubs-now', heading: 'Les meilleures boîtes de nuit à Mexico aujourd’hui', title: 'Les meilleures boîtes de nuit à Mexico aujourd’hui.'},
    {id: 'patrick-miller-depth', heading: 'Patrick Miller en détail', title: 'Patrick Miller en détail.'},
    {id: 'mnroy-funk-current-scene', heading: 'M.N.Roy, Fünk et la scène actuelle', title: 'M.N.Roy, Fünk et la scène actuelle.'},
    {id: 'where-to-go', heading: 'Où sortir à Mexico', title: 'Où sortir à Mexico.'}
  ],

  media: ({lang}) => ({
    'Zocalo': figure('zocalo-nightfall', 1200, 456, 'Le Zócalo, la place principale de Mexico, vu d’en haut à la tombée de la nuit',
      'Le Zócalo à la tombée de la nuit. Patrick Miller a débuté dans le centre-ville, près d’ici, avant de s’installer à Roma Norte. Photo : Uwebart, CC BY-SA 3.0.'),
    'Roma Norte': figure('roma-norte-street', 1200, 533, 'Un coin de rue du quartier de Roma Norte à Mexico',
      'Un coin de rue de Roma Norte, photographié en 2014. Patrick Miller et M.N.Roy se trouvent à quelques rues l’un de l’autre dans ce quartier. Photo : Carl Campbell, CC BY-SA 2.0.'),
    'Condesa': figure('condesa-jacaranda', 1200, 900, 'Une rue bordée de jacarandas dans le quartier de Condesa à Mexico',
      'Un jacaranda en fleurs dans une rue de Condesa. Le Fünk Club se trouve à la limite de Condesa et d’Hipódromo. Photo : Lazjak, CC BY-SA 4.0.'),
    'Turbo Sonidero': articleVideoCollection({lang, label: 'Turbo Sonidero, Boiler Room SYSTEM CDMX: Sonidero Special, 2025', description: 'Le set de Turbo Sonidero en 2025 pour la série SYSTEM de Boiler Room, vitrine de la tradition des sound systems sonidero de Mexico.', items: [articleVideoCard({youtubeId: 'it0w2zniMOI', genre: 'Cumbia', artist: 'Turbo Sonidero', title: 'Boiler Room SYSTEM CDMX: Sonidero Special, 2025'})]}),
    'Nic Fanciulli': articleVideoCollection({lang, label: 'Nic Fanciulli, Boiler Room Mexico City, 2018', description: 'Le set de Nic Fanciulli pour Boiler Room Mexico City en 2018, toujours l’une des diffusions les plus regardées de la plateforme depuis la ville.', items: [articleVideoCard({youtubeId: 'j5hdgys4a-M', genre: 'House', artist: 'Nic Fanciulli', title: 'Boiler Room Mexico City, 2018'})]}),
    'Table: now': articleTable({
      headers: ['Club', 'Quartier', 'Musique et caractère', 'Idéal pour'],
      rows: [
        ['Patrick Miller', 'Roma Norte, depuis 1983, le vendredi uniquement', 'Pop rétro et disco autour d’un cercle de danse ouvert, selon le même format depuis des décennies', 'Le lien le plus net avec l’histoire des clubs de la ville avant Internet'],
        ['M.N.Roy', 'Roma Norte, depuis le début des années 2010', 'House, minimale et techno dans un ancien manoir du Parti communiste redessiné par Chic by Accident', 'Un club privé construit autant sur son architecture que sur ses bookings'],
        ['Fünk Club', 'Limite Condesa/Hipódromo, depuis 2019', 'Têtes d’affiche internationales et résidences de collectifs locaux sur un système Funktion One', 'Une salle en sous-sol qui a contribué à faire connaître la scène underground de la ville à l’international'],
        ['Yu Yu Cine Club', 'Juárez, depuis 2017', 'Une petite salle intime en sous-sol avec le Drama Bar au rez-de-chaussée, conçue pour collaborer avec d’autres collectifs', 'Une soirée intime, centrée sur la communauté']
      ].map(row => row.map(escapeHtml))
    })
  }),

  sources: [
    {href: 'https://ra.co/guide/mx/mexicocity', label: 'Resident Advisor: RA Guide to Mexico City'},
    {href: 'https://djmag.com/features/inside-mexico-citys-vibrant-electronic-underground', label: 'DJ Mag: Inside Mexico City’s vibrant electronic underground (2024)'},
    {href: 'https://www.timeout.com/mexico-city/bars', label: 'Time Out Mexico City: Bars and Nightclubs'}
  ],

  bandcamp: {
    description: 'Deux de mes propres morceaux. En acheter un soutient directement mon travail.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks par thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 par thecatrave'}
    ]
  }
};
