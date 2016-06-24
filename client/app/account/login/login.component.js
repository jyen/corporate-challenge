'use strict';
(function () {
    class login {
        /* ngInject */
        constructor() {
            this.templateUrl = 'app/account/login/login.html';
            this.controller = 'LoginCtrl as login';
        }
    }
    angular.module('corporateChallengeApp').component('login', new login());
})();
