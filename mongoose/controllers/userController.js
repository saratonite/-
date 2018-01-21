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
exports.createUser = async (req, res) => {
  const user = new User(req.body)
  const newUser = await user.save();
  res.json(newUser);
}

/*
get single user
*/

exports.getUser = async(req, res) => {

  const name = req.params.name;

  const user = await User.findOne({name: name})
  if(!user) {
    res.status(404).json({message: 'Resource not found'})
  }
  else {
    res.json(user);
  }

}

/* Update user */
exports.updateUser = async (req, res) => {
  let  name = req.params.name;
  const dbRes = await User.update({ name: name }, req.body )
  res.json({message: ` ${dbRes.n} User updated`})



}

/* Delete user */
exports.deleteUser = async (req, res) => {
  let name = req.params.name;
  const dbRes = await User.find({ name: name}).remove()
  res.json({message: ` ${dbRes.n} Records deleted`})


}
