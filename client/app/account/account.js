'use strict';

angular.module('corporateChallengeApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('login', {
                url: '/login',
                template: '<login></login>',
            })
            .state('signup', {
                url: '/signup',
                template: '<signup></signup>'
            })
            .state('settings', {
                url: '/settings',
                templateUrl: 'app/account/settings/settings.html',
                controller: 'SettingsCtrl',
                authenticate: true
            });
    });