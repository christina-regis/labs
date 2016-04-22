//mongoose stuff
var mongoose = require('mongoose');
var mongoURL = process.env.MONGO_URL || 'mongodb://localhost/queen-app';
mongoose.connect(mongoURL);

module.exports = mongoose;
