"use strict"

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

Promise.all([firstName(), lastName(), middleName()])
    .then(function (msg) {
        console.log(msg[0] + " " + msg[2] + " " + msg[1])
    })
    .catch(function (msg) {
        console.log(msg)
    })

Promise.race([firstName(), lastName(), middleName()])
    .then(function (msg) {
        console.log("Message " + msg)
    })
    .catch(function (msg) {
        console.log(msg)
    })