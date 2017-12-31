var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('Happy New Sukin-Bukin Andrew');
});
server.listen(8080);


