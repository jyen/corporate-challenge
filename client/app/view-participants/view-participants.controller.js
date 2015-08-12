'use strict';

(function () {
    angular.module('corporateChallengeApp').controller('ViewParticipantsCtrl', ViewParticipantsCtrl);
    ViewParticipantsCtrl.$inject = ['User'];
    function ViewParticipantsCtrl(User) {

        var vm = this;
        vm.users = [];
        vm.initialized = false;


        init();

        function init() {
            getUsers();
        }

        // Use the User $resource to fetch all users
        function getUsers() {
            return User.query().$promise.then(function (data) {
                vm.users = data;
                vm.initialized = true;
                return vm.users;
            });
        }
    }
})();
