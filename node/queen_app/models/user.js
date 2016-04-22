var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  //required and unique for email are validations
  email: {type: String, required: true, unique: true},
  meta: {
    age: Number,
    website: String,
    address: String,
    country: String
  },
  createdAt: Date,
  updatedAt: Date
});

userSchema.methods.sayHello = function(){
  console.log('Hi, ' + this.firstName);
};

//var User is our model
var User = mongoose.model('User', userSchema);
//makes User available to other pages/files
module.exports = User;
