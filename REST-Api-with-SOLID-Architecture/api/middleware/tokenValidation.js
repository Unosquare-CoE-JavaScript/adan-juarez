const constants = require("../constants")
const jwt = require('jsonwebtoken')

module.exports.validateToken = (req, res, next) => {
    let response = { ...constants.defaultServerResponse }
    try {
        if (!req.headers.authorization) {
            throw new Error(constants.requestValidationMessage.TOKEN_MISSING)
        }
        //console.log(req.headers.authorization.split('Bearer')[1].trim())
        const token =  req.headers.authorization.split('Bearer')[1].trim()
        const decoded = jwt.verify(token, process.env.SECRET)
        console.log('decoded', decoded)
        return next()
    } catch (e) {
        console.log('Error', e)
        response.message = e.message
        response.status = 401 //standard unauthorized access
    }
    return res.status(response.status).send(response)
}