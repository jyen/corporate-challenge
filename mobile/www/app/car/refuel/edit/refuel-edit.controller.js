(function() {
  angular.module('starter.controllers').controller('RefuelEditController', RefuelEditController);
  RefuelEditController.$inject = ['CarService', '$stateParams', 'RefuelUtilService'];

  function RefuelEditController (CarService, $stateParams, RefuelUtilService) {
    var vm = this
    vm.RefuelUtilService = RefuelUtilService;
    vm.updateRefuel = CarService.updateRefuel;
    vm.carId = CarService.getCurrentCar()._id;
    vm.refuelId = $stateParams.id;

    CarService.getRefuel(vm.carId, vm.refuelId).$promise.then(function (data) {
      vm.refuel = data;
      var date = new Date(data.dateTime)
      vm.refuel.dateTime = date;
    });
  }



})();
