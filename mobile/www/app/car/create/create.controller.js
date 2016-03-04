(function() {
  angular.module('starter.controllers').controller('CreateController', CreateController);
  CreateController.$inject = ['CarService', 'AuthService', '$state'];

  function CreateController (CarService, AuthService, $state) {
    var vm = this;

    vm.getAvailableMakes = getAvailableMakes;
    vm.getAvailableModels = getAvailableModels;
    vm.getAvailableStyles = getAvailableStyles;
    vm.getStyle = getStyle;
    vm.enableAdd = enableAdd;
    vm.createCar = createCar;

    vm.car = {};
    vm.car.owner = AuthService.getCurrentUser().email;

    vm.availableYears = CarService.getYears();

    function getAvailableMakes (year) {
      vm.car.info = undefined;
      vm.availableModels = [];
      vm.availableStyles = [];
      vm.availableMakes = CarService.getMakes(year);
    };
    function getAvailableModels (year, make) {
      vm.car.info = undefined;
      vm.availableStyles = [];
      vm.availableModels = CarService.getModels(year, make);
    };
    function getAvailableStyles (year, make, model) {
      vm.car.info = undefined;
      vm.availableStyles = CarService.getStyles(year, make, model);
    };
    function getStyle (id) {
      CarService.getStyle(id).$promise.then(function(data) {
        vm.car.info = data;
      });
    };

    function enableAdd () {
      return vm.car.name && vm.car.info;
    };

    function createCar (car) {
      CarService.createCar(car).$promise.then(function() {
        $state.go('dashboard.overview');
      })

    }



  }


})();
