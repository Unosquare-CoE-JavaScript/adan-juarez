"use strict"

asyncFunction2()
.then(msg => console.log(msg))
.catch(err => console.log(err))
.finally(() => console.log("Cleaning up tasks."))
// sth you need wvery time this code is run

let p1 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve("Done")
    }, 4000)
})

p1.then(function(val) {
    //resolve
    console.log(val)
    //reject method
}, function(val) {
    console.log("rejected: " + val)
})

