'use strict';

angular.module('corporateChallengeApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('admin', {
                url: '/admin',
                template: '<admin></admin>'
            })
            .state('admin.setup-sports', {
                url: '/setup-sports',
                template: '<admin-sport></admin-sport>'
            })
            .state('admin.view-shirt-info', {
                url: '/view-shirt-info',
                template: '<view-shirt-info></view-shirt-info>'
            })
            .state('admin.view-participants', {
                url: '/view-participants',
                template: 'IN PROGRESS'
            });
    });