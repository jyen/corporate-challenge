'use strict';
(function () {
    class Participate {
        /* ngInject */
        constructor() {
            this.templateUrl = 'app/participate/participate.html';
            this.controller = 'ParticipateCtrl as participate';
        }
    }
    angular.module('corporateChallengeApp').component('participate', new Participate());
})();
