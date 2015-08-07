'use strict';

angular.module('corporateChallengeApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('view-participants', {
                url: '/view-participants',
                templateUrl: 'app/view-participants/view-participants.html',
                controller: 'ViewParticipantsCtrl'
            });
    });