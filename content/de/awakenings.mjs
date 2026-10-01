// German Awakenings guide. Structure and facts from the English page
// (awakenings-draft.md, build-awakenings-article.mjs).
//
// German keywords (keywords/de-awakenings.json): Keyword Planner, Germany,
// 2026-10-01: awakenings festival in the 1K to 10K bucket. No exact volume
// (account without ad spend). Wording checked in Google de-DE the same day:
// "Wo findet das Awakenings Festival statt", "Besucherzahl", "Tickets" and
// "Line-up" appear as questions and related searches; "Awakenings Festival
// 2027" is the next edition.
//
// The image is the English guide's, in img/awakenings/, with a translated
// caption; see home-articles.mjs for why a translation may reuse it.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, ownTrackListening
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption, className = 'wide-archive-image') => articleFigure({
  src: `img/awakenings/${name}-${width}.webp`,
  srcset: `img/awakenings/${name}-320.webp 320w, img/awakenings/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className
});

export default {
  lang: 'de',
  name: 'de-awakenings',
  file: 'de/awakenings-festival.html',
  draft: 'de/awakenings-draft.md',
  canonical: 'https://thecatrave.com/de/awakenings-festival',
  englishPath: '/awakenings-festival',
  ogImage: 'https://thecatrave.com/img/og/awakenings.jpg',
  bodyClass: 'article-page awakenings-page',

  title: 'Awakenings Festival 2027: Was es ist und wo es stattfindet',
  description: '1997 in Amsterdam gegründet, seitdem nur Techno: wo das Sommerfestival und der Special zum Amsterdam Dance Event stattfinden und woher der Name kommt.',
  datePublished: '2026-10-01',
  dateModified: '2026-10-01',
  dateLabel: '1. Oktober 2026',

  heroKicker: 'Awakenings',
  heroTitle: 'Awakenings Festival',
  deck: 'Ein niederländisches Techno-Festival, 1997 in Amsterdam gegründet und seitdem nur Techno. Wo das Sommerfestival und der Amsterdam-Dance-Event-Special stattfinden, der zufällige Ursprung des Namens und wer spielt.',
  answerLabel: 'Was ist das Awakenings Festival',
  breadcrumbName: 'Awakenings Festival',

  answerSection: 'Antwort',
  introSection: 'Einleitung',
  introTitle: 'Ein Genre, fast dreißig Jahre.',
  faqSection: 'FAQ',
  faqLabel: 'Häufige Fragen',
  faqTitle: 'Häufige Fragen zum Awakenings Festival.',
  ownSetAfter: 'history',

  sections: [
    {id: 'where', heading: 'Wo und wann Awakenings stattfindet', title: 'Wo und wann Awakenings stattfindet.'},
    {id: 'history', heading: 'Kurze Geschichte, und wem Awakenings gehört', title: 'Kurze Geschichte, und wem Awakenings gehört.'},
    {id: 'music', heading: 'Was bei Awakenings läuft', title: 'Was bei Awakenings läuft.', kicker: 'Die Musik'}
  ],

  media: ({lang}) => ({
    'thecatrave berlin-race-1909': ownTrackListening('berlin-race-1909', 'Aus einer anderen Ecke als Awakenings: gebrochene Beats im Hall des Dub-Techno. Mein eigener Track, benannt nach Berlin.', lang),
    'Table: Fakten': articleTable({
      headers: ['Angabe', 'Information'],
      rows: [
        ['Gegründet', '30. März 1997, Gashouder, Amsterdam'],
        ['Veranstalter', 'Monumental Productions, seit 2015 im Besitz von LiveStyle'],
        ['Genre', 'Nur Techno'],
        ['Sommerfestival 2026', '10. bis 12. Juli, Beekse Bergen, Hilvarenbeek, ausverkauft'],
        ['Sommerfestival 2027', '9. bis 11. Juli, Beekse Bergen, Hilvarenbeek'],
        ['Amsterdam-Dance-Event-Special 2026', '21. bis 25. Oktober, Gashouder, Amsterdam'],
        ['DJ Mag Top 100 Festivals 2026', 'Platz 34, 14 Plätze tiefer']
      ].map(row => row.map(escapeHtml)),
      label: 'Awakenings Festival: die Fakten'
    }),
    'Image: Blimp': figure('blimp-2007', 1200, 803,
      'Das Awakenings-Luftschiff über dem Publikum, Laserstrahlen kreuzen den Nachthimmel',
      'Awakenings, 2007. Foto: Boris van Hoytema, CC BY 2.0.'),
    'Maceo Plex': articleVideoCollection({
      lang: 'de',
      label: 'Maceo Plex, Mosaic x Awakenings im Gashouder ADE, 2018',
      description: 'Maceo Plex im Gashouder beim Amsterdam-Dance-Event-Special von Awakenings 2018. Aus dem Katalog aufgezeichneter DJ-Sets dieser Seite.',
      items: [articleVideoCard({youtubeId: 'gR_nkH5B35s', genre: 'Techno', artist: 'Maceo Plex', title: 'Mosaic x Awakenings im Gashouder ADE, 2018'})]
    })
  }),

  // The English page's sources, URL for URL, with translated labels.
  sources: [
    {href: 'https://en.wikipedia.org/wiki/Awakenings_(festival)', label: 'Wikipedia: Awakenings (festival) (englisch)'},
    {href: 'https://www.awakenings.com', label: 'Awakenings: offizielle Seite'},
    {href: 'https://www.awakenings.com/how-to-travel-festival26', label: 'Awakenings: Anreise zum Awakenings Festival 2026 (englisch)'},
    {href: 'https://djmag.com/top100festivals', label: 'DJ Mag: Top 100 Festivals 2026 (englisch)'}
  ],

  bandcamp: {
    description: 'Awakenings liegt weit weg von den gebrochenen Beats, die ich selbst mache. Ein Kauf unterstützt meine Arbeit direkt.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks von thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 von thecatrave'}
    ]
  }
};
