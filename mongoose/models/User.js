const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: 'Name field requied',
    unique: true
  },
  email: {
    type: String,
    required: 'Email filed required'
  },
  password: {
    type: String,
    required: 'Password field required'
  }
})

module.exports = mongoose.model('user', userSchema)
