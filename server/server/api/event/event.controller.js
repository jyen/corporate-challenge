/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/events              ->  index
 * POST    /api/events              ->  create
 * GET     /api/events/:id          ->  show
 * PUT     /api/events/:id          ->  upsert
 * PATCH   /api/events/:id          ->  patch
 * DELETE  /api/events/:id          ->  destroy
 * POST    /api/events/:id/member   ->  join
 * DELETE  /api/events/:id/member   ->  leave
 */

'use strict';

import jsonpatch from 'fast-json-patch';
import EventService from './event.service';

function respondWithResult(res, statusCode) {
    statusCode = statusCode || 200;
    return function(entity) {
        if (entity) {
            return res.status(statusCode).json(entity);
        }
        return null;
    };
}

function patchUpdates(patches) {
    return function(entity) {
        try {
            jsonpatch.apply(entity, patches, /*validate*/ true);
        } catch(err) {
            return Promise.reject(err);
        }

        return entity.save();
    };
}

function handleEntityNotFound(res) {
    return function(entity) {
        if (!entity) {
            res.status(404).end();
            return null;
        }
        return entity;
    };
}

function handleError(res, statusCode) {
    statusCode = statusCode || 500;
    return function(err) {
        res.status(statusCode).send(err);
    };
}

// Creates a new Event in the DB
export function create(req, res) {
    return EventService.create(req.user.organization, req.body)
        .then(respondWithResult(res, 201))
        .catch(handleError(res));
}

// Upserts the given Event in the DB at the specified ID
export function upsert(req, res) {
    if (req.body._id) {
        delete req.body._id;
    }
    return EventService.update(req.params.id, req.body)
        .then(respondWithResult(res))
        .catch(handleError(res));
}

// Updates an existing Event in the DB
// export function patch(req, res) {
//     if (req.body._id) {
//         delete req.body._id;
//     }
//     return Event.findById(req.params.id).exec()
//         .then(handleEntityNotFound(res))
//         .then(patchUpdates(req.body))
//         .then(respondWithResult(res))
//         .catch(handleError(res));
// }

// Deletes a Event from the DB
export function destroy(req, res) {
    return EventService.delete(req.params.id)
        .catch(handleError(res));
}

export function join(req, res) {
    return EventService.join(req.params.id, req.user._id)
        .catch(handleError(res));
}

export function leave(req, res) {
    return EventService.leave(req.params.id, req.user._id)
        .catch(handleError(res));
}
