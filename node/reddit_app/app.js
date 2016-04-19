var express = require('express');
//not needed in this file just routes
//var request = require('request');
var app = express();
var port = process.env.PORT || 3000;
var redditRouter = require('./routes/reddit');

app.get('/', function(req, res){
  res.json({message: 'hello world!'});
});

//name spacing - adds reddit uri to routes in reddit.js file
app.use('/reddit', redditRouter);


app.listen(port, function(){
  console.log('Server listening on port ' + port);
});
