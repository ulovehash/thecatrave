// German techno tracks guide. Structure, facts and the nine records from the
// English page (best-techno-tracks-draft.md, build-best-techno-tracks-article.mjs,
// media/best-techno-tracks.json). Quotations are translated; the sources quoted
// are English and are listed below.
//
// Keywords: Google Keyword Planner, Germany, German, 2026-11-13, buckets only
// (keywords/de-best-techno-tracks.json). "techno klassiker" (100-1K) sets the
// slug and the title; "techno lieder" and "berühmte techno lieder" (100-1K)
// carry the FAQ. "beste techno tracks" and "techno hymnen" were not measured.
//
// As in the English generator, the track players of a section sit together in
// one listening block. The draft keeps the English placeholder lines, so the
// track keys that are not the block's position render nothing, and the block
// is carried by the section's last placeholder. In the last section the block
// goes before the paragraph above the photograph, as the English page does, so
// a figure and a listening block never touch.
//
// The photographs are the English guide's, in img/best-techno-tracks/, with
// translated alt text and captions.
import {articleFigure, articleListeningCollection, articleTable, articleTrackEmbed, ownTrackListening} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/best-techno-tracks/${name}-${width}.webp`,
  srcset: `img/best-techno-tracks/${name}-320.webp 320w, img/best-techno-tracks/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

const spotify = (id, name) => articleTrackEmbed({platform: 'spotify', id, title: name});
const bandcamp = (id, url, name) => articleTrackEmbed({platform: 'bandcamp', id, url, title: name});
const soundcloud = (url, name) => articleTrackEmbed({platform: 'soundcloud', url, title: name});

const tracks = {
  'no-ufos': {artist: 'Model 500', title: "No UFO's", year: '1985', note: 'Metroplex. Die Vokalversion.',
    playerHtml: spotify('0shMp9Vkjr8X77jQCWlaEP', "Model 500, No UFO's")},
  'strings-of-life': {artist: 'Rhythim Is Rhythim', title: 'Strings of Life', year: '1987', note: 'Transmat.',
    playerHtml: spotify('78ZQfXjoaHU2QjXqWpa8l9', 'Rhythim Is Rhythim, Strings of Life')},
  'energy-flash': {artist: 'Joey Beltram', title: 'Energy Flash', year: '1990', note: 'R&S Records.',
    playerHtml: bandcamp('2779115416', 'https://randsrecords.bandcamp.com/track/energy-flash', 'Joey Beltram, Energy Flash')},
  'spastik': {artist: 'Plastikman', title: 'Spastik', year: '1993', note: 'Plus 8.',
    playerHtml: bandcamp('2542530288', 'https://richiehawtin.bandcamp.com/track/spastik', 'Plastikman, Spastik')},
  'the-bells': {artist: 'Jeff Mills', title: 'The Bells', year: '1996', note: 'Purpose Maker.',
    playerHtml: spotify('0ISxyAhfop0MoMeAUw72RN', 'Jeff Mills, The Bells')},
  'phylyps-trak': {artist: 'Basic Channel', title: 'Phylyps Trak', year: '1993', note: 'Basic Channel.',
    playerHtml: spotify('4KsL7ddeairY2OMs8OFRSR', 'Basic Channel, Phylyps Trak')},
  'subzero': {artist: 'Ben Klock', title: 'Subzero', year: '2009', note: 'Ostgut Ton.',
    playerHtml: bandcamp('3711497848', 'https://benklock.bandcamp.com/track/subzero', 'Ben Klock, Subzero')},
  'jaguar': {artist: 'The Aztec Mystic', title: 'Jaguar', year: '1999', note: 'Underground Resistance.',
    playerHtml: soundcloud('https://soundcloud.com/undergroundresistance/djrolandojaguar', 'The Aztec Mystic, Jaguar')},
  'doppler': {artist: 'Charlotte de Witte', title: 'Doppler', year: '2021', note: 'KNTXT.',
    playerHtml: soundcloud('https://soundcloud.com/kntxtmusic/charlotte-de-witte-doppler', 'Charlotte de Witte, Doppler')}
};

export default {
  lang: 'de',
  name: 'de-best-techno-tracks',
  file: 'de/techno-klassiker.html',
  draft: 'de/best-techno-tracks-draft.md',
  canonical: 'https://thecatrave.com/de/techno-klassiker',
  englishPath: '/best-techno-tracks',
  ogImage: 'https://thecatrave.com/img/og/best-techno-tracks.jpg',
  bodyClass: 'article-page best-techno-tracks-page',
  minReadingMinutes: 6,

  title: 'Techno-Klassiker: neun Techno-Songs, die den Sound prägten',
  description: 'Neun Techno-Klassiker, von No UFO\'s und Strings of Life bis The Bells und Doppler, jeweils mit Player und den Fakten dahinter.',
  datePublished: '2026-11-13',
  dateModified: '2026-11-13',
  dateLabel: '13. November 2026',

  heroKicker: 'Techno-Tracks',
  heroTitle: 'Techno-Klassiker: neun Platten, die den Sound geprägt haben',
  deck: 'Neun Techno-Platten, nach Szenen gruppiert, jede mit Player und den Fakten dahinter, von Detroit 1985 bis 2021.',
  answerLabel: 'TECHNO-KLASSIKER',
  breadcrumbName: 'Techno-Klassiker',

  answerSection: 'Antwort',
  introSection: 'Einleitung',
  introTitle: 'Eine Liste von Platten, keine Geschichte.',
  faqSection: 'FAQ',
  faqLabel: 'FAQ',
  faqTitle: 'Häufige Fragen zu Techno-Klassikern.',

  sections: [
    {id: 'how-chosen', heading: 'Neun verschiedene Wege durch den Techno'},
    {id: 'detroit-chicago', heading: 'Detroit und Chicago, 1985 bis 1987'},
    {id: 'rave-acid-minimalism', heading: 'Rave-Druck und Acid-Minimalismus, 1990 bis 1996', tocLabel: 'Rave-Druck und Acid-Minimalismus'},
    {id: 'berlin-dub-techno', heading: 'Berlin und Dub Techno'},
    {id: 'underground-resistance', heading: 'Underground Resistance und Doppler'},
    {id: 'play-first', heading: 'Welchen Techno-Track solltest du zuerst hören?', tocLabel: 'Welchen Track zuerst?'},
    {id: 'break-from-list', heading: 'Musik von thecatrave'}
  ],

  media: ({lang}) => {
    const block = (id, label, keys) => articleListeningCollection({
      lang, id: `listen-${id}`, label, tone: 'cyan', items: keys.map(key => tracks[key])
    });
    const deWitte = figure('charlotte-de-witte-rotterdam', 900, 1120,
      'Charlotte de Witte hinter den Decks im Toffler in Rotterdam',
      'Charlotte de Witte bei der Arbeit im Toffler, Rotterdam. Foto: Alan Overbeek, CC BY-SA 4.0.');
    return {
      'no-ufos': '',
      'strings-of-life': block('detroit-chicago', 'Detroit und Chicago', ['no-ufos', 'strings-of-life']),
      'energy-flash': '',
      'spastik': '',
      'the-bells': block('rave-acid-minimalism', 'Rave-Druck und Acid-Minimalismus', ['energy-flash', 'spastik', 'the-bells']),
      'phylyps-trak': '',
      'subzero': '',
      'jaguar': '',
      'doppler': '',
      'Richie Hawtin at Fabric': figure('richie-hawtin-fabric', 1200, 900,
        'Richie Hawtin legt im Fabric in London auf',
        'Richie Hawtin im Fabric, London, 2008. Als Plastikman veröffentlichte er Spastik. Foto: Raminta Malinauskaite, CC BY-SA 3.0.'),
      'Charlotte de Witte in Rotterdam': {
        usePreviousParagraph: true,
        render: text => `${block('underground-resistance', 'Underground Resistance und Doppler', ['jaguar', 'doppler'])}\n<p>${escapeHtml(text)}</p>\n${deWitte}`
      },
      'thecatrave Berlin Race 1909': `${ownTrackListening('berlin-race-1909', 'Mein eigener Track, entstanden, als ich in Berlin lebte. Er steht nicht auf der Liste.', lang)}\n${block('berlin-dub-techno', 'Berlin und Dub Techno', ['phylyps-trak', 'subzero'])}`,
      'thecatrave No Genre No Problem': ownTrackListening('no-genre-no-problem', 'Mein erster fertiger Track, und er steht nicht auf der Liste.', lang),
      chosen: articleTable({
        headers: ['Track', 'Künstler', 'Jahr', 'Label'],
        rows: [
          ["No UFO's", 'Model 500', '1985', 'Metroplex'],
          ['Strings of Life', 'Rhythim Is Rhythim', '1987', 'Transmat'],
          ['Energy Flash', 'Joey Beltram', '1990', 'R&S Records'],
          ['Spastik', 'Plastikman', '1993', 'Plus 8'],
          ['The Bells', 'Jeff Mills', '1996', 'Purpose Maker'],
          ['Phylyps Trak', 'Basic Channel', '1993', 'Basic Channel'],
          ['Subzero', 'Ben Klock', '2009', 'Ostgut Ton'],
          ['Jaguar', 'The Aztec Mystic', '1999', 'Underground Resistance'],
          ['Doppler', 'Charlotte de Witte', '2021', 'KNTXT']
        ].map(row => row.map(escapeHtml))
      })
    };
  },

  sources: [
    {href: 'https://www.attackmagazine.com/technique/deconstructed/model-500-no-ufos/', label: "Attack Magazine: Deconstructed, Model 500, No UFO's"},
    {href: 'https://articles.roland.com/strings-of-life-derrick-may/', label: 'Roland Articles: Strings of Life, Derrick May'},
    {href: 'https://daily.redbullmusicacademy.com/2017/05/interview-derrick-may/', label: 'Red Bull Music Academy Daily: Interview mit Derrick May'},
    {href: 'https://www.insomniac.com/?p=84044', label: 'Insomniac: Rhythim Is Rhythim, Strings of Life'},
    {href: 'https://www.insomniac.com/?p=40063', label: 'Insomniac: DJ Rolando, Knights of the Jaguar'},
    {href: 'https://attackmagazine.com/?p=79387', label: 'Attack Magazine: Joey Beltram, Energy Flash'},
    {href: 'https://www.insomniac.com/music/from-the-crate-plastikman-spastik/', label: 'Insomniac: From the Crate, Plastikman, Spastik'},
    {href: 'https://xlr8r.com/?p=113950', label: 'XLR8R: Jeff Mills, The Bells'},
    {href: 'https://ra.co/reviews/24143', label: 'Resident Advisor: RA Rewind, Basic Channel, Phylyps Trak'},
    {href: 'https://benklock.bandcamp.com/track/subzero', label: 'Ben Klock auf Bandcamp: Subzero'},
    {href: 'https://charlottedewittemusic.bandcamp.com/album/formula-ep', label: 'Charlotte de Witte auf Bandcamp: Formula EP'},
    {href: 'https://www.timeout.com/newyork/nightlife/best-techno-songs-of-all-time', label: 'Time Out New York: Best techno songs of all time'},
    {href: 'https://dmy.co/10-best/the-10-best-techno-tracks-according-to-benjamin-damage/', label: 'Dummy: The 10 best techno tracks according to Benjamin Damage'},
    {href: 'https://www.musicindustryhowto.com/techno-songs/', label: 'Music Industry How To: Techno songs'}
  ],

  bandcamp: {
    description: 'Einer meiner eigenen Tracks. Ein Kauf unterstützt meine Arbeit direkt.',
    tracks: [
      {title: '60 hours of mistakes', id: '3330948631', url: 'https://thecatrave.bandcamp.com/track/60-hours-of-mistakes', linkText: '60 hours of mistakes von thecatrave'}
    ]
  }
};
