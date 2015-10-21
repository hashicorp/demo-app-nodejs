var http = require("http");
var fs = require('fs');

fs.readFile('/application/vault_data.json', function (err, html) {
  http.createServer(function(request, response) {
    response.writeHeader(200, {"Content-Type": "text/html"});
    response.write("Hello, World! This is a Node.js app version 08.<br /><br />");

    if (err) {
      response.write(err);
      return console.log(err);
    }

    response.write("Writing out Vault secrets for the Node.js app.<br /><br />");
    response.write(html);
    response.end();
  }).listen(8888);
});
