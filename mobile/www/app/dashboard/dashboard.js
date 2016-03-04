(function() {
  'use strict';
  angular.module('starter')
    .config(function ($stateProvider) {
      $stateProvider
        .state('dashboard', {
          url: '/dashboard',
          abstract: true,
          templateUrl: 'app/dashboard/dashboard.html'
        })
        .state('dashboard.overview', {
          url: '/overview',
          cache: false,
          views: {
            'dashboard-overview': {
              templateUrl: 'app/dashboard/overview/overview.html',
              controller: 'OverviewController as overview'
            }
          }
        })
        .state('dashboard.manage', {
          url: '/manage',
          views: {
            'dashboard-car': {
              templateUrl: 'app/dashboard/manage/manage.html',
              controller: 'ManageController as manage'
            }
          }
        })
        .state('dashboard.profile', {
          url: '/profile',
          views: {
            'dashboard-profile': {
              templateUrl: 'app/dashboard/profile/profile.html',
              controller: 'ProfileController as profile'
            }
          }
        })
    });
})();
