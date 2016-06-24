'use strict';
(function () {
    class Participate {
        /* ngInject */
        constructor() {
            this.templateUrl = 'app/view-participants/view-participants.html';
            this.controller = 'ViewParticipantsCtrl as viewParticipants';
        }
    }
    angular.module('corporateChallengeApp').component('participate', new Participate());
})();
