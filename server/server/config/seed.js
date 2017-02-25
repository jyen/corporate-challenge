/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

import User from '../api/user/user.model';
import Organization from '../api/organization/organization.model';

User.find({}).remove()
    .then(() => {
        return User.create({
            provider: 'local',
            name: 'Test User',
            email: 'test@example.com',
            password: 'test',
            gender: 'M',
            birthYear: 1988,
            phone: 9724549898,
            shirtSize: 'M',
            participantType: 'Employee'
        }, {
            provider: 'local',
            role: 'admin',
            name: 'Admin',
            email: 'admin@example.com',
            password: 'admin',
            gender: 'M',
            birthYear: 1988,
            phone: 9724549898,
            shirtSize: 'M',
            participantType: 'Contractor'
        }, createOrganization);
    })

function createOrganization(err, user1, user2) {
    return Organization.find({}).remove()
        .then(() => {
            return Organization.create({
                name: 'CA Technologies',
                division: 'B',
                admins: [],
                members: []
            })
        });
}
