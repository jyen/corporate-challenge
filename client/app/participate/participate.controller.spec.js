'use strict';

describe('Controller: ParticipateCtrl', function () {

    // load the controller's module
    beforeEach(module('corporateChallengeApp'));

    var ParticipateCtrl, scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        ParticipateCtrl = $controller('ParticipateCtrl', {
            $scope: scope
        });
    }));

    it('should ...', function () {
        expect(1).toEqual(1);
    });
});
