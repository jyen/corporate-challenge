(function() {
  angular.module('starter.controllers').controller('LoginController', LoginController);
  LoginController.$inject = ['AuthService'];

  function LoginController(AuthService) {
    var vm = this;
    vm.login = AuthService.login;
  }


})();
