var express = require('express');
var app = express();

//middleware
var logger = require('morgan');
var bodyParser = require('body-parser');

//use middleware- put body parser before routes
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//use require since we took out the mongoose stuff to db
var db = require('./db');

var userRoutes = require('./routes/user');
app.use('/users', userRoutes);
//not needed with controller
// var User = require('./models/user');

// var freddie = new User({
//   firstName: 'Freddie',
//   email: 'freddie@queen.uk',
//   meta: {
//     age: 45
//   }
// });

// freddie.sayHello();


var port = process.env.PORT ||3000;
app.listen(port, function(){
  console.log('Magic is happening on port ' + port);
});
