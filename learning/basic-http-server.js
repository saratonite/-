var http = require('http');
var server = http.createServer(function(req,res){
  res.writeHead(200,{'Content-type':'text/html'});

  res.write("Hey, ");
  res.end('Hello world');
});
server.listen(3333);
console.log('Server listening on port 3333');
