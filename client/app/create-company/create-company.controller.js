'use strict';

(function () {
    angular.module('corporateChallengeApp').controller('CreateCompanyCtrl', CreateCompanyCtrl);
    CreateCompanyCtrl.$inject = ['$modalInstance', 'companyService'];
    function CreateCompanyCtrl($modalInstance, companyService) {
        var vm = this;
        vm.company = {};
        vm.company.admins = [''];
        vm.addMoreAdmins = addMoreAdmins;
        vm.confirmModal = confirmModal;
        vm.cancelModal = cancelModal;
        vm.removeAdmin = removeAdmin;

        vm.getEmailFieldByIndex = getEmailFieldByIndex;


        function addMoreAdmins() {
            vm.company.admins.push('');
        }


        function removeAdmin(index) {
            var tmp = [];
            for (var i = 0; i < vm.company.admins.length; i++) {
                var field = 'email' + i;
                if (i !== index) {
                    tmp.push(vm.companyForm[field].$viewValue);
                }
            }

            vm.company.admins = tmp;
        }

        function confirmModal(company) {
            vm.submitted = true;
            if (!vm.companyForm.$invalid) {
                companyService.createCompany(company).then(function () {
                    $modalInstance.close();
                });
            }
        }

        function cancelModal() {
            $modalInstance.dismiss('cancel');
        }

        function getEmailFieldByIndex(index) {
            var email = 'email' + index;
            return vm.companyForm[email];
        }
    }
})();
