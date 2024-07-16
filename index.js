//HTTP Requests
let request = new XMLHttpRequest()

request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
        console.log(request);
    } else if (request.readyState === 4) {
        console.log("Could not fetch the Data");
    }
})

request.open("GET", "https://jsonplaceholder.typicode.com/todos")
request.send()