self.addEventListener("install", (event) => {
    console.log("Install  service worker");
    event.waitUntil(
        // A new cache called assets. If it does not exist, it will be created
        caches.open("assets").then((cache) => {
            // Add an array of files you want to cache
            return cache.addAll([
                "./",
                "./css/index.css",
                "./assets/logo192.png",
                "./assets/logo512.png",
                "./login.html",
                "./index.js",
            ]);
        })
    );
});

// Runs whenever there is a fetch request
self.addEventListener("fetch", (event) => {
    // Checks the cache to find matching request. If there is a cached version of the request, it returns the cached version, otherwise it makes a new request.
    event.respondWith(
        caches.match(event.request).then((res) => {
            return res || fetch(event.request);
        })
    );
    console.log(event.request);
});
