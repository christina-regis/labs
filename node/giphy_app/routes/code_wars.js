//api access token: UPmpvngF77D7wcepXRUx
var express = require('express');
var  router = express.Router();
var request = require('request');

router.get('/', function(req, res){
  res.json({message: 'working!'});
});

//username in get and req.params.username must match
router.get('/:username', function(req, res){
  var searchString = "https://www.codewars.com/api/v1/users/" + req.params.username + "?access_key=UPmpvngF77D7wcepXRUx";
  request(searchString, function(err, response, body){
    var myResult = JSON.parse(body);
    res.send(myResult.name + ' is a member of the ' + myResult.clan + 'clan with ' + myResult.honor + ' honor.');
  });
});

module.exports = router;
