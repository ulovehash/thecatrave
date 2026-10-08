// French Bristol clubs guide. Structure, facts and media from the English page
// (bristol-clubs-draft.md, build-bristol-clubs-article.mjs). Search wording from live Google
// (google.fr, hl=fr/gl=fr, 2026-10-01); volumes in keywords/fr-bristol-clubs.json.
// The images are the English guide's, with translated captions.

import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/bristol-clubs/${name}-${width}.webp`,
  srcset: `img/bristol-clubs/${name}-320.webp 320w, img/bristol-clubs/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

export default {
  lang: 'fr',
  name: 'fr-bristol-clubs',
  file: 'fr/boite-de-nuit-bristol.html',
  draft: 'fr/bristol-clubs-draft.md',
  canonical: 'https://thecatrave.com/fr/boite-de-nuit-bristol',
  englishPath: '/best-clubs-in-bristol',
  ogImage: 'https://thecatrave.com/img/og/bristol-clubs.jpg',
  bodyClass: 'article-page bristol-clubs-page',
  minReadingMinutes: 6,

  title: 'Meilleures boîtes de nuit à Bristol : Motion, Lakota, Thekla',
  description: 'Motion a perdu son bail en 2025, Lakota passe du drum and bass depuis les années 1990, un cargo de 1959 accueille des soirées : les meilleurs clubs de Bristol.',
  datePublished: '2026-10-01',
  dateModified: '2026-10-06',
  dateLabel: '6 octobre 2026',

  heroKicker: 'Boîtes de nuit Bristol',
  heroTitle: 'Les meilleures boîtes de nuit à Bristol, de Motion à Lakota',
  deck: 'Un club d’entrepôt de cinq salles qui a perdu son bâtiment en 2025 et a déménagé plutôt que de fermer, une salle sur quatre étages sur Upper York Street qui n’a jamais cessé de programmer du drum and bass, et un cargo de 1959 qui organise toujours des soirées depuis le même point d’amarrage.',
  answerLabel: 'Les meilleures boîtes de nuit à Bristol',
  breadcrumbName: 'Les meilleures boîtes de nuit à Bristol',

  answerSection: 'Réponse',
  introSection: 'Introduction',
  introTitle: 'Une autre sorte de ville de clubs.',
  faqSection: 'FAQ',
  faqLabel: 'Questions fréquentes',
  faqTitle: 'Questions fréquentes sur les boîtes de nuit à Bristol.',

  sections: [
    {id: 'best-clubs-now', heading: 'Les meilleures boîtes de nuit à Bristol aujourd’hui', title: 'Les meilleures boîtes de nuit à Bristol aujourd’hui.'},
    {id: 'motion-depth', heading: 'Motion en détail', title: 'Motion en détail.'},
    {id: 'lakota-bass-music', heading: 'Lakota et la lignée bass music de Bristol', title: 'Lakota et la lignée bass music de Bristol.'},
    {id: 'where-to-go', heading: 'Où sortir à Bristol', title: 'Où sortir à Bristol.'}
  ],

  media: ({lang}) => ({
    'Lakota': figure('lakota-exterior', 700, 946, 'La façade de la boîte de nuit Lakota sur Upper York Street à Bristol',
      'Le bâtiment de Lakota sur Upper York Street, photographié en 2011. La fiche de Resident Advisor l’appelle le « foyer de l’underground » de Bristol. Photo : Neil Owen, CC BY-SA 2.0.'),
    'Hodge': articleVideoCollection({lang, label: 'Hodge, Boiler Room Bristol, 2015', description: 'Le set de Hodge pour Boiler Room Bristol, filmé le 6 août 2015.', items: [articleVideoCard({youtubeId: 'rGCDKpkPUqI', genre: 'Bass', artist: 'Hodge', title: 'Boiler Room Bristol, 2015'})]}),
    'Shanti Celeste': articleVideoCollection({lang, label: 'Shanti Celeste, Boiler Room Bristol, 2015', description: 'Le set de Shanti Celeste pour Boiler Room Bristol, filmé le 28 septembre 2015, peu après sa signature sur le label Broadwalk de Julio Bashmore.', items: [articleVideoCard({youtubeId: 'dgv4ktxwTHA', genre: 'House', artist: 'Shanti Celeste', title: 'Boiler Room Bristol, 2015'})]}),
    'Thekla': figure('thekla-boat', 1200, 675, 'Thekla, un cargo reconverti amarré dans le Floating Harbour de Bristol, vu depuis le quai',
      'Thekla, photographié en 2023. Construit en Allemagne en 1959, le navire est arrivé à Bristol en 1983 et a ouvert comme lieu l’année suivante. Photo : The wub, CC BY-SA 4.0.'),
    'Table: now': articleTable({
      headers: ['Club', 'Quartier', 'Musique et caractère', 'Idéal pour'],
      rows: [
        ['Motion', 'Unit 2, Victoria Terrace (Avon Street jusqu’en 2025)', 'La nouvelle salle a ouvert en 2025 ; les cinq salles et le classement DJ Mag concernent l’ancien site d’Avon Street', 'Vérifier le lieu et l’adresse de chaque événement'],
        ['Lakota', 'Upper York Street', 'Quatre étages de drum and bass, jungle, hardcore, dubstep, psytrance et techno depuis le début des années 1990', 'Un vrai lien avec l’histoire bass music de Bristol, pas un revival'],
        ['Thekla', 'Floating Harbour', 'Un cargo reconverti de 1959, concerts d’abord et soirées clubs ensuite, géré par DHP Family depuis l’ouverture du lieu en 1984', 'Une soirée construite autour d’une salle que personne d’autre n’a']
      ].map(row => row.map(escapeHtml))
    })
  }),

  sources: [
    {href: 'https://ra.co/clubs', label: 'Resident Advisor: Motion Bristol and Lakota, Bristol, venue pages'},
    {href: 'https://mixmag.net', label: 'Mixmag: Motion Bristol to shut down in July, announces plans for a new home (2025)'},
    {href: 'https://www.bristolworld.com/business/motion-bristol-to-sadly-close-down-after-20-years', label: 'BristolWorld: Motion Bristol to sadly close down after 20 years (2025)'},
    {href: 'https://www.bristol247.com', label: 'Bristol24/7: coverage of Motion, Lakota and Thekla club nights'},
    {href: 'https://www.express.co.uk', label: 'Daily Express: Huge UK music venue shutting doors in weeks (2025)'}
  ],

  bandcamp: {
    description: 'Deux de mes propres morceaux. En acheter un soutient directement mon travail.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks par thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 par thecatrave'}
    ]
  }
};
