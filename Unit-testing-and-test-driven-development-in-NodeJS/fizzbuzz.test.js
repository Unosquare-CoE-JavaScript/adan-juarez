const { fizzbuzz } = require('./FizzBuzzKata')

var expect = require('chai').expect
// unit tests - green face
function checkFizzBuzz(testValue, expectedResult) {
    var result = fizzbuzz(testValue)
    expect(result).to.equal(expectedResult)
}


it('can call fizzbuzz', function() {
    fizzBuzz(1)
})

it('returns 1 with 1 passed in', function(){
    // var result = fizzbuzz(1)
    // expect(result).to.equal('1')
    checkFizzBuzz(1, '1')
})

// red face
it('returns 2 with 2 passed in', function(){
    checkFizzBuzz(2, '2')
})

it('return Fizz with 3 passed in', function(){
    checkFizzBuzz(3, 'Fizz')
})

it('returns Buzz with 5 passed in', function(){
    checkFizzBuzz(5, 'Buzz')
})

it('returns FizzBuzz with 1 passed in', function() {
    checkFizzBuzz(15, 'FizzBuzz')
})

