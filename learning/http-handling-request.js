var http = require('http');
var url = require('url');

var server = http.createServer(function(req,res){


  // Handle GET Request

  if(req.method == "GET"){
    console.log(req.method);
    var get_params = url.parse(req.url,true);
    console.log(get_params.query);

    var name = get_params.query.name || 'Foo';
    res.end("Hi "+name);
  }


  // Handling Post request

  if(req.method == "POST"){

    var body = '';

    req.on('data',function(data){

      body += data;

    });

    req.on('end',function(data){
      console.log('End data');
      console.log('The post data is');
      console.log(body);

      res.end('Thanks');
    });

  }

});

server.listen(3333);
console.log("Server listening on 3333");
