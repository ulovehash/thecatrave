// French Belgrade clubs guide. Structure, facts and media from the English page
// (belgrade-clubs-draft.md, build-belgrade-clubs-article.mjs, media/belgrade-clubs.json),
// dated 8 October 2026; nothing added that the English page does not say.
//
// French wording: Keyword Planner (France, French, 14 November 2026) returned
// "boite de nuit belgrade", "club belgrade", "vie nocturne belgrade" and
// "discotheque belgrade" in the 10-100 bucket (keywords/fr-belgrade-clubs.json).
// Google hl=fr calls the splavovi "péniches"; the slug follows the other fr
// club guides, boite-de-nuit-<city>.
//
// The images are the English guide's, in img/belgrade-clubs/, with translated captions.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/belgrade-clubs/${name}-${width}.webp`,
  srcset: `img/belgrade-clubs/${name}-320.webp 320w, img/belgrade-clubs/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

const video = (lang, youtubeId, artist, videoTitle, text) => articleVideoCollection({
  lang, label: `${artist}, ${videoTitle}`, description: text,
  items: [articleVideoCard({youtubeId, genre: 'Techno', artist, title: videoTitle})]
});

export default {
  lang: 'fr',
  name: 'fr-belgrade-clubs',
  file: 'fr/boite-de-nuit-belgrade.html',
  draft: 'fr/belgrade-clubs-draft.md',
  canonical: 'https://thecatrave.com/fr/boite-de-nuit-belgrade',
  englishPath: '/best-clubs-in-belgrade',
  ogImage: 'https://thecatrave.com/img/og/belgrade-clubs.jpg',
  bodyClass: 'article-page belgrade-clubs-page',
  minReadingMinutes: 6,

  title: 'Boîte de nuit Belgrade : Drugstore, Klub 20/44 et splavovi',
  description: 'Drugstore, Klub 20/44, Barutana : les boîtes de nuit à Belgrade qui valent une nuit, l’expulsion des splavovi de la Save et des sets Boiler Room à écouter.',
  datePublished: '2026-11-14',
  dateModified: '2026-11-14',
  dateLabel: '14 novembre 2026',

  heroKicker: 'Boîtes de nuit Belgrade',
  heroTitle: 'Boîtes de nuit et vie nocturne à Belgrade, du Drugstore aux péniches',
  deck: 'Un club dans un ancien abattoir, un autre qui a quitté son bateau pour la terre ferme, et des péniches que la ville a expulsées pendant deux ans : où passe la musique électronique à Belgrade aujourd’hui.',
  answerLabel: 'Boîtes de nuit à Belgrade',
  breadcrumbName: 'Boîtes de nuit à Belgrade',

  answerSection: 'Réponse',
  introSection: 'Introduction',
  introTitle: 'Les clubs de Belgrade, au-delà des bars.',
  faqSection: 'FAQ',
  faqLabel: 'Questions fréquentes',
  faqTitle: 'Questions fréquentes sur les boîtes de nuit à Belgrade.',

  sections: [
    {id: 'belgrade-nightlife-history', heading: 'La vie nocturne à Belgrade en bref', title: 'La vie nocturne à Belgrade en bref.'},
    {id: 'best-clubs-now', heading: 'Les meilleures boîtes de nuit à Belgrade aujourd’hui', title: 'Les meilleures boîtes de nuit à Belgrade aujourd’hui.'},
    {id: 'drugstore', heading: 'Drugstore Belgrade : l’ancien abattoir', title: 'Drugstore Belgrade : l’ancien abattoir.'},
    {id: 'klub-20-44', heading: 'Klub 20/44, du bateau à la Karađorđeva', title: 'Klub 20/44, du bateau à la Karađorđeva.'},
    {id: 'barutana', heading: 'Barutana Belgrade, le club dans la forteresse', title: 'Barutana Belgrade, le club dans la forteresse.'},
    {id: 'techno', heading: 'Techno à Belgrade : les clubs techno de la ville', title: 'Techno à Belgrade : les clubs techno de la ville.'},
    {id: 'splavovi', heading: 'Les splavovi de Belgrade et les clubs sur le fleuve', title: 'Les splavovi de Belgrade et les clubs sur le fleuve.'},
    {id: 'where-to-go', heading: 'Où sortir à Belgrade', title: 'Où sortir à Belgrade.'}
  ],

  media: ({lang}) => ({
    'Sava depuis Kalemegdan': figure('sava-from-kalemegdan', 1200, 900,
      'La Save à Belgrade vue depuis la forteresse de Kalemegdan, avec des ponts routiers et des bateaux amarrés',
      'La Save depuis la forteresse de Kalemegdan, photographiée en 2007. C’est sur des fleuves comme celui-ci qu’étaient amarrés les splavs de Belgrade. Photo : Petar Milošević, CC BY 3.0.'),
    'Péniche au Savski kej': figure('savski-kej-raft', 1200, 900,
      'Un bâtiment flottant amarré à la rive du Savski kej, sur la Save à Belgrade',
      'Un bâtiment flottant amarré au Savski kej, photographié en avril 2011, avant les expulsions de 2023 et 2024. Photo : darkobajic, CC BY 3.0.'),
    'Marko Nastic': video(lang, 'Yr1MNU8V-2w', 'Marko Nastić', 'MAD in Belgrade x Boiler Room, 2014',
      'Marko Nastić sur la scène de Boiler Room au festival MAD in Belgrade, en mai 2014.'),
    'Ancient Methods': video(lang, '14ksGZfcgHM', 'Ancient Methods', 'Boiler Room x Belgrade: Drugstore, 2019',
      'Ancient Methods au Drugstore en 2019, sous le titre que Boiler Room a donné à la session.'),
    'Tijana T': video(lang, 'xjO25HRDe-w', 'Tijana T', 'Boiler Room Belgrade at Klub 20/44, 2017',
      'Tijana T sur le pont du bateau du Klub 20/44 pour Boiler Room, en septembre 2017.'),
    '33.10.3402': video(lang, 'rJqr7_Q2uxE', '33.10.3402', 'Boiler Room Belgrade: Drugstore, 2019',
      '33.10.3402 à la première session de Boiler Room au Drugstore, en mars 2019.'),
    'Table: now': articleTable({
      label: 'Les meilleures boîtes de nuit à Belgrade aujourd’hui',
      headers: ['Club', 'Où', 'Caractère', 'Ouvert (selon les guides locaux, 2026)'],
      rows: [
        ['Drugstore', 'Bulevar Despota Stefana 115, Palilula', 'Ancien abattoir ; autogéré depuis 2012, dans ce lieu depuis 2014', 'Vendredi et samedi'],
        ['Klub 20/44', 'Karađorđeva 44', 'A quitté un bateau sur la Save le 31 décembre 2024', 'Du jeudi au samedi'],
        ['Barutana', 'Forteresse de Kalemegdan', 'Club en plein air devant une poudrière du XVIIIe siècle', 'Rouvert le 5 juin 2026'],
        ['Kult', 'Čumićevo sokače 3', 'De la house à la techno, capacité d’environ 350 ; depuis décembre 2022', 'Programmation non confirmée'],
        ['Lift', 'Cetinjska 15, Dorćol', 'Plutôt un bar à DJ qu’un club', 'Vérifier sa programmation']
      ].map(row => row.map(escapeHtml))
    })
  }),

  // The English page's sources, URL for URL, with translated labels. All in English or Serbian.
  sources: [
    {href: 'https://drugstorebeograd.com/', label: 'Drugstore : site officiel'},
    {href: 'https://boilerroom.tv/city/belgrade', label: 'Boiler Room : sessions à Belgrade'},
    {href: 'https://ra.co/news/81854', label: 'Resident Advisor : le Klub 20/44 ouvre au 44 Karađorđeva (25 décembre 2024)'},
    {href: 'https://nosleepfestival.com/', label: 'No Sleep Festival : site officiel'},
    {html: 'Balkan Insight, histoire des splavs de Belgrade (13 juin 2016) ; Vreme (24 mai 2023), Danas (9 mai 2024) et RTS / Direktno (13 août 2024) sur l’expulsion des péniches du Savski kej.'},
    {html: 'StillInBelgrade, 10 clubs et bars à DJ à Belgrade (17 février 2026), pour les jours d’ouverture et la capacité ; clubber.rs, pour l’histoire de la Barutana et sa réouverture en juin 2026 ; Belgrade My Way, pour le déplacement des péniches depuis 2025.'}
  ],

  bandcamp: {
    description: 'Loin de la piste, la musique que je fais moi-même. Acheter une sortie soutient directement mon travail.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 par thecatrave'},
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks par thecatrave'}
    ]
  }
};
