// Service worker for the Selector when it is added to a home screen.
//
// It exists for one reason: Chrome only offers its own "Install app" prompt
// (the one the Add to home screen button triggers) to a page whose service
// worker handles fetches. It is registered with the Selector's scope only
// (/selector, /de/selector, /fr/selector), so the guides never pass through it.
//
// Navigations go to the network first, so a deploy is never hidden behind a
// stale copy; the last page that loaded is kept only as the fallback for a
// phone that opens the icon with no signal. Everything else (the catalogue,
// the runtime, the YouTube player) is left to the browser untouched.
const CACHE = 'selector-pages-v1';

self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(key => key.startsWith('selector-pages-') && key !== CACHE).map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.mode !== 'navigate' || request.method !== 'GET') return;
  event.respondWith((async () => {
    const url = new URL(request.url);
    const key = url.origin + url.pathname;
    try {
      const response = await fetch(request);
      if (response.ok) {
        const cache = await caches.open(CACHE);
        await cache.put(key, response.clone());
      }
      return response;
    } catch (error) {
      const cached = await caches.match(key);
      if (cached) return cached;
      throw error;
    }
  })());
});
