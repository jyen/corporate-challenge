(function() {
  'use strict';
  angular.module('starter')
    .config(function ($stateProvider) {
      $stateProvider
        .state('login', {
          url: '/login',
          cache: false,
          templateUrl: 'app/account/login/login.html',
          controller: 'LoginController as login'
        })
        .state('signup', {
          url: '/signup',
          templateUrl: 'app/account/signup/signup.html',
          controller: 'SignUpController as signUp'
        });
    });
})();
