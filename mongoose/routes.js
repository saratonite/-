const Router = require('express').Router;
const errorHandler = require('./handlers/errorHandlers')
const userController = require('./controllers/userController')
const routes = Router();

routes.get('/users/', errorHandler.catchErrors(userController.userIndex))
routes.post('/users/create', errorHandler.catchErrors(userController.createUser))
routes.get('/users/:name', errorHandler.catchErrors(userController.getUser))
routes.put('/users/:name', errorHandler.catchErrors(userController.updateUser))
routes.delete('/users/:name', errorHandler.catchErrors(userController.deleteUser))


module.exports = routes;
