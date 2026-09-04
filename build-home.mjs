import fs from 'node:fs';
import {homeArticlesWithReadingTimes} from './home-articles.mjs';
import {analytics, homeArticlesSection, homeFooter, homeSelectorPromo, nowPlayingBanner, siteHeader} from './site-components.mjs';
import {channels} from './selector-channels.mjs';

const path = 'index.html';
let page = fs.readFileSync(path, 'utf8');
const homeStyles = fs.readFileSync('thecatrave-home.css', 'utf8').trim();
const homeRuntime = fs.readFileSync('homepage-runtime.js', 'utf8').trim();

const homeArticles = homeArticlesWithReadingTimes();

function replaceComponent(name, html) {
  const start = `<!-- component:${name}:start -->`;
  const end = `<!-- component:${name}:end -->`;
  const from = page.indexOf(start);
  const to = page.indexOf(end);
  if (from === -1 || to === -1 || to < from) throw new Error(`Missing or invalid ${name} component markers`);
  page = `${page.slice(0, from)}${start}\n  ${html}\n  ${end}${page.slice(to + end.length)}`;
}

replaceComponent('home-styles', `<style>${homeStyles}</style>`);
replaceComponent('home-header', siteHeader({
  variant: 'home',
  navItems: [
    {href:'#bandcamp',label:'Bandcamp',className:'support-link'},
    {href:'#mixes',label:'Mixes'},
    {href:'#music',label:'Tracks'},
    {href:'#playlists',label:'Playlists'},
    {href:'#articles',label:'Articles'},
    {href:'/selector',label:'Selector'}
  ]
}));
replaceComponent('now-playing', nowPlayingBanner({
  title: 'I Like to Smoke in Silence After Raves',
  meta: '30 tracks / DJ mix',
  href: 'https://soundcloud.com/thecatrave/i-like-to-smoke-in-silence-after-raves'
}));
// The Selector promo pulls its numbers and channel logos from the tool's own data.
const slug = s => s.toLowerCase().normalize('NFKD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
let selectorSets = 0;
try { const d = JSON.parse(fs.readFileSync('selector-data.json', 'utf8')); if (Array.isArray(d)) selectorSets = d.length; } catch {}
const broadcasters = [...new Set(channels.map(c => c.broadcaster))];
const selectorLogos = broadcasters.map(b => `img/selector/${slug(b)}.png`).filter(p => fs.existsSync(p));
replaceComponent('home-selector', homeSelectorPromo({
  sets: selectorSets,
  channels: broadcasters.length,
  logos: selectorLogos
}));
replaceComponent('home-articles', homeArticlesSection({items:homeArticles}));
replaceComponent('home-footer', homeFooter());
replaceComponent('home-runtime', `<script>${homeRuntime}</script>`);
replaceComponent('analytics', analytics());

fs.writeFileSync(path, page);
