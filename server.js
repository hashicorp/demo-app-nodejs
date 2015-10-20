var http = require("http");

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello, World! This is a Node.js app 02.");
  response.end();
}).listen(8888);
