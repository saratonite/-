const Router = require('express').Router;

const userController = require('./controllers/userController')
const routes = Router();

routes.get('/', userController.userIndex)

routes.post('/create', userController.createUser)


module.exports = routes;
