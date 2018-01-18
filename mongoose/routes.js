const Router = require('express').Router;
const errorHandler = require('./halders/errorHandlers')
const userController = require('./controllers/userController')
const routes = Router();

routes.get('/users/', errorHandler.catchErrors(userController.userIndex))
routes.post('/users/create', userController.createUser)
routes.get('/users/:name', userController.getUser)
routes.put('/users/:name', userController.updateUser)
routes.delete('users/:name', userController.deleteUser)


module.exports = routes;
