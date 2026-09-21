// German Untold guide. Structure and facts from the English page
// (untold-draft.md, untold-research.md).
//
// German keywords, measured 2026-09-17 (keywords/de-untold.json):
// untold festival 1,100 a month, untold 1,100, untold festival 2026 250,
// untold 2026 200, untold 2025 100, untold festival 2025 90.
//
// The bare word "untold" in Germany mostly belongs to other things: studio
// untold (a clothing label, 9,400), dracula untold (a film, 6,200), club de
// nuit untold (a perfume). Only the phrase with "festival" is this page's, and
// the title carries it rather than the bare brand.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, articleYoutubeEmbed, ownTrackListening
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption, className = 'wide-archive-image') => articleFigure({
  src: `img/untold/${name}-${width}.webp`,
  srcset: `img/untold/${name}-320.webp 320w, img/untold/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className
});

export default {
  lang: 'de',
  name: 'de-untold',
  file: 'de/untold-festival.html',
  draft: 'de/untold-draft.md',
  canonical: 'https://thecatrave.com/de/untold-festival',
  englishPath: '/untold-festival',
  ogImage: 'https://thecatrave.com/img/og/untold.jpg',
  bodyClass: 'article-page untold-page',

  title: 'Untold Festival 2027: Termine, Ort, Größe und Musik',
  description: 'Das Untold Festival läuft jeden August in Cluj-Napoca in Siebenbürgen. Termine 2027, Ort, Besucherzahlen, Veranstalter und welche Musik dort läuft.',
  datePublished: '2026-09-17',
  dateModified: '2026-09-17',
  dateLabel: '17. September 2026',

  heroKicker: 'Untold',
  heroTitle: 'Untold Festival',
  deck: 'Vier Tage jeden August in einem Stadion und einem Park in Siebenbürgen. Wann Untold 2027 stattfindet, wo es liegt, wie groß es ist, wer es betreibt und was neben der Hauptbühne läuft.',
  answerLabel: 'Was ist das Untold Festival',
  breadcrumbName: 'Untold Festival',

  answerSection: 'Antwort',
  introSection: 'Einleitung',
  introTitle: 'Ein Festival für ein Titeljahr gebaut.',
  faqSection: 'FAQ',
  faqLabel: 'Häufige Fragen',
  faqTitle: 'Häufige Fragen zum Untold Festival.',
  ownSetAfter: 'history',

  sections: [
    {id: 'untold-2027', heading: 'Untold 2027: Termine und die Star Edition', title: 'Untold 2027: Termine und die Star Edition.'},
    {id: 'where', heading: 'Wo Untold stattfindet', title: 'Wo Untold stattfindet.', subsections: ['beyond-cluj']},
    {id: 'how-big', heading: 'Wie groß Untold ist', title: 'Wie groß Untold ist.'},
    {id: 'history', heading: 'Eine kurze Geschichte, und wer Untold betreibt', title: 'Eine kurze Geschichte, und wer Untold betreibt.'},
    {id: 'famous', heading: 'Warum Untold berühmt ist', title: 'Warum Untold berühmt ist.'},
    {id: 'music', heading: 'Welche Musik wirklich läuft', title: 'Welche Musik wirklich läuft.', kicker: 'Die Musik'},
    {id: 'from-home', heading: 'Untold von zu Hause hören', title: 'Untold von zu Hause hören.'}
  ],

  media: ({lang}) => ({
    // The owner's own music inside the text (owner, 2026-09-21: Berlin Race
    // 1909 on the German pages, Dégénération on the French, and art deco with
    // late summer cloud dance in the drum and bass guides).
    'thecatrave berlin-race-1909': ownTrackListening('berlin-race-1909', 'Nicht das, was auf den großen Bühnen läuft: gebrochene Beats im Hall des Dub-Techno. Mein eigener Track, benannt nach Berlin.', lang),
    'Cluj-Napoca Cluj Arena 1': figure('cluj-arena', 1200, 799,
      'Die Cluj Arena von innen, ein ovales Fußballstadion mit geschwungenem Dach über grauen Sitzen, grünem Rasen und einer Laufbahn, unter blauem Himmel',
      'Die Cluj Arena, das Fußballstadion mit 30.355 Plätzen, in dem die Hauptbühne von Untold steht, an einem gewöhnlichen Tag im September 2014. Foto: Валерий Дед, CC BY 3.0.'),
    'Untold Festival, main stage': figure('main-stage-2015', 960, 407,
      'Ein weites Nachtpanorama der Cluj Arena beim Untold 2015, Rasen und alle Ränge voll, links außen die beleuchtete Hauptbühne',
      'Die Hauptbühne in der Cluj Arena beim ersten Untold im Jahr 2015, Rasen und Ränge voll. Foto: Travelcristi, CC BY-SA 4.0.'),
    'Untold Festival, RaveNationCZ': figure('wolf-stage-2018', 1200, 900,
      'Die Spitze der Untold-Hauptbühne im Jahr 2018, zwei riesige bemalte Wolfsköpfe, einer blau, einer rosa, über einem verzierten goldenen Bogen vor klarem Himmel',
      'Die Hauptbühne im Jahr 2018, der Ausgabe, die das Festival Wolf Spirit nannte. Foto: RaveNationCZ, CC BY-SA 4.0.'),
    'Untold2019 main stage': figure('main-stage-2019', 1200, 900,
      'Dichtes Publikum mit erhobenen Handylichtern vor der violett-goldenen Untold-Hauptbühne bei Nacht im Jahr 2019, dahinter die vollen Ränge des Stadions',
      'Die Hauptbühne bei Nacht im Jahr 2019, der Ausgabe The Codex of Magic, dahinter die vollen Ränge des Stadions. Foto: VladRusuRomania, CC BY-SA 4.0.'),
    'Untold2019 fans': figure('fans-flag-2019', 1200, 560,
      'Eine Gruppe von Festivalbesuchern mit einer rumänischen Flagge vor der Hauptbühne von Untold 2019, bei Tageslicht',
      'Festivalbesucher mit einer rumänischen Flagge vor der Hauptbühne 2019. Foto: VladRusuRomania, CC BY-SA 4.0.'),
    'o1u2sT8ah58': articleYoutubeEmbed({
      src: 'https://www.youtube-nocookie.com/embed/o1u2sT8ah58',
      title: 'Offizieller Aftermovie des UNTOLD Festivals 2018, auf dem YouTube-Kanal von UNTOLD'
    }),
    'rk3SYpd5HSc': articleYoutubeEmbed({
      src: 'https://www.youtube-nocookie.com/embed/rk3SYpd5HSc',
      title: 'Techno-Set von Pan-Pot bei Untold 2018, auf dem YouTube-Kanal von Mixmag'
    }),
    'DjQCkSSblIk': articleVideoCollection({
      lang: 'de',
      label: 'Untold, die meistgesehenen Sets',
      description: 'Das fünfeinhalbstündige Hauptbühnen-Set von Armin van Buuren aus 2017, das meistgesehene Untold-Set auf irgendeinem Kanal, und das Headline-Set von Steve Aoki aus der September-Ausgabe 2021 nach der Pandemie.',
      items: [
        articleVideoCard({youtubeId: 'DjQCkSSblIk', genre: 'Untold, 2017', artist: 'Armin van Buuren', title: 'Live beim Untold Festival 2017'}),
        articleVideoCard({youtubeId: '402OrPvfYlU', genre: 'Untold, 2021', artist: 'Steve Aoki', title: 'Headline-Set bei Untold 2021'})
      ]
    }),
    'Tabelle: Besucherzahlen': articleTable({
      headers: ['Jahr', 'Termine', 'Eintritte'],
      rows: [
        ['2015', '30. Juli bis 2. August', '240.000'],
        ['2016', '4. bis 7. August', '300.000'],
        ['2017', '3. bis 6. August', '340.000'],
        ['2018', '2. bis 5. August', 'mehr als 355.000'],
        ['2019', '1. bis 4. August', '370.000'],
        ['2020', '', 'Wegen der Pandemie abgesagt'],
        ['2021', '9. bis 12. September', '265.000'],
        ['2022', '4. bis 7. August', '360.000'],
        ['2023', '3. bis 6. August', '420.000'],
        ['2024', '8. bis 11. August', '427.000'],
        ['2025', '7. bis 10. August', '470.000'],
        ['2026', '6. bis 9. August', 'mehr als 500.000']
      ].map(row => row.map(escapeHtml))
    })
  }),

  // The English page's sources, URL for URL, with translated labels.
  sources: [
    {href: 'https://en.wikipedia.org/wiki/Untold_Festival', label: 'Wikipedia: Untold Festival (englisch)'},
    {href: 'https://ro.wikipedia.org/wiki/Untold_Festival', label: 'Wikipedia: Untold Festival (rumänisch)'},
    {href: 'https://en.wikipedia.org/wiki/Cluj_Arena', label: 'Wikipedia: Cluj Arena'},
    {href: 'https://en.wikipedia.org/wiki/BTarena', label: 'Wikipedia: BTarena'},
    {href: 'https://web.archive.org/web/20230205200231/https://republica.ro/cum-a-devenit-romania-cool-pentru-cei-mai-mari-dj-ai-lumii-fondatorul-untold-despre-povestea-nespusa-a', label: 'Republica: Interview mit Bogdan Buta, Gründer von UNTOLD (rumänisch, archiviert)'},
    {href: 'https://news.pollstar.com/2026/08/10/untold-festival-romania-counts-more-than-500000-visitors-across-four-days/', label: 'Pollstar: Untold zählt mehr als 500.000 Besucher an vier Tagen'},
    {href: 'https://untold.com/', label: 'UNTOLD: offizielle Seite'},
    {href: 'https://tickets.untold.com/?_lang=en', label: 'UNTOLD: offizieller Ticketshop für 2027'},
    {href: 'https://www.untold.com/info/547d8741-5739-485b-a1a4-85fb0552f93c', label: 'UNTOLD: offizielle Bedingungen für das Festival 2027'},
    {href: 'https://untold.com/news/c313b7e0-60c6-4968-a63e-44126e59a43c', label: 'UNTOLD: offizielle Festivalgeschichte und Besucherzahlen'},
    {href: 'https://invest.untold.com/', label: 'UNTOLD: Investorenseite und Führung'},
    {href: 'https://djmag.com/top100festivals/2026/3/untold-festival', label: 'DJ Mag: Untold Festival, Top 100 Festivals 2026'},
    {href: 'https://djmag.com/news/armin-van-buuren-shares-full-seven-hour-untold-festival-set-watch', label: 'DJ Mag: Armin van Buuren veröffentlicht sein siebenstündiges Untold-Set'},
    {href: 'https://www.arminvanbuuren.com/videos/armin-van-buuren-live-at-untold-festival-2017-55-hours-set/', label: 'Armin van Buuren: Live at Untold Festival 2017 (5,5 Stunden)'},
    {href: 'https://www.digi24.ro/stiri/actualitate/evenimente/curtea-de-conturi-untold-finantat-ilegal-de-autoritati-542323', label: 'Digi24: Rechnungshof, UNTOLD rechtswidrig von Behörden finanziert (rumänisch)'},
    {href: 'https://www.researchgate.net/publication/335778193_The_UNTOLD_story_Event_tourism%27s_negative_impact_on_residents%27_community_life_and_well-being', label: 'Moisescu u. a.: The UNTOLD story, Worldwide Hospitality and Tourism Themes, 2019'}
  ],

  bandcamp: {
    description: 'Die Techno- und Trance-Bühnen von Untold liegen weit von den Breaks entfernt, aus denen meine eigene Musik kommt, aber beide stammen aus demselben Rave. Wer einen Track kauft, unterstützt meine Arbeit direkt.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks von thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 von thecatrave'}
    ]
  }
};
