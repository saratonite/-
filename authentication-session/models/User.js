const mongoose = require('mongoose')

mongoose.Promise = global.Promise;

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String
    }
})

module.exports = mongoose.model('User', userSchema);