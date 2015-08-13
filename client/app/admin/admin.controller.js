'use strict';

(function () {
    class AdminCtrl {
        /*@ngInject*/
        constructor(Auth, User, companyService, $modal, sportService) {
            this.Auth = Auth;
            this.User = User;
            this.companyService = companyService;
            this.$modal = $modal;
            this.sportService = sportService;

            this.users = [];
            this.company = {};
            this.sports = [];

            this.getUsers();
            this.getCompany();
            this.getSports();
        }

        getUsers() {
            return this.User.query().$promise.then(data => {
                this.users = data;
                return this.users;
            });
        }

        getCompany() {
            return this.companyService.getCompany(this.Auth.getCurrentUser().company)
                .then(data => {
                    this.company = data;
                    return this.company;
                }, () => {
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

        editCompanyInfo(company) {
            //Use this to avoid changing the original object
            var copyCompany = angular.copy(company);
            var modalInstance = this.$modal.open({
                animation: true,
                templateUrl: 'app/create-company/create-company-modal.html',
                controller: 'EditCompanyCtrl',
                controllerAs: 'createCompany',
                size: 'lg',
                resolve: {
                    company: function () {
                        return copyCompany;
                    }
                }
            });

            modalInstance.result.then(() => {
                this.getCompany();
            }, () => {
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
    angular.module('corporateChallengeApp').controller('AdminCtrl', AdminCtrl);

})();
