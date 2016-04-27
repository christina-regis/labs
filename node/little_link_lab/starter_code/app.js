var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
var router = require('./routes/links.js');
var shortid = require('shortid');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/littleLink', function (err) {
  if (err) {
    return console.log('Cannot connect to database', err);
  }
  return console.log('Database connected.');
});
var db = mongoose.connection;

var app = express();

//middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

//to test that ajax is connecting to backend
// app.get('/api/test', function(req, res){
//   res.json({message: "successful ajax call"});
// });
//test body parser is working with a post request
// app.post('/api/test', function(req, res){
//  console.log(request.body)
//   res.json({message: "successful ajax call"});
// });

app.get('/:shortLink', function(req, res){
  req.params.shortlink.redirect

});

app.use('/api/links', router);

app.listen(port, function() {
  console.log('Listening on port: ', port);
});
