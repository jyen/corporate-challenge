'use strict';

(function () {
    angular.module('corporateChallengeApp').controller('SignupCtrl', SignupCtrl);
    SignupCtrl.$inject = ['$scope', 'Auth', '$location', '$window', '$modal'];

    function SignupCtrl($scope, Auth, $location, $window, $modal) {
        var vm = this;
        $scope.user = {};
        $scope.errors = {};

        vm.register = register;
        vm.loginOauth = loginOauth;
        vm.addCompany = addCompany;

        function register(form) {
            $scope.submitted = true;

            if (form.$valid) {
                Auth.createUser({
                    name: $scope.user.name,
                    email: $scope.user.email,
                    password: $scope.user.password
                })
                    .then(function () {
                        // Account created, redirect to home
                        $location.path('/');
                    })
                    .catch(function (err) {
                        err = err.data;
                        $scope.errors = {};

                        // Update validity of form fields that match the mongoose errors
                        angular.forEach(err.errors, function (error, field) {
                            form[field].$setValidity('mongoose', false);
                            $scope.errors[field] = error.message;
                        });
                    });
            }
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

