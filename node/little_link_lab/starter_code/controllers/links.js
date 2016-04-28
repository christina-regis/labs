var shortid = require('shortid');
var Link = require('../models/link.js');
var controller = {};

controller.index = function(req, res){
    Link.find({}, function(err, controller){
      if (err){
        throw err;
      }
      res.json(controller);
    });
};

controller.create = function(req, res){
  var link = new Link();
  link.url = req.body.url;
  //link.shortLink = shortid.generate(req.body.url);
  link.title = req.body.title;
  link.note = req.body.note;
  link.public = req.body.public;
  link.save(function(err){
    if (err){
      throw err;
    }
  res.json(link);
  });
};

module.exports = controller;
