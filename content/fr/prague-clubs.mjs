// French Prague clubs guide. Structure, facts and media from the English page
// (prague-clubs-draft.md, build-prague-clubs-article.mjs). Search wording from live Google
// (google.fr, hl=fr/gl=fr, 2026-10-01); volumes in keywords/fr-prague-clubs.json.
// The images are the English guide's, with translated captions.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/prague-clubs/${name}-${width}.webp`,
  srcset: `img/prague-clubs/${name}-320.webp 320w, img/prague-clubs/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

export default {
  lang: 'fr',
  name: 'fr-prague-clubs',
  file: 'fr/boite-de-nuit-prague.html',
  draft: 'fr/prague-clubs-draft.md',
  canonical: 'https://thecatrave.com/fr/boite-de-nuit-prague',
  englishPath: '/best-clubs-in-prague',
  ogImage: 'https://thecatrave.com/img/og/prague-clubs.jpg',
  bodyClass: 'article-page prague-clubs-page',
  minReadingMinutes: 5,

  title: 'Les meilleures boîtes de nuit à Prague : Cross Club et Ankali',
  description: 'La ferraille du Cross Club, les cinq étages de Karlovy Lázně et les nuits techno de l’Ankali : les meilleures boîtes de nuit de Prague, grand public et underground.',
  datePublished: '2026-10-01',
  dateModified: '2026-10-06',
  dateLabel: '6 octobre 2026',

  heroKicker: 'Boîtes de nuit Prague',
  heroTitle: 'Les meilleures boîtes de nuit à Prague, du Cross Club à Karlovy Lázně',
  deck: 'Deux scènes nocturnes qui se croisent à peine : des complexes touristiques de cinq étages près du pont Charles, et une série plus restreinte de salles bâties avec de la ferraille de récupération et un système son sur mesure pour la house et la techno.',
  answerLabel: 'Les meilleures boîtes de nuit à Prague',
  breadcrumbName: 'Les meilleures boîtes de nuit à Prague',

  answerSection: 'Réponse',
  introSection: 'Introduction',
  introTitle: 'Deux scènes, une ville.',
  faqSection: 'FAQ',
  faqLabel: 'Questions fréquentes',
  faqTitle: 'Questions fréquentes sur les boîtes de nuit à Prague.',

  sections: [
    {id: 'best-clubs-now', heading: 'Les meilleures boîtes de nuit à Prague aujourd’hui', title: 'Les meilleures boîtes de nuit à Prague aujourd’hui.'},
    {id: 'cross-club-depth', heading: 'Le Cross Club en détail', title: 'Le Cross Club en détail.'},
    {id: 'techno-clubs', heading: 'Les meilleurs clubs de techno à Prague', title: 'Les meilleurs clubs de techno à Prague.'},
    {id: 'where-to-go', heading: 'Où sortir à Prague', title: 'Où sortir à Prague.'}
  ],

  media: ({lang}) => ({
    'Cross Club': figure('cross-club-interior', 844, 563, 'Le bar en sous-sol du Cross Club à Prague, bâti avec du métal de récupération et des pièces de machines',
      'Le bar en sous-sol du Cross Club, photographié en 2012. Le club a ouvert en 2002 et a été bâti avec des matériaux de décharge plutôt que d’après un cahier des charges de designer. Photo : -crosspraha-, CC BY-SA 4.0.'),
    'Wenceslas Square': figure('wenceslas-square', 1200, 750, 'Le Musée national en haut de la place Venceslas à Prague',
      'La place Venceslas, près du Musée national. Le Duplex et plusieurs clubs touristiques de Prague sont à quelques minutes à pied d’ici. Photo : Muselsom, CC BY-SA 4.0.'),
    'Fatty M': articleVideoCollection({lang, label: 'Fatty M, Boiler Room Prague, 2018', description: 'Fatty M lors de la première diffusion de Boiler Room en République tchèque, en décembre 2018.', items: [articleVideoCard({youtubeId: 'WY_Th5nrI90', genre: 'Electronic', artist: 'Fatty M', title: 'Boiler Room Prague, 2018'})]}),
    'Eva Porating': articleVideoCollection({lang, label: 'Eva Porating, Boiler Room Prague, 2018', description: 'Eva Porating dans la même diffusion Boiler Room Prague de décembre 2018 que Fatty M.', items: [articleVideoCard({youtubeId: '6od6a-eiLUs', genre: 'Electronic', artist: 'Eva Porating', title: 'Boiler Room Prague, 2018'})]}),
    'Table: now': articleTable({
      headers: ['Club', 'Quartier', 'Musique et caractère', 'Idéal pour'],
      rows: [
        ['Karlovy Lázně', 'Vieille-Ville, près du pont Charles', 'Cinq étages, un genre par étage, dans un ancien établissement thermal, ouvert depuis 1999', 'Une soirée entière sans quitter le bâtiment'],
        ['Duplex', 'Place Venceslas', 'Un club vitré sur un toit, avec deux plateformes de danse et une vue sur la ville', 'Une programmation internationale et une place au classement DJ Mag Top 100'],
        ['Cross Club', 'Holešovice', 'Trois étages de machinerie industrielle de récupération, ouvert depuis 2002', 'Drum and bass, techno et dub avec une histoire à faire soi-même'],
        ['Ankali', 'hors du centre', 'Une salle techno bâtie autour d’un système Funktion-One sur mesure, ouverte depuis 2017', 'De la deep house à la techno dure sur un vrai système son']
      ].map(row => row.map(escapeHtml))
    })
  }),

  sources: [
    {href: 'https://en.wikipedia.org/wiki/Cross_Club', label: 'Wikipedia: Cross Club'},
    {href: 'https://www.atlasobscura.com/places/cross-club', label: 'Atlas Obscura: Cross Club'},
    {href: 'https://english.radio.cz/cross-club-independent-culture-centre-a-twist-8556609', label: 'Radio Prague International: Cross Club, an independent culture centre with a twist'},
    {href: 'https://www.karlovylazne.cz/about', label: 'Karlovy Lázně: about'},
    {href: 'https://djmag.com/top100clubs/2022/62/DupleX', label: 'DJ Mag: Top 100 Clubs 2022, DupleX'},
    {href: 'https://djmag.com/top100clubs/2025/41/duplex', label: 'DJ Mag: Top 100 Clubs 2025, DupleX'},
    {href: 'https://mixmag.net/read/edge-closure-prague-club-ankali-urges-support-secure-future-news', label: 'Mixmag: Prague club Ankali urges support to secure its future (2025)'},
    {href: 'https://ra.co/news/82717', label: 'Resident Advisor: Prague club Ankali at risk of closure (2025)'},
    {href: 'https://boilerroom.tv/session/boiler-room-prague/', label: 'Boiler Room: Boiler Room Prague (2018)'}
  ],

  bandcamp: {
    description: 'Deux de mes propres morceaux. En acheter un soutient directement mon travail.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks par thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 par thecatrave'}
    ]
  }
};
