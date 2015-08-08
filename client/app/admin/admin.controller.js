'use strict';

(function () {
    angular.module('corporateChallengeApp').controller('AdminCtrl', AdminCtrl);
    AdminCtrl.$inject = ['$scope', 'Auth', 'User', 'companyService', '$modal'];
    function AdminCtrl($scope, Auth, User, companyService, $modal) {

        var vm = this;
        vm.users = [];
        vm.company = {};

        vm.removeUser = removeUser;
        vm.editCompanyInfo = editCompanyInfo;


        init();

        function init() {
            getUsers();
            getCompany();
        }
        // Use the User $resource to fetch all users
        function getUsers() {
            return User.query().$promise.then(function (data) {
                vm.users = data;
                return vm.users;
            })
        }

        function getCompany() {
            return companyService.getCompany(Auth.getCurrentUser().company)
                .then(function (data) {
                    vm.company = data;
                    return vm.company;
                })
        }

        function removeUser(user) {
            User.remove({id: user._id});
            angular.forEach($scope.users, function (u, i) {
                if (u === user) {
                    vm.users.splice(i, 1);
                }
            });
        };

        function editCompanyInfo() {
            var modalInstance = $modal.open({
                animation: true,
                templateUrl: 'app/create-company/create-company-modal.html',
                controller: 'CreateCompanyCtrl',
                controllerAs: 'createCompany',
                size: 'lg'
            });

            modalInstance.result.then(function () {
                getCompanies();
            }, function () {
            });
        }
    };
})();
