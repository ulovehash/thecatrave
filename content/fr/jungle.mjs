// French jungle guide. Structure and facts from the English page
// (jungle-music-guide.html, built by build-jungle-article.mjs from the body it
// preserves between its jungle-content markers).
//
// French keywords (keywords/fr-jungle.json): jungle music 300 a month in France
// (TRANSLATION-RESEARCH.md, French stage 2, which flagged the band Jungle as
// the parent topic). The live Google results for France on 2026-09-23 settled
// it: fr.wikipedia's "Jungle (musique)" ranks first, and "Autres questions"
// asks "Qu'est-ce que la jungle music ?" and "C'est quoi la jungle musique ?"
// beside "Qui est le groupe Jungle ?". The genre intent is real; the band's
// searches are rejected. French writes the genre feminine, "la jungle".
//
// Every block the English generator places by paragraph marker is placed here
// by an [Embed: ...], [Image: ...] or [Table: ...] line at the same position;
// the blocks are built in content/jungle-media.mjs. The English page carries no
// credit on its seven photographs and flyers; logged in defects.json
// (jungle-images-uncredited), not guessed here.
import {articleFigure, articleTable} from '../../site-components.mjs';
import {jungleImages, jungleMedia} from '../jungle-media.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const copy = {
  trackTitle: (artist, title) => `${artist}, ${title} sur Spotify`,
  tracks: {
    'we-are-ie': 'Enregistré en 1989, sorti en 1991. Le disque le plus souvent crédité d’avoir posé les bases de la jungle, et celui sur lequel cette partie repose depuis toujours.',
    '28-gun-bad-boy': '1993, fait à Manchester. Le pont entre la lignée acid house que décrit cette partie et ce que Londres allait en faire.',
    'valley-of-the-shadows': '1993. Une référence dépouillée et menaçante : sub-basse, breaks découpés et un sample devenu partie du langage commun de la jungle.',
    'incredible': '1994. Une rencontre décisive entre la production jungle et l’énergie d’un MC dancehall, qui a porté le son bien au-delà des clubs spécialisés.',
    'inner-city-life': '1994. La voix de Diane Charlemagne et un arrangement ample ont porté la jungle à l’échelle d’un album sans aplatir sa complexité rythmique.',
    'renegade-snares': '1993. Des accords tourbillonnants et une batterie finement montée montrent à quel point la jungle des débuts pouvait être émouvante et précise.',
    'babylon': '1995. Un morceau sombre et dub, tout en pression, dont la basse, les fragments de voix et les edits de break sont devenus une référence durable de la jungle.'
  },
  images: {
    flyers: ['Une sélection de flyers de raves jungle britanniques du début des années 90', 'Collage de flyers jungle, 1991-94.'],
    'pirate-radio': ['Du matériel d’émission de radio pirate de l’époque jungle', 'Une installation de radio pirate.'],
    'tape-pack': ['Un tape pack World Dance de 1994', 'Un tape pack.'],
    awol: ['Flyer d’une rave jungle à l’AWOL', 'Flyer de rave de l’AWOL.'],
    fabio: ['Fabio aux platines aux débuts de la jungle', 'Fabio aux commandes, un pionnier qui a aidé à façonner le son jungle.'],
    'kool-fm': ['Flyer des 3 ans de Kool FM, jungle, 1994', 'Flyer de Kool FM (1994) : la fête d’anniversaire d’une radio pirate.'],
    dancing: ['Des gens qui dansent dans une rave jungle', 'Les raves jungle : sueur, gunfingers, basse, unité.']
  },
  videos: {
    'dj-hype': {kicker: 'Archive', heading: 'DJ Hype, Jungle Massive.', description: 'Une compilation d’époque qui transforme les noms et les disques de cette partie en un parcours d’écoute continu.'},
    'original-nuttah': {kicker: 'Le morceau clé', heading: 'Shy FX & UK Apachi, Original Nuttah.', description: 'L’hymne crossover de 1994 dont il est question ici, placé au moment précis où il entre dans l’histoire.'},
    'nia-archives': {kicker: 'Le revival en pratique', heading: 'Nia Archives, Boiler Room : Londres.', description: 'Un set actuel qui relie des disques jungle fondateurs, des edits contemporains et l’énergie nouvelle décrite dans cette partie.'},
    'tim-reaper': {kicker: 'À écouter', heading: 'Tim Reaper, mix jungle inspiré du rare groove.', description: 'Enregistré pour NTS. Un DJ plutôt qu’un disque, donc la preuve est un set : une heure de ce à quoi ressemble vraiment le revival.'}
  },
  playlists: {
    'early-jungle-playlist': {title: 'Jungle des débuts et hardcore : la playlist longue.', description: 'Un parcours plus long à travers les disques qui relient le breakbeat hardcore, le darkcore et le premier son jungle reconnaissable.', iframeTitle: 'Playlist de jungle des débuts et de hardcore sur Spotify'},
    'jungle-mania-playlist': {title: 'Les années de la percée : la playlist longue.', description: 'Une sélection plus large de pionniers, d’hymnes et de facettes de la jungle, de l’époque où cette musique a dépassé la radio pirate sans perdre sa langue underground.', iframeTitle: 'Playlist des pionniers de la jungle sur Spotify'}
  },
  quotes: {
    'quote-pirate-radio': '« La radio pirate était le cœur battant de la musique de danse underground. »',
    'quote-dj-storm': '« Les dubplates que tu avais dans ton sac montraient d’où tu venais. » DJ Storm'
  },
  lateSummer: 'Du breakbeat du côté liquid de la séparation. Mon propre morceau.',
  artDeco: {
    kicker: 'Un remix jungle actuel de thecatrave',
    title: 'Lana Del Rey : Art Deco (Jungle Remix).',
    description: 'Un exemple actuel de la pression des breaks et des basses de la jungle utilisée pour réinventer une voix pop, plutôt que pour reproduire un modèle des années 90.',
    iframeTitle: 'Lana Del Rey, Art Deco (Jungle Remix) par thecatrave sur SoundCloud'
  },
  tables: {
    'foundation-builders': {
      headers: ['Artiste / DJ / MC', 'Pourquoi il compte'], label: 'Bâtisseurs de la jungle, tableau',
      rows: [
        ['Shy FX', 'Auteur de « Original Nuttah », un hymne jungle devenu grand public'],
        ['LTJ Bukem', 'Père de l’« intelligent jungle », connu pour ses morceaux jazzy et atmosphériques'],
        ['Congo Natty (Rebel MC)', 'Pionnier de la ragga jungle et figure spirituelle du genre'],
        ['Goldie', 'A sorti « Inner City Life » et fait connaître la jungle dans le monde entier'],
        ['Fabio & Grooverider', 'Duo légendaire qui a façonné la première scène jungle, en club et à la radio'],
        ['Roni Size', 'A gagné le Mercury Prize avec New Forms, entre musique live et jungle'],
        ['Dillinja', 'Connu pour ses basses à faire trembler la terre et ses classiques jungle sombres'],
        ['Aphrodite', 'Le « parrain du jump-up » : des breaks funky et du plaisir'],
        ['Doc Scott', 'Innovateur de la jungle sombre et de la première drum and bass ; habitué de Metalheadz'],
        ['DJ Hype', 'Maître du turntablism et auteur de « Peace, Love & Unity »'],
        ['4hero', 'Innovateurs de la première heure et fondateurs de Reinforced Records. Ont mêlé breakbeats, jazz, soul et techno.'],
        ['Photek', 'Producteur obsédé par la précision, connu pour une jungle minimale et cinématographique et les premiers hybrides avec la drum and bass.'],
        ['Source Direct', 'Duo sombre et expérimental aux morceaux atmosphériques, à la batterie tranchante.'],
        ['Remarc', 'Maître des edits du break Amen ; légende du « Sound Murderer »'],
        ['DJ Rap', 'DJ et productrice pionnière, au succès crossover'],
        ['DJ Storm', 'Pilier de Metalheadz, l’une des grandes DJ de la jungle'],
        ['DJ Randall', 'Connu pour ses enchaînements précis et ses sets jungle sombres sur Kool FM'],
        ['DJ Zinc', 'Pionnier du jump-up, auteur de l’iconique « Super Sharp Shooter »'],
        ['Krust', 'Producteur expérimental, membre de Reprazent'],
        ['Andy C', 'Patron de RAM Records, a produit « Valley of the Shadows » à 16 ans'],
        ['M-Beat', 'A produit « Incredible » avec General Levy, un énorme tube jungle'],
        ['Leviticus (Jumpin Jack Frost)', 'Auteur de « Burial », cofondateur de V Recordings'],
        ['Adam F', 'Connu pour « Circles », un classique jungle mélodique et soul'],
        ['Deep Blue', 'Auteur du classique rave au sample d’hélicoptère, « Helicopter Tune »'],
        ['Marcus Intalex', 'A fait passer la jungle vers une drum and bass profonde et liquide'],
        ['Stevie Hyper D', 'Le MC jungle le plus iconique, connu pour son flow ultra-rapide'],
        ['MC UK Apachi', 'La voix de « Original Nuttah », des flows ragga légendaires'],
        ['General Levy', 'La voix de « Incredible » ; son « Junglist massive! » est iconique']
      ]
    },
    'modern-artists': {
      headers: ['Artiste / DJ / Producteur', 'Pourquoi il compte'], label: 'Artistes jungle actuels, tableau',
      rows: [
        ['Tim Reaper', 'Mène le revival jungle des années 2020 avec des morceaux au style rétro'],
        ['Sully', 'Producteur de jungle actuelle, atmosphérique et mélodique'],
        ['Coco Bryce', 'Mêle la culture skate à l’esthétique et au son de la jungle'],
        ['FFF', 'Maître néerlandais de l’hybride breakcore et jungle, actif depuis les années 2000'],
        ['Sherelle', 'DJ jungle et footwork à haut BPM, aux sets de festival brûlants'],
        ['Nia Archives', 'Chanteuse et productrice qui fait découvrir la jungle à la génération Z ; nommée aux MOBO et au Mercury']
      ]
    }
  }
};

export default {
  lang: 'fr',
  name: 'fr-jungle',
  file: 'fr/jungle.html',
  draft: 'fr/jungle-draft.md',
  canonical: 'https://thecatrave.com/fr/jungle',
  englishPath: '/jungle-music-guide',
  ogImage: 'https://thecatrave.com/img/og/jungle.jpg',
  bodyClass: 'article-page jungle-page',
  minReadingMinutes: 18,
  image: 'https://thecatrave.com/img/UK%20Rave%20flyers%20from%201991-1994.webp',

  title: 'C’est quoi la jungle music ? Histoire, son et morceaux clés',
  description: 'Qu’est-ce que la jungle ? Ses origines au Royaume-Uni au début des années 90, ses racines sound system, ses breakbeats, ses artistes et son revival actuel.',
  datePublished: '2026-09-23',
  dateModified: '2026-09-23',
  dateLabel: '23 septembre 2026',

  heroKicker: 'Guide de la jungle',
  heroTitle: 'Qu’est-ce que la jungle music\u00a0? Histoire, son et culture.',
  deck: 'Radio pirate, dubplates, MC, labels et la culture rave noire britannique derrière l’un des sons électroniques les plus influents du Royaume-Uni.',
  answerLabel: 'La jungle music, définition',
  breadcrumbName: 'Jungle music',

  answerSection: 'Réponse',
  introSection: 'Introduction',
  introTitle: 'Qu’est-ce que la jungle music ? Définition, son et BPM.',
  faqSection: 'FAQ',
  faqLabel: 'Questions fréquentes sur la jungle',
  faqTitle: 'Questions fréquentes sur la jungle.',

  sections: [
    {id: 'origins', heading: 'D’où vient la jungle', tocLabel: 'Où et quand la jungle est née', title: 'D’où vient la jungle : où et quand elle est née.'},
    {id: 'name', heading: 'Pourquoi appelle-t-on cette musique jungle ?', title: 'Pourquoi appelle-t-on cette musique jungle ?'},
    {id: 'underground-emergence', heading: '1991-1993 : l’émergence underground', title: '1991-1993 : l’émergence underground.'},
    {id: 'jungle-mania', heading: '1994-1995 : la jungle devient grand public', tocLabel: '1994-1995 : le grand public', title: '1994-1995 : la jungle devient grand public.', subsections: ['subgenres']},
    {id: 'pioneers', heading: 'Artistes, producteurs et pionniers de la jungle', tocLabel: 'Artistes, producteurs et pionniers', title: 'Artistes, producteurs et pionniers de la jungle.'},
    {id: 'labels', heading: 'Labels jungle et infrastructure de la scène', tocLabel: 'Labels et infrastructure de la scène', title: 'Labels jungle et infrastructure de la scène.'},
    {id: 'pirate-radio', heading: 'Radio pirate et culture du dubplate', title: 'Radio pirate et culture du dubplate.'},
    {id: 'culture', heading: 'Argot, style et rituels : la sous-culture jungle', tocLabel: 'Culture jungle et sous-genres', title: 'Argot, style et rituels : la sous-culture jungle.'},
    {id: 'essential-tracks', heading: 'Les morceaux essentiels de la jungle', title: 'Les morceaux essentiels de la jungle.'},
    {id: 'breakbeats', heading: 'Les breakbeats de la jungle : Amen, Think, Apache et Hot Pants', tocLabel: 'Amen, Think, Apache et Hot Pants', title: 'Les breakbeats de la jungle : Amen, Think, Apache et Hot Pants.'},
    {id: 'myths', heading: 'Jungle et drum and bass : quelle différence ?', tocLabel: 'Jungle et drum and bass', title: 'Jungle et drum and bass : quelle différence ?', subsections: ['cultural-rift', 'general-levy', 'urban-legends']},
    {id: 'revival', heading: 'La jungle existe-t-elle encore ? Le revival actuel', tocLabel: 'Le revival jungle actuel', title: 'La jungle existe-t-elle encore ? Le revival actuel.', subsections: ['new-generation', 'uk-2020s', 'raves-labels', 'global', 'roots']},
    {id: 'conclusion', heading: 'Conclusion', title: 'Conclusion.'},
    {id: 'foundation-builders', heading: 'Artistes, DJ et MC jungle : les bâtisseurs', tocLabel: 'Bâtisseurs et revivalistes', title: 'Artistes, DJ et MC jungle : les bâtisseurs.'},
    {id: 'modern-artists', heading: 'Artistes jungle actuels et revivalistes', title: 'Artistes jungle actuels et revivalistes.'},
    {id: 'acknowledgments', heading: 'Remerciements', title: 'Remerciements.'}
  ],

  media: ({lang}) => ({
    ...jungleMedia(lang, copy),
    ...Object.fromEntries(Object.entries(jungleImages).map(([key, image]) => {
      const [alt, caption] = copy.images[key];
      return [`Image: ${key}`, articleFigure({...image, alt, caption: escapeHtml(caption)})];
    })),
    ...Object.fromEntries(Object.entries(copy.tables).map(([key, {headers, rows, label}]) => [`Table: ${key}`, articleTable({
      headers: headers.map(escapeHtml), label,
      rows: rows.map(([name, note]) => [`<strong>${escapeHtml(name)}</strong>`, escapeHtml(note)])
    })]))
  }),

  // The English page's recommended resources, URL for URL, with translated labels.
  sources: [
    {href: 'https://en.wikipedia.org/wiki/Jungle_music', label: 'Wikipedia : Jungle music (en anglais)'},
    {href: 'https://www.vice.com/en/article/jungles-still-massive-why-is-general-levys-incredible-so-popular-20-years-on', label: 'Vice : pourquoi « Incredible » de General Levy est-il toujours aussi populaire 20 ans après ?'},
    {href: 'https://blamuk.org/2022/01/07/jungle-music-gentrification/', label: 'BLAM UK CIC : la jungle et la gentrification'},
    {href: 'https://djmag.com/longreads/how-dubplates-fuelled-rise-drum-bass-90s', label: 'DJ Mag : comment les dubplates ont porté l’essor de la drum & bass dans les années 90'},
    {href: 'https://reggaeroast.co.uk/blogs/news/jungle-documentary-stevie-hyper-d', label: 'Reggae Roast : Stevie Hyper D et les racines sound system de la jungle'},
    {href: 'https://mixmag.net/feature/the-gentrification-of-jungle', label: 'Mixmag : la gentrification de la jungle'},
    {href: 'https://www.theguardian.com/music/2021/jun/16/subwoofers-at-the-ready-the-jungle-and-drumnbass-revival-is-upon-us', label: 'The Guardian : le revival jungle et drum’n’bass est là'},
    {href: 'https://www.loudandquiet.com/interview/nia-archives-jungle-is-a-real-culture-and-a-real-community', label: 'Loud And Quiet : entretien avec Nia Archives'},
    {href: 'https://www.clashmusic.com/features/seven-jungle-artists-carrying-the-torch-for-the-new-gen', label: 'Clash Magazine : sept artistes jungle qui passent le flambeau à la nouvelle génération'},
    {href: 'https://www.talkhouse.com/playing-telephone-with-history', label: 'Talkhouse : le téléphone arabe de l’histoire'},
    {href: 'https://drumandbassuk.com/news/article/from-pirate-radio-to-podcasts-how-we-consume-drum-and-bass-2025', label: 'Drum & Bass UK : de la radio pirate aux podcasts'},
    {href: 'https://djmag.com/features/10-essential-dubplates-uk-dance-music-culture-picked-djs-play-them', label: 'DJ Mag : 10 dubplates essentiels de la culture dance britannique'}
  ],

  bandcamp: {
    description: 'Mon remix jungle de Lana Del Rey appartient directement au son exploré dans ce guide. L’acheter soutient directement la musique et l’écriture.',
    tracks: [
      {title: 'thecatrave, You So Ghetto (Lana Del Rey Jungle Remix)', id: '3379956979', url: 'https://thecatrave.bandcamp.com/track/you-so-ghetto-lana-del-rey-jungle-remix', linkText: 'You So Ghetto (Lana Del Rey Jungle Remix) par thecatrave'}
    ]
  }
};
