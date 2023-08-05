const mongooseUser =  require('mongoose')
const uniqueValidator  = require('mongoose-unique-validator')

const userSchema = mongooseUser.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
})

module.exports = mongooseUser.model('User',userSchema)