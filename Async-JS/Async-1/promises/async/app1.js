"use strict"

const asyncFunction = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("Important Value")
        }, 2000)
    })
}