'use strict';

describe('Service: company', function () {

    // load the service's module
    beforeEach(module('corporateChallengeApp'));

    // instantiate service
    var company;
    beforeEach(inject(function (_companyService_) {
        company = _companyService_;
    }));

    it('should do something', function () {
        expect(company).toBe(true);
    });

});
