'use strict';

(function () {
    angular.module('corporateChallengeApp').controller('ParticipateCtrl', ParticipateCtrl);
    ParticipateCtrl.$inject = ['sportService'];
    function ParticipateCtrl(sportService) {

        var vm = this;
        vm.sports = [];
        vm.selectedSports = {};

        vm.join = join;


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

        function join(sport, participate) {
            sportService.updateSport(sport, participate).then(function () {

            });
        }
    };
})();
