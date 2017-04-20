'use strict';

var express = require('express');
var controller = require('./organization.controller');
import * as auth from '../../auth/auth.service';

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', auth.isAuthenticated(), controller.create);
router.put('/:id', auth.isAuthenticated(), controller.upsert);
router.delete('/:id', auth.isAuthenticated(), controller.destroy);
router.post('/:id/events', auth.isAuthenticated(), controller.createEvent);
router.get('/:id/events',auth.isAuthenticated(),  controller.listEvents);
router.delete('/:id/events/:eventid', auth.isAuthenticated(), controller.removeEvent);
router.post('/:id/join', auth.isAuthenticated(), controller.joinMembers);

module.exports = router;
