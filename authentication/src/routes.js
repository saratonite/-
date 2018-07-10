const Router = require('express').Router;
const HomeController = require('./controllers/HomeController');

const routes = Router()

routes.get('/', HomeController.getIndex);



module.exports = routes;
