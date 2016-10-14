var express = require('express');

var app = express();

app.get('/',function(req,res){
  res.sendFile(__dirname+'/views/index.html');

});
app.get('/text',function(req,res){
  res.send('Hello Whatsup!!! <3');
});

app.listen(3333);
console.log('listening on port 3333');
