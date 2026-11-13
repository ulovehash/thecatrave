// French techno tracks guide. Structure, facts and the nine records from the
// English page (best-techno-tracks-draft.md, build-best-techno-tracks-article.mjs,
// media/best-techno-tracks.json). Quotations are translated; the sources quoted
// are English and are listed below.
//
// Keywords: Google Keyword Planner, France, French, 2026-11-13, buckets only
// (keywords/fr-best-techno-tracks.json). "musique techno connue" (100-1K) sets
// the slug and the title; "meilleure musique techno", "meilleur titre techno",
// "morceau techno" and "classique techno" (10-100) carry the answer, the FAQ and
// the play-first section. "techno années 90" returned no row: not measured.
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
  'no-ufos': {artist: 'Model 500', title: 'No UFO’s', year: '1985', note: 'Metroplex. La version chantée.',
    playerHtml: spotify('0shMp9Vkjr8X77jQCWlaEP', 'Model 500, No UFO’s')},
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
  lang: 'fr',
  name: 'fr-best-techno-tracks',
  file: 'fr/musique-techno-connue.html',
  draft: 'fr/best-techno-tracks-draft.md',
  canonical: 'https://thecatrave.com/fr/musique-techno-connue',
  englishPath: '/best-techno-tracks',
  ogImage: 'https://thecatrave.com/img/og/best-techno-tracks.jpg',
  bodyClass: 'article-page best-techno-tracks-page',
  minReadingMinutes: 6,

  title: 'Musique techno connue : neuf classiques qui ont façonné le son',
  description: 'Neuf classiques de la musique techno, de No UFO’s et Strings of Life à The Bells et Doppler, chacun avec un lecteur et les faits qui le racontent.',
  datePublished: '2026-11-13',
  dateModified: '2026-11-13',
  dateLabel: '13 novembre 2026',

  heroKicker: 'Morceaux techno',
  heroTitle: 'Musique techno connue : neuf disques qui ont façonné le son',
  deck: 'Neuf disques techno, regroupés par scène, chacun avec un lecteur et les faits qui le racontent, de Détroit en 1985 jusqu’à 2021.',
  answerLabel: 'MUSIQUE TECHNO CONNUE',
  breadcrumbName: 'Musique techno connue',

  answerSection: 'Réponse',
  introSection: 'Introduction',
  introTitle: 'Une liste de disques, pas une histoire.',
  faqSection: 'FAQ',
  faqLabel: 'FAQ',
  faqTitle: 'Questions fréquentes sur les classiques de la techno.',

  sections: [
    {id: 'how-chosen', heading: 'Neuf façons différentes de faire de la techno'},
    {id: 'detroit-chicago', heading: 'Détroit et Chicago, de 1985 à 1987'},
    {id: 'rave-acid-minimalism', heading: 'Pression rave et minimalisme acid, de 1990 à 1996', tocLabel: 'Pression rave et minimalisme acid'},
    {id: 'berlin-dub-techno', heading: 'Berlin et la dub techno'},
    {id: 'underground-resistance', heading: 'Underground Resistance et Doppler'},
    {id: 'play-first', heading: 'Quel morceau techno écouter en premier ?', tocLabel: 'Quel morceau en premier ?'},
    {id: 'break-from-list', heading: 'Musique de thecatrave'}
  ],

  media: ({lang}) => {
    const block = (id, label, keys) => articleListeningCollection({
      lang, id: `listen-${id}`, label, tone: 'cyan', items: keys.map(key => tracks[key])
    });
    const deWitte = figure('charlotte-de-witte-rotterdam', 900, 1120,
      'Charlotte de Witte aux platines du Toffler à Rotterdam',
      'Charlotte de Witte au travail au Toffler, à Rotterdam. Photo : Alan Overbeek, CC BY-SA 4.0.');
    return {
      'no-ufos': '',
      'strings-of-life': block('detroit-chicago', 'Détroit et Chicago', ['no-ufos', 'strings-of-life']),
      'energy-flash': '',
      'spastik': '',
      'the-bells': block('rave-acid-minimalism', 'Pression rave et minimalisme acid', ['energy-flash', 'spastik', 'the-bells']),
      'phylyps-trak': '',
      'subzero': '',
      'jaguar': '',
      'doppler': '',
      'Richie Hawtin at Fabric': figure('richie-hawtin-fabric', 1200, 900,
        'Richie Hawtin aux platines du Fabric à Londres',
        'Richie Hawtin au Fabric, à Londres, en 2008. C’est sous le nom de Plastikman qu’il a sorti Spastik. Photo : Raminta Malinauskaite, CC BY-SA 3.0.'),
      'Charlotte de Witte in Rotterdam': {
        usePreviousParagraph: true,
        render: text => `${block('underground-resistance', 'Underground Resistance et Doppler', ['jaguar', 'doppler'])}\n<p>${escapeHtml(text)}</p>\n${deWitte}`
      },
      'thecatrave Berlin Race 1909': `${ownTrackListening('berlin-race-1909', 'Mon propre morceau, fait quand je vivais à Berlin. Il ne fait pas partie de la liste.', lang)}\n${block('berlin-dub-techno', 'Berlin et la dub techno', ['phylyps-trak', 'subzero'])}`,
      'thecatrave No Genre No Problem': ownTrackListening('no-genre-no-problem', 'Mon premier morceau terminé, qui ne fait pas partie de la liste.', lang),
      chosen: articleTable({
        headers: ['Morceau', 'Artiste', 'Année', 'Label'],
        rows: [
          ['No UFO’s', 'Model 500', '1985', 'Metroplex'],
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
    {href: 'https://daily.redbullmusicacademy.com/2017/05/interview-derrick-may/', label: 'Red Bull Music Academy Daily : entretien avec Derrick May'},
    {href: 'https://www.insomniac.com/?p=84044', label: 'Insomniac: Rhythim Is Rhythim, Strings of Life'},
    {href: 'https://www.insomniac.com/?p=40063', label: 'Insomniac: DJ Rolando, Knights of the Jaguar'},
    {href: 'https://attackmagazine.com/?p=79387', label: 'Attack Magazine: Joey Beltram, Energy Flash'},
    {href: 'https://www.insomniac.com/music/from-the-crate-plastikman-spastik/', label: 'Insomniac: From the Crate, Plastikman, Spastik'},
    {href: 'https://xlr8r.com/?p=113950', label: 'XLR8R: Jeff Mills, The Bells'},
    {href: 'https://ra.co/reviews/24143', label: 'Resident Advisor: RA Rewind, Basic Channel, Phylyps Trak'},
    {href: 'https://benklock.bandcamp.com/track/subzero', label: 'Ben Klock sur Bandcamp : Subzero'},
    {href: 'https://charlottedewittemusic.bandcamp.com/album/formula-ep', label: 'Charlotte de Witte sur Bandcamp : Formula EP'},
    {href: 'https://www.timeout.com/newyork/nightlife/best-techno-songs-of-all-time', label: 'Time Out New York: Best techno songs of all time'},
    {href: 'https://dmy.co/10-best/the-10-best-techno-tracks-according-to-benjamin-damage/', label: 'Dummy: The 10 best techno tracks according to Benjamin Damage'},
    {href: 'https://www.musicindustryhowto.com/techno-songs/', label: 'Music Industry How To: Techno songs'}
  ],

  bandcamp: {
    description: 'Un de mes propres morceaux. L’acheter soutient directement mon travail.',
    tracks: [
      {title: '60 hours of mistakes', id: '3330948631', url: 'https://thecatrave.bandcamp.com/track/60-hours-of-mistakes', linkText: '60 hours of mistakes de thecatrave'}
    ]
  }
};
