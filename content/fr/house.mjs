// French house music guide. Structure and facts from the English page
// (house-music-draft.md, build-house-music-article.mjs).
//
// French keywords (keywords/fr-house.json): Keyword Planner, France,
// 2026-10-01: musique house in the 1K to 10K bucket. No exact volume (account
// without ad spend). Wording checked in Google fr-FR the same day:
// "Qu'est-ce que la musique house" and "Quelle est la différence entre la
// house et la techno" are People also ask questions.
//
// Images are the English guide's, in img/house-music/, with translated
// captions; see home-articles.mjs for why a translation may reuse them.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, ownSetListening
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/house-music/${name}-${width}.webp`,
  srcset: `img/house-music/${name}-320.webp 320w, img/house-music/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

const video = (lang, youtubeId, genre, artist, title, text) => articleVideoCollection({
  lang,
  label: `${artist}, ${title}`,
  description: text,
  items: [articleVideoCard({youtubeId, genre, artist, title})]
});

export default {
  lang: 'fr',
  name: 'fr-house',
  file: 'fr/musique-house.html',
  draft: 'fr/musique-house-draft.md',
  canonical: 'https://thecatrave.com/fr/musique-house',
  englishPath: '/house-music-guide',
  ogImage: 'https://thecatrave.com/img/og/house-music.jpg',
  bodyClass: 'article-page house-music-page',
  minReadingMinutes: 9,

  title: 'Qu’est-ce que la musique house ? Histoire, son, origines',
  description: 'La musique house, née à Chicago sur une grosse caisse four-on-the-floor : pourquoi on dit house, Frankie Knuckles, les premiers disques et les styles depuis.',
  datePublished: '2026-10-01',
  dateModified: '2026-10-01',
  dateLabel: '1er octobre 2026',

  heroKicker: 'Guide de la musique house',
  heroTitle: 'La musique house : du Warehouse de Chicago au monde entier',
  deck: 'Un DJ qui remontait des disques disco sur bande, un club plein de danseurs que personne d’autre ne servait, et les disques qu’ils ont faits quand personne ne faisait ceux qu’ils voulaient.',
  answerLabel: 'Musique house : définition',
  breadcrumbName: 'Guide de la musique house',

  answerSection: 'Réponse',
  introSection: 'Introduction',
  introTitle: 'Des disques que personne ne faisait.',
  faqSection: 'FAQ',
  faqLabel: 'Questions fréquentes',
  faqTitle: 'Questions fréquentes sur la musique house.',

  sections: [
    {id: 'what-is-house-music', heading: 'Qu’est-ce que la musique house', title: 'Qu’est-ce que la musique house ?'},
    {id: 'sound', heading: 'Comment sonne la musique house'},
    {id: 'warehouse', heading: 'Le Warehouse et Frankie Knuckles'},
    {id: 'name', heading: 'Pourquoi parle-t-on de house music', title: 'Pourquoi parle-t-on de house music ?'},
    {id: 'first-records', heading: 'Les premiers disques house'},
    {id: 'deep-and-acid', heading: 'Deep house et acid house'},
    {id: 'garage', heading: 'New York et le New Jersey : la garage house'},
    {id: 'global', heading: 'Comment la house est devenue mondiale'},
    {id: 'types', heading: 'Les types de musique house'},
    {id: 'house-techno-edm', heading: 'La house, la techno et l’EDM'}
  ],

  media: ({lang}) => ({
    'Image: TR-808 and TR-909': figure('roland-tr808-tr909', 1200, 896,
      'Une boîte à rythmes Roland TR-808 appuyée contre un mur, à côté d’une Roland TR-909 posée sur le sol d’un studio',
      'Une Roland TR-808 et une TR-909, emballées pour un déménagement de studio. Les deux étaient vendues comme machines d’entraînement pour musiciens ; la house de Chicago a été construite dessus. Photo : Brandon Daniel, CC BY-SA 2.0.'),
    'Image: Frankie Knuckles at ADE': figure('frankie-knuckles-ade-2012', 1200, 800,
      'Frankie Knuckles derrière les platines d’un club d’Amsterdam, éclairé en violet, des gens serrés autour de la cabine',
      'Frankie Knuckles au Sugar Factory d’Amsterdam pendant l’Amsterdam Dance Event, octobre 2012, un an et demi avant sa mort. Photo : deepstereo, CC BY 2.0.'),
    'Image: Frankie Knuckles Way': figure('frankie-knuckles-way-2022', 1200, 900,
      'Une plaque de rue marron à Chicago portant l’inscription Honorary The Godfather of House Music Frankie Knuckles Way',
      'La plaque de rue honorifique de Jefferson Street à Chicago, dans le pâté de maisons où se trouvait le Warehouse, rebaptisé en 2004. Photo : Sarah Stierch, CC BY 4.0.'),
    'Embed: Frankie Knuckles Boiler Room NYC': video(lang, '644UU55eyzk', 'House', 'Frankie Knuckles', 'DJ set, Boiler Room New York, 2013',
      'Frankie Knuckles joue pour Boiler Room à New York en 2013, sur la chaîne de Boiler Room.'),
    'Embed: On and On': video(lang, 'ef868Dctwkg', 'House, 1984', 'Jesse Saunders', 'On & On',
      'Le disque le plus souvent appelé le premier disque house, de 1984.'),
    'Embed: Your Love': video(lang, 'ottFhv0zD_8', 'House, 1987', 'Frankie Knuckles', 'Your Love',
      'La chanson de Jamie Principle telle que Knuckles l’a sortie en 1987, après un an à la jouer depuis la bande.'),
    'Embed: Move Your Body': video(lang, 'dZVxqo2xAd4', 'House, 1986', 'Marshall Jefferson', 'Move Your Body',
      '« The House Music Anthem », sur la chaîne de Trax Records.'),
    'Embed: Can You Feel It': video(lang, 'DrxPFBEr5Bo', 'Deep house, 1986', 'Mr. Fingers', 'Can You Feel It',
      'Larry Heard sous le nom de Mr. Fingers : le disque où commence la deep house.'),
    'Embed: Kerri Chandler Rain': video(lang, 'weyCHkdL-HI', 'Deep house', 'Kerri Chandler', 'Rain',
      '« Rain » de Kerri Chandler, sur la chaîne de Nervous Records.'),
    "Embed: Love Can't Turn Around": video(lang, 'wch77HlcVl0', 'House, 1986', 'Farley « Jackmaster » Funk', "Love Can't Turn Around",
      'Le disque de Chicago qui a atteint la 10e place en Grande-Bretagne en septembre 1986, chanté par Darryl Pandy.'),
    'Embed: Promised Land': video(lang, 'BJyD_TPeJAI', 'House, 1987', 'Joe Smooth', 'Promised Land',
      'L’hymne de Chicago de Joe Smooth, de 1987. Carl Cox et Green Velvet l’ont joué en clôture du festival ARC de Chicago en 2024.'),
    'Embed: One More Time': video(lang, 'FGBhQbmPwH8', 'French house, 2000', 'Daft Punk', 'One More Time',
      'Le single french house de Daft Punk de novembre 2000, sur la chaîne du duo.'),
    'Embed: Black Coffee Cercle': video(lang, 'SGqg_ZzThDU', 'Afro house', 'Black Coffee', 'Salle Wagram, Paris, pour Cercle',
      'Black Coffee joue pour Cercle à Paris.'),
    'thecatrave mix': ownSetListening(0, lang, 'Trente morceaux entre garage, bass music, techno et rave. Mon propre mix.'),
    'Table: Sous-genres': articleTable({
      headers: ['Style', 'Où et quand', 'À quoi il ressemble', 'Un disque pour commencer'],
      rows: [
        ['House de Chicago', 'Chicago, à partir de 1984', 'Boîtes à rythmes, basse profonde, une ligne vocale répétée', 'Marshall Jefferson, « Move Your Body »'],
        ['Deep house', 'Chicago, à partir de 1985', 'Plus lente et plus chaude, accords jazz et soul, longues nappes', 'Mr. Fingers, « Can You Feel It »'],
        ['Acid house', 'Chicago, 1987', 'Une ligne de TB-303 tordue à la main au premier plan', 'Phuture, « Acid Tracks »'],
        ['Garage house', 'New York et New Jersey, années 1980', 'Piano gospel, voix puissantes, proche du disco', 'Kerri Chandler, « Rain »'],
        ['Ghetto house', 'Chicago, début des années 1990', 'Plus rapide et plus brute, du label Dance Mania', 'Paul Johnson'],
        ['French house', 'Paris, fin des années 1990', 'Samples de disques funk et disco, souvent filtrés', 'Daft Punk, « One More Time »'],
        ['Tech house', 'Grande-Bretagne et Espagne, années 1990', 'Batterie techno avec groove house', 'Pas de disque fondateur unique'],
        ['Afro house et amapiano', 'Afrique du Sud, années 1990 à 2020', 'Rythme house avec kwaito, jazz et percussions locales', 'Black Coffee']
      ].map(row => row.map(escapeHtml)),
      label: 'Styles de musique house'
    }),
    'Table: Comparaison': articleTable({
      headers: ['', 'House', 'Techno', 'EDM'],
      rows: [
        ['Où', 'Chicago, début des années 1980', 'Détroit, milieu des années 1980', 'Festivals américains, à partir de 2010 environ'],
        ['Tempo', 'Environ 118 à 128 BPM', 'Environ 120 à 150 BPM', 'Varie selon le style'],
        ['Ce qui mène', 'Groove, basse, souvent une voix', 'Rythme de machine et texture, rarement une voix', 'Drops et grands hooks de synthé'],
        ['Ce que le mot désigne', 'Un genre', 'Un genre', 'Un terme marketing pour une scène']
      ].map(row => row.map(escapeHtml)),
      label: 'Comparaison de la house, de la techno et de l’EDM'
    })
  }),

  // The English page's sources, URL for URL, with translated labels.
  sources: [
    {href: 'https://en.wikipedia.org/wiki/House_music', label: 'Wikipédia : House music (en anglais)'},
    {href: 'https://en.wikipedia.org/wiki/Frankie_Knuckles', label: 'Wikipédia : Frankie Knuckles (en anglais)'},
    {href: 'https://en.wikipedia.org/wiki/Chicago_house', label: 'Wikipédia : Chicago house (en anglais)'},
    {href: 'https://en.wikipedia.org/wiki/Move_Your_Body_(Marshall_Jefferson_song)', label: 'Wikipédia : Move Your Body (Marshall Jefferson song) (en anglais)'},
    {href: 'https://en.wikipedia.org/wiki/Jack_Your_Body', label: 'Wikipédia : Jack Your Body (en anglais)'},
    {href: 'https://en.wikipedia.org/wiki/Paradise_Garage', label: 'Wikipédia : Paradise Garage (en anglais)'},
    {href: 'https://djmag.com/features/all-night-long-40-essential-tracks-40-years-of-house-music', label: 'DJ Mag : 40 essential tracks from 40 years of house music, 2024 (en anglais)'},
    {href: 'https://splice.com/blog/what-is-house-music/', label: 'Splice : What is house music? History, artists and subgenres (en anglais)'}
  ],

  bandcamp: {
    description: 'Deux de mes propres morceaux. En acheter un soutient directement mon travail.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks de thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 de thecatrave'}
    ]
  }
};
