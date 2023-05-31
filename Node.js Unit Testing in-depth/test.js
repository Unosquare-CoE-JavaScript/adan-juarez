const mocha = require('mocha')
const chai = require('chai')

const assert = require('assert')

describe('file to be testd', () => {
    context('function to be tested', () => {

        before(() => {
            console.log("before")
        })

        after(() => {
            console.log("after")
        })

        beforeEach(() => {
            console.log("before each")
        })

        afterEach(() => {
            console.log("after each")
        })

        it('should do sth', () => {
            assert.equal(1, 1)
        })

        it('should do sth else', () => {
            assert.deepEqual({ name: 'joe'}, {name: 'joe'})
        })
        it('this is a pending test')
    })

    context('another', () => {
        it('another function ')
    })
})