const express = require('express');
const createCatalogs = require("../services/create-catalogs.service")
const { getAllCatalogs, getCatalogById } = require("../services/get-catalogs.service");

const router = express.Router()

//Post Method
router.post('/createCatalogs', async (req, res, next) => {
    const results = await createCatalogs(req, res, next);
    res.status(200).json({ data: results, message: "Get catalogs list successfully", status: 200 });
})

//Get all catalogs
router.get('/catalogs', async (req, res, next) => {
    const results = await getAllCatalogs(req, res, next);
    res.status(200).json({ data: results, message: "Get catalogs list successfully", status: 200 });
})

// get single catalog
router.get('/catalogs/:catalogId', async (req, res, next) => {
    const results = await getCatalogById(req, res, next);
    res.status(200).json({ data: results, message: "Get catalogs list successfully", status: 200 });
})


module.exports = router;