var http = require('http');
var fs = require('fs');

server = http.createServer(function(req,res){
  res.writeHeader(200,{'Content-Type':'text/html'});
  var rs = fs.createReadStream('files/web/index.html','utf8');
  rs.pipe(res);

});

server.listen(3333);
console.log('Server listening on port 3333');
