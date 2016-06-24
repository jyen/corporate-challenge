'use strict';

(function () {
    class AdminCtrl {
        /*@ngInject*/
        constructor(Auth, User, companyService, $modal) {
            this.Auth = Auth;
            this.User = User;
            this.companyService = companyService;
            this.$modal = $modal;

            this.users = [];
            this.company = {};

            this.getUsers();
            this.getCompany();
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
    }
    angular.module('corporateChallengeApp').controller('AdminCtrl', AdminCtrl);

})();
