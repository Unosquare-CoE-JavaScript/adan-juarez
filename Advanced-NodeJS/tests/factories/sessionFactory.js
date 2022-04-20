const Buffer = require('safe-buffer').Buffer
//generate the session signature
const Keygrip = require('keygrip')
const keys = require('../../config/keys')
const keygrip = new Keygrip([keys.cookieKey])

module.exports = (user) => {
    const sessionObject = {
        passport: {
            user: user._id.toString()
        }
    }

    const session = Buffer.from(JSON.stringify(sessionObject))
        .toString('base64')
    //You can only pass the session
    const sign = keygrip.sign('session=' + session)

    return { session, sign }
}