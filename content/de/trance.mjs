// de trance guide. Structure and facts from the English page
// (trance-guide-draft.md, build-trance-article.mjs).
//
// Keywords (keywords/de-trance.json): Keyword Planner bucket for the head
// term, wording from Google de-DE on 2026-10-01; no exact volumes (account
// without ad spend).
//
// Images are the English guide's, in img/trance/, with translated captions.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, ownSetListening, ownTrackListening
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, height, alt, caption, className) => articleFigure({
  src: `img/trance/${name}-1024.webp`,
  srcset: `img/trance/${name}-320.webp 320w, img/trance/${name}-1024.webp 1024w`,
  width: 1024, height, alt, caption, className
});

const video = (label, description, item) => articleVideoCollection({lang: 'de', label, description, items: [articleVideoCard(item)]});

export default {
  lang: 'de',
  name: 'de-trance',
  file: 'de/trance-musik.html',
  draft: 'de/trance-guide-draft.md',
  canonical: 'https://thecatrave.com/de/trance-musik',
  englishPath: '/trance-guide',
  ogImage: 'https://thecatrave.com/img/og/trance.jpg',
  bodyClass: 'article-page trance-page',
  minReadingMinutes: 9,

  title: 'Was ist Trance-Musik? Ursprung, Künstler und Sound',
  description: 'Trance ist Aufbau, Breakdown und Drop, geboren in Frankfurts Clubs: wie Armin van Buuren und Tiësto ihn auf die Mainstage brachten und Psytrance sich abspaltete.',
  datePublished: '2026-10-01',
  dateModified: '2026-10-01',
  dateLabel: '1. Oktober 2026',

  heroKicker: 'Trance-Guide',
  heroTitle: 'Trance: Aufbau, Breakdown und Drop',
  deck: 'Eine Frankfurter Clubszene, die sich selbst benannte, ein Berliner DJ, der die halbe Geschichte aufbaute, bevor jemand einen Namen dafür hatte, und zwei DJs der Mainstream-Ära, deren Rivalität ein Jahrzehnt lang Festival-Mainstages füllte.',
  answerLabel: 'Was ist Trance-Musik',
  breadcrumbName: 'Trance-Guide',

  answerSection: 'Antwort',
  introSection: 'Einleitung',
  introTitle: 'Das Licht, das wieder angeht.',
  faqSection: 'FAQ',
  faqLabel: 'Häufige Fragen',
  faqTitle: 'Häufige Fragen zu Trance.',

  sections: [
    {id: 'what-is', heading: 'Was ist Trance-Musik', tocLabel: 'Was ist Trance-Musik', title: 'Was ist Trance-Musik?'},
    {id: 'origins', heading: 'Woher Trance kam', tocLabel: 'Woher Trance kam', title: 'Woher Trance kam.'},
    {id: 'decade', heading: 'Trance im Mainstream-Jahrzehnt', tocLabel: 'Trance im Mainstream-Jahrzehnt', title: 'Trance im Mainstream-Jahrzehnt.'},
    {id: 'styles', heading: 'Trance-Stile und Subgenres', tocLabel: 'Trance-Stile und Subgenres', title: 'Trance-Stile und Subgenres.'},
    {id: 'family', heading: 'Trance, House und Techno', tocLabel: 'Trance, House und Techno', title: 'Trance, House und Techno.'},
    {id: 'today', heading: 'Trance heute', tocLabel: 'Trance heute', title: 'Trance heute.'}
  ],

  media: ({lang}) => ({
    'Image: Sven Väth': figure('sven-vath-2014', 1024, 'Sven Väth legt 2014 beim Mayday auf', 'Sven Väth beim Mayday, 2014. Seine Frankfurter Clubs und Labels, Eye Q und Harthouse, gelten als Wegbereiter des Sounds, der zu Trance wurde. Foto: Krd, CC BY-SA 3.0.', 'square-image'),
    'Embed: Sven Väth': video('Sven Väth live', 'Sven Väth bei Boiler Room x Eristoffs „Into The Dark“ in Marseille. Aus dem Katalog aufgezeichneter DJ-Sets dieser Seite.', {youtubeId: 'nFS-qV6EuX0', genre: 'LIVE, 2018', artist: 'Sven Väth', title: 'Into The Dark, Marseille'}),
    'Image: Paul van Dyk': figure('paul-van-dyk-2007', 1365, 'Paul van Dyk mixt 2007 in einem Club in Australien', 'Paul van Dyk, 2007. Sein Label MFS Records und seine Residencies im Tresor und im E-Werk bauten die Berliner Seite der Szene fast so schnell auf wie Frankfurt. Foto: Ben Novakovic, CC BY-SA 2.0.', 'portrait-image'),
    'Embed: Paul van Dyk': video('Paul van Dyk live', 'Paul van Dyk im Mixmag Lab in Amsterdam. Aus dem Katalog aufgezeichneter DJ-Sets dieser Seite.', {youtubeId: 'cx5QQFnY7ic', genre: 'MIXMAG, 2025', artist: 'Paul van Dyk', title: 'Mixmag Lab Amsterdam'}),
    'Image: Armin van Buuren': figure('armin-van-buuren-2017', 681, 'Armin van Buuren vor großem Publikum bei Armin Only Embrace in Kiew, 2017', 'Armin van Buuren bei Armin Only Embrace in Kiew, 2017. Die Leser von DJ Mag wählten ihn von 2007 bis 2012 fünfmal zum DJ Nummer eins der Welt. Foto: Vitaliy from Kharkiv, Ukraine, CC BY 2.0.', 'wide-archive-image'),
    'Embed: Armin van Buuren': video('Armin van Buuren live', 'Armin van Buuren im Ushuaïa Ibiza für DJ Mag. Aus dem Katalog aufgezeichneter DJ-Sets dieser Seite.', {youtubeId: 'z9KgKX4K3MM', genre: 'DJ MAG, 2025', artist: 'Armin van Buuren', title: 'Live From Ushuaïa Ibiza'}),
    'Image: Tiësto': figure('tiesto-2017', 765, 'Tiësto live beim Airbeat One Festival, 2017', 'Tiësto beim Airbeat One Festival, 2017. Sein Auftritt bei der Eröffnungsfeier der Olympischen Spiele 2004 in Athen brachte Trance vor das größte Einzelpublikum, das das Genre je erreicht hatte. Foto: Julia Keiser, CC BY-SA 4.0.', 'wide-archive-image'),
    'Embed: Tiësto': video('Tiësto live', 'Tiësto bei einem Beatport-Live-Set für ReConnect. Aus dem Katalog aufgezeichneter DJ-Sets dieser Seite.', {youtubeId: 'sBaY_AF6zA0', genre: 'BEATPORT LIVE, 2020', artist: 'Tiësto', title: 'ReConnect'}),
    'thecatrave degeneration': ownTrackListening('degeneration', 'Garage, Dubstep und Breaks in einem Remix, 132 BPM: im Tempobereich von Trance, aus einem völlig anderen Rhythmus gebaut. Mein eigener Remix.', lang),
    'thecatrave mix 1': ownSetListening(0, lang, 'Für nach der Geschichte: dreißig Tracks, in denen Breaks zwischen Garage, Bass Music, Techno und Rave wandern, falls du als Nächstes eine andere Palette willst. Mein eigener Mix.'),
    'Table: Trance, House und Techno': articleTable({
      headers: ["Stil", "Ungefähres Tempo", "Was den Track führt", "Eine Platte zum Einstieg"],
      rows: [["Trance", "130 bis 145 BPM", "Ein melodischer Aufbau, ein Breakdown, dann kehren die Drums zurück", "Paul van Dyk, „For an Angel“"], ["Progressive House", "118 bis 128 BPM", "Ein Groove zum Loopen, Spannung allmählich gesteigert, kein harter Drop", "Sasha & Digweed, „Xpander“"], ["Techno", "120 bis 135 BPM", "Maschinenrhythmus, wenig oder keine Melodie, kaum Gesang", "Jeff Mills, „The Bells“"], ["Psytrance", "140 bis 150 BPM", "Eine rollende Sechzehntel-Bassline unter geschichtetem psychedelischem Sounddesign", "Infected Mushroom, „The Legend of the Black Shawarma“"]].map(row => row.map(escapeHtml)),
      label: 'Trance, House, Techno und Psytrance im Vergleich'
    }),
    'Table: Trance-Subgenres': articleTable({
      headers: ["Trance-Subgenre", "Auch genannt", "Was es auszeichnet"],
      rows: [["Uplifting Trance", "Euphoric Trance", "Hymnische Melodien in Dur über Aufbau, Breakdown und Drop"], ["Progressive Trance", "", "Längere, allmählichere Arrangements und ein tieferes Fundament"], ["Vocal Trance", "", "Ein gesungener Hook über demselben Strukturgerüst"], ["Hard Trance", "", "Schnelleres Tempo und härtere Kick, näher am Techno"], ["Psytrance", "Psychedelischer Trance", "Goa-Linie, rollende Sechzehntel-Bassline, 140 bis 150 BPM"]].map(row => row.map(escapeHtml)),
      label: 'Trance-Subgenres im Überblick'
    })
  }),

  sources: [
    {href: 'https://en.wikipedia.org/wiki/Trance_music', label: 'Wikipedia: Trance music (englisch)'},
    {href: 'https://www.beatportal.com/articles/51518-beatports-definitive-history-of-trance', label: 'Beatportal: Beatport’s definitive history of trance (englisch)'},
    {href: 'https://www.discogs.com/master/13879-Dance-2-Trance-We-Came-In-Peace', label: 'Discogs: Dance 2 Trance, We Came In Peace (1990)'},
    {href: 'https://edmidentity.com/2023/12/13/germanys-trance-legacy-from-berlin-to-frankfurt/', label: 'EDM Identity: Germany’s trance legacy, from Berlin to Frankfurt (englisch)'},
    {href: 'https://djmag.com/top100djs/2010', label: 'DJ Mag: Top 100 DJs 2010 (englisch)'},
    {href: 'https://djmag.com/top100djs/2012', label: 'DJ Mag: Top 100 DJs 2012 (englisch)'},
    {href: 'https://en.wikipedia.org/wiki/Psychedelic_trance', label: 'Wikipedia: Psychedelic trance (englisch)'}
  ],

  bandcamp: {
    description: 'Trance ist nicht der Sound, den ich mache, aber sein Instinkt für Aufbau und Entladung ist einer, den jedes Tanzgenre irgendwoher borgt. Diese Veröffentlichungen stehen auf meiner Seite der Familie. Ein Kauf unterstützt meine Arbeit direkt.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks von thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 von thecatrave'}
    ]
  }
};
