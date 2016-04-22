var express = require('express');
var router = express.Router();
var homes = require('../homes.json');

//get - shows all homes
// router.get('/', function(req, res){
//   res.json(homes);
// });
//post
router.post('/', function(req, res){
  var body = req.body;
  homes.push(body);
  res.json(body);
});
//put
// curl -X POST -d "name=Regis" localhost:3000/api/homes
//curl -X PUT -d "name=CHANGED" localhost:3000/api/homes/71
router.put('/:id', function(req, res){
  var id = req.params.id;
  var body = req.body;
  homes[id].state = body.state;
  homes[id].beds = body.beds;
  res.json(homes[id]);
});
//show - shows home that is specified
router.get('/:id', function(req, res){
  var id = req.params.id;
  res.json(homes[id]);
});
//delete
//curl -X DELETE localhost:3000/api/homes/71
router.delete('/:id', function(req, res){
  var id =req.params.id;
  var removed = homes.splice(id, 1);
  res.json(removed);
});

//accept query parameters for maxPrice, beds, baths and return a filtered list based on the parameters sent.
router.get('/', function(req, res){
  var query = req.query;
  var filteredList = [];
  var filteredList1 = [];
  var filteredList2 = [];
  if(query.maxPrice){
    for (var i = 0; i < homes.length; i++) {
      if(homes[i].price <= parseInt(query.maxPrice)){
        filteredList.push(homes[i]);
      }
    }
  }
  if(query.beds){
    for (var j = 0; j < filteredList.length; j++) {
      if(filteredList[j].beds <= parseInt(query.beds)){
        filteredList1.push(filteredList[j]);
      }
    }
  }
  if(query.baths){
    for (var k = 0; k < filteredList1.length; k++) {
      if(filteredList1[k].baths <= parseInt(query.baths)){
        filteredList2.push(filteredList1[k]);
      }
    }
  }
  res.json(filteredList2);
});


module.exports = router;
