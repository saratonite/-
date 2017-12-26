document.addEventListener('DOMContentLoaded', () => {
  console.log('Express / Socket.io Example ')
  var socket = io();
  socket.on('chat_message', function(msg){
    console.log('Message From Server : ', msg)
    addMessage(msg,'server')
  })

  var sendButton = document.querySelector('#msgSend')
  var msgInput = document.querySelector('#msgInput')

  sendButton.addEventListener('click', function() {

    addMessage(msgInput.value, 'me')
    socket.emit('chat_message',msgInput.value)
    msgInput.value = '';

  })

})

function addMessage(text,side) {
  var p = document.createElement('p')
      p.textContent = text;
      p.className = 'message';
      p.classList.add(side);

    var messageArea = document.getElementById('message-area')
    messageArea.appendChild(p);
}
