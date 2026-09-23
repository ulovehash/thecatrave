// German EDC Las Vegas guide. Structure and facts from the English page
// (edc-draft.md, edc-research.md, build-edc-article.mjs).
//
// German keywords (keywords/de-edc.json): edc las vegas 350 a month in
// Germany (TRANSLATION-RESEARCH.md, stage 1). The wording was checked in the
// live google.de results on 2026-09-23, no Ahrefs units spent: "Weitere
// Fragen" asks "Was ist das EDC in Las Vegas?", "Was ist das EDC?" and "Wann
// ist das EDC Las Vegas?", and "Wie heißt das größte Festival in den USA?",
// which the last FAQ answers. German writes "das EDC". The everyday-carry
// collision keeps its one line, as in English.
//
// The images are the English guide's, in img/edc/, with translated captions;
// see home-articles.mjs for why a translation may reuse them.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, ownTrackListening
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption, className = 'wide-archive-image') => articleFigure({
  src: `img/edc/${name}-${width}.webp`,
  srcset: `img/edc/${name}-320.webp 320w, img/edc/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className
});

export default {
  lang: 'de',
  name: 'de-edc',
  file: 'de/edc-las-vegas.html',
  draft: 'de/edc-draft.md',
  canonical: 'https://thecatrave.com/de/edc-las-vegas',
  englishPath: '/edc-las-vegas',
  ogImage: 'https://thecatrave.com/img/og/edc.jpg',
  bodyClass: 'article-page edc-page',

  title: 'EDC Las Vegas 2027: Was das EDC ist, wie groß, welche Musik',
  description: 'Electric Daisy Carnival auf dem Las Vegas Motor Speedway: was das EDC ist, wie viele Menschen kommen, die Termine 2027 und was jenseits von kineticFIELD läuft.',
  datePublished: '2026-09-23',
  dateModified: '2026-09-23',
  dateLabel: '23. September 2026',

  heroKicker: 'Electric Daisy Carnival',
  heroTitle: 'EDC Las Vegas',
  deck: 'Drei Nächte auf einer Rennstrecke in der Wüste, beim größten Dance-Music-Festival Nordamerikas. Wo es stattfindet, wie groß es wirklich ist, wem es gehört und was abseits von kineticFIELD läuft.',
  answerLabel: 'Was ist EDC Las Vegas',
  breadcrumbName: 'EDC Las Vegas',

  answerSection: 'Antwort',
  introSection: 'Einleitung',
  introTitle: 'Die größte Nacht in der Wüste.',
  faqSection: 'FAQ',
  faqLabel: 'Häufige Fragen',
  faqTitle: 'Häufige Fragen zu EDC Las Vegas.',
  ownSetAfter: 'history',

  sections: [
    {id: 'where', heading: 'Wo EDC Las Vegas stattfindet', title: 'Wo EDC Las Vegas stattfindet.', subsections: ['orlando', 'mexico', 'abroad', 'edc-2027']},
    {id: 'how-big', heading: 'Wie groß EDC Las Vegas ist', title: 'Wie groß EDC Las Vegas ist.'},
    {id: 'history', heading: 'Eine kurze Geschichte, und wem EDC gehört', title: 'Eine kurze Geschichte, und wem EDC gehört.'},
    {id: 'famous', heading: 'Warum EDC so berühmt wurde', title: 'Warum EDC so berühmt wurde.'},
    {id: 'music', heading: 'Welche Musik wirklich läuft', title: 'Welche Musik wirklich läuft.', kicker: 'Die Musik'},
    {id: 'from-home', heading: 'EDC von zu Hause hören', title: 'EDC von zu Hause hören.'}
  ],

  media: ({lang}) => ({
    // The owner's own music inside the text, as on every German festival guide
    // (owner, 2026-09-21: Berlin Race 1909 on the German pages).
    'thecatrave berlin-race-1909': ownTrackListening('berlin-race-1909', 'Nicht das, was auf den großen Bühnen läuft: gebrochene Beats im Hall des Dub-Techno. Mein eigener Track, benannt nach Berlin.', lang),
    'EDC2024 Overview': figure('overview-2024', 1200, 521,
      'Ein weiter Blick über das Gelände von EDC Las Vegas bei Nacht, Bühnen und Fahrgeschäfte beleuchtet im Inneren des Speedways',
      'Das Festivalgelände im Las Vegas Motor Speedway 2024: Bühnen, Fahrgeschäfte und Kunst über den Innenraum verteilt. Foto: Eric Polk, CC BY-SA 4.0.'),
    'EDC Mexico 2023': figure('mexico-2023', 1200, 800,
      'Die Hauptbühne von EDC Mexico 2023, eine große thematisch gestaltete Bühne über dem Publikum auf der Rennstrecke in Mexiko-Stadt',
      'Die Hauptbühne von EDC Mexico 2023 im Autódromo Hermanos Rodríguez. Foto: Ludovic Delot, CC BY-SA 4.0.'),
    'Electric Daisy Carnival 2011': figure('las-vegas-2011', 1200, 900,
      'Die Bühne cosmicMEADOW im Vordergrund und kineticFIELD dahinter bei EDC Las Vegas 2011',
      'Die erste Ausgabe in Las Vegas, 2011: vorne cosmicMEADOW, dahinter kineticFIELD. Foto: Roman Fuchs, CC BY-SA 3.0.'),
    'EDC2024 Kinetic Field Tiesto': figure('kinetic-field-2024', 1200, 900,
      'kineticFIELD bei Nacht während des Sets von Tiësto bei EDC Las Vegas 2024, die Bühne leuchtet über dichtem Publikum',
      'kineticFIELD während des Sets von Tiësto 2024. Foto: Eric Polk, CC BY-SA 4.0.'),
    'Camo&Krooked': figure('camo-krooked-2014', 1200, 471,
      'Camo & Krooked von hinter dem DJ-Pult bei EDC Las Vegas 2014, Flammenwerfer über einem großen Publikum',
      'Camo & Krooked bei EDC Las Vegas 2014, dem Jahr, in dem sie auf bassPOD gebucht waren, der Bühne, die Bassrush für Drum and Bass und Dubstep ausrichtet. Foto: Uafmusic VIE, CC BY-SA 4.0.'),
    'SaUN0QHOkHk': articleVideoCollection({
      lang,
      label: 'EDC, die meistgesehenen Sets',
      description: 'Zwei Sets auf kineticFIELD: Above & Beyond 2015, fast fünf Millionen Aufrufe auf dem eigenen Kanal des Trios, und Alison Wonderland 2016, mehr als zwei Millionen auf ihrem.',
      items: [
        articleVideoCard({youtubeId: 'SaUN0QHOkHk', genre: 'kineticFIELD, 2015', artist: 'Above & Beyond', title: 'Live beim EDC Las Vegas 2015'}),
        articleVideoCard({youtubeId: 'zqjLaOONheg', genre: 'kineticFIELD, 2016', artist: 'Alison Wonderland', title: 'EDC Las Vegas 2016'})
      ]
    }),
    // Attendance as on the English page (Wikipedia and 2026 reports). Typed,
    // not computed.
    'Tabelle: Besucherzahlen': articleTable({
      headers: ['Jahr', 'Besucher', 'Wo, und was geschah'],
      rows: [
        ['1991', 'rund 3.000 bis 3.500', 'Frühes EDC in Südkalifornien, organisiert von Stephen Hauptfuhr und Gary Richards'],
        ['2000', '24.000', 'Tulare, Kalifornien; Lärmbeschwerden beendeten den Vertrag'],
        ['2010', 'rund 185.000', 'Los Angeles Memorial Coliseum, zwei Tage'],
        ['2011', '230.000 (gemeldet)', 'Erstes Jahr auf dem Las Vegas Motor Speedway, drei Tage'],
        ['2012', '320.000', ''],
        ['2014', '345.000 Tickets', 'Alle verkauft, bevor die Tore öffneten'],
        ['2018', 'rund 411.400', 'Erstes Jahr im Mai; Camping dazu'],
        ['2019', '465.000', ''],
        ['2020', 'keine', 'Wegen der Pandemie abgesagt'],
        ['2024', '525.000', 'Der Rekord'],
        ['2026', 'mehr als 500.000', '30. Jubiläum, ausverkauft']
      ].map(row => row.map(escapeHtml))
    })
  }),

  // The English page's sources, URL for URL, with translated labels.
  sources: [
    {href: 'https://en.wikipedia.org/wiki/Electric_Daisy_Carnival', label: 'Wikipedia: Electric Daisy Carnival (englisch)'},
    {href: 'https://en.wikipedia.org/wiki/Insomniac_(promoter)', label: 'Wikipedia: Insomniac (Veranstalter, englisch)'},
    {href: 'https://www.beatportal.com/articles/1422831-edc-las-vegas-to-split-into-two-consecutive-weekends-in-2027', label: 'Beatportal: EDC Las Vegas teilt sich 2027 auf zwei Wochenenden auf'},
    {href: 'https://djmag.com/news/edc-las-vegas-expands-12-days-and-two-full-weekends-2027', label: 'DJ Mag: EDC Las Vegas wächst 2027 auf 12 Tage und zwei Wochenenden'},
    {href: 'https://djmag.com/news/edc-las-vegas-2026-full-line-announced', label: 'DJ Mag: das Line-up von EDC Las Vegas 2026'},
    {href: 'https://djmag.com/news/heres-how-stream-edc-las-vegas-2026-home', label: 'DJ Mag: EDC Las Vegas 2026 von zu Hause streamen'},
    {href: 'https://weraveyou.com/2026/05/the-prodigy-edc-las-vegas-2026-first-time-cosmicmeadow/', label: 'We Rave You: The Prodigy spielen zum ersten Mal beim EDC Las Vegas'},
    {href: 'https://raverrafting.com/epic-stages-edc-las-vegas-2014/2014/07/16/', label: 'RaverRafting: die Bühnen von EDC Las Vegas 2014'},
    {href: 'https://discotech.me/festivals/guide-to-edc-las-vegas-stages/', label: 'Discotech: Guide zu den Bühnen von EDC Las Vegas'},
    {href: 'https://lasvegasweekly.com/ae/music/2025/aug/28/insomniac-and-tomorrowland-go-b2b-for-unity-sphere/', label: 'Las Vegas Weekly: Insomniac und Tomorrowland gemeinsam für Unity in der Sphere'},
    {href: 'https://www.youtube.com/watch?v=QjaVBJJ7xhE', label: 'Mixmag auf YouTube: Rusko (Jungle-Set) in The Lab beim EDC Las Vegas'},
    {href: 'https://stagehoppers.com/edc-las-vegas-all-time-best-sets/', label: 'Stage Hoppers: die besten Sets in der Geschichte von EDC Las Vegas'},
    {href: 'https://press.insomniac.com/festival-assets/electric-daisy-carnival', label: 'Insomniac: Electric Daisy Carnival'},
    {href: 'https://www.insomniac.com/who-we-are/how-it-all-began/', label: 'Insomniac: How It All Began (Firmengeschichte)'},
    {href: 'https://press.insomniac.com/blog/edc-las-vegas-introduces-new-dusk-till-dawn-2027-12-day-festival-concept-spanning-two-consecutive-weekends', label: 'Insomniac Press: EDC Las Vegas stellt „Dusk Till Dawn“ 2027 vor'},
    {href: 'https://festivalinsider.com/articles/electric-daisy-legacy-meet-the-man-behind-the-first-edc', label: 'Festival Insider: Electric Daisy Legacy, der Mann hinter dem ersten EDC'},
    {href: 'https://lasvegasweekly.com/news/2016/jun/16/looking-back-edc-electric-daisy-carnival/', label: 'Las Vegas Weekly: zwei Jahrzehnte EDC im Rückblick'},
    {href: 'https://lasvegassun.com/news/2023/may/23/edcs-scale-difficult-to-imagine-until-you-experien/', label: 'Las Vegas Sun: die schwer vorstellbare Größe des EDC'},
    {href: 'https://www.digitalmusicnews.com/2024/05/23/edc-las-vegas-2024/', label: 'Digital Music News: EDC Las Vegas 2024'}
  ],

  bandcamp: {
    description: 'Der Drum and Bass auf bassPOD und der Breakbeat, den The Prodigy auf cosmicMEADOW brachten, kommen aus derselben Linie aus Breaks und Bass wie meine eigene Musik. Wer einen Track kauft, unterstützt meine Arbeit direkt.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks von thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 von thecatrave'}
    ]
  }
};
