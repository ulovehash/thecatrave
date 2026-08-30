import fs from 'node:fs';
import path from 'node:path';

const html = fs.readFileSync('breakbeat-guide.html','utf8');
const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map(m=>m[1]);
const idSet = new Set(ids);
const duplicateIds = [...new Set(ids.filter((id,index)=>ids.indexOf(id)!==index))];
const anchors = [...html.matchAll(/href="#([^"]+)"/g)].map(m=>m[1]);
const missingAnchors = [...new Set(anchors.filter(id=>!idSet.has(id)))];
const localAssets = [...html.matchAll(/(?:src|href)="([^"?#]+\.(?:css|png|jpe?g|webp|svg))[^"#]*"/gi)]
  .map(m=>decodeURIComponent(m[1])).filter(value=>!/^https?:/.test(value) && !value.startsWith('/'));
const missingAssets = [...new Set(localAssets.filter(file=>!fs.existsSync(path.resolve(file))))];
const headings = [...html.matchAll(/<h([1-6])(?:\s[^>]*)?>/g)].map(m=>Number(m[1]));
const hierarchyJumps = headings.flatMap((level,index)=>index && level>headings[index-1]+1 ? [`h${headings[index-1]}→h${level} at ${index+1}`] : []);
const iframeTags = [...html.matchAll(/<iframe\b[^>]*>/g)].map(m=>m[0]);
const iframeSrcs = iframeTags.map(tag=>(tag.match(/\ssrc="([^"]+)"/)||[])[1]).filter(Boolean);
const duplicateIframeSrcs = [...new Set(iframeSrcs.filter((src,index)=>iframeSrcs.indexOf(src)!==index))];
const imgTags = [...html.matchAll(/<img\b[^>]*>/g)].map(m=>m[0]);
const imagesMissingDimensions = imgTags.filter(tag=>!/\swidth="\d+"/.test(tag)||!/\sheight="\d+"/.test(tag));
const iframesMissingTitles = iframeTags.filter(tag=>!/\stitle="[^"]+"/.test(tag));
const trackIds = ids.filter(id=>id.startsWith('track-'));
const trackEmbeds = (html.match(/class="track-embed/g)||[]).length;
const contextGroups = (html.match(/class="context-listening /g)||[]).length;
const mixEmbedCount = (html.match(/soundcloud\.com%2Fthecatrave%2Fi-like-to-smoke-in-silence-after-raves|soundcloud\.com\/thecatrave\/i-like-to-smoke-in-silence-after-raves/g)||[]).length;
const sourceSection = (html.match(/<section class="floating-block article-section sources-section"[\s\S]*?<\/section>/)||[])[0] || '';
const unlinkedSourceItems = [...sourceSection.matchAll(/<li>([\s\S]*?)<\/li>/g)].filter(match=>!/<a\b/.test(match[1]));
const oldBreakbeatMedia = [...new Set([...html.matchAll(/img\/(amen|flyers|pirate-radio|old%20dubplate|uk-electronic\/atari)[^" ]*/g)].map(m=>m[0]))];
const figureBeforeEmbed = [...html.matchAll(/<\/figure>\s*<aside class="(?:context-listening|floating-inset (?:spotify|soundcloud)-feature)/g)];
const embedBeforeFigure = [...html.matchAll(/<\/aside>\s*<figure class="floating-image article-image/g)];
const consecutiveFigures = [...html.matchAll(/<\/figure>\s*<figure class="floating-image article-image/g)];
const css = fs.readFileSync('thecatrave-article.css','utf8');
const responsiveRulesPresent = /@media \(max-width: 1000px\)/.test(css) && /@media \(max-width: 760px\)/.test(css) && /\.track-player \{ grid-column: 1 \/ -1; \}/.test(css);
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
const result = {
  h1: (html.match(/<h1(?:\s|>)/g)||[]).length,
  h2: (html.match(/<h2(?:\s|>)/g)||[]).length,
  faqItems: (html.match(/<details/g)||[]).length,
  iframes: (html.match(/<iframe/g)||[]).length,
  images: (html.match(/<img/g)||[]).length,
  trackEntries: trackIds.length,
  trackEmbeds,
  contextGroups,
  mixEmbedCount,
  unlinkedSourceItems: unlinkedSourceItems.length,
  trackJumpLinks: (html.match(/class="track-jump"/g)||[]).length,
  standaloneTrackSection: /Essential Breakbeat Tracks: A Listening Route/.test(html),
  jsonLdAnswersEmpty: /"text":""/.test(html),
  duplicateIds,
  duplicateIframeSrcs,
  missingAnchors,
  missingAssets,
  imagesMissingDimensions: imagesMissingDimensions.length,
  iframesMissingTitles: iframesMissingTitles.length,
  oldBreakbeatMedia,
  figureBeforeEmbed: figureBeforeEmbed.length,
  embedBeforeFigure: embedBeforeFigure.length,
  consecutiveFigures: consecutiveFigures.length,
  responsiveRulesPresent,
  proportionalMobileImages,
  missingLegacyAnchors,
  missingPreservationPhrases,
  originalPublicationDatePreserved,
  readingTimePresent,
  visibleModifiedDate,
  structuredModifiedDate,
  openGraphModifiedDate,
  openGraphPublishedDate,
  modifiedDateConsistent,
  publishedDateConsistent,
  directAnswerWordCount,
  directAnswerBeforeContents,
  directAnswerCalloutStyled,
  breadcrumbStructuredPresent,
  hierarchyJumps,
  editorialNotesLeaked: /final design should|the final page should/i.test(html)
};
console.log(JSON.stringify(result,null,2));
if (result.h1!==1 || result.trackEntries!==21 || result.trackEmbeds!==21 || result.contextGroups!==7 || result.mixEmbedCount!==1 || result.unlinkedSourceItems || result.trackJumpLinks || result.standaloneTrackSection || result.jsonLdAnswersEmpty || duplicateIds.length || duplicateIframeSrcs.length || missingAnchors.length || missingAssets.length || imagesMissingDimensions.length || iframesMissingTitles.length || oldBreakbeatMedia.length || result.figureBeforeEmbed || result.embedBeforeFigure || result.consecutiveFigures || !responsiveRulesPresent || !proportionalMobileImages || missingLegacyAnchors.length || missingPreservationPhrases.length || !originalPublicationDatePreserved || !readingTimePresent || !modifiedDateConsistent || !publishedDateConsistent || directAnswerWordCount < 80 || directAnswerWordCount > 120 || !directAnswerBeforeContents || !directAnswerCalloutStyled || !breadcrumbStructuredPresent || hierarchyJumps.length || result.editorialNotesLeaked) process.exitCode=1;
