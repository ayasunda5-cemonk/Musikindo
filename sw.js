const CACHE_NAME = 'indomusik-v1';
const assetsToCache = [
  './index.html',
  './manifest.json',
  // Tambahkan aset lain jika ada (misal: file CSS/JS terpisah atau ikon)
];

// Install Service Worker & Cache Aset
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(assetsToCache);
    })
  );
});

// Fetch Aset dari Cache jika Offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});