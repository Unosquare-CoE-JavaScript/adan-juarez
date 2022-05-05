const {curry} = require('ramda')

const add = (x,y) => x + y

//add([1, 2])
//add(1, 2)

const curri = f => x => y => f(x,y)

const flip = f => (y, x) => f(x, y)

const toPair = f => 
    ([x,y]) => add(x,y)

const fromPair = f => ([x, y]) => f([x, y])

const curriedAdd = curri(add)

const uncurry = f => (x,y) => f(x,y)

const result = fromPair(toPair(add))([1,2])
const resultFlip = flip(add)(1, 3)


const increment = curriedAdd(1)
const resultCurried = increment(2)

const module = curri((x, y) => y % x)
const isOdd = module(2) // (2,y) => 2%y
const resultCur = isOdd(122)
console.log(resultCur)

const filter = curri((f, xs) => xs.filter(f))

const getOdds = filter(isOdd)
const resultFil = getOdds([1, 2, 3, 4, 5])
console.log(resultFil)
//console.log('fromPair result: \n' + result)
//console.log('flip: \n' + resultFlip)
//console.log('curried add: \n' + resultCurried)

const replace = curry((regex, replacement, str) => 
    str.replace(regex, replacement)
)

const replaceVowels = replace(/[AEIOU]/ig, '!')

const resultReplaceVowels = replaceVowels('Hey, the arkenstone')
console.log(resultReplaceVowels)