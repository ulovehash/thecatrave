// German Europe festivals comparison. Structure, facts, dates and the "not
// announced" labels from the English page (best-electronic-music-festivals-
// europe-draft.md, build-europe-festivals-article.mjs), checked there on
// 22 September 2026.
//
// German wording checked in the live google.de results on 2026-09-22, no
// Ahrefs units spent (keywords/de-europe-festivals.json): the German result
// set is article-shaped (TicketSwap, Snash, Dance-Charts, 1000things) and uses
// "Electro-Festivals", "Festivals für elektronische Musik in Europa" and
// "Techno-Festivals". "Welche sind die 10 größten Festivals in Europa?" is
// asked verbatim in the results and heads the third FAQ.
//
// Maintenance: the page carries the same 2027 dates as the English one and is
// registered in festival-editions.mjs under its own heading, so the yearly
// reminder prints for it too. Change the dates here and in the draft whenever
// the English page changes them.
//
// The English generator places each image and player by position. Here the
// draft places them with [Bild: ...], [Embed: ...] and [Tabelle: ...] lines at
// the same points. The images are the English page's, in img/europe-festivals/,
// with translated captions; see home-articles.mjs for why a translation may
// reuse them.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, ownSetListening
} from '../../site-components.mjs';

const figure = (name, height, alt, caption) => articleFigure({
  src: `img/europe-festivals/${name}-1200.webp`,
  srcset: `img/europe-festivals/${name}-320.webp 320w, img/europe-festivals/${name}-1200.webp 1200w`,
  width: 1200, height, alt, caption, className: 'wide-archive-image'
});

const video = (lang, label, description, item) => articleVideoCollection({
  lang, label, description, items: [articleVideoCard(item)]
});

const link = ([href, label]) => `<a href="${href}" target="_blank" rel="noopener noreferrer">${label}</a>`;

const headers = ['Festival', 'Wo', 'Termine 2027', 'Sound', 'Größe', 'Übernachtung', 'Am besten für'];

const festivals = [
  ['Tomorrowland', 'Boom, Belgien', 'Noch nicht bekannt gegeben (zuletzt Ende Juli)', 'Big-Room-EDM, House, Techno', 'Bis zu 200.000 pro Wochenende', 'Campingplatz DreamVille', 'Ein erstes großes Festival'],
  ['Untold', 'Cluj-Napoca, Rumänien', '5. bis 8. August', 'Big-Room-EDM, Techno', 'Über 500.000 Eintritte an vier Tagen (2026)', 'Stadt', 'Festival und Städtetrip'],
  ['Parookaville', 'Weeze, Deutschland', '16. bis 18. Juli', 'Festival-Mainstream-EDM', 'Etwa 75.000 pro Tag', 'Camping', 'Ein Themenwochenende'],
  ['Creamfields', 'Daresbury, England', '26. bis 29. August', 'House, Trance, Big Room', '80.000 (2026)', 'Camping', 'Ein britisches House- und Trance-Publikum'],
  ['Ultra Europe', 'Split, Kroatien', '9. bis 11. Juli', 'Big-Room-EDM', 'Hier nicht angegeben', 'Stadt', 'Strandurlaub mit Festival'],
  ['Mysteryland', 'Haarlemmermeer, Niederlande', '27. bis 29. August', 'Techno und House bis Hardstyle', 'Über 125.000 im Jahr (Angabe des Festivals)', 'Camping', 'Vielfalt bei Amsterdam'],
  ['Defqon.1', 'Biddinghuizen, Niederlande', '24. bis 27. Juni', 'Hardstyle, Hardcore', 'Etwa 268.000 Besucher (2025)', 'Camping', 'Hardstyle-Fans'],
  ['Awakenings', 'Hilvarenbeek, Niederlande', '9. bis 11. Juli', 'Techno', 'Hier nicht angegeben', 'Camping', 'Ein Techno-Wochenende'],
  ['Dekmantel', 'Amsterdam, Niederlande', 'Noch nicht bekannt gegeben (zuletzt Ende Juli bis Anfang August)', 'Techno, House, Electro, Disco, Experimentelles', 'Hier nicht angegeben', 'Stadt, Tagesfestival', 'DJs entdecken'],
  ['Time Warp', 'Mannheim, Deutschland', '3. April', 'Techno, House', 'Über 40.000', 'Eine Nacht in der Halle', 'Techno in einer einzigen Nacht'],
  ['Kappa FuturFestival', 'Turin, Italien', '2. bis 4. Juli', 'Techno, House', 'Hier nicht angegeben', 'Stadt, Mittag bis Mitternacht', 'Techno bei Tageslicht'],
  ['Sónar', 'Barcelona, Spanien', '17. bis 19. Juni', 'Elektronisch, experimentell, Live-Acts', 'Etwa 150.000 (2026)', 'Stadt', 'Ein abenteuerliches Programm'],
  ['Monegros Desert Festival', 'Fraga, Spanien', 'Noch nicht bekannt gegeben (Juli)', 'Viele elektronische Stile', 'Hier nicht angegeben', 'Eine Nacht, VIP-Zelte', 'Eine extreme Nacht'],
  ['Boomtown', 'Bei Winchester, England', '11. bis 15. August', 'Reggae und Dub bis Techno, Live-Bands', 'Genehmigt für über 75.000', 'Camping', 'Ein Festival als eigene Welt']
];

const smallerFestivals = [
  ['Garbicz', 'Bei Torzym, Polen', 'Noch nicht bekannt gegeben (2026: 30. Juli bis 3. August)', 'House, Techno, Ambient, Live-Acts', 'Etwa 11.000 (2026)', 'Camping', 'Lange Sets im Wald'],
  ['NACHTI', 'Olganitz, Deutschland', '30. Juli bis 1. August', 'Elektronische Clubmusik und Live-Acts', 'Etwa 3.000 (Nachtdigital-Jahre)', 'Bungalows und Camping', 'Ein kleines, sorgfältig gebuchtes Wochenende'],
  ['Houghton', 'Houghton Hall, Norfolk, England', 'Noch nicht bekannt gegeben (August)', 'House, Techno, Leftfield', 'Etwa 10.000', 'Camping', 'Musik rund um die Uhr'],
  ['Draaimolen', 'Tilburg, Niederlande', 'Noch nicht bekannt gegeben (Anfang September)', 'Techno, Ambient, Experimentelles', 'Hier nicht angegeben', 'Stadt, Tagesfestival', 'Techno ohne Massen'],
  ['Waking Life', 'Crato, Portugal', 'Mitte Juni (noch nicht auf der offiziellen Seite)', 'Elektronisch, experimentell, Weltmusik', 'Hier nicht angegeben', 'Camping und Tipis', 'Eine Sonnwendwoche auf dem Land'],
  ['Kala', 'Dhërmi, Albanien', '2. bis 9. Juni', 'Dance Music, DJs und Live-Acts', 'Hier nicht angegeben', 'Hotel inklusive', 'Eine Woche am Strand'],
  ['Freerotation', 'Clyro, Wales', 'Noch nicht bekannt gegeben (Juli)', 'Deep House, Techno', 'Hier nicht angegeben', 'Nur für Mitglieder', 'Wenn dich jemand einlädt']
];

export default {
  lang: 'de',
  name: 'de-europe-festivals',
  file: 'de/electro-festivals-europa.html',
  draft: 'de/electro-festivals-europa-draft.md',
  canonical: 'https://thecatrave.com/de/electro-festivals-europa',
  englishPath: '/best-electronic-music-festivals-europe',
  ogImage: 'https://thecatrave.com/img/og/europe-festivals.jpg',
  bodyClass: 'article-page europe-festivals-page',
  minReadingMinutes: 9,

  title: 'Die besten Electro-Festivals in Europa 2027 im Vergleich',
  description: 'Vierzehn große und sieben kleinere Festivals für elektronische Musik in Europa 2027, verglichen nach Sound, Größe, Umgebung und Terminen, bestätigt oder nicht.',
  datePublished: '2026-09-22',
  dateModified: '2026-09-22',
  dateLabel: '22. September 2026',

  heroKicker: 'Festival-Guide 2027',
  heroTitle: 'Die besten Festivals für elektronische Musik in Europa 2027',
  deck: 'Vierzehn große Festivals und sieben kleinere, verglichen danach, was sie spielen, wie groß sie sind, wo man schläft und wann sie stattfinden, mit den Terminen 2027, die bestätigt sind, und denen, die es noch nicht sind.',
  answerLabel: 'Die besten Electro-Festivals in Europa',
  breadcrumbName: 'Electro-Festivals in Europa',

  answerSection: 'Antwort',
  introSection: 'Einleitung',
  introTitle: 'Eine Liste zum Auswählen.',
  faqSection: 'FAQ',
  faqLabel: 'Häufige Fragen zu Festivals in Europa',
  faqTitle: 'Häufige Fragen zu Festivals für elektronische Musik in Europa.',

  sections: [
    {id: 'criteria', heading: 'Wie diese Liste entstand', title: 'Wie diese Liste entstand.'},
    {id: 'at-a-glance', heading: 'Termine 2027 im Überblick', title: 'Termine 2027 im Überblick.'},
    {id: 'big-stages', heading: 'Große Bühnen', title: 'Große Bühnen.', kicker: 'EDM und die Mainstage',
      subsections: ['tomorrowland', 'untold', 'parookaville', 'creamfields', 'ultra-europe', 'mysteryland']},
    {id: 'hard-dance', heading: 'Hard Dance', title: 'Hard Dance.', subsections: ['defqon-1']},
    {id: 'techno-house', heading: 'Techno und House', title: 'Techno und House.',
      subsections: ['awakenings', 'dekmantel', 'time-warp', 'kappa-futurfestival', 'sonar']},
    {id: 'desert-cities', heading: 'Wüste und Themenstädte', title: 'Wüste und Themenstädte.',
      subsections: ['monegros-desert-festival', 'boomtown']},
    {id: 'smaller', heading: 'Kleinere Festivals, die die Reise lohnen', title: 'Kleinere Festivals, die die Reise lohnen.', kicker: 'Underground und Boutique',
      subsections: ['garbicz', 'nachti', 'houghton', 'draaimolen', 'waking-life', 'kala', 'freerotation']},
    {id: 'not-listed', heading: 'Nicht auf der Liste, und warum', title: 'Nicht auf der Liste, und warum.'},
    {id: 'choose', heading: 'Wie man das richtige Festival findet', title: 'Wie man das richtige Festival findet.', tocLabel: 'Wie man wählt'}
  ],

  media: ({lang}) => ({
    'Tabelle: major': articleTable({label: 'Große Festivals in Europa im Vergleich, 2027', headers, rows: festivals}),
    'Tabelle: smaller': articleTable({label: 'Kleinere Festivals in Europa im Vergleich, 2027', headers, rows: smallerFestivals}),
    'defqon': figure('defqon1-red-stage-2022', 900,
      'Die rote Hauptbühne von Defqon.1 im Jahr 2022, eine Bühne mit Flügeln über einem großen Publikum bei Tag',
      'Die Red Stage bei Defqon.1 im Jahr 2022, die Hardstyle-Hauptbühne. Jede Bühne des Festivals ist nach einer Farbe benannt und einem Stil zugeordnet. Foto: Blyra92, CC BY-SA 4.0.'),
    'kappa': figure('kappa-futurfestival-2025', 900,
      'Publikum bei Tag unter dem Stahldach der Futur Stage beim Kappa FuturFestival im Parco Dora in Turin',
      'Die Futur Stage beim Kappa FuturFestival im Juli 2025, unter dem Stahlgerüst einer ehemaligen Industriehalle im Parco Dora in Turin. Foto: MadBob, CC BY 4.0.'),
    'monegros': figure('monegros-desert-2009', 900,
      'Dichtes Publikum in greller Sonne beim Monegros Desert Festival, dahinter ein Lautsprecherturm und Zelte',
      'Das Monegros Desert Festival um ein Uhr mittags im Jahr 2009. Das Festival läuft von Samstagnachmittag bis Sonntagmittag in der Wüste von Aragonien bei Fraga. Foto: BigSus, CC BY 2.5.'),
    'nachti': figure('nachtdigital-2014', 675,
      'Ein DJ legt in einem dunklen Raum unter blauem Licht und Leuchtstreifen bei Nachtdigital 2014 auf',
      'Nachtdigital im Bungalowdorf Olganitz im Jahr 2014, als das Festival noch diesen Namen trug. Foto: Robert Richter für Nachtdigital, CC BY 2.0.'),
    'garbicz-set': video(lang, 'Garbicz, von zu Hause gehört',
      'Das Sonnenaufgangsset von Ezio Aguiar bei Garbicz 2025, vom Künstler hochgeladen. Das Festival läuft die Nacht durch, und über die Morgensets reden die Leute.',
      {youtubeId: 'IhBa3o5YYME', genre: 'GARBICZ, 2025', artist: 'Ezio Aguiar', title: 'Sunrise set'}),
    'dekmantel-set': video(lang, 'Dekmantel, von zu Hause gehört',
      'Four Tet auf der Bühne The Loop bei Dekmantel 2025, vom Festival hochgeladen. Die Art langer, weit ausgreifender Sets, für die das Festival bekannt ist.',
      {youtubeId: 'E4NXVs4SlhE', genre: 'DEKMANTEL, 2025', artist: 'Four Tet', title: 'The Loop'}),
    'boomtown-set': video(lang, 'Boomtown, von zu Hause gehört',
      'Pearson Sound auf der Anara-Bühne bei Boomtown 2025, gefilmt von Keep Hush. Eine der Dutzenden kleineren Spielstätten in der Festivalstadt.',
      {youtubeId: 'OFuZ3lsZKxc', genre: 'BOOMTOWN, 2025', artist: 'Pearson Sound', title: 'Anara stage'}),
    // The owner's two mixes, where the English page has them: after the big
    // stages and at the end of How to choose.
    'first-mix': ownSetListening(0, lang),
    'second-mix': ownSetListening(1, lang)
  }),

  sources: [
    {html: `Termine 2027, gelesen auf der offiziellen Seite jedes Festivals am 22. September 2026: ${[
      ['https://www.defqon1.com/', 'Defqon.1'], ['https://www.awakenings.com/en/', 'Awakenings'], ['https://www.time-warp.de/', 'Time Warp'],
      ['https://www.kappafuturfestival.it/', 'Kappa FuturFestival'], ['https://www.boomtownfair.co.uk/', 'Boomtown'], ['https://www.monegrosfestival.com/', 'Monegros'],
      ['https://www.dekmantelfestival.com/', 'Dekmantel'], ['https://belgium.tomorrowland.com/', 'Tomorrowland']
    ].map(link).join(', ')}.`},
    {html: 'Termine und Größe von Untold, Parookaville, Creamfields, Ultra Europe, Mysteryland und Sónar: der Guide dieser Seite zu jedem dieser Festivals, oben verlinkt, der seine eigenen Quellen nennt.'},
    {href: 'https://djmag.com/top100festivals', label: 'DJ Mag: Top 100 Festivals 2026'},
    {html: `Wikipedia: ${[
      ['https://en.wikipedia.org/wiki/Defqon.1_Festival', 'Defqon.1'], ['https://en.wikipedia.org/wiki/Time_Warp_(festival)', 'Time Warp'], ['https://en.wikipedia.org/wiki/Boomtown_(festival)', 'Boomtown']
    ].map(link).join(', ')}`},
    {href: 'https://ra.co/news/85120', label: 'Resident Advisor: EXIT Festival zieht 2026 nach Montenegro'}
  ],

  bandcamp: {
    description: 'Zwischen den Festivals die Musik, die ich selbst mache: Breaks mit Techno und Dub darin. Wer eine Veröffentlichung kauft, unterstützt meine Arbeit direkt.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 von thecatrave'},
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks von thecatrave'}
    ]
  }
};
