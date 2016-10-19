'use strict';

import OrganizationService from './organization.service';
import Organization from './organization.model';
import User from '../user/user.model';
import Event from '../event/event.model';


var genEvent = function () {
    var event = new Event({
        name: 'Event'
    });
    return event;
};

var genUser = function (email) {
    var user = new User({
        provider: 'local',
        name: 'Fake User',
        email: email,
        password: 'password'
    });
    return user;
};

var cleanup = function() {
    return Event.remove()
        .then(() => {
            return Organization.remove();
        })
        .then(() => {
            return User.remove();
        });
}


describe('Organization Service', function () {
    before(cleanup);

    beforeEach(cleanup);

    afterEach(cleanup);

    describe('#getOrganization', () => {
        var event, org, user, user2;

        beforeEach(() => {
            event = genEvent();
            user = genUser('1@test.com');
            user2 = genUser('2@test.com');
            org = new Organization({
                name: 'Test Org',
                division: 'B',
                admins: [user._id],
                members: [user._id]
            });
            return OrganizationService.create(org);

        });

        it('should get an organization', () => {
            return OrganizationService.getOrganization(org._id)
                .should.eventually.have.property('name')
                .which.equals('Test Org');
        });

        it('should get null for non-existing organization', () => {
            var nullEvent = genEvent();
            return OrganizationService.getOrganization(nullEvent._id)
                .should.eventually.equal(null);
        });

    });

    describe('#join', () => {
        var event, org, user, user2;

        beforeEach(() => {
            event = genEvent();
            user = genUser('1@test.com');
            user2 = genUser('2@test.com');
            org = new Organization({
                name: 'Test Org',
                division: 'B',
                admins: [user._id],
                members: [user._id]
            });
            return OrganizationService.create(org);

        });

        it('should add a member', () => {
            return OrganizationService.join(org._id, user2._id)
                .then(() => {
                    return OrganizationService.getOrganization(org._id);
                })
                .should.eventually.have.property('members')
                .which.contains(user2._id);
        });

        it('should not add an admin to non-existing organization', () => {
            return OrganizationService.delete(org._id)
                .then(() => {
                    return OrganizationService.join(org._id, user2._id);
                }).should.be.rejected;
        });
    });

    describe('#addAdmin', () => {
        var event, org, user, user2;

        beforeEach(() => {
            event = genEvent();
            user = genUser('1@test.com');
            user2 = genUser('2@test.com');
            org = new Organization({
                name: 'Test Org',
                division: 'B',
                admins: [user._id],
                members: [user._id]
            });
            return OrganizationService.create(org);

        });

        it('should add an admin', () => {
            return OrganizationService.addAdmin(org._id, user2._id)
                .then(() => {
                    return OrganizationService.getOrganization(org._id);
                })
                .should.eventually.have.property('admins')
                .which.contains(user2._id);
        });

        it('should not add an admin to non-existing organization', () => {
            return OrganizationService.delete(org._id)
                .then(() => {
                    return OrganizationService.addAdmin(org._id, user2._id);
                }).should.be.rejected;
        });
    });

    describe('#removeAdmin', () => {
        var event, org, user, user2;

        beforeEach(() => {
            event = genEvent();
            user = genUser('1@test.com');
            user2 = genUser('2@test.com');
            org = new Organization({
                name: 'Test Org',
                division: 'B',
                admins: [user._id],
                members: [user._id]
            });
            return OrganizationService.create(org);

        });

        it('should remove an admin', () => {
            return OrganizationService.addAdmin(org._id, user2._id)
                .then(() => {
                    return OrganizationService.getOrganization(org._id);
                })
                .then(org => {
                    return OrganizationService.removeAdmin(org._id, user._id);
                })
                .should.eventually.have.property('admins')
                .which.contains(user2._id);
        });

        it('should not remove an admin to non-existing organization', () => {
            return OrganizationService.delete(org._id)
                .then(() => {
                    return OrganizationService.removeAdmin(org._id, user._id);
                }).should.be.rejected;
        });
    });

    describe('#addEvent', () => {
        var event, org, user;

        beforeEach(() => {
            event = genEvent();
            user = genUser('1@test.com');
            org = new Organization({
                name: 'Test Org',
                division: 'B',
                admins: [user._id],
                members: [user._id]
            });
            return OrganizationService.create(org);

        });

        it('should add an event', () => {
            return OrganizationService.addEvent(org._id, event)
                .should.be.fulfilled;
        });

        it('should not add an event to non-existing organization', () => {
            return OrganizationService.delete(org._id)
                .then(() => {
                    return OrganizationService.addEvent(org._id, event);
                }).should.be.rejected;
        });

        it('should not add an event when event name is empty', () => {
            event.name = '';
            return OrganizationService.addEvent(org._id, event)
                .should.be.rejected;
        });

    });

});
