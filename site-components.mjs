const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;');

const requireFields = (component, values) => {
  const missing = Object.entries(values).filter(([, value]) => value === undefined || value === null || value === '').map(([name]) => name);
  if (missing.length) throw new Error(`${component} requires: ${missing.join(', ')}`);
};

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

export function articleTableOfContents({items = [], title = 'Contents'} = {}) {
  const rows = items.map(item => {
    const href = item.href || `#${item.id}`;
    return `<li><a href="${escapeHtml(href)}">${escapeHtml(item.label)}</a></li>`;
  }).join('');
  return `<nav class="article-toc" id="contents" aria-label="${escapeHtml(title)}"><h2>${escapeHtml(title)}</h2><ol>${rows}</ol></nav>`;
}

export function articleHero({kicker, title, deck, readingTime, dateModified, dateLabel, summaryHtml = '', tocItems = []} = {}) {
  requireFields('articleHero', {kicker,title,deck});
  const meta = readingTime || dateModified
    ? `<div class="article-meta">${readingTime ? `<p class="reading-time">${escapeHtml(readingTime)}</p>` : ''}${dateModified ? `<p class="article-updated">Updated <time datetime="${escapeHtml(dateModified)}">${escapeHtml(dateLabel || dateModified)}</time></p>` : ''}</div>`
    : '';
  return `<header class="article-hero"><p class="article-kicker">${escapeHtml(kicker)}</p><h1>${escapeHtml(title)}</h1>${meta}<p class="subtitle article-deck">${escapeHtml(deck)}</p>${summaryHtml}${articleTableOfContents({items:tocItems})}</header>`;
}

export function articleSection({id = '', title, bodyHtml = '', kicker = '', className = ''} = {}) {
  const classes = ['floating-block', 'article-section', className].filter(Boolean).join(' ');
  return `<section class="${classes}"${id ? ` id="${escapeHtml(id)}"` : ''}>${kicker ? `<p class="era-years">${escapeHtml(kicker)}</p>` : ''}<h2>${escapeHtml(title)}</h2>${bodyHtml}</section>`;
}

export function articleFigure({src, srcset = '', sizes = '(max-width: 760px) calc(100vw - 32px), 640px', width, height, alt, caption = '', className = '', loading = 'lazy'} = {}) {
  requireFields('articleFigure', {src,alt});
  if (/\.(?:avif|jpe?g|png|webp)(?:$|\?)/i.test(src)) requireFields('articleFigure raster dimensions', {width,height});
  const classes = ['floating-image', 'article-image', className].filter(Boolean).join(' ');
  const dimensions = width && height ? ` width="${escapeHtml(width)}" height="${escapeHtml(height)}"` : '';
  return `<figure class="${classes}"><img src="${escapeHtml(src)}"${srcset ? ` srcset="${escapeHtml(srcset)}"` : ''} sizes="${escapeHtml(sizes)}"${dimensions} alt="${escapeHtml(alt)}" loading="${escapeHtml(loading)}" decoding="async">${caption ? `<figcaption>${caption}</figcaption>` : ''}</figure>`;
}

export function articleTable({headers = [], rows = [], className = ''} = {}) {
  const classes = ['genre-table', className].filter(Boolean).join(' ');
  const head = headers.map(cell => `<th scope="col">${cell}</th>`).join('');
  const body = rows.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('');
  return `<div class="genre-table-wrap" role="region" aria-label="Scrollable data table" tabindex="0"><table class="${classes}"><thead><tr>${head}</tr></thead><tbody>${body}</tbody></table></div>`;
}

export function articleFaq({items = [], title = 'Frequently asked questions.', id = 'faq', openFirst = true} = {}) {
  const questions = items.map((item, index) => `<details${openFirst && index === 0 ? ' open' : ''}><summary>${escapeHtml(item.question)}</summary>${item.answerHtml}</details>`).join('');
  return articleSection({id, title, bodyHtml:questions, className:'faq-section'});
}

export function articleSources({bodyHtml, title = 'Sources.', id = 'sources'} = {}) {
  return articleSection({id, title, bodyHtml, className:'sources-section'});
}

export function articlePage({title, description, canonical, ogImage, datePublished, dateModified, bodyClass = 'article-page', structuredData = [], articleHtml} = {}) {
  requireFields('articlePage', {title,description,canonical,ogImage,datePublished,dateModified,articleHtml});
  if (!/^https:\/\//.test(canonical) || !/^https:\/\//.test(ogImage)) throw new Error('articlePage canonical and ogImage must be absolute HTTPS URLs.');
  const articleTimes = `${datePublished ? `<meta property="article:published_time" content="${escapeHtml(datePublished)}">` : ''}${dateModified ? `<meta property="article:modified_time" content="${escapeHtml(dateModified)}">` : ''}`;
  const schemas = structuredData.filter(Boolean).map(data => `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`).join('');
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${escapeHtml(title)}</title><meta name="description" content="${escapeHtml(description)}"><meta name="robots" content="index,follow,max-image-preview:large"><link rel="canonical" href="${escapeHtml(canonical)}"><link rel="icon" type="image/png" sizes="1024x1024" href="/favicon.png"><link rel="apple-touch-icon" href="/favicon.png"><meta property="og:type" content="article">${articleTimes}<meta property="og:site_name" content="thecatrave"><meta property="og:title" content="${escapeHtml(title)}"><meta property="og:description" content="${escapeHtml(description)}"><meta property="og:url" content="${escapeHtml(canonical)}"><meta property="og:image" content="${escapeHtml(ogImage)}"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${escapeHtml(title)}"><meta name="twitter:description" content="${escapeHtml(description)}"><meta name="twitter:image" content="${escapeHtml(ogImage)}"><link rel="preconnect" href="https://api.fontshare.com"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&amp;display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&amp;display=swap" rel="stylesheet"><link rel="stylesheet" href="thecatrave-home.css"><link rel="stylesheet" href="thecatrave-article.css">${schemas}</head><body class="${escapeHtml(bodyClass)}"><a class="skip-link" href="#main-content">Skip to content</a>${siteHeader({variant:'article'})}<main id="main-content"><article>${articleHtml}</article></main>${articleFooter()}${analytics()}</body></html>`;
}

export function articleStructuredData({headline, description, canonical, image, datePublished, dateModified} = {}) {
  return {'@context':'https://schema.org','@type':'Article',headline,description,datePublished,dateModified,mainEntityOfPage:canonical,image,author:{'@type':'Person',name:'thecatrave',url:'https://thecatrave.com/'},publisher:{'@type':'Organization',name:'thecatrave',url:'https://thecatrave.com/'},inLanguage:'en-GB'};
}

export function breadcrumbStructuredData({name, canonical} = {}) {
  return {'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Home',item:'https://thecatrave.com/'},{'@type':'ListItem',position:2,name,item:canonical}]};
}

export function faqStructuredData({items = []} = {}) {
  return {'@context':'https://schema.org','@type':'FAQPage',mainEntity:items.map(item=>({'@type':'Question',name:item.question,acceptedAnswer:{'@type':'Answer',text:item.answer}}))};
}

export function articleListeningBand({platform = 'spotify', id, kicker, title, description, src, iframeTitle, fullBleed = false, tone = ''} = {}) {
  if (!['spotify', 'soundcloud'].includes(platform)) throw new Error(`Unsupported listening platform: ${platform}`);
  if (tone && !['paper', 'cyan', 'yellow', 'coral'].includes(tone)) throw new Error(`Unsupported listening tone: ${tone}`);
  const essentialListening = String(kicker).trim().toLowerCase() === 'essential listening';
  const useFullBleed = fullBleed || essentialListening;
  const classes = [
    `${platform}-feature`,
    'article-listening-feature',
    'article-media-band',
    useFullBleed ? 'article-media-band-full' : '',
    tone ? `article-media-band-${tone}` : ''
  ].filter(Boolean).join(' ');
  const player = platform === 'spotify'
    ? `<iframe class="article-embed spotify-inline-embed" src="${escapeHtml(src)}" width="100%" height="152" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" title="${escapeHtml(iframeTitle)}"></iframe>`
    : `<iframe class="article-embed soundcloud-inline-embed" src="${escapeHtml(src)}" title="${escapeHtml(iframeTitle)}" width="100%" height="166" scrolling="no" allow="autoplay" loading="lazy"></iframe>`;
  return `<aside class="${classes}" aria-labelledby="${escapeHtml(id)}"><div class="article-media-copy"><p class="article-kicker">${escapeHtml(kicker)}</p><h3 id="${escapeHtml(id)}">${escapeHtml(title)}</h3><p>${escapeHtml(description)}</p></div>${player}</aside>`;
}

export function articleTrackEmbed({platform, id = '', url = '', title} = {}) {
  const safeTitle = escapeHtml(title);
  if (platform === 'spotify' || platform === 'spotify-playlist') {
    const type = platform === 'spotify' ? 'track' : 'playlist';
    return `<iframe class="track-embed spotify-embed" title="${safeTitle}${platform === 'spotify' ? ' on Spotify' : ' in a Spotify listening set'}" src="https://open.spotify.com/embed/${type}/${escapeHtml(id)}?utm_source=generator&theme=0" width="100%" height="152" loading="lazy" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`;
  }
  if (platform === 'soundcloud') return `<iframe class="track-embed soundcloud-embed" title="${safeTitle} on SoundCloud" width="100%" height="166" scrolling="no" allow="autoplay" loading="lazy" src="https://w.soundcloud.com/player/?url=${escapeHtml(url)}&amp;color=%23ff5a36&amp;auto_play=false&amp;hide_related=true&amp;show_comments=false&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=false"></iframe>`;
  if (platform === 'bandcamp') return `<iframe class="track-embed bandcamp-embed" title="${safeTitle} on Bandcamp" src="https://bandcamp.com/EmbeddedPlayer/track=${escapeHtml(id)}/size=large/bgcol=f1eee7/linkcol=ff5a36/tracklist=false/artwork=small/transparent=true/" seamless loading="lazy"><a href="${escapeHtml(url)}">${safeTitle}</a></iframe>`;
  if (platform === 'youtube') return `<div class="track-video"><iframe class="track-embed youtube-embed" title="${safeTitle} on YouTube" src="https://www.youtube-nocookie.com/embed/${escapeHtml(id)}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>`;
  throw new Error(`Unsupported track platform: ${platform}`);
}

export function articleListeningCollection({id, title, description, tone = 'cyan', items = [], fullBleed = true} = {}) {
  if (!['paper', 'cyan', 'yellow', 'coral'].includes(tone)) throw new Error(`Unsupported listening collection tone: ${tone}`);
  const tracks = items.map(item => `<article class="track-entry"${item.anchor ? ` id="${escapeHtml(item.anchor)}"` : ''}><div class="track-count"><time>${escapeHtml(item.year)}</time></div><div class="track-copy"><h4><span>${escapeHtml(item.artist)}</span>${escapeHtml(item.title)}</h4><p>${escapeHtml(item.note)}</p></div><div class="track-player">${item.playerHtml}</div></article>`).join('');
  const classes = ['context-listening', fullBleed ? 'context-listening-full' : '', `listening-${tone}`].filter(Boolean).join(' ');
  return `<aside class="${classes}" aria-labelledby="${escapeHtml(id)}"><div class="context-listening-intro"><p class="article-kicker">Essential listening</p><h3 id="${escapeHtml(id)}">${escapeHtml(title)}</h3><p>${escapeHtml(description)}</p></div><div class="context-track-list">${tracks}</div></aside>`;
}

export function articleYoutubeEmbed({src, title} = {}) {
  return `<div class="classic-youtube-embed"><iframe src="${escapeHtml(src)}" title="${escapeHtml(title)}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen loading="lazy"></iframe></div>`;
}

export function articleVideoCard({youtubeId, genre, artist, title} = {}) {
  const label = `${artist} — ${title}`;
  return `<figure class="video-example"><div class="video-frame"><iframe src="https://www.youtube-nocookie.com/embed/${escapeHtml(youtubeId)}" title="${escapeHtml(label)}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div><figcaption><span>${escapeHtml(genre)}</span><strong>${escapeHtml(label)}</strong></figcaption></figure>`;
}

export function articleVideoCollection({items = [], description} = {}) {
  return `<aside class="listening-block listening-block-full"><div class="listening-intro"><p class="article-kicker">Essential listening</p><p>${escapeHtml(description)}</p></div><div class="video-grid">${items.join('')}</div></aside>`;
}

export function authorCard({filled = false} = {}) {
  const classes = `floating-inset author-card${filled ? ' author-card-filled' : ''}`;
  const portrait = '<figure class="author-portrait"><img src="img/thecatrave-author-800.jpg" srcset="img/thecatrave-author-400.jpg 400w, img/thecatrave-author-800.jpg 800w" sizes="(max-width: 760px) 112px, 160px" width="800" height="600" loading="lazy" alt="thecatrave as a child in front of an Eastern European apartment block"></figure>';
  const links = '<nav aria-label="Author links"><a href="https://soundcloud.com/thecatrave" target="_blank" rel="noopener noreferrer">SoundCloud ↗</a><a href="https://thecatrave.bandcamp.com" target="_blank" rel="noopener noreferrer">Bandcamp ↗</a><a href="https://open.spotify.com/artist/0Enu90TUHq8MQBz5WO6Ki0" target="_blank" rel="noopener noreferrer">Spotify ↗</a><a href="https://instagram.com/thecatrave" target="_blank" rel="noopener noreferrer">Instagram ↗</a></nav>';
  return `<aside class="${classes}" aria-labelledby="author-title"><div class="author-card-grid"><h2 id="author-title">Article by thecatrave</h2>${portrait}<p class="author-bio">Breakbeat, bass and rave DJ, producer and selector. Born in Eastern Europe, shaped by years in Berlin and Barcelona, and by raving around the world.</p>${links}</div></aside>`;
}

export function bandcampSupport({description, tracks = [], fullBleed = false} = {}) {
  const classes = `floating-inset article-cta${fullBleed ? ' article-cta-full' : ''}${tracks.length ? '' : ' article-cta-solo'}`;
  const copyInner = `<h3>Support my music on Bandcamp.</h3><p>${escapeHtml(description)}</p><a class="button primary" href="${siteLinks.bandcamp}" target="_blank" rel="noopener noreferrer">Support ↗</a>`;
  const players = tracks.map(track => `<iframe class="bandcamp-embed" title="${escapeHtml(track.title)} on Bandcamp" src="https://bandcamp.com/EmbeddedPlayer/track=${escapeHtml(track.id)}/size=large/bgcol=f1eee7/linkcol=ff5a36/tracklist=false/artwork=small/transparent=true/" seamless loading="lazy"><a href="${escapeHtml(track.url)}">${escapeHtml(track.linkText)}</a></iframe>`).join('');
  return `<aside class="${classes}"><div class="article-cta-copy">${copyInner}</div>${players ? `<div class="article-cta-tracks">${players}</div>` : ''}</aside>`;
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
