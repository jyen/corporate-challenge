'use strict';
(function () {
    class dashboardCompany {
        /* ngInject */
        constructor() {
            this.templateUrl = 'app/dashboard/company/company.html';
            this.controller = 'CompanyCtrl as company';
        }
    }
    angular.module('corporateChallengeApp').component('dashboardCompany', new dashboardCompany());
})();
