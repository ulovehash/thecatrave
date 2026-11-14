// German house classics guide. Structure, facts, the ten records and the nine
// players from the English page (house-music-classics-draft.md,
// build-house-music-classics-article.mjs, media/house-music-classics.json),
// dated 8 October 2026; nothing added that the English page does not say.
// Passion has no player, as on the English page: the only upload found has
// rights that could not be confirmed.
//
// German wording: Keyword Planner (Germany, German, 14 November 2026) returned
// "house klassiker", "house music klassiker", "house musik klassiker", "house
// klassiker 90er" and "deep house klassiker", all in 10-100
// (keywords/de-house-music-classics.json). The spelling "House-Klassiker"
// follows the German techno list, "Techno-Klassiker".
//
// The two photographs are the English guide's, in img/house-music-classics/,
// with translated alt text and captions.
import {
  articleFigure, articleListeningBand, articleTable, articleVideoCard, articleVideoCollection, ownPlaylists
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const player = (lang, youtubeId, genre, artist, videoTitle) => articleVideoCollection({
  lang, label: `${artist}, ${videoTitle}`,
  description: `${videoTitle} aus dem offiziellen Upload.`,
  items: [articleVideoCard({youtubeId, genre, artist, title: videoTitle})]
});

const playlist = ownPlaylists['rare-electronic-music'];

export default {
  lang: 'de',
  name: 'de-house-music-classics',
  file: 'de/house-klassiker.html',
  draft: 'de/house-music-classics-draft.md',
  canonical: 'https://thecatrave.com/de/house-klassiker',
  englishPath: '/house-music-classics',
  ogImage: 'https://thecatrave.com/img/og/house-music-classics.jpg',
  bodyClass: 'article-page house-music-classics-page',
  minReadingMinutes: 5,

  title: 'House-Klassiker: zehn House-Songs zum Hören, 1988 bis 2001',
  description: 'House-Klassiker der Reihe nach, von Inner City und Lil Louis bis Stardust und Kings of Tomorrow: zehn House-Songs, neun mit Player und den Fakten dahinter.',
  datePublished: '2026-11-14',
  dateModified: '2026-11-14',
  dateLabel: '14. November 2026',

  heroKicker: 'House',
  heroTitle: 'House-Klassiker',
  deck: 'Zehn House-Klassiker in der Reihenfolge ihres Erscheinens, von Inner City 1988 bis Kings of Tomorrow 2001, neun davon mit Player.',
  answerLabel: 'House-Klassiker',
  breadcrumbName: 'House-Klassiker',

  answerSection: 'Antwort',
  introSection: 'Einleitung',
  introTitle: 'Von „Good Life“ bis „Finally“.',
  faqSection: 'FAQ',
  faqLabel: 'FAQ',
  faqTitle: 'Häufige Fragen zu House-Klassikern.',

  sections: [
    {id: 'method', heading: 'Die Platten im Überblick', title: 'Die Platten im Überblick.'},
    {id: 'classic-house-songs', heading: 'House-Klassiker von 1988 bis 2001', title: 'House-Klassiker von 1988 bis 2001.', tocLabel: 'Die zehn Platten',
      subsections: ['good-life', 'french-kiss', 'where-love-lives', 'gypsy-woman', 'passion', 'show-me-love', 'missing', 'music-sounds-better', 'you-dont-know-me', 'finally']},
    {id: 'before-1988', heading: 'Vor 1988, und die anderen Klassiker', title: 'Vor 1988, und die anderen Klassiker.', tocLabel: 'Vor 1988'},
    {id: 'artist-music', heading: 'Mehr zum Hören', title: 'Mehr zum Hören.'},
    {id: 'where-to-start', heading: 'Womit anfangen', title: 'Womit anfangen.'}
  ],

  media: ({lang}) => ({
    glance: articleTable({label: 'Die zehn House-Klassiker im Überblick', headers: ['Jahr', 'Platte'], rows: [
      ['1988', 'Inner City, Good Life'],
      ['1989', 'Lil Louis, French Kiss'],
      ['1991', 'Alison Limerick, Where Love Lives'],
      ['1991', 'Crystal Waters, Gypsy Woman'],
      ['1992', 'Gat Decor, Passion'],
      ['1993', 'Robin S, Show Me Love'],
      ['1995', 'Everything But the Girl, Missing (Todd Terry Remix)'],
      ['1998', 'Stardust, Music Sounds Better With You'],
      ['1999', "Armand van Helden, You Don't Know Me"],
      ['2001', 'Kings of Tomorrow, Finally']
    ].map(row => row.map(escapeHtml))}),
    elsewhere: articleTable({label: 'Frühere Klassiker in anderen Guides', headers: ['Platte', 'Wo sie läuft'], rows: [
      ['Jesse Saunders, Marshall Jefferson, Mr. Fingers, Frankie Knuckles, Farley „Jackmaster“ Funk', '<a href="/de/house-musik">Guide zur House Music</a>'],
      ['Phuture, Acid Tracks; A Guy Called Gerald, Voodoo Ray', '<a href="/de/acid-house">Guide zu Acid House</a>'],
      ['Rhythim Is Rhythim, Strings of Life', '<a href="/de/techno-musik">Techno-Guide</a>']
    ]}),
    'good-life': player(lang, 'KJxJxr9RlKM', 'House, 1988', 'Inner City', 'Good Life'),
    'french-kiss': player(lang, 'rmOAVfEDyhA', 'House, 1989', "Lil' Louis", 'French Kiss (The Original Underground Mix)'),
    'where-love-lives': player(lang, 'Wep5nUkLcDk', 'House, 1991', 'Alison Limerick', 'Where Love Lives (Classic Club Mix)'),
    'gypsy-woman': player(lang, '_KztNIg4cvE', 'House, 1991', 'Crystal Waters', "Gypsy Woman (She's Homeless)"),
    'show-me-love': player(lang, 'onZbcgPaAJM', 'House, 1993', 'Robin S', 'Show Me Love (StoneBridge Club Mix, 2020 remaster)'),
    missing: player(lang, 'IAkY5m00rpY', 'House, 1995', 'Everything But the Girl', 'Missing (Todd Terry Remix)'),
    'music-sounds-better': player(lang, 'FQlAEiCb8m0', 'French House, 1998', 'Stardust', 'Music Sounds Better With You'),
    'you-dont-know-me': player(lang, 'rnlp_avexYQ', 'House, 1999', 'Armand van Helden', "You Don't Know Me (Radio Edit)"),
    finally: player(lang, '9X0WEvHptEE', 'House, 2001', 'Kings of Tomorrow', 'Finally (Radio Edit)'),
    'tr-909': articleFigure({
      src: 'img/house-music-classics/roland-tr-909-1200.webp',
      srcset: 'img/house-music-classics/roland-tr-909-320.webp 320w, img/house-music-classics/roland-tr-909-1200.webp 1200w',
      width: 1200, height: 709,
      alt: 'Die Frontplatte eines Drumcomputers Roland TR-909 mit sechzehn Step-Tasten und Tempoanzeige',
      caption: 'Der Roland TR-909, der Drumcomputer, den Kevin Saunderson für das Instrumental von „Good Life“ benutzte. Foto: Brandon Daniel, CC BY-SA 2.0.',
      className: 'wide-archive-image'
    }),
    'crystal-waters': articleFigure({
      src: 'img/house-music-classics/crystal-waters-2012-900.webp',
      srcset: 'img/house-music-classics/crystal-waters-2012-320.webp 320w, img/house-music-classics/crystal-waters-2012-900.webp 900w',
      width: 900, height: 1350,
      alt: 'Crystal Waters singt auf einer Open-Air-Bühne in ein Mikrofon',
      caption: 'Crystal Waters auf der Bühne des Capital Pride Festival in Washington, DC, 2012. Sie schrieb „Gypsy Woman“, nachdem sie in derselben Stadt eine obdachlose Frau beobachtet hatte. Foto: Elvert Barnes, CC BY-SA 2.0.',
      className: 'portrait-image'
    }),
    'rare-electronic-music': {
      usePreviousParagraph: true,
      render: text => articleListeningBand({
        platform: 'spotify', id: 'own-playlist-rare-electronic-music',
        kicker: 'Eine Playlist von thecatrave', title: playlist.title,
        description: text,
        src: `https://open.spotify.com/embed/playlist/${playlist.id}?utm_source=generator`,
        iframeTitle: `${playlist.title}, zusammengestellt von thecatrave, auf Spotify`,
        fullBleed: true, tone: 'cyan'
      })
    }
  }),

  // The English page's three sources, URL for URL. All in English.
  sources: [
    {href: 'https://www.nme.com/features/best-house-songs-ever-chicago-1970s-1980s-1990s-frankie-knuckles-2678413', label: 'NME: die besten House-Songs'},
    {href: 'https://6amgroup.com/articles/guides-all/the-10-best-classic-house-music-songs', label: '6AM Group: die 10 besten klassischen House-Songs'},
    {href: 'https://www.billboard.com/lists/best-house-music-songs-all-time/', label: 'Billboard: die 50 besten House-Songs aller Zeiten'}
  ],

  bandcamp: {
    description: 'Wer einen davon kauft, unterstützt die Musik und das Schreiben direkt.',
    tracks: [
      {title: 'thecatrave, Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks von thecatrave'},
      {title: 'thecatrave, 60 hours of mistakes', id: '3330948631', url: 'https://thecatrave.bandcamp.com/track/60-hours-of-mistakes', linkText: '60 hours of mistakes von thecatrave'}
    ]
  }
};
