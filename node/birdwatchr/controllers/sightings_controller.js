var Sighting = require('../models/sighting.js');
var rp = require('request-promise');
var controller = {};

controller.index = function(req, res, next) {
  // Update this to use promises!
  Sighting.find({}, function(err, sightings){
    if(err) {
      next(err);
    }
    res.json(sightings);
  });
};

controller.create = function(req, res, next){
  var sighting = new Sighting();
  sighting.name = req.body.name;
  sighting.save(function(err){
    if (err){
      throw err;
    } res.json(sighting);
  });
};



module.exports = controller;
