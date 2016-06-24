'use strict';
(function () {
    class viewParticipants {
        /* ngInject */
        constructor() {
            this.templateUrl = 'app/participate/participate.html';
            this.controller = 'ParticipateCtrl as participate';
        }
    }
    angular.module('corporateChallengeApp').component('viewParticipants', new viewParticipants());
})();
