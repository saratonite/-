const path = require('path')
const express = require('express')
const session = require('express-session')
const http = require('http')
const bodyParser = require('body-parser')
const sessionFileStore = require('session-file-store')

const app = express()
const server = http.createServer(app)
const port = process.env.PORT || 3000;

const authGaudr = require('./middlewares/authgaurd')
const guest = require('./middlewares/guest')

app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'pug')


app.use(bodyParser.urlencoded({
  extended: true
}))

const fileStore = sessionFileStore(session);

app.use(session({
  store: new fileStore({
    path : path.join(__dirname, '__session')
  }),
  secret: 'secret-key',
  cookie: { maxAge: 10*1000}
}))



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
    res.redirect('profile')
  }
  else {
    // Flash Error Message
    res.redirect('/login')
  }
})

app.get('/logout', (req, res) => {
  req.session.destroy(() => {
    //Set Flash message
    res.redirect('/')
  })
})

app.get('/profile',authGaudr, (req, res)=> {

  const user = req.session.user || null;
  res.render('profile', { user })
})

server.listen(port, () => {
  console.log(`Server listening on ${port} `)
})
