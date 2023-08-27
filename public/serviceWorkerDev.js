console.warn('service worker dev registered')
// Service worker for Development
// to store following react bundles into browser cache storage
let cacheData = 'appV1';
this.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll([  
                "/favicon.ico",
                "logo192.png",
                "logo512.png",
                "/manifest.json",
                // "static/js/bundle.js",
                // "static/js/main.chunk.js",
                // "static/js/0.chunk.js",
                // "/static/media/carsearch.3bf4a2dd37d3d488a73e.webp",
                "/index.html",
                "/",
                "/login",
                "/register",
                "/car-details",
                "/car-configure"
                ])
        })
    );
});

// to fetch data from browser cache storage incase of offline
this.addEventListener('fetch', (event) => {
    if (!navigator.onLine) {
        event.respondWith(
            caches.match(event.request).then((resp) => {
                if (resp) {
                    return resp;
                }
                // let requestUrl = event.request.clone();
                // fetch(requestUrl);
            })
        );
    }
});


 