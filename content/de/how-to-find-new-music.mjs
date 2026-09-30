// German guide to finding new music. Structure, stations, sets, diagrams and
// photograph are the English page's (build-find-new-music-article.mjs), shared
// through content/find-new-music-shared.mjs; the German draft is
// de/how-to-find-new-music-draft.md. The English summary banner is the draft's
// "Zusammenfassung" section.
import {findNewMusicMedia} from '../find-new-music-shared.mjs';
import {catalogueSets} from '../../catalogue.mjs';

const text = {
  table: {
    headers: ['Methode', 'Am besten für', 'Aufwand', 'Fang hier an'],
    rows: [
      ['Community-Radio', 'Lokale Szenen und spezialisierte Selektoren', 'Keiner', 'NTS, Rinse FM oder ein Sender außerhalb deiner Stadt'],
      ['Ein DJ-Set', 'Viele Künstler im Zusammenhang finden', 'Keiner', 'Lass eine Stunde lang einen DJ auswählen'],
      ['Der Selector', 'Zufallsfund ohne Profil', 'Ein Klick', `Spiel zufällig eines von ${catalogueSets('de')} Sets ab`],
      ['Produzenten-Credits', 'Einem Sound über Künstler hinweg folgen', 'Eine Minute', 'Öffne die Credits einer Platte, die du liebst'],
      ['Every Noise at Once', 'Unbekannte Genrenamen erkunden', 'Eine Minute', 'Nutze die eingefrorene Genrekarte als Startpunkt'],
      ['Plattenlabels', 'Tiefer in eine zusammenhängende Szene', 'Ein Nachmittag', 'Folge dem Label hinter einer starken Veröffentlichung'],
      ['Bandcamp', 'Underground-Veröffentlichungen und Käuferspuren', 'Ein Nachmittag', 'Stöbere in Tags, Labels und öffentlichen Sammlungen'],
      ['Kritiker und AOTY', 'Autoren mit konsequenter Sicht', 'Laufend', 'Folge einer Kritikerin, nicht einer Publikation'],
      ['Foren und Discord', 'Menschliche Empfehlungen und Szenedetails', 'Laufend', 'Tritt einer fokussierten Community bei und frag präzise'],
      ['Discogs und RateYourMusic', 'Veröffentlichungsgeschichte und verwandte Platten', 'Laufend', 'Verfolge Labels, Credits und Nutzerlisten']
    ]
  },
  videos: {
    stations: {
      label: 'Ein Set von jedem Sender',
      description: 'Die oben genannten Sender, jeweils mit ihrem meistgesehenen Set. Das letzte hat sechstausend Aufrufe, und das ist das ganze Argument über Geografie in einer einzigen Zahl.'
    },
    small: {
      label: 'Drei Stunden aus drei Städten',
      description: 'Kiosk Radio sendet aus einer Hütte in einem Brüsseler Park, und das letzte davon hat sechstausend Aufrufe. Je eine Stunde, und keine von etwas gewählt, das weiß, wer du bist.'
    }
  },
  radioBand: {
    title: 'Eine Stunde von einem Sender, den du nie gehört hast.',
    description: 'NTS stellt seine Sendungen neben dem eigenen Archiv auch auf Spotify. Jede davon macht das Argument dieses Artikels besser, als es ein weiterer Absatz könnte.',
    iframeTitle: 'NTS Radio auf Spotify'
  },
  selector: {
    alt: 'Der Selector: ein Knopf, der ein zufälliges DJ-Set abspielt',
    caption: `Der Selector enthält ${catalogueSets('de')} Sets von 37 Kanälen. Kein Konto, keine Werbung, und was du speicherst, verlässt deinen Browser nie.`
  },
  producerFigure: {
    alt: 'Ein Diagramm, das dem Künstler zu folgen, was zu seinem eigenen Backkatalog führt, mit dem Folgen eines Produzenten vergleicht, was zu allen Künstlern führt, mit denen er gearbeitet hat, und weiter zu deren Labels.',
    caption: 'Der Backkatalog eines Künstlers klingt meist nach diesem Künstler. Der eines Produzenten sind zwanzig Künstler, gefiltert durch ein Paar Ohren, und jeder führt weiter zu einem Label.'
  },
  producerLabels: [
    ['FOLLOW THE ARTIST', 'DEM KÜNSTLER FOLGEN'], ['one artist', 'ein Künstler'], ['their records', 'seine Platten'],
    ['which mostly sound', 'die meist klingen'], ['like that artist.', 'wie dieser Künstler.'],
    ['FOLLOW THE PRODUCER', 'DEM PRODUZENTEN FOLGEN'], ['one producer', 'ein Produzent'],
    ['artist A', 'Künstler A'], ['artist B', 'Künstler B'], ['artist C', 'Künstler C'], ['their labels', 'ihre Labels'],
    ['and every label is another', 'und jedes Label ist ein weiterer'], ['catalogue somebody else', 'Katalog, den jemand anderes'], ['already filtered for you.', 'schon für dich gefiltert hat.']
  ],
  own: 'Ein Produzent, dem du folgen kannst, wo du schon da bist: Glitch, IDM und Ambient. Mein eigener Track.',
  shop: {
    alt: 'Das Innere eines Second-Hand-Plattenladens, Regale voller Vinyl an beiden Wänden',
    caption: 'Ein Laden ist ein Filter, den jemand von Hand pflegt, wie ein gutes Label auch. Foto: Chicken4War, CC BY-SA 4.0, über Wikimedia Commons.'
  },
  loopFigure: {
    alt: 'Zwei Diagramme. Links eine geschlossene Schleife, in der das, was du gespielt hast, eine Empfehlungsmaschine speist, die mehr vom Gleichen vorschlägt. Rechts eine offene Linie von einer unpersonalisierten Quelle zu einer breiteren nächsten Wiedergabe.',
    caption: 'Eine Empfehlungsmaschine kann nur mit dem arbeiten, was du schon gespielt hast, also landet jede Runde näher an der letzten. Eine Quelle, die nie von dir gehört hat, kann das nicht.'
  },
  loopLabels: [
    ['THE LOOP', 'DIE SCHLEIFE'], ['a recommender, repeated', 'eine Empfehlungsmaschine, wiederholt'],
    ['what you played', 'was du gespielt hast'], ['the recommender', 'die Empfehlungsmaschine'], ['more of the same', 'mehr vom Gleichen'],
    ['each turn is closer to', 'jede Runde liegt näher an'], ['the last. the circle', 'der letzten. Der Kreis'], ['tightens.', 'zieht sich zu.'],
    ['THE WAY OUT', 'DER AUSWEG'], ['a source that does not know you', 'eine Quelle, die dich nicht kennt'],
    ['a station, a set, a shop', 'Sender, Set, Laden'], ['something unheard', 'etwas Ungehörtes'], ['a wider next play', 'breiteres nächstes Hören'],
    ['nothing loops back. the', 'nichts schließt sich. Die'], ['source has no record of', 'Quelle weiß nicht mehr,'], ['what you liked before.', 'was du vorher mochtest.']
  ]
};

const sections = [
  {id: 'radio', heading: 'Radio', title: '1. Community-Radio.', kicker: 'Kein Aufwand', tocLabel: 'Community-Radio'},
  {id: 'dj-sets', heading: 'DJ-Sets', title: '2. DJ-Sets, nicht Singles.', kicker: 'Kein Aufwand', tocLabel: 'DJ-Sets'},
  {id: 'selector', heading: 'Der Selector', title: '3. Der Selector.', kicker: 'Ein Klick', tocLabel: 'Der Selector'},
  {id: 'producers', heading: 'Folge dem Produzenten, nicht dem Künstler', title: '4. Folge dem Produzenten, nicht dem Künstler.', kicker: 'Eine Minute', tocLabel: 'Folge dem Produzenten'},
  {id: 'every-noise', heading: 'Every Noise at Once', title: '5. Every Noise at Once.', kicker: 'Eine Minute', tocLabel: 'Every Noise at Once'},
  {id: 'labels', heading: 'Labels, die bei einem Sound bleiben', title: '6. Labels, die bei einem Sound bleiben.', kicker: 'Ein Nachmittag', tocLabel: 'Plattenlabels'},
  {id: 'bandcamp', heading: 'Bandcamp', title: '7. Bandcamp.', kicker: 'Ein Nachmittag', tocLabel: 'Bandcamp'},
  {id: 'critics', heading: 'Kritiker und Jahresbestenlisten', title: '8. Kritiker und Jahresbestenlisten.', kicker: 'Laufend', tocLabel: 'Kritiker und Listen'},
  {id: 'forums', heading: 'Foren und Communitys', title: '9. Foren und Communitys.', kicker: 'Laufend', tocLabel: 'Foren'},
  {id: 'databases', heading: 'Discogs und RateYourMusic', title: '10. Discogs und RateYourMusic.', kicker: 'Laufend', tocLabel: 'Discogs und RateYourMusic'},
  {id: 'algorithm', heading: 'Ein Wort zum Algorithmus', title: 'Ein Wort zum Algorithmus.', tocLabel: 'Ein Wort zum Algorithmus'}
];

export default {
  lang: 'de',
  name: 'de-how-to-find-new-music',
  file: 'de/neue-musik-finden.html',
  draft: 'de/how-to-find-new-music-draft.md',
  canonical: 'https://thecatrave.com/de/neue-musik-finden',
  englishPath: '/how-to-find-new-music',
  ogImage: 'https://thecatrave.com/img/og/how-to-find-new-music.jpg',
  bodyClass: 'article-page find-new-music-page',

  title: 'Neue Musik finden: 10 Wege ohne Algorithmus',
  description: 'Zehn Wege, neue Musik zu entdecken, ohne dass eine Maschine deine Hörgeschichte kennt: von Community-Radio bis zu Produzenten-Credits, nach Aufwand geordnet.',
  datePublished: '2026-10-01',
  dateModified: '2026-10-01',
  dateLabel: '1. Oktober 2026',

  heroKicker: 'Guide',
  heroTitle: 'Neue Musik finden',
  deck: 'Zehn Wege, etwas zu hören, das du noch nicht kennst, und keiner hängt davon ab, dass eine Maschine weiß, was du letzte Woche gespielt hast. Geordnet nach Aufwand.',
  answerLabel: 'NEUE MUSIK FINDEN',
  breadcrumbName: 'Neue Musik finden',

  answerSection: 'Zusammenfassung',
  introSection: 'Einleitung',
  introTitle: 'Zu viel Musik, und du spielst immer dasselbe.',
  faqSection: 'FAQ',
  faqLabel: 'FAQ',
  faqTitle: 'Neue Musik finden: FAQ.',
  minReadingMinutes: 9,

  sections,
  media: ({lang}) => findNewMusicMedia({lang, text}),

  sources: [
    {href: 'https://www.nts.live', label: 'NTS Radio (auf Englisch)'},
    {href: 'https://rinse.fm', label: 'Rinse FM (auf Englisch)'},
    {href: 'https://www.thelotradio.com', label: 'The Lot Radio (auf Englisch)'},
    {href: 'https://everynoise.com', label: 'Every Noise at Once (auf Englisch)'},
    {href: 'https://daily.bandcamp.com', label: 'Bandcamp Daily (auf Englisch)'},
    {href: 'https://www.discogs.com', label: 'Discogs'},
    {href: 'https://rateyourmusic.com', label: 'RateYourMusic (auf Englisch)'},
    {href: 'https://www.albumoftheyear.org', label: 'Album of the Year (auf Englisch)'}
  ],
  sourcesNote: 'Die Zahlen zu Sets und Aufrufen stammen aus dem eigenen Katalog aufgezeichneter DJ-Sets dieser Seite über 37 Kanäle, Stand September 2026.',

  bandcamp: {
    description: 'Wenn das Argument überzeugt, Musik bei denen zu kaufen, die sie gemacht haben: Hier lebt meine.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks von thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 von thecatrave'}
    ]
  }
};
