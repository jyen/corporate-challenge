(function () {
  'use strict';

  angular.module('starter.services').service('RefuelUtilService', RefuelUtilService);
  RefuelUtilService.$inject = [];
  function RefuelUtilService() {

    var service = {
      calculateMpg: calculateMpg,
      calculateCost: calculateCost
    };

    return service;
  }

  function calculateMpg (tripMile, quantity) {
    var mpg = '';
    if (tripMile && quantity) {
      mpg = (quantity/tripMile).toFixed(2);
    }
    return parseFloat(mpg);
  }

  function calculateCost (price, quantity) {
    var cost = '';
    if (price && quantity) {
      cost = (price * quantity).toFixed(2);
    }
    return parseFloat(cost);
  }

})();
