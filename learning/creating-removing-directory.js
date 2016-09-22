var fs = require('fs');

// Make Directory

fs.exists('files/newdir',function(exist){

  console.log('Is exists: ',exist);
  if(!exist){
    // Make new directory
    fs.mkdir('files/newdir');
  }
  else{
    // Removing Directory
    fs.rmdir('files/newdir',function(error){
      if(!error){

        console.log("Directory Removed !!!");

      }



    });
  }

});

// Removing files
fs.exists('files/greetings-write.txt',function(exists){
  if(exists){
    fs.unlink('files/greetings-write.txt');
  }
});
