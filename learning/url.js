var url = require('url');

var adr = 'http://localhost:8080/default.htm?year=2017&month=february';

var q = url.parse(adr,true);

console.log(q.host);
console.log(q.path);
console.log(q.pathname);
console.log(q.port);
console.log(q.protocol);
console.log(q.query);
console.log(q.search);
