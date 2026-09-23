// German UK garage guide. Structure and facts from the English page
// (uk-garage-guide-draft.md, build-uk-garage-article.mjs).
//
// German keywords (keywords/de-uk-garage.json): uk garage 300 a month in
// Germany (TRANSLATION-RESEARCH.md, stage 1). The wording was checked in the
// live google.de results on 2026-09-23, no Ahrefs units spent: de.wikipedia
// ranks first and writes "UK Garage"; "Weitere Fragen" asks "Was ist Garage
// für eine Musikrichtung?", which the first FAQ asks; "Wird auch oft gesucht"
// lists Speed Garage, 2step Garage, UK Garage Classics and UK Garage Songs.
// The production searches in the same results (drum kits, sample packs,
// drum patterns) are rejected, as on the English page (WRITING.md).
//
// The English generator places each image and player by paragraph index. Here
// the draft places them with [Bild: ...] and [Embed: ...] lines at the same
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
  lang: 'de',
  name: 'de-uk-garage',
  file: 'de/uk-garage.html',
  draft: 'de/uk-garage-draft.md',
  canonical: 'https://thecatrave.com/de/uk-garage',
  englishPath: '/uk-garage-guide',
  ogImage: 'https://thecatrave.com/img/og/uk-garage.jpg',
  bodyClass: 'article-page uk-garage-page',
  minReadingMinutes: 9,

  title: 'Was ist UK Garage? Sound, 2-Step, Speed Garage und Bassline',
  description: 'UK Garage ist London, das amerikanischen House zu schnell spielte, bis der Beat brach. Der Sound, die Zweige, die Klassiker und die Zahlen hinter dem Revival.',
  datePublished: '2026-09-23',
  dateModified: '2026-09-23',
  dateLabel: '23. September 2026',

  heroKicker: 'UK-Garage-Guide',
  heroTitle: 'Was ist UK Garage?',
  deck: 'London nahm eine amerikanische Platte, spielte sie zu schnell und brach den Beat. Was daraus wurde, und warum heute mehr davon gespielt wird als zu irgendeinem Zeitpunkt seit 1999.',
  answerLabel: 'UK Garage, Definition',
  breadcrumbName: 'UK Garage',

  answerSection: 'Was ist UK Garage?',
  introSection: 'Einleitung',
  introTitle: 'Ein Missverständnis, aus dem ein Genre wurde.',
  faqSection: 'FAQ',
  faqLabel: 'Häufige Fragen zu UK Garage',
  faqTitle: 'Häufige Fragen zu UK Garage.',

  sections: [
    {id: 'what-is', heading: 'Was ist UK Garage?', title: 'Was ist UK Garage?'},
    {id: 'naming', heading: 'Warum er Garage heißt', title: 'Warum er Garage heißt, und was New York damit zu tun hat.', kicker: 'Der Name'},
    {id: 'sound', heading: 'Der Sound: Tempo, Swing und der gebrochene Beat', tocLabel: 'Der Sound und das Tempo', title: 'Der Sound: 130 BPM und ein Beat, der nicht stillhält.'},
    {id: 'speed-garage', heading: 'Speed Garage', title: 'Speed Garage: der Zweig, der die Four to the Floor behielt.', kicker: '1995 bis 1998'},
    {id: 'two-step', heading: '2-Step', title: '2-Step: die zwei fehlenden Kicks, die ihn berühmt machten.', kicker: '1997 bis 2002'},
    {id: 'bassline', heading: 'Bassline', title: 'Bassline: was passierte, als Garage in den Norden ging.', kicker: 'Sheffield'},
    {id: 'vs-house', heading: 'Garage und House: was wirklich anders ist', tocLabel: 'Garage und House', title: 'Garage und House: was wirklich anders ist.'},
    {id: 'ayia-napa', heading: 'Ayia Napa', title: 'Ayia Napa: vier Sommer auf Zypern.'},
    {id: 'dubstep-grime', heading: 'Wie aus Garage Dubstep und Grime wurden', title: 'Wie aus Garage Dubstep und Grime wurden.', kicker: '2001 bis 2005'},
    {id: 'classics', heading: 'Die Klassiker', title: 'Die Klassiker, und was jeder von ihnen erklärt.'},
    {id: 'now', heading: 'Wer ihn heute spielt', title: 'Wer ihn heute spielt.'},
    {id: 'revival', heading: 'Das Revival in Zahlen', title: 'Das Revival in Zahlen.'}
  ],

  media: ({lang}) => ({
    'paradise': articleFigure({
      src: 'img/uk-garage/paradise-garage-1200.webp',
      srcset: 'img/uk-garage/paradise-garage-320.webp 320w, img/uk-garage/paradise-garage-1200.webp 1200w',
      width: 1200, height: 1475,
      alt: 'Der Eingang der Paradise Garage in New York',
      caption: 'Die Paradise Garage, King Street, New York. Sie schloss 1987, und britische DJs benannten nach ihr ein Genre, das nach nichts klingt, was Larry Levan dort je spielte. Foto gemeinfrei, über Wikimedia Commons.',
      className: 'wide-archive-image'
    }),
    'craig-david': articleFigure({
      src: 'img/uk-garage/craig-david-1200.webp',
      srcset: 'img/uk-garage/craig-david-320.webp 320w, img/uk-garage/craig-david-1200.webp 1200w',
      width: 1200, height: 1277,
      alt: 'Craig David bei einem Auftritt',
      caption: 'Craig David sang „Re-Rewind“ mit achtzehn. Die Platte erreichte Ende 1999 Platz zwei und holte 2-Step aus dem Piratenradio ins Tagesfernsehen. Foto: Raph_PH, CC BY 2.0, über Wikimedia Commons.',
      className: 'wide-archive-image'
    }),
    'skream': articleFigure({
      src: 'img/skream-1200.webp',
      srcset: 'img/skream-320.webp 320w, img/skream-1200.webp 1200w',
      width: 1200, height: 900,
      alt: 'Skream beim DJ-Set hinter einem Mixer',
      caption: 'Skream, der als Teenager Dubstep-Platten machte und heute Garage-Sets spielt. Der Katalog enthält sein Back-to-Back mit Disclosure bei Boiler Room 2012, mit dreieinhalb Millionen Aufrufen.',
      className: 'wide-archive-image'
    }),
    'Tabelle: tempo': articleTable({
      headers: ['Genre', 'Tempo', 'Was die Drums machen'],
      rows: [
        ['House', '120 bis 128 BPM', 'Kick auf allen vier Schlägen'],
        ['UK Garage', '130 bis 135 BPM', 'Gebrochen, oder Four to the Floor bei Speed Garage und Bassline'],
        ['Grime', '140 BPM', 'Garage-Drums ohne den Swing'],
        ['Dubstep', '140 BPM', 'Halftime, fühlt sich also wie 70 an'],
        ['Jungle und Drum and Bass', '160 bis 175 BPM', 'Zerhackter Breakbeat']
      ].map(row => row.map(escapeHtml))
    }),
    'Tabelle: branches': articleTable({
      headers: ['Zweig', 'Ungefähr wann', 'Was er macht', 'Die Platte'],
      rows: [
        ['Speed Garage', '1995 bis 1998', 'Four to the Floor, darunter eine Jungle-Bassline', 'Double 99, „Ripgroove“'],
        ['2-Step', '1997 bis 2002', 'Zwei Kicks weg, der Beat hüpft, beschleunigte Vocals', 'Artful Dodger, „Re-Rewind“'],
        ['Bassline', 'ab 2002, Sheffield', 'Wieder Four to the Floor, der Bass trägt die Melodie', 'T2, „Heartbroken“'],
        ['Future Garage', 'ab Ende der 2000er', 'Garage-Swing, verlangsamt und weicher, Subbass', 'Burial, „Archangel“'],
        ['Heutiges Revival', 'ab 2020', 'Alle drei Zweige zugleich, lauterer Bass', 'Interplanetary Criminal und Eliza Rose, „B.O.T.A.“']
      ].map(row => row.map(escapeHtml))
    }),
    // The owner's own tracks inside the text, as on the English page.
    'thecatrave 60-hours-of-mistakes': ownTrackListening('60-hours-of-mistakes', 'Future Garage, IDM und Breaks: wo dieser Rhythmus Jahre später landete. Mein eigener Track.', lang),
    'thecatrave degeneration': ownTrackListening('degeneration', 'Garage, Dubstep und Breaks in einem Remix, 132 BPM. Mein eigener Remix.', lang),
    'origins-listening': videos(lang, 'Woher er kam',
      'Die amerikanische Platte, die DJ EZ auf 130 beschleunigte, der amerikanische Gesang, den ein amerikanischer Produzent zum ersten 2-Step-Track umbaute, und die Chicago-House-Platte, die London so lange spielte, bis sie zu etwas anderem wurde.',
      [{youtubeId: 'OhqS5khLQ8U', genre: 'GARAGE HOUSE, 1995', artist: 'Todd Edwards', title: 'The Praise (God In His Hand)'},
       {youtubeId: 'W2IKwskvl2s', genre: 'PROTO-2-STEP, 1997', artist: 'Tina Moore', title: 'Never Gonna Let You Go (Kelly G Dub)'},
       {youtubeId: 'FwxpMIEZ9fg', genre: 'GARAGE HOUSE, 1996', artist: 'Roy Davis Jr', title: 'Gabriel'}]),
    'speed-garage-listening': videos(lang, 'Speed Garage',
      'Die Platte, um die es in diesem Abschnitt geht. Eine Four-to-the-Floor-Kick, ein gewaltiger Bass-Slide und fast nichts sonst.',
      [{youtubeId: 'uR3Vw8J8vUo', genre: 'SPEED GARAGE, 1997', artist: 'Double 99', title: 'RIP Groove'}]),
    'two-step-listening': videos(lang, '2-Step',
      'Vier Platten, die zeigen, was es bewirkt, zwei Kicks aus dem Takt zu nehmen. Der Crossover, der Gesang, den alle kennen, die Platte mit einem Arrangement und die Bassline, die jeder Produzent seitdem neu schreibt.',
      [{youtubeId: 'M0wv_cQv8As', genre: '2-STEP, 1999', artist: 'Artful Dodger and Craig David', title: 'Re-Rewind'},
       {youtubeId: 'iR2tIyj8_y8', genre: '2-STEP, 2000', artist: 'Sweet Female Attitude', title: 'Flowers'},
       {youtubeId: 'DXCtYUtjDYU', genre: '2-STEP, 1998', artist: 'MJ Cole', title: 'Sincere'},
       {youtubeId: '-15oU-lNSnc', genre: '2-STEP, 2000', artist: 'Wookie', title: 'Battle'}]),
    'chart-listening': videos(lang, 'Die Nummer-eins-Hits',
      'Garage an der Spitze der Charts, und was der Underground in denselben Jahren machte.',
      [{youtubeId: 'OQCQnARnKbc', genre: '2-STEP, 1999', artist: 'Shanks & Bigfoot', title: 'Sweet Like Chocolate'},
       {youtubeId: 'khW5leL19SA', genre: '2-STEP, 2001', artist: 'DJ Pied Piper', title: 'Do You Really Like It?'},
       {youtubeId: 'q5T1EIiDSmo', genre: 'VOM GARAGE ZUM GRIME, 2000', artist: 'Oxide & Neutrino', title: 'Bound 4 Da Reload'},
       {youtubeId: 'mXyeObIl9t4', genre: 'DARK GARAGE, 1999', artist: 'Zed Bias', title: 'Neighbourhood'}]),
    'bassline-listening': videos(lang, 'Bassline',
      'Der Crossover aus Sheffield, 2007 drei Wochen auf Platz zwei, und der Moment, in dem der nördliche Zweig bekam, was ihm zustand.',
      [{youtubeId: 'KG28976TmDM', genre: 'BASSLINE, 2007', artist: 'T2 and Jodie Aysha', title: 'Heartbroken'}]),
    'napa-film': videos(lang, 'Ayia Napa im Film',
      'Boiler Room drehte einen Dokumentarfilm über die vier Sommer, in denen die Londoner Garage-Szene in einen zypriotischen Urlaubsort umzog, was mehr von der Erinnerung des Genres enthält als jede Platte.',
      [{youtubeId: 'yczsC9M5C5w', genre: 'DOKUMENTARFILM', artist: 'Boiler Room', title: 'Sun, Sea and UKG'}]),
    'after-listening': videos(lang, 'Was aus Garage wurde',
      'Nach keiner strengen Definition Garage, und der deutlichste Beleg dafür, wo Garage hinging, als die Vocals wegfielen.',
      [{youtubeId: '8k_f2QK77ew', genre: 'NACH DEM GARAGE, 2007', artist: 'Burial', title: 'Archangel'}]),
    'revival-record': videos(lang, 'Das Revival in einer Platte',
      'Fünf Wochen auf Platz eins, die 1.400. Nummer eins in der Geschichte der britischen Charts, und unverkennbar eine Garage-Platte.',
      [{youtubeId: 'KtGFByAJRQQ', genre: 'REVIVAL, 2022', artist: 'Eliza Rose and Interplanetary Criminal', title: 'B.O.T.A.'}]),
    'revival-listening': videos(lang, 'Die heutige Generation',
      'Die Namen, die in den 864 Garage-Sets des Katalogs am häufigsten auftauchen, in ihren meistgesehenen Auftritten. Sammy Virji und Interplanetary Criminal sind die beiden, die man dieses Jahr am ehesten bei einem Abend im Club hört.',
      [{youtubeId: '6zPr1rk0Ans', genre: 'UK GARAGE', artist: 'Sammy Virji', title: 'Boiler Room, 2024'},
       {youtubeId: 'qVzW8WpOpvw', genre: 'UK GARAGE', artist: 'Interplanetary Criminal', title: 'Boiler Room, 2025'},
       {youtubeId: 'AWZ5F00eG_k', genre: 'UK GARAGE', artist: 'Yung Singh', title: 'Boiler Room, 2022'},
       {youtubeId: '8vaEYbsuZu8', genre: 'UK GARAGE', artist: 'Anz', title: 'Boiler Room, 2022'}])
  }),

  // The English page's sources, URL for URL, with translated labels.
  sources: [
    {href: 'https://en.wikipedia.org/wiki/UK_garage', label: 'Wikipedia: UK garage (englisch)'},
    {href: 'https://en.wikipedia.org/wiki/Bassline_(music_genre)', label: 'Wikipedia: Bassline (Musikgenre, englisch)'},
    {href: 'https://www.bbc.co.uk/news/entertainment-arts-62768901', label: 'BBC News: Eliza Rose landet die 1.400. Nummer-eins-Single Großbritanniens'},
    {href: 'https://en.wikipedia.org/wiki/Re-Rewind', label: 'Wikipedia: Re-Rewind'},
    {href: 'https://en.wikipedia.org/wiki/Heartbroken_(T2_song)', label: 'Wikipedia: Heartbroken'},
    {href: 'https://en.wikipedia.org/wiki/Paradise_Garage', label: 'Wikipedia: Paradise Garage'}
  ],
  sourcesNote: 'Set-Zahlen, Häufigkeiten der Künstler und Aufrufzahlen sind im eigenen Katalog dieser Seite gemessen, 62.877 aufgezeichnete DJ-Sets von 37 Kanälen, Stand September 2026.',

  bandcamp: {
    description: 'Diese Tracks liegen auf der Seite der Breaks und des Basses derselben Familie. Wer einen kauft, unterstützt meine Arbeit direkt.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks von thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 von thecatrave'}
    ]
  }
};
