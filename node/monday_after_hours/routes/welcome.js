var express = require('express');
var router = express.Router();
router.get('/', function(req, res){
    res.send("Hello and Welcome!");
});

router.post('/ping', function(req, res){
  res.send("PONG");
});

router.get('/pong', function(req, res){
  res.send("PING");
});

router.get('/eight_ball', function(req, res){
  var array = ["Are you sure?", "All signs point to YES", "Never"];
  res.send(array[Math.floor((Math.random()*3))]);
});

router.get('/rps', function(req, res){
  var array = ["Rock", "Paper", "Scissors"];
  res.send(array[Math.floor((Math.random()*3))]);
});

greeting = {
  en: "hello",
  fr: "Bonjour",
  de: "Guten Tag"
};
router.get('/greeting', function(req, res){
  res.send(greeting[req.query.lang]);
});

//GET '/search?q=yellow+jackets' => "You searched for yellow jackets"
router.get('/search', function(req, res){
  res.send("You searched for" + req.query.q);
});

//GET '/color?name=blue'   => '<h1 style="background: blue">Blue</h1>'
router.get('/colou?rs?', function(req, res){
  res.send('<h1 style="background: ' + req.query.name +'">'+ req.query.name +'</h1>');
});

// GET '/auth/google?code=123'  => "Log in with google and 123"
router.get('/auth/google', function(req, res){
  res.send("Log in with google and " + req.query.code);
});

// GET '/auth/twitter?code=321' => "Log in with twitter 321"
router.get('/auth/twitter', function(req, res){
  res.send("Log in with twitter and " + req.query.code);
});



module.exports = router;
