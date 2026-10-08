// French Lisbon clubs guide. Structure, facts and media from the English page
// (lisbon-clubs-draft.md, build-lisbon-clubs-article.mjs). Search wording from live Google
// (google.fr, hl=fr/gl=fr, 2026-10-01); volumes in keywords/fr-lisbon-clubs.json.
// The images are the English guide's, with translated captions.

import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/lisbon-clubs/${name}-${width}.webp`,
  srcset: `img/lisbon-clubs/${name}-320.webp 320w, img/lisbon-clubs/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

export default {
  lang: 'fr',
  name: 'fr-lisbon-clubs',
  file: 'fr/boite-de-nuit-lisbonne.html',
  draft: 'fr/lisbon-clubs-draft.md',
  canonical: 'https://thecatrave.com/fr/boite-de-nuit-lisbonne',
  englishPath: '/best-clubs-in-lisbon',
  ogImage: 'https://thecatrave.com/img/og/lisbon-clubs.jpg',
  bodyClass: 'article-page lisbon-clubs-page',
  minReadingMinutes: 7,

  title: 'Les meilleures boîtes de nuit à Lisbonne : Lux Frágil, Kremlin',
  description: 'Le Lux Frágil fait Lisbonne depuis 1998, le Ministerium passe de l’afro-house dans un ancien ministère, Musicbox a fermé en 2025 : les meilleures boîtes de nuit.',
  datePublished: '2026-10-01',
  dateModified: '2026-10-06',
  dateLabel: '6 octobre 2026',

  heroKicker: 'Boîtes de nuit Lisbonne',
  heroTitle: 'Les meilleures boîtes de nuit à Lisbonne, du Lux Frágil au Ministerium',
  deck: 'Un entrepôt de quai reconverti qui porte la ville depuis 1998, une ancienne aile du ministère des Finances connue pour l’afro-house, et le club que le quartier a perdu en 2025 : les meilleures boîtes de nuit de Lisbonne aujourd’hui.',
  answerLabel: 'Les meilleures boîtes de nuit à Lisbonne',
  breadcrumbName: 'Les meilleures boîtes de nuit à Lisbonne',

  answerSection: 'Réponse',
  introSection: 'Introduction',
  introTitle: 'Une scène de clubs qui vit au bord du fleuve.',
  faqSection: 'FAQ',
  faqLabel: 'Questions fréquentes',
  faqTitle: 'Questions fréquentes sur les boîtes de nuit à Lisbonne.',

  sections: [
    {id: 'best-clubs-now', heading: 'Les meilleures boîtes de nuit à Lisbonne aujourd’hui', title: 'Les meilleures boîtes de nuit à Lisbonne aujourd’hui.'},
    {id: 'lux-fragil-depth', heading: 'Le Lux Frágil en détail', title: 'Le Lux Frágil en détail.'},
    {id: 'current-scene', heading: 'Ministerium, Kremlin et le reste de la scène actuelle', title: 'Ministerium, Kremlin et le reste de la scène actuelle.'},
    {id: 'lost-venues', heading: 'Cais do Sodré et les lieux que Lisbonne a perdus', title: 'Cais do Sodré et les lieux que Lisbonne a perdus.'},
    {id: 'where-to-go', heading: 'Où sortir à Lisbonne', title: 'Où sortir à Lisbonne.'}
  ],

  media: ({lang}) => ({
    'Lux Fragil': figure('lux-fragil', 552, 400, 'Le bâtiment du Lux Frágil sur la Cais da Pedra à Lisbonne',
      'Le bâtiment du Lux Frágil sur la Cais da Pedra, un entrepôt de manutention portuaire de 1910 reconverti. Photo : Fssmgn, CC BY 3.0.'),
    'Buraka Som Sistema': articleVideoCollection({lang, label: 'Buraka Som Sistema, Boiler Room Lisboa x RBMA Takeover, 2013', description: 'Le set de Buraka Som Sistema pour Boiler Room Lisboa en 2013, dans le cadre d’une prise de contrôle de la Red Bull Music Academy, toujours l’une des diffusions Boiler Room filmées dans la ville les plus regardées.', items: [articleVideoCard({youtubeId: '4_Jk34-b_Jw', genre: 'Kuduro', artist: 'Buraka Som Sistema', title: 'Boiler Room Lisboa x RBMA Takeover, 2013'})]}),
    'Praça do Comércio': figure('praca-comercio', 1200, 824, 'La Praça do Comércio, la place au bord du fleuve de Lisbonne, vue du sol',
      'La Praça do Comércio, photographiée en 2018. Le Ministerium Club occupe une aile de cette place, dans des salles qui appartenaient autrefois au ministère portugais des Finances. Photo : Berthold Werner, CC BY-SA 4.0.'),
    'Pink Street': figure('pink-street-aerial', 1200, 900, 'Vue aérienne de la rue Nova do Carvalho, la « Pink Street » peinte en rose de Lisbonne',
      'La rue Nova do Carvalho, connue sous le nom de Pink Street, vue d’en haut. Musicbox a occupé ses arches pendant près de dix-neuf ans avant de fermer en septembre 2025. Photo : FuriousYogi, CC BY-SA 4.0.'),
    'Village Underground bus': figure('village-underground-bus', 1200, 799, 'Le bus à impériale du Village Underground Lisboa, élément du campus créatif du lieu',
      'Le bus à impériale emblématique du Village Underground Lisboa, photographié en 2019. Le lieu d’Alcântara, bâti avec des conteneurs maritimes empilés et un entrepôt converti, fonctionne comme club et espace d’événements depuis 2017. Photo : Keith Dixon, CC BY 2.0.'),
    'Parris': articleVideoCollection({lang, label: 'Parris, Boiler Room Lisbonne : Village Underground, 2019', description: 'Le set de Parris pour Boiler Room en 2019 au Village Underground Lisboa.', items: [articleVideoCard({youtubeId: 'MKuFgNjWLx8', genre: 'UK bass', artist: 'Parris', title: 'Boiler Room Lisbonne : Village Underground, 2019'})]}),
    'Table: now': articleTable({
      headers: ['Club', 'Quartier', 'Musique et caractère', 'Idéal pour'],
      rows: [
        ['Lux Frágil', 'Cais da Pedra, depuis 1998', 'House et techno dans un entrepôt de quai reconverti, avec Dixon, Ben Klock et Freddy K parmi beaucoup d’autres', 'L’étape indispensable de Lisbonne et sa terrasse au bord du fleuve au lever du soleil'],
        ['Ministerium Club', 'Praça do Comércio, depuis 2012', 'House et techno dans une ancienne aile du ministère des Finances, plus les soirées d’afro-house de Konda Records', 'De l’afro-house rarement proposée ailleurs en ville'],
        ['Kremlin', 'Santos, depuis 1988 (fermé en 2011, rouvert en 2016)', 'Les arches de pierre d’un ancien couvent, l’un des rares clubs lisboètes des années 1990 à avoir survécu à une fermeture et à être revenu', 'Un vrai lien avec l’histoire des clubs lisboètes des années 1990, pas un revival'],
        ['Village Underground Lisboa', 'Alcântara, depuis 2017', 'Un campus créatif à l’échelle de l’entrepôt, en conteneurs maritimes empilés, avec des soirées clubs et concerts à côté de l’espace de coworking', 'Le bout plus récent de la scène, à l’échelle de l’entrepôt']
      ].map(row => row.map(escapeHtml))
    })
  }),

  sources: [
    {href: 'https://ra.co/guide/pt/lisbon', label: 'Resident Advisor: RA Guide to Lisbon'},
    {href: 'https://www.timeout.com/lisbon/nightlife/the-best-lisbon-clubs', label: 'Time Out Lisbon: The 21 best clubs in Lisbon (2024)'},
    {href: 'https://www.lisbonlux.com/lisbon-clubs/', label: 'Lisbon Lux: Lisbon Clubs, 2026 Guide'},
    {href: 'https://djmag.com/features/underground-resilience-lisbons-diy-club-scene-refuses-give-dancefloor', label: 'DJ Mag: Underground Resilience: Lisbon\'s DIY club scene refuses to give up on the dancefloor (2026)'}
  ],

  bandcamp: {
    description: 'Deux de mes propres morceaux. En acheter un soutient directement mon travail.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks par thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 par thecatrave'}
    ]
  }
};
