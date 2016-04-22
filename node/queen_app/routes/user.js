var usersController = require('../controllers/users_controller');
var express = require('express');
var router = express.Router();


router.route('/')
  .get(usersController.index)
  .post(usersController.create);


router.route('/:email')
  .get(usersController.show)


  module.exports = router;
