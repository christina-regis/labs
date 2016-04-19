var express = require('express');
var app = express();
var welcome = require('./routes/welcome.js');
var port = process.env.PORT || 3000;

app.use('/', welcome);


app.listen(port, function(){
  console.log('listening to port', port);
});
