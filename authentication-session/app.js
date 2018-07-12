const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

const routes = require('./routes');


//MongoDB

mongoose.connect('mongodb://127.0.0.1:27017/node-session-auth')
.then(() => {

    console.log(':) MongoDB Connected')
})
.catch((err) => {

    console.log('Error conneting MongoDB')

})


const app =  express()

// Session
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true,
  cookie: { maxAge: 3600000},
  store: new MongoStore({mongooseConnection: mongoose.connection})
}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.get('/', (req,res) => {

req.session.view = req.session.view || 0;

req.session.view = req.session.view + 1;
res.json({view:req.session.view});


})

app.use(routes);



module.exports = app;