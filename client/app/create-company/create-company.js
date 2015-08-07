'use strict';

angular.module('corporateChallengeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('create-company', {
        url: '/create-company',
        templateUrl: 'app/create-company/create-company.html',
        controller: 'CreateCompanyCtrl'
      });
  });