var mongoose = require('mongoose');
var mongoUrl = process.env.MONGO_URL || 'mongodb://localhost/facebook-oath-practice';

mongoose.connect(mongoUrl);





module.exports = mongoose;
