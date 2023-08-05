const mongooseUser =  require('mongoose')

const userSchema = mongooseProduct.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    inStock: { type: Boolean, required: true },
})

module.exports = mongooseProduct.model('Product',productSchema)