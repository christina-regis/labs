// Owner
// Christina Regis
// Client id
// WA1NM12DBKJTJPK3U0ZM5KOW5VWMOMLUPQ4OFGSNRTUUST2W
// Client secret
// RFURHQJZFOL3MINVCY53TPQZYJZHZV4MQS52ZFDKPFU2KO4Q

var express = require('express');
var app = express();
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var db = require('./config/db');
var routes = require('./config/routes/search');
var port = process.env.PORT || 3000;

// Configure the application (and set its title!).
app.set('title', 'Foursquare App');
app.set('safe-title', 'Foursquare App');
// EJS view engine config
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Create local variables for use thoughout the application.
app.locals.title = app.get('title');

// Middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes to static assets
app.use(express.static(path.join(__dirname, 'public')));

// Define routes -- this MUST be below Middleware
app.use('/', routes);

app.listen(port, function(){
	console.log('Magic is happening on port', port);
});

