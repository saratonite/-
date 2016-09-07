var dirname = process.argv[2];
var ext = process.argv[3];

var lslib = require('./lsLib');

lslib(dirname,ext,function(err,data){
  if(data.length){
    data.forEach(function(file){
      console.log(file);
    });
  }
});
