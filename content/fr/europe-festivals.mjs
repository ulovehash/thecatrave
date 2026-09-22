// French Europe festivals comparison. Structure, facts, dates and the "not
// announced" labels from the English page (best-electronic-music-festivals-
// europe-draft.md, build-europe-festivals-article.mjs), checked there on
// 22 September 2026.
//
// French wording checked on 2026-09-22 in DuckDuckGo's France region, because
// google.fr answered with a bot check; no Ahrefs units spent
// (keywords/fr-europe-festivals.json). The French result set is article-shaped
// (Generation Voyage, Red Bull France, Tunetrail, eurotravelo) and writes
// "festivals électro en Europe" and "festivals de musique électronique en
// Europe".
//
// Maintenance: the page carries the same 2027 dates as the English one and is
// registered in festival-editions.mjs under its own heading, so the yearly
// reminder prints for it too. Change the dates here and in the draft whenever
// the English page changes them.
//
// The English generator places each image and player by position. Here the
// draft places them with [Image: ...], [Embed: ...] and [Table: ...] lines at
// the same points. The images are the English page's, in img/europe-festivals/,
// with translated captions; see home-articles.mjs for why a translation may
// reuse them.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, ownSetListening
} from '../../site-components.mjs';

const figure = (name, height, alt, caption) => articleFigure({
  src: `img/europe-festivals/${name}-1200.webp`,
  srcset: `img/europe-festivals/${name}-320.webp 320w, img/europe-festivals/${name}-1200.webp 1200w`,
  width: 1200, height, alt, caption, className: 'wide-archive-image'
});

const video = (lang, label, description, item) => articleVideoCollection({
  lang, label, description, items: [articleVideoCard(item)]
});

const link = ([href, label]) => `<a href="${href}" target="_blank" rel="noopener noreferrer">${label}</a>`;

const headers = ['Festival', 'Où', 'Dates 2027', 'Son', 'Taille', 'Hébergement', 'Idéal pour'];

const festivals = [
  ['Tomorrowland', 'Boom, Belgique', 'Pas encore annoncées (fin juillet ces dernières années)', 'EDM big room, house, techno', 'Jusqu’à 200 000 par week-end', 'Camping DreamVille', 'Un premier grand festival'],
  ['Untold', 'Cluj-Napoca, Roumanie', '5 au 8 août', 'EDM big room, techno', 'Plus de 500 000 entrées sur quatre jours (2026)', 'Ville', 'Un festival et une escapade en ville'],
  ['Parookaville', 'Weeze, Allemagne', '16 au 18 juillet', 'EDM grand public des festivals', 'Environ 75 000 par jour', 'Camping', 'Un week-end à thème'],
  ['Creamfields', 'Daresbury, Angleterre', '26 au 29 août', 'House, trance, big room', '80 000 (2026)', 'Camping', 'Un public britannique house et trance'],
  ['Ultra Europe', 'Split, Croatie', '9 au 11 juillet', 'EDM big room', 'Non publié ici', 'Ville', 'Des vacances à la plage avec un festival'],
  ['Mysteryland', 'Haarlemmermeer, Pays-Bas', '27 au 29 août', 'De la techno et la house au hardstyle', 'Plus de 125 000 par an (chiffre du festival)', 'Camping', 'La variété près d’Amsterdam'],
  ['Defqon.1', 'Biddinghuizen, Pays-Bas', '24 au 27 juin', 'Hardstyle, hardcore', 'Environ 268 000 visiteurs (2025)', 'Camping', 'Les fans de hardstyle'],
  ['Awakenings', 'Hilvarenbeek, Pays-Bas', '9 au 11 juillet', 'Techno', 'Non publié ici', 'Camping', 'Un week-end techno'],
  ['Dekmantel', 'Amsterdam, Pays-Bas', 'Pas encore annoncées (fin juillet à début août récemment)', 'Techno, house, electro, disco, expérimental', 'Non publié ici', 'Ville, festival de jour', 'Découvrir des DJ'],
  ['Time Warp', 'Mannheim, Allemagne', '3 avril', 'Techno, house', 'Plus de 40 000', 'Une nuit en intérieur', 'La techno en une seule nuit'],
  ['Kappa FuturFestival', 'Turin, Italie', '2 au 4 juillet', 'Techno, house', 'Non publié ici', 'Ville, de midi à minuit', 'La techno en plein jour'],
  ['Sónar', 'Barcelone, Espagne', '17 au 19 juin', 'Électronique, expérimental, lives', 'Environ 150 000 (2026)', 'Ville', 'Une programmation aventureuse'],
  ['Monegros Desert Festival', 'Fraga, Espagne', 'Pas encore annoncée (juillet)', 'De nombreux styles électroniques', 'Non publié ici', 'Une nuit, tentes VIP', 'Une nuit extrême'],
  ['Boomtown', 'Près de Winchester, Angleterre', '11 au 15 août', 'Du reggae et du dub à la techno, groupes live', 'Autorisé pour plus de 75 000', 'Camping', 'Un festival comme un monde à part']
];

const smallerFestivals = [
  ['Garbicz', 'Près de Torzym, Pologne', 'Pas encore annoncées (30 juillet au 3 août en 2026)', 'House, techno, ambient, lives', 'Environ 11 000 (2026)', 'Camping', 'De longs sets dans les bois'],
  ['NACHTI', 'Olganitz, Allemagne', '30 juillet au 1er août', 'Musique de club électronique et lives', 'Environ 3 000 (années Nachtdigital)', 'Bungalows et camping', 'Un petit week-end à la programmation soignée'],
  ['Houghton', 'Houghton Hall, Norfolk, Angleterre', 'Pas encore annoncées (août)', 'House, techno, leftfield', 'Environ 10 000', 'Camping', 'La musique jour et nuit'],
  ['Draaimolen', 'Tilburg, Pays-Bas', 'Pas encore annoncées (début septembre)', 'Techno, ambient, expérimental', 'Non publié ici', 'Ville, festival de jour', 'La techno sans la foule'],
  ['Waking Life', 'Crato, Portugal', 'Mi-juin (pas encore sur le site officiel)', 'Électronique, expérimental, musiques du monde', 'Non publié ici', 'Camping et tipis', 'Une semaine de solstice à la campagne'],
  ['Kala', 'Dhërmi, Albanie', '2 au 9 juin', 'Dance music, DJ et lives', 'Non publié ici', 'Hôtel inclus', 'Une semaine à la plage'],
  ['Freerotation', 'Clyro, Pays de Galles', 'Pas encore annoncées (juillet)', 'Deep house, techno', 'Non publié ici', 'Réservé aux membres', 'Si quelqu’un vous invite']
];

export default {
  lang: 'fr',
  name: 'fr-europe-festivals',
  file: 'fr/festivals-electro-europe.html',
  draft: 'fr/festivals-electro-europe-draft.md',
  canonical: 'https://thecatrave.com/fr/festivals-electro-europe',
  englishPath: '/best-electronic-music-festivals-europe',
  ogImage: 'https://thecatrave.com/img/og/europe-festivals.jpg',
  bodyClass: 'article-page europe-festivals-page',
  minReadingMinutes: 9,

  title: 'Les meilleurs festivals électro en Europe en 2027, comparés',
  description: 'Quatorze grands et sept petits festivals de musique électronique en Europe en 2027, comparés par son, taille, cadre et dates, confirmées ou non.',
  datePublished: '2026-09-22',
  dateModified: '2026-09-22',
  dateLabel: '22 septembre 2026',

  heroKicker: 'Guide des festivals 2027',
  heroTitle: 'Les meilleurs festivals de musique électronique en Europe en 2027',
  deck: 'Quatorze grands festivals et sept plus petits, comparés selon ce qu’ils programment, leur taille, l’endroit où l’on dort et leurs dates, avec les dates 2027 confirmées et celles qui ne le sont pas encore.',
  answerLabel: 'Les meilleurs festivals électro en Europe',
  breadcrumbName: 'Festivals électro en Europe',

  answerSection: 'Réponse',
  introSection: 'Introduction',
  introTitle: 'Une liste pour choisir.',
  faqSection: 'FAQ',
  faqLabel: 'Questions fréquentes sur les festivals en Europe',
  faqTitle: 'Questions fréquentes sur les festivals de musique électronique en Europe.',

  sections: [
    {id: 'criteria', heading: 'Comment cette liste a été établie', title: 'Comment cette liste a été établie.'},
    {id: 'at-a-glance', heading: 'Les dates 2027 en un coup d’œil', title: 'Les dates 2027 en un coup d’œil.'},
    {id: 'big-stages', heading: 'Grandes scènes', title: 'Grandes scènes.', kicker: 'L’EDM et la main stage',
      subsections: ['tomorrowland', 'untold', 'parookaville', 'creamfields', 'ultra-europe', 'mysteryland']},
    {id: 'hard-dance', heading: 'Hard dance', title: 'Hard dance.', subsections: ['defqon-1']},
    {id: 'techno-house', heading: 'Techno et house', title: 'Techno et house.',
      subsections: ['awakenings', 'dekmantel', 'time-warp', 'kappa-futurfestival', 'sonar']},
    {id: 'desert-cities', heading: 'Désert et villes à thème', title: 'Désert et villes à thème.',
      subsections: ['monegros-desert-festival', 'boomtown']},
    {id: 'smaller', heading: 'Petits festivals qui valent le voyage', title: 'Petits festivals qui valent le voyage.', kicker: 'Underground et boutique',
      subsections: ['garbicz', 'nachti', 'houghton', 'draaimolen', 'waking-life', 'kala', 'freerotation']},
    {id: 'not-listed', heading: 'Absents de la liste, et pourquoi', title: 'Absents de la liste, et pourquoi.'},
    {id: 'choose', heading: 'Comment choisir', title: 'Comment choisir.'}
  ],

  media: ({lang}) => ({
    'Table: major': articleTable({label: 'Les grands festivals européens comparés, 2027', headers, rows: festivals}),
    'Table: smaller': articleTable({label: 'Les petits festivals européens comparés, 2027', headers, rows: smallerFestivals}),
    'defqon': figure('defqon1-red-stage-2022', 900,
      'La scène principale Red de Defqon.1 en 2022, une scène ailée au-dessus d’une grande foule en plein jour',
      'La Red stage de Defqon.1 en 2022, la grande scène hardstyle. Chaque scène du festival porte le nom d’une couleur et est consacrée à un style. Photo : Blyra92, CC BY-SA 4.0.'),
    'kappa': figure('kappa-futurfestival-2025', 900,
      'Un public en plein jour sous la charpente d’acier de la Futur Stage au Kappa FuturFestival, au Parco Dora de Turin',
      'La Futur Stage du Kappa FuturFestival en juillet 2025, sous la charpente d’acier d’une ancienne halle industrielle du Parco Dora, à Turin. Photo : MadBob, CC BY 4.0.'),
    'monegros': figure('monegros-desert-2009', 900,
      'Une foule dense en plein soleil au Monegros Desert Festival, avec une tour de haut-parleurs et des tentes derrière',
      'Le Monegros Desert Festival à une heure de l’après-midi en 2009. Le festival dure du samedi après-midi au dimanche midi, dans le désert d’Aragon près de Fraga. Photo : BigSus, CC BY 2.5.'),
    'nachti': figure('nachtdigital-2014', 675,
      'Un DJ joue sous une lumière bleue et des néons dans une salle sombre à Nachtdigital en 2014',
      'Nachtdigital au Bungalowdorf Olganitz en 2014, quand le festival portait encore ce nom. Photo : Robert Richter pour Nachtdigital, CC BY 2.0.'),
    'garbicz-set': video(lang, 'Garbicz, depuis chez vous',
      'Le set au lever du soleil d’Ezio Aguiar à Garbicz en 2025, mis en ligne par l’artiste. Le festival joue toute la nuit, et ce sont les sets du matin dont on parle.',
      {youtubeId: 'IhBa3o5YYME', genre: 'GARBICZ, 2025', artist: 'Ezio Aguiar', title: 'Sunrise set'}),
    'dekmantel-set': video(lang, 'Dekmantel, depuis chez vous',
      'Four Tet sur la scène The Loop à Dekmantel en 2025, mis en ligne par le festival. Le genre de set long et ouvert qui a fait la réputation du festival.',
      {youtubeId: 'E4NXVs4SlhE', genre: 'DEKMANTEL, 2025', artist: 'Four Tet', title: 'The Loop'}),
    'boomtown-set': video(lang, 'Boomtown, depuis chez vous',
      'Pearson Sound sur la scène Anara à Boomtown en 2025, filmé par Keep Hush. L’un des dizaines de petits lieux de la ville-festival.',
      {youtubeId: 'OFuZ3lsZKxc', genre: 'BOOMTOWN, 2025', artist: 'Pearson Sound', title: 'Anara stage'}),
    // The owner's two mixes, where the English page has them: after the big
    // stages and at the end of How to choose.
    'first-mix': ownSetListening(0, lang),
    'second-mix': ownSetListening(1, lang)
  }),

  sources: [
    {html: `Dates 2027, lues sur le site officiel de chaque festival le 22 septembre 2026 : ${[
      ['https://www.defqon1.com/', 'Defqon.1'], ['https://www.awakenings.com/en/', 'Awakenings'], ['https://www.time-warp.de/', 'Time Warp'],
      ['https://www.kappafuturfestival.it/', 'Kappa FuturFestival'], ['https://www.boomtownfair.co.uk/', 'Boomtown'], ['https://www.monegrosfestival.com/', 'Monegros'],
      ['https://www.dekmantelfestival.com/', 'Dekmantel'], ['https://belgium.tomorrowland.com/', 'Tomorrowland']
    ].map(link).join(', ')}.`},
    {html: 'Dates et taille d’Untold, Parookaville, Creamfields, Ultra Europe, Mysteryland et Sónar : le guide de ce site consacré à chacun de ces festivals, lié plus haut, qui cite ses propres sources.'},
    {href: 'https://djmag.com/top100festivals', label: 'DJ Mag : Top 100 Festivals 2026'},
    {html: `Wikipedia : ${[
      ['https://en.wikipedia.org/wiki/Defqon.1_Festival', 'Defqon.1'], ['https://en.wikipedia.org/wiki/Time_Warp_(festival)', 'Time Warp'], ['https://en.wikipedia.org/wiki/Boomtown_(festival)', 'Boomtown']
    ].map(link).join(', ')}`},
    {href: 'https://ra.co/news/85120', label: 'Resident Advisor : le festival EXIT déménage au Monténégro en 2026'}
  ],

  bandcamp: {
    description: 'Entre deux festivals, la musique que je fais moi-même : des breaks avec de la techno et du dub dedans. En acheter une sortie soutient directement mon travail.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 par thecatrave'},
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks par thecatrave'}
    ]
  }
};
