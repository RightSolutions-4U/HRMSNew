'use strict';

const orgData = require('../data/Org');

const getAllOrgs = async (req, res, next) => {
    try {

        const orglist = await orgData.getOrgs();
        res.send(orglist);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getOrg = async (req, res, next) => {
    try {
        const orgId = req.params.id;
        const org = await orgData.getById(orgId);
        res.send(org);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const addOrg = async (req, res, next) => {
    try {
        const data = req.body;
        const insert = await orgData.createOrg(data);
        res.send(insert);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateOrg = async (req, res, next) => {
    try {
        const orgId =  req.params.id;
        const data = req.body;
        const updated = await orgData.updateOrg(orgId, data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteOrg = async (req, res, next) => {
    try {
        const orgId = req.params.id;
        const deletedOrg = await eventData.deleteOrg(orgId);
        res.send(deletedOrg);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getAllOrgs,
    getOrg,
    addOrg,
    updateOrg,
    deleteOrg
}