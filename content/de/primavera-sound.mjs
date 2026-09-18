// German Primavera Sound guide. Structure and facts from the English page
// (primavera-sound-draft.md, primavera-sound-research.md,
// build-primavera-sound-article.mjs).
//
// German keywords, measured 2026-09-18 with keywords-explorer-matching-terms,
// country de (keywords/de-primavera-sound.json): primavera sound 700 a month,
// primavera sound barcelona 350, primavera sound porto 90, primavera sound
// festival 60. "primavera sound 2027" is below the 50 filter so far and is
// carried anyway, as on every festival guide, because it is the next edition
// (festival-editions.mjs). The 2026 and 2025 editions and the line-ups are
// rejected in the map: dated.
//
// The images are the English guide's, in img/primavera-sound/, with translated
// captions; see home-articles.mjs for why a translation may reuse them.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, articleYoutubeEmbed
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption, className = 'wide-archive-image') => articleFigure({
  src: `img/primavera-sound/${name}-${width}.webp`,
  srcset: `img/primavera-sound/${name}-320.webp 320w, img/primavera-sound/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className
});

const commonsLink = file =>
  `<a href="https://commons.wikimedia.org/wiki/${encodeURIComponent(`File:${file}`)}" target="_blank" rel="noopener noreferrer">Quelle ↗</a>`;

export default {
  lang: 'de',
  name: 'de-primavera-sound',
  file: 'de/primavera-sound-barcelona.html',
  draft: 'de/primavera-sound-draft.md',
  canonical: 'https://thecatrave.com/de/primavera-sound-barcelona',
  englishPath: '/primavera-sound-barcelona',
  ogImage: 'https://thecatrave.com/img/og/primavera-sound.jpg',
  bodyClass: 'article-page primavera-sound-page',

  title: 'Primavera Sound Barcelona 2027: Termine, Ort und Musik',
  description: 'Primavera Sound Barcelona 2027 läuft vom 3. bis 5. Juni im Parc del Fòrum. Das Gelände am Meer, die Größe, die Musik, Primavera a la Ciutat und Porto.',
  datePublished: '2026-09-18',
  dateModified: '2026-09-18',
  dateLabel: '18. September 2026',

  heroKicker: 'Primavera Sound',
  heroTitle: 'Primavera Sound Barcelona',
  deck: 'Das Hauptprogramm in Barcelona kehrt am 3., 4. und 5. Juni 2027 in den Parc del Fòrum zurück. Hier geht es um das Gelände am Meer, die Größe, die Musik und die Verbindung nach Porto.',
  answerLabel: 'Was ist Primavera Sound',
  breadcrumbName: 'Primavera Sound Barcelona',

  answerSection: 'Antwort',
  introSection: 'Einleitung',
  introTitle: 'Ein Festival, das auf Vielfalt baut.',
  faqSection: 'FAQ',
  faqLabel: 'Häufige Fragen',
  faqTitle: 'Häufige Fragen zu Primavera Sound.',
  ownSetAfter: 'music',

  sections: [
    {id: 'what-is', heading: 'Was ist Primavera Sound?', title: 'Was ist Primavera Sound?'},
    {id: 'dates-location', heading: 'Primavera Sound Barcelona: Termine und Ort', title: 'Primavera Sound Barcelona: Termine und Ort.'},
    {id: 'how-big', heading: 'Wie groß ist Primavera Sound?', title: 'Wie groß ist Primavera Sound?'},
    {id: 'music', heading: 'Welche Musik läuft bei Primavera Sound?', title: 'Welche Musik läuft bei Primavera Sound?', kicker: 'Die Musik'},
    {id: 'a-la-ciutat', heading: 'Primavera a la Ciutat', title: 'Primavera a la Ciutat.'},
    {id: 'porto', heading: 'Primavera Sound Porto', title: 'Primavera Sound Porto.'}
  ],

  media: () => ({
    'Primavera stage crowd': figure('festival-crowd', 1200, 800,
      'Festivalbesucher am Wasser bei Primavera Sound Barcelona 2019 unter klarem blauem Himmel',
      `Das Publikum bei Primavera Sound Barcelona 2019, ringsum das offene Gelände am Wasser. Foto: John Lubbock, CC BY-SA 4.0. ${commonsLink('Primavera stage crowd.jpg')}`,
      'full-bleed'),
    'Created in Barcelona': figure('created-in-barcelona', 1200, 800,
      'Ein nächtliches Publikum bei Primavera Sound, über den Festivalbauten ein leuchtendes Schild mit der Aufschrift Created in Barcelona',
      `Primavera Sound bei Nacht 2019: Das Festival stellt seine Herkunft aus Barcelona in den Vordergrund, auch nachdem sein Publikum international wurde. Foto: John Lubbock, CC BY-SA 4.0. ${commonsLink('Primavera Sound main stages area at night.jpg')}`),
    'Parc del Fòrum beside': figure('parc-forum', 1200, 675,
      'Das große Photovoltaik-Dach und die Betonbauten am Wasser im Parc del Fòrum, dahinter das Mittelmeer',
      `Der Parc del Fòrum ohne Festivalaufbauten: Betonterrassen, das Photovoltaik-Dach und das Mittelmeer. Foto: Pere López Brosa, CC BY-SA 4.0. ${commonsLink('Parc del Fòrum - 20191213 143043.jpg')}`),
    'Peggy Gou at': figure('peggy-gou', 1200, 800,
      'Peggy Gou legt 2019 auf der Ray-Ban-Bühne von Primavera Sound auf, unter violettem und gelbem Licht, vor einem dichten Publikum',
      `Peggy Gou auf der Ray-Ban-Bühne, Primavera Sound Barcelona 2019. Foto: John Lubbock, CC BY-SA 4.0. ${commonsLink('Peggy Gou, Ray-Ban stage.jpg')}`),
    'Samantha Hudson and John Waters': figure('primavera-pro', 1200, 900,
      'Samantha Hudson und John Waters sitzen 2022 im Gespräch auf der Bühne von Primavera Pro',
      `Die Künstlerin Samantha Hudson und der Filmemacher John Waters sprechen 2022 bei Primavera Pro über Musikgeschmack. Foto: Nacaru, CC BY-SA 4.0. ${commonsLink('Samantha Hudson and John Waters in Primavera Pro.jpg')}`),
    'Fontaines D.C. at': figure('porto-stage', 1200, 800,
      'Fontaines D.C. spielen 2025 bei Nacht auf der großen Bühne von Primavera Sound Porto',
      `Fontaines D.C. bei Primavera Sound Porto 2025. Foto: Boredintheevening, CC BY 4.0. ${commonsLink('Fontaines D.C performing at Primavera Sound Porto 2025.tif')}`),
    'uhAp3o71U48': articleVideoCollection({
      lang: 'de',
      label: 'Primavera Sound Barcelona bei Boiler Room',
      description: 'Zwei Wege durch brasilianische Clubmusik, von Boiler Room bei Primavera Sound Barcelona gefilmt: DJ Ramon Sucesso 2024 und Badsista 2022.',
      items: [
        articleVideoCard({youtubeId: 'uhAp3o71U48', genre: 'Boiler Room, 2024', artist: 'DJ Ramon Sucesso', title: 'Primavera Sound Barcelona'}),
        articleVideoCard({youtubeId: 'KkhwjIVDHGc', genre: 'Boiler Room, 2022', artist: 'Badsista', title: 'Primavera Sound Barcelona'})
      ]
    }),
    'srV4AgUc104': articleYoutubeEmbed({
      src: 'https://www.youtube-nocookie.com/embed/srV4AgUc104',
      title: 'Alan Sparhawk, offizielles Set bei Primavera Sound Porto 2025'
    }),
    'Tabelle: milestones': articleTable({
      headers: ['Jahr', 'Was sich änderte'],
      rows: [
        ['2001', 'Erstes eintägiges Primavera Sound im Poble Espanyol; rund 7.700 Tickets'],
        ['2004', 'Das Festival in Barcelona wächst auf drei Tage'],
        ['2005', 'Umzug in den Parc del Fòrum'],
        ['2008', 'Aus dem Programm in den Konzertsälen der Stadt wird Primavera a la Ciutat'],
        ['2012', 'Erstes Primavera Sound Porto'],
        ['2019', 'Ein geschlechterparitätisches Programm wird als The New Normal vorgestellt'],
        ['2022', 'Außergewöhnliche Ausgabe mit zwei Wochenenden in Barcelona nach den Absagen der Pandemie'],
        ['2027', 'Hauptprogramm in Barcelona vom 3. bis 5. Juni im Parc del Fòrum angesetzt']
      ].map(row => row.map(escapeHtml)),
      label: 'Meilensteine von Primavera Sound'
    })
  }),

  sources: [
    {href: 'https://www.primaverasound.com/en/barcelona', label: 'Primavera Sound Barcelona: offizielle Website'},
    {href: 'https://assets.primaverasound.com/psb/docs/condicionesEntradas_en.html', label: 'Primavera Sound Barcelona: offizielle Ticket- und Altersbedingungen'},
    {href: 'https://parcdelforum.barcelona/en/parc-forum/the-park', label: 'Parc del Fòrum: offizieller Geländeführer'},
    {href: 'https://www.catalannews.com/culture/item/in-photos-primavera-sound-draws-287000-festivalgoers-after-rain-hit-opening-day', label: 'Catalan News: nächste Termine und Vereinbarung zum Parc del Fòrum'},
    {href: 'https://www.rtve.es/noticias/20250607/primavera-sound-registra-293000-asistentes-300-millones-retorno-para-barcelona/16615374.shtml', label: 'RTVE: Besucherzahlen und internationales Publikum von Primavera Sound'},
    {href: 'https://assets.primaverasound.com/ps-single/download/prensa/psb/2016/dossier/Press_dossier_Primavera_Sound_2016_.pdf', label: 'Primavera Sound: historisches Pressedossier'},
    {href: 'https://assets.primaverasound.com/ps-single/download/prensa/psb/2015/dossier/Press_dossier_Primavera_Sound_2015.pdf', label: 'Primavera Sound: Primavera a la Ciutat und Festivalgeschichte'},
    {href: 'https://assets.primaverasound.com/ps-single/download/prensa/pso/2016/dossier/NPS16_Conf._Imprensa_Dossier_Imprensa_Digital_ES_PN_20160204132533.pdf', label: 'Primavera Sound Porto: offizielles historisches Pressedossier'},
    {href: 'https://boilerroom.tv/session/primavera-sound-barcelona-2024/', label: 'Boiler Room: Session bei Primavera Sound Barcelona'},
    {href: 'https://en.wikipedia.org/wiki/Primavera_Sound', label: 'Wikipedia: Primavera Sound, Chronologie und Quellenübersicht'}
  ],

  bandcamp: {
    description: 'Primavera macht Platz für Clubmusik neben Bands, Pop und Experimenten. Meine eigene Musik ist Breakbeat. Wer einen Track kauft, unterstützt diese Seite direkt.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks von thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 von thecatrave'}
    ]
  }
};
