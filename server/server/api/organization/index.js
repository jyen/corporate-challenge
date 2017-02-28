'use strict';

var express = require('express');
var controller = require('./organization.controller');
import * as auth from '../../auth/auth.service';

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', auth.isAuthenticated(), controller.create);
router.put('/:id', controller.upsert);
router.delete('/:id', controller.destroy);
router.post('/:id/events', controller.createEvent);
router.post('/:id/join', auth.isAuthenticated(), controller.joinMembers);

module.exports = router;
