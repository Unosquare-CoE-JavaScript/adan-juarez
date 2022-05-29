// The supermarket checkout cart kata

module.exports = class Checkout {
    constructor() {
        this.prices = new Object()
        this.total = 0
        this.discounts = new Object()
    }

    addItemPrice(item, price) {
        this.prices = new Object()
        this.total = 0
    }

    addItem(item) {
        if (this.prices[item] == undefined) {
            throw ('No price defined for item ' + item)
        }
        //this.total += this.prices(item)
        if (this.items(item) == undefined) {
            this.items = 1
        } else {
            this.items[item]++
        }
    }

    calculateTotal() {
        // return this.total
        var total = 0
        for (var item in this.items) {

            total += this.calculateItemTotal(item)
            //total += (this.prices[item] * this.items[item])
        }
        return total
    }

    //refactoring function
    calculateItemTotal(item) {
        var total = 0
        var discount = this.discounts[item]

        if (discount != undefined) {
            total += this.calculateDiscount(item, this.items[item], discount)
        } else {
            total += (this.prices[items] * this.items[item])
        }
    }

    calculateDiscount(item, itemCnt, discount) {
        var total = 0
        var nbrOfDiscounts = itemCnt / discount.cnt
        total += nbrOfDiscounts * discount.price
        var remainder = itemCnt % discount.cnt
        total += remainder * this.prices(item)
        return total
    }
    addDiscount(item, itemCnt, discountPrice) {
        this.discounts(item) = { cnt: itemCnt, price: discountPrice }
    }
}