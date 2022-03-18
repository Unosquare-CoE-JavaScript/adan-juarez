"use strict"

let a = new Promise(function(resolve, reject) {
    setTimeout(function() {
        reject("Is rejected")
        resolve("Done")
    }, 4000)
})

//are passing to resolve
a.then(function(val) {
    console.log(val)
    //function of reject
}, function(val) {
    console.log("rejected: " + val)
})


console.log(a)