'use strict';
(function () {
    class signup {
        /* ngInject */
        constructor() {
            this.templateUrl = 'app/account/signup/signup.html';
            this.controller = 'SignupCtrl as signup';
        }
    }
    angular.module('corporateChallengeApp').component('signup', new signup());
})();
