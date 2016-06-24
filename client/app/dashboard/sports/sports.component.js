'use strict';
(function () {
    class dashboardSport {
        /* ngInject */
        constructor() {
            this.templateUrl = 'app/dashboard/sports/sports.html';
            this.controller = 'SportsCtrl as sports';
        }
    }
    angular.module('corporateChallengeApp').component('dashboardSport', new dashboardSport());
})();
