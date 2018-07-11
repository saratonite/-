const Router = require('express').Router;
const ErrorHandlers = require('./handlers/errorHandlers');
const HomeController = require('./controllers/HomeController');
const AuthController = require('./controllers/AuthController');
const AccountController = require('./controllers/AccountController');

const routes = Router()

routes.get('/', HomeController.getIndex);

routes.post('/login', ErrorHandlers.catchErrors(AuthController.authenticate));
routes.post('/register',ErrorHandlers.catchErrors(AuthController.register));

// Restricted Area

routes.get('/account',ErrorHandlers.catchErrors(AuthController.verify), AccountController.getIndex);



module.exports = routes;
