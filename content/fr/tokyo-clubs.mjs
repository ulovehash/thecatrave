// French Tokyo clubs guide. Structure, facts and media from the English page
// (tokyo-clubs-draft.md, build-tokyo-clubs-article.mjs). Search wording from live Google
// (google.fr, hl=fr/gl=fr, 2026-10-01); volumes in keywords/fr-tokyo-clubs.json.
// The images are the English guide's, with translated captions.

import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/tokyo-clubs/${name}-${width}.webp`,
  srcset: `img/tokyo-clubs/${name}-320.webp 320w, img/tokyo-clubs/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

export default {
  lang: 'fr',
  name: 'fr-tokyo-clubs',
  file: 'fr/boite-de-nuit-tokyo.html',
  draft: 'fr/tokyo-clubs-draft.md',
  canonical: 'https://thecatrave.com/fr/boite-de-nuit-tokyo',
  englishPath: '/best-clubs-in-tokyo',
  ogImage: 'https://thecatrave.com/img/og/tokyo-clubs.jpg',
  bodyClass: 'article-page tokyo-clubs-page',
  minReadingMinutes: 7,

  title: 'Les meilleures boîtes de nuit à Tokyo : WOMB, Contact',
  description: 'WOMB, Contact, Vent et Circus Tokyo : les meilleures boîtes de nuit à Tokyo pour la house, la techno et la bass music, et la loi de 68 ans contre la danse.',
  datePublished: '2026-10-01',
  dateModified: '2026-10-08',
  dateLabel: '8 octobre 2026',

  heroKicker: 'Boîtes de nuit Tokyo',
  heroTitle: 'Les meilleures boîtes de nuit à Tokyo, du WOMB au combat pour légaliser la danse',
  deck: 'Une ville où danser après 1 h est resté une zone grise juridique jusqu’en 2016, et où les meilleures salles de house, de techno et de bass music se trouvent dans des sous-sols de Shibuya et dans une salle d’événements reconvertie sur les docks.',
  answerLabel: 'Les meilleures boîtes de nuit à Tokyo',
  breadcrumbName: 'Les meilleures boîtes de nuit à Tokyo',

  answerSection: 'Réponse',
  introSection: 'Introduction',
  introTitle: 'Des clubs bâtis autour d’une loi contre la danse.',
  faqSection: 'FAQ',
  faqLabel: 'Questions fréquentes',
  faqTitle: 'Questions fréquentes sur les boîtes de nuit à Tokyo.',

  sections: [
    {id: 'fueiho-law', heading: 'Cinquante ans d’une loi contre la danse', title: 'Cinquante ans d’une loi contre la danse.'},
    {id: 'air-and-ageha', heading: 'L’Air et les clubs d’avant la réforme', title: 'L’Air et les clubs d’avant la réforme.'},
    {id: 'best-clubs-now', heading: 'Les meilleures boîtes de nuit à Tokyo aujourd’hui', title: 'Les meilleures boîtes de nuit à Tokyo aujourd’hui.'},
    {id: 'techno-clubs', heading: 'Les meilleurs clubs de techno à Tokyo', title: 'Les meilleurs clubs de techno à Tokyo.'},
    {id: 'where-to-go', heading: 'Où sortir à Tokyo', title: 'Où sortir à Tokyo.'}
  ],

  media: ({lang}) => ({
    'ageHa': figure('ageha-studio-coast', 1200, 850, 'L’extérieur du Studio Coast, le bâtiment du bord de l’eau à Shin-Kiba qui abritait l’ageHa',
      'Le Studio Coast à Shin-Kiba, siège de l’ageHa de 2002 à sa fermeture en janvier 2022, photographié en 2018. Photo : Kakidai, CC BY-SA 4.0.'),
    'WOMB': figure('womb-shibuya', 1200, 800, 'L’entrée et l’enseigne de la boîte de nuit WOMB à Shibuya, Tokyo',
      'L’entrée du WOMB à Shibuya, photographiée en 2023. Le club fonctionne à cette adresse depuis avril 2000. Photo : Dick Thomas Johnson, CC BY 2.0.'),
    'Dogenzaka': figure('dogenzaka-shibuya', 1200, 900, 'Dogenzaka la nuit, sa rue en pente bordée d’enseignes lumineuses de clubs, de bars et de karaokés',
      'Dogenzaka, à Shibuya, photographiée de nuit en 2024. La plupart des clubs de ce guide se trouvent sur cette rue ou juste à côté. Photo : Freddickfix, CC BY 4.0.'),
    'Chida': articleVideoCollection({lang, label: 'Chida, Boiler Room Tokyo, 2014', description: 'Le set de Chida lors de la toute première diffusion de Boiler Room à Tokyo en juin 2014, aux côtés de Force of Nature et de Monkey Timers.', items: [articleVideoCard({youtubeId: 'E2mThQ-g-24', genre: 'House', artist: 'Chida', title: 'Boiler Room Tokyo, 2014'})]}),
    'Wata Igarashi': articleVideoCollection({lang, label: 'Wata Igarashi, Boiler Room Tokyo x TDME, 2016', description: 'Wata Igarashi lors du showcase Boiler Room Tokyo x TDME à Shibuya en décembre 2016.', items: [articleVideoCard({youtubeId: 'S0yP6ZOl4z0', genre: 'Techno', artist: 'Wata Igarashi', title: 'Boiler Room Tokyo x TDME, 2016'})]}),
    'Table: now': articleTable({
      headers: ['Club', 'Quartier', 'Musique et caractère', 'Idéal pour'],
      rows: [
        ['WOMB', 'Shibuya', 'Quatre étages autour d’une boule à facettes géante, ouvert depuis 2000', 'Techno, drum and bass et electro, et le festival annuel WOMB Adventure'],
        ['Contact', 'Shibuya (Dogenzaka)', 'Un sous-sol conçu comme successeur de l’Air, ouvert depuis 2016', 'Programmation internationale de techno et de house, et diffusions Boiler Room'],
        ['Vent', 'Minami-Aoyama', 'Une salle plus petite bâtie autour de la qualité du son, ouverte depuis 2016', 'Une soirée de house et de techno plus calme et plus sérieuse'],
        ['Circus Tokyo', 'Shibuya', 'L’antenne tokyoïte du Club Circus d’Osaka, ouverte depuis 2015', 'Drum and bass et bass music à côté de la house et de la techno'],
        ['Solfa', 'Nakameguro', 'Une salle plus petite en dehors du noyau de Shibuya, ouverte depuis 2009', 'Techno, bass, house, disco et soul, loin de l’artère principale']
      ].map(row => row.map(escapeHtml))
    })
  }),

  sources: [
    {href: 'https://en.wikipedia.org/wiki/Businesses_Affecting_Public_Morals_Regulation_Act', label: 'Wikipedia: Businesses Affecting Public Morals Regulation Act'},
    {href: 'https://en.wikipedia.org/wiki/Womb_(nightclub)', label: 'Wikipedia: Womb (nightclub)'},
    {href: 'https://en.wikipedia.org/wiki/AgeHa', label: 'Wikipedia: AgeHa'},
    {href: 'https://djmag.com/news/tokyo-club-air-close', label: 'DJ Mag: Tokyo club Air to close (2015)'},
    {href: 'https://djmag.com/top100clubs/2021/67/WOMB', label: 'DJ Mag: Top 100 Clubs 2021, WOMB'},
    {href: 'https://djmag.com/top100clubs/2023/76/WOMB', label: 'DJ Mag: Top 100 Clubs 2023, WOMB'},
    {href: 'https://www.japantimes.co.jp/culture/2022/02/11/music/tokyo-ageha-studio-coast-closes/', label: 'The Japan Times: Tokyo club scene\'s \'temple\' may be gone, ageHa closes (2022)'},
    {href: 'https://crackmagazine.net/2016/06/japan-finally-lifted-no-dancing-law/', label: 'Crack Magazine: Japan has finally lifted their no dancing law (2016)'},
    {href: 'https://ra.co/clubs/1661', label: 'Resident Advisor: WOMB, Tokyo'},
    {href: 'https://ra.co/clubs/122892', label: 'Resident Advisor: Vent, Tokyo'},
    {href: 'https://boilerroom.tv/session/boiler-room-tokyo-contact/', label: 'Boiler Room: Boiler Room Tokyo, Contact (2019)'},
    {href: 'https://boilerroom.tv/session/tokyo-tdme-x-boiler-room/', label: 'Boiler Room: Tokyo, TDME x Boiler Room (2016)'},
    {href: 'https://www.mixesdb.com/w/2014-06-20_-_Force_Of_Nature_@_Boiler_Room_Tokyo', label: 'MixesDB: Force of Nature at Boiler Room Tokyo (20 June 2014)'}
  ],

  bandcamp: {
    description: 'Deux de mes propres morceaux. En acheter un soutient directement mon travail.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks par thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 par thecatrave'}
    ]
  }
};
