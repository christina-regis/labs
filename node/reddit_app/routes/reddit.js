//routes file
var express = require('express');
var request = require('request');
var router = express.Router();
// call variables outside function so they can be used in browser
var score = [];
var numComments = [];
var myImage = [];

router.get('/', function(req, res){
  var message = '';
  for (var i = 0; i <3; i++) {
     message += '<img src="' + myImage[i] + '"><br><h1> This post has a score of ' + score[i] + ' and ' + numComments[i] + ' comments.</hl><hr>';
  }
  res.send(message);
});

request('http://reddit.com/r/funny.json', function(err, response, body){
  if (err) {
    throw err;
  }
  //convert JSON to a JS object
  var myResult = JSON.parse(body);
  for (var i = 0; i < 3; i++) {
  // drill in to get specific pieces of data
    score.push(myResult.data.children[i].data.score);
    numComments.push(myResult.data.children[i].data.num_comments);
    myImage.push(myResult.data.children[i].data.thumbnail);
}
  console.log('score: ' + score);
  console.log('num_comments ' + numComments);
  console.log('myImage: ' + myImage);
});

module.exports = router;
