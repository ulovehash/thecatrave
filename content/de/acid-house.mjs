// German acid house guide. Structure and facts from the English page
// (acid-house-guide-draft.md, build-acid-house-article.mjs).
//
// German wording checked in the live google.de results on 2026-09-22, no
// Ahrefs units spent (keywords/de-acid-house.json): "Acid House" is how
// German writes the genre, de.wikipedia ranks first, and "Was ist Acid House?"
// is a result title. "Was bedeutet Acid bei Techno?" is the German question in
// the results, so the second FAQ asks what "Acid" means rather than why it is
// called that; the answer is the English one.
//
// The English generator places each image and player by paragraph index. Here
// the draft places them with [Bild: ...] and [Embed: ...] lines at the same
// positions. The images are the English guide's, in img/acid-house/, with
// translated captions; see home-articles.mjs for why a translation may reuse
// them.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, ownSetListening, ownTrackListening
} from '../../site-components.mjs';

const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/acid-house/${name}-${width}.webp`,
  srcset: `img/acid-house/${name}-320.webp 320w, img/acid-house/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

const videos = (lang, label, description, items) => articleVideoCollection({
  lang, label, description, items: items.map(item => articleVideoCard(item))
});

export default {
  lang: 'de',
  name: 'de-acid-house',
  file: 'de/acid-house.html',
  draft: 'de/acid-house-draft.md',
  canonical: 'https://thecatrave.com/de/acid-house',
  englishPath: '/acid-house-guide',
  ogImage: 'https://thecatrave.com/img/og/acid-house.jpg',
  bodyClass: 'article-page acid-house-page',
  minReadingMinutes: 9,

  title: 'Was ist Acid House? Von der TB-303 in Chicago zum britischen Rave',
  description: 'Acid House ist Chicago House mit einer TB-303-Linie, die von Hand verbogen wird. Wie Phuture ihn erfand, woher der Name kommt und wie daraus Rave wurde.',
  datePublished: '2026-09-22',
  dateModified: '2026-09-22',
  dateLabel: '22. September 2026',

  heroKicker: 'Acid-House-Guide',
  heroTitle: 'Acid House: der Sound der TB‑303 und sein Weg nach Großbritannien',
  deck: 'Eine Bassmaschine, die niemand wollte, drei Freunde in Chicago, ein DJ, der ihr Band in einer Nacht viermal spielte, und eine britische Jugendbewegung, die sich den Namen lieh.',
  answerLabel: 'Acid-House-Definition',
  breadcrumbName: 'Acid House',

  answerSection: 'Was ist Acid House?',
  introSection: 'Einleitung',
  introTitle: 'Eine Maschine, die niemand wollte.',
  faqSection: 'FAQ',
  faqLabel: 'Häufige Fragen zu Acid House',
  faqTitle: 'Häufige Fragen zu Acid House.',

  sections: [
    {id: 'what-is', heading: 'Was ist Acid House?', title: 'Was ist Acid House?'},
    {id: 'sound', heading: 'Wie Acid House klingt', title: 'Wie Acid House klingt.', kicker: 'Die TB-303'},
    {id: 'chicago', heading: 'Chicago: Phuture und „Acid Tracks“', title: 'Chicago: Phuture und „Acid Tracks“.', kicker: '1985 bis 1987'},
    {id: 'records', heading: 'Die Platten drumherum', title: 'Die Platten drumherum.', kicker: 'Chicago, 1986 bis 1988'},
    {id: 'name', heading: 'Warum heißt es Acid House?', title: 'Warum heißt es Acid House?', kicker: 'Der Name'},
    {id: 'india', heading: 'Wurde Acid House in Indien erfunden?', title: 'Wurde Acid House in Indien erfunden?', kicker: 'Charanjit Singh, 1982', tocLabel: 'Wurde er in Indien erfunden?'},
    {id: 'britain', heading: 'Wie Acid House nach Großbritannien kam', title: 'Wie Acid House nach Großbritannien kam.', kicker: '1987 bis 1989', tocLabel: 'Wie er nach Großbritannien kam'},
    {id: 'backlash', heading: 'Der Second Summer of Love und die Gegenreaktion', title: 'Der Second Summer of Love und die Gegenreaktion.', kicker: '1988 bis 1990'},
    {id: 'after', heading: 'Nach 1990: Acid überall', title: 'Nach 1990: Acid überall.', tocLabel: 'Nach 1990'},
    {id: 'family', heading: 'Acid House, House und Techno', title: 'Acid House, House und Techno.'}
  ],

  media: ({lang}) => ({
    'tb303': figure('roland-tb303-1982', 1200, 800,
      'Nahaufnahme des Bedienfelds einer Roland TB-303 Bass Line mit dem Accent-Regler und dem Schriftzug Computer Controlled',
      'Eine TB-303 von 1982, noch funktionstüchtig. Roland stellte die Maschine 1984 ein, weshalb ein Produzent in Chicago eine gebrauchte für 40 Dollar kaufen konnte. Foto: Alexandre Dulaunoy, CC BY-SA 2.0.'),
    'dj-pierre': figure('dj-pierre-2013', 960, 639,
      'DJ Pierre, links, und Felix Da Housecat vor einem bemalten Wandbild im Jahr 2013',
      'DJ Pierre, links, mit Felix Da Housecat, seinem Partner bei Pierre’s Pfantasy Club, 2013. Pierre drehte auf „Acid Tracks“ an den Reglern. Foto: TheArches, CC BY 2.0.'),
    'gerald-photo': figure('a-guy-called-gerald-2014', 1200, 800,
      'A Guy Called Gerald hinter seinen Geräten auf der Bühne in violettem Licht',
      'A Guy Called Gerald 2014 in der Royal Festival Hall. Er nahm „Voodoo Ray“ 1988 in Manchester auf und war Gründungsmitglied von 808 State. Foto: Victor Frankowski für das Southbank Centre, CC BY 2.0.'),
    'acid-tracks-video': videos(lang, 'Acid Tracks',
      'Die Platte, die dem Genre den Namen gab, so wie Trax sie 1987 veröffentlichte: ein Drum-Muster und eine 303-Linie, deren Klang sich zwölf Minuten lang bewegt.',
      [{youtubeId: 'yKHGv6Es610', genre: 'ACID HOUSE, 1987', artist: 'Phuture', title: 'Acid Tracks'}]),
    'phuture-live': videos(lang, 'Phuture live',
      'Phuture live für Boiler Room in Chicago, 2014. Aus dem Katalog aufgezeichneter DJ-Sets auf dieser Seite.',
      [{youtubeId: '05oNuVLYFgw', genre: 'LIVE, 2014', artist: 'Phuture', title: 'Boiler Room Chicago'}]),
    'around-listening': videos(lang, 'Vor und neben Acid Tracks',
      'Die erste 303-Platte auf Vinyl und die, die DJ Pierre die erste funky Acid-Platte nennt.',
      [{youtubeId: 'vq0OQ1wKLbY', genre: 'CHICAGO, 1986', artist: 'Sleezy D', title: "I've Lost Control"},
       {youtubeId: '_-MsJ-T1YhA', genre: 'ACID HOUSE, 1987', artist: 'Armando', title: 'Land of Confusion'}]),
    'india-listening': videos(lang, 'Bombay, 1982',
      'Der Eröffnungstrack von Synthesizing: Ten Ragas to a Disco Beat, hochgeladen von Bombay Connection, dem Label, das das Album 2010 neu auflegte. Eine TB-303 gleitet über einer TR-808 durch einen Morgen-Raga.',
      [{youtubeId: 'NUqnPYwoiF4', genre: 'RAGA UND DISCO, 1982', artist: 'Charanjit Singh', title: 'Raga Bhairav'}]),
    'britain-listening': videos(lang, 'Britischer Acid, 1988',
      'Die beiden Platten, die am häufigsten als erster britischer Acid-House-Track gelten, aus London und aus Manchester.',
      [{youtubeId: 'yCNpciIixbk', genre: 'ACID HOUSE, 1988', artist: 'Baby Ford', title: 'Oochy Koochy'},
       {youtubeId: 'j7vxHOCeiQ4', genre: 'ACID HOUSE, 1988', artist: 'A Guy Called Gerald', title: 'Voodoo Ray'}]),
    'panic-listening': videos(lang, 'Die Charts und das Verbot',
      'Die Platte auf Platz 3, die die BBC im Oktober 1988 aus dem Programm nahm, und die, die Acid zwei Monate später zurück zu Top of the Pops brachte.',
      [{youtubeId: 'ZrscxwrVRQ8', genre: 'ACID HOUSE, 1988', artist: 'D Mob', title: 'We Call It Acieed'},
       {youtubeId: '30Xi9HMrovk', genre: 'ACID HOUSE, 1988', artist: 'Stakker', title: 'Humanoid'}]),
    'hardfloor-listening': videos(lang, 'Acid nach Acid House',
      'Köln, 1992: die Platte, die die 303 nach der britischen Panik zurück in die europäischen Clubs brachte.',
      [{youtubeId: 'Un4CeV_l3pI', genre: 'ACID TECHNO, 1992', artist: 'Hardfloor', title: 'Acperience 1'}]),
    'gerald-live': videos(lang, 'A Guy Called Gerald live',
      'Gerald spielt 2013 für Boiler Room live an seinen Maschinen. Aus dem Katalog aufgezeichneter DJ-Sets auf dieser Seite.',
      [{youtubeId: 'zhr0_fadXxY', genre: 'LIVE, 2013', artist: 'A Guy Called Gerald', title: 'Boiler Room'}]),
    // The owner's own music inside the text, as on the English page.
    'protect-ya-breaks': ownTrackListening('protect-ya-breaks', 'Wohin Großbritannien den Rhythmus als Nächstes trug: Breaks bei 128 BPM, nah am Tempo des Acid House. Mein eigener Track.', lang),
    'own-mix': ownSetListening(0, lang, 'Für nach der Geschichte: dreißig Tracks, in denen sich die Breaks zwischen Garage, Bass Music, Techno und Rave bewegen. Mein eigener Mix.'),
    'Tabelle: family': articleTable({
      headers: ['Stil', 'Ungefähres Tempo', 'Was den Track trägt', 'Eine Platte zum Einstieg'],
      rows: [
        ['Chicago House', '118 bis 128 BPM', 'Drumcomputer mit Piano, Streichern, Gesang oder herkömmlicher Bassline', 'Marshall Jefferson, „Move Your Body“'],
        ['Acid House', '118 bis 128 BPM', 'Eine TB-303-Linie im Vordergrund, deren Filter sich ständig bewegt', 'Phuture, „Acid Tracks“'],
        ['Detroit Techno', '120 bis 135 BPM', 'Maschinenrhythmus und Synthesizer-Linien, kaum oder kein Gesang', 'Rhythim Is Rhythim, „Strings of Life“'],
        ['Acid Techno und Acid Trance', '130 bis 145 BPM', 'Die 303 über härteren, schnelleren Techno-Drums', 'Hardfloor, „Acperience 1“']
      ]
    })
  }),

  sources: [
    {href: 'https://daily.redbullmusicacademy.com/2012/12/dj-pierre-interview/', label: 'Red Bull Music Academy Daily: The Story of Acid House, as told by DJ Pierre (2012)'},
    {href: 'https://djmag.com/content/game-changers-phuture-acid-tracks', label: 'DJ Mag: Game Changers, Phuture „Acid Tracks“ (2014)'},
    {href: 'https://en.wikipedia.org/wiki/Acid_Tracks', label: 'Wikipedia: Acid Tracks'},
    {href: 'https://en.wikipedia.org/wiki/Synthesizing:_Ten_Ragas_to_a_Disco_Beat', label: 'Wikipedia: Synthesizing: Ten Ragas to a Disco Beat'},
    {href: 'https://en.wikipedia.org/wiki/Roland_TB-303', label: 'Wikipedia: Roland TB-303'},
    {href: 'https://en.wikipedia.org/wiki/Second_Summer_of_Love', label: 'Wikipedia: Second Summer of Love'},
    {href: 'https://en.wikipedia.org/wiki/We_Call_It_Acieed', label: 'Wikipedia: We Call It Acieed'},
    {href: 'https://www.vice.com/en/article/history-smiley-face-acid-house-rave-culture/', label: 'Vice: A brief history of the smiley face, rave culture’s most ubiquitous symbol'},
    {href: 'https://mixmag.net/feature/the-history-of-acid-house-in-100-tracks', label: 'Mixmag: The history of acid house in 100 tracks'}
  ],
  sourcesNote: 'Set-Zahlen und die Häufigkeit der Künstler sind im eigenen Katalog dieser Seite mit 62.824 aufgezeichneten DJ-Sets gemessen, Stand September 2026.',

  bandcamp: {
    description: 'Acid House gab Großbritannien den Rave, und der Rave gab ihm den Breakbeat. Diese Veröffentlichungen stehen auf dieser Seite der Familie. Wer eine kauft, unterstützt meine Arbeit direkt.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks von thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 von thecatrave'}
    ]
  }
};
