var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/birdwatchr', function (err) {
  if (err) {
    return console.log('Cannot connect to database', err);
  }
  return console.log('Database connected.');
});
var db = mongoose.connection;

var routes = require('./routes/index');
var sightings = require('./routes/sightings');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/api/sightings', sightings);

// Any request not handled will fall to these
// catch 404 and forward to error handler
// http://expressjs.com/en/guide/using-middleware.html
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  // pass on to the next middleware
  next(err);
});

// error handlers
app.use(function(err, req, res, next) {
  res.status( err.status || 500);
  res.json({
    message: err.message,
    status: err.status || 500,
    error: err
  });
});

app.listen(process.env.PORT || 3000, function(){
  console.log('listening...');
});
