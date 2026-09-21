// German Burning Man guide. Structure and facts from the English page
// (burning-man-draft.md, burning-man-research.md, build-burning-man-article.mjs).
//
// German keywords, measured 2026-09-18 with keywords-explorer-matching-terms,
// country de (keywords/de-burning-man.json): burning man 11,000 a month,
// burning man festival 3,200, burning man tickets 350, burning man 2027 100,
// was ist burning man 100. German demand is the same event the English page
// explains. The collisions are rejected in the map: the adult searches (nude,
// sex, porn, orgy dome), celebrity visits (Cara Delevingne 800), the outfit
// cluster and the dated editions.
//
// Like the English page, this guide carries no mixes of the owner's: Burning
// Man is not in the festival list that plays them (audit-site-components.mjs).
//
// Imperial units are converted: 100 miles is about 160 km, the 9.2-mile fence
// almost 15 km, 100°F is 38 °C.
//
// The images are the English guide's, in img/burning-man/, with translated
// captions; see home-articles.mjs for why a translation may reuse them.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, articleYoutubeEmbed, ownSetListening
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption, className = 'wide-archive-image') => articleFigure({
  src: `img/burning-man/${name}-${width}.webp`,
  srcset: `img/burning-man/${name}-320.webp 320w, img/burning-man/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className
});

const youtube = (id, label) => articleYoutubeEmbed({
  src: `https://www.youtube-nocookie.com/embed/${id}`,
  title: label
});

export default {
  lang: 'de',
  name: 'de-burning-man',
  file: 'de/burning-man-festival.html',
  draft: 'de/burning-man-draft.md',
  canonical: 'https://thecatrave.com/de/burning-man-festival',
  englishPath: '/what-is-burning-man',
  ogImage: 'https://thecatrave.com/img/og/burning-man.jpg',
  bodyClass: 'article-page burning-man-page',

  title: 'Was ist Burning Man? Die Stadt in der Wüste und ihre Musik',
  description: 'Burning Man ist kein Festival mit Line-up, sondern eine Stadt auf Zeit in Nevada. Was dort passiert, wo es liegt, was es kostet und was die Sound-Camps spielen.',
  datePublished: '2026-09-18',
  dateModified: '2026-09-18',
  dateLabel: '18. September 2026',

  heroKicker: 'Burning Man',
  heroTitle: 'Was ist Burning Man?',
  deck: 'Eine von den Teilnehmern gebaute Stadt in der Wüste Nevadas, ohne zentrales Line-up und ohne Hauptbühne. Was dort passiert, und was seine Sound-Camps wirklich spielen.',
  answerLabel: 'Was ist Burning Man',
  breadcrumbName: 'Was ist Burning Man?',

  answerSection: 'Antwort',
  introSection: 'Einleitung',
  introTitle: 'Eine Stadt, kein Festival.',
  faqSection: 'FAQ',
  faqLabel: 'Häufige Fragen',
  faqTitle: 'Häufige Fragen zu Burning Man.',

  sections: [
    {id: 'black-rock-city', heading: 'Black Rock City', title: 'Black Rock City.', subsections: ['burning-man-2027']},
    {id: 'what-happens', heading: 'Was bei Burning Man passiert', title: 'Was bei Burning Man passiert.'},
    {id: 'principles', heading: 'Die zehn Prinzipien', title: 'Die zehn Prinzipien.'},
    {id: 'music', heading: 'Ist Burning Man ein Musikfestival?', title: 'Ist Burning Man ein Musikfestival?', kicker: 'Die Musik', subsections: ['sound-camps', 'robot-heart', 'mayan-warrior']},
    {id: 'history', heading: 'Eine kurze Geschichte von Burning Man', title: 'Eine kurze Geschichte von Burning Man.'},
    {id: 'controversy', heading: 'Warum ist Burning Man so umstritten?', title: 'Warum ist Burning Man so umstritten?'},
    {id: 'from-home', heading: 'Burning Man von zu Hause hören', title: 'Burning Man von zu Hause hören.'}
  ],

  media: ({lang}) => ({
    // The owner's own music inside the text (owner, 2026-09-21: Berlin Race
    // 1909 on the German pages, Dégénération on the French, and art deco with
    // late summer cloud dance in the drum and bass guides).
    'thecatrave mix I Lost So Many Weekends': ownSetListening(1, lang, 'Breaks und Techno für eine Nacht auf einem Art Car. Mein eigener Mix.'),
    'thecatrave mix I Like to Smoke': ownSetListening(0, lang, 'Für den Morgen danach: Breaks, die durch Garage, Bass Music und Techno wandern. Mein eigener Mix.'),
    'Earth from Space': figure('esa', 1004, 753,
      'Satellitenbild von Black Rock City in der Wüste Nevadas, ein Bogen aus Straßen um ein offenes Zentrum',
      'Black Rock City aus dem Orbit während Burning Man 2024. Der Bogen der Straßen und das offene Zentrum, in dem der Man steht, sind aus dem All zu sehen. Enthält veränderte Copernicus-Sentinel-Daten (2024), bearbeitet von der ESA.'),
    '747 Art Car': figure('art-car-747', 1200, 699,
      'Das Art Car 747, ein zu einem Mutant Vehicle umgebauter Rumpf einer Boeing 747, auf der Playa bei Burning Man',
      'Die 747 von Big Imagination, eines der genehmigten Mutant Vehicles, die im Schritttempo über die Playa fahren. Foto: Steve Jurvetson, CC BY 2.0.'),
    'Robot Heart, Peretz': figure('robot-heart', 1200, 799,
      'Das Art Car von Robot Heart auf der Playa bei Burning Man, ein Bus mit einem großen leuchtenden Herz obendrauf',
      'Der Bus von Robot Heart auf der Playa. Seine Sets laufen von der Mitte der Nacht bis weit nach Sonnenaufgang. Foto: Peretz Partensky, CC BY 2.0.'),
    '1987 poster': figure('poster-1987', 345, 450,
      'Plakat für Burning Man 1987 am Baker Beach, San Francisco',
      'Das Plakat für das zweite Feuer, 1987, noch am Baker Beach in San Francisco, drei Jahre vor dem Umzug in die Wüste.',
      'archive-image'),
    'XwK7sA9PuCE': youtube('XwK7sA9PuCE', 'Lee Burridge, Robot Heart, Burning Man 2019, auf dem YouTube-Kanal von Robot Heart'),
    'MNkApftw_iM': youtube('MNkApftw_iM', 'YAMAGUCCI, Mayan Warrior, Burning Man 2025, auf dem YouTube-Kanal von Mayan Warrior'),
    'S7OBT3kQAHQ': articleVideoCollection({
      lang: 'de',
      label: 'Burning Man 2025, zwei Camps',
      description: 'Zwei Sets von Burning Man 2025, eines aus jedem Camp oben: Lee Burridges Sonnenaufgang am Samstag bei Robot Heart und John Summit auf Mayan Warrior. Lange Aufnahmen, gemacht für die Stunden, die niemand plant.',
      items: [
        articleVideoCard({youtubeId: 'S7OBT3kQAHQ', genre: 'Robot Heart, 2025', artist: 'Lee Burridge', title: 'Live von Robot Heart, Burning Man 2025'}),
        articleVideoCard({youtubeId: 'd8zUK6nAbr8', genre: 'Mayan Warrior, 2025', artist: 'John Summit', title: 'Mayan Warrior, Burning Man 2025'})
      ]
    }),
    'Tabelle: attendance': articleTable({
      headers: ['Jahr', 'Besucher', 'Was geschah'],
      rows: [
        ['1986', '35', 'Erstes Feuer, Baker Beach, San Francisco'],
        ['2019', '78.850', 'Der Höchststand'],
        ['2020', 'keine', 'Wegen der Pandemie abgesagt, die erste Absage'],
        ['2021', 'keine', 'Erneut abgesagt'],
        ['2023', '74.126', 'Regen überflutet die Playa am Labor-Day-Wochenende'],
        ['2024', '69.141', 'Zum ersten Mal seit 2011 nicht ausverkauft'],
        ['2025', '72.181', '']
      ].map(row => row.map(escapeHtml))
    }),
    // The English page appends this table to its introduction in the
    // generator; here the draft places it, so it renders in the same spot.
    'Tabelle: Vergleich': articleTable({
      headers: ['Was man von einem Festival erwartet', 'Wie es bei Burning Man ist'],
      rows: [
        ['Ein zentrales Line-up', 'Kein Line-up für die ganze Veranstaltung; Camps und Art Cars programmieren ihre eigene Musik'],
        ['Eine Hauptbühne', 'Keine Hauptbühne; der Sound ist über die Stadt verteilt'],
        ['Stände für Essen und Getränke', 'Die Teilnehmer bringen mit, was sie brauchen; verkauft wird nur weniges Notwendige'],
        ['Ein Publikum, das eine Produktion ansieht', 'Die Teilnehmer bauen Camps, Kunst, Dienste und Veranstaltungen'],
        ['Ein fester Veranstaltungsort', 'Black Rock City wird in der Wüste Nevadas gebaut und nach der Veranstaltung abgetragen'],
        ['Abreise nach dem letzten Act', 'Die Stadt gipfelt im Feuer des Man und des Temple und verschwindet dann']
      ].map(row => row.map(escapeHtml))
    })
  }),

  sources: [
    {href: 'https://burningman.org/black-rock-city/preparation/first-timers-guide/', label: 'Burning Man Project: First-Timers\' Guide'},
    {href: 'https://burningman.org/about/10-principles/', label: 'Burning Man Project: Die zehn Prinzipien von Burning Man'},
    {href: 'https://burningman.org/black-rock-city/preparation/infrastructure/sound-policy/', label: 'Burning Man Project: Sound Policy in Black Rock City'},
    {href: 'https://journal.burningman.org/2023/08/black-rock-city/building-brc/sound-policy-update/', label: 'Burning Man Journal: Sound Policy Update'},
    {href: 'https://survival.burningman.org/city-infrastructure/on-playa-resources/', label: 'Burning Man Survival Guide 2026: On-Playa Resources'},
    {href: 'https://burningman.org/podcast/return-to-black-rock-city/', label: 'Burning Man Project: Return to Black Rock City'},
    {href: 'https://survival.burningman.org/survival-health-and-safety/consent-and-sexual-misconduct/', label: 'Burning Man Survival Guide 2026: Consent and Sexual Misconduct'},
    {href: 'https://burningman.org/black-rock-city/preparation/playa-living/weather/', label: 'Burning Man Project: Wetter'},
    {href: 'https://burningman.org/black-rock-city/black-rock-city-2026/2026-camps/', label: 'Burning Man Project: Camps 2026'},
    {href: 'https://burningman.org/black-rock-city/ticketing-information/', label: 'Burning Man Project: Ticketinformationen'},
    {href: 'https://burningman.org/black-rock-city/bring-your-art/art-grants-programs/temple/brc-temple-grant-history/', label: 'Burning Man Project: Geschichte und Bedeutung des Temple'},
    {href: 'https://journal.burningman.org/2021/11/black-rock-city/tales-from-the-playa/burning-mans-first-sound-camp/', label: 'Burning Man Journal: Meet the DJs Who Started Burning Man\'s First Sound Camp'},
    {href: 'https://journal.burningman.org/2015/07/philosophical-center/tenprinciples/whats-actually-going-on-with-dance-music-at-burning-man/', label: 'Burning Man Journal: What\'s Actually Going On with Dance Music at Burning Man'},
    {href: 'https://journal.burningman.org/2024/01/black-rock-city/leaving-no-trace/2023-moop-map/', label: 'Burning Man Journal: Leaving No Trace 2023, the MOOP Map'},
    {href: 'https://journal.burningman.org/2026/09/news/official-announcements/participant-passes-away-at-2026-burning-man-event/', label: 'Burning Man Journal: Participants Pass Away at 2026 Burning Man Event'},
    {href: 'https://www.billboard.com/music/music-news/burning-man-robot-heart-george-mueller-geo-founder-died-9630680/', label: 'Billboard: How Burning Man\'s Famed Robot Heart Camp Is Carrying on After the Death of Founder George Mueller'},
    {href: 'https://www.billboard.com/music/music-news/mayan-warrior-fire-interview-burning-man-art-car-1235398142/', label: 'Billboard: Burning Man\'s Mayan Warrior Art Car Destroyed in Fire'},
    {href: 'https://edmallday.com/mayan-warrior-is-pausing-its-art-car-at-burning-man-2026/', label: 'EDM All Day: Mayan Warrior Is Pausing Its Art Car at Burning Man 2026'},
    {href: 'https://en.wikipedia.org/wiki/Burning_Man', label: 'Wikipedia: Burning Man'},
    {href: 'https://en.wikipedia.org/wiki/Burning_Man_2023', label: 'Wikipedia: Burning Man 2023'}
  ],

  bandcamp: {
    description: 'Burning Man hat kein zentrales Festivalprogramm; Camps und die Crews der Art Cars programmieren die Musik selbst. Das hier ist meine, von der Seite der Breaks und des Bass. Wer einen Track kauft, unterstützt meine Arbeit direkt.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks von thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 von thecatrave'}
    ]
  }
};
