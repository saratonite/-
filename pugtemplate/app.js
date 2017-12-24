const path = require('path')
const express = require('express')
const app = express()

let port = process.env.PORT || 3000;

app.set('view engine', 'pug')
app.set('views',path.resolve(__dirname,'__views'))

app.get('/', (req, res) => {
  res.render('home',{
    title: 'Express Pug Learning App'
  })
})


app.get('/:name', (req, res) => {
  //res.json(req.query)
  res.json(req.params)
})


app.listen(port, () => {
  console.log(`Server listening on ${port}`)
})
