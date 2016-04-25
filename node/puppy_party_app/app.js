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
  var greetings = ["hello", "hi", "let's party"];
  var greeting = greetings[Math.floor((Math.random()* greetings.length))];
  //index refers to index.ejs file, is a path when in another foler ex /public/index.ejs
  //greeting is a variable
  res.render('index', {title: 'hey', message: 'hello there', greeting: greeting});
});

// app.get('/', function(req, res){
//   res.json({message: "hello from index"});
// });

app.get('/puppies', function(req, res){
  var puppies = ["Winston", "Lucy", "Sammy", "Spot", "Cuddles", "Bently", "Ethel"];
  res.render('puppies/index', {puppies: puppies});
});

app.listen(port, function(req, res){
  console.log("zzz snoring puppies");
});
