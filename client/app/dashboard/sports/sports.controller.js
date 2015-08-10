'use strict';

(function () {
    angular.module('corporateChallengeApp').controller('SportsCtrl', SportsCtrl);
    SportsCtrl.$inject = ['sportService', 'Auth', 'sportUtils'];
    function SportsCtrl(sportService, Auth, sportUtils) {

        var vm = this;
        vm.sports = [];
        vm.mySports = [];
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
                    return vm.sports;
                });
        }

    }

})();
