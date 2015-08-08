'use strict';
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MemberSchema = new Schema({
    name: String,
    email: {type: String, lowercase: true},
    birthday: Date,
    phone: Number

})

var SportSchema = new Schema({
    name: String,
    year: Number,
    captains: [MemberSchema],
    members: [MemberSchema]
});

module.exports = mongoose.model('Sport', SportSchema);