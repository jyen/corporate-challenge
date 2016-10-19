'use strict';

import Event from './event.model'
import User from '../user/user.model';

import mongoose from 'mongoose';


var user, event;
var genUser = function () {
    user = new User({
        provider: 'local',
        name: 'Fake User',
        email: 'test@example.com',
        password: 'password'
    });
    return user;
};

var genEvent = function () {
    event = new Event({
        name: 'Event'
    });
};


describe('Event Model', function () {
    before(function () {
        // Clear events before testing
        genUser();
        Event.remove()
            .then(() => {
                return User.remove();
            })
    });

    beforeEach(function () {
    });

    afterEach(function () {
        return Event.remove();
    });

    after(function () {
        return User.remove();
    })

    it('should begin with no events', function () {
        return Event.find({}).exec().should
            .eventually.have.length(0);
    });

    it('should save an event', function () {
        genEvent();
        return event.save()
            .then((savedEvent) => {
                return Event.find({}).exec();
            }).should.eventually.have.length(1);
    });

    it('should save an event with members', function () {
        return user.save()
            .then((savedUser) => {
                genEvent();
                event.addMember(savedUser._id);
                return expect(event.members).to.contain(savedUser._id);
            });
    });

    it('should save an event with members then remove member', function () {
        var memberId;
        return user.save()
            .then((savedUser) => {
                memberId = savedUser._id;
                genEvent();
                event.addMember(memberId);
                event.removeMember(memberId);
                return expect(event.members.length).to.equal(0);
            });
    });

    describe('#name', function () {
        it('should fail when saving with a blank name', function () {
            genEvent();
            event.name = '';
            return event.save().should.be.rejected;
        });

        it('should fail when saving with null', function () {
            genEvent();
            event.name = null;
            return event.save().should.be.rejected;
        });
    });

    describe('#member', function () {
        it('should fail when saving with a string', function () {
            genEvent();
            event.members = 'Test';
            return event.save().should.be.rejected;
        });

        it('should pass when saving with an objectId', function () {
            genEvent();
            var objectId = mongoose.Types.ObjectId();
            event.members = [objectId];
            return event.save().should.be.fulfilled;
        });

        it('should pass when saving with an string array', function () {
            genEvent();
            event.members = ['123'];
            return event.save().should.be.rejected;
        });
    });
});
