import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, ownSetListening
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption, className = 'wide-archive-image') => articleFigure({
  src: `img/exit-festival/${name}-1200.webp`,
  srcset: `img/exit-festival/${name}-320.webp 320w, img/exit-festival/${name}-1200.webp ${width}w`,
  width, height, alt, caption, className
});

export default {
  lang: 'de',
  name: 'de-exit-festival',
  file: 'de/exit-festival.html',
  draft: 'de/exit-festival-draft.md',
  canonical: 'https://thecatrave.com/de/exit-festival',
  englishPath: '/exit-festival',
  ogImage: 'https://thecatrave.com/img/og/exit-festival.jpg',
  bodyClass: 'article-page exit-festival-page',

  title: 'EXIT Festival: Geschichte, Petrovaradin und was jetzt kommt',
  description: 'Das EXIT Festival begann 2000 in Novi Sad und lief bis 2025 in der Festung Petrovaradin. Geschichte, Dance Arena, Musik und was 2026 und danach passiert.',
  datePublished: '2026-10-01',
  dateModified: '2026-10-01',
  dateLabel: '1. Oktober 2026',

  heroKicker: 'Festivalgeschichte',
  heroTitle: 'EXIT Festival: Von Novi Sad zur weltweiten Tour',
  deck: 'Von einer Studentenbewegung 2000 zur Festung Petrovaradin, dem Ende der serbischen Ausgabe nach 25 Jahren und der Frage, was heute noch EXIT heißt.',
  answerLabel: 'Was mit dem EXIT Festival geschah',
  breadcrumbName: 'EXIT Festival',

  answerSection: 'Antwort',
  introSection: 'Einleitung',
  introTitle: 'Die Festungsära endete nach 25 Jahren.',
  faqSection: 'FAQ',
  faqLabel: 'Häufige Fragen',
  faqTitle: 'Häufige Fragen zum EXIT Festival.',

  sections: [
    {id: 'after-2025', heading: 'Was nach dem EXIT 2025 geschah', title: 'Was nach dem EXIT 2025 geschah.'},
    {id: 'history', heading: 'Von der Studentenbewegung zur Festung', title: 'Von der Studentenbewegung zur Festung.'},
    {id: 'petrovaradin', heading: 'Die Festung Petrovaradin und die Dance Arena', title: 'Die Festung Petrovaradin und die Dance Arena.'},
    {id: 'music', heading: 'Welche Musik EXIT spielte', title: 'Welche Musik EXIT spielte.'},
    {id: 'network', heading: 'EXIT als Festivalnetzwerk', title: 'EXIT als Festivalnetzwerk.'},
    {id: 'current-events', heading: 'Wie man EXIT jetzt verfolgt', title: 'Wie man EXIT jetzt verfolgt.'}
  ],

  media: ({lang}) => ({
    'Fortress': figure('exit-fortress', 800, 509, 'Die beleuchtete Festung Petrovaradin während des EXIT Festivals', 'Die Festung Petrovaradin während EXIT. Mauern, Tore und Graben prägten, wie das Festival in Novi Sad von 2001 bis 2025 funktionierte. Foto: EXIT photo team, CC BY-SA 3.0.'),
    'Crowd': figure('exit-crowd', 1200, 784, 'Dichtes Publikum in der Festung Petrovaradin beim EXIT Festival 2015', 'Ein Publikum in der Festung Petrovaradin 2015. EXITs Bühnen standen auf einem historischen Gelände im Betrieb statt auf einem eigens gebauten Festivalfeld. Foto: Jelena Ivanovic, EXIT photo team, CC BY-SA 3.0.'),
    'thecatrave mix 1': ownSetListening(0, lang, 'Mein eigener Mix aus vielen Genres als persönliche Route durch Techno, Breaks und Bass Music, keine Rekonstruktion der Dance Arena.'),
    'thecatrave mix 2': ownSetListening(1, lang, 'Für die heutige EXIT-Zeit von Ort zu Ort: eine elektronische Route, während jede offizielle Veranstaltung ihr eigenes Programm behält.'),
    'Keinemusik and Nina Kraviz': articleVideoCollection({
      lang,
      label: 'Zwei Dance-Arena-Sets von EXITs Kanal',
      description: 'Keinemusik 2023 und Nina Kraviz 2016 in der Dance Arena, mit rund 5,4 und 3,7 Millionen Aufrufen unter den meistgesehenen Dance-Arena-Aufnahmen auf EXITs Kanal.',
      items: [
        articleVideoCard({youtubeId: '6L0GMr8FFyc', genre: 'Dance Arena, 2023', artist: 'Keinemusik', title: 'EXIT Dance Arena, 2023'}),
        articleVideoCard({youtubeId: 'WJnhTXQ6a9Y', genre: 'Dance Arena, 2016', artist: 'Nina Kraviz', title: 'EXIT Dance Arena, 2016'})
      ]
    }),
    'Tabelle: Fakten': articleTable({
      headers: ['Thema', 'Stand'],
      rows: [
        ['Gegründet', '2000 im University Park, Novi Sad'],
        ['Festungsausgaben', '2001 bis 2025 in der Festung Petrovaradin'],
        ['Letzte serbische Ausgabe angekündigt', '10. bis 13. Juli 2025'],
        ['Format 2026', 'Welttournee und getrennte neue Festivals'],
        ['Rückkehr nach Novi Sad', 'nicht bestätigt'],
        ['Kernmusik', 'Viele Genres, mit House und Techno in der Dance Arena']
      ].map(row => row.map(escapeHtml))
    })
  }),

  sources: [
    {href: 'https://exitfest.org/en/about-us', label: 'EXIT: Über uns'},
    {href: 'https://exitfest.org/en/exit-festival-announces-final-edition-in-serbia-amid-undemocratic-pressures', label: 'EXIT: Ankündigung der letzten Ausgabe in Serbien'},
    {href: 'https://exitfest.org/global-tour', label: 'EXIT: Global Tour'},
    {href: 'https://exitfest.org/en/were-not-moving-exit-to-skopje-or-egypt-were-creating-new-festivals-by-the-great-pyramids-of-giza-and-around-the-world', label: 'EXIT: Wir ziehen nicht nach Skopje oder Ägypten um, wir schaffen neue Festivals'},
    {href: 'https://www.lemonde.fr/en/international/article/2025/07/03/the-exit-music-festival-in-serbia-faces-closure-as-government-cracks-down-on-dissent_6742968_4.html', label: 'Le Monde: Berichte über EXIT, Proteste und öffentliche Förderung'}
  ],

  bandcamp: {
    description: 'Der Guide war nützlich? Meine eigene Musik liegt auf Bandcamp. Das Programm der Festung lief quer durch Rock, Hip-Hop und Clubmusik; diese Veröffentlichungen von thecatrave gehören zur elektronischen Seite.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 von thecatrave'},
      {title: '60 hours of mistakes', id: '3330948631', url: 'https://thecatrave.bandcamp.com/track/60-hours-of-mistakes', linkText: '60 hours of mistakes von thecatrave'}
    ]
  }
};
