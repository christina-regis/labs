angular
  .module('myApp')
  .controller('AppController', AppController)
  .filter('nameco', function(){
    return function(input){
      return input + 'co';
    };
  })
  .filter('checkmark', function(){
    return function(input){
      if (input) {
        return '\u2713';
      } else if (!input) {
        return '\u2718';
      }
    };
  })
  .filter('price', function(){
    return function(num){
      if (num === 0){
        return 'FREE';
      } else {
        return num;
      }
    };
  })
  .filter('stock', function(){
    return function(num){
      if (num === 0){
        return 'Out of stock';
      } else if(num < 5){
        return (num + 'left in stock');
      } else {
        return '';
      }
    };
  })
  .filter('clean', function(){
    return function(word){
      return word.replace(/fuck|shit|ass|bitch/gi, '!@#$');
    };
  });


//add namecoFilter as argument in AppController to use in controller instead of html
function AppController() {
  var self = this;
  self.hello = 'Hello World';
  self.date = new Date();
  self.name = 'phil';
  self.true = true;
  self.false = false;
  self.num = 0;
  self.word = 'ass';
  //self.name = namecoFilter('phil')
  self.people = [
    'Jon Snow',
    'Daenerys Targaryen',
    'Melisandre',
    'Arya Stark',
    'Sansa Stark',
    'Tyrion Lannister',
    'Cersei Lannister',
    'Gregor Clegane',
    'Khal Drogo',
    'Joffrey Baratheon',
    'Margaery Tyrell',
    'Bran Stark',
    'Ramsay Bolton',
    'Stannis Baratheon',
    'Theon Greyjoy',
    'Brienne of Tarth',
    'Ygritte',
    'Jamie Lannister'
  ];
}
