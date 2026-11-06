// The "Add to home screen" button on the Selector.
//
// Every device, never inside the installed app itself. Two paths:
//   - Chrome, Edge, Samsung Internet (phone or desktop) hand the page a
//     `beforeinstallprompt` event; the button replays it, so the browser's own
//     install sheet opens in one tap.
//   - Safari on iPhone and iPad has no such event and no way for a page to add
//     itself. The button opens a one-line instruction instead (Share, then Add
//     to Home Screen). Other browsers get the same with their menu wording.
// Both report a plain GA event, `home_screen_add`, with how it was offered;
// `appinstalled` reports `home_screen_installed`. Neither is a key event.
(() => {
  const wrap = document.getElementById('sel-install');
  const button = document.getElementById('sel-install-btn');
  const tip = document.getElementById('sel-install-tip');
  if (!wrap || !button || !tip) return;

  const track = (name, params) => { try { if (window.gtag) window.gtag('event', name, params || {}); } catch {} };
  const scope = location.pathname.replace(/\/$/, '').replace(/\.html$/, '') || '/selector';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/selector-sw.js', { scope }).catch(() => {});
  }

  const installed = window.matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;
  if (installed) return;

  const ua = navigator.userAgent;
  const ios = /iPhone|iPad|iPod/.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1);

  // Shown at once on every device, so it never pops in late and shifts the
  // page. It starts as an instruction and upgrades to the browser's own
  // install sheet if the browser offers one.
  let deferred = null;
  let how = ios ? 'ios' : 'menu';
  tip.textContent = ios ? tip.dataset.ios : tip.dataset.other;
  wrap.hidden = false;

  window.addEventListener('beforeinstallprompt', event => {
    event.preventDefault();
    deferred = event;
    tip.hidden = true;
    button.setAttribute('aria-expanded', 'false');
    how = 'prompt';
  });

  window.addEventListener('appinstalled', () => {
    wrap.hidden = true;
    deferred = null;
    track('home_screen_installed');
  });

  // Restart the press animation on every click: drop the class, force a
  // reflow, add it back. Pages without the CSS simply ignore the class.
  button.addEventListener('animationend', event => {
    if (event.target === button) button.classList.remove('pop');
  });

  button.addEventListener('click', async () => {
    button.classList.remove('pop');
    void button.offsetWidth;
    button.classList.add('pop');
    track('home_screen_add', { how });
    if (deferred) {
      const prompt = deferred;
      deferred = null;
      prompt.prompt();
      try {
        const choice = await prompt.userChoice;
        if (choice && choice.outcome === 'dismissed') {
          tip.textContent = tip.dataset.other;
          how = 'menu';
        }
      } catch {}
      return;
    }
    const open = tip.hidden;
    tip.hidden = !open;
    button.setAttribute('aria-expanded', String(open));
  });
})();
