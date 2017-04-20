/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

import User from '../api/user/user.model';
import Organization from '../api/organization/organization.model';
import Event from '../api/event/event.model';

import UserService from '../api/user/user.service';
import OrganizationService from '../api/organization/organization.service';


var users = require('../data/user.json');
var orgs = require('../data/organization.json');

User.find({}).remove()
    .then(() => {
        for (var index in users) {
            var user = users[index];
            UserService.create(user);
        }
    });
setTimeout(() => {
    Event.find({}).remove()
        .then(() => {
            Organization.find({}).remove()
                .then(() => {
                    for (var index in orgs) {
                        var org = orgs[index];
                        OrganizationService.create(org)
                            .then(orgResult => {
                                if (orgResult.name === 'CA Technologies') {
                                    User.findOne({email: 'admin@1.com'})
                                        .then(user => {
                                            UserService.joinOrganization(orgResult._id, user._id);
                                            OrganizationService.addAdmin(orgResult._id, user._id);
                                        });
                                }
                            });
                    }
                });
        });
}, 2000);


