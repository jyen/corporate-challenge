'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CompanySchema = new Schema({
    name: {type: String, required: true},
    division: {type: String, required: true},
    admins: {type: [String], lowercase: true, required: true}
});

module.exports = mongoose.model('Company', CompanySchema);