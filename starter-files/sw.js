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
    console.log(e.request);
});
