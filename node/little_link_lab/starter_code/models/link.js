var mongoose = require('mongoose');

var linkSchema = new mongoose.Schema({
  url       : String,
  shortLink : String,
  title     : String,
  note      : String,
  public    : { type: Boolean, default: true },
  clicks    : { type: Number, default: 0 },
});

linkSchema.methods.trackClick = function() {
  // do something here
};

var Link = mongoose.model('Link', linkSchema);

module.exports = Link;
