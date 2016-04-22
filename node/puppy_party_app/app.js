var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var homeRouter = require('./routes/home_router.js');
var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

app.use(morgan('combined'));

//serve static assets- put above routes
app.use(express.static('public'));
//use ejs for templates
app.set('view engine', 'ejs');

app.get('/', function(req, res){
  //index refers to index.ejs file
  res.render('index', {title: 'hey', message: 'hello there'});
});

// app.get('/', function(req, res){
//   res.json({message: "hello from index"});
// });

app.listen(port, function(req, res){
  console.log("zzz snoring puppies");
});
