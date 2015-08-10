'use strict';

(function () {
    angular.module('corporateChallengeApp').controller('CompanyCtrl', CompanyCtrl);
    CompanyCtrl.$inject = ['companyService', 'Auth'];
    function CompanyCtrl(companyService, Auth) {

        var vm = this;
        vm.company = {};
        vm.currentUser = Auth.getCurrentUser();

        init();

        function init() {
            getCompany(vm.currentUser.company);
        }

        function getCompany(company) {
            return companyService.getCompany(company)
                .then(function (data) {
                    vm.company = data;
                    return vm.company;
                });
        }
    }

})();
