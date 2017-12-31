//var http = require('http');
//
//var server = http.createServer(function(req, res) {
//  res.writeHead(200);
//  res.end('Happy New Sukin-Bukin Andrew');
//});
//server.listen(8080);


var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('DMIETER.ORG!');
});

app.get('/andyofwonderfulmoscow', function (req, res) {
  res.send('Happy New Sukin-Bukin Andrew 2💩18!');
});

app.get('/iness', function (req, res) {
  res.send('Inessa 🐱! Happy Perfect 🔬 New Year 2🎅18! ( ͡° ͜ʖ ͡°)🤘');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

