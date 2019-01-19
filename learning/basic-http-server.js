/**
 * Basic http server
 */
var http = require("http");
var server = http.createServer(function(req, res) {
  console.log(req.url);

  res.setHeader("Foo", "Bar");
  res.writeHead(200, { "Content-type": "text/html" });

  // Simple router
  switch (req.url) {
    case "/":
      res.write("Home page ");
      break;
    case "/about":
      res.write("about page ");
      break;
    default:
      res.write("Page Not found");
  }
  res.end();
});

server.listen(3333);
console.log("Server listening on port 3333");
