/* Step 4 Async IO */
var fs = require('fs');
var file = process.argv[2];
fs.readFile(file,function(err,fileContent){
	var str = fileContent.toString();
	var lines = fileContent.toString().split('\n').length - 1;
	console.log(lines);
});
