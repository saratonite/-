var fs = require('fs');

var rs = fs.createReadStream('files/greetings.txt','utf8');

var ws = fs.createWriteStream('files/piped-greetings.txt');
// Pipe to Write Stream

rs.pipe(ws);
