var express = require('express');
var router = express.Router();
var got = require('../got.json');
var houses = got.houses;

//get localhost:3000/api/houses?name=something
router.get('/', function(req, res){
  var query = req.query;
  var filteredList = [];

  if (query.name){
   for (var i=0; i<houses.length; i++){
      if(houses[i].name.toLowerCase() === query.name.toLowerCase()){
      filteredList.push(houses[i]);
    }
  }
} else {
  filteredList = houses;
}
  res.json(filteredList);
});

//to query data not restful route
//get localhost:3000/api/houses/something
router.get('/:query', function (req, res){
var query = req.params.query;
});

//post localhost:3000/api/houses
router.post('/', function(req, res){
  var body = req.body;

  houses.push(body);

  res.json(body);
});

//put localhost:3000/api/houses/2

// curl -X POST -d "name=Regis" localhost:3000/api/houses
//curl -X PUT -d "name=CHANGED" localhost:3000/api/houses/11
router.put('/:id', function(req, res){
  var id = req.params.id;
  var body = req.body;

  //specify what is being changed
  houses[id].name = body.name;
  houses[id].age = body.age;

  res.json();
});

//get localhost:3000/api/houses/1
router.get('/:id', function(req, res){
  var id = req.params.id;

  res.json(houses[id]);
});

//delete localhost:3000/api/houses/1
router.delete('/:id', function(req, res){
  var id = req.params.id;
  var removed = houses.splice(id, 1);
  res.json(removed);
});


module.exports = router;
