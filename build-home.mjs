import fs from 'node:fs';
import {analytics, homeFooter, nowPlayingBanner, siteHeader} from './site-components.mjs';

const path = 'index.html';
let page = fs.readFileSync(path, 'utf8');

function replaceComponent(name, html) {
  const start = `<!-- component:${name}:start -->`;
  const end = `<!-- component:${name}:end -->`;
  const from = page.indexOf(start);
  const to = page.indexOf(end);
  if (from === -1 || to === -1 || to < from) throw new Error(`Missing or invalid ${name} component markers`);
  page = `${page.slice(0, from)}${start}\n  ${html}\n  ${end}${page.slice(to + end.length)}`;
}

replaceComponent('home-header', siteHeader({
  variant: 'home',
  navItems: [
    {href:'#bandcamp',label:'Bandcamp',className:'support-link'},
    {href:'#mixes',label:'Mixes'},
    {href:'#music',label:'Tracks'},
    {href:'#playlists',label:'Playlists'},
    {href:'#articles',label:'Articles'}
  ]
}));
replaceComponent('now-playing', nowPlayingBanner({
  title: 'I Like to Smoke in Silence After Raves',
  meta: '30 tracks / DJ mix',
  href: 'https://soundcloud.com/thecatrave/i-like-to-smoke-in-silence-after-raves'
}));
replaceComponent('home-footer', homeFooter());
replaceComponent('analytics', analytics());

fs.writeFileSync(path, page);
