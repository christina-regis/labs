var mongoose = require('mongoose');

var sightingSchema = new mongoose.Schema({
  name: { type: String, required: true }
});

var Sighting = mongoose.model('Sighting', sightingSchema);

module.exports = Sighting;
