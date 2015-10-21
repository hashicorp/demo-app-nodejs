var http = require("http");

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello, World! This is a Node.js app version 06.");
  response.end();
}).listen(8888);

var fs = require('fs');

fs.readFile('/application/vault_data.json', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  
  console.log(data);
  http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Writing out Vault secrets for the Node.js app.");
    response.write(data);
    response.end();
  }).listen(8888);
});
