(() => {
  const frames = [...document.querySelectorAll('iframe[data-src]')];
  if (!frames.length) return;

  const loadFrame = frame => {
    if (frame.dataset.mediaRequested === 'true') return;
    frame.dataset.mediaRequested = 'true';
    frame.addEventListener('load', () => {
      frame.dataset.mediaLoaded = 'true';
    }, {once:true});
    frame.src = frame.dataset.src;
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
  }, {rootMargin:'160px 0px'});

  frames.forEach(frame => observer.observe(frame));
})();
