var http = require("http"),
    url = require("url");
    queryString = require("querystring");

var server = http.createServer(function(req, res) {
   res.writeHead(200, {"Content-Type": "text/plain"});


   params = url.parse(req.url, true).query
   console.log(params);
   if (params["burden"] === "100") {
     for (;;) {
       // intentinoal inifinite loop
     }
   }

   res.end("Hello\n");
});

server.listen(8080, "localhost")

