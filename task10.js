function fetchWithTimeout(url, ms) {
    let fetchPromise = fetch(url);

    let timeoutPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("Request Timed Out"));
        }, ms);
    });

    return Promise.race([fetchPromise, timeoutPromise]);
}

fetchWithTimeout("https://jsonplaceholder.typicode.com/posts/1", 1000)
    .then(response => response.json())
    .then(data => {
        console.log("Data received:");
        console.log(data);
    })
    .catch(error => {
        console.log(error.message);
    });