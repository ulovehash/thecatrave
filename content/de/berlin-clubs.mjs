// German Berlin clubs guide. Structure and facts from the English page
// (berlin-clubs-draft.md, berlin-clubs-research.md, build-berlin-clubs-article.mjs).
//
// German keywords, measured 2026-09-18 with keywords-explorer-matching-terms,
// country de (keywords/de-berlin-clubs.json): clubs berlin 5,500 a month,
// berlin clubs 2,800, clubs in berlin 1,300, techno clubs berlin 800, die
// besten clubs in berlin 90, bekannte clubs berlin 80; and from the berghain
// pull, berghain türsteher 3,100, which the English section on the door
// already answers.
//
// Only what the English guide covers is translated. The practical German
// searches it does not answer stay rejected in the map with a reason: what is
// on tonight (clubs berlin heute 350), the Berghain outfit (1,900), pictures
// from inside (berghain von innen 3,000; the club allows none), and the gay,
// sex, swinger, jazz and comedy club listings.
//
// Like the English page, this guide carries no mixes of the owner's.
//
// The images are the English guide's, in img/berlin-clubs/, with translated
// captions; see home-articles.mjs for why a translation may reuse them.
import {
  articleFigure, articleListeningBand, articleTable, articleYoutubeEmbed, ownTrackListening, ownSetListening
} from '../../site-components.mjs';
import {t} from '../../i18n.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/berlin-clubs/${name}-${width}.webp`,
  srcset: `img/berlin-clubs/${name}-320.webp 320w, img/berlin-clubs/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

const youtube = (id, label) => articleYoutubeEmbed({
  src: `https://www.youtube-nocookie.com/embed/${id}`,
  title: label
});

export default {
  lang: 'de',
  name: 'de-berlin-clubs',
  file: 'de/clubs-berlin.html',
  draft: 'de/berlin-clubs-draft.md',
  canonical: 'https://thecatrave.com/de/clubs-berlin',
  englishPath: '/best-clubs-in-berlin',
  ogImage: 'https://thecatrave.com/img/og/berlin-clubs.jpg',
  bodyClass: 'article-page berlin-clubs-page',

  title: 'Die besten Clubs in Berlin: Legenden und die, die noch offen sind',
  description: 'Berghain, Tresor, KitKat und die Clubs davor: die besten Clubs in Berlin, wie jeder berühmt wurde, und die Sets, die man hören sollte, bevor man hingeht.',
  datePublished: '2026-09-18',
  dateModified: '2026-09-18',
  dateLabel: '18. September 2026',

  heroKicker: 'Clubs in Berlin',
  heroTitle: 'Die besten Clubs in Berlin und die Legenden dahinter',
  deck: 'Vom UFO und dem Tresor bis zum Berghain und dem Sisyphos: die Räume, die Berlin zur Techno-Stadt gemacht haben, die berühmten Clubs, die geschlossen haben, und die, die noch offen sind.',
  answerLabel: 'Die besten Clubs in Berlin',
  breadcrumbName: 'Die besten Clubs in Berlin',

  answerSection: 'Antwort',
  introSection: 'Einleitung',
  introTitle: 'Erst die Legenden, dann das nächste Wochenende.',
  faqSection: 'FAQ',
  faqLabel: 'Häufige Fragen',
  faqTitle: 'Häufige Fragen zu Clubs in Berlin.',

  sections: [
    {id: 'before-berghain', heading: 'Vor dem Berghain: wie Berlin zur Techno-Stadt wurde', title: 'Vor dem Berghain: wie Berlin zur Techno-Stadt wurde.'},
    {id: 'berghain', heading: 'Berghain und Panorama Bar', title: 'Berghain und Panorama Bar.', subsections: ['the-door']},
    {id: 'closed-legends', heading: 'Die Legenden, die geschlossen haben', title: 'Die Legenden, die geschlossen haben.'},
    {id: 'best-clubs-now', heading: 'Die besten Clubs in Berlin heute', title: 'Die besten Clubs in Berlin heute.', subsections: ['sisyphos']},
    {id: 'how-berlin-clubs-work', heading: 'Wie Clubs in Berlin funktionieren: Dresscode, Handys, das Wochenende', title: 'Wie Clubs in Berlin funktionieren: Dresscode, Handys, das Wochenende.'},
    {id: 'hear-berlin', heading: 'Berlin hören, bevor man hingeht', title: 'Berlin hören, bevor man hingeht.'}
  ],

  media: ({lang}) => ({
    // The owner's own music inside the text (owner, 2026-09-21: Berlin Race
    // 1909 on the German pages, Dégénération on the French, and art deco with
    // late summer cloud dance in the drum and bass guides).
    'thecatrave berlin-race-1909': ownTrackListening('berlin-race-1909', 'Breakbeat-Drums unter der Weite des Dub-Techno. Mein eigener Track, benannt nach dieser Stadt.', lang),
    'thecatrave mix I Lost So Many Weekends': ownSetListening(1, lang, 'Breaks und Techno für die Stunden, bevor man sich an der Tür anstellt. Mein eigener Mix.'),
    'Tresor 2003': figure('tresor-2003', 1200, 900,
      'Der Eingang des ursprünglichen Tresor an der Leipziger Straße in Berlin, 2003',
      'Das erste Zuhause des Tresor, an der Leipziger Straße, im September 2003. Zwei Jahre später schloss der Club hier. Foto: MichaelBrossmann, gemeinfrei.'),
    'Tresor door': figure('tresor-door', 1200, 900,
      'Eine Tür aus dem Tresor, ausgestellt in der Ausstellung Berlin Global im Humboldt Forum',
      'Eine Tür aus dem ursprünglichen Tresor, heute Teil der Ausstellung Berlin Global im Humboldt Forum. Foto: Fridolin freudenfett, CC BY-SA 4.0.'),
    'Berghain entrance': figure('berghain', 1200, 800,
      'Der Eingang des Berghain im ehemaligen Heizkraftwerk Friedrichshain, Berlin',
      'Der Eingang des Berghain im Jahr 2017. Weiter reichen Fotos nicht. Foto: Michael Mayer, CC BY 2.0.'),
    'Bar 25': figure('bar25', 1200, 900,
      'Die Bar 25 am Ufer der Spree in Berlin, August 2009',
      'Die Bar 25 an der Spree im August 2009, ein Jahr vor ihrer Schließung. Foto: Cornelius Bartke, CC BY-SA 2.0.'),
    'Watergate': figure('watergate', 1200, 800,
      'Der Club Watergate von der Spree aus gesehen, Berlin',
      'Das Watergate von der Spree aus, 2013. Ende 2024 schloss es. Foto: Alexander, CC BY-SA 2.0.'),
    'Sisyphos': figure('sisyphos', 1200, 800,
      'Der Club Sisyphos an der Hauptstraße in Berlin-Rummelsburg',
      'Das Sisyphos an der Hauptstraße in Rummelsburg im Jahr 2022, auf dem alten Fabrikgelände, in das die Party hineinwuchs. Foto: Rio65trio, CC BY-SA 4.0.'),
    'Der Klang der Familie': articleListeningBand({
      platform: 'soundcloud',
      id: 'klang-der-familie',
      kicker: t(lang).essentialListening,
      title: '3 Phase featuring Dr. Motte, Der Klang der Familie: die Originalveröffentlichung.',
      description: 'Die sechste Veröffentlichung von Tresor Records und der Titel der Oral History des Berliner Techno. Beide Seiten der Maxi, Der Klang der Familie und Open Your Mind, remastert, auf dem eigenen SoundCloud von Dr. Motte.',
      src: `https://w.soundcloud.com/player/?url=${encodeURIComponent('https://soundcloud.com/dr-motte/sets/3phase-feat-dr-motte-der-klang')}&color=%23ff5a36&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false`,
      iframeTitle: 'Der Klang der Familie und Open Your Mind von 3 Phase featuring Dr. Motte, auf dem SoundCloud von Dr. Motte',
      fullBleed: true,
      tone: 'cyan'
    }),
    'Teenage Mutants live from Sisyphos': youtube('zjfPd4jNZao',
      'Teenage Mutants live aus dem Sisyphos, Berlin, Drumcode Radio Live DCR829, auf dem YouTube-Kanal von Drumcode'),
    'Ellen Allien HÖR': youtube('GG2IQguY-J0',
      'Ellen Allien, TTT x HÖR, auf dem YouTube-Kanal von HÖR Berlin'),
    // Status as in the English generator (RA's 2026 guide, Time Out and the
    // clubs' Wikipedia articles, checked 2026-09-10). Revisit with it.
    'Tabelle: now': articleTable({
      headers: ['Club', 'Bezirk', 'Musik und Charakter', 'Am besten für', 'Einlass'],
      rows: [
        ['Tresor', 'Mitte', 'Detroit- und Berlin-Techno in einem ehemaligen Kraftwerk', 'Geschichte und harten Techno', 'Ticket oder Abendkasse, je nach Veranstaltung'],
        ['Berghain / Panorama Bar', 'Friedrichshain', 'Unten Techno, oben House; keine Fotos', 'Ein langes Wochenende und eine klare Musikpolitik', 'Türauswahl; Vorverkauf nur für manche Veranstaltungen'],
        ['KitKatClub', 'Mitte', 'Techno mit Fetisch-, Latex-, Leder- und Glamour-Codes', 'Sexpositive Themennächte', 'Strenger Dresscode je nach Veranstaltung'],
        ['Kater', 'Friedrichshain', 'House und Techno mit dem verspielten Charakter der Bar-25-Familie', 'Marathonpartys an der Spree', 'Abendkasse; Programm wechselt'],
        ['Sisyphos', 'Rummelsburg', 'Fünf Floors und Außengelände in einer ehemaligen Fabrik', 'Ein ganzes Wochenende statt eines Raums', 'Türauswahl; lange Wochenendzeiten'],
        ['Club der Visionaere', 'Alt-Treptow', 'Minimal und intime Sessions am Kanal', 'Kleineres Clubbing im Sommer', 'Abhängig von Veranstaltung und Kapazität'],
        ['OST', 'Friedrichshain', 'Elektronisches Programm in mehreren Räumen eines Industriegebäudes', 'Größere Nächte im Lagerhallenformat', 'Meist Ticket oder Abendkasse'],
        ['Wilde Renate', 'Friedrichshain', 'House, Techno und Themenräume in einem ehemaligen Wohnhaus', 'Mehrere Räume erkunden', 'Türauswahl; aktuelle Veranstaltung prüfen']
      ].map(row => row.map(escapeHtml)),
      label: 'Die besten Clubs in Berlin heute'
    })
  }),

  sources: [
    {href: 'https://en.wikipedia.org/wiki/Tresor_(club)', label: 'Wikipedia: Tresor (club)'},
    {href: 'https://en.wikipedia.org/wiki/Tresor_Records', label: 'Wikipedia: Tresor Records'},
    {href: 'https://www.vice.com/en/article/der-klang-der-familie-the-sound-of-the-family-felix-denk-interview-berlin-techno-berlin-wall-tresor-ufo/', label: 'VICE: Interview mit Felix Denk über Der Klang der Familie, 2014'},
    {href: 'https://en.wikipedia.org/wiki/Berghain', label: 'Wikipedia: Berghain'},
    {href: 'https://de.wikipedia.org/wiki/E-Werk_(Berlin)', label: 'Wikipedia: E-Werk (Berlin)'},
    {href: 'https://en.wikipedia.org/wiki/Bar_25', label: 'Wikipedia: Bar 25'},
    {href: 'https://de.wikipedia.org/wiki/Kater_Blau', label: 'Wikipedia: Kater Blau'},
    {href: 'https://de.wikipedia.org/wiki/Watergate_(Club)', label: 'Wikipedia: Watergate (Club)'},
    {href: 'https://de.wikipedia.org/wiki/Salon_zur_Wilden_Renate', label: 'Wikipedia: Salon zur Wilden Renate'},
    {href: 'https://en.wikipedia.org/wiki/KitKatClub', label: 'Wikipedia: KitKatClub'},
    {href: 'https://de.wikipedia.org/wiki/Sisyphos_(Berlin)', label: 'Wikipedia: Sisyphos (Berlin)'},
    {href: 'https://www.tagesspiegel.de/berlin/streifzug-durch-die-clubs-von-berlin-jetzt-steigt-die-party-in-lichtenberg/10119176.html', label: 'Tagesspiegel: Jetzt steigt die Party in Lichtenberg, 2014'},
    {href: 'https://www.fazemag.de/sisyphos-ist-vorerst-zu/', label: 'FAZE Mag: Sisyphos ist vorerst zu, 2014'},
    {href: 'https://ra.co/guides/clubs-in-berlin', label: 'Resident Advisor: Best Clubs in Berlin, 2026'},
    {href: 'https://www.bbc.com/travel/article/20240322-berlin-techno-scene-gains-unesco-status', label: 'BBC Travel: How Berlin\'s techno scene transformed the city and gained UNESCO status, 2024'},
    {href: 'https://hoer.live/imprint/', label: 'HÖR: Impressum'}
  ],

  bandcamp: {
    description: 'Zwei meiner eigenen Tracks, einer davon mit Berlin im Titel. Wer einen kauft, unterstützt meine Arbeit direkt.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 von thecatrave'},
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks von thecatrave'}
    ]
  }
};
