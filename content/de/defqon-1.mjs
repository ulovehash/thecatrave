// German Defqon.1 guide. Structure and facts from the English page
// (defqon-1-draft.md) and the Spanish sibling (content/es/defqon-1.mjs), which
// read the Q-dance pages, IQ Magazine and NL Times: keep them aligned.
//
// de-DE SERP read in Chrome on 2026-11-12 ("defqon 1 2027"): People also ask
// "Wann werden Defqon.1 Tickets verkauft?", "Ist Defqon.1 2026 abgesagt?".
// Keyword Planner gave no German volumes for these terms in this batch.
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
  lang: 'de',
  name: 'de-defqon-1',
  file: 'de/defqon-1.html',
  draft: 'de/defqon-1-draft.md',
  canonical: 'https://thecatrave.com/de/defqon-1',
  englishPath: '/defqon-1',
  ogImage: 'https://thecatrave.com/img/og/defqon-1.jpg',
  bodyClass: 'article-page defqon-1-page',
  minReadingMinutes: 8,

  title: 'Defqon.1 2027: Termine, Tickets und Vorverkauf',
  description: 'Defqon.1 2027 ist vom 24. bis 27. Juni in Biddinghuizen: Vorverkaufsphasen, Tickets, warum 2026 abgesagt wurde, was aus den Erstattungen wurde und die Anreise.',
  datePublished: '2026-11-12',
  dateModified: '2026-11-12',
  dateLabel: '12. November 2026',

  heroKicker: 'Festival-Guide, 2027',
  heroTitle: 'Defqon.1 2027: Termine, Tickets, Vorverkauf und Line-up',
  deck: 'Das Hardstyle-Festival in Biddinghuizen: wann 2027 ist, wie die Vorverkaufsphasen laufen, warum 2026 abgesagt wurde und wie man hinkommt.',
  answerLabel: 'Defqon.1 2027 Termine',
  breadcrumbName: 'Defqon.1',

  answerSection: 'Antwort',
  introSection: 'Einleitung',
  introTitle: 'Ein Festival mit neuen Regeln.',
  faqSection: 'FAQ',
  faqLabel: 'Häufige Fragen',
  faqTitle: 'Häufige Fragen zu Defqon.1.',

  sections: [
    {id: 'what-is', heading: 'Was ist das Defqon.1 Festival?', title: 'Was ist das Defqon.1 Festival?', tocLabel: 'Was ist Defqon.1?'},
    {id: 'dates', heading: 'Defqon.1 2027 Termine', title: 'Defqon.1 2027 Termine', tocLabel: 'Termine 2027'},
    {id: 'tickets', heading: 'Defqon.1 Tickets', title: 'Defqon.1 Tickets', tocLabel: 'Tickets und Vorverkauf'},
    {id: 'cancelled', heading: 'Defqon.1 2026 abgesagt', title: 'Defqon.1 2026 abgesagt', tocLabel: 'Absage 2026'},
    {id: 'lineup', heading: 'Defqon.1 Line-up', title: 'Defqon.1 Line-up', tocLabel: 'Line-up und Sets'},
    {id: 'location', heading: 'Wo ist Defqon.1?', title: 'Wo ist Defqon.1?', tocLabel: 'Ort'},
    {id: 'planning', heading: 'Reise zu Defqon.1 2027 planen', title: 'Plane deine Reise zu Defqon.1.', tocLabel: 'Reise und Planung', planning: localizedFestivalPlanning('defqon', 'de')}
  ],

  media: ({lang}) => ({
    'thecatrave mix 1': ownSetListening(0, lang, 'Mein eigener Mix, zum Hören, während du das Wochenende planst.'),
    'thecatrave mix 2': ownSetListening(1, lang, 'Ein zweiter Mix von mir, für die Anreise.'),
    'Image: red': figure('red-stage-2023', 1280, 720,
      'Die Red Stage, Hauptbühne von Defqon.1 2023, bei Tag mit Publikum davor',
      'Die Red Stage auf Defqon.1, 23. Juni 2023. Foto: DELTAFXUniverse, CC BY-SA 4.0.'),
    'Image: endshow': figure('endshow-2018', 1200, 674,
      'Rotes Feuerwerk über der Hauptbühne während der Endshow von Defqon.1 am Sonntag',
      'Die Endshow am Sonntag auf Defqon.1, 24. Juni 2018. Bild: Ss279, CC BY-SA 4.0.'),
    'Image: uv': figure('uv-stage-2018', 1090, 818,
      'Die UV Stage von Defqon.1 in der Abenddämmerung, Menschen gehen über die Wiese',
      'Die UV Stage in der Abenddämmerung, Defqon.1, 23. Juni 2018. Foto: arjennn_, CC BY-SA 4.0.'),
    'Embed: hardstyle sets': articleVideoCollection({
      lang,
      label: 'Hardstyle aus dem Katalog',
      description: 'Drei Hardstyle-Sets aus dem Katalog des Selector. Keins wurde auf Defqon.1 aufgenommen.',
      items: [
        articleVideoCard({youtubeId: 'hl_dtNxuSoI', genre: 'Hardstyle', artist: 'The Horrorist', title: 'Boiler Room Berlin live set'}),
        articleVideoCard({youtubeId: 'ITYiefRoRE0', genre: 'Hardstyle', artist: 'Sub Zero Project', title: 'Hardstyle set live from Wasteland 2026'}),
        articleVideoCard({youtubeId: 'GYEcEGThh-M', genre: 'Hardstyle', artist: 'Loud373', title: 'Boiler Room Uzbekistan: Sublimation'})
      ]
    }),
    'Table: status 2027': table('Stand von Defqon.1 2027', ['Punkt 2027', 'Stand'], [
      ['Termine', '24. bis 27. Juni 2027, Q-dance'],
      ['Ort', 'Holy Grounds, Biddinghuizen'],
      ['Tickets', 'Verkauf in Phasen ab 27. Oktober'],
      ['Preise', 'Im Shop von Q-dance'],
      ['Line-up', 'Nicht veröffentlicht']
    ]),
    'Table: sale schedule': table('Vorverkauf von Defqon.1 2027', ['Datum', 'Phase'], [
      ['1. Oktober 2026', 'Wunschliste öffnet'],
      ['8. Oktober 2026', 'Vorrangbuchung Travel and Stay für Inhaber von 2026, die ihr Ticket behalten haben'],
      ['27. Oktober 2026', 'Dediqated-Verkauf'],
      ['29. Oktober 2026', 'Verkauf Travel and Stay'],
      ['31. Oktober 2026', 'Allgemeiner Verkauf']
    ])
  }),

  sources: [
    {html: `Termine 2027, Vorverkauf, Ticketarten, Zahlungsarten, Zeiten, Altersregeln und Stages: ${ext('https://www.q-dance.com/l/defqon1-2027', 'Q-dance Defqon.1 2027')} und die dort verlinkten Event- und FAQ-Seiten von Q-dance (auf Englisch).`},
    {html: 'Absage und Erstattungsoptionen 2026, FAQ aktualisiert am 30. Juni 2026: die Update-Seite von Q-dance zu Defqon.1 2026.'},
    {html: `Preise für Anreise, Parken und Shuttle 2026: ${ext('https://www.q-dance.com/l/defqon1-ayntk-2026-travel-to-defqon1', 'Q-dance, Anreise zu Defqon.1 2026')}.`},
    {html: `Berichte zur Absage: ${ext('https://www.iqmagazine.com/', 'IQ Magazine, 26. Juni 2026')} und ${ext('https://nltimes.nl/', 'NL Times, 1. Juli 2026')} (auf Englisch).`},
    {html: `Geschichte: Hardstyle Mag und ${ext('https://www.edm-lab.com/en/events/defqon-1-2022/', 'EDM Lab, 2022')}. Defqon.1 Australia: The Music Network, 30. Mai 2019.`},
    {html: 'Sekundärquelle für die zusätzlichen, offiziell nicht bestätigten Stage-Farben: hardcult.com.'}
  ],

  bandcamp: {
    description: 'Zwischen den Festivals: die Musik, die ich selbst mache. Ein Kauf unterstützt meine Arbeit direkt.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 von thecatrave'},
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks von thecatrave'}
    ]
  }
};
