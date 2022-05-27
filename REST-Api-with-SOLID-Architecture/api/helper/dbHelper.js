const mongoose = require('mongoose')
const constants = require('../constants')

// This method checks if the data send is an Array or an Array of objects
module.exports.formatMongoData = (data) => {
    if (Array.isArray(data)) {
        let newDataList = []
        for (value of data) {
            newDataList.push(value.toObject())
        }
        return newDataList
    }
    return data.toObject()
}

// check valid id
module.exports.checkObjectId = (id) => {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new Error(constants.databaseMessage.INVALID_ID)
    }
}