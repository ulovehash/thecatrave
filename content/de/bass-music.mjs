// German bass music guide. Structure and facts from the English page
// (bass-music-draft.md, build-bass-music-article.mjs), as the English page
// renders them: the English generator leaves out a few draft paragraphs (the
// lead of the "different scenes" section, the note after the footwork
// paragraphs, the draft's editorial notes) and writes three paragraphs of its
// own (footwork and gqom together, the records intro, the playlist line); the
// translation follows the page, not the draft.
//
// German keywords (keywords/de-bass-music.json): bass music 100 a month in
// Germany (TRANSLATION-RESEARCH.md, stage 1). The wording was checked in the
// Bing de-DE results on 2026-09-23 (Google answered with a bot check), no
// Ahrefs units spent: German readers write "Bass Music" as a loanword, and
// "was ist bass music" returns the English Wikipedia article among pages on
// the instrument. The "Lieder mit Bass" and download searches in the same
// results are other intents and are rejected (WRITING.md).
//
// Images as on the English page, at the owner's decision on 2026-09-23 ("with
// images as is"), although they are hotlinked from rights-reserved sources;
// logged open in defects.json (bass-music-guide-hotlinked-images). The players,
// route cards and the owner's music are built in content/bass-music-media.mjs;
// the figures and tables here, from its bassMusicImages.
import {articleFigure, articleTable} from '../../site-components.mjs';
import {bassMusicImages, bassMusicMedia} from '../bass-music-media.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const copy = {
  onYoutube: 'auf YouTube',
  onSpotify: 'auf Spotify',
  byThecatraveOnSoundcloud: 'von thecatrave auf SoundCloud',
  listenWhileYouRead: 'Beim Lesen hören',
  globalVisual: {
    alt: 'Visueller Überblick über die Geschichten der Bass Music in Kingston, Miami, Großbritannien, Los Angeles, Chicago und Durban',
    caption: 'Ein Begriff verbindet mehrere lokale Geschichten. Er ersetzt ihre Namen nicht.'
  },
  figures: {
    kingTubby: {alt: 'Das MCI-Mischpult, das King Tubby gehörte und von ihm bedient wurde', caption: 'Das Studiomischpult von King Tubby steht für Dub als Praxis, aufgenommene Musik neu zu bauen.'},
    miami: {alt: 'Die mobilen DJs Loc Ace und Vic aus Miami mit einer großen Lautsprecheranlage', caption: 'Miami Bass entstand über mobile DJs, Partys für Jugendliche, Autos und Lautsprecheranlagen, nicht als amerikanischer Nachtrag zum Dubstep.'},
    nightSlugs: {alt: 'Cover einer EP von Night Slugs', caption: 'Night Slugs wurde zu einem nützlichen Wegzeichen für das Aufeinanderprallen der Sprachen von Grime, Garage, House, Funky und Dubstep Ende der 2000er.'},
    footwork: {alt: 'Footwork-Tänzer in Chicago', caption: 'Footwork aus Chicago wuchs über Tanzcrews und Battles, bevor internationale Labels sein Publikum erweiterten.'},
    gqom: {alt: 'Distruction Boyz, Produzenten, die mit dem Gqom aus Durban verbunden sind', caption: 'Die lokale Geschichte des Gqom gehört den Partys, Taxis und digitalen Netzwerken von Durban, auch wenn internationale Programme ihn neben Bass Music stellen.'}
  },
  bands: {
    throwTheD: 'Die ausgehaltene 808, das Tempo, die Sprechchöre und die Tanzanweisungen verorten die Platte fest im Hip-Hop aus Miami.',
    weAreIE: 'Eine Schwellenplatte, in der sich Breakbeat Hardcore, Soundsystem-Bass und die rhythmische Sprache des Jungle treffen.',
    zodiacShit: 'Die Beat-Kultur von Low End Theory in Los Angeles, gehört über komprimierten Hip-Hop-Rhythmus, psychedelische Details und instabile Tiefen.',
    babyComeOn: 'Eine grundlegende Footwork-Platte aus Chicago, für Tänzer gebaut, mit abgehackten Hip-Hop-Samples und synkopierten Drums.',
    iceDrop: 'Eine karge Gqom-Platte aus Durban, deren schwerer, asymmetrischer Druck die Szene deutlich anders klingen lässt als die britischen und amerikanischen Bass-Kategorien.'
  },
  collections: {
    northAmerica: 'Zwei Platten, die zeigen, wie nordamerikanische Bass Music ihren Maßstab veränderte und in die Festivalkultur überging.',
    british: 'Sechs Platten machen die Unterschiede innerhalb des britischen Kontinuums hörbar. Sie teilen eine Infrastruktur, aber keinen gemeinsamen Rhythmus und kein gemeinsames Genre.',
    contemporary: 'Acht Platten machen die wichtigsten nordamerikanischen Etiketten der 2010er hörbar. Sie überschneiden sich in Publikum und Infrastruktur, aber ihr Rhythmus, ihr emotionales Register und ihr Umgang mit Sounddesign sind nicht austauschbar.'
  },
  genres: {
    northAmerica: ['AMERIKANISCHER DUBSTEP', 'ELEKTRONISCHER TRAP'],
    british: ['JUNGLE', 'DRUM AND BASS', 'UK GARAGE', 'GRIME', 'BASSLINE', 'UK FUNKY'],
    contemporary: ['BASS HOUSE', 'FUTURE BASS', 'RIDDIM', 'GLITCH-HOP / LA BASS', 'MELODIC BASS', 'MIDTEMPO', 'EXPERIMENTELLER BASS', 'FREEFORM BASS']
  },
  lookTrack: 'Future Bass, Glitch und Breakbeat bei 140 BPM, einer der Hybride auf dieser Karte. Mein eigener Track.',
  mixes: {
    weekends: {
      title: 'I Lost So Many Weekends Raving and I Wanna Lose Some More.',
      description: 'Ein heutiges Beispiel für das DJ-Set als Infrastruktur: Breaks, Bass, Clubmusik und Techno, verbunden über die Abfolge, statt zu einem Genre plattgedrückt.'
    },
    silence: {
      title: 'I Like to Smoke in Silence After Raves.',
      description: 'Ich habe etwa vier Monate gebraucht, um diese 30 Tracks zu einem Bogen zu ordnen. Das Set behandelt Breaks, Bass, den Druck des Garage und experimentelle Clubmusik als Material für ein Set, ohne so zu tun, als seien sie ein Genre.'
    }
  },
  tables: {
    scenes: {
      key: 'Tabelle: Szenen',
      headers: ['Szene', 'Historisches Umfeld', 'Ausgangspunkte'],
      rows: [
        ['Dub und Soundsystems', 'Kingston, Großbritannien', 'King Tubby, Scientist, Jah Shaka, Adrian Sherwood'],
        ['Jungle, D&B, Garage, Grime, Dubstep', 'Britisches Piratenradio und Clubnetzwerke', 'Goldie, Wiley, Digital Mystikz, Burial, Cooly G'],
        ['Miami Bass und die amerikanische Kultur der Tiefen', 'Partys, Autos und Rap in Südflorida', 'Pretty Tony, Maggotron, 2 Live Crew, Dynamix II'],
        ['Footwork und Gqom', 'Tanz-Battles in Chicago; Partys und Taxis in Durban', 'RP Boo, DJ Rashad, DJ Lag, Rudeboyz'],
        ['Bass House, Future Bass und Hybride', 'Online- und Festivalnetzwerke', 'Den lokalen Genrenamen benutzen, wann immer er bekannt ist']
      ]
    },
    records: {
      key: 'Tabelle: Platten',
      headers: ['Platte', 'Warum sie zählt'],
      rows: [
        ['Augustus Pablo und King Tubby, King Tubby Meets Rockers Uptown', 'Dub als Arrangement, Version und Raum in den Tiefen.'],
        ['2 Live Crew, Throw the D', 'Ein früher Maßstab des Miami Bass, gebaut um ausgehaltenen 808-Druck und Tanzanweisungen.'],
        ['LFO, LFO', 'Bleep, Sub-Bass und ein nordbritischer Weg in den Rave.'],
        ['Lennie De Ice, We Are I.E.', 'Eine Schwellenplatte für den Jungle, wie er aus dem Hardcore entstand.'],
        ['Wiley, Eskimo', 'Minimalismus des Grime und Raum des Piratenradios.'],
        ['Digital Mystikz, Anti War Dub', 'Dubstep als Soundsystem-Ritual.'],
        ['Joy Orbison, Hyph Mngo', 'Garage, Dubstep und House werden schwer zu trennen.'],
        ['Addison Groove, Footcrab', 'Austausch zwischen Großbritannien und Chicago über Swamp81.'],
        ['Skrillex, Scary Monsters and Nice Sprites', 'Ein nordamerikanischer Wandel in Maßstab und Klangfarbe.'],
        ['TNGHT, Higher Ground', 'Rhythmus des Southern Rap trifft auf Festivalelektronik.'],
        ['DJ Rashad, Let U No', 'Footwork trägt emotionales Gewicht jenseits des Neuheitsrhythmus.'],
        ['DJ Lag, Ice Drop', 'Gqom reist international, ohne seine Identität aus Durban zu verlieren.']
      ]
    }
  },
  routes: [
    ['Systeme und Grundlagen', 'Beginne mit King Tubby und Augustus Pablo, Linton Kwesi Johnson und frühem Miami Bass. Es geht nicht darum, eine einzige Anfangsplatte zu finden. Es geht darum zu hören, wie verschiedene Gemeinschaften die Tiefen ins Zentrum stellten, bevor es den späteren Sammelbegriff gab.'],
    ['Das britische Bass-Kontinuum', 'Geh von Bleep und Jungle zu UK Garage, Grime, Dubstep und der hybriden Phase Ende der 2000er. Ein guter Weg sollte LFO, Lennie De Ice, DJ Zinc, Wiley, Digital Mystikz, Burial, Joy Orbison und Addison Groove enthalten, ohne zu unterstellen, dass jeder Übergang glatt verlief oder überall akzeptiert wurde.'],
    ['Amerikanische und grenzüberschreitende Bedeutungen', 'Verbinde Miami Bass, die Beat-Musik von Los Angeles, amerikanischen Dubstep, elektronischen Trap, Footwork und ausgewählte internationale Begegnungen. Bewahre die lokalen Genrenamen und nutze den Mix, um Kontakt zu zeigen, nicht Besitz.']
  ]
};

export default {
  lang: 'de',
  name: 'de-bass-music',
  file: 'de/bass-music.html',
  draft: 'de/bass-music-draft.md',
  canonical: 'https://thecatrave.com/de/bass-music',
  englishPath: '/bass-music-guide',
  ogImage: 'https://thecatrave.com/img/og/bass-music.jpg',
  image: 'https://thecatrave.com/img/bass-music/miami-bass-loc-ace-vic-1400.jpg',
  bodyClass: 'article-page bass-music-page',
  minReadingMinutes: 12,

  title: 'Was ist Bass Music? Geschichte, Genres und wichtige Tracks',
  description: 'Was Bass Music bedeutet und wie Soundsystem-Kultur, Miami Bass, britischer Rave, Los Angeles, Chicago und Durban ihre weltweite Geschichte prägten.',
  datePublished: '2026-09-23',
  dateModified: '2026-09-23',
  dateLabel: '23. September 2026',

  heroKicker: 'Guide zur Bass Music',
  heroTitle: 'Was ist Bass Music?',
  deck: 'Eine Geschichte entlang der Szenen, über Jamaika, Miami, Großbritannien, Los Angeles, Chicago, Durban und die hybride Clubkultur von heute.',
  answerLabel: 'Definition von Bass Music',
  breadcrumbName: 'Bass Music',

  answerSection: 'Definition',
  introSection: 'Einleitung',
  introTitle: 'Bass Music ist nicht ein einziger Sound.',
  faqSection: 'FAQ',
  faqLabel: 'Häufige Fragen zur Bass Music',
  faqTitle: 'Häufige Fragen zur Bass Music.',

  sections: [
    {id: 'origins', heading: 'Woher kommt Bass Music? Jamaika, Miami und britischer Rave', title: 'Woher kommt Bass Music?', kicker: 'Jamaika / Miami / Großbritannien', tocLabel: 'Woher Bass Music kommt', subsections: ['jamaica', 'miami', 'britain']},
    {id: 'umbrella', heading: 'Wie Bass Music zum Sammelbegriff wurde und sich verbreitete', title: 'Wie Bass Music zum Sammelbegriff wurde und sich verbreitete.', tocLabel: 'Wie der Sammelbegriff reiste'},
    {id: 'meanings', heading: 'Warum Bass Music in verschiedenen Szenen Verschiedenes bedeutet', title: 'Warum Bass Music in verschiedenen Szenen Verschiedenes bedeutet.', tocLabel: 'Warum sich der Begriff je nach Szene ändert', subsections: ['uk-bass', 'american-bass', 'footwork-gqom']},
    {id: 'types', heading: 'Arten von Bass Music: eine Hörkarte, Szene für Szene', title: 'Arten von Bass Music: eine Hörkarte, Szene für Szene.', tocLabel: 'Arten von Bass Music', subsections: ['dub-lineage', 'british-scenes', 'miami-trap', 'footwork-gqom-exchange', 'hybrids']},
    {id: 'infrastructure', heading: 'Wie Bass Music lebt: Soundsystems, Piratenradio, Clubs und Labels', title: 'Wie Bass Music lebt: Soundsystems, Piratenradio, Clubs und Labels.', tocLabel: 'Systeme, Radio, Clubs und Labels'},
    {id: 'records', heading: 'Künstler und Platten der Bass Music, die die Kultur veränderten', title: 'Künstler und Platten der Bass Music, die die Kultur veränderten.', tocLabel: 'Platten, die die Kultur veränderten'},
    {id: 'today', heading: 'Bass Music heute: hybride Sets und verwischte Genregrenzen', title: 'Bass Music heute: hybride Sets und verwischte Genregrenzen.', tocLabel: 'Bass Music heute'},
    {id: 'where-to-start', heading: 'Wo man mit Bass Music anfängt: Tracks, Playlists und Mixe', title: 'Wo man mit Bass Music anfängt: Tracks, Playlists und Mixe.', tocLabel: 'Wo man mit dem Hören anfängt'},
    {id: 'useful', heading: 'Ist Bass Music noch ein nützlicher Begriff?', title: 'Ist Bass Music noch ein nützlicher Begriff?', tocLabel: 'Ist der Begriff noch nützlich?'}
  ],

  media: ({lang}) => ({
    ...bassMusicMedia(lang, copy),
    ...Object.fromEntries(Object.entries(bassMusicImages).map(([name, [key, src, width, height, className]]) => [key,
      articleFigure({src, width, height, alt: copy.figures[name].alt, caption: escapeHtml(copy.figures[name].caption), className})])),
    [copy.tables.scenes.key]: articleTable({headers: copy.tables.scenes.headers, rows: copy.tables.scenes.rows.map(row => row.map(escapeHtml)), className: 'bass-scene-table'}),
    [copy.tables.records.key]: articleTable({headers: copy.tables.records.headers, rows: copy.tables.records.rows.map(row => row.map(escapeHtml)), className: 'bass-record-table'})
  }),

  // The English page's sources, URL for URL, with translated labels.
  sources: [
    {href: 'https://www.gold.ac.uk/cucr/research/bass-culture/', label: 'Goldsmiths: Bass Culture Research'},
    {href: 'https://mopop.emuseum.com/objects/95703/mci-mixing-console-formerly-owned-and-operated-by-king-tubby', label: 'MoPOP: das MCI-Mischpult von King Tubby'},
    {href: 'https://daily.redbullmusicacademy.com/2019/09/miami-bass-mobile-djs-regulating-oral-history/', label: 'Red Bull Music Academy: Oral History der mobilen DJs des Miami Bass'},
    {href: 'https://djmag.com/features/rise-fall-and-revival-uk-dubplate-culture', label: 'DJ Mag: die britische Dubplate-Kultur'},
    {href: 'https://www.laweekly.com/a-history-of-bass-music-in-los-angeles/', label: 'LA Weekly: A history of bass music in Los Angeles'},
    {href: 'https://www.npr.org/sections/therecord/2011/05/11/136209254/footwork-chicago-dance-music-with-a-need-for-speed', label: 'NPR: Footwork aus Chicago'},
    {href: 'https://ra.co/exchange/336', label: 'Resident Advisor Exchange: DJ Lag und Nan Kolè'},
    {href: 'https://www.afropop.org/articles/distruction-boyz', label: 'Afropop Worldwide: Distruction Boyz und Gqom'},
    {href: 'https://mixmag.net/feature/a-trip-through-the-u-s-west-coast-bass-scene', label: 'Mixmag: die Bass-Szene der US-Westküste'}
  ],

  bandcamp: {
    description: 'Diese Veröffentlichungen stehen der Geschichte von Breakbeat und Bass in diesem Artikel am nächsten. Wer eine davon kauft, unterstützt meine Arbeit direkt.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks von thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 von thecatrave'}
    ]
  }
};
