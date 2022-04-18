"use strict"

const swapiFilms = async function () {
    let url = "https://swapi.dev/api/films/",
        filmsData = {},
        films = []
    filmsData = await fetch(url).then(data => data.json())

    films = filmsData.results.map(obj => obj.title)

    //processing the data
    console.log(films)
}

swapiFilms()
console.log("Remaining")

// Promise.all or Promise.race

let firstName = function () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject("Steven")
        }, 4000)
    })
}

let lastName = function () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("Hans")
        }, 4000)
    })
}

let middleName = function () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("W.")
        }, 4000)
    })
}

(async function() {
    let names = await Promise.all([firstName(), lastName(), middleName()])
    console.log(names[0] + " " + names[2] + " " + names[1])
})();

