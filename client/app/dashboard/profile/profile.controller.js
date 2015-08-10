'use strict';

(function () {
    angular.module('corporateChallengeApp').controller('ProfileCtrl', ProfileCtrl);
    ProfileCtrl.$inject = ['Auth'];
    function ProfileCtrl(Auth) {

        var vm = this;
        vm.currentUser = Auth.getCurrentUser();
    }

})();
