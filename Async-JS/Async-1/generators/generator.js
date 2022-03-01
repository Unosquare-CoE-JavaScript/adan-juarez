"use strict"

let arr = ['a', 'b', 'c', 'd']

//generator
function *genTest() {
    let x = 0
    console.log('start')
    x++
    //change the value for a while. We pass x
    yield
    console.log(x)
    x++
    console.log(x)
    x++
    yield
    console.log('end')
    return x
}

//Is suspended until we invike the function generator
//When we invoke
// gen --> execute it

//let val = gen.next makes generator to run
let gen = genTest()

//Create a generator to create an Iterator
let it = arr[Symbol.iterator]()
const arrIt = function*(arr) {
    for(let i = 0; i < arr.length; i ++) {
        yield arr[i]
    }
}

let genIt = arrIt(arr)
console.log(genIt)

//In browser it.next().value or it.next().done

/* Generator two-way communication */

function *yieldConsole() {
    let val = yield 'Enter a value'  // pass the value in
    //passing a value to yield
    console.log(val)
}

let it1 = yieldConsole()
//run in the broser console it1.next()
// it1.next('value')
let prompt = it1.next().value  //pass the value out
console.log(prompt)
