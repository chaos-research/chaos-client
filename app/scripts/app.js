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
        templateUrl: '../views/main/tpl.html'
      })
      .state('main.home', {
        url: '/home',
        templateUrl: '../views/main/home.html'
      })
      .state('main.lab', {
        abstract: true,
        url: '/lab',
        templateUrl: 'views/main/lab/tpl.html'
      })
      .state('main.lab.home', {
        url: '/home',
        templateUrl: 'views/main/lab/home.html'
      })
      .state('main.lab.freezerManagement', {
        url: '/freezerManagement',
        templateUrl: 'views/main/lab/freezerManagement.html'
      })
      .state('main.studyMgmt', {
        abstract: true,
        url: '/studyMgmt',
        templateUrl: 'views/main/studyMgmt/tpl.html'
      })
      .state('main.studyMgmt.home', {
        url: '/home',
        templateUrl: 'views/main/studyMgmt/home.html'
      })
      .state('main.studyMgmt.participants', {
        url: '/participants',
        templateUrl: 'views/main/studyMgmt/participants.html'
      })
      .state('main.studyMgmt.participant', {
        url: '/participant',
        templateUrl: 'views/main/studyMgmt/participant.html'
      })
      .state('main.studyMgmt.eventCalendar', {
        url: '/eventCalendar',
        templateUrl: 'views/main/studyMgmt/eventCalendar.html'
      })
      .state('main.studyMgmt.event', {
        url: '/event',
        templateUrl: 'views/main/studyMgmt/event.html'
      })
      .state('main.studyMgmt.recordEvent', {
        url: '/recordEvent',
        templateUrl: 'views/main/studyMgmt/recordEvent.html'
      })
      .state('main.studyMgmt.newPopulation', {
        url: '/newPopulation',
        templateUrl: 'views/main/studyMgmt/newPopulation.html'
      })
      .state('main.data', {
        abstract: true,
        url: '/data',
        templateUrl: 'views/main/data/tpl.html'
      })
      .state('main.data.home', {
        url: '/home',
        templateUrl: 'views/main/data/home.html'
      })
    ;

  });