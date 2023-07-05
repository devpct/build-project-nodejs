const mongoose = require('mongoose')

const productsSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        quantity:{
            type: Number,
            required: true,
            default: 1
        },
        price:{
            type: Number,
            required: true
        },
        image:{
            type: String,
            required: false
        }
    },
    {
        versionKey: false
    }
)

const Products = mongoose.model('Products', productsSchema)

module.exports = Products