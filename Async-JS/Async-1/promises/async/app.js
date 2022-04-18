"use strict"

const asyncFunc = async function() {
    let p1 = await asyncFunction()
    console.log(p1)
    console.log(`${p1}-more info`)
}

asyncFunc()