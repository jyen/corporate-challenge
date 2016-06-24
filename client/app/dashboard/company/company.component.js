'use strict';
(function () {
    class DashboardCompany {
        /* ngInject */
        constructor() {
            this.templateUrl = 'app/dashboard/company/company.html';
            this.controller = 'CompanyCtrl as company';
        }
    }
    angular.module('corporateChallengeApp').component('dashboardCompany', new DashboardCompany());
})();
