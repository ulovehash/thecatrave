// German Coachella guide. Structure and facts from the English page
// (coachella-draft.md, coachella-research.md).
//
// German keywords, measured 2026-09-17 (keywords/de-coachella.json):
// coachella 26,000 a month, coachella 2026 16,000, coachella festival 3,500,
// was ist coachella 2,000, coachella tickets 1,000, wann ist coachella 2026
// 600, coachella kritik 600, wo ist coachella 2026 500, coachella 2027 500,
// coachella ticket preise 400, coachella was ist das 350.
//
// "coachella outfit" (1,400) and "coachella outfits" (600) are real demand and
// are not answered here: this site writes about music, and a fashion page would
// be a different site pretending to be this one.
//
// Imperial units in the English draft are converted, not carried over: a German
// reader measures a festival site in hectares and a drive in kilometres.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, articleYoutubeEmbed
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption, className = 'wide-archive-image') => articleFigure({
  src: `img/coachella/${name}-${width}.webp`,
  srcset: `img/coachella/${name}-320.webp 320w, img/coachella/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className
});

export default {
  lang: 'de',
  name: 'de-coachella',
  file: 'de/coachella-festival.html',
  draft: 'de/coachella-draft.md',
  canonical: 'https://thecatrave.com/de/coachella-festival',
  englishPath: '/what-is-coachella',
  ogImage: 'https://thecatrave.com/img/og/coachella.jpg',
  bodyClass: 'article-page coachella-page',

  title: 'Was ist Coachella? Termine 2027, Ort, Größe und Musik',
  description: 'Coachella ist ein Musikfestival im Empire Polo Club in Indio, Kalifornien. Termine 2027, Ort, Dauer, Besucherzahlen, Eigentümer und die Musik im Sahara-Zelt.',
  datePublished: '2026-09-17',
  dateModified: '2026-09-17',
  dateLabel: '17. September 2026',

  heroKicker: 'Coachella',
  heroTitle: 'Was ist Coachella?',
  deck: 'Zwei Aprilwochenenden auf einem Polofeld in der kalifornischen Wüste. Wann Coachella 2027 stattfindet, wo es liegt, wie groß es ist, wem es gehört und welche Musik im Sahara-Zelt läuft.',
  answerLabel: 'Was ist Coachella',
  breadcrumbName: 'Was ist Coachella',

  answerSection: 'Antwort',
  introSection: 'Einleitung',
  introTitle: 'Ein Wagnis auf einem Polofeld.',
  faqSection: 'FAQ',
  faqLabel: 'Häufige Fragen',
  faqTitle: 'Häufige Fragen zu Coachella.',
  ownSetAfter: 'history',

  sections: [
    {id: 'coachella-2027', heading: 'Coachella 2027: Termine', title: 'Coachella 2027: Termine.'},
    {id: 'where', heading: 'Wo Coachella stattfindet', title: 'Wo Coachella stattfindet.'},
    {id: 'when', heading: 'Wann Coachella ist, und wie lange es dauert', title: 'Wann Coachella ist, und wie lange es dauert.'},
    {id: 'how-big', heading: 'Wie groß Coachella ist', title: 'Wie groß Coachella ist.'},
    {id: 'history', heading: 'Eine kurze Geschichte, und wem Coachella gehört', title: 'Eine kurze Geschichte, und wem Coachella gehört.'},
    {id: 'stages', heading: 'Die Bühnen von Coachella', title: 'Die Bühnen von Coachella.'},
    {id: 'famous', heading: 'Warum Coachella berühmt ist, und die Kritik daran', title: 'Warum Coachella berühmt ist, und die Kritik daran.'},
    {id: 'music', heading: 'Welche Musik wirklich läuft', title: 'Welche Musik wirklich läuft.', kicker: 'Die Musik'},
    {id: 'from-home', heading: 'Coachella von zu Hause hören', title: 'Coachella von zu Hause hören.'}
  ],

  media: () => ({
    'Coachella18W1-18': figure('grounds-2018', 1200, 677,
      'Festivalbesucher auf der Wiese von Coachella 2018, dahinter Palmen und ein hoher Turm aus farbigen Platten, am Horizont Wüstenberge und das Riesenrad',
      'Das Festivalgelände im April 2018: Palmen, Wüstenberge, ein farbiger Turm und das Riesenrad. Foto: Raph_PH, CC BY 2.0.'),
    'Coachella 2006, Barry Mulling': figure('tent-2006', 1200, 900,
      'Publikum unter einem weißen Festivalzelt bei Coachella 2006, eine Band auf der Bühne, Lautsprecher unter dem Dach und Palmen im Abendlicht hinter der offenen Seite',
      'Ein Auftritt unter einem der Zelte bei Coachella im April 2006, dem Jahr der Pyramide von Daft Punk und des Auftritts von Madonna im Dance-Zelt. Foto: Barry Mulling, CC BY-SA 2.0.'),
    'Outdoor Theatre, Shawn Ahmed': figure('outdoor-theatre-2014', 1200, 801,
      'Ein großes Publikum vor der Bühne des Outdoor Theatre in der Dämmerung 2014, links und rechts Bildschirme, am Feldrand Palmen',
      'Das Outdoor Theatre in der Dämmerung am zweiten Wochenende 2014. Foto: Shawn Ahmed, CC BY 2.0.'),
    'Sahara Tent, Shawn Ahmed': figure('sahara-2014', 1200, 801,
      'Das Innere des Sahara-Zelts bei Nacht im Jahr 2014, das bogenförmige Stahlgerüst grün und weiß beleuchtet über dichtem Publikum',
      'Das Sahara-Zelt bei Nacht am zweiten Wochenende 2014, die Bühne für die elektronischen Headliner von Coachella. Foto: Shawn Ahmed, CC BY 2.0.'),
    'o0QGw1LZpxM': articleYoutubeEmbed({
      src: 'https://www.youtube-nocookie.com/embed/o0QGw1LZpxM',
      title: 'Diljit Dosanjh, G.O.A.T., live im Sahara-Zelt bei Coachella 2023, auf dem YouTube-Kanal von Coachella'
    }),
    'oUbpmjOgmmU': articleVideoCollection({
      lang: 'de',
      label: 'Coachella, die meistgesehenen Videos',
      description: 'FISHER mit "Losing It" im Jahr 2019, das meistgesehene Video auf dem Kanal des Festivals, und das Set von Fatboy Slim aus 2026, fast zwei Stunden, auf seinem eigenen Kanal.',
      items: [
        articleVideoCard({youtubeId: 'oUbpmjOgmmU', genre: 'Coachella, 2019', artist: 'FISHER', title: 'Losing It, live bei Coachella 2019'}),
        articleVideoCard({youtubeId: 'fQqusBEnwM4', genre: 'Coachella, 2026', artist: 'Fatboy Slim', title: 'Coachella 2026'})
      ]
    }),
    'Tabelle: Besucherzahlen': articleTable({
      headers: ['Jahr', 'Format', 'Besucher', 'Einnahmen'],
      rows: [
        ['1999', 'Zwei Tage, Oktober', 'rund 37.000 Tickets', '850.000 Dollar Verlust'],
        ['2001', 'Ein Tag, April', '32.000', 'Verlust'],
        ['2002', 'Zwei Tage', 'mehr als 55.000', 'fast kostendeckend'],
        ['2004', 'Zwei Tage', '110.000', 'erstmals ausverkauft'],
        ['2006', 'Zwei Tage', 'rund 120.000', '9 Millionen Dollar'],
        ['2007', 'Drei Tage', '186.000', '16,3 Millionen Dollar'],
        ['2010', 'Drei Tage', 'rund 225.000', '21,7 Millionen Dollar'],
        ['2012', 'Zwei Wochenenden', '158.387 zahlend', '47,3 Millionen Dollar'],
        ['2014', 'Zwei Wochenenden', '96.500 pro Tag', '78,3 Millionen Dollar'],
        ['2017', 'Zwei Wochenenden', '250.000', '114,6 Millionen Dollar'],
        ['2020 und 2021', '', 'Wegen der Pandemie abgesagt', '']
      ].map(row => row.map(escapeHtml))
    })
  }),

  // The English page's sources, URL for URL, with translated labels.
  sources: [
    {href: 'https://hospitality.coachella.com/', label: 'Coachella: Termine 2027 und Enhanced Experiences'},
    {href: 'https://www.coachella.com/waitlist', label: 'Coachella: Warteliste für 2027'},
    {href: 'https://www.coachella.com/faq/', label: 'Coachella: offizielle Support- und FAQ-Seite'},
    {href: 'https://www.indio.org/home/showpublisheddocument/1068/637874349323400000', label: 'Stadt Indio: Besucherzahlen jährlicher Veranstaltungen'},
    {href: 'https://www.indio.org/home/showpublisheddocument/5517/638828367145700000', label: 'Stadt Indio: Broschüre zur Wirtschaftsförderung'},
    {href: 'https://aegworldwide.com/press-center/press-releases/goldenvoice-assume-operations-empire-polo-club-long-term-agreement', label: 'AEG Worldwide: Vereinbarung zwischen Goldenvoice und dem Empire Polo Club'},
    {href: 'https://www.goldenvoice.com/festivals/', label: 'Goldenvoice: Festivals'},
    {href: 'https://www.elationlighting.com/blogs/news/1300-elation-lights-dazzle-coachella-2024', label: 'Elation Lighting: das Sahara-Zelt bei Coachella 2024'},
    {href: 'https://ca.billboard.com/business/touring/justin-bieber-coachella-radius-claus', label: 'Billboard Canada: die Radiusklausel von Coachella'},
    {href: 'https://www.youtube.com/@Coachella', label: 'Coachella auf YouTube (Auftritte und Aufrufzahlen)'}
  ],

  bandcamp: {
    description: 'Wer einen Track kauft, unterstützt meine Arbeit direkt.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks von thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 von thecatrave'}
    ]
  }
};
