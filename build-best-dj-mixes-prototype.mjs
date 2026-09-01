import { writeFileSync } from 'node:fs';
import {
  articlePage,
  articleHero,
  infoBanner,
  articleMixEntry,
  articleFaq,
  articleSection,
  articleStructuredData,
  breadcrumbStructuredData,
  faqStructuredData,
  authorCard
} from './site-components.mjs';

const canonical = 'https://thecatrave.com/best-dj-mixes';
const title = 'Best DJ Mixes & Sets: Breakbeat, Bass, Experimental & Rave';
const description = 'A personal selection of the best DJ mixes and sets I keep returning to, spanning breakbeat, bass, breaks, experimental club music and rave.';
const ogImage = 'https://thecatrave.com/img/thecatrave-author-800.jpg';

const faqItems = [
  {
    question:'What are some of the best DJ mixes to listen to?',
    answer:'This list collects DJ mixes and live sets I personally return to, with an emphasis on breakbeat, bass music, breaks, experimental club music and rave. It is a personal archive rather than a definitive ranking.',
    answerHtml:'<p>This list collects DJ mixes and live sets I personally return to, with an emphasis on breakbeat, bass music, breaks, experimental club music and rave. It is a personal archive rather than a definitive ranking.</p>'
  },
  {
    question:'Where can I find good DJ sets online?',
    answer:'YouTube and SoundCloud are the two obvious starting points. Boiler Room, The Lot Radio, Kiosk Radio and Resident Advisor also maintain large archives of DJ sets, radio sessions and live electronic performances.',
    answerHtml:'<p>YouTube and SoundCloud are the two obvious starting points. Boiler Room, The Lot Radio, Kiosk Radio and Resident Advisor also maintain large archives of DJ sets, radio sessions and live electronic performances.</p>'
  },
  {
    question:'What is the difference between a DJ mix and a DJ set?',
    answer:'A DJ mix usually means a continuous recorded selection, while a DJ set can also refer to a specific live performance in a club, festival or radio studio. In practice the terms overlap heavily.',
    answerHtml:'<p>A DJ mix usually means a continuous recorded selection, while a DJ set can also refer to a specific live performance in a club, festival or radio studio. In practice the terms overlap heavily.</p>'
  },
  {
    question:'Is YouTube or SoundCloud better for DJ mixes?',
    answer:'YouTube is especially useful when the room, crowd or performance matters. SoundCloud is often better for audio-first listening and underground uploads. This archive uses the version that best represents each set.',
    answerHtml:'<p>YouTube is especially useful when the room, crowd or performance matters. SoundCloud is often better for audio-first listening and underground uploads. This archive uses the version that best represents each set.</p>'
  }
];

const hero = articleHero({
  kicker:'DJ mix archive',
  title:'The Best DJ Mixes I\'ve Heard',
  readingTime:'~10 min read + hours of music',
  dateModified:'2026-09-01',
  dateLabel:'1 September 2026',
  deck:'A personal archive of breakbeat, bass, breaks, experimental club music, rave and the sets that are too good to file neatly.',
  summaryHtml:infoBanner({
    label:'ABOUT THIS LIST',
    ariaLabel:'About this DJ mix archive',
    className:'article-summary',
    bodyHtml:'This is not a ranking of the biggest DJs or a monthly chart. It is a permanent collection of mixes and live sets I actually return to because of the selection, pacing, atmosphere or one moment that changes the direction of the whole recording. The list deliberately crosses genres. What connects it is taste rather than a strict taxonomy.'
  }),
  tocItems:[
    {href:'#riria-boiler-room-tokyo',label:'riria / Boiler Room Tokyo'},
    {href:'#job-jobse-amsterdam',label:'Job Jobse / Boiler Room Amsterdam'},
    {href:'#chase-status-london',label:'Chase & Status / Boiler Room London'},
    {href:'#underworld-london',label:'Underworld / Boiler Room London'},
    {href:'#overmono-manchester',label:'Overmono / Boiler Room Manchester'},
    {href:'#kettama-london',label:'KETTAMA / Boiler Room London'},
    {href:'#faq',label:'FAQ'}
  ]
});

const jumpNav = `<nav class="mix-jump-nav" aria-label="Jump to a mix by sound or mood"><div class="mix-jump-nav-inner"><div class="mix-jump-row"><span class="mix-jump-label">Sound</span><a href="#overmono-manchester">Breaks</a><a href="#riria-boiler-room-tokyo">Bass</a><a href="#riria-boiler-room-tokyo">Experimental</a><a href="#underworld-london">Rave</a><a href="#chase-status-london">DnB</a></div><div class="mix-jump-row"><span class="mix-jump-label">Mood</span><a href="#riria-boiler-room-tokyo">Weird</a><a href="#job-jobse-amsterdam">Sexy</a><a href="#chase-status-london">Hyper</a><a href="#underworld-london">Nostalgic</a><a href="#overmono-manchester">Emotional</a><a href="#kettama-london">Sweaty</a></div></div></nav>`;

const mixes = [
  articleMixEntry({
    id:'riria-boiler-room-tokyo',
    index:1,
    city:'Tokyo',
    format:'Boiler Room / DJ set',
    title:'riria — Boiler Room: Tokyo',
    youtubeId:'Fa8LQLy4C5A',
    tone:'coral',
    backgroundWord:'WEIRD',
    genres:['Experimental','Bass'],
    moods:['Weird','Chaotic'],
    metrics:[{label:'Weirdness',score:9.2},{label:'Chaos',score:8.4}],
    description:'Trying to pin this set to one genre misses the point. riria keeps switching the frame, moving between bass pressure, hard edits and stranger club material without making the changes feel random.'
  }),
  articleMixEntry({
    id:'job-jobse-amsterdam',
    index:2,
    city:'Amsterdam',
    format:'Boiler Room / DJ set',
    title:'Job Jobse — Boiler Room: Amsterdam',
    youtubeId:'-w3xYI64LSo',
    tone:'paper',
    backgroundWord:'SEXY',
    genres:['Club','House'],
    moods:['Sexy','Euphoric'],
    metrics:[{label:'Euphoria',score:9},{label:'Sexiness',score:8.3}],
    description:'Job Jobse is very good at knowing when melody should take over a room. The set feels romantic without losing its club logic, with tension and release doing more work than brute force.'
  }),
  articleMixEntry({
    id:'chase-status-london',
    index:3,
    city:'London',
    format:'Boiler Room / DJ set',
    title:'Chase & Status — Boiler Room: London',
    youtubeId:'Zy_JR9_Y8dE',
    tone:'yellow',
    backgroundWord:'HYPER',
    genres:['Drum & Bass','Bass'],
    moods:['Hyper','Sweaty'],
    metrics:[{label:'Energy',score:10},{label:'Sweat',score:9.8}],
    description:'Reloads, huge basslines and almost no restraint. The interesting part is not subtlety, it is how efficiently the pressure keeps moving and how quickly one peak is replaced by the next.',
    tracklistLabel:'Tracklist / 28 IDs',
    tracklist:[
      {time:'00:00',track:'Chase & Status & Mozey feat. Sav\'o & Horrid1 — On The Block'},
      {time:'06:21',track:'Chase & Status feat. Burro Banton — Delete'},
      {time:'08:11',track:'T>I — Dye Migration (Serum Remix)'},
      {time:'09:28',track:'Chase & Status feat. Popcaan & IRAH — Censor (VIP)'},
      {time:'12:07',track:'Mtox & Evoke — Listen Up'},
      {time:'13:56',track:'Chase & Status & Hedex feat. ArrDee — Liquor & Cigarettes'},
      {time:'18:40',track:'Chase & Status feat. Cutty Ranks — Retreat2018'},
      {time:'20:25',track:'Chopstick Dubplate feat. Ragga Twins & Bunny Lye Lye — Give Me A Dubplate'},
      {time:'21:30',track:'Dimension — UK (Bou Remix)'},
      {time:'23:00',track:'Chase & Status feat. Stefflon Don — Selecta'},
      {time:'25:50',track:'TC — Where\'s My Money (A.M.C & Turno Remix)'},
      {time:'27:20',track:'Chase & Status — ID'},
      {time:'30:15',track:'Chase & Status feat. Takura — No Problem'},
      {time:'33:25',track:'ATMOS — Hold You'},
      {time:'33:50',track:'Chase & Status feat. Masicka — Weed & Rum (VIP)'},
      {time:'38:20',track:'Chase & Status feat. Takura — 2 Ruff'},
      {time:'41:00',track:'Chase & Status feat. IRAH — Program'},
      {time:'46:00',track:'UK Apache & Shy FX — Original Nuttah (Chase & Status Remix)'},
      {time:'48:53',track:'Chase & Status feat. Clementine Douglas — Say The Word'},
      {time:'53:00',track:'Bou & Chase & Status feat. Trigga, IRAH, Flowdan & Takura — Baddadan (VIP)'}
    ]
  }),
  articleMixEntry({
    id:'underworld-london',
    index:4,
    city:'London',
    format:'Boiler Room / Live PA',
    title:'Underworld — Boiler Room: London',
    youtubeId:'rAOHJqJMYDA',
    tone:'ink',
    backgroundWord:'RAVE',
    genres:['Rave','Electronic'],
    moods:['Nostalgic','Euphoric'],
    metrics:[{label:'Nostalgia',score:10},{label:'Euphoria',score:9.5}],
    description:'Decades of rave history are present without the performance turning into nostalgia tourism. Old material, newer club records and Underworld\'s own catalogue sit together as something current rather than commemorative.',
    tracklistLabel:'Tracklist / 17 IDs',
    tracklist:[
      {time:'00:00',track:'Underworld — Dark & Long (Dark Train)'},
      {time:'09:27',track:'Underworld — Two Months Off'},
      {time:'16:29',track:'Underworld — Cowgirl'},
      {time:'22:45',track:'Death Grips — Giving Bad People Good Ideas'},
      {time:'24:00',track:'Brutalismus 3000 — alleswirdgut (Underworld Remix)'},
      {time:'28:15',track:'Underworld — Push Upstairs'},
      {time:'32:49',track:'KETTAMA — B O D Y'},
      {time:'38:38',track:'Underworld — King Of Snake'},
      {time:'46:58',track:'Underworld & Ø [Phase] — Border Country'},
      {time:'54:25',track:'Underworld — Arpeggio12'},
      {time:'57:40',track:'Underworld — Pearl\'s Girl (Tin There)'},
      {time:'1:04:14',track:'Brutalismus 3000 — Horime'},
      {time:'1:05:24',track:'Underworld — Moaner'},
      {time:'1:11:22',track:'Underworld — Born Slippy NUXX'}
    ]
  }),
  articleMixEntry({
    id:'overmono-manchester',
    index:5,
    city:'Manchester',
    format:'Boiler Room / Live PA',
    title:'Overmono — Boiler Room: Manchester',
    youtubeId:'xgJBhezlMoE',
    tone:'cyan',
    backgroundWord:'EMOTIONAL',
    genres:['Breaks','Bass'],
    moods:['Emotional','Dirty'],
    metrics:[{label:'Emotion',score:9.1},{label:'Filth',score:8.7}],
    description:'This sits right in the space between broken rhythm, heavy low end and emotional electronic music. The huge moments work because the vulnerable ones are allowed to stay vulnerable.',
    tracklistLabel:'Selected tracklist',
    tracklist:[
      {time:'00:00',track:'Overmono — Feelings Plain'},
      {time:'03:00',track:'Overmono — Gunk'},
      {time:'13:00',track:'Kwengface, Joy Orbison & Overmono — Freedom 2'},
      {time:'16:00',track:'Overmono — Blow Out'},
      {time:'23:00',track:'Overmono — Cold Blooded'},
      {time:'27:00',track:'The Streets — Turn The Page'},
      {time:'31:00',track:'Overmono — So U Kno'},
      {time:'48:00',track:'Overmono feat. St. Panther — Walk Thru Water'},
      {time:'51:00',track:'For Those I Love — I Have A Love (Overmono Remix)'},
      {time:'62:00',track:'Overmono — Is U'},
      {time:'68:00',track:'Overmono — Good Lies'}
    ]
  }),
  articleMixEntry({
    id:'kettama-london',
    index:6,
    city:'London',
    format:'Boiler Room / DJ set',
    title:'KETTAMA — Boiler Room: London',
    youtubeId:'JUDUC87VuPU',
    tone:'coral',
    backgroundWord:'SWEATY',
    genres:['Breaks','Bass'],
    moods:['Sweaty','Peak-time'],
    metrics:[{label:'Energy',score:9.6},{label:'Sweat',score:9.5}],
    description:'Big drums, speed and enough roughness to keep the set from becoming polished festival music. It is direct and physical, with the kind of rhythmic impact that makes sitting still feel wrong.',
    tracklistLabel:'Tracklist / selected IDs',
    tracklist:[
      {time:'00:00',track:'Soul Mass Transit System — Jump (Rushing Mix)'},
      {time:'06:00',track:'Sidney Charles & BUGS — Trip Advisor (Rhythm, Snare, Bass) (2025 Warp Mix)'},
      {time:'10:00',track:'Calvin Harris & Clementine Douglas — Blessings (KETTAMA Remix)'},
      {time:'14:00',track:'Skepta — I Spy'},
      {time:'18:00',track:'Decibel Place — Are You (EMRE ERKUL Remix)'},
      {time:'23:00',track:'KETTAMA, DJ HEARTSTRING & KLP — If U Want My Heart'},
      {time:'28:00',track:'KETTAMA — It Gets Better (Forever Mix)'},
      {time:'33:00',track:'TWOFACED & Nikita W. — I Need You'},
      {time:'40:00',track:'KETTAMA — Man With A Second Face'},
      {time:'46:00',track:'KETTAMA & Interplanetary Criminal — Yosemite (Extended)'},
      {time:'53:00',track:'KETTAMA & Clouds — Sort It Out'}
    ]
  })
].join('');

const breakBlock = `<section class="floating-block mix-break"><p class="era-years">03:17 / STILL LISTENING</p><blockquote>The best mix is not always the cleanest one. It is the one you start again the next day.</blockquote></section>`;

const about = articleSection({
  id:'how-this-list-works',
  title:'How this list works.',
  className:'mix-about-section',
  bodyHtml:`<div class="mix-about-grid"><div class="mix-about-card"><p class="article-kicker">Selection</p><h3>No ranking, no monthly reset.</h3><p>The page is designed as a permanent archive. A set stays because I still want to hear it, not because it was released this month or because the artist is currently popular.</p></div><div class="mix-about-card"><p class="article-kicker">Mood tags</p><h3>Genre is only half the information.</h3><p>Breaks, bass and rave tell you roughly what is inside. Weird, sexy, emotional, sweaty or nostalgic tell you why you might want to play it right now.</p></div></div><p>If this selection overlaps with your taste, my own DJ sets live on <a href="https://soundcloud.com/thecatrave" target="_blank" rel="noopener noreferrer">SoundCloud ↗</a>. I play across breakbeat, bass music, breaks, experimental electronic music and rave.</p>`
});

const faq = articleFaq({items:faqItems,title:'DJ mixes and sets: FAQ.',id:'faq'});

const resources = articleSection({
  id:'recommended-resources',
  title:'🔗 Recommended resources.',
  className:'sources-section',
  bodyHtml:'<p><a href="https://boilerroom.tv/" target="_blank" rel="noopener noreferrer">Boiler Room ↗</a><br><a href="https://www.thelotradio.com/" target="_blank" rel="noopener noreferrer">The Lot Radio ↗</a><br><a href="https://www.kioskradio.com/" target="_blank" rel="noopener noreferrer">Kiosk Radio ↗</a><br><a href="https://ra.co/" target="_blank" rel="noopener noreferrer">Resident Advisor ↗</a></p>'
});

let html = articlePage({
  title,
  description,
  canonical,
  ogImage,
  datePublished:'2026-09-01',
  dateModified:'2026-09-01',
  bodyClass:'article-page dj-mixes-page',
  structuredData:[
    articleStructuredData({headline:'The Best DJ Mixes I\'ve Heard',description,canonical,image:ogImage,datePublished:'2026-09-01',dateModified:'2026-09-01'}),
    breadcrumbStructuredData({name:'Best DJ mixes',canonical}),
    faqStructuredData({items:faqItems})
  ],
  articleHtml:hero + jumpNav + mixes.slice(0, mixes.indexOf('<section class="floating-block mix-poster mix-tone-ink"')) + breakBlock + mixes.slice(mixes.indexOf('<section class="floating-block mix-poster mix-tone-ink"')) + about + faq + authorCard({filled:true}) + resources
});

html = html
  .replace('<meta name="robots" content="index,follow,max-image-preview:large">','<meta name="robots" content="noindex,nofollow">')
  .replace('</head>','<link rel="stylesheet" href="best-dj-mixes-prototype.css"></head>')
  .replace('</body>','<script defer src="best-dj-mixes-prototype.js"></script></body>');

writeFileSync(new URL('./best-dj-mixes-prototype.html', import.meta.url), html);
console.log('Built best-dj-mixes-prototype.html');
