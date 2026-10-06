// German Airbeat One guide. Structure and facts from the English page
// (airbeat-one-festival-draft.md, build-airbeat-one-festival-article.mjs).
//
// German keywords (keywords/de-airbeat-one.json): Keyword Planner, Germany,
// 2026-10-01: airbeat one in the 10K to 100K bucket. No exact volume (account
// without ad spend). Wording from Google de-DE the same day: People also ask
// "Was für Musik läuft auf dem Airbeat One"; related "Besucherzahlen", "Line-up".
//
// Images are the English guide's, in img/airbeat-one/, with translated captions.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, ownSetListening
} from '../../site-components.mjs';
import {localizedFestivalPlanning} from '../festival-planning-data.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/airbeat-one/${name}-${width}.webp`,
  srcset: `img/airbeat-one/${name}-320.webp 320w, img/airbeat-one/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

export default {
  lang: 'de',
  name: 'de-airbeat-one',
  file: 'de/airbeat-one-festival.html',
  draft: 'de/airbeat-one-festival-draft.md',
  canonical: 'https://thecatrave.com/de/airbeat-one-festival',
  englishPath: '/airbeat-one-festival',
  ogImage: 'https://thecatrave.com/img/og/airbeat-one-festival.jpg',
  bodyClass: 'article-page airbeat-one-festival-page',

  title: 'Airbeat One Festival 2027: Termine, Stages, Camping und Anreise',
  description: 'Airbeat One 2027 läuft vom 7. bis 11. Juli in Neustadt-Glewe: ein Guide zu den Stages für EDM, Techno, Hardstyle und Psytrance, zu Camping und Anreise.',
  datePublished: '2026-10-01',
  dateModified: '2026-10-06',
  dateLabel: '6. Oktober 2026',

  heroKicker: 'Festival-Guide Deutschland',
  heroTitle: 'Airbeat One Festival: Der Rave-Guide zum Flugplatz in Deutschland',
  deck: 'Vier große elektronische Richtungen teilen sich einen Flugplatz im Norden Deutschlands, und das Camping gehört zum Event, statt ein ruhiger Ort daneben zu sein.',
  answerLabel: 'Was ist das Airbeat One Festival',
  breadcrumbName: 'Airbeat One Festival',

  answerSection: 'Antwort',
  introSection: 'Einleitung',
  introTitle: 'Mehrere elektronische Festivals auf einem Flugplatz.',
  faqSection: 'FAQ',
  faqLabel: 'Häufige Fragen',
  faqTitle: 'Häufige Fragen zum Airbeat One Festival.',

  sections: [
    {id: 'airbeat-one-2027', heading: 'Airbeat One 2027', tocLabel: '2027: Termine und Motto', title: 'Airbeat One 2027.'},
    {id: 'music', heading: 'Welche Musik Airbeat One spielt', tocLabel: 'Musik bei Airbeat One', title: 'Welche Musik Airbeat One spielt.'},
    {id: 'stages', heading: 'Ein Festival aus Stage-Identitäten', tocLabel: 'Stages', title: 'Ein Festival aus Stage-Identitäten.'},
    {id: 'history', heading: 'Von Airbase One zu Airbeat One', tocLabel: 'Geschichte', title: 'Von Airbase One zu Airbeat One.'},
    {id: 'camping', heading: 'Camping in Neustadt-Glewe', tocLabel: 'Camping', title: 'Camping in Neustadt-Glewe.'},
    {id: 'planning', heading: 'Anreise und Planung des Wochenendes', tocLabel: 'Anreise und Planung', title: 'Plane dein Airbeat-One-Wochenende.', planning: localizedFestivalPlanning('airbeat', 'de')}
  ],

  media: ({lang}) => ({
    'Image: Arena Stage': figure('airbeat-arena', 1200, 754,
      'Publikum und Produktion in der Airbeat-One-Arena-Stage 2025',
      'Die überdachte Arena Stage 2025. Dank der Stage-Identitäten von Airbeat One können Techno, härtere Stile und Psytrance neben der Mainstage als eigenständige Programme laufen.'),
    'Image: Neustadt-Glewe airfield': figure('airbeat-airfield', 1200, 768,
      'Luftaufnahme des Flugplatzes Neustadt-Glewe in Norddeutschland',
      'Der Flugplatz Neustadt-Glewe vor dem Festivalaufbau. Das offene Gelände fasst Stages, Camping und Fahrzeugrouten auf einer großen Fläche. Foto: Carsten Steger, CC BY-SA 4.0.'),
    'Embed: Paul van Dyk': articleVideoCollection({
      lang,
      label: 'Neelix und Paul van Dyk bei Airbeat One',
      description: 'Neelix bei Airbeat One 2024, das meistgesehene Set, das ich auf dem eigenen Kanal des Festivals gefunden habe (556.000 Aufrufe), und Paul van Dyk auf der Second Stage 2025.',
      items: [
        articleVideoCard({youtubeId: 'AWxxg3l89-k', genre: 'AIRBEAT ONE, 2024', artist: 'Neelix', title: 'Live-Set bei Airbeat One 2024'}),
        articleVideoCard({youtubeId: 'wETX6I_EDUo', genre: 'AIRBEAT ONE, 2025', artist: 'Paul van Dyk', title: 'Live von der Second Stage'})
      ]
    }),
    'thecatrave mix 1': ownSetListening(0, lang, 'Mein eigener Mix aus mehreren Genres führt durch Techno und härteres Rave-Material, als persönlicher Weg durch die Stage-Vielfalt von Airbeat One, ohne dessen Programm zu ersetzen.'),
    'thecatrave mix 2': ownSetListening(1, lang, 'Für ein langes Flugplatz-Wochenende: mein eigenes Set über Genregrenzen hinweg, mit Techno in der Mitte und mehreren schnelleren Abzweigen drumherum.'),
    'Table: Fakten': articleTable({
      headers: ['Angabe', 'Information'],
      rows: [
        ['Termin', '7. bis 11. Juli 2027'],
        ['Ort', 'Flugplatz Neustadt-Glewe, Deutschland'],
        ['Motto', 'Australien'],
        ['Ausgabe', '24. Ausgabe und 25. Jubiläum'],
        ['Musik', 'EDM, Techno, Hardstyle und Psytrance'],
        ['Line-up 2027', 'In Arbeit; die offizielle Line-up-Seite prüfen']
      ].map(row => row.map(escapeHtml)),
      label: 'Airbeat One Festival 2027: die Fakten'
    })
  }),

  sources: [
    {href: 'https://airbeat-one.de/en/info/', label: 'Airbeat One: offizielle Termine, Jubiläum und Motto 2027 (englisch)'},
    {href: 'https://airbeat-one.de/en/stages/', label: 'Airbeat One: offizieller Stage-Guide (englisch)'},
    {href: 'https://customerservice.airbeat-one.de/hc/en-150/articles/115004835489-Description-Camping-grounds-opening-hours', label: 'Airbeat One: offizielle Camping-Informationen (englisch)'},
    {href: 'https://airbeat-one.de/en/getting-there/', label: 'Airbeat One: offizielle Anreise-Informationen (englisch)'},
    {href: 'https://commons.wikimedia.org/wiki/File:Airbeat_One_Arena_Stage.jpg', label: 'Wikimedia Commons: Foto der Arena Stage und Lizenz (englisch)'}
  ],

  bandcamp: {
    description: 'Airbeat One gibt mehreren elektronischen Szenen eigene Stages. Diese thecatrave-Veröffentlichungen verbinden sich mit seiner clubnahen Seite; ein Kauf unterstützt die Musik und dieses unabhängige Schreiben.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks von thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 von thecatrave'}
    ]
  }
};
