// French UK garage guide. Structure and facts from the English page
// (uk-garage-guide-draft.md, build-uk-garage-article.mjs).
//
// French keywords (keywords/fr-uk-garage.json): uk garage 200 a month in
// France (TRANSLATION-RESEARCH.md, French stage 2). The wording was checked in
// the live Google results for France on 2026-09-23, no Ahrefs units spent:
// French writes "le UK garage", masculine, and the result titles ask "C'est
// quoi le UK garage ?"; "Autres questions" asks "Quel est le style musical
// garage ?", which the first FAQ asks; fr.wikipedia has its own "2-step
// garage" page. The English questions Google also shows in France stay with
// the English page, and the production searches (drum kits, sample packs)
// are rejected, as on the English page (WRITING.md).
//
// The English generator places each image and player by paragraph index. Here
// the draft places them with [Image: ...] and [Embed: ...] lines at the same
// positions. The images are the English guide's, with translated captions.
// The Skream photograph carries no credit on the English page either; that is
// logged in defects.json (uk-garage-skream-photo-uncredited), not guessed here.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, ownTrackListening
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const videos = (lang, label, description, items) => articleVideoCollection({
  lang, label, description, items: items.map(item => articleVideoCard(item))
});

export default {
  lang: 'fr',
  name: 'fr-uk-garage',
  file: 'fr/uk-garage.html',
  draft: 'fr/uk-garage-draft.md',
  canonical: 'https://thecatrave.com/fr/uk-garage',
  englishPath: '/uk-garage-guide',
  ogImage: 'https://thecatrave.com/img/og/uk-garage.jpg',
  bodyClass: 'article-page uk-garage-page',
  minReadingMinutes: 9,

  title: 'C’est quoi le UK garage ? Son, 2-step, speed garage, bassline',
  description: 'Le UK garage, c’est Londres qui joue la house américaine trop vite, jusqu’à casser le beat. Le son, les branches, les classiques et les chiffres du revival.',
  datePublished: '2026-09-23',
  dateModified: '2026-09-23',
  dateLabel: '23 septembre 2026',

  heroKicker: 'Guide du UK garage',
  heroTitle: 'C’est quoi le UK garage ?',
  deck: 'Londres a pris un disque américain, l’a joué trop vite et a cassé le beat. Ce qui en est sorti, et pourquoi on en joue aujourd’hui plus qu’à aucun moment depuis 1999.',
  answerLabel: 'Le UK garage, définition',
  breadcrumbName: 'UK garage',

  answerSection: 'C’est quoi le UK garage ?',
  introSection: 'Introduction',
  introTitle: 'Un malentendu devenu un genre.',
  faqSection: 'FAQ',
  faqLabel: 'Questions fréquentes sur le UK garage',
  faqTitle: 'Questions fréquentes sur le UK garage.',

  sections: [
    {id: 'what-is', heading: 'C’est quoi le UK garage ?', title: 'C’est quoi le UK garage ?'},
    {id: 'naming', heading: 'Pourquoi on l’appelle garage', title: 'Pourquoi on l’appelle garage, et ce que New York vient y faire.', kicker: 'Le nom'},
    {id: 'sound', heading: 'Le son : tempo, swing et beat cassé', tocLabel: 'Le son et le tempo', title: 'Le son : 130 BPM et un beat qui ne tient pas en place.'},
    {id: 'speed-garage', heading: 'Le speed garage', title: 'Le speed garage : la branche qui a gardé le four to the floor.', kicker: '1995 à 1998'},
    {id: 'two-step', heading: 'Le 2-step', title: 'Le 2-step : les deux grosses caisses manquantes qui l’ont rendu célèbre.', kicker: '1997 à 2002'},
    {id: 'bassline', heading: 'Le bassline', title: 'Le bassline : quand le garage est parti vers le nord.', kicker: 'Sheffield'},
    {id: 'vs-house', heading: 'Garage et house : ce qui change vraiment', tocLabel: 'Garage et house', title: 'Garage et house : ce qui change vraiment.'},
    {id: 'ayia-napa', heading: 'Ayia Napa', title: 'Ayia Napa : quatre étés à Chypre.'},
    {id: 'dubstep-grime', heading: 'Comment le garage est devenu le dubstep et le grime', tocLabel: 'Du garage au dubstep et au grime', title: 'Comment le garage est devenu le dubstep et le grime.', kicker: '2001 à 2005'},
    {id: 'classics', heading: 'Les classiques', title: 'Les classiques, et ce que chacun explique.'},
    {id: 'now', heading: 'Qui le joue aujourd’hui', title: 'Qui le joue aujourd’hui.'},
    {id: 'revival', heading: 'Le revival, en chiffres', title: 'Le revival, en chiffres.'}
  ],

  media: ({lang}) => ({
    'paradise': articleFigure({
      src: 'img/uk-garage/paradise-garage-1200.webp',
      srcset: 'img/uk-garage/paradise-garage-320.webp 320w, img/uk-garage/paradise-garage-1200.webp 1200w',
      width: 1200, height: 1475,
      alt: 'L’entrée du Paradise Garage à New York',
      caption: 'Le Paradise Garage, King Street, New York. Il a fermé en 1987, et des DJ britanniques ont donné son nom à un genre qui ne ressemble à rien de ce que Larry Levan y a joué. Photo dans le domaine public, via Wikimedia Commons.',
      className: 'wide-archive-image'
    }),
    'craig-david': articleFigure({
      src: 'img/uk-garage/craig-david-1200.webp',
      srcset: 'img/uk-garage/craig-david-320.webp 320w, img/uk-garage/craig-david-1200.webp 1200w',
      width: 1200, height: 1277,
      alt: 'Craig David sur scène',
      caption: 'Craig David a chanté « Re-Rewind » à dix-huit ans. Le disque est monté à la deuxième place fin 1999 et a fait passer le 2-step de la radio pirate à la télévision de journée. Photo : Raph_PH, CC BY 2.0, via Wikimedia Commons.',
      className: 'wide-archive-image'
    }),
    'skream': articleFigure({
      src: 'img/skream-1200.webp',
      srcset: 'img/skream-320.webp 320w, img/skream-1200.webp 1200w',
      width: 1200, height: 900,
      alt: 'Skream pendant un DJ set, derrière une table de mixage',
      caption: 'Skream, qui faisait des disques de dubstep adolescent et joue aujourd’hui des sets de garage. Le catalogue contient son back to back avec Disclosure chez Boiler Room en 2012, avec trois millions et demi de vues.',
      className: 'wide-archive-image'
    }),
    'Table: tempo': articleTable({
      headers: ['Genre', 'Tempo', 'Ce que fait la batterie'],
      rows: [
        ['House', '120 à 128 BPM', 'Grosse caisse sur les quatre temps'],
        ['UK garage', '130 à 135 BPM', 'Cassée, ou four to the floor dans le speed garage et le bassline'],
        ['Grime', '140 BPM', 'La batterie du garage, sans le swing'],
        ['Dubstep', '140 BPM', 'Half-time, donc ressenti comme 70'],
        ['Jungle et drum and bass', '160 à 175 BPM', 'Breakbeat découpé']
      ].map(row => row.map(escapeHtml))
    }),
    'Table: branches': articleTable({
      headers: ['Branche', 'À peu près quand', 'Ce qu’elle fait', 'Le disque'],
      rows: [
        ['Speed garage', '1995 à 1998', 'Four to the floor, une basse de jungle en dessous', 'Double 99, « Ripgroove »'],
        ['2-step', '1997 à 2002', 'Deux grosses caisses en moins, le beat sautille, voix accélérées', 'Artful Dodger, « Re-Rewind »'],
        ['Bassline', 'à partir de 2002, Sheffield', 'De nouveau four to the floor, la basse porte la mélodie', 'T2, « Heartbroken »'],
        ['Future garage', 'à partir de la fin des années 2000', 'Le swing du garage ralenti et adouci, sub-basse', 'Burial, « Archangel »'],
        ['Revival actuel', 'à partir de 2020', 'Les trois branches à la fois, basse plus forte', 'Interplanetary Criminal et Eliza Rose, « B.O.T.A. »']
      ].map(row => row.map(escapeHtml))
    }),
    // The owner's own tracks inside the text, as on the English page.
    'thecatrave 60-hours-of-mistakes': ownTrackListening('60-hours-of-mistakes', 'Future garage, IDM et breaks : là où ce rythme a fini des années plus tard. Mon propre morceau.', lang),
    'thecatrave degeneration': ownTrackListening('degeneration', 'Garage, dubstep et breaks dans un seul remix, à 132 BPM. Mon propre remix.', lang),
    'origins-listening': videos(lang, 'D’où il vient',
      'Le disque américain que DJ EZ a accéléré à 130, la voix américaine qu’un producteur américain a transformée en premier morceau de 2-step, et le disque de house de Chicago que Londres a joué jusqu’à ce qu’il devienne autre chose.',
      [{youtubeId: 'OhqS5khLQ8U', genre: 'GARAGE HOUSE, 1995', artist: 'Todd Edwards', title: 'The Praise (God In His Hand)'},
       {youtubeId: 'W2IKwskvl2s', genre: 'PROTO 2-STEP, 1997', artist: 'Tina Moore', title: 'Never Gonna Let You Go (Kelly G Dub)'},
       {youtubeId: 'FwxpMIEZ9fg', genre: 'GARAGE HOUSE, 1996', artist: 'Roy Davis Jr', title: 'Gabriel'}]),
    'speed-garage-listening': videos(lang, 'Speed garage',
      'Le disque dont parle cette partie. Une grosse caisse four to the floor, une énorme glissade de basse et presque rien d’autre.',
      [{youtubeId: 'uR3Vw8J8vUo', genre: 'SPEED GARAGE, 1997', artist: 'Double 99', title: 'RIP Groove'}]),
    'two-step-listening': videos(lang, '2-step',
      'Quatre disques qui montrent ce que change le fait d’enlever deux grosses caisses à la mesure. Le crossover, la voix que tout le monde connaît, celui qui a un arrangement, et la ligne de basse que tous les producteurs réécrivent depuis.',
      [{youtubeId: 'M0wv_cQv8As', genre: '2-STEP, 1999', artist: 'Artful Dodger and Craig David', title: 'Re-Rewind'},
       {youtubeId: 'iR2tIyj8_y8', genre: '2-STEP, 2000', artist: 'Sweet Female Attitude', title: 'Flowers'},
       {youtubeId: 'DXCtYUtjDYU', genre: '2-STEP, 1998', artist: 'MJ Cole', title: 'Sincere'},
       {youtubeId: '-15oU-lNSnc', genre: '2-STEP, 2000', artist: 'Wookie', title: 'Battle'}]),
    'chart-listening': videos(lang, 'Les numéros un',
      'Le garage en tête des classements, et ce que faisait l’underground les mêmes années.',
      [{youtubeId: 'OQCQnARnKbc', genre: '2-STEP, 1999', artist: 'Shanks & Bigfoot', title: 'Sweet Like Chocolate'},
       {youtubeId: 'khW5leL19SA', genre: '2-STEP, 2001', artist: 'DJ Pied Piper', title: 'Do You Really Like It?'},
       {youtubeId: 'q5T1EIiDSmo', genre: 'DU GARAGE AU GRIME, 2000', artist: 'Oxide & Neutrino', title: 'Bound 4 Da Reload'},
       {youtubeId: 'mXyeObIl9t4', genre: 'DARK GARAGE, 1999', artist: 'Zed Bias', title: 'Neighbourhood'}]),
    'bassline-listening': videos(lang, 'Bassline',
      'Le crossover de Sheffield, trois semaines à la deuxième place en 2007, et le moment où la branche nordique a obtenu son dû.',
      [{youtubeId: 'KG28976TmDM', genre: 'BASSLINE, 2007', artist: 'T2 and Jodie Aysha', title: 'Heartbroken'}]),
    'napa-film': videos(lang, 'Ayia Napa en film',
      'Boiler Room a consacré un documentaire aux quatre étés où la scène garage londonienne s’est installée dans une station balnéaire chypriote, qui porte plus de la mémoire du genre qu’aucun disque.',
      [{youtubeId: 'yczsC9M5C5w', genre: 'DOCUMENTAIRE', artist: 'Boiler Room', title: 'Sun, Sea and UKG'}]),
    'after-listening': videos(lang, 'Ce que le garage est devenu',
      'Pas du garage selon une définition stricte, et la preuve la plus claire de l’endroit où le garage est allé une fois les voix enlevées.',
      [{youtubeId: '8k_f2QK77ew', genre: 'APRÈS LE GARAGE, 2007', artist: 'Burial', title: 'Archangel'}]),
    'revival-record': videos(lang, 'Le revival en un disque',
      'Cinq semaines numéro un, le 1 400e numéro un de l’histoire du classement britannique, et sans aucun doute un disque de garage.',
      [{youtubeId: 'KtGFByAJRQQ', genre: 'REVIVAL, 2022', artist: 'Eliza Rose and Interplanetary Criminal', title: 'B.O.T.A.'}]),
    'revival-listening': videos(lang, 'La génération actuelle',
      'Les noms qui reviennent le plus dans les 864 sets de garage du catalogue, dans leurs apparitions les plus vues. Sammy Virji et Interplanetary Criminal sont les deux qu’on a le plus de chances d’entendre en soirée cette année.',
      [{youtubeId: '6zPr1rk0Ans', genre: 'UK GARAGE', artist: 'Sammy Virji', title: 'Boiler Room, 2024'},
       {youtubeId: 'qVzW8WpOpvw', genre: 'UK GARAGE', artist: 'Interplanetary Criminal', title: 'Boiler Room, 2025'},
       {youtubeId: 'AWZ5F00eG_k', genre: 'UK GARAGE', artist: 'Yung Singh', title: 'Boiler Room, 2022'},
       {youtubeId: '8vaEYbsuZu8', genre: 'UK GARAGE', artist: 'Anz', title: 'Boiler Room, 2022'}])
  }),

  // The English page's sources, URL for URL, with translated labels.
  sources: [
    {href: 'https://en.wikipedia.org/wiki/UK_garage', label: 'Wikipedia : UK garage (en anglais)'},
    {href: 'https://en.wikipedia.org/wiki/Bassline_(music_genre)', label: 'Wikipedia : Bassline (genre musical, en anglais)'},
    {href: 'https://www.bbc.co.uk/news/entertainment-arts-62768901', label: 'BBC News : Eliza Rose signe le 1 400e single numéro un britannique'},
    {href: 'https://en.wikipedia.org/wiki/Re-Rewind', label: 'Wikipedia : Re-Rewind'},
    {href: 'https://en.wikipedia.org/wiki/Heartbroken_(T2_song)', label: 'Wikipedia : Heartbroken'},
    {href: 'https://en.wikipedia.org/wiki/Paradise_Garage', label: 'Wikipedia : Paradise Garage'}
  ],
  sourcesNote: 'Les nombres de sets, la fréquence des artistes et les vues sont mesurés dans le catalogue de ce site, 62 877 DJ sets enregistrés sur 37 chaînes, en septembre 2026.',

  bandcamp: {
    description: 'Ces morceaux sont du côté breaks et basses de la même famille. En acheter un soutient directement mon travail.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks par thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 par thecatrave'}
    ]
  }
};
