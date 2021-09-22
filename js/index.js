if ('serviceWorker' in navigator) {
    //IF SERVICE WORKER IS SUPPORTED BY BROWSER
    navigator.serviceWorker.register("sw.js").then(registration => {
        console.log("SW Registered!");
        console.log(registration)
    }).catch(error => {
        console.log("SW Registration Failed!");
        console.log(error)
    })
}