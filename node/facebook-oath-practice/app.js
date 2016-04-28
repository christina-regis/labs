var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var logger = require('morgan');
var bodyParser = require('body-parser');
var db = require('./config/db');
var passport = require('passport');
var expressSession = require('express-session');
var cookieParser = require('cookie-parser');
var path = require('path');

app.use(cookieParser());
app.use(expressSession({secret: 'mySecretKey', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//views
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
//settin up the passport strategies
require('./config/passport')(passport);

app.get('/auth/facebook', passport.authenticate('facebook', {scope: 'email'}));

app.get('/auth/facebook/callback', passport.authenticate('facebook', {
  successRedirect: '/',
  failureRedirect: '/'
}));

app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

app.get('/', function(req, res){
  res.render('layout', {user: req.user});
});





app.listen(port, function(){
  console.log('listening on port:', port);
});
