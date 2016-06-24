'use strict';
(function () {
    class admin {
        /* ngInject */
        constructor() {
            this.templateUrl = 'app/admin/admin.html';
            this.controller = 'AdminCtrl as admin';
        }
    }
    angular.module('corporateChallengeApp').component('admin', new admin());
})();
