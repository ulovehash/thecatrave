// French EDC Las Vegas guide. Structure and facts from the English page
// (edc-draft.md, edc-research.md, build-edc-article.mjs).
//
// French keywords (keywords/fr-edc.json): edc las vegas 200 a month in France
// (TRANSLATION-RESEARCH.md, French stage 2). The wording was checked in the
// live Google results for France on 2026-09-23, no Ahrefs units spent:
// "Autres questions" asks "Quel est le prix d'un billet pour EDC Las Vegas ?",
// which the ticket FAQ now asks in those words, and Bing's French related
// searches add "festival edc". French writes "l'EDC", masculine (le festival).
// The everyday-carry collision keeps its one line, as in English.
//
// The images are the English guide's, in img/edc/, with translated captions;
// see home-articles.mjs for why a translation may reuse them.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, ownTrackListening
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption, className = 'wide-archive-image') => articleFigure({
  src: `img/edc/${name}-${width}.webp`,
  srcset: `img/edc/${name}-320.webp 320w, img/edc/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className
});

export default {
  lang: 'fr',
  name: 'fr-edc',
  file: 'fr/edc-las-vegas.html',
  draft: 'fr/edc-draft.md',
  canonical: 'https://thecatrave.com/fr/edc-las-vegas',
  englishPath: '/edc-las-vegas',
  ogImage: 'https://thecatrave.com/img/og/edc.jpg',
  bodyClass: 'article-page edc-page',

  title: 'EDC Las Vegas 2027 : le festival, sa taille et sa musique',
  description: 'L’Electric Daisy Carnival au Las Vegas Motor Speedway : ce qu’est l’EDC, combien de personnes y vont, les dates 2027 et ce qui se joue loin de kineticFIELD.',
  datePublished: '2026-09-23',
  dateModified: '2026-09-23',
  dateLabel: '23 septembre 2026',

  heroKicker: 'Electric Daisy Carnival',
  heroTitle: 'EDC Las Vegas',
  deck: 'Trois nuits sur un circuit automobile en plein désert, au plus grand festival de dance music d’Amérique du Nord. Où il a lieu, sa taille réelle, à qui il appartient et ce qui se joue loin de kineticFIELD.',
  answerLabel: 'Qu’est-ce qu’EDC Las Vegas',
  breadcrumbName: 'EDC Las Vegas',

  answerSection: 'Réponse',
  introSection: 'Introduction',
  introTitle: 'La plus grande nuit du désert.',
  faqSection: 'FAQ',
  faqLabel: 'Questions fréquentes',
  faqTitle: 'Questions fréquentes sur EDC Las Vegas.',
  ownSetAfter: 'history',

  sections: [
    {id: 'where', heading: 'Où a lieu EDC Las Vegas', title: 'Où a lieu EDC Las Vegas.', subsections: ['orlando', 'mexico', 'abroad', 'edc-2027']},
    {id: 'how-big', heading: 'Quelle est la taille d’EDC Las Vegas', title: 'Quelle est la taille d’EDC Las Vegas.'},
    {id: 'history', heading: 'Une brève histoire, et à qui appartient l’EDC', title: 'Une brève histoire, et à qui appartient l’EDC.'},
    {id: 'famous', heading: 'Pourquoi l’EDC est devenu si célèbre', title: 'Pourquoi l’EDC est devenu si célèbre.'},
    {id: 'music', heading: 'Ce que joue vraiment l’EDC', title: 'Ce que joue vraiment l’EDC.', kicker: 'La musique'},
    {id: 'from-home', heading: 'Écouter l’EDC depuis chez soi', title: 'Écouter l’EDC depuis chez soi.'}
  ],

  media: ({lang}) => ({
    // The owner's own music inside the text, as on every French festival guide
    // (owner, 2026-09-21: Dégénération on the French pages).
    'thecatrave degeneration': ownTrackListening('degeneration', 'Loin des grandes scènes : la voix de Mylène Farmer sur des breaks, entre dubstep et UK garage. Mon propre remix.', lang),
    'EDC2024 Overview': figure('overview-2024', 1200, 521,
      'Une vue large du site d’EDC Las Vegas de nuit, scènes et manèges éclairés à l’intérieur du speedway',
      'Le site du festival dans le Las Vegas Motor Speedway en 2024 : scènes, manèges et œuvres répartis sur la pelouse centrale. Photo : Eric Polk, CC BY-SA 4.0.'),
    'EDC Mexico 2023': figure('mexico-2023', 1200, 800,
      'La scène principale d’EDC Mexico en 2023, une grande scène décorée au-dessus du public sur le circuit de Mexico',
      'La scène principale d’EDC Mexico en 2023, à l’Autódromo Hermanos Rodríguez. Photo : Ludovic Delot, CC BY-SA 4.0.'),
    'Electric Daisy Carnival 2011': figure('las-vegas-2011', 1200, 900,
      'La scène cosmicMEADOW au premier plan et kineticFIELD derrière, à EDC Las Vegas en 2011',
      'La première édition de Las Vegas, en 2011 : cosmicMEADOW devant, kineticFIELD derrière. Photo : Roman Fuchs, CC BY-SA 3.0.'),
    'EDC2024 Kinetic Field Tiesto': figure('kinetic-field-2024', 1200, 900,
      'kineticFIELD de nuit pendant le set de Tiësto à EDC Las Vegas 2024, la scène illuminée au-dessus d’une foule dense',
      'kineticFIELD pendant le set de Tiësto en 2024. Photo : Eric Polk, CC BY-SA 4.0.'),
    'Camo&Krooked': figure('camo-krooked-2014', 1200, 471,
      'Camo & Krooked vus de derrière les platines à EDC Las Vegas en 2014, des lance-flammes au-dessus d’une grande foule',
      'Camo & Krooked à EDC Las Vegas en 2014, l’année où ils jouaient sur bassPOD, la scène que Bassrush anime pour la drum and bass et le dubstep. Photo : Uafmusic VIE, CC BY-SA 4.0.'),
    'SaUN0QHOkHk': articleVideoCollection({
      lang,
      label: 'Les sets les plus vus de l’EDC',
      description: 'Deux sets sur kineticFIELD : Above & Beyond en 2015, près de cinq millions de vues sur la chaîne du trio, et Alison Wonderland en 2016, plus de deux millions sur la sienne.',
      items: [
        articleVideoCard({youtubeId: 'SaUN0QHOkHk', genre: 'kineticFIELD, 2015', artist: 'Above & Beyond', title: 'Live à EDC Las Vegas 2015'}),
        articleVideoCard({youtubeId: 'zqjLaOONheg', genre: 'kineticFIELD, 2016', artist: 'Alison Wonderland', title: 'EDC Las Vegas 2016'})
      ]
    }),
    // Attendance as on the English page (Wikipedia and 2026 reports). Typed,
    // not computed.
    'Table: fréquentation': articleTable({
      headers: ['Année', 'Fréquentation', 'Où, et ce qui s’est passé'],
      rows: [
        ['1991', 'environ 3 000 à 3 500', 'Un des premiers EDC de Californie du Sud, organisé par Stephen Hauptfuhr et Gary Richards'],
        ['2000', '24 000', 'Tulare, Californie ; des plaintes pour le bruit ont mis fin au contrat'],
        ['2010', 'environ 185 000', 'Los Angeles Memorial Coliseum, deux jours'],
        ['2011', '230 000 (annoncé)', 'Première année au Las Vegas Motor Speedway, trois jours'],
        ['2012', '320 000', ''],
        ['2014', '345 000 billets', 'Tous vendus avant l’ouverture des portes'],
        ['2018', 'environ 411 400', 'Première année en mai ; camping ajouté'],
        ['2019', '465 000', ''],
        ['2020', 'aucune', 'Annulé à cause de la pandémie'],
        ['2024', '525 000', 'Le record'],
        ['2026', 'plus de 500 000', '30e anniversaire, complet']
      ].map(row => row.map(escapeHtml))
    })
  }),

  // The English page's sources, URL for URL, with translated labels.
  sources: [
    {href: 'https://en.wikipedia.org/wiki/Electric_Daisy_Carnival', label: 'Wikipedia : Electric Daisy Carnival (en anglais)'},
    {href: 'https://en.wikipedia.org/wiki/Insomniac_(promoter)', label: 'Wikipedia : Insomniac (organisateur, en anglais)'},
    {href: 'https://www.beatportal.com/articles/1422831-edc-las-vegas-to-split-into-two-consecutive-weekends-in-2027', label: 'Beatportal : EDC Las Vegas se divise en deux week-ends en 2027'},
    {href: 'https://djmag.com/news/edc-las-vegas-expands-12-days-and-two-full-weekends-2027', label: 'DJ Mag : EDC Las Vegas passe à 12 jours et deux week-ends en 2027'},
    {href: 'https://djmag.com/news/edc-las-vegas-2026-full-line-announced', label: 'DJ Mag : la programmation d’EDC Las Vegas 2026'},
    {href: 'https://djmag.com/news/heres-how-stream-edc-las-vegas-2026-home', label: 'DJ Mag : regarder EDC Las Vegas 2026 depuis chez soi'},
    {href: 'https://weraveyou.com/2026/05/the-prodigy-edc-las-vegas-2026-first-time-cosmicmeadow/', label: 'We Rave You : The Prodigy joue pour la première fois à EDC Las Vegas'},
    {href: 'https://raverrafting.com/epic-stages-edc-las-vegas-2014/2014/07/16/', label: 'RaverRafting : les scènes d’EDC Las Vegas 2014'},
    {href: 'https://discotech.me/festivals/guide-to-edc-las-vegas-stages/', label: 'Discotech : guide des scènes d’EDC Las Vegas'},
    {href: 'https://lasvegasweekly.com/ae/music/2025/aug/28/insomniac-and-tomorrowland-go-b2b-for-unity-sphere/', label: 'Las Vegas Weekly : Insomniac et Tomorrowland ensemble pour Unity à la Sphere'},
    {href: 'https://www.youtube.com/watch?v=QjaVBJJ7xhE', label: 'Mixmag sur YouTube : Rusko (set jungle) dans The Lab à EDC Las Vegas'},
    {href: 'https://stagehoppers.com/edc-las-vegas-all-time-best-sets/', label: 'Stage Hoppers : les meilleurs sets de l’histoire d’EDC Las Vegas'},
    {href: 'https://press.insomniac.com/festival-assets/electric-daisy-carnival', label: 'Insomniac : Electric Daisy Carnival'},
    {href: 'https://www.insomniac.com/who-we-are/how-it-all-began/', label: 'Insomniac : How It All Began (histoire de l’entreprise)'},
    {href: 'https://press.insomniac.com/blog/edc-las-vegas-introduces-new-dusk-till-dawn-2027-12-day-festival-concept-spanning-two-consecutive-weekends', label: 'Insomniac Press : EDC Las Vegas présente « Dusk Till Dawn » 2027'},
    {href: 'https://festivalinsider.com/articles/electric-daisy-legacy-meet-the-man-behind-the-first-edc', label: 'Festival Insider : Electric Daisy Legacy, l’homme derrière le premier EDC'},
    {href: 'https://lasvegasweekly.com/news/2016/jun/16/looking-back-edc-electric-daisy-carnival/', label: 'Las Vegas Weekly : deux décennies d’EDC'},
    {href: 'https://lasvegassun.com/news/2023/may/23/edcs-scale-difficult-to-imagine-until-you-experien/', label: 'Las Vegas Sun : l’échelle de l’EDC, difficile à imaginer'},
    {href: 'https://www.digitalmusicnews.com/2024/05/23/edc-las-vegas-2024/', label: 'Digital Music News : EDC Las Vegas 2024'}
  ],

  bandcamp: {
    description: 'Après trois nuits sur le circuit, quelque chose de plus petit : mon propre breakbeat. Acheter un morceau soutient directement mon travail.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks par thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 par thecatrave'}
    ]
  }
};
