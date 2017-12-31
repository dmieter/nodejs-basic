//var http = require('http');
//
//var server = http.createServer(function(req, res) {
//  res.writeHead(200);
//  res.end('Happy New Sukin-Bukin Andrew');
//});
//server.listen(8080);


var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/andrewofwonderfulmoscow', function (req, res) {
  res.send('Happy New Sukin-Bukin Andrew!')
})

app.listen(8000, function () {
  console.log('Example app listening on port 8000!')
})

