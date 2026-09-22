// German Paris clubs guide. Structure and facts from the English page
// (paris-clubs-draft.md, paris-clubs-research.md, build-paris-clubs-article.mjs).
//
// German keywords, measured 2026-09-22 with Google Ads Keyword Planner
// (owner's account, country Germany, tool switch per KEYWORD-METHOD.md):
// beste clubs in paris 100-1K, clubs in paris 100-1K, best clubs in barcelona
// 100-1K (control row, unrelated to this page), paris nightlife 10-100. Live
// Google search (google.de, hl=de/gl=de) confirms German searchers use the
// same "clubs in paris" phrasing rather than a German-only term, and surfaces
// Rex Club, Badaboum, Bellevilloise, Batofar, Concrete, Djoon, Faust, Garage,
// Cabaret Sauvage and Le YOYO across Tripadvisor.de, Paris mal anders,
// Hostelworld.de and Paris Secret. Only Rex Club, Badaboum and Essaim repeat
// across 2+ of the German-language lists actually read; the others are noted
// but not claimed as consensus.
//
// Like the English page, this guide carries the Dégénération original and
// remix; German pages otherwise default to Berlin Race 1909 for the owner's
// own track (owner, 2026-09-21), but Paris keeps the French connection
// because it is the page's actual subject.
//
// The images are the English guide's, in img/paris-clubs/, with translated
// captions; see home-articles.mjs for why a translation may reuse them.
import {
  articleFigure, articleListeningBand, articleTable, ownSetListening, ownTrackListening
} from '../../site-components.mjs';
import {t} from '../../i18n.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/paris-clubs/${name}-${width}.webp`,
  srcset: `img/paris-clubs/${name}-320.webp 320w, img/paris-clubs/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

export default {
  lang: 'de',
  name: 'de-paris-clubs',
  file: 'de/clubs-paris.html',
  draft: 'de/paris-clubs-draft.md',
  canonical: 'https://thecatrave.com/de/clubs-paris',
  englishPath: '/best-clubs-in-paris',
  ogImage: 'https://thecatrave.com/img/og/paris-clubs.jpg',
  bodyClass: 'article-page paris-clubs-page',

  title: 'Die besten Clubs in Paris: Von Le Palace bis zum Rex Club',
  description: "Le Palace, Les Bains Douches und der Rex Club: die Clubs, die Paris' Nachtleben geprägt haben, wie jeder berühmt wurde, und die besten Clubs in Paris heute.",
  datePublished: '2026-09-22',
  dateModified: '2026-09-22',
  dateLabel: '22. September 2026',

  heroKicker: 'Clubs in Paris',
  heroTitle: 'Die besten Clubs in Paris, von Le Palace bis zum Rex Club',
  deck: 'Zwei Legenden, die geschlossen haben, und ein Raum, der es nie hat: die Clubs, die Paris\' Nachtleben geprägt haben, und die besten Clubs in Paris, die heute offen sind.',
  answerLabel: 'Die besten Clubs in Paris',
  breadcrumbName: 'Die besten Clubs in Paris',

  answerSection: 'Antwort',
  introSection: 'Einleitung',
  introTitle: 'Ein längeres Gedächtnis als ein Club.',
  faqSection: 'FAQ',
  faqLabel: 'Häufige Fragen',
  faqTitle: 'Häufige Fragen zu Clubs in Paris.',

  sections: [
    {id: 'before-clubs-closed', heading: 'Vor den Schließungen: Le Palace und Les Bains Douches', title: 'Vor den Schließungen: Le Palace und Les Bains Douches.'},
    {id: 'rex-club', heading: 'Der Rex Club: der Raum, der Paris eine Heimat für Techno gab', title: 'Der Rex Club: der Raum, der Paris eine Heimat für Techno gab.'},
    {id: 'best-clubs-now', heading: 'Die besten Clubs in Paris heute', title: 'Die besten Clubs in Paris heute.'},
    {id: 'where-to-go', heading: 'Wohin gehen: das 11. Arrondissement und der Canal Saint-Martin', title: 'Wohin gehen: das 11. Arrondissement und der Canal Saint-Martin.'},
    {id: 'hear-paris', heading: 'Paris hören, bevor man hingeht', title: 'Paris hören, bevor man hingeht.'}
  ],

  media: ({lang}) => ({
    'Les Bains Douches Eingang': figure('les-bains-douches-entrance', 1280, 1707,
      "Der Eingang des ehemaligen Nachtclubs Les Bains Douches an der 7 Rue du Bourg-l'Abbé, Paris",
      "Der Eingang an der 7 Rue du Bourg-l'Abbé, fotografiert 2016. Les Bains Douches schloss 2010 als Club und eröffnete 2015 als Hotel neu. Foto: Thomon, CC BY-SA 4.0."),
    'thecatrave Degeneration': ownTrackListening('degeneration', 'Garage und Dubstep als Werkzeuge statt Grenzen: mein Remix mit Breaks unter einem französischen Pop-Vocal, neben dem Club, der der französischen elektronischen Musik einen Raum gab.', lang),
    'Mylène Farmer Degeneration Original': articleListeningBand({
      platform: 'spotify',
      id: 'degeneration-original',
      kicker: t(lang).essentialListening,
      title: 'Mylène Farmer, Dégénération: die Originalaufnahme.',
      description: 'Die Single von 2008, aus der mein Remix oben entsteht, produziert von Laurent Boutonnat. Auf Spotify, gegen den eigenen Katalog von Mylène Farmer geprüft.',
      src: 'https://open.spotify.com/embed/track/4j5JxFQLHDw5JSgXfcCeZB?utm_source=generator&theme=0',
      iframeTitle: 'Mylène Farmer, Dégénération, auf Spotify',
      fullBleed: true,
      tone: 'cyan'
    }),
    'thecatrave Protect Ya Breaks': ownTrackListening('protect-ya-breaks', 'Progressive Breaks bei 128 BPM mit gehackten Rap-Vocals und einem Downtempo-Wechsel. Mein eigener Track.', lang),
    'thecatrave mix I Like to Smoke in Silence After Raves': ownSetListening(0, lang, 'Dreißig Tracks, in denen sich die Breaks zwischen Garage, Bass Music, Techno und Rave bewegen. Mein eigener Mix.'),
    'Tabelle: now': articleTable({
      headers: ['Club', 'Viertel', 'Musik und Charakter', 'Am besten für'],
      rows: [
        ['Rex Club', 'Grands Boulevards (2.)', 'Techno und House seit 1988, im Keller des Kinos Grand Rex', 'Geschichte und ein Soundsystem, in das investiert wird'],
        ['Badaboum', '11. Arrondissement (Bastille)', 'Zugängliche Bookings neben glaubwürdigem Underground-Programm', 'Ein erster Stopp auf der Bastille-Route'],
        ['Essaim', '10. Arrondissement (Canal Saint-Martin)', 'Ein einziger, minimalistischer Dancefloor mit Fokus auf Klangqualität', 'Ein intimer Raum im Cluster am Canal Saint-Martin'],
        ['La Station - Gare des Mines', '18. Arrondissement', 'Experimenteller Club bis Techno und Baile Funk, in einem ehemaligen Kohlebahnhof', 'Etwas weiter vom Zentrum, nahe an Grassroots- und Queer-Kollektiven']
      ].map(row => row.map(escapeHtml)),
      label: 'Die besten Clubs in Paris heute'
    })
  }),

  sources: [
    {href: 'https://en.wikipedia.org/wiki/Les_Bains_Douches_(nightclub)', label: 'Wikipedia: Les Bains Douches (nightclub)'},
    {href: 'https://www.theculturecrush.com/feature/paris-de-nuit', label: "The Culture Crush: Paris' Famous Les Bains Nightclub Photographed"},
    {href: 'https://metropolismag.com/projects/pariss-les-bains-is-reborn-as-a-boutique-hotel/', label: "Metropolis Magazine: Paris's Les Bains Is Reborn as a Boutique Hotel, 2015"},
    {href: 'https://museeyslparis.com/en/stories/les-annees-palace', label: 'Musée Yves Saint Laurent Paris: A Look Back at the Palace Years'},
    {href: 'https://en.wikipedia.org/wiki/Le_Palace', label: 'Wikipedia: Le Palace'},
    {href: 'https://en.wikipedia.org/wiki/Fabrice_Emaer', label: 'Wikipedia: Fabrice Emaer'},
    {href: 'https://ra.co/guides/clubs-in-paris', label: 'Resident Advisor: The Best Clubs in Paris in 2026'},
    {href: 'https://djmag.com/news/paris-rex-club-celebrates-35th-anniversary-new-photobook', label: "DJ Mag: Paris' Rex Club celebrates 35th anniversary with new photobook, 2023"},
    {href: 'https://www.timeout.com/paris/en/music-nightlife', label: 'Time Out Paris: Paris Music & Nightlife'},
    {href: 'https://www.doitinparis.com/en/night-clubs-in-paris-26417', label: 'Do It In Paris: The New Hotspots of Parisian Nightlife'}
  ],

  bandcamp: {
    description: 'Zwei meiner eigenen Tracks: der französische Remix aus dem Rex-Club-Abschnitt, und einer aus Breaks gebaut. Wer einen kauft, unterstützt meine Arbeit direkt.',
    tracks: [
      {title: 'Mylène Farmer, Dégénération (Remix)', id: '467727105', url: 'https://thecatrave.bandcamp.com/track/myl-ne-farmer-d-g-n-ration-electronica-breaks-dubstep-remix', linkText: 'Mylène Farmer, Dégénération Remix von thecatrave'},
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks von thecatrave'}
    ]
  }
};
