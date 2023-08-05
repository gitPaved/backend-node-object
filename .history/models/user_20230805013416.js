const mongooseUser =  require('mongoose')

const userSchema = mongooseUser.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
})

module.exports = mongooseUser.model('User',userSchema)