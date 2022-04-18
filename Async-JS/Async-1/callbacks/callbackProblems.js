"use strict"
//callback hell e.g.

let item1 = document.getElementById("b1")

if(item1){
    item1.addEventListener("click", function(e) {
        let a = 0
            b = 0

            setTimeout(function() {
                a ++
                setTimeout(function() {
                    a++
                    console.log("1 Attempt: " + a)
                }, 0)
            }, 0)
            setTimeout(function() {
                console.log("2 Attempt: " + a)
            }, 0)
            a = b
    })
}