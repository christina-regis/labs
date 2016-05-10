var express = require('express');
var router = express.Router();
var Sighting = require('../models/sighting');
var sightings = require('../controllers/sightings_controller');

/* GET sightings listing. */
router.route('/')
  .get(sightings.index)
  .post(sightings.create);

module.exports = router;
