'use strict';
(function () {
    class dashboardProfile {
        /* ngInject */
        constructor() {
            this.templateUrl = 'app/dashboard/profile/profile.html';
            this.controller = 'ProfileCtrl as profile';
        }
    }
    angular.module('corporateChallengeApp').component('dashboardProfile', new dashboardProfile());
})();
