"use strict"

const swapi = function(num) {
    let url = "https://swapi.dev/api/people/"

    fetch(url + num + "/")
    .then(function(data) {
        return data.json()
    })
    .then(function(obj) {
        console.log(obj)
    })
}

swapi(1)

//re-factoring with arrow function
const swapiA = function(num) {
    let url = "https://swapi.dev/api/people/"

    fetch(url + num + "/")
    .then(data => data.json())
    .then(obj => {
        console.log(obj)
        return fetch(obj.homeworld)
    })
    .then(hwdata => hwdata.json())
    .then(hwobj => console.log(hwobj))
}

swapiA(1)