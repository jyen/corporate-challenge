'use strict';

(function () {
    class ProfileCtrl {
        /*@ngInject*/
        constructor(Auth) {
            this.currentUser = Auth.getCurrentUser();
        }
    }
    angular.module('corporateChallengeApp').controller('ProfileCtrl', ProfileCtrl);
})();
