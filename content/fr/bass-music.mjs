// French bass music guide. Structure and facts from the English page
// (bass-music-draft.md, build-bass-music-article.mjs), as the English page
// renders them: the English generator leaves out a few draft paragraphs (the
// lead of the "different scenes" section, the note after the footwork
// paragraphs, the draft's editorial notes) and writes three paragraphs of its
// own (footwork and gqom together, the records intro, the playlist line); the
// translation follows the page, not the draft.
//
// French keywords (keywords/fr-bass-music.json): bass music 80 a month in
// France, traffic potential 100 (TRANSLATION-RESEARCH.md, stage 1). The
// wording was checked in the Bing fr-FR results on 2026-09-23 (Google answered
// with a bot check), no Ahrefs units spent: fr.wikipedia has its own "Bass
// music" article, a result title asks "Qu'est-ce que la Bass Music ?", and the
// related searches add "musique electro bass". The download and "musique avec
// des basses" searches are other intents and are rejected (WRITING.md).
//
// Images as on the English page, at the owner's decision on 2026-09-23 ("with
// images as is"), although they are hotlinked from rights-reserved sources;
// logged open in defects.json (bass-music-guide-hotlinked-images). The players,
// route cards and the owner's music are built in content/bass-music-media.mjs;
// the figures and tables here, from its bassMusicImages.
import {articleFigure, articleTable} from '../../site-components.mjs';
import {bassMusicImages, bassMusicMedia} from '../bass-music-media.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const copy = {
  onYoutube: 'sur YouTube',
  onSpotify: 'sur Spotify',
  byThecatraveOnSoundcloud: 'par thecatrave sur SoundCloud',
  listenWhileYouRead: 'À écouter en lisant',
  globalVisual: {
    alt: 'Index visuel des histoires de la bass music à Kingston, Miami, en Grande-Bretagne, à Los Angeles, Chicago et Durban',
    caption: 'Un seul terme relie plusieurs histoires locales. Il ne remplace pas leurs noms.'
  },
  figures: {
    kingTubby: {alt: 'La console de mixage MCI qui appartenait à King Tubby et qu’il utilisait', caption: 'La console de studio de King Tubby représente le dub comme une pratique qui reconstruit la musique enregistrée.'},
    miami: {alt: 'Les DJ mobiles de Miami Loc Ace et Vic avec un grand système d’enceintes', caption: 'La Miami bass s’est développée à travers les DJ mobiles, les fêtes pour adolescents, les voitures et les systèmes d’enceintes, et non comme un ajout américain tardif au dubstep.'},
    nightSlugs: {alt: 'Pochette d’un EP de Night Slugs', caption: 'Night Slugs est devenu un repère utile de la collision, à la fin des années 2000, entre les langages du grime, du garage, de la house, du funky et du dubstep.'},
    footwork: {alt: 'Des danseurs de footwork à Chicago', caption: 'Le footwork de Chicago a grandi à travers les crews de danse et les battles avant que des labels internationaux élargissent son public.'},
    gqom: {alt: 'Distruction Boyz, producteurs associés au gqom de Durban', caption: 'L’histoire locale du gqom appartient aux fêtes, aux taxis et aux réseaux numériques de Durban, même quand une programmation internationale le place à côté de la bass music.'}
  },
  bands: {
    throwTheD: 'La 808 tenue, le tempo, les chants scandés et les consignes de danse placent fermement le disque dans le hip-hop de Miami.',
    weAreIE: 'Un disque charnière où se rencontrent le breakbeat hardcore, la basse du sound system et le langage rythmique de la jungle.',
    zodiacShit: 'La culture beat de Low End Theory à Los Angeles, entendue à travers un rythme hip-hop compressé, des détails psychédéliques et des basses instables.',
    babyComeOn: 'Un disque fondateur du footwork de Chicago, fait pour les danseurs, avec des samples hip-hop hachés et des batteries syncopées.',
    iceDrop: 'Un disque de gqom de Durban dépouillé, dont la pression lourde et asymétrique fait sonner la scène différemment des catégories de bass britanniques et américaines.'
  },
  collections: {
    northAmerica: 'Deux disques qui montrent comment la bass music nord-américaine a changé d’échelle et est passée dans la culture des festivals.',
    british: 'Six disques rendent audibles les différences au sein du continuum britannique. Ils partagent une infrastructure, mais pas un rythme ni un genre.',
    contemporary: 'Huit disques rendent audibles les principales étiquettes nord-américaines des années 2010. Ils se recoupent par le public et l’infrastructure, mais leur rythme, leur registre émotionnel et leur approche du sound design ne sont pas interchangeables.'
  },
  genres: {
    northAmerica: ['DUBSTEP AMÉRICAIN', 'TRAP ÉLECTRONIQUE'],
    british: ['JUNGLE', 'DRUM AND BASS', 'UK GARAGE', 'GRIME', 'BASSLINE', 'UK FUNKY'],
    contemporary: ['BASS HOUSE', 'FUTURE BASS', 'RIDDIM', 'GLITCH-HOP / LA BASS', 'MELODIC BASS', 'MIDTEMPO', 'BASS EXPÉRIMENTALE', 'FREEFORM BASS']
  },
  lookTrack: 'Future bass, glitch et breakbeat à 140 BPM, l’un des hybrides de cette carte. Mon propre morceau.',
  mixes: {
    weekends: {
      title: 'I Lost So Many Weekends Raving and I Wanna Lose Some More.',
      description: 'Un exemple actuel du DJ set comme infrastructure : breaks, basses, musique club et techno reliés par l’enchaînement plutôt qu’écrasés en un seul genre.'
    },
    silence: {
      title: 'I Like to Smoke in Silence After Raves.',
      description: 'J’ai passé environ quatre mois à organiser ces 30 morceaux en un seul arc. Le set traite les breaks, les basses, la pression du garage et la musique club expérimentale comme la matière d’un seul set, sans prétendre qu’ils forment un seul genre.'
    }
  },
  tables: {
    scenes: {
      key: 'Table: scènes',
      headers: ['Scène', 'Cadre historique', 'Points de départ'],
      rows: [
        ['Dub et sound systems', 'Kingston, Grande-Bretagne', 'King Tubby, Scientist, Jah Shaka, Adrian Sherwood'],
        ['Jungle, D&B, garage, grime, dubstep', 'Radios pirates et réseaux club britanniques', 'Goldie, Wiley, Digital Mystikz, Burial, Cooly G'],
        ['Miami bass et culture américaine des basses', 'Fêtes, voitures et rap du sud de la Floride', 'Pretty Tony, Maggotron, 2 Live Crew, Dynamix II'],
        ['Footwork et gqom', 'Battles de danse à Chicago ; fêtes et taxis à Durban', 'RP Boo, DJ Rashad, DJ Lag, Rudeboyz'],
        ['Bass house, future bass et hybrides', 'Réseaux en ligne et de festivals', 'Employer le nom du genre local chaque fois qu’il est connu']
      ]
    },
    records: {
      key: 'Table: disques',
      headers: ['Disque', 'Pourquoi il compte'],
      rows: [
        ['Augustus Pablo et King Tubby, King Tubby Meets Rockers Uptown', 'Le dub comme arrangement, version et espace dans les graves.'],
        ['2 Live Crew, Throw the D', 'Une référence précoce de la Miami bass, construite autour de la pression tenue de la 808 et des consignes de danse.'],
        ['LFO, LFO', 'Le bleep, la sub-basse et une route du nord de l’Angleterre vers la rave.'],
        ['Lennie De Ice, We Are I.E.', 'Un disque charnière pour la jungle qui naît du hardcore.'],
        ['Wiley, Eskimo', 'Le minimalisme du grime et l’espace des radios pirates.'],
        ['Digital Mystikz, Anti War Dub', 'Le dubstep comme rituel de sound system.'],
        ['Joy Orbison, Hyph Mngo', 'Le garage, le dubstep et la house deviennent difficiles à séparer.'],
        ['Addison Groove, Footcrab', 'L’échange entre le Royaume-Uni et Chicago via Swamp81.'],
        ['Skrillex, Scary Monsters and Nice Sprites', 'Un changement nord-américain d’échelle et de timbre.'],
        ['TNGHT, Higher Ground', 'Le rythme du rap du Sud rencontre l’électronique des festivals.'],
        ['DJ Rashad, Let U No', 'Le footwork porte un poids émotionnel au-delà du rythme de nouveauté.'],
        ['DJ Lag, Ice Drop', 'Le gqom voyage à l’international sans perdre son identité de Durban.']
      ]
    }
  },
  routes: [
    ['Systèmes et fondations', 'Commencez par King Tubby et Augustus Pablo, Linton Kwesi Johnson et la première Miami bass. Le but n’est pas de trouver un seul disque de départ. Il est d’entendre comment différentes communautés ont mis les basses au centre avant que le terme parapluie existe.'],
    ['Le continuum britannique des basses', 'Passez du bleep et de la jungle au UK garage, au grime, au dubstep et à la période hybride de la fin des années 2000. Une bonne route devrait inclure LFO, Lennie De Ice, DJ Zinc, Wiley, Digital Mystikz, Burial, Joy Orbison et Addison Groove, sans laisser entendre que chaque transition a été fluide ou acceptée partout.'],
    ['Sens américains et échanges sans frontières', 'Reliez la Miami bass, la beat music de Los Angeles, le dubstep américain, la trap électronique, le footwork et une sélection d’échanges internationaux. Gardez les noms des genres locaux et servez-vous du mix pour montrer le contact plutôt que la propriété.']
  ]
};

export default {
  lang: 'fr',
  name: 'fr-bass-music',
  file: 'fr/bass-music.html',
  draft: 'fr/bass-music-draft.md',
  canonical: 'https://thecatrave.com/fr/bass-music',
  englishPath: '/bass-music-guide',
  ogImage: 'https://thecatrave.com/img/og/bass-music.jpg',
  image: 'https://thecatrave.com/img/bass-music/miami-bass-loc-ace-vic-1400.jpg',
  bodyClass: 'article-page bass-music-page',
  minReadingMinutes: 12,

  title: 'Qu’est-ce que la bass music ? Histoire, genres et morceaux clés',
  description: 'Ce que veut dire bass music, et comment la culture du sound system, la Miami bass, la rave britannique, Los Angeles, Chicago et Durban ont façonné son histoire.',
  datePublished: '2026-09-23',
  dateModified: '2026-09-23',
  dateLabel: '23 septembre 2026',

  heroKicker: 'Guide de la bass music',
  heroTitle: 'Qu’est-ce que la bass music\u00a0?',
  deck: 'Une histoire guidée par les scènes, de la Jamaïque à Miami, la Grande-Bretagne, Los Angeles, Chicago, Durban et la culture club hybride d’aujourd’hui.',
  answerLabel: 'Définition de la bass music',
  breadcrumbName: 'Bass music',

  answerSection: 'Définition',
  introSection: 'Introduction',
  introTitle: 'La bass music n’est pas un seul son.',
  faqSection: 'FAQ',
  faqLabel: 'Questions fréquentes sur la bass music',
  faqTitle: 'Questions fréquentes sur la bass music.',

  sections: [
    {id: 'origins', heading: 'D’où vient la bass music ? La Jamaïque, Miami et la rave britannique', title: 'D’où vient la bass music\u00a0?', kicker: 'Jamaïque / Miami / Grande-Bretagne', tocLabel: 'D’où vient la bass music', subsections: ['jamaica', 'miami', 'britain']},
    {id: 'umbrella', heading: 'Comment la bass music est devenue un terme parapluie et a voyagé', title: 'Comment la bass music est devenue un terme parapluie et a voyagé.', tocLabel: 'Comment le terme a voyagé'},
    {id: 'meanings', heading: 'Pourquoi la bass music veut dire des choses différentes selon les scènes', title: 'Pourquoi la bass music veut dire des choses différentes selon les scènes.', tocLabel: 'Pourquoi le terme change selon la scène', subsections: ['uk-bass', 'american-bass', 'footwork-gqom']},
    {id: 'types', heading: 'Les types de bass music : une carte d’écoute, scène par scène', title: 'Les types de bass music : une carte d’écoute, scène par scène.', tocLabel: 'Les types de bass music', subsections: ['dub-lineage', 'british-scenes', 'miami-trap', 'footwork-gqom-exchange', 'hybrids']},
    {id: 'infrastructure', heading: 'Comment vit la bass music : sound systems, radios pirates, clubs et labels', title: 'Comment vit la bass music : sound systems, radios pirates, clubs et labels.', tocLabel: 'Systèmes, radios, clubs et labels'},
    {id: 'records', heading: 'Les artistes et les disques de bass music qui ont changé la culture', title: 'Les artistes et les disques de bass music qui ont changé la culture.', tocLabel: 'Les disques qui ont changé la culture'},
    {id: 'today', heading: 'La bass music aujourd’hui : sets hybrides et frontières de genre brouillées', title: 'La bass music aujourd’hui : sets hybrides et frontières de genre brouillées.', tocLabel: 'La bass music aujourd’hui'},
    {id: 'where-to-start', heading: 'Par où commencer avec la bass music : morceaux, playlists et mixes', title: 'Par où commencer avec la bass music : morceaux, playlists et mixes.', tocLabel: 'Par où commencer l’écoute'},
    {id: 'useful', heading: '« Bass music » est-il encore un terme utile ?', title: '« Bass music » est-il encore un terme utile\u00a0?', tocLabel: 'Le terme est-il encore utile ?'}
  ],

  media: ({lang}) => ({
    ...bassMusicMedia(lang, copy),
    ...Object.fromEntries(Object.entries(bassMusicImages).map(([name, [key, src, width, height, className]]) => [key,
      articleFigure({src, width, height, alt: copy.figures[name].alt, caption: escapeHtml(copy.figures[name].caption), className})])),
    [copy.tables.scenes.key]: articleTable({headers: copy.tables.scenes.headers, rows: copy.tables.scenes.rows.map(row => row.map(escapeHtml)), className: 'bass-scene-table'}),
    [copy.tables.records.key]: articleTable({headers: copy.tables.records.headers, rows: copy.tables.records.rows.map(row => row.map(escapeHtml)), className: 'bass-record-table'})
  }),

  // The English page's sources, URL for URL, with translated labels.
  sources: [
    {href: 'https://www.gold.ac.uk/cucr/research/bass-culture/', label: 'Goldsmiths : Bass Culture Research'},
    {href: 'https://mopop.emuseum.com/objects/95703/mci-mixing-console-formerly-owned-and-operated-by-king-tubby', label: 'MoPOP : la console de mixage MCI de King Tubby'},
    {href: 'https://daily.redbullmusicacademy.com/2019/09/miami-bass-mobile-djs-regulating-oral-history/', label: 'Red Bull Music Academy : histoire orale des DJ mobiles de la Miami bass'},
    {href: 'https://djmag.com/features/rise-fall-and-revival-uk-dubplate-culture', label: 'DJ Mag : la culture dubplate britannique'},
    {href: 'https://www.laweekly.com/a-history-of-bass-music-in-los-angeles/', label: 'LA Weekly : A history of bass music in Los Angeles'},
    {href: 'https://www.npr.org/sections/therecord/2011/05/11/136209254/footwork-chicago-dance-music-with-a-need-for-speed', label: 'NPR : le footwork de Chicago'},
    {href: 'https://ra.co/exchange/336', label: 'Resident Advisor Exchange : DJ Lag et Nan Kolè'},
    {href: 'https://www.afropop.org/articles/distruction-boyz', label: 'Afropop Worldwide : Distruction Boyz et le gqom'},
    {href: 'https://mixmag.net/feature/a-trip-through-the-u-s-west-coast-bass-scene', label: 'Mixmag : la scène bass de la côte Ouest des États-Unis'}
  ],

  bandcamp: {
    description: 'Ces sorties sont les plus proches de l’histoire du breakbeat et des basses racontée dans cet article. En acheter une soutient directement mon travail.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks par thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 par thecatrave'}
    ]
  }
};
