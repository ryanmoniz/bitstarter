var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var contents = fs.readFileSync('index.html','utf8');
    var buffer = new Buffer(contents,'utf8');
    response.send(buffer.toString());

  //response.send('Hello World 2!');
});

var port = process.env.PORT || 5001;
app.listen(port, function() {
  console.log("Listening on " + port);
});
