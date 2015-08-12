'use strict';

(function () {
    angular.module('corporateChallengeApp').controller('DashboardCtrl', DashboardCtrl);
    DashboardCtrl.$inject = ['sportService', 'Auth', 'sportUtils'];
    function DashboardCtrl(sportService, Auth, sportUtils) {

        var vm = this;
        vm.sports = [];
        vm.mySports = [];
        vm.initialized = false;
        vm.currentUser = Auth.getCurrentUser();

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
