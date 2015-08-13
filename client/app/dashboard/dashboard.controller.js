'use strict';

(function () {
    class DashboardCtrl {
        /*@ngInject*/
        constructor(sportService, Auth, sportUtils) {
            this.sportService = sportService;
            this.Auth = Auth;
            this.sportUtils = sportUtils;
            this.sports = [];
            this.mySports = [];
            this.initialized = false;
            this.currentUser = Auth.getCurrentUser();
            this.getSports();
        }

        getSports() {
            var year = new Date().getFullYear();
            return this.sportService.getSports(year)
                .then(data => {
                    this.sports = data;
                    this.mySports = this.sportUtils.getSportsByUser(this.sports, this.currentUser);
                    this.initialized = true;
                    return this.sports;
                });
        }
    }
    angular.module('corporateChallengeApp').controller('DashboardCtrl', DashboardCtrl);
})();
