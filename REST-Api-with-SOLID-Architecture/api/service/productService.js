//business logic
const Product = require('../database/models/productModel')
const { formatMongoData, checkObjectId } = require('../helper/dbHelper')
const constants = require('../constants')
 
module.exports.createProduct = async (serviceData) => {
    try {
        let product = new Product({
            //if the key and the value are the samee, use the spread operator
            ...serviceData
        })
        let result = await product.save()
        return formatMongoData(result)
    } catch (e) {
        console.log("Something went wrong: createProduct", e)
        throw new Error(e)
    }
}

module.exports.getAllProducts = async ({ skip=0, limit=10 }) => {
    try {
        let products = await Product.find({}).skip(parseInt(skip)).limit(parseInt(limit))
        return formatMongoData(products)
    } catch (e) {
        console.log("Something went wrong: getAllProducts", e)
        throw new Error(e)
    }
}

module.exports.getProductById = async ({ id }) => {
    try {
        checkObjectId(id)
        let product = await Product.findById(id)
        if(!product) {
            throw new Error(constants.productMessage.PRODUCT_NOT_FOUND)
        }
        return formatMongoData(product)
    } catch (e) {
        console.log("Something went wrong: getProductById", e)
        throw new Error(e)
    }
}

module.exports.updateProduct = async ({ id, updateInfo }) => {
    try {
        checkObjectId(id)
        let product = await Product.findOneAndUpdate(
            {_id: id},
            updateInfo,
            { new: true }
        )
        if(!product) {
            throw new Error(constants.productMessage.PRODUCT_UPDATED)
        }
        return formatMongoData(product)
    } catch (e) {
        console.log("Something went wrong: updateProduct", e)
        throw new Error(e)
    }
}

module.exports.deleteProduct = async ({ id }) => {
    try {
        checkObjectId(id)
        let product = await Product.findByIdAndDelete(id)
        if(!product) {
            throw new Error(constants.productMessage.PRODUCT_NOT_FOUND)
        }
        return formatMongoData(product)
    } catch (e) {
        console.log("Something went wrong: deleteProduct", e)
        throw new Error(e)
    }
}