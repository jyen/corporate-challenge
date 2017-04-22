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
import EventService from '../api/event/event.service';


import mongoose from 'mongoose';

var users = require('../data/user.json');
var orgs = require('../data/organization.json');
var events = require('../data/event.json');

User.find({}).remove()
    .then(() => {
        for (var index in users) {
            var user = users[index];
            UserService.create(user);
        }
    });
setTimeout(() => {
    Event.find({}).remove().then(() => {
        Organization.find({}).remove()
            .then(() => {
                for (var index in orgs) {
                    var org = orgs[index];
                    OrganizationService.create(org)
                        .then((org) => {
                            if (org.name === 'CA Technologies') {
                                User.findOne({'email': 'admin@1.com'})
                                    .then((user) => {
                                        // UserService.joinOrganization(org._id, user._id);
                                        OrganizationService.addAdmin(org._id, user._id);
                                    })
                            }

                            if (org.name === 'CA Technologies') {
                                UserService.getUsers()
                                    .then((users) => {
                                        for (var index in users) {
                                            UserService.joinOrganization(org._id, users[index]._id);
                                        }
                                    })
                            }
                        });
                }
            });
    });
}, 2000);


