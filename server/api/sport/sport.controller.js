'use strict';

var _ = require('lodash');
var Sport = require('./sport.model');

// Get list of sports
exports.index = function (req, res) {
    Sport.find(function (err, sports) {
        if (err) {
            return handleError(res, err);
        }
        return res.status(200).json(sports);
    });
};

// Get a single sport
exports.show = function (req, res) {
    Sport.findById(req.params.id, function (err, sport) {
        if (err) {
            return handleError(res, err);
        }
        if (!sport) {
            return res.status(404).send('Not Found');
        }
        return res.json(sport);
    });
};

// Creates a new sport in the DB.
exports.create = function (req, res) {
    Sport.create(req.body, function (err, sport) {
        if (err) {
            return handleError(res, err);
        }
        return res.status(201).json(sport);
    });
};

// Updates an existing sport in the DB.
exports.update = function (req, res) {
    if (req.body._id) {
        delete req.body._id;
    }
    Sport.findById(req.params.id, function (err, sport) {
        if (err) {
            return handleError(res, err);
        }
        if (!sport) {
            return res.status(404).send('Not Found');
        }
        var updated = _.merge(sport, req.body);
        updated.save(function (err) {
            if (err) {
                return handleError(res, err);
            }
            return res.status(200).json(sport);
        });
    });
};

// Deletes a sport from the DB.
exports.destroy = function (req, res) {
    Sport.findById(req.params.id, function (err, sport) {
        if (err) {
            return handleError(res, err);
        }
        if (!sport) {
            return res.status(404).send('Not Found');
        }
        sport.remove(function (err) {
            if (err) {
                return handleError(res, err);
            }
            return res.status(204).send('No Content');
        });
    });
};

function handleError(res, err) {
    return res.status(500).send(err);
}