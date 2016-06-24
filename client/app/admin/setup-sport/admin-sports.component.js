'use strict';
(function () {
    class adminSport {
        /* ngInject */
        constructor() {
            this.templateUrl = 'app/admin/setup-sport/admin-sports.html';
            this.controller = 'AdminSportsCtrl as adminSports';
        }
    }
    angular.module('corporateChallengeApp').component('adminSport', new adminSport());
})();
