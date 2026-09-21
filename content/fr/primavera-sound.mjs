// French Primavera Sound guide. Structure and facts from the English page
// (primavera-sound-draft.md, primavera-sound-research.md,
// build-primavera-sound-article.mjs).
//
// French keywords, measured 2026-09-18 with keywords-explorer-matching-terms,
// country fr (keywords/fr-primavera-sound.json): primavera sound 800 a month,
// primavera sound barcelona 100, and primavera sound 2027 as the next edition.
// The 2026 and 2025 editions and the line-ups are rejected in the map.
//
// The images are the English guide's, in img/primavera-sound/, with translated
// captions; see home-articles.mjs for why a translation may reuse them.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, articleYoutubeEmbed, ownTrackListening
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption, className = 'wide-archive-image') => articleFigure({
  src: `img/primavera-sound/${name}-${width}.webp`,
  srcset: `img/primavera-sound/${name}-320.webp 320w, img/primavera-sound/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className
});

const commonsLink = file =>
  `<a href="https://commons.wikimedia.org/wiki/${encodeURIComponent(`File:${file}`)}" target="_blank" rel="noopener noreferrer">Source ↗</a>`;

export default {
  lang: 'fr',
  name: 'fr-primavera-sound',
  file: 'fr/primavera-sound-barcelona.html',
  draft: 'fr/primavera-sound-draft.md',
  canonical: 'https://thecatrave.com/fr/primavera-sound-barcelona',
  englishPath: '/primavera-sound-barcelona',
  ogImage: 'https://thecatrave.com/img/og/primavera-sound.jpg',
  bodyClass: 'article-page primavera-sound-page',

  title: 'Primavera Sound Barcelona 2027 : dates, lieu et musique',
  description: 'Primavera Sound Barcelona 2027 a lieu du 3 au 5 juin au Parc del Fòrum. Le site face à la mer, la taille, la musique, Primavera a la Ciutat et Porto.',
  datePublished: '2026-09-18',
  dateModified: '2026-09-18',
  dateLabel: '18 septembre 2026',

  heroKicker: 'Primavera Sound',
  heroTitle: 'Primavera Sound Barcelona',
  deck: 'Le programme principal de Barcelone revient au Parc del Fòrum les 3, 4 et 5 juin 2027. Voici le site face à la mer, la taille, la musique et le lien avec Porto.',
  answerLabel: 'Qu’est-ce que Primavera Sound',
  breadcrumbName: 'Primavera Sound Barcelona',

  answerSection: 'Réponse',
  introSection: 'Introduction',
  introTitle: 'Un festival construit sur la diversité.',
  faqSection: 'FAQ',
  faqLabel: 'Questions fréquentes',
  faqTitle: 'Questions fréquentes sur Primavera Sound.',
  ownSetAfter: 'music',

  sections: [
    {id: 'what-is', heading: 'Qu’est-ce que Primavera Sound ?', title: 'Qu’est-ce que Primavera Sound ?'},
    {id: 'dates-location', heading: 'Primavera Sound Barcelona : dates et lieu', title: 'Primavera Sound Barcelona : dates et lieu.'},
    {id: 'how-big', heading: 'Quelle est la taille de Primavera Sound ?', title: 'Quelle est la taille de Primavera Sound ?'},
    {id: 'music', heading: 'Quelle musique joue-t-on à Primavera Sound ?', title: 'Quelle musique joue-t-on à Primavera Sound ?', kicker: 'La musique'},
    {id: 'a-la-ciutat', heading: 'Primavera a la Ciutat', title: 'Primavera a la Ciutat.'},
    {id: 'porto', heading: 'Primavera Sound Porto', title: 'Primavera Sound Porto.'}
  ],

  media: ({lang}) => ({
    // The owner's own music inside the text (owner, 2026-09-21: Berlin Race
    // 1909 on the German pages, Dégénération on the French, and art deco with
    // late summer cloud dance in the drum and bass guides).
    'thecatrave degeneration': ownTrackListening('degeneration', 'Loin des grandes scènes : la voix de Mylène Farmer sur des breaks, entre dubstep et UK garage. Mon propre remix.', lang),
    'Primavera stage crowd': figure('festival-crowd', 1200, 800,
      'Des festivaliers au bord de l’eau à Primavera Sound Barcelona en 2019, sous un ciel bleu dégagé',
      `Le public de Primavera Sound Barcelona en 2019, avec le site ouvert sur l’eau autour. Photo : John Lubbock, CC BY-SA 4.0. ${commonsLink('Primavera stage crowd.jpg')}`,
      'full-bleed'),
    'Created in Barcelona': figure('created-in-barcelona', 1200, 800,
      'Un public de nuit à Primavera Sound, au-dessus des structures du festival une enseigne lumineuse Created in Barcelona',
      `Primavera Sound la nuit en 2019 : le festival met en avant son origine barcelonaise, même après que son public est devenu international. Photo : John Lubbock, CC BY-SA 4.0. ${commonsLink('Primavera Sound main stages area at night.jpg')}`),
    'Parc del Fòrum beside': figure('parc-forum', 1200, 675,
      'La grande canopée photovoltaïque et les structures en béton du Parc del Fòrum, avec la Méditerranée derrière',
      `Le Parc del Fòrum sans les installations du festival : terrasses en béton, canopée photovoltaïque et Méditerranée. Photo : Pere López Brosa, CC BY-SA 4.0. ${commonsLink('Parc del Fòrum - 20191213 143043.jpg')}`),
    'Peggy Gou at': figure('peggy-gou', 1200, 800,
      'Peggy Gou aux platines sur la scène Ray-Ban de Primavera Sound en 2019, sous des lumières violettes et jaunes, devant une foule dense',
      `Peggy Gou sur la scène Ray-Ban, Primavera Sound Barcelona 2019. Photo : John Lubbock, CC BY-SA 4.0. ${commonsLink('Peggy Gou, Ray-Ban stage.jpg')}`),
    'Samantha Hudson and John Waters': figure('primavera-pro', 1200, 900,
      'Samantha Hudson et John Waters assis en conversation sur la scène de Primavera Pro en 2022',
      `L’artiste Samantha Hudson et le cinéaste John Waters discutent de goûts musicaux à Primavera Pro en 2022. Photo : Nacaru, CC BY-SA 4.0. ${commonsLink('Samantha Hudson and John Waters in Primavera Pro.jpg')}`),
    'Fontaines D.C. at': figure('porto-stage', 1200, 800,
      'Fontaines D.C. sur la grande scène de Primavera Sound Porto, la nuit, en 2025',
      `Fontaines D.C. à Primavera Sound Porto en 2025. Photo : Boredintheevening, CC BY 4.0. ${commonsLink('Fontaines D.C performing at Primavera Sound Porto 2025.tif')}`),
    'uhAp3o71U48': articleVideoCollection({
      lang: 'fr',
      label: 'Primavera Sound Barcelona sur Boiler Room',
      description: 'Deux parcours dans la musique de club brésilienne, filmés par Boiler Room à Primavera Sound Barcelona : DJ Ramon Sucesso en 2024 et Badsista en 2022.',
      items: [
        articleVideoCard({youtubeId: 'uhAp3o71U48', genre: 'Boiler Room, 2024', artist: 'DJ Ramon Sucesso', title: 'Primavera Sound Barcelona'}),
        articleVideoCard({youtubeId: 'KkhwjIVDHGc', genre: 'Boiler Room, 2022', artist: 'Badsista', title: 'Primavera Sound Barcelona'})
      ]
    }),
    'srV4AgUc104': articleYoutubeEmbed({
      src: 'https://www.youtube-nocookie.com/embed/srV4AgUc104',
      title: 'Alan Sparhawk, set officiel à Primavera Sound Porto 2025'
    }),
    'Table: milestones': articleTable({
      headers: ['Année', 'Ce qui a changé'],
      rows: [
        ['2001', 'Premier Primavera Sound d’une journée au Poble Espanyol ; environ 7 700 billets'],
        ['2004', 'Le festival de Barcelone passe à trois jours'],
        ['2005', 'Installation au Parc del Fòrum'],
        ['2008', 'Le programme dans les salles de la ville devient Primavera a la Ciutat'],
        ['2012', 'Premier Primavera Sound Porto'],
        ['2019', 'Une affiche paritaire présentée sous le nom The New Normal'],
        ['2022', 'Édition exceptionnelle sur deux week-ends à Barcelone après les annulations de la pandémie'],
        ['2027', 'Programme principal de Barcelone prévu du 3 au 5 juin au Parc del Fòrum']
      ].map(row => row.map(escapeHtml)),
      label: 'Les étapes de Primavera Sound'
    })
  }),

  sources: [
    {href: 'https://www.primaverasound.com/en/barcelona', label: 'Primavera Sound Barcelona : site officiel'},
    {href: 'https://assets.primaverasound.com/psb/docs/condicionesEntradas_en.html', label: 'Primavera Sound Barcelona : conditions officielles de billetterie et d’âge'},
    {href: 'https://parcdelforum.barcelona/en/parc-forum/the-park', label: 'Parc del Fòrum : guide officiel du site'},
    {href: 'https://www.catalannews.com/culture/item/in-photos-primavera-sound-draws-287000-festivalgoers-after-rain-hit-opening-day', label: 'Catalan News : prochaines dates et accord sur le Parc del Fòrum'},
    {href: 'https://www.rtve.es/noticias/20250607/primavera-sound-registra-293000-asistentes-300-millones-retorno-para-barcelona/16615374.shtml', label: 'RTVE : fréquentation et public international de Primavera Sound'},
    {href: 'https://assets.primaverasound.com/ps-single/download/prensa/psb/2016/dossier/Press_dossier_Primavera_Sound_2016_.pdf', label: 'Primavera Sound : dossier de presse historique'},
    {href: 'https://assets.primaverasound.com/ps-single/download/prensa/psb/2015/dossier/Press_dossier_Primavera_Sound_2015.pdf', label: 'Primavera Sound : Primavera a la Ciutat et histoire du festival'},
    {href: 'https://assets.primaverasound.com/ps-single/download/prensa/pso/2016/dossier/NPS16_Conf._Imprensa_Dossier_Imprensa_Digital_ES_PN_20160204132533.pdf', label: 'Primavera Sound Porto : dossier de presse historique officiel'},
    {href: 'https://boilerroom.tv/session/primavera-sound-barcelona-2024/', label: 'Boiler Room : session à Primavera Sound Barcelona'},
    {href: 'https://en.wikipedia.org/wiki/Primavera_Sound', label: 'Wikipedia : Primavera Sound, chronologie et sources'}
  ],

  bandcamp: {
    description: 'Primavera fait de la place à la musique de club à côté des groupes, de la pop et des expériences. Ma propre musique, c’est le breakbeat. Acheter un morceau soutient directement ce site.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks par thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 par thecatrave'}
    ]
  }
};
