// German UK electronic music evolution guide. Structure, records, images and
// both SoundCloud mixes are the English page's (build-uk-article.mjs), shared
// through content/uk-evolution-shared.mjs; the German draft is
// de/uk-electronic-music-evolution-draft.md.
//
// Like the English page it carries no answer banner, no intro heading and no
// subheadings inside an era: the English generator merges the draft's
// subsections into one section per era, and `headings` does the same here.
// The genre map is the shared SVG (uk-genre-map.mjs) with German labels.
//
// The images are the English guide's, with translated captions; see
// home-articles.mjs for why a translation may reuse them.
import {ukEvolutionMedia} from '../uk-evolution-shared.mjs';
import {ukGenreMap} from '../../uk-genre-map.mjs';

const text = {
  mixKicker: 'Ein Mix von thecatrave',
  images: {
    crowd: {alt: 'Dicht gedrängt tanzendes Publikum in einem dunklen Club'},
    tb303: {alt: 'Roland TB-303 Bass-Synthesizer', caption: 'Die TB-303 lieferte die prägende Bassbewegung des Acid House.'},
    flyers: {alt: 'Collage früher britischer Rave-Flyer', caption: 'Flyer halfen temporären Raves und neuen Sounds, sich vor den sozialen Medien zu verbreiten.'},
    atari: {alt: 'Atari-1040ST-Computer zur Musik-Sequenzierung', caption: 'Erschwingliche Heimcomputer-Sequenzer holten die elektronische Produktion aus den professionellen Studios.'},
    skream: {alt: 'Skream legt hinter DJ-Equipment auf', caption: 'Skream live. Croydons Plattenläden, Produzenten und Nächte waren für den frühen Dubstep zentral.'}
  },
  videos: {
    acid: {genres: ['Acid House', 'Bleep'], description: 'Hör auf die wandernde Bassline der TB-303 bei Baby Ford, dann auf den Subbass und den Leerraum bei LFO.'},
    jungle: {genres: ['Breakbeat Hardcore', 'Jungle', 'Drum and Bass', 'Die DJs, die alles trugen'], description: 'Diese Platten machen den rhythmischen Wandel hörbar: Rave-Breaks werden Jungle, dann Drum and Bass, dazu ein Set der beiden DJs, die das Ganze ins nationale Radio trugen.'},
    garage: {genres: ['UK Garage', 'Speed Garage', '2-Step'], description: 'Vergleiche den Four-to-the-Floor-Druck des Speed Garage mit den fehlenden Kicks und dem Swing des 2-Step.'},
    other90s: {genres: ['Bristol-Sound', 'Big-Beat-Crossover', 'Big Beat', 'Elektronische Hörmusik', 'Britischer Techno'], description: 'Fünf parallele Wege durch das Jahrzehnt: Bristols von Dub geprägte Studiomusik, Big Beat im Underground wie in seiner Nummer-eins-Form, die Abstraktion der Warp-Zeit und Techno aus Birmingham.'},
    zeroes: {genres: ['Dubstep', 'Grime', 'Bassline', 'UK Funky'], description: 'Hör, wie sich dieselbe Garage-Herkunft in Dubstep-Raum, Grime-Minimalismus, Bassline-Hooks und UK-Funky-Percussion aufspaltet.'},
    early10s: {genres: ['Post-Dubstep', 'Instrumentaler Grime', 'Bristol Club Music', 'PC Music'], description: 'Diese Platten zeigen, warum kein einzelnes Etikett die frühen 2010er angemessen beschreibt.'},
    current: {genres: ['New UK Garage', 'Moderner Jungle', 'Jungle-Crossover', 'UK Club Music'], description: 'Diese Beispiele zeigen das Revival als Wiederverwendung statt Nachstellung: Garage-Swing, Breakbeat-Wissenschaft und 140er-Druck zirkulieren gemeinsam.'}
  },
  mixes: {
    weekends: {
      title: "I lost so many weekends raving and I wanna lose some more",
      description: "Ich habe diesen Mix ungefähr zehnmal neu aufgebaut, Tracks ausgetauscht und immer wieder an den Übergängen gezweifelt. Am Ende wurden es rund 40 Tracks, die ich liebe, mit Breaks, Garage, Dubstep, Grime, Techno und mehr. Für deinen Heimweg, zum Aufräumen oder natürlich für die Afterhour.",
      iframeTitle: 'I lost so many weekends raving and I wanna lose some more von thecatrave auf SoundCloud'
    },
    smoke: {
      title: 'I Like to Smoke in Silence After Raves',
      description: 'Beim jüngsten Revival geht es weniger darum, dass ein Genre gewinnt, als darum, dass ältere Rhythmen in neuen Sets aufeinandertreffen. Ich habe etwa vier Monate gebraucht, diese 30 Tracks zu einem langen Bogen zu ordnen.',
      iframeTitle: 'I Like to Smoke in Silence After Raves von thecatrave auf SoundCloud'
    }
  },
  table: {
    headers: ['Genre', 'Ungefährer britischer Zeitraum', 'Rhythmus und Tempo', 'Typische Merkmale', 'Unmittelbare Wurzeln'],
    rows: [
      ['Acid House', 'Späte 1980er', 'Meist Four-to-the-Floor, etwa im House-Tempo', 'TB-303-Basslinien, repetitive Grooves', 'Chicago House, Disco, elektronische Tanzmusik'],
      ['Bleep', '1988 bis Anfang der 1990er', 'Sparsame Techno-Rhythmen', 'Kurze elektronische Töne, schwerer Subbass, Leerraum', 'Detroit Techno, House, Soundsystem-Kultur'],
      ['Breakbeat Hardcore', 'Frühe 1990er', 'Schnelle gesampelte Breaks, oft mit Four-to-the-Floor-Elementen', 'Rave-Stabs, Klaviere, gepitchte Stimmen, abrupte Schnitte', 'Acid House, Techno, Hip-Hop-Breakbeats'],
      ['Jungle', 'Frühe bis mittlere 1990er', 'Zerhackte Breaks, meist um 150 bis 170 BPM', 'Reggae- und Dancehall-Samples, tiefer Bass, MCs', 'Breakbeat Hardcore, Dub, Reggae, Hip-Hop'],
      ['Drum and Bass', 'Ab Mitte der 1990er', 'Schnelle Breakbeats, meist um 160 bis 180 BPM', 'Große Bandbreite von atmosphärisch bis hochtechnisch und aggressiv', 'Jungle, Breakbeat, Dub und elektronische Produktion'],
      ['UK Garage', 'Ab Mitte der 1990er', 'Four-to-the-Floor oder 2-Step-Swing, meist um 125 bis 135 BPM', 'Zerschnittene Stimmen, geshuffelte Percussion, Basslines', 'US Garage House, R&B, Clubkultur der Jungle-Zeit'],
      ['Grime', 'Ab den frühen 2000ern', 'Oft um 140 BPM mit sparsamen, synkopierten Drums', 'MC-getriebener Gesang, kalte Synthesizer, Subbass', 'UK Garage, Jungle-MC-Kultur, Dancehall, Hip-Hop'],
      ['Dubstep', 'Ab den frühen 2000ern', 'Meist um 140 BPM, oft im Halftime-Gefühl', 'Subbass, Raum, Synkopen, Dub-Techniken', 'Dark Garage, 2-Step, Dub, Jungle'],
      ['Bassline', 'Ab den späten 1990ern', 'Garage-Swing, meist um 130 bis 140 BPM', 'Prägnante Bass-Hooks, direkte Drops, Gesang und Instrumentals', 'UK Garage, Speed Garage, Sheffielder Clubkultur'],
      ['UK Funky', 'Ab den späten 2000ern', 'House-Tempo mit synkopierter Percussion', 'Rhythmischer Swing, Percussion-getriebene Grooves, Gesang und Instrumentals', 'House, Garage, Soca, Grime und Clubmusik der afrikanischen Diaspora']
    ]
  }
};

const genreMapText = {
  heading: 'Wie sich die britischen Genres der elektronischen Musik entwickelten und zusammenhängen.',
  intro: 'Das ist eine Karte geteilter Linien, keine Behauptung, eine Platte habe die nächste erfunden. Britische Szenen überlappen sich, borgen voneinander und bestehen oft jahrelang nebeneinander.',
  svgTitle: 'Eine Karte britischer Genres der elektronischen Musik mit Jahreszahlen',
  svgDesc: 'Ein Schema, das zeigt, wie importierter House, Techno, Hip-Hop-Breaks und Soundsystem-Kultur mit Acid House, Bleep, Hardcore, Jungle, Drum and Bass, UK Garage, Grime, Dubstep, Bassline, UK Funky und heutiger Bass Music zusammenhängen.',
  columns: ['WURZELN', '1987–91', '1990–93', '1992–2001', '1994–2010', '2017→'],
  nodes: {
    soundSystems: ['Soundsystems', '1950er→'], chicago: ['Chicago House', '1980er'], detroit: ['Detroit Techno', '1980er'],
    hiphop: ['Hip-Hop-Breaks', '1970er→'], acid: ['Acid House', '1987–89'], bleep: ['Bleep', '1988–91'],
    hardcore: ['Hardcore', '1990–93'], jungle: ['Jungle', '1992–95'], garage: ['UK Garage', '1993–2001'],
    dnb: ['Drum & Bass', '1994→'], grime: ['Grime', '2001→'], dubstep: ['Dubstep', '1998→'],
    bassline: ['Bassline / Funky', '2000er'], converging: ['Zusammenlaufende Szenen', 'UKG / Jungle / 140 · 2017→']
  },
  mobile: [
    ['1987–91', 'Acid House und Bleep', 'Importierter House und Techno treffen auf britische Rave-Räume und Bassdruck.'],
    ['1990er', 'Hardcore, Jungle und Drum and Bass', 'Breakbeats werden schneller und zersplittern, während Soundsystem-Ideen ins Zentrum rücken.'],
    ['1993–2009', 'UK Garage, Grime, Dubstep, Bassline und UK Funky', 'Garage-Swing wird zu mehreren eigenständigen, aber verbundenen Szenen.'],
    ['2010er bis heute', 'Hybride Clubmusik und zusammenlaufende Szenen', 'Ältere rhythmische Sprachen zirkulieren gemeinsam, statt sich gegenseitig zu ersetzen.']
  ],
  caption: 'Eine bewusst vereinfachte Karte: Die Jahreszahlen markieren das Entstehen, nicht ein Ende.'
};

const era = (id, kicker, title, headings, tocLabel) => ({id, kicker, title, headings, heading: headings[0], tocLabel, className: 'era'});

const sections = [
  {id: 'why-the-uk', heading: 'Warum hat Großbritannien so viele Genres der elektronischen Musik hervorgebracht?', title: 'Warum hat Großbritannien so viele Szenen der elektronischen Musik hervorgebracht?', tocLabel: 'Warum so viele Szenen in Großbritannien'},
  {id: 'genre-map', heading: 'Karte', tocLabel: 'Karte der Genres und Jahre', rawHtml: () => ukGenreMap(genreMapText)},
  era('acid-and-bleep', '1987–1991', 'Acid House wird zur Bewegung, dann lässt Bleep den Bass britisch klingen.',
    ['Acid House und der Second Summer of Love, 1987 bis 1989', 'Bleep-Techno und der erste britische Bass-Sound, 1988 bis 1991'], '1987–91: Acid House und Bleep'),
  era('hardcore-jungle-dnb', '1990–1998', 'Breakbeat Hardcore mutiert zu Jungle und Drum and Bass.',
    ['Breakbeat Hardcore und die britische Rave-Explosion, 1990 bis 1993', 'Jungle entsteht in der britischen Rave-Szene, 1992 bis 1995', 'Jungle und die Entwicklung des Drum and Bass, 1994 bis Ende der 1990er'], '1990–98: Hardcore, Jungle und D&B'),
  era('uk-garage', '1993–2001', 'UK Garage lernt zu swingen, zu springen und sich zu teilen.',
    ['UK Garage, Speed Garage und 2-Step, 1993 bis 2001'], '1993–2001: UK Garage'),
  era('other-1990s', 'Die 1990er', 'Bristol, Big Beat, Warp und Birmingham Techno erzählen andere Geschichten.',
    ['Die anderen 1990er: Trip-Hop, Big Beat, IDM und britischer Techno'], 'Die anderen 1990er'),
  era('dubstep-grime-funky', '2000–2009', 'Dunkler Garage verzweigt sich in Dubstep und Grime, während Bassline und UK Funky woandershin ziehen.',
    ['Dubstep entsteht aus dunklem UK Garage, späte 1990er bis 2000er', 'Grime und das Piratenradio im Osten Londons, 2001 bis 2005', 'Bassline und UK Funky, späte 1990er bis 2010'], '2000–09: Dubstep, Grime und UK Funky'),
  era('hybrid-club', '2010–2016', 'Nach dem Dubstep werden die nützlichen Etiketten weiter und ungenauer.',
    ['Nach dem Dubstep: neue Club-Hybride, 2010 bis 2012', 'Instrumentaler Grime, Bristol Club Music und PC Music, 2013 bis 2016'], '2010–16: hybride Clubmusik'),
  era('current-era', '2017–heute', 'UK Garage, Jungle und 140 kehren zurück, ohne zu Museumsstücken zu werden.',
    ['New UK Garage und das Jungle-Revival im Untergrund, 2017 bis 2019', 'Jungle und UK Garage finden ein neues Publikum, 2020 bis 2022', 'UK Garage, Speed Garage, Jungle und 140 laufen zusammen, 2023 bis 2024', 'UK Garage, Jungle und Bass Music weiten sich erneut, 2025 bis 2026'], '2017 bis heute: erneuerte Szenen'),
  {id: 'future', heading: 'Was kommt als Nächstes für die britische elektronische Musik?', title: 'Was kommt als Nächstes?', kicker: 'Nach 2026', className: 'future-section', tocLabel: 'Was kommt als Nächstes?'},
  {id: 'genre-guide', heading: 'Die wichtigsten britischen Genres der elektronischen Musik erkennen', title: 'Kurzer Überblick über die wichtigsten britischen Genres der elektronischen Musik.', tocLabel: 'Genre-Überblick und FAQ'}
];

export default {
  lang: 'de',
  name: 'de-uk-electronic-music-evolution',
  file: 'de/britische-elektronische-musik.html',
  draft: 'de/uk-electronic-music-evolution-draft.md',
  canonical: 'https://thecatrave.com/de/britische-elektronische-musik',
  englishPath: '/uk-electronic-music-evolution',
  ogImage: 'https://thecatrave.com/img/og/uk.jpg',
  image: 'https://thecatrave.com/img/people%20dancing-1200.webp',
  bodyClass: 'article-page',

  title: 'Britische elektronische Musik: Genres, Szenen und Geschichte',
  description: 'Die Entwicklung der britischen elektronischen Musik: von Acid House und Jungle über UK Garage, Grime und Dubstep bis zu den Club-Szenen von heute.',
  datePublished: '2026-10-01',
  dateModified: '2026-10-01',
  dateLabel: '1. Oktober 2026',

  heroKicker: 'Geschichte der britischen elektronischen Musik',
  heroTitle: 'Die Entwicklung der britischen elektronischen Musik',
  deck: 'Von Acid House und Bleep über Jungle, UK Garage, Grime und Dubstep bis zu den Szenen, die die britische Clubmusik heute prägen.',
  breadcrumbName: 'Geschichte der britischen elektronischen Musik',

  introSection: 'Einleitung',
  faqSection: 'Häufige Fragen zur britischen elektronischen Musik',
  faqLabel: 'Häufige Fragen',
  faqTitle: 'Häufige Fragen zur britischen elektronischen Musik.',

  sections,
  media: ({lang}) => ukEvolutionMedia({lang, text}),

  sources: [
    {href: 'https://www.theguardian.com/music/2023/may/03/bleep-dance-music-80s-yorkshire', label: 'The Guardian, „How Bleep Made Yorkshire the Electronic Music Capital of Britain“ (auf Englisch)'},
    {href: 'https://www.theguardian.com/music/2021/jun/13/the-push-to-archive-the-history-of-jungle-and-drumnbass', label: 'The Guardian, „The Push to Archive the History of Jungle and Drum’n’Bass“ (auf Englisch)'},
    {href: 'https://www.metalheadz.co.uk/artist/goldie', label: 'Metalheadz, Goldie: Artist History (auf Englisch)'},
    {href: 'https://www.theguardian.com/music/2011/jun/15/uk-garage-pop-craig-david', label: 'The Guardian, „How UK Garage Conquered 21st-Century Pop“ (auf Englisch)'},
    {href: 'https://www.cambridge.org/core/journals/organised-sound/article/abs/just-dont-call-it-trip-hop-reconciling-the-bristol-sound-style-with-the-trip-hop-genre/B4944FEFB7C30977DA7CF0CB3AC07465', label: 'Cambridge University Press, „Just Don’t Call It Trip Hop“ (auf Englisch)'},
    {href: 'https://djmag.com/features/how-big-apple-records-became-birthplace-dubstep', label: 'DJ Mag, „How Big Apple Records Became the Birthplace of Dubstep“ (auf Englisch)'},
    {href: 'https://www.theguardian.com/music/2014/nov/27/jungle-garage-and-grime-20-years-of-rinse-fm', label: 'The Guardian, „Jungle, Garage and Grime: 20 Years of Rinse FM“ (auf Englisch)'},
    {href: 'https://www.officialcharts.com/songs/eliza-roseinterplanetary-bota-baddest-of-them-all/', label: 'Official Charts, „B.O.T.A. (Baddest of Them All)“ (auf Englisch)'},
    {href: 'https://storage.googleapis.com/ntia-hosted-pdfs/The-Fourth-UK-Electronic-Music-Industry-Report-8th-Feb-2026.pdf', label: 'NTIA, The Fourth UK Electronic Music Industry Report (auf Englisch)'}
  ],

  bandcamp: {
    description: 'Diese Veröffentlichungen knüpfen direkt an die Breaks, den Bassdruck und das Rave-Kontinuum an, um die es in diesem Artikel geht. Wer eine kauft, unterstützt meine Musik und mein Schreiben direkt.',
    tracks: [
      {title: 'thecatrave, Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks von thecatrave'},
      {title: 'thecatrave, Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 von thecatrave'}
    ]
  }
};
