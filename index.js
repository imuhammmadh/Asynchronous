let getTodos = (callback) => {
    let request = new XMLHttpRequest()

    request.addEventListener("readystatechange", () => {
        if (request.readyState === 4 && request.status === 200) {
            let data = JSON.parse(request.responseText)
            callback(undefined, data);
        } else if (request.readyState === 4) {
            callback("Could not fetch data", undefined)
        }
    })

    request.open("GET", "todos.json")
    request.send()
}

console.log(1);
console.log(2);

getTodos((err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
})

console.log(3);
console.log(4);