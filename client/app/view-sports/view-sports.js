'use strict';

angular.module('corporateChallengeApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('view-sports', {
                url: '/view-sports',
                templateUrl: 'app/view-sports/view-sports.html',
                controller: 'ViewSportsCtrl',
                controllerAs: 'viewSport'
            });
    });