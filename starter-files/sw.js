self.addEventListener("install", (e) => {
    console.log("Install  service worker");
    e.waitUntil(
        // A new cache called assets. If it does not exist, it will be created
        caches.open("assets").then((cache) => {
            // Add an array of files you want to cache
            return cache.addAll([
                "./",
                "./css/index.css",
                "./assets/logo192.png",
                "./assets/logo512.png",
            ]);
        })
    );
});

// Runs whenever their is a fetch request
self.addEventListener("fetch", (e) => {
    // CHecks the cache to find matching request. If there is a cached version of the request, it returns the cached version, otherwise it makes a new request.
    e.respondWith(
        caches.match(e.request).then((res) => {
            return res || fetch(e.request);
        })
    );
    console.log(e.request);
});
