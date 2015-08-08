'use strict';

(function () {
    angular.module('corporateChallengeApp').controller('AdminCtrl', AdminCtrl);
    AdminCtrl.$inject = ['$scope', 'Auth', 'User'];
    function AdminCtrl($scope, Auth, User) {

        var vm = this;
        vm.users = [];

        vm.removeUser = removeUser;


        init();

        function init() {
            getUsers();
        }
        // Use the User $resource to fetch all users
        function getUsers() {
            return User.query().$promise.then(function (data) {
                vm.users = data;
                return vm.users;
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
    };
})();
