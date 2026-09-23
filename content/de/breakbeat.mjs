// German breakbeat guide. Structure and facts from the English page
// (breakbeat-guide-draft.md, build-breakbeat-article.mjs).
//
// German keywords (keywords/de-breakbeat.json): breakbeat 250 a month in
// Germany (TRANSLATION-RESEARCH.md, stage 1). The wording was checked in the
// Bing de-DE results on 2026-09-23 (Google answered with a bot check), no
// Ahrefs units spent: de.wikipedia's "Breakbeat" ranks first, result titles
// ask "Was ist Breakbeat?", and the related searches add "breakbeat musik" and
// "breakbeat bedeutung". The sample and drum-kit searches in the same results
// are rejected (WRITING.md), as the English page rejects them.
//
// Images as on the English page, at the owner's decision on 2026-09-23 ("leave
// the images as is"), although their sources are rights-reserved; logged open
// in defects.json (breakbeat-guide-rights-reserved-images). The players, the
// history map and the owner's music are built in content/breakbeat-media.mjs.
import {articleFigure, articleTable} from '../../site-components.mjs';
import {t} from '../../i18n.mjs';
import {breakbeatMedia} from '../breakbeat-media.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (src, width, height, className, alt, caption) => articleFigure({src, width, height, alt, caption: escapeHtml(caption), className});

const copy = {
  listening: t('de').essentialListening,
  notes: [
    'Die sechs Sekunden von Gregory Coleman, die spätere Produzenten zu unzähligen rhythmischen Identitäten dehnten.',
    'Clyde Stubblefields Akzente und Timing zeigen, warum ein berühmter Loop trotzdem eine menschliche Darbietung ist.',
    'Ein Drumbreak und Stimmfetzen, die durch Hip-Hop, Rave und Jungle wanderten.',
    'Percussion und offener Raum, die zum Kern der Praxis von DJs und B-Boys wurden.',
    'Die Platte, die den Amen Break zum Thema eines Tracks machte statt zur Unterlage darunter, ein Jahrzehnt bevor britische Rave-Produzenten ihn hochpitchten.',
    'Schnelle britische Hip-Hop-Produktion trifft auf Rave, bevor sich Breakbeat Hardcore als Name ganz gefestigt hatte. Der erhaltene Streaming-Player unten nutzt die eng verwandte £20-Version aus demselben frühen Katalog.',
    'Breaks, Bass und Rave-Samples, gebaut zum Mixen und zum sofortigen Wiedererkennen.',
    'Ein dunklerer, weiträumigerer Weg durch den Breakbeat Hardcore.',
    'Früher Rave-Crossover und Breakbeat Hardcore, kein Beleg dafür, dass die Gruppe immer ein Big-Beat-Act war.',
    'Ragga-Vocals und Breakbeat Hardcore wechseln aus der Rave-Kultur in die britischen Charts.',
    'Breakgetriebene Clubmusik, auf Big-Beat-Größe gebracht, ohne die Wiederholung des Acid zu verlieren.',
    'Acid-Druck, Drums in Hip-Hop-Größe und eine Brücke zwischen Underground-Clubs und Crossover-Breakbeat.',
    'Electro und Acid-Breakbeat vom Weg über die amerikanische Westküste.',
    'Electro, Bass und die regionale Identität der Florida Breaks in einer Produktion.',
    'Progressive Breaks, gedehnt auf orchestrale Größe und ein langes Club-Arrangement.',
    'Die strafferen Edits und das Tiefenregister des aufkommenden Nu-Skool-Kreislaufs.',
    'Der Swing des UK Garage und Bass bewegen sich durch einen eigenen Breaks-Rahmen.',
    'Heutiger gebrochener Rhythmus, geformt von Rave-Erinnerung statt von strengem Genre-Revival.',
    'Breakbeat-Bewegung innerhalb eines Techno-Rahmens.',
    'Ein heutiger Treffpunkt für Garage, Techno, Stimmfetzen und Breaks.',
    'Ein langer Breakbeat-Weg mit einer kälteren Berliner Atmosphäre und Raum dafür, dass sich der Rhythmus immer weiter verändert.'
  ],
  groups: {
    'breaks-before-genre': ['Die Breaks vor dem Genre', 'Hör die Quellplatten zuerst als Darbietungen: Jeder Break trägt ein anderes menschliches Gefühl, bevor spätere Produzenten ihn zerlegten.'],
    'british-rave-group': ['Der britische Rave beginnt sich zu teilen', 'Diese Platten zeigen, wie Breakbeat Hardcore sich vom schnellen britischen Hip-Hop zu Chart-Rave, dunklerem Druck und Ragga-Crossover bewegte.'],
    'florida-group': ['Florida wird zur eigenen Szene', 'Die Produktion von DJ Icey macht die lokale Mischung aus Electro, Miami Bass und rollenden Breaks hörbar.'],
    'acid-west-coast-group': ['Wege über Acid und die Westküste', 'Ein Track vergrößert den Acid-Breakbeat; der andere wendet sich zum Electro und zur amerikanischen Westküste.'],
    'crossover-group': ['Breaks erreichen Crossover-Größe', 'Chemical Beats zeigt, wie Acid-Wiederholung und Drums in Hip-Hop-Größe aus den Clubs zu einer Produktion im Festivalmaßstab wandern konnten.'],
    'nu-skool-group': ['Nu-Skool wird zum eigenen Kreislauf', 'Progressive Größe, geschärfte Edits und der Swing des UK Garage zeigen, wie breit das Breaks-Ökosystem der frühen 2000er wurde.'],
    'contemporary-group': ['Fünf heutige Wege', 'Rave-Erinnerung, Breakbeat Techno, moderner UK Bass und Progressive Breaks zeigen, warum der Rhythmus kein einheitliches Revival mehr braucht.']
  },
  floridaPlaylist: {
    title: 'Florida Breaks: eine lange regionale Playlist.',
    description: 'Nach dem einzelnen Beispiel von DJ Icey, um das breitere regionale Kontinuum zu hören: Electro-Bass, Freestyle, rollende Breaks und die Produzenten rund um Floridas Clubkreislauf.',
    iframeTitle: 'Playlist mit Florida Breaks und Funky Breaks auf Spotify'
  },
  nuSkoolPlaylist: {
    title: 'Nu-Skool Breaks: eine lange Playlist der Szene.',
    description: 'Ein längerer Weg über die einzelnen Beispiele hinaus, mit Freq Nasty, Plump DJs, Stanton Warriors und dem eigenen Breaks-Kreislauf um sie herum.',
    iframeTitle: 'Playlist The Sound of Nu Skool Breaks auf Spotify'
  },
  protectYaBreaks: 'Progressive Breaks bei 128 BPM mit zerhackten Rap-Vocals und einem Wechsel ins Downtempo. Mein eigener Track.',
  contemporaryMix: {
    kicker: 'Ein heutiger Weg von thecatrave',
    title: 'I Like to Smoke in Silence After Raves',
    description: 'Dieses Set gehört hierher, weil es zeigt, wie Breaks sich heute zwischen Garage, Bass Music, Techno und Rave bewegen, statt in einem abgeschlossenen Revival zu leben.',
    iframeTitle: 'I Like to Smoke in Silence After Raves von thecatrave auf SoundCloud'
  },
  popCulture: {
    label: 'BREAKBEAT JENSEITS DES CLUBS:',
    html: 'Spiele und Filme trugen breakgetriebene elektronische Musik weit über die Spezialläden hinaus. <em>Wipeout 2097</em> setzte die Chemical Brothers, The Prodigy und Future Sound of London in eine futuristische Rennwelt; <em>SSX Tricky</em> machte Big Beat, Hip-Hop und Breaks zu einem Teil der körperlichen Aufregung des Spielens; und der Soundtrack von <em>Matrix</em> ließ mit Künstlern wie The Prodigy und Propellerheads gebrochene Drums untrennbar von Tempo und Spannung klingen. Diese Soundtracks definierten Breakbeat nicht, aber sie brachten seine Energie zu Hörern, die nie einen Rave betreten hatten.'
  },
  map: {
    title: 'Karte der Breakbeat-Geschichte',
    desc: 'Eine Karte, die Funk-Breaks und den Hip-Hop der Bronx mit dem britischen Rave, Florida, der Westküste und Andalusien verbindet, gefolgt von Big Beat, Nu-Skool Breaks und heutiger Clubmusik.',
    columns: ['WURZELN', 'LOKALE WEGE', 'ZWEIGE DER 1990ER', '2000ER BIS HEUTE'],
    nodes: [
      ['Funk- & Soul-Breaks', '1960er bis 70er'], ['DJ-Methode Bronx', 'ab den 1970ern'],
      ['Britischer Rave', '1988 bis 92'], ['Florida / Orlando', 'ab den frühen 1990ern'], ['US-Acid / Westküste', '1990er'], ['Andalusien', '1992 bis 2002'],
      ['Hardcore → Jungle', '1990er'], ['Big Beat', 'Mitte bis Ende 90er'], ['Nu-Skool Breaks', 'Ende 90er bis 2000er'], ['Acid / Progressive', '1990er bis 2000er'],
      ['Jungle & D&B', 'lebendige eigene Szenen'], ['Eigener Breaks-Kreislauf', '2000er; später geschrumpft'], ['Regionale Kontinuitäten', 'Florida / Andalusien'], ['Heutiges Kontinuum', 'Electro / UKG / Techno / Bass']
    ],
    mobile: [
      ['1960er bis 70er', 'Aufgenommene Breaks werden DJ-Material', 'Drumpassagen aus Funk und Soul treffen auf die Plattenspieler-Praxis der Bronx.'],
      ['1988 bis 2002', 'Mehrere lokale Wege entstehen', 'Britischer Rave, Zentralflorida, Clubs der Westküste und Andalusien ordnen dieselbe rhythmische Idee verschieden.'],
      ['1990er bis 2000er', 'Zweige werden zu benannten Szenen', 'Hardcore, Jungle, Big Beat, Acid, Progressive und Nu-Skool Breaks überschneiden sich, ohne zu einer Systematik zu werden.'],
      ['Heute', 'Das Szenen-Etikett wird enger, die Sprache breitet sich aus', 'Eigene Breaks gibt es weiter, während gebrochene Drums durch Electro, Garage, Techno, Jungle und Bass Music zirkulieren.']
    ],
    caption: 'Die Daten markieren Entstehung und größte Sichtbarkeit, nicht das Verschwinden.'
  }
};

export default {
  lang: 'de',
  name: 'de-breakbeat',
  file: 'de/breakbeat.html',
  draft: 'de/breakbeat-draft.md',
  canonical: 'https://thecatrave.com/de/breakbeat',
  englishPath: '/breakbeat-guide',
  ogImage: 'https://thecatrave.com/img/og/breakbeat.jpg',
  bodyClass: 'article-page breakbeat-page',
  minReadingMinutes: 20,
  image: 'https://thecatrave.com/img/breakbeat/plump-djs-electric-disco.png',

  title: 'Was ist Breakbeat? Genre, Geschichte, Künstler und Stile',
  description: 'Was ist Breakbeat? Von Funk-Breaks und Hip-Hop über den britischen Rave, Florida und Andalusien bis zu Big Beat, Nu-Skool Breaks und den Breaks von heute.',
  datePublished: '2026-09-23',
  dateModified: '2026-09-23',
  dateLabel: '23. September 2026',

  heroKicker: 'Breakbeat-Guide',
  heroTitle: 'Was ist Breakbeat? Ein Guide zu Genre, Geschichte und Stilen',
  deck: 'Von Funk-Breaks und dem Hip-Hop der Bronx zum britischen Rave, nach Florida und Andalusien, zu Big Beat, Nu-Skool und der gebrochenen Clubmusik, die heute entsteht.',
  answerLabel: 'Breakbeat, Definition',
  breadcrumbName: 'Breakbeat',

  answerSection: 'Antwort',
  introSection: 'Einleitung',
  introTitle: 'Was ist Breakbeat? Ein Guide zu Genre, Geschichte und Stilen.',
  faqSection: 'FAQ',
  faqLabel: 'Häufige Fragen zu Breakbeat',
  faqTitle: 'Häufige Fragen zu Breakbeat.',

  sections: [
    {id: 'definition', heading: 'Ist Breakbeat ein Rhythmus oder ein Genre?', tocLabel: 'Rhythmus oder Genre?', title: 'Ist Breakbeat ein Rhythmus oder ein Genre?'},
    {id: 'origins', heading: 'Woher kommt Breakbeat?', tocLabel: 'Funk, Hip-Hop und Sampler', title: 'Woher kommt Breakbeat?', subsections: ['funk-records', 'hip-hop-method', 'samplers', 'broken-rhythms']},
    {id: 'history-map', heading: 'Wie Breakbeat reiste und sich veränderte', tocLabel: 'Karte der Geschichte', title: 'Wie Breakbeat reiste und sich veränderte.', className: 'map-section'},
    {id: 'club-history', heading: 'Wie Breakbeat zur Clubmusik wurde', tocLabel: 'Regionale Clubgeschichten', title: 'Wie Breakbeat zur Clubmusik wurde.', className: 'history-section', subsections: ['british-rave', 'branches', 'pirate-radio', 'florida', 'west-coast', 'andalusia', 'big-beat', 'nu-skool', 'less-visible']},
    {id: 'styles', heading: 'Breakbeat-Stile: Hardcore, Florida, Big Beat, Nu-Skool und mehr', tocLabel: 'Stile und verwandte Genres', title: 'Breakbeat-Stile: Hardcore, Florida, Big Beat, Nu-Skool und mehr.', className: 'styles-section', subsections: ['hardcore', 'florida-breaks', 'big-beat-style', 'nu-skool-style', 'acid-progressive', 'contemporary', 'breakbeat-techno', 'related']},
    {id: 'comparison', heading: 'Breakbeat, Jungle, Drum and Bass, Big Beat und Broken Beat im Vergleich', tocLabel: 'Genres im Vergleich', title: 'Breakbeat, Jungle, Drum and Bass, Big Beat und Broken Beat im Vergleich.', className: 'comparison-section'},
    {id: 'today', heading: 'Breakbeat heute', title: 'Breakbeat heute.', subsections: ['revival', 'travels']}
  ],

  media: ({lang}) => ({
    ...breakbeatMedia(lang, copy),
    'Bild: akai': figure('img/breakbeat/akai-s950-cutout.png', 2172, 724, 'feature-image cutout-image sampler-hero', 'Ein Akai-S950-Rack-Sampler, freigestellt auf transparentem Hintergrund', 'Der S950 machte detailliertes Bearbeiten von Breaks mit winzigem Speicher und einem sehr körperlichen Arbeitsablauf möglich.'),
    'Bild: wild-style': figure('img/breakbeat/rbma-wild-style-mural.jpg', 1400, 952, 'archive-image wide-archive-image people-image competitor-media', 'Charlie Ahearn und Fab Five Freddy 1983 neben dem Wandbild von Wild Style', 'Charlie Ahearn und Fab Five Freddy neben dem Wandbild von Wild Style, 1983.'),
    'Bild: hip-hop-pioneers': figure('img/breakbeat/musicradar-hip-hop-pioneers.jpg', 1200, 835, 'archive-image wide-archive-image people-image competitor-media', 'Grandmaster Flash, DJ Kool Herc, Afrika Bambaataa und Chuck D gemeinsam an der Columbia University', 'Grandmaster Flash, DJ Kool Herc, Afrika Bambaataa und Chuck D gemeinsam beim Rap Summit der Columbia University.'),
    'Bild: ultimate-breaks': figure('img/breakbeat/ultimate-breaks-and-beats-cutout.svg', 1072, 1020, 'archive-image artifact-cutout-image record-artifact', 'Eine originale Platte der Compilation Ultimate Breaks and Beats in ihrer Hülle', 'Ultimate Breaks & Beats machte schwer auffindbare Schlagzeugpassagen zu einer greifbaren Bibliothek für DJs und Produzenten.'),
    'Bild: sp1200': figure('img/breakbeat/musicradar-sp1200-floppies.jpg', 1200, 675, 'archive-image wide-archive-image competitor-media', 'Disketten auf einem E-mu-SP-1200-Sampler', 'Der SP-1200 speicherte Samples und Sequenzen auf Disketten und machte begrenzten Speicher zum Teil des Arbeitsablaufs.'),
    'Bild: prodigy': figure('img/breakbeat/musicradar-prodigy-1992.jpg', 1200, 675, 'archive-image wide-archive-image people-image competitor-media', 'The Prodigy 1992 als Trio in Essex fotografiert', 'The Prodigy in Essex, 1992, als der Breakbeat Hardcore vom Rave in eine breitere öffentliche Kultur wechselte.'),
    'Bild: pj-smiley': figure('img/breakbeat/shut-up-and-dance-pj-smiley.jpg', 1400, 933, 'archive-image pj-smiley-image people-image', 'Schwarz-Weiß-Porträt von PJ und Smiley von Shut Up and Dance', 'PJ und Smiley verbanden die Soundsystem-Kultur von Hackney, Hip-Hop-Produktion und die entstehende Rave-Szene.'),
    'Bild: dj-icey': figure('img/breakbeat/dj-icey-flyer-cutout.svg', 635, 560, 'archive-image artifact-cutout-image', 'Ein historischer Flyer für DJ Icey im Club 600 North', 'Ein Flyer von DJ Icey und Zone Records aus dem regionalen Clubkreislauf Floridas.'),
    'Bild: cordoba': figure('img/breakbeat/cordoba-breakbeat-flyer.jpg', 1052, 1500, 'archive-image portrait-image', 'Flyer der Veranstaltung Break Beat Nation in Córdoba, 2001', 'Break Beat Nation wirbt 2001 in Córdoba für ein Programm über mehrere Nächte.'),
    'Bild: andalusia': figure('img/breakbeat/andalusia-rave-crowd.jpg', 1800, 1175, 'archive-image wide-archive-image people-image', 'Tanzendes Publikum auf einem historischen Breakbeat-Rave in Andalusien', 'Ein andalusisches Breakbeat-Publikum, bevor Handys Teil der Tanzfläche wurden.'),
    'Bild: plump-djs': figure('img/breakbeat/plump-djs-electric-disco.png', 1200, 1200, 'archive-image square-image', 'Plattenhülle von Plump DJs, Electric Disco und Plumpy Chunks, Finger Lickin’', 'Finger Lickin’ machte Nu-Skool Breaks zu einer erkennbaren Sprache für Clubs und Plattenhüllen.'),
    'Tabelle: comparison': articleTable({
      headers: ['Stil', 'Rhythmischer Charakter', 'Ungefährer Tempobereich', 'Historischer Zusammenhang', 'Typische Namen', 'Deutlichster Unterschied'],
      label: 'Breakbeat und verwandte Genres im Vergleich, Tabelle',
      rows: [
        ['Breakbeat / Breaks', 'Synkopierte Club-Drums, gesampelt oder programmiert', '120 bis 140 BPM sind üblich, aber nicht die Regel', 'Clubszenen in Großbritannien, den USA und international', 'Stanton Warriors, Plump DJs, DJ Icey', 'Die breite Clubkategorie um gebrochene Rhythmen'],
        ['Breakbeat Hardcore', 'Schnelle Breaks, Rave-Stabs, Pianos und Subbass', 'Etwa 140 bis über 160 BPM', 'Britischer Rave der frühen 1990er', 'SL2, 2 Bad Mice, Acen', 'Übergangssound des Hardcore, bevor sich spätere Zweige festigten'],
        ['Jungle', 'Stark bearbeitete Breaks, Einfluss von Reggae und Dub, tiefer Subbass', 'Etwa 150 bis 170 BPM', 'Schwarze britische Rave-Kultur der frühen 1990er', '4hero, Remarc, Shy FX', 'Eigene Kultur aus Soundsystem, MCs und Dubplates'],
        ['Drum and Bass', 'Schnelle, auf Breaks beruhende Drums mit vielen spezialisierten Produktionsstilen', 'Etwa 160 bis 180 BPM', 'Ab Mitte der 1990er', 'Goldie, Photek, LTJ Bukem', 'Eine breite Szene und Genreidentität jenseits der allgemeinen Breaks-Kategorie'],
        ['Big Beat', 'Große Loops, Acid, Rock-Dynamik und Sample-Collage', 'Oft 100 bis 140 BPM', 'Crossover-Club- und Festivalkultur der 1990er', 'Chemical Brothers, Fatboy Slim', 'Stärker loopgetrieben und aufs Crossover ausgerichtet als die eigentlichen Breaks'],
        ['Acid / Progressive Breaks', 'Gebrochene Drums mit 303-Linien oder langen, atmosphärischen Steigerungen', 'Oft 120 bis 140 BPM', 'Sich überschneidende Clubkreisläufe der 1990er und 2000er', 'Chemical Brothers, Hybrid, frühe Breaks-DJs', 'Stile mit Zusatz statt einer einheitlichen regionalen Szene'],
        ['Broken Beat', 'Lockerer, synkopierter Rhythmus mit Harmonik aus Jazz, Soul und Funk', 'Oft 90 bis 130 BPM', 'Westlondon, Ende der 1990er und 2000er', 'IG Culture, Bugz in the Attic', 'Eine eigene Szene mit anderer rhythmischer und harmonischer Sprache'],
        ['Breakcore', 'Extrem bearbeitete Breaks, Hardcore-Intensität, Verzerrung und Bruch', 'Meist 160 BPM und mehr, aber sehr unterschiedlich', 'Ab den 1990ern, internationaler Underground', 'Alec Empire, Venetian Snares', 'Extremere Bearbeitung und Struktur als Breaks oder Jungle'],
        ['Breakbeat Techno', 'Techno-Arrangement und Sounddesign um gebrochene Drums', 'Oft 125 bis 150 BPM', 'Mehrere heutige regionale Szenen', 'Je nach Szene verschieden', 'Techno-Rahmen mit gebrochenem statt geradem Puls']
      ].map(row => row.map(escapeHtml))
    })
  }),

  // The English page's sources, URL for URL, with translated labels; the two
  // English groups run as one list.
  sources: [
    {html: '<a href="https://blogs.loc.gov/music/2023/08/early-hip-hop-at-the-library-of-congress/" target="_blank" rel="noopener noreferrer">Library of Congress: Early Hip-Hop at the Library of Congress</a> und <a href="https://blogs.loc.gov/loc/2021/01/citizen-dj-noah-webster-and-the-value-of-copyright/" target="_blank" rel="noopener noreferrer">Material von Citizen DJ</a> zu Kool Herc und der Praxis der DJs mit Breaks (englisch)'},
    {href: 'https://www.musicradar.com/news/the-history-of-breaks', label: 'MusicRadar: The History of Breaks in Music Production'},
    {href: 'https://www.musicradar.com/news/the-beginners-guide-to-breaks', label: 'MusicRadar: The Beginner’s Guide to Breakbeat'},
    {href: 'https://daily.redbullmusicacademy.com/2019/01/shut-up-and-dance-interview/', label: 'Red Bull Music Academy Daily: Interview mit Shut Up and Dance'},
    {href: 'https://www.hachette.co.uk/titles/bill-brewster-2/last-night-a-dj-saved-my-life/9781474625609/', label: 'Bill Brewster und Frank Broughton: Last Night a DJ Saved My Life'},
    {href: 'https://www.penguinrandomhouse.com/books/674010/energy-flash-by-simon-reynolds/', label: 'Simon Reynolds: Energy Flash'},
    {href: 'https://www.orlandoweekly.com/news/dance-dance-revolution-2244233/', label: 'Orlando Weekly: Dance Dance Revolution, zu den Clubs Orlandos, Underground Record Source und den Florida Breaks'},
    {href: 'https://www.orlandoweekly.com/music/aahz-respects-the-breaks-that-made-orlando-global-overdue-propers-for-dj-stylus-the-beacham-2453343/', label: 'Orlando Weekly: AAHZ Respects the Breaks That Made Orlando Global'},
    {href: 'https://www.djicey.com/bio', label: 'DJ Icey: offizielle Biografie, zu Einflüssen, Residency im Edge und Zone Records'},
    {href: 'https://www.hardkiss.org/_files/ugd/502d5a_88604739932d41c5b2bd0087c98d4b90.pdf', label: 'Hardkiss: The Magical Sound of the San Francisco Underground, zum frühen Rave-Netz der Bay Area'},
    {href: 'https://www.diariodesevilla.es/ocio/David-Pareja-breakbeat_0_1859814016.html', label: 'Diario de Sevilla: Interview mit David Pareja, Regisseur von Break Nation, zur andalusischen Szene von 1992 bis 2002 (spanisch)'},
    {href: 'https://www.filmotecadeandalucia.es/documents/282361/334099154/CO%2B-%2B2024-07-18-%2B%2820%2730%29%2B-%2BBreak%2BNation.pdf/33f0b15d-ce37-49fa-b1cd-129d026bfc97', label: 'Filmoteca de Andalucía: Programm und Inhaltsangabe von Break Nation (spanisch)'},
    {href: 'https://www.officialcharts.com/songs/stanton-warriors-da-antidote/', label: 'Official Charts Company: Stanton Warriors, Da Antidote'},
    {href: 'https://pitchfork.com/reviews/tracks/skee-mask-50-euro-to-break-boost/', label: 'Pitchfork: Skee Mask, 50 Euro to Break Boost'},
    {html: 'thecatrave: <a href="/uk-electronic-music-evolution">Geschichte der britischen elektronischen Musik</a> (auf Englisch) und <a href="/de/jungle">großer Guide zur Jungle-Musik</a>'}
  ],

  bandcamp: {
    description: 'Diese Veröffentlichungen liegen der Breakbeat-Geschichte in diesem Artikel am nächsten. Wer eine kauft, unterstützt meine Arbeit direkt.',
    tracks: [
      {title: 'thecatrave, Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks von thecatrave'},
      {title: 'thecatrave, Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 von thecatrave'},
      {title: 'thecatrave, Mylène Farmer Dégénération remix', id: '467727105', url: 'https://thecatrave.bandcamp.com/track/myl-ne-farmer-d-g-n-ration-electronica-breaks-dubstep-remix', linkText: 'Mylène Farmer, Dégénération, Remix von thecatrave'}
    ]
  }
};
