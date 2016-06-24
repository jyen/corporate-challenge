'use strict';

(function () {
    class AdminSportsCtrl {
        /*@ngInject*/
        constructor(Auth, User, sportService) {
            this.Auth = Auth;
            this.User = User;
            this.sportService = sportService;

            this.users = [];
            this.sports = [];

            this.getUsers();
            this.getSports();
        }

        getUsers() {
            return this.User.query().$promise.then(data => {
                this.users = data;
                return this.users;
            });
        }

        getSports() {
            var year = new Date().getFullYear();
            return this.sportService.getSports(year)
                .then(data => {
                    this.sports = data;
                    return this.sports;
                });
        }

        setupSports() {
            this.sportService.setupSports()
                .then(data => {
                    this.sports = data.sports;
                    return this.sports;
                });
        }

        enableSport(sport) {
            sport.enabled = true;
            this.sportService.updateSport(sport)
                .then(() => {
                    this.getSports();
                });
        }

        disableSport(sport) {
            sport.enabled = false;
            this.sportService.updateSport(sport)
                .then(() => {
                    this.getSports();
                });

        }
    }
    angular.module('corporateChallengeApp').controller('AdminSportsCtrl', AdminSportsCtrl);

})();
