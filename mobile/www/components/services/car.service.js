(function () {
  'use strict';

  angular.module('starter.services').service('CarService', CarService);
  CarService.$inject = ['$resource', 'host'];
  function CarService($resource, host) {

    var service = {
      getCars: getCars,
      getCar: getCar,
      getYears: getYears,
      getMakes: getMakes,
      getModels: getModels,
      getStyles: getStyles,
      getStyle: getStyle,
      createCar: createCar,
      removeCar: removeCar,
      addRefuel: addRefuel,
      getRefuels: getRefuels,
      getRefuel: getRefuel,
      removeRefuel: removeRefuel,
      updateRefuel: updateRefuel,
      getCurrentCar: getCurrentCar,
      setCurrentCar: setCurrentCar
    };
    var currentCar;
    var resource = $resource(host + '/api/cars/:id/:controller/:itemId', {}, {
      'update': {method: 'PUT'}
    });
    var infoResource = $resource(host + '/api/car-info/:controller/:id');
    return service;

    function getCurrentCar() {
      return currentCar;
    };
    function setCurrentCar(car) {
      currentCar = car;
    };
    function getCars() {
      return resource.query();
    };

    function getCar(id) {
      return resource.get({id: id});
    };

    function getYears () {
      return infoResource.query({controller: 'availableYears'});
    };

    function getMakes (year) {
      return infoResource.query(
        {
          controller: 'availableMakes',
          year: year
        }
      );
    };

    function getModels (year, make) {
      return infoResource.query(
        {
          controller: 'availableModels',
          year: year,
          make: make
        }
      );
    };

    function getStyles (year, make, model) {
      return infoResource.query(
        {
          controller: 'availableStyles',
          year: year,
          make: make,
          model: model
        }
      );
    };

    function getStyle (id, full) {
      if (!full) {
        full = false;
      }
      return infoResource.get(
        {
          controller: 'style',
          id: id,
          full: full
        }
      );
    };

    function createCar (car) {
      delete(car.info.$promise);
      delete(car.info.$resolved);
      delete(car.info.__proto__);
      return resource.save(car);
    };

    function removeCar (id) {
      return resource.delete({id:id});
    };

    function addRefuel (id, refuel) {
      return resource.save(
        {
          controller: 'refuels',
          id: id
        }, refuel
      );
    };

    function getRefuels (id) {
      return resource.query(
        {
          controller: 'refuels',
          id: id
        }
      );
    };
    function getRefuel (carId, refuelId) {
      return resource.get(
        {
          controller: 'refuels',
          id: carId,
          itemId: refuelId
        }
      );
    };
    function updateRefuel (carId, refuelId, refuel) {
      console.log(refuel);
      return resource.update(
        {
          controller: 'refuels',
          id: carId,
          itemId: refuelId
        }, refuel
      );
    };
    function removeRefuel (id, refuelId) {
      return resource.delete(
        {
          controller: 'refuels',
          id: id,
          itemId: refuelId
        }
      );
    };
  }

})();
