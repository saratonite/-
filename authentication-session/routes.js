const Router = require('express').Router
const routes = new Router()

const AuthController = require('./controllers/AuthController');
const DashboardController = require('./controllers/DashboardController');

routes.post('/login', AuthController.login)
routes.post('/register', AuthController.register)
routes.get('/account',AuthController.authOnly, DashboardController.getIndex)
routes.get('/logout',AuthController.authOnly, AuthController.logout)

module.exports = routes;

