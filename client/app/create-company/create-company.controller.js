'use strict';

(function () {
    class CreateCompanyCtrl {
        /*@ngInject*/
        constructor($modalInstance, companyService) {
            this.$modalInstance = $modalInstance;
            this.companyService = companyService;
            this.company = {};
            this.company.admins = [''];
            this.availableDivisions = ['A', 'AA', 'B', 'BB', 'C' , 'D'];
        }

        addMoreAdmins() {
            this.company.admins.push('');
        }

        removeAdmin(index) {
            var tmp = [];
            for (var i = 0; i < this.company.admins.length; i++) {
                var field = 'email' + i;
                if (i !== index) {
                    tmp.push(this.companyForm[field].$viewValue);
                }
            }
            this.company.admins = tmp;
        }

        confirmModal(company) {
            this.submitted = true;
            if (!this.companyForm.$invalid) {
                this.companyService.createCompany(company).then(() => {
                    this.$modalInstance.close();
                });
            }
        }

        cancelModal() {
            this.$modalInstance.dismiss('cancel');
        }

        getEmailFieldByIndex(index) {
            var email = 'email' + index;
            return this.companyForm[email];
        }
    }
    angular.module('corporateChallengeApp').controller('CreateCompanyCtrl', CreateCompanyCtrl);
})();
