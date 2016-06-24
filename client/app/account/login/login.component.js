'use strict';
(function () {
    class Login {
        /* ngInject */
        constructor() {
            this.templateUrl = 'app/account/login/login.html';
            this.controller = 'LoginCtrl as login';
        }
    }
    angular.module('corporateChallengeApp').component('login', new Login());
})();
