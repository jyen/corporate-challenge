'use strict';

var _ = require('lodash');
var AllSport = require('./all-sport.model');

// Get list of all-sports
exports.index = function(req, res) {
  AllSport.find(function (err, all-sports) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(all-sports);
  });
};

// Get a single all-sport
exports.show = function(req, res) {
  AllSport.findById(req.params.id, function (err, all-sport) {
    if(err) { return handleError(res, err); }
    if(!all-sport) { return res.status(404).send('Not Found'); }
    return res.json(all-sport);
  });
};

// Creates a new all-sport in the DB.
exports.create = function(req, res) {
  AllSport.create(req.body, function(err, all-sport) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(all-sport);
  });
};

// Updates an existing all-sport in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  AllSport.findById(req.params.id, function (err, all-sport) {
    if (err) { return handleError(res, err); }
    if(!all-sport) { return res.status(404).send('Not Found'); }
    var updated = _.merge(all-sport, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(all-sport);
    });
  });
};

// Deletes a all-sport from the DB.
exports.destroy = function(req, res) {
  AllSport.findById(req.params.id, function (err, all-sport) {
    if(err) { return handleError(res, err); }
    if(!all-sport) { return res.status(404).send('Not Found'); }
    all-sport.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}