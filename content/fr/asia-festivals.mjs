// French Asia festivals comparison. Structure, facts, dates and the "not announced"
// labels from the English page (best-electronic-music-festivals-asia-draft.md,
// build-asia-festivals-article.mjs), checked there on 4 and 5 October 2026;
// content/es/asia-festivals.mjs is the structural template.
//
// Wording: "Festivals de musique électronique en Asie" carried from the Spanish SERP read ("festivales de música electrónica en Asia").
// The google.fr SERP could not be read when this was written (no browser relay), so the
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
  lang: 'fr',
  name: 'fr-asia-festivals',
  file: 'fr/festivals-musique-electronique-asie.html',
  draft: 'fr/asia-festivals-draft.md',
  canonical: 'https://thecatrave.com/fr/festivals-musique-electronique-asie',
  englishPath: '/best-electronic-music-festivals-asia',
  ogImage: 'https://thecatrave.com/img/og/asia-festivals.jpg',
  bodyClass: 'article-page asia-festivals-page',
  minReadingMinutes: 8,

  title: 'Les meilleurs festivals électro en Asie en 2027, comparés',
  description: 'Ultra Japan les 18 et 19 septembre, Wonderfruit, S2O, Sunburn, DWP et Zamna : les meilleurs festivals électro en Asie en 2027, avec dates et prix.',
  datePublished: '2026-10-30',
  dateModified: '2026-10-30',
  dateLabel: '30 octobre 2026',

  heroKicker: 'Guide des festivals 2027',
  heroTitle: 'Les meilleurs festivals de musique électronique en Asie en 2027',
  deck: 'Sept festivals, de Tokyo à Jakarta, comparés par lieu, programmation et prix, avec les dates 2027 confirmées et celles qui ne le sont pas encore.',
  answerLabel: 'Les meilleurs festivals de musique électronique en Asie',
  breadcrumbName: 'Festivals de musique électronique en Asie',

  answerSection: 'Réponse',
  introSection: 'Introduction',
  introTitle: 'Une liste pour choisir son voyage.',
  faqSection: 'FAQ',
  faqLabel: 'Questions fréquentes sur les festivals de musique électronique en Asie',
  faqTitle: 'Questions fréquentes sur les festivals de musique électronique en Asie.',

  sections: [
    {id: 'criteria', heading: 'Comment cette liste a été établie', title: 'Comment cette liste a été établie.'},
    {id: 'at-a-glance', heading: 'Les festivals en un coup d’œil', title: 'Les festivals en un coup d’œil.'},
    {id: 'ultra-japan', heading: 'Ultra Japan, Tokyo', title: 'Ultra Japan, Tokyo.'},
    {id: 'wonderfruit', heading: 'Wonderfruit, Thaïlande', title: 'Wonderfruit, Thaïlande.'},
    {id: 's2o', heading: 'S2O Songkran, Bangkok', title: 'S2O Songkran, Bangkok.'},
    {id: 'sunburn', heading: 'Sunburn Festival, Bombay', title: 'Sunburn Festival, Bombay.'},
    {id: 'dwp', heading: 'Djakarta Warehouse Project, Jakarta', title: 'Djakarta Warehouse Project, Jakarta.'},
    {id: 'ultra-korea', heading: 'Ultra Korea, Séoul', title: 'Ultra Korea, Séoul.'},
    {id: 'zamna', heading: 'Zamna Thaïlande', title: 'Zamna Thaïlande.'},
    {id: 'by-country', heading: 'Festivals de musique électronique en Thaïlande, au Japon et en Inde', title: 'Festivals de musique électronique en Thaïlande, au Japon et en Inde.',
      subsections: ['thailand', 'japan', 'india']},
    {id: 'not-listed', heading: 'Ce qui ne figure pas dans cette liste, et pourquoi', title: 'Ce qui ne figure pas dans cette liste, et pourquoi.'}
  ],

  media: ({lang}) => ({
    'Table: glance': articleTable({label: 'Festivals de musique électronique en Asie comparés, 2027',
      headers: ['Festival', 'Où', 'Dernière ou prochaine édition', '2027', 'Style'],
      rows: [
        ['Ultra Japan', 'Tokyo', 'Les 19 et 20 septembre 2026 (terminé)', 'Les 18 et 19 septembre 2027', 'EDM, house, techno'],
        ['Wonderfruit', 'Chonburi, Thaïlande', 'Du 3 au 7 décembre 2026', 'Pas annoncé', 'House, techno, concerts, art'],
        ['S2O Songkran', 'Bangkok', 'Du 11 au 13 avril 2026 (terminé)', 'Pas annoncé', 'EDM de grande scène, eau'],
        ['Sunburn', 'Bombay', 'Les 18 et 19 décembre 2026', 'Pas annoncé', 'EDM commercial'],
        ['Djakarta Warehouse Project', 'Jakarta', 'Du 11 au 13 décembre 2026', 'Pas annoncé', 'EDM, house, techno'],
        ['Ultra Korea', 'Séoul', '20 septembre 2025 (dernière édition indiquée)', 'Aucune date indiquée', 'EDM'],
        ['Zamna Thaïlande', 'Phuket', '21 février 2026 (Koh Samui, terminé)', 'Janvier 2027 (les dates de l’organisateur se contredisent)', 'House, techno']
      ]}),
    'wonderfruit': fig('wonderfruit-2015', 1200, 900,
      'Une porte portant l’inscription A Taste of Wonder au crépuscule, au festival Wonderfruit de 2015',
      'La porte de Wonderfruit en décembre 2015, quand le festival se tenait encore à Pattaya. Photo : Sdegennaro, CC BY-SA 4.0.'),
    's2o': fig('s2o-2025', 1200, 800,
      'La scène de S2O éclairée en orange, avec des effets de feu, pendant un set de Prophecy',
      'Prophecy à S2O Songkran, à Bangkok, en 2025. Photo : MikeAlca, CC BY-SA 4.0.'),
    'sunburn': fig('sunburn-goa-2010', 1200, 800,
      'Lumières et scène de nuit au Sunburn Festival de Candolim, à Goa',
      'Le Sunburn Festival à Candolim, à Goa, le 29 décembre 2010, quand il se tenait encore à Goa. Photo : Vyacheslav Argenberg, CC BY 4.0.'),
    'dwp': fig('dwp-2017', 1200, 800,
      'Garuda Land, la scène principale du Djakarta Warehouse Project, en 2017',
      'Garuda Land, la scène principale du Djakarta Warehouse Project, en décembre 2017. Photo : Ismaya Live, CC BY-SA 4.0.'),
    'ultra-korea-photo': fig('ultra-korea-2015', 1200, 1174,
      'Le public d’Ultra Korea en 2015 devant la scène principale',
      'Ultra Korea en 2015. Photo : Ultrafan123, CC BY-SA 4.0.'),
    'ultra-korea': articleVideoCollection({
      lang, label: 'Ultra Korea, depuis chez vous',
      description: 'Trois sets de l’after d’Ultra Korea 2018 au Hyundai Motor Studio, filmés par MIXMIX TV.',
      items: [
        articleVideoCard({youtubeId: 'TX1ksXLgHKA', genre: 'ULTRA KOREA, 2018', artist: 'Deepshower', title: 'After au Hyundai Motor Studio'}),
        articleVideoCard({youtubeId: '3VavBJPlKYc', genre: 'ULTRA KOREA, 2018', artist: 'Yamada', title: 'After au Hyundai Motor Studio'}),
        articleVideoCard({youtubeId: 'h4GXgykSLVw', genre: 'ULTRA KOREA, 2018', artist: 'Minimonster', title: 'After au Hyundai Motor Studio'})
      ]
    }),
    'owner-first': ownSetListening(0, lang),
    'owner-second': ownSetListening(1, lang)
  }),

  sources: [
    {html: `Sites officiels, consultés le 4 octobre 2026 : ${[
      ['https://ultrajapan.com', 'Ultra Japan'], ['https://www.wonderfruit.co', 'Wonderfruit'], ['https://s2ofestival.com', 'S2O'], ['https://www.sunburn.in', 'Sunburn'],
      ['https://dwpfest.com', 'DWP'], ['https://ultrakorea.com', 'Ultra Korea'], ['https://ultrasingapore.com', 'Ultra Singapore'], ['https://zamnafestival.com/events/zamna-on-the-beach-Thailand', 'Zamna On The Beach Thailand']
    ].map(link).join(', ')}.`},
    {html: `Billets et dates de 2027, consultés le 5 octobre 2026 : ${link(['https://ultrajapan.com/tickets-2027', 'billetterie officielle d’Ultra Japan'])} et ${link(['https://zamnafestival.com/events/zamna-phuket', 'page officielle de l’événement Zamna Phuket'])}.`},
    {html: `Affiche et prix d’Ultra Japan 2026 : ${link(['https://popii-land.jp/en/ultra-japan-2026-first-lineup-peggy-gou-en/', 'Popii Land'])} (en anglais).`},
    {html: `Première vague d’artistes de Wonderfruit : ${link(['https://likdo.asia/magazine/wonderfruit-2026-announces-first-wave-of-artist-lineup/', 'LIKDO'])} (en anglais).`},
    {html: `S2O 2026 : ${link(['https://www.eventpop.me/e/87299', 'page de billetterie d’Eventpop'])}, ${link(['https://edm-addicts.com/news/s2o-songkran-music-festival-returns-april-11-13-2026', 'EDM Addicts'])} et ${link(['https://go2-thailand.com/blog/s2o-songkran-music-festival-2026-bangkok-edm-water-party/', 'récapitulatif de Go2Thailand'])} (en anglais).`},
    {html: `Sunburn 2026 : ${link(['https://sunburn.in/the-19th-edition-of-sunburn-festival-moves-to-mahalaxmi-racecourse-with-a-reimagined-two-day-format/', 'l’annonce officielle'])} et ${link(['https://www.esquireindia.co.in/culture/books-and-music/sunburn-festival-2026-mumbai-dates-venue-tickets-lineup-and-everything-you-need-to-know', 'Esquire India'])} (en anglais).`},
    {html: `Histoire de DWP, fréquentation 2025 et noms 2026 : ${link(['https://www.edmtunes.com/2026/09/djakarta-warehouse-project-reveals-first-names-for-2026/', 'EDMTunes'])} (en anglais).`},
    {html: `Zamna Phuket 2027 : ${link(['https://iflyer.tv/en/article/2026/05/29/zamna-phuket/', 'iFLYER'])} et ${link(['https://edm-addicts.com/news/zamna-festival-is-coming-to-phuket-in-january-2027-and-here-is-everything-you-need-to-know', 'EDM Addicts'])} (en anglais).`},
    {html: `Thaïlande : ${link(['https://edm-addicts.com/news/808-festival-2026-is-back', '808 Festival, EDM Addicts'])} et ${link(['https://go2-thailand.com/blog/thailand-tomorrowland-pattaya-first-asia-edition-2026/', 'Tomorrowland Thailand, Go2Thailand'])} (en anglais).`}
  ],

  bandcamp: {
    description: 'La musique que je fais moi-même. En acheter une sortie soutient directement mon travail.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 par thecatrave'},
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks par thecatrave'}
    ]
  }
};
