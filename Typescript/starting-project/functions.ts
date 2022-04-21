function addFunctionNumbers(n1: number, n2: number)  {
    return n1 + n2
}

function printResults(num: number): void {
    const print = console.log('Result: ' + num)
    return print
}

const results = printResults(addFunctionNumbers(5, 12))

console.log(results)

let combineValues: Function
let operationResult: (a: number, b: number) => number
combineValues = addFunctionNumbers
combineValues = printResults
console.log(combineValues(8, 8))

console.log(operationResult(2, 298))

//calbacks
                                                    // it doesnt return anything with void, as void doesnt force to return anything
function addAndHandle(m1: number, m2: number, cb: (num: number) => void) {
    const result = m1 + m2
    cb(result)
}
// calback functions can return something, even if the argument on which they are passed doesn NOT expect a returned value
addAndHandle(10, 20, (result) => {
    console.log(result)
})