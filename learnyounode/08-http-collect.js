var http = require('http');
var url = process.argv[2];
http.get(url,function(request){
  var allData = "";
  request.setEncoding('utf8');
  request.on('data',function(data){

    allData += data;

  });
  request.on('end',function(){
    console.log(allData.length);
    console.log(allData);
  });
})
