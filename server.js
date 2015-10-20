var http = require("http");

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Atlas Example is Complete!");
  response.end();
}).listen(8888);
