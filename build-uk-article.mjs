import fs from 'node:fs';
import {articleFaq, articleFigure, articleHero, articleListeningBand, articlePage, articleSection, articleSources, articleStructuredData, articleTable, articleTableOfContents, articleVideoCard, articleVideoCollection, authorCard, bandcampSupport, breadcrumbStructuredData, faqStructuredData, readNext} from './site-components.mjs';
import {relatedArticles as relatedArticlesFor} from './home-articles.mjs';

const markdown = fs.readFileSync('uk-electronic-music-evolution-draft.md', 'utf8');
const escapeHtml = value => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const inline = value => escapeHtml(value).replace(/\*([^*]+)\*/g, '<em>$1</em>').replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
const plainText = value => value
  .replace(/<[^>]+>/g, ' ')
  .replace(/&amp;/g, '&')
  .replace(/&lt;/g, '<')
  .replace(/&gt;/g, '>')
  .replace(/&quot;/g, '"')
  .replace(/&#39;|&#x27;/g, "'")
  .replace(/&#(\d+);/g, (entity, code) => String.fromCodePoint(Number(code)))
  .replace(/&#x([0-9a-f]+);/gi, (entity, code) => String.fromCodePoint(Number.parseInt(code, 16)))
  .replace(/\s+/g, ' ')
  .trim();
const sections = new Map();
let current = '';
for (const line of markdown.split(/\r?\n/)) {
  const heading = line.match(/^(#{1,3}) (.+)$/);
  if (heading) { current = heading[2]; sections.set(current, []); }
  else if (current) sections.get(current).push(line);
}

function paragraphArray(title) {
  return (sections.get(title) || []).join('\n').split(/\n\s*\n/).map(v => v.trim())
    .filter(v => v && !v.startsWith('[') && !v.startsWith('|') && !v.startsWith('- '))
    .map(v => `<p>${inline(v.replace(/\n/g, ' '))}</p>`);
}
function paragraphs(title, limit = Infinity) { return paragraphArray(title).slice(0, limit).join('\n'); }

function table(title) {
  const rows = (sections.get(title) || []).filter(line => /^\|.+\|$/.test(line.trim()));
  if (rows.length < 3) return '';
  const cells = line => line.trim().slice(1, -1).split('|').map(cell => inline(cell.trim()));
  const head = cells(rows[0]);
  const body = rows.slice(2).map(cells);
  return articleTable({headers:head, rows:body});
}

function linkList(title) {
  const links = (sections.get(title) || []).filter(line => line.trim().startsWith('- '));
  return links.length ? `<ul class="source-list">${links.map(line => `<li>${inline(line.trim().slice(2))}</li>`).join('')}</ul>` : '';
}
function video(id, genre, artist, title) {
  return articleVideoCard({youtubeId:id,genre,artist,title});
}
const videos = {
  acid: [video('yCNpciIixbk','Acid house','Baby Ford','Oochy Koochy'),video('ML_FBvudqI0','Bleep','LFO','LFO (Leeds Warehouse Mix)')],
  jungle: [video('PaBLXLn8cOY','Breakbeat hardcore','SL2','DJs Take Control'),video('_VFf6434lto','Jungle','Shy FX & UK Apache','Original Nuttah'),video('i-P98B2skts','Drum and bass','Goldie','Inner City Life')],
  garage: [video('DXCtYUtjDYU','UK garage','MJ Cole','Sincere'),video('uR3Vw8J8vUo','Speed garage','Double 99','RipGroove'),video('-15oU-lNSnc','2-step','Wookie','Battle')],
  other90s: [video('ZWmrfgj0MZI','Bristol sound','Massive Attack','Unfinished Sympathy'),video('_GfcIprkuvw','Big beat','The Chemical Brothers','Chemical Beats'),video('uXpKC8TIAxE','Electronic listening music','Aphex Twin','Xtal'),video('fZ1xP6WXPLY','British techno','Surgeon','Magneze')],
  zeroes: [video('--jr22La8Nk','Dubstep','Digital Mystikz','Anti War Dub'),video('4bMQTU2iI1E','Grime','Musical Mob','Pulse X'),video('w_Chrqwt-Hk','Bassline','T2 feat. Jodie Aysha','Heartbroken'),video('bqL8ls8CaEA','UK funky','Roska','Squark')],
  early10s: [video('Aa_PDKKc2_A','Post-dubstep','Joy Orbison','Hyph Mngo'),video('uxtc8JawP2g','Instrumental grime','Mr Mitch','Don’t Leave'),video('pdMjV4OVmbI','Bristol club music','Peverelist','Roll With the Punches'),video('YG0ggHM1PLM','PC Music','A. G. Cook','Beautiful')],
  current: [video('1NXmpUrp5W8','New UK garage','Conducta','Whippet'),video('APPNBJqGJaA','Modern jungle','Tim Reaper','Give Me More'),video('PjCVcVw8f1Y','Jungle crossover','Nia Archives','Forbidden Feelingz'),video('rsFDOGwkSv8','UK club music','Joy Orbison','flight fm')]
};
const listeningBlock = (items, copy) => articleVideoCollection({items,description:copy});
const soundcloudFeature = (slug, title, copy) => articleListeningBand({
  platform:'soundcloud', id:`uk-mix-${slug}`, kicker:'A mix by thecatrave', title, description:copy,
  src:`https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/thecatrave/${slug}&color=%23ff5a36&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`,
  iframeTitle:`${title} by thecatrave on SoundCloud`, fullBleed:true, tone:'cyan'
});
const imageDimensions = {'img/people dancing':[1200,777],'img/flyers':[1200,675],'img/skream':[1200,900]};
const downloadedDimensions = {'roland-tb303':[1200,590]};
const cutoutDimensions = {'atari-1040st-cutout':[1200,816]};
const image = (name, alt, text = '', extra = '') => {
  const encodedName = name.replace(/ /g, '%20');
  return articleFigure({src:`${encodedName}-1200.webp`,srcset:`${encodedName}-320.webp 320w, ${encodedName}-1200.webp 1200w`,width:imageDimensions[name]?.[0],height:imageDimensions[name]?.[1],alt,caption:text,className:extra});
};
const downloadedImage = (name, alt, text = '', extra = '') => articleFigure({src:`img/uk-electronic/${name}-1200.jpg`,srcset:`img/uk-electronic/${name}-480.jpg 480w, img/uk-electronic/${name}-1200.jpg 1200w`,width:downloadedDimensions[name]?.[0],height:downloadedDimensions[name]?.[1],alt,caption:text,className:extra});
const cutoutImage = (name, alt, text = '') => articleFigure({src:`img/uk-electronic/${name}-1200.png`,srcset:`img/uk-electronic/${name}-480.png 480w, img/uk-electronic/${name}-1200.png 1200w`,sizes:'(max-width: 760px) calc(100vw - 32px), 560px',width:cutoutDimensions[name]?.[0],height:cutoutDimensions[name]?.[1],alt,caption:text,className:'cutout-image'});
function era(id, years, title, body) { return articleSection({id,kicker:years,title,bodyHtml:body,className:'era'}); }

function genreMap() {
  const node = (x, y, w, title, date) => `<g class="map-node" tabindex="0"><rect x="${x}" y="${y}" width="${w}" height="58" rx="2"/><text x="${x + 12}" y="${y + 23}"><tspan>${title}</tspan><tspan class="map-date" x="${x + 12}" dy="19">${date}</tspan></text></g>`;
  return `<section class="floating-block article-section map-section" id="genre-map"><h2>How UK electronic music genres evolved and connect.</h2><p>This is a map of shared lineages, not a claim that one record invented the next. British scenes overlap, borrow from one another and often coexist for years.</p><figure class="genre-map"><svg viewBox="0 0 1040 460" role="img" aria-labelledby="genre-map-title genre-map-desc"><title id="genre-map-title">A map of UK electronic music genres and dates</title><desc id="genre-map-desc">A schematic showing how imported house, techno, hip-hop breaks and sound-system culture connect to acid house, bleep, hardcore, jungle, drum and bass, UK garage, grime, dubstep, bassline, UK funky and contemporary bass music.</desc><g class="map-columns"><text x="20" y="28">ROOTS</text><text x="190" y="28">1987–91</text><text x="350" y="28">1990–93</text><text x="510" y="28">1992–2001</text><text x="680" y="28">1994–2010</text><text x="850" y="28">2017→</text></g><g class="map-links"><path d="M164 99 C180 99 174 267 190 267"/><path d="M164 183 C180 183 174 183 190 183"/><path d="M164 267 C180 267 174 267 190 267"/><path d="M164 351 C250 351 270 225 350 225"/><path d="M324 183 C338 183 336 225 350 225"/><path d="M324 267 C338 267 336 225 350 225"/><path d="M484 225 C498 225 496 141 510 141"/><path d="M164 99 C330 99 350 141 510 141"/><path d="M164 99 C330 99 350 309 510 309"/><path d="M164 183 C330 183 350 309 510 309"/><path d="M644 141 C660 141 664 99 680 99"/><path d="M644 309 C660 309 664 183 680 183"/><path d="M644 309 C660 309 664 267 680 267"/><path d="M644 309 C660 309 664 351 680 351"/><path d="M814 99 C832 99 832 225 850 225"/><path d="M814 183 C832 183 832 225 850 225"/><path d="M814 267 C832 267 832 225 850 225"/><path d="M814 351 C832 351 832 225 850 225"/></g>${node(20,70,144,'Sound systems','1950s→')}${node(20,154,144,'Chicago house','1980s')}${node(20,238,144,'Detroit techno','1980s')}${node(20,322,144,'Hip-hop breaks','1970s→')}${node(190,154,134,'Acid house','1987–89')}${node(190,238,134,'Bleep','1988–91')}${node(350,196,134,'Hardcore','1990–93')}${node(510,112,134,'Jungle','1992–95')}${node(510,280,134,'UK garage','1993–2001')}${node(680,70,134,'Drum & bass','1994→')}${node(680,154,134,'Grime','2001→')}${node(680,238,134,'Dubstep','1998→')}${node(680,322,134,'Bassline / funky','2000s')}${node(850,196,170,'Converging scenes','UKG / jungle / 140 · 2017→')}</svg><ol class="genre-map-mobile"><li><span>1987–91</span><strong>Acid house and bleep</strong><p>House and techno imports meet British rave spaces and bass pressure.</p></li><li><span>1990s</span><strong>Hardcore, jungle and drum and bass</strong><p>Breakbeats accelerate and splinter while sound-system ideas move to the centre.</p></li><li><span>1993–2009</span><strong>UK garage, grime, dubstep, bassline and UK funky</strong><p>Garage swing becomes several distinct but connected scenes.</p></li><li><span>2010s–now</span><strong>Hybrid club music and converging scenes</strong><p>Older rhythmic languages circulate together rather than replacing one another.</p></li></ol><figcaption>A deliberately simplified map: dates mark emergence, not an ending.</figcaption></figure></section>`;
}

const description = 'Explore the evolution of UK electronic music, from acid house and jungle to UK garage, grime, dubstep and today’s British club scenes.';
const readingMinutes = Math.max(1, Math.round(markdown.replace(/<[^>]+>|https?:\/\/\S+|[#*|`]/g, ' ').trim().split(/\s+/).length / 225));
const author = authorCard({filled:true});
const tableOfContents = articleTableOfContents({items:[
  {id:'why-the-uk',label:'Why the UK produced so many scenes'},
  {id:'genre-map',label:'Genre and date map'},
  {id:'acid-and-bleep',label:'1987–91: acid house and bleep'},
  {id:'hardcore-jungle-dnb',label:'1990–98: hardcore, jungle and D&B'},
  {id:'uk-garage',label:'1993–2001: UK garage'},
  {id:'other-1990s',label:'The other 1990s'},
  {id:'dubstep-grime-funky',label:'2000–09: dubstep, grime and UK funky'},
  {id:'hybrid-club',label:'2010–16: hybrid club music'},
  {id:'current-era',label:'2017–present: renewed scenes'},
  {id:'future',label:'What happens next?'},
  {id:'genre-guide',label:'Genre guide and FAQ'}
]});
const support = bandcampSupport({
  description:'These releases connect directly to the breaks, bass pressure and rave continuum explored in this article. Buying one supports my music and writing directly.',
  fullBleed:true,
  tracks:[
    {
      title:'thecatrave — Protect Ya Breaks', id:'3822639635',
      url:'https://thecatrave.bandcamp.com/track/protect-ya-breaks',
      linkText:'Protect Ya Breaks by thecatrave'
    },
    {
      title:'thecatrave — Berlin Race 1909', id:'3192532299',
      url:'https://thecatrave.bandcamp.com/track/berlin-race-1909',
      linkText:'Berlin Race 1909 by thecatrave'
    }
  ]
});
const relatedArticles = readNext({items:relatedArticlesFor('uk-electronic-music-evolution.html')});
const faqQuestions = ['What electronic music genres originated in the UK?','Why did the UK create so many electronic music genres?','Did jungle come before drum and bass?','How did UK garage lead to grime and dubstep?','What role did pirate radio play in UK electronic music?','What happened to UK electronic music after dubstep?','Is UK garage still popular in 2026?','Who are the key UK electronic music artists?'];
const faqItems = faqQuestions.map(question => {
  const answerHtml = paragraphs(question);
  return {question, answerHtml, answer:plainText(answerHtml)};
});
const ukStructured = articleStructuredData({headline:'The Evolution of UK Electronic Music',description,datePublished:'2025-04-04',dateModified:'2026-08-29',canonical:'https://thecatrave.com/uk-electronic-music-evolution',image:'https://thecatrave.com/img/people%20dancing-1200.webp'});
const ukFaqStructured = faqStructuredData({items:faqItems});
const ukBreadcrumbs = breadcrumbStructuredData({name:'UK electronic music history',canonical:'https://thecatrave.com/uk-electronic-music-evolution'});
const page = articlePage({
  title:'UK Electronic Music Evolution: Genres, Scenes and History', description,
  canonical:'https://thecatrave.com/uk-electronic-music-evolution', ogImage:'https://thecatrave.com/img/people%20dancing-1200.webp',
  datePublished:'2025-04-04', dateModified:'2026-08-29', structuredData:[ukStructured,ukFaqStructured,ukBreadcrumbs],
  articleHtml:`${articleHero({kicker:'UK electronic music history',title:'The Evolution of UK Electronic Music',deck:'From acid house and bleep to jungle, UK garage, grime, dubstep and the scenes reshaping British club music now.',readingTime:`~${readingMinutes} min read`,dateModified:'2026-08-29',dateLabel:'29 August 2026',tocItems:[
    {id:'why-the-uk',label:'Why the UK produced so many scenes'},{id:'genre-map',label:'Genre and date map'},
    {id:'acid-and-bleep',label:'1987–91: acid house and bleep'},{id:'hardcore-jungle-dnb',label:'1990–98: hardcore, jungle and D&B'},
    {id:'uk-garage',label:'1993–2001: UK garage'},{id:'other-1990s',label:'The other 1990s'},
    {id:'dubstep-grime-funky',label:'2000–09: dubstep, grime and UK funky'},{id:'hybrid-club',label:'2010–16: hybrid club music'},
    {id:'current-era',label:'2017–present: renewed scenes'},{id:'future',label:'What happens next?'},{id:'genre-guide',label:'Genre guide and FAQ'}
  ]})}
<section class="floating-block article-section article-intro">${paragraphs('The Evolution of UK Electronic Music',2)}${image('img/people dancing','Crowd dancing closely in a dark club','','feature-image')}</section>
<section class="floating-block article-section" id="why-the-uk"><h2>Why did the UK produce so many electronic music scenes?</h2>${paragraphs('Why Did the UK Create So Many Electronic Music Genres?')}</section>
${genreMap()}
${era('acid-and-bleep','1987–1991','Acid house becomes a movement, then bleep makes bass feel British.',paragraphArray('Acid House and the Second Summer of Love, 1987 to 1989').slice(0,2).join('')+downloadedImage('roland-tb303','Roland TB-303 bass synthesiser','The TB-303 supplied acid house’s defining bass movement.')+paragraphArray('Acid House and the Second Summer of Love, 1987 to 1989').slice(2).join('')+paragraphs('Bleep Techno and the First British Bass Sound, 1988 to 1991')+listeningBlock(videos.acid,'Listen for the TB-303’s moving bassline in Baby Ford, then the sub-bass and negative space of LFO.'))}
${era('hardcore-jungle-dnb','1990–1998','Breakbeat hardcore mutates into jungle and drum and bass.',paragraphArray('Breakbeat Hardcore and the British Rave Explosion, 1990 to 1993').slice(0,2).join('')+image('img/flyers','Collage of early British rave flyers','Flyers helped temporary raves and new sounds travel before social media.')+paragraphArray('Breakbeat Hardcore and the British Rave Explosion, 1990 to 1993').slice(2).join('')+paragraphs('Jungle Emerges from the UK Rave Scene, 1992 to 1995')+paragraphs('Jungle and the Evolution of Drum and Bass, 1994 to the Late 1990s')+listeningBlock(videos.jungle,'These three records make the rhythmic change audible: rave breaks become jungle, then expand into drum and bass.'))}
${era('uk-garage','1993–2001','UK garage learns to swing, skip and split.',paragraphs('UK Garage, Speed Garage and 2-Step, 1993 to 2001')+listeningBlock(videos.garage,'Compare the four-to-the-floor pressure of speed garage with the missing kicks and swing of 2-step.'))}
${era('other-1990s','The 1990s','Bristol, big beat, Warp and Birmingham techno tell other stories.',paragraphArray('The Other 1990s: Trip-Hop, Big Beat, IDM and British Techno').slice(0,1).join('')+cutoutImage('atari-1040st-cutout','Atari 1040ST computer used for music sequencing','Affordable home-computer sequencing helped move electronic production outside professional studios.')+paragraphArray('The Other 1990s: Trip-Hop, Big Beat, IDM and British Techno').slice(1).join('')+listeningBlock(videos.other90s,'Four parallel routes through the decade: Bristol’s dub-informed studio music, big beat, Warp-era abstraction and Birmingham techno.'))}
${era('dubstep-grime-funky','2000–2009','Dark garage branches into dubstep and grime while bassline and UK funky move elsewhere.',paragraphArray('Dubstep Emerges from Dark UK Garage, the Late 1990s to the 2000s').slice(0,2).join('')+image('img/skream','Skream performing behind DJ equipment','Skream performing. Croydon’s record shops, producers and nights were central to early dubstep.')+paragraphArray('Dubstep Emerges from Dark UK Garage, the Late 1990s to the 2000s').slice(2).join('')+paragraphs('Grime and East London Pirate Radio, 2001 to 2005')+soundcloudFeature('i-lost-so-many-weekends-raving-and-i-wanna-lose-some-more','I Lost So Many Weekends Raving and I Wanna Lose Some More','A loud, restless long-form set that connects breaks, bass, club music and techno instead of treating them as sealed genres.')+paragraphs('Bassline and UK Funky, the Late 1990s to 2010')+listeningBlock(videos.zeroes,'Hear the same broad garage ancestry separate into dubstep space, grime minimalism, bassline hooks and UK funky percussion.'))}
${era('hybrid-club','2010–2016','After dubstep, the useful labels get wider and less exact.',paragraphs('After Dubstep and the New UK Club Hybrids, 2010 to 2012')+paragraphs('Instrumental Grime, Bristol Club Music and PC Music, 2013 to 2016')+listeningBlock(videos.early10s,'These records show why no single label adequately describes the early 2010s.'))}
${era('current-era','2017–present','UK garage, jungle and 140 return without becoming museum pieces.',paragraphs('New UK Garage and the Underground Jungle Revival, 2017 to 2019')+soundcloudFeature('i-like-to-smoke-in-silence-after-raves','I Like to Smoke in Silence After Raves','The recent revival is less about one genre winning than older rhythms meeting in new sets. I spent about four months arranging these 30 tracks into one long arc.')+paragraphs('Jungle and UK Garage Find a New Audience, 2020 to 2022')+paragraphs('UK Garage, Speed Garage, Jungle and 140 Converge, 2023 to 2024')+paragraphs('UK Garage, Jungle and Bass Music Expand Again, 2025 to 2026')+listeningBlock(videos.current,'These examples show revival as reuse rather than reenactment: garage swing, breakbeat science and 140 pressure circulate together.'))}
<section class="floating-block article-section future-section" id="future"><p class="era-years">After 2026</p><h2>What happens next?</h2>${paragraphs('What Is Next for UK Electronic Music?',3)}</section>
<section class="floating-block article-section" id="genre-guide"><h2>A quick guide to the main UK electronic music genres.</h2>${paragraphs('How to Recognise the Main UK Electronic Music Genres')}${table('How to Recognise the Main UK Electronic Music Genres')}</section>
${articleFaq({items:faqItems})}
${author}
${articleSources({bodyHtml:linkList('Sources and Further Reading')})}
${support}
${relatedArticles}`});
fs.writeFileSync('uk-electronic-music-evolution.html', page);
