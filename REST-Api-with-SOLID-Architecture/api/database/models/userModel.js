const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
   email: String,
   password: String
}, {
    timestamps: true,
    //convert to direct object
    toObject: {
        //change the _id to id
        transform: function(doc, ret, options) {
            ret.id = ret._id
            delete ret._id
            delete ret.password
            delete ret.__v
            return ret
        }
    }
})

module.exports = mongoose.model('User', userSchema)