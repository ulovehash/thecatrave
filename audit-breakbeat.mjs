import fs from 'node:fs';
import path from 'node:path';

const html = fs.readFileSync('breakbeat-guide.html','utf8');
const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map(m=>m[1]);
const idSet = new Set(ids);
const anchors = [...html.matchAll(/href="#([^"]+)"/g)].map(m=>m[1]);
const iframeTags = [...html.matchAll(/<iframe\b[^>]*>/g)].map(m=>m[0]);
const essentialListeningClasses = [...html.matchAll(/<aside class="([^"]+)"[^>]*>[\s\S]*?<\/aside>/g)]
  .filter(match => match[0].includes('<p class="article-kicker">Essential listening</p>'))
  .map(match=>match[1]);
const iframeSrcs = iframeTags.map(tag=>(tag.match(/\ssrc="([^"]+)"/)||[])[1]).filter(Boolean);
const duplicateIframeSrcs = [...new Set(iframeSrcs.filter((src,index)=>iframeSrcs.indexOf(src)!==index))];
const trackIds = ids.filter(id=>id.startsWith('track-'));
const trackEmbeds = (html.match(/class="track-embed/g)||[]).length;
const contextGroups = (html.match(/class="context-listening /g)||[]).length;
const mixEmbedCount = (html.match(/soundcloud\.com%2Fthecatrave%2Fi-like-to-smoke-in-silence-after-raves|soundcloud\.com\/thecatrave\/i-like-to-smoke-in-silence-after-raves/g)||[]).length;
const extendedPlaylistBands = (html.match(/id="breakbeat-(?:florida|nu-skool)-playlist"/g)||[]).length;
const sourceSection = (html.match(/<section class="floating-block article-section sources-section"[\s\S]*?<\/section>/)||[])[0] || '';
const unlinkedSourceItems = [...sourceSection.matchAll(/<li>([\s\S]*?)<\/li>/g)].filter(match=>!/<a\b/.test(match[1]));
const oldBreakbeatMedia = [...new Set([...html.matchAll(/img\/(amen|flyers|pirate-radio|old%20dubplate|uk-electronic\/atari)[^" ]*/g)].map(m=>m[0]))];
const css = fs.readFileSync('thecatrave-article.css','utf8');
const responsiveRulesPresent = /@media \(max-width: 1000px\)/.test(css) && /@media \(max-width: 760px\)/.test(css) && /\.track-entry \{ grid-template-columns: minmax\(0, 1fr\); \}/.test(css);
const proportionalMobileImages = /@media \(max-width: 760px\)[\s\S]*?\.article-image img \{[\s\S]*?width: 100%;[\s\S]*?max-width: 100%;[\s\S]*?height: auto;[\s\S]*?max-height: none;[\s\S]*?aspect-ratio: auto;[\s\S]*?object-fit: contain;[\s\S]*?\}/.test(css);
const legacyAnchors = ['what-is-breakbeat','pop-culture','structure','sound-design','sampling','make-breakbeat','timeline','revival','forums','djs','pioneers','today','culture','academia','tracks','faq'];
const missingLegacyAnchors = legacyAnchors.filter(id=>!idSet.has(id));
const preservationPhrases = ['breakbeat music genre','breakbeat genre','breakbeat meaning','breakbeat definition','breaks music','Amen break','breakbeat pattern','Breakbeat culture','Breakbeat DJing'];
const missingPreservationPhrases = preservationPhrases.filter(phrase=>!html.toLowerCase().includes(phrase.toLowerCase()));
const originalPublicationDatePreserved = /"datePublished":"2025-04-06"/.test(html);
const readingTimePresent = /<p class="reading-time">~\d+ min read<\/p>/.test(html);
const visibleModifiedDate = (html.match(/<time datetime="([^"]+)">30 August 2026<\/time>/)||[])[1];
const structuredModifiedDate = (html.match(/"dateModified":"([^"]+)"/)||[])[1];
const openGraphModifiedDate = (html.match(/property="article:modified_time" content="([^"]+)"/)||[])[1];
const openGraphPublishedDate = (html.match(/property="article:published_time" content="([^"]+)"/)||[])[1];
const modifiedDateConsistent = visibleModifiedDate === '2026-08-30' && structuredModifiedDate === visibleModifiedDate && openGraphModifiedDate === visibleModifiedDate;
const publishedDateConsistent = openGraphPublishedDate === '2025-04-06' && originalPublicationDatePreserved;
const directAnswer = (html.match(/<aside class="article-summary article-listen"[^>]*><strong>BREAKBEAT DEFINITION:<\/strong>\s*([\s\S]*?)<\/aside>/)||[])[1] || '';
const directAnswerWordCount = directAnswer.replace(/<[^>]+>/g,' ').trim().split(/\s+/).filter(Boolean).length;
const directAnswerBeforeContents = html.indexOf('class="article-summary article-listen"') > -1 && html.indexOf('class="article-summary article-listen"') < html.indexOf('id="contents"');
const directAnswerCalloutStyled = /<aside class="article-summary article-listen"[^>]*><strong>BREAKBEAT DEFINITION:<\/strong>/.test(html);
const breadcrumbStructuredPresent = /"@type":"BreadcrumbList"/.test(html) && /"position":1,"name":"Home","item":"https:\/\/thecatrave\.com\/"/.test(html) && /"position":2,"name":"Breakbeat guide","item":"https:\/\/thecatrave\.com\/breakbeat-guide"/.test(html);
const failures = [];
const check = (name, condition, detail = '') => {
  if (!condition) failures.push(`${name}${detail ? ` (${detail})` : ''}`);
};

// Generic article contract (one H1, alt text, iframe titles, image dimensions,
// duplicate ids, local assets, heading hierarchy, canonical, dates, viewport,
// em dash, brand case) lives in audit-site-components.mjs and runs against every
// guide. What stays here is what only this page can be wrong about.

check('21 track entries', trackIds.length === 21, String(trackIds.length));
check('21 track embeds', trackEmbeds === 21, String(trackEmbeds));
check('7 context listening groups', contextGroups === 7, String(contextGroups));
check('one mix embed', mixEmbedCount === 1, String(mixEmbedCount));
check('two extended playlist bands', extendedPlaylistBands === 2, String(extendedPlaylistBands));
check('listening label unified', !/Listen while you read|Jungle Mania listening/i.test(html));
check('every essential listening band is full bleed',
  essentialListeningClasses.length === 9 && essentialListeningClasses.every(classes => /(?:article-media-band-full|context-listening-full)/.test(classes)),
  `${essentialListeningClasses.length} bands`);
check('every source item is linked', unlinkedSourceItems.length === 0, String(unlinkedSourceItems.length));
check('no leftover track jump links', (html.match(/class="track-jump"/g) || []).length === 0);
check('no standalone track section', !/Essential Breakbeat Tracks: A Listening Route/.test(html));
check('no empty JSON-LD answers', !/"text":""/.test(html));
check('no duplicate iframe sources', duplicateIframeSrcs.length === 0, duplicateIframeSrcs.join(', '));
check('no retired breakbeat media', oldBreakbeatMedia.length === 0, oldBreakbeatMedia.join(', '));
check('responsive CSS rules present', responsiveRulesPresent);
check('mobile images scale proportionally', proportionalMobileImages);
check('legacy anchors preserved', missingLegacyAnchors.length === 0, missingLegacyAnchors.join(', '));
check('preservation phrases present', missingPreservationPhrases.length === 0, missingPreservationPhrases.join(', '));
check('reading time present', readingTimePresent);
check('modified date agrees across visible, structured and OG',
  modifiedDateConsistent, `visible ${visibleModifiedDate}, ld ${structuredModifiedDate}, og ${openGraphModifiedDate}`);
check('published date preserved from the original',
  publishedDateConsistent, `og ${openGraphPublishedDate}`);
check('direct answer is 80-120 words', directAnswerWordCount >= 80 && directAnswerWordCount <= 120, String(directAnswerWordCount));
check('direct answer sits before the contents', directAnswerBeforeContents);
check('direct answer is styled as a callout', directAnswerCalloutStyled);
check('breadcrumb structured data present', breadcrumbStructuredPresent);

if (failures.length) {
  console.error('Breakbeat audit failed:\n  ' + failures.join('\n  '));
  process.exitCode = 1;
} else {
  console.log('Breakbeat audit passed.');
}
