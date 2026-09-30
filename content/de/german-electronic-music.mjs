// German guide to the history of German electronic music. Structure, records,
// images, graphic and order are the English page's (build-german-electronic-
// article.mjs), shared through content/german-electronic-shared.mjs; the
// German draft is de/german-electronic-music-draft.md.
//
// The English page's summary banner is hard-coded in its generator; here it is
// the draft's "Zusammenfassung" section. The photographs are the English
// guide's, with translated captions (home-articles.mjs says why a translation
// may reuse them).
import {germanElectronicMedia} from '../german-electronic-shared.mjs';

const text = {
  figures: {
    kraftwerk: {
      alt: 'Ralf Hütter und Henning Schmitz von Kraftwerk bei einem Auftritt hinter elektronischen Pulten beim Bestival 2009',
      caption: 'Kraftwerk machten elektronischen Klang, grafische Gestaltung und kontrollierte Performance zu einem System. Foto: Mike Mantin, CC BY 2.0.'
    },
    stockhausen: {
      alt: 'Karlheinz Stockhausen steht 1991 zwischen elektronischen Geräten im WDR-Studio in Köln',
      caption: 'Stockhausen 1991 im WDR-Studio. Der Raum war für elektronische Komposition gebaut, nicht für Clubmusik. Foto: Kathinka Pasveer, CC BY-SA 3.0.'
    },
    loveParade: {
      alt: 'Eine große Menschenmenge füllt 1998 die Straße des 17. Juni bei der Loveparade in Berlin',
      caption: 'Die Loveparade auf der Straße des 17. Juni 1998, nachdem aus einer Untergrund-Demonstration ein Massenereignis geworden war. Foto: Ago76, gemeinfrei.'
    }
  },
  svg: {
    tag: 'Ein Schema, kein Stammbaum',
    title: 'Deutsche elektronische Musik nach Stadt und Epoche',
    desc: 'Ein Schema, das Kölns elektronisches Studio, Düsseldorfer elektronischen Pop, West-Berliner Sequenzer-Musik, Frankfurter Techno und Trance und den Berliner Techno nach dem Mauerfall verbindet.',
    caption: 'Die Linie zeigt wechselnde Infrastruktur und Austausch. Sie behauptet nicht, dass eine Stadt die nächste erfunden hat.',
    labels: [
      ['Cologne', 'Köln'], ['WDR studio', 'WDR-Studio'], ['1970s', '1970er'],
      ['electronic pop', 'Elektropop'], ['West Berlin', 'West-Berlin'], ['sequencer music', 'Sequenzer-Musik'],
      ['1980s-90s', '1980er–90er'], ['techno and trance', 'Techno und Trance'],
      ['1989 onward', 'Ab 1989'], ['Detroit alliance', 'Detroit-Allianz'], ['Tresor, minimal', 'Tresor, Minimal']
    ]
  },
  mobile: [
    ['1951', 'Köln', 'Das elektronische Studio des WDR, Herbert Eimert und Karlheinz Stockhausen.'],
    ['1970er', 'Düsseldorf', 'Kraftwerk, NEU!, elektronischer Pop und Motorik-Wiederholung.'],
    ['1970er', 'West-Berlin', 'Tangerine Dream, Klaus Schulze und langformatige Sequenzer-Musik.'],
    ['1980er bis 1990er', 'Frankfurt', 'Technoclub, Omen sowie die Infrastruktur von Techno und Trance.'],
    ['Ab 1989', 'Berlin', 'Die Detroit-Allianz, das Tresor und später Minimal Techno.']
  ],
  figcaption: 'Ein Schema wechselnder Infrastruktur und wechselnden Austauschs, keine Behauptung, dass eine Stadt die nächste erfunden hat.',
  figcaptionLink: 'Die hochauflösende Grafik herunterladen',
  videos: {
    kraftwerk: {
      label: 'Kraftwerk, Autobahn', genre: 'Düsseldorf, 1974',
      description: 'Kraftwerks Wende von 1974 zu elektronischem Rhythmus, Melodie und einem gestalteten Bild des modernen Deutschlands, auf dem offiziellen Kanal der Gruppe.'
    },
    daf: {
      label: 'DAF, Der Mussolini', genre: 'Düsseldorf, 1981',
      description: 'Ein strenges Schlagzeugmuster, eine kurze elektronische Sequenz und Gabi Delgados Befehl: DAF machten Maschinenmusik körperlich.'
    }
  },
  klang: {
    title: '3 Phase featuring Dr. Motte, Der Klang der Familie.',
    description: 'Die sechste Veröffentlichung von Tresor Records macht den frühen Berliner Raum zu einer angespannten, direkten Platte. Es ist die Originalveröffentlichung, remastert, auf Dr. Mottes Account.',
    iframeTitle: 'Der Klang der Familie und Open Your Mind von 3 Phase featuring Dr. Motte auf SoundCloud'
  },
  routes: {
    title: 'Drei Wege durch die deutschen 1990er.',
    description: 'Frankfurter Trance, Berliner melodischer Trance und Dub Techno liefen nicht in einem nationalen Stil zusammen.',
    notes: [
      'Der melodische Frankfurter Weg, getragen von Eye Q und dem weiteren Rhein-Main-Netzwerk.',
      'Eine Berliner Trance-Platte, deren langes Leben zeigt, wie weit das deutsche Clubnetz reichte.',
      'Zwei lange Versionen aus Druck, Echo und winzigen Veränderungen: ein Fundament für Dub Techno.'
    ]
  },
  own: {
    berlin: 'Ein heutiger Berliner Weg: Breakbeat-Drums mit Dub-Techno-Echo und Raum. Mein eigener Track.',
    noGenre: 'Glitch, IDM und Ambient ohne eine Szene, zu der sie gehören. Mein eigener Track.'
  },
  table: {
    label: 'Städte und Regionen der deutschen elektronischen Musik, Epochen und Einstiegspunkte zum Hören',
    headers: ['Stadt oder Region', 'Hauptzeit hier', 'Was sich änderte', 'Anfangen mit'],
    rows: [
      ['Köln', 'Ab 1951', 'Ein eigens gebautes elektronisches Studio; später ein Label und Vertriebsnetz', 'Stockhausen, Wolfgang Voigt, Kompakt'],
      ['Düsseldorf', '1970er und frühe 1980er', 'Elektronischer Pop, Motorik-Wiederholung, Post-Punk-Körpermusik', 'Kraftwerk, NEU!, DAF'],
      ['West-Berlin', '1970er und frühe 1980er', 'Langformatige Sequenzer-Musik', 'Tangerine Dream, Klaus Schulze, Manuel Göttsching'],
      ['Frankfurt / Rhein-Main', '1980er und 1990er', 'Frühe elektronische Club-Infrastruktur und Trance', 'Talla 2XLC, Sven Väth, Eye Q, Harthouse'],
      ['Berlin', 'Ab 1989', 'Detroit-Allianz, Clubs nach dem Mauerfall, harter und minimaler Techno', 'Tresor, Basic Channel, Paul van Dyk, Monolake'],
      ['DDR', '1980er', 'Elektronische Musik bei knapper Ausrüstung und staatlich kontrollierten Aufnahmen', 'Reinhard Lakomy, Pond, Key, Servi']
    ]
  }
};

const sections = [
  {id: 'cities', heading: 'Warum die Städte wichtig sind', title: 'Warum die Städte wichtig sind.'},
  {id: 'cologne', heading: 'Köln: elektronischer Klang vor dem elektronischen Pop', title: 'Köln: elektronischer Klang vor dem elektronischen Pop.', kicker: 'Ab 1951'},
  {id: 'dusseldorf-west-berlin', heading: 'Düsseldorf und West-Berlin: zwei verschiedene Zukünfte in den 1970ern', title: 'Düsseldorf und West-Berlin: zwei verschiedene Zukünfte.', kicker: '1970er'},
  {id: 'eighties', heading: 'Die 1980er: Körper, Maschinen und ein geteiltes Land', title: 'Körper, Maschinen und ein geteiltes Land.', kicker: '1980er'},
  {id: 'techno', heading: 'Techno erreicht Frankfurt und Berlin', title: 'Techno erreicht Frankfurt und Berlin.', kicker: '1980er bis frühe 1990er'},
  {id: 'three-routes', heading: 'Drei Wege durch die 1990er', title: 'Drei Wege durch die 1990er.', kicker: '1990er'},
  {id: 'after-2000', heading: 'Nach 2000: Clubs, Software und Szenen ohne ein Zentrum', title: 'Clubs, Software und Szenen ohne ein Zentrum.', kicker: 'Ab 2000'},
  {id: 'scene-guide', heading: 'Ein kurzer Überblick über die wichtigsten deutschen Szenen der elektronischen Musik', title: 'Ein kurzer Überblick über die wichtigsten deutschen Szenen der elektronischen Musik.'}
];

export default {
  lang: 'de',
  name: 'de-german-electronic-music',
  file: 'de/deutsche-elektronische-musik.html',
  draft: 'de/german-electronic-music-draft.md',
  canonical: 'https://thecatrave.com/de/deutsche-elektronische-musik',
  englishPath: '/german-electronic-music',
  ogImage: 'https://thecatrave.com/img/og/german-electronic.jpg',
  image: 'https://thecatrave.com/img/german-electronic/kraftwerk-stage-1200.webp',
  bodyClass: 'article-page german-electronic-page',

  title: 'Deutsche elektronische Musik: Geschichte von Kraftwerk bis Techno',
  description: 'Wie die deutsche elektronische Musik entstand: vom Kölner Studio und Kraftwerk über Berliner Schule, Techno und Trance bis zur heutigen Clubkultur.',
  datePublished: '2026-10-01',
  dateModified: '2026-10-01',
  dateLabel: '1. Oktober 2026',

  heroKicker: 'Geschichte der deutschen elektronischen Musik',
  heroTitle: 'Die Geschichte der deutschen elektronischen Musik',
  deck: 'Von den Kölner Tonbandstudios und Kraftwerk über Frankfurter Trance, die Allianz zwischen Detroit und Berlin und Minimal Techno bis zu den Werkzeugen, die um die Welt gingen.',
  answerLabel: 'GESCHICHTE DER DEUTSCHEN ELEKTRONISCHEN MUSIK',
  breadcrumbName: 'Geschichte der deutschen elektronischen Musik',

  answerSection: 'Zusammenfassung',
  introSection: 'Einleitung',
  introTitle: 'Mehrere Geschichten, verbunden durch Maschinen und Orte.',
  faqSection: 'FAQ',
  faqLabel: 'FAQ',
  faqTitle: 'Häufige Fragen zur deutschen elektronischen Musik.',

  sections,
  media: ({lang}) => germanElectronicMedia({lang, text}),

  sources: [
    {href: 'https://www1.wdr.de/unternehmen/der-wdr/profil/chronik/nordwestdeutscher-rundfunk-100.html', label: 'WDR: Herbert Eimert und das Studio für Elektronische Musik'},
    {href: 'https://www.goethe.de/ins/ca/en/kul/loe/mag/20708594.html', label: 'Goethe-Institut: Düsseldorf und elektronische Musik (auf Englisch)'},
    {href: 'https://www.tangerinedreammusic.com/en/music/detail.asp?id=12&tit=Phaedra', label: 'Tangerine Dream: Phaedra (auf Englisch)'},
    {href: 'https://www.higher-frequency.com/e_interview/manuel_gottsching/index.htm', label: 'Higher Frequency: Interview mit Manuel Göttsching (auf Englisch)'},
    {href: 'https://www.redbullmusicacademy.com/lectures/daf-lecture/', label: 'Red Bull Music Academy: Interview mit DAF (auf Englisch)'},
    {href: 'https://daily.redbullmusicacademy.com/2013/09/east-german-electronic-music-oral-history/', label: 'Red Bull Music Academy: elektronische Musik in der DDR (auf Englisch)'},
    {href: 'https://www.goethe.de/ins/ca/de/kul/kue/tkl/22933101.html', label: 'Goethe-Institut: deutscher Techno ab 1989'},
    {href: 'https://www.bpb.de/themen/recht-justiz/513688/die-geschichte-von-techno-und-der-loveparade/', label: 'Bundeszentrale für politische Bildung: Techno und Loveparade'},
    {href: 'https://tresorberlin.com/info/about/', label: 'Tresor: Geschichte von Club und Label (auf Englisch)'},
    {href: 'https://www.unesco.de/staette/technokultur-in-berlin/', label: 'Deutsche UNESCO-Kommission: Technokultur in Berlin'},
    {href: 'https://kompakt.fm/releases/20_jahre_kompakt_kollektion_2_2xlp', label: 'Kompakt: Geschichte zum 20-jährigen Jubiläum (auf Englisch)'},
    {href: 'https://www.ableton.com/en/pages/press/releases/2002_09_12/', label: 'Ableton: frühe Firmengeschichte (auf Englisch)'},
    {href: 'https://taz.de/Gruender-ueber-25-Jahre-Distillery-Leipzig/!5456075/', label: 'taz: Interview zur Gründung der Distillery Leipzig'}
  ],

  bandcamp: {
    description: 'Berlin Race 1909 ist mein eigener Weg durch Maschinenrhythmus und Rave-Druck. Wer es kauft, unterstützt die Musik und diese Publikation direkt.',
    tracks: [
      {title: 'thecatrave, Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 von thecatrave'}
    ]
  }
};
