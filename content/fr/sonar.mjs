// French Sónar guide. Structure and facts from the English page
// (sonar-draft.md, sonar-research.md, build-sonar-article.mjs). The first
// translation of this guide: there is no German one yet.
//
// French keywords, measured 2026-09-18 with keywords-explorer-matching-terms,
// country fr (keywords/fr-sonar.json): sonar festival 700 a month, sonar
// barcelone 400, and sonar 2027 as the next edition. French searchers write
// the name without the accent, as the English page's own questions do, so the
// unaccented form appears where the reader's question is quoted. The 2026
// edition is rejected in the map: dated.
//
// The images are the English guide's, in img/sonar/, with translated captions;
// see home-articles.mjs for why a translation may reuse them.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, articleYoutubeEmbed
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption, className = 'wide-archive-image') => articleFigure({
  src: `img/sonar/${name}-${width}.webp`,
  srcset: `img/sonar/${name}-320.webp 320w, img/sonar/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className
});

const youtube = (id, label) => articleYoutubeEmbed({
  src: `https://www.youtube-nocookie.com/embed/${id}`,
  title: label
});

export default {
  lang: 'fr',
  name: 'fr-sonar',
  file: 'fr/sonar-barcelone.html',
  draft: 'fr/sonar-draft.md',
  canonical: 'https://thecatrave.com/fr/sonar-barcelone',
  englishPath: '/sonar-festival-barcelona',
  ogImage: 'https://thecatrave.com/img/og/sonar.jpg',
  bodyClass: 'article-page sonar-page',

  title: 'Sónar Barcelone : histoire, musique et dates 2027',
  description: 'Ce qu’est Sónar, où il a lieu à Barcelone, comment un festival de 6 000 personnes en 1994 est passé à 150 000, à qui il appartient, OFFSónar et les dates 2027.',
  datePublished: '2026-09-18',
  dateModified: '2026-09-18',
  dateLabel: '18 septembre 2026',

  heroKicker: 'Sónar',
  heroTitle: 'Sónar Festival Barcelona',
  deck: 'Trois jours chaque mois de juin à Barcelone depuis 1994, le jour et la nuit. Où il a lieu, sa taille actuelle, à qui il appartient aujourd’hui, et à quoi il ressemble.',
  answerLabel: 'Qu’est-ce que Sónar',
  breadcrumbName: 'Sónar Festival Barcelona',

  answerSection: 'Réponse',
  introSection: 'Introduction',
  introTitle: 'Un festival de musique avancée.',
  faqSection: 'FAQ',
  faqLabel: 'Questions fréquentes',
  faqTitle: 'Questions fréquentes sur Sónar.',
  ownSetAfter: 'history',

  sections: [
    {id: 'dates', heading: 'Sónar 2027 : les dates', title: 'Sónar 2027 : les dates.'},
    {id: 'where', heading: 'Où se trouve le festival Sónar à Barcelone ?', title: 'Où se trouve le festival Sónar à Barcelone ?', subsections: ['by-day-by-night', 'sonar-d']},
    {id: 'how-big', heading: 'Quelle est la taille de Sónar ?', title: 'Quelle est la taille de Sónar ?'},
    {id: 'history', heading: 'Une courte histoire de Sónar, et à qui il appartient', title: 'Une courte histoire de Sónar, et à qui il appartient.', subsections: ['around-the-world']},
    {id: 'music', heading: 'Ce qui a fait la réputation de Sónar : la musique', title: 'Ce qui a fait la réputation de Sónar : la musique.', kicker: 'La musique'},
    {id: 'offsonar', heading: 'OFFSónar et la Sónar Week', title: 'OFFSónar et la Sónar Week.'},
    {id: 'from-home', heading: 'À écouter', title: 'À écouter.'}
  ],

  media: () => ({
    'SonarVillage at Fira Montjuïc': figure('sonar-by-day-2016', 1200, 801,
      'Une foule qui remplit la scène en plein air SonarVillage à Fira Montjuïc sous le soleil de l’après-midi, avec le Palau Nacional et sa coupole sur la colline derrière',
      'SonarVillage à Fira Montjuïc pendant Sónar by Day en juin 2016, sous le Palau Nacional. Le programme de jour a quitté ce site en 2026. Photo : Nachetere, CC BY-SA 4.0.'),
    'Sónar+D at Llotja de Mar': figure('sonar-d-2026', 1200, 675,
      'Une salle de pierre sombre avec une porte en arc et un sol en damier, des gens devant des ordinateurs et des tables de mixage le long d’un côté',
      'Sónar+D à la Llotja de Mar en juin 2026, sa première année séparée de la musique. Photo : Zblace, CC BY-SA 4.0.',
      'archive-image'),
    'Beastie Boys at Sónar 2007': figure('beastie-boys-2007', 1200, 800,
      'Ad-Rock des Beastie Boys, en fedora gris et chemise rayée, accroupi avec un micro sur scène',
      'Ad-Rock des Beastie Boys à Sónar en juin 2007, quand l’affiche dépassait largement la musique électronique. Photo : bakameh, CC BY 2.0.'),
    'Justice at Sónar 2008': figure('justice-2008', 1200, 800,
      'Les deux membres de Justice assis sur un banc en bois devant un mur d’azulejos peints',
      'Justice, le duo français, à Barcelone pour Sónar 2008. Photo : Gerard Romans Camps, CC BY 2.0.'),
    'Moodymann at Sónar 2010': figure('moodymann-2010', 1000, 669,
      'Moodymann en lunettes de soleil et couvre-chef blanc à une table de DJ, avec une bannière Sónar 2010 derrière lui',
      'Moodymann à Sónar en juin 2010, derrière une table de la Red Bull Music Academy. Photo : acidpolly, CC BY-SA 2.0.'),
    '_YPbpWeIx2Q': youtube('_YPbpWeIx2Q', 'Paul Kalkbrenner à Sónar Lisboa 2024, sur la chaîne YouTube de DJ Mag'),
    'ZnPUW6XJ--8': youtube('ZnPUW6XJ--8', 'Kerri Chandler en live sur la scène de Resident Advisor à Sónar, Barcelone, sur la chaîne YouTube de Resident Advisor'),
    'IeKlNAuzW8A': youtube('IeKlNAuzW8A', 'Adam Beyer b2b Enrico Sangiuliano chez Drumcode, Off Sónar, Barcelone, sur la chaîne YouTube de DJ Mag'),
    'JaiCMTWjkJI': articleVideoCollection({
      lang: 'fr',
      label: 'Sónar sur SonarClub',
      description: 'Ben Böhmer en live et DEX EFX X0X de Richie Hawtin, le même vendredi soir sur SonarClub à Sónar 2024, filmés par ARTE Concert.',
      items: [
        articleVideoCard({youtubeId: 'JaiCMTWjkJI', genre: 'SonarClub, 2024', artist: 'Ben Böhmer', title: 'Live à Sónar 2024'}),
        articleVideoCard({youtubeId: 'kECNP2JMqC0', genre: 'SonarClub, 2024', artist: 'Richie Hawtin', title: 'DEX EFX X0X, Sónar 2024'})
      ]
    }),
    // As in the English generator: Wikipedia for 1994 to 2018, Mixmag Italy
    // for 2025, We Rave You for 2026.
    'Table: attendance': articleTable({
      headers: ['Année', 'Lieu de nuit', 'Fréquentation'],
      rows: [
        ['1994', 'Apolo', 'Environ 6 000'],
        ['1995', 'Poble Espanyol', 'Environ 12 000'],
        ['1996', 'Poble Espanyol', '18 000'],
        ['1997', 'Pavillon de la Mar Bella', '28 000'],
        ['1998', 'Pavillon de la Mar Bella', '38 000'],
        ['1999', 'Pavillon de la Mar Bella', '43 000'],
        ['2000', 'Pavillon de la Mar Bella', 'Plus de 53 000'],
        ['2013', 'Fira Gran Via', '121 000'],
        ['2017', 'Fira Gran Via', '123 000'],
        ['2018', 'Fira Gran Via', '126 000, de 119 pays'],
        ['2025', 'Fira Gran Via', '161 000, dont 42 000 aux événements de la Sónar Week'],
        ['2026', 'Fira Gran Via, jour et nuit', 'Environ 150 000']
      ].map(row => row.map(escapeHtml))
    })
  }),

  sources: [
    {href: 'https://en.wikipedia.org/wiki/S%C3%B3nar', label: 'Wikipedia : Sónar'},
    {href: 'https://sonar.es/en', label: 'Sónar : site officiel (dates 2027)'},
    {href: 'https://sonar.es/about/what-is-sonar', label: 'Sónar : What is Sónar'},
    {href: 'https://sonar.es/en/news/lineup-completo-sonar-2026', label: 'Sónar : l’affiche complète de Sónar 2026, scène par scène'},
    {href: 'https://sonar.es/en/tickets', label: 'Sónar : billets'},
    {href: 'https://sonar.es/en/news/revive-cinco-grandes-conciertos-del-viernes-por-la-noche-en-sonarclub', label: 'Sónar : revivre cinq grands concerts du vendredi soir à Sónar by Night avec ARTE'},
    {href: 'https://djmag.com/news/sonar-founders-step-away-festival-amid-superstructkkr-ownership-controversy', label: 'DJ Mag : Sónar founders step away from festival amid Superstruct/KKR ownership controversy'},
    {href: 'https://mixmagit.com/read/sonar-2025-draws-161-000-attendees-and-announces-major-format-change-for-2026-news', label: 'Mixmag Italy : Sónar 2025 draws 161,000 attendees and announces major format change for 2026'},
    {href: 'https://weraveyou.com/2026/06/sonar-2026-recap/', label: 'We Rave You : Sónar 2026 recap'},
    {href: 'https://www.deephouseamsterdam.com/25-years-sonar-report/', label: 'Deep House Amsterdam : Report, 25 Years Of Sonar'},
    {href: 'https://ra.co/news/35265', label: 'Resident Advisor : Sónar heads to Istanbul, Hong Kong in 2017'},
    {href: 'https://thequietus.com/news/sonar-inaugural-lisbon-edition-2022/', label: 'The Quietus : Sónar to stage inaugural Lisbon event in 2022'},
    {href: 'https://offsonar.co/', label: 'OFFSónar : site officiel'}
  ],

  bandcamp: {
    description: 'Sónar a passé plus de trente ans à présenter de la musique électronique nouvelle à des gens venus écouter. La mienne, c’est du breakbeat, fait à la maison. Acheter un morceau soutient directement mon travail.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks par thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 par thecatrave'}
    ]
  }
};
