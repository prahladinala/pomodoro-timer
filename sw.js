self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(["./", "./js/main.js", "./js/api/KanbanAPI.js", "./js/view/Column.js", "./js/view/DropZone.js", "./js/view/Item.js", "./js/view/Kanban.js", "./images/logo192.png", "./images/logo512.png", "./css/main.css"]);
        })
    );

});



self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    )
});