angular
  .module('routerApp', ['ui.router'])
  .config(configuration);

  function configuration($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/search');

    $stateProvider
      .state('search', {
        url: '/search',
        templateUrl: 'partials/search.html',
        controller: 'SearchController as search'
      })

      .state('list', {
        url: '/list?s',
        templateUrl: 'partials/list.html',
        controller: 'ListController as list'
      })

      .state('movie', {
        url: '/movie/:id',
        templateUrl: 'partials/movie.html',
        controller: 'MovieController as movie'
      });



  }
