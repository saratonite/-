const User = require('../models/User')

/*
List all user
*/
exports.userIndex = async (req, res) => {

  var users =  await User.find({})
  res.json(users);

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

/* Update user */
exports.updateUser = (req, res) => {
  let  name = req.params.name;
  User.update({ name: name }, req.body )
    .then((q)=> {
      console.log(q)
      res.json({ message: 'User updated'})
    })
    .catch((error) => {
      res.json({ message: 'User updation failed'})
    })

}

/* Delete user */
exports.deleteUser = (req, res) => {
  let name = req.params.name;
  User.find({ name: name}).remove()
    .then((q) => {
      console.log(q)
      res.send({message:'User deleted'})
    })
    .catch((error) => {
      res.send({message:'Error deleting user'})
    })

}
