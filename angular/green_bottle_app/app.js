var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

var port = process.env.PORT || 3000;

//mongo connection
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/littleLink', function (err) {
  if (err) {
    return console.log('Cannot connect to database', err);
  }
  return console.log('Database connected.');
});
var db = mongoose.connection;

var app = express();
//to allow front to access back
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,PATCH,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
};
app.use(allowCrossDomain);


//middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

//setting route
var userRoutes = require('./routes/users.js');
app.use('/users', userRoutes);

app.listen(port);
console.log('puppies are listening on port ' + port);
