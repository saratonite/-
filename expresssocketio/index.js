const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')
const app = express()

const server = http.createServer(app)

const io = socketio(server)

io.on('connection', (socket) => {
  console.log('A user connected !')

  socket.on('chat_message', (msg) => {
    console.log('Message from client : ', msg)
    socket.broadcast.emit('chat_message',msg)
  })
})

const port = process.env.PORT || 3000

app.use(express.static(path.join('public')))

app.set('view engine','pug')
app.set('views',path.join(__dirname, 'views'))

app.get('/', (req, res) => {
  res.render('index')
})

server.listen(port, ()=> {
  console.log(`Server started on ${port}`)
})
