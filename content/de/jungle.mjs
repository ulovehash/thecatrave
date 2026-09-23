// German jungle guide. Structure and facts from the English page
// (jungle-music-guide.html, built by build-jungle-article.mjs from the body it
// preserves between its jungle-content markers).
//
// German keywords (keywords/de-jungle.json): jungle music 150 a month in
// Germany (TRANSLATION-RESEARCH.md, stage 1). The wording was checked in the
// Bing de-DE results on 2026-09-23 (Google answered with a bot check), no
// Ahrefs units spent: German result titles write "Jungle Musik" and ask "Was
// ist Jungle?"; de.wikipedia's page is "Jungle". The band Jungle shares the
// bare word; the searches about it (songs, merch, official site) are rejected.
//
// Every block the English generator places by paragraph marker is placed here
// by an [Embed: ...], [Bild: ...] or [Tabelle: ...] line at the same position;
// the blocks are built in content/jungle-media.mjs. The English page carries no
// credit on its seven photographs and flyers; logged in defects.json
// (jungle-images-uncredited), not guessed here. Its FAQ sits before the
// acknowledgements; the shared generator puts every FAQ after the last section.
import {articleFigure, articleTable} from '../../site-components.mjs';
import {jungleImages, jungleMedia} from '../jungle-media.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const copy = {
  trackTitle: (artist, title) => `${artist}, ${title} auf Spotify`,
  tracks: {
    'we-are-ie': 'Aufgenommen 1989, veröffentlicht 1991. Die Platte, der man am häufigsten zuschreibt, den Grundstein für Jungle gelegt zu haben, und die, auf der dieser Abschnitt immer beruht hat.',
    '28-gun-bad-boy': '1993, gemacht in Manchester. Die Brücke zwischen der Linie des Acid House, die dieser Abschnitt beschreibt, und dem, was London gleich daraus machen sollte.',
    'valley-of-the-shadows': '1993. Ein karger, bedrohlicher Maßstab: Subbass, zerhackte Breaks und ein Sample, das Teil der gemeinsamen Sprache des Jungle wurde.',
    'incredible': '1994. Eine prägende Begegnung von Jungle-Produktion und der Energie eines Dancehall-MCs, die den Sound weit über die Spezialclubs hinaustrug.',
    'inner-city-life': '1994. Der Gesang von Diane Charlemagne und ein weit ausholendes Arrangement führten Jungle in die Größe eines Albums, ohne seine rhythmische Komplexität zu glätten.',
    'renegade-snares': '1993. Rauschende Akkorde und fein geschnittene Drums zeigen, wie emotional und rhythmisch detailreich früher Jungle sein konnte.',
    'babylon': '1995. Ein dunkler, dubbiger Track voller Druck, dessen Bass, Stimmfetzen und Break-Edits zu einem bleibenden Bezugspunkt des Jungle wurden.'
  },
  images: {
    flyers: ['Eine Auswahl britischer Jungle-Rave-Flyer aus den frühen Neunzigern', 'Collage aus Jungle-Flyern, 1991 bis 1994.'],
    'pirate-radio': ['Alte Sendetechnik eines Piratenradios aus der Jungle-Zeit', 'Ein Piratensender.'],
    'tape-pack': ['Ein World-Dance-Tape-Pack von 1994', 'Ein Tape Pack.'],
    awol: ['Flyer eines Jungle-Raves im AWOL', 'Rave-Flyer des AWOL.'],
    fabio: ['Fabio legt in den frühen Jungle-Tagen auf', 'Fabio am Pult, ein Pionier, der den Jungle-Sound mitprägte.'],
    'kool-fm': ['Flyer zum 3. Geburtstag von Kool FM, Jungle, 1994', 'Flyer von Kool FM (1994): die Geburtstagsparty eines Piratensenders.'],
    dancing: ['Menschen tanzen auf einem Jungle-Rave', 'Jungle-Raves: Schweiß, Gunfingers, Bass, Zusammenhalt.']
  },
  videos: {
    'dj-hype': {kicker: 'Aus dem Archiv', heading: 'DJ Hype, Jungle Massive.', description: 'Eine Compilation aus der Zeit, die die Namen und Platten dieses Abschnitts zu einem durchgehenden Hörweg macht.'},
    'original-nuttah': {kicker: 'Der wichtige Track', heading: 'Shy FX & UK Apachi, Original Nuttah.', description: 'Die Crossover-Hymne von 1994, um die es hier geht, genau an der Stelle, an der sie in die Geschichte eintritt.'},
    'nia-archives': {kicker: 'Das Revival in der Praxis', heading: 'Nia Archives, Boiler Room: London.', description: 'Ein heutiges Set, das grundlegende Jungle-Platten, aktuelle Edits und die neue Energie verbindet, die dieser Abschnitt beschreibt.'},
    'tim-reaper': {kicker: 'Zum Reinhören', heading: 'Tim Reaper, Jungle-Mix im Geist des Rare Groove.', description: 'Aufgenommen für NTS. Ein DJ statt einer Platte, also ist der Beleg ein Set: eine Stunde davon, wie das Revival wirklich klingt.'}
  },
  playlists: {
    'early-jungle-playlist': {title: 'Früher Jungle und Hardcore: die lange Playlist.', description: 'Ein längerer Weg durch die Platten, die Breakbeat Hardcore, Darkcore und den ersten erkennbaren Jungle-Sound verbinden.', iframeTitle: 'Playlist mit frühem Jungle und Hardcore auf Spotify'},
    'jungle-mania-playlist': {title: 'Die Jahre des Durchbruchs: die lange Playlist.', description: 'Eine breitere Auswahl an Pionieren, Hymnen und verschiedenen Seiten des Jungle aus der Zeit, in der die Musik über das Piratenradio hinauskam, ohne ihre Underground-Sprache zu verlieren.', iframeTitle: 'Playlist mit Jungle-Pionieren auf Spotify'}
  },
  quotes: {
    'quote-pirate-radio': '„Das Piratenradio war der Herzschlag der Underground-Tanzmusik.“',
    'quote-dj-storm': '„Welche Dubplates du in deiner Tasche hattest, zeigte, woher du kamst.“ DJ Storm'
  },
  lateSummer: 'Breakbeat auf der Liquid-Seite der Trennung. Mein eigener Track.',
  artDeco: {
    kicker: 'Ein aktueller Jungle-Remix von thecatrave',
    title: 'Lana Del Rey : Art Deco (Jungle Remix).',
    description: 'Ein heutiges Beispiel dafür, wie der Druck aus Breaks und Bass des Jungle einen Popgesang neu rahmt, statt einfach eine Vorlage aus den Neunzigern nachzubauen.',
    iframeTitle: 'Lana Del Rey, Art Deco (Jungle Remix) von thecatrave auf SoundCloud'
  },
  tables: {
    'foundation-builders': {
      headers: ['Künstler / DJ / MC', 'Warum wichtig'], label: 'Grundsteinleger des Jungle, Tabelle',
      rows: [
        ['Shy FX', 'Schöpfer von „Original Nuttah“, einer Jungle-Hymne, die den Mainstream erreichte'],
        ['LTJ Bukem', 'Vater des „Intelligent Jungle“, bekannt für jazzige, atmosphärische Tracks'],
        ['Congo Natty (Rebel MC)', 'Pionier des Ragga Jungle und spirituelle Figur des Genres'],
        ['Goldie', 'Veröffentlichte „Inner City Life“ und brachte Jungle zu einem weltweiten Publikum'],
        ['Fabio & Grooverider', 'Legendäres Duo, das die frühe Club- und Radioszene des Jungle prägte'],
        ['Roni Size', 'Gewann den Mercury Prize mit New Forms und verband Livemusik mit Jungle'],
        ['Dillinja', 'Bekannt für erderschütternde Basslines und dunkle Jungle-Klassiker'],
        ['Aphrodite', 'Der „Godfather des Jump-Up“: brachte Spaß und funkige Breaks'],
        ['Doc Scott', 'Erneuerer des dunklen Jungle und des frühen Drum and Bass; Stammgast bei Metalheadz'],
        ['DJ Hype', 'Meister des Turntablism und Schöpfer von „Peace, Love & Unity“'],
        ['4hero', 'Frühe Erneuerer und Gründer von Reinforced Records. Verbanden Breakbeats mit Jazz, Soul und Techno.'],
        ['Photek', 'Von Präzision besessener Produzent, bekannt für minimalen, filmischen Jungle und frühe Hybride mit Drum and Bass.'],
        ['Source Direct', 'Dunkles, experimentelles Duo mit düsteren, atmosphärischen Tracks und messerscharfen Drums.'],
        ['Remarc', 'Meister der Amen-Edits; Legende des „Sound Murderer“'],
        ['DJ Rap', 'Wegbereitende DJ und Produzentin mit Crossover-Erfolg'],
        ['DJ Storm', 'Kern von Metalheadz, eine der führenden Frauen am DJ-Pult des Jungle'],
        ['DJ Randall', 'Bekannt für präzises Mixen und dunkle Jungle-Sets auf Kool FM'],
        ['DJ Zinc', 'Pionier des Jump-Up, machte das ikonische „Super Sharp Shooter“'],
        ['Krust', 'Experimenteller Produzent und Teil der Crew von Reprazent'],
        ['Andy C', 'Chef von RAM Records, produzierte „Valley of the Shadows“ mit 16'],
        ['M-Beat', 'Produzierte „Incredible“ mit General Levy, einen riesigen Jungle-Hit'],
        ['Leviticus (Jumpin Jack Frost)', 'Schöpfer von „Burial“, Mitgründer von V Recordings'],
        ['Adam F', 'Bekannt für „Circles“, einen melodischen, souligen Jungle-Klassiker'],
        ['Deep Blue', 'Machte den Rave-Standard mit Hubschrauber-Sample, „Helicopter Tune“'],
        ['Marcus Intalex', 'Führte Jungle in einen tiefen, flüssigen Drum and Bass über'],
        ['Stevie Hyper D', 'Der ikonischste Jungle-MC, bekannt für seinen blitzschnellen Flow'],
        ['MC UK Apachi', 'Stimme auf „Original Nuttah“, legendäre Ragga-Flows'],
        ['General Levy', 'Die Stimme von „Incredible“; sein „Junglist massive!“ ist ikonisch']
      ]
    },
    'modern-artists': {
      headers: ['Künstler / DJ / Produzent', 'Warum wichtig'], label: 'Heutige Jungle-Künstler, Tabelle',
      rows: [
        ['Tim Reaper', 'Führt das Jungle-Revival der 2020er mit Tracks im Retro-Stil an'],
        ['Sully', 'Atmosphärischer, melodischer Produzent des heutigen Jungle'],
        ['Coco Bryce', 'Verbindet Skate-Kultur mit Ästhetik und Sound des Jungle'],
        ['FFF', 'Meister der Mischung aus Breakcore und Jungle aus den Niederlanden, aktiv seit den 2000ern'],
        ['Sherelle', 'DJ für Jungle und Footwork bei hohem Tempo, mit feurigen Festival-Sets'],
        ['Nia Archives', 'Sängerin und Produzentin, die Jungle zur Gen Z bringt; nominiert für MOBO und Mercury']
      ]
    }
  }
};

export default {
  lang: 'de',
  name: 'de-jungle',
  file: 'de/jungle.html',
  draft: 'de/jungle-draft.md',
  canonical: 'https://thecatrave.com/de/jungle',
  englishPath: '/jungle-music-guide',
  ogImage: 'https://thecatrave.com/img/og/jungle.jpg',
  bodyClass: 'article-page jungle-page',
  minReadingMinutes: 18,
  image: 'https://thecatrave.com/img/UK%20Rave%20flyers%20from%201991-1994.webp',

  title: 'Was ist Jungle-Musik? Geschichte, Sound und wichtige Tracks',
  description: 'Was ist Jungle? Ursprünge im Großbritannien der frühen Neunziger, Wurzeln im Soundsystem, die Breakbeats, Künstler, wichtige Tracks und das heutige Revival.',
  datePublished: '2026-09-23',
  dateModified: '2026-09-23',
  dateLabel: '23. September 2026',

  heroKicker: 'Jungle-Guide',
  heroTitle: 'Was ist Jungle-Musik? Ein Guide zu Geschichte, Sound und Kultur.',
  deck: 'Piratenradio, Dubplates, MCs, Labels und die Schwarze britische Rave-Kultur hinter einem der einflussreichsten elektronischen Sounds Großbritanniens.',
  answerLabel: 'Jungle-Musik, Definition',
  breadcrumbName: 'Jungle-Musik',

  answerSection: 'Antwort',
  introSection: 'Einleitung',
  introTitle: 'Was ist Jungle-Musik? Definition, Sound und BPM.',
  faqSection: 'FAQ',
  faqLabel: 'Häufige Fragen zu Jungle',
  faqTitle: 'Häufige Fragen zu Jungle.',

  sections: [
    {id: 'origins', heading: 'Woher Jungle kommt', tocLabel: 'Wo und wann Jungle begann', title: 'Woher Jungle kommt: wo und wann er begann.'},
    {id: 'name', heading: 'Warum heißt es Jungle-Musik?', title: 'Warum heißt es Jungle-Musik?'},
    {id: 'underground-emergence', heading: '1991 bis 1993: der Aufstieg im Underground', tocLabel: '1991 bis 1993: Underground', title: '1991 bis 1993: der Aufstieg im Underground.'},
    {id: 'jungle-mania', heading: '1994 bis 1995: Jungle erreicht den Mainstream', tocLabel: '1994 bis 1995: der Mainstream', title: '1994 bis 1995: Jungle erreicht den Mainstream.', subsections: ['subgenres']},
    {id: 'pioneers', heading: 'Jungle-Künstler, Produzenten und Pioniere', tocLabel: 'Künstler, Produzenten und Pioniere', title: 'Jungle-Künstler, Produzenten und Pioniere.'},
    {id: 'labels', heading: 'Jungle-Labels und die Infrastruktur der Szene', tocLabel: 'Labels und Infrastruktur der Szene', title: 'Jungle-Labels und die Infrastruktur der Szene.'},
    {id: 'pirate-radio', heading: 'Piratenradio und Dubplate-Kultur', title: 'Piratenradio und Dubplate-Kultur.'},
    {id: 'culture', heading: 'Slang, Stil und Rituale: die Jungle-Subkultur', tocLabel: 'Jungle-Kultur und Subgenres', title: 'Slang, Stil und Rituale: die Jungle-Subkultur.'},
    {id: 'essential-tracks', heading: 'Die wichtigsten Jungle-Songs und Tracks', title: 'Die wichtigsten Jungle-Songs und Tracks.'},
    {id: 'breakbeats', heading: 'Die Breakbeats des Jungle: Amen, Think, Apache und Hot Pants', tocLabel: 'Amen, Think, Apache und Hot Pants', title: 'Die Breakbeats des Jungle: Amen, Think, Apache und Hot Pants.'},
    {id: 'myths', heading: 'Jungle und Drum and Bass: Was ist der Unterschied?', tocLabel: 'Jungle und Drum and Bass', title: 'Jungle und Drum and Bass: Was ist der Unterschied?', subsections: ['cultural-rift', 'general-levy', 'urban-legends']},
    {id: 'revival', heading: 'Gibt es Jungle noch? Das heutige Revival', tocLabel: 'Das heutige Jungle-Revival', title: 'Gibt es Jungle noch? Das heutige Revival.', subsections: ['new-generation', 'uk-2020s', 'raves-labels', 'global', 'roots']},
    {id: 'conclusion', heading: 'Fazit', title: 'Fazit.'},
    {id: 'foundation-builders', heading: 'Jungle-Künstler, DJs und MCs: die Grundsteinleger', tocLabel: 'Grundsteinleger und Revivalisten', title: 'Jungle-Künstler, DJs und MCs: die Grundsteinleger.'},
    {id: 'modern-artists', heading: 'Heutige Jungle-Künstler und Revivalisten', title: 'Heutige Jungle-Künstler und Revivalisten.'},
    {id: 'acknowledgments', heading: 'Dank und Grüße', title: 'Dank und Grüße.'}
  ],

  media: ({lang}) => ({
    ...jungleMedia(lang, copy),
    ...Object.fromEntries(Object.entries(jungleImages).map(([key, image]) => {
      const [alt, caption] = copy.images[key];
      return [`Bild: ${key}`, articleFigure({...image, alt, caption: escapeHtml(caption)})];
    })),
    ...Object.fromEntries(Object.entries(copy.tables).map(([key, {headers, rows, label}]) => [`Tabelle: ${key}`, articleTable({
      headers: headers.map(escapeHtml), label,
      rows: rows.map(([name, note]) => [`<strong>${escapeHtml(name)}</strong>`, escapeHtml(note)])
    })]))
  }),

  // The English page's recommended resources, URL for URL, with translated labels.
  sources: [
    {href: 'https://en.wikipedia.org/wiki/Jungle_music', label: 'Wikipedia: Jungle music (englisch)'},
    {href: 'https://www.vice.com/en/article/jungles-still-massive-why-is-general-levys-incredible-so-popular-20-years-on', label: 'Vice: Warum ist „Incredible“ von General Levy nach 20 Jahren noch so beliebt?'},
    {href: 'https://blamuk.org/2022/01/07/jungle-music-gentrification/', label: 'BLAM UK CIC: Jungle-Musik und Gentrifizierung'},
    {href: 'https://djmag.com/longreads/how-dubplates-fuelled-rise-drum-bass-90s', label: 'DJ Mag: Wie Dubplates den Aufstieg des Drum & Bass in den Neunzigern antrieben'},
    {href: 'https://reggaeroast.co.uk/blogs/news/jungle-documentary-stevie-hyper-d', label: 'Reggae Roast: Stevie Hyper D und die Soundsystem-Wurzeln des Jungle'},
    {href: 'https://mixmag.net/feature/the-gentrification-of-jungle', label: 'Mixmag: Die Gentrifizierung des Jungle'},
    {href: 'https://www.theguardian.com/music/2021/jun/16/subwoofers-at-the-ready-the-jungle-and-drumnbass-revival-is-upon-us', label: 'The Guardian: Das Revival von Jungle und Drum’n’Bass ist da'},
    {href: 'https://www.loudandquiet.com/interview/nia-archives-jungle-is-a-real-culture-and-a-real-community', label: 'Loud And Quiet: Interview mit Nia Archives'},
    {href: 'https://www.clashmusic.com/features/seven-jungle-artists-carrying-the-torch-for-the-new-gen', label: 'Clash Magazine: Sieben Jungle-Künstler, die die Fackel an die neue Generation weitergeben'},
    {href: 'https://www.talkhouse.com/playing-telephone-with-history', label: 'Talkhouse: Stille Post mit der Geschichte'},
    {href: 'https://drumandbassuk.com/news/article/from-pirate-radio-to-podcasts-how-we-consume-drum-and-bass-2025', label: 'Drum & Bass UK: Vom Piratenradio zum Podcast'},
    {href: 'https://djmag.com/features/10-essential-dubplates-uk-dance-music-culture-picked-djs-play-them', label: 'DJ Mag: 10 wichtige Dubplates der britischen Dance-Kultur'}
  ],

  bandcamp: {
    description: 'Mein Jungle-Remix von Lana Del Rey gehört direkt zu dem Sound, um den es in diesem Guide geht. Wer ihn kauft, unterstützt die Musik und das Schreiben direkt.',
    tracks: [
      {title: 'thecatrave, You So Ghetto (Lana Del Rey Jungle Remix)', id: '3379956979', url: 'https://thecatrave.bandcamp.com/track/you-so-ghetto-lana-del-rey-jungle-remix', linkText: 'You So Ghetto (Lana Del Rey Jungle Remix) von thecatrave'}
    ]
  }
};
