import fs from 'node:fs';
import {analytics, articleFooter, homeFooter, nowPlayingBanner, siteHeader} from './site-components.mjs';

const pages = {
  home: fs.readFileSync('index.html', 'utf8'),
  breakbeat: fs.readFileSync('breakbeat-guide.html', 'utf8'),
  uk: fs.readFileSync('uk-electronic-music-evolution.html', 'utf8')
};

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
const expectedArticleHeader = siteHeader({variant:'article'});

const checks = {
  homeHeaderShared: pages.home.includes(expectedHomeHeader),
  homeFooterShared: pages.home.includes(homeFooter()),
  nowPlayingShared: pages.home.includes(expectedNowPlaying),
  homeAnalyticsShared: pages.home.includes(analytics()),
  breakbeatHeaderShared: pages.breakbeat.includes(expectedArticleHeader),
  breakbeatFooterShared: pages.breakbeat.includes(articleFooter()),
  breakbeatAnalyticsShared: pages.breakbeat.includes(analytics()),
  ukHeaderShared: pages.uk.includes(expectedArticleHeader),
  ukFooterShared: pages.uk.includes(articleFooter()),
  ukAnalyticsShared: pages.uk.includes(analytics()),
  oneHeaderPerPage: Object.values(pages).every(page => (page.match(/<header class="site-header/g) || []).length === 1),
  oneFooterPerPage: Object.values(pages).every(page => (page.match(/<footer class="site-footer/g) || []).length === 1),
  homeMarkersComplete: ['home-header','now-playing','home-footer','analytics'].every(name => pages.home.includes(`component:${name}:start`) && pages.home.includes(`component:${name}:end`))
};

console.log(JSON.stringify(checks, null, 2));
if (Object.values(checks).some(value => !value)) process.exitCode = 1;
