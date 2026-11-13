// French Canada EDM festivals comparison. Structure, facts, dates and the
// "pas encore annoncé" / "annoncé en billetterie" labels from the English page
// (best-edm-festivals-canada-draft.md, build-canada-festivals-article.mjs),
// checked there on 31 October 2026.
//
// French wording: Keyword Planner (France, French, 2026-11-13) puts "ile soniq"
// and "île soniq" in the 100-1K bucket; "festival edm canada", "festival
// canada", "veld festival", "shambhala festival", "festival au canada", "plus
// gros festival au canada" and "plus gros festival de musique au canada" in
// 10-100 (keywords/fr-canada-festivals.json). The google.fr SERP for "festival
// edm canada" was mostly English results; its PAA asked "Quel est le plus gros
// festival du Canada ?".
//
// Maintenance: the dates are the English page's. Change them here and in the
// draft whenever the English page changes them; roll to 2028 with it in
// September 2027.
//
// The images are the English page's, in img/canada-festivals/, with translated
// captions.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, ownPlaylistListening, ownSetListening, ownTrackListening
} from '../../site-components.mjs';

const fig = (name, width, height, alt, caption) => articleFigure({
  src: `img/canada-festivals/${name}-1200.webp`,
  srcset: `img/canada-festivals/${name}-320.webp 320w, img/canada-festivals/${name}-1200.webp 1200w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

const link = ([href, label]) => `<a href="${href}" target="_blank" rel="noopener noreferrer">${label}</a>`;

const festivals = [
  ['Electric Island', 'Toronto, Ontario', 'Pas encore annoncé (2026 : de mai à août)', 'Électro', 'Une saison de journées', 'Une journée en ville'],
  ['Escapade', 'Ottawa, Ontario', 'Pas encore annoncé (2026 : du 26 au 28 juin)', 'EDM', 'Trois jours en 2026', 'Un week-end à Ottawa'],
  ['Bass Coast', 'Merritt, C.-B.', 'Du 9 au 12 juillet', 'Bass music et électro', 'Cinq scènes, plus de 150 artistes', 'Un week-end camping indépendant'],
  ['FVDED in the Park', 'Surrey, C.-B.', 'Juillet, jours pas encore annoncés', 'EDM et hip-hop', 'Deux jours', 'Une grande scène près de Vancouver'],
  ['Shambhala', 'Salmo, C.-B.', 'Du 23 au 26 juillet (complet)', 'Bass music et électro', '23 500 sur le site', 'Un long week-end camping'],
  ['VELD', 'Toronto, Ontario', 'Du 30 juillet au 1er août', 'EDM de grande scène', 'Trois jours, aucun chiffre officiel', 'Les têtes d’affiche en Ontario'],
  ['Chasing Summer', 'Calgary, Alberta', 'En billetterie : 31 juillet et 1er août', 'EDM', 'Environ 30 000 par an (article de 2023)', 'Un week-end d’été en Alberta'],
  ['Île Soniq', 'Montréal, Québec', 'En billetterie : 7 et 8 août', 'EDM de grande scène et hip-hop', '76 000 sur deux jours en 2025', 'Les têtes d’affiche dans un parc urbain'],
  ['MUTEK', 'Montréal, Québec', 'Du 24 au 29 août', 'Musique électronique expérimentale', 'Six jours', 'L’écoute attentive'],
  ['Piknic Électronik', 'Montréal, Québec', 'Pas encore annoncé (2026 : de mai à octobre)', 'House, techno', 'Une saison de fêtes', 'Un dimanche au parc']
];

export default {
  lang: 'fr',
  name: 'fr-canada-festivals',
  file: 'fr/festivals-edm-canada.html',
  draft: 'fr/canada-festivals-draft.md',
  canonical: 'https://thecatrave.com/fr/festivals-edm-canada',
  englishPath: '/best-edm-festivals-canada',
  ogImage: 'https://thecatrave.com/img/og/canada-festivals.jpg',
  bodyClass: 'article-page canada-festivals-page',
  minReadingMinutes: 6,

  title: 'Festivals EDM au Canada 2027 : VELD, Shambhala, Île Soniq',
  description: 'Les meilleurs festivals EDM au Canada en 2027 : dates, villes et son, du VELD Festival à Toronto et du Shambhala Festival en C.-B. à Île Soniq à Montréal.',
  datePublished: '2026-11-13',
  dateModified: '2026-11-13',
  dateLabel: '13 novembre 2026',

  heroKicker: 'Guide des festivals 2027',
  heroTitle: 'Les meilleurs festivals EDM au Canada en 2027',
  deck: 'Les festivals EDM canadiens comparés par province, par son et par taille, des parcs urbains de Toronto et de Montréal aux week-ends camping de Colombie-Britannique, avec les dates 2027 confirmées et celles qui ne le sont pas encore.',
  answerLabel: 'Les meilleurs festivals EDM au Canada',
  breadcrumbName: 'Festivals EDM au Canada',

  answerSection: 'Réponse',
  introSection: 'Introduction',
  introTitle: 'Une liste pour choisir son festival.',
  faqSection: 'FAQ',
  faqLabel: 'Questions fréquentes sur les festivals EDM au Canada',
  faqTitle: 'Questions fréquentes sur les festivals EDM au Canada.',

  sections: [
    {id: 'criteria', heading: 'Comment cette liste a été établie', title: 'Comment cette liste a été établie.'},
    {id: 'at-a-glance', heading: 'Les dates des festivals EDM au Canada en 2027 en un coup d’œil', title: 'Les dates des festivals EDM au Canada en 2027 en un coup d’œil.', tocLabel: 'Les dates 2027 en un coup d’œil'},
    {id: 'biggest', heading: 'Quel est le plus gros festival EDM au Canada ?', title: 'Quel est le plus gros festival EDM au Canada ?', tocLabel: 'Le plus gros festival EDM'},
    {id: 'ontario', heading: 'Toronto et l’Ontario', title: 'Toronto et l’Ontario.',
      subsections: ['veld', 'electric-island']},
    {id: 'quebec', heading: 'Montréal et le Québec', title: 'Montréal et le Québec.',
      subsections: ['ile-soniq', 'mutek', 'piknic-electronik']},
    {id: 'british-columbia', heading: 'Colombie-Britannique', title: 'Colombie-Britannique.',
      subsections: ['shambhala', 'bass-coast', 'fvded-in-the-park']},
    {id: 'ottawa-calgary', heading: 'Ottawa et Calgary', title: 'Ottawa et Calgary.',
      subsections: ['escapade', 'chasing-summer']},
    {id: 'not-listed', heading: 'Ce qui ne figure pas dans cette liste, et pourquoi', title: 'Ce qui ne figure pas dans cette liste, et pourquoi.'},
    {id: 'choose', heading: 'Comment choisir', title: 'Comment choisir.'}
  ],

  media: ({lang}) => ({
    'Table: canada': articleTable({label: 'Les festivals EDM au Canada comparés, 2027',
      headers: ['Festival', 'Où', 'Dates 2027', 'Son', 'Taille', 'Idéal pour'], rows: festivals}),
    ilesoniq: fig('ilesoniq-bynon-2018', 1200, 802,
      'Bynon en concert à Île Soniq, à Montréal, en août 2018',
      'Bynon à Île Soniq, Montréal, août 2018. Photo : Kylefowlermtl, CC BY-SA 4.0.'),
    veld: fig('veld-deadmau5-2016', 1200, 749,
      'deadmau5 sur scène au VELD Music Festival à Toronto en juillet 2016',
      'deadmau5 à VELD, juillet 2016. Photo : Visualbass Photography, CC BY-SA 2.0.'),
    mutek: fig('mutek-2015', 1200, 900,
      'Une festivalière sur la pelouse devant la scène de MUTEK à Montréal en mai 2015',
      'MUTEK à Montréal, mai 2015. Photo : Jeangagnon, CC BY-SA 3.0.'),
    piknic: fig('piknic-electronik-2016', 1200, 900,
      'La sculpture L’Homme de Calder au parc Jean-Drapeau pendant Piknic Électronik en juillet 2016, avec une tour d’enceintes à gauche',
      'Piknic Électronik au parc Jean-Drapeau, juillet 2016. Photo : Jeangagnon, CC BY-SA 4.0.'),
    shambhala: fig('shambhala-2003', 1200, 900,
      'Un DJ aux platines entre les arbres au Shambhala Music Festival en 2003',
      'Un DJ à Shambhala, août 2003. Photo : Nelson Becker, Touchstones Nelson, domaine public.'),
    ternion: articleVideoCollection({
      lang, label: 'Bass Coast, depuis chez vous',
      description: 'Ternion Sound à Bass Coast en 2025, filmé par le festival.',
      items: [articleVideoCard({youtubeId: 'D68S0Mg6aBc', genre: 'Bass Coast, 2025', artist: 'Ternion Sound', title: 'En live à Bass Coast'})]
    }),
    playlist: ownPlaylistListening('rare-electronic-music', lang),
    'own-track': ownTrackListening('late-summer-cloud-dance', 'Mon propre court morceau de liquid breakbeat.', lang),
    'first-mix': ownSetListening(0, lang),
    'second-mix': ownSetListening(1, lang)
  }),

  sources: [
    {html: `Dates 2027 tirées du site de chaque festival : ${[
      ['https://www.shambhalamusicfestival.com/', 'Shambhala'], ['https://www.basscoast.ca/', 'Bass Coast'], ['https://montreal.mutek.org/', 'MUTEK'],
      ['https://www.veldmusicfestival.com/', 'VELD']
    ].map(link).join(', ')} et ${link(['https://veld.frontgatetickets.com/', 'sa billetterie'])}, ${link(['https://www.fvdedinthepark.com/', 'FVDED in the Park'])} (le mois seulement).`},
    {html: `Dates 2026, sans dates 2027 annoncées : ${[
      ['https://www.piknicelectronik.com/', 'Piknic Électronik'], ['https://613today.ca/events/2026-06-26-escapade-music-festival', 'Escapade'],
      ['https://nowtoronto.com/event/electric-island-2026-season-opener/', 'Electric Island']
    ].map(link).join(', ')}.`},
    {html: 'Dates annoncées en billetterie : Live Nation, Ticketmaster et Discotech (Île Soniq), Frontstage (Chasing Summer).'},
    {html: `Taille : ${link(['https://mtltimes.ca/montreal/werent-able-to-make-it-to-the-10th-anniversary-of-ilesoniq-heres-what-you-missed/', 'Montreal Times, avec les chiffres du festival'])} (Île Soniq 2025), ${link(['https://www.shambhalamusicfestival.com/about', 'Shambhala'])}, ${link(['https://dailyhive.com/calgary/chasing-summer-festival-calgary-2023', 'Daily Hive'])} (Chasing Summer).`},
    {href: 'https://djmag.com/top100festivals', label: 'DJ Mag (en anglais) : Top 100 Festivals 2026'}
  ],

  bandcamp: {
    description: 'Entre deux festivals, la musique que je fais moi-même : des breaks avec de la techno et du dub dedans. Acheter une sortie soutient directement mon travail.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 par thecatrave'},
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks par thecatrave'}
    ]
  }
};
