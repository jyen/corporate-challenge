'use strict';

(function () {

    class CompanyCtrl {
        /*@ngInject*/
        constructor(companyService, Auth) {
            this.companyService = companyService;
            this.company = {};
            this.currentUser = Auth.getCurrentUser();
            this.getCompany(this.currentUser.company);
        }

        getCompany(company) {
            return this.companyService.getCompany(company)
                .then(data => {
                    this.company = data;
                    return this.company;
                });
        }
    }
    angular.module('corporateChallengeApp').controller('CompanyCtrl', CompanyCtrl);

})();
