const path = require('path')
const express = require('express')
const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/mongoose_test', (error) => {
  if(error) throw error;
  console.log('Successfully connected')
})

const port = process.env.PORT || 3000

const app = express();


app.get('/', (req, res) => {
  res.send('It works')
})

app.listen(port, ()=> {
  console.log(`Server listening on ${port}`)
})
