var mongoose = require('mongoose');
var shortid = require('shortid');

var linkSchema = new mongoose.Schema({
  url       : String,
  shortLink : {type: String, default: shortid.generate},
  title     : String,
  note      : String,
  public    : { type: Boolean, default: true },
  clicks    : { type: Number, default: 0 },
});

linkSchema.methods.trackClick = function() {
  this.clicks++;
};

var Link = mongoose.model('Link', linkSchema);

module.exports = Link;
