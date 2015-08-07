'use strict';

(function () {
    angular.module('corporateChallengeApp').controller('SignupCtrl', SignupCtrl);
    SignupCtrl.$inject = ['$scope', 'Auth', '$location', '$window'];

    function SignupCtrl($scope, Auth, $location, $window) {
        var vm = this;
        $scope.user = {};
        $scope.errors = {};

        vm.register = function (form) {
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
        };

        vm.loginOauth = function (provider) {
            $window.location.href = '/auth/' + provider;
        };
    }
})();

