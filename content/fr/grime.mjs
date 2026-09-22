// French grime guide. Structure and facts from the English page
// (grime-music-guide-draft.md, build-grime-article.mjs).
//
// French wording checked on 2026-09-22 in DuckDuckGo's France region, because
// google.fr answered with a bot check; no Ahrefs units spent
// (keywords/fr-grime.json). French writes "le grime", masculine; fr.wikipedia
// ranks first for "grime musique", and Apple Music France files it as "le
// grime, évolution du rap garage". "Rap UK" is the French for UK rap.
//
// The English generator places each image and player by paragraph index. Here
// the draft places them with [Image: ...] and [Embed: ...] lines at the same
// positions. The images are the English guide's, in img/grime/, with
// translated captions; see home-articles.mjs for why a translation may reuse
// them.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, ownSetListening, ownTrackListening
} from '../../site-components.mjs';

const figure = (name, height, alt, caption) => articleFigure({
  src: `img/grime/${name}-1200.webp`,
  srcset: `img/grime/${name}-320.webp 320w, img/grime/${name}-1200.webp 1200w`,
  width: 1200, height, alt, caption, className: 'wide-archive-image'
});

const videos = (lang, label, description, items) => articleVideoCollection({
  lang, label, description, items: items.map(item => articleVideoCard(item))
});

export default {
  lang: 'fr',
  name: 'fr-grime',
  file: 'fr/grime.html',
  draft: 'fr/grime-draft.md',
  canonical: 'https://thecatrave.com/fr/grime',
  englishPath: '/grime-music-guide',
  ogImage: 'https://thecatrave.com/img/og/grime.jpg',
  bodyClass: 'article-page grime-page',
  minReadingMinutes: 9,

  title: 'Le grime, c’est quoi ? Son, histoire, artistes et morceaux clés',
  description: 'Le grime, ce sont des instrumentaux à 140 BPM, la radio pirate, les crews et les clashs de l’est de Londres. Son, origines, artistes et disques à écouter.',
  datePublished: '2026-09-22',
  dateModified: '2026-09-22',
  dateLabel: '22 septembre 2026',

  heroKicker: 'Guide du grime',
  heroTitle: 'Le grime : ce que c’est, d’où il vient et comment il sonne',
  deck: 'Des instrumentaux froids à 140 BPM, la radio pirate, les crews et les clashs de l’est de Londres, et la dispute jamais tranchée sur qui l’a lancé.',
  answerLabel: 'Définition du grime',
  breadcrumbName: 'Grime',

  answerSection: 'Qu’est-ce que le grime ?',
  introSection: 'Introduction',
  introTitle: 'Plus que du rap britannique.',
  faqSection: 'FAQ',
  faqLabel: 'Questions fréquentes sur le grime',
  faqTitle: 'Questions fréquentes sur le grime.',

  sections: [
    {id: 'what-is', heading: 'Qu’est-ce que le grime ?', title: 'Qu’est-ce que le grime ?'},
    {id: 'sound', heading: 'Le son du grime', title: 'Le son du grime.', kicker: '140 BPM'},
    {id: 'garage', heading: 'Né du UK garage', title: 'Né du UK garage.', kicker: '1999 à 2001'},
    {id: 'producers', heading: 'Wiley, l’eskibeat et les producteurs', title: 'Wiley, l’eskibeat et les producteurs.', kicker: '2001 à 2005'},
    {id: 'radio', heading: 'Radio, crews et clashs', title: 'Radio, crews et clashs.'},
    {id: 'name', heading: 'D’où vient le nom grime', title: 'D’où vient le nom grime.', kicker: 'Le nom'},
    {id: 'breakthrough', heading: 'Dizzee, Kano et la première percée', title: 'Dizzee, Kano et la première percée.', kicker: '2003 à 2005'},
    {id: 'pop-years', heading: 'Form 696 et les années pop', title: 'Form 696 et les années pop.', kicker: '2005 à 2013'},
    {id: 'return', heading: 'Le retour, de 2014 à 2017', title: 'Le retour, de 2014 à 2017.'},
    {id: 'versus', heading: 'Grime, rap UK, drill et dubstep', title: 'Grime, rap UK, drill et dubstep.'},
    {id: 'who-started', heading: 'Qui a inventé le grime ?', title: 'Qui a inventé le grime ?', kicker: 'Contesté'},
    {id: 'now', heading: 'Le grime aujourd’hui', title: 'Le grime aujourd’hui.'}
  ],

  media: ({lang}) => ({
    'wiley-flowdan': figure('wiley-flowdan-2005', 796,
      'Deux MC de Roll Deep sur une scène sombre en 2005, l’un tenant le micro tout près, casquette blanche et gilet argenté',
      'Flowdan et Wiley, de Roll Deep, sur scène à New York en août 2005. Wiley a fondé le crew avec des amis des cités de Bow. Photo : kevin from south boston, CC BY-SA 2.0.'),
    'jammer-plaque': figure('jammer-plaque-leytonstone', 900,
      'Une plaque bleue de Waltham Forest Heritage pour Jammer : Lord of the MICS a été fondé dans la cave de cette maison en 2003',
      'La plaque de Waltham Forest Heritage sur la maison familiale de Jammer à Leytonstone, posée en 2019. Elle date Lord of the Mics de 2003 ; le premier DVD est sorti en 2004. Photo : Spudgun67, CC BY-SA 4.0.'),
    'skepta': figure('skepta-field-day-2016', 802,
      'Skepta rappe à l’avant de la grande scène d’un festival, des DJ derrière lui',
      'Skepta sur la grande scène de Field Day, à Londres, en juin 2016, un mois après la sortie de Konnichiwa. L’album a remporté le Mercury Prize en septembre. Photo : Jwslubbock, CC BY-SA 4.0.'),
    'functions-listening': videos(lang, 'L’instrumental',
      'Un instrumental de grime sorti comme un disque à part entière, en 2004. Stormzy a repris le même beat pour « Shut Up » en 2015.',
      [{youtubeId: '-uy0XIlnz4U', genre: 'INSTRUMENTAL GRIME, 2004', artist: 'Ruff Sqwad', title: 'Functions on the Low'}]),
    'garage-listening': videos(lang, 'Le garage bascule',
      'Le crew garage de Wiley en 2000 : les MC au premier plan, les refrains chantés disparus, la basse de plus en plus sombre.',
      [{youtubeId: 'LWc5vFPAOmg', genre: 'DU GARAGE AU GRIME, 2000', artist: 'Pay As U Go', title: 'Know We'}]),
    'producers-listening': videos(lang, 'Les producteurs d’abord',
      'Les disques dont parle cette partie : l’eskibeat de Wiley, la pulsation de basse de Pulse X, Terror Danjah avec quatre MC sur un beat, et le producteur de Leytonstone qui a lancé Lord of the Mics.',
      [{youtubeId: 'LkdEOY0bf4U', genre: 'ESKIBEAT, 2002', artist: 'Wiley', title: 'Eskimo'},
       {youtubeId: '4bMQTU2iI1E', genre: 'GRIME, 2002', artist: 'Youngstar (Musical Mob)', title: 'Pulse X'},
       {youtubeId: 'SqdJuhC16Zw', genre: 'GRIME, 2003', artist: 'Terror Danjah', title: 'Cock Back'},
       {youtubeId: '_mxxpgNyV54', genre: 'GRIME, 2005', artist: 'Jammer', title: 'Murkle Man'}]),
    'rinse-set': videos(lang, 'Le grime à la radio',
      'Le format dans lequel le grime a grandi, filmé : une émission grime sur Rinse FM en 2014, où P Money, D Double E, Big Narstie et Jammer se passent le micro. Tiré du catalogue de DJ sets enregistrés de ce site.',
      [{youtubeId: '1wk3uOxQ5F4', genre: 'RADIO, 2014', artist: 'Rinse FM', title: 'P Money, D Double E, Big Narstie and Jammer'}]),
    'naming-listening': videos(lang, 'La dispute sur le nom',
      'Le single de Wiley de 2004 qui demandait comment appeler cette musique. Il a atteint la 31e place.',
      [{youtubeId: 'tvCaWKqyKjg', genre: 'GRIME, 2004', artist: 'Wiley', title: 'Wot Do U Call It?'}]),
    'dizzee-listening': videos(lang, 'La percée',
      'Le premier single de Boy in da Corner, qui a remporté le Mercury Prize en 2003.',
      [{youtubeId: 'YH0KWX2a8zY', genre: 'GRIME, 2003', artist: 'Dizzee Rascal', title: 'I Luv U'}]),
    'followers-listening': videos(lang, 'Par la porte ouverte',
      'La percée de Kano, et le single à onze MC qui a atteint la 11e place et a été interdit dans des salles londoniennes.',
      [{youtubeId: 'Mznv4ACjkzc', genre: 'GRIME, 2004', artist: 'Kano', title: "P's and Q's"},
       {youtubeId: 'nlmhlWECMUk', genre: 'GRIME, 2004', artist: 'Lethal Bizzle', title: 'Pow! (Forward)'}]),
    'return-listening': videos(lang, 'Le retour, 2014 à 2015',
      'Trois singles qui ont ramené le grime dans les classements, chacun plus proche des premiers disques que des années pop.',
      [{youtubeId: 'HNnrW54xPaY', genre: 'GRIME, 2014', artist: 'Meridian Dan', title: 'German Whip'},
       {youtubeId: '_xQKWnvtg6c', genre: 'GRIME, 2014', artist: 'Skepta', title: "That's Not Me"},
       {youtubeId: 'RqQGUJK7Na4', genre: 'GRIME, 2015', artist: 'Stormzy', title: 'Shut Up'}]),
    'anniversary-set': videos(lang, 'Vingt ans après',
      'Rinse FM fête en 2023 les vingt ans de Boy in da Corner, avec Dizzee Rascal, JME, P Money, Jammer et Kruz Leone. Tiré du catalogue de DJ sets enregistrés de ce site.',
      [{youtubeId: 'vuh71pbNFC8', genre: 'RADIO, 2023', artist: 'Rinse FM', title: '20 years of Boy in da Corner'}]),
    // The owner's own music inside the text, as on the English page.
    'look': ownTrackListening('look', 'Le tempo du grime, ailleurs : future bass, glitch et breakbeat à 140 BPM. Mon propre morceau.', lang),
    'own-mix': ownSetListening(0, lang, 'Un set qui circule comme le font aujourd’hui les DJ de grime : des breaks à travers le garage, la bass music, la techno et le grime. Mon propre mix.'),
    'Table: versus': articleTable({
      headers: ['', 'Tempo', 'Ce que fait le beat', 'Où et quand'],
      rows: [
        ['Grime', 'Environ 140 BPM', 'Batterie clairsemée et syncopée, riffs en onde carrée, sub-bass, MC en double tempo', 'Est de Londres, début des années 2000'],
        ['UK garage', '130 à 135 BPM', 'Batterie 2-step swinguée et sautillante, refrains chantés', 'Londres, milieu des années 1990'],
        ['Dubstep', 'Environ 140 BPM, ressenti en half-time', 'Surtout instrumental, espace et sub-bass', 'Sud de Londres, début des années 2000'],
        ['Drill UK', 'Environ 140 BPM, ressenti en half-time', 'Basse 808 glissante, charleys décalés, récits sombres', 'Sud de Londres, début des années 2010, venue de la drill de Chicago'],
        ['Rap UK', 'Tous tempos', 'La grande catégorie : grime, drill et styles hip-hop plus lents', 'Toute la Grande-Bretagne']
      ]
    })
  }),

  sources: [
    {href: 'https://www.fabriclondon.com/posts/hyperdub-archive-eski-beat-an-interview-with-wiley-part-1-october-2003', label: 'Archives Hyperdub chez fabric : Eski Beat, un entretien avec Wiley par Martin Clark (octobre 2003)'},
    {href: 'https://daily.redbullmusicacademy.com/2015/05/wiley-feature/', label: 'Red Bull Music Academy Daily : Wiley, The Eski Boy, par Emma Warren (2015)'},
    {href: 'https://en.wikipedia.org/wiki/Grime_music', label: 'Wikipedia : Grime music'},
    {href: 'https://en.wikipedia.org/wiki/Lord_of_the_Mics', label: 'Wikipedia : Lord of the Mics'},
    {href: 'https://en.wikipedia.org/wiki/Boy_in_da_Corner', label: 'Wikipedia : Boy in da Corner'},
    {href: 'https://ra.co/news/40408', label: 'Resident Advisor : la Metropolitan Police de Londres supprime le Form 696 (2017)'},
    {href: 'https://en.wikipedia.org/wiki/Konnichiwa_(Skepta_album)', label: 'Wikipedia : Konnichiwa (Skepta album)'},
    {href: 'https://djmag.com/news/grammys-2024-skrillex-flowdan-fred-agains-rumble-wins-best-danceelectronic-recording', label: 'DJ Mag : Rumble remporte le Grammy Best Dance/Electronic Recording en 2024'}
  ],
  sourcesNote: 'Les nombres de sets et la fréquence des artistes sont mesurés dans le propre catalogue de ce site, 62 824 DJ sets enregistrés, en septembre 2026.',

  bandcamp: {
    description: 'Le grime a grandi à côté de la jungle et du garage, sur les mêmes radios pirates. Ces sorties se situent du côté breaks de cette famille. En acheter une soutient directement mon travail.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks par thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 par thecatrave'}
    ]
  }
};
