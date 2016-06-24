'use strict';
(function () {
    class dashboard {
        /* ngInject */
        constructor() {
            this.templateUrl = 'app/dashboard/dashboard.html';
            this.controller = 'DashboardCtrl as dashboard';
        }
    }
    angular.module('corporateChallengeApp').component('dashboard', new dashboard());
})();
