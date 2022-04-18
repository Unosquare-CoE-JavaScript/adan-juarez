"use strict"

let promise = asyncFunction()

let promise2 = promise.then(function (val) {
    console.log("Yeah!!!" + val)
    //promise
    return asyncFunction2()
})

promise2.then(function (val) {
    console.log("Second promise: " + val)
})

console.log("The code is Aynchronous.")

//Refactoring
asyncFunction()
    .then(function (val) {
        console.log("Yeah!!!" + val)
        //promise
        return asyncFunction2()
    })
    .then(function (val) {
        console.log("Second promise: " + val)
    })

