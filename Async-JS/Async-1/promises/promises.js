"use strict"

let asyncFunction = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function(){
            resolve("asyncFunction has resolved.")
        }, 4000)
    })
}

let asyncFunction2 = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            reject("asyncFunction2 failed.")
        }, 3000)
    })
}