var fs = require('fs');

var readfilepath = 'files/greetings.txt';
var writefilepath ='files/greetings-write.txt';
// Read file sync
var data = fs.readFileSync(readfilepath);
console.log('Sync without encoding ',data.toString());
var data = fs.readFileSync(readfilepath,'utf8');
console.info('Sync with utf8 encoding ',data);

// Reading async file using encoding type
fs.readFile(readfilepath,'utf8',function(err,data){
  if(err) {
    console.log('Error Reading file ');
    return;
  }
  console.log(data);

  /// Write file async
  fs.writeFile(,data+': Thank you:',function(err){

    console.log(err);

  });

});
