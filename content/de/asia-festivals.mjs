// German Asia festivals comparison. Structure, facts, dates and the "not announced"
// labels from the English page (best-electronic-music-festivals-asia-draft.md,
// build-asia-festivals-article.mjs), checked there on 4 and 5 October 2026;
// content/es/asia-festivals.mjs is the structural template.
//
// Wording: "Festivals für elektronische Musik in Asien" carried from the Spanish SERP read ("festivales de música electrónica en Asia").
// The google.de SERP could not be read when this was written (no browser relay), so the
// keywords file holds unmeasured terms.
//
// Maintenance: the dates are the English page's. Change them here and in the draft whenever the
// English page changes them; registered in festival-editions.mjs with the other roundups.
//
// The images are the English page's, in img/asia-festivals/, with translated captions.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, ownSetListening
} from '../../site-components.mjs';

const fig = (name, width, height, alt, caption) => articleFigure({
  src: `img/asia-festivals/${name}-1200.webp`,
  srcset: `img/asia-festivals/${name}-320.webp 320w, img/asia-festivals/${name}-1200.webp 1200w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

const link = ([href, label]) => `<a href="${href}" target="_blank" rel="noopener noreferrer">${label}</a>`;

export default {
  lang: 'de',
  name: 'de-asia-festivals',
  file: 'de/festivals-elektronische-musik-asien.html',
  draft: 'de/asia-festivals-draft.md',
  canonical: 'https://thecatrave.com/de/festivals-elektronische-musik-asien',
  englishPath: '/best-electronic-music-festivals-asia',
  ogImage: 'https://thecatrave.com/img/og/asia-festivals.jpg',
  bodyClass: 'article-page asia-festivals-page',
  minReadingMinutes: 8,

  title: 'Die besten Electro-Festivals in Asien 2027 im Vergleich',
  description: 'Ultra Japan am 18. und 19. September, Wonderfruit, S2O, Sunburn, DWP und Zamna: die besten Electro-Festivals in Asien 2027, mit Terminen und Preisen.',
  datePublished: '2026-10-30',
  dateModified: '2026-10-30',
  dateLabel: '30. Oktober 2026',

  heroKicker: 'Festival-Guide 2027',
  heroTitle: 'Die besten Festivals für elektronische Musik in Asien 2027',
  deck: 'Sieben Festivals von Tokio bis Jakarta im Vergleich: wo sie liegen, was sie spielen und was sie kosten, mit den bestätigten Terminen für 2027 und den noch offenen.',
  answerLabel: 'Die besten Festivals für elektronische Musik in Asien',
  breadcrumbName: 'Festivals für elektronische Musik in Asien',

  answerSection: 'Antwort',
  introSection: 'Einleitung',
  introTitle: 'Eine Liste zur Reiseplanung.',
  faqSection: 'FAQ',
  faqLabel: 'Häufige Fragen zu Festivals für elektronische Musik in Asien',
  faqTitle: 'Häufige Fragen zu Festivals für elektronische Musik in Asien.',

  sections: [
    {id: 'criteria', heading: 'Nach welchen Kriterien die Liste entstanden ist', title: 'Nach welchen Kriterien die Liste entstanden ist.'},
    {id: 'at-a-glance', heading: 'Die Festivals im Überblick', title: 'Die Festivals im Überblick.'},
    {id: 'ultra-japan', heading: 'Ultra Japan, Tokio', title: 'Ultra Japan, Tokio.'},
    {id: 'wonderfruit', heading: 'Wonderfruit, Thailand', title: 'Wonderfruit, Thailand.'},
    {id: 's2o', heading: 'S2O Songkran, Bangkok', title: 'S2O Songkran, Bangkok.'},
    {id: 'sunburn', heading: 'Sunburn Festival, Mumbai', title: 'Sunburn Festival, Mumbai.'},
    {id: 'dwp', heading: 'Djakarta Warehouse Project, Jakarta', title: 'Djakarta Warehouse Project, Jakarta.'},
    {id: 'ultra-korea', heading: 'Ultra Korea, Seoul', title: 'Ultra Korea, Seoul.'},
    {id: 'zamna', heading: 'Zamna Thailand', title: 'Zamna Thailand.'},
    {id: 'by-country', heading: 'Festivals für elektronische Musik in Thailand, Japan und Indien', title: 'Festivals für elektronische Musik in Thailand, Japan und Indien.',
      subsections: ['thailand', 'japan', 'india']},
    {id: 'not-listed', heading: 'Was nicht auf dieser Liste steht, und warum', title: 'Was nicht auf dieser Liste steht, und warum.'}
  ],

  media: ({lang}) => ({
    'Tabelle: glance': articleTable({label: 'Festivals für elektronische Musik in Asien im Vergleich, 2027',
      headers: ['Festival', 'Wo', 'Letzte oder nächste Ausgabe', '2027', 'Sound'],
      rows: [
        ['Ultra Japan', 'Tokio', '19. und 20. September 2026 (gelaufen)', '18. und 19. September 2027', 'EDM, House, Techno'],
        ['Wonderfruit', 'Chonburi, Thailand', '3. bis 7. Dezember 2026', 'Nicht angekündigt', 'House, Techno, Live-Acts, Kunst'],
        ['S2O Songkran', 'Bangkok', '11. bis 13. April 2026 (gelaufen)', 'Nicht angekündigt', 'EDM der großen Bühne, Wasser'],
        ['Sunburn', 'Mumbai', '18. und 19. Dezember 2026', 'Nicht angekündigt', 'Kommerzieller EDM'],
        ['Djakarta Warehouse Project', 'Jakarta', '11. bis 13. Dezember 2026', 'Nicht angekündigt', 'EDM, House, Techno'],
        ['Ultra Korea', 'Seoul', '20. September 2025 (zuletzt gelistet)', 'Keine Angabe', 'EDM'],
        ['Zamna Thailand', 'Phuket', '21. Februar 2026 (Koh Samui, gelaufen)', 'Januar 2027 (die Termine des Veranstalters widersprechen sich)', 'House, Techno']
      ]}),
    'wonderfruit': fig('wonderfruit-2015', 1200, 900,
      'Ein Tor mit dem Schriftzug A Taste of Wonder in der Dämmerung beim Wonderfruit-Festival 2015',
      'Das Tor von Wonderfruit im Dezember 2015, als das Festival noch in Pattaya stattfand. Foto: Sdegennaro, CC BY-SA 4.0.'),
    's2o': fig('s2o-2025', 1200, 800,
      'Die orange beleuchtete S2O-Bühne mit Feuereffekten während eines Sets von Prophecy',
      'Prophecy bei S2O Songkran in Bangkok, 2025. Foto: MikeAlca, CC BY-SA 4.0.'),
    'sunburn': fig('sunburn-goa-2010', 1200, 800,
      'Lichter und eine Bühne bei Nacht auf dem Sunburn Festival in Candolim, Goa',
      'Das Sunburn Festival in Candolim, Goa, am 29. Dezember 2010, als es noch in Goa stattfand. Foto: Vyacheslav Argenberg, CC BY 4.0.'),
    'dwp': fig('dwp-2017', 1200, 800,
      'Garuda Land, die Hauptbühne des Djakarta Warehouse Project, 2017',
      'Garuda Land, die Hauptbühne des Djakarta Warehouse Project, im Dezember 2017. Foto: Ismaya Live, CC BY-SA 4.0.'),
    'ultra-korea-photo': fig('ultra-korea-2015', 1200, 1174,
      'Das Publikum von Ultra Korea 2015 vor der Hauptbühne',
      'Ultra Korea 2015. Foto: Ultrafan123, CC BY-SA 4.0.'),
    'ultra-korea': articleVideoCollection({
      lang, label: 'Ultra Korea von zu Hause',
      description: 'Drei Sets der Afterparty von Ultra Korea 2018 im Hyundai Motor Studio, gefilmt von MIXMIX TV.',
      items: [
        articleVideoCard({youtubeId: 'TX1ksXLgHKA', genre: 'ULTRA KOREA, 2018', artist: 'Deepshower', title: 'Afterparty im Hyundai Motor Studio'}),
        articleVideoCard({youtubeId: '3VavBJPlKYc', genre: 'ULTRA KOREA, 2018', artist: 'Yamada', title: 'Afterparty im Hyundai Motor Studio'}),
        articleVideoCard({youtubeId: 'h4GXgykSLVw', genre: 'ULTRA KOREA, 2018', artist: 'Minimonster', title: 'Afterparty im Hyundai Motor Studio'})
      ]
    }),
    'owner-first': ownSetListening(0, lang),
    'owner-second': ownSetListening(1, lang)
  }),

  sources: [
    {html: `Offizielle Seiten: ${[
      ['https://ultrajapan.com', 'Ultra Japan'], ['https://www.wonderfruit.co', 'Wonderfruit'], ['https://s2ofestival.com', 'S2O'], ['https://www.sunburn.in', 'Sunburn'],
      ['https://dwpfest.com', 'DWP'], ['https://ultrakorea.com', 'Ultra Korea'], ['https://ultrasingapore.com', 'Ultra Singapore'], ['https://zamnafestival.com/events/zamna-on-the-beach-Thailand', 'Zamna On The Beach Thailand']
    ].map(link).join(', ')}.`},
    {html: `Tickets und Termine für 2027: ${link(['https://ultrajapan.com/tickets-2027', 'offizielle Tickets von Ultra Japan'])} und ${link(['https://zamnafestival.com/events/zamna-phuket', 'offizielle Eventseite von Zamna Phuket'])}.`},
    {html: `Line-up und Preise von Ultra Japan 2026: ${link(['https://popii-land.jp/en/ultra-japan-2026-first-lineup-peggy-gou-en/', 'Popii Land'])} (auf Englisch).`},
    {html: `Erste Künstlerwelle von Wonderfruit: ${link(['https://likdo.asia/magazine/wonderfruit-2026-announces-first-wave-of-artist-lineup/', 'LIKDO'])} (auf Englisch).`},
    {html: `S2O 2026: ${link(['https://www.eventpop.me/e/87299', 'Ticketseite von Eventpop'])}, ${link(['https://edm-addicts.com/news/s2o-songkran-music-festival-returns-april-11-13-2026', 'EDM Addicts'])} und ${link(['https://go2-thailand.com/blog/s2o-songkran-music-festival-2026-bangkok-edm-water-party/', 'Übersicht von Go2Thailand'])} (auf Englisch).`},
    {html: `Sunburn 2026: ${link(['https://sunburn.in/the-19th-edition-of-sunburn-festival-moves-to-mahalaxmi-racecourse-with-a-reimagined-two-day-format/', 'die offizielle Ankündigung'])} und ${link(['https://www.esquireindia.co.in/culture/books-and-music/sunburn-festival-2026-mumbai-dates-venue-tickets-lineup-and-everything-you-need-to-know', 'Esquire India'])} (auf Englisch).`},
    {html: `Geschichte von DWP, Besucherzahl 2025 und Namen 2026: ${link(['https://www.edmtunes.com/2026/09/djakarta-warehouse-project-reveals-first-names-for-2026/', 'EDMTunes'])} (auf Englisch).`},
    {html: `Zamna Phuket 2027: ${link(['https://iflyer.tv/en/article/2026/05/29/zamna-phuket/', 'iFLYER'])} und ${link(['https://edm-addicts.com/news/zamna-festival-is-coming-to-phuket-in-january-2027-and-here-is-everything-you-need-to-know', 'EDM Addicts'])} (auf Englisch).`},
    {html: `Thailand: ${link(['https://edm-addicts.com/news/808-festival-2026-is-back', '808 Festival, EDM Addicts'])} und ${link(['https://go2-thailand.com/blog/thailand-tomorrowland-pattaya-first-asia-edition-2026/', 'Tomorrowland Thailand, Go2Thailand'])} (auf Englisch).`}
  ],

  bandcamp: {
    description: 'Die Musik, die ich selbst mache. Wer eine Veröffentlichung kauft, unterstützt meine Arbeit direkt.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 von thecatrave'},
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks von thecatrave'}
    ]
  }
};
