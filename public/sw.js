// Optimized Service Worker with advanced caching strategies
const CACHE_VERSION = 'v2'
const CACHE_NAME = `aide-brasil-${CACHE_VERSION}`
const RUNTIME_CACHE = `runtime-${CACHE_VERSION}`

// Assets to cache on install
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.ico',
  '/favicon.png',
  '/background-ultra-optimized.webp',
  '/background-mobile.webp'
]

// Install event - cache static assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(STATIC_ASSETS))
      .then(() => self.skipWaiting())
  )
})

// Activate event - clean old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(name => name !== CACHE_NAME && name !== RUNTIME_CACHE)
          .map(name => caches.delete(name))
      )
    }).then(() => self.clients.claim())
  )
})

// Fetch event - network-first for HTML, cache-first for assets
self.addEventListener('fetch', event => {
  const { request } = event
  const url = new URL(request.url)

  // Skip non-GET requests
  if (request.method !== 'GET') return

  // HTML files - network first, fallback to cache
  if (request.mode === 'navigate' || request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(
      fetch(request)
        .then(response => {
          const responseClone = response.clone()
          caches.open(RUNTIME_CACHE).then(cache => cache.put(request, responseClone))
          return response
        })
        .catch(() => caches.match(request))
    )
    return
  }

  // Static assets - cache first, fallback to network
  if (url.pathname.match(/\.(js|css|woff2|png|jpg|jpeg|gif|svg|webp)$/)) {
    event.respondWith(
      caches.match(request).then(cached => {
        if (cached) return cached

        return fetch(request).then(response => {
          if (response.status === 200) {
            const responseClone = response.clone()
            caches.open(RUNTIME_CACHE).then(cache => cache.put(request, responseClone))
          }
          return response
        })
      })
    )
    return
  }

  // Default - network first
  event.respondWith(
    fetch(request).catch(() => caches.match(request))
  )
})