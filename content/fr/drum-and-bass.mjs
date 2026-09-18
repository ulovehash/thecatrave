// French drum and bass guide. Structure and facts from the English page
// (drum-and-bass-guide-draft.md, dnb-guide-research.md, build-dnb-article.mjs).
//
// French keywords, measured 2026-09-18 with keywords-explorer-matching-terms,
// country fr (keywords/fr-drum-and-bass.json): drum and bass 700 a month, drum
// n bass 100. French searchers use the English name. The English-language
// questions in the French pull ("what is liquid drum and bass?") stay with the
// English page, and "bass drum" is the instrument.
//
// Listening blocks are placed by [Embed: ...] lines in the draft, at the
// positions the English generator gives them by paragraph index.
//
// The images are the English guide's, in img/dnb/, with translated captions;
// see home-articles.mjs for why a translation may reuse them.
import {
  articleFigure, articleListeningBand, articleListeningCollection, articleTable, articleTrackEmbed
} from '../../site-components.mjs';
import {t} from '../../i18n.mjs';

// Spotify where the English page found a verified master, YouTube where it did
// not; the ids are the English generator's.
const listeningItems = rows => rows.map(row => ({
  year: row.year,
  artist: row.artist,
  title: row.title,
  note: row.note,
  playerHtml: articleTrackEmbed({
    platform: row.spotify ? 'spotify' : 'youtube',
    id: row.spotify || row.youtube,
    title: `${row.artist}, ${row.title}`
  })
}));

const collection = (lang, id, title, description, rows) => articleListeningCollection({
  lang, id, tone: 'cyan', title, description, items: listeningItems(rows)
});

export default {
  lang: 'fr',
  name: 'fr-drum-and-bass',
  file: 'fr/drum-and-bass.html',
  draft: 'fr/drum-and-bass-draft.md',
  canonical: 'https://thecatrave.com/fr/drum-and-bass',
  englishPath: '/drum-and-bass-guide',
  ogImage: 'https://thecatrave.com/img/og/drum-and-bass.jpg',
  image: 'https://thecatrave.com/img/dnb/dnb-cover.webp',
  bodyClass: 'article-page dnb-page',
  minReadingMinutes: 9,

  title: 'Qu’est-ce que la drum and bass ? 174 BPM, histoire et sous-genres',
  description: 'La drum and bass, genre britannique de breakbeats rapides et de sub-bass profonde, joué en général entre 170 et 180 BPM : histoire, artistes et sous-genres.',
  datePublished: '2026-09-18',
  dateModified: '2026-09-18',
  dateLabel: '18 septembre 2026',

  heroKicker: 'Drum and Bass',
  heroTitle: 'Qu’est-ce que la drum and bass ?',
  deck: 'Des breakbeats rapides, une sub-bass profonde et le continuum rave britannique derrière un genre mondial joué le plus souvent entre 170 et 180 BPM.',
  answerLabel: 'Drum and bass : définition',
  breadcrumbName: 'Drum and Bass',

  answerSection: 'Réponse',
  introSection: 'Introduction',
  introTitle: 'D’un continuum rave britannique à un genre mondial.',
  faqSection: 'FAQ',
  faqLabel: 'Questions sur la drum and bass',
  faqTitle: 'Questions fréquentes sur la drum and bass.',

  sections: [
    {id: 'where-jungle-ended', heading: 'Quand la jungle et la drum and bass se sont séparées', title: 'Quand la jungle et la drum and bass se sont séparées.', kicker: '1994 à 1995'},
    {id: 'sound', heading: 'Comment la drum and bass est construite : 174 BPM, le break et les basses', title: 'Comment la drum and bass est construite : 174 BPM, le break et les basses.', tocLabel: 'Comment elle est construite'},
    {id: 'metalheadz', heading: 'Metalheadz et le virage sombre', title: 'Metalheadz et le virage sombre.'},
    {id: 'atmospheric', heading: 'La ligne atmosphérique : Speed, Bristol et Good Looking', title: 'La ligne atmosphérique : Speed, Bristol et Good Looking.', tocLabel: 'Speed, Bristol et Good Looking'},
    {id: 'subgenres', heading: 'Les sous-genres et ce qu’ils veulent dire', title: 'Les sous-genres et ce qu’ils veulent dire.', tocLabel: 'Les sous-genres expliqués'},
    {id: 'global', heading: 'Comment la drum and bass est devenue mondiale', title: 'Comment la drum and bass est devenue mondiale.', kicker: 'Depuis les années 2000'},
    {id: 'now', heading: 'Où en est la drum and bass aujourd’hui', title: 'Où en est la drum and bass aujourd’hui.'}
  ],

  media: ({lang}) => ({
    'Roni Size': articleFigure({
      src: 'img/dnb/roni-size.webp',
      srcset: 'img/dnb/roni-size-320.webp 320w, img/dnb/roni-size.webp 1120w',
      width: 1120, height: 747,
      alt: 'Roni Size derrière une table de mixage au festival Astropolis en 2009',
      caption: 'Roni Size à Astropolis, en 2009. New Forms a été fait à Bristol avec Reprazent et a remporté le Mercury Prize en 1997. Photo : neomusicstore, CC BY 2.0.',
      className: 'wide-archive-image'
    }),
    'Noisia': articleFigure({
      src: 'img/dnb/noisia.webp',
      srcset: 'img/dnb/noisia-320.webp 320w, img/dnb/noisia.webp 1280w',
      width: 1280, height: 720,
      alt: 'Les trois membres de Noisia sur scène à la Brixton Academy de Londres en 2015',
      caption: 'Noisia à la Brixton Academy, en 2015. De la neurofunk construite à Groningue et jouée dans le monde entier : le son comme exercice d’ingénierie de précision. Photo : Emma Louise, CC BY 3.0.',
      className: 'wide-archive-image'
    }),
    'DJ Marky': articleFigure({
      src: 'img/dnb/dj-marky.webp',
      srcset: 'img/dnb/dj-marky-320.webp 320w, img/dnb/dj-marky.webp 1120w',
      width: 1120, height: 840,
      alt: 'DJ Marky passe un disque au club Lov.e de São Paulo',
      caption: 'DJ Marky au Lov.e, à São Paulo, en 2008. LK est passé par un label de Bristol et est devenu un classique des clubs britanniques. Photo : Moretti, CC BY-SA 3.0.',
      className: 'wide-archive-image'
    }),
    'reinforced-listening': collection(lang, 'reinforced-listening',
      'L’album que le label avait déjà.',
      'Reinforced avait quatre ans quand le changement de nom est arrivé, et 4hero avait déjà fait le disque que le nouveau nom cherchait à désigner.',
      [{year: '1994', artist: '4hero', title: 'Parallel Universe', spotify: '0MMBVUug4IJy0pUL2mRmPf',
        note: 'Fait à Dollis Hill et sorti sur leur propre label. Souvent qualifié de premier album de drum and bass, quatre ans avant que Two Pages soit sélectionné pour le Mercury Prize.'}]),
    'split-listening': collection(lang, 'split-listening',
      'L’écart en une année.',
      'Le disque qui a emmené la jungle dans les classements, et celui qui, douze mois plus tard, a porté le nouveau nom sur une major.',
      [{year: '1994', artist: 'M-Beat featuring General Levy', title: 'Incredible', youtube: 'GDwNn8bJ2CQ',
        note: 'De la ragga jungle à la 39e place du classement britannique des singles. C’est le son, et le mot, dont certains producteurs se sont ensuite détournés.'},
       {year: '1995', artist: 'Goldie', title: 'Inner City Life', youtube: 'i-P98B2skts',
        note: 'Tiré de Timeless. La même lignée sur une major, avec des cordes et une critique dans la grande presse, rangée sous drum and bass plutôt que jungle.'}]),
    'sound-listening': collection(lang, 'sound-listening',
      'Two-step et roulant.',
      'Les deux sensations rythmiques sur lesquelles repose le genre, toutes deux de 1995, toutes deux autour de 174, avec une basse qui travaille en sens opposé.',
      [{year: '1995', artist: 'Alex Reece', title: 'Pulp Fiction', spotify: '4bsF2ZJgmq2JiDfyIV3CaX',
        note: 'Le modèle du two-step : une grosse caisse et une caisse claire avec de l’air autour, le morceau glisse au lieu de dégringoler.'},
       {year: '1995', artist: 'Dillinja', title: 'The Angels Fell', youtube: '0wWTqipgm2I',
        note: 'Le break roulant, avec davantage de la batterie d’origine, et la sub-bass qui porte le poids en dessous.'}]),
    'metalheadz-listening': collection(lang, 'metalheadz-listening',
      'Le virage sombre.',
      'Le disque qu’on choisit pour montrer à quoi ressemblait le côté sombre de la drum and bass.',
      [{year: '1996', artist: 'Doc Scott', title: 'Shadow Boxing', youtube: '7Z-6e3zIE2k',
        note: 'Sorti sous son alias Nasty Habits. Distorsion, compression et un rythme d’atelier mécanique, un an avant que la compilation Torque rassemble ce son.'}]),
    'atmospheric-listening': collection(lang, 'atmospheric-listening',
      'L’autre réponse à 1995.',
      'La branche tournée vers le jazz, du modèle Good Looking au Mercury Prize, puis jusqu’au liquid.',
      [{year: '1993', artist: 'LTJ Bukem', title: 'Music', youtube: 'hp8DkZyE9h8',
        note: 'Des cordes, un break doux et pas de drop au sens moderne. La référence de ce qu’on a vendu comme intelligent drum and bass.'},
       {year: '1997', artist: 'Roni Size and Reprazent', title: 'Brown Paper Bag', spotify: '3ZQs8RHO3lPZoUwpavPENL',
        note: 'Tiré de New Forms, fait à Bristol, Mercury Prize 1997. Le disque de drum and bass de ceux qui n’en possédaient aucun autre.'},
       {year: '2004', artist: 'High Contrast', title: 'The Basement Track', youtube: 'C5XGKcvFOJc',
        note: 'Le versant Hospital de la même lignée : les samples soul gardés, construit pour une grande salle, et toujours joué.'}]),
    'Table: subgenres': articleTable({
      headers: ['Terme', 'À peu près quand', 'Ce qu’il veut dire', 'Lien avec le cœur du genre'],
      rows: [
        ['Drum and bass (le cœur)', 'Depuis 1994', 'Autour de 174 BPM, breakbeats, sub-bass en voix principale', 'Un genre plus large issu du même continuum que la jungle'],
        ['Liquid, ou liquid funk', 'Depuis 2000', 'Mélodique et soul, two-step roulant, voix et accords', 'La ligne douce, nommée d’après le CD mixé de Fabio en 2000'],
        ['Jump-up', 'Depuis le milieu des années 1990', 'Basses accrocheuses, drops directs et arrangements pensés pour la piste', 'Une branche festive associée à DJ Zinc et Aphrodite'],
        ['Techstep', 'Depuis le milieu des années 1990', 'Mécanique, industriel et science-fiction ; distorsion et compression', 'Sa période fondatrice, 1996 à 1999, tournait autour de No U-Turn et Torque'],
        ['Neurofunk', 'Depuis la fin des années 1990', 'Modulation de basse héritée du techstep, batterie précise et médiums marqués sur un bas du spectre lourd', 'Descend du techstep ; Ed Rush et Optical, puis Noisia'],
        ['Darkstep', 'Depuis la fin des années 1990', 'Atmosphères sombres, basse agressive et batterie dure', 'Une branche plus lourde qui recoupe le techstep puis la neurofunk'],
        ['Drumfunk', 'Depuis la fin des années 1990', 'Breakbeats denses, édités à la main, avec une variation rythmique détaillée', 'Une lignée centrée sur le break, associée à Photek et Paradox'],
        ['Halftime', 'Depuis les années 2010', 'Le design sonore de la drum and bass avec une batterie en demi-tempo', 'Le point où sa logique de tempo rejoint celle du dubstep']
      ]
    }),
    'subgenre-listening': collection(lang, 'subgenre-listening',
      'Deux des branches.',
      'Le côté mélodique et le côté mécanique du tableau ci-dessus, pour que les termes aient un son.',
      [{year: '2000', artist: 'Calibre', title: 'Mystic', youtube: 'yenh56lBQoU',
        note: 'Le liquid : roulant, chaud, soul, et la version de la drum and bass qui a voyagé le plus loin.'},
       {year: '2010', artist: 'Noisia', title: 'Machine Gun', spotify: '6s9XbbtulHcMwMDzsyoEO7',
        note: 'De la neurofunk construite à Groningue et jouée dans le monde entier : le son comme exercice d’ingénierie de précision.'}]),
    'chart-listening': collection(lang, 'chart-listening',
      'Le premier numéro un.',
      'Le disque qui a mené la drum and bass en tête du classement britannique des singles, dix-sept ans après Timeless.',
      [{year: '2012', artist: 'DJ Fresh featuring Rita Ora', title: 'Hot Right Now', youtube: 'N7OPZOBJZyI',
        note: 'Le premier numéro un britannique du genre, et le début d’une décennie où il n’a cessé de revenir dans les classements.'}]),
    'global-listening': collection(lang, 'global-listening',
      'Pas un disque britannique.',
      'Un disque de São Paulo passé par un label de Bristol et, vingt ans plus tard, la jungle réintégrée dans un album de drum and bass.',
      [{year: '2002', artist: 'DJ Marky and XRS featuring Stamina MC', title: 'LK', spotify: '1fIZzCIwKKGBRDkLA8VukW',
        note: 'Construit sur un sample de Jorge Ben, sorti sur V Recordings de Bryan Gee et devenu un classique des clubs britanniques en 2002.'},
       {year: '2024', artist: 'Nia Archives', title: 'Silence Is Loud', spotify: '1LqFMtMW44W8XQ1OtV43gg',
        note: 'Le morceau titre de l’album de 2024, 16e au Royaume-Uni, qui réintègre les breaks et le feeling reggae de la jungle.'}]),
    'dnb-massive-playlist': articleListeningBand({
      platform: 'spotify',
      id: 'dnb-massive-playlist',
      kicker: t(lang).essentialListening,
      title: 'Massive Drum & Bass : la playlist pour aller plus loin.',
      description: 'La playlist drum and bass de référence de Spotify, pour continuer après que les disques cités ont fait leur démonstration.',
      src: 'https://open.spotify.com/embed/playlist/37i9dQZF1DX5wDmLW735Yd?utm_source=generator',
      iframeTitle: 'Playlist Massive Drum & Bass sur Spotify',
      fullBleed: true,
      tone: 'cyan'
    })
  }),

  sources: [
    {href: 'https://en.wikipedia.org/wiki/Drum_and_bass', label: 'Wikipedia : Drum and bass'},
    {href: 'https://www.beatportal.com/articles/4445-beatports-definitive-history-of-drum-bass', label: 'Beatportal  : Beatport’s Definitive History of Drum & Bass'},
    {href: 'https://en.wikipedia.org/wiki/Metalheadz', label: 'Wikipedia : Metalheadz'},
    {href: 'https://en.wikipedia.org/wiki/Timeless_(Goldie_album)', label: 'Wikipedia : Timeless'},
    {href: 'https://djmag.com/news/drum-bass-streams-increased-94-past-three-years-spotify-reports', label: 'DJ Mag : Drum & bass streams increased 94% in three years, Spotify reports'},
    {href: 'https://en.wikipedia.org/wiki/Nia_Archives', label: 'Wikipedia : Nia Archives'}
  ],

  bandcamp: {
    description: 'Ces sorties sont les plus proches de la pression breaks et basses de cet article. En acheter une soutient directement mon travail.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks par thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 par thecatrave'}
    ]
  }
};
