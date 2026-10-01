// German hardstyle guide. Structure and facts from the English page
// (hardstyle-guide-draft.md, build-hardstyle-article.mjs).
//
// German keywords (keywords/de-hardstyle.json): Keyword Planner, Germany,
// 2026-10-01: hardstyle in the 1K to 10K bucket. No exact volume (account
// without ad spend). Wording checked in Google de-DE the same day: "Was ist
// Hardstyle-Musik" and "Wie viel BPM hat Hardstyle" are People also ask
// questions, so they are FAQ headings; "Hardstyle Künstler" and "Hardstyle
// Festival" are related searches.
//
// The English generator places each listening block by paragraph index. Here
// the draft places them with [Embed: ...] lines at the same positions.
//
// The image is the English guide's, in img/hardstyle/, with a translated
// caption; see home-articles.mjs for why a translation may reuse it.
import {
  articleFigure, articleListeningCollection, articleTable, articleTrackEmbed, ownTrackListening
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const track = (platform, id, artist, title, year, note) => ({
  artist, title, year, note,
  playerHtml: articleTrackEmbed({platform, id, title: `${artist}, ${title}`})
});

export default {
  lang: 'de',
  name: 'de-hardstyle',
  file: 'de/hardstyle.html',
  draft: 'de/hardstyle-draft.md',
  canonical: 'https://thecatrave.com/de/hardstyle',
  englishPath: '/hardstyle-guide',
  ogImage: 'https://thecatrave.com/img/og/hardstyle.jpg',
  bodyClass: 'article-page hardstyle-page',
  minReadingMinutes: 8,

  title: 'Was ist Hardstyle? Geschichte, Sound, Künstler und Subgenres',
  description: 'Hardstyle wuchs aus niederländischem Hard Dance zum weltweiten Festivalsound: verzerrte Kicks, Reverse Bass, wichtige Künstler, euphorischer und rauer Zweig.',
  datePublished: '2026-10-01',
  dateModified: '2026-10-01',
  dateLabel: '1. Oktober 2026',

  heroKicker: 'Hardstyle-Guide',
  heroTitle: 'Hardstyle: verzerrte Kicks, Reverse Bass und Festivalgröße',
  deck: 'Ein Austausch aus den späten 1990ern zwischen Hard House, Hard Trance und Hardcore, der zum zentralen Sound eines niederländischen Festivalzirkus wurde.',
  answerLabel: 'Hardstyle: Definition',
  breadcrumbName: 'Hardstyle',

  answerSection: 'Antwort',
  introSection: 'Einleitung',
  introTitle: 'Die Kick trägt die Platte.',
  faqSection: 'FAQ',
  faqLabel: 'Häufige Fragen',
  faqTitle: 'Häufige Fragen zu Hardstyle.',

  sections: [
    {id: 'what-is', heading: 'Was ist Hardstyle', title: 'Was ist Hardstyle?'},
    {id: 'before', heading: 'Vor dem Namen', title: 'Vor dem Namen.', kicker: '1999 bis 2002'},
    {id: 'scene', heading: 'Eine Szene wird zu Hardstyle', title: 'Eine Szene wird zu Hardstyle.', kicker: 'Die frühen 2000er'},
    {id: 'melodic', heading: 'Die melodische Wende', title: 'Die melodische Wende.', kicker: '2005 bis 2010'},
    {id: 'branches', heading: 'Euphorischer Hardstyle und Raw Hardstyle', title: 'Euphorischer Hardstyle und Raw Hardstyle.', tocLabel: 'Euphorisch und raw'},
    {id: 'comparison', heading: 'Hardstyle, Hardcore und Techno', title: 'Hardstyle, Hardcore und Techno.'},
    {id: 'festivals', heading: 'Hardstyle-Festivals und die heutige Szene', title: 'Hardstyle-Festivals und die heutige Szene.', tocLabel: 'Festivals und heutige Szene'}
  ],

  media: ({lang}) => ({
    'thecatrave berlin-race-1909': ownTrackListening('berlin-race-1909', 'Aus einer anderen Ecke als Hardstyle: gebrochene Beats im Hall des Dub-Techno. Mein eigener Track, benannt nach Berlin.', lang),
    'early-hardstyle-listening': articleListeningCollection({
      lang, id: 'early-hardstyle-listening',
      title: 'Vom Reverse Bass zur melodischen Mitte',
      description: 'Zwei Scantraxx-Platten aus der Zeit, als sich früher Hardstyle zu einer melodischeren Form zu öffnen begann.',
      items: [
        track('youtube', 'Q_N2Gv2_0IU', 'DJ Duro & The Prophet', 'Shizzle My Dizzle', '2005', 'Reverse Bass, ein Hard-Trance-Riff und das sparsame Arrangement des frühen Scantraxx-Sounds.'),
        track('spotify', '6mOofVIiHmXHlvEapIN8k9', 'Blademasterz', 'Masterblade', '2006', 'Brennan Heart unter seinem Namen Blademasterz, mit mehr Melodie im Arrangement.')
      ]
    }),
    'melodic-hardstyle-listening': articleListeningCollection({
      lang, id: 'melodic-hardstyle-listening',
      title: 'Die melodische Wende der späten 2000er',
      description: 'Lead-Melodie und Tonhöhen-Kick werden zu gleichwertigen Teilen der Platte.',
      items: [
        track('spotify', '5QTEBCV3eRst0uoLUHhJOr', 'Headhunterz', 'Rock Civilization', '2007', 'Ein kompaktes Beispiel für den helleren Lead-Sound und eine Kick, die der Melodie folgt.'),
        track('spotify', '1Ns5FtyALVwzFuRS4nH9xd', 'D-Block & S-te-Fan', 'Music Made Addict', '2009', 'Eine prägende Scantraxx-Platte aus der melodischen Expansion des Hardstyle.')
      ]
    }),
    'raw-hardstyle-listening': articleListeningCollection({
      lang, id: 'raw-hardstyle-listening',
      title: 'Melodie, Druck und das Raw-Etikett',
      description: 'Eine Platte an der Grenze zwischen melodisch und raw, danach die Veröffentlichung, die dem dunkleren Zweig seinen Namen gab.',
      items: [
        track('spotify', '06BmUrVuMtTdOuaf9CTYAz', 'B-Front & Frontliner', 'Magic', '2010', 'Eine große Melodie trifft auf den dunkleren Kickdruck, der die Spaltung prägen sollte.'),
        track('spotify', '6GcT1R34r7r2OcTUPjUbUw', 'Zatox & Nikkita', 'Raw Style', '2011', 'Der Titel, dem Scantraxx die Namensgebung für Raw Hardstyle zuschreibt.')
      ]
    }),
    'Table: Vergleich': articleTable({
      headers: ['Stil', 'Typisches Tempo', 'Rhythmisches Zentrum', 'Melodische Struktur'],
      rows: [
        ['Hardstyle', '145 bis 155 BPM', 'Verzerrte Kick mit Tonhöhe und Reverse Bass', 'Lange Breakdowns und große Leads sind üblich'],
        ['Hardcore', '160 BPM und mehr', 'Schnellere, schroffere Kickmuster', 'Melodie variiert; die Wucht bleibt oft vorn'],
        ['Techno', '125 bis 150 BPM', 'Geloopter Groove und Maschinenrhythmus', 'Meist weniger auf einen langen melodischen Breakdown angewiesen'],
        ['Hard Techno', '140 bis 160 BPM', 'Treibender Techno-Groove mit härterem Kickdesign', 'Kann Hardstyle-Klänge ausleihen, ohne das volle Arrangement']
      ].map(row => row.map(escapeHtml)),
      label: 'Vergleich von Hardstyle, Hardcore und Techno'
    }),
    'Image: Defqon': articleFigure({
      src: 'img/hardstyle/defqon1-red-2024-1280.webp',
      srcset: 'img/hardstyle/defqon1-red-2024-320.webp 320w, img/hardstyle/defqon1-red-2024-1280.webp 1280w',
      width: 1280, height: 720,
      alt: 'Die rote Hauptbühne des Defqon.1 im Jahr 2024, ein großes Publikum vor der Bühne bei Tageslicht',
      caption: 'Die Red Stage beim Defqon.1 2024. Das Festival trennt Hardstyle, Hardcore und verwandte Sounds auf farbcodierten Bühnen. Foto: DELTAFXUniverse, CC BY-SA 4.0.',
      className: 'wide-archive-image'
    })
  }),

  // The English page's sources, URL for URL, with translated labels.
  sources: [
    {href: 'https://www.scantraxx.com/news/scantraxx-recordz-is-born-history-of-hardstyle-column', label: 'Scantraxx: Die Geburt von Scantraxx Recordz (englisch)'},
    {href: 'https://edmidentity.com/2023/03/11/dj-the-prophet-basscon-wasteland-interview/', label: 'EDM Identity: DJ The Prophet über den Übergang vom Hardcore zum Hardstyle (englisch)'},
    {href: 'https://www.q-dance.com/artists/31843145', label: 'Q-dance: DJ The Prophet (englisch)'},
    {href: 'https://www.scantraxx.com/news/og-raw', label: 'Scantraxx: der Aufstieg des Raw Hardstyle (englisch)'},
    {href: 'https://www.scantraxx.com/company', label: 'Scantraxx: Unternehmen und Labelgeschichte (englisch)'},
    {href: 'https://en.wikipedia.org/wiki/Hardstyle', label: 'Wikipedia: Hardstyle als Quellenübersicht (englisch)'}
  ],

  bandcamp: {
    description: 'Meine eigene Arbeit liegt näher an Breaks, Techno und Rave als an Hardstyle. Wer eine dieser Veröffentlichungen kauft, unterstützt die Musik und das Schreiben direkt.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks von thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 von thecatrave'}
    ]
  }
};
