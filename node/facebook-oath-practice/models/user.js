var mongoose =require('mongoose');
var userSchema = mongoose.Schema({
  fb: {
    id: String,
    access_token: String,
    firstName: String,
    lastName: String,
    email: String
  }
});


var User = mongoose.model('User', userSchema);




module.exports = User;
