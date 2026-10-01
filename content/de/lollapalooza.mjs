// German Lollapalooza guide. Structure and facts from the English page
// (lollapalooza-draft.md). Volumes are not measured for this language yet
// (TRANSLATION-RESEARCH.md); live SERP checked 2026-10-01 (related searches and People also ask).
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, articleYoutubeEmbed
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption, className = 'wide-archive-image') => articleFigure({
  src: `img/lollapalooza/${name}-${width}.webp`,
  srcset: `img/lollapalooza/${name}-320.webp 320w, img/lollapalooza/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className
});

export default {
  lang: 'de',
  name: 'de-lollapalooza',
  file: 'de/lollapalooza-festival.html',
  draft: 'de/lollapalooza-draft.md',
  canonical: 'https://thecatrave.com/de/lollapalooza-festival',
  englishPath: '/lollapalooza-festival',
  ogImage: 'https://thecatrave.com/img/og/lollapalooza.jpg',
  bodyClass: 'article-page lollapalooza-page',
  minReadingMinutes: 8,

  title: 'Lollapalooza Chicago: Ort, Geschichte und Musik',
  description: 'Lollapalooza ist ein viertägiges Festival im Grant Park in Chicago. Ort, Geschichte, Größe, internationale Ausgaben und die Musik auf Perry’s Stage.',
  datePublished: '2026-09-17',
  dateModified: '2026-09-17',
  dateLabel: '17. September 2026',

  heroKicker: 'Lollapalooza',
  heroTitle: 'Lollapalooza Chicago',
  deck: 'Vier Tage jeden Sommer im Grant Park am Seeufer von Chicago. Wo es stattfindet, wie aus einer Abschiedstournee ein dauerhaftes Festival wurde und was auf seinen Bühnen läuft.',
  answerLabel: 'Was ist Lollapalooza',
  breadcrumbName: 'Was ist Lollapalooza',

  answerSection: 'Antwort',
  introSection: 'Einleitung',
  introTitle: 'Eine Abschiedstournee, die blieb.',
  faqSection: 'FAQ',
  faqLabel: 'Häufige Fragen',
  faqTitle: 'Häufige Fragen zu Lollapalooza.',
  ownSetAfter: 'history',

  sections: [
    {id: 'lollapalooza-2027', heading: 'Lollapalooza 2027: Stand der Termine', title: 'Lollapalooza 2027: Stand der Termine.'},
    {id: 'where', heading: 'Wo Lollapalooza stattfindet', title: 'Wo Lollapalooza stattfindet.', subsections: ['only-chicago']},
    {id: 'when', heading: 'Wann Lollapalooza ist, und wie lange es dauert', title: 'Wann Lollapalooza ist, und wie lange es dauert.'},
    {id: 'how-big', heading: 'Wie groß Lollapalooza ist', title: 'Wie groß Lollapalooza ist.'},
    {id: 'meaning', heading: 'Was Lollapalooza bedeutet', title: 'Was Lollapalooza bedeutet.'},
    {id: 'history', heading: 'Eine kurze Geschichte, und wem Lollapalooza gehört', title: 'Eine kurze Geschichte, und wem Lollapalooza gehört.'},
    {id: 'stages', heading: 'Die Bühnen von Lollapalooza', title: 'Die Bühnen von Lollapalooza.'},
    {id: 'music', heading: 'Was die Musik tatsächlich ist', title: 'Was die Musik tatsächlich ist.', kicker: 'Die Musik'},
    {id: 'from-home', heading: 'Lollapalooza von zu Hause hören', title: 'Lollapalooza von zu Hause hören.'}
  ],

  media: () => ({
    'Image: skyline': figure('skyline-2017', 1200, 900, 'Menschenmenge auf der Wiese im Grant Park bei Lollapalooza 2017, links ein Lautsprecherturm und dahinter die Skyline von Chicago',
      'Das Lollapalooza-Gelände im Grant Park im August 2017, hinter der Menge die Skyline von Chicago. Foto: Lacrossewi, CC BY-SA 4.0.'),
    'Image: sign': figure('sign-2017', 1200, 916, 'Das Wort Lollapalooza in riesigen weißen aufblasbaren Buchstaben vor Bäumen und einem Hochhaus, im Vordergrund gehen Festivalbesucher vorbei',
      'Der Name des Festivals in riesigen aufblasbaren Buchstaben am Eingang zum Grant Park im Jahr 2017. Foto: Lacrossewi, CC BY-SA 4.0.'),
    'Image: tour': figure('tour-1991', 1200, 868, 'Ein großes Publikum unter freiem Himmel vor einer Gerüstbühne mit rot verhängtem Dach auf der ersten Lollapalooza-Tournee 1991',
      'Das Publikum bei einem Open-Air-Stopp der ersten Lollapalooza-Tournee 1991. Foto: Ric Wallace, CC BY 2.0.'),
    'Image: stage': figure('stage-2014', 1200, 900, 'Eine leere Hauptbühne im Grant Park am Morgen von Lollapalooza 2014, davor Erdboden und dahinter die Hochhäuser am Seeufer',
      'Eine Hauptbühne im Grant Park am Morgen des 2. August 2014, vor dem Einlass, dahinter die Hochhäuser am Seeufer. Foto: swimfinfan, CC BY-SA 2.0.'),
    'Table: Standorte': articleTable({
      headers: ['Stadt', 'Ort', 'Erste Ausgabe'],
      rows: [
        ['Chicago, USA', 'Grant Park', '2005 (Tourneefestival ab 1991)'],
        ['Santiago, Chile', 'Parque O’Higgins', '2011'],
        ['São Paulo, Brasilien', 'Jockey Club, ab 2014 Interlagos', '2012'],
        ['Buenos Aires, Argentinien', 'Hipódromo de San Isidro', '2014'],
        ['Berlin, Deutschland', 'Tempelhof, Treptower Park, ab 2018 Olympiastadion und Olympiapark', '2015'],
        ['Paris, Frankreich', 'Rennbahn Longchamp', '2017'],
        ['Stockholm, Schweden', 'Gärdet', '2019 (Ausgaben 2019, 2022 und 2023; 2024 pausiert)'],
        ['Mumbai, Indien', 'Mahalaxmi-Rennbahn', '2023']
      ].map(row => row.map(escapeHtml))
    }),
    '9TKqqBCmDHA': articleYoutubeEmbed({
      src: 'https://www.youtube-nocookie.com/embed/9TKqqBCmDHA',
      title: 'John Summit live bei Lollapalooza Chicago 2026, auf seinem YouTube-Kanal'
    }),
    'EGh9zlN6eLo': articleVideoCollection({
      lang: 'de',
      label: 'Lollapalooza, die meistgesehenen Videos',
      description: 'Lady Gaga mit Semi Precious Weapons 2010, das meistgesehene Video auf dem Kanal des Festivals, und das offizielle Set der Chainsmokers von 2019, das meistgesehene Set auf dem Kanal eines Künstlers.',
      items: [
        articleVideoCard({youtubeId: 'EGh9zlN6eLo', genre: 'Lollapalooza, 2010', artist: 'Lady Gaga mit Semi Precious Weapons', title: 'Lollapalooza 2010'}),
        articleVideoCard({youtubeId: 'zns830Yl1b0', genre: 'Lollapalooza, 2019', artist: 'The Chainsmokers', title: 'Offizielles Live-Set, Lollapalooza Chicago 2019'})
      ]
    })
  }),

  sources: [
    {href: 'https://www.youtube.com/@lollapalooza', label: 'Lollapalooza auf YouTube (Kanalbeschreibung, Aufrufzahlen)'},
    {href: 'https://www.lollapalooza.com/', label: 'Lollapalooza: offizielle Website'},
    {href: 'https://www.lollapalooza.com/schedule', label: 'Lollapalooza: offizieller Zeitplan und Stand der Ankündigung für 2027'},
    {href: 'https://support.lollapalooza.com/hc/en-us/articles/4402035626260-What-are-the-dates-and-hours-for-Lollapalooza-2026', label: 'Lollapalooza: offizielle Termine und Zeiten 2026'},
    {href: 'https://itsbetterlive.livenationforbrands.com/at-lollapalooza-everyone-had-a-plan-nobody-stuck-to-it/', label: 'Live Nation: Besucherzahl Lollapalooza 2026'},
    {href: 'https://www.prnewswire.com/news-releases/live-nation-entertainment-expands-festival-portfolio-with-c3-presents-300012666.html', label: 'Live Nation: Mehrheitsbeteiligung an C3 Presents'},
    {href: 'https://www.c3presents.com/festivals', label: 'C3 Presents: Festivals und aktuelle Lollapalooza-Standorte'},
    {href: 'https://www.chicagoparkdistrict.com/about-us/news/chicago-park-district-celebrates-strong-2024-accomplishments-and-touts-progress', label: 'Chicago Park District: tägliche Besucherzahl bei Lollapalooza'},
    {href: 'https://www.wbez.org/culture-the-arts/2022/08/01/lightfoot-announces-deal-to-keep-lollapalooza-in-grant-park-for-another-decade', label: 'WBEZ: aktuelle Vereinbarung für den Grant Park und Besucherobergrenze'},
    {href: 'https://www.phoenixnewtimes.com/music/first-lollapalooza-concert-1991-phoenix-30th-anniversary-oral-history-perry-farrell-11591298/', label: 'Phoenix New Times: Oral History des ersten Lollapalooza-Konzerts'},
    {href: 'https://www.svt.se/kultur/inget-lollapalooza-i-stockholm-nasta-ar--fkxone', label: 'SVT: Lollapalooza Stockholm pausiert 2024'},
    {href: 'https://www.choosechicago.com/articles/festivals-special-events/lollapalooza/', label: 'Choose Chicago: Lollapalooza Chicago'},
    {href: 'https://www.billboard.com/photos/lady-gaga-fires-up-lollapalooza-stage-dives-426763/', label: 'Billboard: Lady Gaga heizt Lollapalooza an, Stagedive'},
    {href: 'https://en.wikipedia.org/wiki/Lollapalooza', label: 'Wikipedia: Lollapalooza (ergänzende Chronologie)'}
  ],

  bandcamp: {
    description: 'Wer einen Track kauft, unterstützt meine Arbeit direkt.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks von thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 von thecatrave'}
    ]
  }
};
