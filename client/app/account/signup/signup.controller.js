'use strict';

(function () {
    class SignupCtrl {
        /*@ngInject*/
        constructor(Auth, $location, $window, $modal, companyService) {
            this.Auth = Auth;
            this.$location = $location;
            this.$window = $window;
            this.$modal = $modal;
            this.companyService = companyService;

            this.init();
        }

        init() {
            this.availableSize = ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'];
            this.participantTypes = ['Employee', 'Contractor', 'Retiree', 'Spouse'];
            this.getCompanies();
        }

        register(form) {
            this.submitted = true;

            if (form.$valid) {
                this.Auth.createUser(vm.user)
                    .then(() => {
                        // Account created, redirect to home
                        this.$location.path('/');
                    })
                    .catch((err) => {
                        err = err.data;
                        this.errors = {};

                        // Update validity of form fields that match the mongoose errors
                        angular.forEach(err.errors, (error, field) => {
                            form[field].$setValidity('mongoose', false);
                            this.errors[field] = error.message;
                        });
                    });
            }
        }

        loginOauth(provider) {
            this.$window.location.href = '/auth/' + provider;
        }

        getCompanies() {
            return this.companyService.getCompanies()
                .then((data) => {
                    this.companies = data;
                    return this.companies;
                });
        }

        addCompany() {
            var modalInstance = this.$modal.open({
                animation: true,
                templateUrl: 'app/create-company/create-company-modal.html',
                controller: 'CreateCompanyCtrl',
                controllerAs: 'createCompany',
                size: 'lg'
            });

            modalInstance.result.then(() => {
                this.getCompanies();
            }, () => {
            });
        }
    }
    angular.module('corporateChallengeApp').controller('SignupCtrl', SignupCtrl);
})();

