'use strict';

import _ from 'lodash';
import mongoose from 'mongoose';
var deepPopulate = require('mongoose-deep-populate')(mongoose);

var OrganizationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    info: String,
    active: Boolean,
    division: {
        type: String,
        enum: ['A', 'AA', 'B', 'BB', 'C', 'D'],
        required: true
    },
    admins: [{
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    }],
    // members: [{
    //     type: mongoose.Schema.ObjectId,
    //     ref: 'User',
    //     required: true
    // }],
    events: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Event'
    }]
});

// OrganizationSchema
//     .path('admins')
//     .validate(function(admins) {
//         return admins.length;
//     }, 'Must have at least 1 admin');

OrganizationSchema.methods = {
    addEvent(id) {
        this.events.push(id);
        this.events = _.uniqWith(this.events, _.isEqual);
    },

    removeEvent(id) {
        var index = this.events.indexOf(id);
        if (index > -1) {
            this.events.splice(index, 1);
        }
    },

    addAdmin(id) {
        this.admins.push(id);
        this.admins = _.uniqWith(this.admins, _.isEqual);
    },

    removeAdmin(id) {
        var index = this.admins.indexOf(id);
        if (index > -1) {
            this.admins.splice(index, 1);
        }
    }

    // addMember(id) {
    //     this.members.push(id);
    //     this.members = _.uniqWith(this.members, _.isEqual);
    // },
    //
    // removeMember(id) {
    //     var index = this.members.indexOf(id);
    //     if (index > -1) {
    //         this.members.splice(index, 1);
    //     }
    // }
};
OrganizationSchema.plugin(deepPopulate, {
    populate: {
        'events.members': {
            select: 'name email phone gender participantType'
        }
    }
});
export default mongoose.model('Organization', OrganizationSchema);
