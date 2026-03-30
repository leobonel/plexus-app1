const CACHE_NAME = "plexus-v3";

self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", () => {
  self.clients.claim();
});

// SOLO cachea navegación (HTML)
self.addEventListener("fetch", event => {
  if (event.request.mode === "navigate") {
    event.respondWith(fetch(event.request));
  }
});