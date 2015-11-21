var http = require("http"),
    fs = require("fs"),
    vaultDir = "/application/vault/",
    files = [],
    port = 8888;

function handleRequest(req, res) {
  res.writeHead(200, {"Content-type":"text/html"});
  res.write("Hello, World! This is Node.js app v38.");

  files = fs.readdirSync(vaultDir);

  for(var i = 0; i < files.length; i++) {
    res.write(fs.readFileSync(vaultDir + files[i], "binary"));
  }

  res.end();
}

http.createServer(handleRequest).listen(port);

console.log("Static file server running at\n  => http://localhost:" + port);
