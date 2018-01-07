const Router = require('express').Router;

const userController = require('./controllers/userController')
const routes = Router();

routes.get('users/', userController.userIndex)
routes.post('users/create', userController.createUser)
routes.get('users/:name', userController.getUser)
routes.put('users/:name', userController.updateUser)
routes.delete('users/:name', userController.deleteUser)


module.exports = routes;
