var fs = require('fs');
var path = require('path');
module.exports = function lsLib(dir,ext,callback){
  var ext = '.'+ext;
  var filelist = [];
  fs.readdir(dir,function(err,content){

    if(err){
      return callback(err);
    }
     content.forEach(function(file){

       if(path.extname(file) == ext){
         filelist.push(file);
       }

     });

     callback(null,filelist);
  });

}
