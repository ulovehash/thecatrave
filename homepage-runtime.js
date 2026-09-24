(() => {
  const frames = [...document.querySelectorAll('iframe[data-src]')];
  if (!frames.length) return;

  // Bandcamp's embed style (compact vs the full artwork/buy/share card) is
  // chosen by URL, not CSS, so a frame with a desktop variant picks its src
  // from the viewport at the moment it actually loads (owner, 2026-09-24).
  const wide = window.matchMedia('(min-width:48rem)');

  const loadFrame = frame => {
    if (frame.dataset.mediaRequested === 'true') return;
    frame.dataset.mediaRequested = 'true';
    frame.addEventListener('load', () => {
      frame.dataset.mediaLoaded = 'true';
    }, {once:true});
    frame.src = (wide.matches && frame.dataset.srcDesktop) || frame.dataset.src;
  };

  if (!('IntersectionObserver' in window)) {
    frames.forEach(loadFrame);
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      loadFrame(entry.target);
      observer.unobserve(entry.target);
    });
  }, {rootMargin:'40px 0px'});

  frames.forEach(frame => observer.observe(frame));
})();
