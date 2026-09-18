// German Glastonbury guide. Structure and facts from the English page
// (glastonbury-draft.md, glastonbury-research.md, build-glastonbury-article.mjs).
//
// German keywords, measured 2026-09-18 with keywords-explorer-matching-terms,
// country de (keywords/de-glastonbury.json): glastonbury 6,300 a month,
// glastonbury festival 2,600, glastonbury festival 2027 200, glastonbury 2027
// 100. The German demand is the festival itself; dated editions, line-ups,
// tickets and the town's other meanings (Tor 500, Abbey 80) are rejected in
// the map with a reason.
//
// Imperial units are converted: six miles is about 10 km, 1,500 acres about
// 600 hectares.
//
// The images are the English guide's, in img/glastonbury/, with translated
// captions; see home-articles.mjs for why a translation may reuse them.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, articleYoutubeEmbed
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption, className = 'wide-archive-image') => articleFigure({
  src: `img/glastonbury/${name}-${width}.webp`,
  srcset: `img/glastonbury/${name}-320.webp 320w, img/glastonbury/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className
});

// Headliners by year, as in the English generator (Wikipedia's line-ups
// table); only the notes are translated.
const headlinerRows = [
  ['1970', 'Tyrannosaurus Rex (für die Kinks)'],
  ['1971', 'David Bowie'],
  ['1979', 'Tim Blake, Peter Gabriel'],
  ['1981', 'Hawkwind, Ginger Baker'],
  ['1982', 'Van Morrison, Jackson Browne'],
  ['1983', 'Curtis Mayfield, UB40'],
  ['1984', 'The Smiths, Weather Report, Black Uhuru'],
  ['1985', 'Echo & the Bunnymen, Joe Cocker, The Boomtown Rats'],
  ['1986', 'The Cure, The Psychedelic Furs, Level 42'],
  ['1987', 'Elvis Costello, Van Morrison, The Communards'],
  ['1988', 'Brachjahr'],
  ['1989', 'Elvis Costello, Van Morrison, Suzanne Vega'],
  ['1990', 'The Cure, Happy Mondays, Sinéad O\'Connor'],
  ['1991', 'Brachjahr'],
  ['1992', 'Carter USM, Shakespears Sister, Youssou N\'Dour'],
  ['1993', 'The Black Crowes, Christy Moore, Lenny Kravitz'],
  ['1994', 'Levellers, Elvis Costello, Peter Gabriel'],
  ['1995', 'Oasis, Pulp, The Cure'],
  ['1996', 'Brachjahr'],
  ['1997', 'Radiohead, The Prodigy, Ash'],
  ['1998', 'Primal Scream, Blur, Pulp'],
  ['1999', 'R.E.M., Manic Street Preachers, Skunk Anansie'],
  ['2000', 'David Bowie, Travis, The Chemical Brothers'],
  ['2001', 'Brachjahr'],
  ['2002', 'Coldplay, Rod Stewart, Stereophonics'],
  ['2003', 'R.E.M., Radiohead, Moby'],
  ['2004', 'Paul McCartney, Oasis, Muse'],
  ['2005', 'The White Stripes, Coldplay, Basement Jaxx'],
  ['2006', 'Brachjahr'],
  ['2007', 'Arctic Monkeys, The Killers, The Who'],
  ['2008', 'Kings of Leon, Jay-Z, The Verve'],
  ['2009', 'Neil Young, Bruce Springsteen, Blur'],
  ['2010', 'Gorillaz, Muse, Stevie Wonder'],
  ['2011', 'Beyoncé, U2, Coldplay'],
  ['2012', 'Brachjahr (Olympische Spiele in London)'],
  ['2013', 'Arctic Monkeys, The Rolling Stones, Mumford & Sons'],
  ['2014', 'Arcade Fire, Metallica, Kasabian'],
  ['2015', 'Florence and the Machine, Kanye West, The Who'],
  ['2016', 'Muse, Adele, Coldplay'],
  ['2017', 'Radiohead, Foo Fighters, Ed Sheeran'],
  ['2018', 'Brachjahr'],
  ['2019', 'Stormzy, The Killers, The Cure'],
  ['2020 und 2021', 'Wegen der Pandemie abgesagt'],
  ['2022', 'Billie Eilish, Paul McCartney, Kendrick Lamar'],
  ['2023', 'Arctic Monkeys, Guns N\' Roses, Elton John'],
  ['2024', 'Dua Lipa, Coldplay, SZA'],
  ['2025', 'The 1975, Neil Young, Olivia Rodrigo'],
  ['2026', 'Brachjahr'],
  ['2027', '23. bis 27. Juni; Headliner noch nicht bekannt']
];

export default {
  lang: 'de',
  name: 'de-glastonbury',
  file: 'de/glastonbury-festival.html',
  draft: 'de/glastonbury-draft.md',
  canonical: 'https://thecatrave.com/de/glastonbury-festival',
  englishPath: '/glastonbury-festival',
  ogImage: 'https://thecatrave.com/img/og/glastonbury.jpg',
  bodyClass: 'article-page glastonbury-page',

  title: 'Glastonbury Festival 2027: Termine, Brachjahre und Headliner',
  description: 'Das Glastonbury Festival auf der Worthy Farm: wann Glastonbury 2027 ist, warum es 2026 ausfiel, wo es liegt, wie groß es ist und die Headliner nach Jahren.',
  datePublished: '2026-09-18',
  dateModified: '2026-09-18',
  dateLabel: '18. September 2026',

  heroKicker: 'Glastonbury',
  heroTitle: 'Glastonbury Festival',
  deck: 'Fünf Tage in den meisten Junis auf einem Milchviehbetrieb in Somerset. Wann das nächste ist, warum es dieses Jahr keines gab, wo es stattfindet, wie groß es ist und wer Headliner war.',
  answerLabel: 'Was ist Glastonbury',
  breadcrumbName: 'Glastonbury Festival',

  answerSection: 'Antwort',
  introSection: 'Einleitung',
  introTitle: 'Ein Festival auf einem Bauernhof.',
  faqSection: 'FAQ',
  faqLabel: 'Häufige Fragen',
  faqTitle: 'Häufige Fragen zu Glastonbury.',
  ownSetAfter: 'history',

  // The next-edition section comes first, as on the English page: its year is
  // refreshed every June when the festival ends (festival-editions.mjs).
  sections: [
    {id: 'glastonbury-2027', heading: 'Glastonbury Festival 2027: Termine', title: 'Glastonbury Festival 2027: Termine.'},
    {id: 'fallow-year', heading: 'Warum es dieses Jahr kein Glastonbury gibt', title: 'Warum es dieses Jahr kein Glastonbury gibt.'},
    {id: 'where', heading: 'Wo das Glastonbury Festival stattfindet', title: 'Wo das Glastonbury Festival stattfindet.'},
    {id: 'when', heading: 'Wann Glastonbury ist und wie lange es dauert', title: 'Wann Glastonbury ist und wie lange es dauert.'},
    {id: 'how-big', heading: 'Wie groß Glastonbury ist', title: 'Wie groß Glastonbury ist.'},
    {id: 'history', heading: 'Eine kurze Geschichte, und wer Glastonbury betreibt', title: 'Eine kurze Geschichte, und wer Glastonbury betreibt.'},
    {id: 'stages', heading: 'Die Pyramid Stage und der Rest des Geländes', title: 'Die Pyramid Stage und der Rest des Geländes.'},
    {id: 'headliners', heading: 'Die Headliner von Glastonbury nach Jahren', title: 'Die Headliner von Glastonbury nach Jahren.'},
    {id: 'music', heading: 'Welche Musik wirklich läuft', title: 'Welche Musik wirklich läuft.', kicker: 'Die Musik'},
    {id: 'from-home', heading: 'Glastonbury von zu Hause hören', title: 'Glastonbury von zu Hause hören.'}
  ],

  media: () => ({
    'Pilton, Glastonbury Festival Site': figure('aerial-2022', 1200, 800,
      'Die Worthy Farm aus der Luft im Juni 2022, grüne Felder zwischen Hecken, voller Zelte, Festzelte und bunter Überdachungen',
      'Die Worthy Farm aus der Luft im Juni 2022, wenige Tage vor dem Festival, die Felder schon voller Zelte, Festzelte und Bühnen. Foto: Lewis Clarke, CC BY-SA 2.0.'),
    'The Pyramid Stage - Glastonbury 2008': figure('pyramid-2008', 640, 480,
      'Die weiße Pyramid Stage in der Ferne an einem klaren Abend 2008, im Vordergrund hohe Fahnen und ein sitzendes Publikum mit Klappstühlen',
      'Die Pyramid Stage an einem klaren Abend im Juni 2008, davor Fahnen und ein sitzendes Publikum auf der Wiese. Foto: Sharon Loxton, CC BY-SA 2.0.', 'archive-image'),
    'Glastonbury Festival 2025 - Night': figure('night-2025', 1200, 800,
      'Silhouetten von Menschen an einem Hang bei Nacht 2025, mit Blick über ein Tal voller beleuchteter Bühnen, gestreifter Türme und Lichterketten',
      'Das Festival bei Nacht am 26. Juni 2025, vom Hang über dem Gelände aus gesehen, mit den beleuchteten Bühnen und Feldern im Tal. Foto: Raph_PH, CC BY 4.0.'),
    'Tabelle: headliners': articleTable({
      headers: ['Jahr', 'Headliner'],
      rows: headlinerRows.map(row => row.map(escapeHtml)),
      label: 'Headliner von Glastonbury nach Jahren'
    }),
    '1n6GvSfjE8M': articleYoutubeEmbed({
      src: 'https://www.youtube-nocookie.com/embed/1n6GvSfjE8M',
      title: 'The Prodigy, Breathe, bei Glastonbury 2025, auf dem YouTube-Kanal von BBC Music'
    }),
    'kM-94LhhQTs': articleVideoCollection({
      lang: 'de',
      label: 'Glastonbury, am meisten gesehen',
      description: 'Coldplay mit "Fix You" beim Festival 2024, auf dem Kanal von BBC Music, und das Headliner-Set von R.E.M. aus dem Jahr 1999, wie die BBC es übertrug, auf dem Kanal der Band.',
      items: [
        articleVideoCard({youtubeId: 'kM-94LhhQTs', genre: 'Glastonbury, 2024', artist: 'Coldplay', title: 'Fix You, Glastonbury 2024'}),
        articleVideoCard({youtubeId: 'DurDZkK58VE', genre: 'Glastonbury, 1999', artist: 'R.E.M.', title: 'Live vom Glastonbury Festival, 1999'})
      ]
    })
  }),

  sources: [
    {href: 'https://en.wikipedia.org/wiki/Glastonbury_Festival', label: 'Wikipedia: Glastonbury Festival'},
    {href: 'https://www.glastonburyfestivals.co.uk/info/', label: 'Glastonbury Festival: Info'},
    {href: 'https://www.glastonburyfestivals.co.uk/news/glastonbury-2027-ticket-information-confirmed/', label: 'Glastonbury Festival: Ticketinformationen für 2027 bestätigt'},
    {href: 'https://www.somerset.gov.uk/community-leisure-and-tourism/glastonbury-festival/', label: 'Somerset Council: Genehmigung und Veranstaltungsmanagement des Glastonbury Festival'},
    {href: 'https://somerset.moderngov.co.uk/documents/s60202/Glastonbury%20Scruitiny%20Report%202025%20FINAL%20for%20Committee.pdf', label: 'Somerset Council: Prüfbericht zum Glastonbury Festival 2025'},
    {href: 'https://apnews.com/article/e70d38801ed7ab25d836048de6deda78', label: 'Associated Press: Glastonbury 2025 in Zahlen'},
    {href: 'https://glastonburyfestivals.co.uk/anti-slavery-statement/', label: 'Glastonbury Festival: Anti-Slavery Statement'},
    {href: 'https://www.theguardian.com/uk/2001/oct/22/glastonbury2002.glastonbury', label: 'The Guardian: Glastonbury organisers bid for expansion'},
    {href: 'https://www.theguardian.com/music/2020/jun/26/from-bowie-to-beyonce-glastonburys-50-greatest-moments', label: 'The Guardian: From Bowie to Beyoncé, Glastonbury\'s 50 greatest moments'},
    {href: 'https://en.wikipedia.org/wiki/Arcadia_Spectacular', label: 'Wikipedia: Arcadia Spectacular'},
    {href: 'https://www.ingenia.org.uk/articles/the-arcadia-spider-from-junk-to-spectacle/', label: 'Ingenia: The Arcadia spider, from junk to spectacle'},
    {href: 'https://www.wallpaper.com/art/glastonbury-arcadia-dragonfly-interview', label: 'Wallpaper: The story behind Arcadia\'s new Dragonfly stage'}
  ],

  bandcamp: {
    description: 'Wer einen Track kauft, unterstützt meine Arbeit direkt.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks von thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 von thecatrave'}
    ]
  }
};
