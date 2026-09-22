// German grime guide. Structure and facts from the English page
// (grime-music-guide-draft.md, build-grime-article.mjs).
//
// German wording checked in the live google.de results on 2026-09-22, no
// Ahrefs units spent (keywords/de-grime.json): German writes the genre as
// "Grime", de.wikipedia ranks first for "grime musik", and the related
// searches are "grime bedeutung", "grime künstler" and "grime rap". "Grime vs
// Rap" is a ranking discussion, so the FAQ asks what separates grime from rap.
// "Grime Deutsch" (German-language grime) is a related search the English page
// does not cover; it is not added here.
//
// The English generator places each image and player by paragraph index. Here
// the draft places them with [Bild: ...] and [Embed: ...] lines at the same
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
  lang: 'de',
  name: 'de-grime',
  file: 'de/grime.html',
  draft: 'de/grime-draft.md',
  canonical: 'https://thecatrave.com/de/grime',
  englishPath: '/grime-music-guide',
  ogImage: 'https://thecatrave.com/img/og/grime.jpg',
  bodyClass: 'article-page grime-page',
  minReadingMinutes: 9,

  title: 'Was ist Grime? Sound, Geschichte, Künstler und wichtige Tracks',
  description: 'Grime: Instrumentals bei 140 BPM, Piratenradio, Crews und Clashes aus dem Osten Londons. Wie es klingt, woher es kommt, wer es machte, welche Platten zählen.',
  datePublished: '2026-09-22',
  dateModified: '2026-09-22',
  dateLabel: '22. September 2026',

  heroKicker: 'Grime-Guide',
  heroTitle: 'Grime: was es ist, woher es kommt und wie es klingt',
  deck: 'Kalte Instrumentals bei 140 BPM, Piratenradio, Crews und Clashes aus dem Osten Londons, und der nie beigelegte Streit darüber, wer damit anfing.',
  answerLabel: 'Grime-Definition',
  breadcrumbName: 'Grime',

  answerSection: 'Was ist Grime?',
  introSection: 'Einleitung',
  introTitle: 'Mehr als britischer Rap.',
  faqSection: 'FAQ',
  faqLabel: 'Häufige Fragen zu Grime',
  faqTitle: 'Häufige Fragen zu Grime.',

  sections: [
    {id: 'what-is', heading: 'Was ist Grime?', title: 'Was ist Grime?'},
    {id: 'sound', heading: 'Wie Grime klingt', title: 'Wie Grime klingt.', kicker: '140 BPM'},
    {id: 'garage', heading: 'Aus dem UK Garage heraus', title: 'Aus dem UK Garage heraus.', kicker: '1999 bis 2001'},
    {id: 'producers', heading: 'Wiley, Eskibeat und die Produzenten', title: 'Wiley, Eskibeat und die Produzenten.', kicker: '2001 bis 2005'},
    {id: 'radio', heading: 'Radio, Crews und Clashes', title: 'Radio, Crews und Clashes.'},
    {id: 'name', heading: 'Woher der Name Grime kommt', title: 'Woher der Name Grime kommt.', kicker: 'Der Name'},
    {id: 'breakthrough', heading: 'Dizzee, Kano und der erste Durchbruch', title: 'Dizzee, Kano und der erste Durchbruch.', kicker: '2003 bis 2005'},
    {id: 'pop-years', heading: 'Form 696 und die Popjahre', title: 'Form 696 und die Popjahre.', kicker: '2005 bis 2013'},
    {id: 'return', heading: 'Das Comeback, 2014 bis 2017', title: 'Das Comeback, 2014 bis 2017.'},
    {id: 'versus', heading: 'Grime, UK-Rap, Drill und Dubstep', title: 'Grime, UK-Rap, Drill und Dubstep.'},
    {id: 'who-started', heading: 'Wer hat Grime erfunden?', title: 'Wer hat Grime erfunden?', kicker: 'Umstritten'},
    {id: 'now', heading: 'Grime heute', title: 'Grime heute.'}
  ],

  media: ({lang}) => ({
    'wiley-flowdan': figure('wiley-flowdan-2005', 796,
      'Zwei MCs von Roll Deep 2005 auf einer dunklen Bühne, einer hält das Mikrofon dicht am Mund, mit weißer Kappe und silberner Weste',
      'Flowdan und Wiley von Roll Deep im August 2005 auf der Bühne in New York. Wiley gründete die Crew mit Freunden aus den Siedlungen von Bow. Foto: kevin from south boston, CC BY-SA 2.0.'),
    'jammer-plaque': figure('jammer-plaque-leytonstone', 900,
      'Eine blaue Gedenktafel von Waltham Forest Heritage für Jammer: Lord of the MICS wurde 2003 im Keller dieses Hauses gegründet',
      'Die Gedenktafel von Waltham Forest Heritage am Haus von Jammers Familie in Leytonstone, angebracht 2019. Sie datiert Lord of the Mics auf 2003; die erste DVD erschien 2004. Foto: Spudgun67, CC BY-SA 4.0.'),
    'skepta': figure('skepta-field-day-2016', 802,
      'Skepta rappt vorne auf einer Festival-Hauptbühne, hinter ihm DJs',
      'Skepta im Juni 2016 auf der Hauptbühne des Field Day in London, einen Monat nach dem Erscheinen von Konnichiwa. Im September gewann das Album den Mercury Prize. Foto: Jwslubbock, CC BY-SA 4.0.'),
    'functions-listening': videos(lang, 'Das Instrumental',
      'Ein Grime-Instrumental, 2004 als eigenständige Platte veröffentlicht. Stormzy nutzte 2015 denselben Beat für „Shut Up“.',
      [{youtubeId: '-uy0XIlnz4U', genre: 'GRIME-INSTRUMENTAL, 2004', artist: 'Ruff Sqwad', title: 'Functions on the Low'}]),
    'garage-listening': videos(lang, 'Garage kippt',
      'Wileys Garage-Crew im Jahr 2000: MCs vorne, die Gesangs-Hooks weg, der Bass wird dunkler.',
      [{youtubeId: 'LWc5vFPAOmg', genre: 'VOM GARAGE ZUM GRIME, 2000', artist: 'Pay As U Go', title: 'Know We'}]),
    'producers-listening': videos(lang, 'Zuerst die Produzenten',
      'Die Platten, von denen dieser Abschnitt erzählt: Wileys Eskibeat, der Basspuls von Pulse X, Terror Danjah mit vier MCs auf einem Beat und der Produzent aus Leytonstone, der Lord of the Mics startete.',
      [{youtubeId: 'LkdEOY0bf4U', genre: 'ESKIBEAT, 2002', artist: 'Wiley', title: 'Eskimo'},
       {youtubeId: '4bMQTU2iI1E', genre: 'GRIME, 2002', artist: 'Youngstar (Musical Mob)', title: 'Pulse X'},
       {youtubeId: 'SqdJuhC16Zw', genre: 'GRIME, 2003', artist: 'Terror Danjah', title: 'Cock Back'},
       {youtubeId: '_mxxpgNyV54', genre: 'GRIME, 2005', artist: 'Jammer', title: 'Murkle Man'}]),
    'rinse-set': videos(lang, 'Grime im Radio',
      'Das Format, in dem Grime aufwuchs, gefilmt: eine Grime-Sendung auf Rinse FM im Jahr 2014, bei der P Money, D Double E, Big Narstie und Jammer das Mikrofon weitergeben. Aus dem Katalog aufgezeichneter DJ-Sets auf dieser Seite.',
      [{youtubeId: '1wk3uOxQ5F4', genre: 'RADIO, 2014', artist: 'Rinse FM', title: 'P Money, D Double E, Big Narstie and Jammer'}]),
    'naming-listening': videos(lang, 'Der Streit um den Namen',
      'Wileys Single von 2004, die fragt, wie die Musik heißen soll. Sie erreichte Platz 31.',
      [{youtubeId: 'tvCaWKqyKjg', genre: 'GRIME, 2004', artist: 'Wiley', title: 'Wot Do U Call It?'}]),
    'dizzee-listening': videos(lang, 'Der Durchbruch',
      'Die erste Single aus Boy in da Corner, das 2003 den Mercury Prize gewann.',
      [{youtubeId: 'YH0KWX2a8zY', genre: 'GRIME, 2003', artist: 'Dizzee Rascal', title: 'I Luv U'}]),
    'followers-listening': videos(lang, 'Durch die Tür',
      'Kanos Durchbruch und die Single mit elf MCs, die Platz 11 erreichte und in Londoner Clubs verboten wurde.',
      [{youtubeId: 'Mznv4ACjkzc', genre: 'GRIME, 2004', artist: 'Kano', title: "P's and Q's"},
       {youtubeId: 'nlmhlWECMUk', genre: 'GRIME, 2004', artist: 'Lethal Bizzle', title: 'Pow! (Forward)'}]),
    'return-listening': videos(lang, 'Das Comeback, 2014 bis 2015',
      'Drei Singles, die Grime zurück in die Charts brachten, jede näher an den frühen Platten als an den Popjahren.',
      [{youtubeId: 'HNnrW54xPaY', genre: 'GRIME, 2014', artist: 'Meridian Dan', title: 'German Whip'},
       {youtubeId: '_xQKWnvtg6c', genre: 'GRIME, 2014', artist: 'Skepta', title: "That's Not Me"},
       {youtubeId: 'RqQGUJK7Na4', genre: 'GRIME, 2015', artist: 'Stormzy', title: 'Shut Up'}]),
    'anniversary-set': videos(lang, 'Zwanzig Jahre später',
      'Rinse FM feiert 2023 zwanzig Jahre Boy in da Corner, mit Dizzee Rascal, JME, P Money, Jammer und Kruz Leone. Aus dem Katalog aufgezeichneter DJ-Sets auf dieser Seite.',
      [{youtubeId: 'vuh71pbNFC8', genre: 'RADIO, 2023', artist: 'Rinse FM', title: '20 years of Boy in da Corner'}]),
    // The owner's own music inside the text, as on the English page.
    'look': ownTrackListening('look', 'Das Tempo des Grime, woanders: Future Bass, Glitch und Breakbeat bei 140 BPM. Mein eigener Track.', lang),
    'own-mix': ownSetListening(0, lang, 'Ein Set, das sich bewegt wie Grime-DJs heute: Breaks durch Garage, Bass Music, Techno und Grime. Mein eigener Mix.'),
    'Tabelle: versus': articleTable({
      headers: ['', 'Tempo', 'Was der Beat macht', 'Wo und wann'],
      rows: [
        ['Grime', 'Etwa 140 BPM', 'Karge, synkopierte Drums, Riffs aus Rechteckwellen, Sub-Bass, MCs im doppelten Tempo', 'Osten Londons, Anfang der 2000er'],
        ['UK Garage', '130 bis 135 BPM', 'Geswingte, springende 2-Step-Drums, gesungene Hooks', 'London, Mitte der 1990er'],
        ['Dubstep', 'Etwa 140 BPM, gefühlt Halftime', 'Überwiegend instrumental, Raum und Sub-Bass', 'Süden Londons, Anfang der 2000er'],
        ['UK Drill', 'Etwa 140 BPM, gefühlt Halftime', 'Gleitender 808-Bass, geshuffelte Hi-Hats, düsteres Erzählen', 'Süden Londons, Anfang der 2010er, aus dem Chicago Drill'],
        ['UK-Rap', 'Beliebig', 'Die weite Kategorie: Grime, Drill und langsamere Hip-Hop-Stile', 'Ganz Großbritannien']
      ]
    })
  }),

  sources: [
    {href: 'https://www.fabriclondon.com/posts/hyperdub-archive-eski-beat-an-interview-with-wiley-part-1-october-2003', label: 'Hyperdub-Archiv bei fabric: Eski Beat, ein Interview mit Wiley von Martin Clark (Oktober 2003)'},
    {href: 'https://daily.redbullmusicacademy.com/2015/05/wiley-feature/', label: 'Red Bull Music Academy Daily: Wiley, The Eski Boy, von Emma Warren (2015)'},
    {href: 'https://en.wikipedia.org/wiki/Grime_music', label: 'Wikipedia: Grime music'},
    {href: 'https://en.wikipedia.org/wiki/Lord_of_the_Mics', label: 'Wikipedia: Lord of the Mics'},
    {href: 'https://en.wikipedia.org/wiki/Boy_in_da_Corner', label: 'Wikipedia: Boy in da Corner'},
    {href: 'https://ra.co/news/40408', label: 'Resident Advisor: Form 696 von der Londoner Metropolitan Police abgeschafft (2017)'},
    {href: 'https://en.wikipedia.org/wiki/Konnichiwa_(Skepta_album)', label: 'Wikipedia: Konnichiwa (Skepta album)'},
    {href: 'https://djmag.com/news/grammys-2024-skrillex-flowdan-fred-agains-rumble-wins-best-danceelectronic-recording', label: 'DJ Mag: Rumble gewinnt bei den Grammys 2024 Best Dance/Electronic Recording'}
  ],
  sourcesNote: 'Set-Zahlen und die Häufigkeit der Künstler sind im eigenen Katalog dieser Seite mit 62.824 aufgezeichneten DJ-Sets gemessen, Stand September 2026.',

  bandcamp: {
    description: 'Grime wuchs neben Jungle und Garage auf denselben Piratensendern auf. Diese Veröffentlichungen stehen auf der Breaks-Seite dieser Familie. Wer eine kauft, unterstützt meine Arbeit direkt.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks von thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 von thecatrave'}
    ]
  }
};
