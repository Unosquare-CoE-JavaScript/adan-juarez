const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String
}, {
    timestamps: true,
    //convert to direct object
    toObject: {
        //change the _id to id
        transform: function(doc, ret, options) {
            ret.id = ret._id
            delete ret._id
            delete ret.__v
            return ret
        }
    }
})

module.exports = mongoose.model('Product', productSchema)