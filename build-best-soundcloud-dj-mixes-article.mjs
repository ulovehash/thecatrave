// Build best-soundcloud-dj-mixes.html from the approved editorial draft.
import fs from 'node:fs';
import {
  articleHero, articleListeningBand, articlePage, articleSection, articleSources,
  articleStructuredData, authorCard, bandcampSupport, breadcrumbStructuredData,
  infoBanner, readNext
} from './site-components.mjs';
import {relatedArticles} from './home-articles.mjs';
import {alternatesFor} from './pages.mjs';

const draft = fs.readFileSync('best-soundcloud-dj-mixes-draft.md', 'utf8').replace(/—/g, ':');
const canonical = 'https://thecatrave.com/best-soundcloud-dj-mixes';
const title = 'Best SoundCloud DJ Mixes, Plus One Personal Pick';
const description = 'Eight of the best SoundCloud DJ mixes, from Wata Igarashi and Ogazón to Djrum and SHERELLE, plus one clearly disclosed mix by thecatrave.';
const datePublished = '2026-09-29';
const dateModified = '2026-09-29';
const dateLabel = '29 September 2026';

const escapeHtml = value => String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
function inline(value) {
  return escapeHtml(value).replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
}
function getSection(heading) {
  const start = draft.indexOf(`## ${heading}`);
  if (start < 0) throw new Error(`Missing section: ${heading}`);
  const bodyStart = draft.indexOf('\n', start) + 1;
  const next = draft.indexOf('\n## ', bodyStart);
  return draft.slice(bodyStart, next < 0 ? draft.length : next).trim();
}
const paras = text => text.split(/\n{2,}/).map(value => value.trim()).filter(Boolean);
const join = list => list.map(value => `<p>${inline(value)}</p>`).join('\n');
const slug = value => value.toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const mixMeta = new Map([
  ['Wata Igarashi, Recognise 081', ['https://soundcloud.com/djmag/recognise-081-wata-igarashi', 'Wata Igarashi, Recognise 081', 'Psychedelic techno built through moving percussion and small changes in texture.']],
  ['Ogazón, Recognise 096', ['https://soundcloud.com/djmag/recognise-096-ogazon', 'Ogazón, Recognise 096', 'Patient house and techno whose swing carries the transitions.']],
  ['Sedef Adasi, Recognise', ['https://soundcloud.com/djmag/recognise-sedef-adasi', 'Sedef Adasi, Recognise', 'House, acid, trance and electro programmed as one broad club set.']],
  ['Doudou MD, Recognise 078', ['https://soundcloud.com/djmag/recognise-078-doudou-md', 'Doudou MD, Recognise 078', 'Loose, swung house grooves meeting punchier techno.']],
  ['Objekt, Dekmantel Podcast 116', ['https://soundcloud.com/dkmntl/dekmantel-podcast-116-objekt', 'Objekt, Dekmantel Podcast 116', 'Detailed transitions across techno, electro and broken rhythm.']],
  ['Djrum, Dekmantel Podcast 267', ['https://soundcloud.com/dkmntl/dekmantel-podcast-267-djrum', 'Djrum, Dekmantel Podcast 267', 'Spacious electronics, broken beats and jungle connected through changes in pace.']],
  ['DJ Python, Dekmantel Podcast 208', ['https://soundcloud.com/dkmntl/dekmantel-podcast-208-dj-python', 'DJ Python, Dekmantel Podcast 208', 'A low-slung route through dembow, dub space and ambient haze.']],
  ['SHERELLE, Dekmantel Podcast 285', ['https://soundcloud.com/dkmntl/dekmantel-podcast-285-sherelle', 'SHERELLE, Dekmantel Podcast 285', 'Footwork, jungle and fast broken rhythms held together under pressure.', 'Essential listening']],
  ['thecatrave, I Like to Smoke in Silence After Raves', ['https://soundcloud.com/thecatrave/i-like-to-smoke-in-silence-after-raves', 'thecatrave, I Like to Smoke in Silence After Raves', 'Not presented as one of the best, but worth your time, 100%.', 'A mix by thecatrave']]
]);

function soundcloudSrc(url) {
  return `https://w.soundcloud.com/player/?url=${encodeURIComponent(url)}&color=%23ff5a36&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false`;
}
function renderMixSection(heading) {
  const blocks = getSection(heading).split(/(?:^|\n)### /).filter(Boolean);
  return blocks.map(block => {
    const [entryTitle, ...rest] = block.split('\n');
    const meta = mixMeta.get(entryTitle.trim());
    if (!meta) throw new Error(`Missing SoundCloud metadata for ${entryTitle}`);
    const text = rest.join('\n').replace(/\n?\[Embed:[^\]]+\]\n?/, '\n\n');
    const copy = paras(text);
    if (copy.length !== 2) throw new Error(`${entryTitle} must have two editorial paragraphs`);
    const [url, playerTitle, note, kicker = 'Essential listening'] = meta;
    return `<h3>${escapeHtml(entryTitle.trim())}</h3>${join(copy.slice(0, 1))}${articleListeningBand({
      platform:'soundcloud', id:`mix-${slug(entryTitle)}`, kicker,
      title:`SoundCloud mix: ${playerTitle}.`, description:note, src:soundcloudSrc(url),
      iframeTitle:`${playerTitle} on SoundCloud`, fullBleed:true, tone:'cyan'
    })}${join(copy.slice(1))}`;
  }).join('\n');
}

const answer = paras(getSection('Answer'));
const intro = paras(getSection('Introduction'));
const criteria = paras(getSection('How these SoundCloud mixes were chosen'));
const choosing = paras(getSection('Which SoundCloud DJ mix should you play first?'));
const sources = getSection('Sources').split('\n').filter(line => line.startsWith('- ')).map(line => `<li>${inline(line.slice(2))}</li>`).join('');
const tocItems = [
  {id:'criteria', label:'How these SoundCloud mixes were chosen'},
  {id:'house-techno', label:'House, techno and the space between'},
  {id:'breaks-bass', label:'Breaks, bass and leftfield routes'},
  {id:'personal-pick', label:'One more mix, with disclosure'},
  {id:'choose', label:'Which mix should you play first?'}
];
const readingTime = `${Math.max(7, Math.round(draft.split(/\s+/).length / 225))} min read`;
const articleHtml = [
  articleHero({kicker:'SoundCloud DJ mixes', title:'The best SoundCloud DJ mixes worth hearing', deck:'Eight editorial selections with a clear point of view, plus one personal pick by thecatrave with the relationship stated plainly.', readingTime, dateModified, dateLabel, summaryHtml:infoBanner({label:'Best SoundCloud DJ mixes', bodyHtml:inline(answer[0]), className:'article-summary'}), tocItems}),
  articleSection({id:'introduction', title:'A mix should make an hour mean something.', bodyHtml:join(intro), className:'article-intro'}),
  articleSection({id:'criteria', title:'How these SoundCloud mixes were chosen.', bodyHtml:join(criteria)}),
  articleSection({id:'house-techno', title:'House, techno and the space between.', bodyHtml:renderMixSection('House, techno and the space between')}),
  articleSection({id:'breaks-bass', title:'Breaks, bass and leftfield routes.', bodyHtml:renderMixSection('Breaks, bass and leftfield routes')}),
  articleSection({id:'personal-pick', title:'One more mix, with disclosure.', bodyHtml:renderMixSection('One more mix, with disclosure')}),
  articleSection({id:'choose', title:'Which SoundCloud DJ mix should you play first?', bodyHtml:join(choosing)}),
  authorCard({filled:true}),
  articleSources({bodyHtml:`<ul>${sources}</ul>`}),
  bandcampSupport({fullBleed:true, description:'These releases connect to the broken rhythms, bass pressure and club music in the mixes above. Buying one supports the music and writing directly.', tracks:[
    {title:'thecatrave, Protect Ya Breaks', id:'3822639635', url:'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText:'Protect Ya Breaks by thecatrave'},
    {title:'thecatrave, 60 hours of mistakes', id:'3330948631', url:'https://thecatrave.bandcamp.com/track/60-hours-of-mistakes', linkText:'60 hours of mistakes by thecatrave'}
  ]}),
  readNext({items:relatedArticles('best-soundcloud-dj-mixes.html')})
].join('\n');
const structuredData = [
  articleStructuredData({headline:title, description, canonical, image:'https://thecatrave.com/img/og/best-soundcloud-dj-mixes.jpg', datePublished, dateModified}),
  breadcrumbStructuredData({name:'Best SoundCloud DJ Mixes', canonical})
];
const html = articlePage({alternates:alternatesFor('/best-soundcloud-dj-mixes'), title, description, canonical, ogImage:'https://thecatrave.com/img/og/best-soundcloud-dj-mixes.jpg', datePublished, dateModified, bodyClass:'article-page soundcloud-mixes-page', structuredData, articleHtml}).replace(/—/g, ':');
fs.writeFileSync('best-soundcloud-dj-mixes.html', html);
console.log('Built best-soundcloud-dj-mixes.html');
