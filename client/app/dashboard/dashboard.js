'use strict';

angular.module('corporateChallengeApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('dashboard', {
                url: '/dashboard',
                template: '<dashboard></dashboard>'
            })
            .state('dashboard.profile', {
                url: '/profile',
                template: '<dashboard-profile></dashboard-profile>'
            })
            .state('dashboard.company', {
                url: '/company',
                template: '<dashboard-company></dashboard-company>'
            })
            .state('dashboard.sports', {
                url: '/sports',
                template: '<dashboard-sport></dashboard-sport>'
            });
    });