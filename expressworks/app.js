var express = require('express');
var nunjucks = require('nunjucks')


var app = express();

/* Set ejs as template engine */
app.set('view engine','ejs');

/* Configure nunjucks */
nunjucks.configure('views', {
    autoescape: true,
    express: app
});

/* Serve static files */
app.use('/assets', express.static('public'));

/* Send Response  as plain text */

app.get('/text',function(req,res){
  res.send('Hello Whatsup!!! <3');
});

/* Send Response as html file */
app.get('/',function(req,res){
  res.sendFile(__dirname+'/views/index.html');
});

/* Render Response using EJS Template engine */
app.get('/home',function(req,res){
  res.render('ejs/home',{'message':'Welcome to home page'});
});

/* Rende Response using Nunjucks */
app.get('/nunjucks',function(req,res){

  res.render('nunjucks/home.html');
});

/* Route params */
app.get('/profile/:name',function(req,res){
  res.send('Hello '+req.params.name);
});

////////////Form Handling
/* POST Request */
app.get('/contact',function(req,res){
  res.render('nunjucks/contact.html');
});

app.post('/contact',function(req,res){
  console.log(req.baseUrl);
  res.send('Contact submitted');
});


app.all('*',function(req,res){
  res.sendFile(__dirname+'/views/404.html');
});

app.listen(3333);
console.log('listening on port 3333');
