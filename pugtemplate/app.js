const path = require('path')
const express = require('express')
const app = express()

let port = process.env.PORT || 3000;

app.set('views',path.resolve(__dirname,'__views'))
app.set('view engine', 'pug')

app.use(express.static(path.join(__dirname,'public')))

app.get('/', (req, res) => {
  const peoples = [
    "Sarath",
    "Yoshi",
    "Baz"
  ]
  res.render('home',{
    title: 'Express Pug Learning App',
    peoples
  })
})


app.get('/:name', (req, res) => {
  //res.json(req.query)
  res.json(req.params)
})


app.listen(port, () => {
  console.log(`Server listening on ${port}`)
})
