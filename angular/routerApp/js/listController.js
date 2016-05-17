angular.module('routerApp')
  .controller('ListController', ListController);

  function ListController($http, $stateParams){
    var self = this;
    //s in searchString is the same as in the input
    var searchString = encodeURIComponent($stateParams.s);

    $http({
      method: 'GET',
      url: 'http://www.omdbapi.com/?s=' + searchString
    }).then(function(response){
      self.results = response.data.Search;
    });
  }
