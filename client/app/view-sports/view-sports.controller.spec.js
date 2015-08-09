'use strict';

describe('Controller: ViewSportsCtrl', function () {

  // load the controller's module
  beforeEach(module('corporateChallengeApp'));

  var ViewSportsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ViewSportsCtrl = $controller('ViewSportsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
