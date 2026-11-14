// German Dekmantel guide. Structure and facts from the English page
// (dekmantel-draft.md, build-dekmantel-article.mjs); nothing added that the
// English page does not say, except the planner, which is the de entry
// "dekmantel" in content/festival-planning-data.mjs.
//
// German wording: Keyword Planner (Germany, German, 14 November 2026) returned
// "dekmantel" and "dekmantel festival" in the 100-1K bucket and "dekmantel
// festival tickets" in 10-100 (keywords/de-dekmantel.json). Dekmantel is not
// an EDM festival and is never called one.
//
// Maintenance: the 2027 dates are the English page's. Change them here and in
// the draft whenever the English page changes them.
//
// The images are the English page's, in img/dekmantel/, with translated captions.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection
} from '../../site-components.mjs';
import {localizedFestivalPlanning} from '../festival-planning-data.mjs';

const fig = (name, width, height, alt, caption) => articleFigure({
  src: `img/dekmantel/${name}-1200.webp`,
  srcset: `img/dekmantel/${name}-320.webp 320w, img/dekmantel/${name}-1200.webp 1200w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

const ext = (href, label) => `<a href="${href}" target="_blank" rel="noopener noreferrer">${label}</a>`;

export default {
  lang: 'de',
  name: 'de-dekmantel',
  file: 'de/dekmantel-festival.html',
  draft: 'de/dekmantel-draft.md',
  canonical: 'https://thecatrave.com/de/dekmantel-festival',
  englishPath: '/dekmantel-festival',
  ogImage: 'https://thecatrave.com/img/og/dekmantel.jpg',
  bodyClass: 'article-page dekmantel-page',
  minReadingMinutes: 6,

  title: 'Dekmantel Festival 2027: Termine, Tickets, Selectors, Amsterdam',
  description: 'Dekmantel Festival 2027 im Amsterdamse Bos, ab 18: Termine vom 29. Juli bis 2. August, Ticketregeln, Selectors in Kroatien vom 19. bis 23. August und Sets zum Hören.',
  datePublished: '2026-11-14',
  dateModified: '2026-11-14',
  dateLabel: '14. November 2026',

  heroKicker: 'Festival-Guide 2027',
  heroTitle: 'Dekmantel Festival: Termine 2027, Tickets und Selectors',
  deck: 'Das Amsterdamer Festival im Amsterdamse Bos: wann Dekmantel 2027 läuft, wie die Woche in der Stadt aufgebaut ist, was die Tickets abdecken und was Dekmantel Selectors in Kroatien ist.',
  answerLabel: 'Dekmantel Festival',
  breadcrumbName: 'Dekmantel Festival',

  answerSection: 'Antwort',
  introSection: 'Einleitung',
  introTitle: 'Ein Festival, das als Clubnacht begann.',
  faqSection: 'FAQ',
  faqLabel: 'Häufige Fragen zu Dekmantel',
  faqTitle: 'Häufige Fragen zu Dekmantel.',
  ownSetAfter: 'what-is',

  sections: [
    {id: 'what-is', heading: 'Was ist das Dekmantel Festival?', title: 'Was ist das Dekmantel Festival?', tocLabel: 'Was ist Dekmantel?'},
    {id: 'dates', heading: 'Wann ist Dekmantel 2027?', title: 'Wann ist Dekmantel 2027?', tocLabel: 'Termine 2027'},
    {id: 'where', heading: 'Der Amsterdamse Bos', title: 'Der Amsterdamse Bos.', tocLabel: 'Wo es stattfindet'},
    {id: 'tickets', heading: 'Dekmantel Festival Tickets', title: 'Dekmantel Festival Tickets.', tocLabel: 'Tickets'},
    {id: 'planning', heading: 'Reise zu Dekmantel 2027 planen', title: 'Plane deine Reise zu Dekmantel.', tocLabel: 'Reise und Planung', planning: localizedFestivalPlanning('dekmantel', 'de')},
    {id: 'selectors', heading: 'Was ist Dekmantel Selectors?', title: 'Was ist Dekmantel Selectors?', tocLabel: 'Dekmantel Selectors'},
    {id: 'booking', heading: 'Was Dekmantel bucht', title: 'Was Dekmantel bucht.', tocLabel: 'Was es bucht'},
    {id: 'listen', heading: 'Dekmantel-Sets für den Anfang', title: 'Dekmantel-Sets für den Anfang.', tocLabel: 'Sets für den Anfang'}
  ],

  media: ({lang}) => ({
    'Tabelle: week': articleTable({label: 'Die Dekmantel-Woche 2026, Tag für Tag',
      headers: ['Tag', 'Programm 2026', 'Wo'],
      rows: [
        ['Mittwoch', 'Eröffnungskonzert (Space Afrika)', 'Oude Kerk'],
        ['Donnerstag', 'Into the City, ein neues Programm', 'Melkweg und Paradiso'],
        ['Freitag bis Sonntag', 'Das Festival', 'Amsterdamse Bos, Amstelveen'],
        ['Freitag bis Sonntag', 'Nachtprogramm', 'RADION, Garage Noord, ISO, RAUM']
      ]}),
    midland: fig('midland-2017', 1200, 799,
      'Midland legt 2017 beim Dekmantel Festival auf',
      'Midland beim Dekmantel Festival, September 2017. Foto: StealthManagementMusic, CC BY-SA 4.0.'),
    'oude-kerk': fig('oude-kerk-ceiling', 1200, 898,
      'Die bemalte Holzdecke in der Oude Kerk in Amsterdam',
      'Die Decke der Oude Kerk in Amsterdam, ein Veranstaltungsort von Dekmantel. Foto: C messier, CC BY-SA 4.0.'),
    paradiso: fig('paradiso-2018', 1200, 900,
      'Die Fassade des Paradiso in Amsterdam im Juni 2018',
      'Das Paradiso in Amsterdam, Juni 2018, ein Veranstaltungsort von Dekmantel. Foto: Marek Koudelka, CC BY-SA 4.0.'),
    loop: articleVideoCollection({
      lang, label: 'Dekmantel, von zu Hause gehört',
      description: 'Drei Sets von der Bühne The Loop beim Dekmantel Festival 2025, vom eigenen Kanal des Festivals.',
      items: [
        articleVideoCard({youtubeId: 'E4NXVs4SlhE', genre: 'The Loop, 2025', artist: 'Four Tet', title: 'Four Tet auf The Loop'}),
        articleVideoCard({youtubeId: 't5KwF_VsM50', genre: 'The Loop, 2025', artist: 'Honey Dijon', title: 'Honey Dijon auf The Loop'}),
        articleVideoCard({youtubeId: 's14IS_wXrEQ', genre: 'The Loop, 2025', artist: 'Avalon Emerson', title: 'Avalon Emerson auf The Loop'})
      ]
    }),
    radar: articleVideoCollection({
      lang, label: 'RADAR, Dekmantel 2025',
      description: 'Zwei Sets von der Bühne RADAR beim Dekmantel Festival 2025, vom eigenen Kanal des Festivals.',
      items: [
        articleVideoCard({youtubeId: 'MeLdwDfYkzg', genre: 'RADAR, 2025', artist: 'DJ Nobu', title: 'DJ Nobu auf RADAR'}),
        articleVideoCard({youtubeId: 'seBCd51d3KM', genre: 'RADAR, 2025', artist: 'Fadi Mohem', title: 'Fadi Mohem auf RADAR'})
      ]
    })
  }),

  // The English page's sources, URL for URL, with translated labels.
  sources: [
    {html: `Programm, Orte, Altersgrenzen, Ticketregeln, Camping, Shuttle und Logistik: ${ext('https://www.dekmantelfestival.com/faq', 'FAQ des Dekmantel Festival')} (auf Englisch). Die FAQ beschreibt die Ausgabe 2026.`},
    {html: `Termine, Bereiche und Format von Dekmantel Selectors: ${ext('https://www.dekmantelselectors.com/', 'dekmantelselectors.com')} (auf Englisch).`},
    {html: `Termine und Tickets 2027 in Amsterdam: ${ext('https://dekmantel.com/events/dekmantel-festival-2027', 'die Eventseite des Festivals')} (auf Englisch).`}
  ],

  bandcamp: {
    description: 'Zwischen den Festivals die Musik, die ich selbst mache. Ein Kauf unterstützt meine Arbeit direkt.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 von thecatrave'},
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks von thecatrave'}
    ]
  }
};
