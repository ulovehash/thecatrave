// German live DJ sets guide. Structure, facts and media from the English page
// (live-dj-sets-draft.md, build-live-dj-sets-article.mjs). Wording is the page's own
// (the Google SERP check was blocked by a bot-check, so it was not verified there);
// volumes are null in keywords/de-live-dj-sets.json. The images are the English guide's,
// with translated captions.

import {catalogueSets} from '../../catalogue.mjs';
import {
  articleFigure, articleListeningBand, articleTable, articleYoutubeEmbed, ownSetListening
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const catalogue = catalogueSets('de');

const yt = (id, label) => articleYoutubeEmbed({src: `https://www.youtube-nocookie.com/embed/${id}`, title: label});

const figure = (name, width, height, alt, caption, className, widths) => articleFigure({
  src: `img/live-dj-sets/${name}-${width}.webp`,
  srcset: `img/live-dj-sets/${name}-320.webp 320w, img/live-dj-sets/${name}-${width}.webp ${width}w`,
  ...(widths ? {sizes: widths} : {}),
  width, height, alt, caption, className
});

export default {
  lang: 'de',
  name: 'de-live-dj-sets',
  file: 'de/live-dj-sets-ansehen.html',
  draft: 'de/live-dj-sets-draft.md',
  canonical: 'https://thecatrave.com/de/live-dj-sets-ansehen',
  englishPath: '/live-dj-sets',
  ogImage: 'https://thecatrave.com/img/og/live-dj-sets.jpg',
  bodyClass: 'article-page live-dj-sets-page',
  minReadingMinutes: 8,

  title: 'Live-DJ-Sets ansehen: Boiler Room, HÖR, NTS und mehr',
  description: 'Wo du Live-DJ-Sets online ansehen kannst, von Boiler Room und HÖR bis NTS, Rinse FM, The Lot Radio, Kiosk und Cercle, mit Links und Hörwegen.',
  datePublished: '2026-10-01',
  dateModified: '2026-10-06',
  dateLabel: '6. Oktober 2026',

  heroKicker: 'Live-DJ-Sets',
  heroTitle: 'Live-DJ-Sets online ansehen',
  deck: ('Boiler Room, HÖR, NTS, Rinse FM und die unabhängigen Kanäle, die DJ-Sets filmen, dazu ein Weg, ohne Algorithmus aus {SETS} Aufnahmen zu wählen.').replace('{SETS}', catalogue),
  answerLabel: 'LIVE-DJ-SETS ANSEHEN',
  breadcrumbName: 'Live-DJ-Sets online ansehen',

  answerSection: 'Antwort',
  introSection: 'Einleitung',
  introTitle: 'Wohin man die Kamera stellt.',
  faqSection: 'FAQ',
  faqLabel: 'Häufige Fragen',
  faqTitle: 'Häufige Fragen zu Live-DJ-Sets.',

  sections: [
    {id: 'where-to-watch', heading: 'Wo man Live-DJ-Sets ansehen kann', title: 'Wo man Live-DJ-Sets ansehen kann.'},
    {id: 'pirate-radio', heading: 'Vor der Kamera: Piratenradio', title: 'Vor der Kamera: Piratenradio.', tocLabel: 'Vor der Kamera: Piratenradio'},
    {id: 'boiler-room', heading: 'Boiler Room: was es ist und was ein Boiler-Room-Set ist', title: 'Boiler Room: was es ist und was ein Boiler-Room-Set ist.', tocLabel: 'Boiler Room'},
    {id: 'radio-with-a-camera', heading: 'Radio mit Kamera: NTS, The Lot Radio und Kiosk Radio', title: 'Radio mit Kamera: NTS, The Lot Radio und Kiosk Radio.', tocLabel: 'NTS, The Lot Radio und Kiosk Radio'},
    {id: 'other-formats', heading: 'Andere Wege, ein Set zu filmen: The Lab, Cercle und Keep Hush', title: 'Andere Wege, ein Set zu filmen: The Lab, Cercle und Keep Hush.', tocLabel: 'The Lab, Cercle und Keep Hush'},
    {id: 'hor-and-2020', heading: '2020: HÖR und das Jahr, in dem jeder Club zum Stream wurde', title: '2020: HÖR und das Jahr, in dem jeder Club zum Stream wurde.', tocLabel: '2020 und HÖR'},
    {id: 'owners', heading: 'Wem die Plattformen heute gehören', title: 'Wem die Plattformen heute gehören.'},
    {id: 'numbers', heading: 'Live-DJ-Sets in Zahlen', title: 'Live-DJ-Sets in Zahlen.', kicker: 'Gemessen'},
  ],

  media: ({lang}) => ({
    'Rinse 2001': articleListeningBand({
      platform: 'soundcloud', id: 'rinse-2001', kicker: 'Essential listening', title: 'Pay As U Go Cartel in Slimzees Show, Rinse FM, 2001.',
      description: 'Eine Piratensendung, neun Jahre bevor Rinse legal war: MCs über Garage, hochgeladen vom Mitgründer des Senders selbst.',
      src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/103244834&color=%23ff5a36&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false',
      iframeTitle: 'Pay As U Go Cartel, Slew Show, Rinse FM 2001, auf Slimzees SoundCloud', fullBleed: true, tone: 'cyan'
    }),
    'Rinse grime': yt('1wk3uOxQ5F4', 'Grime Show: P Money, D Double E, Big Narstie und Jammer, auf dem YouTube-Kanal von Rinse FM, 2014'),
    'Rinse studio': figure('rinse-studio', 900, 1200, 'Eine Moderatorin lacht in ein Rinse-Mikrofon im Rinse-FM-Studio, das Rinse-Logo an der Wand hinter ihr', 'Das Rinse-Studio 2022, da schon seit elf Jahren legal und weit entfernt von den Küchen und Schlafzimmern, aus denen es als Piratensender sendete. Foto: Khadejia, CC BY-SA 4.0.', 'portrait-image', '(max-width: 760px) 100vw, 480px'),
    'Red Light': figure('red-light-radio', 612, 612, 'Ein DJ und eine Moderatorin im rot beleuchteten Red-Light-Radio-Studio in Amsterdam, dahinter gehen Menschen am Fenster vorbei', 'In Red Light Radio am Oudekerksplein: der DJ an den Decks, die Moderatorin am Mikrofon und die Straße eine Glasscheibe entfernt. Foto: Kars Alfrink, CC BY 2.0.', 'portrait-image', '(max-width: 760px) 100vw, 612px'),
    'Lot Radio': figure('the-lot-radio', 1200, 800, 'DJ Daria Kolomiec in der Kabine von The Lot Radio, deren Wände mit Stickern bedeckt sind', 'Daria Kolomiec in der Kabine von The Lot Radio im Juli 2022. Das Studio ist die Hälfte eines 20-Fuß-Containers; in der anderen Hälfte wird Kaffee verkauft. Foto: Ohwellimhere, CC BY-SA 4.0.', 'wide-archive-image', undefined),
    'Floating Points': yt('kiy05zewUpg', 'Floating Points, fünfstündiges Set, Boiler Room New York, auf dem YouTube-Kanal von Boiler Room'),
    'Nina Kraviz': yt('oC969p-rxfo', 'Nina Kraviz bei The Lot Radio, 21. März 2017, auf dem YouTube-Kanal von The Lot Radio'),
    'Acid Arab': yt('kumeF99xnoM', 'Acid Arab bei Kiosk Radio, Brüssel, 23. Januar 2020, auf dem YouTube-Kanal von Kiosk Radio'),
    'Black Coffee': yt('f0coQKqxzU0', 'Black Coffee im The Lab LDN, auf dem YouTube-Kanal von Mixmag, 2014'),
    'Cercle first': yt('ttFxqD8qWYg', 'Cercle: die erste Show, To Van Kao in Derek Barbollas Wohnzimmer, Paris, auf dem YouTube-Kanal von Cercle'),
    'Tasha': yt('zzoxXIHJcFI', 'Tasha, reines Vinyl-Jungle-Set, Keep Hush Live: 1985 Music Takeover 2, auf dem YouTube-Kanal von Keep Hush'),
    'Disclosure': yt('QA0EdK2RjPg', 'Disclosure, Boiler Room: Streaming From Isolation #13, auf dem YouTube-Kanal von Boiler Room, 2020'),
    'Ellen Allien': yt('GG2IQguY-J0', 'Ellen Allien bei HÖR Berlin, 4. April 2020, auf dem YouTube-Kanal von HÖR'),
    'Boris Brejcha': yt('vqz8c4ZP3Wg', 'Boris Brejcha im Grand Palais in Paris für Cercle, 2019, auf dem YouTube-Kanal von Cercle'),
    'own-mix-1': ownSetListening(0, lang, 'Nicht jedes Set braucht eine Kamera: dreißig Tracks aus Breaks, Garage, Bass und Grime. Mein eigener Mix.'),
    'own-mix-2': ownSetListening(1, lang, 'Ein Mix, aufgenommen zum Hören zu Hause, so wie 2020 alle zuhörten. Mein eigenes Set.'),
    'Tabelle: numbers': articleTable({
      headers: ['Sender', 'Sets', 'Erster Upload', 'Aufrufe', 'Meistgesehenes Set'],
      rows: [
        ['Boiler Room', '8.206', '2012', '1.774 Mio.', 'Solomun, Tulum, 2015 (76,2 Mio.)'],
        ['Cercle', '178', '2016', '984 Mio.', 'Boris Brejcha, Grand Palais, 2019 (68,4 Mio.)'],
        ['Mixmag', '1.943', '2012', '464 Mio.', 'Alison Wonderland, The Lab LA, 2015 (15,4 Mio.)'],
        ['HÖR', '9.708', '2019', '239 Mio.', '¥ØU$UK€ ¥UK1MAT$U, 2022 (5,4 Mio.)'],
        ['The Lot Radio', '9.998', '2017', '50 Mio.', 'Adam Port, 2024 (3,9 Mio.)'],
        ['Rinse FM', '895', '2013', '19 Mio.', 'Grime Show: P Money, D Double E, Big Narstie & Jammer, 2014 (1,0 Mio.)'],
        ['NTS Radio', '264', '2015', '13 Mio.', 'Aphex Twin beim Field Day, 2017 (1,7 Mio.)'],
        ['Keep Hush', '1.517', '2016', '12 Mio.', '¥ØU$UK€ ¥UK1MAT$U, Tokyo, 2022 (0,9 Mio.)'],
        ['Kiosk Radio', '8.558', '2018', '8 Mio.', 'Acid Arab, 2020 (0,2 Mio.)']
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
  sourcesNote: 'Set-Zahlen, Jahre des ersten Uploads und Aufrufzahlen wurden im Katalog dieser Seite mit 62.877 aufgenommenen DJ-Sets von den YouTube-Kanälen von 37 Sendern gemessen, Stand September 2026.',

  bandcamp: {
    description: 'Jungle lief im Piratenradio, bevor irgendjemand einen DJ filmte. Das hier sind meine, von der Breaks- und Jungle-Seite. Wer einen kauft, unterstützt meine Arbeit direkt.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks von thecatrave'},
      {title: 'You So Ghetto (Lana del Rey Jungle Remix)', id: '3379956979', url: 'https://thecatrave.bandcamp.com/track/you-so-ghetto-lana-del-rey-jungle-remix', linkText: 'You So Ghetto (Lana del Rey Jungle Remix) von thecatrave'}
    ]
  }
};
