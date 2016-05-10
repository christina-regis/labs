angular.module('IntroToAngularApp')
  .controller('HomeController', HomeController);
//second HomeController is referenced below
function HomeController() {
  var self = this;
  self.awesome = true;
  self.numbers = [4, 5, 12, 9, 16];
  self.puppies = 'ruff';
  self.object = {cats: 'meow'};
}
