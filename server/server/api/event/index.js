'use strict';

var express = require('express');
var controller = require('./event.controller');
import * as auth from '../../auth/auth.service';

var router = express.Router();

// router.get('/', auth.isAuthenticated(), controller.index);
router.get('/:id', auth.isAuthenticated(), controller.show);
router.post('/', auth.isAuthenticated(), controller.create);
router.put('/:id', auth.isAuthenticated(), controller.upsert);
// router.patch('/:id', auth.isAuthenticated(), controller.patch);
router.delete('/:id', auth.isAuthenticated(), controller.destroy);
router.post('/:id/join', auth.isAuthenticated(), controller.join);
router.delete('/:id/leave', auth.isAuthenticated(), controller.leave);

module.exports = router;
