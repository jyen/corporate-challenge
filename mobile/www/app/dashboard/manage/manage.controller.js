(function() {
  angular.module('starter.controllers').controller('ManageController', ManageController);
  ManageController.$inject = ['CarService', '$ionicActionSheet'];

  function ManageController (CarService, $ionicActionSheet) {
    var vm = this;
    vm.actions = actions;
    vm.myCars = CarService.getCars();

    var hideSheet;
    function actions (car) {
      hideSheet = $ionicActionSheet.show({
        buttons: [
          { text: 'Add Driver' }
        ],
        destructiveText: 'Remove',
        destructiveButtonClicked: function () {
          removeCar(car._id);
        },
        titleText: 'Modify your album',
        cancelText: 'Cancel',
        cancel: function() {
          // add cancel code..
        },
        buttonClicked: function(index) {
          return true;
        }
      });
    };

    function removeCar (id) {
      hideSheet();
      CarService.removeCar(id).$promise.then(function() {
        vm.myCars = CarService.getCars();
      })
    };

  }


})();
