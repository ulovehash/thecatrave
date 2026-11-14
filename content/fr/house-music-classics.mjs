// French house classics guide. Structure, facts, the ten records and the nine
// players from the English page (house-music-classics-draft.md,
// build-house-music-classics-article.mjs, media/house-music-classics.json),
// dated 8 October 2026; nothing added that the English page does not say.
// Passion has no player, as on the English page: the only upload found has
// rights that could not be confirmed.
//
// French wording: Keyword Planner (France, French, 14 November 2026) returned
// "musique house" in 1K-10K, "house music 1990" in 100-1K and "classique house"
// in 10-100 (keywords/fr-house-music-classics.json). The broad "musique house"
// belongs to /fr/musique-house; this page answers "classique house".
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
  description: `${videoTitle} depuis la mise en ligne officielle.`,
  items: [articleVideoCard({youtubeId, genre, artist, title: videoTitle})]
});

const playlist = ownPlaylists['rare-electronic-music'];

export default {
  lang: 'fr',
  name: 'fr-house-music-classics',
  file: 'fr/classiques-house.html',
  draft: 'fr/house-music-classics-draft.md',
  canonical: 'https://thecatrave.com/fr/classiques-house',
  englishPath: '/house-music-classics',
  ogImage: 'https://thecatrave.com/img/og/house-music-classics.jpg',
  bodyClass: 'article-page house-music-classics-page',
  minReadingMinutes: 5,

  title: 'Classique house : dix classiques de la musique house, 1988 à 2001',
  description: 'Les classiques house dans l’ordre, d’Inner City et Lil Louis à Stardust et Kings of Tomorrow : dix morceaux, neuf avec un lecteur et l’histoire derrière.',
  datePublished: '2026-11-14',
  dateModified: '2026-11-14',
  dateLabel: '14 novembre 2026',

  heroKicker: 'House',
  heroTitle: 'Classiques house',
  deck: 'Dix classiques house dans l’ordre de leur sortie, d’Inner City en 1988 à Kings of Tomorrow en 2001, dont neuf avec un lecteur.',
  answerLabel: 'Classiques house',
  breadcrumbName: 'Classiques house',

  answerSection: 'Réponse',
  introSection: 'Introduction',
  introTitle: 'De « Good Life » à « Finally ».',
  faqSection: 'FAQ',
  faqLabel: 'FAQ',
  faqTitle: 'Questions fréquentes sur les classiques house.',

  sections: [
    {id: 'method', heading: 'Les disques en un coup d’œil', title: 'Les disques en un coup d’œil.'},
    {id: 'classic-house-songs', heading: 'Les classiques de la musique house, de 1988 à 2001', title: 'Les classiques de la musique house, de 1988 à 2001.', tocLabel: 'Les dix disques',
      subsections: ['good-life', 'french-kiss', 'where-love-lives', 'gypsy-woman', 'passion', 'show-me-love', 'missing', 'music-sounds-better', 'you-dont-know-me', 'finally']},
    {id: 'before-1988', heading: 'Avant 1988, et les autres classiques', title: 'Avant 1988, et les autres classiques.', tocLabel: 'Avant 1988'},
    {id: 'artist-music', heading: 'Encore de quoi écouter', title: 'Encore de quoi écouter.'},
    {id: 'where-to-start', heading: 'Par où commencer', title: 'Par où commencer.'}
  ],

  media: ({lang}) => ({
    glance: articleTable({label: 'Les dix classiques house en un coup d’œil', headers: ['Année', 'Disque'], rows: [
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
    elsewhere: articleTable({label: 'Classiques plus anciens dans d’autres guides', headers: ['Disque', 'Où l’écouter'], rows: [
      ['Jesse Saunders, Marshall Jefferson, Mr. Fingers, Frankie Knuckles, Farley « Jackmaster » Funk', '<a href="/fr/musique-house">Guide de la musique house</a>'],
      ['Phuture, Acid Tracks; A Guy Called Gerald, Voodoo Ray', '<a href="/fr/acid-house">Guide de l’acid house</a>'],
      ['Rhythim Is Rhythim, Strings of Life', '<a href="/fr/techno">Guide de la techno</a>']
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
      alt: 'La façade d’une boîte à rythmes Roland TR-909, avec seize touches de pas et l’affichage du tempo',
      caption: 'La Roland TR-909, la boîte à rythmes utilisée par Kevin Saunderson pour l’instrumental de « Good Life ». Photo : Brandon Daniel, CC BY-SA 2.0.',
      className: 'wide-archive-image'
    }),
    'crystal-waters': articleFigure({
      src: 'img/house-music-classics/crystal-waters-2012-900.webp',
      srcset: 'img/house-music-classics/crystal-waters-2012-320.webp 320w, img/house-music-classics/crystal-waters-2012-900.webp 900w',
      width: 900, height: 1350,
      alt: 'Crystal Waters chante dans un micro sur une scène en plein air',
      caption: 'Crystal Waters sur la scène du Capital Pride Festival à Washington, en 2012. Elle a écrit « Gypsy Woman » après avoir observé une femme sans abri dans la même ville. Photo : Elvert Barnes, CC BY-SA 2.0.',
      className: 'portrait-image'
    }),
    'rare-electronic-music': {
      usePreviousParagraph: true,
      render: text => articleListeningBand({
        platform: 'spotify', id: 'own-playlist-rare-electronic-music',
        kicker: 'Une playlist de thecatrave', title: playlist.title,
        description: text,
        src: `https://open.spotify.com/embed/playlist/${playlist.id}?utm_source=generator`,
        iframeTitle: `${playlist.title}, composée par thecatrave, sur Spotify`,
        fullBleed: true, tone: 'cyan'
      })
    }
  }),

  // The English page's three sources, URL for URL. All in English.
  sources: [
    {href: 'https://www.nme.com/features/best-house-songs-ever-chicago-1970s-1980s-1990s-frankie-knuckles-2678413', label: 'NME : les meilleurs morceaux house'},
    {href: 'https://6amgroup.com/articles/guides-all/the-10-best-classic-house-music-songs', label: '6AM Group : les 10 meilleurs classiques house'},
    {href: 'https://www.billboard.com/lists/best-house-music-songs-all-time/', label: 'Billboard : les 50 meilleurs morceaux house de tous les temps'}
  ],

  bandcamp: {
    description: 'Acheter l’un d’eux soutient directement la musique et l’écriture.',
    tracks: [
      {title: 'thecatrave, Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks par thecatrave'},
      {title: 'thecatrave, 60 hours of mistakes', id: '3330948631', url: 'https://thecatrave.bandcamp.com/track/60-hours-of-mistakes', linkText: '60 hours of mistakes par thecatrave'}
    ]
  }
};
