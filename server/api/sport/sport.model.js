'use strict';
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MemberSchema = new Schema({
    name: String,
    email: {type: String, lowercase: true},
    birthday: Number,
    phone: Number,
    gender: String

})

var SportSchema = new Schema({
    name: String,
    year: Number,
    date: String,
    company_id: Schema.Types.ObjectId,
    enabled: {type: Boolean, default: true},
    captains: [MemberSchema],
    members: [MemberSchema]
});

module.exports = mongoose.model('Sport', SportSchema);