/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/events              ->  index
 * POST    /api/events              ->  create
 * GET     /api/events/:id          ->  show
 * PUT     /api/events/:id          ->  upsert
 * PATCH   /api/events/:id          ->  patch
 * DELETE  /api/events/:id          ->  destroy
 * POST    /api/events/:id/member   ->  post
 * DELETE  /api/events/:id/member   ->  destroy
 */

'use strict';

import User from './user.model';
import EventService from './../event/event.service';

export default class UserService {
    static create(org) {
        return User.create(org);
    }

    static update(userId, user) {
        return User.findOneAndUpdate({_id: userId}, user, {
            new: true,
            upsert: true,
            setDefaultsOnInsert: true,
            runValidators: true
        }).exec();
    }

    static delete(userId) {
        return User.findById(userId).exec()
            .then(user => user.remove());
    }

    static getUsers() {
        return User.find({}).exec();
    }

    static getUser(id) {
        return User.findById(id).exec();
    }

    static setAdmin(userId, role) {
        return User.findById(userId).exec()
            .then(user => {
                if (user) {
                    user.role = role;
                    return user.save();
                } else {
                    return Promise.reject('User does not exist');
                }
            });
    }

    static joinOrganization(orgId, userId) {
        return User.findById(userId).exec()
            .then(user => {
                if (user) {
                    user.setOrganization(orgId);
                    return user.save();
                } else {
                    return Promise.reject('User does not exist');
                }
            });
    }
    //
    // static leave(orgId, userId) {
    //     return Organization.findById(orgId).exec()
    //         .then(org => {
    //             org.removeMember(userId);
    //             return org.save();
    //         });
    // }
    //
    // static addEvent(orgId, event) {
    //     var eventId;
    //     return EventService.create(event)
    //         .then(newEvent => {
    //             eventId = newEvent._id;
    //             return OrganizationService.getOrganization(orgId);
    //         })
    //         .then(org => {
    //             if (org) {
    //                 org.addEvent(eventId);
    //                 return org.save();
    //             } else {
    //                 return Promise.reject('Organization does not exist');
    //             }
    //         })
    //         .catch(err => Promise.reject(err));
    // }
}
