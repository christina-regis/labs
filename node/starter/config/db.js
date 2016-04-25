var mongoose = require('mongoose');

// Use different database URIs based on whether an env var exists.
var mongoUri = process.env.MONGOLAB_URI || 'mongodb://localhost/foursquare_api_app';

mongoose.connect(mongoUri);

module.exports = mongoose;
