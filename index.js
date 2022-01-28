// CHeck if we can use serviceWorker.
if ("serviceWorker" in navigator) {
    navigator.serviceWorker
        .register("sw.js")
        .then((registration) => {
            console.log("Servicce worker registered");
            console.log(registration);
        })
        .catch((err) => {
            console.log("Sercvice worker registration failed");
            console.error(err);
        });
}
