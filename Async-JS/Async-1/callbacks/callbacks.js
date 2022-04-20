let logCall = function(){
    console.log("logCall was called back")
}

//Example 2
           //callback, time
setTimeout(function(){
    console.log("The function was called back")  //function definition (anonymous definition)
}, 3000)

console.log("More")
//E.g. 2
let btn = document.querySelector("#item1")

btn.addEventListener("click", function(e) {
    console.log("The button was clicked.");
});

//events and setTimeout take advantage of asynchronous code.

