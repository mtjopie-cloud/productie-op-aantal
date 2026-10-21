// PWA: voorrang aan nieuwe online gegevens, offline fallback naar laatst bewaarde bestanden.
const CACHE_NAME = "op-aantal-v6";
const APP_FILES = ["./", "./index.html", "./style.css", "./app.js", "./artikelen.json", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png"];
self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_FILES)));
  self.skipWaiting();
});
self.addEventListener("activate", event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k.startsWith("op-aantal-") && k !== CACHE_NAME).map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});
self.addEventListener("fetch", event => {
  const request = event.request;
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin || !url.pathname.startsWith(new URL(self.registration.scope).pathname)) return;
  const networkFirst = request.mode === "navigate" || /\/(app\.js|artikelen\.json|index\.html)$/.test(url.pathname);
  if (networkFirst) {
    event.respondWith((async () => {
      try {
        const response = await fetch(request, {cache: "no-store"});
        if (response.ok) {
          const cache = await caches.open(CACHE_NAME);
          await cache.put(request, response.clone());
        }
        return response;
      } catch (_) {
        return (await caches.match(request, {ignoreSearch: true})) || (request.mode === "navigate" ? await caches.match("./index.html") : Response.error());
      }
    })());
  } else {
    event.respondWith((async () => {
      const cached = await caches.match(request, {ignoreSearch: true});
      if (cached) return cached;
      const response = await fetch(request);
      if (response.ok) (await caches.open(CACHE_NAME)).put(request, response.clone());
      return response;
    })());
  }
});
