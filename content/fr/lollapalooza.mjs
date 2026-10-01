// French Lollapalooza guide. Structure and facts from the English page
// (lollapalooza-draft.md). Volumes are not measured for this language yet
// (TRANSLATION-RESEARCH.md); live SERP checked 2026-10-01 (related searches and People also ask).
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, articleYoutubeEmbed
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption, className = 'wide-archive-image') => articleFigure({
  src: `img/lollapalooza/${name}-${width}.webp`,
  srcset: `img/lollapalooza/${name}-320.webp 320w, img/lollapalooza/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className
});

export default {
  lang: 'fr',
  name: 'fr-lollapalooza',
  file: 'fr/festival-lollapalooza.html',
  draft: 'fr/lollapalooza-draft.md',
  canonical: 'https://thecatrave.com/fr/festival-lollapalooza',
  englishPath: '/lollapalooza-festival',
  ogImage: 'https://thecatrave.com/img/og/lollapalooza.jpg',
  bodyClass: 'article-page lollapalooza-page',
  minReadingMinutes: 8,

  title: 'Lollapalooza Chicago : lieu, histoire et musique',
  description: 'Lollapalooza est un festival de quatre jours à Grant Park, Chicago. Lieu, histoire, taille, éditions internationales et la musique de la Perry’s Stage.',
  datePublished: '2026-09-17',
  dateModified: '2026-09-17',
  dateLabel: '17 septembre 2026',

  heroKicker: 'Lollapalooza',
  heroTitle: 'Lollapalooza Chicago',
  deck: 'Quatre jours chaque été à Grant Park, sur le front de lac de Chicago. Où il se tient, comment une tournée d’adieu est devenue un festival permanent, et ce qui se joue sur ses scènes.',
  answerLabel: 'Qu’est-ce que Lollapalooza',
  breadcrumbName: 'Qu’est-ce que Lollapalooza',

  answerSection: 'Réponse',
  introSection: 'Introduction',
  introTitle: 'Une tournée d’adieu qui est restée.',
  faqSection: 'FAQ',
  faqLabel: 'Questions fréquentes',
  faqTitle: 'Questions fréquentes sur Lollapalooza.',
  ownSetAfter: 'history',

  sections: [
    {id: 'lollapalooza-2027', heading: 'Lollapalooza 2027 : état des dates', title: 'Lollapalooza 2027 : état des dates.'},
    {id: 'where', heading: 'Où se tient Lollapalooza', title: 'Où se tient Lollapalooza.', subsections: ['only-chicago']},
    {id: 'when', heading: 'Quand a lieu Lollapalooza, et combien de temps il dure', title: 'Quand a lieu Lollapalooza, et combien de temps il dure.'},
    {id: 'how-big', heading: 'Quelle taille a Lollapalooza', title: 'Quelle taille a Lollapalooza.'},
    {id: 'meaning', heading: 'Ce que signifie Lollapalooza', title: 'Ce que signifie Lollapalooza.'},
    {id: 'history', heading: 'Une brève histoire, et à qui appartient Lollapalooza', title: 'Une brève histoire, et à qui appartient Lollapalooza.'},
    {id: 'stages', heading: 'Les scènes de Lollapalooza', title: 'Les scènes de Lollapalooza.'},
    {id: 'music', heading: 'Quelle musique on y joue vraiment', title: 'Quelle musique on y joue vraiment.', kicker: 'La musique'},
    {id: 'from-home', heading: 'Écouter Lollapalooza chez soi', title: 'Écouter Lollapalooza chez soi.'}
  ],

  media: () => ({
    'Image: skyline': figure('skyline-2017', 1200, 900, 'Une foule sur l’herbe de Grant Park pendant Lollapalooza 2017, une tour d’enceintes à gauche et la ligne d’horizon de Chicago derrière',
      'Le site de Lollapalooza à Grant Park en août 2017, avec la ligne d’horizon de Chicago derrière la foule. Photo : Lacrossewi, CC BY-SA 4.0.'),
    'Image: sign': figure('sign-2017', 1200, 916, 'Le mot Lollapalooza en lettres gonflables blanches géantes devant des arbres et un gratte-ciel, des festivaliers passant au premier plan',
      'Le nom du festival en lettres gonflables géantes à l’entrée de Grant Park en 2017. Photo : Lacrossewi, CC BY-SA 4.0.'),
    'Image: tour': figure('tour-1991', 1200, 868, 'Une grande foule en plein air face à une scène en échafaudage au toit drapé de rouge pendant la première tournée Lollapalooza en 1991',
      'La foule lors d’une étape en plein air de la première tournée Lollapalooza, en 1991. Photo : Ric Wallace, CC BY 2.0.'),
    'Image: stage': figure('stage-2014', 1200, 900, 'Une scène principale vide à Grant Park le matin de Lollapalooza 2014, de la terre devant et les tours du front de lac derrière',
      'Une scène principale à Grant Park le matin du 2 août 2014, avant l’ouverture des portes, avec les tours du front de lac derrière. Photo : swimfinfan, CC BY-SA 2.0.'),
    'Table: Lieux': articleTable({
      headers: ['Ville', 'Lieu', 'Première édition'],
      rows: [
        ['Chicago, États-Unis', 'Grant Park', '2005 (festival itinérant dès 1991)'],
        ['Santiago, Chili', 'Parque O’Higgins', '2011'],
        ['São Paulo, Brésil', 'Jockey Club, puis Interlagos à partir de 2014', '2012'],
        ['Buenos Aires, Argentine', 'Hipódromo de San Isidro', '2014'],
        ['Berlin, Allemagne', 'Tempelhof, Treptower Park, puis Olympiastadion et Olympiapark à partir de 2018', '2015'],
        ['Paris, France', 'Hippodrome de Longchamp', '2017'],
        ['Stockholm, Suède', 'Gärdet', '2019 (éditions en 2019, 2022 et 2023 ; pause en 2024)'],
        ['Mumbai, Inde', 'Hippodrome de Mahalaxmi', '2023']
      ].map(row => row.map(escapeHtml))
    }),
    '9TKqqBCmDHA': articleYoutubeEmbed({
      src: 'https://www.youtube-nocookie.com/embed/9TKqqBCmDHA',
      title: 'John Summit en concert à Lollapalooza Chicago 2026, sur sa chaîne YouTube'
    }),
    'EGh9zlN6eLo': articleVideoCollection({
      lang: 'fr',
      label: 'Lollapalooza, les vidéos les plus regardées',
      description: 'Lady Gaga avec Semi Precious Weapons en 2010, la vidéo la plus regardée de la chaîne du festival, et le set officiel des Chainsmokers de 2019, le set le plus regardé sur la chaîne d’un artiste.',
      items: [
        articleVideoCard({youtubeId: 'EGh9zlN6eLo', genre: 'Lollapalooza, 2010', artist: 'Lady Gaga avec Semi Precious Weapons', title: 'Lollapalooza 2010'}),
        articleVideoCard({youtubeId: 'zns830Yl1b0', genre: 'Lollapalooza, 2019', artist: 'The Chainsmokers', title: 'Set officiel en direct, Lollapalooza Chicago 2019'})
      ]
    })
  }),

  sources: [
    {href: 'https://www.youtube.com/@lollapalooza', label: 'Lollapalooza sur YouTube (description de la chaîne, nombres de vues)'},
    {href: 'https://www.lollapalooza.com/', label: 'Lollapalooza : site officiel'},
    {href: 'https://www.lollapalooza.com/schedule', label: 'Lollapalooza : programme officiel et état de l’annonce de 2027'},
    {href: 'https://support.lollapalooza.com/hc/en-us/articles/4402035626260-What-are-the-dates-and-hours-for-Lollapalooza-2026', label: 'Lollapalooza : dates et horaires officiels 2026'},
    {href: 'https://itsbetterlive.livenationforbrands.com/at-lollapalooza-everyone-had-a-plan-nobody-stuck-to-it/', label: 'Live Nation : fréquentation de Lollapalooza 2026'},
    {href: 'https://www.prnewswire.com/news-releases/live-nation-entertainment-expands-festival-portfolio-with-c3-presents-300012666.html', label: 'Live Nation : participation de contrôle dans C3 Presents'},
    {href: 'https://www.c3presents.com/festivals', label: 'C3 Presents : festivals et lieux actuels de Lollapalooza'},
    {href: 'https://www.chicagoparkdistrict.com/about-us/news/chicago-park-district-celebrates-strong-2024-accomplishments-and-touts-progress', label: 'Chicago Park District : fréquentation quotidienne de Lollapalooza'},
    {href: 'https://www.wbez.org/culture-the-arts/2022/08/01/lightfoot-announces-deal-to-keep-lollapalooza-in-grant-park-for-another-decade', label: 'WBEZ : accord actuel pour Grant Park et plafond de fréquentation'},
    {href: 'https://www.phoenixnewtimes.com/music/first-lollapalooza-concert-1991-phoenix-30th-anniversary-oral-history-perry-farrell-11591298/', label: 'Phoenix New Times : histoire orale du premier concert Lollapalooza'},
    {href: 'https://www.svt.se/kultur/inget-lollapalooza-i-stockholm-nasta-ar--fkxone', label: 'SVT : Lollapalooza Stockholm en pause pour 2024'},
    {href: 'https://www.choosechicago.com/articles/festivals-special-events/lollapalooza/', label: 'Choose Chicago : Lollapalooza Chicago'},
    {href: 'https://www.billboard.com/photos/lady-gaga-fires-up-lollapalooza-stage-dives-426763/', label: 'Billboard : Lady Gaga enflamme Lollapalooza, plonge dans la foule'},
    {href: 'https://en.wikipedia.org/wiki/Lollapalooza', label: 'Wikipédia : Lollapalooza (chronologie complémentaire)'}
  ],

  bandcamp: {
    description: 'Acheter un morceau soutient directement mon travail.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks par thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 par thecatrave'}
    ]
  }
};
