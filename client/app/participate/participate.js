'use strict';

angular.module('corporateChallengeApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('participate', {
                url: '/participate',
                templateUrl: 'app/participate/participate.html',
                controller: 'ParticipateCtrl'
            });
    });