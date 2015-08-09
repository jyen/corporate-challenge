'use strict';

angular.module('corporateChallengeApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: 'app/dashboard/dashboard.html',
                controller: 'DashboardCtrl',
                controllerAs: 'dashboard'
            });
    });