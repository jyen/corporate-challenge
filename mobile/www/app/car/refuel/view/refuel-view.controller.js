(function() {
  angular.module('starter.controllers').controller('RefuelViewController', RefuelViewController);
  RefuelViewController.$inject = ['CarService', '$state', '$stateParams', '$ionicActionSheet', '$scope'];

  function RefuelViewController (CarService, $state, $stateParams, $ionicActionSheet, $scope) {
    var vm = this

    vm.actions = actions;
    //vm.refuels = CarService.getRefuels(CarService.getCurrentCar()._id);

    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
      if (fromState !== $state.current.name) {
        vm.refuels = CarService.getRefuels(CarService.getCurrentCar()._id);
      }
    })

    var hideSheet;
    function actions (refuel) {
      hideSheet = $ionicActionSheet.show({
        buttons: [
          { text: 'Edit' }
        ],
        destructiveText: 'Remove',
        destructiveButtonClicked: function () {
          removeRefuel(CarService.getCurrentCar()._id, refuel._id);
        },
        cancelText: 'Cancel',
        cancel: function() {
          // add cancel code..
        },
        buttonClicked: function(index) {
          switch (index) {
            case 0:
              $state.go('car.refuel-edit', {id: refuel._id});
                  break;
          }
          return true;
        }
      });
    };

    function removeRefuel (carId, refuelId) {
      hideSheet();
      CarService.removeRefuel(carId, refuelId).$promise.then(function() {
        vm.refuels = CarService.getRefuels(CarService.getCurrentCar()._id);
      })
    };
  }



})();
