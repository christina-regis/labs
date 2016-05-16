angular.module('greenBottleApp')
  .controller('UserController', UserController);

UserController.$inject = ['$http'];

function UserController($http){
  var self = this;
  self.hello = "Users";
  self.getUser = getUser;
  self.addUser = addUser;
  self.deleteUser = deleteUser;
  self.newUser = {};
  self.allUsers = [];

  function getUser(){
    $http
      .get('http://localhost:3000/users')
      .then(function(response){
        console.log(response);
        self.allUsers = response.data;
      });
  }
  getUser();

  function addUser(){
    $http
      .post('http://localhost:3000/users', self.newUser)
      .then(function(response){
        console.log(response);
        getUser();
      });
      self.newUser = {};
  }

  function deleteUser(user){
    $http
      .delete('http://localhost:3000/users/' + user._id)
      .then(function(response){
        getUser();
      });
  }

}
