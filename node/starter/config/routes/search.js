var express = require('express');
var router  = express.Router();
var request = require('request');

/* GET home page. */
var searchString = "https://api.foursquare.com/v2/venues/search?client_id=WA1NM12DBKJTJPK3U0ZM5KOW5VWMOMLUPQ4OFGSNRTUUST2W&client_secret=RFURHQJZFOL3MINVCY53TPQZYJZHZV4MQS52ZFDKPFU2KO4Q&ll=40.7,-74&query=cleveland&v=20140806&m=foursquare";

router.route('/')
  .get(function(req, res) {
	   res.render('index');
	 });

//checks to see if foursquare is connected
router.route('/connect')
  .get(function(req, res){
    request(searchString, function(err, response, body){
      res.send(body);
    });
  });

/* POST to search */
router.route('/search')
	.post(function(req, res) {
    var search = req.body.search;
    request("https://api.foursquare.com/v2/venues/search?client_id=WA1NM12DBKJTJPK3U0ZM5KOW5VWMOMLUPQ4OFGSNRTUUST2W&client_secret=RFURHQJZFOL3MINVCY53TPQZYJZHZV4MQS52ZFDKPFU2KO4Q&near=" + search.place + "&query=" + search.query + "&v=20140806&m=foursquare", function(err, req, body){
		res.send(body); // return some JSON
    });
	});

module.exports = router;
