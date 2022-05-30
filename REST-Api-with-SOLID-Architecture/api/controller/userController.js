const constants = require('../constants')
const userService = require('../service/userService')

module.exports.signup = async (req, res) => {
    //console.log('es', req.body)
    let response = {...constants.defaultServerResponse}
    try {
        const responseFromService = await userService.signup(req.body)
        response.status = 200
        response.message = constants.userMessage.SIGNUP_SUCCESS
        response.body = responseFromService

    } catch (e) {
       // response.status = 400
        response.message = e.message
       // response.body = {}
        console.log('Something went wrong: Controller: signup', e)
    }
    return res.status(response.status).send(response)
}

module.exports.login = async (req, res) => {
    //console.log('es', req.body)
    let response = {...constants.defaultServerResponse}
    try {
        const responseFromService = await userService.login(req.body)
        response.status = 200
        response.message = constants.userMessage.LOGIN_SUCCESS
        response.body = responseFromService
        
    } catch (e) {
       // response.status = 400
        response.message = e.message
       // response.body = {}
        console.log('Something went wrong: Controller: signup', e)
    }
    return res.status(response.status).send(response)
}