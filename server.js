var http = require("http");

var server = http.createServer(function(req, res) {
   res.writeHead(200, {"Content-Type": "text/plain"});
   res.end("Hi!\n");
});

server.listen(3000, "localhost")

