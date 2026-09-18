// French dubstep guide. Structure and facts from the English page
// (dubstep-guide-draft.md, build-dubstep-article.mjs).
//
// French keywords, measured 2026-09-18 with keywords-explorer-matching-terms,
// country fr (keywords/fr-dubstep.json): dubstep 600 a month. The French pull
// is otherwise English-language questions ("what is dubstep?" 300 and its
// variants), which stay with the English page, and a wallpaper search.
//
// Listening blocks are placed by [Embed: ...] lines in the draft, at the
// positions the English generator gives them by paragraph index. Quotations
// are translated; the sources quoted are English and are listed below.
//
// The images are the English guide's, in img/dubstep/, with translated
// captions; see home-articles.mjs for why a translation may reuse them.
import {
  articleFigure, articleListeningBand, articleListeningCollection, articleTable,
  articleTrackEmbed, articleYoutubeEmbed
} from '../../site-components.mjs';
import {t} from '../../i18n.mjs';

const listeningItems = rows => rows.map(row => ({
  year: row.year,
  artist: row.artist,
  title: row.title,
  note: row.note,
  playerHtml: articleTrackEmbed({
    platform: row.spotify ? 'spotify' : 'youtube',
    id: row.spotify || row.youtube,
    title: `${row.artist}, ${row.title}`
  })
}));

const collection = (lang, id, title, description, rows) => articleListeningCollection({
  lang, id, tone: 'cyan', title, description, items: listeningItems(rows)
});

const youtube = (id, label) => articleYoutubeEmbed({
  src: `https://www.youtube-nocookie.com/embed/${id}`,
  title: `${label}, sur YouTube`
});

const figure = ({name, width, alt, caption, className = 'wide-archive-image', height}) => articleFigure({
  src: `img/dubstep/${name}.webp`,
  srcset: `img/dubstep/${name}-320.webp 320w, img/dubstep/${name}.webp ${width}w`,
  width, height, alt, caption, className
});

export default {
  lang: 'fr',
  name: 'fr-dubstep',
  file: 'fr/dubstep.html',
  draft: 'fr/dubstep-draft.md',
  canonical: 'https://thecatrave.com/fr/dubstep',
  englishPath: '/dubstep-guide',
  ogImage: 'https://thecatrave.com/img/og/dubstep.jpg',
  image: 'https://thecatrave.com/img/dubstep/dubplate-lathe.webp',
  bodyClass: 'article-page dubstep-page',
  minReadingMinutes: 9,

  title: 'Qu’est-ce que le dubstep ? Origines, son et deux genres, un mot',
  description: 'Le dubstep est né chez des disquaires et dans des sous-sols du sud de Londres, puis s’est scindé en deux genres sous un seul nom. Le son, les scènes et où il en est.',
  datePublished: '2026-09-18',
  dateModified: '2026-09-18',
  dateLabel: '18 septembre 2026',

  heroKicker: 'Dubstep',
  heroTitle: 'Qu’est-ce que le dubstep ?',
  deck: 'Un mot pour deux musiques très différentes. Comment un son né chez un disquaire de Croydon s’est scindé en deux, et ce qu’est devenue la version qui n’a jamais disparu.',
  answerLabel: 'Dubstep : définition',
  breadcrumbName: 'Dubstep',

  answerSection: 'Réponse',
  introSection: 'Introduction',
  introTitle: 'Deux réponses à la même question.',
  faqSection: 'FAQ',
  faqLabel: 'Questions sur le dubstep',
  faqTitle: 'Questions fréquentes sur le dubstep.',

  sections: [
    {id: 'croydon', heading: 'Croydon, Big Apple et un son sans nom', title: 'Croydon, Big Apple et un son sans nom.', kicker: 'Origines', tocLabel: 'Croydon et Big Apple'},
    {id: 'sound', heading: 'Comment le dubstep est construit : 140 BPM, half-time et basse dubstep', title: 'Comment le dubstep est construit : 140 BPM, half-time et basse dubstep.', tocLabel: 'Comment il est construit'},
    {id: 'scene', heading: 'FWD>>, DMZ et l’économie du dubplate', title: 'FWD>>, DMZ et l’économie du dubplate.', tocLabel: 'FWD>>, DMZ et dubplates'},
    {id: 'split', heading: 'Comment un mot a fini par désigner deux choses', title: 'Comment un mot a fini par désigner deux choses.', kicker: '2010 à 2012'},
    {id: 'bristol', heading: 'Bristol : la ligne qui ne s’est jamais rompue', title: 'Bristol : la ligne qui ne s’est jamais rompue.', tocLabel: 'Bristol'},
    {id: 'berlin', heading: 'Berlin : le dubstep rencontre la techno', title: 'Berlin : le dubstep rencontre la techno.', tocLabel: 'Berlin'},
    {id: 'subgenres', heading: 'Les sous-genres et ce qu’ils veulent vraiment dire', title: 'Les sous-genres et ce qu’ils veulent vraiment dire.', tocLabel: 'Les sous-genres expliqués'},
    {id: 'now', heading: 'Où en est le dubstep aujourd’hui', title: 'Où en est le dubstep aujourd’hui.'}
  ],

  media: ({lang}) => ({
    'Big Apple Records': figure({name: 'big-apple-records', width: 720, height: 482,
      alt: 'La devanture de Big Apple Records à Croydon vers l’an 2000',
      caption: 'Big Apple Records, Croydon, vers 2000. Ceux qui servaient, ceux qui traînaient là et ceux qui faisaient les disques étaient en grande partie les mêmes. Photo : Bigapplerecords, CC BY-SA 3.0.'}),
    'dubplate lathe': figure({name: 'dubplate-lathe', width: 961, height: 540,
      alt: 'Un tour de gravure vinyle avec un disque acétate sur le plateau',
      caption: 'Trente livres, une cinquantaine d’écoutes, puis les sillons étaient fichus. La rareté n’était pas une stratégie marketing, c’était une propriété physique du format.'}),
    'FWD Berlin': figure({name: 'fwd-berlin', width: 980, height: 650,
      alt: 'Sgt Pokes et Loefah lors d’une soirée FWD à Berlin en 2006',
      caption: 'Sgt Pokes et Loefah à FWD, à Berlin, en 2006. Le même MC et le même sélecteur qu’à Brixton, treize cents kilomètres plus à l’est. Photo : Stephan Machac.'}),
    'sound system': figure({name: 'sound-system', width: 1200, height: 800,
      alt: 'Une pile d’enceintes faite main qui domine la rue au carnaval de Notting Hill',
      caption: 'Un sound system qu’on monte dans la rue au carnaval de Notting Hill. La tradition caribéenne du sound system d’où vient le dubstep n’a jamais cessé de monter des systèmes, et le côté profond n’a jamais eu besoin d’être ravivé pour rester dans la salle. Photo : Jay Bergesen, CC BY 2.0.'}),
    'Burial': figure({name: 'burial-portrait', width: 703, height: 504, className: 'square-image',
      alt: 'Portrait de Burial, le producteur du sud de Londres derrière Untrue',
      caption: 'Burial est resté anonyme malgré une nomination au Mercury Prize. La scène a protégé cet anonymat, ce qui dit ce qui comptait pour elle en 2007.'}),
    'Bassweight': youtube('YVcX0Oc5j5E', 'Bassweight, un documentaire sur le dubstep'),
    'All My Homies Hate Skrillex': youtube('-hLlVVKRwk0', 'All My Homies Hate Skrillex, par Timbah.On.Toast'),
    'croydon-listening': collection(lang, 'croydon-listening',
      'Avant et après le nom.',
      'Le son avant qu’il ait un nom, et juste après. Trois ans d’écart, tous deux faits à quelques kilomètres du même disquaire.',
      [{year: 'Tempa, 2002', artist: 'Horsepower Productions', title: 'Gorgon Sound', spotify: '2eKcQqAYex36Eju94neF4l',
        note: 'Le garage tourné vers le dub qui a nourri le son : beaucoup de delay et de basse, fait avant que quiconque ait besoin d’un mot pour ça.'},
       {year: 'Tempa, 2005', artist: 'Skream', title: 'Midnight Request Line', youtube: 'vJGXRQ9vBoU',
        note: 'Le son de Croydon avec le nom collé dessus. Écrit au-dessus de Big Apple Records, il a porté le dubstep sur des pistes qui n’avaient jamais entendu parler de la boutique.'}]),
    'built-listening': collection(lang, 'built-listening',
      'L’espace et le wobble au même tempo.',
      'Les deux pôles de la technique. Un disque est presque entièrement de l’espace, l’autre presque entièrement du wobble, et les deux ont le même tempo et le même motif de batterie.',
      [{year: 'DMZ, 2006', artist: 'Loefah', title: 'Mud', youtube: 'd_KtXqmKCFE',
        note: 'Presque entièrement de l’espace. La grosse caisse et la caisse claire sont très éloignées, la sub-bass fait le reste, et il se passe très peu d’autre chose : le half-time dans sa forme la plus nue.'},
       {year: 'Tempa, 2008', artist: 'Benga and Coki', title: 'Night', youtube: 'FHDvybumHAk',
        note: 'Le wobble comme disque entier. Les mêmes 140 et le même motif de batterie que Mud, avec un oscillateur basse fréquence qui fait de la basse l’accroche.'}]),
    'rinse-listening': collection(lang, 'rinse-listening',
      'La radio, pas le sous-sol.',
      'Deux des DJ cités dans cette section, sur la radio pirate qui a emmené le son hors du sud de Londres, dans une émission de notre propre catalogue plutôt qu’un extrait d’archives.',
      [{year: 'Rinse FM', artist: 'Plastician, Hatcha and Crazy D', title: 'I LOVE: DUBSTEP', youtube: 'S1s2XvfHfhU',
        note: 'Hatcha s’est servi de Rinse en 2003 pour porter le son au-delà des disques ; Plastician lançait Filthy Dub au même moment. C’est par la radio que tous ceux qui étaient hors de ces salles les ont entendus.'}]),
    'dmz-listening': collection(lang, 'dmz-listening',
      'Les années DMZ, et après.',
      'Le son des années DMZ, et ce qui en est sorti. Le premier disque a été écrit pour une salle avec un système. Le second pour un casque à quatre heures du matin.',
      [{year: 'DMZ, 2006', artist: 'Digital Mystikz', title: 'Anti War Dub', youtube: '--jr22La8Nk',
        note: 'Écrit pour une salle avec un système : répétition méditative, sirènes dub et un poids qu’on est censé sentir plutôt qu’entendre.'},
       {year: 'Hyperdub, 2007', artist: 'Burial', title: 'Archangel', spotify: '2agb1CPPGWXqXnrKn6cx7u',
        note: 'Le même vocabulaire, ramené à l’intérieur. Untrue a valu une nomination au Mercury Prize pendant que son auteur restait anonyme.'}]),
    'split-listening': collection(lang, 'split-listening',
      'Un tempo, des priorités opposées.',
      'L’écart en un seul endroit. Les deux disques ont le même tempo et le même motif de batterie, et le second déplace le poids de la sub-bass vers des médiums saturés. Le premier a été fait par un fondateur de DMZ.',
      [{year: 'DMZ, 2008', artist: 'Coki', title: 'Spongebob', youtube: 'cIpc817U_R4',
        note: 'La direction plus dure, faite de l’intérieur de la scène. Dazed l’a placée en tête de sa liste des morceaux qui définissent le brostep, et elle venait d’un fondateur de DMZ.'},
       {year: '2010', artist: 'Skrillex', title: 'Scary Monsters and Nice Sprites', spotify: '4rwpZEcnalkuhPyGkEdhu0',
        note: 'Le poids déplacé de la sub-bass vers des médiums saturés, là où un champ de festival peut l’entendre. Trois Grammy Awards ont suivi en 2012.'}]),
    'bristol-listening': collection(lang, 'bristol-listening',
      'La ligne de Bristol.',
      'Bristol a entendu le dub avant le dubstep, et ça s’entend : plus lent, plus lourd, moins intéressé par le drop que par la pression autour.',
      [{year: 'Tectonic, 2006', artist: 'Pinch', title: 'Qawwali', spotify: '36tSNnMctCGaxQp0JVGBLC',
        note: 'Tectonic dans sa première année : plus lent et plus étrange que Londres, plus redevable au dub et à la techno qu’au garage, et toujours le modèle du côté profond.'}]),
    'berlin-listening': collection(lang, 'berlin-listening',
      'Là où les deux villes se rencontrent.',
      'Le disque où le dubstep et la techno berlinoise se rencontrent. Un morceau de Skull Disco reconstruit par l’un des producteurs les plus singuliers de la techno, sur plus de dix-huit minutes.',
      [{year: 'Skull Disco, 2007', artist: 'Shackleton', title: 'Blood On My Hands, Ricardo Villalobos Apocalypso Now Mix', youtube: 'KQr6m2l2J-Y',
        note: 'Le dubstep comme matière première d’un set techno : l’arrangement s’étire sur plus de dix-huit minutes et ne se résout jamais en drop.'}]),
    'Table: subgenres': articleTable({
      headers: ['Terme', 'À peu près quand', 'Ce qu’il veut dire', 'Lien avec l’original'],
      rows: [
        ['Dubstep (d’origine, appelé deep plus tard)', 'Depuis 2002', '140 BPM, batterie half-time, sub-bass, espace', 'La source'],
        ['Brostep', 'Depuis 2010', 'Médiums saturés, dynamique de festival, drops agressifs', 'Même tempo et même motif de batterie, priorité de fréquences opposée'],
        ['Riddim', 'Depuis le milieu des années 2010', 'Minimal, répétitif, très fondé sur les triolets', 'Descend du brostep, pas du son d’origine'],
        ['Melodic dubstep', 'Depuis le début des années 2010', 'Accords émotionnels, influence trance et progressive', 'Garde le tempo, abandonne la noirceur'],
        ['Chillstep', 'Depuis le début des années 2010', 'Doux, ambient, porté par la voix', 'Une catégorie de streaming plus qu’une scène'],
        ['Future garage', 'Depuis la fin des années 2000', 'Swing garage, design sonore dubstep, retenue', 'Un frère qui s’est développé en parallèle'],
        ['Post-dubstep', 'Depuis 2010', 'Des producteurs qui ont utilisé le vocabulaire puis sont partis', 'Une étiquette posée plus tard par des auteurs, pas une scène qu’on rejoignait']
      ]
    }),
    'subgenre-listening': collection(lang, 'subgenre-listening',
      'Deux des branches plus tardives.',
      'Deux des branches plus tardives, pour que le tableau ci-dessus ait un son et pas seulement une définition.',
      [{year: 'Riddim', artist: 'Bommer and Crowell', title: 'Yasuo', youtube: 'fP2O6JcnJJI',
        note: 'Le riddim : minimal, répétitif et fondé sur les triolets, issu du brostep plutôt que du son d’origine.'},
       {year: '2014', artist: 'Seven Lions featuring Kerli', title: 'Worlds Apart', youtube: 'ULqdjtDI-bs',
        note: 'Le melodic dubstep : le tempo gardé, la noirceur abandonnée, remplacée par des accords trance et progressive.'}]),
    'deep-medi-listening': collection(lang, 'deep-medi-listening',
      'Le son du label.',
      'Deep Medi vu comme un catalogue plutôt qu’à travers son fondateur, avec l’album à l’aune duquel on mesure encore le label.',
      [{year: '2009', artist: 'Silkie', title: 'Concrete Jungle', youtube: 'fIHrJa0bWbY',
        note: 'Le morceau d’ouverture de City Limits Vol. 1, premier album du producteur de l’ouest de Londres et disque qui a fait de Deep Medi un catalogue.'}]),
    'thecatrave remix': articleListeningBand({
      platform: 'soundcloud',
      id: 'dubstep-thecatrave-remix',
      kicker: 'thecatrave',
      title: 'Mylène Farmer, Dégénération. Remix electronica, breaks et dubstep.',
      description: 'Un exemple des mêmes techniques à l’œuvre hors du genre d’où elles viennent : le poids du half-time et des breaks sous une voix de pop française, ce qui arrive quand un genre devient une boîte à outils.',
      src: `https://w.soundcloud.com/player/?url=${encodeURIComponent('https://soundcloud.com/thecatrave/mylene-farmer-degeneration')}&color=%23ff5a36&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false`,
      iframeTitle: 'Mylène Farmer, Dégénération, remix de thecatrave sur SoundCloud',
      fullBleed: true,
      tone: 'cyan'
    }),
    'dubstep-classics-playlist': articleListeningBand({
      platform: 'spotify',
      id: 'dubstep-classics-playlist',
      kicker: t(lang).essentialListening,
      title: 'Dubstep Classics : la playlist pour aller plus loin.',
      description: 'Un parcours plus large dans les disques que la plupart des gens entendent par dubstep, penché vers le côté bruyant que le tableau ci-dessus tente de trier.',
      src: 'https://open.spotify.com/embed/playlist/37i9dQZF1DX4arVIN5Cg4U?utm_source=generator',
      iframeTitle: 'Playlist Dubstep Classics sur Spotify',
      fullBleed: true,
      tone: 'cyan'
    })
  }),

  sources: [
    {href: 'https://www.vice.com/en/article/an-oral-history-of-dubstep-vice-lauren-martin-610/', label: 'VICE : The oral history of dubstep'},
    {href: 'https://www.museumofyouthculture.com/a-brief-history-of-early-dubstep/', label: 'Museum of Youth Culture : A brief history of early dubstep'},
    {href: 'https://www.dazeddigital.com/music/article/64343/1/what-is-brostep-five-key-tracks-skrillex-fred-again-dubstep', label: 'Dazed : What is brostep, in five key tracks'},
    {href: 'https://www.clashmusic.com/features/nuff-wheel-ups-exploring-dubplate-culture/', label: 'Clash : Nuff wheel ups, exploring dubplate culture'},
    {href: 'https://legacy.boilerroom.tv/dubstep-from-croydon-to-kreuzberg-beyond/', label: 'Boiler Room : Dubstep from Croydon to Kreuzberg and beyond'},
    {href: 'https://www.factmag.com/2015/06/03/transatlantic-vibrations-10-years-of-dmz-and-dub-war/', label: 'FACT : Ten years of DMZ and Dub War'},
    {href: 'https://djmag.com/features/how-big-apple-records-became-birthplace-of-dubstep', label: 'DJ Mag : How Big Apple Records became the birthplace of dubstep'}
  ],

  bandcamp: {
    description: 'Ces sorties sont les plus proches du côté breaks et basses de cet article. En acheter une soutient directement mon travail.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks par thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 par thecatrave'}
    ]
  }
};
