// French Defqon.1 guide. Structure and facts from the English page
// (defqon-1-draft.md), via the German sibling (content/de/defqon-1.mjs), which
// read the Q-dance pages, IQ Magazine and NL Times: keep them aligned.
//
// fr-FR SERP read on 2026-11-12 ("defqon 1 2027"): People also ask
// "Pourquoi le Defqon.1 a été annulé ?", "Quelle est la date de Defqon.1 en
// 2027 ?". Keyword Planner festival seeds were not run in this batch.
//
// Images are the English guide's, in img/defqon-1/, with translated captions.
import {localizedFestivalPlanning} from '../festival-planning-data.mjs';
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, ownSetListening
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/defqon-1/${name}-1200.webp`,
  srcset: `img/defqon-1/${name}-320.webp 320w, img/defqon-1/${name}-1200.webp ${width}w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

const ext = (href, text) => `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`;
const table = (label, headers, rows) => articleTable({label, headers, rows: rows.map(row => row.map(escapeHtml))});

export default {
  lang: 'fr',
  name: 'fr-defqon-1',
  file: 'fr/defqon-1.html',
  draft: 'fr/defqon-1-draft.md',
  canonical: 'https://thecatrave.com/fr/defqon-1',
  englishPath: '/defqon-1',
  ogImage: 'https://thecatrave.com/img/og/defqon-1.jpg',
  bodyClass: 'article-page defqon-1-page',
  minReadingMinutes: 8,

  title: 'Defqon.1 2027 : dates, billetterie et ventes',
  description: 'Defqon.1 2027 a lieu du 24 au 27 juin à Biddinghuizen : étapes de la billetterie, billets, pourquoi 2026 a été annulé, ce qu’il en est des remboursements et l’accès.',
  datePublished: '2026-11-12',
  dateModified: '2026-11-12',
  dateLabel: '12 novembre 2026',

  heroKicker: 'Guide des festivals 2027',
  heroTitle: 'Defqon.1 2027 : dates, billetterie, ventes et programmation',
  deck: 'Le festival hardstyle de Biddinghuizen : quand a lieu 2027, comment se déroulent les ventes, pourquoi 2026 a été annulé et comment s’y rendre.',
  answerLabel: 'Dates de Defqon.1 2027',
  breadcrumbName: 'Defqon.1',

  answerSection: 'Réponse',
  introSection: 'Introduction',
  introTitle: 'Un festival aux règles nouvelles.',
  faqSection: 'FAQ',
  faqLabel: 'Questions fréquentes',
  faqTitle: 'Questions fréquentes sur Defqon.1.',

  sections: [
    {id: 'what-is', heading: 'Qu’est-ce que le festival Defqon.1 ?', title: 'Qu’est-ce que le festival Defqon.1 ?', tocLabel: 'Qu’est-ce que Defqon.1 ?'},
    {id: 'dates', heading: 'Dates de Defqon.1 2027', title: 'Dates de Defqon.1 2027', tocLabel: 'Dates 2027'},
    {id: 'tickets', heading: 'Billetterie Defqon.1', title: 'Billetterie Defqon.1', tocLabel: 'Billets et ventes'},
    {id: 'cancelled', heading: 'Defqon.1 2026 annulé', title: 'Defqon.1 2026 annulé', tocLabel: 'Annulation 2026'},
    {id: 'lineup', heading: 'Programmation de Defqon.1', title: 'Programmation de Defqon.1', tocLabel: 'Programmation et sets'},
    {id: 'location', heading: 'Où se trouve Defqon.1 ?', title: 'Où se trouve Defqon.1 ?', tocLabel: 'Lieu'},
    {id: 'planning', heading: 'Préparer son voyage à Defqon.1 2027', title: 'Préparez votre voyage à Defqon.1.', tocLabel: 'Voyage et préparation', planning: localizedFestivalPlanning('defqon', 'fr')}
  ],

  media: ({lang}) => ({
    'thecatrave mix 1': ownSetListening(0, lang, 'Mon propre mix, à écouter pendant que vous préparez le week-end.'),
    'thecatrave mix 2': ownSetListening(1, lang, 'Un deuxième mix de ma part, pour le trajet.'),
    'Image: red': figure('red-stage-2023', 1280, 720,
      'La Red Stage, scène principale de Defqon.1 2023, de jour avec le public devant',
      'La Red Stage à Defqon.1, 23 juin 2023. Photo : DELTAFXUniverse, CC BY-SA 4.0.'),
    'Image: endshow': figure('endshow-2018', 1200, 674,
      'Un feu d’artifice rouge au-dessus de la scène principale pendant l’Endshow du dimanche à Defqon.1',
      'L’Endshow du dimanche à Defqon.1, 24 juin 2018. Image : Ss279, CC BY-SA 4.0.'),
    'Image: uv': figure('uv-stage-2018', 1090, 818,
      'L’UV Stage de Defqon.1 au crépuscule, des festivaliers traversent la pelouse',
      'L’UV Stage au crépuscule, Defqon.1, 23 juin 2018. Photo : arjennn_, CC BY-SA 4.0.'),
    'Embed: hardstyle sets': articleVideoCollection({
      lang,
      label: 'Du hardstyle du catalogue',
      description: 'Trois sets hardstyle du catalogue du Selector. Aucun n’a été enregistré à Defqon.1.',
      items: [
        articleVideoCard({youtubeId: 'hl_dtNxuSoI', genre: 'Hardstyle', artist: 'The Horrorist', title: 'Boiler Room Berlin live set'}),
        articleVideoCard({youtubeId: 'ITYiefRoRE0', genre: 'Hardstyle', artist: 'Sub Zero Project', title: 'Hardstyle set live from Wasteland 2026'}),
        articleVideoCard({youtubeId: 'GYEcEGThh-M', genre: 'Hardstyle', artist: 'Loud373', title: 'Boiler Room Uzbekistan: Sublimation'})
      ]
    }),
    'Table: status 2027': table('État de Defqon.1 2027', ['Point pour 2027', 'État'], [
      ['Dates', 'Du 24 au 27 juin 2027, Q-dance'],
      ['Lieu', 'Holy Grounds, Biddinghuizen'],
      ['Billets', 'Vente par étapes à partir du 27 octobre'],
      ['Prix', 'Dans la boutique de Q-dance'],
      ['Programmation', 'Non publiée']
    ]),
    'Table: sale schedule': table('Calendrier des ventes de Defqon.1 2027', ['Date', 'Étape'], [
      ['1er octobre 2026', 'Ouverture de la liste de souhaits'],
      ['8 octobre 2026', 'Réservation prioritaire Travel and Stay pour les détenteurs 2026 qui ont gardé leur billet'],
      ['27 octobre 2026', 'Vente Dediqated'],
      ['29 octobre 2026', 'Vente Travel and Stay'],
      ['31 octobre 2026', 'Vente générale']
    ])
  }),

  sources: [
    {html: `Dates 2027, ventes, types de billets, moyens de paiement, horaires, âge et scènes : ${ext('https://www.q-dance.com/l/defqon1-2027', 'Q-dance Defqon.1 2027')} et les pages d’événement et de FAQ de Q-dance qui y sont liées (en anglais).`},
    {html: 'Annulation et options de remboursement 2026, FAQ mise à jour le 30 juin 2026 : la page de mise à jour de Q-dance sur Defqon.1 2026.'},
    {html: `Prix des transports, du parking et de la navette 2026 : ${ext('https://www.q-dance.com/l/defqon1-ayntk-2026-travel-to-defqon1', 'Q-dance, se rendre à Defqon.1 2026')} (en anglais).`},
    {html: `Articles sur l’annulation : ${ext('https://www.iqmagazine.com/', 'IQ Magazine, 26 juin 2026')} et ${ext('https://nltimes.nl/', 'NL Times, 1er juillet 2026')} (en anglais).`},
    {html: `Histoire : Hardstyle Mag et ${ext('https://www.edm-lab.com/en/events/defqon-1-2022/', 'EDM Lab, 2022')}. Defqon.1 Australia : The Music Network, 30 mai 2019.`},
    {html: 'Source secondaire pour les couleurs de scène supplémentaires, non confirmées officiellement : hardcult.com.'}
  ],

  bandcamp: {
    description: 'Entre deux festivals, la musique que je fais moi-même. En acheter une soutient directement mon travail.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 de thecatrave'},
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks de thecatrave'}
    ]
  }
};
