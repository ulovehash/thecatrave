// French live DJ sets guide. Structure, facts and media from the English page
// (live-dj-sets-draft.md, build-live-dj-sets-article.mjs). Wording is the page's own
// (the Google SERP check was blocked by a bot-check, so it was not verified there);
// volumes are null in keywords/fr-live-dj-sets.json. The images are the English guide's,
// with translated captions.

import {catalogueSets} from '../../catalogue.mjs';
import {
  articleFigure, articleListeningBand, articleTable, articleYoutubeEmbed, ownSetListening
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const catalogue = catalogueSets('fr');

const yt = (id, label) => articleYoutubeEmbed({src: `https://www.youtube-nocookie.com/embed/${id}`, title: label});

const figure = (name, width, height, alt, caption, className, widths) => articleFigure({
  src: `img/live-dj-sets/${name}-${width}.webp`,
  srcset: `img/live-dj-sets/${name}-320.webp 320w, img/live-dj-sets/${name}-${width}.webp ${width}w`,
  ...(widths ? {sizes: widths} : {}),
  width, height, alt, caption, className
});

export default {
  lang: 'fr',
  name: 'fr-live-dj-sets',
  file: 'fr/regarder-des-sets-dj-en-direct.html',
  draft: 'fr/live-dj-sets-draft.md',
  canonical: 'https://thecatrave.com/fr/regarder-des-sets-dj-en-direct',
  englishPath: '/live-dj-sets',
  ogImage: 'https://thecatrave.com/img/og/live-dj-sets.jpg',
  bodyClass: 'article-page live-dj-sets-page',
  minReadingMinutes: 8,

  title: 'Regarder des sets DJ en direct : Boiler Room, HÖR, NTS',
  description: 'Où regarder des sets DJ en direct en ligne, de Boiler Room et HÖR à NTS, Rinse FM, The Lot Radio, Kiosk et Cercle, avec liens et pistes d’écoute.',
  datePublished: '2026-10-01',
  dateModified: '2026-10-01',
  dateLabel: '2 octobre 2026',

  heroKicker: 'Sets DJ en direct',
  heroTitle: 'Regarder des sets DJ en direct en ligne',
  deck: ('Boiler Room, HÖR, NTS, Rinse FM et les chaînes indépendantes qui filment des DJ sets, avec un moyen de choisir parmi {SETS} enregistrements sans algorithme.').replace('{SETS}', catalogue),
  answerLabel: 'REGARDER DES SETS DJ EN DIRECT',
  breadcrumbName: 'Regarder des sets DJ en direct en ligne',

  answerSection: 'Réponse',
  introSection: 'Introduction',
  introTitle: 'Où poser la caméra.',
  faqSection: 'FAQ',
  faqLabel: 'Questions fréquentes',
  faqTitle: 'Questions fréquentes sur les sets DJ en direct.',

  sections: [
    {id: 'pirate-radio', heading: 'Avant la caméra : la radio pirate', title: 'Avant la caméra : la radio pirate.', tocLabel: 'Avant la caméra : la radio pirate'},
    {id: 'boiler-room', heading: 'Boiler Room : ce que c’est, et ce qu’est un set Boiler Room', title: 'Boiler Room : ce que c’est, et ce qu’est un set Boiler Room.', tocLabel: 'Boiler Room'},
    {id: 'radio-with-a-camera', heading: 'Radio avec caméra : NTS, The Lot Radio et Kiosk Radio', title: 'Radio avec caméra : NTS, The Lot Radio et Kiosk Radio.', tocLabel: 'NTS, The Lot Radio et Kiosk Radio'},
    {id: 'other-formats', heading: 'Autres façons de filmer un set : The Lab, Cercle et Keep Hush', title: 'Autres façons de filmer un set : The Lab, Cercle et Keep Hush.', tocLabel: 'The Lab, Cercle et Keep Hush'},
    {id: 'hor-and-2020', heading: '2020 : HÖR, et l’année où chaque club est devenu un flux', title: '2020 : HÖR, et l’année où chaque club est devenu un flux.', tocLabel: '2020 et HÖR'},
    {id: 'owners', heading: 'À qui appartiennent les plateformes aujourd’hui', title: 'À qui appartiennent les plateformes aujourd’hui.'},
    {id: 'numbers', heading: 'Les sets DJ en direct en chiffres', title: 'Les sets DJ en direct en chiffres.', kicker: 'Mesuré'},
    {id: 'where-to-watch', heading: 'Où regarder des sets DJ en direct', title: 'Où regarder des sets DJ en direct.'}
  ],

  media: ({lang}) => ({
    'Rinse 2001': articleListeningBand({
      platform: 'soundcloud', id: 'rinse-2001', kicker: 'Essential listening', title: 'Pay As U Go Cartel dans l’émission de Slimzee, Rinse FM, 2001.',
      description: 'Une diffusion pirate de neuf ans avant que Rinse soit légale : des MC sur du garage, mise en ligne par le cofondateur de la station lui-même.',
      src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/103244834&color=%23ff5a36&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false',
      iframeTitle: 'Pay As U Go Cartel, Slew Show, Rinse FM 2001, sur le SoundCloud de Slimzee', fullBleed: true, tone: 'cyan'
    }),
    'Rinse grime': yt('1wk3uOxQ5F4', 'Grime Show : P Money, D Double E, Big Narstie et Jammer, sur la chaîne YouTube de Rinse FM, 2014'),
    'Rinse studio': figure('rinse-studio', 900, 1200, 'Une présentatrice rit dans un micro Rinse dans le studio de Rinse FM, le logo Rinse sur le mur derrière elle', 'Le studio de Rinse en 2022, légal depuis onze ans à cette date et bien loin des cuisines et des chambres d’où il émettait comme station pirate. Photo : Khadejia, CC BY-SA 4.0.', 'portrait-image', '(max-width: 760px) 100vw, 480px'),
    'Red Light': figure('red-light-radio', 612, 612, 'Un DJ et une présentatrice dans le studio éclairé en rouge de Red Light Radio à Amsterdam, des gens passant devant la fenêtre derrière eux', 'À l’intérieur de Red Light Radio sur l’Oudekerksplein : le DJ aux platines, la présentatrice au micro et la rue à une vitre de distance. Photo : Kars Alfrink, CC BY 2.0.', 'portrait-image', '(max-width: 760px) 100vw, 612px'),
    'Lot Radio': figure('the-lot-radio', 1200, 800, 'La DJ Daria Kolomiec dans la cabine de The Lot Radio, dont les murs sont couverts d’autocollants', 'Daria Kolomiec dans la cabine de The Lot Radio en juillet 2022. Le studio occupe la moitié d’un conteneur de 20 pieds ; l’autre moitié vend du café. Photo : Ohwellimhere, CC BY-SA 4.0.', 'wide-archive-image', undefined),
    'Floating Points': yt('kiy05zewUpg', 'Floating Points, set de cinq heures, Boiler Room New York, sur la chaîne YouTube de Boiler Room'),
    'Nina Kraviz': yt('oC969p-rxfo', 'Nina Kraviz à The Lot Radio, 21 mars 2017, sur la chaîne YouTube de The Lot Radio'),
    'Acid Arab': yt('kumeF99xnoM', 'Acid Arab à Kiosk Radio, Bruxelles, 23 janvier 2020, sur la chaîne YouTube de Kiosk Radio'),
    'Black Coffee': yt('f0coQKqxzU0', 'Black Coffee dans The Lab LDN, sur la chaîne YouTube de Mixmag, 2014'),
    'Cercle first': yt('ttFxqD8qWYg', 'Cercle : la première émission, To Van Kao dans le salon de Derek Barbolla, Paris, sur la chaîne YouTube de Cercle'),
    'Tasha': yt('zzoxXIHJcFI', 'Tasha, set de jungle tout en vinyle, Keep Hush Live : 1985 Music Takeover 2, sur la chaîne YouTube de Keep Hush'),
    'Disclosure': yt('QA0EdK2RjPg', 'Disclosure, Boiler Room : Streaming From Isolation #13, sur la chaîne YouTube de Boiler Room, 2020'),
    'Ellen Allien': yt('GG2IQguY-J0', 'Ellen Allien à HÖR Berlin, 4 avril 2020, sur la chaîne YouTube de HÖR'),
    'Boris Brejcha': yt('vqz8c4ZP3Wg', 'Boris Brejcha au Grand Palais à Paris pour Cercle, 2019, sur la chaîne YouTube de Cercle'),
    'own-mix-1': ownSetListening(0, lang, 'Un set n’a pas toujours besoin de caméra : trente morceaux de breaks, de garage, de bass et de grime. Mon propre mix.'),
    'own-mix-2': ownSetListening(1, lang, 'Un mix enregistré pour l’écoute à la maison, comme 2020 a poussé tout le monde à écouter. Mon propre set.'),
    'Table: numbers': articleTable({
      headers: ['Diffuseur', 'Sets', 'Premier upload', 'Vues', 'Set le plus regardé'],
      rows: [
        ['Boiler Room', '8 206', '2012', '1 774 M', 'Solomun, Tulum, 2015 (76,2 M)'],
        ['Cercle', '178', '2016', '984 M', 'Boris Brejcha, Grand Palais, 2019 (68,4 M)'],
        ['Mixmag', '1 943', '2012', '464 M', 'Alison Wonderland, The Lab LA, 2015 (15,4 M)'],
        ['HÖR', '9 708', '2019', '239 M', '¥ØU$UK€ ¥UK1MAT$U, 2022 (5,4 M)'],
        ['The Lot Radio', '9 998', '2017', '50 M', 'Adam Port, 2024 (3,9 M)'],
        ['Rinse FM', '895', '2013', '19 M', 'Grime Show: P Money, D Double E, Big Narstie & Jammer, 2014 (1,0 M)'],
        ['NTS Radio', '264', '2015', '13 M', 'Aphex Twin au Field Day, 2017 (1,7 M)'],
        ['Keep Hush', '1 517', '2016', '12 M', '¥ØU$UK€ ¥UK1MAT$U, Tokyo, 2022 (0,9 M)'],
        ['Kiosk Radio', '8 558', '2018', '8 M', 'Acid Arab, 2020 (0,2 M)']
      ].map(row => row.map(escapeHtml))
    })
  }),

  sources: [
    {href: 'https://en.wikipedia.org/wiki/Rinse_FM', label: 'Wikipedia: Rinse FM'},
    {href: 'https://en.wikipedia.org/wiki/Red_Light_Radio', label: 'Wikipedia: Red Light Radio'},
    {href: 'https://ra.co/news/72625', label: 'Resident Advisor: Amsterdam\'s Red Light Radio will close in June'},
    {href: 'https://en.wikipedia.org/wiki/Boiler_Room_%28music_broadcaster%29', label: 'Wikipedia: Boiler Room (music broadcaster)'},
    {href: 'https://boilerroom.tv/playlist/streaming-from-isolation/', label: 'Boiler Room: Streaming From Isolation'},
    {href: 'https://en.wikipedia.org/wiki/NTS_Radio', label: 'Wikipedia: NTS Radio'},
    {href: 'https://en.wikipedia.org/wiki/The_Lot_Radio', label: 'Wikipedia: The Lot Radio'},
    {href: 'https://ra.co/news/33465', label: 'Resident Advisor: The Lot Radio opens in a shipping container in Brooklyn'},
    {href: 'https://www.kioskradio.com/about', label: 'Kiosk Radio: About'},
    {href: 'https://mixmag.net/sound-collective/the-lab', label: 'Mixmag: The Lab'},
    {href: 'https://en.wikipedia.org/wiki/Cercle_%28company%29', label: 'Wikipedia: Cercle (company)'},
    {href: 'https://www.billboard.com/articles/news/dance/8519925/cercle-interview-2019/', label: 'Billboard: How party streaming platform Cercle hosts shows at the Eiffel Tower, a remote Bolivian salt flat and more'},
    {href: 'https://dmy.co/features/inside-keep-hush-uk-music-members-club', label: 'DMY: Inside Keep Hush, the UK\'s number one music members\' club'},
    {href: 'https://www.adam-audio.com/blog/hoer-berlin/', label: 'ADAM Audio: HÖR Berlin'},
    {href: 'https://ra.co/news/85346', label: 'Resident Advisor: HÖR acquired by Berlin-based music services company 99Solutions'},
    {href: 'https://www.gl-systemhaus.de/en/blog/one-year-united-we-stream', label: 'One year of lockdown, one year of United We Stream'}
  ],
  sourcesNote: 'Les nombres de sets, les années du premier upload et les nombres de vues sont mesurés dans le catalogue de ce site, soit 62 877 DJ sets enregistrés provenant des chaînes YouTube de 37 diffuseurs, en septembre 2026.',

  bandcamp: {
    description: 'La jungle passait à la radio pirate avant que quiconque filme un DJ. Voici les miens, du côté breaks et jungle. En acheter un soutient directement mon travail.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks par thecatrave'},
      {title: 'You So Ghetto (Lana del Rey Jungle Remix)', id: '3379956979', url: 'https://thecatrave.bandcamp.com/track/you-so-ghetto-lana-del-rey-jungle-remix', linkText: 'You So Ghetto (Lana del Rey Jungle Remix) par thecatrave'}
    ]
  }
};
