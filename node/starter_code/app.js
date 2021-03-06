var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/littleLink', function (err) {
  if (err) {
    return console.log('Cannot connect to database', err);
  }
  return console.log('Database connected.');
});
var db = mongoose.connection;


var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


app.listen(port, function() {
  console.log('Listening on port: ', port);
});
