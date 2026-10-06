// French UK electronic music evolution guide. Structure, records, images and
// both SoundCloud mixes are the English page's (build-uk-article.mjs), shared
// through content/uk-evolution-shared.mjs; the French draft is
// fr/uk-electronic-music-evolution-draft.md.
//
// Like the English page it carries no answer banner, no intro heading and no
// subheadings inside an era: `headings` merges the draft's subsections into
// one section per era. The genre map is the shared SVG (uk-genre-map.mjs)
// with French labels.
//
// The images are the English guide's, with translated captions; see
// home-articles.mjs for why a translation may reuse them.
import {ukEvolutionMedia} from '../uk-evolution-shared.mjs';
import {ukGenreMap} from '../../uk-genre-map.mjs';

const text = {
  mixKicker: 'Un mix de thecatrave',
  images: {
    crowd: {alt: 'Foule dense qui danse dans un club sombre'},
    tb303: {alt: 'Synthétiseur de basse Roland TB-303', caption: 'La TB-303 a fourni le mouvement de basse qui définit l’acid house.'},
    flyers: {alt: 'Collage de flyers des premières raves britanniques', caption: 'Avant les réseaux sociaux, les flyers aidaient les raves temporaires et les nouveaux sons à circuler.'},
    atari: {alt: 'Ordinateur Atari 1040ST utilisé pour le séquençage musical', caption: 'Les séquenceurs sur ordinateur personnel abordables ont sorti la production électronique des studios professionnels.'},
    skream: {alt: 'Skream derrière son matériel de DJ', caption: 'Skream en live. Les disquaires, les producteurs et les soirées de Croydon ont été centraux pour le dubstep des débuts.'}
  },
  videos: {
    acid: {genres: ['Acid house', 'Bleep'], description: 'Écoutez la ligne de basse baladeuse de la TB-303 chez Baby Ford, puis la sub-basse et le vide chez LFO.'},
    jungle: {genres: ['Breakbeat hardcore', 'Jungle', 'Drum and bass', 'Les DJ qui ont tout porté'], description: 'Ces disques font entendre le changement rythmique : les breaks rave deviennent jungle, puis drum and bass, avec un set des deux DJ qui ont amené le tout à la radio nationale.'},
    garage: {genres: ['UK garage', 'Speed garage', '2-step'], description: 'Comparez la pression à quatre temps du speed garage avec les grosses caisses absentes et le swing du 2-step.'},
    other90s: {genres: ['Son de Bristol', 'Crossover big beat', 'Big beat', 'Musique électronique d’écoute', 'Techno britannique'], description: 'Cinq chemins parallèles à travers la décennie : la musique de studio de Bristol nourrie de dub, le big beat underground comme dans sa version numéro un, l’abstraction de l’ère Warp et la techno de Birmingham.'},
    zeroes: {genres: ['Dubstep', 'Grime', 'Bassline', 'UK funky'], description: 'Écoutez comment la même origine garage se divise en espace dubstep, minimalisme grime, hooks bassline et percussions UK funky.'},
    early10s: {genres: ['Post-dubstep', 'Grime instrumental', 'Bristol club music', 'PC Music'], description: 'Ces disques montrent pourquoi aucune étiquette ne décrit correctement le début des années 2010.'},
    current: {genres: ['Nouveau UK garage', 'Jungle moderne', 'Crossover jungle', 'Club music britannique'], description: 'Ces exemples présentent le renouveau comme un réemploi plutôt qu’une reconstitution : swing garage, science du breakbeat et pression à 140 circulent ensemble.'}
  },
  mixes: {
    weekends: {
      title: "I lost so many weekends raving and I wanna lose some more",
      description: "J’ai recommencé ce mix une dizaine de fois, changé les morceaux et sans cesse remis les transitions en question. Au final, il rassemble une quarantaine de morceaux que j’aime, entre breaks, garage, dubstep, grime, techno et bien d’autres genres. Pour rentrer à pied, ranger ta chambre ou les afters, évidemment.",
      iframeTitle: 'I lost so many weekends raving and I wanna lose some more par thecatrave sur SoundCloud'
    },
    smoke: {
      title: 'I Like to Smoke in Silence After Raves',
      description: 'Dans le renouveau récent, il s’agit moins qu’un genre l’emporte que de voir de plus anciens rythmes se croiser dans de nouveaux sets. Il m’a fallu environ quatre mois pour ordonner ces 30 morceaux en un long arc.',
      iframeTitle: 'I Like to Smoke in Silence After Raves par thecatrave sur SoundCloud'
    }
  },
  table: {
    headers: ['Genre', 'Période britannique approximative', 'Rythme et tempo', 'Traits typiques', 'Racines directes'],
    rows: [
      ['Acid house', 'Fin des années 1980', 'Le plus souvent à quatre temps, à peu près au tempo de la house', 'Lignes de basse TB-303, grooves répétitifs', 'House de Chicago, disco, musique de danse électronique'],
      ['Bleep', 'De 1988 au début des années 1990', 'Rythmes techno dépouillés', 'Courts tons électroniques, sub-basse lourde, espace vide', 'Techno de Détroit, house, culture des sound systems'],
      ['Breakbeat hardcore', 'Début des années 1990', 'Breaks samplés rapides, souvent avec des éléments à quatre temps', 'Stabs rave, pianos, voix pitchées, coupes abruptes', 'Acid house, techno, breakbeats hip-hop'],
      ['Jungle', 'Début et milieu des années 1990', 'Breaks hachés, le plus souvent autour de 150 à 170 BPM', 'Samples reggae et dancehall, basse profonde, MC', 'Breakbeat hardcore, dub, reggae, hip-hop'],
      ['Drum and bass', 'À partir du milieu des années 1990', 'Breakbeats rapides, le plus souvent autour de 160 à 180 BPM', 'Large palette, de l’atmosphérique au très technique et agressif', 'Jungle, breakbeat, dub et production électronique'],
      ['UK garage', 'À partir du milieu des années 1990', 'Quatre temps ou swing 2-step, le plus souvent autour de 125 à 135 BPM', 'Voix découpées, percussions shufflées, lignes de basse', 'Garage house américaine, R&B, culture club de l’ère jungle'],
      ['Grime', 'À partir du début des années 2000', 'Souvent autour de 140 BPM avec des drums clairsemés et syncopés', 'Voix portées par les MC, synthés froids, sub-basse', 'UK garage, culture MC de la jungle, dancehall, hip-hop'],
      ['Dubstep', 'À partir du début des années 2000', 'Le plus souvent autour de 140 BPM, souvent en sensation half-time', 'Sub-basse, espace, syncopes, techniques du dub', 'Dark garage, 2-step, dub, jungle'],
      ['Bassline', 'À partir de la fin des années 1990', 'Swing garage, le plus souvent autour de 130 à 140 BPM', 'Hooks de basse incisifs, drops directs, voix et instrumentaux', 'UK garage, speed garage, culture club de Sheffield'],
      ['UK funky', 'À partir de la fin des années 2000', 'Tempo house avec percussions syncopées', 'Swing rythmique, grooves portés par les percussions, voix et instrumentaux', 'House, garage, soca, grime et club music de la diaspora africaine']
    ]
  }
};

const genreMapText = {
  heading: 'Comment les genres de musique électronique britannique se sont développés et reliés entre eux.',
  intro: 'C’est une carte de lignées partagées, pas l’affirmation qu’un disque en a inventé un autre. Les scènes britanniques se chevauchent, s’empruntent des idées et coexistent souvent pendant des années.',
  svgTitle: 'Carte des genres de musique électronique britannique avec leurs dates',
  svgDesc: 'Un schéma montrant comment la house et la techno importées, les breaks hip-hop et la culture des sound systems se relient à l’acid house, la bleep, le hardcore, la jungle, la drum and bass, le UK garage, le grime, le dubstep, la bassline, le UK funky et la bass music actuelle.',
  columns: ['RACINES', '1987–91', '1990–93', '1992–2001', '1994–2010', '2017→'],
  nodes: {
    soundSystems: ['Sound systems', '1950→'], chicago: ['House de Chicago', '1980'], detroit: ['Techno de Détroit', '1980'],
    hiphop: ['Breaks hip-hop', '1970→'], acid: ['Acid house', '1987–89'], bleep: ['Bleep', '1988–91'],
    hardcore: ['Hardcore', '1990–93'], jungle: ['Jungle', '1992–95'], garage: ['UK garage', '1993–2001'],
    dnb: ['Drum & bass', '1994→'], grime: ['Grime', '2001→'], dubstep: ['Dubstep', '1998→'],
    bassline: ['Bassline / Funky', '2000'], converging: ['Scènes convergentes', 'UKG / Jungle / 140 · 2017→']
  },
  mobile: [
    ['1987–91', 'Acid house et bleep', 'La house et la techno importées rencontrent les salles rave britanniques et la pression de la basse.'],
    ['Années 1990', 'Hardcore, jungle et drum and bass', 'Les breakbeats accélèrent et se fragmentent, tandis que les idées des sound systems passent au centre.'],
    ['1993–2009', 'UK garage, grime, dubstep, bassline et UK funky', 'Le swing garage devient plusieurs scènes distinctes mais reliées.'],
    ['Années 2010 à aujourd’hui', 'Club music hybride et scènes convergentes', 'Les anciens langages rythmiques circulent ensemble au lieu de se remplacer.']
  ],
  caption: 'Une carte volontairement simplifiée : les dates marquent une apparition, pas une fin.'
};

const era = (id, kicker, title, headings, tocLabel) => ({id, kicker, title, headings, heading: headings[0], tocLabel, className: 'era'});

const sections = [
  {id: 'why-the-uk', heading: 'Pourquoi le Royaume-Uni a-t-il créé autant de genres de musique électronique ?', title: 'Pourquoi le Royaume-Uni a-t-il créé autant de scènes de musique électronique ?', tocLabel: 'Pourquoi autant de scènes au Royaume-Uni'},
  {id: 'genre-map', heading: 'Carte', tocLabel: 'Carte des genres et des dates', rawHtml: () => ukGenreMap(genreMapText)},
  era('acid-and-bleep', '1987–1991', 'L’acid house devient un mouvement, puis la bleep donne au grave un son britannique.',
    ['L’acid house et le Second Summer of Love, de 1987 à 1989', 'La techno bleep et le premier son de basse britannique, de 1988 à 1991'], '1987–91 : acid house et bleep'),
  era('hardcore-jungle-dnb', '1990–1998', 'Le breakbeat hardcore mute en jungle et en drum and bass.',
    ['Le breakbeat hardcore et l’explosion rave britannique, de 1990 à 1993', 'La jungle émerge de la scène rave britannique, de 1992 à 1995', 'La jungle et l’évolution de la drum and bass, de 1994 à la fin des années 1990'], '1990–98 : hardcore, jungle et D&B'),
  era('uk-garage', '1993–2001', 'Le UK garage apprend à swinguer, à rebondir et à se scinder.',
    ['Le UK garage, le speed garage et le 2-step, de 1993 à 2001'], '1993–2001 : UK garage'),
  era('other-1990s', 'Les années 1990', 'Bristol, le big beat, Warp et la techno de Birmingham racontent d’autres histoires.',
    ['L’autre décennie 1990 : trip-hop, big beat, IDM et techno britannique'], 'L’autre décennie 1990'),
  era('dubstep-grime-funky', '2000–2009', 'Le garage sombre se ramifie en dubstep et en grime, tandis que la bassline et le UK funky partent ailleurs.',
    ['Le dubstep émerge du UK garage sombre, de la fin des années 1990 aux années 2000', 'Le grime et la radio pirate de l’est de Londres, de 2001 à 2005', 'La bassline et le UK funky, de la fin des années 1990 à 2010'], '2000–09 : dubstep, grime et UK funky'),
  era('hybrid-club', '2010–2016', 'Après le dubstep, les étiquettes utiles s’élargissent et se précisent moins.',
    ['Après le dubstep et les nouveaux hybrides club, de 2010 à 2012', 'Grime instrumental, Bristol club music et PC Music, de 2013 à 2016'], '2010–16 : club music hybride'),
  era('current-era', '2017–aujourd’hui', 'Le UK garage, la jungle et le 140 reviennent sans devenir des pièces de musée.',
    ['Le nouveau UK garage et le renouveau de la jungle underground, de 2017 à 2019', 'La jungle et le UK garage trouvent un nouveau public, de 2020 à 2022', 'Le UK garage, le speed garage, la jungle et le 140 convergent, de 2023 à 2024', 'Le UK garage, la jungle et la bass music s’élargissent encore, de 2025 à 2026'], '2017 à aujourd’hui : scènes renouvelées'),
  {id: 'future', heading: 'Que réserve l’avenir à la musique électronique britannique ?', title: 'Et ensuite ?', kicker: 'Après 2026', className: 'future-section', tocLabel: 'Et ensuite ?'},
  {id: 'genre-guide', heading: 'Reconnaître les principaux genres de musique électronique britannique', title: 'Aperçu rapide des principaux genres de musique électronique britannique.', tocLabel: 'Aperçu des genres et FAQ'}
];

export default {
  lang: 'fr',
  name: 'fr-uk-electronic-music-evolution',
  file: 'fr/musique-electronique-britannique.html',
  draft: 'fr/uk-electronic-music-evolution-draft.md',
  canonical: 'https://thecatrave.com/fr/musique-electronique-britannique',
  englishPath: '/uk-electronic-music-evolution',
  ogImage: 'https://thecatrave.com/img/og/uk.jpg',
  image: 'https://thecatrave.com/img/people%20dancing-1200.webp',
  bodyClass: 'article-page',

  title: 'Musique électronique britannique : genres, scènes et histoire',
  description: 'L’évolution de la musique électronique britannique : de l’acid house et la jungle au UK garage, au grime et au dubstep, jusqu’aux scènes club actuelles.',
  datePublished: '2026-10-01',
  dateModified: '2026-10-01',
  dateLabel: '1er octobre 2026',

  heroKicker: 'Histoire de la musique électronique britannique',
  heroTitle: 'L’évolution de la musique électronique britannique',
  deck: 'De l’acid house et la bleep à la jungle, au UK garage, au grime et au dubstep, jusqu’aux scènes qui façonnent aujourd’hui la club music britannique.',
  breadcrumbName: 'Histoire de la musique électronique britannique',

  introSection: 'Introduction',
  faqSection: 'Questions fréquentes sur la musique électronique britannique',
  faqLabel: 'Questions fréquentes',
  faqTitle: 'Questions fréquentes sur la musique électronique britannique.',

  sections,
  media: ({lang}) => ukEvolutionMedia({lang, text}),

  sources: [
    {href: 'https://www.theguardian.com/music/2023/may/03/bleep-dance-music-80s-yorkshire', label: 'The Guardian, « How Bleep Made Yorkshire the Electronic Music Capital of Britain » (en anglais)'},
    {href: 'https://www.theguardian.com/music/2021/jun/13/the-push-to-archive-the-history-of-jungle-and-drumnbass', label: 'The Guardian, « The Push to Archive the History of Jungle and Drum’n’Bass » (en anglais)'},
    {href: 'https://www.metalheadz.co.uk/artist/goldie', label: 'Metalheadz, Goldie: Artist History (en anglais)'},
    {href: 'https://www.theguardian.com/music/2011/jun/15/uk-garage-pop-craig-david', label: 'The Guardian, « How UK Garage Conquered 21st-Century Pop » (en anglais)'},
    {href: 'https://www.cambridge.org/core/journals/organised-sound/article/abs/just-dont-call-it-trip-hop-reconciling-the-bristol-sound-style-with-the-trip-hop-genre/B4944FEFB7C30977DA7CF0CB3AC07465', label: 'Cambridge University Press, « Just Don’t Call It Trip Hop » (en anglais)'},
    {href: 'https://djmag.com/features/how-big-apple-records-became-birthplace-dubstep', label: 'DJ Mag, « How Big Apple Records Became the Birthplace of Dubstep » (en anglais)'},
    {href: 'https://www.theguardian.com/music/2014/nov/27/jungle-garage-and-grime-20-years-of-rinse-fm', label: 'The Guardian, « Jungle, Garage and Grime: 20 Years of Rinse FM » (en anglais)'},
    {href: 'https://www.officialcharts.com/songs/eliza-roseinterplanetary-bota-baddest-of-them-all/', label: 'Official Charts, « B.O.T.A. (Baddest of Them All) » (en anglais)'},
    {href: 'https://storage.googleapis.com/ntia-hosted-pdfs/The-Fourth-UK-Electronic-Music-Industry-Report-8th-Feb-2026.pdf', label: 'NTIA, The Fourth UK Electronic Music Industry Report (en anglais)'}
  ],

  bandcamp: {
    description: 'Ces sorties prolongent directement les breaks, la pression de la basse et le continuum rave dont parle cet article. En acheter une soutient directement ma musique et mes textes.',
    tracks: [
      {title: 'thecatrave, Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks par thecatrave'},
      {title: 'thecatrave, Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 par thecatrave'}
    ]
  }
};
