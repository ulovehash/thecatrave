// French Airbeat One guide. Structure and facts from the English page
// (airbeat-one-festival-draft.md, build-airbeat-one-festival-article.mjs).
//
// French keywords (keywords/fr-airbeat-one.json): Keyword Planner, France,
// 2026-10-01: no data for airbeat one (not measured). Wording from Google
// fr-FR the same day: related searches "Airbeat One Festival lieu", "line up".
//
// Images are the English guide's, in img/airbeat-one/, with translated captions.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, ownSetListening
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/airbeat-one/${name}-${width}.webp`,
  srcset: `img/airbeat-one/${name}-320.webp 320w, img/airbeat-one/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

export default {
  lang: 'fr',
  name: 'fr-airbeat-one',
  file: 'fr/airbeat-one-festival.html',
  draft: 'fr/airbeat-one-festival-draft.md',
  canonical: 'https://thecatrave.com/fr/airbeat-one-festival',
  englishPath: '/airbeat-one-festival',
  ogImage: 'https://thecatrave.com/img/og/airbeat-one-festival.jpg',
  bodyClass: 'article-page airbeat-one-festival-page',

  title: 'Airbeat One Festival 2027 : dates, scènes, camping, accès',
  description: 'Airbeat One 2027 se tient du 7 au 11 juillet à Neustadt-Glewe : un guide des scènes EDM, techno, hardstyle et psytrance, du camping et du trajet.',
  datePublished: '2026-10-01',
  dateModified: '2026-10-01',
  dateLabel: '1er octobre 2026',

  heroKicker: 'Guide des festivals en Allemagne',
  heroTitle: 'Airbeat One Festival : le guide du rave sur un aérodrome en Allemagne',
  deck: 'Quatre grandes routes électroniques se partagent un aérodrome du nord de l’Allemagne, et le camping fait partie de l’événement au lieu d’être un coin tranquille à côté.',
  answerLabel: 'Qu’est-ce que le festival Airbeat One',
  breadcrumbName: 'Airbeat One Festival',

  answerSection: 'Réponse',
  introSection: 'Introduction',
  introTitle: 'Plusieurs festivals électroniques sur un seul aérodrome.',
  faqSection: 'FAQ',
  faqLabel: 'Questions fréquentes',
  faqTitle: 'Questions fréquentes sur le festival Airbeat One.',

  sections: [
    {id: 'airbeat-one-2027', heading: 'Airbeat One 2027', tocLabel: '2027 : dates et thème', title: 'Airbeat One 2027.'},
    {id: 'music', heading: 'Quelle musique joue Airbeat One', tocLabel: 'Musique à Airbeat One', title: 'Quelle musique joue Airbeat One.'},
    {id: 'stages', heading: 'Un festival construit autour d’identités de scènes', tocLabel: 'Scènes', title: 'Un festival construit autour d’identités de scènes.'},
    {id: 'history', heading: 'D’Airbase One à Airbeat One', tocLabel: 'Histoire', title: 'D’Airbase One à Airbeat One.'},
    {id: 'camping', heading: 'Le camping à Neustadt-Glewe', tocLabel: 'Camping', title: 'Le camping à Neustadt-Glewe.'},
    {id: 'planning', heading: 'Y aller et organiser le week-end', tocLabel: 'Trajet et organisation', title: 'Y aller et organiser le week-end.'}
  ],

  media: ({lang}) => ({
    'Image: Arena Stage': figure('airbeat-arena', 1200, 754,
      'Public et production dans l’Arena Stage d’Airbeat One en 2025',
      'L’Arena Stage couverte en 2025. Grâce à ses identités de scènes, Airbeat One permet à la techno, aux styles plus durs et à la psytrance de tenir de vrais programmes à côté de la Mainstage.'),
    'Image: Neustadt-Glewe airfield': figure('airbeat-airfield', 1200, 768,
      'Vue aérienne de l’aérodrome de Neustadt-Glewe, dans le nord de l’Allemagne',
      'L’aérodrome de Neustadt-Glewe avant la construction du festival. Le site ouvert accueille scènes, camping et voies pour les véhicules sur une seule grande surface. Photo : Carsten Steger, CC BY-SA 4.0.'),
    'Embed: Paul van Dyk': articleVideoCollection({
      lang,
      label: 'Neelix et Paul van Dyk à Airbeat One',
      description: 'Neelix à Airbeat One 2024, le set le plus vu que j’aie trouvé sur la chaîne du festival (556 000 vues), et Paul van Dyk sur la Second Stage en 2025.',
      items: [
        articleVideoCard({youtubeId: 'AWxxg3l89-k', genre: 'AIRBEAT ONE, 2024', artist: 'Neelix', title: 'Live-Set at Airbeat One 2024'}),
        articleVideoCard({youtubeId: 'wETX6I_EDUo', genre: 'AIRBEAT ONE, 2025', artist: 'Paul van Dyk', title: 'Live from the Second Stage'})
      ]
    }),
    'thecatrave mix 1': ownSetListening(0, lang, 'Mon propre mix multigenre traverse la techno et du matériel rave plus dur, comme un parcours personnel dans l’éventail de scènes d’Airbeat One, sans remplacer sa programmation.'),
    'thecatrave mix 2': ownSetListening(1, lang, 'Pour un long week-end sur l’aérodrome : mon propre set entre les genres, avec la techno au centre et plusieurs virages plus rapides autour.'),
    'Table: Faits': articleTable({
      headers: ['Information', 'Détail'],
      rows: [
        ['Dates', '7 au 11 juillet 2027'],
        ['Lieu', 'Aérodrome de Neustadt-Glewe, Allemagne'],
        ['Thème', 'Australie'],
        ['Édition', '24e édition et 25e anniversaire'],
        ['Musique', 'EDM, techno, hardstyle et psytrance'],
        ['Line-up 2027', 'En cours ; voir la page officielle de la line-up']
      ].map(row => row.map(escapeHtml)),
      label: 'Airbeat One Festival 2027 : les faits'
    })
  }),

  sources: [
    {href: 'https://airbeat-one.de/en/info/', label: 'Airbeat One : dates, anniversaire et thème officiels de 2027 (en anglais)'},
    {href: 'https://airbeat-one.de/en/stages/', label: 'Airbeat One : guide officiel des scènes (en anglais)'},
    {href: 'https://customerservice.airbeat-one.de/hc/en-150/articles/115004835489-Description-Camping-grounds-opening-hours', label: 'Airbeat One : informations officielles sur le camping (en anglais)'},
    {href: 'https://airbeat-one.de/en/getting-there/', label: 'Airbeat One : informations officielles sur le trajet (en anglais)'},
    {href: 'https://commons.wikimedia.org/wiki/File:Airbeat_One_Arena_Stage.jpg', label: 'Wikimedia Commons : photo de l’Arena Stage et licence (en anglais)'}
  ],

  bandcamp: {
    description: 'Airbeat One donne à plusieurs scènes électroniques leurs propres scènes. Ces sorties de thecatrave se rapprochent de son côté club ; en acheter une soutient la musique et cette écriture indépendante.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks de thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 de thecatrave'}
    ]
  }
};
