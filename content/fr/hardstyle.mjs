// French hardstyle guide. Structure and facts from the English page
// (hardstyle-guide-draft.md, build-hardstyle-article.mjs).
//
// French keywords (keywords/fr-hardstyle.json): Keyword Planner, France,
// 2026-10-01: hardstyle in the 1K to 10K bucket. No exact volume (account
// without ad spend). Wording checked in Google fr-FR the same day: "Qu'est-ce
// que le hardstyle", "Quels sont les différents types de hardstyle" and "Qui
// sont quelques artistes hardstyle" are People also ask questions; the FAQ
// follows the first and the artists one.
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
  lang: 'fr',
  name: 'fr-hardstyle',
  file: 'fr/hardstyle.html',
  draft: 'fr/hardstyle-draft.md',
  canonical: 'https://thecatrave.com/fr/hardstyle',
  englishPath: '/hardstyle-guide',
  ogImage: 'https://thecatrave.com/img/og/hardstyle.jpg',
  bodyClass: 'article-page hardstyle-page',
  minReadingMinutes: 8,

  title: 'Qu’est-ce que le hardstyle ? Histoire, son, artistes, styles',
  description: 'Le hardstyle, né de la hard dance néerlandaise, est devenu un son de festival mondial : kicks distordus, reverse bass, artistes clés, branches euphorique et raw.',
  datePublished: '2026-10-01',
  dateModified: '2026-10-01',
  dateLabel: '1er octobre 2026',

  heroKicker: 'Guide du hardstyle',
  heroTitle: 'Hardstyle : grosses caisses distordues, reverse bass et échelle de festival',
  deck: 'Un échange de la fin des années 1990 entre hard house, hard trance et hardcore, devenu le son central d’un circuit de festivals néerlandais.',
  answerLabel: 'Hardstyle : définition',
  breadcrumbName: 'Hardstyle',

  answerSection: 'Réponse',
  introSection: 'Introduction',
  introTitle: 'La grosse caisse porte le disque.',
  faqSection: 'FAQ',
  faqLabel: 'Questions fréquentes',
  faqTitle: 'Questions fréquentes sur le hardstyle.',

  sections: [
    {id: 'what-is', heading: 'Qu’est-ce que le hardstyle', title: 'Qu’est-ce que le hardstyle ?'},
    {id: 'before', heading: 'Avant le nom', title: 'Avant le nom.', kicker: '1999 à 2002'},
    {id: 'scene', heading: 'Une scène devient hardstyle', title: 'Une scène devient hardstyle.', kicker: 'Le début des années 2000'},
    {id: 'melodic', heading: 'Le virage mélodique', title: 'Le virage mélodique.', kicker: '2005 à 2010'},
    {id: 'branches', heading: 'Hardstyle euphorique et raw hardstyle', title: 'Hardstyle euphorique et raw hardstyle.', tocLabel: 'Euphorique et raw'},
    {id: 'comparison', heading: 'Hardstyle, hardcore et techno', title: 'Hardstyle, hardcore et techno.'},
    {id: 'festivals', heading: 'Festivals de hardstyle et scène actuelle', title: 'Festivals de hardstyle et scène actuelle.', tocLabel: 'Festivals et scène actuelle'}
  ],

  media: ({lang}) => ({
    'thecatrave degeneration': ownTrackListening('degeneration', 'Loin du hardstyle : la voix de Mylène Farmer sur des breaks, entre dubstep et UK garage. Mon propre remix.', lang),
    'early-hardstyle-listening': articleListeningCollection({
      lang, id: 'early-hardstyle-listening',
      title: 'De la reverse bass à un centre mélodique',
      description: 'Deux disques Scantraxx du moment où le hardstyle des débuts commençait à s’ouvrir à une forme plus mélodique.',
      items: [
        track('youtube', 'Q_N2Gv2_0IU', 'DJ Duro & The Prophet', 'Shizzle My Dizzle', '2005', 'Reverse bass, un riff de hard trance et l’arrangement dépouillé du premier son Scantraxx.'),
        track('spotify', '6mOofVIiHmXHlvEapIN8k9', 'Blademasterz', 'Masterblade', '2006', 'Brennan Heart sous son nom Blademasterz, avec plus de mélodie dans l’arrangement.')
      ]
    }),
    'melodic-hardstyle-listening': articleListeningCollection({
      lang, id: 'melodic-hardstyle-listening',
      title: 'Le virage mélodique de la fin des années 2000',
      description: 'La mélodie du lead et la grosse caisse à hauteur variable deviennent à parts égales le disque.',
      items: [
        track('spotify', '5QTEBCV3eRst0uoLUHhJOr', 'Headhunterz', 'Rock Civilization', '2007', 'Un exemple compact du son de lead plus brillant et d’une grosse caisse qui suit la mélodie.'),
        track('spotify', '1Ns5FtyALVwzFuRS4nH9xd', 'D-Block & S-te-Fan', 'Music Made Addict', '2009', 'Un disque Scantraxx emblématique de l’expansion mélodique du hardstyle.')
      ]
    }),
    'raw-hardstyle-listening': articleListeningCollection({
      lang, id: 'raw-hardstyle-listening',
      title: 'Mélodie, pression et étiquette raw',
      description: 'Un disque à la frontière entre mélodique et raw, puis la sortie qui a donné son nom à la branche plus sombre.',
      items: [
        track('spotify', '06BmUrVuMtTdOuaf9CTYAz', 'B-Front & Frontliner', 'Magic', '2010', 'Une grande mélodie rencontre la pression plus sombre de la grosse caisse qui allait définir la scission.'),
        track('spotify', '6GcT1R34r7r2OcTUPjUbUw', 'Zatox & Nikkita', 'Raw Style', '2011', 'Le titre auquel Scantraxx attribue le nom de raw hardstyle.')
      ]
    }),
    'Table: Comparaison': articleTable({
      headers: ['Style', 'Tempo typique', 'Centre rythmique', 'Structure mélodique'],
      rows: [
        ['Hardstyle', '145 à 155 BPM', 'Grosse caisse distordue à hauteur variable et reverse bass', 'Longs breakdowns et grands leads courants'],
        ['Hardcore', '160 BPM et plus', 'Motifs de grosse caisse plus rapides et plus abrasifs', 'La mélodie varie ; l’impact reste souvent au premier plan'],
        ['Techno', '125 à 150 BPM', 'Groove bouclé et rythme de machine', 'Dépend en général moins d’un long breakdown mélodique'],
        ['Hard techno', '140 à 160 BPM', 'Groove techno entraînant avec un design de grosse caisse plus dur', 'Peut emprunter des sons hardstyle sans son arrangement complet']
      ].map(row => row.map(escapeHtml)),
      label: 'Comparaison entre hardstyle, hardcore et techno'
    }),
    'Image: Defqon': articleFigure({
      src: 'img/hardstyle/defqon1-red-2024-1280.webp',
      srcset: 'img/hardstyle/defqon1-red-2024-320.webp 320w, img/hardstyle/defqon1-red-2024-1280.webp 1280w',
      width: 1280, height: 720,
      alt: 'La scène principale rouge du Defqon.1 en 2024, avec un grand public face à la scène en plein jour',
      caption: 'La scène Red au Defqon.1 en 2024. Le festival sépare hardstyle, hardcore et sons voisins sur des scènes codées par couleur. Photographie : DELTAFXUniverse, CC BY-SA 4.0.',
      className: 'wide-archive-image'
    })
  }),

  // The English page's sources, URL for URL, with translated labels.
  sources: [
    {href: 'https://www.scantraxx.com/news/scantraxx-recordz-is-born-history-of-hardstyle-column', label: 'Scantraxx : La naissance de Scantraxx Recordz (en anglais)'},
    {href: 'https://edmidentity.com/2023/03/11/dj-the-prophet-basscon-wasteland-interview/', label: 'EDM Identity : DJ The Prophet sur la transition du hardcore au hardstyle (en anglais)'},
    {href: 'https://www.q-dance.com/artists/31843145', label: 'Q-dance : DJ The Prophet (en anglais)'},
    {href: 'https://www.scantraxx.com/news/og-raw', label: 'Scantraxx : l’essor du raw hardstyle (en anglais)'},
    {href: 'https://www.scantraxx.com/company', label: 'Scantraxx : entreprise et histoire du label (en anglais)'},
    {href: 'https://en.wikipedia.org/wiki/Hardstyle', label: 'Wikipédia : Hardstyle, carte des sources (en anglais)'}
  ],

  bandcamp: {
    description: 'Mon propre travail est plus proche des breaks, de la techno et de la rave que du hardstyle. Acheter l’une de ces sorties soutient directement la musique et l’écriture.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks de thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 de thecatrave'}
    ]
  }
};
