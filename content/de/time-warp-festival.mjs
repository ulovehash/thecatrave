// German Time Warp guide. Structure and facts from the English page
// (time-warp-draft.md) and the Spanish sibling (content/es/time-warp-festival.mjs),
// which read time-warp.de, its ticket shop and the Madrid statement: keep them aligned.
//
// de-DE SERP read in Chrome on 2026-11-12 ("time warp 2027"): Time Warp Mannheim
// 2027 on 3 April; People also ask "Was ist die Time Warp in Mannheim?", "Gibt es
// ein Techno-Festival in Mannheim?", "Bis wann geht die Time Warp?". Keyword
// Planner gave no German volumes for this page.
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
  lang: 'de',
  name: 'de-time-warp-festival',
  file: 'de/time-warp-festival.html',
  draft: 'de/time-warp-festival-draft.md',
  canonical: 'https://thecatrave.com/de/time-warp-festival',
  englishPath: '/time-warp-festival',
  ogImage: 'https://thecatrave.com/img/og/time-warp.jpg',
  bodyClass: 'article-page time-warp-page',
  minReadingMinutes: 6,

  title: 'Time Warp 2027: Mannheim, Tickets und Line-up',
  description: 'Time Warp 2027 ist am 3. April in Mannheim: Ticketpreise, Ausgaben außerhalb Deutschlands und was mit der abgesagten Time Warp Madrid 2026 passiert ist.',
  datePublished: '2026-11-12',
  dateModified: '2026-11-12',
  dateLabel: '12. November 2026',

  heroKicker: 'Festival-Guide, 2027',
  heroTitle: 'Time Warp 2027: Mannheim, Tickets und Line-up',
  deck: 'Das Techno- und House-Festival von 1994: wann das Mannheimer Original 2027 ist, welche Städte eine Ausgabe haben, wie die Tickets funktionieren, wer spielt und was mit Madrid war.',
  answerLabel: 'Time Warp 2027',
  breadcrumbName: 'Time Warp',

  answerSection: 'Antwort',
  introSection: 'Einleitung',
  introTitle: 'Ein Name, mehrere Festivals.',
  faqSection: 'FAQ',
  faqLabel: 'Häufige Fragen',
  faqTitle: 'Häufige Fragen zur Time Warp.',

  sections: [
    {id: 'what-is', heading: 'Was ist die Time Warp?', title: 'Was ist die Time Warp?', tocLabel: 'Was ist die Time Warp?'},
    {id: 'dates', heading: 'Wann ist Time Warp 2027?', title: 'Wann ist Time Warp 2027?', tocLabel: 'Termine 2027'},
    {id: 'where', heading: 'Die Maimarkthalle in Mannheim', title: 'Die Maimarkthalle in Mannheim.', tocLabel: 'Wo sie stattfindet'},
    {id: 'editions', heading: 'Welche Ausgaben der Time Warp gibt es außerhalb von Mannheim?', title: 'Welche Ausgaben der Time Warp gibt es außerhalb von Mannheim?', tocLabel: 'Ausgaben außerhalb Mannheims'},
    {id: 'madrid-2026', heading: 'Wurde Time Warp Madrid 2026 abgesagt?', title: 'Wurde Time Warp Madrid 2026 abgesagt?', tocLabel: 'Madrid 2026'},
    {id: 'tickets', heading: 'Tickets und Pässe für die Time Warp', title: 'Tickets und Pässe für die Time Warp.', tocLabel: 'Tickets'},
    {id: 'planning', heading: 'Anreise und Reiseplanung nach Mannheim', tocLabel: 'Reise und Planung', title: 'Plane deine Reise zur Time Warp Mannheim.', planning: localizedFestivalPlanning('timewarp', 'de')},
    {id: 'lineup', heading: 'Das Line-up der Time Warp', title: 'Das Line-up der Time Warp.', tocLabel: 'Wer spielt'},
    {id: 'listen', heading: 'Time-Warp-Sets zum Reinhören', title: 'Time-Warp-Sets zum Reinhören.', tocLabel: 'Sets zum Hören'}
  ],

  media: ({lang}) => ({
    'thecatrave mix 1': ownSetListening(0, lang),
    'thecatrave mix 2': ownSetListening(1, lang),
    'Image: crowd-2006': figure('tdk-2006', 1200, 900,
      'Ein voller Dancefloor vor einer Bühne mit Videowänden auf der Time Warp 2006',
      'Das Publikum der Time Warp, 2006. Foto: ftf, CC BY-SA 2.5.'),
    'Image: neo-quimica': figure('neo-quimica-arena', 1200, 675,
      'Das Stadion Neo Química Arena in São Paulo bei Nacht, mit einer Riesenleinwand an der Außenwand',
      'Die Neo Química Arena in São Paulo, 2026 Ort von Time Warp Brasil, 2018 als Arena Corinthians fotografiert. Foto: Jorge Morales Piderit, CC0.'),
    'Image: kruse-2016': figure('monika-kruse-2016', 1200, 800,
      'Monika Kruse an den Decks auf der Time Warp in Mannheim, sie klatscht eine Person vor dem DJ-Pult ab',
      'Monika Kruse auf der Time Warp in Mannheim, 2. April 2016. Foto: Klaus Dieter Kieslich, CC BY-SA 4.0.'),
    'Embed: festival set': articleVideoCollection({
      lang,
      label: 'Time Warp, zum Hören zu Hause',
      description: 'Loco Dice für Mixmag, mit dem Titel Time Warp 2018.',
      items: [
        articleVideoCard({youtubeId: '9EkbEJuLzFo', genre: 'Time Warp', artist: 'Loco Dice', title: 'LOCO DICE. Time Warp 2018'})
      ]
    }),
    'Embed: new york sets': articleVideoCollection({
      lang,
      label: 'Time Warp US, in einem Studio in New York',
      description: 'Drei Mixmag-Sets, aufgenommen in The Lab NYC unter dem Namen Time Warp US.',
      items: [
        articleVideoCard({youtubeId: 'IliynzY39jE', genre: 'Time Warp US', artist: 'Seth Troxler', title: 'Time Warp US | Seth Troxler soulful deep tech set in The Lab NYC'}),
        articleVideoCard({youtubeId: 'eAmsviQcvhg', genre: 'Time Warp US', artist: 'Monkey Safari', title: 'Time Warp US | Monkey Safari house set in The Lab NYC'}),
        articleVideoCard({youtubeId: 'T62-tdTu3BI', genre: 'Time Warp US', artist: 'Thugfucker', title: 'Time Warp US | Thugfucker tech-house set in The Lab NYC'})
      ]
    }),
    'Table: editions': articleTable({
      label: 'Ausgaben der Time Warp',
      headers: ['Ausgabe', 'Wo', 'Termine', 'Stand'],
      rows: [
        ['Time Warp Miami', 'Factory Town, Miami', '25. April 2026', 'Stattgefunden'],
        ['Time Warp Brasil', 'Neo Química Arena, São Paulo', '1. und 2. Mai 2026', 'Stattgefunden'],
        ['Time Warp Spain', 'IFEMA Madrid, Halle 12', '18. und 19. September 2026', 'Abgesagt, Tickets erstattet'],
        ['TW x EDC Colombia', 'Atanasio Girardot Sports Complex, Medellín', '12. November 2026', 'Un escenario Neon Garden'],
        ['Time Warp Mexico', 'Expo Santa Fe, Mexiko-Stadt', '20. und 21. November 2026', 'Kommend, Tickets im Verkauf'],
        ['Time Warp New York', 'Duggal Greenhouse und Agger Building, New York', '20. und 21. November 2026', 'Kommend, als Save the Date markiert'],
        ['Time Warp Los Angeles', 'ACE Mission, Los Angeles', '27. und 28. November 2026', 'Kommend, Tickets im Verkauf']
      ].map(row => row.map(escapeHtml))
    })
  }),

  sources: [
    {html: `Termine, Ausgaben, Tickets und Regeln: ${ext('https://www.time-warp.de', 'time-warp.de')} und der ${ext('https://tickets.time-warp.de', 'Ticketshop')} (auf Englisch).`},
    {html: `Absage von Time Warp Spain 2026: ${ext('https://www.time-warp.de/page/tw-madrid-2026---official-statement/', 'offizielle Mitteilung des Festivals')}, auf Englisch und Spanisch.`},
    {html: `Ursprung und erste Ausgabe, 26. November 1994: ${ext('https://en.wikipedia.org/wiki/Time_Warp_(festival)', 'Wikipedia')} (auf Englisch).`}
  ],

  bandcamp: {
    description: 'Zwischen den Festivals: die Musik, die ich selbst mache. Ein Kauf unterstützt meine Arbeit direkt.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 von thecatrave'},
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks von thecatrave'}
    ]
  }
};
