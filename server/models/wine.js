const mongoose = require('mongoose')
const Schema = mongoose.Schema


const wineSchema = new Schema({
    variety: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    style: {
        type: String,
        required: true    
    },
    taste: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    comments: [
        {
            userName: {
                type: String,
                required: true
            },
            brand: {
                type: String,
                required: true
            },
            region: {
                type: String,
                required: true
            },
            price: {
                type: Number,
                required: true
            },
        }
    ]
})



module.exports = mongoose.model("Wine", wineSchema)