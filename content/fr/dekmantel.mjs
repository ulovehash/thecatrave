// French Dekmantel guide. Structure and facts from the English page
// (dekmantel-draft.md, build-dekmantel-article.mjs); nothing added that the
// English page does not say, except the planner, which is the fr entry
// "dekmantel" in content/festival-planning-data.mjs.
//
// French wording: Keyword Planner (France, French, 14 November 2026) returned
// "dekmantel" in 1K-10K, "dekmantel festival" in 100-1K and "ticket
// dekmantel" and "dekmantel selector" in 10-100 (keywords/fr-dekmantel.json).
// Google hl=fr titles use "billets" and "line up". Dekmantel is not
// an EDM festival and is never called one.
//
// Maintenance: the 2027 dates are the English page's. Change them here and in
// the draft whenever the English page changes them.
//
// The images are the English page's, in img/dekmantel/, with translated captions.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection
} from '../../site-components.mjs';
import {localizedFestivalPlanning} from '../festival-planning-data.mjs';

const fig = (name, width, height, alt, caption) => articleFigure({
  src: `img/dekmantel/${name}-1200.webp`,
  srcset: `img/dekmantel/${name}-320.webp 320w, img/dekmantel/${name}-1200.webp 1200w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

const ext = (href, label) => `<a href="${href}" target="_blank" rel="noopener noreferrer">${label}</a>`;

export default {
  lang: 'fr',
  name: 'fr-dekmantel',
  file: 'fr/dekmantel-festival.html',
  draft: 'fr/dekmantel-draft.md',
  canonical: 'https://thecatrave.com/fr/dekmantel-festival',
  englishPath: '/dekmantel-festival',
  ogImage: 'https://thecatrave.com/img/og/dekmantel.jpg',
  bodyClass: 'article-page dekmantel-page',
  minReadingMinutes: 6,

  title: 'Dekmantel Festival 2027 : dates, billets, Selectors, Amsterdam',
  description: 'Dekmantel Festival 2027 dans l’Amsterdamse Bos, dès 18 ans : du 29 juillet au 2 août, règles des billets, Selectors en Croatie du 19 au 23 août, sets à écouter.',
  datePublished: '2026-11-14',
  dateModified: '2026-11-14',
  dateLabel: '14 novembre 2026',

  heroKicker: 'Guide de festival 2027',
  heroTitle: 'Dekmantel Festival : dates 2027, billets et Selectors',
  deck: 'Le festival d’Amsterdam dans l’Amsterdamse Bos : quand a lieu Dekmantel 2027, comment la semaine s’organise en ville, ce que couvrent les billets et ce qu’est Dekmantel Selectors en Croatie.',
  answerLabel: 'Dekmantel Festival',
  breadcrumbName: 'Dekmantel Festival',

  answerSection: 'Réponse',
  introSection: 'Introduction',
  introTitle: 'Un festival né d’une soirée en club.',
  faqSection: 'FAQ',
  faqLabel: 'Questions fréquentes sur Dekmantel',
  faqTitle: 'Questions fréquentes sur Dekmantel.',
  ownSetAfter: 'what-is',

  sections: [
    {id: 'what-is', heading: 'Qu’est-ce que le Dekmantel Festival ?', title: 'Qu’est-ce que le Dekmantel Festival ?', tocLabel: 'Qu’est-ce que c’est ?'},
    {id: 'dates', heading: 'Quand a lieu Dekmantel 2027 ?', title: 'Quand a lieu Dekmantel 2027 ?', tocLabel: 'Dates 2027'},
    {id: 'where', heading: 'L’Amsterdamse Bos', title: 'L’Amsterdamse Bos.', tocLabel: 'Où il a lieu'},
    {id: 'tickets', heading: 'Billets pour le Dekmantel Festival', title: 'Billets pour le Dekmantel Festival.', tocLabel: 'Billets'},
    {id: 'planning', heading: 'Préparer son voyage à Dekmantel 2027', title: 'Préparez votre voyage à Dekmantel.', tocLabel: 'Voyage et préparation', planning: localizedFestivalPlanning('dekmantel', 'fr')},
    {id: 'selectors', heading: 'Qu’est-ce que Dekmantel Selectors ?', title: 'Qu’est-ce que Dekmantel Selectors ?', tocLabel: 'Dekmantel Selectors'},
    {id: 'booking', heading: 'Ce que Dekmantel programme', title: 'Ce que Dekmantel programme.', tocLabel: 'Ce qu’il programme'},
    {id: 'listen', heading: 'Des sets de Dekmantel pour commencer', title: 'Des sets de Dekmantel pour commencer.', tocLabel: 'Sets pour commencer'}
  ],

  media: ({lang}) => ({
    'Table: week': articleTable({label: 'La semaine Dekmantel 2026, jour par jour',
      headers: ['Jour', 'Programme 2026', 'Où'],
      rows: [
        ['Mercredi', 'Concert d’ouverture (Space Afrika)', 'Oude Kerk'],
        ['Jeudi', 'Into the City, un nouveau programme', 'Melkweg et Paradiso'],
        ['Vendredi au dimanche', 'Le festival', 'Amsterdamse Bos, Amstelveen'],
        ['Vendredi au dimanche', 'Programme de nuit', 'RADION, Garage Noord, ISO, RAUM']
      ]}),
    midland: fig('midland-2017', 1200, 799,
      'Midland aux platines au Dekmantel Festival en 2017',
      'Midland au Dekmantel Festival, septembre 2017. Photo : StealthManagementMusic, CC BY-SA 4.0.'),
    'oude-kerk': fig('oude-kerk-ceiling', 1200, 898,
      'Le plafond en bois peint de l’Oude Kerk à Amsterdam',
      'Le plafond de l’Oude Kerk à Amsterdam, un des lieux de Dekmantel. Photo : C messier, CC BY-SA 4.0.'),
    paradiso: fig('paradiso-2018', 1200, 900,
      'La façade du Paradiso à Amsterdam en juin 2018',
      'Le Paradiso à Amsterdam, juin 2018, un des lieux de Dekmantel. Photo : Marek Koudelka, CC BY-SA 4.0.'),
    loop: articleVideoCollection({
      lang, label: 'Dekmantel, écouté depuis chez soi',
      description: 'Trois sets de la scène The Loop au Dekmantel Festival 2025, depuis la chaîne du festival.',
      items: [
        articleVideoCard({youtubeId: 'E4NXVs4SlhE', genre: 'The Loop, 2025', artist: 'Four Tet', title: 'Four Tet sur The Loop'}),
        articleVideoCard({youtubeId: 't5KwF_VsM50', genre: 'The Loop, 2025', artist: 'Honey Dijon', title: 'Honey Dijon sur The Loop'}),
        articleVideoCard({youtubeId: 's14IS_wXrEQ', genre: 'The Loop, 2025', artist: 'Avalon Emerson', title: 'Avalon Emerson sur The Loop'})
      ]
    }),
    radar: articleVideoCollection({
      lang, label: 'RADAR, Dekmantel 2025',
      description: 'Deux sets de la scène RADAR au Dekmantel Festival 2025, depuis la chaîne du festival.',
      items: [
        articleVideoCard({youtubeId: 'MeLdwDfYkzg', genre: 'RADAR, 2025', artist: 'DJ Nobu', title: 'DJ Nobu sur RADAR'}),
        articleVideoCard({youtubeId: 'seBCd51d3KM', genre: 'RADAR, 2025', artist: 'Fadi Mohem', title: 'Fadi Mohem sur RADAR'})
      ]
    })
  }),

  // The English page's sources, URL for URL, with translated labels.
  sources: [
    {html: `Programme, lieux, âges minimum, règles des billets, camping, navette et logistique : ${ext('https://www.dekmantelfestival.com/faq', 'FAQ du Dekmantel Festival')} (en anglais). La FAQ décrit l’édition 2026.`},
    {html: `Dates, espaces et format de Dekmantel Selectors : ${ext('https://www.dekmantelselectors.com/', 'dekmantelselectors.com')} (en anglais).`},
    {html: `Dates et billets 2027 à Amsterdam : ${ext('https://dekmantel.com/events/dekmantel-festival-2027', 'la page de l’événement sur le site du festival')} (en anglais).`}
  ],

  bandcamp: {
    description: 'Entre deux festivals, la musique que je fais moi-même. Acheter une sortie soutient directement mon travail.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 par thecatrave'},
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks par thecatrave'}
    ]
  }
};
