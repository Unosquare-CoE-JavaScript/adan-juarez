const mongoose = require('mongoose')

module.exports = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, { useNewUrlParser: true})
        console.log('Database connected')
    } catch(e) {
        console.log(('DB connectivity error', e))
        throw new Error(e)
    }
   
}