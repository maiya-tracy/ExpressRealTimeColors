
var express = require("express");

var path = require("path");
var session = require('express-session');

var app = express();
var bodyParser = require('body-parser');
const server = app.listen(1337);
const io = require('socket.io')(server);
var count = 0;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '5mb' }));

app.use(express.static(path.join(__dirname, "./static")));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');


app.get('/', function(req, res) {
  res.render("index");
})

io.on('connection', function (socket) {
  socket.on('greenclick', function() {
    // console.log("rawr");
    color = 'green'
    io.emit('updateAllClients', {color: color});
  });
  socket.on('blueclick', function() {
    // console.log("rawr");
    color = 'blue'
    io.emit('updateAllClients', {color: color});
  });
  socket.on('redclick', function() {
    // console.log("rawr");
    color = 'red'
    io.emit('updateAllClients', {color: color});
  });
  socket.on('yellowclick', function() {
    // console.log("rawr");
    color = 'yellow'
    io.emit('updateAllClients', {color: color});
  });
  socket.on('blackclick', function() {
    // console.log("rawr");
    color = 'black'
    io.emit('updateAllClients', {color: color});
  });
  socket.on('whiteclick', function() {
    // console.log("rawr");
    color = 'white'
    io.emit('updateAllClients', {color: color});
  });
});
