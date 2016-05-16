var User = require('../models/user.js');
var users = {};

users.index = function(req, res){
  User.find({}, function(err, users){
    if (err){
      throw err;
    }
    res.json(users);
  });
};

users.create = function(req, res){
  var user = new User();
  user.firstName = req.body.firstName;
  user.lastName = req.body.lastName;
  user.email = req.body.email;

  user.save(function(err){
    if (err){
      throw err;
    }
    res.json({success: true, message: 'User created'});
  });
};

users.update = function(req, res){
  User.findById(req.params.id, function(err, user){
    console.log('update function');
    user.update({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email
    }, function(err, user){
      if(err){
        console.log(err);
      }
    });
    res.json({success: true, message: "user updated"});
  });
};

users.destroy = function(req, res){
  User.findById(req.params.id, function(err, user){
    if(err){
      console.log(err);
    } else{
      user.remove(function(err, todo){
        if (err) {
          console.log(err);
        }
      });
    }
    res.json({success: true, message: "user destroyed"});
  });
};






module.exports = users;
