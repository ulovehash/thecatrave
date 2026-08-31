import fs from 'node:fs';
import {
  articleFaq, articleFigure, articleHero, articleListeningBand, articlePage,
  articleSection, articleSources, articleStructuredData, articleTable,
  articleVideoCard, articleVideoCollection, articleYoutubeEmbed, authorCard,
  bandcampSupport, breadcrumbStructuredData, faqStructuredData, infoBanner, readNext
} from './site-components.mjs';

const draft = fs.readFileSync('bass-music-draft.md', 'utf8').replace(/—/g, ':');
const canonical = 'https://thecatrave.com/bass-music-guide';
const title = 'What Is Bass Music? History, Genres and Essential Tracks';
const description = 'What bass music means and how sound-system culture, Miami bass, UK rave, Los Angeles, Chicago and Durban shaped its global history.';
const date = '2026-08-31';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function inline(value) {
  let text = escapeHtml(String(value).replace(/—/g, ':'));
  text = text.replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
  text = text.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  text = text.replace(/`([^`]+)`/g, '<span class="inline-term">$1</span>');
  text = text.replace(/\*([^*]+)\*/g, '<em>$1</em>');
  return text;
}

function getSection(heading) {
  const start = draft.indexOf(`## ${heading}`);
  if (start < 0) throw new Error(`Missing section: ${heading}`);
  const bodyStart = draft.indexOf('\n', start) + 1;
  const next = draft.indexOf('\n## ', bodyStart);
  return draft.slice(bodyStart, next < 0 ? draft.length : next).trim();
}

function getSubsection(sectionText, heading) {
  const start = sectionText.indexOf(`### ${heading}`);
  if (start < 0) throw new Error(`Missing subsection: ${heading}`);
  const bodyStart = sectionText.indexOf('\n', start) + 1;
  const next = sectionText.indexOf('\n### ', bodyStart);
  return sectionText.slice(bodyStart, next < 0 ? sectionText.length : next).trim();
}

function paragraphs(text) {
  return text.split(/\n\s*\n/).map(block => block.trim()).filter(block => {
    if (!block) return false;
    if (/^\[(?:EMBED|SOUNDCLOUD FEATURE|SPOTIFY FEATURE):/.test(block)) return false;
    if (/^\*\*Contextual copy:/.test(block)) return false;
    if (/^\d+\.\s/.test(block)) return false;
    if (/^###?\s/.test(block)) return false;
    return true;
  });
}

function p(value, className = '') {
  const body = inline(value).replace(/^<strong>(What to listen for:|Start with:)<\/strong>\s*/, '<strong>$1</strong> ');
  const note = /^(?:<strong>(?:What to listen for:|Start with:)<\/strong>)/.test(body);
  const classes = [className, note ? 'article-note' : ''].filter(Boolean).join(' ');
  return `<p${classes ? ` class="${classes}"` : ''}>${body}</p>`;
}

const render = text => paragraphs(text).map(value => p(value)).join('');
const youtube = (id, label) => articleYoutubeEmbed({src:`https://www.youtube-nocookie.com/embed/${id}`, title:`${label} on YouTube`});
const soundcloud = (slug, label, titleText, descriptionText, tone) => articleListeningBand({
  platform:'soundcloud', id:label, kicker:'Listen while you read', title:titleText,
  description:descriptionText,
  src:`https://w.soundcloud.com/player/?url=${encodeURIComponent(`https://soundcloud.com/thecatrave/${slug}`)}&color=%23ff5a36&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false`,
  iframeTitle:`${titleText} by thecatrave on SoundCloud`, fullBleed:true, tone
});

const introStart = draft.indexOf('Search for bass music');
const introEnd = draft.indexOf('\n## BASS MUSIC DEFINITION');
const intro = draft.slice(introStart, introEnd).trim();
const definition = paragraphs(getSection('BASS MUSIC DEFINITION'));
const origins = getSection('Where did bass music come from? Jamaica, Miami and UK rave');
const jamaica = paragraphs(getSubsection(origins, 'Jamaica: sound systems, version culture and dub'));
const miami = paragraphs(getSubsection(origins, 'Miami: electro, hip-hop and car systems'));
const britain = paragraphs(getSubsection(origins, 'Britain: bleep, breakbeat hardcore and jungle'));
const umbrella = paragraphs(getSection('How “bass music” became an umbrella term:and travelled'));
const meanings = getSection('Why “bass music” means different things in different scenes');
const ukMeaning = paragraphs(getSubsection(meanings, 'UK bass music and the British bass continuum'));
const usMeaning = paragraphs(getSubsection(meanings, 'American bass music: Miami, Los Angeles and the festival circuit'));
const globalMeaning = paragraphs(getSubsection(meanings, 'Chicago footwork, Durban gqom and cross-border bass networks'));
const types = getSection('Types of bass music: a scene-by-scene listening map');
const infrastructure = paragraphs(getSection('How bass music lives: sound systems, pirate radio, clubs and labels'));
const today = paragraphs(getSection('Bass music today: hybrid sets and blurred genre borders'));
const starting = getSection('Where to start with bass music: essential tracks, playlists and mixes');
const useful = getSection('Is “bass music” still a useful term?');

const faqText = getSection('Bass music FAQ');
const faqHeadings = [...faqText.matchAll(/^### (.+)$/gm)].map(match => match[1]);
const faqItems = faqHeadings.map(question => {
  const rawAnswer = paragraphs(getSubsection(faqText, question)).join(' ');
  return {question, answer:rawAnswer.replace(/`/g, ''), answerHtml:p(rawAnswer)};
});

const tocItems = [
  ['origins','Where bass music came from'], ['umbrella','How the umbrella term travelled'],
  ['meanings','Why the term changes by scene'], ['types','Types of bass music'],
  ['infrastructure','Systems, radio, clubs and labels'], ['records','Records that changed the culture'],
  ['today','Bass music today'], ['where-to-start','Where to start listening'],
  ['useful','Is the term still useful?'], ['faq','Bass music FAQ']
].map(([id,label])=>({id,label}));

const globalVisual = `<figure class="floating-image article-image bass-history-visual"><picture><source media="(max-width: 600px)" srcset="img/bass-music/bass-music-global-history-mobile.svg"><img src="img/bass-music/bass-music-global-history.svg" width="1400" height="900" sizes="(max-width: 760px) calc(100vw - 32px), 1040px" alt="Visual index of bass music histories in Kingston, Miami, Britain, Los Angeles, Chicago and Durban" loading="eager" decoding="async"></picture><figcaption>One term connects several local histories. It does not replace their names.</figcaption></figure>`;

const kingTubbyConsole = articleFigure({
  src:'https://mopop.emuseum.com/internal/media/dispatcher/290708/preview', width:1200, height:800,
  alt:'MCI mixing console formerly owned and operated by King Tubby',
  caption:'King Tubby’s studio console represents dub as a practice of rebuilding recorded music.',
  className:'wide-archive-image'
});

const miamiMobile = articleFigure({
  src:'https://media.redbullmusicacademy.com/assets/Loc%20Ace%20and%20Vic%2093.33ead0e8.jpg?auto=format&w=1400', width:1400, height:933,
  alt:'Miami mobile DJs Loc Ace and Vic with a large speaker system',
  caption:'Miami bass developed through mobile DJs, teen parties, cars and speaker systems, not as an American afterthought to dubstep.',
  className:'wide-archive-image'
});

const nightSlugs = articleFigure({
  src:'https://assets.boomkat.com/spree/products/258557/large/original.jpg', width:1000, height:1000,
  alt:'Night Slugs EP cover',
  caption:'Night Slugs became a useful marker for the late-2000s collision of grime, garage, house, funky and dubstep language.',
  className:'square-image'
});

const chicagoFootwork = articleFigure({
  src:'https://media.npr.org/assets/img/2011/05/11/footwork2_enl-56f0b08e6afd3659df3c0937dbfd7246d433b1c9.jpg?c=100&f=jpeg&s=2600', width:2600, height:1733,
  alt:'Footwork dancers in Chicago',
  caption:'Chicago footwork grew through dance crews and battles before international labels widened its audience.',
  className:'wide-archive-image'
});

const gqomImage = articleFigure({
  src:'https://www.afropop.org/client-uploads/img/_image600Square/gqom-square.jpg', width:600, height:600,
  alt:'Distruction Boyz, producers associated with Durban gqom',
  caption:'Gqom’s local history belongs to Durban’s parties, taxis and digital networks, even when international programming places it beside bass music.',
  className:'square-image'
});

const hardcoreListening = articleListeningBand({
  platform:'spotify', id:'hardcore-essential-listening', kicker:'Essential listening',
  title:'Lennie De Ice, We Are I.E.',
  description:'A threshold record where breakbeat hardcore, sound-system bass and the rhythmic language of jungle meet.',
  src:'https://open.spotify.com/embed/track/2aZ89R5oSEDTfjymiRjzpg?utm_source=generator',
  iframeTitle:'Lennie De Ice, We Are I.E. on Spotify', fullBleed:true, tone:'coral'
});

const laBeatListening = articleListeningBand({
  platform:'spotify', id:'la-beat-essential-listening', kicker:'Essential listening',
  title:'Flying Lotus, Zodiac Shit.',
  description:'Low End Theory’s Los Angeles beat culture heard through compressed hip-hop rhythm, psychedelic detail and unstable low end.',
  src:'https://open.spotify.com/embed/track/3v65IsDl6LDOHDu9bU4ZOn?utm_source=generator',
  iframeTitle:'Flying Lotus, Zodiac Shit on Spotify', fullBleed:true, tone:'yellow'
});

const originHtml = `
  <h3>Jamaica: sound systems, version culture and dub</h3>
  ${jamaica.slice(0,2).map(value=>p(value)).join('')}${kingTubbyConsole}${jamaica.slice(2).map(value=>p(value)).join('')}
  ${youtube('oxAl3Jijs20','Augustus Pablo and King Tubby, King Tubby Meets Rockers Uptown')}
  <h3>Miami: electro, hip-hop and car systems</h3>
  ${p(miami[0])}${miamiMobile}${miami.slice(1).map(value=>p(value)).join('')}
  ${articleListeningBand({platform:'spotify',id:'miami-bass-listening',kicker:'Essential listening',title:'2 Live Crew, Throw the D.',description:'The sustained 808, speed, chants and dance instruction place the record firmly inside Miami hip-hop.',src:'https://open.spotify.com/embed/track/01eKbKNxs6EogcCYONAmYI?utm_source=generator',iframeTitle:'2 Live Crew, Throw the D on Spotify',tone:'yellow'})}
  <h3>Britain: bleep, breakbeat hardcore and jungle</h3>
  ${p(britain[0])}${youtube('ML_FBvudqI0','LFO, LFO Leeds Warehouse Mix')}${britain.slice(1).map(value=>p(value)).join('')}${hardcoreListening}`;

const umbrellaHtml = `${umbrella.slice(0,2).map(value=>p(value)).join('')}${nightSlugs}${umbrella.slice(2).map(value=>p(value)).join('')}${youtube('Aa_PDKKc2_A','Joy Orbison, Hyph Mngo')}`;

const meaningsHtml = `
  <h3>UK bass music and the British bass continuum</h3>${ukMeaning.map(value=>p(value)).join('')}${youtube('--jr22La8Nk','Digital Mystikz, Anti War Dub')}
  <h3>American bass music: Miami, Los Angeles and the festival circuit</h3>${usMeaning.slice(0,2).map(value=>p(value)).join('')}${laBeatListening}${usMeaning.slice(2).map(value=>p(value)).join('')}
  ${articleVideoCollection({description:'Two records that show how North American bass music changed scale and crossed into festival culture.',items:[articleVideoCard({youtubeId:'WSeNSzJ2-Jw',genre:'AMERICAN DUBSTEP',artist:'Skrillex',title:'Scary Monsters and Nice Sprites'}),articleVideoCard({youtubeId:'6HzyUHxmkg0',genre:'ELECTRONIC TRAP',artist:'TNGHT',title:'Higher Ground'})]})}
  <h3>Chicago footwork, Durban gqom and cross-border bass networks</h3>${p(globalMeaning[0])}${chicagoFootwork}${p(globalMeaning[1])}${p(globalMeaning[2])}${p('Together, footwork and gqom show how bass-oriented club networks exchange rhythm without turning distinct local scenes into supporting characters in one universal story.')}${gqomImage}`;

const typeRows = [
  ['Dub and sound systems','Kingston, Britain','King Tubby, Scientist, Jah Shaka, Adrian Sherwood'],
  ['Jungle, D&B, garage, grime, dubstep','British pirate radio and club networks','Goldie, Wiley, Digital Mystikz, Burial, Cooly G'],
  ['Miami bass and American low-end culture','South Florida parties, cars and rap','Pretty Tony, Maggotron, 2 Live Crew, Dynamix II'],
  ['Footwork and gqom','Chicago dance battles; Durban parties and taxis','RP Boo, DJ Rashad, DJ Lag, Rudeboyz'],
  ['Bass house, future bass and hybrids','Online and festival networks','Use the local genre name whenever it is known']
];

const britishSceneListening = articleVideoCollection({
  description:'Six records make the differences inside the British continuum audible. They share infrastructure, but not one rhythm or one genre.',
  items:[
    articleVideoCard({youtubeId:'_VFf6434lto',genre:'JUNGLE',artist:'Shy FX & UK Apache',title:'Original Nuttah'}),
    articleVideoCard({youtubeId:'i-P98B2skts',genre:'DRUM AND BASS',artist:'Goldie',title:'Inner City Life'}),
    articleVideoCard({youtubeId:'DXCtYUtjDYU',genre:'UK GARAGE',artist:'MJ Cole',title:'Sincere'}),
    articleVideoCard({youtubeId:'LkdEOY0bf4U',genre:'GRIME',artist:'Wiley',title:'Eskimo'}),
    articleVideoCard({youtubeId:'fUGZq02cYIY',genre:'BASSLINE',artist:'DJ Q featuring MC Bonez',title:'You Wot!'}),
    articleVideoCard({youtubeId:'iIbkC1NMM1k',genre:'UK FUNKY',artist:'Cooly G',title:'Love Dub (Refix)'})
  ]
});

const footworkListening = articleListeningBand({
  platform:'spotify', id:'footwork-essential-listening', kicker:'Essential listening',
  title:'RP Boo, Baby Come On.',
  description:'A foundational Chicago footwork record built for dancers, with clipped hip-hop sampling and syncopated drums.',
  src:'https://open.spotify.com/embed/track/0rzohlbJIrpvIHFAgPztfG?utm_source=generator',
  iframeTitle:'RP Boo, Baby Come On on Spotify', fullBleed:true, tone:'coral'
});

const gqomListening = articleListeningBand({
  platform:'spotify', id:'gqom-essential-listening', kicker:'Essential listening',
  title:'DJ Lag, Ice Drop.',
  description:'A stark Durban gqom record whose heavy, asymmetrical pressure makes the scene sound distinct from UK and American bass categories.',
  src:'https://open.spotify.com/embed/track/7FAW04U4KSWT2vsskjNYo0?utm_source=generator',
  iframeTitle:'DJ Lag, Ice Drop on Spotify', fullBleed:true, tone:'cyan'
});

const contemporaryTypesListening = articleVideoCollection({
  description:'Eight records make the main 2010s North American labels audible. They overlap in audience and infrastructure, but their rhythm, emotional register and approach to sound design are not interchangeable.',
  items:[
    articleVideoCard({youtubeId:'hkYq02183fc',genre:'BASS HOUSE',artist:'Jauz',title:'Feel the Volume'}),
    articleVideoCard({youtubeId:'-KPnyf8vwXI',genre:'FUTURE BASS',artist:'Flume featuring Kai',title:'Never Be Like You'}),
    articleVideoCard({youtubeId:'fP2O6JcnJJI',genre:'RIDDIM',artist:'Bommer & Crowell',title:'Yasuo'}),
    articleVideoCard({youtubeId:'ls-LYas5j8U',genre:'GLITCH-HOP / LA BASS',artist:'The Glitch Mob',title:'We Can Make the World Stop'}),
    articleVideoCard({youtubeId:'ULqdjtDI-bs',genre:'MELODIC BASS',artist:'Seven Lions featuring Kerli',title:'Worlds Apart'}),
    articleVideoCard({youtubeId:'2oIAQSUt9mo',genre:'MIDTEMPO',artist:'REZZ',title:'Edge'}),
    articleVideoCard({youtubeId:'KVywF8KXdwI',genre:'EXPERIMENTAL BASS',artist:'EPROM',title:'Drone Warfare'}),
    articleVideoCard({youtubeId:'eOILsff2GOk',genre:'FREEFORM BASS',artist:'Of The Trees',title:'Spanish Moss'})
  ]
});

const typesHtml = `${p(paragraphs(types)[0])}
  ${articleTable({headers:['Scene','Historical setting','Starting points'],rows:typeRows,className:'bass-scene-table'})}
  <h3>Dub and the sound-system lineage</h3>${render(getSubsection(types,'Dub and the sound-system lineage'))}
  <h3>Jungle, drum and bass, UK garage, grime and dubstep</h3>${render(getSubsection(types,'Jungle, drum and bass, UK garage, grime and dubstep'))}${britishSceneListening}
  <h3>Miami bass, trap and American low-end culture</h3>${render(getSubsection(types,'Miami bass, trap and American low-end culture'))}
  <h3>Footwork, gqom and cross-border club exchange</h3>${render(getSubsection(types,'Footwork, gqom and cross-border club exchange'))}${footworkListening}${gqomListening}
  <h3>Bass house, future bass and contemporary hybrids</h3>${render(getSubsection(types,'Bass house, future bass and contemporary hybrids'))}${contemporaryTypesListening}`;

const recordRows = [
  ['Augustus Pablo and King Tubby, King Tubby Meets Rockers Uptown','Dub as arrangement, version and low-end space.'],
  ['2 Live Crew, Throw the D','An early Miami bass benchmark built around sustained 808 pressure and dance instruction.'],
  ['LFO, LFO','Bleep, sub-bass and a Northern British route into rave.'],
  ['Lennie De Ice, We Are I.E.','A threshold record for jungle forming from hardcore.'],
  ['Wiley, Eskimo','Grime minimalism and pirate-radio space.'],
  ['Digital Mystikz, Anti War Dub','Dubstep as sound-system ritual.'],
  ['Joy Orbison, Hyph Mngo','Garage, dubstep and house becoming difficult to separate.'],
  ['Addison Groove, Footcrab','UK and Chicago exchange through Swamp81.'],
  ['Skrillex, Scary Monsters and Nice Sprites','A North American change in scale and timbre.'],
  ['TNGHT, Higher Ground','Southern rap rhythm meeting festival electronics.'],
  ['DJ Rashad, Let U No','Footwork carrying emotional weight beyond novelty rhythm.'],
  ['DJ Lag, Ice Drop','Gqom travelling internationally without losing Durban identity.']
];

const infrastructureHtml = `${infrastructure.map(value=>p(value)).join('')}${soundcloud('i-lost-so-many-weekends-raving-and-i-wanna-lose-some-more','bass-mix-weekends','I Lost So Many Weekends Raving and I Wanna Lose Some More.','A contemporary example of the DJ set as infrastructure: breaks, bass, club music and techno connected through sequencing rather than flattened into one genre.','cyan')}`;
const todayHtml = `${today.slice(0,3).map(value=>p(value)).join('')}${soundcloud('i-like-to-smoke-in-silence-after-raves','bass-mix-silence','I Like to Smoke in Silence After Raves.','I spent about four months arranging these 30 tracks into one arc. It treats breaks, bass, garage pressure and experimental club music as material for one set without pretending they are one genre.','cyan')}`;
const startingIntro = paragraphs(starting)[0];
const startingRoutes = ['Route one: systems and foundations','Route two: the British bass continuum','Route three: American and cross-border meanings'];
const startingHtml = `${p(startingIntro)}<div class="bass-starting-routes">${startingRoutes.map((name,index)=>`<div class="bass-route-card"><span>0${index+1}</span><h3>${inline(name.replace(/^Route (?:one|two|three): /,''))}</h3>${p(paragraphs(getSubsection(starting,name))[0])}</div>`).join('')}</div>${p('A playlist offers breadth. A mix adds sequencing, tension and the choices of a particular DJ. Both are useful because bass music is as much a way of connecting records as it is a way of classifying them.')}`;

const articleHtml = [
  articleHero({kicker:'Bass music guide',title:'What is bass music?',deck:'A scene-led history across Jamaica, Miami, Britain, Los Angeles, Chicago, Durban and today’s hybrid club culture.',readingTime:`${Math.max(12,Math.round(draft.split(/\s+/).length/225))} min read`,dateModified:date,dateLabel:'31 August 2026',summaryHtml:infoBanner({label:'Bass music definition',bodyHtml:inline(definition[0]),className:'article-summary'}),tocItems}),
  articleSection({id:'introduction',title:'Bass music is not one sound.',bodyHtml:`${render(intro)}${p(definition[1])}${globalVisual}`,className:'article-intro'}),
  articleSection({id:'origins',title:'Where did bass music come from?',kicker:'Jamaica / Miami / Britain',bodyHtml:originHtml}),
  articleSection({id:'umbrella',title:'How “bass music” became an umbrella term and travelled.',bodyHtml:umbrellaHtml,className:'tone-cyan'}),
  articleSection({id:'meanings',title:'Why “bass music” means different things in different scenes.',bodyHtml:meaningsHtml}),
  articleSection({id:'types',title:'Types of bass music: a scene-by-scene listening map.',bodyHtml:typesHtml,className:'tone-yellow'}),
  articleSection({id:'infrastructure',title:'How bass music lives: sound systems, pirate radio, clubs and labels.',bodyHtml:infrastructureHtml}),
  articleSection({id:'records',title:'Bass music artists and records that changed the culture.',bodyHtml:`${p('This is not a hall of fame. Each record is here because it changes the definition rather than merely representing a popular subgenre.')}${articleTable({headers:['Record','Why it matters'],rows:recordRows,className:'bass-record-table'})}`}),
  articleSection({id:'today',title:'Bass music today: hybrid sets and blurred genre borders.',bodyHtml:todayHtml,className:'tone-coral'}),
  articleSection({id:'where-to-start',title:'Where to start with bass music: tracks, playlists and mixes.',bodyHtml:startingHtml}),
  articleSection({id:'useful',title:'Is “bass music” still a useful term?',bodyHtml:render(useful),className:'tone-cyan'}),
  articleFaq({items:faqItems,title:'Bass music FAQ.',openFirst:true}),
  authorCard({filled:true}),
  articleSources({bodyHtml:`<ul><li><a href="https://www.gold.ac.uk/cucr/research/bass-culture/" target="_blank" rel="noopener noreferrer">Goldsmiths: Bass Culture Research</a></li><li><a href="https://mopop.emuseum.com/objects/95703/mci-mixing-console-formerly-owned-and-operated-by-king-tubby" target="_blank" rel="noopener noreferrer">MoPOP: King Tubby’s MCI mixing console</a></li><li><a href="https://daily.redbullmusicacademy.com/2019/09/miami-bass-mobile-djs-regulating-oral-history/" target="_blank" rel="noopener noreferrer">Red Bull Music Academy: Miami bass mobile DJs oral history</a></li><li><a href="https://djmag.com/features/rise-fall-and-revival-uk-dubplate-culture" target="_blank" rel="noopener noreferrer">DJ Mag: UK dubplate culture</a></li><li><a href="https://www.laweekly.com/a-history-of-bass-music-in-los-angeles/" target="_blank" rel="noopener noreferrer">LA Weekly: A history of bass music in Los Angeles</a></li><li><a href="https://www.npr.org/sections/therecord/2011/05/11/136209254/footwork-chicago-dance-music-with-a-need-for-speed" target="_blank" rel="noopener noreferrer">NPR: Chicago footwork</a></li><li><a href="https://ra.co/exchange/336" target="_blank" rel="noopener noreferrer">Resident Advisor Exchange: DJ Lag and Nan Kolè</a></li><li><a href="https://www.afropop.org/articles/distruction-boyz" target="_blank" rel="noopener noreferrer">Afropop Worldwide: Distruction Boyz and gqom</a></li><li><a href="https://mixmag.net/feature/a-trip-through-the-u-s-west-coast-bass-scene" target="_blank" rel="noopener noreferrer">Mixmag: The US West Coast bass scene</a></li></ul>`}),
  bandcampSupport({fullBleed:true,description:'These releases sit closest to the breakbeat and bass story in this article. Buying one supports my work directly.',tracks:[{title:'Protect Ya Breaks',id:'3822639635',url:'https://thecatrave.bandcamp.com/track/protect-ya-breaks',linkText:'Protect Ya Breaks by thecatrave'},{title:'Berlin Race 1909',id:'3192532299',url:'https://thecatrave.bandcamp.com/track/berlin-race-1909',linkText:'Berlin Race 1909 by thecatrave'}]}),
  readNext({items:[{href:'/jungle-music-guide',label:'Jungle',title:'Jungle Music Guide',description:'The breaks, sound systems, pirate radio and people that made jungle.'},{href:'/breakbeat-guide',label:'Breakbeat',title:'Breakbeat Music Guide',description:'A global history of breakbeat as a family of club music.'},{href:'/uk-electronic-music-evolution',label:'UK electronic music',title:'The Evolution of UK Electronic Music',description:'From acid house and bleep to jungle, garage, grime and dubstep.'}]})
].join('\n');

const structuredData = [
  articleStructuredData({headline:title,description,canonical,image:'https://thecatrave.com/img/bass-music/bass-music-global-history.svg',datePublished:date,dateModified:date}),
  breadcrumbStructuredData({name:'Bass Music Guide',canonical}), faqStructuredData({items:faqItems})
];

const html = articlePage({title,description,canonical,ogImage:'https://thecatrave.com/img/bass-music/bass-music-global-history.svg',datePublished:date,dateModified:date,bodyClass:'article-page bass-music-page',structuredData,articleHtml}).replace(/—/g, ':');
fs.writeFileSync('bass-music-guide.html', html);
console.log('Built bass-music-guide.html');
