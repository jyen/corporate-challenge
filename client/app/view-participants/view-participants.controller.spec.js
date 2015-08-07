'use strict';

describe('Controller: ViewParticipantsCtrl', function () {

    // load the controller's module
    beforeEach(module('corporateChallengeApp'));

    var ViewParticipantsCtrl, scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        ViewParticipantsCtrl = $controller('ViewParticipantsCtrl', {
            $scope: scope
        });
    }));

    it('should ...', function () {
        expect(1).toEqual(1);
    });
});
