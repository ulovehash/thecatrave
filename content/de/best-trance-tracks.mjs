// German trance tracks guide. Structure, facts and the twelve records from the English
// page (best-trance-tracks-draft.md, build-best-trance-tracks-article.mjs). Media are the
// English page's, unchanged (media/best-trance-tracks.json); only alt text, captions and
// notes are translated. Wording from Keyword Planner (Germany, German, 13 November 2026)
// and the google.de SERP notes; volumes in keywords/de-best-trance-tracks.json.

import {
  articleFigure, articleListeningCollection, articleTable, articleTrackEmbed, ownTrackListening
} from '../../site-components.mjs';

const figure = (name, height, alt, caption) => articleFigure({
  src: `img/best-trance-tracks/${name}-1200.webp`,
  srcset: `img/best-trance-tracks/${name}-320.webp 320w, img/best-trance-tracks/${name}-1200.webp 1200w`,
  width: 1200, height, alt, caption, className: 'wide-archive-image'
});

const records = (lang, id, title, description, items) => articleListeningCollection({
  lang, id, title, description, tone: 'cyan',
  items: items.map(([artist, name, year, ytId, note]) => ({
    artist, title: name, year, note,
    playerHtml: articleTrackEmbed({platform: 'youtube', id: ytId, title: `${artist}, ${name}`})
  }))
});

export default {
  lang: 'de',
  name: 'de-best-trance-tracks',
  file: 'de/beste-trance-songs.html',
  draft: 'de/best-trance-tracks-draft.md',
  canonical: 'https://thecatrave.com/de/beste-trance-songs',
  englishPath: '/best-trance-tracks',
  ogImage: 'https://thecatrave.com/img/og/best-trance-tracks.jpg',
  bodyClass: 'article-page best-trance-tracks-page',
  minReadingMinutes: 5,

  title: 'Beste Trance-Songs aller Zeiten: 12 Tracks, 1993 bis 2012',
  description: 'Beste Trance-Songs aller Zeiten: 12 Tracks mit Player, britischen Chartplätzen und Fan-Abstimmungen. Mit Children, Silence und Adagio for Strings.',
  datePublished: '2026-11-13',
  dateModified: '2026-11-13',
  dateLabel: '13. November 2026',

  heroKicker: 'Trance',
  heroTitle: 'Die besten Trance-Songs aller Zeiten, 1993 bis 2012',
  deck: 'Zwölf Trance-Platten von 1993 bis 2012, mit Erscheinungsjahr, britischer Chartposition und einem Player zu jeder.',
  answerLabel: 'Kurzfassung',
  breadcrumbName: 'Die besten Trance-Songs aller Zeiten',

  answerSection: 'Kurzfassung',
  introSection: 'Einleitung',
  introTitle: 'Eine Liste von Platten, keine Geschichte des Genres.',
  faqSection: 'Häufige Fragen',
  faqLabel: 'Häufige Fragen',
  faqTitle: 'Häufige Fragen zu den besten Trance-Tracks.',

  sections: [
    {id: 'how-chosen', heading: 'Charthits und Lieblinge der Fans', title: 'Charthits und Lieblinge der Fans.'},
    {id: 'before-the-charts', heading: 'Vor den Charts: 1993 bis 1995', title: 'Vor den Charts: 1993 bis 1995.'},
    {id: 'chart-years', heading: 'Die Chartjahre: 90er Trance-Hits von 1998 und 1999', title: 'Die Chartjahre: 90er Trance-Hits von 1998 und 1999.', tocLabel: 'Die Chartjahre: 1998 und 1999'},
    {id: 'superstar-years', heading: 'Die Jahre der Superstar-DJs: 2004 bis 2012', title: 'Die Jahre der Superstar-DJs: 2004 bis 2012.'},
    {id: 'best-ever', heading: 'Welcher ist der beste Trance-Track aller Zeiten?', title: 'Welcher ist der beste Trance-Track aller Zeiten?', tocLabel: 'Der beste Trance-Track aller Zeiten?'},
    {id: 'a-break', heading: 'Zwei eigene Tracks', title: 'Zwei eigene Tracks.'}
  ],

  media: ({lang}) => ({
    'figur-armin': figure('armin-van-buuren-2008', 900,
      'Armin van Buuren mit erhobener Faust hinter den Decks, vor ihm grüne Laser',
      'Armin van Buuren live, 2008. Foto: Davide Pasca, CC BY 2.0.'),
    'figur-corsten': figure('ferry-corsten-2010', 800,
      'Ferry Corsten live in Edmonton, Kanada',
      'Ferry Corsten live in Edmonton, Kanada, 2010. Foto: Celwin Frenzen, CC BY 3.0.'),
    'figur-tiesto': figure('tiesto-2010', 800,
      'Tiësto an den Decks in einem Nachtclub in Bangkok',
      'Tiësto im 808 Nightclub, Bangkok, 2010. Foto: Vyacheslav Argenberg, CC BY 4.0.'),
    'liste-vor-den-charts': records(lang, 'listen-before-charts', 'Drei Platten aus der Zeit vor den Charts',
      'Zwei Platten, die Jahre nach ihrer Veröffentlichung in die britischen Charts kamen, und eine, die Platz 2 erreichte.', [
        ['Energy 52', "Café del Mar (Three 'n One Radio Remix)", '1993', 'yyvp_nCM15Q', 'Erschienen 1993; dieser Remix stieg im März 1997 in die britischen Charts ein.'],
        ['Paul van Dyk', 'For an Angel (E-Werk Remix)', '1994', '5JqtsdrHJvg', 'Erster Track auf MFS, 1994; der Remix von 1998 ist nach dem Berliner Club E-Werk benannt.'],
        ['Robert Miles', 'Children', '1995', 'DvyCbevQbtI', 'Platz 2 in Großbritannien, 1996 die achtmeistverkaufte Single des Jahres.']
      ]),
    'liste-chartjahre': records(lang, 'listen-chart-years', 'Vier Platten von 1998 und 1999',
      'Von einer ersten Single bis zur Gesangsbearbeitung eines Themas von 1982.', [
        ['ATB', '9 PM (Till I Come)', '1998', '1DcABTJoWCc', 'Kontor Records, 26. Oktober 1998; die britische Ausgabe kam auf Platz 1.'],
        ['Chicane feat. Máire Brennan', 'Saltwater', '1999', 'uTJtfytoYy4', 'Platz 6 in Großbritannien, Platz 1 der Dance-Charts.'],
        ['System F', 'Out of the Blue', '1999', 'Qgx_V0So0qk', 'Der Durchbruch von Ferry Corsten, Platz 14 in Großbritannien.'],
        ['Delerium feat. Sarah McLachlan', "Silence (Tiësto's In Search of Sunrise Remix)", '1999', 'O3gz3nnYv68', 'Die Remixe vom Oktober 2000 kamen in Großbritannien auf Platz 3; dieser steht in beiden Fan-Abstimmungen auf Platz 4.']
      ]),
    'liste-superstar-jahre': records(lang, 'listen-superstar-years', 'Fünf Platten von 2004 bis 2012',
      'Niedrigere britische Chartplätze als die Platten der 90er, höhere Plätze in der Fan-Abstimmung.', [
        ['OceanLab', 'Satellite (Original Above & Beyond Mix)', '2004', 'NqPAOsIEDcI', 'Platz 19 in Großbritannien 2004, Platz 3 der Dance-Charts.'],
        ['Tiësto', 'Adagio for Strings', '2005', 'B0PV_S4m6Ig', 'Platz 37 in Großbritannien, Platz 2 in beiden Fan-Abstimmungen.'],
        ['Armin van Buuren feat. Susana', 'Shivers', '2005', 'NHUn3AWOw8k', 'Erschienen am 14. Februar 2005 auf Armind.'],
        ['Armin van Buuren', 'Communication Part 3', '2007', 'BK0xoHYUezM', 'In beiden Fan-Abstimmungen unter den ersten fünf; im April 2007 auf Armind erschienen.'],
        ['Gareth Emery feat. Christina Novelli', 'Concrete Angel', '2012', 'f3GRM0Yz7wM', 'Im Februar 2012 auf Garuda erschienen.']
      ]),
    'tabelle-charts': articleTable({
      headers: ['Platte', 'Jahr', 'Höchste Position, UK Official Singles Chart'],
      rows: [
        ['ATB, 9 PM (Till I Come)', '1998 (britische Ausgabe 1999)', '1'],
        ['Robert Miles, Children', '1995', '2'],
        ['Delerium feat. Sarah McLachlan, Silence', '1999 (Remixe 2000)', '3'],
        ['Chicane, Saltwater', '1999', '6'],
        ['System F, Out of the Blue', '1999', '14'],
        ['OceanLab, Satellite', '2004', '19'],
        ['Paul van Dyk, For an Angel (E-Werk Remix)', '1994 (Remix 1998)', '28'],
        ['Tiësto, Adagio for Strings', '2005', '37'],
        ['Armin van Buuren, Shivers/Serenity', '2005', '72']
      ]
    }),
    // The owner's own music inside the text, as on the English page.
    'eigener-track-berlin': ownTrackListening('berlin-race-1909', 'Benannt nach Berlin, der Stadt, deren Club E-Werk dem Remix von For an Angel seinen Namen gab: Dub-Techno-Raum mit Drums darunter. Mein eigener Track.', lang),
    'eigener-track-no-genre': ownTrackListening('no-genre-no-problem', 'Glitch, IDM und Ambient, weit weg von der Mainstage. Mein eigener Track.', lang)
  }),

  sources: [
    {href: 'https://www.officialcharts.com/songs/', label: 'Official Charts: Chartverläufe von 9PM (Till I Come), Saltwater, Children, Silence, Café del Mar, For an Angel, Adagio for Strings, Satellite, Shivers/Serenity und Out of the Blue'},
    {href: 'https://www.astateoftrance.com/armin-van-buuren-reveals-all-time-a-state-of-trance-top-1000-list/', label: 'A State of Trance: die Ergebnisse der All-Time Top 1000 von 2021'},
    {href: 'https://www.astateoftrance.com/all-time-a-state-of-trance-top-1000-list/', label: 'A State of Trance: die Ergebnisse der All-Time Top 1000 von 2024'},
    {href: 'https://djmag.com/features/how-paul-van-dyks-angel-changed-trance-forever', label: 'DJ Mag: How Paul van Dyk’s For An Angel changed trance forever, zur Veröffentlichung auf MFS 1994 und zum E-Werk Remix'}
  ],
  sourcesNote: 'Die Veröffentlichungsdaten von 9 PM (Till I Come), Saltwater, Out of the Blue, Shivers, Communication Part 3 und Concrete Angel stammen aus Diskografie- und Nachschlageseiten, nicht von einer Labelseite. Fotos von Wikimedia Commons: Davide Pasca (CC BY 2.0), Celwin Frenzen (CC BY 3.0), Vyacheslav Argenberg (CC BY 4.0).',

  bandcamp: {
    description: 'Ein Kauf unterstützt die Musik und das Schreiben direkt.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks von thecatrave'},
      {title: '60 hours of mistakes', id: '3330948631', url: 'https://thecatrave.bandcamp.com/track/60-hours-of-mistakes', linkText: '60 hours of mistakes von thecatrave'}
    ]
  }
};
