var express = require('express');
var app = express();

app.set('views', './views');
app.set('view engine', 'jade');

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/jade', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!'});
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
