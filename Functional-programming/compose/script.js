const {curry} = require('ramda')
const {compose} = require('compose')
// programme with compose and curry packages for comprobing composition

const doStuff = str => {
    const lower = str.toLowerCase()
    const words = lower.split(' ')

    words.reverse()

    for(let i in words) {
        words[i] = words[i].trim()
    }

    let keepers = []

    for(let i in words) {
        if(words[i].length > 3) {
            keepers.push(words[i])
        }
    }

    return keepers.join('')
}


//availablePrices with compose.

const availablePrices_ = function(cars) {
    const available_cars = _.filter(_.prop('in_stock'), cars)
    return available_cars.map(x => formatMoney(x.dollar_value)).join(', ')
}

const formatDollarValue = _.compose(formatMoney, _.prop('dollar_value'))
const availablePricesArray = _.compose( 
    // two loops
    _.map(formatDollarValue), 
    _.filter(_.prop('in_stock'))
)

const availablePrices = _.compose(_.join(', '), availablePricesArray)

const fasterCar = function(cars) {
    const sorted = _.sortBy(car => car.horsepower, cars)
    const fastest = _.last(sorted)
    return fastest.name + ' is the fastest'
}

const append = _.flip(_.concat)

const fastestCar = _.compose(
    append(' is the fastest'),
    _.prop('name'),
    _.sortBy(car => car.horsepower)
)