var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(morgan('combined'));

//serve static assets- put above routes
app.use(express.static(__dirname + '/public'));
//use ejs for templates
app.set('view engine', 'ejs');

app.get('/', function(req, res){
  //index refers to index.ejs file, is a path when in another foler ex /public/index.ejs
  //greeting is a variable
  res.render('index', {message: 'hello there'});
});




app.listen(port, function(req, res){
  console.log("zzz snoring puppies");
});
