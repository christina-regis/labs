angular
  .module('WishListApp')
  .controller('WishListController', WishListController);

function WishListController() {
  var self = this;
  self.list = [
    {name: 'pony',  isGranted: false, imageUrl: 'http://images.mentalfloss.com/sites/default/files/styles/article_640x430/public/ponyhed.png'},
    {name: 'puppy', isGranted: true, imageUrl: 'http://www.petmd.com/sites/default/cache/imagecache/node-gallery-display/shutterstock_19820554-slide1.jpg'}
  ];
  self.make = make;
  self.add = add;
  self.remove = remove;


  function add(){
    console.log('add function');
    var newEntry = {
      name: self.wish,
      isGranted: false,
      imageUrl: self.imageUrl
    };
    self.list.push(newEntry);
    console.log(self.list);
  }

  function make(wish) {
    wish.isGranted = true;
    console.log(wish, 'is granted!');
  }

  function remove(wish) {
    self.list.splice(wish, 1);
  }
}
