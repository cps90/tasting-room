const mongoose = require('mongoose')
const Schema = mongoose.Schema


const foodSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    URLendpoint: {
        type: String
    },
    description: {
        type: String,
        required: true
    },
    imageURL: {
        type: String,
        required: true
    },
    wineReference: {
        type: Schema.Types.ObjectId, 
        ref: 'Wine',
        required: true
    }
})

module.exports = mongoose.model("Food", foodSchema)