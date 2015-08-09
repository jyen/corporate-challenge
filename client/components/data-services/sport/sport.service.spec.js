'use strict';

describe('Service: sport', function () {

    // load the service's module
    beforeEach(module('corporateChallengeApp'));

    // instantiate service
    var sport;
    beforeEach(inject(function (_sportService_) {
        sport = _sportService_;
    }));

    it('should do something', function () {
        expect(!!sport).toBe(true);
    });

});
