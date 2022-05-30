//business logic
const User = require('../database/models/userModel')
const { formatMongoData } = require('../helper/dbHelper')
const constants = require('../constants')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports.signup = async ({ email, password }) => {
    try {
        const user = await User.findOne({ email })
        if (user) {
            throw new Error(constants.userMessage.DUPLICATE_EMAIL)
        }
        password = await bcrypt.hash(password, 10) //recommended 10 - 12

        const newUser = new User({ email, password })

        let result = await newUser.save()

        return formatMongoData(result)

    } catch (e) {
        console.log("Something went wrong: Service: signup", e)
        throw new Error(e)
    }
}

module.exports.login = async ({ email, password }) => {
    try {
        const user = await User.findOne({ email })
        if (!user) {
            throw new Error(constants.userMessage.DUPLICATE_EMAIL)
        }
        const isValid = bcrypt.compare(password, user.password)

        if (!isValid) {
            throw new Error(constants.userMessage.INVALID_PASSWORD)
        }

        const token = jwt.sign({id: user._id}, 
            process.env.SECRET || "Equipo-dinamita", 
            { expiresIn: '1d' }
        )

        return { token }

    } catch (e) {
        console.log("Something went wrong: Service: login", e)
        throw new Error(e)
    }
}