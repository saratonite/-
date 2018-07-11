const express = require('express')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes');

// MongoDB Connections
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/node-auth')
        .then(() => {

            console.log('MongoDB Connected');

        })
        .catch((err) => {

            console.log('Error connecting monogoDB')
        })


const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))


// Register App Routes
app.use(routes);

app.listen(3000, () =>  {
    console.log('App Running')
})