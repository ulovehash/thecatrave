// French Boiler Room guide. Figures, players, table and the Len Faki audio are
// the English page's (build-boiler-room-article.mjs), shared through
// content/boiler-room-shared.mjs; the French draft is
// fr/best-boiler-room-sets-draft.md. The summary banner is the draft's
// "Réponse" section.
import {boilerRoomMedia, anchors} from '../boiler-room-shared.mjs';

const text = {
  cities: {Tulum: 'Tulum', Ibiza: 'Ibiza', London: 'Londres', 'Montréal': 'Montréal', Tokyo: 'Tokyo', Berlin: 'Berlin', Amsterdam: 'Amsterdam', Ramallah: 'Ramallah'},
  millions: value => `${value} M`,
  tableHeaders: ['#', 'Set', 'Filmé à', 'Année', 'Vues', 'Likes', 'Likes pour 1 000 vues'],
  youtubeTitle: label => `${label}, sur la chaîne YouTube de Boiler Room`,
  ownMix: 'Entre les deux listes, un set qui n’a jamais été filmé : des breaks qui traversent la garage, la bass music, la techno et le grime. Mon propre mix.',
  band: {
    kicker: 'À écouter',
    title: 'Len Faki, Boiler Room Berlin, 2014.',
    description: 'La version audio publiée par Boiler Room du set classé onzième ci-dessous. Quatre-vingt-treize minutes de techno, et le test le plus juste pour savoir si un set fonctionne sans l’image.'
  },
  figures: {
    fred: {
      alt: 'Fred again.. sur scène au Crystal Palace Bowl à Londres',
      caption: 'Fred again.. au Crystal Palace Bowl, Londres, en août 2025, sur scène avec Skepta, trois ans après le set Boiler Room qui a plus de likes que tout autre. Photo : Raph_PH, CC BY 4.0.'
    },
    cox: {
      alt: 'Carl Cox aux platines à l’Amsterdam Dance Event en 2012',
      caption: 'Carl Cox à l’Amsterdam Dance Event en octobre 2012, dix mois avant le set de la villa qui reste le deuxième plus regardé des archives de Boiler Room. Photo : Sergey Kozak, CC BY 2.0.'
    },
    ez: {
      alt: 'DJ EZ en 2012',
      caption: 'DJ EZ en 2012, l’année de son Boiler Room de 45 minutes avec la Red Bull Music Academy, qui compte à lui seul 2,8 millions de vues. Le set de trois heures est venu deux ans plus tard. Photo : Gareth Morton, CC BY 2.0.'
    },
    sama: {
      alt: 'Sama’ Abdulhadi aux platines au Festival Internacional Cervantino à Guanajuato, au Mexique, en 2025',
      caption: 'Sama’ Abdulhadi au Festival Internacional Cervantino à Guanajuato, au Mexique, en 2025. Avant Ramallah en 2018, elle était une DJ locale respectée ; le set Boiler Room entre les deux est le cas le plus net des archives du format qui fait une carrière. Photo : TSolange, CC BY-SA 4.0.'
    },
    selector: {
      alt: 'Le Selector de thecatrave, limité à Boiler Room (interface en anglais)',
      caption: 'Le Selector limité à Boiler Room, la source de chaque chiffre de cette page (interface en anglais). <a href="/fr/selector">Ouvrez-le</a> et appuyez sur le bouton : un set Boiler Room, ou un du catalogue entier, choisi pour vous.'
    }
  }
};

export default {
  lang: 'fr',
  name: 'fr-best-boiler-room-sets',
  file: 'fr/meilleurs-sets-boiler-room.html',
  draft: 'fr/best-boiler-room-sets-draft.md',
  canonical: 'https://thecatrave.com/fr/meilleurs-sets-boiler-room',
  englishPath: '/best-boiler-room-sets',
  ogImage: 'https://thecatrave.com/img/og/best-boiler-room-sets.jpg',
  bodyClass: 'article-page boiler-room-page',

  title: 'Les meilleurs sets Boiler Room de tous les temps, classés',
  description: 'Les meilleurs sets Boiler Room, de Carl Cox à Ibiza à Fred again.. à Londres, à côté des plus regardés, comptés sur 8 206 enregistrements.',
  datePublished: '2026-10-01',
  dateModified: '2026-10-01',
  dateLabel: '1er octobre 2026',

  heroKicker: 'Boiler Room',
  heroTitle: 'Les meilleurs sets Boiler Room de tous les temps',
  deck: 'Deux listes, tenues séparées : les dix sets Boiler Room les plus regardés, mesurés sur 8 206 enregistrements, et dix-huit choisis pour ce qui s’y passe vraiment.',
  answerLabel: 'LES MEILLEURS SETS BOILER ROOM',
  breadcrumbName: 'Les meilleurs sets Boiler Room',

  answerSection: 'Réponse',
  introSection: 'Introduction',
  introTitle: 'Deux listes, tenues séparées.',
  faqSection: 'FAQ',
  faqLabel: 'FAQ',
  faqTitle: 'Sets Boiler Room : FAQ.',
  minReadingMinutes: 8,

  sections: [
    {id: 'what-makes', heading: 'Ce qui fait un grand set Boiler Room', title: 'Ce qui fait un grand set Boiler Room.', tocLabel: 'Ce qui fait un grand set'},
    {id: 'most-watched', heading: 'Les sets Boiler Room les plus regardés', title: 'Les sets Boiler Room les plus regardés.', kicker: 'Mesuré', tocLabel: 'Les sets les plus regardés'},
    {id: 'best', heading: 'Les meilleurs sets Boiler Room', title: 'Les meilleurs sets Boiler Room.', kicker: 'Classé', tocLabel: 'Les meilleurs sets, classés', subsections: anchors},
    {id: 'where-next', heading: 'Pour aller plus loin', title: 'Pour aller plus loin.', tocLabel: 'Pour aller plus loin'}
  ],
  media: ({lang}) => boilerRoomMedia({lang, text}),

  sources: [
    {href: 'https://boilerroom.tv/playlist/top-10-all-time/', label: 'Boiler Room: Top 10 All Time (en anglais)'},
    {href: 'https://en.wikipedia.org/wiki/Boiler_Room_%28music_broadcaster%29', label: 'Wikipedia: Boiler Room (music broadcaster) (en anglais)'},
    {href: 'https://en.wikipedia.org/wiki/Yousuke_Yukimatsu', label: 'Wikipedia: Yousuke Yukimatsu (en anglais)'},
    {href: 'https://www.vice.com/en/article/boiler-room-disclosure-b2b-skream/', label: 'Vice: Boiler Room, Disclosure b2b Skream (en anglais)'},
    {href: 'https://www.factmag.com/2014/01/31/dj-ez-to-play-three-hour-set-on-boiler-room-next-month/', label: 'Fact: DJ EZ to play three hour set on Boiler Room (en anglais)'},
    {href: 'https://www.setlist.fm/setlist/charli-xcx/2024/99-scott-ave-brooklyn-ny-3ab89fb.html', label: 'setlist.fm: Charli xcx at 99 Scott Ave, Brooklyn, 22 février 2024 (en anglais)'},
    {href: 'https://www.setlist.fm/setlist/underworld/2025/burgess-park-london-england-6b5812da.html', label: 'setlist.fm: Underworld at Burgess Park, 2 août 2025 (en anglais)'},
    {href: 'https://sonicstate.com/news/2022/08/11/fred-again-hybrid-set-for-boiler-room/', label: 'Sonicstate: Fred again.. hybrid set for Boiler Room (en anglais)'},
    {href: 'https://whynow.co.uk/read/best-boiler-room-sets', label: 'whynow: We rank the 10 best Boiler Room sets of all time (en anglais)'}
  ],
  sourcesNote: 'Les vues, les likes, les durées et les taux de likes sont mesurés d’après le catalogue de ce site, 62 877 DJ sets enregistrés dont 8 206 de Boiler Room, à la date de septembre 2026.',

  bandcamp: {
    description: 'La plupart des gens regardent un DJ de près pour la première fois à Boiler Room. Voici les miens, du côté breaks et bass. En acheter un soutient directement mon travail.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks par thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 par thecatrave'}
    ]
  }
};
