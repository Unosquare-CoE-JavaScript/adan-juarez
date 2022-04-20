"use strict"

const url = "https://jsonplaceholder.typicode.com/todos/5"
const baseUrl = "https://jsonplaceholder.typicode.com/todos/"

fetch(url)
.then(data => data.json())
.then(obj => console.log(obj))

let todo = {
    completed: false,
    valueOfuserId: 1,
    title: "Learn Promises"
}

fetch(baseUrl, {
    method: 'POST',
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify(todo)
})
.then(response => response.json())
.then(obj => console.log(obj))
.catch(reject => console.log(`Unable to create todo ${reject}`))

console.log('Other code')