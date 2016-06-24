/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var Company = require('../api/company/company.model');

Company.find({}).remove(function () {
    Company.create({
        name: 'Company0',
        division: 'B',
        admins: ['jack.yen@company0.com', 'admin@admin.com']
    }, {
        name: 'Company1',
        division: 'A',
        admins: ['jack.yen@company1.com']
    }, createUsers);
});

function createUsers(err, company0, company1) {
    User.find({}).remove(function () {
        User.create({
                provider: 'local',
                name: 'Test Admin',
                email: 'admin@admin.com',
                password: 'admin',
                role: 'admin',
                gender: 'M',
                shirtSize: 'M',
                participantType: 'Employee',
                company: company0._id,
                phone: 9725149959,
                birthday: '1988'
            }, {
                provider: 'local',
                name: 'Company0 User0',
                email: 'user0@company0.com',
                password: 'test',
                shirtSize: 'S',
                participantType: 'Employee',
                gender: 'F',
                company: company0._id,
                phone: 9725149959,
                birthday: '1988'
            }, {
                provider: 'local',
                name: 'Company0 User1',
                email: 'user1@company0.com',
                password: 'test',
                shirtSize: 'XL',
                participantType: 'Contractor',
                gender: 'F',
                company: company0._id,
                phone: 9725149959,
                birthday: '1988'
            }, {
                provider: 'local',
                name: 'Company0 User2',
                email: 'user2@company0.com',
                password: 'test',
                shirtSize: 'XXL',
                participantType: 'Spouse',
                gender: 'M',
                company: company0._id,
                phone: 9725149959,
                birthday: '1988'
            }, {
                provider: 'local',
                name: 'Company1 User0',
                email: 'user0@company1.com',
                password: 'test',
                gender: 'M',
                shirtSize: 'S',
                participantType: 'Employee',
                company: company1._id,
                phone: 9725149959,
                birthday: '1988'
            }, {
                provider: 'local',
                name: 'Company1 User1',
                email: 'user1@company1.com',
                password: 'test',
                gender: 'M',
                shirtSize: 'M',
                participantType: 'Employee',
                company: company1._id,
                phone: 9725149959,
                birthday: '1988'
            }, {
                provider: 'local',
                name: 'Company1 User2',
                email: 'user2@company1.com',
                password: 'test',
                gender: 'F',
                shirtSize: 'M',
                participantType: 'Employee',
                company: company1._id,
                phone: 9725149959,
                birthday: '1988'
            }, function () {
                console.log('finished populating users');
            }
        );
    });
}