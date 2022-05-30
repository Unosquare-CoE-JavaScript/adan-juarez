const productService = require('../service/productService')
const constants = require('../constants')

module.exports.createProduct = async (req, res) => {
    //console.log('es', req.body)
    let response = {...constants.defaultServerResponse}
    try {
        const responseFromService = await productService.createProduct(req.body)
        response.status = 200
        response.message = constants.productMessage.PRODUCT_CREATED
        response.body = responseFromService
    } catch (e) {
       // response.status = 400
        response.message = e.message
       // response.body = {}
        console.log('Something went wrong: Controller: createProduct', e)
    }
    return res.status(response.status).send(response)
}

module.exports.getAllProducts = async (req, res) => {
    //console.log('es', req.body)
    let response = {...constants.defaultServerResponse}
    try {
        const responseFromService = await productService.getAllProducts(req.query)
        response.status = 200
        response.message = constants.productMessage.PRODUCT_FETCHER
        response.body = responseFromService
    } catch (e) {
       // response.status = 400
        response.message = e.message
       // response.body = {}
        console.log('Something went wrong: Controller: createProduct', e)
    }
    return res.status(response.status).send(response)
}

module.exports.getProductById = async (req, res) => {
    //console.log('es', req.body)
    let response = {...constants.defaultServerResponse}
    try {
        const responseFromService = await productService.getProductById(req.params)
        response.status = 200
        response.message = constants.productMessage.PRODUCT_FETCHER
        response.body = responseFromService
    } catch (e) {
       // response.status = 400
        response.message = e.message
       // response.body = {}
        console.log('Something went wrong: Controller: createProduct', e)
    }
    return res.status(response.status).send(response)
}

module.exports.updateProduct = async (req, res) => {
    //console.log('es', req.body)
    let response = { ...constants.defaultServerResponse }
    try {
        const responseFromService = await productService.updateProduct({
            id: req.params.id,
            updateInfo: req.body
        })

        response.status = 200
        response.message = constants.productMessage.PRODUCT_FETCHER
        response.body = responseFromService
    } catch (e) {
       // response.status = 400
        response.message = e.message
       // response.body = {}
        console.log('Something went wrong: Controller: createProduct', e)
    }
    return res.status(response.status).send(response)
}

module.exports.deleteProduct = async (req, res) => {
    //console.log('es', req.body)
    let response = { ...constants.defaultServerResponse }
    try {
        const responseFromService = await productService.deleteProduct(req.params)

        response.status = 200
        response.message = constants.productMessage.PRODUCT_DELETED
        response.body = responseFromService
    } catch (e) {
       // response.status = 400
        response.message = e.message
       // response.body = {}
        console.log('Something went wrong: Controller: createProduct', e)
    }
    return res.status(response.status).send(response)
}