/**
 * Using Rails-like standard naming convention for endpoints.
 * POST    /api/organizations              ->  create
 * GET     /api/organizations/:id          ->  show
 * PUT     /api/organizations/:id          ->  upsert
 * DELETE  /api/organizations/:id          ->  destroy
 * POST    /api/organizations/:id/events   ->  createEvent
 */

'use strict';

import OrganizationService from './organization.service';
import UserService from './../user/user.service';

function respondWithResult(res, statusCode) {
    statusCode = statusCode || 200;
    return function(entity) {
        if (entity) {
            return res.status(statusCode).json(entity);
        }
        return null;
    };
}

function handleError(res, statusCode) {
    statusCode = statusCode || 500;
    return function(err) {
        res.status(statusCode).send(err);
    };
}

// Gets a single Organization from the DB
export function index(req, res) {
    return OrganizationService.getOrganizations()
        .then(respondWithResult(res))
        .catch(handleError(res));
}

export function getUsers(req, res) {
    return UserService.getUsers(req.params.id)
        .then(users => {
            if (users) {
                var usersInfo = [];
                for (var index in users) {
                    usersInfo.push(users[index].info);
                }
                return res.status(200).json(usersInfo);
            } else {
                return res.status(200).json([]);
            }
        })
        .catch(handleError(res));
}

// Gets a single Organization from the DB
export function show(req, res) {
    return OrganizationService.getOrganization(req.params.id)
        .then(respondWithResult(res))
        .catch(handleError(res));
}

// Creates a new Organization in the DB
export function create(req, res) {
    var org = req.body;
    var user = req.user;
    org.admins.push(user._id);
    return UserService.setAdmin(user._id, 'admin')
        .then(() => {
            return OrganizationService.create(org);
        })
        .then(respondWithResult(res, 201))
        .catch(handleError(res));
}

// Upserts the given Organization in the DB at the specified ID
export function upsert(req, res) {
    // if (req.body._id) {
    //     delete req.body._id;
    // }
    return OrganizationService.update(req.body)
        .then(respondWithResult(res))
        .catch(handleError(res));
}

// Deletes a Organization from the DB
export function destroy(req, res) {
    return OrganizationService.delete(req.params.id)
        .catch(handleError(res));
}

export function createEvent(req, res) {
    return OrganizationService.addEvent(req.params.id, req.body)
        .then(respondWithResult(res, 200))
        .catch(handleError(res));
}

export function listEvents(req, res) {
    return OrganizationService.getEvents(req.params.id)
        .then(respondWithResult(res, 200))
        .catch(handleError(res));
}

export function removeEvent(req, res) {
    return OrganizationService.removeEvent(req.params.id, req.params.eventid)
        .then(respondWithResult(res, 200))
        .catch(handleError(res));
}

export function joinMembers(req, res) {
    return OrganizationService.join(req.params.id, req.user._id)
        .then(respondWithResult(res, 200))
        .catch(handleError(res));
}
