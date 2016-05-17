angular
  .module('routeAngularApp')
  .controller('AppController', AppController);

function AppController(){
  var self = this;
  self.hello = "puppies!";
  self.items = ["A", "list", "of", "items"];
}
