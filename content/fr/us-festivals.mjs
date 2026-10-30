// French US EDM festivals comparison. Structure, facts, dates and the "pas encore
// annoncé" labels from the English page (best-edm-festivals-usa-draft.md,
// build-us-festivals-article.mjs), checked there on 2 October 2026, via the
// Spanish page (content/es/us-festivals.mjs).
//
// French wording: "festivals EDM aux États-Unis" and "festivals de musique
// électronique" carried from the Spanish SERP read ("festivales EDM", "festivales de
// música electrónica en Estados Unidos"). The google.fr SERP could not be read
// on 30 October 2026 (Chrome not connected) and no Keyword Planner row exists
// for a French phrase (keywords/fr-us-festivals.json), so the head term is
// unmeasured.
//
// Maintenance: the dates are the English page's. Change them here and in the
// draft whenever the English page changes them; the page is registered in
// festival-editions.mjs with the other roundups.
//
// The images are the English page's, in img/us-festivals/, with translated
// captions.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, ownSetListening, ownTrackListening
} from '../../site-components.mjs';

const fig = (name, width, height, alt, caption) => articleFigure({
  src: `img/us-festivals/${name}-1200.webp`,
  srcset: `img/us-festivals/${name}-320.webp 320w, img/us-festivals/${name}-1200.webp 1200w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

const link = ([href, label]) => `<a href="${href}" target="_blank" rel="noopener noreferrer">${label}</a>`;

const festivals = [
  ['EDC Las Vegas', 'Las Vegas, Nevada', 'EDC Dusk du 14 au 16 mai, EDC Dawn du 21 au 23 mai', 'EDM de grande scène', 'Plus de 500 000 sur le week-end', 'Camping', 'La production complète'],
  ['Ultra', 'Miami, Floride', 'Du 26 au 28 mars', 'EDM de grande scène', 'Environ 165 000 billets', 'Ville', 'Un festival et un voyage à Miami'],
  ['EDC Orlando', 'Orlando, Floride', 'Pas encore annoncé (2026 : du 6 au 8 novembre)', 'EDM de grande scène', 'Non indiqué ici', 'Non indiqué ici', 'EDC hors de Las Vegas'],
  ['Beyond Wonderland', 'San Bernardino, Californie ; Joliet, Illinois ; George, Washington', 'Les 26 et 27 mars ; du 10 au 13 juin ; du 25 au 27 juin', 'Musique électronique de danse', 'Non indiqué ici', 'Camping (Midwest et The Gorge)', 'Un week-end de camping près de chez vous'],
  ['HARD Summer', 'Los Angeles, Californie', 'Pas encore annoncé (2026 : les 1ᵉʳ et 2 août)', 'Électronique et hip-hop', 'Non indiqué ici', 'Non indiqué ici', 'Électronique et hip-hop ensemble'],
  ['Movement', 'Détroit, Michigan', 'Du 29 au 31 mai', 'Techno, house', 'Six scènes', 'Ville', 'La techno là où elle est née'],
  ['ARC', 'Chicago, Illinois', 'Pas encore annoncé (2026 : du 4 au 7 septembre)', 'House, techno', 'Non indiqué ici', 'Ville', 'La house à Chicago'],
  ['CRSSD', 'San Diego, Californie', 'Pas encore annoncé (printemps) ; 2026 : les 26 et 27 septembre', 'House, techno, electro, indie dance', 'Environ 15 000 par jour (printemps 2024)', 'Ville', 'Un week-end au bord de l’eau'],
  ['III Points', 'Miami, Floride', 'Pas encore annoncé (2026 : les 16 et 17 octobre)', 'Indie, électronique, hip-hop, expérimental', 'Non indiqué ici', 'Ville', 'L’électronique parmi les arts'],
  ['Lost Lands', 'Thornville, Ohio', 'Pas encore annoncé (2026 : du 18 au 20 septembre)', 'Bass music', 'Complet en 2026', 'Camping', 'La bass music avec camping'],
  ['Bass Canyon', 'George, Washington', 'Pas encore annoncé (2026 : du 14 au 16 août)', 'Bass music', 'Non indiqué ici', 'Camping', 'La bass music dans un canyon'],
  ['Electric Forest', 'Rothbury, Michigan', 'Pas encore annoncé (2026 : du 25 au 28 juin)', 'Jam bands et électronique', '40 000 à 50 000 (estimation 2025)', 'Camping', 'Camping en forêt']
];

export default {
  lang: 'fr',
  name: 'fr-us-festivals',
  file: 'fr/festivals-edm-etats-unis.html',
  draft: 'fr/us-festivals-draft.md',
  canonical: 'https://thecatrave.com/fr/festivals-edm-etats-unis',
  englishPath: '/best-edm-festivals-usa',
  ogImage: 'https://thecatrave.com/img/og/us-festivals.jpg',
  bodyClass: 'article-page us-festivals-page',
  minReadingMinutes: 9,

  title: 'Festivals EDM aux États-Unis 2027 : EDC, Ultra, Movement',
  description: 'Festivals EDM aux États-Unis en 2027 : EDC Las Vegas en mai, Ultra Miami du 26 au 28 mars, Movement Détroit du 29 au 31 mai. Dates, style et camping comparés.',
  datePublished: '2026-10-30',
  dateModified: '2026-10-30',
  dateLabel: '30 octobre 2026',

  heroKicker: 'Guide des festivals 2027',
  heroTitle: 'Les meilleurs festivals EDM aux États-Unis en 2027',
  deck: 'Douze festivals américains comparés par programmation, taille, hébergement et date, avec les dates 2027 confirmées et celles qui ne le sont pas encore.',
  answerLabel: 'Les meilleurs festivals EDM aux États-Unis',
  breadcrumbName: 'Festivals EDM aux États-Unis',

  answerSection: 'Réponse',
  introSection: 'Introduction',
  introTitle: 'Une liste pour faire son choix.',
  faqSection: 'FAQ',
  faqLabel: 'Questions fréquentes sur les festivals EDM aux États-Unis',
  faqTitle: 'Questions fréquentes sur les festivals EDM aux États-Unis.',

  sections: [
    {id: 'criteria', heading: 'Comment cette liste a été établie', title: 'Comment cette liste a été établie.'},
    {id: 'at-a-glance', heading: 'Les dates 2027 en un coup d’œil', title: 'Les dates 2027 en un coup d’œil.'},
    {id: 'biggest', heading: 'Quel est le plus grand festival EDM des États-Unis ?', title: 'Quel est le plus grand festival EDM des États-Unis ?', kicker: 'EDM et scène principale',
      subsections: ['edc-las-vegas', 'ultra-music-festival', 'edc-orlando', 'beyond-wonderland', 'hard-summer']},
    {id: 'house-techno', heading: 'Quels sont les meilleurs festivals américains de house et de techno ?', title: 'Quels sont les meilleurs festivals américains de house et de techno ?',
      subsections: ['movement', 'arc-music-festival', 'crssd-festival', 'iii-points']},
    {id: 'bass', heading: 'Quels sont les meilleurs festivals de bass music aux États-Unis ?', title: 'Quels sont les meilleurs festivals de bass music aux États-Unis ?',
      subsections: ['lost-lands', 'bass-canyon']},
    {id: 'forest', heading: 'Quel festival américain pour camper en pleine forêt ?', title: 'Quel festival américain pour camper en pleine forêt ?'},
    {id: 'smaller', heading: 'Les petits festivals qui valent le voyage', title: 'Les petits festivals qui valent le voyage.', kicker: 'Hors du vote',
      subsections: ['dreamstate', 'decadence-colorado', 'ubbi-dubbi']},
    {id: 'not-listed', heading: 'Ce qui ne figure pas dans cette liste, et pourquoi', title: 'Ce qui ne figure pas dans cette liste, et pourquoi.'},
    {id: 'choose', heading: 'Comment choisir son festival', title: 'Comment choisir son festival.'}
  ],

  media: ({lang}) => ({
    'Table: major': articleTable({label: 'Les grands festivals EDM américains comparés, 2027',
      headers: ['Festival', 'Où', 'Dates 2027', 'Style', 'Taille', 'Hébergement', 'Idéal pour'], rows: festivals}),
    'beyond-wonderland': fig('beyond-wonderland-2010', 1200, 900,
      'Un DJ sur la scène principale de Beyond Wonderland en 2010, avec le public devant',
      'La scène principale de Beyond Wonderland en mars 2010. Photo : Roxanna Salceda, CC BY-SA 2.0.'),
    'iii-points': fig('iii-points-2017', 1200, 900,
      'VIRGO sur la scène Mind Melt de III Points, à Miami, en 2017',
      'VIRGO sur la scène Mind Melt de III Points, à Miami, en octobre 2017. Photo : Alienasomnia, CC BY-SA 4.0.'),
    'electric-forest': fig('electric-forest-2018', 1200, 600,
      'Festivaliers d’Electric Forest, à Rothbury, dans le Michigan, en juillet 2018',
      'Electric Forest, à Rothbury, dans le Michigan, en juillet 2018. Photo : FifthLegend, CC BY 2.0.'),
    'crssd-set': articleVideoCollection({
      lang, label: 'CRSSD, depuis chez vous',
      description: 'Dusky en direct au CRSSD Fest à l’automne 2018, filmé par Mixmag. La house et la techno pour lesquelles le festival est connu.',
      items: [articleVideoCard({youtubeId: '4gqM7WMrGEw', genre: 'CRSSD, 2018', artist: 'Dusky', title: 'En direct au CRSSD Fest'})]
    }),
    'own-track': ownTrackListening('late-summer-cloud-dance', 'Un morceau à moi, à écouter entre deux festivals.', lang),
    'first-mix': ownSetListening(0, lang),
    'second-mix': ownSetListening(1, lang)
  }),

  sources: [
    {html: `Dates de 2027 : ${[
      ['https://www.insomniac.com/', 'Insomniac'], ['https://movementfestival.com/faqs', 'FAQ de Movement'], ['https://www.basscanyon.com/', 'Bass Canyon'],
      ['https://www.electricforest.com/', 'Electric Forest'], ['https://www.lostlands.com/', 'Lost Lands']
    ].map(link).join(', ')} (EDC, EDC Orlando, Beyond Wonderland et Dreamstate chez Insomniac).`},
    {html: 'Dates et taille d’Ultra, Movement, ARC, Coachella, Lollapalooza et Burning Man : le guide de ce site sur chacun de ces festivals, lié plus haut, qui cite ses propres sources.'},
    {href: 'https://djmag.com/top100festivals', label: 'DJ Mag (en anglais) : Top 100 Festivals 2026'},
    {html: 'Déménagement de Beyond Wonderland Midwest au Chicagoland Speedway : Electronic Midwest, 15 juin 2026. Évacuation pour orage à Lost Lands 2026 : EDMTunes. Annulation de Bonnaroo 2027 : EDM Sauce. Faillite de l’exploitant d’Electric Zoo : presse sur le Chapter 11 d’Avant Gardner du 4 août 2025.'},
    {html: 'Genres, fondation et premier événement de HARD Summer : Wikipédia (en anglais).'}
  ],

  bandcamp: {
    description: 'Entre deux festivals, la musique que je fais moi-même : des breaks avec de la techno et du dub dedans. En acheter une sortie soutient directement mon travail.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 par thecatrave'},
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks par thecatrave'}
    ]
  }
};
