// server.js
// where your node app starts

// init project
var express = require('express');
var bodyParser = require('body-parser')

var app = express();


var server = require('http').Server(app);
var io = require('socket.io')(server);

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// http://expressjs.com/en/starter/basic-routing.html
app.get("/reload", function (request, response) {
  var id = request.query.id;
  console.log(request.query);
  io.emit('css', { id: id });
  response.send(id);
});


io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  //socket.on('my other event', function (data) {
  //  console.log(data);
  //});
});




// listen for requests :)
var listener = server.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
