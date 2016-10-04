var fs = require('fs');

// Read Strwam

var rs = fs.createReadStream('files/greetings.txt','utf8');
var readData = '';
rs.on('data',function(chunk){
  console.log('Chunck size : '+chunk.length);
  readData += chunk;
  console.log('Total data readed : '+readData.length);
  console.log('------------------------------------------');
});

rs.on('end',function(){

  console.log('Finished data reading');
  console.log('Total data size : '+readData.length);
  console.log('------------------------------------------');

  // Write Stream

  var ws = fs.createWriteStream('files/new-greetingfile.txt');
  ws.write(readData);
  ws.on('finish',function(){
    console.log('File has been written');
  });
  ws.end();




});
