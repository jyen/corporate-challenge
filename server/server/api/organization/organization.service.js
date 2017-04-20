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

import Organization from './organization.model';
import EventService from './../event/event.service';
import UserService from './../user/user.service';

export default class OrganizationService {
    static create(org) {
        return Organization.create(org);
    }

    static update(org) {
        return Organization.findOneAndUpdate({_id: org._id}, org, {
            new: true,
            upsert: true,
            setDefaultsOnInsert: true,
            runValidators: true
        }).exec();
    }

    static delete(orgId) {
        return Organization.findById(orgId).exec()
            .then(org => org.remove());
    }

    static getOrganizations() {
        return Organization.find({}).exec();
    }

    static getOrganization(id) {
        return Organization.findById(id)
            .populate('events')
            .exec();
    }

    static join(orgId, userId) {
        return Organization.findById(orgId).exec()
            .then(org => {
                if (org) {
                    org.addMember(userId);
                    return org.save();
                } else {
                    return Promise.reject('Organization does not exist');
                }
            })
            .then(() => UserService.joinOrganization(orgId, userId));
    }

    static leave(orgId, userId) {
        return Organization.findById(orgId).exec()
            .then(org => {
                org.removeMember(userId);
                return org.save();
            });
    }

    static addAdmin(orgId, userId) {
        return Organization.findById(orgId).exec()
            .then(org => {
                if (org) {
                    org.addAdmin(userId);
                    return org.save();
                } else {
                    return Promise.reject('Organization does not exist');
                }
            })
            .then(() => UserService.setAdmin(userId, 'admin'));
    }

    static removeAdmin(orgId, userId) {
        return Organization.findById(orgId).exec()
            .then(org => {
                if (org) {
                    org.removeAdmin(userId);
                    return org.save();
                } else {
                    return Promise.reject('Organization does not exist');
                }
            });
    }

    static addEvent(orgId, event) {
        var eventId;
        return EventService.create(event)
            .then(newEvent => {
                console.log(newEvent);
                eventId = newEvent._id;
                return OrganizationService.getOrganization(orgId);
            })
            .then(org => {
                if (org) {
                    org.addEvent(eventId);
                    return org.save();
                } else {
                    return Promise.reject('Organization does not exist');
                }
            })
            .catch(err => Promise.reject(err));
    }

    static getEvents(orgId) {
        return OrganizationService.getOrganization(orgId)
            .then(org => Promise.resolve(org.events));
    }

    static removeEvent(orgId, eventId) {
        return EventService.delete(eventId)
            .then(() => OrganizationService.getOrganization(orgId))
            .then(org => {
                if (org) {
                    org.removeEvent(eventId);
                    return org.save();
                } else {
                    return Promise.reject('Organization does not exist');
                }
            })
            .catch(err => Promise.reject(err));
    }
}
