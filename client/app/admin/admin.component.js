'use strict';
(function () {
    class Admin {
        /* ngInject */
        constructor() {
            this.templateUrl = 'app/admin/admin.html';
            this.controller = 'AdminCtrl as admin';
        }
    }
    angular.module('corporateChallengeApp').component('admin', new Admin());
})();
