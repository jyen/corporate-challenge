'use strict';

angular.module('corporateChallengeApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: 'app/dashboard/dashboard.html',
                controller: 'DashboardCtrl',
                controllerAs: 'dashboard'
            })
            .state('dashboard.profile', {
                url: '/profile',
                templateUrl: 'app/dashboard/profile/profile.html',
                controller: 'ProfileCtrl',
                controllerAs: 'profile'
            })
            .state('dashboard.company', {
                url: '/company',
                templateUrl: 'app/dashboard/company/company.html',
                controller: 'CompanyCtrl',
                controllerAs: 'company'
            });
    });