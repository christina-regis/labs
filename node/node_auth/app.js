var express      = require('express');
var logger       = require('morgan');
var bodyParser   = require('body-parser');
var cookieParser = require('cookie-parser');
var session      = require('express-session');
var db           = require('./db.js');
var User         = require('./models/user.js');
var port         = process.env.PORT || 3000;
var app          = express();
var passport = require('passport');
var Strategy = require('passport-local').Strategy;

// Configure view engine to render EJS templates
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// Use application-level middleware for common functionality, including
// logging, parsing, and session handling.
app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'unicorns', resave: false, saveUninitialized: false }));
//passport
app.use(passport.initialize());
app.use(passport.session());
// Define routes
app.get('/', function(req, res) {
  res.render('home', { user: req.user });
});

app.get('/login', function(req, res) {
  res.render('login');
});

app.post('/login',
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

app.post('/signup', function(req, res) {
  var body = req.body;

  var user = new User();

  user.username = body.username;
  user.password = user.encrypt(body.password);

  user.save(function(err) {
    if (err) throw err;
    res.json({ message: 'User created successfully!', results: user });
  });
});

app.get('/logout',
  function(req, res){
    req.logout();
    res.redirect('/');
  });

//passport
passport.use(new Strategy(
  function(username, password, cb) {
    User.findOne({username: username}, function(err, user) {
      if (err) { return cb(err); }
      if (!user) { return cb(null, false); }
      if (!user.validPassword(password)) { return cb(null, false); }
      return cb(null, user);
    });
  }));

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(user, cb) {
  User.findOne({username: user.username}, function (err, user) {
    if (err) { return cb(err); }
    cb(null, user);
  });
});

//login code from search
// app.post('/login',
//   passport.authenticate('local', { successRedirect: '/',
//                                    failureRedirect: '/login',
//                                    failureFlash: true })
// );

// passport.authenticate('local', { failureFlash: 'Invalid username or password.' });
// passport.authenticate('local', { successFlash: 'Welcome!' });

// var passport = require('passport')
//   , LocalStrategy = require('passport-local').Strategy;

// passport.use(new LocalStrategy(
//   function(username, password, done) {
//     User.findOne({ username: username }, function (err, foundUser) {
//       if (err) { return done(err); }
//       if (!foundUser) {
//         return done(null, false, { message: 'Incorrect username.' });
//       }
//       if (!foundUser.validatePassword(password)) {
//         return done(null, false, { message: 'Incorrect password.' });
//       }
//       return done(null, user);
//     });
//   }
// ));

//   app.use(express.static('public'));
//   app.use(express.cookieParser());
//   app.use(express.bodyParser());
//   app.use(express.session({ secret: 'keyboard cat' }));
//   app.use(passport.initialize());
//   app.use(passport.session());
//   app.use(app.router);

// passport.serializeUser(function(user, done) {
//   done(null, user.id);
// });

// passport.deserializeUser(function(id, done) {
//   User.findById(id, function(err, user) {
//     done(err, user);
//   });
// });



app.listen(port, function() {
  console.log('Listening on port: ', port);
});
