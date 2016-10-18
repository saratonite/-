var express = require('express');

var app = express();

app.set('view engine','ejs');

/* Serve static files */
app.use('/assets', express.static('public'));

app.get('/',function(req,res){
  res.sendFile(__dirname+'/views/index.html');

});

app.get('/home',function(req,res){
  res.render('ejs/home',{'message':'Welcome to home page'});
});

/* Route params */
app.get('/profile/:name',function(req,res){
  res.send('Hello '+req.params.name);
});
app.get('/text',function(req,res){
  res.send('Hello Whatsup!!! <3');
});

app.get('*',function(req,res){
  res.sendFile(__dirname+'/views/404.html');
});

app.listen(3333);
console.log('listening on port 3333');
