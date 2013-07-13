var express = require("express");
var fs = require("fs");

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var indexHTMLContent = fs.readFileSync("index.html");
    response.send(indexHTMLContent.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Really Listening on " + port);
});