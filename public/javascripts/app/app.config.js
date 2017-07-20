(function() {
  'use strict'

  angular.module('app')
    .config(config)

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

  function config($stateProvider, $urlRouterProvider, $locationProvider){
    $locationProvider.html5Mode(true)

    $stateProvider
      .state({
        name: 'app',
        abstract: true,
        component: 'app',
      })
      .state({
        name: 'dashboard',
        parent: 'app',
        url: '/',
        component: 'dashboard',
      })
      .state({
        name: 'quests',
        parent: 'app',
        url: '/quests',
        component: 'quests',
      })
  }

}());
