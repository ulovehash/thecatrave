// German dubstep guide. Structure and facts from the English page
// (dubstep-guide-draft.md, build-dubstep-article.mjs).
//
// German keywords, measured 2026-09-18 with keywords-explorer-matching-terms,
// country de (keywords/de-dubstep.json): dubstep 1,500 a month, dubstep musik
// 250, was ist dubstep 80. The English-language questions in the German pull
// ("what is dubstep?" 250 and its variants) are left to the English page, and
// "lizenzfreie dubstep musik" (80) asks for files, which this site does not
// hand out (WRITING.md).
//
// The English generator places each listening block by paragraph index. Here
// the draft places them with [Embed: ...] lines at the same positions, so the
// page reads in the same order. Quotations are translated; the sources quoted
// are English and are listed below.
//
// The images are the English guide's, in img/dubstep/, with translated
// captions; see home-articles.mjs for why a translation may reuse them.
import {
  articleFigure, articleListeningBand, articleListeningCollection, articleTable,
  articleTrackEmbed, articleYoutubeEmbed
} from '../../site-components.mjs';
import {t} from '../../i18n.mjs';

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

const youtube = (id, label) => articleYoutubeEmbed({
  src: `https://www.youtube-nocookie.com/embed/${id}`,
  title: `${label}, auf YouTube`
});

const figure = ({name, width, alt, caption, className = 'wide-archive-image', height}) => articleFigure({
  src: `img/dubstep/${name}.webp`,
  srcset: `img/dubstep/${name}-320.webp 320w, img/dubstep/${name}.webp ${width}w`,
  width, height, alt, caption, className
});

export default {
  lang: 'de',
  name: 'de-dubstep',
  file: 'de/dubstep.html',
  draft: 'de/dubstep-draft.md',
  canonical: 'https://thecatrave.com/de/dubstep',
  englishPath: '/dubstep-guide',
  ogImage: 'https://thecatrave.com/img/og/dubstep.jpg',
  image: 'https://thecatrave.com/img/dubstep/dubplate-lathe.webp',
  bodyClass: 'article-page dubstep-page',
  minReadingMinutes: 9,

  title: 'Was ist Dubstep? Herkunft, Sound und ein Wort für zwei Genres',
  description: 'Dubstep begann in Plattenläden und Kellern im Süden Londons und spaltete sich dann in zwei Genres mit einem Namen. Der Sound, die Szenen und wo er heute steht.',
  datePublished: '2026-09-18',
  dateModified: '2026-09-18',
  dateLabel: '18. September 2026',

  heroKicker: 'Dubstep',
  heroTitle: 'Was ist Dubstep?',
  deck: 'Ein Wort für zwei sehr verschiedene Musiken. Wie sich ein Sound aus einem Plattenladen in Croydon in zwei Hälften teilte, und was aus der Version wurde, die nie verschwand.',
  answerLabel: 'Dubstep: Definition',
  breadcrumbName: 'Dubstep',

  answerSection: 'Antwort',
  introSection: 'Einleitung',
  introTitle: 'Zwei Antworten auf dieselbe Frage.',
  faqSection: 'FAQ',
  faqLabel: 'Häufige Fragen zu Dubstep',
  faqTitle: 'Häufige Fragen zu Dubstep.',

  sections: [
    {id: 'croydon', heading: 'Croydon, Big Apple und ein Sound ohne Namen', title: 'Croydon, Big Apple und ein Sound ohne Namen.', kicker: 'Herkunft', tocLabel: 'Croydon und Big Apple'},
    {id: 'sound', heading: 'Wie Dubstep gebaut ist: 140 BPM, Halftime und Dubstep-Bass', title: 'Wie Dubstep gebaut ist: 140 BPM, Halftime und Dubstep-Bass.', tocLabel: 'Wie Dubstep gebaut ist'},
    {id: 'scene', heading: 'FWD>>, DMZ und die Ökonomie einer Dubplate', title: 'FWD>>, DMZ und die Ökonomie einer Dubplate.', tocLabel: 'FWD>>, DMZ und Dubplates'},
    {id: 'split', heading: 'Wie ein Wort zwei Dinge bedeuten konnte', title: 'Wie ein Wort zwei Dinge bedeuten konnte.', kicker: '2010 bis 2012'},
    {id: 'bristol', heading: 'Bristol: die Linie, die nie abriss', title: 'Bristol: die Linie, die nie abriss.', tocLabel: 'Bristol'},
    {id: 'berlin', heading: 'Berlin: Dubstep trifft Techno', title: 'Berlin: Dubstep trifft Techno.', tocLabel: 'Berlin'},
    {id: 'subgenres', heading: 'Die Subgenres und was sie wirklich bedeuten', title: 'Die Subgenres und was sie wirklich bedeuten.', tocLabel: 'Die Subgenres erklärt'},
    {id: 'now', heading: 'Wo Dubstep heute steht', title: 'Wo Dubstep heute steht.'}
  ],

  media: ({lang}) => ({
    'Big Apple Records': figure({name: 'big-apple-records', width: 720, height: 482,
      alt: 'Die Ladenfront von Big Apple Records in Croydon um das Jahr 2000',
      caption: 'Big Apple Records, Croydon, um 2000. Die Leute, die bedienten, die Leute, die herumhingen, und die Leute, die die Platten machten, waren weitgehend dieselben. Foto: Bigapplerecords, CC BY-SA 3.0.'}),
    'dubplate lathe': figure({name: 'dubplate-lathe', width: 961, height: 540,
      alt: 'Eine Schneidemaschine für Vinyl mit einer Acetatscheibe auf dem Plattenteller',
      caption: 'Dreißig Pfund, etwa fünfzig Abspielvorgänge, dann waren die Rillen hinüber. Knappheit war keine Marketingstrategie, sondern eine physische Eigenschaft des Formats.'}),
    'FWD Berlin': figure({name: 'fwd-berlin', width: 980, height: 650,
      alt: 'Sgt Pokes und Loefah bei einer FWD-Nacht in Berlin im Jahr 2006',
      caption: 'Sgt Pokes und Loefah bei FWD in Berlin, 2006. Derselbe MC und derselbe DJ wie in Brixton, dreizehnhundert Kilometer weiter östlich. Foto: Stephan Machac.'}),
    'sound system': figure({name: 'sound-system', width: 1200, height: 800,
      alt: 'Ein selbst gebauter Lautsprecherturm ragt beim Notting Hill Carnival über die Straße',
      caption: 'Ein Soundsystem wird beim Notting Hill Carnival auf der Straße aufgebaut. Die karibische Tradition der Soundsysteme, aus der Dubstep wuchs, hat nie aufgehört, Anlagen aufzubauen, und die tiefe Seite musste nie wiederbelebt werden, um im Raum zu bleiben. Foto: Jay Bergesen, CC BY 2.0.'}),
    'Burial': figure({name: 'burial-portrait', width: 703, height: 504, className: 'square-image',
      alt: 'Porträt von Burial, dem Produzenten aus dem Süden Londons hinter Untrue',
      caption: 'Burial blieb trotz einer Nominierung für den Mercury Prize anonym. Die Szene schützte das, und das sagt, was ihr 2007 wichtig war.'}),
    'Bassweight': youtube('YVcX0Oc5j5E', 'Bassweight, ein Dokumentarfilm über Dubstep'),
    'All My Homies Hate Skrillex': youtube('-hLlVVKRwk0', 'All My Homies Hate Skrillex von Timbah.On.Toast'),
    'croydon-listening': collection(lang, 'croydon-listening',
      'Vor und nach dem Namen.',
      'Der Sound, bevor er einen Namen hatte, und kurz danach. Drei Jahre auseinander, beide wenige Kilometer vom selben Plattenladen entfernt gemacht.',
      [{year: 'Tempa, 2002', artist: 'Horsepower Productions', title: 'Gorgon Sound', spotify: '2eKcQqAYex36Eju94neF4l',
        note: 'Der dem Dub zugewandte Garage, der den Sound speiste: viel Delay und Bassline, gemacht, bevor irgendwer ein Wort dafür brauchte.'},
       {year: 'Tempa, 2005', artist: 'Skream', title: 'Midnight Request Line', youtube: 'vJGXRQ9vBoU',
        note: 'Der Croydon-Sound mit dem Namen daran. Über Big Apple Records geschrieben, trug er Dubstep auf Tanzflächen, die nie von dem Laden gehört hatten.'}]),
    'built-listening': collection(lang, 'built-listening',
      'Raum und Wobble im selben Tempo.',
      'Die beiden Pole der Technik. Eine Platte ist fast nur Raum, die andere fast nur Wobble, und beide liegen im selben Tempo mit demselben Drum-Muster.',
      [{year: 'DMZ, 2006', artist: 'Loefah', title: 'Mud', youtube: 'd_KtXqmKCFE',
        note: 'Fast nur Raum. Kick und Snare liegen weit auseinander, der Sub-Bass erledigt den Rest, und sehr wenig anderes passiert: Halftime in seiner kargsten Form.'},
       {year: 'Tempa, 2008', artist: 'Benga and Coki', title: 'Night', youtube: 'FHDvybumHAk',
        note: 'Der Wobble als ganze Platte. Dieselben 140 und dasselbe Drum-Muster wie Mud, mit einem Niederfrequenz-Oszillator, der den Bass zur Hook macht.'}]),
    'rinse-listening': collection(lang, 'rinse-listening',
      'Der Sender, nicht der Keller.',
      'Zwei der DJs, die dieser Abschnitt nennt, auf dem Piratensender, der den Sound aus dem Süden Londons hinaustrug, in einer Sendung aus unserem eigenen Katalog statt einem Archivausschnitt.',
      [{year: 'Rinse FM', artist: 'Plastician, Hatcha and Crazy D', title: 'I LOVE: DUBSTEP', youtube: 'S1s2XvfHfhU',
        note: 'Hatcha nutzte Rinse 2003, um den Sound über die Platten hinaus zu tragen; Plastician betrieb zur selben Zeit Filthy Dub. Über den Sender hörte jeder außerhalb dieser Räume die beiden.'}]),
    'dmz-listening': collection(lang, 'dmz-listening',
      'Die DMZ-Jahre, und danach.',
      'Wie die DMZ-Jahre klangen und was daraus hervorging. Die erste Platte wurde für einen Raum mit einer Anlage geschrieben. Die zweite für Kopfhörer um vier Uhr morgens.',
      [{year: 'DMZ, 2006', artist: 'Digital Mystikz', title: 'Anti War Dub', youtube: '--jr22La8Nk',
        note: 'Für einen Raum mit einer Anlage geschrieben: meditative Wiederholung, Dub-Sirenen und ein Gewicht, das man spüren statt hören soll.'},
       {year: 'Hyperdub, 2007', artist: 'Burial', title: 'Archangel', spotify: '2agb1CPPGWXqXnrKn6cx7u',
        note: 'Dasselbe Vokabular, nach drinnen geholt. Untrue brachte eine Nominierung für den Mercury Prize, während sein Macher anonym blieb.'}]),
    'split-listening': collection(lang, 'split-listening',
      'Ein Tempo, entgegengesetzte Prioritäten.',
      'Der Abstand an einem Ort. Beide Platten liegen im selben Tempo mit demselben Drum-Muster, und die zweite verlegt das Gewicht vom Sub-Bass in verzerrte Mitten. Die erste machte ein Gründer von DMZ.',
      [{year: 'DMZ, 2008', artist: 'Coki', title: 'Spongebob', youtube: 'cIpc817U_R4',
        note: 'Die härtere Richtung, gemacht in der Szene selbst. Dazed setzte sie an die Spitze seiner Liste der Tracks, die Brostep definieren, und sie kam von einem Gründer von DMZ.'},
       {year: '2010', artist: 'Skrillex', title: 'Scary Monsters and Nice Sprites', spotify: '4rwpZEcnalkuhPyGkEdhu0',
        note: 'Das Gewicht vom Sub-Bass in verzerrte Mitten verlegt, wo ein Festivalfeld es hören kann. 2012 folgten drei Grammys.'}]),
    'bristol-listening': collection(lang, 'bristol-listening',
      'Die Bristoler Linie.',
      'Bristol hörte Dub, bevor es Dubstep hörte, und das hört man: langsamer, schwerer, weniger am Drop interessiert als am Druck drumherum.',
      [{year: 'Tectonic, 2006', artist: 'Pinch', title: 'Qawwali', spotify: '36tSNnMctCGaxQp0JVGBLC',
        note: 'Tectonic in seinem ersten Jahr: langsamer und seltsamer als London, mehr Dub und Techno verpflichtet als dem Garage, und bis heute die Vorlage für die tiefe Seite.'}]),
    'berlin-listening': collection(lang, 'berlin-listening',
      'Wo sich die beiden Städte treffen.',
      'Die Platte, auf der sich Dubstep und Berliner Techno treffen. Ein Track von Skull Disco, neu gebaut von einem der eigenwilligsten Produzenten des Techno, über achtzehn Minuten lang.',
      [{year: 'Skull Disco, 2007', artist: 'Shackleton', title: 'Blood On My Hands, Ricardo Villalobos Apocalypso Now Mix', youtube: 'KQr6m2l2J-Y',
        note: 'Dubstep als Rohmaterial für ein Techno-Set: Das Arrangement dehnt sich über achtzehn Minuten und löst sich nie in einen Drop auf.'}]),
    'Tabelle: subgenres': articleTable({
      headers: ['Begriff', 'Ungefähr wann', 'Was er bedeutet', 'Verhältnis zum Original'],
      rows: [
        ['Dubstep (original, später deep genannt)', 'Ab 2002', '140 BPM, Halftime-Drums, Sub-Bass, Raum', 'Die Quelle'],
        ['Brostep', 'Ab 2010', 'Verzerrte Mitten, Festivaldynamik, aggressive Drops', 'Dasselbe Tempo und Drum-Muster, entgegengesetzte Frequenzpriorität'],
        ['Riddim', 'Ab Mitte der 2010er', 'Minimal, repetitiv, stark auf Triolen gebaut', 'Stammt vom Brostep ab, nicht vom ursprünglichen Sound'],
        ['Melodic Dubstep', 'Ab Anfang der 2010er', 'Emotionale Akkorde, Einfluss von Trance und Progressive', 'Übernimmt das Tempo, lässt die Dunkelheit weg'],
        ['Chillstep', 'Ab Anfang der 2010er', 'Weich, ambient, vom Gesang getragen', 'Eher eine Streaming-Kategorie als eine Szene'],
        ['Future Garage', 'Ab Ende der 2000er', 'Garage-Swing, Sounddesign des Dubstep, zurückhaltend', 'Ein Geschwister, das sich parallel entwickelte'],
        ['Post-Dubstep', 'Ab 2010', 'Produzenten, die das Vokabular nutzten und weiterzogen', 'Ein Etikett, das später von Autoren vergeben wurde, keine Szene, der man beitrat']
      ]
    }),
    'subgenre-listening': collection(lang, 'subgenre-listening',
      'Zwei der späteren Zweige.',
      'Zwei der späteren Zweige, damit die Tabelle oben einen Klang bekommt und nicht nur eine Definition.',
      [{year: 'Riddim', artist: 'Bommer and Crowell', title: 'Yasuo', youtube: 'fP2O6JcnJJI',
        note: 'Riddim: minimal, repetitiv und auf Triolen gebaut, abgeleitet vom Brostep, nicht vom ursprünglichen Sound.'},
       {year: '2014', artist: 'Seven Lions featuring Kerli', title: 'Worlds Apart', youtube: 'ULqdjtDI-bs',
        note: 'Melodic Dubstep: das Tempo behalten, die Dunkelheit verworfen, stattdessen Akkorde aus Trance und Progressive.'}]),
    'deep-medi-listening': collection(lang, 'deep-medi-listening',
      'Wie das Label klingt.',
      'Deep Medi als Katalog statt als sein Gründer, mit dem Album daraus, an dem das Label bis heute gemessen wird.',
      [{year: '2009', artist: 'Silkie', title: 'Concrete Jungle', youtube: 'fIHrJa0bWbY',
        note: 'Der Eröffnungstrack von City Limits Vol. 1, dem Debütalbum des Produzenten aus dem Westen Londons und der Platte, die Deep Medi zu einem Katalog machte.'}]),
    'thecatrave remix': articleListeningBand({
      platform: 'soundcloud',
      id: 'dubstep-thecatrave-remix',
      kicker: 'thecatrave',
      title: 'Mylene Farmer, Degeneration. Remix aus Electronica, Breaks und Dubstep.',
      description: 'Ein Beispiel dafür, wie dieselben Techniken außerhalb des Genres arbeiten, aus dem sie kamen: Halftime-Gewicht und Breaks unter einer französischen Pop-Stimme, und genau das passiert, wenn ein Genre zu einem Werkzeugkasten wird.',
      src: `https://w.soundcloud.com/player/?url=${encodeURIComponent('https://soundcloud.com/thecatrave/mylene-farmer-degeneration')}&color=%23ff5a36&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false`,
      iframeTitle: 'Mylene Farmer, Degeneration, Remix von thecatrave auf SoundCloud',
      fullBleed: true,
      tone: 'cyan'
    }),
    'dubstep-classics-playlist': articleListeningBand({
      platform: 'spotify',
      id: 'dubstep-classics-playlist',
      kicker: t(lang).essentialListening,
      title: 'Dubstep Classics: die erweiterte Playlist.',
      description: 'Ein breiterer Weg durch die Platten, die die meisten meinen, wenn sie Dubstep sagen, mit Gewicht auf der lauteren Seite, die die Tabelle oben zu sortieren versucht.',
      src: 'https://open.spotify.com/embed/playlist/37i9dQZF1DX4arVIN5Cg4U?utm_source=generator',
      iframeTitle: 'Playlist Dubstep Classics auf Spotify',
      fullBleed: true,
      tone: 'cyan'
    })
  }),

  sources: [
    {href: 'https://www.vice.com/en/article/an-oral-history-of-dubstep-vice-lauren-martin-610/', label: 'VICE: The oral history of dubstep'},
    {href: 'https://www.museumofyouthculture.com/a-brief-history-of-early-dubstep/', label: 'Museum of Youth Culture: A brief history of early dubstep'},
    {href: 'https://www.dazeddigital.com/music/article/64343/1/what-is-brostep-five-key-tracks-skrillex-fred-again-dubstep', label: 'Dazed: What is brostep, in five key tracks'},
    {href: 'https://www.clashmusic.com/features/nuff-wheel-ups-exploring-dubplate-culture/', label: 'Clash: Nuff wheel ups, exploring dubplate culture'},
    {href: 'https://legacy.boilerroom.tv/dubstep-from-croydon-to-kreuzberg-beyond/', label: 'Boiler Room: Dubstep from Croydon to Kreuzberg and beyond'},
    {href: 'https://www.factmag.com/2015/06/03/transatlantic-vibrations-10-years-of-dmz-and-dub-war/', label: 'FACT: Ten years of DMZ and Dub War'},
    {href: 'https://djmag.com/features/how-big-apple-records-became-birthplace-of-dubstep', label: 'DJ Mag: How Big Apple Records became the birthplace of dubstep'}
  ],

  bandcamp: {
    description: 'Diese Veröffentlichungen stehen der Seite der Breaks und des Bass in diesem Artikel am nächsten. Wer eine kauft, unterstützt meine Arbeit direkt.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks von thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 von thecatrave'}
    ]
  }
};
