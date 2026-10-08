import fs from 'node:fs';
import assert from 'node:assert/strict';
import {clubVisitLayouts, consolidateClubVisit} from './club-visit-layout.mjs';
import {pages} from './pages.mjs';
assert.equal(consolidateClubVisit('<p>Unrelated guide</p>', 'https://thecatrave.com/techno-music-guide', 'en', () => {throw new Error('Unexpected section render');}, () => {throw new Error('Unexpected contents render');}), '<p>Unrelated guide</p>');
const baseline=JSON.parse(fs.readFileSync('content/club-visit-preservation.json','utf8'));
for(const [file, saved] of Object.entries(baseline)) {
 const html=fs.readFileSync(file,'utf8');
 const config=clubVisitLayouts['/'+file.replace(/\.html$/,'')];
 assert.ok(config,`${file}: registered layout`);
 const idList=[...html.matchAll(/\sid="([^"]+)"/g)].map(m=>m[1]);
 assert.equal(idList.length,new Set(idList).size,`${file}: duplicate IDs`);
 for(const id of saved.ids) assert.ok(idList.includes(id),`${file}: lost #${id}`);
 assert.equal(idList.filter(id=>id==='visiting').length,1,`${file}: one planner`);
 const heroEnd=html.indexOf('</header>',html.indexOf('class="article-hero"'));
 const first=html.slice(heroEnd).match(/<section\b[^>]*id="([^"]+)"/);
 assert.equal(first?.[1],'visiting',`${file}: planner comes first`);
 assert.ok(html.includes('href="#visiting"'),`${file}: contents link`);
 const actual={title:html.match(/<title>(.*?)<\/title>/)?.[1],canonical:html.match(/<link rel="canonical" href="([^"]+)"/)?.[1],description:html.match(/<meta name="description" content="([^"]+)"/)?.[1],h1:html.match(/<h1[^>]*>(.*?)<\/h1>/)?.[1],published:html.match(/<meta property="article:published_time" content="([^"]+)"/)?.[1]};
 for(const key of Object.keys(actual))assert.equal(actual[key],saved[key],`${file}: preserved ${key}`);
 for(const src of saved.media)assert.ok(html.includes(`="${src}"`),`${file}: lost media ${src}`);
 if(config.paragraphTables){
  const plan=html.match(/<section[^>]*id="visiting"[^>]*>([\s\S]*?)<\/section>/)?.[1];
  assert.ok(plan&&!plan.includes('<table'),`${file}: practical details use prose`);
 }
 const levels=[...html.matchAll(/<h([1-6])(?:\s[^>]*)?>/g)].map(m=>Number(m[1]));
 assert.ok(levels.every((n,i)=>!i||n<=levels[i-1]+1),`${file}: heading hierarchy`);
}
for(const page of pages.filter(p => p.kind==='guide' && /clubs|clubbing|berghain|fabric-london|pacha-ibiza|ushuaia-ibiza|printworks-london/.test(p.translationOf || p.path))) {
  assert.ok(baseline[page.file], `${page.file}: add new club guide to the planning inventory`);
}
console.log(`Club visit audit passed: ${Object.keys(baseline).length} pages; one early planner, legacy anchors, metadata, media and heading hierarchy preserved.`);
