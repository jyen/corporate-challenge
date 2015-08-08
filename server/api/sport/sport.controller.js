'use strict';

var _ = require('lodash');
var Sport = require('./sport.model');
var Company = require('../company/company.model');

// Get list of sports
exports.index = function (req, res) {
    var query = Sport.find({}).where('company_id').equals(req.user.company);
    if (req.query.year) {
        query = query.where('year').equals(req.query.year);
    }
    if (req.query.enabled) {
        query = query.where('enabled').equals(req.query.enabled);
    }
    query.exec(callback);

    function callback(err, sports) {
        if (err) {
            return handleError(res, err);
        }
        return res.status(200).json(sports);
    }
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
exports.setup = function (req, res) {
    Company.findById(req.user.company, function (err, company) {
        if (err) {
            return handleError(res, err);
        }
        var sportsObj = getSportsByDivision(company.division, company._id);

        Sport.find({
            year: new Date().getFullYear(),
            company_id: company._id
        }, function (err, sports) {
            if (err) {
                return handleError(res, err);
            }
            if (!sports || sports.length === 0) {
                Sport.create(sportsObj, function (err, sports) {
                    if (err) {
                        return handleError(res, err);
                    }
                    return res.json({'sports': sports});
                })
            } else {
                return res.status(500).send({'error': 'Already setup sports for this year'});
            }
        })
    })
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

function getSportsByDivision(division, companyId) {
    var sports = [];
    var year = new Date().getFullYear();
    var sportsName = ['Badminton', 'Basketball', 'Bike Race',
        'Billiards', 'Bowling', 'Darts', 'Dodgeball',
        'Dominoes (42)', 'Flag Football', 'Golf',
        'Horseshoes', 'Kickball', 'Miniature Golf', 'Punt, Pass & Kick',
        'Soccer', 'Softball', 'Swimming', 'Table Tennis', 'Tennis',
        'Texas Hold\'Em', 'Volleyball', '5K Run'];

    var ABOnlySports = ['Soccer', 'Swimming', 'Tennis'];

    _.each(sportsName, function (sportName) {
        var sport = {};
        sport.year = year;
        sport.name = sportName;
        sport.company_id = companyId;
        if (division !== 'C' || division !== 'D') {
            sports.push(sport);
        } else {
            if (!_.contains(ABOnlySports, sport)) {
                sports.push(sport);
            }
        }
    });

    return sports;

}