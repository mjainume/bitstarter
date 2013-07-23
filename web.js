var express = require('express');
var app = express.createServer(express.logger());
var fs = require('fs');
var string = fs.readFileSync('index.html',"utf8");
var buffer = new Buffer(11201);
buffer.write(string,"utf-8");
app.get('/', function(request, response) {
  response.send(buffer.toString('utf-8',0,buffer.length));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
