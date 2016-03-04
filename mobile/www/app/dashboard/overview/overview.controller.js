(function () {
    angular.module('starter.controllers').controller('OverviewController', OverviewController);
    OverviewController.$inject = ['AuthService'];

    function OverviewController(AuthService) {
        var vm = this;
        vm.currentUser = AuthService.getCurrentUser();
        console.log(AuthService.isLoggedIn());
    }

})();
