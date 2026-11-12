// French Time Warp guide. Structure and facts from the English page
// (time-warp-draft.md), via the German sibling (content/de/time-warp-festival.mjs),
// which read time-warp.de, its ticket shop and the Madrid statement: keep them aligned.
// The EDC Colombia row follows the English draft (10 October 2026), not de.
//
// fr-FR SERP read on 2026-11-12: related searches "Time Warp Mannheim 2027",
// tickets, line up. Keyword Planner festival seeds were not run in this batch.
//
// Images are the English guide's, in img/time-warp/, with translated captions.
import {localizedFestivalPlanning} from '../festival-planning-data.mjs';
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, ownSetListening
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/time-warp/${name}-1200.webp`,
  srcset: `img/time-warp/${name}-320.webp 320w, img/time-warp/${name}-1200.webp 1200w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

const ext = (href, text) => `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`;

export default {
  lang: 'fr',
  name: 'fr-time-warp-festival',
  file: 'fr/time-warp-festival.html',
  draft: 'fr/time-warp-festival-draft.md',
  canonical: 'https://thecatrave.com/fr/time-warp-festival',
  englishPath: '/time-warp-festival',
  ogImage: 'https://thecatrave.com/img/og/time-warp.jpg',
  bodyClass: 'article-page time-warp-page',
  minReadingMinutes: 6,

  title: 'Time Warp 2027 : Mannheim, billetterie et programmation',
  description: 'Time Warp 2027 a lieu le 3 avril à Mannheim : prix des billets, éditions hors d’Allemagne et ce qui est arrivé à Time Warp Madrid 2026, annulé.',
  datePublished: '2026-11-12',
  dateModified: '2026-11-12',
  dateLabel: '12 novembre 2026',

  heroKicker: 'Guide des festivals 2027',
  heroTitle: 'Time Warp 2027 : Mannheim, billetterie et programmation',
  deck: 'Le festival techno et house né en 1994 : quand a lieu l’original de Mannheim en 2027, quelles villes ont une édition, comment fonctionnent les billets, qui joue et ce qui s’est passé à Madrid.',
  answerLabel: 'Time Warp 2027',
  breadcrumbName: 'Time Warp',

  answerSection: 'Réponse',
  introSection: 'Introduction',
  introTitle: 'Un nom, plusieurs festivals.',
  faqSection: 'FAQ',
  faqLabel: 'Questions fréquentes',
  faqTitle: 'Questions fréquentes sur Time Warp.',

  sections: [
    {id: 'what-is', heading: 'Qu’est-ce que Time Warp ?', title: 'Qu’est-ce que Time Warp ?', tocLabel: 'Qu’est-ce que Time Warp ?'},
    {id: 'dates', heading: 'Quand a lieu Time Warp 2027 ?', title: 'Quand a lieu Time Warp 2027 ?', tocLabel: 'Dates 2027'},
    {id: 'where', heading: 'La Maimarkthalle de Mannheim', title: 'La Maimarkthalle de Mannheim.', tocLabel: 'Où il a lieu'},
    {id: 'editions', heading: 'Quelles éditions de Time Warp existent hors de Mannheim ?', title: 'Quelles éditions de Time Warp existent hors de Mannheim ?', tocLabel: 'Éditions hors de Mannheim'},
    {id: 'madrid-2026', heading: 'Time Warp Madrid 2026 a-t-il été annulé ?', title: 'Time Warp Madrid 2026 a-t-il été annulé ?', tocLabel: 'Madrid 2026'},
    {id: 'tickets', heading: 'Billets et pass pour Time Warp', title: 'Billets et pass pour Time Warp.', tocLabel: 'Billets'},
    {id: 'planning', heading: 'Accès et préparation du voyage à Mannheim', tocLabel: 'Voyage et préparation', title: 'Préparez votre voyage à Time Warp Mannheim.', planning: localizedFestivalPlanning('timewarp', 'fr')},
    {id: 'lineup', heading: 'La programmation de Time Warp', title: 'La programmation de Time Warp.', tocLabel: 'Qui joue'},
    {id: 'listen', heading: 'Des sets de Time Warp à écouter', title: 'Des sets de Time Warp à écouter.', tocLabel: 'Sets à écouter'}
  ],

  media: ({lang}) => ({
    'thecatrave mix 1': ownSetListening(0, lang),
    'thecatrave mix 2': ownSetListening(1, lang),
    'Image: crowd-2006': figure('tdk-2006', 1200, 900,
      'Une piste pleine devant une scène avec des murs vidéo à Time Warp 2006',
      'Le public de Time Warp, 2006. Photo : ftf, CC BY-SA 2.5.'),
    'Image: neo-quimica': figure('neo-quimica-arena', 1200, 675,
      'Le stade Neo Química Arena de São Paulo de nuit, avec un écran géant sur la façade',
      'La Neo Química Arena de São Paulo, lieu de Time Warp Brasil en 2026, photographiée en 2018 sous le nom Arena Corinthians. Photo : Jorge Morales Piderit, CC0.'),
    'Image: kruse-2016': figure('monika-kruse-2016', 1200, 800,
      'Monika Kruse aux platines à Time Warp à Mannheim, elle tape dans la main d’une personne devant la cabine',
      'Monika Kruse à Time Warp à Mannheim, 2 avril 2016. Photo : Klaus Dieter Kieslich, CC BY-SA 4.0.'),
    'Embed: festival set': articleVideoCollection({
      lang,
      label: 'Time Warp, à écouter chez soi',
      description: 'Loco Dice pour Mixmag, sous le titre Time Warp 2018.',
      items: [
        articleVideoCard({youtubeId: '9EkbEJuLzFo', genre: 'Time Warp', artist: 'Loco Dice', title: 'LOCO DICE. Time Warp 2018'})
      ]
    }),
    'Embed: new york sets': articleVideoCollection({
      lang,
      label: 'Time Warp US, dans un studio à New York',
      description: 'Trois sets Mixmag enregistrés à The Lab NYC sous le nom Time Warp US.',
      items: [
        articleVideoCard({youtubeId: 'IliynzY39jE', genre: 'Time Warp US', artist: 'Seth Troxler', title: 'Time Warp US | Seth Troxler soulful deep tech set in The Lab NYC'}),
        articleVideoCard({youtubeId: 'eAmsviQcvhg', genre: 'Time Warp US', artist: 'Monkey Safari', title: 'Time Warp US | Monkey Safari house set in The Lab NYC'}),
        articleVideoCard({youtubeId: 'T62-tdTu3BI', genre: 'Time Warp US', artist: 'Thugfucker', title: 'Time Warp US | Thugfucker tech-house set in The Lab NYC'})
      ]
    }),
    'Table: editions': articleTable({
      label: 'Éditions de Time Warp',
      headers: ['Édition', 'Lieu', 'Dates', 'État'],
      rows: [
        ['Time Warp Miami', 'Factory Town, Miami', '25 avril 2026', 'Passée'],
        ['Time Warp Brasil', 'Neo Química Arena, São Paulo', '1er et 2 mai 2026', 'Passée'],
        ['Time Warp Spain', 'IFEMA Madrid, hall 12', '18 et 19 septembre 2026', 'Annulée, billets remboursés'],
        ['TW x EDC Colombia', 'Atanasio Girardot Sports Complex, Medellín', '10 octobre 2026', 'Une scène Neon Garden'],
        ['Time Warp Mexico', 'Expo Santa Fe, Mexico', '20 et 21 novembre 2026', 'À venir, billets en vente'],
        ['Time Warp New York', 'Duggal Greenhouse et Agger Building, New York', '20 et 21 novembre 2026', 'À venir, annoncée en save the date'],
        ['Time Warp Los Angeles', 'ACE*Mission, Los Angeles', '27 et 28 novembre 2026', 'À venir, billets en vente']
      ].map(row => row.map(escapeHtml))
    })
  }),

  sources: [
    {html: `Dates, éditions, billets et règles : ${ext('https://www.time-warp.de', 'time-warp.de')} et la ${ext('https://tickets.time-warp.de', 'billetterie')} (en anglais).`},
    {html: `Annulation de Time Warp Spain 2026 : ${ext('https://www.time-warp.de/page/tw-madrid-2026---official-statement/', 'communiqué officiel du festival')}, en anglais et en espagnol.`},
    {html: `Origine et première édition, 26 novembre 1994 : ${ext('https://en.wikipedia.org/wiki/Time_Warp_(festival)', 'Wikipedia')} (en anglais).`}
  ],

  bandcamp: {
    description: 'Entre deux festivals, la musique que je fais moi-même. En acheter une soutient directement mon travail.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 de thecatrave'},
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks de thecatrave'}
    ]
  }
};
