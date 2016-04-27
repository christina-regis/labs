var linksController = require('../controllers/links.js');
var express = require('express');
var router = express.Router();

router.route('/')
  .get(linksController.index)
  .post(linksController.create);

 //router.route('/:id')
  // .get(linksController.show);
//   .put(linksController.update)
//   .delete(linksController.destroy);

module.exports = router;
