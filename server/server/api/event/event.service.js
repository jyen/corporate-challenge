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

import Event from './event.model';

export default class EventService {
    static create(event) {
        return Event.create(event);
    }

    static update(eventId, event) {
        return Event.findByIdAndUpdate(eventId, {$set: {
            'name': event.name,
            'info': event.info,
            'active': event.active}
        }).exec();
    }

    static delete(eventId) {
        return Event.findById(eventId).exec()
            .then(event => event.remove());
    }

    static getEvents() {
        return Event.find({}).exec();
    }

    static getEvent(id) {
        return Event.findById(id).exec();
    }

    static join(eventId, userId) {
        return Event.findById(eventId).exec()
            .then(event => {
                event.addMember(userId);
                return event.save();
            });
    }

    static leave(eventId, userId) {
        return Event.findById(eventId).exec()
            .then(event => {
                event.removeMember(userId);
                return event.save();
            });
    }
}
