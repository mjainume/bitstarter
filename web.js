var express = require('express');
var app = express.createServer(express.logger());
var fs = require('fs');
var string = fs.readFileSync('index.html',"utf8");
var buffer = new Buffer();
buffer.write(string,"utf-8");
app.get('/', function(request, response) {
  response.send(buffer.toString('utf-8',0,27));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
