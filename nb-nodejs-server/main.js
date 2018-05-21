//var http = require('http');
//
//var server = http.createServer(function(req, res) {
//  res.writeHead(200);
//  res.end('Happy New Sukin-Bukin Andrew');
//});
//server.listen(8080);


var express = require('express');
var app = express();
var path = require('path')

app.use(express.static(path.join(__dirname, 'gt/html')));

app.get('/', function (req, res) {
  res.send('DMIETER.ORG!');
});

app.get('/andyofwonderfulmoscow', function (req, res) {
  res.send('Happy New Sukin-Bukin Andrew 2💩18!');
});

app.get('/iness', function (req, res) {
  res.send('Inessa 🐱! Happy Perfect 🔬 New Year 2🎅18! ( ͡° ͜ʖ ͡°)🤘');
});

app.get('/gt/4founders', function (req, res) {
  res.sendFile(path.join(__dirname + "/gt/html/championship-of-the-four-founders.html"));
});

app.get('/gt/christmas-2017', function (req, res) {
  res.sendFile(path.join(__dirname + "/gt/html/christmas-cup-2017.html"));
});

app.get('/gt/junior/2018', function (req, res) {
  res.sendFile(path.join(__dirname + "/gt/html/junior-2018.html"));
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

