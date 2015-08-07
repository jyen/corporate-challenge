'use strict';

describe('Service: sport', function () {

    // load the service's module
    beforeEach(module('corporateChallengeApp'));

    // instantiate service
    var sport;
    beforeEach(inject(function (_sport_) {
        sport = _sport_;
    }));

    it('should do something', function () {
        expect(!!sport).toBe(true);
    });

});
