'use strict';
(function () {
    class Signup {
        /* ngInject */
        constructor() {
            this.templateUrl = 'app/account/signup/signup.html';
            this.controller = 'SignupCtrl as signup';
        }
    }
    angular.module('corporateChallengeApp').component('signup', new Signup());
})();
