'use strict';

import EventService from './event.service';
import Event from './event.model';
import User from '../user/user.model';
import mongoose from 'mongoose';


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


describe('Event Service', function () {
    before(function () {
        return Event.remove();
    });

    beforeEach(function () {
        return Event.remove();
    });

    afterEach(function () {
        return Event.remove();
    });

    it('should create an event', () => {
        var event = genEvent();

        return EventService.create(event)
            .then((created) => {
                return EventService.getEvent(created._id);
            })
            .should.eventually.have.property('name').which.equals('Event');
    });

    it('should fetch events', () => {
        var event = genEvent();

        return EventService.create(event)
            .then(() => {
                var event2 = genEvent();
                return EventService.create(event2);
            })
            .then(() => {
                return EventService.getEvents();
            })
            .should.eventually.have.length(2);
    });

    it('should update an event', () => {
        var event = genEvent();

        return EventService.create(event)
            .then((event) => {
                var id = event._id;
                delete event._id;
                event.name = 'Test Event';
                return EventService.update(id, event);
            })
            .should.eventually.have.property('name')
            .which.equals('Test Event');
    });

    it('should update an existing event without modifying members field', () => {
        var event = genEvent();
        var user = genUser('1@test.com');
        event.addMember(user);

        return EventService.create(event)
            .then((event) => {
                var id = event._id;
                delete event._id;
                event.name = 'Test Event';
                delete event.members;
                return EventService.update(id, event);
            })
            .then((newEvent) => {
                expect(newEvent.name).to.equal('Test Event');
                expect(newEvent.members.length).to.equal(1);
            });
    });

    it('should delete an event', () => {
        var event = genEvent();
        return EventService.create(event)
            .then((event) => {
                return EventService.delete(event._id);
            })
            .then(() => {
                return EventService.getEvents();
            })
            .should.eventually.have.length(0);
    });

    describe('#members', () => {

        var user1, user2, user3;
        var event;

        before(() => {
            return User.remove();
        });

        beforeEach(() => {
            user1 = genUser('1@test.com');
            user2 = genUser('2@test.com');
            user3 = genUser('3@test.com');
            return User.remove()
                .then(() => {
                    return user1.save();
                })
                .then(() => {
                    return user2.save();
                })
                .then(() => {
                    return user3.save();
                })
                .then(() => {
                    event = genEvent();
                    return EventService.create(event);
                })
                .then((createdEvent) => {
                    event = createdEvent;
                    return event;
                })
        });

        afterEach(() => {
            return User.remove()
                .then(() => {
                    return Event.remove();
                })
        });

        it('should add a member', () => {
            return EventService.join(event._id, user1._id)
                .then(() => {
                    return EventService.getEvent(event._id);
                })
                .should.eventually.have.property('members')
                .which.contains(user1._id)
                .which.have.length(1);
        });

        it('should add 2 members', () => {
            return EventService.join(event._id, user1._id)
                .then(() => {
                    return EventService.join(event._id, user2._id)
                })
                .should.eventually.have.property('members')
                .which.contains(user1._id)
                .which.contains(user2._id)
                .which.have.length(2);
        });

        it('should not add duplicated members', () => {
            return EventService.join(event._id, user1._id)
                .then(() => {
                    return EventService.join(event._id, user1._id);
                })
                .should.eventually.have.property('members')
                .which.contains(user1._id)
                .which.have.length(1);
        });

        it('should add 2 members and then remove 1', () => {
            return EventService.join(event._id, user1._id)
                .then(() => {
                    return EventService.join(event._id, user2._id);
                })
                .then(() => {
                    return EventService.leave(event._id, user1._id);
                })
                .should.eventually.have.property('members')
                .which.contains(user2._id)
                .which.have.length(1);
        });

    });
});
