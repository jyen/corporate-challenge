'use strict';

import Event from '../event/event.model'
import Organization from './organization.model';
import User from '../user/user.model';

var genUser = function () {
    var user = new User({
        provider: 'local',
        name: 'Fake User',
        email: 'test@example.com',
        password: 'password'
    });
    return user;
};

var genEvent = function () {
    var event = new Event({
        name: 'Event'
    });
    return event
};

var genOrg = function () {
    var org = new Organization({
        name: 'Org',
        division: 'B',
    });
    return org;
};


describe('Organization Model', function () {
    var user, event, org;
    beforeEach(function () {
        // Clear events before testing
        user = genUser();
        event = genEvent();
        org = genOrg();
        return Organization.remove();
    });

    it('should reject organization with no admin', () => {
        return org.save().should.be.rejected;
    });

    it('should reject organization with incorrect division', () => {
        org.division = 'X';
        org.addAdmin(user._id);
        return org.save().should.be.rejected;
    });

    it('should add admin to organization', () => {
        org.addAdmin(user._id);
        return expect(org.admins).to.contain(user._id);
    });

    it('should remove admin to organization', () => {
        org.addAdmin(user._id);
        org.removeAdmin(user._id);
        return expect(org.admins.length).to.equal(0);
    });

    it('should remove an event to organization', () => {
        org.addEvent(event._id);
        org.removeEvent(event._id);
        return expect(org.events.length).to.equal(0);
    });
    it('should add an event to organization', () => {
        org.addEvent(event._id);
        return expect(org.events).to.contain(event._id);
    });

    it('should not add duplicated event to organization', () => {
        org.addEvent(event._id);
        org.addEvent(event._id);
        return expect(org.events.length).to.equal(1);
    });

    it('should not add duplicated admin to organization', () => {
        org.addAdmin(user._id);
        org.addAdmin(user._id);
        return expect(org.admins.length).to.equal(1);
    });
});
