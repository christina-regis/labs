var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var homesRouter = require('./routes/homes.js');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
  res.json({message: 'hello world'});
});

app.use('/api/homes', homesRouter);

app.listen(port, function(){
  console.log('Listening on port:', port);
});






