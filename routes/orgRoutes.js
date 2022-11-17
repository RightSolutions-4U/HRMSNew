'use strict';

const express = require('express');
const orgControll = require('../controllers/orgController');
const router = express.Router();

router.get('/orgs', orgControll.getAllOrgs);
router.get('/org/:id', orgControll.getOrg);
router.post('/org', orgControll.addOrg);
router.put('/org/:id', orgControll.updateOrg);
router.delete('/org/:id', orgControll.deleteOrg);


module.exports = {
    routes: router
}