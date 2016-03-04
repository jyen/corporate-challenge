(function() {
  angular.module('starter.controllers').controller('RefuelCreateController', RefuelCreateController);
  RefuelCreateController.$inject = ['CarService', '$state', 'RefuelUtilService'];

  function RefuelCreateController (CarService, $state, RefuelUtilService) {
    var vm = this
    var date = new Date();
    date.setMilliseconds(0);
    date.setSeconds(0);

    vm.addRefuel = addRefuel;
    vm.RefuelUtilService = RefuelUtilService;

    //Initialize
    vm.carId = CarService.getCurrentCar()._id;
    vm.refuel = {};
    vm.refuel.dateTime = date;
    vm.refuel.partial = false;


    function addRefuel (carId, refuel) {
      CarService.addRefuel(carId, refuel).$promise.then(
        function() {
          $state.go('car.refuel-view', {id:carId}, {'reload': true});
        }
      )
    }
  }



})();
