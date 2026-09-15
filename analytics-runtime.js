(() => {
  const track = (name, params) => {
    try { if (window.gtag) window.gtag('event', name, params || {}); } catch {}
  };
  window.tcrTrack = track;
  if (window['ga-disable-G-0WW1QS0DW4']) return;

  const placement = element => {
    if (element.closest('.article-cta, .bandcamp')) return 'bandcamp_cta';
    if (element.closest('.now-playing')) return 'now_playing';
    if (element.closest('.author-card')) return 'author';
    if (element.closest('.site-header')) return 'header';
    if (element.closest('.site-footer')) return 'footer';
    if (element.closest('.article-listening-feature, .context-listening, .listening-block')) return 'article_player';
    return 'content';
  };

  document.addEventListener('click', event => {
    const link = event.target && event.target.closest ? event.target.closest('a[href]') : null;
    if (!link) return;

    let url;
    try { url = new URL(link.href, location.href); } catch { return; }

    if (url.host === location.host && url.pathname.includes('selector') && !location.pathname.includes('selector')) {
      track('selector_opened', {from: location.pathname, placement: placement(link)});
      return;
    }

    const common = {from: location.pathname, placement: placement(link)};
    if (url.hostname === 'thecatrave.bandcamp.com') {
      track('bandcamp_click', {...common, destination: url.pathname || '/'});
    } else if (url.hostname === 'soundcloud.com' && url.pathname.startsWith('/thecatrave')) {
      track('soundcloud_click', {...common, destination: url.pathname});
    } else if (url.hostname === 'open.spotify.com' && url.pathname.includes('0Enu90TUHq8MQBz5WO6Ki0')) {
      track('spotify_click', {...common, destination: url.pathname});
    }
  }, true);

  document.addEventListener('DOMContentLoaded', () => {
    const article = document.querySelector('.article-page:not(.selector-page) article');
    if (article) {
      let activeSeconds = 0;
      let read = false;
      const checkRead = () => {
        if (read || document.hidden) return;
        activeSeconds += 1;
        const rect = article.getBoundingClientRect();
        const seen = (window.innerHeight - rect.top) / Math.max(1, rect.height);
        if (activeSeconds >= 45 && seen >= 0.5) {
          read = true;
          track('guide_read', {page: location.pathname});
          clearInterval(readTimer);
        }
      };
      const readTimer = setInterval(checkRead, 1000);
    }

    const frames = [...document.querySelectorAll(
      'iframe[src*="w.soundcloud.com/player"], iframe[data-src*="w.soundcloud.com/player"]'
    )];
    if (!frames.length) return;

    const played = new WeakSet();
    const bindFrame = frame => {
      if (!window.SC || !window.SC.Widget || frame.dataset.analyticsSoundcloud === 'true') return;
      const src = frame.getAttribute('src') || '';
      if (!src.includes('w.soundcloud.com/player')) return;
      frame.dataset.analyticsSoundcloud = 'true';
      const widget = window.SC.Widget(frame);
      widget.bind(window.SC.Widget.Events.PLAY, () => {
        if (played.has(frame)) return;
        played.add(frame);
        const srcValue = frame.getAttribute('src') || frame.dataset.src || '';
        track('soundcloud_play', {
          page: location.pathname,
          player_title: frame.title || 'SoundCloud player',
          placement: placement(frame),
          own_music: srcValue.includes('soundcloud.com%2Fthecatrave') || srcValue.includes('soundcloud.com/thecatrave')
        });
      });
    };

    frames.forEach(frame => frame.addEventListener('load', () => bindFrame(frame)));
    const api = document.createElement('script');
    api.src = 'https://w.soundcloud.com/player/api.js';
    api.async = true;
    api.addEventListener('load', () => frames.forEach(bindFrame));
    document.head.appendChild(api);
  });
})();
