// French breakbeat guide. Structure and facts from the English page
// (breakbeat-guide-draft.md, build-breakbeat-article.mjs).
//
// French keywords (keywords/fr-breakbeat.json): breakbeat 100 a month in
// France (TRANSLATION-RESEARCH.md, French stage 2). The wording was checked in
// the Bing fr-FR results on 2026-09-23 (Google answered with a bot check), no
// Ahrefs units spent: fr.wikipedia's "Breakbeat" ranks first, and the French
// searches add "musique breakbeat" and "breakbeat meilleures chansons". French
// writes the genre masculine, "le breakbeat". The sample and pattern searches
// in the same results are rejected (WRITING.md), as the English page rejects
// them.
//
// Images as on the English page, at the owner's decision on 2026-09-23 ("leave
// the images as is"), although their sources are rights-reserved; logged open
// in defects.json (breakbeat-guide-rights-reserved-images). The players, the
// history map and the owner's music are built in content/breakbeat-media.mjs.
import {articleFigure, articleTable} from '../../site-components.mjs';
import {t} from '../../i18n.mjs';
import {breakbeatMedia} from '../breakbeat-media.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (src, width, height, className, alt, caption) => articleFigure({src, width, height, alt, caption: escapeHtml(caption), className});

const copy = {
  listening: t('fr').essentialListening,
  notes: [
    'Les six secondes de Gregory Coleman que des producteurs ont ensuite étirées en d’innombrables identités rythmiques.',
    'Les accents et le placement de Clyde Stubblefield montrent pourquoi une boucle célèbre reste une interprétation humaine.',
    'Un break de batterie et des fragments de voix qui ont voyagé à travers le hip-hop, la rave et la jungle.',
    'Des percussions et un espace ouvert devenus centraux dans la pratique des DJ et des b-boys.',
    'Le disque qui a fait du break Amen le sujet d’un morceau plutôt que le tapis en dessous, dix ans avant que les producteurs rave britanniques ne l’accélèrent.',
    'Une production hip-hop britannique rapide qui rencontre la rave avant que le breakbeat hardcore ne se soit fixé comme nom. Le lecteur de streaming disponible ci-dessous utilise la version £20, très proche, du même catalogue des débuts.',
    'Breaks, basses et samples rave, faits à la fois pour le mix et pour être reconnus tout de suite.',
    'Une route plus sombre et plus aérée à travers le breakbeat hardcore.',
    'Crossover rave des débuts et breakbeat hardcore, pas la preuve que le groupe a toujours été un groupe de big beat.',
    'Des voix ragga et le breakbeat hardcore passent de la culture rave aux classements britanniques.',
    'Une musique club portée par les breaks, portée à l’échelle du big beat sans perdre la répétition acid.',
    'La pression acid, des batteries à la taille du hip-hop et un pont entre clubs underground et breakbeat crossover.',
    'L’electro et l’acid breakbeat de la route de la côte Ouest américaine.',
    'L’electro, la basse et l’identité régionale des Florida breaks dans une seule production.',
    'Le progressive breaks étiré jusqu’à une ampleur orchestrale et un long arrangement de club.',
    'Les edits plus serrés et le bas du spectre du circuit nu-skool naissant.',
    'Le swing du UK garage et la basse passent dans un cadre breaks à part entière.',
    'Un rythme cassé actuel, façonné par la mémoire rave plutôt que par un strict revival de genre.',
    'Le mouvement du breakbeat à l’intérieur d’un cadre techno.',
    'Un point de rencontre actuel entre garage, techno, fragments de voix et breaks.',
    'Une longue route breakbeat à l’atmosphère berlinoise plus froide, qui laisse au rythme la place de changer sans cesse.'
  ],
  groups: {
    'breaks-before-genre': ['Les breaks avant le genre', 'Écoutez d’abord les disques sources comme des interprétations : chaque break porte une sensation humaine différente avant que des producteurs ne le découpent.'],
    'british-rave-group': ['La rave britannique commence à se diviser', 'Ces disques montrent le breakbeat hardcore passer du hip-hop britannique rapide à la rave des classements, à une pression plus sombre et au crossover ragga.'],
    'florida-group': ['La Floride devient une scène à part', 'La production de DJ Icey rend audible le mélange local d’electro, de Miami bass et de breaks roulants.'],
    'acid-west-coast-group': ['Les routes acid et côte Ouest', 'Un morceau agrandit l’acid breakbeat ; l’autre se tourne vers l’electro et la côte Ouest américaine.'],
    'crossover-group': ['Les breaks à l’échelle du crossover', 'Chemical Beats montre comment la répétition acid et des batteries à la taille du hip-hop ont pu passer des clubs à une production à l’échelle des festivals.'],
    'nu-skool-group': ['Le nu-skool devient un circuit à part', 'L’ampleur progressive, des edits affûtés et le swing du UK garage montrent à quel point l’écosystème breaks du début des années 2000 est devenu large.'],
    'contemporary-group': ['Cinq routes actuelles', 'Mémoire rave, breakbeat techno, UK bass moderne et progressive breaks montrent pourquoi le rythme n’a plus besoin d’un revival unifié.']
  },
  floridaPlaylist: {
    title: 'Florida breaks : une longue playlist régionale.',
    description: 'À écouter après l’exemple de DJ Icey pour entendre le continuum régional plus large : electro bass, freestyle, breaks roulants et les producteurs du circuit club de Floride.',
    iframeTitle: 'Playlist de Florida breaks et de funky breaks sur Spotify'
  },
  nuSkoolPlaylist: {
    title: 'Nu-skool breaks : une longue playlist de la scène.',
    description: 'Une route plus longue au-delà des exemples isolés, avec Freq Nasty, Plump DJs, Stanton Warriors et le circuit breaks qui les entourait.',
    iframeTitle: 'Playlist The Sound of Nu Skool Breaks sur Spotify'
  },
  protectYaBreaks: 'Des breaks progressifs à 128 BPM avec des vocals rap découpés et un basculement downtempo. Mon propre morceau.',
  contemporaryMix: {
    kicker: 'Une route actuelle de thecatrave',
    title: 'I Like to Smoke in Silence After Raves',
    description: 'Ce set a sa place ici parce qu’il montre comment les breaks circulent aujourd’hui entre garage, bass music, techno et rave au lieu de vivre dans un revival fermé.',
    iframeTitle: 'I Like to Smoke in Silence After Raves par thecatrave sur SoundCloud'
  },
  popCulture: {
    label: 'LE BREAKBEAT HORS DU CLUB :',
    html: 'Les jeux et les films ont porté la musique électronique fondée sur les breaks bien au-delà des disquaires spécialisés. <em>Wipeout 2097</em> a placé les Chemical Brothers, The Prodigy et Future Sound of London dans un monde de course futuriste ; <em>SSX Tricky</em> a fait du big beat, du hip-hop et des breaks une part de l’excitation physique du jeu ; et la bande originale de <em>Matrix</em> a utilisé des artistes comme The Prodigy et Propellerheads pour rendre les batteries cassées inséparables de la vitesse et de la tension. Ces bandes originales ont fait découvrir l’énergie du breakbeat à des auditeurs qui n’avaient jamais mis les pieds dans une rave.'
  },
  map: {
    title: 'Carte de l’histoire du breakbeat',
    desc: 'Une carte qui relie les breaks funk et le hip-hop du Bronx à la rave britannique, à la Floride, à la côte Ouest et à l’Andalousie, puis au big beat, au nu-skool breaks et à la musique club actuelle.',
    columns: ['RACINES', 'ROUTES LOCALES', 'BRANCHES DES ANNÉES 1990', 'DES ANNÉES 2000 À AUJOURD’HUI'],
    nodes: [
      ['Breaks funk et soul', 'années 60-70'], ['DJ du Bronx', 'dès les années 70'],
      ['Rave britannique', '1988-92'], ['Floride / Orlando', 'dès le début 90'], ['Acid US / côte Ouest', 'années 90'], ['Andalousie', '1992-2002'],
      ['Hardcore → jungle', 'années 90'], ['Big beat', 'milieu-fin 90'], ['Nu-skool breaks', 'fin 90-2000'], ['Acid / progressive', 'années 90-2000'],
      ['Jungle et D&B', 'scènes vivantes et distinctes'], ['Circuit breaks à part', 'années 2000 ; réduit ensuite'], ['Continuités régionales', 'Floride / Andalousie'], ['Continuum actuel', 'electro / UKG / techno / bass']
    ],
    mobile: [
      ['Années 60-70', 'Les breaks enregistrés deviennent matière à DJ', 'Les passages de batterie funk et soul rencontrent la pratique des platines du Bronx.'],
      ['1988-2002', 'Plusieurs routes locales se forment', 'La rave britannique, le centre de la Floride, les clubs de la côte Ouest et l’Andalousie organisent différemment la même idée rythmique.'],
      ['Années 90-2000', 'Les branches deviennent des scènes nommées', 'Hardcore, jungle, big beat, acid, progressive et nu-skool breaks se recoupent sans former une taxonomie.'],
      ['Aujourd’hui', 'L’étiquette de scène se resserre, le langage se répand', 'Les breaks à part entière continuent, tandis que les batteries cassées circulent dans l’electro, le garage, la techno, la jungle et la bass music.']
    ],
    caption: 'Les dates marquent l’apparition et le pic de visibilité, pas la disparition.'
  }
};

export default {
  lang: 'fr',
  name: 'fr-breakbeat',
  file: 'fr/breakbeat.html',
  draft: 'fr/breakbeat-draft.md',
  canonical: 'https://thecatrave.com/fr/breakbeat',
  englishPath: '/breakbeat-guide',
  ogImage: 'https://thecatrave.com/img/og/breakbeat.jpg',
  bodyClass: 'article-page breakbeat-page',
  minReadingMinutes: 20,
  image: 'https://thecatrave.com/img/breakbeat/plump-djs-electric-disco.png',

  title: 'Qu’est-ce que le breakbeat ? Genre, histoire, artistes, styles',
  description: 'Qu’est-ce que le breakbeat ? Des breaks funk et du hip-hop à la rave britannique, à la Floride et à l’Andalousie, au big beat, au nu-skool et aux breaks actuels.',
  datePublished: '2026-09-23',
  dateModified: '2026-09-23',
  dateLabel: '23 septembre 2026',

  heroKicker: 'Guide du breakbeat',
  heroTitle: 'Qu’est-ce que le breakbeat\u00a0? Genre, histoire et styles',
  deck: 'Des breaks funk et du hip-hop du Bronx à la rave britannique, à la Floride, à l’Andalousie, au big beat, au nu-skool et à la musique club cassée d’aujourd’hui.',
  answerLabel: 'Le breakbeat, définition',
  breadcrumbName: 'Breakbeat',

  answerSection: 'Réponse',
  introSection: 'Introduction',
  introTitle: 'Qu’est-ce que le breakbeat ? Genre, histoire et styles.',
  faqSection: 'FAQ',
  faqLabel: 'Questions fréquentes sur le breakbeat',
  faqTitle: 'Questions fréquentes sur le breakbeat.',

  sections: [
    {id: 'definition', heading: 'Le breakbeat, un rythme ou un genre ?', tocLabel: 'Rythme ou genre ?', title: 'Le breakbeat, un rythme ou un genre ?'},
    {id: 'origins', heading: 'D’où vient le breakbeat ?', tocLabel: 'Funk, hip-hop et samplers', title: 'D’où vient le breakbeat ?', subsections: ['funk-records', 'hip-hop-method', 'samplers', 'broken-rhythms']},
    {id: 'history-map', heading: 'Comment le breakbeat a voyagé et changé', tocLabel: 'Carte de l’histoire', title: 'Comment le breakbeat a voyagé et changé.', className: 'map-section'},
    {id: 'club-history', heading: 'Comment le breakbeat est devenu une musique de club', tocLabel: 'Histoires régionales des clubs', title: 'Comment le breakbeat est devenu une musique de club.', className: 'history-section', subsections: ['british-rave', 'branches', 'pirate-radio', 'florida', 'west-coast', 'andalusia', 'big-beat', 'nu-skool', 'less-visible']},
    {id: 'styles', heading: 'Les styles de breakbeat : hardcore, Florida, big beat, nu-skool et autres', tocLabel: 'Styles et genres voisins', title: 'Les styles de breakbeat : hardcore, Florida, big beat, nu-skool et autres.', className: 'styles-section', subsections: ['hardcore', 'florida-breaks', 'big-beat-style', 'nu-skool-style', 'acid-progressive', 'contemporary', 'breakbeat-techno', 'related']},
    {id: 'comparison', heading: 'Breakbeat, jungle, drum and bass, big beat et broken beat : les différences', tocLabel: 'Comparaison des genres', title: 'Breakbeat, jungle, drum and bass, big beat et broken beat : les différences.', className: 'comparison-section'},
    {id: 'today', heading: 'Le breakbeat aujourd’hui', title: 'Le breakbeat aujourd’hui.', subsections: ['revival', 'travels']}
  ],

  media: ({lang}) => ({
    ...breakbeatMedia(lang, copy),
    'Image: akai': figure('img/breakbeat/akai-s950-cutout.png', 2172, 724, 'feature-image cutout-image sampler-hero', 'Un sampler en rack Akai S950 détouré sur fond transparent', 'Le S950 a rendu possible l’édition détaillée des breaks avec une toute petite mémoire et une façon de travailler très physique.'),
    'Image: wild-style': figure('img/breakbeat/rbma-wild-style-mural.jpg', 1400, 952, 'archive-image wide-archive-image people-image competitor-media', 'Charlie Ahearn et Fab Five Freddy à côté de la fresque de Wild Style en 1983', 'Charlie Ahearn et Fab Five Freddy à côté de la fresque de Wild Style, 1983.'),
    'Image: hip-hop-pioneers': figure('img/breakbeat/musicradar-hip-hop-pioneers.jpg', 1200, 835, 'archive-image wide-archive-image people-image competitor-media', 'Grandmaster Flash, DJ Kool Herc, Afrika Bambaataa et Chuck D ensemble à l’université Columbia', 'Grandmaster Flash, DJ Kool Herc, Afrika Bambaataa et Chuck D ensemble au Rap Summit de l’université Columbia.'),
    'Image: ultimate-breaks': figure('img/breakbeat/ultimate-breaks-and-beats-cutout.svg', 1072, 1020, 'archive-image artifact-cutout-image record-artifact', 'Un disque original de la compilation Ultimate Breaks and Beats photographié dans sa pochette', 'Ultimate Breaks & Beats a fait de passages de batterie introuvables une bibliothèque physique pour les DJ et les producteurs.'),
    'Image: sp1200': figure('img/breakbeat/musicradar-sp1200-floppies.jpg', 1200, 675, 'archive-image wide-archive-image competitor-media', 'Des disquettes posées sur un sampler E-mu SP-1200', 'La SP-1200 stockait samples et séquences sur disquettes, faisant de la mémoire limitée une part de la façon de travailler.'),
    'Image: prodigy': figure('img/breakbeat/musicradar-prodigy-1992.jpg', 1200, 675, 'archive-image wide-archive-image people-image competitor-media', 'The Prodigy photographié en trio dans l’Essex en 1992', 'The Prodigy dans l’Essex en 1992, quand le breakbeat hardcore passait de la rave à une culture publique plus large.'),
    'Image: pj-smiley': figure('img/breakbeat/shut-up-and-dance-pj-smiley.jpg', 1400, 933, 'archive-image pj-smiley-image people-image', 'Portrait en noir et blanc de PJ et Smiley de Shut Up and Dance', 'PJ et Smiley ont relié la culture sound system de Hackney, la production hip-hop et la scène rave naissante.'),
    'Image: dj-icey': figure('img/breakbeat/dj-icey-flyer-cutout.svg', 635, 560, 'archive-image artifact-cutout-image', 'Un flyer d’archive pour DJ Icey au Club 600 North', 'Un flyer de DJ Icey et Zone Records issu du circuit club régional de Floride.'),
    'Image: cordoba': figure('img/breakbeat/cordoba-breakbeat-flyer.jpg', 1052, 1500, 'archive-image portrait-image', 'Flyer de l’événement Break Beat Nation à Cordoue en 2001', 'Break Beat Nation annonçant un programme sur plusieurs nuits à Cordoue, en 2001.'),
    'Image: andalusia': figure('img/breakbeat/andalusia-rave-crowd.jpg', 1800, 1175, 'archive-image wide-archive-image people-image', 'Un public qui danse dans une rave breakbeat andalouse d’archive', 'Un public breakbeat andalou, avant que les téléphones ne fassent partie de la piste.'),
    'Image: plump-djs': figure('img/breakbeat/plump-djs-electric-disco.png', 1200, 1200, 'archive-image square-image', 'Pochette du disque de Plump DJs, Electric Disco et Plumpy Chunks, Finger Lickin’', 'Finger Lickin’ a fait du nu-skool breaks un langage reconnaissable, en club comme sur les pochettes.'),
    'Table: comparison': articleTable({
      headers: ['Style', 'Caractère rythmique', 'Zone de tempo approximative', 'Contexte historique', 'Noms représentatifs', 'Différence la plus nette'],
      label: 'Breakbeat et genres voisins comparés, tableau',
      rows: [
        ['Breakbeat / breaks', 'Batteries de club syncopées, samplées ou programmées', '120 à 140 BPM est courant, sans être la règle', 'Scènes club britanniques, américaines et internationales', 'Stanton Warriors, Plump DJs, DJ Icey', 'La large catégorie club centrée sur les rythmes cassés'],
        ['Breakbeat hardcore', 'Breaks rapides, stabs rave, pianos et sub-basse', 'Environ 140 à plus de 160 BPM', 'Rave britannique du début des années 1990', 'SL2, 2 Bad Mice, Acen', 'Son hardcore de transition, avant que les branches ne se stabilisent'],
        ['Jungle', 'Breaks très édités, influence reggae et dub, sub-basse profonde', 'Environ 150 à 170 BPM', 'Culture rave noire britannique du début des années 1990', '4hero, Remarc, Shy FX', 'Une culture propre du sound system, des MC et des dubplates'],
        ['Drum and bass', 'Batteries rapides fondées sur les breaks, avec de nombreux styles de production spécialisés', 'Environ 160 à 180 BPM', 'À partir du milieu des années 1990', 'Goldie, Photek, LTJ Bukem', 'Une large scène et une identité de genre au-delà de la catégorie générale des breaks'],
        ['Big beat', 'Grandes boucles, acid, dynamique rock et collage de samples', 'Souvent 100 à 140 BPM', 'Culture club et festival crossover des années 1990', 'Chemical Brothers, Fatboy Slim', 'Plus fondé sur les boucles et tourné vers le crossover que les breaks à part entière'],
        ['Acid / progressive breaks', 'Batteries cassées avec des lignes de 303 ou de longues montées atmosphériques', 'Souvent 120 à 140 BPM', 'Circuits club des années 1990 et 2000 qui se recoupent', 'Chemical Brothers, Hybrid, premiers DJ breaks', 'Des styles à qualificatif plutôt qu’une scène régionale unifiée'],
        ['Broken beat', 'Rythme lâche et syncopé avec une harmonie jazz, soul et funk', 'Souvent 90 à 130 BPM', 'Ouest de Londres, fin des années 1990 et années 2000', 'IG Culture, Bugz in the Attic', 'Une scène distincte avec un autre langage rythmique et harmonique'],
        ['Breakcore', 'Breaks hyper-édités, intensité hardcore, distorsion et rupture', 'En général 160 BPM et plus, mais très variable', 'Des années 1990 à aujourd’hui, underground international', 'Alec Empire, Venetian Snares', 'Édition et structure plus extrêmes que les breaks ou la jungle'],
        ['Breakbeat techno', 'Arrangement et sound design techno construits autour de batteries cassées', 'Souvent 125 à 150 BPM', 'Plusieurs scènes régionales actuelles', 'Selon la scène', 'Un cadre techno avec une pulsation cassée plutôt que droite']
      ].map(row => row.map(escapeHtml))
    })
  }),

  // The English page's sources, URL for URL, with translated labels; the two
  // English groups run as one list.
  sources: [
    {html: '<a href="https://blogs.loc.gov/music/2023/08/early-hip-hop-at-the-library-of-congress/" target="_blank" rel="noopener noreferrer">Library of Congress : Early Hip-Hop at the Library of Congress</a> et <a href="https://blogs.loc.gov/loc/2021/01/citizen-dj-noah-webster-and-the-value-of-copyright/" target="_blank" rel="noopener noreferrer">les ressources Citizen DJ</a> sur Kool Herc et la pratique des DJ avec les breaks (en anglais)'},
    {href: 'https://www.musicradar.com/news/the-history-of-breaks', label: 'MusicRadar : The History of Breaks in Music Production'},
    {href: 'https://www.musicradar.com/news/the-beginners-guide-to-breaks', label: 'MusicRadar : The Beginner’s Guide to Breakbeat'},
    {href: 'https://daily.redbullmusicacademy.com/2019/01/shut-up-and-dance-interview/', label: 'Red Bull Music Academy Daily : entretien avec Shut Up and Dance'},
    {href: 'https://www.hachette.co.uk/titles/bill-brewster-2/last-night-a-dj-saved-my-life/9781474625609/', label: 'Bill Brewster et Frank Broughton : Last Night a DJ Saved My Life'},
    {href: 'https://www.penguinrandomhouse.com/books/674010/energy-flash-by-simon-reynolds/', label: 'Simon Reynolds : Energy Flash'},
    {href: 'https://www.orlandoweekly.com/news/dance-dance-revolution-2244233/', label: 'Orlando Weekly : Dance Dance Revolution, sur les clubs d’Orlando, Underground Record Source et les Florida breaks'},
    {href: 'https://www.orlandoweekly.com/music/aahz-respects-the-breaks-that-made-orlando-global-overdue-propers-for-dj-stylus-the-beacham-2453343/', label: 'Orlando Weekly : AAHZ Respects the Breaks That Made Orlando Global'},
    {href: 'https://www.djicey.com/bio', label: 'DJ Icey : biographie officielle, sur ses influences, sa résidence à l’Edge et Zone Records'},
    {href: 'https://www.hardkiss.org/_files/ugd/502d5a_88604739932d41c5b2bd0087c98d4b90.pdf', label: 'Hardkiss : The Magical Sound of the San Francisco Underground, sur le premier réseau rave de la baie de San Francisco'},
    {href: 'https://www.diariodesevilla.es/ocio/David-Pareja-breakbeat_0_1859814016.html', label: 'Diario de Sevilla : entretien avec David Pareja, réalisateur de Break Nation, sur la scène andalouse de 1992 à 2002 (en espagnol)'},
    {href: 'https://www.filmotecadeandalucia.es/documents/282361/334099154/CO%2B-%2B2024-07-18-%2B%2820%2730%29%2B-%2BBreak%2BNation.pdf/33f0b15d-ce37-49fa-b1cd-129d026bfc97', label: 'Filmoteca de Andalucía : programme et synopsis de Break Nation (en espagnol)'},
    {href: 'https://www.officialcharts.com/songs/stanton-warriors-da-antidote/', label: 'Official Charts Company : Stanton Warriors, Da Antidote'},
    {href: 'https://pitchfork.com/reviews/tracks/skee-mask-50-euro-to-break-boost/', label: 'Pitchfork : Skee Mask, 50 Euro to Break Boost'},
    {html: 'thecatrave : <a href="/uk-electronic-music-evolution">histoire de la musique électronique britannique</a> (en anglais) et <a href="/fr/jungle">grand guide de la jungle</a>'}
  ],

  bandcamp: {
    description: 'Ces sorties sont les plus proches de l’histoire du breakbeat racontée dans cet article. En acheter une soutient directement mon travail.',
    tracks: [
      {title: 'thecatrave, Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks par thecatrave'},
      {title: 'thecatrave, Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 par thecatrave'},
      {title: 'thecatrave, Mylène Farmer Dégénération remix', id: '467727105', url: 'https://thecatrave.bandcamp.com/track/myl-ne-farmer-d-g-n-ration-electronica-breaks-dubstep-remix', linkText: 'Mylène Farmer, Dégénération, remix par thecatrave'}
    ]
  }
};
