// German Sónar guide. Structure and facts from the English page
// (sonar-draft.md, sonar-research.md, build-sonar-article.mjs); the French
// translation (content/fr/sonar.mjs) came first.
//
// German keywords (keywords/de-sonar.json): sonar festival 350 a month in
// Germany, traffic potential 200 (TRANSLATION-RESEARCH.md, stage 1). The
// wording was checked in the Bing de-DE results on 2026-09-23 (Google answered
// with a bot check), no Ahrefs units spent: de.wikipedia's "Sónar" ranks,
// German result titles write "Sónar Festival Barcelona" and "Sónar Festival
// 2027", and the related searches add "off sonar" and "sonar festival
// tickets". German searchers drop the accent, as the English page's own
// questions do, so the unaccented form appears where the reader's question is
// quoted.
//
// The images are the English guide's, in img/sonar/, with translated captions;
// see home-articles.mjs for why a translation may reuse them.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, articleYoutubeEmbed, ownTrackListening
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption, className = 'wide-archive-image') => articleFigure({
  src: `img/sonar/${name}-${width}.webp`,
  srcset: `img/sonar/${name}-320.webp 320w, img/sonar/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className
});

const youtube = (id, label) => articleYoutubeEmbed({
  src: `https://www.youtube-nocookie.com/embed/${id}`,
  title: label
});

export default {
  lang: 'de',
  name: 'de-sonar',
  file: 'de/sonar-festival-barcelona.html',
  draft: 'de/sonar-draft.md',
  canonical: 'https://thecatrave.com/de/sonar-festival-barcelona',
  englishPath: '/sonar-festival-barcelona',
  ogImage: 'https://thecatrave.com/img/og/sonar.jpg',
  bodyClass: 'article-page sonar-page',

  title: 'Sónar Festival Barcelona 2027: Termine, Geschichte, Musik',
  description: 'Was Sónar ist, wo es in Barcelona stattfindet, wie aus 6.000 Besuchern 1994 heute 150.000 wurden, wem es gehört, OFFSónar und die Termine für 2027.',
  datePublished: '2026-09-23',
  dateModified: '2026-09-23',
  dateLabel: '23. September 2026',

  heroKicker: 'Sónar',
  heroTitle: 'Sónar Festival Barcelona',
  deck: 'Drei Tage jeden Juni in Barcelona seit 1994, bei Tag und bei Nacht. Wo es stattfindet, wie groß es geworden ist, wem es heute gehört und wie es klingt.',
  answerLabel: 'Was ist Sónar',
  breadcrumbName: 'Sónar Festival Barcelona',

  answerSection: 'Antwort',
  introSection: 'Einleitung',
  introTitle: 'Ein Festival für fortgeschrittene Musik.',
  faqSection: 'FAQ',
  faqLabel: 'Häufige Fragen',
  faqTitle: 'Häufige Fragen zu Sónar.',
  ownSetAfter: 'history',

  sections: [
    {id: 'dates', heading: 'Sónar 2027: Termine', title: 'Sónar 2027: Termine.'},
    {id: 'where', heading: 'Wo findet das Sónar Festival in Barcelona statt?', title: 'Wo findet das Sónar Festival in Barcelona statt?', subsections: ['by-day-by-night', 'sonar-d']},
    {id: 'how-big', heading: 'Wie groß ist Sónar?', title: 'Wie groß ist Sónar?'},
    {id: 'history', heading: 'Eine kurze Geschichte von Sónar, und wem es gehört', title: 'Eine kurze Geschichte von Sónar, und wem es gehört.', subsections: ['around-the-world']},
    {id: 'music', heading: 'Wofür Sónar bekannt ist: die Musik', title: 'Wofür Sónar bekannt ist: die Musik.', kicker: 'Die Musik'},
    {id: 'offsonar', heading: 'OFFSónar und die Sónar Week', title: 'OFFSónar und die Sónar Week.'},
    {id: 'from-home', heading: 'Zum Reinhören', title: 'Zum Reinhören.'}
  ],

  media: ({lang}) => ({
    // The owner's own music inside the text (owner, 2026-09-21: Berlin Race
    // 1909 on the German pages, Dégénération on the French, and art deco with
    // late summer cloud dance in the drum and bass guides).
    'thecatrave berlin-race-1909': ownTrackListening('berlin-race-1909', 'Nicht das, was auf den großen Bühnen läuft: gebrochene Beats im Hall des Dub-Techno. Mein eigener Track, benannt nach Berlin.', lang),
    'SonarVillage at Fira Montjuïc': figure('sonar-by-day-2016', 1200, 801,
      'Ein Publikum füllt die Freiluftbühne SonarVillage auf der Fira Montjuïc in der Nachmittagssonne, dahinter der Palau Nacional mit seiner Kuppel auf dem Hügel',
      'SonarVillage auf der Fira Montjuïc bei Sónar by Day im Juni 2016, unterhalb des Palau Nacional. Das Tagesprogramm verließ dieses Gelände 2026. Foto: Nachetere, CC BY-SA 4.0.'),
    'Sónar+D at Llotja de Mar': figure('sonar-d-2026', 1200, 675,
      'Ein dunkler Steinsaal mit Bogentür und Schachbrettboden, an einer Seite Menschen an Computern und Mischpulten',
      'Sónar+D in der Llotja de Mar im Juni 2026, im ersten Jahr getrennt von der Musik. Foto: Zblace, CC BY-SA 4.0.',
      'archive-image'),
    'Beastie Boys at Sónar 2007': figure('beastie-boys-2007', 1200, 800,
      'Ad-Rock von den Beastie Boys, in grauem Fedora und gestreiftem Hemd, kniet mit einem Mikrofon auf der Bühne',
      'Ad-Rock von den Beastie Boys bei Sónar im Juni 2007, als das Line-up weit über elektronische Musik hinausreichte. Foto: bakameh, CC BY 2.0.'),
    'Justice at Sónar 2008': figure('justice-2008', 1200, 800,
      'Die beiden Mitglieder von Justice auf einer Holzbank vor einer Wand mit bemalten Azulejos',
      'Justice, das französische Duo, in Barcelona für Sónar 2008. Foto: Gerard Romans Camps, CC BY 2.0.'),
    'Moodymann at Sónar 2010': figure('moodymann-2010', 1000, 669,
      'Moodymann mit Sonnenbrille und weißer Kopfbedeckung an einem DJ-Tisch, hinter ihm ein Banner von Sónar 2010',
      'Moodymann bei Sónar im Juni 2010, hinter einem Tisch der Red Bull Music Academy. Foto: acidpolly, CC BY-SA 2.0.'),
    '_YPbpWeIx2Q': youtube('_YPbpWeIx2Q', 'Paul Kalkbrenner bei Sónar Lisboa 2024, auf dem YouTube-Kanal von DJ Mag'),
    'ZnPUW6XJ--8': youtube('ZnPUW6XJ--8', 'Kerri Chandler live auf der Bühne von Resident Advisor bei Sónar, Barcelona, auf dem YouTube-Kanal von Resident Advisor'),
    'IeKlNAuzW8A': youtube('IeKlNAuzW8A', 'Adam Beyer b2b Enrico Sangiuliano bei Drumcode, Off Sónar, Barcelona, auf dem YouTube-Kanal von DJ Mag'),
    'JaiCMTWjkJI': articleVideoCollection({
      lang: 'de',
      label: 'Sónar auf dem SonarClub',
      description: 'Ben Böhmer live und DEX EFX X0X von Richie Hawtin, in derselben Freitagnacht auf dem SonarClub bei Sónar 2024, gefilmt von ARTE Concert.',
      items: [
        articleVideoCard({youtubeId: 'JaiCMTWjkJI', genre: 'SonarClub, 2024', artist: 'Ben Böhmer', title: 'Live bei Sónar 2024'}),
        articleVideoCard({youtubeId: 'kECNP2JMqC0', genre: 'SonarClub, 2024', artist: 'Richie Hawtin', title: 'DEX EFX X0X, Sónar 2024'})
      ]
    }),
    // As in the English generator: Wikipedia for 1994 to 2018, Mixmag Italy
    // for 2025, We Rave You for 2026.
    'Tabelle: Besucherzahlen': articleTable({
      headers: ['Jahr', 'Ort in der Nacht', 'Besucher'],
      rows: [
        ['1994', 'Apolo', 'Rund 6.000'],
        ['1995', 'Poble Espanyol', 'Rund 12.000'],
        ['1996', 'Poble Espanyol', '18.000'],
        ['1997', 'Sporthalle Mar Bella', '28.000'],
        ['1998', 'Sporthalle Mar Bella', '38.000'],
        ['1999', 'Sporthalle Mar Bella', '43.000'],
        ['2000', 'Sporthalle Mar Bella', 'Mehr als 53.000'],
        ['2013', 'Fira Gran Via', '121.000'],
        ['2017', 'Fira Gran Via', '123.000'],
        ['2018', 'Fira Gran Via', '126.000, aus 119 Ländern'],
        ['2025', 'Fira Gran Via', '161.000, davon 42.000 bei Veranstaltungen der Sónar Week'],
        ['2026', 'Fira Gran Via, Tag und Nacht', 'Rund 150.000']
      ].map(row => row.map(escapeHtml))
    })
  }),

  // The English page's sources, URL for URL, with translated labels.
  sources: [
    {href: 'https://en.wikipedia.org/wiki/S%C3%B3nar', label: 'Wikipedia: Sónar (englisch)'},
    {href: 'https://sonar.es/en', label: 'Sónar: offizielle Seite (Termine 2027)'},
    {href: 'https://sonar.es/about/what-is-sonar', label: 'Sónar: What is Sónar'},
    {href: 'https://sonar.es/en/news/lineup-completo-sonar-2026', label: 'Sónar: das komplette Line-up von Sónar 2026, Bühne für Bühne'},
    {href: 'https://sonar.es/en/tickets', label: 'Sónar: Tickets'},
    {href: 'https://sonar.es/en/news/revive-cinco-grandes-conciertos-del-viernes-por-la-noche-en-sonarclub', label: 'Sónar: fünf große Konzerte der Freitagnacht bei Sónar by Night mit ARTE noch einmal erleben'},
    {href: 'https://djmag.com/news/sonar-founders-step-away-festival-amid-superstructkkr-ownership-controversy', label: 'DJ Mag: Sónar founders step away from festival amid Superstruct/KKR ownership controversy'},
    {href: 'https://mixmagit.com/read/sonar-2025-draws-161-000-attendees-and-announces-major-format-change-for-2026-news', label: 'Mixmag Italy: Sónar 2025 draws 161,000 attendees and announces major format change for 2026'},
    {href: 'https://weraveyou.com/2026/06/sonar-2026-recap/', label: 'We Rave You: Sónar 2026 recap'},
    {href: 'https://www.deephouseamsterdam.com/25-years-sonar-report/', label: 'Deep House Amsterdam: Report, 25 Years Of Sonar'},
    {href: 'https://ra.co/news/35265', label: 'Resident Advisor: Sónar heads to Istanbul, Hong Kong in 2017'},
    {href: 'https://thequietus.com/news/sonar-inaugural-lisbon-edition-2022/', label: 'The Quietus: Sónar to stage inaugural Lisbon event in 2022'},
    {href: 'https://offsonar.co/', label: 'OFFSónar: offizielle Seite'}
  ],

  bandcamp: {
    description: 'Sónar hat mehr als dreißig Jahre lang neue elektronische Musik vor Menschen gestellt, die zum Zuhören kamen. Meine ist Breakbeat, zu Hause gemacht. Wer einen Track kauft, unterstützt meine Arbeit direkt.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks von thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 von thecatrave'}
    ]
  }
};
