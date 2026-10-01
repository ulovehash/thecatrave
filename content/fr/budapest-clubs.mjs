// French Budapest clubs guide. Structure, facts and media from the English page
// (budapest-clubs-draft.md, build-budapest-clubs-article.mjs). Search wording from live Google
// (google.fr, hl=fr/gl=fr, 2026-10-01); volumes in keywords/fr-budapest-clubs.json.
// The images are the English guide's, with translated captions.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/budapest-clubs/${name}-${width}.webp`,
  srcset: `img/budapest-clubs/${name}-320.webp 320w, img/budapest-clubs/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

export default {
  lang: 'fr',
  name: 'fr-budapest-clubs',
  file: 'fr/boite-de-nuit-budapest.html',
  draft: 'fr/budapest-clubs-draft.md',
  canonical: 'https://thecatrave.com/fr/boite-de-nuit-budapest',
  englishPath: '/best-clubs-in-budapest',
  ogImage: 'https://thecatrave.com/img/og/budapest-clubs.jpg',
  bodyClass: 'article-page budapest-clubs-page',
  minReadingMinutes: 6,

  title: 'Les meilleures boîtes de nuit à Budapest : A38 et Instant-Fogas',
  description: 'Le cargo A38, les sept salles de l’Instant-Fogas et la techno de Turbina : les meilleures boîtes de nuit de Budapest, et les ruin bars dont elles sont issues.',
  datePublished: '2026-10-01',
  dateModified: '2026-10-01',
  dateLabel: '1er octobre 2026',

  heroKicker: 'Boîtes de nuit Budapest',
  heroTitle: 'Les meilleures boîtes de nuit à Budapest, de l’A38 à l’Instant-Fogas',
  deck: 'Une ville plus connue pour ses ruin bars que pour ses clubs, et la liste plus restreinte de lieux, un cargo reconverti parmi eux, conçus pour danser plutôt que pour boire dans une cour.',
  answerLabel: 'Les meilleures boîtes de nuit à Budapest',
  breadcrumbName: 'Les meilleures boîtes de nuit à Budapest',

  answerSection: 'Réponse',
  introSection: 'Introduction',
  introTitle: 'Des clubs à côté des ruin bars.',
  faqSection: 'FAQ',
  faqLabel: 'Questions fréquentes',
  faqTitle: 'Questions fréquentes sur les boîtes de nuit à Budapest.',

  sections: [
    {id: 'ruin-bars-to-clubs', heading: 'Des ruin bars aux clubs', title: 'Des ruin bars aux clubs.'},
    {id: 'best-clubs-now', heading: 'Les meilleures boîtes de nuit à Budapest aujourd’hui', title: 'Les meilleures boîtes de nuit à Budapest aujourd’hui.'},
    {id: 'techno-clubs', heading: 'Les meilleurs clubs de techno à Budapest', title: 'Les meilleurs clubs de techno à Budapest.'},
    {id: 'where-to-go', heading: 'Où sortir à Budapest', title: 'Où sortir à Budapest.'}
  ],

  media: ({lang}) => ({
    'Szimpla Kert': figure('szimpla-kert', 1200, 800, 'La cour éclectique du Szimpla Kert, le premier ruin bar de Budapest',
      'Le Szimpla Kert, rue Kazinczy, photographié en 2017. Il a ouvert en 2002 et s’est installé ici en 2004, donnant le modèle des ruin bars du VIIe arrondissement. Photo : Fred Romero, CC BY 2.0.'),
    'Fogas': figure('fogas-akacfa', 1200, 797, 'Le bâtiment sur rue du Fogasház, rue Akácfa, à Budapest',
      'Le Fogasház, rue Akácfa, photographié en 2017, l’année de sa fusion avec l’Instant voisin pour former le complexe Instant-Fogas. Photo : Christo, CC BY-SA 4.0.'),
    'A38 ship': figure('a38-ship', 1200, 900, 'Le navire A38 amarré sur le Danube à Budapest, un cargo de 1968 reconverti',
      'L’A38, amarré près du pont Petőfi, photographié en 2015. Il a ouvert en 2003 comme club et salle de concert, reconstruit à partir d’un cargo ukrainien de 1968. Photo : Rakás, CC BY-SA 4.0.'),
    'Route 8': articleVideoCollection({lang, label: 'Route 8, Boiler Room Budapest, à Turbina, 2021', description: 'Route 8 lors de la troisième diffusion de Boiler Room à Budapest, à Turbina en décembre 2021. Issu du catalogue de DJ sets enregistrés de ce site.', items: [articleVideoCard({youtubeId: 'dAB4K204nL0', genre: 'Techno', artist: 'Route 8', title: 'Boiler Room Budapest, à Turbina, 2021'})]}),
    'Imre Kiss': articleVideoCollection({lang, label: 'Imre Kiss, Boiler Room Budapest x Lobster Theremin, 2017', description: 'Imre Kiss lors de la première diffusion de Boiler Room à Budapest, à l’Akvárium Klub en janvier 2017, avec le label britannique Lobster Theremin. Issu du catalogue de DJ sets enregistrés de ce site.', items: [articleVideoCard({youtubeId: 'Xnp6hnEs4Ns', genre: 'House', artist: 'Imre Kiss', title: 'Boiler Room Budapest x Lobster Theremin, 2017'})]}),
    'Table: now': articleTable({
      headers: ['Club', 'Quartier', 'Musique et caractère', 'Idéal pour'],
      rows: [
        ['A38', 'Danube, près du pont Petőfi', 'Un cargo de 1968 reconverti, ouvert depuis 2003', 'Concerts et soirées club dans une seule coque'],
        ['Instant-Fogas Complex', 'Rue Akácfa, VIIe arrondissement', 'Sept salles et dix-huit bars issus de la fusion de deux ruin bars en 2017', 'Toute une nuit sans changer d’adresse'],
        ['Turbina', 'VIIIe arrondissement', 'La principale salle de Budapest pour la techno et la house en tournée', 'La troisième diffusion Boiler Room de Budapest, en 2021'],
        ['Toldi Klub', 'Bajcsy-Zsilinszky út', 'Le hall d’un cinéma de 80 ans, musique électronique et live après la dernière séance', 'Un club sans dress code et un cinéma le jour']
      ].map(row => row.map(escapeHtml))
    })
  }),

  sources: [
    {href: 'https://en.wikipedia.org/wiki/A38_(venue)', label: 'Wikipedia: A38 (venue)'},
    {href: 'https://en.wikipedia.org/wiki/Szimpla_Kert', label: 'Wikipedia: Szimpla Kert'},
    {href: 'https://www.a38.hu/en/history', label: 'A38: History'},
    {href: 'https://welovebudapest.com/en/article/2024/04/01/nightlife-instant-fogas-party-complex-party-district-budapest/', label: 'We Love Budapest: Instant-Fogas, the party complex expanding to eight days a week (2024)'},
    {href: 'https://welovebudapest.com/en/article/2018/07/17/authorities-close-budapest-s-corvin-club-and-aurora/', label: 'We Love Budapest: Authorities close Budapest\'s Corvin Club and Auróra (2018)'},
    {href: 'https://primate.hu/2025/01/17/kiderult-mi-fog-nyilni-a-corvinteto-helyen/', label: 'Primate.hu: What will open where Corvintető was (2025)'},
    {href: 'https://www.electronicbeats.net/larm-monologue', label: 'Electronic Beats: How Lärm became the underground techno club Budapest needed'},
    {href: 'https://welovebudapest.com/cikk/2021/11/19/ejszakai-elet-forrosodik-a-budapesti-buliszcena-a-turbinaba-erkezik-a-boiler-room', label: 'We Love Budapest: Boiler Room arrives at Turbina (2021)'},
    {href: 'https://ra.co/events/915127', label: 'Resident Advisor: Boiler Room Budapest x Lobster Theremin at Akvárium Klub (2017)'},
    {href: 'https://boilerroom.tv/session/br-budapest-x-lobster-theremin/', label: 'Boiler Room: BR Budapest x Lobster Theremin (2017)'}
  ],

  bandcamp: {
    description: 'Deux de mes morceaux. En acheter un soutient mon travail directement.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks par thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 par thecatrave'}
    ]
  }
};
