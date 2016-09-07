/* Step : 3 , I/O */

var fs = require('fs');
var buff = fs.readFileSync(process.argv[2]);
// console.log(buff);
var content = buff.toString();
var newlines = content.split('\n');

console.log(newlines.length-1);
