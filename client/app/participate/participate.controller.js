'use strict';

(function () {
    angular.module('corporateChallengeApp').controller('ParticipateCtrl', ParticipateCtrl);
    ParticipateCtrl.$inject = ['Auth', 'User', 'companyService', '$modal', 'sportService'];
    function ParticipateCtrl(Auth, User, companyService, $modal, sportService) {

        var vm = this;
        vm.sports = [];


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
                })
        }
    };
})();
