'use strict';

(function () {
    angular.module('corporateChallengeApp').controller('DashboardCtrl', DashboardCtrl);
    DashboardCtrl.$inject = ['sportService', 'Auth'];
    function DashboardCtrl(sportService, Auth) {

        var vm = this;
        vm.sports = [];
        vm.currentUser = Auth.getCurrentUser();

        init();

        function init() {
            getSports();
        }

        function getSports() {
            var year = new Date().getFullYear();
            return sportService.getSports(year, true)
                .then(function (data) {
                    vm.sports = data;
                    return vm.sports;
                });
        }

    }

})();
