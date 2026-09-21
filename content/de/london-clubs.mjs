// German London clubs guide. Structure and facts from the English page
// (london-clubs-draft.md, london-clubs-research.md, build-london-clubs-article.mjs).
//
// German keywords, measured 2026-09-18 with keywords-explorer-matching-terms,
// country de (keywords/de-london-clubs.json): clubs london 500 a month, clubs
// in london 400, london clubs 350. The seed shares its German SERP with
// football (london fussball clubs 600, premier league clubs london 600); those
// are a collision, rejected in the map.
//
// One wording differs from the English on purpose: the English page counts
// the lists it read as three in one place and four in two others. The German
// says "all the lists this guide read" where the English says four, and the
// inconsistency is logged in defects.json against the English page.
//
// Like the English page, this guide carries no mixes of the owner's.
//
// The images are the English guide's, in img/london-clubs/, with translated
// captions; see home-articles.mjs for why a translation may reuse them.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, articleYoutubeEmbed, ownTrackListening
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption, className = 'wide-archive-image') => articleFigure({
  src: `img/london-clubs/${name}-${width}.webp`,
  srcset: `img/london-clubs/${name}-320.webp 320w, img/london-clubs/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className
});

const youtube = (id, label) => articleYoutubeEmbed({
  src: `https://www.youtube-nocookie.com/embed/${id}`,
  title: label
});

const sections = [
  {id: 'before-acid-house', heading: 'Vor Acid House: Soundsysteme, der Blitz und Heaven'},
  {id: 'acid-house', heading: '1988: Acid House findet seine Räume in London'},
  {id: 'jungle-rooms', heading: 'Rage, Labrynth und der Blue Note: wo Jungle seine Räume fand'},
  {id: 'big-rooms', heading: 'Ministry, The End und fabric: die großen Räume'},
  {id: 'garage-dubstep', heading: 'Sonntage, Scala und Plastic People: Garage und Dubstep'},
  {id: 'best-clubs-now', heading: 'Die besten Clubs in London heute'},
  {id: 'hear-london', heading: 'London hören, bevor man hingeht'}
].map(section => ({...section, title: `${section.heading}.`}));

export default {
  lang: 'de',
  name: 'de-london-clubs',
  file: 'de/clubs-london.html',
  draft: 'de/london-clubs-draft.md',
  canonical: 'https://thecatrave.com/de/clubs-london',
  englishPath: '/best-electronic-music-clubs-in-london',
  ogImage: 'https://thecatrave.com/img/og/london-clubs.jpg',
  bodyClass: 'article-page london-clubs-page',

  title: 'Clubs in London für elektronische Musik: Geschichte und heute',
  description: 'Die besten Clubs in London für elektronische Musik, von fabric und FOLD bis Phonox und The Cause, und die Räume hinter Acid House, Jungle, Garage und Dubstep.',
  datePublished: '2026-09-18',
  dateModified: '2026-09-18',
  dateLabel: '18. September 2026',

  heroKicker: 'Clubs in London',
  heroTitle: 'Die besten Clubs in London für elektronische Musik',
  deck: 'Vom Four Aces und dem Blitz bis zu Rage, dem Blue Note und fabric: die Londoner Clubs hinter Acid House, Jungle, Garage und Dubstep, und die, die heute ein Wochenende wert sind.',
  answerLabel: 'Die besten Clubs in London',
  breadcrumbName: 'Clubs in London',

  answerSection: 'Antwort',
  introSection: 'Einleitung',
  introTitle: 'Erst die Musik, dann das nächste Wochenende.',
  faqSection: 'FAQ',
  faqLabel: 'Häufige Fragen',
  faqTitle: 'Häufige Fragen zu Clubs in London.',

  sections,

  media: ({lang}) => ({
    // The owner's own music inside the text (owner, 2026-09-21: Berlin Race
    // 1909 on the German pages, Dégénération on the French, and art deco with
    // late summer cloud dance in the drum and bass guides).
    'thecatrave art-deco': ownTrackListening('art-deco', 'Der Sound, für den diese Räume gebaut wurden, neu gemacht: mein Jungle-Remix eines Songs von Lana Del Rey.', lang),
    'thecatrave degeneration': ownTrackListening('degeneration', 'Garage und Dubstep als Werkzeuge statt als Grenzen: mein Remix mit Breaks unter einer französischen Popstimme.', lang),
    'thecatrave protect-ya-breaks': ownTrackListening('protect-ya-breaks', 'Progressive Breaks bei 128 BPM, mit zerhackten Rap-Vocals und einem Wechsel ins Downtempo. Mein eigener Track.', lang),
    'Blitz site': figure('blitz-site', 900, 1200,
      'Das frühere Gebäude des Blitz Club in der Great Queen Street 4, Covent Garden, mit einer Plakette für Spandau Ballet neben der Tür',
      'Die Great Queen Street 4 im Jahr 2019. Der Dienstagabend im Blitz lief hier 1979 und 1980; die Plakette neben der Tür erinnert an den ersten Auftritt von Spandau Ballet. Foto: Spudgun67, CC BY-SA 4.0.',
      'portrait-image'),
    'Astoria': figure('astoria-2008', 1200, 803,
      'Die London Astoria an der Charing Cross Road unter Gerüsten im Oktober 2008',
      'Die Astoria im Oktober 2008, während Arbeiter sie für den Abriss vorbereiten. Trip lief hier ab 1988. Foto: Fallschirmjäger, CC BY-SA 3.0.'),
    'fabric front': figure('fabric', 1200, 810,
      'Die blaue Fassade und die Stahltüren von fabric an der Charterhouse Street, London',
      'fabric an der Charterhouse Street im Jahr 2020, in den alten Metropolitan Cold Stores gegenüber dem Smithfield Market. Foto: Lolita Montana, CC BY-SA 2.0.'),
    'Scala': figure('scala', 900, 1200,
      'Scala bei Nacht an der Pentonville Road, King\'s Cross, mit seinem roten Leuchtschriftzug',
      'Scala in King\'s Cross im August 2024. Bis 1993 ein Kino, seit 1999 ein Club und einer der Räume, die am stärksten mit UK Garage verbunden sind. Foto: No Swan So Fine, CC BY-SA 4.0.',
      'portrait-image'),
    'Metalheadz in The Lab': youtube('-Cd8DJnLdOQ',
      'Metalheadz in The Lab LDN: Lenzman und Jubei b2b Ulterior Motive, auf dem YouTube-Kanal von Mixmag'),
    'fabric special': youtube('WNEOE5uXiK8',
      'Terry Francis, Howie B und Keith Reilly, ein fabric special bei der Brighton Music Conference 2024, auf dem YouTube-Kanal von Beatport'),
    'London sets': articleVideoCollection({
      lang,
      description: 'Zwei Londoner Räume aus der Tabelle, gefilmt von Rinse FM: Oneman live aus dem Phonox in Brixton, Januar 2025, und Slimzee mit D Double E und Riko Dan in den Drumsheds, November 2024.',
      items: [
        {youtubeId: 'SbznUhiLGhg', genre: 'Rinse Live From Phonox', artist: 'Oneman', title: 'Live aus dem Phonox, Brixton'},
        {youtubeId: 'oh2-Q58QnBE', genre: 'Rinse Live From Drumsheds 2024', artist: 'Slimzee feat. D Double E & Riko Dan', title: 'Live aus den Drumsheds, Edmonton'}
      ].map(articleVideoCard)
    }),
    // As in the English generator: which of the three lists read in September
    // 2026 names each club. Revisit with it.
    'Tabelle: now': articleTable({
      headers: ['Club', 'Gegend', 'Musik und Charakter', 'Am besten für', 'Hinweis zum Einlass'],
      rows: [
        ['fabric', 'Farringdon', 'House, Techno, Bass und Drum and Bass in drei Räumen', 'Ein Londoner Wahrzeichen mit breitem Programm', 'Die konkrete Nacht buchen'],
        ['The Cause', 'Silvertown', 'Unabhängige elektronische Veranstaltungen in mehreren Räumen', 'Lange, gemeinschaftlich gedachte Partys', 'Ort und Zeiten je nach Veranstaltung'],
        ['FOLD', 'Canning Town', 'Techno und experimentelle Clubmusik; DJ-Pult auf Bodenhöhe', '24-Stunden-Veranstaltungen und ein konzentriertes Publikum', 'Vorverkauf empfohlen'],
        ['The Carpet Shop', 'Peckham', 'Intimes Programm im Keller', 'Kleinere Nächte im Süden Londons', 'Veranstalter und Listing prüfen'],
        ['Dalston Superstore', 'Dalston', 'Queere Bar und Club mit gemischtem elektronischem Programm', 'Eine gesellige Nacht mit DJs', 'Spät kann es eng werden'],
        ['Phonox', 'Brixton', 'House, Techno und Bass in einem Club mit einem Raum', 'Ein klares Programm in einem Raum', 'Nach Resident oder Veranstalter buchen'],
        ['MOT', 'South Bermondsey', 'Unabhängige Veranstaltungen in einer Lagerhalle', 'Line-ups aus dem Untergrund', 'Anfahrt und Details prüfen'],
        ['Drumsheds', 'Edmonton', 'Große elektronische Shows im ehemaligen IKEA', 'Produktion im Arena-Format', 'Nur mit Ticket; Anreise planen'],
        ['Ministry of Sound', 'Elephant and Castle', 'Programm mit Schwerpunkt House und ein eigens gebautes Soundsystem', 'Ein historischer großer Londoner Club', 'Nach Line-up wählen, nicht nur nach dem Namen'],
        ['Heaven', 'Charing Cross', 'Queere Clubnächte und Live-Shows', 'Ein zentraler, historischer Ort', 'Programm wechselt je nach Nacht'],
        ['Colour Factory', 'Hackney Wick', 'Unabhängiger Ort für Musik und Kunst mit mehreren Räumen', 'Gemischtes Programm im Osten Londons', 'Die konkrete Veranstaltung prüfen'],
        ['Ormside Projects', 'South Bermondsey', 'Kleiner unabhängiger Ort mit elektronischen Bookings aus dem Untergrund', 'Enge Nächte mit wenig Kapazität', 'Details kommen vom Veranstalter'],
        ['Night Tales', 'Hackney Central', 'Club und Terrasse mit Schwerpunkt House', 'Ein geselliger Ort für die späte Nacht', 'Programm wechselt je nach Nacht'],
        ['KOKO', 'Camden', 'Restauriertes Theater für Live-Musik und Clubveranstaltungen', 'Große Produktionen in einem historischen Raum', 'Programm mit Tickets'],
        ['XOYO', 'Shoreditch', 'Residencies mit House, Techno und Bass', 'DJ-Residencies mit Namen', 'Nach Line-up buchen'],
        ['Brixton Jamm', 'Brixton', 'Live-Musik, DJs und Außenbereich', 'Gemischte Nächte im Süden Londons', 'Raum und Format der Veranstaltung prüfen']
      ].map(row => row.map(escapeHtml)),
      label: 'Die besten Clubs in London heute'
    })
  }),

  sources: [
    {href: 'https://en.wikipedia.org/wiki/The_Four_Aces_Club', label: 'Wikipedia: The Four Aces Club'},
    {href: 'https://en.wikipedia.org/wiki/Blitz_Kids_(New_Romantics)', label: 'Wikipedia: Blitz Kids (New Romantics)'},
    {href: 'https://en.wikipedia.org/wiki/Heaven_(nightclub)', label: 'Wikipedia: Heaven (nightclub)'},
    {href: 'https://en.wikipedia.org/wiki/Shoom', label: 'Wikipedia: Shoom'},
    {href: 'https://en.wikipedia.org/wiki/Nicky_Holloway', label: 'Wikipedia: Nicky Holloway'},
    {href: 'https://en.wikipedia.org/wiki/London_Astoria', label: 'Wikipedia: London Astoria'},
    {href: 'https://en.wikipedia.org/wiki/Acid_house', label: 'Wikipedia: Acid house'},
    {href: 'https://en.wikipedia.org/wiki/Second_Summer_of_Love', label: 'Wikipedia: Second Summer of Love'},
    {href: 'https://en.wikipedia.org/wiki/Jungle_music', label: 'Wikipedia: Jungle music'},
    {href: 'https://en.wikipedia.org/wiki/Metalheadz', label: 'Wikipedia: Metalheadz'},
    {href: 'https://en.wikipedia.org/wiki/Ministry_of_Sound', label: 'Wikipedia: Ministry of Sound'},
    {href: 'https://en.wikipedia.org/wiki/The_End_(club)', label: 'Wikipedia: The End (club)'},
    {href: 'https://en.wikipedia.org/wiki/Trash_(nightclub)', label: 'Wikipedia: Trash (nightclub)'},
    {href: 'https://en.wikipedia.org/wiki/Fabric_(club)', label: 'Wikipedia: Fabric (club)'},
    {href: 'https://en.wikipedia.org/wiki/UK_garage', label: 'Wikipedia: UK garage'},
    {href: 'https://en.wikipedia.org/wiki/Scala_(club)', label: 'Wikipedia: Scala (club)'},
    {href: 'https://en.wikipedia.org/wiki/Dubstep', label: 'Wikipedia: Dubstep'},
    {href: 'https://en.wikipedia.org/wiki/Corsica_Studios', label: 'Wikipedia: Corsica Studios'},
    {href: 'https://en.wikipedia.org/wiki/Printworks_(London)', label: 'Wikipedia: Printworks (London)'},
    {href: 'https://en.wikipedia.org/wiki/Fold_(nightclub)', label: 'Wikipedia: Fold (nightclub)'},
    {href: 'https://en.wikipedia.org/wiki/The_Cause_(London)', label: 'Wikipedia: The Cause (London)'},
    {href: 'https://en.wikipedia.org/wiki/Drumsheds', label: 'Wikipedia: Drumsheds'},
    {href: 'https://www.icmp.ac.uk/blog/a-history-london-nightclubs', label: 'ICMP: A History of London Nightclubs'},
    {href: 'https://ra.co/guides/clubs-in-london', label: 'Resident Advisor: Best Clubs in London, 2026'},
    {href: 'https://www.timeout.com/london/clubs/the-best-clubs-in-london', label: 'Time Out: The best clubs in London, aktualisiert im Juli 2026'},
    {href: 'https://www.cntraveller.com/article/best-clubs-in-london', label: 'Condé Nast Traveller: The best clubs in London'}
  ],

  bandcamp: {
    description: 'Zwei meiner eigenen Tracks: ein Jungle-Remix und ein Breakbeat-Track, die beiden Musiken, denen diese Seite vom Rage bis zum Blue Note folgt. Wer einen kauft, unterstützt meine Arbeit direkt.',
    tracks: [
      {title: 'You So Ghetto (Lana del Rey Jungle Remix)', id: '3379956979', url: 'https://thecatrave.bandcamp.com/track/you-so-ghetto-lana-del-rey-jungle-remix', linkText: 'You So Ghetto (Lana del Rey Jungle Remix) von thecatrave'},
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks von thecatrave'}
    ]
  }
};
