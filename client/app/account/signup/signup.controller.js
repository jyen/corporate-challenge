'use strict';

(function () {
    angular.module('corporateChallengeApp').controller('SignupCtrl', SignupCtrl);
    SignupCtrl.$inject = ['Auth', '$location', '$window', '$modal', 'companyService'];

    function SignupCtrl(Auth, $location, $window, $modal, companyService) {
        var vm = this;
        vm.user = {};
        vm.errors = {};
        vm.companies = [];

        vm.register = register;
        vm.loginOauth = loginOauth;
        vm.addCompany = addCompany;


        init();

        function register(form) {
            console.log(vm.user);
            vm.submitted = true;

            //if (form.$valid) {
            //    Auth.createUser({
            //        name: vm.user.name,
            //        email: vm.user.email,
            //        password: vm.user.password
            //    })
            //        .then(function () {
            //            // Account created, redirect to home
            //            $location.path('/');
            //        })
            //        .catch(function (err) {
            //            err = err.data;
            //            vm.errors = {};
            //
            //            // Update validity of form fields that match the mongoose errors
            //            angular.forEach(err.errors, function (error, field) {
            //                form[field].$setValidity('mongoose', false);
            //                vm.errors[field] = error.message;
            //            });
            //        });
            //}
        }

        function init() {
            return getCompanies();
        }

        function getCompanies() {
            return companyService.getCompanies()
                .then(function (data) {
                    vm.companies = data;
                    return vm.companies;
                });
        }

        function loginOauth(provider) {
            $window.location.href = '/auth/' + provider;
        }

        function addCompany() {
            var modalInstance = $modal.open({
                animation: true,
                templateUrl: 'app/create-company/create-company-modal.html',
                controller: 'CreateCompanyCtrl',
                controllerAs: 'createCompany',
                size: 'lg'
            });

            modalInstance.result.then(function () {
                //TODO: Call post for company API and refresh company list
            }, function () {
            });
        }


    }
})();

