const path = require('path')
const express = require('express')
const session = require('express-session')
const http = require('http')
const bodyParser = require('body-parser')
const flash = require('connect-flash')
const mongodbClient = require('mongodb').MongoClient;
const MongoStore = require('connect-mongo')(session);


const app = express()
const server = http.createServer(app)
const port = process.env.PORT || 3000;

// Mongodb connection 

mongodbClient.connect('mongodb://localhost:27017/mydb',(err,db)=> {
  if(err) throw err;
  console.log('> MongoDB Connected!!!');
  const authGaudr = require('./middlewares/authgaurd')
  const guest = require('./middlewares/guest')

  app.set('views', path.join(__dirname,'views'))
  app.set('view engine', 'pug')


  app.use(bodyParser.urlencoded({
    extended: true
  }))


  app.use(session({
    store: new MongoStore({ db: db }),
    secret: 'secret-key',
    cookie: { maxAge: 10*1000},
    resave: false,
    saveUninitialized: true
  }))

  app.use(flash())

  // Setting Locals

  app.use((req, res, next) => {

    res.locals.flashes = req.flash();
    next();
  })

  app.get('/', (req, res) => {

    const user = req.session.user || null;
    res.render('index', { user })

  })

  app.get('/login', guest, (req, res) => {
    user = req.session.user || null
    if( user ) { // Redirect to profile page if user alredy loged in
      res.redirect('/profile'); return;
    }
    res.render('login')
  })





  app.post('/login', guest, (req, res) => {
    /* Dummy login */

    console.log('Req body ', req.body)

    let { user, password } = req.body;

    if( user =="sarath" && password=="sarath") {
      req.session.user = user;
      req.flash('info','Great, Successfully loged in')
      res.redirect('profile')
    }
    else {
      // Flash Error Message
      req.flash('danger','Invalid login details')
      res.redirect('/login')
    }
  })

  app.get('/logout', (req, res) => {
    req.session.destroy(() => {
      //Set Flash message
      //req.flash('info','Successfully loged out!!!')
      res.redirect('/')
    })
  })

  app.get('/profile',authGaudr, (req, res)=> {

    const user = req.session.user || null;
    res.render('profile', { user })
  })

  // Server listen 
  server.listen(port, () => {
    console.log(`Server listening on ${port} `)
  })

})



