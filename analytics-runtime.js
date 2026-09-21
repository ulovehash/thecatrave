(() => {
  const track = (name, params) => {
    try { if (window.gtag) window.gtag('event', name, params || {}); } catch {}
  };
  window.tcrTrack = track;
  if (window['ga-disable-G-0WW1QS0DW4']) return;

  // The owner's releases by the id each platform's player carries, so a play
  // is reported under one name whichever platform or page it came from. The
  // players' own titles differ ("Protect Ya Breaks on Bandcamp",
  // "thecatrave, Protect Ya Breaks on Bandcamp"), and GA4 would count those
  // as two tracks. Keep in step with ownTracks and ownSets in
  // site-components.mjs.
  const ownMusic = {
    'soundcloud:no-id': 'Protect Ya Breaks',
    'soundcloud:berlin-race-1909': 'Berlin Race 1909',
    'soundcloud:mylene-farmer-degeneration': 'Mylène Farmer, Dégénération (Remix)',
    'soundcloud:art-deco-jungle-remix': 'Lana Del Rey, Art Deco (Jungle Remix)',
    'soundcloud:60-hours-of-mistakes': '60 hours of mistakes',
    'soundcloud:look-1': 'look',
    'soundcloud:late-summer-cloud-dance': 'late summer cloud dance',
    'soundcloud:no-genre-no-problem': 'No Genre No Problem',
    'soundcloud:i-like-to-smoke-in-silence-after-raves': 'I Like to Smoke in Silence After Raves (mix)',
    'soundcloud:i-lost-so-many-weekends-raving-and-i-wanna-lose-some-more': 'I Lost So Many Weekends Raving (mix)',
    'bandcamp:3822639635': 'Protect Ya Breaks',
    'bandcamp:3192532299': 'Berlin Race 1909',
    'bandcamp:467727105': 'Mylène Farmer, Dégénération (Remix)',
    'bandcamp:3379956979': 'You So Ghetto (Lana Del Rey Jungle Remix)',
    'bandcamp:3330948631': '60 hours of mistakes',
    'bandcamp:419986633': 'look',
    'bandcamp:1930045743': 'No Genre No Problem',
    'spotify:1iq7tX1EWPR7INIjkxhGSu': 'Berlin Race 1909',
    'spotify:6qxmmgfWlT4yrWu60elEFZ': 'Protect Ya Breaks'
  };

  const playerKey = src => {
    let decoded = src;
    try { decoded = decodeURIComponent(src); } catch {}
    const soundcloud = decoded.match(/soundcloud\.com\/thecatrave\/([a-z0-9-]+)/i);
    if (soundcloud) return `soundcloud:${soundcloud[1].toLowerCase()}`;
    const bandcamp = decoded.match(/bandcamp\.com\/EmbeddedPlayer\/(?:.*\/)?track=(\d+)/);
    if (bandcamp) return `bandcamp:${bandcamp[1]}`;
    const spotify = decoded.match(/open\.spotify\.com\/embed\/(?:track|album|playlist|artist)\/([A-Za-z0-9]+)/);
    if (spotify) return `spotify:${spotify[1]}`;
    return '';
  };

  // Anyone else's player is reported under its own title, with the platform
  // wording taken off: "Der Klang der Familie" rather than "... on SoundCloud".
  const playerTrack = frame => {
    const src = frame.getAttribute('src') || frame.dataset.src || '';
    const known = ownMusic[playerKey(src)];
    const title = (frame.title || '')
      .replace(/\s+(?:release\s+)?on (?:SoundCloud|Spotify|Bandcamp|YouTube)$/i, '')
      .replace(/\s+in a Spotify listening set$/i, '')
      .replace(/\s+by thecatrave$/i, '')
      .replace(/^thecatrave,\s*/i, '')
      .trim();
    return {
      track_title: known || title || 'Untitled player',
      own_music: Boolean(known) || /thecatrave/i.test(src) || /thecatrave/i.test(frame.title || '')
    };
  };

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

  // Bandcamp and Spotify players offer no play event to a page that embeds
  // them. What a page can see is its own window losing focus to one of their
  // iframes, which is what happens when a reader clicks inside the player.
  // That is a click, not a confirmed play, so the events say player_click.
  // Counted once per player per page view.
  const clickedPlayers = new WeakSet();
  window.addEventListener('blur', () => {
    setTimeout(() => {
      const frame = document.activeElement;
      if (!frame || frame.tagName !== 'IFRAME' || clickedPlayers.has(frame)) return;
      const src = frame.getAttribute('src') || '';
      const platform = src.includes('bandcamp.com/EmbeddedPlayer') ? 'bandcamp'
        : src.includes('open.spotify.com/embed') ? 'spotify' : '';
      if (!platform) return;
      clickedPlayers.add(frame);
      track(`${platform}_player_click`, {
        page: location.pathname,
        platform,
        player_title: frame.title || `${platform} player`,
        placement: placement(frame),
        ...playerTrack(frame)
      });
    }, 0);
  });

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
        track('soundcloud_play', {
          page: location.pathname,
          platform: 'soundcloud',
          player_title: frame.title || 'SoundCloud player',
          placement: placement(frame),
          ...playerTrack(frame)
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
