//generated github token - 532d51f78f0007b321c7bae5bb7b0b6ddd44338d
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var logger = require('morgan');


var request = require('request');

var options = {
  url: 'https://api.github.com/teams/1846681/members?access_token=532d51f78f0007b321c7bae5bb7b0b6ddd44338d',
  headers: {
    'User-Agent': 'node.js'
  }
};

//using morgan- takes the place of the app.use function below with req.path, req.method etc)
app.use(logger('dev'));

app.use(function(req, res, next){
  //shows what method(GET, POST, PUT, DELETE) is requesting to what path (/) from what ip address
  console.log(req.method + " request to" + req.path + " from " + req.ip);
  next();
});

app.get('/', function(req, res){
  request(options, function(err, response, body){
    res.send(body);
  });
});


app.listen(port, function(){
  console.log('Listening on port: ', port);
});
