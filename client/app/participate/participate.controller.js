'use strict';

(function () {
    angular.module('corporateChallengeApp').controller('ParticipateCtrl', ParticipateCtrl);
    ParticipateCtrl.$inject = ['sportService', 'Auth'];
    function ParticipateCtrl(sportService, Auth) {

        var vm = this;
        vm.sports = [];
        vm.selectedSports = {};
        vm.currentUser = Auth.getCurrentUser();

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
                    vm.selectedSports = setSelectedSports(vm.sports);
                    return vm.sports;
                });
        }

        function join(sport, participate) {
            sportService.updateSport(sport, participate);
        }

        function setSelectedSports(sports) {
            var currentUser = Auth.getCurrentUser();
            var selected = {};
            _.each(sports, function (sport) {
                if (_.findWhere(sport.members, {'_id': currentUser._id})) {
                    selected[sport._id] = true;
                } else {
                    selected[sport._id] = false;
                }
            });

            return selected;

        }
    }
})();
