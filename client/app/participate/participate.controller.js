'use strict';

(function () {
    class ParticipateCtrl {
        /*@ngInject*/
        constructor(sportService, Auth) {
            this.sportService = sportService;
            this.Auth = Auth;
            this.sports = [];
            this.selectedSports = {};
            this.currentUser = Auth.getCurrentUser();
            this.initialized = false;
            this.getSports();
        }

        getSports() {
            var year = new Date().getFullYear();
            return this.sportService.getSports(year, true)
                .then(data => {
                    this.sports = data;
                    this.selectedSports = this.setSelectedSports(this.sports);
                    this.initialized = true;
                    return this.sports;
                });
        }

        join(sport, participate) {
            this.sportService.updateSport(sport, participate);
        }

        setSelectedSports(sports) {
            var currentUser = this.Auth.getCurrentUser();
            var selected = {};
            _.each(sports, sport => {
                if (_.findWhere(sport.members, {'_id': currentUser._id})) {
                    selected[sport._id] = true;
                } else {
                    selected[sport._id] = false;
                }
            });

            return selected;

        }
    }
    angular.module('corporateChallengeApp').controller('ParticipateCtrl', ParticipateCtrl);
})();
