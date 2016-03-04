(function() {
  angular.module('starter.controllers').controller('ProfileController', ProfileController);
  ProfileController.$inject = ['AuthService'];

  function ProfileController (AuthService) {
    var vm = this;
    vm.logout = AuthService.logout;
    vm.currentUser = AuthService.getCurrentUser();
  }

})();
