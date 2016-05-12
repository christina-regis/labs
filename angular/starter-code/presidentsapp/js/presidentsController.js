angular.module('ThePresidentsApp', [])
  .controller('PresidentsController', PresidentsController);

//injects so we can use it in our function
PresidentsController.$inject =['$http'];

//$http is the name to use in the function
//arguments and injectons need to match, if there are more injections add more arguments
function PresidentsController($http){
  var self = this;
  self.all = [];
  self.addPresident = addPresident;
  self.getPresidents = getPresidents;
  self.deletePresident = deletePresident;
  self.newPresident = {};

  function getPresidents(){
    $http
      .get('http://localhost:3000/presidents')
      .then(function(response){
        console.log(response);
        self.all = response.data.presidents;
      });
  }
//self.getPresidents(); if you want to use it on the front end
  getPresidents();

  function addPresident(){
    $http
      .post('http://localhost:3000/presidents', self.newPresident)
      .then(function(response){
        getPresidents();
        });
      //clears out form data
        self.newPresident = {};
      }

  function deletePresident (president){
    $http
      .delete('http://localhost:3000/presidents/' + president._id)
      .then(function(response){
        getPresidents();
      });
  }
}
