'use strict';

(function () {
    angular.module('corporateChallengeApp').controller('AdminCtrl', AdminCtrl);
    AdminCtrl.$inject = ['$scope', 'Auth', 'User', 'companyService', '$modal', 'sportService'];
    function AdminCtrl($scope, Auth, User, companyService, $modal, sportService) {

        var vm = this;
        vm.users = [];
        vm.company = {};
        vm.sports = [];

        vm.removeUser = removeUser;
        vm.editCompanyInfo = editCompanyInfo;
        vm.setupSports = setupSports;
        vm.enableSport = enableSport;
        vm.disableSport = disableSport;


        init();

        function init() {
            getUsers();
            getCompany();
            getSports();
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

        function getSports() {
            var year = new Date().getFullYear();
            return sportService.getSports(year)
                .then(function (data) {
                    vm.sports = data;
                    return vm.sports;
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

        function editCompanyInfo(company) {
            var modalInstance = $modal.open({
                animation: true,
                templateUrl: 'app/create-company/create-company-modal.html',
                controller: 'EditCompanyCtrl',
                controllerAs: 'createCompany',
                size: 'lg',
                resolve: {
                    company: function () {
                        return company;
                    }
                }
            });

            modalInstance.result.then(function () {
                //getCompanies();
            }, function () {
            });
        }

        function setupSports() {
            sportService.setupSports()
                .then(function (data) {
                    vm.sports = data.sports;
                    return vm.sports;
                })
        }

        function enableSport(sport) {
            sport.enabled = true;
            sportService.updateSport(sport)
                .then(function () {
                    getSports
                })
        }

        function disableSport(sport) {
            sport.enabled = false;
            sportService.updateSport(sport)
                .then(function () {
                    getSports
                })

        }
    };
})();
