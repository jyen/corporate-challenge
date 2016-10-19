'use strict';

import _ from 'lodash';
import mongoose from 'mongoose';

var EventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    info: String,
    active: Boolean,
    members: [{
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    }]
});

EventSchema.methods = {
    addMember(id) {
        this.members.push(id);
        this.members = _.uniqWith(this.members, _.isEqual);
    },

    removeMember(id) {
        var index = this.members.indexOf(id);
        if (index > -1) {
            this.members.splice(index, 1);
        }
    }
};

export default mongoose.model('Event', EventSchema);
