// German Boiler Room guide. Figures, players, table and the Len Faki audio are
// the English page's (build-boiler-room-article.mjs), shared through
// content/boiler-room-shared.mjs; the German draft is
// de/best-boiler-room-sets-draft.md. The summary banner is the draft's
// "Antwort" section.
import {boilerRoomMedia, anchors} from '../boiler-room-shared.mjs';

const text = {
  cities: {Tulum: 'Tulum', Ibiza: 'Ibiza', London: 'London', 'Montréal': 'Montreal', Tokyo: 'Tokio', Berlin: 'Berlin', Amsterdam: 'Amsterdam', Ramallah: 'Ramallah'},
  millions: value => `${value} Mio.`,
  tableHeaders: ['#', 'Set', 'Gefilmt in', 'Jahr', 'Aufrufe', 'Likes', 'Likes pro 1.000 Aufrufe'],
  youtubeTitle: label => `${label}, auf Boiler Rooms YouTube-Kanal`,
  ownMix: 'Zwischen den beiden Listen ein Set, das nie gefilmt wurde: Breaks, die durch Garage, Bass Music, Techno und Grime laufen. Mein eigener Mix.',
  band: {
    kicker: 'Zum Reinhören',
    title: 'Len Faki, Boiler Room Berlin, 2014.',
    description: 'Boiler Rooms eigener Audio-Upload des Sets, das unten auf Platz elf steht. Dreiundneunzig Minuten Techno, und der fairste Test, ob ein Set ohne das Bild funktioniert.'
  },
  figures: {
    fred: {
      alt: 'Fred again.. auf der Bühne im Crystal Palace Bowl in London',
      caption: 'Fred again.. im Crystal Palace Bowl, London, im August 2025, auf der Bühne mit Skepta, drei Jahre nach dem Boiler-Room-Set, das mehr Likes hat als jedes andere. Foto: Raph_PH, CC BY 4.0.'
    },
    cox: {
      alt: 'Carl Cox legt 2012 beim Amsterdam Dance Event auf',
      caption: 'Carl Cox beim Amsterdam Dance Event im Oktober 2012, zehn Monate vor dem Villa-Set, das im Archiv von Boiler Room noch immer das zweitmeistgesehene ist. Foto: Sergey Kozak, CC BY 2.0.'
    },
    ez: {
      alt: 'DJ EZ im Jahr 2012',
      caption: 'DJ EZ 2012, im Jahr seines 45-minütigen Boiler Rooms mit der Red Bull Music Academy, das allein 2,8 Millionen Aufrufe hat. Das dreistündige Set kam zwei Jahre später. Foto: Gareth Morton, CC BY 2.0.'
    },
    sama: {
      alt: 'Sama’ Abdulhadi legt 2025 beim Festival Internacional Cervantino in Guanajuato, Mexiko, auf',
      caption: 'Sama’ Abdulhadi beim Festival Internacional Cervantino in Guanajuato, Mexiko, 2025. Vor Ramallah 2018 war sie eine angesehene lokale DJ; das Boiler-Room-Set dazwischen ist der klarste Fall im Archiv dafür, dass das Format eine Karriere macht. Foto: TSolange, CC BY-SA 4.0.'
    },
    selector: {
      alt: 'Der Selector auf thecatrave, auf Boiler Room eingeschränkt (Oberfläche auf Englisch)',
      caption: 'Der Selector, auf Boiler Room eingeschränkt, die Quelle jeder Zahl auf dieser Seite (Oberfläche auf Englisch). <a href="/de/selector">Öffne ihn</a> und drück den Knopf: ein Boiler-Room-Set, oder eines aus dem ganzen Katalog, für dich ausgewählt.'
    }
  }
};

export default {
  lang: 'de',
  name: 'de-best-boiler-room-sets',
  file: 'de/beste-boiler-room-sets.html',
  draft: 'de/best-boiler-room-sets-draft.md',
  canonical: 'https://thecatrave.com/de/beste-boiler-room-sets',
  englishPath: '/best-boiler-room-sets',
  ogImage: 'https://thecatrave.com/img/og/best-boiler-room-sets.jpg',
  bodyClass: 'article-page boiler-room-page',

  title: 'Die besten Boiler-Room-Sets aller Zeiten: gerankt, gemessen',
  description: 'Die besten Boiler-Room-Sets, von Carl Cox auf Ibiza bis Fred again.. in London, neben den meistgesehenen Sets, gezählt über 8.206 Aufnahmen.',
  datePublished: '2026-10-01',
  dateModified: '2026-10-01',
  dateLabel: '1. Oktober 2026',

  heroKicker: 'Boiler Room',
  heroTitle: 'Die besten Boiler-Room-Sets aller Zeiten',
  deck: 'Zwei Listen, getrennt gehalten: die zehn meistgesehenen Boiler-Room-Sets, gemessen über 8.206 Aufnahmen, und achtzehn, ausgewählt nach dem, was in ihnen wirklich passiert.',
  answerLabel: 'DIE BESTEN BOILER-ROOM-SETS',
  breadcrumbName: 'Die besten Boiler-Room-Sets',

  answerSection: 'Antwort',
  introSection: 'Einleitung',
  introTitle: 'Zwei Listen, getrennt gehalten.',
  faqSection: 'FAQ',
  faqLabel: 'FAQ',
  faqTitle: 'Boiler-Room-Sets: FAQ.',
  minReadingMinutes: 8,

  sections: [
    {id: 'what-makes', heading: 'Was ein Boiler-Room-Set großartig macht', title: 'Was ein Boiler-Room-Set großartig macht.', tocLabel: 'Was ein Set großartig macht'},
    {id: 'most-watched', heading: 'Die meistgesehenen Boiler-Room-Sets', title: 'Die meistgesehenen Boiler-Room-Sets.', kicker: 'Gemessen', tocLabel: 'Die meistgesehenen Sets'},
    {id: 'best', heading: 'Die besten Boiler-Room-Sets', title: 'Die besten Boiler-Room-Sets.', kicker: 'Gerankt', tocLabel: 'Die besten Sets, gerankt', subsections: anchors},
    {id: 'where-next', heading: 'Wie es weitergeht', title: 'Wie es weitergeht.', tocLabel: 'Wie es weitergeht'}
  ],
  media: ({lang}) => boilerRoomMedia({lang, text}),

  sources: [
    {href: 'https://boilerroom.tv/playlist/top-10-all-time/', label: 'Boiler Room: Top 10 All Time (auf Englisch)'},
    {href: 'https://en.wikipedia.org/wiki/Boiler_Room_%28music_broadcaster%29', label: 'Wikipedia: Boiler Room (music broadcaster) (auf Englisch)'},
    {href: 'https://en.wikipedia.org/wiki/Yousuke_Yukimatsu', label: 'Wikipedia: Yousuke Yukimatsu (auf Englisch)'},
    {href: 'https://www.vice.com/en/article/boiler-room-disclosure-b2b-skream/', label: 'Vice: Boiler Room, Disclosure b2b Skream (auf Englisch)'},
    {href: 'https://www.factmag.com/2014/01/31/dj-ez-to-play-three-hour-set-on-boiler-room-next-month/', label: 'Fact: DJ EZ to play three hour set on Boiler Room (auf Englisch)'},
    {href: 'https://www.setlist.fm/setlist/charli-xcx/2024/99-scott-ave-brooklyn-ny-3ab89fb.html', label: 'setlist.fm: Charli xcx at 99 Scott Ave, Brooklyn, 22. Februar 2024 (auf Englisch)'},
    {href: 'https://www.setlist.fm/setlist/underworld/2025/burgess-park-london-england-6b5812da.html', label: 'setlist.fm: Underworld at Burgess Park, 2. August 2025 (auf Englisch)'},
    {href: 'https://sonicstate.com/news/2022/08/11/fred-again-hybrid-set-for-boiler-room/', label: 'Sonicstate: Fred again.. hybrid set for Boiler Room (auf Englisch)'},
    {href: 'https://whynow.co.uk/read/best-boiler-room-sets', label: 'whynow: We rank the 10 best Boiler Room sets of all time (auf Englisch)'}
  ],
  sourcesNote: 'Aufrufe, Likes, Längen und Like-Raten stammen aus dem eigenen Katalog dieser Seite mit 62.877 aufgezeichneten DJ-Sets, 8.206 davon von Boiler Room, Stand September 2026.',

  bandcamp: {
    description: 'Die meisten sehen einen DJ zum ersten Mal bei Boiler Room aus nächster Nähe. Das hier sind meine, von der Breaks- und Bass-Seite. Ein Kauf unterstützt meine Arbeit direkt.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks von thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 von thecatrave'}
    ]
  }
};
