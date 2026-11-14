// French best techno festivals comparison. Structure, facts, dates and the
// "annoncé" and "pas encore annoncé" labels from the English page
// (best-techno-festivals-draft.md, build-techno-festivals-article.mjs), dated
// 31 October 2026.
//
// French wording: Keyword Planner (France, French, 14 November 2026) and
// google.com hl=fr gl=fr; keywords/fr-techno-festivals.json.
//
// Maintenance: the dates are the English page's. Change them here and in the
// draft whenever the English page changes them; the page is registered in
// festival-editions.mjs with the other roundups.
//
// The images are the English page's, in img/techno-festivals/, with
// translated captions.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, ownPlaylistListening, ownSetListening, ownTrackListening
} from '../../site-components.mjs';

const fig = (name, width, height, alt, caption) => articleFigure({
  src: `img/techno-festivals/${name}-1200.webp`,
  srcset: `img/techno-festivals/${name}-320.webp 320w, img/techno-festivals/${name}-1200.webp 1200w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

const link = ([href, label]) => `<a href="${href}" target="_blank" rel="noopener noreferrer">${label}</a>`;

const festivals = [
  ['Verknipt', 'Amsterdam et Utrecht, Pays-Bas', '5 mars, Ziggo Dome ; annoncé les 5 et 6 juin, Strijkviertel', 'Hard techno', 'Jusqu’à 12 000 au Ziggo Dome', 'La hard techno en salle'],
  ['DGTL Amsterdam', 'Amsterdam, Pays-Bas', '26 au 28 mars', 'Techno, house', 'Trois jours', 'Un week-end en ville au printemps'],
  ['Time Warp', 'Mannheim, Allemagne', '3 avril', 'Techno, house', '19 heures, cinq scènes', 'Une longue nuit en salle'],
  ['MAYDAY', 'Dortmund, Allemagne', '30 avril', 'Hard techno, raw, bounce, acid, techno classique', 'Quatre scènes', 'La hard techno'],
  ['Horst', 'Vilvorde, Belgique', 'Pas encore annoncé (2026 : 14 au 16 mai)', 'Techno, house, arts', 'Trois jours en 2026', 'Le design et l’architecture'],
  ['Movement', 'Detroit, États-Unis', '29 au 31 mai', 'Techno, house', 'Six scènes', 'La techno là où elle est née'],
  ['Terminal V', 'Glasgow, Royaume-Uni', '4 au 6 juin', 'Hard techno', 'Trois jours', 'La hard techno en Écosse'],
  ['Kappa FuturFestival', 'Turin, Italie', '2 au 4 juillet', 'Techno, house', '125 000 entrées en 2026, six scènes', 'Le plein air en journée'],
  ['Awakenings', 'Hilvarenbeek, Pays-Bas', '9 au 11 juillet', 'Techno', '119 000 visiteurs en 2026', 'Un grand week-end techno'],
  ['Stone Techno', 'Essen, Allemagne', '9 au 11 juillet', 'Techno', 'Trois jours', 'Un site industriel'],
  ['Dekmantel', 'Amsterdam, Pays-Bas', '29 juillet au 2 août', 'Techno, house et plus', 'Cinq jours', 'Une programmation plus large'],
  ['Nature One', 'Kastellaun, Allemagne', '29 juillet au 1er août', 'Techno et électronique plus large', 'Plus de 60 000 personnes, 20 scènes', 'Un très grand week-end en camping'],
  ['Monument', 'Veggli, Norvège', '29 juillet au 1er août, complet selon les annonces', 'Techno profonde et hypnotique', 'Quatre jours', 'Une forêt et un long voyage'],
  ['ARC', 'Chicago, États-Unis', 'Pas encore annoncé (week-end de Labor Day)', 'House, techno', 'Quatre jours en 2026', 'Un parc urbain en fin d’été'],
  ['CRSSD', 'San Diego, États-Unis', 'Printemps pas encore annoncé', 'House, techno, electro', 'Deux fois par an', 'Un week-end au bord de l’eau']
];

export default {
  lang: 'fr',
  name: 'fr-techno-festivals',
  file: 'fr/festivals-techno.html',
  draft: 'fr/techno-festivals-draft.md',
  canonical: 'https://thecatrave.com/fr/festivals-techno',
  englishPath: '/best-techno-festivals',
  ogImage: 'https://thecatrave.com/img/og/techno-festivals.jpg',
  bodyClass: 'article-page techno-festivals-page',
  minReadingMinutes: 6,

  title: 'Meilleurs festivals techno 2027 : Awakenings, Time Warp, Movement',
  description: 'Les meilleurs festivals techno 2027 : chaque festival techno avec ses dates, son son et à qui il convient, d’Awakenings et Time Warp à Movement à Detroit.',
  datePublished: '2026-11-14',
  dateModified: '2026-11-14',
  dateLabel: '14 novembre 2026',

  heroKicker: 'Guide des festivals 2027',
  heroTitle: 'Les meilleurs festivals techno du monde en 2027',
  deck: 'Les grands festivals techno comparés par son, taille et lieu, des nuits dans les halls allemands jusqu’à Detroit, avec les dates 2027 confirmées et celles qui restent ouvertes.',
  answerLabel: 'Les meilleurs festivals techno',
  breadcrumbName: 'Les meilleurs festivals techno',

  answerSection: 'Réponse',
  introSection: 'Introduction',
  introTitle: 'Une liste où choisir.',
  faqSection: 'FAQ',
  faqLabel: 'Questions fréquentes sur les festivals techno',
  faqTitle: 'Questions fréquentes sur les festivals techno.',

  sections: [
    {id: 'criteria', heading: 'Comment cette liste a été établie', title: 'Comment cette liste a été établie.', tocLabel: 'Comment la liste a été établie'},
    {id: 'at-a-glance', heading: 'Dates des festivals techno 2027 en un coup d’œil', title: 'Dates des festivals techno 2027 en un coup d’œil.', tocLabel: 'Les dates 2027 en un coup d’œil'},
    {id: 'biggest', heading: 'Quel est le plus gros festival techno du monde ?', title: 'Quel est le plus gros festival techno du monde ?', tocLabel: 'Le plus gros festival techno',
      subsections: ['nature-one', 'awakenings']},
    {id: 'europe', heading: 'Quels sont les meilleurs festivals techno en Europe ?', title: 'Quels sont les meilleurs festivals techno en Europe ?', tocLabel: 'Festivals techno en Europe',
      subsections: ['time-warp', 'kappa-futurfestival', 'stone-techno', 'dekmantel', 'dgtl', 'horst', 'monument']},
    {id: 'usa', heading: 'Où sont les meilleurs festivals techno aux États-Unis ?', title: 'Où sont les meilleurs festivals techno aux États-Unis ?', tocLabel: 'Festivals techno aux États-Unis',
      subsections: ['movement', 'arc', 'crssd']},
    {id: 'hard', heading: 'Quels festivals techno tapent le plus fort ?', title: 'Quels festivals techno tapent le plus fort ?', tocLabel: 'Festivals de hard techno',
      subsections: ['mayday', 'verknipt']},
    {id: 'not-listed', heading: 'Ce qui ne figure pas dans cette liste, et pourquoi', title: 'Ce qui ne figure pas dans cette liste, et pourquoi.', tocLabel: 'Hors liste, et pourquoi'},
    {id: 'choose', heading: 'Comment choisir', title: 'Comment choisir.', tocLabel: 'Comment choisir'}
  ],

  media: ({lang}) => ({
    'Table: dates': articleTable({label: 'Les festivals techno comparés, 2027',
      headers: ['Festival', 'Où', 'Dates 2027', 'Son', 'Taille', 'Idéal pour'], rows: festivals}),
    'nature-one': fig('nature-one-main-floor-2009', 1200, 900,
      'Le public sur le Main Floor de Nature One, en Allemagne, en 2009',
      'Le Main Floor de Nature One en 2009. Photo : Jochen Herrmann, CC BY-SA 3.0.'),
    kappa: fig('kappa-solar-2025', 1200, 900,
      'La Solar Stage du Kappa FuturFestival à Turin en juillet 2025',
      'La Solar Stage du Kappa FuturFestival au Parco Dora de Turin, en juillet 2025. Photo : MadBob, CC BY 4.0.'),
    zollverein: fig('zollverein-night', 1200, 800,
      'La mine de Zollverein à Essen, éclairée la nuit',
      'Zollverein à Essen la nuit, le site de Stone Techno. Photo : Alex, CC BY 3.0.'),
    detroit: fig('detroit-festival-2002', 1200, 900,
      'La grande scène du Detroit Electronic Music Festival à la nuit tombée, en 2002',
      'La grande scène du Detroit Electronic Music Festival en mai 2002, l’événement devenu Movement. Photo : Myself248, CC BY-SA 4.0.'),
    dekmantel: articleVideoCollection({
      lang, label: 'Dekmantel, écouté depuis chez soi',
      description: 'Freddy K sur la scène Radar de Dekmantel Ten, août 2024.',
      items: [articleVideoCard({youtubeId: 'CLDcCyRpoD4', genre: 'Dekmantel, 2024', artist: 'Freddy K', title: 'Radar'})]
    }),
    playlist: ownPlaylistListening('rare-electronic-music', lang),
    track: ownTrackListening('late-summer-cloud-dance', 'Mon propre court morceau de liquid breakbeat.', lang),
    'first-mix': ownSetListening(0, lang),
    'second-mix': ownSetListening(1, lang)
  }),

  sources: [
    {html: `Dates 2027 tirées du site de chaque festival : ${[
      ['https://www.awakenings.com/', 'Awakenings'], ['https://www.time-warp.de/', 'Time Warp'], ['https://movementfestival.com/faqs', 'Movement'],
      ['https://www.kappafuturfestival.it/', 'Kappa FuturFestival'], ['https://www.nature-one.de/', 'Nature One'], ['https://www.mayday.de/', 'MAYDAY'],
      ['https://dgtl-festival.com/en/dgtl-amsterdam/', 'DGTL'], ['https://www.stone-techno.com/', 'Stone Techno'], ['https://www.dekmantel.com/', 'Dekmantel'],
      ['https://festival.mnmt.no/', 'Monument']
    ].map(link).join(', ')}.`},
    {html: `Horst : ${link(['https://www.horstartsandmusic.com/', 'le site du festival'])}.`},
    {html: `Fréquentation : ${link(['https://lespresso.it/c/cultura/2026/07/06/kappa-futur-festival-torino-2026-chiusura-messico-monterrey/63264', 'L’Espresso sur Kappa FuturFestival'])} (en italien), ${link(['https://nieuws.nl/entertainment/awakenings-beleeft-grootste-editie-ooit-met-119000-bezoekers', 'l’ANP via nieuws.nl sur Awakenings'])} (en néerlandais) et le site de Nature One.`},
    {html: `Verknipt : ${link(['https://www.festivalinfo.nl/news/59214/Verknipt-keert-maart-2027-terug-naar-de-Ziggo-Dome-voor-nieuwe-editie/', 'FestivalInfo sur le Ziggo Dome'])} et ${link(['https://www.technoairlines.com/festival/verknipt-festival-utrecht-netherlands-2027', 'Technoairlines sur Utrecht'])}.`},
    {html: `Complet et âge minimum de Monument : ${link(['https://www.technoairlines.com/festival/monument-festival-veggli-norway-2027', 'Technoairlines'])}.`},
    {html: `Terminal V : ${link(['https://www.timeout.com/uk/news/glasgow-clydeside-live-terminal-v-new-venue-092926', 'Time Out'])} (en anglais).`},
    {href: 'https://djmag.com/top100festivals', label: 'DJ Mag (en anglais) : Top 100 Festivals 2026'},
    {html: 'Awakenings, Time Warp, Movement, Dekmantel et ARC : le guide de ce site consacré à chaque festival, lié plus haut, avec ses propres sources.'}
  ],

  bandcamp: {
    description: 'Acheter une sortie soutient directement mon travail.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 par thecatrave'}
    ]
  }
};
