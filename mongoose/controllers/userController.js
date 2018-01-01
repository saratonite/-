const User = require('../models/User')

/*
List all user
*/
exports.userIndex = (req, res) => {

  User.find({}).then((data) => res.json(data))
}
/*
Create new user
*/
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

/*
get single user
*/

exports.getUser = (req, res) => {

  const name = req.params.name;

  User.findOne({name: name})
    .then(user => {
      if(! user) {
        res.status(404).json({message: 'Resource not found'})
        return;
      }
      res.json(user)
  })
  .catch(err => {
    res.json({message: 'Some error'})
  })
}
