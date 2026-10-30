// French winter festivals guide. Structure, facts, dates and the Confirmée/Listée labels
// from the English page (best-winter-music-festivals-draft.md, build-winter-festivals-article.mjs),
// checked there on 4 October 2026, via the Spanish page (content/es/winter-festivals.mjs).
//
// French wording: "festivals d'hiver" and "festivals dans la neige" as the Spanish SERP did for
// "festivales de invierno" / "festivales en la nieve"; the google.fr SERP could not be read
// (Claude in Chrome was not connected on 30 Oct 2026), so the terms are not measured or
// SERP-qualified yet (keywords/fr-winter-festivals.json). Re-check in Search Console.
//
// Maintenance: registered in festival-editions.mjs with the other roundups; re-read every row
// when the English page's dates change.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, ownSetListening
} from '../../site-components.mjs';

const fig = (name, width, height, alt, caption) => articleFigure({
  src: `img/winter-festivals/${name}-1200.webp`,
  srcset: `img/winter-festivals/${name}-320.webp 320w, img/winter-festivals/${name}-1200.webp 1200w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

export default {
  lang: 'fr',
  name: 'fr-winter-festivals',
  file: 'fr/festivals-hiver.html',
  draft: 'fr/winter-festivals-draft.md',
  canonical: 'https://thecatrave.com/fr/festivals-hiver',
  englishPath: '/best-winter-music-festivals',
  ogImage: 'https://thecatrave.com/img/og/winter-festivals.jpg',
  bodyClass: 'article-page winter-festivals-page',
  minReadingMinutes: 7,

  title: 'Festivals d’hiver 2027 : Snowbombing, Igloofest, CTM',
  description: 'Festivals de musique électronique en hiver 2027, de Tomorrowland Winter et Snowbombing à CTM et Shapes, avec dates confirmées ou non.',
  datePublished: '2026-10-30',
  dateModified: '2026-10-30',
  dateLabel: '30 octobre 2026',

  heroKicker: 'Guide des festivals 2027',
  heroTitle: 'Les meilleurs festivals de musique électronique en hiver 2027',
  deck: 'Quels festivals d’hiver sont les plus grands, lesquels sont les meilleurs pour la house et la techno en montagne et lesquels recommande la presse spécialisée, avec chaque date marquée comme confirmée ou non.',
  answerLabel: 'Festivals d’hiver 2027',
  breadcrumbName: 'Festivals d’hiver',

  answerSection: 'Réponse',
  introSection: 'Introduction',
  introTitle: 'Un voyage différent d’un festival d’été.',
  faqSection: 'FAQ',
  faqLabel: 'Questions fréquentes sur les festivals d’hiver',
  faqTitle: 'Questions fréquentes sur les festivals d’hiver.',

  sections: [
    {id: 'method', heading: 'Comment cette liste a été établie', title: 'Comment cette liste a été établie.'},
    {id: 'dates', heading: 'Les dates des festivals d’hiver 2027 en un coup d’œil', title: 'Les dates des festivals d’hiver 2027 en un coup d’œil.', tocLabel: 'Les dates en un coup d’œil'},
    {id: 'biggest', heading: 'Quels sont les plus grands festivals d’hiver ?', title: 'Quels sont les plus grands festivals d’hiver ?', tocLabel: 'Les plus grands',
      subsections: ['tomorrowland-winter', 'snowbombing', 'igloofest', 'snow-machine', 'nameless-winter', 'contact-winter']},
    {id: 'mountain', heading: 'Quels festivals d’hiver sont les meilleurs pour la house et la techno en montagne ?', title: 'Quels festivals d’hiver sont les meilleurs pour la house et la techno en montagne ?', tocLabel: 'House et techno en montagne',
      subsections: ['hibernation', 'caprices', 'shapes']},
    {id: 'quiet', heading: 'Quels festivals d’hiver recommande la presse spécialisée ?', title: 'Quels festivals d’hiver recommande la presse spécialisée ?', tocLabel: 'Ceux que recommande la presse',
      subsections: ['ctm', 'elevate', 'rise', 'astropolis-l-hiver']},
    {id: 'choose', heading: 'Comment choisir', title: 'Comment choisir.'}
  ],

  media: ({lang}) => ({
    'Table: dates': articleTable({label: 'Dates des festivals d’hiver 2027',
      headers: ['Festival', 'Où', 'Dates', 'Source'],
      rows: [
        ['Rise', 'Les 2 Alpes, France', '5 au 12 décembre 2026', 'Listée'],
        ['Contact Winter', 'Vancouver, Canada', '26 et 27 décembre 2026', 'Listée'],
        ['Igloofest', 'Montréal, Canada', '14 janvier au 6 février 2027', 'Confirmée'],
        ['CTM', 'Berlin, Allemagne', '22 au 31 janvier 2027', 'Confirmée'],
        ['Astropolis l’Hiver', 'Brest, France', 'Février 2027, dates non annoncées', 'Non confirmée'],
        ['Nameless Winter', 'Barzio, Italie', '13 et 14 février 2027', 'Listée'],
        ['Snow Machine', 'Hakuba, Japon', '2 au 7 mars 2027', 'Listée'],
        ['Elevate', 'Graz, Autriche', '4 au 7 mars 2027', 'Confirmée'],
        ['Caprices', 'Gstaad, Suisse', '12 au 14 et 19 au 21 mars 2027', 'Listée'],
        ['Shapes', 'Leysin, Suisse', '15 au 21 mars 2027', 'Confirmée'],
        ['Hibernation', 'Pas de la Casa, Andorre', '19 au 21 mars 2027', 'Listée, peu fiable'],
        ['Tomorrowland Winter', 'Alpe d’Huez, France', '20 au 27 mars 2027', 'Listée'],
        ['Snowbombing', 'Mayrhofen, Autriche', '5 au 10 avril 2027', 'Confirmée']
      ]}),
    'alpe-dhuez': fig('alpe-dhuez-2026', 1200, 800,
      'La vue depuis le Pic Blanc sur l’Alpe d’Huez en avril 2026',
      'La vue depuis le Pic Blanc sur l’Alpe d’Huez, avril 2026. Photo : DimiTalen, CC0.'),
    'igloofest': fig('igloofest-2009', 1200, 800,
      'Igloofest à Montréal en janvier 2009',
      'Igloofest à Montréal, janvier 2009. Photo : Francis Bourgouin, CC BY 2.0.'),
    'gstaad': fig('gstaad-village', 1200, 900,
      'Un panorama du village de Gstaad, en Suisse',
      'Gstaad, Suisse, novembre 2011. Photo : GstaadTourismus, CC BY-SA 3.0.'),
    'leysin': fig('leysin-twilight', 1200, 675,
      'Leysin, en Suisse, au crépuscule',
      'Crépuscule à Leysin, Suisse. Photo : Deali00, CC BY-SA 4.0.'),
    'elevate': fig('elevate-2019-truth', 1200, 800,
      'Des lettres blanches formant le mot Truth, suspendues devant un rideau noir à l’Elevate Festival 2019, à Graz',
      '« Truth », le thème de l’Elevate Festival 2019 à Graz. Photo : Jean-Frédéric, CC0.'),
    'caprices-set': articleVideoCollection({
      lang, label: 'Caprices, depuis chez soi',
      description: 'Une diffusion Beatport depuis Caprices, 2021.',
      items: [articleVideoCard({youtubeId: '9nJngddp7XA', genre: 'Caprices, 2021', artist: 'Beatport', title: 'Beatport X Caprices'})]
    }),
    'owner-first': ownSetListening(0, lang),
    'owner-second': ownSetListening(1, lang)
  }),

  sources: [
    {html: 'Dates confirmées : <a href="https://igloofest.ca" target="_blank" rel="noopener noreferrer">Igloofest</a>, <a href="https://ctm-festival.de" target="_blank" rel="noopener noreferrer">CTM Festival</a>, <a href="https://elevate.at" target="_blank" rel="noopener noreferrer">Elevate</a>, <a href="https://shapesfestival.ch" target="_blank" rel="noopener noreferrer">Shapes</a> et <a href="https://snowbombing.com/info" target="_blank" rel="noopener noreferrer">Snowbombing</a>.'},
    {html: 'Dates listées (sites de festivals, de billetterie et d’organisateurs, avec une seconde source pour chacune) : Tomorrowland Winter, Snow Machine, Nameless Winter, Caprices, Hibernation, Rise et Contact Winter.'},
    {html: 'Couverture de la presse spécialisée des options plus calmes : Resident Advisor (CTM, Elevate, Shapes, Rise, Caprices), Pitchfork (CTM) et The Quietus (Elevate).'}
  ],

  bandcamp: {
    description: 'Entre deux festivals, la musique que je fais moi-même. En acheter une sortie soutient directement mon travail.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 par thecatrave'},
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks par thecatrave'}
    ]
  }
};
