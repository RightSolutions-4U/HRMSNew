'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getOrgs = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Org');
        const orgsList = await pool.request().query(sqlQueries.orgslist);
        return orgsList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const getById = async(orgId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Org');
        const org = await pool.request()
                            .input('orgId', sql.Int, orgId)
                            .query(sqlQueries.orgbyId);
        return org.recordset;
    } catch (error) {
        return error.message;
    }
}

const creatOrg = async (orgdata) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Org');
        const insertOrg = await pool.request()
                            .input('orgTitle', sql.NVarChar(100), orgdata.orgTitle)
                            .input('orgDescription', sql.NVarChar(1500), orgdata.orgDescription)
                            .input('startDate', sql.Date, orgdata.startDate)
                            .input('endDate', sql.Date, orgdata.endDate)
                            .input('avenue', sql.NVarChar(200), orgdata.avenue)
                            .input('maxMembers', sql.Int, orgdata.maxMembers)
                            .query(sqlQueries.createOrg);                            
        return insertOrg.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateOrg = async (orgId, data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Org');
        const update = await pool.request()
                        .input('orgId', sql.Int, orgId)
                        .input('orgTitle', sql.NVarChar(100), data.orgTitle)
                        .input('orgDescription', sql.NVarChar(1500), data.orgDescription)
                        .input('startDate', sql.Date, data.startDate)
                        .input('endDate', sql.Date, data.endDate)
                        .input('avenue', sql.NVarChar(200), data.avenue)
                        .input('maxMembers', sql.Int, data.maxMembers)
                        .query(sqlQueries.updateOrg);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const deleteOrg = async (orgId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Org');
        const deleteOrg = await pool.request()
                            .input('orgId', sql.Int, orgId)
                            .query(sqlQueries.deleteOrg);
        return deleteOrg.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    getOrgs,
    getById,
    creatOrg,
    updateOrg,
    deleteOrg
}