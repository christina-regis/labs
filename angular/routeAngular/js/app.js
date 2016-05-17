angular
  .module('routeAngularApp', ['ui.router'])
  .config(configuration);

  function configuration($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/state1");

    $stateProvider
      .state('state1', {
        url: '/state1',
        templateUrl: 'partials/state1.html'
      })
      .state('state2',{
        url: '/state2',
        templateUrl: 'partials/state2.html'
      })
      .state('state1.list', {
        url: '/list',
        templateUrl: 'partials/state1.list.html',
        controller: 'AppController as ctrl'
      });
  }
