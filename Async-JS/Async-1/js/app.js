"use strict"
console.log("Hello")

const test = function() {
    setTimeout(function() {
        console.log("Start of code")

        alert("Notice")
    , 100})
}

const test2 = function() {
    console.log("Now I get attention")
}

test()
test2()