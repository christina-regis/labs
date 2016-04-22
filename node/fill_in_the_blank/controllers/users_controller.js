var User = require('../models/user.js');
var users = {};

//create action to display all users
users.index = function(req, res) {
  User.find({}, function(err, users){
    if(err){
      throw err;
    }
    res.json(users);
  });
};

//create action to add a new user
users.create = function(req, res) {
  var user = new User();
  user.user_name = req.body.user_name;
  user.email = req.body.email;
  //depends on how you get the data, if it's input as a string the string would need to be split so it's not just one string
  user.friends = req.body.friends.split(',');
  user.age = req.body.age;

  user.save(function(err){
    if(err){
      throw err;
    }
    res.json({success: true, message: 'User created'});
  });
};

//create action to show a single user
users.show = function(req, res) {
  User.find({email: req.params.email}, function(err, user){
    if(err){
      throw err;
    }
    res.json(user);
  });
};

//create action to edit a single user
users.update = function(req, res) {
  //find by an attribute (email since it's required) and update an attribute (user_name)
  User.findOneAndUpdate({email: req.params.email},{user_name: req.body.user_name}, function(err, user){
    if(err){
      throw err;
    }
    res.json(user);
  });
};

//create action to delete a single user
users.destroy = function(req, res) {
  User.findOneAndRemove({email: req.params.email}, function(err, user){
    if(err){
      throw err;
    }
  res.json(user);
  });
};

module.exports = users;



