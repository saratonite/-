const User = require('../models/User')

exports.userIndex = (req, res) => {

  User.find({}).then((data) => res.json(data))
}

exports.createUser = (req, res) => {

  const user = new User(req.body)

  user.save().then(newUser => {
    res.json(newUser)
  })
  .catch(error => {
    console.log(error)
    res.json({message: 'Some error!'})
  })
}
