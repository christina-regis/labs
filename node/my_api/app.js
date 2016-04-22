var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var housesRouter = require('./routes/houses.js');
var bodyParser = require('body-parser');

//modifies request body and adding req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//once this function is run take the output to next function
// app.use(function (req, res, next) {
//   console.log('Time:', Date.now());
//   next();
// });

app.get('/', function(req, res){
  res.json({message: 'hello world'});
});

//middleware
// app.use('/api/houses', function (req, res, next) {
//   console.log('Request Type:', req.method);
//   next();
// });

app.use('/api/houses', housesRouter);

app.listen(port, function(){
  console.log('Listening on port:', port);
});

