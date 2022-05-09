const Box = x => ({
    map: f => Box(f(x)),
    inspect: `Box(${x})`,
    chain: f => f(x),
    fold: `Box(${x})`
})

const nextCharForNumberString = str => {
    const trimed = str.trim()
    const number = +trimed
    const nextNumber = new Number(number + 1)
    return String.fromCharCode(nextNumber)
}

const result = nextCharForNumberString(' 64')

//console.log(result)

const nextCharForNumberString1 = str => {
    const trimed = str.trim()
    const number = +trimed
    const nextNumber = new Number(number + 1)
    return String.fromCharCode(nextNumber)
}

const resultBox = (str) =>
    Box(str)
        .map(x => x.trim())
        .map(x => parseInt(trimed, 10))
        .map(number => new Number(number + 1))
        .map(String.fromCharCode)
        .fold(String.fromCharCode)

//console.log(resultBox())
const first = xs =>
    xs[0]

const halfTheFirstLargeNumber_ = xs => {
    const found = xs.filter(x => x >= 20)
    const answer = first(found) / 2
    return `The answer is ${answer}`
}

const compose = (f, g) => x =>
    Box(x).map(g).fold(f)

const halfTheFirstLargeNumber = xs => {
    Box(xs)
        .map(xs => xs.filter(x => x >= 20))
        .map(found => first(found) / 2)
        .map(answer => `The answer is ${answer}`)
}

const res = halfTheFirstLargeNumber([1, 4, 50])
console.log(res)

//chain
const applyDiscount = (price, discount) =>
    Box(moneyToFloat(price))
        .chain(cents =>
            Box(percentToFloat(discount))
                .map(savings => cents - (cents * savings))
        )