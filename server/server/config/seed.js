/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

import User from '../api/user/user.model';
import Organization from '../api/organization/organization.model';
import mongoose from 'mongoose';
User.find({}).remove()
    .then(() => {
        return User.create(
            [{
                _id: mongoose.Types.ObjectId('4edd40c86762e0fb12000000'),
                provider: 'local',
                name: 'Test User1',
                email: '1@example.com',
                password: 'test',
                gender: 'M',
                birthYear: 1988,
                phone: 9724549898,
                shirtSize: 'M',
                participantType: 'Employee',
                organization: mongoose.Types.ObjectId('4edd40c86762e0fb12000010')
            }, {
                _id: mongoose.Types.ObjectId('4edd40c86762e0fb12000001'),
                provider: 'local',
                name: 'Test User2',
                email: '2@example.com',
                password: 'test',
                gender: 'F',
                birthYear: 1988,
                phone: 9724549898,
                shirtSize: 'M',
                participantType: 'Employee'
            }, {
                _id: mongoose.Types.ObjectId('4edd40c86762e0fb12000002'),
                provider: 'local',
                role: 'admin',
                name: 'Test Admin1',
                email: 'admin@example.com',
                password: 'admin',
                gender: 'M',
                birthYear: 1988,
                phone: 9724549898,
                shirtSize: 'M',
                participantType: 'Contractor',
                organization: mongoose.Types.ObjectId('4edd40c86762e0fb12000010')
            }]);
    });

Organization.find({}).remove()
    .then(() => {
        return Organization.create(
            [{
                _id: mongoose.Types.ObjectId('4edd40c86762e0fb12000010'),
                name: 'CA Technologies',
                division: 'B',
                admins: [mongoose.Types.ObjectId('4edd40c86762e0fb12000001')],
                members: [mongoose.Types.ObjectId('4edd40c86762e0fb12000003')]
            }, {
                _id: mongoose.Types.ObjectId('4edd40c86762e0fb12000011'),
                name: 'Texas Instruments',
                division: 'A',
                admins: [],
                members: []
            }]);
    });

