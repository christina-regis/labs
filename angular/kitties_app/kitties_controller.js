angular.module('KittiesApp')
  .controller('KittiesController', KittiesController);

function KittiesController(){
  var self = this;
  self.catName = "";
  self.monthsOld = "";
  self.gender = "";
  self.image = "";
  self.kitties = [
    {
      catName: 'Karl',
      monthsOld: 5,
      gender: 'boy',
      image: "images/carl.png",
      adopted: true,
    },
    {
      catName: 'Jack',
      monthsOld: 4,
      gender: 'boy',
      image: "images/jack.png",
      adopted: false
    },
    {
      catName: 'Oscar',
      monthsOld: 2,
      gender: 'boy',
      image: "images/oscar.png",
      adopted: false
    },
    {
      catName: 'Princess Mew',
      monthsOld: 3,
      gender: 'girl',
      image: "images/princessmew.png",
      adopted: false
    }
  ];
  self.add = add;
  self.remove = remove;
  self.adopted = adopted;

  function add(){
    console.log("add function");
    var newEntry = {
      catName: self.catName,
      monthsOld: self.monthsOld,
      gender: self.gender,
      image: self.image,
      adopted: false
    };
    self.kitties.push(newEntry);
  }

  function remove(index){
    console.log("remove function");
    self.kitties.splice(index, 1);
  }
  function adopted(index){
    self.kitties[index].adopted = true;
  }
}
