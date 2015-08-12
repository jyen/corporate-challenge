'use strict';

(function () {
    angular.module('corporateChallengeApp').controller('SportsCtrl', SportsCtrl);
    SportsCtrl.$inject = ['sportService', 'Auth', 'sportUtils'];
    function SportsCtrl(sportService, Auth, sportUtils) {

        var vm = this;
        vm.sports = [];
        vm.mySports = [];
        vm.currentUser = Auth.getCurrentUser();

        vm.initialized = false;

        init();

        function init() {
            getSports();
        }

        function getSports() {
            var year = new Date().getFullYear();
            return sportService.getSports(year)
                .then(function (data) {
                    vm.sports = data;
                    vm.mySports = sportUtils.getSportsByUser(vm.sports, vm.currentUser);
                    vm.initialized = true;
                    return vm.sports;
                });
        }

    }

})();
