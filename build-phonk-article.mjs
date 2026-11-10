// Build phonk-guide.html from phonk-guide-draft.md (shared builder: build-genre-guide.mjs).
//
// Written on 2026-11-10 as the trial run of the subagent pipeline
// (PROCESS-AUDIT-2026-11-10.md). Research: Wikipedia (Phonk, with its drift
// phonk, rare phonk and funk automotivo sections), The Conversation (2024),
// Okayplayer (2012), Crack Magazine (2012) and Epidemic Sound (2025).
// Volumes are in keywords/phonk-guide.json: Keyword Planner ranges and the
// Ahrefs US points for four terms, labelled per term and never merged.
//
// Images from Wikimedia Commons, downloaded to img/phonk/ on 2026-11-10.
// Records from the artist's or label's own channel, sets from Boiler Room,
// all checked through YouTube oEmbed on 2026-11-10. Neither is used by any
// other guide (media/phonk.json).
import {buildGenreGuide} from './build-genre-guide.mjs';

buildGenreGuide({
  slug: 'phonk-guide',
  imgDir: 'phonk',
  title: 'What Is Phonk? Phonk Music Meaning, Drift Phonk, Songs, Artists',
  description: 'What phonk is: the Memphis rap it is built on, what the word means, SpaceGhostPurrp, drift phonk, Brazilian phonk, the best phonk songs and the artists.',
  datePublished: '2026-11-10',
  dateModified: '2026-11-10',
  dateLabel: '10 November 2026',
  kicker: 'Phonk',
  heroTitle: 'What is phonk? Phonk music, its meaning, drift phonk and the songs',
  deck: 'Memphis rap tapes, slowed and screwed, renamed on SoundCloud in 2012, then sped up in Russia and set to drifting cars: the two lives of phonk.',
  answerLabel: 'What is phonk',
  introTitle: 'Two lives.',
  faqTitle: 'Phonk FAQ.',
  ogImage: 'img/og/phonk.jpg',
  bodyClass: 'phonk-page',
  sections: [
    {id: 'sound', heading: 'What phonk music sounds like'},
    {id: 'meaning', heading: 'What phonk means'},
    {id: 'origins', heading: 'Where phonk came from'},
    {id: 'rare-phonk', heading: 'Rare phonk and SoundCloud'},
    {id: 'drift-phonk', heading: 'Drift phonk'},
    {id: 'brazilian-phonk', heading: 'Brazilian phonk'},
    {id: 'popularity', heading: 'Why phonk got so popular'},
    {id: 'best-songs', heading: 'The best phonk songs'},
    {id: 'artists', heading: 'Phonk artists'},
    {id: 'where-to-start', heading: 'Where to start with phonk'}
  ],
  images: {
    'Beale Street': ['beale-street-memphis-2006', 1200, 794,
      'Beale Street in Memphis at night, with neon signs above the bars',
      'Beale Street, Memphis, at night in 2006. Photograph: Curt Hart, CC BY 2.0.'],
    'Three 6 Mafia': ['juicy-j-dj-paul-2009', 1024, 768,
      'Juicy J and DJ Paul of Three 6 Mafia, photographed in 2009',
      'Juicy J and DJ Paul of Three 6 Mafia in 2009. Photograph: Aaaarrrrgggghhhh!, CC BY 2.0.'],
    'Denzel Curry': ['denzel-curry-2017', 1200, 800,
      'Denzel Curry performing on stage in 2017',
      'Denzel Curry in March 2017. Photograph: friedoxygen, CC BY 2.0.'],
    'drift car': ['drift-adm-raceway-2021', 1200, 800,
      'A car drifting sideways through a corner in a cloud of tyre smoke',
      'A drift at ADM Raceway, Drift Expo festival, May 2021. Photograph: Michał Siergiejevicz, CC BY 2.0.'],
    'Tommy Wright III photo': ['tommy-wright-iii-montreal-2019', 1104, 584,
      'Tommy Wright III performing at La Sala Rossa in Montreal',
      'Tommy Wright III at La Sala Rossa, Montreal, July 2019. Photograph: Bull-Doser, public domain.']
  },
  videos: {
    'Been Fweago': ['zrTzt3lrRaM', 'Phonk', 'SpaceGhostPurrp', 'Been Fweago',
      'From Mysterious Phonk, the 2012 album on 4AD, on the artist\'s Topic channel.'],
    'Pheel Tha Phonk': ['Qoi5LF9NDvo', 'Phonk', 'SpaceGhostPurrp', 'Pheel Tha Phonk 1990',
      'A 2013 video from the run of songs that carried the word, on SpaceGhostPurrp\'s channel.'],
    'Bringing The Phonk': ['BusMLlogMJs', 'Phonk', 'SpaceGhostPurrp', 'Bringing The Phonk',
      'From the Raider Klan years, on SpaceGhostPurrp\'s channel.'],
    'Tommy Wright III Boiler Room': ['domL07OypKk', 'Memphis rap', 'Tommy Wright III', 'Boiler Room Memphis: The Legends of Memphis Rap',
      'Tommy Wright III at Willie Mitchell\'s studio in Memphis, 2026.'],
    'DJ Smokey Boiler Room': ['APe7fhdkp9Q', 'Phonk', 'Dj Smokey', 'Boiler Room: LA',
      'DJ Smokey on the main stage of Boiler Room\'s Los Angeles showcase.'],
    'Scary Garry': ['z9nHtotESH4', 'Drift phonk', 'Kaito Shoma', 'Scary Garry, 2016',
      'One of the first drift phonk songs, from Kaito Shoma\'s channel.'],
    'Murder in My Mind': ['w-sQRS-Lc9k', 'Drift phonk', 'Kordhell', 'Murder in My Mind',
      'The single Kordhell is best known for, from his channel.'],
    'Rave': ['PTZgxW_3LIQ', 'Drift phonk', 'DXRK', 'Rave',
      'DXRK\'s best-known single, from the artist\'s channel.']
  },
  sources: [
    ['https://en.wikipedia.org/wiki/Phonk', 'Wikipedia: Phonk'],
    ['https://theconversation.com/how-a-global-crisis-drift-racing-and-memphis-hip-hop-gave-us-phonk-the-music-of-the-tiktok-generation-224960', 'The Conversation: How a global crisis, drift racing and Memphis hip-hop gave us phonk, Ward, Luttrell and Goold, 2024'],
    ['https://www.okayplayer.com/news/spaceghostpurrp-mysterious-phonk-interview-trayvon-trill-porn.html', 'Okayplayer: SpaceGhostPurrp interview, 2012'],
    ['https://crackmagazine.net/article/news/spaceghostpurrp/2', 'Crack Magazine: SpaceGhostPurrp, David Reed, 2012'],
    ['https://www.epidemicsound.com/blog/what-is-phonk-music/', 'Epidemic Sound: What is phonk music, 2025']
  ]
});
