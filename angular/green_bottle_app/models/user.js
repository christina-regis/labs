var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {type: String, required: true},
});

var User = mongoose.model('User', userSchema);

module.exports = User;
