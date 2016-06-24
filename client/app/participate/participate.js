'use strict';

angular.module('corporateChallengeApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('participate', {
                url: '/participate',
                template: '<participate></participate>'
            });
    });