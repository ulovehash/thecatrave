const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;');

export const siteLinks = {
  home: '/',
  soundcloud: 'https://soundcloud.com/thecatrave',
  bandcamp: 'https://thecatrave.bandcamp.com',
  spotify: 'https://open.spotify.com/artist/0Enu90TUHq8MQBz5WO6Ki0',
  instagram: 'https://instagram.com/thecatrave'
};

const socialIcons = {
  soundcloud: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M1.5 14.1v2.8M4 12.8v5.4M6.5 11.7v7.1M9 9.2v9.6M11.5 7.4v11.4M14 9.1v9.7h4.5a4 4 0 0 0 .2-8 5.6 5.6 0 0 0-4.7-2.6"/></svg>',
  bandcamp: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.1 5.5h14.4l-4.6 13H2.5l4.6-13Z"/></svg>',
  spotify: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path class="spotify-waves" d="M6.7 9.3c3.8-1 7.6-.7 10.9 1M7.4 12.4c3.2-.7 6.6-.4 9.4.9M8 15.2c2.7-.5 5.4-.2 7.9.7"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle class="instagram-dot" cx="17.4" cy="6.8" r="1"/></svg>'
};

export function socialLinks({icons = false, className = icons ? 'header-socials' : '', label = 'Listen and follow'} = {}) {
  const items = ['soundcloud', 'bandcamp', 'spotify', 'instagram'];
  const links = items.map(name => {
    const title = {soundcloud:'SoundCloud',bandcamp:'Bandcamp',spotify:'Spotify',instagram:'Instagram'}[name];
    const content = icons ? socialIcons[name] : `${title} ↗`;
    const aria = icons ? ` aria-label="thecatrave on ${title}"` : '';
    return `<a href="${siteLinks[name]}" target="_blank" rel="noopener noreferrer"${aria}>${content}</a>`;
  }).join('');
  return `<nav${className ? ` class="${className}"` : ''} aria-label="${escapeHtml(label)}">${links}</nav>`;
}

export function siteHeader({variant = 'article', navItems = []} = {}) {
  const classes = variant === 'article' ? 'site-header article-site-header' : 'site-header';
  const nav = navItems.length
    ? `<nav class="site-nav" aria-label="Primary navigation">${navItems.map(item => `<a${item.className ? ` class="${escapeHtml(item.className)}"` : ''} href="${escapeHtml(item.href)}">${escapeHtml(item.label)}</a>`).join('')}</nav>`
    : '';
  return `<header class="${classes}"><a class="wordmark" href="/" aria-label="thecatrave home">thecatrave<span>*</span></a>${nav}${socialLinks({icons:true})}</header>`;
}

export function nowPlayingBanner({title, meta, href, linkLabel = 'Play ↗'} = {}) {
  return `<aside class="now-playing" aria-label="Featured DJ mix"><span><i></i> Now playing</span><strong>${escapeHtml(title)}</strong><small>${escapeHtml(meta)}</small><a href="${escapeHtml(href)}" target="_blank" rel="noopener noreferrer">${escapeHtml(linkLabel)}</a></aside>`;
}

export function infoBanner({label, bodyHtml, ariaLabel = label, className = ''} = {}) {
  const classes = [className, 'article-listen'].filter(Boolean).join(' ');
  return `<aside class="${classes}" aria-label="${escapeHtml(ariaLabel)}"><strong>${escapeHtml(label)}:</strong> ${bodyHtml}</aside>`;
}

export function articleListeningBand({platform = 'spotify', id, kicker, title, description, src, iframeTitle} = {}) {
  if (!['spotify', 'soundcloud'].includes(platform)) throw new Error(`Unsupported listening platform: ${platform}`);
  const player = platform === 'spotify'
    ? `<iframe class="article-embed spotify-inline-embed" src="${escapeHtml(src)}" width="100%" height="152" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" title="${escapeHtml(iframeTitle)}"></iframe>`
    : `<iframe src="${escapeHtml(src)}" title="${escapeHtml(iframeTitle)}" width="100%" height="166" scrolling="no" allow="autoplay" loading="lazy"></iframe>`;
  return `<aside class="${platform}-feature article-listening-feature article-media-band" aria-labelledby="${escapeHtml(id)}"><div class="article-media-copy"><p class="article-kicker">${escapeHtml(kicker)}</p><h3 id="${escapeHtml(id)}">${escapeHtml(title)}</h3><p>${escapeHtml(description)}</p></div>${player}</aside>`;
}

export function articleYoutubeEmbed({src, title} = {}) {
  return `<div class="classic-youtube-embed"><iframe src="${escapeHtml(src)}" title="${escapeHtml(title)}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen loading="lazy"></iframe></div>`;
}

export function authorCard({filled = false} = {}) {
  const classes = `floating-inset author-card${filled ? ' author-card-filled' : ''}`;
  const copy = '<p class="article-kicker">About the author</p><h2 id="author-title">thecatrave</h2><p>Breakbeat, bass and rave DJ, producer and selector. Born in Eastern Europe, shaped by years in Berlin and Barcelona, and by raving around the world.</p>';
  const links = '<nav aria-label="Author links"><a href="https://soundcloud.com/thecatrave" target="_blank" rel="noopener noreferrer">SoundCloud ↗</a><a href="https://thecatrave.bandcamp.com" target="_blank" rel="noopener noreferrer">Bandcamp ↗</a><a href="https://open.spotify.com/artist/0Enu90TUHq8MQBz5WO6Ki0" target="_blank" rel="noopener noreferrer">Spotify ↗</a><a href="https://instagram.com/thecatrave" target="_blank" rel="noopener noreferrer">Instagram ↗</a></nav>';
  return filled
    ? `<aside class="${classes}" aria-labelledby="author-title"><div class="author-copy">${copy}</div>${links}</aside>`
    : `<aside class="${classes}" aria-labelledby="author-title">${copy}${links}</aside>`;
}

export function bandcampSupport({description, tracks = []} = {}) {
  const copyInner = `<h3>Support my music on Bandcamp.</h3><p>${escapeHtml(description)}</p><a class="button primary" href="${siteLinks.bandcamp}" target="_blank" rel="noopener noreferrer">Support ↗</a>`;
  const players = tracks.map(track => `<iframe class="bandcamp-embed" title="${escapeHtml(track.title)} on Bandcamp" src="https://bandcamp.com/EmbeddedPlayer/track=${escapeHtml(track.id)}/size=large/bgcol=f1eee7/linkcol=ff5a36/tracklist=false/artwork=small/transparent=true/" seamless loading="lazy"><a href="${escapeHtml(track.url)}">${escapeHtml(track.linkText)}</a></iframe>`).join('');
  return `<aside class="floating-inset article-cta">${players ? `<div class="article-cta-copy">${copyInner}</div><div class="article-cta-tracks">${players}</div>` : copyInner}</aside>`;
}

export function readNext({items} = {}) {
  const cards = items.map(item => `<a href="${escapeHtml(item.href)}"><span>${escapeHtml(item.label)}</span><strong>${escapeHtml(item.title)}</strong><p>${escapeHtml(item.description)}</p><b>Read article →</b></a>`).join('');
  return `<section class="read-next" aria-labelledby="read-next-title"><p class="article-kicker">Continue reading</p><h2 id="read-next-title">Read next.</h2><div class="read-next-grid">${cards}</div></section>`;
}

export function articleFooter() {
  return `<footer class="site-footer article-footer"><nav class="footer-nav article-footer-nav" aria-label="Footer navigation"><div><p>Home</p><a href="/">thecatrave.com</a></div><div><p>Listen</p><a href="${siteLinks.soundcloud}" target="_blank" rel="noopener noreferrer">SoundCloud ↗</a><a href="${siteLinks.bandcamp}" target="_blank" rel="noopener noreferrer">Bandcamp ↗</a><a href="${siteLinks.spotify}" target="_blank" rel="noopener noreferrer">Spotify ↗</a></div><div><p>Follow</p><a href="${siteLinks.instagram}" target="_blank" rel="noopener noreferrer">Instagram ↗</a></div></nav><div class="footer-bottom"><p>© 2026 thecatrave</p><a href="#main-content">Back to top ↑</a></div></footer>`;
}

export function homeFooter() {
  return `<footer class="site-footer"><div class="footer-top"><a class="footer-wordmark" href="/">thecatrave*</a><p>Handmade dance music.</p></div><nav class="footer-nav" aria-label="Footer navigation"><div><p>Explore</p><a href="#music">Music</a><a href="#articles">Articles</a></div><div><p>Listen</p><a href="${siteLinks.soundcloud}" target="_blank" rel="noopener noreferrer">SoundCloud ↗</a><a href="${siteLinks.bandcamp}" target="_blank" rel="noopener noreferrer">Bandcamp ↗</a><a href="${siteLinks.spotify}" target="_blank" rel="noopener noreferrer">Spotify ↗</a></div><div><p>Follow</p><a href="${siteLinks.instagram}" target="_blank" rel="noopener noreferrer">Instagram ↗</a></div></nav><div class="footer-bottom"><p>© 2026 thecatrave</p><p>Handmade dance music</p><a href="#main-content">Back to top ↑</a></div></footer>`;
}

export function analytics() {
  return '<script async src="https://www.googletagmanager.com/gtag/js?id=G-0WW1QS0DW4"></script><script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag(\'js\',new Date());gtag(\'config\',\'G-0WW1QS0DW4\');</script>';
}
