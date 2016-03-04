(function() {
  angular.module('starter.controllers').controller('DetailController', DetailController);
  DetailController.$inject = ['CarService', '$stateParams'];

  function DetailController (CarService, $stateParams) {
    var vm = this;
    CarService.getCar($stateParams.id).$promise.then(function(data) {
        vm.car = data;
        CarService.setCurrentCar(data);
      }
    );
  }

})();
