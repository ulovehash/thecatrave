// French guide to the history of German electronic music. Structure, records,
// images, graphic and order are the English page's (build-german-electronic-
// article.mjs), shared through content/german-electronic-shared.mjs; the
// French draft is fr/german-electronic-music-draft.md.
//
// The English page's summary banner is hard-coded in its generator; here it is
// the draft's "Résumé" section. The photographs are the English
// guide's, with translated captions.
import {germanElectronicMedia} from '../german-electronic-shared.mjs';

const text = {
  figures: {
    kraftwerk: {
      alt: 'Ralf Hütter et Henning Schmitz de Kraftwerk sur scène derrière des pupitres électroniques au Bestival en 2009',
      caption: 'Kraftwerk a fait du son électronique, du graphisme et d’une performance contrôlée un seul système. Photo : Mike Mantin, CC BY 2.0.'
    },
    stockhausen: {
      alt: 'Karlheinz Stockhausen debout parmi du matériel électronique au studio de la WDR à Cologne en 1991',
      caption: 'Stockhausen au studio de la WDR en 1991. La pièce avait été construite pour la composition électronique, pas pour la musique de club. Photo : Kathinka Pasveer, CC BY-SA 3.0.'
    },
    loveParade: {
      alt: 'Une grande foule remplit la Straße des 17. Juni pendant la Loveparade à Berlin en 1998',
      caption: 'La Loveparade sur la Straße des 17. Juni en 1998, après qu’une manifestation underground est devenue un événement de masse. Photo : Ago76, domaine public.'
    }
  },
  svg: {
    tag: 'Un schéma, pas un arbre généalogique',
    title: 'Musique électronique allemande par ville et par époque',
    desc: 'Un schéma qui relie le studio électronique de Cologne, la pop électronique de Düsseldorf, la musique de séquenceur de Berlin-Ouest, la techno et la trance de Francfort et la techno berlinoise d’après la chute du Mur.',
    caption: 'La ligne marque l’évolution de l’infrastructure et des échanges. Elle ne prétend pas qu’une ville a inventé la suivante.',
    labels: [
      ['Cologne', 'Cologne'], ['WDR studio', 'Studio WDR'], ['1970s', 'Années 1970'],
      ['electronic pop', 'pop électronique'], ['West Berlin', 'Berlin-Ouest'], ['sequencer music', 'musique de séquenceur'],
      ['1980s-90s', '1980-90'], ['techno and trance', 'techno et trance'],
      ['1989 onward', 'Dès 1989'], ['Detroit alliance', 'Alliance avec Détroit'], ['Tresor, minimal', 'Tresor, minimal']
    ]
  },
  mobile: [
    ['1951', 'Cologne', 'Le studio électronique de la WDR, Herbert Eimert et Karlheinz Stockhausen.'],
    ['Années 1970', 'Düsseldorf', 'Kraftwerk, NEU!, pop électronique et répétition motorik.'],
    ['Années 1970', 'Berlin-Ouest', 'Tangerine Dream, Klaus Schulze et musique de séquenceur de longue durée.'],
    ['Années 1980 à 1990', 'Francfort', 'Technoclub, Omen, infrastructure de la techno et de la trance.'],
    ['Dès 1989', 'Berlin', 'L’alliance avec Détroit, le Tresor et plus tard la minimal techno.']
  ],
  figcaption: 'Un schéma de l’infrastructure et des échanges en évolution, sans prétendre qu’une ville a inventé la suivante.',
  figcaptionLink: 'Télécharger le graphique haute résolution',
  videos: {
    kraftwerk: {
      label: 'Kraftwerk, Autobahn', genre: 'Düsseldorf, 1974',
      description: 'Le virage de Kraftwerk en 1974 vers le rythme électronique, la mélodie et une image composée de l’Allemagne moderne, sur la chaîne officielle du groupe.'
    },
    daf: {
      label: 'DAF, Der Mussolini', genre: 'Düsseldorf, 1981',
      description: 'Un motif de batterie austère, une courte séquence électronique et l’ordre lancé par Gabi Delgado : DAF a rendu la musique de machine physique.'
    }
  },
  klang: {
    title: '3 Phase featuring Dr. Motte, Der Klang der Familie.',
    description: 'La sixième sortie de Tresor Records fait de l’espace berlinois des débuts un disque tendu et direct. C’est la sortie originale remasterisée, sur le compte de Dr. Motte.',
    iframeTitle: 'Der Klang der Familie et Open Your Mind de 3 Phase featuring Dr. Motte sur SoundCloud'
  },
  routes: {
    title: 'Trois chemins à travers les années 1990 allemandes.',
    description: 'La trance de Francfort, la trance mélodique de Berlin et la dub techno n’ont pas convergé vers un style national.',
    notes: [
      'Le chemin mélodique de Francfort, porté par Eye Q et le réseau Rhin-Main au sens large.',
      'Un disque de trance berlinois dont la longue vie montre jusqu’où allait le réseau de clubs allemand.',
      'Deux longues versions faites de pression, d’écho et de minuscules changements : une fondation pour la dub techno.'
    ]
  },
  own: {
    berlin: 'Un chemin berlinois d’aujourd’hui : batterie breakbeat avec écho dub techno et de l’espace. C’est un de mes morceaux.',
    noGenre: 'Glitch, IDM et ambient sans scène à laquelle appartenir. C’est un de mes morceaux.'
  },
  table: {
    label: 'Villes et régions de la musique électronique allemande, périodes et points de départ pour l’écoute',
    headers: ['Ville ou région', 'Période principale ici', 'Ce qui a changé', 'Commencer par'],
    rows: [
      ['Cologne', 'Dès 1951', 'Un studio électronique construit à cet effet ; plus tard un label et un réseau de distribution', 'Stockhausen, Wolfgang Voigt, Kompakt'],
      ['Düsseldorf', 'Années 1970 et début des années 1980', 'Pop électronique, répétition motorik, musique de corps post-punk', 'Kraftwerk, NEU!, DAF'],
      ['Berlin-Ouest', 'Années 1970 et début des années 1980', 'Musique de séquenceur de longue durée', 'Tangerine Dream, Klaus Schulze, Manuel Göttsching'],
      ['Francfort / Rhin-Main', 'Années 1980 et 1990', 'Premières infrastructures de club électronique et trance', 'Talla 2XLC, Sven Väth, Eye Q, Harthouse'],
      ['Berlin', 'Dès 1989', 'Alliance avec Détroit, clubs d’après la chute du Mur, techno dure et minimale', 'Tresor, Basic Channel, Paul van Dyk, Monolake'],
      ['RDA', 'Années 1980', 'Musique électronique avec peu de matériel et des enregistrements contrôlés par l’État', 'Reinhard Lakomy, Pond, Key, Servi']
    ]
  }
};

const sections = [
  {id: 'cities', heading: 'Pourquoi les villes comptent', title: 'Pourquoi les villes comptent.'},
  {id: 'cologne', heading: 'Cologne : le son électronique avant la pop électronique', title: 'Cologne : le son électronique avant la pop électronique.', kicker: 'Dès 1951'},
  {id: 'dusseldorf-west-berlin', heading: 'Düsseldorf et Berlin-Ouest : deux avenirs différents dans les années 1970', title: 'Düsseldorf et Berlin-Ouest : deux avenirs différents.', kicker: 'Années 1970'},
  {id: 'eighties', heading: 'Les années 1980 : corps, machines et pays divisé', title: 'Corps, machines et pays divisé.', kicker: 'Années 1980'},
  {id: 'techno', heading: 'La techno arrive à Francfort et à Berlin', title: 'La techno arrive à Francfort et à Berlin.', kicker: 'Années 1980 au début des années 1990'},
  {id: 'three-routes', heading: 'Trois chemins à travers les années 1990', title: 'Trois chemins à travers les années 1990.', kicker: 'Années 1990'},
  {id: 'after-2000', heading: 'Après 2000 : clubs, logiciels et scènes sans centre', title: 'Clubs, logiciels et scènes sans centre.', kicker: 'Dès 2000'},
  {id: 'scene-guide', heading: 'Un bref aperçu des principales scènes électroniques allemandes', title: 'Un bref aperçu des principales scènes électroniques allemandes.'}
];

export default {
  lang: 'fr',
  name: 'fr-german-electronic-music',
  file: 'fr/musique-electronique-allemande.html',
  draft: 'fr/german-electronic-music-draft.md',
  canonical: 'https://thecatrave.com/fr/musique-electronique-allemande',
  englishPath: '/german-electronic-music',
  ogImage: 'https://thecatrave.com/img/og/german-electronic.jpg',
  image: 'https://thecatrave.com/img/german-electronic/kraftwerk-stage-1200.webp',
  bodyClass: 'article-page german-electronic-page',

  title: 'Musique électronique allemande : de Kraftwerk à la techno',
  description: 'Comment la musique électronique allemande s’est formée : du studio de Cologne et Kraftwerk à l’école de Berlin, la techno, la trance et la culture club actuelle.',
  datePublished: '2026-10-01',
  dateModified: '2026-10-01',
  dateLabel: '1er octobre 2026',

  heroKicker: 'Histoire de la musique électronique allemande',
  heroTitle: 'L’histoire de la musique électronique allemande',
  deck: 'Des studios sur bande de Cologne et de Kraftwerk à la trance de Francfort, l’alliance entre Détroit et Berlin et la minimal techno, jusqu’aux outils qui ont fait le tour du monde.',
  answerLabel: 'HISTOIRE DE LA MUSIQUE ÉLECTRONIQUE ALLEMANDE',
  breadcrumbName: 'Histoire de la musique électronique allemande',

  answerSection: 'Résumé',
  introSection: 'Introduction',
  introTitle: 'Plusieurs histoires, reliées par des machines et des lieux.',
  faqSection: 'FAQ',
  faqLabel: 'FAQ',
  faqTitle: 'Questions fréquentes sur la musique électronique allemande.',

  sections,
  media: ({lang}) => germanElectronicMedia({lang, text}),

  sources: [
    {href: 'https://www1.wdr.de/unternehmen/der-wdr/profil/chronik/nordwestdeutscher-rundfunk-100.html', label: 'WDR : Herbert Eimert et le Studio de musique électronique (en allemand)'},
    {href: 'https://www.goethe.de/ins/ca/en/kul/loe/mag/20708594.html', label: 'Goethe-Institut : Düsseldorf et la musique électronique (en anglais)'},
    {href: 'https://www.tangerinedreammusic.com/en/music/detail.asp?id=12&tit=Phaedra', label: 'Tangerine Dream : Phaedra (en anglais)'},
    {href: 'https://www.higher-frequency.com/e_interview/manuel_gottsching/index.htm', label: 'Higher Frequency : entretien avec Manuel Göttsching (en anglais)'},
    {href: 'https://www.redbullmusicacademy.com/lectures/daf-lecture/', label: 'Red Bull Music Academy : entretien avec DAF (en anglais)'},
    {href: 'https://daily.redbullmusicacademy.com/2013/09/east-german-electronic-music-oral-history/', label: 'Red Bull Music Academy : la musique électronique en RDA (en anglais)'},
    {href: 'https://www.goethe.de/ins/ca/de/kul/kue/tkl/22933101.html', label: 'Goethe-Institut : la techno allemande depuis 1989 (en allemand)'},
    {href: 'https://www.bpb.de/themen/recht-justiz/513688/die-geschichte-von-techno-und-der-loveparade/', label: 'Bundeszentrale für politische Bildung : techno et Loveparade (en allemand)'},
    {href: 'https://tresorberlin.com/info/about/', label: 'Tresor : histoire du club et du label (en anglais)'},
    {href: 'https://www.unesco.de/staette/technokultur-in-berlin/', label: 'Commission allemande pour l’UNESCO : la culture techno de Berlin (en allemand)'},
    {href: 'https://kompakt.fm/releases/20_jahre_kompakt_kollektion_2_2xlp', label: 'Kompakt : histoire pour les 20 ans du label (en anglais)'},
    {href: 'https://www.ableton.com/en/pages/press/releases/2002_09_12/', label: 'Ableton : premières années de l’entreprise (en anglais)'},
    {href: 'https://taz.de/Gruender-ueber-25-Jahre-Distillery-Leipzig/!5456075/', label: 'taz : entretien sur la fondation de la Distillery de Leipzig (en allemand)'}
  ],

  bandcamp: {
    description: 'Berlin Race 1909 est mon propre chemin à travers le rythme de machine et la pression rave. L’acheter soutient directement la musique et cette publication.',
    tracks: [
      {title: 'thecatrave, Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 par thecatrave'}
    ]
  }
};
