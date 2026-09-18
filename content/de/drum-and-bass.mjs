// German drum and bass guide. Structure and facts from the English page
// (drum-and-bass-guide-draft.md, dnb-guide-research.md, build-dnb-article.mjs).
//
// German keywords, measured 2026-09-18 with keywords-explorer-matching-terms,
// country de (keywords/de-drum-and-bass.json): drum and bass 1,600 a month,
// liquid drum and bass 70. German searchers use the English name; there is no
// German phrasing with volume ("was ist drum and bass" is under the 50
// filter). "dnb" itself (2,900) is the Deutsche Nationalbibliothek and DNB
// Bank, and the city party searches are event listings; both are rejected in
// the map.
//
// The English generator places each listening block by paragraph index. Here
// the draft places them with [Embed: ...] lines at the same positions, so the
// page reads in the same order.
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
  lang: 'de',
  name: 'de-drum-and-bass',
  file: 'de/drum-and-bass.html',
  draft: 'de/drum-and-bass-draft.md',
  canonical: 'https://thecatrave.com/de/drum-and-bass',
  englishPath: '/drum-and-bass-guide',
  ogImage: 'https://thecatrave.com/img/og/drum-and-bass.jpg',
  image: 'https://thecatrave.com/img/dnb/dnb-cover.webp',
  bodyClass: 'article-page dnb-page',
  minReadingMinutes: 9,

  title: 'Was ist Drum and Bass? 174 BPM, Geschichte und Subgenres',
  description: 'Drum and Bass ist ein britisches Genre aus schnellen Breakbeats und tiefem Sub-Bass, meist bei 170 bis 180 BPM. Seine Geschichte, Künstler und Subgenres.',
  datePublished: '2026-09-18',
  dateModified: '2026-09-18',
  dateLabel: '18. September 2026',

  heroKicker: 'Drum and Bass',
  heroTitle: 'Was ist Drum and Bass?',
  deck: 'Schnelle Breakbeats, tiefer Sub-Bass und das britische Rave-Kontinuum hinter einem globalen Genre, das meist zwischen 170 und 180 BPM gespielt wird.',
  answerLabel: 'Drum and Bass: Definition',
  breadcrumbName: 'Drum and Bass',

  answerSection: 'Antwort',
  introSection: 'Einleitung',
  introTitle: 'Von einem britischen Rave-Kontinuum zu einem globalen Genre.',
  faqSection: 'FAQ',
  faqLabel: 'Häufige Fragen zu Drum and Bass',
  faqTitle: 'Häufige Fragen zu Drum and Bass.',

  sections: [
    {id: 'where-jungle-ended', heading: 'Als sich Jungle und Drum and Bass trennten', title: 'Als sich Jungle und Drum and Bass trennten.', kicker: '1994 bis 1995'},
    {id: 'sound', heading: 'Wie Drum and Bass gebaut ist: 174 BPM, der Break und das Fundament', title: 'Wie Drum and Bass gebaut ist: 174 BPM, der Break und das Fundament.', tocLabel: 'Wie Drum and Bass gebaut ist'},
    {id: 'metalheadz', heading: 'Metalheadz und die dunkle Wende', title: 'Metalheadz und die dunkle Wende.'},
    {id: 'atmospheric', heading: 'Die atmosphärische Linie: Speed, Bristol und Good Looking', title: 'Die atmosphärische Linie: Speed, Bristol und Good Looking.', tocLabel: 'Speed, Bristol und Good Looking'},
    {id: 'subgenres', heading: 'Die Subgenres und was sie bedeuten', title: 'Die Subgenres und was sie bedeuten.', tocLabel: 'Die Subgenres erklärt'},
    {id: 'global', heading: 'Wie Drum and Bass global wurde', title: 'Wie Drum and Bass global wurde.', kicker: 'Ab den 2000er-Jahren'},
    {id: 'now', heading: 'Wo Drum and Bass heute steht', title: 'Wo Drum and Bass heute steht.'}
  ],

  media: ({lang}) => ({
    'Roni Size': articleFigure({
      src: 'img/dnb/roni-size.webp',
      srcset: 'img/dnb/roni-size-320.webp 320w, img/dnb/roni-size.webp 1120w',
      width: 1120, height: 747,
      alt: 'Roni Size hinter einem Mischpult beim Festival Astropolis 2009',
      caption: 'Roni Size bei Astropolis, 2009. New Forms entstand in Bristol mit Reprazent und gewann 1997 den Mercury Prize. Foto: neomusicstore, CC BY 2.0.',
      className: 'wide-archive-image'
    }),
    'Noisia': articleFigure({
      src: 'img/dnb/noisia.webp',
      srcset: 'img/dnb/noisia-320.webp 320w, img/dnb/noisia.webp 1280w',
      width: 1280, height: 720,
      alt: 'Die drei Mitglieder von Noisia auf der Bühne der Brixton Academy in London, 2015',
      caption: 'Noisia in der Brixton Academy, 2015. Neurofunk, gebaut in Groningen und weltweit gespielt: der Sound als Übung in Präzisionstechnik. Foto: Emma Louise, CC BY 3.0.',
      className: 'wide-archive-image'
    }),
    'DJ Marky': articleFigure({
      src: 'img/dnb/dj-marky.webp',
      srcset: 'img/dnb/dj-marky-320.webp 320w, img/dnb/dj-marky.webp 1120w',
      width: 1120, height: 840,
      alt: 'DJ Marky legt eine Platte im Club Lov.e in São Paulo auf',
      caption: 'DJ Marky im Lov.e, São Paulo, 2008. LK lief über ein Label aus Bristol und wurde zum Standard in britischen Clubs. Foto: Moretti, CC BY-SA 3.0.',
      className: 'wide-archive-image'
    }),
    'reinforced-listening': collection(lang, 'reinforced-listening',
      'Das Album, das das Label schon hatte.',
      'Reinforced war vier Jahre alt, als die Umbenennung kam, und 4hero hatten die Platte, nach der der neue Name griff, bereits gemacht.',
      [{year: '1994', artist: '4hero', title: 'Parallel Universe', spotify: '0MMBVUug4IJy0pUL2mRmPf',
        note: 'In Dollis Hill gemacht und auf dem eigenen Label erschienen. Gilt weithin als erstes Drum-and-Bass-Album, vier Jahre bevor Two Pages auf die Shortlist des Mercury Prize kam.'}]),
    'split-listening': collection(lang, 'split-listening',
      'Der Abstand in einem Jahr.',
      'Die Platte, die Jungle in die Charts trug, und die Platte, die zwölf Monate später den neuen Namen auf ein Major-Label brachte.',
      [{year: '1994', artist: 'M-Beat featuring General Levy', title: 'Incredible', youtube: 'GDwNn8bJ2CQ',
        note: 'Ragga Jungle auf Platz 39 der britischen Singlecharts. Das ist der Sound, und das Wort, von dem sich manche Produzenten danach abwandten.'},
       {year: '1995', artist: 'Goldie', title: 'Inner City Life', youtube: 'i-P98B2skts',
        note: 'Von Timeless. Dieselbe Linie auf einem Major-Label, mit Streichern und einer Besprechung in der großen Presse, abgelegt unter Drum and Bass statt unter Jungle.'}]),
    'sound-listening': collection(lang, 'sound-listening',
      'Two-Step und rollend.',
      'Die beiden Drum-Gefühle, auf denen das Genre läuft, beide von 1995, beide um 174, mit einem Bass, der entgegengesetzt viel Arbeit leistet.',
      [{year: '1995', artist: 'Alex Reece', title: 'Pulp Fiction', spotify: '4bsF2ZJgmq2JiDfyIV3CaX',
        note: 'Die Vorlage für den Two-Step: eine Kick und eine Snare mit Luft dazwischen, der Track gleitet statt zu stolpern.'},
       {year: '1995', artist: 'Dillinja', title: 'The Angels Fell', youtube: '0wWTqipgm2I',
        note: 'Der rollende Break, mehr vom ursprünglichen Schlagzeug erhalten, darunter trägt der Sub-Bass das Gewicht.'}]),
    'metalheadz-listening': collection(lang, 'metalheadz-listening',
      'Die dunkle Wende.',
      'Die Platte, zu der man greift, wenn man zeigen will, wie die dunkle Seite des Drum and Bass klang.',
      [{year: '1996', artist: 'Doc Scott', title: 'Shadow Boxing', youtube: '7Z-6e3zIE2k',
        note: 'Erschienen unter seinem Alias Nasty Habits. Verzerrung, Kompression und ein Rhythmus wie aus der Maschinenhalle, ein Jahr bevor die Compilation Torque den Sound sammelte.'}]),
    'atmospheric-listening': collection(lang, 'atmospheric-listening',
      'Die andere Antwort auf 1995.',
      'Der jazzige Zweig, von der Vorlage bei Good Looking über den Mercury Prize bis in den Liquid.',
      [{year: '1993', artist: 'LTJ Bukem', title: 'Music', youtube: 'hp8DkZyE9h8',
        note: 'Streicher, ein weicher Break und kein Drop im heutigen Sinn. Der Bezugspunkt für das, was als Intelligent Drum and Bass vermarktet wurde.'},
       {year: '1997', artist: 'Roni Size and Reprazent', title: 'Brown Paper Bag', spotify: '3ZQs8RHO3lPZoUwpavPENL',
        note: 'Von New Forms, in Bristol gemacht, Mercury Prize 1997. Die Drum-and-Bass-Platte von Menschen, die sonst keine besaßen.'},
       {year: '2004', artist: 'High Contrast', title: 'The Basement Track', youtube: 'C5XGKcvFOJc',
        note: 'Das Hospital-Ende derselben Linie: Soul-Samples behalten, für einen großen Raum gebaut, und immer noch gespielt.'}]),
    'Tabelle: subgenres': articleTable({
      headers: ['Begriff', 'Ungefähr wann', 'Was er bedeutet', 'Verhältnis zum Kern'],
      rows: [
        ['Drum and Bass (der Kern)', 'Ab 1994', 'Um 174 BPM, Breakbeats, Sub-Bass als führende Stimme', 'Ein breiteres Genre aus demselben Kontinuum wie Jungle'],
        ['Liquid, oder Liquid Funk', 'Ab 2000', 'Melodisch und soulig, rollender Two-Step, Gesang und Akkorde', 'Die sanfte Linie, benannt nach Fabios Mix-CD von 2000'],
        ['Jump-Up', 'Ab Mitte der 1990er', 'Basslines mit Hook, direkte Drops und Arrangements für die Tanzfläche', 'Ein Zweig für die Party, verbunden mit DJ Zinc und Aphrodite'],
        ['Techstep', 'Ab Mitte der 1990er', 'Maschinell, industriell und Science-Fiction; Verzerrung und Kompression', 'Seine prägende Zeit 1996 bis 1999 kreiste um No U-Turn und Torque'],
        ['Neurofunk', 'Ab Ende der 1990er', 'Aus dem Techstep abgeleitete Bassmodulation, präzise Drums und markante Mitten über schwerem Fundament', 'Stammt vom Techstep ab; Ed Rush und Optical, dann Noisia'],
        ['Darkstep', 'Ab Ende der 1990er', 'Dunkle Atmosphären, aggressiver Bass und harte Drums', 'Ein schwererer Zweig, der sich mit Techstep und späterem Neurofunk überschneidet'],
        ['Drumfunk', 'Ab Ende der 1990er', 'Dichte, von Hand editierte Breakbeats mit detaillierter rhythmischer Variation', 'Eine auf den Break konzentrierte Linie, verbunden mit Photek und Paradox'],
        ['Halftime', 'Ab den 2010er-Jahren', 'Sounddesign des Drum and Bass mit einem Drum-Gefühl in halbem Tempo', 'Der Punkt, an dem seine Tempo-Logik auf die des Dubstep trifft']
      ]
    }),
    'subgenre-listening': collection(lang, 'subgenre-listening',
      'Zwei der Zweige.',
      'Die melodische und die maschinelle Seite der Tabelle oben, damit die Begriffe einen Klang bekommen.',
      [{year: '2000', artist: 'Calibre', title: 'Mystic', youtube: 'yenh56lBQoU',
        note: 'Liquid: rollend, warm, soulig, und die Version des Drum and Bass, die am weitesten reiste.'},
       {year: '2010', artist: 'Noisia', title: 'Machine Gun', spotify: '6s9XbbtulHcMwMDzsyoEO7',
        note: 'Neurofunk, gebaut in Groningen und weltweit gespielt: der Sound als Übung in Präzisionstechnik.'}]),
    'chart-listening': collection(lang, 'chart-listening',
      'Die erste Nummer eins.',
      'Die Platte, die Drum and Bass an die Spitze der britischen Singlecharts brachte, siebzehn Jahre nach Timeless.',
      [{year: '2012', artist: 'DJ Fresh featuring Rita Ora', title: 'Hot Right Now', youtube: 'N7OPZOBJZyI',
        note: 'Die erste britische Nummer eins des Genres und der Anfang eines Jahrzehnts, in dem es immer wieder in die Charts kam.'}]),
    'global-listening': collection(lang, 'global-listening',
      'Keine britische Platte.',
      'Eine Platte aus São Paulo, die über ein Label aus Bristol lief, und zwanzig Jahre später Jungle, zurückgefaltet in ein Drum-and-Bass-Album.',
      [{year: '2002', artist: 'DJ Marky and XRS featuring Stamina MC', title: 'LK', spotify: '1fIZzCIwKKGBRDkLA8VukW',
        note: 'Gebaut auf einem Sample von Jorge Ben, erschienen über Bryan Gees V Recordings und 2002 ein Standard in britischen Clubs.'},
       {year: '2024', artist: 'Nia Archives', title: 'Silence Is Loud', spotify: '1LqFMtMW44W8XQ1OtV43gg',
        note: 'Der Titeltrack des Albums von 2024, das Platz 16 in Großbritannien erreichte und die Breaks und das Reggae-Gefühl des Jungle zurückholt.'}]),
    'dnb-massive-playlist': articleListeningBand({
      platform: 'spotify',
      id: 'dnb-massive-playlist',
      kicker: t(lang).essentialListening,
      title: 'Massive Drum & Bass: die erweiterte Playlist.',
      description: 'Die feste Drum-and-Bass-Playlist von Spotify, um weiterzuhören, nachdem die einzelnen Platten ihr Argument gemacht haben.',
      src: 'https://open.spotify.com/embed/playlist/37i9dQZF1DX5wDmLW735Yd?utm_source=generator',
      iframeTitle: 'Playlist Massive Drum & Bass auf Spotify',
      fullBleed: true,
      tone: 'cyan'
    })
  }),

  sources: [
    {href: 'https://en.wikipedia.org/wiki/Drum_and_bass', label: 'Wikipedia: Drum and bass'},
    {href: 'https://www.beatportal.com/articles/4445-beatports-definitive-history-of-drum-bass', label: 'Beatportal: Beatport\'s Definitive History of Drum & Bass'},
    {href: 'https://en.wikipedia.org/wiki/Metalheadz', label: 'Wikipedia: Metalheadz'},
    {href: 'https://en.wikipedia.org/wiki/Timeless_(Goldie_album)', label: 'Wikipedia: Timeless'},
    {href: 'https://djmag.com/news/drum-bass-streams-increased-94-past-three-years-spotify-reports', label: 'DJ Mag: Drum & bass streams increased 94% in three years, Spotify reports'},
    {href: 'https://en.wikipedia.org/wiki/Nia_Archives', label: 'Wikipedia: Nia Archives'}
  ],

  bandcamp: {
    description: 'Diese Veröffentlichungen stehen dem Druck aus Breaks und Bass in diesem Artikel am nächsten. Wer eine kauft, unterstützt meine Arbeit direkt.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks von thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 von thecatrave'}
    ]
  }
};
