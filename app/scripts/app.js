'use strict';

angular.module('chaos', ['ui.router', 'ui.bootstrap'])
  .config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/login');

    // Now set up the states
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'views/login.html'
      })
      .state('main', {
        abstract: true,
        url: '/main',
        templateUrl: 'views/main/main.tpl.html'
      })
      .state('main.home', {
        url: '/home',
        templateUrl: 'views/main/main.home.html'
      })
      .state('main.lab', {
        abstract: true,
        url: '/lab',
        templateUrl: 'views/main/lab/main.lab.tpl.html'
      })
      .state('main.lab.home', {
        url: '/home',
        templateUrl: 'views/main/lab/main.lab.home.html'
      })
      .state('main.lab.freezerManagement', {
        url: '/freezerManagement',
        templateUrl: 'views/main/lab/main.lab.freezerManagement.html'
      })
      .state('main.studyMgmt', {
        abstract: true,
        url: '/studyMgmt',
        templateUrl: '../views/main/studyMgmt/main.studyMgmt.tpl.html'
      })
      .state('main.studyMgmt.home', {
        url: '/home',
        templateUrl: '../views/main/studyMgmt/main.studyMgmt.home.html'
      })
      .state('main.studyMgmt.newPopulation', {
        url: '/newPopulation',
        templateUrl: '../views/main/studyMgmt/main.studyMgmt.newPopulation.html'
      });

  });