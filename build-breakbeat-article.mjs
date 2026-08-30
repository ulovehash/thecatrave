import fs from 'node:fs';

const source = fs.readFileSync('breakbeat-guide-draft.md', 'utf8');
const esc = value => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const slug = value => value.toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const tracks = [
  {year:'1969', artist:'The Winstons', title:'Amen, Brother', note:'The six-second Gregory Coleman passage that later producers stretched into countless rhythmic identities.', embed:{type:'spotify', id:'2jnj8onRgXr1uErISf3F9j'}},
  {year:'1970', artist:'James Brown', title:'Funky Drummer', note:"Clyde Stubblefield's accents and timing show why a famous loop is still a human performance.", embed:{type:'spotify', id:'61D6PGXxHI5iB10tQGgOEv'}},
  {year:'1972', artist:'Lyn Collins', title:'Think (About It)', note:'A drum break and vocal fragments that travelled through hip-hop, rave and jungle.', embed:{type:'spotify', id:'1kG2PZ8geznbDA8I6iWeDi'}},
  {year:'1973', artist:'Incredible Bongo Band', title:'Apache', note:'Percussion and open space that became central to DJ and b-boy practice.', embed:{type:'spotify', id:'2ZvUoTx8BggYceQJz24xgG'}},
  {year:'1989', artist:'Shut Up and Dance', title:'£10 to Get In', note:'Fast UK hip-hop production meeting rave before breakbeat hardcore had fully stabilised as a name. The surviving streaming player below uses the closely related £20 version from the same early catalogue.', embed:{type:'spotify-playlist', id:'05VlU7NQ48rCqPRQiEnXsj'}},
  {year:'1991', artist:'SL2', title:'DJs Take Control', note:'Breaks, bass and rave sampling built for both mixing and immediate recognition.', embed:{type:'spotify', id:'0sE1Ta0tO8eWIjlVPaWfse'}},
  {year:'1991', artist:'2 Bad Mice', title:'Bombscare', note:'A darker, more spacious route through breakbeat hardcore.', embed:{type:'spotify', id:'5XOV549T7vl4Q3Z9MNZqeV'}},
  {year:'1991', artist:'The Prodigy', title:'Charly', note:'Early rave crossover and breakbeat hardcore, not evidence that the group were always a big-beat act.', embed:{type:'spotify', id:'2PQnjk1iMjwqvHsY5ExHSA'}},
  {year:'1992', artist:'SL2', title:'On a Ragga Tip', note:'Ragga vocals and breakbeat hardcore crossing from rave culture into the UK charts.', embed:{type:'youtube', id:'LRy15WXFj7U'}},
  {year:'1995', artist:'The Chemical Brothers', title:'Chemical Beats', note:'Break-driven club music scaled towards big beat without losing acid repetition.', embed:{type:'spotify', id:'2uFngE6ePszeJV3Cbtrfpc'}},
  {year:'1995', artist:'The Chemical Brothers', title:'Leave Home', note:'Acid pressure, hip-hop-sized drums and a bridge between underground clubs and crossover breakbeat.', embed:{type:'spotify', id:'6LoFbENZwUbb0UVVA3jgQy'}},
  {year:'1996', artist:'Überzone', title:'Botz', note:'Electro and acid breakbeat from the American West Coast route.', embed:{type:'youtube', id:'6Gy3mAbPLhA'}},
  {year:'1998', artist:'DJ Icey', title:'This Is How My Drummer Drums', note:'Electro, bass and the regional Florida breaks identity in one production.', embed:{type:'youtube', id:'5zSTWBHlYUA'}},
  {year:'1999', artist:'Hybrid', title:'Finished Symphony', note:'Progressive breaks stretched into orchestral scale and a long-form club arrangement.', embed:{type:'spotify', id:'7nUwU36boOFB8QL7oFeM1z'}},
  {year:'2000', artist:'Plump DJs', title:'Electric Disco', note:'The tighter edits and low end of the emerging nu-skool circuit.', embed:{type:'spotify', id:'5AjUSWK2RtYPxPIXYElrBA'}},
  {year:'2001', artist:'Stanton Warriors', title:'Da Antidote', note:'UK garage swing and bass moving through a dedicated breaks framework.', embed:{type:'spotify-playlist', id:'7zKXwyQSg9dRQvaTpO1nOQ'}},
  {year:'2017', artist:'BICEP', title:'Glue', note:'Contemporary broken rhythm shaped by rave memory rather than strict genre revivalism.', embed:{type:'spotify', id:'2aJDlirz6v2a4HREki98cP'}},
  {year:'2018', artist:'Skee Mask', title:'50 Euro to Break Boost', note:'Breakbeat movement operating inside a techno framework.', embed:{type:'soundcloud', url:'https%3A//soundcloud.com/ilian-tape/skee-mask-50-euro-to-break-boost'}},
  {year:'2021', artist:'Overmono', title:'So U Kno', note:'A modern meeting point for garage, techno, vocal fragments and breaks.', embed:{type:'youtube', id:'SRVxRUJxITY'}},
  {year:'2024', artist:'thecatrave', title:'Berlin Race 1909', note:'A long-form breakbeat route with a colder Berlin atmosphere and room for the rhythm to keep changing.', embed:{type:'spotify', id:'1iq7tX1EWPR7INIjkxhGSu'}},
  {year:'2025', artist:'thecatrave', title:'Protect Ya Breaks', note:'Progressive breaks at 128 BPM, moving through bass, garage and techno without settling into one revival style.', embed:{type:'spotify', id:'6qxmmgfWlT4yrWu60elEFZ'}}
].map((track, index) => ({...track, index:index + 1, anchor:`track-${slug(`${track.artist}-${track.title}`)}`}));

function inline(value) {
  return esc(value)
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
    .replace(/<a href="([^"]+)">([^<]+)<\/a>/g, (match, href, label) => {
      if (!/(spotify\.com|soundcloud\.com|bandcamp\.com)/.test(href)) return match;
      const found = tracks.find(track => label.toLowerCase().includes(track.title.toLowerCase()));
      return found ? `<span class="track-mention">${label}</span>` : match;
    });
}

const meta = Object.fromEntries([...source.matchAll(/^\*\*([^*]+):\*\*\s*(.+)$/gm)].map(m => [m[1], m[2].trim()]));
const sections = new Map();
let active = null;
for (const line of source.split(/\r?\n/)) {
  const h2 = line.match(/^## (.+)$/);
  if (h2) { active = h2[1]; sections.set(active, []); continue; }
  if (active) sections.get(active).push(line);
}

function parse(lines) {
  const nodes = [];
  for (let i = 0; i < lines.length;) {
    const line = lines[i].trim();
    if (!line) { i++; continue; }
    if (/^<a id=/.test(line)) { nodes.push({type:'raw', html:line}); i++; continue; }
    if (line.startsWith('### ')) { nodes.push({type:'h3', text:line.slice(4)}); i++; continue; }
    if (line.startsWith('> ')) {
      const body = [];
      while (i < lines.length && lines[i].trim().startsWith('> ')) body.push(lines[i++].trim().slice(2));
      nodes.push({type:'quote', text:body.join(' ')}); continue;
    }
    if (/^\d+\. /.test(line)) {
      const items = [];
      while (i < lines.length && /^\d+\. /.test(lines[i].trim())) items.push(lines[i++].trim().replace(/^\d+\. /,''));
      nodes.push({type:'ol', items}); continue;
    }
    if (line.startsWith('- ')) {
      const items = [];
      while (i < lines.length && lines[i].trim().startsWith('- ')) items.push(lines[i++].trim().slice(2));
      nodes.push({type:'ul', items}); continue;
    }
    if (line.startsWith('|')) {
      const rows = [];
      while (i < lines.length && lines[i].trim().startsWith('|')) rows.push(lines[i++].trim());
      nodes.push({type:'table', rows}); continue;
    }
    const parts = [line]; i++;
    while (i < lines.length && lines[i].trim() && !/^(### |> |- |\d+\. |\|)/.test(lines[i].trim())) parts.push(lines[i++].trim());
    nodes.push({type:'p', text:parts.join(' ')});
  }
  return nodes;
}

const parsed = new Map([...sections].map(([key, lines]) => [key, parse(lines)]));
const h1Match = source.match(/^# (.+)$/m);
if (h1Match) {
  const afterH1 = source.slice(source.indexOf(h1Match[0]) + h1Match[0].length);
  parsed.set(h1Match[1], parse(afterH1.slice(0, afterH1.search(/^## /m)).split(/\r?\n/)));
}
function renderNode(node) {
  if (node.type === 'raw') return /id="(?:faq|sources|today)"/.test(node.html) ? '' : node.html;
  if (node.type === 'h3') return `<h3>${inline(node.text)}</h3>`;
  if (node.type === 'p') return `<p>${inline(node.text)}</p>`;
  if (node.type === 'quote') return `<aside class="article-listen">${inline(node.text)}</aside>`;
  if (node.type === 'ol') return `<ol class="track-route">${node.items.map(item=>`<li>${inline(item)}</li>`).join('')}</ol>`;
  if (node.type === 'ul') return `<ul class="source-list">${node.items.map(item=>`<li>${inline(item)}</li>`).join('')}</ul>`;
  if (node.type === 'table') {
    const cells = row => row.slice(1,-1).split('|').map(cell=>inline(cell.trim()));
    const head = cells(node.rows[0]);
    const body = node.rows.slice(2).map(row=>`<tr>${cells(row).map(cell=>`<td>${cell}</td>`).join('')}</tr>`).join('');
    return `<div class="genre-table-wrap"><table class="genre-table"><thead><tr>${head.map(cell=>`<th scope="col">${cell}</th>`).join('')}</tr></thead><tbody>${body}</tbody></table></div>`;
  }
  return '';
}
function subsectionNodes(sectionTitle, heading) {
  const nodes = parsed.get(sectionTitle) || [];
  const start = nodes.findIndex(node => node.type === 'h3' && node.text === heading);
  if (start < 0) return [];
  const next = nodes.findIndex((node,index) => index > start && node.type === 'h3');
  return nodes.slice(start + 1, next < 0 ? nodes.length : next);
}
const subsectionBody = (sectionTitle, heading) => subsectionNodes(sectionTitle, heading).map(renderNode).join('');
function body(title, options={}) {
  const nodes = parsed.get(title) || [];
  let html = options.start || '';
  for (const node of nodes) {
    if (node.type === 'h3' && options.beforeHeading?.[node.text]) html += options.beforeHeading[node.text];
    html += renderNode(node);
    if (node.type === 'h3' && options.afterHeading?.[node.text]) html += options.afterHeading[node.text];
    if (node.type === 'p' && options.afterParagraph) {
      const match = Object.entries(options.afterParagraph).find(([opening]) => node.text.startsWith(opening));
      if (match) html += match[1];
    }
  }
  return html + (options.end || '');
}
function section(title, id, options={}) {
  return `<section class="floating-block article-section ${options.className || ''}" id="${id}"><h2>${options.heading || title}</h2>${body(title, options)}</section>`;
}

const image = (name, alt, caption='', extra='') => `<figure class="floating-image article-image ${extra}"><img src="${name}-1200.webp" srcset="${name}-320.webp 320w, ${name}-1200.webp 1200w" sizes="(max-width:760px) calc(100vw - 32px), 640px" alt="${esc(alt)}" loading="lazy">${caption ? `<figcaption>${caption}</figcaption>` : ''}</figure>`;
const legacyImage = (full, small, alt, caption='', extra='') => `<figure class="floating-image article-image ${extra}"><img src="${full}" srcset="${small} 320w, ${full} 1200w" sizes="(max-width:760px) calc(100vw - 32px), 640px" alt="${esc(alt)}" loading="lazy">${caption ? `<figcaption>${caption}</figcaption>` : ''}</figure>`;
const jpgImage = (name, alt, caption='', extra='') => `<figure class="floating-image article-image ${extra}"><img src="img/uk-electronic/${name}-1200.jpg" srcset="img/uk-electronic/${name}-480.jpg 480w, img/uk-electronic/${name}-1200.jpg 1200w" sizes="(max-width:760px) calc(100vw - 32px), 640px" alt="${esc(alt)}" loading="lazy">${caption ? `<figcaption>${caption}</figcaption>` : ''}</figure>`;
const spotify = (type, id, title, copy) => `<aside class="floating-inset spotify-feature"><div><p class="article-kicker">Listen in context</p><h3>${title}</h3><p>${copy}</p></div><iframe title="${esc(title)} on Spotify" src="https://open.spotify.com/embed/${type}/${id}?utm_source=generator&theme=0" width="100%" height="152" loading="lazy" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe></aside>`;
const soundcloud = `<aside class="floating-inset soundcloud-feature"><p class="article-kicker">A contemporary route by thecatrave</p><h3>I Like to Smoke in Silence After Raves</h3><p>This set belongs here because it shows how breaks now move between garage, bass music, techno and rave instead of living inside one sealed revival.</p><iframe title="I Like to Smoke in Silence After Raves by thecatrave on SoundCloud" width="100%" height="166" scrolling="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/thecatrave/i-like-to-smoke-in-silence-after-raves&amp;color=%23ff5a36&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true" loading="lazy"></iframe></aside>`;

const mediaImage = ({src, width, height, alt, caption, extra=''}) => `<figure class="floating-image article-image ${extra}"><img src="${src}" width="${width}" height="${height}" sizes="(max-width:760px) calc(100vw - 32px), 640px" alt="${esc(alt)}" loading="lazy" decoding="async">${caption ? `<figcaption>${caption}</figcaption>` : ''}</figure>`;
const trackEmbed = track => {
  const title = `${track.artist} — ${track.title}`;
  if (track.embed.type === 'spotify') return `<iframe class="track-embed spotify-embed" title="${esc(title)} on Spotify" src="https://open.spotify.com/embed/track/${track.embed.id}?utm_source=generator&theme=0" width="100%" height="152" loading="lazy" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`;
  if (track.embed.type === 'spotify-playlist') return `<iframe class="track-embed spotify-embed" title="${esc(title)} in a Spotify listening set" src="https://open.spotify.com/embed/playlist/${track.embed.id}?utm_source=generator&theme=0" width="100%" height="152" loading="lazy" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`;
  if (track.embed.type === 'soundcloud') return `<iframe class="track-embed soundcloud-embed" title="${esc(title)} on SoundCloud" width="100%" height="166" scrolling="no" allow="autoplay" loading="lazy" src="https://w.soundcloud.com/player/?url=${track.embed.url}&amp;color=%23ff5a36&amp;auto_play=false&amp;hide_related=true&amp;show_comments=false&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=false"></iframe>`;
  if (track.embed.type === 'bandcamp') return `<iframe class="track-embed bandcamp-embed" title="${esc(title)} on Bandcamp" src="https://bandcamp.com/EmbeddedPlayer/track=${track.embed.id}/size=large/bgcol=f1eee7/linkcol=ff5a36/tracklist=false/artwork=small/transparent=true/" seamless loading="lazy"><a href="${track.embed.url}">${esc(title)}</a></iframe>`;
  return `<div class="track-video"><iframe class="track-embed youtube-embed" title="${esc(title)} on YouTube" src="https://www.youtube-nocookie.com/embed/${track.embed.id}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>`;
};
const trackGroup = (trackNumbers, label, intro, tone='cyan') => {
  const selected = trackNumbers.map(number => tracks[number - 1]);
  const id = `listen-${slug(label)}`;
  return `<aside class="context-listening listening-${tone}" aria-labelledby="${id}"><div class="context-listening-intro"><p class="article-kicker">Essential listening</p><h3 id="${id}">${label}</h3><p>${intro}</p></div><div class="context-track-list">${selected.map(track => `<article class="track-entry" id="${track.anchor}"><div class="track-count"><time>${track.year}</time></div><div class="track-copy"><h4><span>${esc(track.artist)}</span>${esc(track.title)}</h4><p>${esc(track.note)}</p></div><div class="track-player">${trackEmbed(track)}</div></article>`).join('')}</div></aside>`;
};

const bandcampSupport = `<aside class="floating-inset article-cta"><div class="article-cta-copy"><h3>Support my music on Bandcamp.</h3><p>These releases sit closest to the breakbeat story in this article. Buying one supports my work directly.</p><a class="button primary" href="https://thecatrave.bandcamp.com" target="_blank" rel="noopener noreferrer">Support ↗</a></div><div class="article-cta-tracks"><iframe class="bandcamp-embed" title="thecatrave — Protect Ya Breaks on Bandcamp" src="https://bandcamp.com/EmbeddedPlayer/track=3822639635/size=large/bgcol=f1eee7/linkcol=ff5a36/tracklist=false/artwork=small/transparent=true/" seamless loading="lazy"><a href="https://thecatrave.bandcamp.com/track/protect-ya-breaks">Protect Ya Breaks by thecatrave</a></iframe><iframe class="bandcamp-embed" title="thecatrave — Berlin Race 1909 on Bandcamp" src="https://bandcamp.com/EmbeddedPlayer/track=3192532299/size=large/bgcol=f1eee7/linkcol=ff5a36/tracklist=false/artwork=small/transparent=true/" seamless loading="lazy"><a href="https://thecatrave.bandcamp.com/track/berlin-race-1909">Berlin Race 1909 by thecatrave</a></iframe><iframe class="bandcamp-embed" title="thecatrave — Mylène Farmer Dégénération remix on Bandcamp" src="https://bandcamp.com/EmbeddedPlayer/track=467727105/size=large/bgcol=f1eee7/linkcol=ff5a36/tracklist=false/artwork=small/transparent=true/" seamless loading="lazy"><a href="https://thecatrave.bandcamp.com/track/myl-ne-farmer-d-g-n-ration-electronica-breaks-dubstep-remix">Mylène Farmer — Dégénération remix by thecatrave</a></iframe></div></aside>`;

const editorialMedia = {
  wildStyle: mediaImage({src:'img/breakbeat/rbma-wild-style-mural.jpg',width:1400,height:952,alt:'Charlie Ahearn and Fab Five Freddy standing beside the Wild Style mural in 1983',caption:'Charlie Ahearn and Fab Five Freddy beside the Wild Style mural, 1983.',extra:'archive-image wide-archive-image people-image competitor-media'}),
  hipHopPioneers: mediaImage({src:'img/breakbeat/musicradar-hip-hop-pioneers.jpg',width:1200,height:835,alt:'Grandmaster Flash, DJ Kool Herc, Afrika Bambaataa and Chuck D together at Columbia University',caption:'Grandmaster Flash, DJ Kool Herc, Afrika Bambaataa and Chuck D together at Columbia University’s Rap Summit.',extra:'archive-image wide-archive-image people-image competitor-media'}),
  ultimateBreaks: mediaImage({src:'img/breakbeat/ultimate-breaks-and-beats-cutout.svg',width:1072,height:1020,alt:'Original Ultimate Breaks and Beats compilation record photographed in its sleeve',caption:'Ultimate Breaks & Beats turned hard-to-find drum passages into a physical library for DJs and producers.',extra:'archive-image artifact-cutout-image record-artifact'}),
  sp1200: mediaImage({src:'img/breakbeat/musicradar-sp1200-floppies.jpg',width:1200,height:675,alt:'Floppy disks resting on an E-mu SP-1200 sampler',caption:'The SP-1200 stored samples and sequences on floppy disks, making limited memory part of the workflow.',extra:'archive-image wide-archive-image competitor-media'}),
  prodigy: mediaImage({src:'img/breakbeat/musicradar-prodigy-1992.jpg',width:1200,height:675,alt:'The Prodigy photographed as a trio in Essex in 1992',caption:'The Prodigy in Essex, 1992, as breakbeat hardcore was moving from rave into a wider public culture.',extra:'archive-image wide-archive-image people-image competitor-media'}),
  pjSmiley: mediaImage({src:'img/breakbeat/shut-up-and-dance-pj-smiley.jpg',width:1400,height:933,alt:'Black and white portrait of PJ and Smiley from Shut Up and Dance',caption:'PJ and Smiley connected Hackney sound-system culture, hip-hop production and the emerging rave scene.',extra:'archive-image pj-smiley-image people-image'}),
  djIcey: mediaImage({src:'img/breakbeat/dj-icey-flyer-cutout.svg',width:635,height:560,alt:'Archival DJ Icey Club 600 North event flyer',caption:'A DJ Icey and Zone Records flyer from Florida’s regional club circuit.',extra:'archive-image artifact-cutout-image'}),
  cordoba: mediaImage({src:'img/breakbeat/cordoba-breakbeat-flyer.jpg',width:1052,height:1500,alt:'Break Beat Nation event flyer from Córdoba in 2001',caption:'Break Beat Nation advertising a multi-night programme in Córdoba, 2001.',extra:'archive-image portrait-image'}),
  andalusia: mediaImage({src:'img/breakbeat/andalusia-rave-crowd.jpg',width:1800,height:1175,alt:'Crowd dancing at an archival Andalusian breakbeat rave',caption:'An Andalusian breakbeat crowd before phones became part of the dance floor.',extra:'archive-image wide-archive-image people-image'}),
  chemicalBrothers: mediaImage({src:'img/breakbeat/musicradar-chemical-brothers.jpg',width:1400,height:924,alt:'The Chemical Brothers performing live behind a large hardware setup',caption:'The Chemical Brothers performing live as big beat moved broken drums onto festival stages.',extra:'archive-image wide-archive-image people-image competitor-media'}),
  plumpDjs: mediaImage({src:'img/breakbeat/plump-djs-electric-disco.png',width:1200,height:1200,alt:'Plump DJs Electric Disco and Plumpy Chunks Finger Lickin record sleeve',caption:'Finger Lickin’ turned nu-skool breaks into a recognisable club and record-sleeve language.',extra:'archive-image square-image'})
};

function breakbeatMap() {
  const node = (x,y,w,title,date,klass='') => `<g class="map-node ${klass}" tabindex="0"><rect x="${x}" y="${y}" width="${w}" height="60" rx="2"/><text x="${x+12}" y="${y+24}"><tspan>${title}</tspan><tspan class="map-date" x="${x+12}" dy="20">${date}</tspan></text></g>`;
  return `<section class="floating-block article-section map-section tone-cyan" id="history-map"><h2>How breakbeat travelled and changed.</h2><p>The map separates parallel scenes instead of pretending every branch followed one British timeline. Lines show strong historical connections, not ownership.</p><figure class="genre-map breakbeat-map"><svg viewBox="0 0 1040 470" role="img" aria-labelledby="bb-map-title bb-map-desc"><title id="bb-map-title">Breakbeat history map</title><desc id="bb-map-desc">A map connecting funk breaks and Bronx hip-hop to British rave, Florida, West Coast and Andalusian scenes, followed by big beat, nu-skool breaks and contemporary club music.</desc><g class="map-columns"><text x="20" y="28">ROOTS</text><text x="220" y="28">LOCAL ROUTES</text><text x="470" y="28">1990s BRANCHES</text><text x="730" y="28">2000s → NOW</text></g><g class="map-links"><path d="M180 116 C205 116 195 100 220 100"/><path d="M180 230 C205 230 195 100 220 100"/><path d="M180 230 C205 230 195 190 220 190"/><path d="M180 230 C205 230 195 280 220 280"/><path d="M180 230 C205 230 195 370 220 370"/><path d="M410 100 C440 100 440 100 470 100"/><path d="M410 100 C440 100 440 190 470 190"/><path d="M410 190 C440 190 440 280 470 280"/><path d="M410 280 C440 280 440 370 470 370"/><path d="M410 370 C550 370 590 280 730 280"/><path d="M660 100 C695 100 695 100 730 100"/><path d="M660 190 C695 190 695 190 730 190"/><path d="M660 280 C695 280 695 280 730 280"/><path d="M660 370 C695 370 695 370 730 370"/></g>${node(20,86,160,'Funk & soul breaks','1960s–70s')}${node(20,200,160,'Bronx DJ method','1970s→')}${node(220,70,190,'British rave','1988–92')}${node(220,160,190,'Florida / Orlando','early 1990s→')}${node(220,250,190,'US acid / West Coast','1990s')}${node(220,340,190,'Andalusia','1992–2002')}${node(470,70,190,'Hardcore → jungle','1990s')}${node(470,160,190,'Big beat','mid–late 1990s')}${node(470,250,190,'Nu-skool breaks','late 1990s–2000s')}${node(470,340,190,'Acid / progressive','1990s–2000s')}${node(730,70,280,'Jungle & D&B','living distinct scenes')}${node(730,160,280,'Dedicated breaks circuit','2000s; later contracts')}${node(730,250,280,'Regional continuities','Florida / Andalusia')}${node(730,340,280,'Contemporary continuum','electro / UKG / techno / bass')}</svg><ol class="genre-map-mobile"><li><span>1960s–70s</span><strong>Recorded breaks become DJ material</strong><p>Funk and soul drum passages meet Bronx turntable practice.</p></li><li><span>1988–2002</span><strong>Several local routes form</strong><p>British rave, central Florida, West Coast clubs and Andalusia organise the same rhythmic idea differently.</p></li><li><span>1990s–2000s</span><strong>Branches become named scenes</strong><p>Hardcore, jungle, big beat, acid, progressive and nu-skool breaks overlap without becoming one taxonomy.</p></li><li><span>Today</span><strong>The scene label narrows; the language spreads</strong><p>Dedicated breaks continue while broken drums circulate through electro, garage, techno, jungle and bass music.</p></li></ol><figcaption>Dates mark emergence and peak visibility, not disappearance.</figcaption></figure></section>`;
}

const faqTitles = ['What is breakbeat music?','Is breakbeat a genre or a rhythm?','What is the difference between breakbeat and breaks?','What BPM is breakbeat?','Is breakbeat the same as drum and bass?','Is jungle a type of breakbeat?','What is the difference between breakbeat and big beat?','Who are the best-known breakbeat artists?','Is breakbeat still being made today?'];
const faq = faqTitles.map((title,index)=>`<details${index===0?' open':''}><summary>${title}</summary>${subsectionBody('Frequently Asked Questions',title)}</details>`).join('');
const description = 'What is breakbeat music? Trace its funk and hip-hop roots through UK rave, Florida and Spanish scenes, big beat, nu-skool breaks and today.';
const title = 'What Is Breakbeat? Genre, History, Artists & Styles';
const readingMinutes = Math.max(1, Math.round(source.replace(/<[^>]+>|https?:\/\/\S+|[#*|`]/g, ' ').trim().split(/\s+/).length / 225));
const structured = {'@context':'https://schema.org','@type':'Article',headline:'What Is Breakbeat? A Guide to the Genre, History and Styles',description,datePublished:'2025-04-06',dateModified:'2026-08-30',mainEntityOfPage:'https://thecatrave.com/breakbeat-guide',image:'https://thecatrave.com/img/breakbeat/plump-djs-electric-disco.png',author:{'@type':'Person',name:'thecatrave','url':'https://thecatrave.com/'},publisher:{'@type':'Organization',name:'thecatrave',url:'https://thecatrave.com/'},inLanguage:'en-GB'};
const faqStructured = {'@context':'https://schema.org','@type':'FAQPage',mainEntity:faqTitles.map(name=>({'@type':'Question',name,acceptedAnswer:{'@type':'Answer',text:subsectionNodes('Frequently Asked Questions',name).filter(n=>n.type==='p').map(n=>n.text).join(' ')}}))};
const breadcrumbStructured = {'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Home',item:'https://thecatrave.com/'},{'@type':'ListItem',position:2,name:'Breakbeat guide',item:'https://thecatrave.com/breakbeat-guide'}]};

const header = `<header class="site-header article-site-header"><a class="wordmark" href="/" aria-label="thecatrave home">thecatrave<span>*</span></a><nav class="header-socials" aria-label="Listen and follow"><a href="https://soundcloud.com/thecatrave" target="_blank" rel="noopener noreferrer" aria-label="thecatrave on SoundCloud"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M1.5 14.1v2.8M4 12.8v5.4M6.5 11.7v7.1M9 9.2v9.6M11.5 7.4v11.4M14 9.1v9.7h4.5a4 4 0 0 0 .2-8 5.6 5.6 0 0 0-4.7-2.6"/></svg></a><a href="https://thecatrave.bandcamp.com" target="_blank" rel="noopener noreferrer" aria-label="thecatrave on Bandcamp"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.1 5.5h14.4l-4.6 13H2.5l4.6-13Z"/></svg></a><a href="https://open.spotify.com/artist/0Enu90TUHq8MQBz5WO6Ki0" target="_blank" rel="noopener noreferrer" aria-label="thecatrave on Spotify"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path class="spotify-waves" d="M6.7 9.3c3.8-1 7.6-.7 10.9 1M7.4 12.4c3.2-.7 6.6-.4 9.4.9M8 15.2c2.7-.5 5.4-.2 7.9.7"/></svg></a><a href="https://instagram.com/thecatrave" target="_blank" rel="noopener noreferrer" aria-label="thecatrave on Instagram"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle class="instagram-dot" cx="17.4" cy="6.8" r="1"/></svg></a></nav></header>`;

const page = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title}</title><meta name="description" content="${description}"><meta name="robots" content="index,follow,max-image-preview:large"><link rel="canonical" href="https://thecatrave.com/breakbeat-guide"><link rel="icon" type="image/png" sizes="1024x1024" href="/favicon.png"><link rel="apple-touch-icon" href="/favicon.png"><meta property="og:type" content="article"><meta property="og:site_name" content="thecatrave"><meta property="og:title" content="${title}"><meta property="og:description" content="${description}"><meta property="og:url" content="https://thecatrave.com/breakbeat-guide"><meta property="og:image" content="https://thecatrave.com/img/breakbeat/plump-djs-electric-disco.png"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${title}"><meta name="twitter:description" content="${description}"><meta name="twitter:image" content="https://thecatrave.com/img/breakbeat/plump-djs-electric-disco.png"><link rel="preconnect" href="https://api.fontshare.com"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&amp;display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&amp;display=swap" rel="stylesheet"><link rel="stylesheet" href="thecatrave-home.css"><link rel="stylesheet" href="thecatrave-article.css"><script type="application/ld+json">${JSON.stringify(structured)}</script><script type="application/ld+json">${JSON.stringify(faqStructured)}</script></head><body class="article-page breakbeat-page"><a class="skip-link" href="#main-content">Skip to content</a>${header}<main id="main-content"><article><header class="article-hero"><p class="article-kicker">Breakbeat music guide</p><h1>What Is Breakbeat? A Guide to the Genre, History and Styles</h1><p class="article-deck">From funk breaks and Bronx hip-hop to British rave, Florida, Andalusia, big beat, nu-skool and the broken club music being made now.</p><nav class="article-toc" id="contents" aria-label="Contents"><h2>Contents</h2><ol><li><a href="#definition">Rhythm or genre?</a></li><li><a href="#origins">Funk, hip-hop and samplers</a></li><li><a href="#history-map">History map</a></li><li><a href="#club-history">Regional club histories</a></li><li><a href="#styles">Styles and related genres</a></li><li><a href="#comparison">Genre comparison</a></li><li><a href="#today">Breakbeat today</a></li><li><a href="#faq">FAQ</a></li><li><a href="#sources">Sources</a></li></ol></nav></header>
<section class="floating-block article-section article-intro">${body('What Is Breakbeat? A Guide to the Genre, History and Styles')}${mediaImage({src:'img/breakbeat/akai-s950-cutout.png',width:2172,height:724,alt:'Akai S950 rack sampler isolated on a transparent background',caption:'The S950 made detailed break editing possible with a tiny amount of memory and a very physical workflow.',extra:'feature-image cutout-image sampler-hero'})}</section>
${section('Is Breakbeat a Rhythm or a Genre?','definition')}
${section('Where Did Breakbeat Come From?','origins',{
  beforeHeading:{
    'Hip-hop DJs turn the break into a method':trackGroup([1,2,3,4],'The breaks before the genre','Hear the source records as performances first: each break carries a different human feel before later producers cut it apart.','yellow')
  },
  afterParagraph:{
    'These records are not early breakbeat tracks':editorialMedia.wildStyle,
    "Kool Herc's use of two copies":editorialMedia.hipHopPioneers,
    'Hip-hop producers carried the same logic':editorialMedia.ultimateBreaks,
    'Machines from Akai and E-mu':editorialMedia.sp1200
  }
})}
${breakbeatMap()}
${section('How Breakbeat Became Club Music','club-history',{
  className:'history-section',
  beforeHeading:{
    'Pirate radio, record shops and dubplates':trackGroup([5,6,7,8,9],'British rave starts to fracture','These records show breakbeat hardcore moving from fast UK hip-hop into chart rave, darker pressure and ragga crossover.','cyan'),
    'Acid, progressive and West Coast breaks widen the American map':trackGroup([13],'Florida becomes its own scene','DJ Icey’s production makes the local mixture of electro, Miami bass and rolling breaks audible.','coral'),
    'Andalusia turns breakbeat into mass regional culture':trackGroup([11,12],'Acid and West Coast routes','One track enlarges acid breakbeat; the other turns towards electro and the American West Coast.','yellow'),
    'Nu-skool breaks builds a dedicated circuit':trackGroup([10],'Breaks reach crossover scale','Chemical Beats shows how acid repetition and hip-hop-sized drums could move from clubs towards festival-scale production.','coral'),
    'Why the dedicated breaks circuit became less visible':trackGroup([14,15,16],'Nu-skool becomes a dedicated circuit','Progressive scale, sharpened edits and UK garage swing show how wide the early-2000s breaks ecosystem became.','cyan')
  },
  afterParagraph:{
    'Shut Up and Dance were crucial':editorialMedia.prodigy,
    'By 1992 and 1993':editorialMedia.pjSmiley,
    'The history was larger than one artist':editorialMedia.djIcey,
    "One of breakbeat's most important regional histories":editorialMedia.cordoba,
    'This was not merely a Spanish footnote':editorialMedia.andalusia,
    'The Chemical Brothers made breaks feel huge':editorialMedia.chemicalBrothers,
    'By the late 1990s and early 2000s':editorialMedia.plumpDjs
  }
})}
${section('Breakbeat Styles: Hardcore, Florida, Big Beat, Nu-Skool and More','styles',{className:'styles-section tone-yellow'})}
${section('Breakbeat vs Jungle, Drum and Bass, Big Beat and Broken Beat','comparison',{className:'comparison-section'})}
${section('Breakbeat Today','today',{className:'tone-coral',beforeHeading:{'Why breakbeat still travels between scenes':trackGroup([17,18,19,20,21],'Five contemporary routes','Rave memory, breakbeat techno, modern UK bass and progressive breaks show why the rhythm no longer needs one unified revival.','paper')},end:soundcloud})}
<section class="floating-block article-section faq-section" id="faq"><h2>Frequently asked questions.</h2>${faq}</section>
<aside class="floating-inset author-card author-card-filled" aria-labelledby="author-title"><div class="author-copy"><p class="article-kicker">About the author</p><h2 id="author-title">thecatrave</h2><p>Breakbeat, bass and rave DJ, producer and selector. Born in Eastern Europe, shaped by years in Berlin and Barcelona, and by raving around the world.</p></div><nav aria-label="Author links"><a href="https://soundcloud.com/thecatrave" target="_blank" rel="noopener noreferrer">SoundCloud ↗</a><a href="https://thecatrave.bandcamp.com" target="_blank" rel="noopener noreferrer">Bandcamp ↗</a><a href="https://open.spotify.com/artist/0Enu90TUHq8MQBz5WO6Ki0" target="_blank" rel="noopener noreferrer">Spotify ↗</a><a href="https://instagram.com/thecatrave" target="_blank" rel="noopener noreferrer">Instagram ↗</a></nav></aside>
<section class="floating-block article-section sources-section" id="sources"><h2>Sources.</h2>${body('Sources')}</section>${bandcampSupport}<section class="read-next" aria-labelledby="read-next-title"><p class="article-kicker">Continue reading</p><h2 id="read-next-title">Read next.</h2><div class="read-next-grid"><a href="/uk-electronic-music-evolution"><span>UK electronic music</span><strong>The Evolution of UK Electronic Music</strong><p>Acid house, bleep, jungle, garage, grime, dubstep and the scenes reshaping British club music.</p><b>Read article →</b></a><a href="/jungle-music-guide"><span>Jungle guide</span><strong>Jungle Music: From Roots to Revival</strong><p>Pirate radio, dubplates, MC energy and the global return of a distinctly Black British sound.</p><b>Read article →</b></a></div></section></article></main><footer class="site-footer article-footer"><nav class="footer-nav article-footer-nav" aria-label="Footer navigation"><div><p>Home</p><a href="/">thecatrave.com</a></div><div><p>Listen</p><a href="https://soundcloud.com/thecatrave" target="_blank" rel="noopener noreferrer">SoundCloud ↗</a><a href="https://thecatrave.bandcamp.com" target="_blank" rel="noopener noreferrer">Bandcamp ↗</a><a href="https://open.spotify.com/artist/0Enu90TUHq8MQBz5WO6Ki0" target="_blank" rel="noopener noreferrer">Spotify ↗</a></div><div><p>Follow</p><a href="https://instagram.com/thecatrave" target="_blank" rel="noopener noreferrer">Instagram ↗</a></div></nav><div class="footer-bottom"><p>© 2026 thecatrave</p><a href="#main-content">Back to top ↑</a></div></footer><script async src="https://www.googletagmanager.com/gtag/js?id=G-0WW1QS0DW4"></script><script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-0WW1QS0DW4');</script></body></html>`;

const preservedPage = page
  .replace(
    '</head>',
    `<script type="application/ld+json">${JSON.stringify(breadcrumbStructured)}</script></head>`
  )
  .replace(
    '<meta property="og:type" content="article">',
    '<meta property="og:type" content="article"><meta property="article:published_time" content="2025-04-06"><meta property="article:modified_time" content="2026-08-30">'
  )
  .replace(
    '<h1>What Is Breakbeat? A Guide to the Genre, History and Styles</h1><p class="article-deck">',
    `<h1>What Is Breakbeat? A Guide to the Genre, History and Styles</h1><div class="article-meta"><p class="reading-time">~${readingMinutes} min read</p><p class="article-updated">Updated <time datetime="2026-08-30">30 August 2026</time></p></div><p class="subtitle article-deck">`
  )
  .replace(
    '</p><nav class="article-toc" id="contents"',
    `</p><aside class="article-summary article-listen" aria-label="Breakbeat definition"><strong>BREAKBEAT DEFINITION:</strong> ${inline(meta['Proposed direct answer'])}</aside><nav class="article-toc" id="contents"`
  )
  .replace(
    '<section class="floating-block article-section " id="definition">',
    '<a id="structure"></a><section class="floating-block article-section " id="definition">'
  )
  .replace(
    '<aside class="context-listening listening-yellow" aria-labelledby="listen-the-breaks-before-the-genre">',
    '<a id="tracks"></a><aside class="context-listening listening-yellow" aria-labelledby="listen-the-breaks-before-the-genre">'
  )
  .replace(
    '<section class="floating-block article-section history-section" id="club-history">',
    '<a id="pioneers"></a><section class="floating-block article-section history-section" id="club-history">'
  )
  .replace(
    '<h3>Pirate radio, record shops and dubplates</h3>',
    '<a id="forums"></a><a id="djs"></a><a id="culture"></a><h3>Pirate radio, record shops and dubplates</h3>'
  )
  .replace(
    '<section class="floating-block article-section sources-section" id="sources">',
    '<a id="academia"></a><section class="floating-block article-section sources-section" id="sources">'
  );

fs.writeFileSync('breakbeat-guide.html', preservedPage);
