import fs from 'node:fs';
import {homeArticlesWithReadingTimes, relatedArticles} from './home-articles.mjs';
import {analytics, articleFaq, articleFooter, articleListeningBand, articleTableOfContents, articleYoutubeEmbed, authorCard, bandcampSupport, homeArticlesSection, homeFooter, nowPlayingBanner, readNext, siteHeader} from './site-components.mjs';

const pages = {
  home: fs.readFileSync('index.html', 'utf8'),
  breakbeat: fs.readFileSync('breakbeat-guide.html', 'utf8'),
  uk: fs.readFileSync('uk-electronic-music-evolution.html', 'utf8'),
  jungle: fs.readFileSync('jungle-music-guide.html', 'utf8'),
  bass: fs.readFileSync('bass-music-guide.html', 'utf8')
};
const articlePages = [pages.breakbeat, pages.uk, pages.jungle, pages.bass];
const generatorFiles = ['build-breakbeat-article.mjs','build-uk-article.mjs','build-jungle-article.mjs','build-bass-music-article.mjs'];
const generators = Object.fromEntries(generatorFiles.map(file => [file, fs.readFileSync(file, 'utf8')]));
const generatorSources = Object.values(generators);
const articleCss = fs.readFileSync('thecatrave-article.css', 'utf8');
const homeCss = fs.readFileSync('thecatrave-home.css', 'utf8');
const homeRuntime = fs.readFileSync('homepage-runtime.js', 'utf8').trim();
const bandcampFullBleedRule = articleCss.match(/\.article-cta-full\s*\{([^}]*)\}/)?.[1] || '';
const count = (html, pattern) => (html.match(pattern) || []).length;
const decodeHtmlText = value => String(value || '')
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
const visibleFaqItems = html => [...html.matchAll(/<details(?: open)?><summary>([\s\S]*?)<\/summary>([\s\S]*?)<\/details>/g)]
  .map(match => ({question:decodeHtmlText(match[1]), answer:decodeHtmlText(match[2])}));
const faqSchemaItems = html => {
  const schemas = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
    .map(match => { try { return JSON.parse(match[1]); } catch { return null; } })
    .filter(Boolean);
  const faq = schemas.find(schema => schema['@type'] === 'FAQPage');
  return (faq?.mainEntity || []).map(item => ({question:item.name || '', answer:item.acceptedAnswer?.text || ''}));
};
const faqMatchesVisibleContent = html => {
  const visible = visibleFaqItems(html);
  const schema = faqSchemaItems(html);
  return visible.length > 0 && visible.length === schema.length && visible.every((item, index) =>
    item.question === schema[index].question && item.answer === schema[index].answer
  );
};
const essentialListeningClasses = html => [...html.matchAll(/<aside class="([^"]+)"[^>]*>[\s\S]*?<\/aside>/g)]
  .filter(match => match[0].includes('<p class="article-kicker">Essential listening</p>'))
  .map(match => match[1]);

const expectedHomeHeader = siteHeader({
  variant:'home',
  navItems:[
    {href:'#bandcamp',label:'Bandcamp',className:'support-link'},
    {href:'#mixes',label:'Mixes'},
    {href:'#music',label:'Tracks'},
    {href:'#playlists',label:'Playlists'},
    {href:'#articles',label:'Articles'}
  ]
});
const expectedNowPlaying = nowPlayingBanner({
  title:'I Like to Smoke in Silence After Raves',
  meta:'30 tracks / DJ mix',
  href:'https://soundcloud.com/thecatrave/i-like-to-smoke-in-silence-after-raves'
});
const currentHomeArticles = homeArticlesWithReadingTimes();
const expectedHomeArticles = homeArticlesSection({items:currentHomeArticles});
const expectedArticleHeader = siteHeader({variant:'article'});
const expectedAuthorCard = authorCard({filled:true});
const expectedBreakbeatToc = articleTableOfContents({items:[
  {id:'definition',label:'Rhythm or genre?'},{id:'origins',label:'Funk, hip-hop and samplers'},
  {id:'history-map',label:'History map'},{id:'club-history',label:'Regional club histories'},
  {id:'styles',label:'Styles and related genres'},{id:'comparison',label:'Genre comparison'},
  {id:'today',label:'Breakbeat today'},{id:'faq',label:'FAQ'},{id:'sources',label:'Sources'}
]});
const expectedUkToc = articleTableOfContents({items:[
  {id:'why-the-uk',label:'Why the UK produced so many scenes'},{id:'genre-map',label:'Genre and date map'},
  {id:'acid-and-bleep',label:'1987–91: acid house and bleep'},{id:'hardcore-jungle-dnb',label:'1990–98: hardcore, jungle and D&B'},
  {id:'uk-garage',label:'1993–2001: UK garage'},{id:'other-1990s',label:'The other 1990s'},
  {id:'dubstep-grime-funky',label:'2000–09: dubstep, grime and UK funky'},{id:'hybrid-club',label:'2010–16: hybrid club music'},
  {id:'current-era',label:'2017–present: renewed scenes'},{id:'future',label:'What happens next?'},{id:'genre-guide',label:'Genre guide and FAQ'}
]});
const expectedJungleToc = articleTableOfContents({items:[
  {id:'introduction',label:'What is jungle music?'},{id:'origins',label:'Where and when did jungle start?'},
  {id:'name',label:'Why is it called jungle music?'},{id:'underground-emergence',label:'1991–93: underground emergence'},
  {id:'jungle-mania',label:'1994–95: jungle goes mainstream'},{id:'pioneers',label:'Artists, producers and pioneers'},
  {id:'labels',label:'Labels and scene infrastructure'},{id:'pirate-radio',label:'Pirate radio and dubplate culture'},
  {id:'culture',label:'Jungle culture and subgenres'},{id:'essential-tracks',label:'Essential jungle songs and tracks'},
  {id:'breakbeats',label:'Amen, Think, Apache and Hot Pants'},{id:'myths',label:'Jungle vs drum and bass'},
  {id:'revival',label:'The modern jungle revival'},{id:'foundation-builders',label:'Foundation builders and revivalists'},
  {id:'faq',label:'Jungle music FAQ'},
  {id:'sources',label:'Recommended resources'}
]});
const expectedJungleFaq = articleFaq({items:[
  ['Where and when did jungle music originate?','Jungle emerged in Britain in the early 1990s, with London as its main centre and important activity in cities including Bristol. Between roughly 1991 and 1993, producers and DJs pushed breakbeat hardcore towards faster chopped funk breaks, heavier sub-bass and stronger reggae, dub and dancehall influence. It developed across a scene rather than beginning with one universally agreed release date.'],
  ['Who invented jungle music?','No single person invented jungle. It formed through overlapping work by producers, DJs, MCs, pirate stations, sound systems and independent labels. Artists including Lennie De Ice, Shut Up and Dance, Rebel MC, 4hero, Fabio, Grooverider and many others are central to its early history, but naming one inventor would flatten a collective Black British rave culture.'],
  ['Why is jungle music called jungle?','The name has several competing histories. One widely repeated account connects “junglist” to Jamaican sound-system language and to Arnett Gardens in Kingston, an area known as the Jungle. Jamaican vocal samples, UK MCs, pirate radio and records then helped turn jungle and junglist into a scene identity. Exactly who first applied the name to the music remains disputed.'],
  ['What came first, jungle or drum and bass?','Jungle came first as a distinct scene and widely used name in the early 1990s. Drum and bass became more common as a broader label during the mid-1990s, when parts of the music moved towards more streamlined, technical or atmospheric production. Their histories overlap, and jungle did not simply disappear when drum and bass became established.'],
  ['What BPM is jungle music?','Classic jungle usually sits around 160 to 175 BPM, although early and modern tracks can fall outside that range. Speed alone does not define the genre: chopped funk breaks, syncopation, sub-bass, dub and dancehall influence, sampling and MC culture matter just as much.'],
  ['What are the main jungle subgenres?','Common branches and closely related styles include ragga jungle, darkside or darkcore, atmospheric or intelligent jungle, jump-up and modern revivalist jungle. These labels overlap and were not always used consistently at the time, so they work better as descriptions of scenes and tendencies than as rigid boxes.']
].map(([question, answer]) => ({question, answerHtml:`<p>${answer}</p>`})), title:'Jungle Music FAQ.', id:'faq', openFirst:true});
const expectedBreakbeatListening = articleListeningBand({
  platform:'soundcloud', id:'breakbeat-contemporary-mix', kicker:'A contemporary route by thecatrave',
  title:'I Like to Smoke in Silence After Raves',
  description:'This set belongs here because it shows how breaks now move between garage, bass music, techno and rave instead of living inside one sealed revival.',
  src:'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/thecatrave/i-like-to-smoke-in-silence-after-raves&color=%23ff5a36&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
  iframeTitle:'I Like to Smoke in Silence After Raves by thecatrave on SoundCloud', fullBleed:true, tone:'cyan'
});
const expectedUkListening = articleListeningBand({
  platform:'soundcloud', id:'uk-mix-i-like-to-smoke-in-silence-after-raves', kicker:'A mix by thecatrave',
  title:'I Like to Smoke in Silence After Raves',
  description:'The recent revival is less about one genre winning than older rhythms meeting in new sets. I spent about four months arranging these 30 tracks into one long arc.',
  src:'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/thecatrave/i-like-to-smoke-in-silence-after-raves&color=%23ff5a36&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
  iframeTitle:'I Like to Smoke in Silence After Raves by thecatrave on SoundCloud', fullBleed:true, tone:'cyan'
});
const expectedUkSupport = bandcampSupport({
  description:'These releases connect directly to the breaks, bass pressure and rave continuum explored in this article. Buying one supports my music and writing directly.',
  fullBleed:true,
  tracks:[
    {title:'thecatrave — Protect Ya Breaks',id:'3822639635',url:'https://thecatrave.bandcamp.com/track/protect-ya-breaks',linkText:'Protect Ya Breaks by thecatrave'},
    {title:'thecatrave — Berlin Race 1909',id:'3192532299',url:'https://thecatrave.bandcamp.com/track/berlin-race-1909',linkText:'Berlin Race 1909 by thecatrave'}
  ]
});
const expectedJungleListening = articleListeningBand({
  platform:'spotify', id:'jungle-listening-early-jungle', kicker:'Essential listening',
  title:'Early jungle and hardcore: extended playlist.',
  description:'A longer route through the records connecting breakbeat hardcore, darkcore and the first recognisable jungle sound.',
  src:'https://open.spotify.com/embed/playlist/63AoNfdevveMbVyzF9CL62?utm_source=generator',
  iframeTitle:'Early jungle and hardcore playlist on Spotify', fullBleed:true, tone:'cyan'
});
const expectedJungleYoutube = articleYoutubeEmbed({
  src:'https://www.youtube.com/embed/gdQ4V245hG8?rel=0&origin=https%3A%2F%2Fthecatrave.com&widget_referrer=https%3A%2F%2Fthecatrave.com%2Fjungle-music-guide',
  title:'DJ Hype — Jungle Massive.'
});
const expectedJungleSupport = bandcampSupport({
  description:'My Lana Del Rey jungle remix belongs directly to the sound explored in this guide. Buying it supports the music and the writing directly.',
  fullBleed:true,
  tracks:[{
    title:'thecatrave — You So Ghetto (Lana Del Rey Jungle Remix)', id:'3379956979',
    url:'https://thecatrave.bandcamp.com/track/you-so-ghetto-lana-del-rey-jungle-remix',
    linkText:'You So Ghetto (Lana Del Rey Jungle Remix) by thecatrave'
  }]
});
const expectedJungleReadNext = readNext({items:relatedArticles('jungle-music-guide.html')});

const checks = {
  homeHeaderShared: pages.home.includes(expectedHomeHeader),
  homeFooterShared: pages.home.includes(homeFooter()),
  nowPlayingShared: pages.home.includes(expectedNowPlaying),
  homeArticlesShared: pages.home.includes(expectedHomeArticles),
  homeArticleCount: count(pages.home, /<span class="number">A0[1-9]<\/span>/g) === currentHomeArticles.length,
  homeArticleReadingTimesCurrent: currentHomeArticles.every(item => pages.home.includes(`${item.type} / ${item.topic} / ${item.readingTime}`)),
  homeArticleAssetsPresent: currentHomeArticles.every(item => fs.existsSync(item.image) && (!item.srcset || item.srcset.split(',').every(source => fs.existsSync(source.trim().split(/\s+/)[0])))),
  homeArticleGridResponsive: homeCss.includes('.article-grid{grid-template-columns:repeat(2,1fr)}') && homeCss.includes('.article-grid{grid-template-columns:repeat(4,1fr)}') && homeCss.includes('#articles .article-grid{grid-template-columns:repeat(auto-fit,minmax(min(100%,12rem),1fr))}') && !homeCss.includes('.article-grid{grid-template-columns:repeat(3,1fr)}') && currentHomeArticles.every(item => pages.home.includes(`href="${item.href}"`)),
  homeStylesInlined: pages.home.includes(`<style>${homeCss.trim()}</style>`),
  homeMediaDeferred: count(pages.home, /<iframe\b[^>]*\bdata-src=/g) === 13 && count(pages.home, /<iframe\b[^>]*\ssrc=/g) === 0 && pages.home.includes(`<script>${homeRuntime}</script>`),
  homeHeroOptimized: ['thecatrave-home-640.webp','thecatrave-home-720.webp','thecatrave-home-960.webp','thecatrave-home-1200.webp'].every(asset => fs.existsSync(`img/${asset}`) && pages.home.includes(asset)) && !pages.home.includes('src="img/thecatrave-1200.webp"'),
  homeFontsNonBlocking: count(pages.home, /rel="stylesheet" media="print" onload="this\.media='all'"/g) === 2,
  homeAnalyticsShared: pages.home.includes(analytics()),
  analyticsAsyncEarly: Object.values(pages).every(page => page.includes('<script async fetchpriority="low" src="https://www.googletagmanager.com/gtag/js?id=G-0WW1QS0DW4"></script>') && page.indexOf('googletagmanager.com/gtag/js') < page.indexOf('</head>')),
  articleFontsNonBlocking: articlePages.every(page => count(page, /rel="stylesheet" media="print" onload="this\.media='all'"/g) === 2),
  breakbeatHeaderShared: pages.breakbeat.includes(expectedArticleHeader),
  breakbeatFooterShared: pages.breakbeat.includes(articleFooter()),
  breakbeatAnalyticsShared: pages.breakbeat.includes(analytics()),
  breakbeatAuthorShared: pages.breakbeat.includes(expectedAuthorCard),
  breakbeatTocShared: pages.breakbeat.includes(expectedBreakbeatToc),
  breakbeatListeningShared: pages.breakbeat.includes(expectedBreakbeatListening),
  breakbeatSupportShared: pages.breakbeat.includes('class="floating-inset article-cta article-cta-full"'),
  ukHeaderShared: pages.uk.includes(expectedArticleHeader),
  ukFooterShared: pages.uk.includes(articleFooter()),
  ukAnalyticsShared: pages.uk.includes(analytics()),
  ukAuthorShared: pages.uk.includes(expectedAuthorCard),
  ukTocShared: pages.uk.includes(expectedUkToc),
  ukListeningShared: pages.uk.includes(expectedUkListening),
  ukSupportShared: pages.uk.includes(expectedUkSupport),
  jungleHeaderShared: pages.jungle.includes(expectedArticleHeader),
  jungleFooterShared: pages.jungle.includes(articleFooter()),
  jungleAnalyticsShared: pages.jungle.includes(analytics()),
  jungleAuthorShared: pages.jungle.includes(expectedAuthorCard),
  jungleTocShared: pages.jungle.includes(expectedJungleToc),
  jungleFaqShared: pages.jungle.includes(expectedJungleFaq) && generators['build-jungle-article.mjs'].includes('articleFaq({'),
  jungleFaqSchemaShared: pages.jungle.includes('"@type":"FAQPage"') && generators['build-jungle-article.mjs'].includes('faqStructuredData({'),
  jungleListeningShared: pages.jungle.includes(expectedJungleListening),
  jungleYoutubeShared: pages.jungle.includes(expectedJungleYoutube),
  jungleSupportShared: pages.jungle.includes(expectedJungleSupport),
  jungleReadNextShared: pages.jungle.includes(expectedJungleReadNext),
  bassHeaderShared: pages.bass.includes(expectedArticleHeader),
  bassFooterShared: pages.bass.includes(articleFooter()),
  bassAnalyticsShared: pages.bass.includes(analytics()),
  bassAuthorShared: pages.bass.includes(expectedAuthorCard),
  bassFaqShared: pages.bass.includes('class="floating-block article-section faq-section"') && generators['build-bass-music-article.mjs'].includes('articleFaq({'),
  bassFaqSchemaShared: pages.bass.includes('"@type":"FAQPage"') && generators['build-bass-music-article.mjs'].includes('faqStructuredData({'),
  bassListeningShared: generators['build-bass-music-article.mjs'].includes('articleListeningBand({') && pages.bass.includes('article-media-band-full'),
  bassSupportShared: pages.bass.includes('class="floating-inset article-cta article-cta-full"'),
  oneHeaderPerPage: Object.values(pages).every(page => (page.match(/<header class="site-header/g) || []).length === 1),
  oneFooterPerPage: Object.values(pages).every(page => (page.match(/<footer class="site-footer/g) || []).length === 1),
  sharedArticlePageShell: generatorSources.every(source => source.includes('articlePage({')),
  sharedArticleHero: generatorSources.every(source => source.includes('articleHero({')),
  sharedArticleTocGenerators: generatorSources.every(source => source.includes('articleTableOfContents(') || source.includes('tocItems')),
  sharedArticleFigureGenerators: generatorSources.every(source => source.includes('articleFigure(')),
  sharedArticleTableGenerators: generatorSources.every(source => source.includes('articleTable(')),
  sharedArticleSourcesGenerators: generatorSources.every(source => source.includes('articleSources(')),
  currentFaqGeneratorsShared: generatorSources.every(source => source.includes('articleFaq(') && source.includes('faqStructuredData(')),
  faqStructuredDataMatchesVisibleContent: articlePages.every(faqMatchesVisibleContent),
  firstFaqItemOpen: articlePages.every(page => /class="[^"]*\bfaq-section\b[^"]*"[^>]*>[\s\S]*?<details open>/.test(page)),
  sharedArticleEndBlocks: generatorSources.every(source => source.includes('authorCard({') && source.includes('bandcampSupport(') && source.includes('readNext(')),
  jungleLegacyStructuresNormalised: ['articleSection(','articleFigure(','articleTable(','articleSources('].every(component => generators['build-jungle-article.mjs'].includes(component)),
  seoHeadComplete: articlePages.every(page => count(page, /<link rel="canonical"/g) === 1 && count(page, /<meta name="description"/g) === 1 && page.includes('max-image-preview:large')),
  articleDatesComplete: articlePages.every(page => page.includes('article:published_time') && page.includes('article:modified_time') && page.includes('class="article-updated"')),
  oneH1PerArticle: articlePages.every(page => count(page, /<h1(?:\s|>)/g) === 1),
  semanticArticleLandmarks: articlePages.every(page => count(page, /<main id="main-content">/g) === 1 && count(page, /<main id="main-content"><article>/g) === 1),
  mediaAccessibility: articlePages.every(page => [...page.matchAll(/<img\b[^>]*>/g)].every(match => /\balt="[^"]*"/.test(match[0])) && [...page.matchAll(/<iframe\b[^>]*>/g)].every(match => /\btitle="[^"]+"/.test(match[0]))),
  imageDimensions: articlePages.every(page => [...page.matchAll(/<img\b[^>]*>/g)].every(match => /\bwidth="\d+"/.test(match[0]) && /\bheight="\d+"/.test(match[0]))),
  designTokensDefined: ['--space-xs','--space-sm','--space-md','--space-lg','--space-xl','--space-3xl','--yellow','--coral','--surface-muted','--motion-fast'].every(token => homeCss.includes(token)),
  articleScaleDefined: ['--article-text','--article-wide','--article-media','--section-space','--media-space','--text-body','--heading-section'].every(token => articleCss.includes(token)),
  essentialListeningFullBleed: articlePages.every(page => {
    const classes = essentialListeningClasses(page);
    return classes.length > 0 && classes.every(value => /(?:article-media-band-full|context-listening-full|listening-block-full)/.test(value));
  }),
  essentialListeningFullBleedCss: ['.article-media-band-full {','.context-listening-full {','.listening-block-full {'].every(selector => articleCss.includes(selector)),
  // A full-bleed listening collection inside a tone-{x} section must match that colour
  // or be the neutral -paper variant; a different saturated tone stacks clashing bands
  // with the section colour showing through the block's margins. (Compact promo bands
  // may still accent.)
  noToneClashInSections: articlePages.every(page => page
    .split(/(?=<section class="floating-block article-section)/).slice(1)
    .every(chunk => {
      const tone = (chunk.slice(0, chunk.indexOf('>') + 1).match(/\btone-(cyan|yellow|coral)\b/) || [])[1];
      if (!tone) return true;
      const body = chunk.slice(0, chunk.indexOf('</section>'));
      return [...body.matchAll(/\blistening-(cyan|yellow|coral|paper)\b/g)]
        .every(m => m[1] === 'paper' || m[1] === tone);
    })),
  bandcampTrueViewportWidth: ['position: relative','left: 50%','width: 100vw','transform: translateX(-50%)'].every(declaration => bandcampFullBleedRule.includes(declaration)),
  homeMarkersComplete: ['home-styles','home-header','now-playing','home-articles','home-footer','home-runtime','analytics'].every(name => pages.home.includes(`component:${name}:start`) && pages.home.includes(`component:${name}:end`))
};

console.log(JSON.stringify(checks, null, 2));
if (Object.values(checks).some(value => !value)) process.exitCode = 1;
