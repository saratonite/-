var fs = require('fs');
var path = require('path');
var directory = process.argv[2];
var filtter_extension = process.argv[3];

fs.readdir(directory,function(err,content){

   //console.log(content);

   content.forEach(function(file){

     if(path.extname(file) == '.'+filtter_extension){
       console.log(file);
     }

   });
});
